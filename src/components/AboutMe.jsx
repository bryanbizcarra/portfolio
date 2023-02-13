import React from 'react'
import '../assets/css/aboutme.css'
import bryanimg from '../assets/img/img_bryan.png'
const AboutMe = () => {
    return (
        <div id='sobremi' className='container__aboutme'>
            <div className="container__img__aboutme">
                <img className='img__aboutme' src={bryanimg} alt="Foto principal de Bryan Bizcarra" srcset="" />
            </div>
            <div className="container__content__aboutme">
                <h2 className='title__content__aboutme'>Sobre mi</h2>
                <p className='subtitle__content__aboutme'>Me considero un chico súper capaz de enfrentar nuevos desafíos, autodidacta y con capacidad de liderazgo💪. Me apasiona el mundo de la Informática y siempre estoy abierto de aprender cosas nuevas💻. Mi meta es crecer en todo momento profesionalmente y dejar una huella en cada lugar donde me desempeñe 🛫.</p>
                <h2 className='title__content__habilities'>Habilidades</h2>
                <ul className='list__content__habilities'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React JS</li>
                    <li>Python</li>
                </ul>
            </div>
        </div>
    )
}

export default AboutMe