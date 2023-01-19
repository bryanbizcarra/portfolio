import React, {useState} from 'react'
import '../assets/css/nav.css'
import iconMenu from '../assets/img/icon_menu.png'

const Nav = () => {
    const [statusMenu, setStatusMenu] = useState(false)
    const chancheStatusMenu = ()=>{
        setStatusMenu(!statusMenu)
        console.log(statusMenu)
    }
    return (
        <div className='nav__container'>
            <h2 className='nav__title'>Bryan Bizcarra</h2>
            <div className={`nav ${statusMenu ? 'menu__open' : ''}`}>
                <a onClick={chancheStatusMenu} href="#" className="nav__link">Inicio</a>
                <a onClick={chancheStatusMenu} href="#" className="nav__link">Sobre mi</a>
                <a onClick={chancheStatusMenu} href="#" className="nav__link">Mis proyectos</a>
                <a onClick={chancheStatusMenu} className="nav__link nav__link--download" href="#">Descarga mi CV</a>
            </div>
            <img onClick={chancheStatusMenu} className='icon__menu' src={iconMenu} alt="" />
        </div>
    )
}

export default Nav