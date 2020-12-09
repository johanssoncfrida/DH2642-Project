import React, { Component } from "react";
import HighScoreView from "../views/highScoreView";
import LoadingView from "../views/loadingView";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class HighScore extends Component {
  render() {
    const { auth, userScores } = this.props;

    if (!auth.uid) {
      return <Redirect to="/" />;
    }

    let items;
    if (userScores) {
      let temp = userScores.slice(0);
      temp.sort((a, b) => b.quizScore - a.quizScore || a.time - b.time);
      items = temp.slice(0, 20);
      return HighScoreView({ items });
    }

    return <LoadingView />;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    userScores: state.firestore.ordered.userScores,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "userScores", orderBy: ["quizScore", "desc"] },
  ])
)(HighScore);
