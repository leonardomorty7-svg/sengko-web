export interface ProjectData {
  title: string;
  slug: string;
  category: string;
  specs: string;
  location: string;
  image: string;
  description: string;
  solutions: string[];
  processes: string[];
  gallery: string[];
  participation?: string;
  scope: string;
}

export const projects: ProjectData[] = [
  {
    title: "Villa Hermosa",
    slug: "villa-hermosa",
    category: "ESTRUCTURA METÁLICA",
    specs: "23 ton · 540 m²",
    location: "Bello, Antioquia",
    image: "/projects/villa-hermosa/hero.jpg",
    description: "Infraestructura metálica para el sector industrial en Villa Hermosa, priorizando la iluminación natural y espacios libres de columnas para procesos de producción.",
    solutions: ["Pórticos de sección variable", "Lucernarios integrados", "Sistemas de ventilación natural"],
    processes: ["Soldadura semiautomática", "Granallado y pintura industrial", "Inspección de soldaduras UT"],
    gallery: [
      "/projects/villa-hermosa/gallery-01.jpg",
      "/projects/villa-hermosa/gallery-02.jpg",
      "/projects/villa-hermosa/gallery-03.jpg",
      "/projects/villa-hermosa/gallery-04.jpg",
      "/projects/villa-hermosa/gallery-05.jpg"
    ],
    scope: "Consultoría y Ejecución"
  },
  {
    title: "Postobón Malambo",
    slug: "postobon-malambo",
    participation: "Participación de SENGKO: fabricación y montaje de estructura metálica.",
    category: "ESTRUCTURA METÁLICA BODEGAS",
    specs: "170 ton · 6360 m²",
    location: "Malambo, Atlántico",
    image: "/projects/postobon-malambo/hero.jpg",
    description: "Desarrollo y montaje de infraestructura metálica de alto desempeño para bodegas industriales, garantizando la optimización del espacio y la resistencia estructural requerida por la operación de Postobón en Malambo. Ingeniería de precisión aplicada a gran escala.",
    solutions: ["Optimización de pórticos", "Diseño sismorresistente NSR-10", "Conexiones empernadas de alta resistencia"],
    processes: ["Modelado BIM Nivel 350", "Fabricación en planta certificada", "Montaje con grúas de alto tonelaje"],
    gallery: [
      "/projects/postobon-malambo/gallery-01.jpg",
      "/projects/postobon-malambo/gallery-02.jpg",
      "/projects/postobon-malambo/gallery-03.jpg"
    ],
    scope: "Consultoría"
  },
  {
    title: "Gonvarri",
    slug: "gonvarri",
    category: "ESTRUCTURA METÁLICA BODEGAS",
    specs: "17 ton · 600 m²",
    location: "Itagüí, Antioquia",
    image: "/projects/gonvarri/hero.jpg",
    description: "Ampliación de infraestructura industrial mediante estructuras metálicas precisas, cumpliendo con los estándares internacionales requeridos por las instalaciones de Gonvarri. Soluciones rápidas y eficientes para expansión industrial.",
    solutions: ["Refuerzo estructural", "Integración con estructura existente", "Optimización de acero"],
    processes: ["Levantamiento topográfico 3D", "Fabricación modular", "Montaje sin interrupción operativa"],
    gallery: [
      "/projects/gonvarri/gallery-01.jpg",
      "/projects/gonvarri/gallery-02.jpg",
      "/projects/gonvarri/gallery-03.jpg"
    ],
    scope: "Consultoría y Ejecución"
  },
  {
    title: "Cory",
    slug: "cory",
    category: "CUBIERTA METÁLICA",
    specs: "27 ton · 450 m²",
    location: "Medellín, Antioquia",
    image: "/projects/cory/hero.jpg",
    description: "Ejecución de cubierta metálica de grandes luces, diseñada para soportar cargas ambientales y proporcionar un cerramiento seguro y eficiente para las instalaciones. Estética industrial con funcionalidad superior.",
    solutions: ["Diseño de cerchas de gran luz", "Sistema de cubierta termoacústica", "Canales de recolección optimizados"],
    processes: ["Cálculo de cargas vivas y muertas", "Fabricación de cerchas", "Izaje especializado"],
    gallery: [
      "/projects/cory/gallery-01.jpg",
      "/projects/cory/gallery-02.jpg",
      "/projects/cory/gallery-03.jpg"
    ],
    scope: "Consultoría y Ejecución"
  },
  {
    title: "Vivo Buenos Aires",
    slug: "vivo-buenos-aires",
    category: "BODEGA + MEZANINE",
    specs: "15 ton · 400 m²",
    location: "Medellín, Antioquia",
    image: "/projects/vivo-buenos-aires/hero.jpg",
    description: "Estructura de mezanine industrial para maximizar el área útil de almacenamiento en el proyecto Vivo Buenos Aires. Diseñado para altas cargas y máxima eficiencia espacial.",
    solutions: ["Sistema de vigas compuestas", "Placa colaborante (Steel Deck)", "Diseño contra fuego"],
    processes: ["Diseño de conexiones a momento", "Instalación de pernos conectores", "Vaciado de losa"],
    gallery: [
      "/projects/vivo-buenos-aires/gallery-01.jpg",
      "/projects/vivo-buenos-aires/gallery-02.jpg",
      "/projects/vivo-buenos-aires/gallery-03.jpg"
    ],
    scope: "Consultoría y Ejecución"
  },
  {
    title: "Puente Peatonal Hatovial",
    slug: "puente-hatovial",
    participation: "Participación de SENGKO: fabricación y montaje de estructura metálica.",
    category: "INFRAESTRUCTURA",
    specs: "78 m · 65 ton",
    location: "Bello, Antioquia",
    image: "/projects/puente-hatovial/hero.jpg",
    description: "Infraestructura vial de alto impacto. Diseño, fabricación y montaje de puente peatonal cumpliendo con las especificaciones del Instituto Nacional de Vías (INVIAS).",
    solutions: ["Diseño en celosía", "Protección anticorrosiva marina", "Rampas de accesibilidad universal"],
    processes: ["Pruebas de carga estática", "Montaje nocturno", "Control de calidad de recubrimientos"],
    gallery: [
      "/projects/puente-hatovial/gallery-01.jpg",
      "/projects/puente-hatovial/gallery-02.jpg",
      "/projects/puente-hatovial/gallery-03.jpg"
    ],
    scope: "Consultoría"
  },
  {
    title: "Portello 19",
    slug: "portello-19",
    category: "BALCONES METÁLICOS",
    specs: "27 ton",
    location: "La Ceja, Antioquia",
    image: "/projects/portello-19/hero.jpg",
    description: "Sistemas de balcones metálicos en voladizo para edificación residencial Portello 19, ofreciendo una estética industrial moderna y máxima seguridad estructural.",
    solutions: ["Anclajes químicos", "Sistemas de barandas de vidrio", "Voladizos de gran luz sin apoyos"],
    processes: ["Cálculo de vibraciones", "Fabricación en serie", "Instalación en altura"],
    gallery: [
      "/projects/portello-19/gallery-01.jpg",
      "/projects/portello-19/gallery-02.jpg",
      "/projects/portello-19/gallery-03.jpg"
    ],
    scope: "Consultoría y Ejecución"
  },
  {
    title: "Kerry",
    slug: "kerry",
    category: "INFRAESTRUCTURA INDUSTRIAL",
    specs: "42 ton · 400 m²",
    location: "Rionegro, Antioquia",
    image: "/projects/kerry/hero.jpg",
    description: "Estructura metálica compleja para la planta industrial de Kerry. Integración de sistemas de soporte para maquinaria pesada y pasarelas técnicas de mantenimiento.",
    solutions: ["Soportes de alta carga", "Pasarelas técnicas", "Integración de procesos"],
    processes: ["Modelado detallado", "Montaje en planta activa", "Certificación de soldaduras"],
    gallery: [
      "/projects/kerry/gallery-01.jpg",
      "/projects/kerry/gallery-02.jpg",
      "/projects/kerry/gallery-03.jpg"
    ],
    scope: "Consultoría y Ejecución"
  },
  {
    title: "Parqueaderos y Cubiertas Metálicas",
    slug: "parqueaderos",
    category: "CUBIERTAS + PARQUEADEROS",
    specs: "Variable · Multifuncional",
    location: "Diversas Ubicaciones",
    image: "/projects/parqueaderos/hero.jpg",
    description: "Soluciones integrales de parqueaderos y cubiertas metálicas de alto desempeño. Desde sistemas solares hasta estructuras de gran escala para protección vehicular.",
    solutions: ["Sistemas solares integrados", "Estructuras de gran luz", "Diseño modular"],
    processes: ["Optimización de material", "Instalación rápida", "Mantenimiento mínimo"],
    gallery: [
      "/projects/parqueaderos/gallery-01.jpg",
      "/projects/parqueaderos/gallery-02.jpg",
      "/projects/parqueaderos/gallery-03.jpg"
    ],
    scope: "Consultoría y Ejecución"
  },
  {
    title: "Teatro Gestos Mnemes",
    slug: "teatro-gestos-mnemes",
    category: "PROYECTO EDIFICIOS",
    specs: "46 ton",
    location: "Bello, Antioquia",
    image: "/projects/teatro-gestos-mnemes/hero.jpg",
    description: "Construcción de estructura metálica para teatro cultural con sistema estructural de múltiples niveles, diseñado para espacios artísticos y circulación interior de alta resistencia.",
    solutions: [
      "Estructura metálica multinivel",
      "Vigas estructurales de gran luz",
      "Integración arquitectónica cultural"
    ],
    processes: [
      "Diseño estructural",
      "Fabricación especializada",
      "Montaje urbano de precisión"
    ],
    gallery: [
      "/projects/teatro-gestos-mnemes/gallery-01.jpg",
      "/projects/teatro-gestos-mnemes/gallery-02.jpg",
      "/projects/teatro-gestos-mnemes/gallery-03.jpg"
    ],
    scope: "Consultoría y Ejecución"
  },
  {
    title: "Bodega Textil",
    slug: "bodega-textil",
    category: "PROYECTO NAVES INDUSTRIALES",
    specs: "23 ton",
    location: "Bello, Antioquia",
    image: "/projects/bodega-textil/hero.jpg",
    description: "Construcción de estructura metálica industrial para bodega textil con espacios de operación amplios, alta resistencia estructural y optimización funcional interior.",
    solutions: [
      "Cerchas metálicas industriales",
      "Espacios de operación abiertos",
      "Optimización estructural interior"
    ],
    processes: [
      "Ingeniería estructural industrial",
      "Fabricación metálica",
      "Montaje técnico especializado"
    ],
    gallery: [
      "/projects/bodega-textil/gallery-01.jpg",
      "/projects/bodega-textil/gallery-02.jpg",
      "/projects/bodega-textil/gallery-03.jpg"
    ],
    scope: "Consultoría y Ejecución"
  }
];
