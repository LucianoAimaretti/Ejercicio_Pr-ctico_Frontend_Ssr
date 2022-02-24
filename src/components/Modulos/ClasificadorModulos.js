import React from "react";
import Articulo from "../Articulos/Articulo";

function ClasificadorModulos({ tipo, articulos }) {
    switch (tipo) {
        case "notas_2":
            return (
                <>
                    <Articulo articulos={articulos[0]} />
                    <Articulo articulos={articulos[1]} />
                </>
            );
        case "notas_3":
            return (
                <>
                    <Articulo articulos={articulos[0]} />
                    <Articulo articulos={articulos[1]} />
                    <Articulo articulos={articulos[2]} />
                </>
            );
        case "notas_6":
            return (
                <>
                    <div className="fila">
                        <Articulo articulos={articulos[0]} />
                        <Articulo articulos={articulos[1]} />
                        <Articulo articulos={articulos[2]} />
                    </div>
                    <div className="fila">
                        <Articulo articulos={articulos[3]} />
                        <Articulo articulos={articulos[4]} />
                        <Articulo articulos={articulos[5]} />
                    </div>
                </>
            );
        case "notas_9":
            return (
                <>
                    <div className="fila">
                        <Articulo articulos={articulos[0]} />
                        <Articulo articulos={articulos[1]} />
                        <Articulo articulos={articulos[2]} />
                    </div>
                    <div className="fila">
                        <Articulo articulos={articulos[3]} />
                        <Articulo articulos={articulos[4]} />
                        <Articulo articulos={articulos[5]} />
                    </div>
                    <div className="fila">
                        <Articulo articulos={articulos[6]} />
                        <Articulo articulos={articulos[7]} />
                        <Articulo articulos={articulos[8]} />
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
