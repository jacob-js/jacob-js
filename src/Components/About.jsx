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
            I’m Jacob Merci, a professional and talented software developer with frontend & backend skills. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. I honed my skills at web and mobile development.

            My main programing languages are Javascript and python.

            Being a diligent, hardworking and result oriented guy, I always work towards achieving best result on each project I lay my hands on.
            </p>

            <Button type='primary' className='btn get_cv mt-5' icon={<DownloadOutlined />}>Download cv</Button>
        </div>
    </div>
  )
}
