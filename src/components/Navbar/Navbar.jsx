import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
    return (
        <nav>
            <ul>
                <li className="button"><Link to="/">Curriculo</Link></li>
                <li className="button"><Link to="/portfolio">Portfolio</Link></li>
                <li className="button"><Link to="/contato">Contato</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;