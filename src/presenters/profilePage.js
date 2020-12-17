import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ProfilePageView from "../views/profilePageView";
import multicolorCat from "../img/multicolorCat.jpg";
import redCat from "../img/redCat.jpg";
import greyCat from "../img/catprofilepicture.jpeg";
import LoadingView from "../views/loadingView";
import { updateUsername, updateFavoriteActor } from "../services/firebase";
import M from "materialize-css";

class ProfilePage extends Component {
  state = {
    userName: this.props.userName,
    favoriteActor: this.props.favoriteActor,
  };
  componentDidMount() {
    const options = { startingTop: "20%" };
    M.Modal.init(this.modal, options);
  }
  handleUsernameChange = (e) => {
    if (e.target.value !== "") {
      this.setState({
        userName: e.target.value,
      });
    }
    return;
  };

  handleFavoriteActorChange = (e) => {
    if (e.target.value !== "") {
      this.setState({
        favoriteActor: e.target.value,
      });
    }
    return;
  };

  handleSubmit = (e) => {
    const { userScores } = this.props;
    const userName = this.state.userName;
    const favActor = this.state.favoriteActor;
    updateFavoriteActor(this.props.auth.uid, favActor);
    updateUsername(userScores, this.props.auth.uid, userName);
  };
  setModal = (m) => {
    this.modal = m;
  };

  render() {
    const { auth, profile, highscorelist } = this.props;

    let image;
    if (profile.gender === "female") {
      image = greyCat;
    } else if (profile.gender === "male") {
      image = redCat;
    } else {
      image = multicolorCat;
    }

    if (!auth.uid) {
      return <Redirect to="/" />;
    }

    if (highscorelist) {
      highscorelist.sort(compare);
      return ProfilePageView({
        profile,
        highscorelist,
        image,
        handleUsernameChange: this.handleUsernameChange,
        handleFavoriteActorChange: this.handleFavoriteActorChange,
        setModal: this.setModal,
        handleSubmit: this.handleSubmit,
      });
    }

    return <LoadingView />;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    highscorelist: state.firebase.profile.highscores,
    userScores: state.firestore.ordered.userScores,
  };
};
function compare(a, b) {
  if (a.createdAt < b.createdAt) {
    return 1;
  }
  if (a.createdAt > b.createdAt) {
    return -1;
  }
  return 0;
}
export default connect(mapStateToProps)(ProfilePage);
