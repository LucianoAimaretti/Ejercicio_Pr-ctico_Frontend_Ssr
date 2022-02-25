import { prettyDOM, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Bajada from "./components/Articulos/ComponentesArticulo/Bajada";
import Articulo from "./components/Articulos/Articulo";
import Modulo from "./components/Modulos/Modulo";

test("Render Bajada", () => {
    const datos = { bajada: "Esto es una bajada", url: "https://la-nacion-ejercicio-frontend.vercel.app/" };

    const component = render(<Bajada url={datos.url} bajada={datos.bajada} />);

    component.getByText("Esto es una bajada");
});

test("Render Articulo", () => {
    const datos = {
        tipo: "invertida",
        volanta: "Del tránsito a veredas rotas",
        titulo: "Ranking: los problemas cotidianos que más inquietan a los porteños y los barrios con más quejas",
        imagen: "https://resizer.glanacion.com/resizer/dyF87QsLcdr-djEHcmHDv_gBOds=/318x213/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/MCBH7AOHBJGLPN6Q7ZIBEA6VBA.jpg",
        nombreAutor: "Valeria Vera",
        url: "https://www.lanacion.com.ar/buenos-aires/del-transito-a-las-veredas-rotas-los-problemas-cotidianos-que-mas-inquietan-a-los-portenos-y-en-que-nid19022022/",
    };

    const component = render(<Articulo tipo={datos.tipo} articulos={datos} />);

    expect(component.container).toHaveTextContent(datos.titulo);
});

test("Buscar titulo", () => {
    const datos = {
        tipo: "invertida",
        volanta: "Del tránsito a veredas rotas",
        titulo: "Ranking: los problemas cotidianos que más inquietan a los porteños y los barrios con más quejas",
        imagen: "https://resizer.glanacion.com/resizer/dyF87QsLcdr-djEHcmHDv_gBOds=/318x213/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/MCBH7AOHBJGLPN6Q7ZIBEA6VBA.jpg",
        nombreAutor: "Valeria Vera",
        url: "https://www.lanacion.com.ar/buenos-aires/del-transito-a-las-veredas-rotas-los-problemas-cotidianos-que-mas-inquietan-a-los-portenos-y-en-que-nid19022022/",
    };

    const component = render(<Articulo tipo={datos.tipo} articulos={datos} />);

    expect(component.container).toHaveTextContent(datos.titulo);
    const titulo = component.container.querySelector("h1");
    console.log(prettyDOM(titulo));
});

test("Render Modulo", () => {
    const datos = {
        tipo: "notas_2",
        articulos: [
            {
                tipo: "invertida",
                volanta: "Del tránsito a veredas rotas",
                titulo: "Ranking: los problemas cotidianos que más inquietan a los porteños y los barrios con más quejas",
                imagen: "https://resizer.glanacion.com/resizer/dyF87QsLcdr-djEHcmHDv_gBOds=/318x213/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/MCBH7AOHBJGLPN6Q7ZIBEA6VBA.jpg",
                nombreAutor: "Valeria Vera",
                url: "https://www.lanacion.com.ar/buenos-aires/del-transito-a-las-veredas-rotas-los-problemas-cotidianos-que-mas-inquietan-a-los-portenos-y-en-que-nid19022022/",
            },
            {
                volanta: "De kimbap a pollo frito",
                titulo: "Los 11 imperdibles del enclave gastronómico que se modernizó y ofrece platos únicos",
                imagen: "https://resizer.glanacion.com/resizer/l8PYJW4ZEKzZq_J11BhX6fTkshg=/318x213/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/YTV4I2GBUZDNXNAVWCEIXJ4FII.JPG",
                marquesina: "El Mundo",
                nombreAutor: "Valeria Vera",
                url: "https://www.lanacion.com.ar/buenos-aires/korea-soho-los-imperdibles-del-enclave-gastronomico-que-se-modernizo-y-ofrece-platos-unicos-nid17022022/",
            },
        ],
    };

    const component = render(<Modulo tipo={datos.tipo} articulos={datos.articulos} />);

    expect(component.container).toHaveTextContent(datos.articulos[0].volanta);
    expect(component.container).toHaveTextContent(datos.articulos[1].nombreAutor);
});
