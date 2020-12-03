import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { resetQuestion } from "../store/actions/quizActions";
import { resetScore } from "../store/actions/quizActions";

class BeforeQuiz extends Component {

  handleStart = () => {
    this.props.resetQuestion();
    this.props.resetScore();
  }

  render() {
    const { auth } = this.props;

    if (!auth.uid) {
      return <Redirect to="/" />;
    }

    return (
      <div className="beforeQuiz container">
        <div className="row">
          <div className="col s3">
            <h3 className="orange-text">Highscore</h3>
          </div>

          <div className="col s6">
            <br />
            <br />
            <h1 className="header center orange-text">Welcome!</h1>
            <br />
            <br />
            <div className="row center">
              <NavLink to="/quiz" className="btn btn-large orange hoverable pulse" onClick={ () => this.handleStart()}>Start Quiz!</NavLink>
            </div>
            <div className="row center">
              <NavLink to="/" className="btn btn-small waves-effect waves-light orange">Instructions</NavLink>
            </div>
          </div>

          <div className="col s3">
            
          </div>

        </div>
      </div>
    );
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
