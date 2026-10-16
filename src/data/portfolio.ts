export const profile = {
  name: 'Daniel Balderas',
  fullName: 'Daniel Abner Balderas Tovar',
  email: 'danielabnerbt@gmail.com',
  github: 'https://github.com/DanielAbner17',
  linkedin:
    'https://www.linkedin.com/in/daniel-abner-balderas-tovar-275406113/',
  cv: '/daniel-balderas-cv.pdf',
};

export const experience = [
  {
    period: 'AGO 2022 — JUL 2025',
    company: 'Grupo México Infraestructura',
    role: 'Desarrollador frontend',
    description:
      'Sitios corporativos y herramientas que simplifican el trabajo de las personas.',
    points: [
      'Arquitectura reutilizable con Astro, TypeScript y Tailwind CSS para sitios de centros comerciales.',
      'Plataforma de mejora continua para más de 200 usuarios, con autenticación y acceso por roles.',
      'Optimización web, integración de Google Maps, GA4 y Firebase, y despliegues en Vercel.',
    ],
    tags: ['Astro', 'TypeScript', 'React', 'Firebase'],
  },
  {
    period: '2017 — 2022',
    company: 'Proyectos independientes',
    role: 'Desarrollador web',
    description:
      'De la primera conversación con el cliente al lanzamiento y soporte del producto.',
    points: [
      'Plataforma educativa con React y Firebase para gestionar contenido personalizado.',
      'Sistema de citas para salud con Node.js, GraphQL, calendarios y roles.',
      'Mejoras de experiencia y compra en e-commerce; el cliente reportó un aumento de ventas del 18 % en cinco meses.',
    ],
    tags: ['React', 'Node.js', 'GraphQL', 'WordPress'],
  },
  {
    period: 'JUL 2017',
    company: 'NETT · Monterrey',
    role: 'Desarrollador frontend',
    description:
      'Sitios corporativos adaptables, con atención a la usabilidad y al SEO.',
    points: [
      'Temas personalizados de WordPress, formularios y funciones de contenido.',
      'Interfaces con HTML, CSS, JavaScript y PHP; colaboración con Git y Webpack.',
    ],
    tags: ['JavaScript', 'WordPress', 'PHP', 'Git'],
  },
];

export interface Project {
  id: string;
  name: string;
  category: 'Aplicaciones' | 'Sitios web';
  type: 'dashboard' | 'store' | 'learning';
  description: string;
  tags: string[];
  details: string;
  demoUrl?: string;
  codeUrl?: string;
}

// Ejemplos conceptuales: sustituir por casos reales antes de presentarlos como trabajo propio.
export const projects: Project[] = [
  {
    id: '01',
    name: 'Pulse — Gestión de equipos',
    category: 'Aplicaciones',
    type: 'dashboard',
    description:
      'Un espacio para organizar ideas, visualizar avances y colaborar sin perder el contexto.',
    tags: ['React', 'TypeScript', 'Firebase'],
    details:
      'Concepto de una plataforma interna con un tablero de proyectos, seguimiento de avances y colaboración por equipos. La vista ilustra una posible dirección de interfaz; no corresponde a un producto publicado.',
  },
  {
    id: '02',
    name: 'Forma — Estudio digital',
    category: 'Sitios web',
    type: 'store',
    description:
      'Una propuesta editorial para una marca que cuida los detalles, desde la primera visita.',
    tags: ['Astro', 'Tailwind CSS', 'TypeScript'],
    details:
      'Concepto de un sitio para un estudio creativo: una composición editorial, tipografía protagonista y un catálogo visual de trabajo. La vista es ilustrativa y no corresponde a un encargo real.',
  },
  {
    id: '03',
    name: 'Aula — Aprender a tu ritmo',
    category: 'Aplicaciones',
    type: 'learning',
    description:
      'Una experiencia educativa centrada en el contenido y en el progreso de cada estudiante.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    details:
      'Concepto de una experiencia educativa con lecciones organizadas, seguimiento del aprendizaje y acceso a contenido personalizado. Es una propuesta visual de ejemplo, sin cursos ni funciones operativas.',
  },
];
