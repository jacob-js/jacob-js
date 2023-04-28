import React, { useState } from 'react'
import useFetchData from '../hooks/fetchData'
import ProjectDetail from './projectDetail';
import { Spin } from 'antd';

function Portfolio() {
    const { data: projects, loading } = useFetchData('/projects');
    const [toShow, setToShow] = useState({});
    const [isShown, setIsShown] = useState(false);

  return (
    <div className='portfolio min-h-screen flex flex-col justify-center items-center' id='portfolio'>
        <div className="header">
            <div className="divider">
                <div className="line l"></div>
                What I've realized <div className="line"></div>
            </div>
            <div className="title">My porfolio</div>
        </div>
        <div className="projects">
            {
                loading ?
                <Spin />:
                projects.map((project, index) => (
                    <div className="project" key={index} data-aos="fade-up" onClick={() =>{
                        setIsShown(true);
                        setToShow(project);
                    }}>
                        <img src={project.cover} alt="" />
                        <div className="bg"></div>
                        <div className="info">
                            <div className="name">{project.title}</div>
                            <div className="type">{project.caption}</div>
                        </div>
                    </div>
                ))
            }
        </div>
        <ProjectDetail project={toShow} isShown={isShown} setIsShown={setIsShown} />
    </div>
  )
}

export default Portfolio