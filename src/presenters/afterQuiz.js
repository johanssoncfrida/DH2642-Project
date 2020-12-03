import AfterQuizView from "../views/afterQuizView";
import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { resetQuestion } from "../store/actions/quizActions";
import { resetScore } from "../store/actions/quizActions";

class AfterQuiz extends Component {

  handleStart = () => {
    this.props.resetQuestion();
    this.props.resetScore();
  };

  render() {
    const { auth } = this.props;
    const { score } = this.props;
    const { profile } = this.props;
    const { totalTime } = this.props;
    const username = profile.username;

    if (!auth.uid) {
      return <Redirect to="/" />;
    }
    return AfterQuizView(score, username, this.handleStart, totalTime);
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    score: state.quiz.currentScore,
    totalTime: state.quiz.totalTime,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetQuestion: () => dispatch(resetQuestion()),
    resetScore: () => dispatch(resetScore()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AfterQuiz);
