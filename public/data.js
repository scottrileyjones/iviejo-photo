// Project data + image URLs (Unsplash CDN — placeholder photography)
// Replace with real Iviejo images before any production use.

const IMG = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const PROJECTS = [
  {
    id: 'marisol',
    title: 'Marisol',
    subtitle: 'Oaxaca',
    year: '2024',
    category: 'portrait',
    medium: 'Hasselblad 500C/M · Portra 400',
    description: 'Three mornings with Marisol in the courtyard of her grandmother\u2019s house. The light arrived around seven, slow and amber, and we worked until the wall went white.',
    cover: IMG('1494790108377-be9c29b29330'),
    images: [
      { src: IMG('1494790108377-be9c29b29330', 1800), span: 12 },
      { src: IMG('1517841905240-472988babdf9', 1200), span: 5 },
      { src: IMG('1531123897727-8f129e1688ce', 1200), span: 7 },
      { src: IMG('1438761681033-6461ffad8d80', 1800), span: 12 }
    ]
  },
  {
    id: 'linen-weather',
    title: 'Linen, weather',
    subtitle: 'Studio, Brooklyn',
    year: '2024',
    category: 'still life',
    medium: 'Mamiya RZ67 \u00b7 HP5+',
    description: 'A study in fabric and forecast. Sheets, towels, and curtains photographed across an afternoon of changing window light.',
    cover: IMG('1490481651871-ab68de25d43d'),
    images: [
      { src: IMG('1490481651871-ab68de25d43d', 1800), span: 12 },
      { src: IMG('1505740420928-5e560c06d30e', 1200), span: 6 },
      { src: IMG('1515886657613-9f3515b0c78f', 1200), span: 6 }
    ]
  },
  {
    id: 'tabletop-sept',
    title: 'Tabletop, Septforest',
    subtitle: 'Editorial \u2014 Cherry Bombe',
    year: '2024',
    category: 'editorial',
    medium: 'Phase One IQ4 \u00b7 digital',
    description: 'A late-summer table set for nobody in particular. Stone fruit, bread, a glass of water.',
    cover: IMG('1495556650867-99590cea3657'),
    images: [
      { src: IMG('1495556650867-99590cea3657', 1800), span: 12 },
      { src: IMG('1485962398876-4d9b6f0b8d3a', 1200), span: 7 },
      { src: IMG('1565299624946-b28f40a0ca4b', 1200), span: 5 }
    ]
  },
  {
    id: 'jonas',
    title: 'Jonas',
    subtitle: 'Portrait commission',
    year: '2025',
    category: 'portrait',
    medium: 'Pentax 67 \u00b7 Tri-X',
    description: 'A short morning with the composer at his piano. Mostly silence, the occasional chord.',
    cover: IMG('1507003211169-0a1dd7228f2d'),
    images: [
      { src: IMG('1507003211169-0a1dd7228f2d', 1800), span: 12 },
      { src: IMG('1463453091185-61582044d556', 1200), span: 12 }
    ]
  },
  {
    id: 'coastal',
    title: 'Coastal, off-season',
    subtitle: 'Personal',
    year: '2023',
    category: 'editorial',
    medium: 'Leica M6 \u00b7 Portra 800',
    description: 'A week on the Oregon coast in February. Mostly rain, mostly grey, the occasional clearing.',
    cover: IMG('1469474968028-56623f02e42e'),
    images: [
      { src: IMG('1469474968028-56623f02e42e', 1800), span: 12 },
      { src: IMG('1505228395891-9a51e7e86bf6', 1200), span: 6 },
      { src: IMG('1500382017468-9049fed747ef', 1200), span: 6 }
    ]
  },
  {
    id: 'glass',
    title: 'Glass, water, salt',
    subtitle: 'Still life series',
    year: '2025',
    category: 'still life',
    medium: 'Phase One IQ4 \u00b7 digital',
    description: 'A short study in transparency \u2014 the way a glass of water reads against linen, ceramic, and wood.',
    cover: IMG('1517022812141-23620dba5c23'),
    images: [
      { src: IMG('1517022812141-23620dba5c23', 1800), span: 12 }
    ]
  }
];

const CATEGORIES = ['all', 'portrait', 'still life', 'editorial'];

window.IVIEJO_DATA = { PROJECTS, CATEGORIES, IMG };
