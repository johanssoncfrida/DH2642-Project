import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import QuizView from "../views/quizView";
import { nextQuestion } from "../store/actions/quizActions";
import { updateScore } from "../store/actions/quizActions";
import { totalTime } from "../store/actions/quizActions";
import { saveScore } from "../store/actions/quizActions";

class Quiz extends Component {
  handleClick = (e) => {
    //e.preventDefault();
    if (e === true) {
      this.props.updateScore(this.props.score);
    }

    if (this.props.questionNr === 2) {
      //this.props.endTime(Date.now());
      const totalTime = (Date.now() - this.props.startTime) / 1000;

      this.props.saveScore(totalTime);
      this.props.totalTime(totalTime);
    }
    this.props.nextQuestion(this.props.questionNr);
  };

  render() {
    const { auth } = this.props;
    const { questions } = this.props; // grabs the question-object of the props
    const { questionNr } = this.props;

    if (!auth.uid) {
      return <Redirect to="/" />;
    }

    if (questionNr < 3) {
      return (
        <QuizView
          question={questions[questionNr]}
          questionNr={questionNr}
          handleClick={this.handleClick}
        />
      );
    } else {
      return <Redirect to="/afterQuiz" />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    questions: state.quiz.questions,
    questionNr: state.quiz.currentQuestionNr,
    score: state.quiz.currentScore,
    startTime: state.quiz.startTime,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    nextQuestion: (questionNr) => dispatch(nextQuestion(questionNr)),
    updateScore: (score) => dispatch(updateScore(score)),
    totalTime: (time) => dispatch(totalTime(time)),
    saveScore: (totalTime) => dispatch(saveScore(totalTime)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
