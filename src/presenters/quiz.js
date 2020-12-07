import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import QuizView from "../views/quizView";
import { nextQuestion } from "../store/actions/quizActions";
import { updateScore } from "../store/actions/quizActions";
import { totalTime } from "../store/actions/quizActions";
import { saveScore } from "../store/actions/quizActions";

class Quiz extends Component {
  state = {
    topListData: [],
    questions: [],
  };

  componentDidMount() {
    fetch("http://imdb-api.com/API/Top250Movies/k_s58nmnri")
      .then((response) => response.json())
      .then((data) => this.shuffleAndSet(data.items))
      .catch((err) => console.log(err));
  }

  shuffleAndSet(array) {
    let arr = this.shuffleArray(array);
    this.setState({ topListData: arr }, this.setQuestions);
  }

  setQuestions() {
    if (this.state.topListData[0]) {
      this.setState(
        {
          questions: [
            {
              questionText:
                "What's the premiere year of " +
                this.state.topListData[0].title +
                "?",
              questionAnswer: "" + this.state.topListData[0].year,
              answerOptions: [
                {
                  answerText: "" + this.state.topListData[0].year,
                  isCorrect: true,
                  id: 1,
                },
                {
                  answerText: "" + this.state.topListData[230].year,
                  isCorrect: false,
                  id: 2,
                },
                {
                  answerText: "" + this.state.topListData[231].year,
                  isCorrect: false,
                  id: 3,
                },
              ],
            },
            {
              questionText:
                "Who is the director for " +
                this.state.topListData[1].title +
                "?",
              questionAnswer: "" + this.state.topListData[1].crew.split(",")[0],
              answerOptions: [
                {
                  answerText: "" + this.state.topListData[1].crew.split(",")[0],
                  isCorrect: true,
                  id: 1,
                },
                {
                  answerText:
                    "" + this.state.topListData[220].crew.split(",")[0],
                  isCorrect: false,
                  id: 2,
                },
                {
                  answerText:
                    "" + this.state.topListData[221].crew.split(",")[0],
                  isCorrect: false,
                  id: 3,
                },
              ],
            },
            {
              questionText:
                "What movie has rank " + this.state.topListData[2].rank + "?",
              questionAnswer: "" + this.state.topListData[2].title,
              answerOptions: [
                {
                  answerText: "" + this.state.topListData[2].title,
                  isCorrect: true,
                  id: 1,
                },
                {
                  answerText: "" + this.state.topListData[210].title,
                  isCorrect: false,
                  id: 2,
                },
                {
                  answerText: "" + this.state.topListData[211].title,
                  isCorrect: false,
                  id: 3,
                },
              ],
            },
            {
              questionText:
                "Who is a main actor in " +
                this.state.topListData[3].title +
                "?",
              questionAnswer: "" + this.state.topListData[3].crew.split(",")[1],
              answerOptions: [
                {
                  answerText: "" + this.state.topListData[3].crew.split(",")[1],
                  isCorrect: true,
                  id: 1,
                },
                {
                  answerText:
                    "" + this.state.topListData[200].crew.split(",")[1],
                  isCorrect: false,
                  id: 2,
                },
                {
                  answerText:
                    "" + this.state.topListData[201].crew.split(",")[1],
                  isCorrect: false,
                  id: 3,
                },
              ],
            },
          ],
        },
        this.shuffleQuestions
      );
    }
  }

  shuffleQuestions() {
    this.setState(
      { questions: this.shuffleArray(this.state.questions) },
      this.shuffleAnswerOptions
    );
  }

  shuffleAnswerOptions() {
    console.log("In shuffle answer options");

    this.setState((state) => ({
      questions: state.questions.map((elem) =>
        Object.assign(elem, {
          answerOptions: this.shuffleArray(elem.answerOptions),
        })
      ),
    }));
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));

      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  handleClick = (e) => {
    if (e === true) {
      this.props.updateScore(this.props.score);
    }

    if (this.props.questionNr === 3) {
      const totalTime = (Date.now() - this.props.startTime) / 1000;

      this.props.saveScore(totalTime);
      this.props.totalTime(totalTime);
    }
    this.props.nextQuestion(this.props.questionNr);
  };

  render() {
    const { auth } = this.props;
    const { questionNr } = this.props;

    if (!auth.uid) {
      return <Redirect to="/" />;
    }

    if (questionNr < 4) {
      if (this.state.topListData.length && this.state.questions[0]) {
        return (
          <QuizView
            question={this.state.questions[questionNr]}
            questionNr={questionNr}
            handleClick={this.handleClick}
          />
        );
      } else {
        return (
          <div className="center">
            <div className="preloader-wrapper big active">
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
    } else {
      return <Redirect to="/afterQuiz" />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
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
