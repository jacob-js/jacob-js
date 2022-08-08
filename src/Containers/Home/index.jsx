import { Avatar } from 'antd';
import img from '../../Assets/imgs/profile.jpeg';
import { GithubOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';
import TypewriterComponent from 'typewriter-effect';
import About from '../../Components/About';
import Skills from '../../Components/Skills';
import Portfolio from '../../Components/Portfolio';
import Contact from '../../Components/Contact';
import Footer from '../Nav/Footer';

export function HomePage(){

    return(
        <div className="home-page">
           <div className="content" id='home'>
               <div className="div-avatar" data-aos='fade-up'>
                   <Avatar style={{ border: '2px solid white' }} src={img} className='avatar' size={300} />
               </div>
               <div className="div-intro" data-aos='fade-down'>
                   <div className="greeting">
                        <TypewriterComponent
                            options={{
                                strings: "Hi there👋, I'm",
                                autoStart: true,
                                loop: false,
                                pauseFor: 3000
                            }}
                        />
                   </div>
                   <div className="intro-name">Merci Jacob</div>
                   <div className="intro-poste">A software developer based in DRC</div>
                   <div className="div-socials">
                       <div> <a href="https://www.linkedin.com/in/merci-jacob-1b9776190/" target="_blank" rel="noopener noreferrer"> <LinkedinOutlined /> </a> </div>
                       <div> <a href="https://github.com/jacob-js" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a> </div>
                       <div> <a href="https://twitter.com/jacob1dev" target="_blank" rel="noopener noreferrer"><TwitterOutlined /></a> </div>
                       <div> <a href="https://www.instagram.com/merci_jacob" target="_blank" rel="noopener noreferrer"><InstagramOutlined /></a> </div>
                   </div>
               </div>
           </div>
           <About />
           <Skills />
           <Portfolio />
           <Contact />
           <Footer />
        </div>
    )
}