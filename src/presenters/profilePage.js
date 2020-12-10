import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ProfilePageView from "../views/profilePageView";
import multicolorCat from "../img/multicolorCat.jpg";
import redCat from "../img/redCat.jpg";
import greyCat from "../img/catprofilepicture.jpeg";
import LoadingView from "../views/loadingView";

class ProfilePage extends Component {
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
      return ProfilePageView({ profile, highscorelist, image });
    }

    return <LoadingView />;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    highscorelist: state.firebase.profile.highscores,
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
