import { Avatar } from 'antd';
import img from '/profile.jpeg';
import { GithubOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';
import About from '../../Components/About';
import Skills from '../../Components/Skills';
import Portfolio from '../../Components/Portfolio';
import Contact from '../../Components/Contact';
import Footer from '../Nav/Footer';
import Wrapper from '../Wrapper';

export function HomePage(){

    return(
        <div className="home-page">
           <Wrapper>
                <div className="content" id='home'>
                    <div className="div-avatar" data-aos='fade-up'>
                        <Avatar style={{ border: '2px solid white' }} src={img} className='avatar' size={300} />
                    </div>
                    <div className="div-intro space-y-3" data-aos='fade-down'>
                        <div className="greeting">
                                Hi there👋, I'm
                        </div>
                        <div className="intro-name">Merci Jacob</div>
                        <div className="intro-poste">A talented software developer</div>
                        <div className="div-socials">
                            <div className='socials__icon'> <a href="https://www.linkedin.com/in/merci-jacob-1b9776190/" target="_blank" rel="noopener noreferrer"> <LinkedinOutlined /> </a> </div>
                            <div className='socials__icon'> <a href="https://github.com/jacob-js" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a> </div>
                            <div className='socials__icon'> <a href="https://twitter.com/jacob1dev" target="_blank" rel="noopener noreferrer"><TwitterOutlined /></a> </div>
                            <div className='socials__icon'> <a href="https://www.instagram.com/merci_jacob" target="_blank" rel="noopener noreferrer"><InstagramOutlined /></a> </div>
                        </div>
                    </div>
                </div>
                <About />
                <Skills />
                <Portfolio />
                <Contact />
           </Wrapper>
           <Footer />
        </div>
    )
}