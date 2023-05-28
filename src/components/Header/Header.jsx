import React from "react";
import "./Header.css";


function Header({nome, foto, cargo}) {
    return (
        <header>
            <img src={foto} alt="Foto de rosto de Alberto" />
            <h1 id="nome-perfil">{nome}</h1>
            <h3 id="eventoSubtitulo">{cargo}</h3>
        </header>
    )
}

export default Header;