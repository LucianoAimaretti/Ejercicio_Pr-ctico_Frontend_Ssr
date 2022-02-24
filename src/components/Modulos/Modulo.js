import React from "react";
import ClasificadorModulos from "./ClasificadorModulos";

function Modulo({ titulo, url, tipo, articulos }) {
    console.log("titulo => ", titulo, "url=> ", url, "tipo => ", tipo, "articulos => ", articulos);
    return (
        <div className="container">
            {titulo ? (
                <h2 className="container_titulo">
                    {url ? (
                        <a className="" href={url}>
                            {titulo}
                        </a>
                    ) : (
                        titulo
                    )}
                </h2>
            ) : null}
            <section className="container">
                <ClasificadorModulos tipo={tipo} articulos={articulos} />
            </section>
        </div>
    );
}

export default Modulo;
