import React from 'react'

const projects = [
    {
        name: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.',
        image: 'https://picsum.photos/300/300',
        type: 'Mobile Application',
        technologies: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'AWS'],
    }
]

function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
        <div className="header">
            <div className="divider">
                <div className="line l"></div>
                What I've realized <div className="line"></div>
            </div>
            <div className="title">My porfolio</div>
        </div>
        <div className="projects">
            {
                [1,2,3,4,5,6].map((project, index) => (
                    <div className="project" key={index} data-aos="fade-up">
                        <img src={projects[0].image} alt="" />
                        <div className="bg"></div>
                        <div className="info">
                            <div className="name">{projects[0].name}</div>
                            <div className="type">{projects[0].type}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Portfolio