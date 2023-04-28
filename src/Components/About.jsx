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
              I'm a full-stack developer with 3 years of experience in the tech area, I code especially with Javascript and Python, using different frameworks and libraries of these languages to build robust and scalable software solutions. I work hard towards achieving the technical goals of the project on which I'm working. The tools I mostly use to achieve this are React, React Native, Next.js, Node.js & Express.js, and Django. I have also a solid foundation in problem-solving and critical thinking that helps me to deal with and write complex and robust algorithms.
            </p>

            <Button type='primary' className='btn get_cv mt-5' icon={<DownloadOutlined />}>Download cv</Button>
        </div>
    </div>
  )
}
