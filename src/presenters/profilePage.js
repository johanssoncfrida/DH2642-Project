import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ProfilePageView from "../views/profilePageView";
import multicolorCat from "../img/multicolorCat.jpg";
import redCat from "../img/redCat.jpg";
import greyCat from "../img/catprofilepicture.jpeg";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import LoadingView from "../views/loadingView";

class ProfilePage extends Component {
  render() {
    //console.log(this.props);
    const { auth, profile } = this.props;
    const { userScores } = this.props;

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

    if (userScores) {
      console.log(userScores);
      console.log(auth.uid);
      const result = userScores.filter((score) => score.userId === auth.uid);
      console.log(result);
      result.sort((a, b) => b.quizScore - a.quizScore || a.time - b.time);
      const highscores = result.slice(0, 3);
      return ProfilePageView({ profile, highscores, image });
    }

    return <LoadingView />;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    userScores: state.firestore.ordered.userScores,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "userScores", orderBy: ["createdAt", "asc"] },
  ])
)(ProfilePage);
