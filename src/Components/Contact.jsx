import { EnvironmentOutlined, MailOutlined, PhoneOutlined, SendOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import Input, { TextArea } from './Input'

function Contact() {
  return (
    <div className='contact' id='contact'>
        <div className="header">
            <div className="divider"><div className="line l"></div>
                Contact me <div className="line"></div>
            </div>
            <div className="title">Get in touch with me</div>
            <div className="extra">
                I'm available to help you bring your ideas to life and realize your projects.
            </div>
        </div>
        <div className="body">
            <div className="details">
                <div className="detail">
                    <div className="icon"> <EnvironmentOutlined /> </div>
                    <div className="text">Goma DRC</div>
                </div>
                <div className="detail">
                    <div className="icon"> <MailOutlined /> </div>
                    <a className='text' href="mailto:contact@jacobdeveloper.com">
                        contact@jacobdeveloper.com
                    </a>
                </div>
                <div className="detail">
                    <div className="icon"> <PhoneOutlined rotate={90} /> </div>
                    <a className='text' href="tel:+243977426917">+243977426917</a>
                </div>
            </div>
            <div className="form">
                <Input placeholder='Your full name' />
                <div className="flex-fields">
                    <Input placeholder='Your email' type="email" />
                    <Input placeholder='Your phone number' type="tel" />
                </div>
                <TextArea placeholder='Your message' />
                <Button type='primary' className='btn btn-submit' icon={<SendOutlined />}>Envoyer</Button>
            </div>
        </div>
    </div>
  )
}

export default Contact