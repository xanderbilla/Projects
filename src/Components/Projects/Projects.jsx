import React from 'react'
import './Projects.scss'

const Projects = (props) => {
  return (
    <a href={props.demoUrl}>
      <div class="card">
        <img src={props.imgUrl} alt="" />
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
    </a>

  )
}

export default Projects;