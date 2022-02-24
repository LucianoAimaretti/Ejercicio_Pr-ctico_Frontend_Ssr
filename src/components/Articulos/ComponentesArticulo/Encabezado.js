export default function Encabezado({ volanta, titulo, url }) {
    return (
        <a className="component_container encabezado" href={url} title={volanta + ". " + titulo}>
            <h1 className="titulo_styles">
                <span className="volanta_styles">{volanta}. </span>
                {titulo}
            </h1>
        </a>
    );
}

export { Encabezado };
