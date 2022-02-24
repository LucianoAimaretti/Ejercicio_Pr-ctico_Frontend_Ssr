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
        case "notas_6":
            return (
                <>
                    <div className="fila">
                        <Articulo articulos={articulos[0]} tipo={articulos[0].tipo} />
                        <Articulo articulos={articulos[1]} tipo={articulos[1].tipo} />
                        <Articulo articulos={articulos[2]} tipo={articulos[2].tipo} />
                    </div>
                    <div className="fila">
                        <Articulo articulos={articulos[3]} tipo={articulos[3].tipo} />
                        <Articulo articulos={articulos[4]} tipo={articulos[4].tipo} />
                        <Articulo articulos={articulos[5]} tipo={articulos[5].tipo} />
                    </div>
                </>
            );
        case "notas_9":
            return (
                <>
                    <div className="fila">
                        <Articulo articulos={articulos[0]} tipo={articulos[0].tipo} />
                        <Articulo articulos={articulos[1]} tipo={articulos[1].tipo} />
                        <Articulo articulos={articulos[2]} tipo={articulos[2].tipo} />
                    </div>
                    <div className="fila">
                        <Articulo articulos={articulos[3]} tipo={articulos[3].tipo} />
                        <Articulo articulos={articulos[4]} tipo={articulos[4].tipo} />
                        <Articulo articulos={articulos[5]} tipo={articulos[5].tipo} />
                    </div>
                    <div className="fila">
                        <Articulo articulos={articulos[6]} tipo={articulos[6].tipo} />
                        <Articulo articulos={articulos[7]} tipo={articulos[7].tipo} />
                        <Articulo articulos={articulos[8]} tipo={articulos[8].tipo} />
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
                        <Articulo articulos={articulos[2]} />
                    </div>
                </>
            );
    }
}
export default ClasificadorModulos;
