import React from "react";
import "./sass/app.scss";
import datos from "./api/articles.js";
import Modulo from "./components/Modulos/Modulo";
function App() {
    return (
        <div className="body">
            {datos.map((modulo, index) => {
                return <Modulo key={index} titulo={modulo.titulo} url={modulo.url} tipo={modulo.tipo} articulos={modulo.articulos} />;
            })}
        </div>
    );
}

export default App;
