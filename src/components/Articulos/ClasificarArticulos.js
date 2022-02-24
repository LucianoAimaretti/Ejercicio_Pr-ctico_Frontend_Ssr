import React from "react";
import "./stylesComponentes.scss";
import { Encabezado, Bajada, Imagen, ImagenAutor, Marquesina } from "./ComponentesArticulo/index";

const AdministradorComponentes = (datos) => ({
    Encabezado: () => <Encabezado url={datos.url} volanta={datos.volanta} titulo={datos.titulo} />,
    Bajada: () => <Bajada url={datos.url} bajada={datos.bajada} />,
    Imagen: () => <Imagen url={datos.url} imagen={datos.imagen} alt={datos.titulo} />,
    ImagenAutor: () => <ImagenAutor url={datos.url} imagenAutor={datos.imagenAutor} nombreAutor={datos.nombreAutor} />,
    Marquesina: () => <Marquesina url={datos.url} nombreAutor={datos.nombreAutor} marquesina={datos.marquesina} />,
});

function ClasificarArticulos({ tipo, datos }) {
    const { Encabezado, Bajada, Imagen, ImagenAutor, Marquesina } = AdministradorComponentes(datos);
    switch (tipo) {
        case "autor":
            return (
                <>
                    <Encabezado />
                    <ImagenAutor />
                    <Marquesina />
                </>
            );
        case "invertida":
            return (
                <>
                    <Encabezado />
                    <Bajada />
                    <Marquesina />
                    <Imagen />
                </>
            );
        default:
            return (
                <>
                    <Imagen />
                    <Encabezado />
                    <Bajada />
                    <Marquesina />
                </>
            );
    }
}

export default ClasificarArticulos;
