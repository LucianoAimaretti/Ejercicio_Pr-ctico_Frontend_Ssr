import React from "react";
import ClasificadorModulos from "./ClasificadorModulos";
import "./modulos.scss";

function Modulo({ titulo, url, tipo, articulos }) {
    return (
        <div className="modulo">
            {titulo ? <h3 className="modulo_titulo">{url ? <a href={url}>{titulo}</a> : titulo}</h3> : null}
            <section className="modulo_main">
                <ClasificadorModulos tipo={tipo} articulos={articulos} />
            </section>
        </div>
    );
}

export default Modulo;
