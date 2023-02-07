import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "./Header.scss"


const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <div className='header'>
      {/* <img src={logo} className="header__logo" alt='logo'></img> */}
      <div>
        <Link to="/">
        <img
            className="header__logo"
            src="https://viniloslowcost.es/7460/vinilo-escudo-argentina-national-team-football.jpg"
            alt="First slide"
          />
        </Link>
      </div>
      <div className='header__menu'>
        <ul className='header__menu--list'>
          <li className='header__menu--list--list1'>
            <button className='bn3637 bn37' onClick={toggleMenu}>
              <span className='header__menu--list__titulo'>Menu</span>
            </button>
            {isMenuOpen && (
              <ul  className='header__sub-menu' style={{ position: "absolute", top: "68px", right: "50px", zIndex: "999" }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/ClausulaSuelo">Clausula Suelo</Link></li>
                <li><Link to="/Creditos">Creditos</Link></li>
                <li><Link to="/GastosHipoteca">Gastos Hipoteca</Link></li>
                <li><Link to="/Multidivisa">Multidivisa</Link></li>           
                <li><Link to="/TarjetasRevolving">Tarjetas Revolving</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
