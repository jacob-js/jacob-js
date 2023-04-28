import React from 'react';
import useFetchData from '../hooks/fetchData';
import { Spin } from 'antd';

function Skills() {
    const { data: tools, loading } = useFetchData('/projects/skills');
  return (
    <div className='skills min-h-screen flex flex-col justify-center items-center' id='skills'>
        <div className="header">
            <div className="divider">
                <div className="line l"></div>
                The tools I use <div className='line'></div>
            </div>
            <div className="title">My skills</div>
        </div>
        <div className="tools">
            {
                loading ?
                <Spin />:
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