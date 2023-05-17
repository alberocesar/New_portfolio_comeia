import React from "react";
import "./Curriculo.css";
import date from "./Curriculo.json";

function Curriculo() {
    return (
        <>
            <section>
                <h2>Resumo</h2>
                <p>{date.resumo}</p>
            </section>

            <section>
                <h2>Acadêmico</h2>
                <ul>
                    <li><b>{date.experienciaAcademica[0].dataInicio} - {date.experienciaAcademica[0].dataFim}</b>{date.experienciaAcademica[0].titulo}</li>
                    <li><b>{date.experienciaAcademica[1].dataInicio} - {date.experienciaAcademica[1].dataFim}</b>{date.experienciaAcademica[1].titulo}</li>
                    <li><b>{date.experienciaAcademica[2].dataInicio} - {date.experienciaAcademica[2].dataFim}</b>{date.experienciaAcademica[2].titulo}</li>
                </ul>
            </section>

            <section>
                <h2>Profissional</h2>
                <ul>
                    <li><b>{date.experienciaProfissional[0].dataInicio} - {date.experienciaProfissional[0].dataFim}</b>{date.experienciaProfissional[0].titulo}</li>
                    <li><b>{date.experienciaProfissional[1].dataInicio} - {date.experienciaProfissional[1].dataFim}</b>{date.experienciaProfissional[1].titulo}</li>
                    <li><b>{date.experienciaProfissional[2].dataInicio} - {date.experienciaProfissional[2].dataFim}</b>{date.experienciaProfissional[2].titulo}</li>
                </ul>
            </section>
        </>
    )
}

export default Curriculo;