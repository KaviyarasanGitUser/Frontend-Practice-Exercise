import React from 'react'
import "./ProjectCard.css"

const ProjectCard = ({project}) => {
  return (
    <div className='project-menu'>
        <p className='icon' style={{backgroundColor:project.background}}>{project.icon}</p>
        <p className="project-status">{project.projectStatus}</p>
        <p className='project-count'>{project.numberOfProject}</p>
    </div>
  )
}

export default ProjectCard