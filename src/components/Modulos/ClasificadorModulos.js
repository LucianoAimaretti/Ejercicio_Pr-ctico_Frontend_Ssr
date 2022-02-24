import React from "react";
import Articulo from "../Articulos/Articulo";

function ClasificadorModulos({ tipo, articulos }) {
    switch (tipo) {
        case "notas_2":
            return (
                <>
                    <Articulo articulo={articulos} />
                </>
            );
        case "notas_3":
            return (
                <>
                    <Articulo articulo={articulos} />
                </>
            );
        case "notas_6":
            return (
                <>
                    <div className="fila">
                        <Articulo articulo={articulos} />
                    </div>
                    <div className="fila">
                        <Articulo articulo={articulos} />
                    </div>
                </>
            );
        case "notas_9":
            return (
                <>
                    <div className="fila">
                        <Articulo articulo={articulos} />
                    </div>
                    <div className="fila">
                        <Articulo articulo={articulos} />
                    </div>
                    <div className="fila">
                        <Articulo articulo={articulos} />
                    </div>
                </>
            );
        //Por default se rederiza el modulo focal derecho
        default:
            return (
                <>
                    <div className="parte_izquierda">
                        <Articulo articulo={articulos} />
                    </div>
                    <div className="parte_derecha">
                        <Articulo articulo={articulos} />
                    </div>
                </>
            );
    }
}
export default ClasificadorModulos;
