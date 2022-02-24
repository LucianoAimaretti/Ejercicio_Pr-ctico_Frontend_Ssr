import React from "react";
import "../../sass/app.scss";
import ClasificarArticulos from "./ClasificarArticulos";

function CrearArticulo({ articulos }) {
    return articulos.map((articulo, index) => {
        return (
            <article className="card">
                <ClasificarArticulos key={index} tipo={articulo.tipo} datos={articulo} />
            </article>
        );
    });
}

export default CrearArticulo;
