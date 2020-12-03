import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import HomePageView from "../views/homePageView";

class HomePage extends Component {
  render() {
    const { auth } = this.props;

    if (auth.uid) {
      return <Redirect to="/beforequiz" />;
    }

    return HomePageView();
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(HomePage);
