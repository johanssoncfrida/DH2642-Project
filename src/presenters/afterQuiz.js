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

  goodScore = [
    "Good job " + this.props.profile.username + "! Gollum says that you are his preeeecious!",
    "Amazing work " + this.props.profile.username + "! Meryl Streep thinks that you are fantastic!",
    "Truly with you " + this.props.profile.username + " the force is! Proud of you Yoda is.",
    "Marvelous " + this.props.profile.username + "! Bond. James Bond congratulates you.",
  ]

  badScore = [
    "Oh no " + this.props.profile.username + "... Dory says just keep swimming!",
    "Houson we a problem... " + this.props.profile.username + " did not do great.",
    "Hasta La Vista, " + this.props.profile.username + "! Please do better!",
  ]


  render() {
    const { auth } = this.props;
    const { score } = this.props;
    const { totalTime } = this.props;
    const { questions } = this.props;

    if (!auth.uid) {
      return <Redirect to="/" />;
    }

    let quizMessage = "";
    if (this.props.score > 2) {
      quizMessage = this.goodScore[Math.floor(Math.random() * this.goodScore.length)]
    }
    else {
      quizMessage = this.badScore[Math.floor(Math.random() * this.badScore.length)]
    }

    return AfterQuizView({
      score: score,
      handleStart: this.handleStart,
      totalTime: totalTime,
      setModal: this.setModal,
      questions: questions,
      message: quizMessage,
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
