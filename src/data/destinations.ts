// Destination hub pages (/destinations/<slug>/). Each one gathers every
// group and private tour to a place, so a single strong page answers the
// many ways people search for it ("charyn canyon tour", "day trip to
// charyn from almaty", "charyn canyon excursion"...).

import type { Block } from './posts';

export interface DestinationContent {
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  facts: string[];
  groupTitle: string;
  privateTitle: string;
  /** Link text used on tour pages and guides pointing back to this hub. */
  moreLink: string;
  body: Block[];
}

export interface Destination {
  slug: string;
  image: string;
  /** group tour slugs (/group-tours/<slug>/) */
  group: string[];
  /** private tour slugs (/tours/<slug>/) */
  private: string[];
  /** related blog guide slug */
  guide?: string;
  en: DestinationContent;
  ru: DestinationContent;
}

export const destinations: Destination[] = [
  {
    slug: 'charyn-canyon',
    image: '/images/charyn-canyon.jpg',
    group: ['trio-of-charyn', 'drive-tour', 'extreme-tour'],
    private: ['kolsai-charyn-canyons', 'kaindy-charyn-canyons', 'kolsai-kaindy-three-canyons-2d'],
    guide: 'charyn-canyon-guide',
    en: {
      name: 'Charyn Canyon',
      metaTitle: 'Charyn Canyon Tours from Almaty — Group & Private Day Trips',
      metaDescription: 'Charyn Canyon tours from Almaty: group day trips from 8,990 ₸ per person and private tours with your own vehicle. Valley of Castles, Moon and Black canyons, on their own or with the Kolsai and Kaindy lakes.',
      h1: 'Charyn Canyon tours from Almaty',
      lead: 'Group day trips and private tours to the Valley of Castles, the Moon and Black canyons and the Charyn River — on their own or combined with the Kolsai and Kaindy lakes.',
      facts: ['About 200 km east of Almaty', '3–3.5 hours each way by road', 'Season: April to October', 'Easy 2 km walking trail to the river'],
      groupTitle: 'Group tours to Charyn Canyon',
      privateTitle: 'Private tours to Charyn Canyon',
      moreLink: 'All Charyn Canyon tours',
      body: [
        { t: 'h2', text: 'Which Charyn tour to choose' },
        { t: 'p', text: 'If Charyn is the only place you want to see, the Trio of Charyn group tour covers the canyon, the river and both viewpoints in one relaxed day — and it is the cheapest way there. If you also want the mountain lakes, the Drive Tour adds Kolsai Lake, and the Extreme Tour adds Kaindy as well, at the cost of a very early start and a strict schedule.' },
        { t: 'p', text: 'Private tours make the most sense when you want to control the timing: arriving early for softer light and fewer people, or splitting the canyons and lakes over two days with a night in Saty village instead of one long drive.' },
        { t: 'h2', text: 'Good to know' },
        { t: 'ul', items: [
          'Summer middays are hot and the canyon has almost no shade, so early departures matter.',
          'Bring an original ID — some routes pass checkpoints near the border zone.',
          'A shuttle usually runs inside the Valley of Castles if you would rather not walk back up.',
        ] },
      ],
    },
    ru: {
      name: 'Чарынский каньон',
      metaTitle: 'Туры в Чарынский каньон из Алматы — групповые и индивидуальные',
      metaDescription: 'Туры в Чарынский каньон из Алматы: групповые поездки от 8 990 ₸ с человека и индивидуальные туры на своём транспорте. Долина замков, Лунный и Чёрный каньоны — отдельно или вместе с озёрами Кольсай и Каинды.',
      h1: 'Туры в Чарынский каньон из Алматы',
      lead: 'Групповые поездки и индивидуальные туры в Долину замков, к Лунному и Чёрному каньонам и реке Чарын — отдельно или вместе с озёрами Кольсай и Каинды.',
      facts: ['Около 200 км к востоку от Алматы', '3–3,5 часа в одну сторону', 'Сезон: апрель–октябрь', 'Лёгкая тропа 2 км до реки'],
      groupTitle: 'Групповые туры в Чарынский каньон',
      privateTitle: 'Индивидуальные туры в Чарынский каньон',
      moreLink: 'Все туры в Чарынский каньон',
      body: [
        { t: 'h2', text: 'Какой тур на Чарын выбрать' },
        { t: 'p', text: 'Если вам нужен только Чарын, групповой тур Trio of Charyn покрывает каньон, реку и обе смотровые за один спокойный день — и это самый доступный способ туда попасть. Если хочется ещё и горных озёр, Drive Tour добавляет Кольсай, а Extreme Tour — ещё и Каинды, но ценой очень раннего выезда и жёсткого графика.' },
        { t: 'p', text: 'Индивидуальный тур особенно выгоден, когда важно самим управлять временем: приехать рано ради мягкого света и меньшего числа людей или разделить каньоны и озёра на два дня с ночёвкой в селе Саты вместо одной длинной дороги.' },
        { t: 'h2', text: 'Полезно знать' },
        { t: 'ul', items: [
          'Летом в полдень жарко, а тени в каньоне почти нет — ранний выезд важен.',
          'Возьмите оригинал удостоверения: некоторые маршруты проходят посты у погранзоны.',
          'В Долине замков обычно ходит шаттл, если не хочется подниматься обратно пешком.',
        ] },
      ],
    },
  },
  {
    slug: 'kolsai-kaindy-lakes',
    image: '/images/kolsai-kaindy-lakes.jpg',
    group: ['lite-tour', 'drive-tour', 'extreme-tour'],
    private: ['kolsai-kaindy-black-canyon', 'kolsai-charyn-canyons', 'kaindy-charyn-canyons', 'kolsai-kaindy-three-canyons-2d'],
    guide: 'kolsai-kaindy-lakes-guide',
    en: {
      name: 'Kolsai and Kaindy Lakes',
      metaTitle: 'Kolsai & Kaindy Lakes Tours from Almaty — Group & Private',
      metaDescription: 'Tours to Kolsai and Kaindy lakes from Almaty: group day trips with the UAZ transfer to Kaindy included, and private tours at your own pace. One-day and two-day options, June to September.',
      h1: 'Kolsai and Kaindy lakes tours from Almaty',
      lead: 'The emerald Kolsai Lake and the sunken forest of Kaindy — as a group day trip, a private tour, or a relaxed two-day trip with a night in Saty village.',
      facts: ['About 300 km east of Almaty', 'Around 5 hours each way', 'Season: June to September', 'UAZ 4x4 transfer needed for Kaindy'],
      groupTitle: 'Group tours to Kolsai and Kaindy',
      privateTitle: 'Private tours to Kolsai and Kaindy',
      moreLink: 'All Kolsai and Kaindy lakes tours',
      body: [
        { t: 'h2', text: 'Which lakes tour to choose' },
        { t: 'p', text: 'The Lite Tour is the classic group option: both lakes plus the Black Canyon viewpoint, with the off-road UAZ transfer to Kaindy already included. The Drive and Extreme tours pair the lakes with the Charyn canyons for travelers who want to see as much as possible in a single day.' },
        { t: 'p', text: 'Because the lakes are around five hours from the city, a one-day trip means leaving before dawn and returning late in the evening. A private two-day tour with a night in Saty turns that into a comfortable trip and gives you proper time at each lake.' },
        { t: 'h2', text: 'Good to know' },
        { t: 'ul', items: [
          'The last stretch to Kaindy is off-road, then a 20–30 minute walk from the parking area.',
          'The lakes are 8–12°C cooler than Almaty — bring a warm layer even in July.',
          'An original ID is required for the checkpoints on the route.',
        ] },
      ],
    },
    ru: {
      name: 'Озёра Кольсай и Каинды',
      metaTitle: 'Туры на озёра Кольсай и Каинды из Алматы — группа и индивидуально',
      metaDescription: 'Туры на Кольсай и Каинды из Алматы: групповые поездки с переездом на УАЗе до Каинды и индивидуальные туры в своём темпе. Варианты на один и два дня, с июня по сентябрь.',
      h1: 'Туры на озёра Кольсай и Каинды из Алматы',
      lead: 'Изумрудное озеро Кольсай и затонувший лес Каинды — групповой поездкой, индивидуальным туром или спокойно за два дня с ночёвкой в селе Саты.',
      facts: ['Около 300 км к востоку от Алматы', 'Примерно 5 часов в одну сторону', 'Сезон: июнь–сентябрь', 'До Каинды нужен УАЗ'],
      groupTitle: 'Групповые туры на Кольсай и Каинды',
      privateTitle: 'Индивидуальные туры на Кольсай и Каинды',
      moreLink: 'Все туры на Кольсай и Каинды',
      body: [
        { t: 'h2', text: 'Какой тур на озёра выбрать' },
        { t: 'p', text: 'Lite Tour — классический групповой вариант: оба озера плюс смотровая Чёрного каньона, переезд на УАЗе до Каинды уже включён. Drive и Extreme добавляют к озёрам каньоны Чарына — для тех, кто хочет увидеть максимум за один день.' },
        { t: 'p', text: 'Озёра примерно в пяти часах от города, поэтому однодневная поездка — это выезд до рассвета и возвращение поздно вечером. Индивидуальный тур на два дня с ночёвкой в Саты превращает её в комфортное путешествие с нормальным временем у каждого озера.' },
        { t: 'h2', text: 'Полезно знать' },
        { t: 'ul', items: [
          'Последний участок до Каинды — бездорожье, затем 20–30 минут пешком от парковки.',
          'У озёр на 8–12 °C прохладнее, чем в Алматы, — тёплая вещь нужна даже в июле.',
          'Для постов на маршруте обязателен оригинал удостоверения.',
        ] },
      ],
    },
  },
  {
    slug: 'assy-plateau',
    image: '/images/assy-plateau.jpg',
    group: ['assy-plateau-1day', 'assy-plateau-2day'],
    private: ['assy-plateau-1day', 'assy-plateau-2day'],
    guide: 'assy-plateau-guide',
    en: {
      name: 'Assy Plateau',
      metaTitle: 'Assy Plateau Tours from Almaty — Day Trips & Overnight Camping',
      metaDescription: 'Assy Plateau tours from Almaty: group and private day trips to the 2,500 m high pasture and observatory, plus two-day camping tours under one of the darkest night skies near the city.',
      h1: 'Assy Plateau tours from Almaty',
      lead: 'A high summer pasture at 2,500 m with herds of horses and the Assy-Turgen observatory — as a day trip, or with a night of camping under the stars.',
      facts: ['About 100 km east of Almaty', 'Around 4 hours each way', 'Season: June to September', 'Gravel road on the final climb'],
      groupTitle: 'Group tours to the Assy Plateau',
      privateTitle: 'Private tours to the Assy Plateau',
      moreLink: 'All Assy Plateau tours',
      body: [
        { t: 'h2', text: 'Day trip or overnight?' },
        { t: 'p', text: 'The day trip gives you two to three hours on the plateau — enough for the views, the observatory and photographs. The two-day trip adds sunset, a night of camping and sunrise, and it is the only way to see the night sky here, which is the main reason many people come.' },
        { t: 'p', text: 'Group tours are the affordable option and run through the summer season. A private tour lets you pick the date, leave at your own time and stop in the Turgen gorge on the way up.' },
        { t: 'h2', text: 'Good to know' },
        { t: 'ul', items: [
          'Nights on the plateau are cold even in summer — a warm sleeping bag matters.',
          'There are no shops on the plateau; buy food and water on the way.',
          'Tents and sleeping bags for the group camping trip are rented separately.',
        ] },
      ],
    },
    ru: {
      name: 'Плато Ассы',
      metaTitle: 'Туры на плато Ассы из Алматы — на день и с ночёвкой',
      metaDescription: 'Туры на плато Ассы из Алматы: групповые и индивидуальные поездки на высокогорное пастбище (2 500 м) и к обсерватории, а также двухдневные туры с кемпингом под одним из самых тёмных небес рядом с городом.',
      h1: 'Туры на плато Ассы из Алматы',
      lead: 'Летнее высокогорное пастбище на 2 500 м с табунами лошадей и обсерваторией Ассы-Тургень — на один день или с ночёвкой в палатках под звёздами.',
      facts: ['Около 100 км к востоку от Алматы', 'Примерно 4 часа в одну сторону', 'Сезон: июнь–сентябрь', 'Гравийная дорога на подъёме'],
      groupTitle: 'Групповые туры на плато Ассы',
      privateTitle: 'Индивидуальные туры на плато Ассы',
      moreLink: 'Все туры на плато Ассы',
      body: [
        { t: 'h2', text: 'На день или с ночёвкой?' },
        { t: 'p', text: 'Однодневная поездка даёт два-три часа на плато — достаточно для видов, обсерватории и фотографий. Двухдневная добавляет закат, ночь в палатках и рассвет, и только так можно увидеть здешнее ночное небо — ради него многие и едут.' },
        { t: 'p', text: 'Групповые туры — доступный вариант, они идут весь летний сезон. Индивидуальный тур позволяет выбрать дату, выехать в своё время и остановиться в Тургеньском ущелье по пути наверх.' },
        { t: 'h2', text: 'Полезно знать' },
        { t: 'ul', items: [
          'Ночи на плато холодные даже летом — тёплый спальник важнее всего.',
          'На плато нет магазинов, еду и воду покупают по дороге.',
          'Палатки и спальники для группового кемпинга берут в прокате отдельно.',
        ] },
      ],
    },
  },
  {
    slug: 'altyn-emel',
    image: '/images/altyn-emel.jpg',
    group: ['singing-dunes', 'treasures-altyn-emel'],
    private: ['singing-dunes', 'altyn-emel'],
    guide: 'altyn-emel-singing-dunes-guide',
    en: {
      name: 'Altyn-Emel and the Singing Dunes',
      metaTitle: 'Altyn-Emel & Singing Dunes Tours from Almaty — 1 or 2 Days',
      metaDescription: 'Tours to Altyn-Emel National Park from Almaty: the Singing Dune in one day, or two days with the striped Aktau mountains, volcanic Katutau and the 700-year-old willow. Group and private.',
      h1: 'Altyn-Emel and Singing Dunes tours from Almaty',
      lead: 'The humming 150 m Singing Dune, the striped Aktau mountains and volcanic Katutau — in one long day or a two-day trip through Kazakhstan’s flagship desert park.',
      facts: ['Around 4 hours each way', 'Season: April to October', 'Park registration in Basshi village', 'Off-road transfer inside the park'],
      groupTitle: 'Group tours to Altyn-Emel',
      privateTitle: 'Private tours to Altyn-Emel',
      moreLink: 'All Altyn-Emel tours',
      body: [
        { t: 'h2', text: 'One day or two?' },
        { t: 'p', text: 'A one-day tour reaches the Singing Dune and the Ili valley, but the park is too large to add anything else. The Aktau and Katutau mountains are only included on the two-day trips — worth knowing before you book if the striped mountains are what drew you here.' },
        { t: 'p', text: 'The two-day group tour includes accommodation, breakfast and lunch. A private version lets you set the pace, reach the dune in the softer evening light and choose where to stop.' },
        { t: 'h2', text: 'Good to know' },
        { t: 'ul', items: [
          'The dune’s humming sound depends on dry, windy weather and is never guaranteed.',
          'There is no shade in the desert — bring a hat, sunscreen and plenty of water.',
          'Park fees and registration are handled on organised tours.',
        ] },
      ],
    },
    ru: {
      name: 'Алтын-Эмель и Поющий бархан',
      metaTitle: 'Туры в Алтын-Эмель и на Поющий бархан из Алматы — 1 или 2 дня',
      metaDescription: 'Туры в нацпарк Алтын-Эмель из Алматы: Поющий бархан за один день или два дня с полосатыми горами Актау, вулканическим Катутау и 700-летней ивой. Группой и индивидуально.',
      h1: 'Туры в Алтын-Эмель и на Поющий бархан из Алматы',
      lead: 'Гудящий 150-метровый Поющий бархан, полосатые горы Актау и вулканический Катутау — за один длинный день или в двухдневной поездке по главному пустынному парку Казахстана.',
      facts: ['Примерно 4 часа в одну сторону', 'Сезон: апрель–октябрь', 'Регистрация в парке в селе Басши', 'Внутри парка — внедорожник'],
      groupTitle: 'Групповые туры в Алтын-Эмель',
      privateTitle: 'Индивидуальные туры в Алтын-Эмель',
      moreLink: 'Все туры в Алтын-Эмель',
      body: [
        { t: 'h2', text: 'Один день или два?' },
        { t: 'p', text: 'За один день успевают к Поющему бархану и в долину Или, но парк слишком большой, чтобы добавить что-то ещё. Горы Актау и Катутау входят только в двухдневные поездки — это стоит знать заранее, если вы едете именно ради полосатых гор.' },
        { t: 'p', text: 'Двухдневный групповой тур включает проживание, завтрак и обед. Индивидуальный вариант позволяет задать свой темп, приехать к бархану в мягком вечернем свете и самим выбрать остановки.' },
        { t: 'h2', text: 'Полезно знать' },
        { t: 'ul', items: [
          'Гул бархана зависит от сухой ветреной погоды и никогда не гарантирован.',
          'В пустыне нет тени — возьмите головной убор, крем от солнца и много воды.',
          'Сборы и регистрацию в парке в организованных турах берут на себя.',
        ] },
      ],
    },
  },
];

export function hubsForGroupTour(slug: string) {
  return destinations.filter((d) => d.group.includes(slug));
}
export function hubsForPrivateTour(slug: string) {
  return destinations.filter((d) => d.private.includes(slug));
}
export function hubForGuide(slug: string) {
  return destinations.find((d) => d.guide === slug);
}
