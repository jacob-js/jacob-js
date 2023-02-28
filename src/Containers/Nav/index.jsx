import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { useRef, useState, useEffect } from "react";
import Wrapper from "../Wrapper";
import Footer from "./Footer";

function Nav({children}){
    const navRef = useRef();
    const menu = useRef();
    const [active, setActive] = useState('#home');

    window.addEventListener('scroll', () => {
        if(navRef.current){
            if(window.scrollY > 600){
                navRef.current?.classList.add('fixed');
            }else{
                navRef.current?.classList.remove('fixed');
            }
        }
    });

    useEffect(() =>{
        (() =>{
            setActive(window.location.hash);
        })();
    }, [window.location]);

    return(
        <div className="page">
            <div className='nav' ref={navRef}>
                <Wrapper>
                    <div className="nav__content">
                        <div className="nav-part-1">
                            <a 
                                className={`nav-item ${active == '#home' ? 'active': ''}`}
                                href="/#home"
                                onClick={() => setActive('#home')}
                            >
                                Home
                            </a>
                            <div className="menu" onClick={() =>menu.current.classList.add('active')}>
                                <MenuOutlined />
                            </div>
                        </div>
                        <div className="nav-part-2" ref={menu}>
                            <a
                                className={`nav-item ${active === '#about' ? 'active': ''}`}
                                href="#about"
                                onClick={() => setActive('#about')}
                            >
                                    About
                            </a>
                            <a className={`nav-item ${active == '#skills' ? 'active': ''}`} 
                                href="#skills"
                                onClick={() => setActive('#skills')}
                            >
                                Skills
                            </a>
                            <a className={`nav-item ${active == '#portfolio' ? 'active': ''}`} 
                                href="#portfolio"
                                onClick={() => setActive('#portfolio')}
                            >
                                Portfolio
                            </a>
                            <div className="last-item">
                                <a href="#contact" onClick={() =>setActive('#contact')}>
                                    <button className="nav-item contact">Contact me</button>
                                </a>
                                <div className="close-menu" onClick={() =>menu.current.classList.remove('active')}><CloseOutlined /></div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
            <div className="children">
                {children}
            </div>
        </div>
    )
};

export default Nav;