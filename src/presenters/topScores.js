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
      items = temp.slice(0, 5);
      return TopScoresView({ items });
    }

    return (
      <div className="center">
        <div className="preloader-wrapper active">
          <div className="spinner-layer spinner-red-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
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
