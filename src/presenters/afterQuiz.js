import AfterQuizView from "../views/afterQuizView";
import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class AfterQuiz extends Component {
  render() {
    const { auth } = this.props;
    const { score } = this.props;
    const { profile } = this.props;
    const username = profile.username;

    if (!auth.uid) {
      return <Redirect to="/" />;
    }
    return AfterQuizView(score, username);
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    score: state.quiz.currentScore,
  };
};

export default connect(mapStateToProps)(AfterQuiz);
