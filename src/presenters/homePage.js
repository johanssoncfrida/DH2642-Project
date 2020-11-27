import React, { Component } from "react";
import HighScore from "./highScore";
import ProjectList from "./projectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class HomePage extends Component {
  render() {
    //console.log(this.props);
    const { projects } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <HighScore />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects,
  };
};

export default compose(
  firestoreConnect(() => ["projects"]),
  connect(mapStateToProps)
)(HomePage);
