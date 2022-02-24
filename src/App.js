import React from "react";
import "./sass/app.scss";
import data from "./api/articles.js";
import CrearArticulo from "./components/Articulos/CrearArticulo";

function App() {
    return (
        <div className="body_container">
            {data.map((grupoTipo, index) => {
                return <CrearArticulo key={index} articulos={grupoTipo.articulos} />;
            })}
        </div>
    );
}

export default App;
