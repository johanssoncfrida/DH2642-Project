import AfterQuizView from "../views/afterQuizView";
import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { resetQuestion } from "../store/actions/quizActions";
import { resetScore } from "../store/actions/quizActions";
import { startTime } from "../store/actions/quizActions";
import M from "materialize-css";

class AfterQuiz extends Component {
  componentDidMount() {
    const options = { startingTop: "20%" };
    M.Modal.init(this.modal, options);
  }

  handleStart = () => {
    this.props.resetQuestion();
    this.props.resetScore();
    this.props.startTime(Date.now());
  };

  setModal = (m) => {
    this.modal = m;
  };

  render() {
    const { auth } = this.props;
    const { score } = this.props;
    const { profile } = this.props;
    const { totalTime } = this.props;
    const { questions } = this.props;
    const username = profile.username;

    if (!auth.uid) {
      return <Redirect to="/" />;
    }
    return AfterQuizView({
      score: score,
      username: username,
      handleStart: this.handleStart,
      totalTime: totalTime,
      setModal: this.setModal,
      questions: questions,
    });
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    score: state.quiz.currentScore,
    totalTime: state.quiz.totalTime,
    questions: state.quiz.questions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetQuestion: () => dispatch(resetQuestion()),
    resetScore: () => dispatch(resetScore()),
    startTime: (time) => dispatch(startTime(time)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AfterQuiz);
