import React, {useState} from 'react'
import '../assets/css/nav.css'
import iconMenu from '../assets/img/icon_menu.png'
import logo from '../assets/img/logo_portfolio.svg'
import cv from '../assets/pdf/Profile.pdf'
const Nav = () => {
    const [statusMenu, setStatusMenu] = useState(false)
    const chancheStatusMenu = ()=>{
        setStatusMenu(!statusMenu)
        console.log(statusMenu)
    }
    return (
        <div className='nav__container'>
            <a href='/' className='nav__title'><img className='nav__title--logo' src={logo}/></a>
            <div className={`nav ${statusMenu ? 'menu__open' : ''}`}>
                <a onClick={chancheStatusMenu} href="#" className="nav__link">Inicio</a>
                <a onClick={chancheStatusMenu} href="#" className="nav__link">Sobre mi</a>
                <a onClick={chancheStatusMenu} href="#" className="nav__link">Mis proyectos</a>
                <a onClick={chancheStatusMenu} className="nav__link nav__link--download" download={'Bryan_Bizcarra_CV'} href={cv}>Descarga mi CV</a>
            </div>
            <img onClick={chancheStatusMenu} className='icon__menu' src={iconMenu} alt="" />
        </div>
    )
}

export default Nav