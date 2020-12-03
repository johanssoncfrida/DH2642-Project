import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ProfilePageView from "../views/profilePageView";

class ProfilePage extends Component {
  render() {
    //console.log(this.props);
    const highscores = [
      {
        score: 5,
        time: "3m 15s",
      },
      {
        score: 5,
        time: "10m 12s",
      },
      {
        score: 3,
        time: "4m 6s",
      },
    ];
    const { auth, profile } = this.props;

    if (!auth.uid) {
      return <Redirect to="/" />;
    }

    return ProfilePageView({ profile, highscores });
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(ProfilePage);
