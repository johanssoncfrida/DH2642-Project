import React, { Component } from 'react'
import HighScore from './highScore'
import ProjectList from './projectList'
import { connect } from 'react-redux'

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
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(HomePage)