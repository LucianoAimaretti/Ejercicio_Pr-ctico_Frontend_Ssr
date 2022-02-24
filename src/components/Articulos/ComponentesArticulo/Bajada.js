export default function Bajada({ bajada, url }) {
    return bajada ? (
        <a className="component_container bajada" href={url}>
            <h2 className="bajada_styles">{bajada}</h2>
        </a>
    ) : null;
}

export { Bajada };
