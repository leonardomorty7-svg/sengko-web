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
}

export const projects: ProjectData[] = [
  {
    title: "Postobón Malambo",
    slug: "postobon-malambo",
    category: "ESTRUCTURA METÁLICA BODEGAS",
    specs: "170 ton · 6360 m²",
    location: "Malambo, Atlántico",
    image: "/projects/postobon-01.jpg",
    description: "Desarrollo y montaje de infraestructura metálica de alto desempeño para bodegas industriales, garantizando la optimización del espacio y la resistencia estructural requerida por la operación de Postobón en Malambo.",
    solutions: ["Optimización de pórticos", "Diseño sismorresistente NSR-10", "Conexiones empernadas de alta resistencia"],
    processes: ["Modelado BIM Nivel 350", "Fabricación en planta certificada", "Montaje con grúas de alto tonelaje"],
    gallery: [
      "/projects/postobon-01.jpg",
      "/images/projects/parqueadero-01.jpg",
      "/images/projects/edificio-01.jpg"
    ]
  },
  {
    title: "Gonvarri",
    slug: "gonvarri",
    category: "ESTRUCTURA METÁLICA BODEGAS",
    specs: "17 ton · 600 m²",
    location: "Itagüí, Antioquia",
    image: "/projects/gonvarri-01.jpg",
    description: "Ampliación de infraestructura industrial mediante estructuras metálicas precisas, cumpliendo con los estándares internacionales requeridos por las instalaciones de Gonvarri.",
    solutions: ["Refuerzo estructural", "Integración con estructura existente", "Optimización de acero"],
    processes: ["Levantamiento topográfico 3D", "Fabricación modular", "Montaje sin interrupción operativa"],
    gallery: [
      "/projects/gonvarri-01.jpg",
      "/images/projects/cory-01.jpg",
      "/images/projects/parqueadero-01.jpg"
    ]
  },
  {
    title: "Cory",
    slug: "cory",
    category: "CUBIERTA METÁLICA",
    specs: "27 ton · 450 m²",
    location: "Medellín, Antioquia",
    image: "/projects/cory-01.jpg",
    description: "Ejecución de cubierta metálica de grandes luces, diseñada para soportar cargas ambientales y proporcionar un cerramiento seguro y eficiente para las instalaciones.",
    solutions: ["Diseño de cerchas de gran luz", "Sistema de cubierta termoacústica", "Canales de recolección optimizados"],
    processes: ["Cálculo de cargas vivas y muertas", "Fabricación de cerchas", "Izaje especializado"],
    gallery: [
      "/projects/cory-01.jpg",
      "/projects/postobon-01.jpg",
      "/projects/gonvarri-01.jpg"
    ]
  },
  {
    title: "Mezanine Buenos Aires",
    slug: "mezanine-buenos-aires",
    category: "BODEGA + MEZANINE",
    specs: "15 ton · 400 m²",
    location: "Medellín, Antioquia",
    image: "/projects/mezanine-01.jpg",
    description: "Estructura de mezanine industrial para maximizar el área útil de almacenamiento, con capacidad de carga superior para requerimientos logísticos pesados.",
    solutions: ["Sistema de vigas compuestas", "Placa colaborante (Steel Deck)", "Diseño contra fuego"],
    processes: ["Diseño de conexiones a momento", "Instalación de pernos conectores", "Vaciado de losa"],
    gallery: [
      "/projects/mezanine-01.jpg",
      "/images/projects/edificio-01.jpg",
      "/projects/bodega-textil-01.jpg"
    ]
  },
  {
    title: "Bodega Textil",
    slug: "bodega-textil",
    category: "ESTRUCTURA METÁLICA",
    specs: "23 ton · 540 m²",
    location: "Bello, Antioquia",
    image: "/projects/bodega-textil-01.jpg",
    description: "Infraestructura metálica para el sector textil, priorizando la iluminación natural y espacios libres de columnas para optimizar la cadena de producción.",
    solutions: ["Pórticos de sección variable", "Lucernarios integrados", "Sistemas de ventilación natural"],
    processes: ["Soldadura semiautomática", "Granallado y pintura industrial", "Inspección de soldaduras UT"],
    gallery: [
      "/projects/bodega-textil-01.jpg",
      "/images/projects/cory-01.jpg",
      "/projects/mezanine-01.jpg"
    ]
  },
  {
    title: "Puente Peatonal Hatovial",
    slug: "puente-peatonal-hatovial",
    category: "INFRAESTRUCTURA",
    specs: "78 m · 65 ton",
    location: "Bello, Antioquia",
    image: "/projects/puente-01.jpg",
    description: "Infraestructura vial de alto impacto. Diseño, fabricación y montaje de puente peatonal cumpliendo con las especificaciones del Instituto Nacional de Vías.",
    solutions: ["Diseño en celosía", "Protección anticorrosiva marina", "Rampas de accesibilidad universal"],
    processes: ["Pruebas de carga estática", "Montaje nocturno", "Control de calidad de recubrimientos"],
    gallery: [
      "/projects/puente-01.jpg",
      "/projects/postobon-01.jpg",
      "/images/projects/parqueadero-01.jpg"
    ]
  },
  {
    title: "Teatro Gestos Mnemos",
    slug: "teatro-gestos-mnemos",
    category: "EDIFICACIÓN",
    specs: "460 m² · 46 ton",
    location: "Bello, Antioquia",
    image: "/projects/edificio-01.jpg",
    description: "Edificación cultural con requerimientos arquitectónicos y acústicos exigentes. La estructura metálica permitió resolver geometrías complejas con precisión.",
    solutions: ["Vigas curvas", "Integración acústica", "Detalles arquitectónicos expuestos"],
    processes: ["Rolado de perfiles", "Conexiones arquitectónicas aparentes", "Pintura intumescente"],
    gallery: [
      "/projects/edificio-01.jpg",
      "/images/projects/edificio-01.jpg",
      "/projects/balcones-01.jpg"
    ]
  },
  {
    title: "Portello 19",
    slug: "portello-19",
    category: "BALCONES METÁLICOS",
    specs: "27 ton",
    location: "La Ceja, Antioquia",
    image: "/projects/balcones-01.jpg",
    description: "Sistemas de balcones metálicos en voladizo para edificación residencial, ofreciendo una estética industrial moderna y máxima seguridad estructural.",
    solutions: ["Anclajes químicos", "Sistemas de barandas de vidrio", "Voladizos de gran luz sin apoyos"],
    processes: ["Cálculo de vibraciones", "Fabricación en serie", "Instalación en altura"],
    gallery: [
      "/projects/balcones-01.jpg",
      "/projects/mezanine-01.jpg",
      "/images/projects/cory-01.jpg"
    ]
  }
];
