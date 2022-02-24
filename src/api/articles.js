const articles = [
    {
        titulo: "Actualidad",
        url: "",
        tipo: "",
        articulos: [
            {
                tipo: "invertida",
                volanta: "El Mundo",
                titulo: "Por qué una guerra en Ucrania sería distinta a todas las que hemos visto en los últimos 80 años",
                bajada: "Una invasión rusa a Ucrania sería diferente a la mayoría de los conflictos desde la Segunda Guerra",
                imagen: "https://resizer.glanacion.com/resizer/HXk03UKVbUwfq-moAZnG624-GO4=/298x200/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/VIMIQXA7YRCQPEPNRWMVFRGFYE",
                nombreAutor: "David Leonhardt",
                url: "https://www.lanacion.com.ar/el-mundo/por-que-una-guerra-en-ucrania-seria-distinta-a-cualquier-que-hemos-visto-en-los-ultimos-80-anos-nid21022022/",
            },
            {
                volanta: "El billete de $ 1000 equivale a 4 dólares",
                titulo: "Presentan un proyecto de ley para crear billetes de hasta $ 20.000",
                bajada: "El diputado nacional de Juntos por el Cambio Federico Angelini planteó la iniciativa; “Le ahorraría al Estado unos US$ 400 millones en costos de emisión”, aseguró",
                marquesina: "El Pais",
                nombreAutor: "LA NACION",
                url: "https://www.lanacion.com.ar/politica/presentan-un-proyecto-de-ley-para-crear-billetes-de-hasta-20000-nid23022022/",
            },
            {
                volanta: "Interna en JxC",
                titulo: "Las incógnitas que abre en Pro la reaparición de Macri en el centro de la escena",
                imagen: "https://resizer.glanacion.com/resizer/i_RJoPTzBInT39QM4z9IIlx12j4=/375x250/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/KHLQZJQZWRAFDI4VZO4LDW7CR4.jpg",
                nombreAutor: "Matías Moreno",
                imagenAutor:
                    "https://resizer.glanacion.com/resizer/OtX3cOyjIJz_VK11ze5W4oFgObM=/80x0/filters:format(webp):quality(80)/s3.amazonaws.com/arc-authors/lanacionar/1831db89-7fcb-479f-ba11-9ae6bccd74f9.png",
                url: "https://www.lanacion.com.ar/politica/las-incognitas-que-abre-en-pro-la-reaparicion-de-mauricio-macri-en-el-centro-de-la-escena-nid23022022/",
            },
        ],
    },
    {
        titulo: "",
        url: "",
        tipo: "notas_2",
        articulos: [
            {
                tipo: "invertida",
                volanta: "Volanta 3",
                titulo: "El acuerdo con el FMI agudiza la división del oficialismo en el Senado",
                bajada: "Senadores referenciados en los gobernadores apoyaron el entendimiento y desafiaron la orden de mantener silencio que bajó Cristina Kirchner",
                imagen: "https://wakyma.com/blog/wp-content/uploads/2019/10/herbee-el-erizo-feliz-770x460.jpg",
                marquesina: "Marquesina",
                nombreAutor: "SeñorX",
                imagenAutor:
                    "https://resizer.glanacion.com/resizer/H0bAPygOqfZgvhf2lfADFrinyUU=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/3H4MZ3Z5TNHEDCWRMJSNVDXJFE",
                url: "https://www.lanacion.com.ar/",
            },
            {
                volanta: "Desopilante",
                titulo: "Así avanzan las tropas rusas sobre Ucrania",
                imagen: "https://resizer.glanacion.com/resizer/239d-Irfox8GX65e2UYVz0vOt8g=/298x200/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/JFM3PV4ROFELPH5QVO7QHFQVOE.jpg",
                url: "https://www.lanacion.com.ar/deportes/tenis/ben-stiller-y-la-imperdible-noche-en-la-que-jugo-con-juan-martin-del-potro-rafael-nadal-y-una-nena-nid24022022/",
            },
        ],
    },
    {
        titulo: "Sociedad",
        url: "https://www.lanacion.com.ar/sociedad/",
        tipo: "notas_6",
        articulos: [
            {
                tipo: "",
                volanta: "“Mis jefes me dieron la orden”",
                titulo: "Un hombre se filmó mientras quemaba un bosque de Corrientes y luego explicó que era un contrafuego",
                bajada: "“Miren el desastre que estoy haciendo”, indicó esta persona en la grabación; luego se supo que aplicaba una técnica para evitar que se sigan propagando las llamas",
                marquesina: "Incendio",
                url: "https://www.lanacion.com.ar/sociedad/se-filmo-al-quemar-un-bosque-de-corrientes-con-un-lanzallamas-y-luego-justifico-mis-jefes-me-dieron-nid21022022/",
            },
            {
                tipo: "autor",
                volanta: "Vuelta a clases",
                titulo: "“Nos dijeron que no llevemos a los chicos no vacunados”, el conflicto judicial que tiene en vilo a El Chaltén",
                bajada: "",
                imagen: "https://buckets3.glanacion.com/lntools/anexos/fotos/84/40584w1920q100.JPG",
                nombreAutor: "Gustavo",
                imagenAutor:
                    "https://resizer.glanacion.com/resizer/W9DDsfcRUPGUs-J3kuPiGjW0fYc=/80x0/filters:format(webp):quality(80)/s3.amazonaws.com/arc-authors/lanacionar/02fa4247-8d70-4b57-af1b-0dcad945d274.png",
                url: "https://www.lanacion.com.ar/el-mundo/por-que-una-guerra-en-ucrania-seria-distinta-a-cualquier-que-hemos-visto-en-los-ultimos-80-anos-nid21022022/",
            },
            {
                tipo: "",
                volanta: "El mapa que mira el mundo",
                titulo: "Así avanzan las tropas rusas sobre Ucrania",
                bajada: "La mirada de Estados Unidos y sus aliados de la OTAN está más pendiente que nunca de los límites geográficos entre Rusia y Ucrania",
                imagen: "https://buckets3.glanacion.com/lntools/anexos/fotos/84/40584w1920q100.JPG",
                nombreAutor: "Lucia Sol Miguel",
                imagenAutor: "https://wakyma.com/blog/wp-content/uploads/2019/10/herbee-el-erizo-feliz-770x460.jpg",
                url: "https://www.lanacion.com.ar/el-mundo/por-que-una-guerra-en-ucrania-seria-distinta-a-cualquier-que-hemos-visto-en-los-ultimos-80-anos-nid21022022/",
            },
            {
                tipo: "",
                volanta: "“Mis jefes me dieron la orden”",
                titulo: "Un hombre se filmó mientras quemaba un bosque de Corrientes y luego explicó que era un contrafuego",
                bajada: "“Miren el desastre que estoy haciendo”, indicó esta persona en la grabación; luego se supo que aplicaba una técnica para evitar que se sigan propagando las llamas",
                marquesina: "Incendio",
                url: "https://www.lanacion.com.ar/sociedad/se-filmo-al-quemar-un-bosque-de-corrientes-con-un-lanzallamas-y-luego-justifico-mis-jefes-me-dieron-nid21022022/",
            },
            {
                tipo: "autor",
                volanta: "Vuelta a clases",
                titulo: "“Nos dijeron que no llevemos a los chicos no vacunados”, el conflicto judicial que tiene en vilo a El Chaltén",
                bajada: "",
                imagen: "https://buckets3.glanacion.com/lntools/anexos/fotos/84/40584w1920q100.JPG",
                nombreAutor: "Gustavo",
                imagenAutor:
                    "https://resizer.glanacion.com/resizer/W9DDsfcRUPGUs-J3kuPiGjW0fYc=/80x0/filters:format(webp):quality(80)/s3.amazonaws.com/arc-authors/lanacionar/02fa4247-8d70-4b57-af1b-0dcad945d274.png",
                url: "https://www.lanacion.com.ar/el-mundo/por-que-una-guerra-en-ucrania-seria-distinta-a-cualquier-que-hemos-visto-en-los-ultimos-80-anos-nid21022022/",
            },
            {
                tipo: "",
                volanta: "El mapa que mira el mundo",
                titulo: "Así avanzan las tropas rusas sobre Ucrania",
                bajada: "La mirada de Estados Unidos y sus aliados de la OTAN está más pendiente que nunca de los límites geográficos entre Rusia y Ucrania",
                imagen: "https://buckets3.glanacion.com/lntools/anexos/fotos/84/40584w1920q100.JPG",
                nombreAutor: "Lucia Sol Miguel",
                imagenAutor: "https://wakyma.com/blog/wp-content/uploads/2019/10/herbee-el-erizo-feliz-770x460.jpg",
                url: "https://www.lanacion.com.ar/el-mundo/por-que-una-guerra-en-ucrania-seria-distinta-a-cualquier-que-hemos-visto-en-los-ultimos-80-anos-nid21022022/",
            },
        ],
    },
];

export default articles;
