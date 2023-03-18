import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Projects from '../../Components/Projects/Projects'
import './ProjectLists.scss'

const ProjectLists = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('https://5b8ms9v30f.execute-api.ap-south-1.amazonaws.com/dev/projects/get')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div className="project-lists">
      <div className="wrapper">
        <div className="project-lists-header">
          <span className='header'>Create.Learn.Inspire</span>
        </div>
        <div className="project-lists-desc">
          <span className='desc'>Get all my work details about the finished and ongoing projects Most of the projects are based on ReactJS, ExpressJS, AWS etc.</span>
          <span className='desc'>Click on any project to see the live demo.</span>
        </div>
        <div className="project-list">
          {projects.map(project => (
            <Projects
              key={project.id}
              title={project.title}
              imgUrl={project.imgUrl}
              demoUrl={project.demoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectLists