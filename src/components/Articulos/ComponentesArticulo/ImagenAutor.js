export default function ImagenAutor({ imagenAutor, nombreAutor, url }) {
    return imagenAutor ? (
        <a href={url} className="component_container imagenAutor">
            <img className="imagenAutor_style" src={imagenAutor} alt={nombreAutor} />
        </a>
    ) : null;
}

export { ImagenAutor };
