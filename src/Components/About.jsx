import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider } from 'antd';
import React from 'react'
import img from '/about.jpg';

export default function About() {
  return (
    <div className='about' id='about'>
        <div className="card" data-aos='fade-up'>
            <img src={img} alt="" />
        </div>
        <div className="text" data-aos='fade-right'>
            <div className='divider'>Who I am <div className='line'></div></div>
            <div className="title">About me</div>
            <p>
            I'm a full-stack developer with 2 years of experience in the tech area, I
            code especially with Javascript and Python, using different frameworks
            and libraries of these languages to build robust and scalable software
            solutions.
            I work hard towards achieving the technical goals of the project I'm
            working on. The technologies I mainly use to accomplish this are React,
            React Native, Next.js, Node.js & Express.js, and Django.
            I also have solid problem-solving skill which helps me deal with and write
            complex and robust algorithms.
            </p>

            <Button
             type='primary'
             className='btn get_cv mt-5'
             icon={<DownloadOutlined />}
             onClick={() =>window.open('https://drive.google.com/file/d/1j56O-3L64y7f2dT4UDGX1frkaUO4N02R/view?usp=sharing', '_blank')}
            >Download CV</Button>
        </div>
    </div>
  )
}
