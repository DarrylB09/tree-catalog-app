export const TREES_DATA = [
  {
    id: 1,
    slug: 'roble',
    name: 'Roble',
    scientificName: 'Quercus spp.',
    type: 'Caducifolio',
    shortDesc: 'Árbol nativo fuerte y majestuoso, perfecto para espacios grandes y hábitat de vida silvestre',
    longDesc: 'El Roble es un árbol nativo fuerte y majestuoso, conocido por su longevidad y resistencia. Es una pieza fundamental en la restauración de ecosistemas, proporcionando sombra densa y un hábitat vital para numerosas especies de aves y pequeños mamíferos.',
    image: 'https://images.unsplash.com/photo-1544430221-51000f3be916?q=80&w=2072&auto=format&fit=crop',
    stats: {
      height: '20-30 metros',
      growth: 'Lento a Moderado',
      soil: 'Profundo, fértil, bien drenado',
      sun: 'Sol pleno',
      water: 'Moderada',
      climate: 'Templado'
    },
    benefits: [
      'Gran longevidad',
      'Excelente restauración de suelos',
      'Hábitat para vida silvestre',
      'Resistencia a vientos fuertes',
      'Belleza ornamental majestuosa'
    ]
  },
  {
    id: 2,
    slug: 'pino',
    name: 'Pino',
    scientificName: 'Pinus spp.',
    type: 'Perenne',
    shortDesc: 'Perenne de rápido crecimiento, ideal para control de erosión y cortavientos',
    longDesc: 'Los pinos son perennes de rápido crecimiento, ideales para el control de erosión, cortavientos y reforestación. Su adaptabilidad a diversas condiciones de suelo y crecimiento rápido los hacen excelentes opciones para proyectos de restauración.',
    image: 'https://images.unsplash.com/photo-1510423014163-53d74bc48b26?q=80&w=2074&auto=format&fit=crop',
    stats: {
      height: '15-25 metros',
      growth: 'Rápido',
      soil: 'Adaptable, bien drenado',
      sun: 'Sol pleno',
      water: 'Bajas a Moderadas',
      climate: 'Templado a Subtropical'
    },
    benefits: [
      'Establecimiento rápido',
      'Verdor durante todo el año',
      'Excelente cortavientos',
      'Producción de madera',
      'Estabilización del suelo'
    ]
  },
  {
    id: 3,
    slug: 'arce',
    name: 'Arce',
    scientificName: 'Acer spp.',
    type: 'Caducifolio',
    shortDesc: 'Colores vibrantes y excelente proveedor de sombra para parques y áreas residenciales',
    longDesc: 'Famoso por sus colores otoñales vibrantes, el Arce es un excelente proveedor de sombra. Es muy valorado en paisajismo urbano y parques por su belleza estética y su capacidad para mejorar la calidad del aire en entornos residenciales.',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070&auto=format&fit=crop',
    stats: {
      height: '10-20 metros',
      growth: 'Moderado',
      soil: 'Húmedo, bien drenado, rico',
      sun: 'Sol pleno a Media sombra',
      water: 'Moderada a Alta',
      climate: 'Templado'
    },
    benefits: [
      'Valor ornamental excepcional',
      'Excelente sombra estival',
      'Adaptabilidad urbana',
      'Mejora la biodiversidad local',
      'Raíces no agresivas'
    ]
  },
  {
    id: 4,
    slug: 'sauce',
    name: 'Sauce',
    scientificName: 'Salix spp.',
    type: 'Caducifolio',
    shortDesc: 'Especie de rápido crecimiento, excelente para restauración de humedales y zonas ribereñas',
    longDesc: 'El Sauce es un árbol de crecimiento extremadamente rápido y una gran afinidad por el agua. Es la especie ideal para estabilizar orillas de ríos, rehabilitar humedales y controlar el exceso de humedad en terrenos bajos.',
    image: 'https://images.unsplash.com/photo-1510423014163-53d74bc48b26?q=80&w=2074&auto=format&fit=crop', // Placeholder image
    stats: {
      height: '10-15 metros',
      growth: 'Muy Rápido',
      soil: 'Húmedo, arcilloso',
      sun: 'Sol pleno',
      water: 'Alta',
      climate: 'Templado a Húmedo'
    },
    benefits: [
      'Control de inundaciones',
      'Estabilización de riberas',
      'Crecimiento acelerado',
      'Fácil propagación',
      'Filtración de agua'
    ]
  },
  {
    id: 5,
    slug: 'cedro',
    name: 'Cedro',
    scientificName: 'Cedrus spp.',
    type: 'Perenne',
    shortDesc: 'Perenne aromático con excelente resistencia a plagas y enfermedades',
    longDesc: 'El Cedro es una conífera majestuosa conocida por su madera aromática y duradera. Es una especie muy resistente que aporta un valor paisajístico imponente y una gran capacidad de captura de carbono durante todo el año.',
    image: 'https://images.unsplash.com/photo-1544430221-51000f3be916?q=80&w=2072&auto=format&fit=crop', // Placeholder image
    stats: {
      height: '25-35 metros',
      growth: 'Moderado',
      soil: 'Bien drenado, profundo',
      sun: 'Sol pleno',
      water: 'Moderada',
      climate: 'Templado a Seco'
    },
    benefits: [
      'Madera de alta calidad',
      'Resistencia a plagas',
      'Captura de carbono continua',
      'Aroma natural',
      'Longevidad extrema'
    ]
  },
  {
    id: 6,
    slug: 'abedul',
    name: 'Abedul',
    scientificName: 'Betula spp.',
    type: 'Caducifolio',
    shortDesc: 'Elegante corteza blanca y adaptable a diversas condiciones de suelo',
    longDesc: 'El Abedul destaca por su elegante corteza blanca plateada y su forma esbelta. Es un árbol "pionero" capaz de colonizar suelos pobres, facilitando la llegada de otras especies y mejorando la salud del ecosistema forestal.',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070&auto=format&fit=crop', // Placeholder image
    stats: {
      height: '15-20 metros',
      growth: 'Rápido',
      soil: 'Húmedo, arenoso',
      sun: 'Sol pleno',
      water: 'Moderada a Alta',
      climate: 'Templado a Frío'
    },
    benefits: [
      'Corteza ornamental única',
      'Mejora suelos degradados',
      'Atrae aves polinizadoras',
      'Tolerancia al frío',
      'Estructura ligera y aireada'
    ]
  }
];
