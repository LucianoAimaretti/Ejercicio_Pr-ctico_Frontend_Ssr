export default function Marquesina({ nombreAutor, marquesina, url }) {
    return nombreAutor || marquesina ? (
        <a href={url} className="component_container marquesina">
            <h3 className="marquesina_styles">
                {marquesina ? marquesina : null}
                {marquesina && nombreAutor ? " /" : null}
                {nombreAutor ? " Por " + nombreAutor : null}
            </h3>
        </a>
    ) : null;
}

export { Marquesina };

/* Reconsiderar el nombre del archivo, estilos */
