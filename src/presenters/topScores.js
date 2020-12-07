import React, { Component } from "react";
import TopScoresView from "../views/topScoresView";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class TopScores extends Component {
  render() {
    const { userScores } = this.props;

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
  //console.log(state);
  return {
    userScores: state.firestore.ordered.userScores,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "userScores", orderBy: ["quizScore", "desc"] },
  ])
)(TopScores);
