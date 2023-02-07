import React, { useState } from 'react';
import './DropdownMenu.scss';
import { Link } from 'react-router-dom'

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        Show menu
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ClausulaSuelo">Clausula Suelo</Link></li>
            <li><Link to="/Creditos">Creditos</Link></li>
            <li><Link to="/GastosHipoteca">Gastos Hipoteca</Link></li>
            <li><Link to="/Multidivisa">Multidivisa</Link></li>           
            <li><Link to="/TarjetasRevolving">Tarjetas Revolving</Link></li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
