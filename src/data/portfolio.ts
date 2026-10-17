export const profile = {
  name: 'Daniel Balderas',
  fullName: 'Daniel Abner Balderas Tovar',
  email: 'danielabnerbt@gmail.com',
  github: 'https://github.com/DanielAbner17',
  linkedin:
    'https://www.linkedin.com/in/daniel-abner-balderas-tovar-275406113/',
  cv: '/daniel-balderas-cv.pdf',
};

export const contributions = [
  {
    label: '01 / UNA HERRAMIENTA PARA COLABORAR',
    figure: '200+',
    title: 'usuarios en una plataforma interna',
    description:
      'Diseñé y desarrollé una plataforma de mejora continua con autenticación, permisos por rol y contenido colaborativo.',
    context: 'Grupo México Infraestructura',
  },
  {
    label: '02 / UNA ARQUITECTURA COMPARTIDA',
    figure: 'Una base.',
    title: 'distintos sitios corporativos',
    description:
      'Estandaricé el frontend con Astro, TypeScript y Tailwind CSS. Creé componentes y plantillas para simplificar las actualizaciones entre sitios.',
    context: 'Grupo México Infraestructura',
  },
  {
    label: '03 / UNA MEJOR EXPERIENCIA DE COMPRA',
    figure: '+18 %',
    title: 'en ventas, reportado por el cliente',
    description:
      'Trabajé en navegación, rendimiento y flujo de compra de un e-commerce. El cliente registró ese crecimiento en cinco meses.',
    context: 'Proyecto independiente · E-commerce',
  },
];

export const experience = [
  {
    period: 'AGO 2022 — JUL 2025',
    company: 'Grupo México Infraestructura',
    role: 'Desarrollador frontend',
    description:
      'Lideré el desarrollo de sitios para centros comerciales, desde los requerimientos y la arquitectura hasta la validación y publicación.',
    points: [
      'Integré Google Maps API, GA4 y Firebase para incorporar ubicación, analítica y servicios de datos.',
      'Mejoré la carga y la visualización móvil con imágenes optimizadas y carga diferida, guiándome por Lighthouse y Core Web Vitals.',
      'Automaticé los despliegues de producción y previsualización en Vercel, con reversión controlada de versiones.',
      'Establecí un flujo de requerimientos, QA manual y documentación; organicé prioridades con prácticas Scrum y Kanban.',
    ],
    tags: ['Astro', 'TypeScript', 'React', 'Firebase'],
  },
  {
    period: '2017 — 2022',
    company: 'Proyectos para clientes',
    role: 'Desarrollador web independiente',
    description:
      'Encabecé proyectos de comercio electrónico, educación y salud: definí propuestas técnicas y alcance, y asumí desarrollo, despliegue y soporte.',
    points: [
      'Creé una plataforma educativa con React y Firebase para administrar recursos mediante un sistema de contenido personalizado.',
      'Desarrollé un sistema de citas médicas con Node.js, GraphQL y Firebase, integrando usuarios, calendarios y roles.',
      'Construí temas personalizados de WordPress y adapté sitios HTML a PHP según las necesidades de gestión de contenido.',
    ],
    tags: ['React', 'Node.js', 'GraphQL', 'WordPress'],
  },
  {
    period: 'JUL 2017',
    company: 'NETT · Monterrey',
    role: 'Desarrollador frontend',
    description:
      'Desarrollé sitios corporativos responsive con WordPress a partir de las necesidades del cliente.',
    points: [
      'Creé temas personalizados, formularios y funciones de contenido, incorporando mejoras de usabilidad y SEO.',
      'Implementé interfaces con HTML, CSS, JavaScript y PHP; utilicé Git y Webpack en proyectos simultáneos.',
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
