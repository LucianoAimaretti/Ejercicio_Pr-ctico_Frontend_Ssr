import React from "react";
import "./sass/app.scss";
import data from "./api/articles.js";
import Articulo from "./components/Articulo";

function App() {
    return (
        <div className="body_container">
            {data.map((grupoTipo, index) => {
                return <Articulo key={index} articulos={grupoTipo.articulos} />;
            })}
        </div>
    );
}

export default App;
