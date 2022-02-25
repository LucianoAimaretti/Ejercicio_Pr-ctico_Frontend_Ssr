import React from "react";
import Articulo from "../Articulos/Articulo";

function ClasificadorModulos({ tipo, articulos }) {
    switch (tipo) {
        case "notas_2":
            return (
                <>
                    <Articulo articulos={articulos[0]} tipo={articulos[0].tipo} />
                    <Articulo articulos={articulos[1]} tipo={articulos[1].tipo} />
                </>
            );
        case "notas_3":
            return (
                <>
                    <Articulo articulos={articulos[0]} tipo={articulos[0].tipo} />
                    <Articulo articulos={articulos[1]} tipo={articulos[1].tipo} />
                    <Articulo articulos={articulos[2]} tipo={articulos[2].tipo} />
                </>
            );

        case "focal-derecho":
            return (
                <>
                    <div className="parte_izquierda">
                        <Articulo articulos={articulos[0]} />
                    </div>
                    <div className="parte_derecha">
                        <Articulo articulos={articulos[1]} />
                    </div>
                </>
            );
        //Por default se rederiza el modulo focal derecho
        default:
            return (
                <>
                    <div className="parte_izquierda">
                        <Articulo articulos={articulos[0]} />
                    </div>
                    <div className="parte_derecha">
                        <Articulo articulos={articulos[1]} />
                    </div>
                </>
            );
    }
}
export default ClasificadorModulos;
