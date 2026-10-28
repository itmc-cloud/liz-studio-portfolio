export type Lang = 'es' | 'en'
export type Localized = Record<Lang, string>

/** Region of a 1600×900 slide in `public/portfolio`, in slide pixels. */
export interface CropRegion {
  src: string
  x: number
  y: number
  w: number
  h: number
}

export const SLIDE = { w: 1600, h: 900 }

const slide = (file: string, x: number, y: number, w: number, h: number): CropRegion => ({
  src: `/portfolio/${file}`,
  x,
  y,
  w,
  h,
})

export interface Piece {
  id: string
  title: Localized
  note?: Localized
  crop: CropRegion
}

export const logos: Piece[] = [
  { id: 'sinsonte', title: { es: 'El Sinsonte Mercadito', en: 'El Sinsonte Mercadito' }, crop: slide('logos.jpeg', 625, 248, 272, 272) },
  { id: 'velamar', title: { es: 'Vela Mar', en: 'Vela Mar' }, crop: slide('logos.jpeg', 932, 255, 272, 272) },
  { id: 'nelson', title: { es: 'Nelson Barber', en: 'Nelson Barber' }, crop: slide('logos.jpeg', 1251, 253, 268, 268) },
  { id: 'iglesia', title: { es: 'Iglesia Vida', en: 'Iglesia Vida' }, crop: slide('logos.jpeg', 637, 540, 268, 268) },
  { id: 'ebenezer', title: { es: 'Ebenezer', en: 'Ebenezer' }, crop: slide('logos.jpeg', 937, 537, 272, 272) },
  { id: 'lissas', title: { es: 'Lissa’s Books', en: 'Lissa’s Books' }, crop: slide('logos.jpeg', 1242, 537, 276, 276) },
]

export const brands: { id: string; name: string; detail: Localized }[] = [
  {
    id: 'ebenezer',
    name: 'Ebenezer',
    detail: {
      es: 'Restaurante y pizzería · verde bosque, ámbar y crema.',
      en: 'Restaurant & pizzeria · forest green, amber and cream.',
    },
  },
  {
    id: 'velamar',
    name: 'Vela Mar by Stacey',
    detail: {
      es: 'Patrón de hibiscos y tipografía serif en tonos coral y terracota.',
      en: 'Hibiscus pattern and serif lettering in coral and terracotta.',
    },
  },
  {
    id: 'sinsonte',
    name: 'El Sinsonte Mercadito',
    detail: {
      es: 'Identidad fresca de mercado: frutas, un sinsonte y verde intenso.',
      en: 'Fresh market identity: fruit, a mockingbird and deep green.',
    },
  },
]

export const brandingSlide = '/portfolio/branding.jpeg'
export const agendasSlide = '/portfolio/agendas.jpeg'
export const portraitCrop = slide('sobre-mi.jpeg', 105, 135, 362, 422)
export const coverCrop = slide('portada.jpeg', 430, 140, 730, 640)

export const illustrations: Piece[] = [
  {
    id: 'paisaje',
    title: { es: 'Paisaje con reflejo', en: 'Landscape with reflection' },
    note: { es: 'Ilustración digital', en: 'Digital illustration' },
    crop: slide('ilustracion.jpeg', 87, 149, 584, 589),
  },
  {
    id: 'starter-pack',
    title: { es: 'Starter Pack · Grettel', en: 'Starter Pack · Grettel' },
    note: { es: 'Ilustración digital · hecha a mano, sin IA', en: 'Digital illustration · handmade, no AI' },
    crop: slide('ilustracion.jpeg', 895, 157, 583, 590),
  },
]

export const photos: Piece[] = [
  { id: 'floral', title: { es: 'Agenda floral 2024', en: 'Floral planner 2024' }, crop: slide('agendas.jpeg', 50, 85, 228, 279) },
  { id: 'cerezo', title: { es: 'Agenda flor de cerezo', en: 'Cherry blossom planner' }, crop: slide('agendas.jpeg', 548, 85, 209, 279) },
  { id: 'protea', title: { es: 'Agenda protea', en: 'Protea planner' }, crop: slide('agendas.jpeg', 771, 85, 214, 266) },
  { id: 'coleccion', title: { es: 'Colección de agendas', en: 'Planner collection' }, crop: slide('agendas.jpeg', 1018, 47, 234, 278) },
]

export const copy = {
  skip: { es: 'Saltar al contenido', en: 'Skip to content' },
  brand: 'LIZ GONZÁLEZ',
  navLabel: { es: 'Navegación principal', en: 'Main navigation' },
  langLabel: { es: 'Cambiar idioma', en: 'Switch language' },
  nav: [
    { href: '#logos', label: { es: 'Logos', en: 'Logos' } },
    { href: '#branding', label: { es: 'Branding', en: 'Branding' } },
    { href: '#editorial', label: { es: 'Editorial', en: 'Editorial' } },
    { href: '#ilustracion', label: { es: 'Ilustración', en: 'Illustration' } },
    { href: '#fotografia', label: { es: 'Fotografía', en: 'Photography' } },
    { href: '#about', label: { es: 'Sobre mí', en: 'About' } },
    { href: '#contact', label: { es: 'Contacto', en: 'Contact' } },
  ],
  hero: {
    eyebrow: { es: 'Diseñadora gráfica', en: 'Graphic designer' },
    title1: { es: 'Ideas hechas', en: 'Ideas made' },
    title2: { es: 'visibles.', en: 'visible.' },
    intro: {
      es: 'Branding, logos, diseño editorial, ilustración digital y fotografía de producto.',
      en: 'Branding, logos, editorial design, digital illustration and product photography.',
    },
    cta: { es: 'Ver el portafolio', en: 'Explore the portfolio' },
    scroll: { es: 'Desliza para explorar', en: 'Scroll to explore' },
    art: { es: 'Portafolio de Liz González, diseñadora gráfica', en: 'Portfolio of Liz González, graphic designer' },
  },
  sections: {
    logos: {
      eyebrow: { es: 'Identidad', en: 'Identity' },
      title: { es: 'Logofolio', en: 'Logofolio' },
      note: {
        es: 'Marcas para restaurantes, comercios, iglesia y emprendimientos.',
        en: 'Marks for restaurants, shops, a church and small businesses.',
      },
    },
    branding: {
      eyebrow: { es: 'Sistemas de marca', en: 'Brand systems' },
      title: { es: 'Branding', en: 'Branding' },
      note: {
        es: 'Paleta de color, tipografía, patrones y logotipo para cada marca.',
        en: 'Colour palette, typography, patterns and logo for each brand.',
      },
      alt: { es: 'Branding de Ebenezer, Vela Mar y El Sinsonte', en: 'Branding for Ebenezer, Vela Mar and El Sinsonte' },
    },
    editorial: {
      eyebrow: { es: 'Diseño editorial', en: 'Editorial design' },
      title: { es: 'Agendas personalizadas', en: 'Custom planners' },
      note: {
        es: 'Agendas 2024 en tamaño A5 (5,8 × 8,3 pulgadas) con separadores mensuales, habit tracker y stickers.',
        en: '2024 planners in A5 size (5.8 × 8.3 inches) with monthly dividers, habit tracker and stickers.',
      },
      alt: { es: 'Agendas personalizadas 2024: portadas, interiores y medidas', en: 'Custom 2024 planners: covers, interiors and dimensions' },
    },
    illustration: {
      eyebrow: { es: 'Ilustración digital', en: 'Digital illustration' },
      title: { es: 'Ilustración', en: 'Illustration' },
      note: { es: 'Piezas originales dibujadas a mano en digital.', en: 'Original pieces drawn by hand, digitally.' },
    },
    photography: {
      eyebrow: { es: 'Producto', en: 'Product' },
      title: { es: 'Fotografía', en: 'Photography' },
      note: { es: 'Fotografía de producto de las agendas.', en: 'Product photography of the planners.' },
    },
  },
  about: {
    eyebrow: { es: 'Hola!', en: 'Hello!' },
    title1: { es: 'Piezas visuales', en: 'Visual pieces' },
    title2: { es: 'funcionales y estéticas.', en: 'that work and delight.' },
    bio: {
      es: 'Diseñadora gráfica creativa con enfoque en la creación de piezas visuales funcionales y estéticas. Especializada en branding, diseño editorial (agendas personalizadas) e ilustración digital. Con gran capacidad para traducir conceptos en imágenes impactantes y dominio de la fotografía de producto.',
      en: 'Creative graphic designer focused on functional, aesthetic visual pieces. Specialised in branding, editorial design (custom planners) and digital illustration, with a strong ability to turn concepts into striking images and command of product photography.',
    },
    portraitAlt: { es: 'Retrato de Liz González', en: 'Portrait of Liz González' },
    loveTitle: { es: 'Lo que amo hacer', en: 'What I love to do' },
    love: [
      { es: 'Ilustración', en: 'Illustration' },
      { es: 'Logos', en: 'Logos' },
      { es: 'Diseño editorial', en: 'Editorial design' },
      { es: 'Fotografía', en: 'Photography' },
    ],
    educationTitle: { es: 'Educación', en: 'Education' },
    education: [
      { year: '2019', label: { es: 'Técnico', en: 'Technical degree' } },
      { year: '2026', label: { es: 'Licenciatura', en: 'Bachelor’s degree' } },
    ],
    skillsTitle: { es: 'Habilidades', en: 'Skills' },
    skills: [
      { es: 'Creatividad', en: 'Creativity' },
      { es: 'Liderazgo', en: 'Leadership' },
      { es: 'Resolución de problemas', en: 'Problem solving' },
      { es: 'Gestión', en: 'Management' },
      { es: 'Previsión', en: 'Foresight' },
    ],
    toolsTitle: { es: 'Herramientas', en: 'Tools' },
    tools: ['Illustrator', 'Photoshop', 'InDesign', 'Canva'],
  },
  contact: {
    eyebrow: { es: '¿Tienes una buena idea?', en: 'Have a good idea?' },
    title1: { es: 'Hagámosla', en: 'Let’s make it' },
    title2: { es: 'visible.', en: 'visible.' },
    text: {
      es: 'Para colaboraciones y proyectos, escríbeme.',
      en: 'For collaborations and projects, get in touch.',
    },
    email: 'lizgg@gmail.com',
  },
  footer: {
    tagline: { es: 'Ideas hechas visibles.', en: 'Ideas made visible.' },
    top: { es: 'Volver arriba ↑', en: 'Back to top ↑' },
  },
}
