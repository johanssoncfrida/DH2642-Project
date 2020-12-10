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
import { updateHighscoreFirebase } from "../services/firebase";
import { startTime } from "../store/actions/quizActions";

class Quiz extends Component {
  state = {
    topListData: [],
    questions: [],
  };

  componentDidMount() {
    fetch("https://imdb-api.com/API/Top250Movies/k_s58nmnri")
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
                  answerText:
                    "" +
                    this.checkYearDuplicates({
                      correctAnswer: this.state.topListData[0].year,
                      array: this.state.topListData,
                    }),
                  isCorrect: false,
                  id: 2,
                },
                {
                  answerText:
                    "" +
                    this.checkAllYearDuplicates({
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
                    this.checkDirDuplicates({
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
                    this.checkAllDirDuplicates({
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
                    this.checkActDuplicates({
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
                    this.checkAllActDuplicates({
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

  #idxFirstWrongYearOpt = 240;
  checkYearDuplicates({ correctAnswer, array }) {
    let firstWrongOpt = array[this.#idxFirstWrongYearOpt].year;

    while (firstWrongOpt === correctAnswer) {
      this.#idxFirstWrongYearOpt = this.#idxFirstWrongYearOpt - 1;
      firstWrongOpt = array[this.#idxFirstWrongYearOpt].year;
    }
    return firstWrongOpt;
  }

  checkAllYearDuplicates({ correctAnswer, array }) {
    let firstWrongOpt = array[this.#idxFirstWrongYearOpt].year;
    let scndWrongOpt = array[this.#idxFirstWrongYearOpt].year;

    while (scndWrongOpt === correctAnswer || scndWrongOpt === firstWrongOpt) {
      this.#idxFirstWrongYearOpt = this.#idxFirstWrongYearOpt - 1;
      scndWrongOpt = array[this.#idxFirstWrongYearOpt].year;
    }
    return scndWrongOpt;
  }

  #idxFirstWrongDirOpt = 230;
  checkDirDuplicates({ correctAnswer, array }) {
    let firstWrongOpt = array[this.#idxFirstWrongDirOpt].crew.split(",")[0];

    while (firstWrongOpt === correctAnswer) {
      this.#idxFirstWrongDirOpt = this.#idxFirstWrongDirOpt - 1;
      firstWrongOpt = array[this.#idxFirstWrongDirOpt].crew.split(",")[0];
    }
    return firstWrongOpt;
  }

  checkAllDirDuplicates({ correctAnswer, array }) {
    let firstWrongOpt = array[this.#idxFirstWrongDirOpt].crew.split(",")[0];
    let scndWrongOpt = array[this.#idxFirstWrongDirOpt].crew.split(",")[0];

    while (scndWrongOpt === correctAnswer || scndWrongOpt === firstWrongOpt) {
      this.#idxFirstWrongDirOpt = this.#idxFirstWrongDirOpt - 1;
      scndWrongOpt = array[this.#idxFirstWrongDirOpt].crew.split(",")[0];
    }
    return scndWrongOpt;
  }

  #idxFirstWrongActOpt = 220;
  checkActDuplicates({ correctAnswer, array }) {
    let firstWrongOpt = array[this.#idxFirstWrongActOpt].crew.split(",")[1];

    while (firstWrongOpt === correctAnswer) {
      this.#idxFirstWrongActOpt = this.#idxFirstWrongActOpt - 1;
      firstWrongOpt = array[this.#idxFirstWrongActOpt].crew.split(",")[1];
    }
    return firstWrongOpt;
  }

  checkAllActDuplicates({ correctAnswer, array }) {
    let firstWrongOpt = array[this.#idxFirstWrongActOpt].crew.split(",")[1];
    let scndWrongOpt = array[this.#idxFirstWrongActOpt].crew.split(",")[1];

    while (scndWrongOpt === correctAnswer || scndWrongOpt === firstWrongOpt) {
      this.#idxFirstWrongActOpt = this.#idxFirstWrongActOpt - 1;
      scndWrongOpt = array[this.#idxFirstWrongActOpt].crew.split(",")[1];
    }
    return scndWrongOpt;
  }

  fetchPlotQuestion() {
    fetch(
      "https://imdb-api.com/en/API/Title/k_s58nmnri/" +
        this.state.topListData[3].id
    )
      .then((response) => response.json())
      .then((data) => this.setPlotQuestion(data))
      .catch((err) => console.log(err));
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
      .catch((err) => console.log(err));
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
      { questions: this.shuffleArray(this.state.questions) },
      this.shuffleAnswerOptions
    );
  }

  shuffleAnswerOptions() {
    this.setState((state) => ({
      questions: state.questions.map((elem) =>
        Object.assign(elem, {
          answerOptions: this.shuffleArray(elem.answerOptions),
        })
      ),
    }));
    this.props.saveQuestions(this.state.questions);
    this.props.saveStartTime(Date.now());
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate random number
      let j = Math.floor(Math.random() * (i + 1));

      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  handleClick = (e) => {
    if (e === true) {
      this.props.updateScore(this.props.score);
    }

    if (this.props.questionNr === 4) {
      const totalTime = (Date.now() - this.props.startTime) / 1000;
      this.props.saveScore(totalTime);
      this.props.totalTime(totalTime);

      const { score, userid } = this.props;
      updateHighscoreFirebase(score, userid, totalTime);
    }
    this.props.nextQuestion(this.props.questionNr);
  };

  render() {
    const { auth } = this.props;
    const { questionNr } = this.props;

    if (!auth.uid) {
      return <Redirect to="/" />;
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
    userid: state.firebase.auth.uid,
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
