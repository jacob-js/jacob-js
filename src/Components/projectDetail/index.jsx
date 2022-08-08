import { ClockCircleOutlined, EyeOutlined } from '@ant-design/icons'
import { Button, Modal } from 'antd'
import React from 'react'

function ProjectDetail({ project, isShown, setIsShown }) {
  return (
    <Modal visible={isShown} onCancel={() =>setIsShown(false)} className='project-detail'
        footer={null}
    >
        <div className="project-cover">
            <img src={project.cover} alt={project.title}/>
        </div>
        <div className="title">{project.title}</div>
        <div className="caption">{project.caption}</div>
        <div className="desc">{project.description}</div>
        <div className="infos">
            <div className="info">Type : {project.type}</div>
            <div className="info">Project status : {project.status}</div>
            <div className="info">duration : <ClockCircleOutlined /> {project.execution_time}</div>
            <div className="info">Stack : {project.stack}</div>
            <div className="info">Used technologies : {project.technologies?.map((tech, index) =>(
                <span> {tech.name} {index+1 !== project.technologies.length ? ",": ''} </span>
            ))}</div>
        </div>
        <Button className='btn preview' type='primary' icon={<EyeOutlined />}>Live demo</Button>
    </Modal>
  )
}

export default ProjectDetail