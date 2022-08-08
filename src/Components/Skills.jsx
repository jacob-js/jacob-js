import React from 'react';
import useFetchData from '../hooks/fetchData';

function Skills() {
    const { data: tools } = useFetchData('/projects/skills');
  return (
    <div className='skills' id='skills'>
        <div className="header">
            <div className="divider">
                <div className="line l"></div>
                The tools I use <div className='line'></div>
            </div>
            <div className="title">My skills</div>
        </div>
        <div className="tools">
            {
                tools.map((tool, index) =>(
                    <div className="tool" key={index} data-aos='fade-up'>
                        <img src={tool.icon} alt="" />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Skills