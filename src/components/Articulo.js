import React from "react";
import "../sass/app.scss";
import ClasificadorArticulos from "./Articulos/ClasificadorArticulos";

function Articulo({ articulos }) {
    return articulos.map((articulo, index) => {
        return (
            <article className="card">
                <ClasificadorArticulos key={index} tipo={articulo.tipo} datos={articulo} />
            </article>
        );
    });
}

export default Articulo;
