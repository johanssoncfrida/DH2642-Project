import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AfterQuizView from "../views/afterQuizView";

class AfterQuiz extends Component {
  render() {
    const { auth } = this.props;
    const { score } = this.props;

    if (!auth.uid) {
      return <Redirect to="/" />;
    }

    return (
        <AfterQuizView score={score}/>
    )
    
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    score: state.quiz.currentScore,
  };
};

export default connect(mapStateToProps)(AfterQuiz);