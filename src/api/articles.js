const articles = [
    {
        titulo: "Actualidad",
        url: "",
        tipo: "focal_derecho",
        articulos: [
            {
                volanta: "Tras un fallo inusual",
                titulo: "Renunció una jueza que debe definir sobre la quiebra del Correo Argentino, de la familia Macri",
                bajada: "Una resolución poco habitual obligó a dimitir a Gómez Alonso, que cumplió 75 años",
                nombreAutor: "Hernán Cappiello",
                url: "https://www.lanacion.com.ar/politica/renuncio-una-jueza-que-debe-definir-sobre-la-quiebra-del-correo-argentino-de-la-familia-macri-nid24022022/",
            },
            {
                volanta: "Atractivo porteño",
                titulo: "La rareza en medio de la llanura que cautiva a los turistas del mundo",
                imagen: "https://resizer.glanacion.com/resizer/OY3-uqhBbnZtUMrVtrDRVeyoyBQ=/318x213/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/3H3G345GVBAMVBRCOYAD5EJUGE.JPG",
                nombreAutor: "Julián Gorodischer",
                url: "https://www.lanacion.com.ar/buenos-aires/lomadas-portenas-la-rareza-en-medio-de-la-llanura-que-atrae-la-atencion-de-los-turistas-del-mundo-nid13012022/",
            },
        ],
    },
    {
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
    },
    {
        titulo: "Politica",
        url: "https://www.lanacion.com.ar/politica/",
        tipo: "notas_3",
        articulos: [
            {
                volanta: "Hackear al Estado",
                titulo: "Así operan las ciberbandas que secuestran bases de datos y exigen rescate",
                imagen: "https://resizer.glanacion.com/resizer/KcDSXZNWUX40yXERrr9zob2kqP0=/298x200/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/KXHG55SY5FDZDOQVEXJUVNV6TQ.gif",
                nombreAutor: "Hugo Alconada Mon",
                url: "https://www.lanacion.com.ar/politica/hackear-al-estado-asi-operan-las-ciberbandas-que-secuestran-bases-de-datos-y-exigen-rescate-nid24022022/",
            },
            {
                volanta: "Por twitter",
                titulo: "Alberto Fernández le pidió a Rusia que cese el ataque y que respete la soberanía",
                bajada: "El Presidente se refirió al conflicto bélico después de la suave condena que hizo la Cancillería; “que todas las partes vuelvan a la mesa de diálogo”, dijo",
                marquesina: "Guerra en Ucrania",
                url: "https://www.lanacion.com.ar/politica/alberto-fernandez-le-pidio-a-rusia-que-cese-el-ataque-y-que-respete-la-soberania-nid24022022/",
            },
            {
                tipo: "autor",
                volanta: "Analisis",
                titulo: "Un apriete en medio de la tormenta interna del oficialismo",
                nombreAutor: "Martín Rodríguez Yebra",
                imagenAutor:
                    "https://resizer.glanacion.com/resizer/_CEx8TiR8Yrf5PBH7QEGWf1_2Yc=/80x0/filters:format(webp):quality(80)/s3.amazonaws.com/arc-authors/lanacionar/f0212d19-1095-4cc1-a332-2c03755f69df.png",
                url: "https://www.lanacion.com.ar/politica/guerra-rusia-ucrania-la-alianza-con-putin-puso-a-alberto-fernandez-en-una-tierra-de-nadie-nid24022022/",
            },
        ],
    },
    {
        tipo: "notas_3",
        articulos: [
            {
                volanta: "Por tercera vez",
                titulo: "Se postergó el tratamiento del caso del juez que le devolvió medio millón de dólares a una de las hijas de Moyano",
                imagen: "https://resizer.glanacion.com/resizer/SesZXYJp_-l7gUrFGkr9bwH567g=/318x213/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/NPOWGM2AMZHAPKJ3S5P6XAO4OY.jpg",
                marquesina: "Consejo de la Magistratura",
                url: "",
            },
            {
                tipo: "invertida",
                volanta: "'Siguen vigentes'",
                titulo: "Cuáles son los acuerdos de cooperación que la Argentina mantiene con Rusia",
                imagen: "https://resizer.glanacion.com/resizer/C0GcoEEA_2O2jBC2LnOcsY-yy2c=/318x213/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/LYRNYTN2MRGPXH4AL7T32425LE.jpg",
                marquesina: "Guerra en Ucrania",
                url: "https://www.lanacion.com.ar/politica/el-gobierno-afirmo-que-siguen-vigentes-los-acuerdos-de-cooperacion-firmados-con-rusia-a-pesar-de-la-nid24022022/",
            },
            {
                volanta: "Docentes",
                titulo: "Pese a la pauta de 45% que trazó la Nación, hay conflictos salariales en al menos cuatro provincias",
                nombreAutor: "Delfina Celichini",
                url: "https://www.lanacion.com.ar/politica/pese-a-la-pauta-de-45-que-trazo-la-nacion-hay-conflictos-salariales-con-docentes-en-al-menos-cuatro-nid24022022/",
            },
        ],
    },
    {
        tipo: "notas_3",
        articulos: [
            {
                tipo: "",
                volanta: "Hackear al Estado",
                titulo: "Así operan las ciberbandas que secuestran bases de datos y exigen rescate",
                imagen: "https://resizer.glanacion.com/resizer/KcDSXZNWUX40yXERrr9zob2kqP0=/298x200/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/KXHG55SY5FDZDOQVEXJUVNV6TQ.gif",
                nombreAutor: "Hugo Alconada Mon",
                url: "https://www.lanacion.com.ar/politica/hackear-al-estado-asi-operan-las-ciberbandas-que-secuestran-bases-de-datos-y-exigen-rescate-nid24022022/",
            },
            {
                tipo: "",
                volanta: "Por twitter",
                titulo: "Alberto Fernández le pidió a Rusia que cese el ataque y que respete la soberanía",
                bajada: "El Presidente se refirió al conflicto bélico después de la suave condena que hizo la Cancillería; “que todas las partes vuelvan a la mesa de diálogo”, dijo",
                marquesina: "Guerra en Ucrania",
                url: "https://www.lanacion.com.ar/politica/alberto-fernandez-le-pidio-a-rusia-que-cese-el-ataque-y-que-respete-la-soberania-nid24022022/",
            },
            {
                tipo: "autor",
                volanta: "Laberinto diplomático",
                titulo: "Guerra Rusia-Ucrania: la alianza con Putin puso a Alberto Fernández en una tierra de nadie",
                nombreAutor: "Martín Rodríguez Yebra",
                imagenAutor:
                    "https://resizer.glanacion.com/resizer/_CEx8TiR8Yrf5PBH7QEGWf1_2Yc=/80x0/filters:format(webp):quality(80)/s3.amazonaws.com/arc-authors/lanacionar/f0212d19-1095-4cc1-a332-2c03755f69df.png",
                url: "https://www.lanacion.com.ar/politica/guerra-rusia-ucrania-la-alianza-con-putin-puso-a-alberto-fernandez-en-una-tierra-de-nadie-nid24022022/",
            },
        ],
    },
];

export default articles;
