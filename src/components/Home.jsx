import React, { useState, useEffect } from 'react';
import '../assets/css/home.css'
import imgBackground from '../assets/img/img-background.jpg'
import iconLinkedin from '../assets/img/linkedin.png'
import iconGitHub from '../assets/img/github.png'

const Home = () => {

    const [width, setWidth] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setWidth(width => {
                if (width >= 100) {
                    return 0;
                }
                return width + 1;
            });
        }, 40);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div id='home' className='container__home'>
            <div className="home__content">
                <h1 className='home__content_title'>Bryan Bizcarra</h1>
                <h2 style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: `${width}%` }} className='home__content__subtitle' data-text='Soy desarrollador Front-End'>Soy desarrollador Front-End</h2>
                <div className="home__rrss">
                    <a target={'_blank'} className='rrss__link' href="https://www.linkedin.com/in/bryanbizcarra/"><img className='icon__rrss' src={iconLinkedin} alt="" /></a>
                    <a target={'_blank'} className='rrss__link' href="https://github.com/bryanbizcarra"><img className='icon__rrss' src={iconGitHub} alt="" /></a>
                </div>
            </div>
            <div className="home__img">
                <img className='img' src={imgBackground} alt="imagen de la home del portfolio de Bryan Bizcarra" />
            </div>
        </div>
    )
}

export default Home