import React from 'react'
import useFetchData from '../hooks/fetchData'

function Portfolio() {
    const { data: projects, loading } = useFetchData('/projects')

  return (
    <div className='portfolio' id='portfolio'>
        <div className="header">
            <div className="divider">
                <div className="line l"></div>
                What I've realized <div className="line"></div>
            </div>
            <div className="title">My porfolio</div>
        </div>
        <div className="projects">
            {
                projects.map((project, index) => (
                    <div className="project" key={index} data-aos="fade-up">
                        <img src={project.cover} alt="" />
                        <div className="bg"></div>
                        <div className="info">
                            <div className="name">{project.title}</div>
                            <div className="type">{project.type}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Portfolio