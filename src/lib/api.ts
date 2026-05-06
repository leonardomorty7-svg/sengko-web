import { sanityClient } from './sanity';
import groq from 'groq';

export interface Project {
  title: string;
  slug: string;
  image?: any;
  city: string;
  area: string;
  fallbackImage?: string;
}

export interface Service {
  title: string;
  description: string;
  icon?: string;
}

// MOCK DATA FALLBACKS
const MOCK_PROJECTS: Project[] = [
  {
    title: 'Planta Industrial de Procesamiento',
    slug: 'planta-industrial-procesamiento',
    city: 'Monterrey, MX',
    area: 'Nave Industrial',
    fallbackImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800&h=1000'
  },
  {
    title: 'Complejo Comercial Logístico',
    slug: 'complejo-comercial-logistico',
    city: 'Querétaro, MX',
    area: 'Estructura Metálica',
    fallbackImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800&h=1000'
  },
  {
    title: 'Infraestructura de Almacenamiento',
    slug: 'infraestructura-almacenamiento',
    city: 'Guadalajara, MX',
    area: 'Ingeniería Estructural',
    fallbackImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800&h=1000'
  },
  {
    title: 'Centro de Distribución Avanzado',
    slug: 'centro-distribucion-avanzado',
    city: 'Estado de México, MX',
    area: 'Montaje Estructural',
    fallbackImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800&h=1000'
  }
];

const MOCK_SERVICES: Service[] = [
  {
    title: 'Diseño estructural',
    description: 'Cálculo y desarrollo de soluciones estructurales optimizadas según normativa y requerimientos del proyecto.'
  },
  {
    title: 'Modelado BIM',
    description: 'Desarrollo de modelos digitales y planos de taller para coordinación precisa y ejecución eficiente.'
  },
  {
    title: 'Fabricación de estructuras metálicas',
    description: 'Producción de elementos estructurales bajo estándares de calidad y control técnico.'
  },
  {
    title: 'Montaje estructural',
    description: 'Instalación en obra con equipos especializados y cumplimiento de cronogramas.'
  },
  {
    title: 'Inspección y control de calidad',
    description: 'Verificación técnica en cada fase para garantizar seguridad y desempeño estructural.'
  }
];

export async function getProjects(): Promise<Project[]> {
  try {
    const query = groq`*[_type == "project"] {
      title,
      "slug": slug.current,
      image,
      city,
      area
    }`;
    const projects = await sanityClient.fetch(query);
    
    // If we have an actual project ID and it returns data, use it.
    // Otherwise, if it's empty or the ID is placeholder, use mock.
    if (projects && projects.length > 0) {
      return projects;
    }
    return MOCK_PROJECTS;
  } catch (error) {
    console.error('Error fetching projects from Sanity, using mock data:', error);
    return MOCK_PROJECTS;
  }
}

export async function getServices(): Promise<Service[]> {
  try {
    const query = groq`*[_type == "service"] {
      title,
      description,
      "icon": icon.asset->url
    }`;
    const services = await sanityClient.fetch(query);
    
    if (services && services.length > 0) {
      return services;
    }
    return MOCK_SERVICES;
  } catch (error) {
    console.error('Error fetching services from Sanity, using mock data:', error);
    return MOCK_SERVICES;
  }
}
