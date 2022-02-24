import React from "react";
import "../../sass/app.scss";
import ClasificadorArticulos from "./ClasificadorArticulos";

function Articulo({ articulos, tipo }) {
    return (
        <article className={`article_container ${tipo ? tipo : null}`}>
            <ClasificadorArticulos tipo={tipo} datos={articulos} />
        </article>
    );
}

export default Articulo;
