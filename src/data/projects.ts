import type { ImageMetadata } from 'astro';
import ciudadela from '../assets/projects/ciudadela.webp';
import urbanVillage from '../assets/projects/urban-village.webp';
import medicaFertil from '../assets/projects/medica-fertil.webp';
import refabulare from '../assets/projects/refabulare.webp';
import interamerica from '../assets/projects/interamerica.webp';

interface ProjectImage {
  src: ImageMetadata;
  alt: string;
  caption: string;
  sourceUrl: string;
}

export interface Project {
  slug: string;
  number: string;
  name: string;
  context: string;
  seoTitle: string;
  seoDescription: string;
  focus: string;
  description: string;
  technologies: string[];
  technologyScope?: string;
  siteUrl: string;
  image: ProjectImage;
  sections: { title: string; text: string }[];
  additionalImage?: ProjectImage;
}

// Las capturas documentan la web pública actual, no una versión histórica.
export const captureDate = '20 de octubre de 2026';

export const projects: Project[] = [
  {
    slug: 'grupo-mexico',
    seoTitle: 'Grupo México: arquitectura frontend | Abner Tovar',
    seoDescription:
      'Desarrollé sitios para 16 centros comerciales de Grupo México. Conoce la arquitectura compartida, los componentes reutilizables y mi participación.',
    number: '01',
    name: 'Una base, 16 centros comerciales',
    context: 'Empleo · Grupo México Infraestructura',
    focus: 'Arquitectura compartida · Sitios corporativos',
    description:
      'Desarrollé sitios para 16 centros comerciales de Grupo México. Definí una arquitectura frontend compartida, creé componentes y plantillas reutilizables e integré servicios. Asumí la validación y el despliegue, adaptando cada sitio a sus contenidos y necesidades.',
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    technologyScope:
      'Tecnologías de la base compartida; las funcionalidades varían por sitio.',
    siteUrl: 'https://ciudadelaurbanvillage.com.mx/',
    image: {
      src: ciudadela,
      alt: 'Inicio de Ciudadela Urban Village: fotografía aérea del centro comercial y acceso al directorio.',
      caption: 'Ciudadela Urban Village · inicio actual',
      sourceUrl: 'https://ciudadelaurbanvillage.com.mx/',
    },
    sections: [
      {
        title: 'El punto de partida',
        text: 'Organicé los requisitos comunes de los sitios sin perder los contenidos y las particularidades de cada centro comercial.',
      },
      {
        title: 'Mi responsabilidad',
        text: 'Definí la arquitectura frontend, implementé interfaces e integré servicios. Estandaricé componentes y plantillas con Astro, TypeScript y Tailwind CSS, y asumí las pruebas y la publicación.',
      },
      {
        title: 'Decisiones y entrega',
        text: 'Reutilicé componentes para reducir trabajo repetitivo y facilitar actualizaciones. Optimicé imágenes y carga diferida para mejorar la experiencia móvil, guiándome por Lighthouse y Core Web Vitals. Automaticé despliegues y previsualizaciones en Vercel.',
      },
      {
        title: 'Alcance del caso',
        text: 'Desarrollé los 16 sitios de esta lista. Ciudadela y Urban Village Garza Sada conservan mi implementación y representan la arquitectura descrita. Las funcionalidades, integraciones y tecnologías varían entre sitios.',
      },
    ],
    additionalImage: {
      src: urbanVillage,
      alt: 'Inicio de Urban Village Garza Sada: vista del centro comercial con el Cerro de la Silla al fondo.',
      caption: 'Urban Village Garza Sada · inicio actual',
      sourceUrl: 'https://urbanvillagegs.com.mx/',
    },
  },
  {
    slug: 'medica-fertil',
    seoTitle: 'Médica Fértil: sistema de citas | Abner Tovar',
    seoDescription:
      'Desarrollé un sistema de citas con Node.js, GraphQL y Firebase para Médica Fértil. Conoce mi participación y el alcance de la implementación original.',
    number: '02',
    name: 'Médica Fértil',
    context: 'Independiente · Salud',
    focus: 'Sitio público + sistema de citas',
    description:
      'Desarrollé el sitio y un sistema de citas para Médica Fértil, desde el contacto inicial hasta el despliegue y el soporte. Integré usuarios, calendarios y roles. Mi sistema fue reemplazado posteriormente; la captura corresponde al sitio público actual.',
    technologies: ['Node.js', 'GraphQL', 'Firebase'],
    technologyScope: 'Tecnologías de mi sistema de citas original.',
    siteUrl: 'https://medicafertil.mx/',
    image: {
      src: medicaFertil,
      alt: 'Inicio actual de Médica Fértil, con navegación de servicios y fotografía de una familia.',
      caption: 'Sitio público actual · no muestra mi sistema de citas',
      sourceUrl: 'https://medicafertil.mx/',
    },
    sections: [
      {
        title: 'El encargo',
        text: 'Definí el alcance de la web y del sistema de citas con el cliente. Asumí el desarrollo, el despliegue y el soporte posterior.',
      },
      {
        title: 'Mi implementación',
        text: 'Desarrollé el sistema de citas con Node.js, GraphQL y Firebase. Integré usuarios, calendarios y roles para gestionar el acceso y la operación de la agenda.',
      },
      {
        title: 'Qué se puede consultar hoy',
        text: 'Mi sistema de citas fue reemplazado. La agenda disponible hoy no es mi implementación. La captura muestra el sitio público actual; no documenta la interfaz ni las funcionalidades de mi sistema original.',
      },
    ],
  },
  {
    slug: 'refabulare',
    seoTitle: 'Refabulare: desarrollo web con React | Abner Tovar',
    seoDescription:
      'Desarrollé la web de Refabulare con React, JavaScript y Styled Components, como independiente para Loro Granada. Conoce mi aportación al proyecto.',
    number: '03',
    name: 'Refabulare',
    context: 'Independiente · Para Loro Granada',
    focus: 'Desarrollo web a medida',
    description:
      'Desarrollé la web del proyecto de acompañamiento y podcast Refabulare como independiente para Loro Granada. Implementé la experiencia con React, JavaScript y Styled Components, desde la definición del alcance hasta el despliegue y el soporte.',
    technologies: ['React', 'JavaScript', 'Styled Components'],
    siteUrl: 'https://refabulare.com/',
    image: {
      src: refabulare,
      alt: 'Inicio de Refabulare con una escultura clásica en blanco y negro y el texto Transforma tu historia.',
      caption: 'Refabulare · inicio actual',
      sourceUrl: 'https://refabulare.com/',
    },
    sections: [
      {
        title: 'El encargo',
        text: 'Desarrollé una web a medida para presentar Refabulare, sus servicios y su podcast, según las necesidades del cliente y en colaboración con Loro Granada.',
      },
      {
        title: 'Mi aportación',
        text: 'Participé como desarrollador independiente. Implementé la web con React, JavaScript y Styled Components, desde la definición del alcance hasta el despliegue y el soporte posterior.',
      },
      {
        title: 'La experiencia publicada',
        text: 'Organicé la presentación del proyecto, sus servicios y el acceso al podcast. Los episodios se escuchan en Spotify mediante enlaces externos.',
      },
    ],
  },
  {
    slug: 'interamerica',
    seoTitle: 'Interamérica: colaboración en WordPress | Abner Tovar',
    seoDescription:
      'Colaboré mediante NETT en secciones de Interamérica: de HTML a WordPress, funcionalidad PHP y elementos con Custom Post Types. Consulta mi participación.',
    number: '04',
    name: 'Interamérica',
    context: 'Colaboración · Mediante NETT',
    focus: 'De HTML a WordPress',
    description:
      'Colaboré mediante NETT en secciones de Interamérica. Convertí maquetación HTML a WordPress y añadí funcionalidad PHP en transmisiones en vivo, recursos y mapa del sitio. También incorporé elementos con Custom Post Types en otras páginas.',
    technologies: ['HTML', 'WordPress', 'PHP', 'Custom Post Types'],
    siteUrl: 'https://interamerica.org/es/',
    image: {
      src: interamerica,
      alt: 'Página de recursos de Interamérica con buscador y filtros por departamento, proyecto y evento.',
      caption: 'Recursos · captura actual en inglés',
      sourceUrl: 'https://interamerica.org/resources/',
    },
    sections: [
      {
        title: 'El contexto',
        text: 'Colaboré mediante NETT en secciones específicas de Interamérica. Mi participación se centró en la implementación y funcionalidad de esas secciones, no en todo el portal.',
      },
      {
        title: 'Mi aportación',
        text: 'Convertí maquetación HTML a WordPress y agregué funcionalidad con PHP. Trabajé en transmisiones en vivo, recursos y mapa del sitio, e incorporé elementos mediante Custom Post Types en secciones de otras páginas.',
      },
      {
        title: 'La referencia actual',
        text: 'Las secciones conservan parte de mi trabajo y han tenido cambios posteriores. La captura muestra Recursos en su estado actual, en inglés tras la redirección desde la ruta en español; no es una captura histórica de 2017.',
      },
    ],
  },
];

export const shoppingCenters = [
  ['Ciudadela Urban Village', 'https://ciudadelaurbanvillage.com.mx/'],
  ['Paseo Santa Catarina', 'https://paseosantacatarina.com.mx/'],
  ['Plaza Lago Real', 'https://plazalagoreal.com.mx/'],
  ['Urban Village Garza Sada', 'https://urbanvillagegs.com.mx/'],
  ['Plaza Bella Mexiquense', 'https://plazabellamexiquense.com.mx/'],
  ['Plaza López Mateos', 'https://plazalopezmateos.mx/'],
  ['Plaza Bella Ramos Arizpe', 'https://plazabellaramosarizpe.com.mx/'],
  ['Puntoriente', 'https://puntoriente.com.mx/'],
  ['Plaza Real Reynosa', 'https://plazarealreynosa.com.mx/'],
  ['Paseo San Isidro', 'https://paseosanisidro.com/'],
  ['Macroplaza San Luis', 'https://macroplazasanluis.com.mx/'],
  ['Paseo Puebla', 'https://paseopuebla.com.mx/'],
  ['Paseo Reforma', 'https://paseoreforma.com.mx/'],
  ['Paseo San Juan', 'https://paseosanjuanplaza.com/'],
  ['Macroplaza Oaxaca', 'https://macroplazaoaxaca.com/'],
  ['Macroplaza Estadio Morelia', 'https://macroplazaestadiomorelia.com.mx/'],
] as const;

export const historicalProject = {
  name: 'Loro Granada',
  context: 'Independiente · Agencia creativa · Proyecto histórico',
  description:
    'Desarrollé la web de Loro Granada con React, JavaScript y Styled Components a partir del diseño de su equipo. La referencia archivada conserva contenido, pero no el video animado del inicio.',
  archiveUrl:
    'https://web.archive.org/web/20221115192947/https://lorogranada.com/',
  archiveDate: '15 de noviembre de 2022',
};
