import { Link } from 'react-router-dom'
import DropdownMenu from '../Menu/DropdownMenu'


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
        <DropdownMenu></DropdownMenu>
      </div>
    </div>
  )
}

export default Header
