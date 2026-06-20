export type Lang = 'en' | 'ru';

export interface ItineraryStep {
  time: string;
  text: string;
}

export interface TourContent {
  title: string;
  metaTitle: string;
  metaDescription: string;
  teaser: string;
  description: string[];
  highlights: string[];
  itinerary: ItineraryStep[];
  included: string[];
  notIncluded: string[];
  faq: { q: string; a: string }[];
  duration: string;
  season: string;
}

/** One row of the per-transport price table. Price is for the whole vehicle, by group-size bracket. */
export interface PriceBracket {
  label: string;
  kzt: number;
}

export interface Tour {
  slug: string;
  image: string;
  /** "from" price — the cheapest bracket (1–4 guests). */
  priceKzt: number;
  /** Per-transport price brackets by group size. */
  priceBrackets: PriceBracket[];
  hours: number;
  featured: boolean;
  en: TourContent;
  ru: TourContent;
}

export type TourFormat = 'private' | 'group';

/** Approximate USD reference from a tenge price (rate ≈ 500 ₸/$). */
export function usdFrom(kzt: number): number {
  return Math.round(kzt / 500 / 5) * 5;
}

const brackets = (a: number, b: number, c: number, d: number): PriceBracket[] => [
  { label: '1–4', kzt: a },
  { label: '5–7', kzt: b },
  { label: '8–14', kzt: c },
  { label: '15–18', kzt: d },
];

const inclEn = (vehicle: string) => [
  vehicle,
  'Professional English-speaking driver-guide',
  'Hotel pickup and drop-off in Almaty',
  'Ecological / national park entrance fees',
  'Bottled water',
];
const inclRu = (vehicle: string) => [
  vehicle,
  'Профессиональный водитель-гид',
  'Трансфер от отеля и обратно по Алматы',
  'Экологические / входные сборы',
  'Питьевая вода',
];
const notInclEn = ['Meals', 'Personal expenses', 'Tips (optional)'];
const notInclRu = ['Питание', 'Личные расходы', 'Чаевые (по желанию)'];

export const tours: Tour[] = [
  {
    slug: 'kolsai-kaindy-black-canyon',
    image: '/images/kaindy.jpg',
    priceKzt: 74990,
    priceBrackets: brackets(74990, 104990, 154990, 194990),
    hours: 16,
    featured: true,
    en: {
      title: 'Kolsai, Kaindy & Black Canyon',
      metaTitle: 'Kolsai, Kaindy & Black Canyon Private Tour from Almaty',
      metaDescription:
        'Private day trip from Almaty to Kolsai Lake, the sunken forest of Kaindy and the Black Canyon viewpoint. Your own vehicle, certified guide, hotel pickup.',
      teaser: 'Two alpine lakes and a canyon viewpoint in one private day — Kolsai, Kaindy and the Black Canyon.',
      description: [
        'The classic eastern loop, in private: the emerald Kolsai Lake, the surreal sunken forest of Lake Kaindy and a stop at the Black Canyon viewpoint. A UAZ off-roader handles the rough final road up to Kaindy.',
        'Go at your own pace with just your group — your guide adapts the timing and stops to you, and we match the vehicle to your party size.',
      ],
      highlights: [
        'Kolsai-1 — emerald alpine lake in the Tian Shan spruce forest',
        'Lake Kaindy and its iconic sunken forest',
        'Black Canyon viewpoint on the way',
        'Private vehicle, hotel pickup and a flexible schedule',
      ],
      itinerary: [
        { time: '06:00', text: 'Pickup from your hotel in Almaty' },
        { time: '10:00', text: 'Black Canyon viewpoint' },
        { time: '11:00', text: 'Kolsai Lake — shoreline walk and free time' },
        { time: '13:30', text: '4x4 transfer up to Lake Kaindy, sunken forest walk' },
        { time: '16:30', text: 'Depart for Almaty' },
        { time: '21:30', text: 'Drop-off at your hotel' },
      ],
      included: inclEn('Private vehicle, sized to your group (UAZ to Kaindy)'),
      notIncluded: notInclEn,
      faq: [
        {
          q: 'Is one day enough?',
          a: 'Yes, but it is a long day (~16 hours door to door). A private vehicle makes the drive far more comfortable and lets you rest on the way.',
        },
        {
          q: 'How cold is it at the lakes?',
          a: 'The lakes sit around 2,000 m, 8–12°C cooler than Almaty. Bring a warm layer even in summer.',
        },
      ],
      duration: 'Full day · ~16 hours',
      season: 'June – September',
    },
    ru: {
      title: 'Кольсай, Каинды и Чёрный каньон',
      metaTitle: 'Кольсай, Каинды и Чёрный каньон — частный тур из Алматы',
      metaDescription:
        'Частный тур из Алматы на озеро Кольсай, затонувший лес Каинды и смотровую Чёрного каньона. Личный автомобиль, гид, трансфер от отеля.',
      teaser: 'Два горных озера и смотровая каньона за один частный день — Кольсай, Каинды и Чёрный каньон.',
      description: [
        'Классическая восточная петля, приватно: изумрудное озеро Кольсай, сюрреалистичный затонувший лес озера Каинды и остановка на смотровой Чёрного каньона. Сложный финальный участок до Каинды проходит внедорожник УАЗ.',
        'Едете в своём темпе, только своей компанией — гид подстраивает тайминг и остановки под вас, а машину мы подбираем под размер группы.',
      ],
      highlights: [
        'Кольсай-1 — изумрудное горное озеро в еловом лесу',
        'Озеро Каинды и его знаменитый затонувший лес',
        'Смотровая Чёрного каньона по пути',
        'Личный автомобиль, трансфер от отеля и гибкий график',
      ],
      itinerary: [
        { time: '06:00', text: 'Выезд от вашего отеля в Алматы' },
        { time: '10:00', text: 'Смотровая Чёрного каньона' },
        { time: '11:00', text: 'Озеро Кольсай — прогулка вдоль берега' },
        { time: '13:30', text: 'Подъём на 4x4 к озеру Каинды, прогулка к затонувшему лесу' },
        { time: '16:30', text: 'Выезд в Алматы' },
        { time: '21:30', text: 'Возвращение к отелю' },
      ],
      included: inclRu('Личный автомобиль под размер группы (УАЗ до Каинды)'),
      notIncluded: notInclRu,
      faq: [
        {
          q: 'Хватит ли одного дня?',
          a: 'Да, но день длинный (~16 часов от двери до двери). Личный автомобиль делает дорогу гораздо комфортнее и позволяет отдохнуть в пути.',
        },
        {
          q: 'Насколько холодно у озёр?',
          a: 'Озёра на высоте ~2 000 м, на 8–12°C прохладнее, чем в Алматы. Возьмите тёплую вещь даже летом.',
        },
      ],
      duration: 'Полный день · ~16 часов',
      season: 'Июнь – сентябрь',
    },
  },
  {
    slug: 'kolsai-charyn-canyons',
    image: '/images/charyn-canyon.jpg',
    priceKzt: 64990,
    priceBrackets: brackets(64990, 89990, 129990, 169990),
    hours: 16,
    featured: true,
    en: {
      title: 'Kolsai & Charyn Canyons',
      metaTitle: 'Kolsai Lake & Charyn Canyons Private Tour from Almaty',
      metaDescription:
        'Private day trip from Almaty: Kolsai Lake plus the Charyn canyon system — the Valley of Castles, the Black Canyon and the Moon Canyon. Your own vehicle and guide.',
      teaser: 'An alpine lake and the whole Charyn canyon system in one private day.',
      description: [
        'A lake and four canyons in a single private day: Kolsai Lake in the morning, then the Valley of Castles, the Black Canyon, the Moon Canyon and the Charyn River. A smooth, scenic loop with no off-road section.',
        'Private and flexible — your guide sets the pace and the photo stops around you.',
      ],
      highlights: [
        'Kolsai-1 alpine lake',
        'Valley of Castles — the star of Charyn Canyon',
        'Black Canyon and Moon Canyon viewpoints',
        'Private vehicle, hotel pickup and a flexible schedule',
      ],
      itinerary: [
        { time: '06:30', text: 'Pickup from your hotel in Almaty' },
        { time: '10:30', text: 'Kolsai Lake — shoreline walk and free time' },
        { time: '14:00', text: 'Black Canyon and Moon Canyon viewpoints' },
        { time: '15:30', text: 'Valley of Castles — walk to the Charyn River' },
        { time: '18:00', text: 'Depart for Almaty' },
        { time: '22:00', text: 'Drop-off at your hotel' },
      ],
      included: inclEn('Private vehicle, sized to your group'),
      notIncluded: notInclEn,
      faq: [
        {
          q: 'Is there any off-road driving?',
          a: 'No — this route stays on good roads. For the off-road Kaindy lake, see our Kolsai, Kaindy & Black Canyon tour.',
        },
        {
          q: 'How much walking is there?',
          a: 'Easy walks only — a lakeside stroll and the gentle 2 km Valley of Castles trail. Everything else is by viewpoint.',
        },
      ],
      duration: 'Full day · ~16 hours',
      season: 'June – September',
    },
    ru: {
      title: 'Кольсай и каньоны Чарына',
      metaTitle: 'Кольсай и каньоны Чарына — частный тур из Алматы',
      metaDescription:
        'Частный тур из Алматы: озеро Кольсай и система Чарынских каньонов — Долина замков, Чёрный и Лунный каньоны. Личный автомобиль и гид.',
      teaser: 'Горное озеро и вся система Чарынских каньонов за один частный день.',
      description: [
        'Озеро и четыре каньона за один частный день: утром — озеро Кольсай, затем Долина замков, Чёрный каньон, Лунный каньон и река Чарын. Ровная живописная петля без бездорожья.',
        'Приватно и гибко — гид задаёт темп и фотостопы под вас.',
      ],
      highlights: [
        'Озеро Кольсай-1',
        'Долина замков — главное в Чарынском каньоне',
        'Смотровые Чёрного и Лунного каньонов',
        'Личный автомобиль, трансфер от отеля и гибкий график',
      ],
      itinerary: [
        { time: '06:30', text: 'Выезд от вашего отеля в Алматы' },
        { time: '10:30', text: 'Озеро Кольсай — прогулка вдоль берега' },
        { time: '14:00', text: 'Смотровые Чёрного и Лунного каньонов' },
        { time: '15:30', text: 'Долина замков — прогулка к реке Чарын' },
        { time: '18:00', text: 'Выезд в Алматы' },
        { time: '22:00', text: 'Возвращение к отелю' },
      ],
      included: inclRu('Личный автомобиль под размер группы'),
      notIncluded: notInclRu,
      faq: [
        {
          q: 'Есть ли бездорожье?',
          a: 'Нет — этот маршрут по хорошим дорогам. Для внедорожного озера Каинды смотрите тур «Кольсай, Каинды и Чёрный каньон».',
        },
        {
          q: 'Много ли пешком?',
          a: 'Только лёгкие прогулки — вдоль берега и пологая тропа 2 км по Долине замков. Остальное со смотровых.',
        },
      ],
      duration: 'Полный день · ~16 часов',
      season: 'Июнь – сентябрь',
    },
  },
  {
    slug: 'kaindy-charyn-canyons',
    image: '/images/charyn-kolsai-kaindy.jpg',
    priceKzt: 64990,
    priceBrackets: brackets(64990, 89990, 129990, 169990),
    hours: 16,
    featured: false,
    en: {
      title: 'Kaindy & Charyn Canyons',
      metaTitle: 'Kaindy Lake & Charyn Canyons Private Tour from Almaty',
      metaDescription:
        'Private day trip from Almaty: the sunken forest of Lake Kaindy plus the Charyn canyon system — the Valley of Castles, the Black Canyon and the Moon Canyon.',
      teaser: 'The sunken forest of Kaindy and the whole Charyn canyon system in one private day.',
      description: [
        'A lake and the canyons in one private day: the surreal sunken forest of Lake Kaindy, reached by a UAZ off-roader, then the Valley of Castles, the Black Canyon and the Moon Canyon.',
        'Private and flexible, with your guide adapting the day around you.',
      ],
      highlights: [
        'Lake Kaindy and its iconic sunken forest',
        'Valley of Castles — the star of Charyn Canyon',
        'Black Canyon and Moon Canyon viewpoints',
        'Private vehicle, hotel pickup and a flexible schedule',
      ],
      itinerary: [
        { time: '06:30', text: 'Pickup from your hotel in Almaty' },
        { time: '10:30', text: '4x4 transfer to Lake Kaindy, sunken forest walk' },
        { time: '14:00', text: 'Black Canyon and Moon Canyon viewpoints' },
        { time: '15:30', text: 'Valley of Castles — walk to the Charyn River' },
        { time: '18:00', text: 'Depart for Almaty' },
        { time: '22:00', text: 'Drop-off at your hotel' },
      ],
      included: inclEn('Private vehicle, sized to your group (UAZ to Kaindy)'),
      notIncluded: notInclEn,
      faq: [
        {
          q: 'What is the difference from the Kolsai & Charyn tour?',
          a: 'This one swaps Kolsai Lake for Lake Kaindy (the sunken forest), which involves a short off-road UAZ transfer. Same Charyn canyons.',
        },
        {
          q: 'Is the walk to Kaindy hard?',
          a: 'It is a 20–30 minute walk from the parking; a horse can be rented on site for an extra fee.',
        },
      ],
      duration: 'Full day · ~16 hours',
      season: 'June – September',
    },
    ru: {
      title: 'Каинды и каньоны Чарына',
      metaTitle: 'Каинды и каньоны Чарына — частный тур из Алматы',
      metaDescription:
        'Частный тур из Алматы: затонувший лес озера Каинды и система Чарынских каньонов — Долина замков, Чёрный и Лунный каньоны.',
      teaser: 'Затонувший лес Каинды и вся система Чарынских каньонов за один частный день.',
      description: [
        'Озеро и каньоны за один частный день: сюрреалистичный затонувший лес озера Каинды, к которому едем на УАЗе, затем Долина замков, Чёрный каньон и Лунный каньон.',
        'Приватно и гибко, гид подстраивает день под вас.',
      ],
      highlights: [
        'Озеро Каинды и его знаменитый затонувший лес',
        'Долина замков — главное в Чарынском каньоне',
        'Смотровые Чёрного и Лунного каньонов',
        'Личный автомобиль, трансфер от отеля и гибкий график',
      ],
      itinerary: [
        { time: '06:30', text: 'Выезд от вашего отеля в Алматы' },
        { time: '10:30', text: 'Подъём на 4x4 к озеру Каинды, прогулка к затонувшему лесу' },
        { time: '14:00', text: 'Смотровые Чёрного и Лунного каньонов' },
        { time: '15:30', text: 'Долина замков — прогулка к реке Чарын' },
        { time: '18:00', text: 'Выезд в Алматы' },
        { time: '22:00', text: 'Возвращение к отелю' },
      ],
      included: inclRu('Личный автомобиль под размер группы (УАЗ до Каинды)'),
      notIncluded: notInclRu,
      faq: [
        {
          q: 'Чем отличается от тура «Кольсай и каньоны»?',
          a: 'Здесь вместо Кольсая — озеро Каинды (затонувший лес), к нему короткий внедорожный переезд на УАЗе. Каньоны Чарына те же.',
        },
        {
          q: 'Тяжело ли идти к Каинды?',
          a: 'От парковки 20–30 минут пешком; на месте можно арендовать лошадь за доплату.',
        },
      ],
      duration: 'Полный день · ~16 часов',
      season: 'Июнь – сентябрь',
    },
  },
  {
    slug: 'kolsai-kaindy-three-canyons-2d',
    image: '/images/charyn-kolsai-kaindy.jpg',
    priceKzt: 149990,
    priceBrackets: brackets(149990, 209990, 254990, 299990),
    hours: 0,
    featured: true,
    en: {
      title: 'Kolsai, Kaindy & Three Canyons — 2 days',
      metaTitle: 'Kolsai, Kaindy & Charyn Canyons — 2-Day Private Tour from Almaty',
      metaDescription:
        'Two-day private tour from Almaty: Kolsai Lake, Kaindy Lake and the three canyons of Charyn — the Valley of Castles, the Black Canyon and the Moon Canyon, at a relaxed pace.',
      teaser: 'The full east in two unhurried days — two alpine lakes and the three canyons of Charyn.',
      description: [
        'Everything the east has to offer, without rushing: Kolsai Lake, the sunken forest of Kaindy and the three canyons of Charyn (Valley of Castles, Black and Moon), spread over two days with an overnight in Saty village.',
        'A private vehicle and guide for the whole trip, with the pace set by you. Accommodation arranged on request.',
      ],
      highlights: [
        'Kolsai and Kaindy lakes without the rush',
        'The three canyons of Charyn',
        'Overnight in Saty village among the mountains',
        'Private vehicle and guide for two full days',
      ],
      itinerary: [
        { time: 'Day 1', text: 'Kolsai Lake and Lake Kaindy (UAZ transfer), overnight in Saty village' },
        { time: 'Day 2', text: 'Charyn — Valley of Castles, Black Canyon and Moon Canyon, return to Almaty' },
      ],
      included: [
        'Private vehicle, sized to your group (UAZ to Kaindy)',
        'Professional English-speaking driver-guide for 2 days',
        'Hotel pickup and drop-off in Almaty',
        'Ecological / national park entrance fees',
        'Bottled water',
      ],
      notIncluded: ['Accommodation (arranged on request)', 'Meals', 'Personal expenses', 'Tips (optional)'],
      faq: [
        {
          q: 'Where do we stay overnight?',
          a: 'In a guesthouse in Saty village, near the lakes. We arrange it for you; the cost is confirmed on booking.',
        },
        {
          q: 'Why two days instead of one?',
          a: 'The one-day version is rushed. Two days mean proper time at each lake and canyon, and a much more relaxed drive.',
        },
      ],
      duration: '2 days',
      season: 'June – September',
    },
    ru: {
      title: 'Кольсай, Каинды и три каньона — 2 дня',
      metaTitle: 'Кольсай, Каинды и каньоны Чарына — 2-дневный частный тур из Алматы',
      metaDescription:
        'Двухдневный частный тур из Алматы: озеро Кольсай, озеро Каинды и три каньона Чарына — Долина замков, Чёрный и Лунный — в спокойном темпе.',
      teaser: 'Весь восток за два неспешных дня — два горных озера и три каньона Чарына.',
      description: [
        'Всё лучшее на востоке без спешки: озеро Кольсай, затонувший лес Каинды и три каньона Чарына (Долина замков, Чёрный и Лунный) за два дня с ночёвкой в селе Саты.',
        'Личный автомобиль и гид на всю поездку, темп задаёте вы. Проживание организуем по запросу.',
      ],
      highlights: [
        'Озёра Кольсай и Каинды без спешки',
        'Три каньона Чарына',
        'Ночёвка в селе Саты среди гор',
        'Личный автомобиль и гид на два полных дня',
      ],
      itinerary: [
        { time: 'День 1', text: 'Озеро Кольсай и озеро Каинды (УАЗ), ночёвка в селе Саты' },
        { time: 'День 2', text: 'Чарын — Долина замков, Чёрный и Лунный каньоны, возвращение в Алматы' },
      ],
      included: [
        'Личный автомобиль под размер группы (УАЗ до Каинды)',
        'Профессиональный водитель-гид на 2 дня',
        'Трансфер от отеля и обратно по Алматы',
        'Экологические / входные сборы',
        'Питьевая вода',
      ],
      notIncluded: ['Проживание (организуем по запросу)', 'Питание', 'Личные расходы', 'Чаевые (по желанию)'],
      faq: [
        {
          q: 'Где ночёвка?',
          a: 'В гостевом доме в селе Саты, рядом с озёрами. Организуем за вас; стоимость подтверждаем при бронировании.',
        },
        {
          q: 'Почему два дня, а не один?',
          a: 'Однодневный вариант очень спешный. Два дня — это нормальное время на каждом озере и каньоне и гораздо спокойнее дорога.',
        },
      ],
      duration: '2 дня',
      season: 'Июнь – сентябрь',
    },
  },
  {
    slug: 'issyk-waterfall',
    image: '/images/issyk-lake.jpg',
    priceKzt: 59990,
    priceBrackets: brackets(59990, 79990, 119990, 149990),
    hours: 7,
    featured: false,
    en: {
      title: 'Issyk Lake & Waterfall',
      metaTitle: 'Issyk Lake & Bear Waterfall Private Tour from Almaty',
      metaDescription:
        'Private half-day tour from Almaty to the turquoise Lake Issyk and the Bear Waterfall in the Turgen gorge. Your own vehicle, certified guide, hotel pickup.',
      teaser: 'A turquoise mountain lake and a forest waterfall — an easy private escape close to Almaty.',
      description: [
        'Lake Issyk sits in a spruce gorge an hour east of Almaty, a calm turquoise mirror ringed by mountains. We pair it with the Bear Waterfall in the green Turgen gorge — a short forest walk to a cool cascade.',
        'A relaxed, green half-day with no hard hiking, private and flexible — ideal between bigger trips or for families.',
      ],
      highlights: [
        'Turquoise Lake Issyk in a spruce-covered gorge',
        'Bear Waterfall in the Turgen gorge — easy forest walk',
        'Short drive — under 90 minutes from Almaty',
        'Private vehicle, hotel pickup and a relaxed pace',
      ],
      itinerary: [
        { time: '09:00', text: 'Pickup from your hotel in Almaty' },
        { time: '10:15', text: 'Lake Issyk — viewpoints and a lakeside walk' },
        { time: '12:00', text: 'Turgen gorge — walk to the Bear Waterfall' },
        { time: '14:00', text: 'Optional lunch at a gorge cafe' },
        { time: '15:00', text: 'Drive back to Almaty' },
        { time: '16:00', text: 'Drop-off at your hotel' },
      ],
      included: inclEn('Private vehicle, sized to your group'),
      notIncluded: notInclEn,
      faq: [
        {
          q: 'Is it good for kids?',
          a: 'Yes — short walks, a calm lake and a quick waterfall make it one of our easiest family trips.',
        },
        {
          q: 'When is the best time?',
          a: 'May to October, when the gorge is green and the waterfall is full.',
        },
      ],
      duration: 'Half day · ~7 hours',
      season: 'May – October',
    },
    ru: {
      title: 'Озеро Иссык и водопад',
      metaTitle: 'Озеро Иссык и Медвежий водопад — частный тур из Алматы',
      metaDescription:
        'Частный тур на полдня из Алматы к бирюзовому озеру Иссык и Медвежьему водопаду в Тургеньском ущелье. Личный автомобиль, гид, трансфер от отеля.',
      teaser: 'Бирюзовое горное озеро и лесной водопад — лёгкая частная поездка рядом с Алматы.',
      description: [
        'Озеро Иссык лежит в еловом ущелье в часе езды к востоку от Алматы — спокойное бирюзовое зеркало в окружении гор. Дополняем его Медвежьим водопадом в зелёном Тургеньском ущелье: короткая прогулка по лесу к прохладному каскаду.',
        'Спокойные зелёные полдня без тяжёлых походов, приватно и гибко — отлично между большими турами или для семей.',
      ],
      highlights: [
        'Бирюзовое озеро Иссык в еловом ущелье',
        'Медвежий водопад в Тургеньском ущелье — лёгкая прогулка',
        'Близко — меньше 90 минут от Алматы',
        'Личный автомобиль, трансфер от отеля и спокойный темп',
      ],
      itinerary: [
        { time: '09:00', text: 'Выезд от вашего отеля в Алматы' },
        { time: '10:15', text: 'Озеро Иссык — смотровые и прогулка вдоль берега' },
        { time: '12:00', text: 'Тургеньское ущелье — прогулка к Медвежьему водопаду' },
        { time: '14:00', text: 'Обед в кафе в ущелье (по желанию)' },
        { time: '15:00', text: 'Дорога обратно в Алматы' },
        { time: '16:00', text: 'Возвращение к отелю' },
      ],
      included: inclRu('Личный автомобиль под размер группы'),
      notIncluded: notInclRu,
      faq: [
        {
          q: 'Подойдёт ли детям?',
          a: 'Да — короткие прогулки, спокойное озеро и быстрый водопад делают это одним из самых лёгких семейных туров.',
        },
        {
          q: 'Когда лучше ехать?',
          a: 'С мая по октябрь, когда ущелье зелёное, а водопад полноводный.',
        },
      ],
      duration: 'Полдня · ~7 часов',
      season: 'Май – октябрь',
    },
  },
  {
    slug: 'assy-plateau-1day',
    image: '/images/assy-plateau.jpg',
    priceKzt: 59990,
    priceBrackets: brackets(59990, 84990, 124990, 159990),
    hours: 11,
    featured: false,
    en: {
      title: 'Assy Plateau — 1 day',
      metaTitle: 'Assy Plateau Private Day Tour from Almaty — Nomad Pastures & Observatory',
      metaDescription:
        'Private day trip from Almaty to the Assy Plateau: alpine meadows at 2,500 m, nomad yurts, an observatory and the Turgen gorge waterfalls. Your own vehicle and guide.',
      teaser: 'Alpine meadows at 2,500 m where nomads graze horses, plus an observatory at the edge of the sky.',
      description: [
        'The Assy Plateau is the nomadic side of Kazakhstan: a high summer pasture at ~2,500 m, dotted with yurts and grazing horses, crowned by the Assy-Turgen observatory. We reach it through the Turgen gorge and its waterfalls.',
        'A private day with far fewer tourists than Charyn or Kolsai — space, silence and real shepherd life.',
      ],
      highlights: [
        'Sweeping alpine plateau at ~2,500 m with herds of free horses',
        'Assy-Turgen astronomical observatory',
        'Turgen gorge waterfalls on the way',
        'Private vehicle and a flexible schedule',
      ],
      itinerary: [
        { time: '08:00', text: 'Pickup from your hotel in Almaty' },
        { time: '09:30', text: 'Turgen gorge — waterfall walk' },
        { time: '11:30', text: 'Climb to the Assy Plateau, viewpoints' },
        { time: '12:30', text: 'Picnic / yurt visit with kumys tasting (summer)' },
        { time: '14:00', text: 'Observatory photo stop' },
        { time: '15:00', text: 'Descend and drive back' },
        { time: '17:00', text: 'Drop-off at your hotel' },
      ],
      included: inclEn('Private SUV, sized to your group'),
      notIncluded: notInclEn,
      faq: [
        {
          q: 'When is the best time?',
          a: 'June to September, when the pastures are green, the yurts are up and the road over the plateau is open.',
        },
        {
          q: 'Is the road rough?',
          a: 'The upper section is gravel, which is why we use an SUV. It adds to the adventure rather than the discomfort.',
        },
      ],
      duration: 'Full day · ~11 hours',
      season: 'June – September',
    },
    ru: {
      title: 'Плато Ассы — 1 день',
      metaTitle: 'Плато Ассы — частный однодневный тур из Алматы',
      metaDescription:
        'Частный тур из Алматы на плато Ассы: альпийские луга на 2 500 м, юрты, обсерватория и водопады Тургеньского ущелья. Личный автомобиль и гид.',
      teaser: 'Альпийские луга на 2 500 м, где кочевники пасут лошадей, и обсерватория на краю неба.',
      description: [
        'Плато Ассы — кочевая сторона Казахстана: высокогорное летнее пастбище на ~2 500 м с юртами и табунами лошадей, увенчанное обсерваторией Ассы-Тургень. Поднимаемся через Тургеньское ущелье с его водопадами.',
        'Частный день с гораздо меньшим числом туристов, чем на Чарыне или Кольсае — простор, тишина и настоящая пастушья жизнь.',
      ],
      highlights: [
        'Просторное плато на ~2 500 м с табунами лошадей',
        'Обсерватория Ассы-Тургень',
        'Водопады Тургеньского ущелья по пути',
        'Личный автомобиль и гибкий график',
      ],
      itinerary: [
        { time: '08:00', text: 'Выезд от вашего отеля в Алматы' },
        { time: '09:30', text: 'Тургеньское ущелье — прогулка к водопаду' },
        { time: '11:30', text: 'Подъём на плато Ассы, смотровые' },
        { time: '12:30', text: 'Пикник / юрта с дегустацией кумыса (летом)' },
        { time: '14:00', text: 'Фотоостановка у обсерватории' },
        { time: '15:00', text: 'Спуск и дорога назад' },
        { time: '17:00', text: 'Возвращение к отелю' },
      ],
      included: inclRu('Личный внедорожник под размер группы'),
      notIncluded: notInclRu,
      faq: [
        {
          q: 'Когда лучше ехать?',
          a: 'С июня по сентябрь: пастбища зелёные, юрты стоят, дорога через плато открыта.',
        },
        {
          q: 'Тяжёлая ли дорога?',
          a: 'Верхний участок гравийный, поэтому едем на внедорожнике. Это добавляет приключения, а не дискомфорта.',
        },
      ],
      duration: 'Полный день · ~11 часов',
      season: 'Июнь – сентябрь',
    },
  },
  {
    slug: 'assy-plateau-2day',
    image: '/images/assy-plateau.jpg',
    priceKzt: 119990,
    priceBrackets: brackets(119990, 169990, 249990, 319990),
    hours: 0,
    featured: false,
    en: {
      title: 'Assy Plateau — 2 days',
      metaTitle: 'Assy Plateau 2-Day Private Tour from Almaty — Overnight Under the Stars',
      metaDescription:
        'Two-day private tour from Almaty to the Assy Plateau with an overnight at 2,500 m — nomad pastures, the observatory and one of the darkest night skies near Almaty.',
      teaser: 'The plateau at a slow pace, with an overnight under one of the clearest night skies near Almaty.',
      description: [
        'The same nomadic highland, with time to stay the night. We camp or stay in a yurt on the plateau, watch sunset over the pastures and the Milky Way rise above the observatory — the dark sky at 2,500 m is unforgettable.',
        'Private vehicle and guide for both days, with the pace set by you. Overnight arrangements confirmed on booking.',
      ],
      highlights: [
        'Sunset and a star-filled night on the plateau',
        'Nomad pastures, yurts and free horses',
        'Assy-Turgen observatory',
        'Private vehicle and guide for two days',
      ],
      itinerary: [
        { time: 'Day 1', text: 'Turgen gorge, climb to the plateau, sunset and overnight (yurt / camp)' },
        { time: 'Day 2', text: 'Sunrise, observatory, free time on the plateau, return to Almaty' },
      ],
      included: [
        'Private SUV, sized to your group',
        'Professional English-speaking driver-guide for 2 days',
        'Hotel pickup and drop-off in Almaty',
        'National park entrance fees',
        'Bottled water',
      ],
      notIncluded: ['Overnight (yurt / camp, arranged on request)', 'Meals', 'Personal expenses', 'Tips (optional)'],
      faq: [
        {
          q: 'Where do we sleep?',
          a: 'In a yurt or a tent camp on the plateau, arranged for you. Nights are cold even in summer — bring a warm layer.',
        },
        {
          q: 'Is it worth the extra day?',
          a: 'If you care about the night sky and a slow, immersive experience — absolutely. The stars here are the highlight.',
        },
      ],
      duration: '2 days',
      season: 'June – September',
    },
    ru: {
      title: 'Плато Ассы — 2 дня',
      metaTitle: 'Плато Ассы — 2-дневный частный тур из Алматы с ночёвкой под звёздами',
      metaDescription:
        'Двухдневный частный тур из Алматы на плато Ассы с ночёвкой на 2 500 м — кочевые пастбища, обсерватория и одно из самых тёмных ночных небес рядом с Алматы.',
      teaser: 'Плато в спокойном темпе и ночёвка под одним из самых чистых ночных небес рядом с Алматы.',
      description: [
        'То же кочевое высокогорье, но с ночёвкой. Ночуем в палатке или юрте на плато, встречаем закат над пастбищами и Млечный Путь над обсерваторией — тёмное небо на 2 500 м незабываемо.',
        'Личный автомобиль и гид на оба дня, темп задаёте вы. Ночёвку подтверждаем при бронировании.',
      ],
      highlights: [
        'Закат и звёздная ночь на плато',
        'Кочевые пастбища, юрты и вольные лошади',
        'Обсерватория Ассы-Тургень',
        'Личный автомобиль и гид на два дня',
      ],
      itinerary: [
        { time: 'День 1', text: 'Тургеньское ущелье, подъём на плато, закат и ночёвка (юрта / лагерь)' },
        { time: 'День 2', text: 'Рассвет, обсерватория, свободное время на плато, возвращение в Алматы' },
      ],
      included: [
        'Личный внедорожник под размер группы',
        'Профессиональный водитель-гид на 2 дня',
        'Трансфер от отеля и обратно по Алматы',
        'Входные билеты в нацпарк',
        'Питьевая вода',
      ],
      notIncluded: ['Ночёвка (юрта / лагерь, по запросу)', 'Питание', 'Личные расходы', 'Чаевые (по желанию)'],
      faq: [
        {
          q: 'Где ночуем?',
          a: 'В юрте или палаточном лагере на плато, организуем за вас. Ночи холодные даже летом — возьмите тёплую вещь.',
        },
        {
          q: 'Стоит ли второго дня?',
          a: 'Если вам важно ночное небо и медленный, глубокий опыт — однозначно да. Звёзды здесь — главное.',
        },
      ],
      duration: '2 дня',
      season: 'Июнь – сентябрь',
    },
  },
  {
    slug: 'singing-dunes',
    image: '/images/singing-dunes.jpg',
    priceKzt: 79990,
    priceBrackets: brackets(79990, 119990, 179990, 229990),
    hours: 15,
    featured: false,
    en: {
      title: 'Singing Dunes',
      metaTitle: 'Singing Dune Private Tour from Almaty — Altyn-Emel National Park',
      metaDescription:
        'Private day tour from Almaty to the Singing Dune of Altyn-Emel National Park — a 150 m dune that hums in the wind. Your own vehicle and certified guide.',
      teaser: 'A 150-metre sand dune that hums and sings in the wind, alone in the desert of Altyn-Emel.',
      description: [
        'The Singing Dune (Aygaiqum) rises about 150 m from the desert floor of Altyn-Emel National Park, between the Ili River and the Aktau mountains. In dry, windy weather the shifting sand produces a deep, organ-like hum.',
        'A long but unforgettable private day across empty steppe and the wide Ili valley, with a climb up the dune ridge for huge views.',
      ],
      highlights: [
        'The famous Singing Dune of Altyn-Emel (≈150 m tall)',
        'Climb the dune ridge for panoramic desert views',
        'Drive through the Ili valley and Altyn-Emel steppe',
        'Private vehicle and a flexible schedule',
      ],
      itinerary: [
        { time: '06:00', text: 'Pickup from your hotel in Almaty' },
        { time: '09:30', text: 'Enter Altyn-Emel National Park (registration)' },
        { time: '11:00', text: 'Singing Dune — climb and free time' },
        { time: '13:00', text: 'Picnic lunch' },
        { time: '14:30', text: 'Depart the park, photo stops in the Ili valley' },
        { time: '21:00', text: 'Drop-off in Almaty' },
      ],
      included: inclEn('Private vehicle, sized to your group'),
      notIncluded: ['Lunch / picnic supplies', 'Personal expenses', 'Tips (optional)'],
      faq: [
        {
          q: 'Will the dune actually sing?',
          a: 'Only in dry, breezy weather — the sound is never guaranteed, but the dune and the views are worth it regardless.',
        },
        {
          q: 'Can it be combined with the Aktau mountains?',
          a: 'Yes — the colorful Aktau and Katutau mountains are deeper in the park. See our Treasures of Altyn-Emel tour.',
        },
      ],
      duration: 'Full day · ~15 hours',
      season: 'April – October',
    },
    ru: {
      title: 'Поющий бархан',
      metaTitle: 'Поющий бархан — частный тур из Алматы, нацпарк Алтын-Эмель',
      metaDescription:
        'Частный тур из Алматы на Поющий бархан в нацпарке Алтын-Эмель — 150-метровая дюна, что «поёт» на ветру. Личный автомобиль и гид.',
      teaser: '150-метровый песчаный бархан, который гудит и «поёт» на ветру, посреди пустыни Алтын-Эмеля.',
      description: [
        'Поющий бархан (Айгайкум) поднимается примерно на 150 м над пустыней нацпарка Алтын-Эмель, между рекой Или и горами Актау. В сухую ветреную погоду движущийся песок издаёт глубокий, похожий на орган гул.',
        'Длинный, но незабываемый частный день через пустую степь и широкую долину Или, с подъёмом по гребню бархана ради огромных видов.',
      ],
      highlights: [
        'Знаменитый Поющий бархан Алтын-Эмеля (≈150 м)',
        'Подъём по гребню бархана ради панорам пустыни',
        'Дорога через долину Или и степь Алтын-Эмеля',
        'Личный автомобиль и гибкий график',
      ],
      itinerary: [
        { time: '06:00', text: 'Выезд от вашего отеля в Алматы' },
        { time: '09:30', text: 'Въезд в нацпарк Алтын-Эмель (регистрация)' },
        { time: '11:00', text: 'Поющий бархан — подъём и свободное время' },
        { time: '13:00', text: 'Обед-пикник' },
        { time: '14:30', text: 'Выезд из парка, фотоостановки в долине Или' },
        { time: '21:00', text: 'Возвращение в Алматы' },
      ],
      included: inclRu('Личный автомобиль под размер группы'),
      notIncluded: ['Обед / продукты для пикника', 'Личные расходы', 'Чаевые (по желанию)'],
      faq: [
        {
          q: 'Бархан правда поёт?',
          a: 'Только в сухую ветреную погоду — звук не гарантирован, но бархан и виды стоят поездки в любом случае.',
        },
        {
          q: 'Можно ли совместить с горами Актау?',
          a: 'Да — разноцветные Актау и Катутау находятся глубже в парке. Смотрите тур «Treasures of Altyn-Emel».',
        },
      ],
      duration: 'Полный день · ~15 часов',
      season: 'Апрель – октябрь',
    },
  },
  {
    slug: 'altyn-emel',
    image: '/images/altyn-emel.jpg',
    priceKzt: 199990,
    priceBrackets: brackets(199990, 219990, 239990, 259990),
    hours: 0,
    featured: false,
    en: {
      title: 'Treasures of Altyn-Emel',
      metaTitle: 'Treasures of Altyn-Emel Private Tour from Almaty — Aktau, Katutau & Singing Dune',
      metaDescription:
        'Private multi-day tour from Almaty through Altyn-Emel National Park: the striped Aktau mountains, the Katutau volcanic rocks, the Singing Dune and ancient petroglyphs.',
      teaser: 'A private journey through Altyn-Emel — striped desert mountains, a singing dune and volcanic rocks.',
      description: [
        'Altyn-Emel is Kazakhstan’s flagship desert park, and this private trip does it justice: the striped pink-and-white Aktau "mountains", the black volcanic Katutau rocks, the Singing Dune and ancient petroglyphs — landscapes that feel like another planet.',
        'The park is vast and far from the city, so this runs as a private multi-day tour with overnights inside or near the park. Full day-by-day itinerary on request.',
      ],
      highlights: [
        'The striped Aktau "White Mountains"',
        'The Katutau volcanic rocks',
        'The Singing Dune and the Ili valley',
        'Private 4x4 where needed and a certified guide',
      ],
      itinerary: [
        { time: 'Day 1', text: 'Drive to the park, Singing Dune and Ili valley, overnight' },
        { time: 'Day 2', text: 'Aktau and Katutau mountains, petroglyphs, return to Almaty' },
      ],
      included: [
        'Private vehicle (4x4 where needed), sized to your group',
        'Professional English-speaking driver-guide',
        'Park entrance and registration fees',
        'Bottled water',
      ],
      notIncluded: ['Accommodation (overnight stays)', 'Meals', 'Personal expenses', 'Tips (optional)'],
      faq: [
        {
          q: 'How many days is it?',
          a: 'Usually 2 days because of the distances and the size of the park. Exact dates and route are confirmed on booking.',
        },
        {
          q: 'Do we need a 4x4?',
          a: 'Inside the park, yes — the tracks are rough, so we use a suitable vehicle for the Aktau and Katutau sections.',
        },
      ],
      duration: 'Multi-day (usually 2 days)',
      season: 'April – October',
    },
    ru: {
      title: 'Treasures of Altyn-Emel',
      metaTitle: 'Treasures of Altyn-Emel — частный тур из Алматы (Актау, Катутау, Поющий бархан)',
      metaDescription:
        'Частный многодневный тур из Алматы по нацпарку Алтын-Эмель: полосатые горы Актау, вулканические скалы Катутау, Поющий бархан и древние петроглифы.',
      teaser: 'Частное путешествие по Алтын-Эмелю — полосатые горы пустыни, поющий бархан и вулканические скалы.',
      description: [
        'Алтын-Эмель — главный пустынный парк Казахстана, и этот частный тур раскрывает его полностью: полосатые розово-белые «горы» Актау, чёрные вулканические скалы Катутау, Поющий бархан и древние петроглифы — пейзажи будто с другой планеты.',
        'Парк огромный и далеко от города, поэтому это частный многодневный тур с ночёвками в парке или рядом. Подробная программа по дням — по запросу.',
      ],
      highlights: [
        'Полосатые «Белые горы» Актау',
        'Вулканические скалы Катутау',
        'Поющий бархан и долина Или',
        'Личный внедорожник где нужно и сертифицированный гид',
      ],
      itinerary: [
        { time: 'День 1', text: 'Дорога в парк, Поющий бархан и долина Или, ночёвка' },
        { time: 'День 2', text: 'Горы Актау и Катутау, петроглифы, возвращение в Алматы' },
      ],
      included: [
        'Личный автомобиль (внедорожник где нужно) под размер группы',
        'Профессиональный водитель-гид',
        'Входные билеты и регистрация в парке',
        'Питьевая вода',
      ],
      notIncluded: ['Проживание (ночёвки)', 'Питание', 'Личные расходы', 'Чаевые (по желанию)'],
      faq: [
        {
          q: 'Сколько дней?',
          a: 'Обычно 2 дня из-за расстояний и размеров парка. Точные даты и маршрут подтверждаем при бронировании.',
        },
        {
          q: 'Нужен ли внедорожник?',
          a: 'Внутри парка — да, дороги тяжёлые, поэтому на участках Актау и Катутау используем подходящий автомобиль.',
        },
      ],
      duration: 'Многодневный (обычно 2 дня)',
      season: 'Апрель – октябрь',
    },
  },
  {
    slug: 'green-soul',
    image: '/images/green-soul.jpg',
    priceKzt: 49990,
    priceBrackets: brackets(49990, 69990, 99990, 129990),
    hours: 5,
    featured: false,
    en: {
      title: 'Green Soul — Ayusai & Alma-Arasan',
      metaTitle: 'Green Soul Private Tour from Almaty — Ayusai & Alma-Arasan Gorges',
      metaDescription:
        'Easy private half-day tour from Almaty to the green Ayusai and Alma-Arasan gorges — spruce forests, mountain rivers and fresh air minutes from the city.',
      teaser: 'Spruce forests and mountain rivers minutes from the city — an easy private nature reset.',
      description: [
        'Green Soul is the easiest escape: the lush Ayusai and Alma-Arasan gorges right on the edge of Almaty, with spruce forest, a clear mountain river and gentle walking trails. No long drive, no hard hiking — just green mountains and fresh air.',
        'Private and flexible — perfect for a half-day reset, a relaxed morning before a flight, or families.',
      ],
      highlights: [
        'Green Ayusai and Alma-Arasan gorges on the edge of the city',
        'Spruce forest and a clear mountain river',
        'Gentle, family-friendly walking',
        'Private vehicle, hotel pickup and a flexible pace',
      ],
      itinerary: [
        { time: '09:00', text: 'Pickup from your hotel in Almaty' },
        { time: '09:40', text: 'Drive to the Ayusai / Alma-Arasan gorge' },
        { time: '10:00', text: 'Forest walk along the mountain river' },
        { time: '12:30', text: 'Tea / picnic and free time' },
        { time: '14:00', text: 'Drop-off at your hotel' },
      ],
      included: inclEn('Private vehicle, sized to your group'),
      notIncluded: notInclEn,
      faq: [
        {
          q: 'Is it good for a layover or a relaxed day?',
          a: 'Perfect — it is short, close to the city and easy, with the option to adjust the timing to your schedule.',
        },
        {
          q: 'How hard is the walking?',
          a: 'Easy and flat along the river. You set the distance; it suits all ages.',
        },
      ],
      duration: 'Half day · ~5 hours',
      season: 'All year round',
    },
    ru: {
      title: 'Green Soul — Аюсай и Алма-Арасан',
      metaTitle: 'Green Soul — частный тур из Алматы, ущелья Аюсай и Алма-Арасан',
      metaDescription:
        'Лёгкий частный тур на полдня из Алматы в зелёные ущелья Аюсай и Алма-Арасан — еловые леса, горные реки и свежий воздух в минутах от города.',
      teaser: 'Еловые леса и горные реки в минутах от города — лёгкая частная перезагрузка на природе.',
      description: [
        'Green Soul — самый лёгкий выезд: зелёные ущелья Аюсай и Алма-Арасан прямо на краю Алматы, с еловым лесом, чистой горной рекой и спокойными тропами. Без долгой дороги и тяжёлых походов — только зелёные горы и свежий воздух.',
        'Приватно и гибко — идеально для перезагрузки на полдня, спокойного утра перед рейсом или для семей.',
      ],
      highlights: [
        'Зелёные ущелья Аюсай и Алма-Арасан на краю города',
        'Еловый лес и чистая горная река',
        'Лёгкие, семейные прогулки',
        'Личный автомобиль, трансфер от отеля и гибкий темп',
      ],
      itinerary: [
        { time: '09:00', text: 'Выезд от вашего отеля в Алматы' },
        { time: '09:40', text: 'Переезд в ущелье Аюсай / Алма-Арасан' },
        { time: '10:00', text: 'Прогулка по лесу вдоль горной реки' },
        { time: '12:30', text: 'Чай / пикник и свободное время' },
        { time: '14:00', text: 'Возвращение к отелю' },
      ],
      included: inclRu('Личный автомобиль под размер группы'),
      notIncluded: notInclRu,
      faq: [
        {
          q: 'Подойдёт ли при пересадке или для спокойного дня?',
          a: 'Идеально — коротко, близко к городу и легко, время можно подстроить под ваш график.',
        },
        {
          q: 'Насколько тяжёлые прогулки?',
          a: 'Лёгкие и ровные вдоль реки. Дистанцию выбираете вы; подходит для любого возраста.',
        },
      ],
      duration: 'Полдня · ~5 часов',
      season: 'Круглый год',
    },
  },
  {
    slug: 'almaty-city-tour',
    image: '/images/almaty-city-tour.jpg',
    priceKzt: 39990,
    priceBrackets: brackets(39990, 54990, 79990, 109990),
    hours: 4,
    featured: false,
    en: {
      title: 'Almaty City Tour (4 hours)',
      metaTitle: 'Almaty City Tour — Private 4-Hour Highlights Tour',
      metaDescription:
        'Private 4-hour Almaty city tour: Panfilov Park, Zenkov Cathedral, the Green Bazaar, Kok-Tobe hill and more. English-speaking guide, your own vehicle.',
      teaser:
        'The essential Almaty in four hours: a wooden cathedral, Soviet mosaics, the Green Bazaar and a cable car above the city.',
      description: [
        'A compact introduction to the city between the steppe and the mountains. In four hours you will see how Almaty layers tsarist wooden architecture, Soviet monuments and a modern café culture against a wall of 4,000-meter peaks.',
        'We walk Panfilov Park and the candy-colored Zenkov Cathedral, taste dried fruit at the Green Bazaar, pass the best Soviet-modernist landmarks and finish on Kok-Tobe hill with the whole city at your feet.',
        'Go at your own pace with just your group — the route is flexible and your guide adapts it to your interests.',
      ],
      highlights: [
        'Zenkov Cathedral — one of the tallest wooden buildings in the world',
        'Green Bazaar — walk and tastings',
        'Panfilov Park and the WWII memorial',
        'Kok-Tobe hill by cable car — panoramic views',
        'Flexible private format — your interests set the route',
      ],
      itinerary: [
        { time: '10:00', text: 'Pickup from your hotel' },
        { time: '10:15', text: 'Panfilov Park, Zenkov Cathedral, war memorial' },
        { time: '11:15', text: 'Green Bazaar — walk and tastings' },
        { time: '12:15', text: 'Historic center, Republic Square viewpoint' },
        { time: '13:00', text: 'Kok-Tobe hill — cable car and panorama' },
        { time: '14:00', text: 'Drop-off at your hotel' },
      ],
      included: [
        'Private vehicle, sized to your group',
        'Professional English-speaking guide',
        'Hotel pickup and drop-off',
        'Bottled water',
      ],
      notIncluded: ['Cable car tickets (≈ 5,000 ₸)', 'Food and drinks', 'Tips (optional)'],
      faq: [
        {
          q: 'Is this tour good for a layover?',
          a: 'Perfect — we can pick you up and drop you off at the airport and adjust the length to your connection.',
        },
        {
          q: 'Can we do it in the evening?',
          a: 'Yes — the evening version ends on Kok-Tobe at sunset, the best light over the city.',
        },
      ],
      duration: '4 hours',
      season: 'All year round',
    },
    ru: {
      title: 'Обзорная по Алматы (4 часа)',
      metaTitle: 'Обзорная экскурсия по Алматы — частный тур на 4 часа',
      metaDescription:
        'Частная 4-часовая экскурсия по Алматы: парк Панфилова, Вознесенский собор, Зелёный базар, Кок-Тобе. Гид, личный автомобиль.',
      teaser:
        'Главное в Алматы за четыре часа: деревянный собор, советские мозаики, Зелёный базар и канатная дорога над городом.',
      description: [
        'Компактное знакомство с городом между степью и горами. За четыре часа вы увидите, как в Алматы соседствуют деревянная архитектура царских времён, советский модернизм и современная кофейная культура — и всё это на фоне четырёхтысячников.',
        'Прогуляемся по парку Панфилова и разноцветному Вознесенскому собору, попробуем сухофрукты на Зелёном базаре, проедем мимо памятников советского модернизма и закончим на Кок-Тобе — с целым городом у ваших ног.',
        'Едете в своём темпе, только своей компанией — маршрут гибкий, гид перестраивает его под ваши интересы.',
      ],
      highlights: [
        'Вознесенский собор — одно из самых высоких деревянных зданий мира',
        'Зелёный базар — с дегустациями',
        'Парк Панфилова и мемориал славы',
        'Кок-Тобе на канатной дороге — панорама города',
        'Гибкий приватный формат — маршрут под ваши интересы',
      ],
      itinerary: [
        { time: '10:00', text: 'Выезд от вашего отеля' },
        { time: '10:15', text: 'Парк Панфилова, Вознесенский собор, мемориал' },
        { time: '11:15', text: 'Зелёный базар — прогулка и дегустации' },
        { time: '12:15', text: 'Исторический центр, площадь Республики' },
        { time: '13:00', text: 'Кок-Тобе — канатная дорога и панорама' },
        { time: '14:00', text: 'Возвращение к отелю' },
      ],
      included: [
        'Личный автомобиль под размер группы',
        'Профессиональный гид',
        'Трансфер от отеля и обратно',
        'Питьевая вода',
      ],
      notIncluded: ['Билеты на канатную дорогу (≈ 5 000 ₸)', 'Еда и напитки', 'Чаевые (по желанию)'],
      faq: [
        {
          q: 'Подойдёт ли при пересадке в Алматы?',
          a: 'Идеально — заберём и вернём в аэропорт, длительность подстроим под стыковку.',
        },
        {
          q: 'Можно ли вечером?',
          a: 'Да — вечерняя версия заканчивается на Кок-Тобе на закате, лучший свет над городом.',
        },
      ],
      duration: '4 часа',
      season: 'Круглый год',
    },
  },
  {
    slug: 'big-almaty-lake',
    image: '/images/big-almaty-lake.jpg',
    priceKzt: 54990,
    priceBrackets: brackets(54990, 74990, 109990, 139990),
    hours: 5,
    featured: false,
    en: {
      title: 'Big Almaty Lake',
      metaTitle: 'Big Almaty Lake Tour — Private Half-Day Trip from Almaty',
      metaDescription:
        'Private half-day tour to Big Almaty Lake (BAO) at 2,511 m — the turquoise mountain lake an hour from Almaty. Your own vehicle, hotel pickup, certified guide.',
      teaser: 'A turquoise alpine lake at 2,511 m, framed by 4,000-meter peaks — only an hour from the city.',
      description: [
        'Big Almaty Lake (BAO) is the closest "wow" to Almaty: a glacial lake at 2,511 m whose color shifts from turquoise to milky jade, surrounded by peaks over 4,000 m.',
        'The tour is a perfect half-day: a scenic mountain road up the Big Almaty Gorge, viewpoints over the lake, and tea at a mountain lodge on the way down.',
        'Private and flexible — ideal as a first acclimatization trip or for a short layover.',
      ],
      highlights: [
        'The famous turquoise water of Big Almaty Lake at 2,511 m',
        'Panoramas of Big Almaty Peak (3,681 m) and the Tian Shan',
        'Scenic mountain road through Ile-Alatau National Park',
        'Perfect half-day trip — fits any schedule',
        'Private vehicle, hotel pickup and drop-off',
      ],
      itinerary: [
        { time: '09:00', text: 'Pickup from your hotel in Almaty' },
        { time: '10:00', text: 'Drive up the Big Almaty Gorge through the national park' },
        { time: '10:30', text: 'Big Almaty Lake — viewpoints, photos, short walks' },
        { time: '12:30', text: 'Optional tea stop at a mountain lodge' },
        { time: '14:00', text: 'Drop-off at your hotel' },
      ],
      included: inclEn('Private vehicle, sized to your group'),
      notIncluded: notInclEn,
      faq: [
        {
          q: 'Can we swim in the lake?',
          a: 'No — BAO supplies Almaty with drinking water, so the waterline is restricted. The viewpoints above offer the best photos anyway.',
        },
        {
          q: 'Is the altitude a problem?',
          a: 'For most people no — 2,511 m is fine for a short visit. Take it slow and drink water.',
        },
      ],
      duration: 'Half day · ~5 hours',
      season: 'All year round',
    },
    ru: {
      title: 'Большое Алматинское озеро',
      metaTitle: 'Тур на БАО — частная поездка на полдня из Алматы',
      metaDescription:
        'Частный тур на полдня к Большому Алматинскому озеру (2 511 м) — бирюзовое горное озеро в часе от города. Личный автомобиль, трансфер от отеля.',
      teaser: 'Бирюзовое высокогорное озеро на 2 511 м в окружении четырёхтысячников — всего в часе от города.',
      description: [
        'Большое Алматинское озеро (БАО) — ближайшее к Алматы «вау»: ледниковое озеро на 2 511 м, цвет которого меняется от бирюзового до молочно-нефритового, в окружении вершин выше 4 000 м.',
        'Идеальная поездка на полдня: живописная горная дорога по Большому Алматинскому ущелью, смотровые над озером и чай в горном приюте на спуске.',
        'Приватно и гибко — отлично как первая акклиматизационная поездка или при короткой пересадке.',
      ],
      highlights: [
        'Знаменитая бирюзовая вода БАО на высоте 2 511 м',
        'Панорамы пика Большой Алматинский (3 681 м) и Тянь-Шаня',
        'Живописная горная дорога через Иле-Алатауский нацпарк',
        'Идеальный формат на полдня',
        'Личный автомобиль, трансфер от отеля и обратно',
      ],
      itinerary: [
        { time: '09:00', text: 'Выезд от вашего отеля в Алматы' },
        { time: '10:00', text: 'Подъём по Большому Алматинскому ущелью' },
        { time: '10:30', text: 'БАО — смотровые площадки, фото, короткие прогулки' },
        { time: '12:30', text: 'Чай в горном приюте (по желанию)' },
        { time: '14:00', text: 'Возвращение к отелю' },
      ],
      included: inclRu('Личный автомобиль под размер группы'),
      notIncluded: notInclRu,
      faq: [
        {
          q: 'Можно ли купаться в озере?',
          a: 'Нет — БАО снабжает Алматы питьевой водой, подход к воде ограничен. Лучшие фото в любом случае со смотровых над озером.',
        },
        {
          q: 'Не страшна ли высота?',
          a: 'Для большинства — нет, 2 511 м для короткого визита комфортны. Поднимайтесь не спеша и пейте воду.',
        },
      ],
      duration: 'Полдня · ~5 часов',
      season: 'Круглый год',
    },
  },
  {
    slug: 'shymbulak-medeu',
    image: '/images/shymbulak-medeu.jpg',
    priceKzt: 49990,
    priceBrackets: brackets(49990, 69990, 99990, 129990),
    hours: 5,
    featured: false,
    en: {
      title: 'Shymbulak & Medeu',
      metaTitle: 'Shymbulak and Medeu Tour — Private Half-Day Trip from Almaty',
      metaDescription:
        'Private half-day tour to Medeu — the world’s highest skating rink — and Shymbulak ski resort at 3,200 m by cable car. Your own vehicle, hotel pickup.',
      teaser: 'From the world’s highest skating rink to 3,200 m by cable car — Almaty’s mountains in an easy half day.',
      description: [
        'Medeu and Shymbulak are Almaty’s pride: the legendary high-altitude skating rink and the ski resort above it, reachable by a spectacular three-stage cable car that tops out at 3,200 m.',
        'This tour requires zero fitness — the cable car does the climbing. In winter you can add skiing or skating; in summer the slopes turn into hiking trails and sunny terraces with the best mountain views.',
        'Private and flexible — the easiest way to stand above 3,000 m.',
      ],
      highlights: [
        'Medeu — the highest skating rink in the world (1,691 m)',
        'Three-stage cable car ride to Talgar Pass at 3,200 m',
        'Panoramas of Peak Talgar and the Zailiysky Alatau',
        'Skiing/skating in winter, hiking and terraces in summer',
        'Easy half-day format, zero fitness required',
      ],
      itinerary: [
        { time: '09:00', text: 'Pickup from your hotel in Almaty' },
        { time: '09:40', text: 'Medeu skating rink and dam viewpoint' },
        { time: '10:30', text: 'Cable car: Medeu → Shymbulak → Talgar Pass (3,200 m)' },
        { time: '11:30', text: 'Free time at the top — photos, coffee, short walks' },
        { time: '13:00', text: 'Descend by cable car' },
        { time: '14:00', text: 'Drop-off at your hotel' },
      ],
      included: [
        'Private vehicle, sized to your group',
        'Professional English-speaking driver-guide',
        'Hotel pickup and drop-off in Almaty',
        'Bottled water',
      ],
      notIncluded: ['Cable car tickets (≈ 7,000–9,000 ₸)', 'Ski/skate rental', 'Meals'],
      faq: [
        {
          q: 'Do I need to ski?',
          a: 'Not at all — most guests ride the cable car for the views. Skiing or skating is an optional add-on.',
        },
        {
          q: 'Is it cold at the top?',
          a: 'At 3,200 m, yes — even in July bring a jacket. In winter dress as for a ski day.',
        },
      ],
      duration: 'Half day · ~5 hours',
      season: 'All year round',
    },
    ru: {
      title: 'Шымбулак и Медеу',
      metaTitle: 'Тур на Шымбулак и Медеу — частная поездка на полдня из Алматы',
      metaDescription:
        'Частный тур на полдня: Медеу — самый высокогорный каток мира — и подъём на канатной дороге на 3 200 м на Шымбулаке. Личный автомобиль, трансфер от отеля.',
      teaser: 'От самого высокогорного катка мира до 3 200 м на канатной дороге — горы Алматы за лёгкие полдня.',
      description: [
        'Медеу и Шымбулак — гордость Алматы: легендарный высокогорный каток и горнолыжный курорт над ним, куда ведёт эффектная трёхступенчатая канатная дорога с верхней точкой на 3 200 м.',
        'Этот тур не требует никакой подготовки — всю работу делает канатка. Зимой можно добавить лыжи или коньки; летом склоны превращаются в пешие тропы и солнечные террасы с лучшим горным видом.',
        'Приватно и гибко — самый простой способ оказаться выше 3 000 м.',
      ],
      highlights: [
        'Медеу — самый высокогорный каток мира (1 691 м)',
        'Канатная дорога до Талгарского перевала (3 200 м)',
        'Панорамы пика Талгар и Заилийского Алатау',
        'Зимой — лыжи и коньки, летом — прогулки и террасы',
        'Лёгкий формат на полдня, подготовка не нужна',
      ],
      itinerary: [
        { time: '09:00', text: 'Выезд от вашего отеля в Алматы' },
        { time: '09:40', text: 'Каток Медеу и смотровая на плотине' },
        { time: '10:30', text: 'Канатная дорога: Медеу → Шымбулак → Талгарский перевал' },
        { time: '11:30', text: 'Свободное время наверху — фото, кофе, прогулки' },
        { time: '13:00', text: 'Спуск на канатной дороге' },
        { time: '14:00', text: 'Возвращение к отелю' },
      ],
      included: [
        'Личный автомобиль под размер группы',
        'Профессиональный водитель-гид',
        'Трансфер от отеля и обратно по Алматы',
        'Питьевая вода',
      ],
      notIncluded: ['Билеты на канатную дорогу (≈ 7 000–9 000 ₸)', 'Прокат лыж/коньков', 'Питание'],
      faq: [
        {
          q: 'Нужно ли уметь кататься?',
          a: 'Совсем нет — большинство гостей поднимаются ради видов. Лыжи и коньки — опция по желанию.',
        },
        {
          q: 'Холодно ли наверху?',
          a: 'На 3 200 м — да, даже в июле возьмите куртку. Зимой одевайтесь как на горнолыжный день.',
        },
      ],
      duration: 'Полдня · ~5 часов',
      season: 'Круглый год',
    },
  },
];

export function getTour(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}

/** All tours are available privately. */
export const privateTours: Tour[] = tours;
