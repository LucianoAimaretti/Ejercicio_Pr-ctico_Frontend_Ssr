export default function Imagen({ imagen, titulo, url }) {
    return imagen ? (
        <a href={url} className="component_container imagen">
            <img className="imagen_style" src={imagen} alt={titulo} />
        </a>
    ) : null;
}

export { Imagen };
