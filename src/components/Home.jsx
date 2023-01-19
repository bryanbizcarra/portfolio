import React from 'react'
import '../assets/css/home.css'
import imgBackground from '../assets/img/img-background.jpg'
import iconLinkedin from '../assets/img/linkedin.png'
import iconGitHub from '../assets/img/github.png'

const Home = () => {
    return (
        <div className='container__home'>
            <div className="home__content">
                <h1 className='home__content_title'>Bryan Bizcarra</h1>
                <h2 className='home__content__subtitle'>Soy desarrollador Front-End</h2>
                <div className="home__rrss">
                    <a target={'_blank'} className='rrss__link' href="https://www.linkedin.com/in/bryanbizcarra/"><img className='icon__rrss' src={iconLinkedin} alt="" /></a>
                    <a target={'_blank'} className='rrss__link' href="https://github.com/bryanbizcarra"><img className='icon__rrss' src={iconGitHub} alt="" /></a>
                </div>
            </div>
            <div className="home__img">
                <img className='img' src={imgBackground} alt="" />
            </div>
        </div>
    )
}

export default Home