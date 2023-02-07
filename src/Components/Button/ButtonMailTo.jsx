import React from "react";
import { Link } from "react-router-dom";
import sobre from '../../Assets/Image/sobre.svg'
import './ButtonMailTo.scss'

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
            <img className="image" src={sobre} alt='sobre'></img>
        </Link>
    );
};

export default ButtonMailto;