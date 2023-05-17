import React from "react";
import perfil2 from '../../assets/perfil2.jpg';
import "./Header.css";


function Header() {
    return (
        <header>
            <img src={perfil2} alt="Foto de rosto de Alberto" />
            <h1 id="nome-perfil">Alberto Cesar</h1>
            <h3 id="eventoSubtitulo">Desenvolvedor de Software</h3>
        </header>
    )
}

export default Header;