export const content = {
  name: 'Plátano Macho Restaurante "Cánovas"',
  shortName: 'Plátano Macho',
  tagline: 'Restaurante colombiano de comida callejera latina en pleno Eixample, Valencia',
  description:
    'En Plátano Macho traemos los sabores de Colombia al corazón de Valencia: arepas, patacones, ceviches y platos de la cocina callejera latina, elaborados con producto fresco y mucho cariño. Un rincón con ambiente tropical, decoración de bambú y plantas, pensado para comer, tomar algo y sentir un poquito de la tierrita sin salir de L\'Eixample.',
  metaDescription:
    'Restaurante colombiano en Valencia (L\'Eixample). Arepas, patacones, ceviches y comida callejera latina. Terraza, reservas y para llevar. ★ 4.8 en Google.',
  keywords: [
    'Plátano Macho Valencia',
    'restaurante colombiano Valencia',
    'comida latina Valencia',
    'arepas Valencia',
    'patacones Valencia',
    'restaurante Eixample',
    'comida callejera latina',
    'restaurante colombiano cerca de mí',
  ],
  priceRange: '20 € - 30 €',
  priceRangeDisplay: '20 € – 30 € por persona',
  cuisine: 'Colombiana',

  rating: { value: 4.8, count: 1273, countDisplay: '1273 reseñas' },
  highlights: [
    'Sabores auténticos de la cocina callejera colombiana',
    'Ambiente tropical con decoración de bambú y plantas',
    'Terraza y espacio apto para grupos y niños',
    'Opciones vegetarianas, cócteles y postres típicos',
  ],

  address: {
    streetAddress: 'Carrer de Salamanca, 13',
    addressLocality: 'València',
    addressRegion: 'Valencia',
    postalCode: '46005',
    addressCountry: 'ES',
    full: 'Carrer de Salamanca, 13, L\'Eixample, 46005 València, Valencia',
  },
  geo: { lat: 39.4670924, lng: -0.3646593 },

  phone: '+34648229409',
  phoneDisplay: '648 22 94 09',
  whatsappNumber: '34648229409',
  email: '',

  siteUrl: 'https://samuelfagundez.github.io/platano-macho-restaurante-canovas/',

  social: {
    instagram: 'https://www.instagram.com/platano.macho.es',
    facebook: '',
    tiktok: '',
    whatsapp: '',
  },

  hours: [
    { day: 'Lunes', hours: 'Cerrado' },
    { day: 'Martes', hours: '18:00 – 22:30' },
    { day: 'Miércoles', hours: '13:30 – 22:30' },
    { day: 'Jueves', hours: '13:30 – 22:30' },
    { day: 'Viernes', hours: '13:30 – 23:00' },
    { day: 'Sábado', hours: '13:30 – 23:00' },
    { day: 'Domingo', hours: '13:30 – 22:30' },
  ],
  // days en inglés y formato schema.org, agrupado por bloques idénticos
  openingHoursSchema: [
    { dayOfWeek: ['Wednesday', 'Thursday', 'Sunday'], opens: '13:30', closes: '22:30' },
    { dayOfWeek: ['Friday', 'Saturday'], opens: '13:30', closes: '23:00' },
    { dayOfWeek: ['Tuesday'], opens: '18:00', closes: '22:30' },
  ],

  gallery: [
    { src: '/gallery/platano-macho-salon-colorido.jpg', alt: 'Comedor de Plátano Macho con decoración tropical y mural colombiano en Valencia' },
    { src: '/gallery/platano-macho-arroz-camarones.jpg', alt: 'Arroz con camarones y patacón, plato típico colombiano en Plátano Macho' },
    { src: '/gallery/platano-macho-costillas-patacon.jpg', alt: 'Costillas glaseadas con patacones y papines, comida callejera latina' },
    { src: '/gallery/platano-macho-nachos.jpg', alt: 'Nachos de carne deshebrada con aguacate, plato compartido en Plátano Macho' },
    { src: '/gallery/platano-macho-maiz-frito.jpg', alt: 'Canastas de maíz frito con salsa, entrante típico del restaurante' },
    { src: '/gallery/platano-macho-ceviche.jpg', alt: 'Ceviche de mariscos con aguacate, especialidad de Plátano Macho' },
    { src: '/gallery/platano-macho-interior-bambu.jpg', alt: 'Interior del restaurante con decoración de bambú y fotografías de Colombia' },
    { src: '/gallery/platano-macho-fachada.jpg', alt: 'Fachada y letrero de Plátano Macho Restaurante Latin Street Food en Valencia' },
    { src: '/gallery/platano-macho-mural-neon.jpg', alt: 'Detalle decorativo con jardín vertical y letrero de neón en Plátano Macho' },
    { src: '/gallery/platano-macho-solomillo.jpg', alt: 'Solomillo con setas y cereales, plato de la carta de Plátano Macho' },
  ],

  mapEmbedSrc:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('Plátano Macho Restaurante Cánovas, Carrer de Salamanca 13, 46005 València') +
    '&hl=es&z=16&output=embed',
  mapLinkUrl: 'https://maps.google.com/?cid=13919462826450343257',
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_CONTACT_MESSAGE =
  '¡Hola! Vengo de la página web de Plátano Macho y tengo una consulta.';
export const WHATSAPP_RESERVE_MESSAGE =
  '¡Hola! Vengo de la página web de Plátano Macho y me gustaría hacer una reserva.';

// vacío = cae a WhatsApp automáticamente
export const reservationLink = '';

export function contactHref(): string {
  return whatsappLink(WHATSAPP_CONTACT_MESSAGE);
}

export function reservationHref(): string {
  return reservationLink || whatsappLink(WHATSAPP_RESERVE_MESSAGE);
}
