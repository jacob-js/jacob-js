import React from 'react';
import js from '../Assets/icons/javascript.png';
import nodejs from '../Assets/icons/nodejs.png';
import vuejs from '../Assets/icons/vuejs.png';
import react from '../Assets/icons/react.png';
import typescript from '../Assets/icons/typescript.png';
import python from '../Assets/icons/python.png';
import django from '../Assets/icons/django.png';
import scrapy from '../Assets/icons/scrapy.png';
import docker from '../Assets/icons/docker.png';
import firebase from '../Assets/icons/firebase.png';
import mongodb from '../Assets/icons/mongodb.png';
import postgres from '../Assets/icons/postgres.svg';

const tools = [
    { name: 'javascript', icon: js }, { name: 'nodejs', icon: nodejs },
    { name: 'reactjs', icon: react }, {name:'vuejs', icon:vuejs}, {name:'typescript', icon:typescript},
    {name: 'python', icon: python}, {name: 'django', icon: django}, {name: 'scrapy', icon: scrapy},
    {name: 'docker', icon: docker}, {name: 'firebase', icon: firebase}, {name: 'mongodb', icon: mongodb},
    {name: 'postgres', icon:postgres}
];

function Skills() {
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