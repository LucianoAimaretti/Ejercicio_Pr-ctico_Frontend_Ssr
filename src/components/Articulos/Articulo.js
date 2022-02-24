import React from "react";
import "../../sass/app.scss";
import ClasificadorArticulos from "./ClasificadorArticulos";

function Articulo({ articulos }) {
    return (
        <article className="article_container">
            <ClasificadorArticulos tipo={articulos.tipo} datos={articulos} />
        </article>
    );
}

export default Articulo;
