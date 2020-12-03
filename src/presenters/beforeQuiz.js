import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import M from "materialize-css";
import BeforeQuizView from "../views/beforeQuizView";
import { resetQuestion } from "../store/actions/quizActions";
import { resetScore } from "../store/actions/quizActions";

class BeforeQuiz extends Component {
  componentDidMount() {
    const options = { startingTop: "20%" };
    M.Modal.init(this.modal, options);
  }

  handleStart = () => {
    this.props.resetQuestion();
    this.props.resetScore();
  };

  setModal = (m) => {
    this.modal = m;
  };

  render() {
    //console.log(this.props);
    const { auth } = this.props;

    if (!auth.uid) {
      return <Redirect to="/" />;
    }

    return BeforeQuizView({
      setModal: this.setModal,
      handleStart: this.handleStart,
    });
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetQuestion: () => dispatch(resetQuestion()),
    resetScore: () => dispatch(resetScore()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BeforeQuiz);
