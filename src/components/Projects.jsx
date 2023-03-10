import React from 'react'
import '../assets/css/projects.css'
import trabajosjovenes from '../assets/img/trabajosjovenes.png'
import rhoelec from '../assets/img/rhoelec.png'
import pokeapi from '../assets/img/pokeapi.png'
import Project from './Project'
const Projects = () => {
  return (
    <div id='proyectos' className='container__proyects'>
      <h2 className='title__seccion__projects'>Mis proyectos</h2>
      <Project img_project={trabajosjovenes} title_project={'Trabajosjovenes.cl'} description_project={'Proyecto creado en 2019 que busca ayudar a jovenes a buscar su primer empleo. Participo activamente en el proyecto desarrollando nuevas funcionalidad o aportando ideas para el negocio.'} description_second={'Dentro del equipo utilizamos metodología SCRUM y somos un grupo multidisiplinario en el cual me ha ayudado mucho a crecer como profesional.'} link_site={'https://trabajosjovenes.cl'}></Project>
      <Project img_project={rhoelec} title_project={'Rhoelec.cl'} description_project={'Sitio web que da a conocer la empresa Rhoelec.cl Ingeniería LTDA. Fué realizada con Wordpress y puse en práctica las reuniones con clientes y así mejorando mi comunicación y personalidad.'} link_site={'http://rhoelec.cl'}></Project>
      <Project img_project={pokeapi} title_project={'PokeApi'} description_project={'Sitio realizado con ReactJS que pone en práctica el consumo de apis mediante Fetch y realiza una busqueda de pokemons ya sea por el nombre de este o por el numero de pokemon.'} link_site={'https://bryanpokeapi.netlify.app/'}></Project>
    </div>
  )
}

export default Projects