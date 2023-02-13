import React from 'react'
import '../assets/css/projects.css'
import trabajosjovenes from '../assets/img/trabajosjovenes.png'
const Projects = () => {
  return (
    <div id='proyectos' className='container__proyects'>
      <h2 className='title__seccion__projects'>Mis proyectos</h2>
      <div className="container__cards__project">
        <div className="container__img__project">
          <img className='img__project' src={trabajosjovenes} alt="" />
        </div>
        <div className="container__content__project">
          <h3 className='title__project'>Trabajosjovenes.cl</h3>
          <p className='content__project'>Proyecto creado en 2019 que busca ayudar a jovenes a buscar su primer empleo. Participo activamente en el proyecto desarrollando nuevas funcionalidad o aportando ideas para el negocio.</p>
          <p className='content__project'>Dentro del equipo utilizamos metodología SCRUM y somos un grupo multidisiplinario en el cual me ha ayudado mucho a crecer como profesional.</p>
          <p className='content__project'></p>
          <div className="container__buttons__project">
            <a target={'_blank'} className='button__project' href="https://trabajosjovenes.cl">Ver sitio</a>
            {/* <a className='button__project' href="">Ver código</a> */}
          </div>
        </div>
      </div>
      {/* <div className="container__cards__project">
        <div className="container__img__project">
          <img className='img__project' src={trabajosjovenes} alt="" />
        </div>
        <div className="container__content__project">
          <h3 className='title__project'>Trabajosjovenes.cl</h3>
          <p className='content__project'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid reprehenderit, assumenda, cupiditate accusantium facere mollitia animi quia eaque, officia doloribus adipisci cumque vitae doloremque dolorem facilis! Quas tempore quam quibusdam?</p>
          <div className="container__buttons__project">
            <a className='button__project' href="">Ver sitio</a>
            <a className='button__project' href="">Ver código</a>
          </div>
        </div>
      </div>
      <div className="container__cards__project">
        <div className="container__img__project">
          <img className='img__project' src={trabajosjovenes} alt="" />
        </div>
        <div className="container__content__project">
          <h3 className='title__project'>Trabajosjovenes.cl</h3>
          <p className='content__project'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid reprehenderit, assumenda, cupiditate accusantium facere mollitia animi quia eaque, officia doloribus adipisci cumque vitae doloremque dolorem facilis! Quas tempore quam quibusdam?</p>
          <div className="container__buttons__project">
            <a className='button__project' href="">Ver sitio</a>
            <a className='button__project' href="">Ver código</a>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Projects