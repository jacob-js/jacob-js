import { EnvironmentOutlined, MailOutlined, PhoneOutlined, SendOutlined } from '@ant-design/icons'
import { Button, Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import usePostData from '../hooks/usePost'
import Input, { TextArea } from './Input'

function Contact() {
    const [fullname, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const { isSuccess, loading, error, submit } = usePostData('/contacts/');

    useEffect(() =>{
        (() =>{
            if(isSuccess) {
                setName('');
                setEmail('');
                setMessage('');
                setSubject('');
                Modal.success({
                    title: 'Success',
                    content: 'Thanks for your message, will contact you back shortly',
                });
                window.location.hash = '#';
                window.scrollTo(0, 0);
            };
            if(error) {
                Modal.error({
                    title: 'Error',
                    content: "Something went wrong, please try again later",
                })
            }
        })();
    }, [isSuccess, error]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(fullname && email && message && subject) {
            submit({ full_name: fullname, email, message, subject });
        }
    };

  return (
    <div className='contact min-h-screen flex flex-col justify-center' id='contact'>
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
                    <div className="text">Kigali, Rwanda</div>
                </div>
                <div className="detail">
                    <div className="icon"> <MailOutlined /> </div>
                    <a className='text' href="mailto:contact@jacobdeveloper.com">
                        mercihabam@gmail.com
                    </a>
                </div>
                <div className="detail">
                    <div className="icon"> <PhoneOutlined rotate={90} /> </div>
                    <a className='text' href="tel:+250791806500">+250791806500</a>
                </div>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="flex-fields">
                    <Input placeholder='Your full name' value={fullname} onChange={e =>setName(e.target.value)} />
                    <Input placeholder='Your email' value={email} type="email" onChange={e =>setEmail(e.target.value)} />
                </div>
                <Input placeholder='Subject' value={subject} onChange={e =>setSubject(e.target.value)} />
                <TextArea placeholder='Your message' value={message} onChange={e =>setMessage(e.target.value)} />
                <Button type='primary' className='btn btn-submit' loading={loading} icon={<SendOutlined />} htmlType="submit">Send</Button>
            </form>
        </div>
    </div>
  )
}

export default Contact