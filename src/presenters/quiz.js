import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import QuizView from "../views/quizView";
import LoadingView from "../views/loadingView";
import { nextQuestion } from "../store/actions/quizActions";
import { updateScore } from "../store/actions/quizActions";
import { totalTime } from "../store/actions/quizActions";
import { saveScore } from "../store/actions/quizActions";
import { saveQuestions } from "../store/actions/quizActions";
import { startTime } from "../store/actions/quizActions";
import {
  checkYearDuplicates,
  checkAllYearDuplicates,
  checkDirDuplicates,
  checkAllDirDuplicates,
  checkActDuplicates,
  checkAllActDuplicates,
  shuffleArray,
} from "../quizHelper";

class Quiz extends Component {
  state = {
    topListData: [],
    questions: [],
    error: null,
  };

  componentDidMount() {
    fetch("https://imdb-api.com/API/Top250Movies/k_s58nmnri")
      .then((response) => response.json())
      .then((data) => this.shuffleAndSet(data.items))
      .catch((err) =>
        this.setState({
          error: err,
        })
      );
  }

  shuffleAndSet(array) {
    let arr = shuffleArray(array);
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
                  answerText:
                    "" +
                    checkYearDuplicates({
                      correctAnswer: this.state.topListData[0].year,
                      array: this.state.topListData,
                    }),
                  isCorrect: false,
                  id: 2,
                },
                {
                  answerText:
                    "" +
                    checkAllYearDuplicates({
                      correctAnswer: this.state.topListData[0].year,
                      array: this.state.topListData,
                    }),
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
                    "" +
                    checkDirDuplicates({
                      correctAnswer: this.state.topListData[1].crew.split(
                        ","
                      )[0],
                      array: this.state.topListData,
                    }),
                  isCorrect: false,
                  id: 2,
                },
                {
                  answerText:
                    "" +
                    checkAllDirDuplicates({
                      correctAnswer: this.state.topListData[1].crew.split(
                        ","
                      )[0],
                      array: this.state.topListData,
                    }),
                  isCorrect: false,
                  id: 3,
                },
              ],
            },
            {
              questionText:
                "Who is a main actor in " +
                this.state.topListData[2].title +
                "?",
              questionAnswer: "" + this.state.topListData[2].crew.split(",")[1],
              answerOptions: [
                {
                  answerText: "" + this.state.topListData[2].crew.split(",")[1],
                  isCorrect: true,
                  id: 1,
                },
                {
                  answerText:
                    "" +
                    checkActDuplicates({
                      correctAnswer: this.state.topListData[2].crew.split(
                        ","
                      )[1],
                      array: this.state.topListData,
                    }),
                  isCorrect: false,
                  id: 2,
                },
                {
                  answerText:
                    "" +
                    checkAllActDuplicates({
                      correctAnswer: this.state.topListData[2].crew.split(
                        ","
                      )[1],
                      array: this.state.topListData,
                    }),
                  isCorrect: false,
                  id: 3,
                },
              ],
            },
          ],
        },
        this.fetchPlotQuestion
      );
    }
  }

  fetchPlotQuestion() {
    fetch(
      "https://imdb-api.com/en/API/Title/k_s58nmnri/" +
        this.state.topListData[3].id
    )
      .then((response) => response.json())
      .then((data) => this.setPlotQuestion(data))
      .catch((err) =>
        this.setState({
          error: err,
        })
      );
  }

  setPlotQuestion(data) {
    this.setState(
      (prevState) => ({
        questions: [
          ...prevState.questions,
          {
            questionText: "What movie has this plot?",
            extra: "" + data.plot,
            questionAnswer: "" + data.title,
            answerOptions: [
              {
                answerText: "" + data.title,
                isCorrect: true,
                id: 1,
              },
              {
                answerText: "" + this.state.topListData[190].title,
                isCorrect: false,
                id: 2,
              },
              {
                answerText: "" + this.state.topListData[191].title,
                isCorrect: false,
                id: 3,
              },
            ],
          },
        ],
      }),
      this.fetchTaglineQuestion
    );
  }

  #index = 4;

  fetchTaglineQuestion() {
    fetch(
      "https://imdb-api.com/en/API/Title/k_s58nmnri/" +
        this.state.topListData[this.#index++].id
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.tagline === "") {
          this.fetchTaglineQuestion();
        } else {
          this.setTaglineQuestion(data);
        }
      })
      .catch((err) =>
        this.setState({
          error: err,
        })
      );
  }

  setTaglineQuestion(data) {
    this.setState(
      (prevState) => ({
        questions: [
          ...prevState.questions,
          {
            questionText: "What movie has this tagline?",
            extra: "" + data.tagline,
            questionAnswer: "" + data.title,
            answerOptions: [
              {
                answerText: "" + data.title,
                isCorrect: true,
                id: 1,
              },
              {
                answerText: "" + this.state.topListData[180].title,
                isCorrect: false,
                id: 2,
              },
              {
                answerText: "" + this.state.topListData[181].title,
                isCorrect: false,
                id: 3,
              },
            ],
          },
        ],
      }),
      this.shuffleQuestions
    );
  }

  shuffleQuestions() {
    this.setState(
      { questions: shuffleArray(this.state.questions) },
      this.shuffleAnswerOptions
    );
  }

  shuffleAnswerOptions() {
    this.setState((state) => ({
      questions: state.questions.map((elem) =>
        Object.assign(elem, {
          answerOptions: shuffleArray(elem.answerOptions),
        })
      ),
    }));
    this.props.saveQuestions(this.state.questions);
    this.props.saveStartTime(Date.now());
  }

  handleClick = (e) => {
    if (e === true) {
      this.props.updateScore(this.props.score);
    }

    if (this.props.questionNr === 4) {
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
    if (this.state.error) {
      return (
        <div>
          <br />
          <br />
          <br />
          <br />
          <h3 className="center white-text">
            Unfortunately something went wrong.
          </h3>
        </div>
      );
    }
    if (questionNr < 5) {
      if (this.state.topListData.length && this.state.questions[4]) {
        return (
          <QuizView
            question={this.state.questions[questionNr]}
            questionNr={questionNr}
            handleClick={this.handleClick}
          />
        );
      } else {
        return <LoadingView />;
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
    saveQuestions: (questions) => dispatch(saveQuestions(questions)),
    saveStartTime: (time) => dispatch(startTime(time)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
