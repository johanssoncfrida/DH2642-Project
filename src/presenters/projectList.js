import React from 'react'

const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
            { projects && projects.map(project => {
                return (
                    <div className="card z-depth-0 project-summary" key={project.id}>
                <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                    <p>Posted by the Net Ninja</p>
                    <p className="grey-text">3rd of September, 2AM</p>
                </div>
            </div>
                )
            })}

        </div>
    )
}

export default ProjectList