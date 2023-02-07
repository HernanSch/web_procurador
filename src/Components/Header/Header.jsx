import React from 'react'
import { Link } from 'react-router-dom'

import "./Header.scss"


const Header = () => {
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
            <li className='header__menu--list--list1'><Link to="/"><button className='bn3637 bn37'><span className='header__menu--list__titulo'>Home</span></button></Link></li>
            <li className='header__menu--list--list1'><Link to="/ClausulaSuelo"><button className='bn3637 bn37'><span className='header__menu--list__titulo'>Clausula Suelo</span></button></Link></li>
            <li className='header__menu--list--list1'><Link to="/Creditos"><button className='bn3637 bn37'><span className='header__menu--list__titulo'>Creditos</span></button></Link></li>
            <li className='header__menu--list--list1'><Link to="/GastosHipoteca"><button className='bn3637 bn37'><span className='header__menu--list__titulo'>Gastos Hipoteca</span></button></Link></li>
            <li className='header__menu--list--list1'><Link to="/Multidivisa"><button className='bn3637 bn37'><span className='header__menu--list__titulo'>Multidivisa</span></button></Link></li>           
            <li className='header__menu--list--list1'><Link to="/TarjetasRevolving"><button className='bn3637 bn37'><span className='header__menu--list__titulo'>Tarjetas Revolving</span></button></Link></li>
        </ul>
    </div>

    </div>
  )
}

export default Header