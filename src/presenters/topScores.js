import React, { Component } from "react";
import TopScoresView from "../views/topScoresView";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class TopScores extends Component {
  render() {
    const { auth, userScores } = this.props;

    if (!auth.uid) {
      return <Redirect to="/" />;
    }

    let items;
    if (userScores) {
      let temp = userScores.slice(0);
      temp.sort((a, b) => b.quizScore - a.quizScore || a.time - b.time);
      console.log(userScores);
      items = temp.slice(0, 20);
      return TopScoresView({ items });
    }

    return <div>No highscores</div>;
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
)(TopScores);
