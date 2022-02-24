import React from "react";
import CrearArticulo from "../Articulos/CrearArticulo";

function Modulos({ tipo, articulos }) {
    const cantidadArticulos = articulos.length() - 1;
    const listaArticulos = [...Array(cantidadArticulos).keys()];
    const listaArticulos = articulos;
    switch (tipo) {
        case "notas_2":
            return (
                <>
                    <CrearArticulo articulo={listaArticulos[0]} />
                    <CrearArticulo articulo={listaArticulos[1]} />
                </>
            );
        case "notas_3":
            return (
                <>
                    <CrearArticulo articulo={listaArticulos[0]} />
                    <CrearArticulo articulo={listaArticulos[1]} />
                    <CrearArticulo articulo={listaArticulos[2]} />
                </>
            );
        case "notas_6":
            return (
                <>
                    <div className="colum">
                        <CrearArticulo articulo={listaArticulos[0]} />
                        <CrearArticulo articulo={listaArticulos[1]} />
                        <CrearArticulo articulo={listaArticulos[2]} />
                    </div>
                    <div className="colum">
                        <CrearArticulo articulo={listaArticulos[3]} />
                        <CrearArticulo articulo={listaArticulos[4]} />
                        <CrearArticulo articulo={listaArticulos[5]} />
                    </div>
                </>
            );
        case "notas_9":
            return (
                <>
                    <div className="colum">
                        <CrearArticulo articulo={listaArticulos[0]} />
                        <CrearArticulo articulo={listaArticulos[1]} />
                        <CrearArticulo articulo={listaArticulos[2]} />
                    </div>
                    <div className="colum">
                        <CrearArticulo articulo={listaArticulos[3]} />
                        <CrearArticulo articulo={listaArticulos[4]} />
                        <CrearArticulo articulo={listaArticulos[5]} />
                    </div>
                    <div className="colum">
                        <CrearArticulo articulo={listaArticulos[6]} />
                        <CrearArticulo articulo={listaArticulos[7]} />
                        <CrearArticulo articulo={listaArticulos[8]} />
                    </div>
                </>
            );
        //Por default se rederiza el modulo focal derecho
        default:
            return (
                <>
                    <div className="parte_izquierda">
                        <CrearArticulo articulo={listaArticulos[0]} />
                        <CrearArticulo articulo={listaArticulos[1]} />
                    </div>
                    <div className="parte_derecha">
                        <CrearArticulo articulo={listaArticulos[2]} />
                    </div>
                </>
            );
    }
}
export default Modulos;
