// Scheduled small-group departures, priced per person in tenge, from a fixed meeting point.
// Distinct products from the private tours (different combos, fixed weekly departure days).

export interface GroupProgramStep {
  time: string;
  text: string;
}

export interface GroupTourContent {
  name: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  teaser: string;
  intro: string[];
  locations: string[];
  included: string[];
  optional?: string[];
  program?: GroupProgramStep[];
  whatToBring: string[];
  notes?: string[];
  duration: string;
  season: string;
}

export interface GroupTour {
  slug: string;
  image: string;
  emoji: string;
  /** per person, tenge */
  priceKzt: number;
  /** Overrides the plain price line when pricing is a range or has options. */
  priceNote?: { en: string; ru: string };
  /** Weekday keys: 'mon'..'sun'. Empty = use departureNote only. */
  weekdays: string[];
  departureNote?: { en: string; ru: string };
  meetingPoint: { en: string; ru: string };
  en: GroupTourContent;
  ru: GroupTourContent;
}

const meetingPoint = {
  en: 'Baitursynov Street 100 (between Abay and Satpayev streets, above Baikonur metro station)',
  ru: 'улица Байтурсынова 100 (между улицами Абая и Сатпаева, над станцией метро «Байконур»)',
};

const bringEn = [
  'ID — required (original; Kaspi or eGov version accepted)',
  'Snacks: sandwiches, chocolate, nuts, tea, water',
  'Sunglasses and sunscreen',
  'Comfortable clothing suitable for the weather',
  'Good mood and readiness for beautiful photos',
];
const bringRu = [
  'Удостоверение личности — обязательно (оригинал; Kaspi или eGov подойдёт)',
  'Перекус: бутерброды, шоколад, орехи, чай, вода',
  'Солнцезащитные очки и крем',
  'Удобная одежда по погоде',
  'Хорошее настроение и готовность к красивым фото',
];

const scheduleEn =
  'The schedule is approximate and may change with weather, road conditions and the punctuality of the group.';
const scheduleRu =
  'Расписание приблизительное и может меняться из-за погоды, дороги и пунктуальности группы.';
const borderEn =
  'There are border checkpoints on the route — bring an original ID (Kaspi / eGov accepted). Children: birth certificate. Foreign citizens: passport.';
const borderRu =
  'На маршруте есть пограничные посты — берите оригинал удостоверения (Kaspi / eGov подойдёт). Дети — свидетельство о рождении. Иностранные граждане — паспорт.';

export const groupTours: GroupTour[] = [
  {
    slug: 'classic',
    image: '/images/kaindy.jpg',
    emoji: '⚡️',
    priceKzt: 13990,
    weekdays: ['tue', 'wed', 'fri', 'sat', 'sun'],
    meetingPoint,
    en: {
      name: 'Classic',
      tagline: '1 day · 3 locations',
      metaTitle: 'Classic Group Tour from Almaty — Kolsai, Kaindy & Black Canyon',
      metaDescription:
        'Group day tour from Almaty: Kolsai Lake, the sunken forest of Kaindy and the Black Canyon viewpoint. Per-person price in tenge, certified guide. Book via WhatsApp.',
      teaser: 'Two alpine lakes and a canyon viewpoint in one day — the classic group escape from Almaty.',
      intro: [
        'Our most popular small-group day trip: the emerald Kolsai Lake, the surreal sunken forest of Lake Kaindy, and a stop at the Black Canyon viewpoint on the way. A comfortable bus covers the long stretch and a UAZ off-roader handles the final rough section up to Kaindy.',
        'Join a small group, pay per person, and leave the logistics to us — entrance fees and the UAZ transfer are already included.',
      ],
      locations: ['Kolsai Lake', 'Kaindy Lake', 'Black Canyon (viewpoint)'],
      included: [
        'Comfortable round-trip transport',
        'Professional guide',
        'Ecological / national park entrance fees',
        'UAZ off-road transfer to Lake Kaindy',
      ],
      optional: ['Horse rental', 'Catamaran or boat on the lake', 'Meals', 'Voluntary insurance'],
      program: [
        { time: '05:00', text: 'Group meeting at the pickup point' },
        { time: '05:20', text: 'Departure from Almaty — Black Canyon viewpoint on the way' },
        { time: '10:30', text: 'Kolsai Lake — walking and free time' },
        { time: '12:30', text: 'Departure to Saty village' },
        { time: '14:00', text: 'Lake Kaindy — walking and free time' },
        { time: '16:00', text: 'Departure to Saty village' },
        { time: '17:00', text: 'Departure to Almaty' },
        { time: '21:30', text: 'Arrival back in the city' },
      ],
      whatToBring: bringEn,
      notes: [
        'Part of the road to Kaindy is off-road, so you transfer from the bus to a UAZ (included), then walk 20–30 minutes from the parking to the lake. A horse can be rented on site for an extra fee.',
        borderEn,
        scheduleEn,
      ],
      duration: 'Full day · ~16 hours',
      season: 'June – September',
    },
    ru: {
      name: 'Classic',
      tagline: '1 день · 3 локации',
      metaTitle: 'Групповой тур Classic из Алматы — Кольсай, Каинды и Чёрный каньон',
      metaDescription:
        'Групповой однодневный тур из Алматы: озеро Кольсай, затонувший лес Каинды и смотровая Чёрного каньона. Цена за человека в тенге, гид. Бронь в WhatsApp.',
      teaser: 'Два горных озера и смотровая каньона за один день — классический групповой выезд из Алматы.',
      intro: [
        'Наш самый популярный групповой выезд: изумрудное озеро Кольсай, сюрреалистичный затонувший лес озера Каинды и остановка на смотровой Чёрного каньона по пути. Дальнюю дорогу проходит комфортный автобус, а финальный сложный участок до Каинды — внедорожник УАЗ.',
        'Присоединяйтесь к небольшой группе, платите за человека, а логистику оставьте нам — входные билеты и трансфер на УАЗе уже включены.',
      ],
      locations: ['Озеро Кольсай', 'Озеро Каинды', 'Чёрный каньон (смотровая)'],
      included: [
        'Комфортный трансфер в обе стороны',
        'Профессиональный гид',
        'Все экологические / входные сборы',
        'Трансфер на УАЗе до озера Каинды',
      ],
      optional: ['Аренда лошади', 'Катамаран или лодка на озере', 'Питание', 'Добровольное страхование'],
      program: [
        { time: '05:00', text: 'Сбор группы в точке выезда' },
        { time: '05:20', text: 'Выезд из Алматы — смотровая Чёрного каньона по пути' },
        { time: '10:30', text: 'Озеро Кольсай — прогулка и свободное время' },
        { time: '12:30', text: 'Выезд в село Саты' },
        { time: '14:00', text: 'Озеро Каинды — прогулка и свободное время' },
        { time: '16:00', text: 'Выезд в село Саты' },
        { time: '17:00', text: 'Выезд в Алматы' },
        { time: '21:30', text: 'Возвращение в город' },
      ],
      whatToBring: bringRu,
      notes: [
        'Часть дороги до Каинды — бездорожье, поэтому пересадка с автобуса на УАЗ (включено), затем 20–30 минут пешком от парковки до озера. На месте можно арендовать лошадь за доплату.',
        borderRu,
        scheduleRu,
      ],
      duration: 'Полный день · ~16 часов',
      season: 'Июнь – сентябрь',
    },
  },
  {
    slug: 'drive',
    image: '/images/charyn-canyon.jpg',
    emoji: '🚀',
    priceKzt: 12990,
    weekdays: ['mon', 'wed', 'sat', 'sun'],
    meetingPoint,
    en: {
      name: 'Drive',
      tagline: '1 day · 5 locations',
      metaTitle: 'Drive Group Tour from Almaty — Kolsai Lake & Charyn Canyon',
      metaDescription:
        'Group day tour from Almaty: Kolsai Lake plus Charyn Canyon, Black Canyon, Moon Canyon and the Charyn River. Per-person price in tenge, certified guide.',
      teaser: 'A lake and four canyons in a single day — the fast, scenic way to see the best of the east.',
      intro: [
        'The Drive tour packs an alpine lake and the whole Charyn canyon system into one day: Kolsai Lake in the morning, then the Valley of Castles, the Black Canyon, the Moon Canyon and the Charyn River. No off-road lake transfer on this one — just a smooth, scenic loop.',
        'Small group, per-person price, all ecological fees included.',
      ],
      locations: ['Kolsai Lake', 'Charyn Canyon (Valley of Castles)', 'Black Canyon', 'Moon Canyon', 'Charyn River'],
      included: ['Round-trip transfer', 'Professional guide', 'All ecological entrance fees'],
      optional: ['Horse riding and lunch', 'Boat or catamaran on the lake', 'Voluntary insurance'],
      program: [
        { time: '06:00', text: 'Group meeting at the pickup point' },
        { time: '06:30', text: 'Departure from Almaty' },
        { time: '10:30', text: 'Kolsai Lake — walking and free time' },
        { time: '13:00', text: 'Departure' },
        { time: '15:00', text: 'Stop at the Black Canyon' },
        { time: '15:30', text: 'On to the Moon Canyon' },
        { time: '16:40', text: 'Charyn Canyon (Valley of Castles)' },
        { time: '19:00', text: 'Departure to Almaty' },
        { time: '21:30–22:00', text: 'Arrival back in the city' },
      ],
      whatToBring: bringEn,
      notes: [borderEn, scheduleEn],
      duration: 'Full day · ~16 hours',
      season: 'June – September',
    },
    ru: {
      name: 'Drive',
      tagline: '1 день · 5 локаций',
      metaTitle: 'Групповой тур Drive из Алматы — Кольсай и Чарынский каньон',
      metaDescription:
        'Групповой однодневный тур из Алматы: озеро Кольсай, Чарынский каньон, Чёрный каньон, Лунный каньон и река Чарын. Цена за человека в тенге.',
      teaser: 'Озеро и четыре каньона за один день — быстрый и живописный маршрут на восток.',
      intro: [
        'Тур Drive вмещает горное озеро и всю систему Чарынских каньонов в один день: утром — озеро Кольсай, затем Долина замков, Чёрный каньон, Лунный каньон и река Чарын. Без внедорожной пересадки — ровная живописная петля.',
        'Небольшая группа, цена за человека, все экологические сборы включены.',
      ],
      locations: ['Озеро Кольсай', 'Чарынский каньон (Долина замков)', 'Чёрный каньон', 'Лунный каньон', 'Река Чарын'],
      included: ['Трансфер в обе стороны', 'Профессиональный гид', 'Все экологические сборы'],
      optional: ['Конная прогулка и обед', 'Лодка или катамаран на озере', 'Добровольное страхование'],
      program: [
        { time: '06:00', text: 'Сбор группы в точке выезда' },
        { time: '06:30', text: 'Выезд из Алматы' },
        { time: '10:30', text: 'Озеро Кольсай — прогулка и свободное время' },
        { time: '13:00', text: 'Выезд' },
        { time: '15:00', text: 'Остановка у Чёрного каньона' },
        { time: '15:30', text: 'Переезд к Лунному каньону' },
        { time: '16:40', text: 'Чарынский каньон (Долина замков)' },
        { time: '19:00', text: 'Выезд в Алматы' },
        { time: '21:30–22:00', text: 'Возвращение в город' },
      ],
      whatToBring: bringRu,
      notes: [borderRu, scheduleRu],
      duration: 'Полный день · ~16 часов',
      season: 'Июнь – сентябрь',
    },
  },
  {
    slug: 'extreme',
    image: '/images/charyn-kolsai-kaindy.jpg',
    emoji: '🔥',
    priceKzt: 17990,
    weekdays: ['wed', 'fri', 'sun'],
    meetingPoint,
    en: {
      name: 'Extreme',
      tagline: '1 day · 6 locations',
      metaTitle: 'Extreme Group Tour from Almaty — Kolsai, Kaindy & Charyn Canyon',
      metaDescription:
        'The biggest group day tour from Almaty: Kolsai Lake, Kaindy Lake, Charyn Canyon, Black Canyon, Moon Canyon and the Charyn River — all in one day. Per-person price in tenge.',
      teaser: 'Everything in one day: two alpine lakes and the entire Charyn canyon system.',
      intro: [
        'The Extreme tour is the full set: Kolsai Lake, the sunken forest of Kaindy, the Valley of Castles, the Black Canyon, the Moon Canyon and the Charyn River — six landmarks in a single, early-starting day. A UAZ off-roader handles the rough road to Kaindy.',
        'A long, rewarding day for travelers who want to see as much as possible. Small group, per-person price.',
      ],
      locations: [
        'Kolsai Lake',
        'Kaindy Lake',
        'Charyn Canyon (Valley of Castles)',
        'Black Canyon',
        'Moon Canyon',
        'Charyn River',
      ],
      included: [
        'Comfortable round-trip transfer',
        'Ecological entrance fees',
        'Professional guide',
        'UAZ off-road transfer to Lake Kaindy',
      ],
      optional: ['Catamaran or boat on the lake', 'Horse rental', 'Meals'],
      program: [
        { time: '04:30', text: 'Group meeting at the pickup point' },
        { time: '05:00', text: 'Departure from Almaty' },
        { time: '09:00', text: 'Charyn Canyon — walking tour of the Valley of Castles' },
        { time: '10:30', text: 'Towards Lake Kaindy — Black Canyon and Moon Canyon viewpoints on the way' },
        { time: '12:30', text: 'Lake Kaindy — walking and free time' },
        { time: '15:00', text: 'Departure to Kolsai Lake' },
        { time: '16:00', text: 'Kolsai Lake — walking and free time' },
        { time: '17:30', text: 'Departure to Almaty' },
        { time: '22:00', text: 'Arrival back in the city' },
      ],
      whatToBring: bringEn,
      notes: [
        'Part of the road to Kaindy is off-road, so you transfer from the bus to a UAZ (included), then walk 20–30 minutes from the parking to the lake.',
        borderEn,
        scheduleEn,
      ],
      duration: 'Full day · ~17.5 hours',
      season: 'June – September',
    },
    ru: {
      name: 'Extreme',
      tagline: '1 день · 6 локаций',
      metaTitle: 'Групповой тур Extreme из Алматы — Кольсай, Каинды и Чарын',
      metaDescription:
        'Самый насыщенный групповой тур из Алматы: Кольсай, Каинды, Чарынский каньон, Чёрный каньон, Лунный каньон и река Чарын за один день. Цена за человека в тенге.',
      teaser: 'Всё за один день: два горных озера и вся система Чарынских каньонов.',
      intro: [
        'Extreme — полный набор: озеро Кольсай, затонувший лес Каинды, Долина замков, Чёрный каньон, Лунный каньон и река Чарын — шесть точек за один ранний день. Сложную дорогу до Каинды проходит внедорожник УАЗ.',
        'Длинный, но очень насыщенный день для тех, кто хочет увидеть максимум. Небольшая группа, цена за человека.',
      ],
      locations: [
        'Озеро Кольсай',
        'Озеро Каинды',
        'Чарынский каньон (Долина замков)',
        'Чёрный каньон',
        'Лунный каньон',
        'Река Чарын',
      ],
      included: [
        'Комфортный трансфер в обе стороны',
        'Экологические сборы',
        'Профессиональный гид',
        'Трансфер на УАЗе до озера Каинды',
      ],
      optional: ['Катамаран или лодка на озере', 'Аренда лошади', 'Питание'],
      program: [
        { time: '04:30', text: 'Сбор группы в точке выезда' },
        { time: '05:00', text: 'Выезд из Алматы' },
        { time: '09:00', text: 'Чарынский каньон — прогулка по Долине замков' },
        { time: '10:30', text: 'К озеру Каинды — смотровые Чёрного и Лунного каньонов по пути' },
        { time: '12:30', text: 'Озеро Каинды — прогулка и свободное время' },
        { time: '15:00', text: 'Выезд к озеру Кольсай' },
        { time: '16:00', text: 'Озеро Кольсай — прогулка и свободное время' },
        { time: '17:30', text: 'Выезд в Алматы' },
        { time: '22:00', text: 'Возвращение в город' },
      ],
      whatToBring: bringRu,
      notes: [
        'Часть дороги до Каинды — бездорожье, поэтому пересадка на УАЗ (включено), затем 20–30 минут пешком от парковки до озера.',
        borderRu,
        scheduleRu,
      ],
      duration: 'Полный день · ~17,5 часов',
      season: 'Июнь – сентябрь',
    },
  },
  {
    slug: 'trio-of-charyn',
    image: '/images/charyn-canyon.jpg',
    emoji: '🏜️',
    priceKzt: 7990,
    weekdays: [],
    departureNote: {
      en: 'Four departures a month — message us for the next available date.',
      ru: 'Четыре выезда в месяц — напишите нам за ближайшей датой.',
    },
    meetingPoint,
    en: {
      name: 'Trio of Charyn',
      tagline: '1 day · 3 canyons',
      metaTitle: 'Trio of Charyn Group Tour from Almaty — Valley of Castles, Black & Moon Canyon',
      metaDescription:
        'Affordable group day tour from Almaty to three canyons of Charyn — the Valley of Castles, the Black Canyon and the Moon Canyon. Per-person price in tenge.',
      teaser: 'Three canyons of Charyn in one budget-friendly day — the Valley of Castles, Black and Moon canyons.',
      intro: [
        'The Trio of Charyn focuses on the canyons alone: the famous Valley of Castles with its red sandstone towers, the dramatic Black Canyon and the pale, lunar-looking Moon Canyon. Our best-value group departure.',
        'No lakes, no off-road — just the most spectacular canyon scenery near Almaty, at a friendly price.',
      ],
      locations: ['Valley of Castles', 'Black Canyon', 'Moon Canyon', 'Charyn River'],
      included: ['Round-trip transfer', 'Professional guide', 'Ecological entrance fees'],
      optional: ['Meals', 'Voluntary insurance'],
      program: [
        { time: '07:00', text: 'Group meeting at the pickup point' },
        { time: '07:30', text: 'Departure from Almaty' },
        { time: '10:30', text: 'Black Canyon viewpoint' },
        { time: '11:00', text: 'Valley of Castles — walk to the Charyn River' },
        { time: '13:00', text: 'Lunch / free time by the river' },
        { time: '14:30', text: 'Moon Canyon viewpoint' },
        { time: '15:30', text: 'Departure to Almaty' },
        { time: '19:00', text: 'Arrival back in the city' },
      ],
      whatToBring: bringEn,
      notes: [borderEn, scheduleEn],
      duration: 'Full day · ~12 hours',
      season: 'All year round',
    },
    ru: {
      name: 'Trio of Charyn',
      tagline: '1 день · 3 каньона',
      metaTitle: 'Групповой тур Trio of Charyn из Алматы — Долина замков, Чёрный и Лунный каньон',
      metaDescription:
        'Доступный групповой тур из Алматы по трём каньонам Чарына — Долина замков, Чёрный каньон и Лунный каньон. Цена за человека в тенге.',
      teaser: 'Три каньона Чарына за один бюджетный день — Долина замков, Чёрный и Лунный каньоны.',
      intro: [
        'Trio of Charyn — это только каньоны: знаменитая Долина замков с башнями из красного песчаника, эффектный Чёрный каньон и бледный «лунный» Лунный каньон. Самый выгодный групповой выезд.',
        'Без озёр и бездорожья — только самые впечатляющие каньоны рядом с Алматы по приятной цене.',
      ],
      locations: ['Долина замков', 'Чёрный каньон', 'Лунный каньон', 'Река Чарын'],
      included: ['Трансфер в обе стороны', 'Профессиональный гид', 'Экологические сборы'],
      optional: ['Питание', 'Добровольное страхование'],
      program: [
        { time: '07:00', text: 'Сбор группы в точке выезда' },
        { time: '07:30', text: 'Выезд из Алматы' },
        { time: '10:30', text: 'Смотровая Чёрного каньона' },
        { time: '11:00', text: 'Долина замков — прогулка к реке Чарын' },
        { time: '13:00', text: 'Обед / свободное время у реки' },
        { time: '14:30', text: 'Смотровая Лунного каньона' },
        { time: '15:30', text: 'Выезд в Алматы' },
        { time: '19:00', text: 'Возвращение в город' },
      ],
      whatToBring: bringRu,
      notes: [borderRu, scheduleRu],
      duration: 'Полный день · ~12 часов',
      season: 'Круглый год',
    },
  },
  {
    slug: 'marmaris',
    image: '/images/issyk-lake.jpg',
    emoji: '💧',
    priceKzt: 8990,
    weekdays: ['wed', 'fri', 'sun'],
    meetingPoint,
    en: {
      name: 'Marmaris',
      tagline: '1 day · lake & waterfall',
      metaTitle: 'Marmaris Group Tour from Almaty — Issyk Lake & Bear Waterfall',
      metaDescription:
        'Easy group day tour from Almaty to the turquoise Lake Issyk and the Bear Waterfall in the Turgen gorge. Per-person price in tenge, certified guide.',
      teaser: 'Turquoise Lake Issyk and a forest waterfall — an easy, beautiful group day close to Almaty.',
      intro: [
        'The Marmaris tour takes its nickname from the bright turquoise water of Lake Issyk, an hour east of Almaty. We pair the lake with the Bear Waterfall in the green Turgen gorge — a short forest walk to a cool cascade.',
        'A relaxed, scenic day with no hard hiking, great for first-timers and families.',
      ],
      locations: ['Lake Issyk', 'Bear Waterfall (Turgen gorge)'],
      included: ['Round-trip transfer', 'Professional guide', 'National park entrance fees'],
      optional: ['Meals', 'Voluntary insurance'],
      program: [
        { time: '08:00', text: 'Group meeting at the pickup point' },
        { time: '08:30', text: 'Departure from Almaty' },
        { time: '10:00', text: 'Lake Issyk — viewpoints and a lakeside walk' },
        { time: '12:00', text: 'Turgen gorge — walk to the Bear Waterfall' },
        { time: '14:00', text: 'Free time / optional lunch' },
        { time: '15:00', text: 'Departure to Almaty' },
        { time: '17:00', text: 'Arrival back in the city' },
      ],
      whatToBring: bringEn,
      notes: [scheduleEn],
      duration: 'Day trip · ~9 hours',
      season: 'May – October',
    },
    ru: {
      name: 'Marmaris',
      tagline: '1 день · озеро и водопад',
      metaTitle: 'Групповой тур Marmaris из Алматы — озеро Иссык и Медвежий водопад',
      metaDescription:
        'Лёгкий групповой тур из Алматы к бирюзовому озеру Иссык и Медвежьему водопаду в Тургеньском ущелье. Цена за человека в тенге, гид.',
      teaser: 'Бирюзовое озеро Иссык и лесной водопад — лёгкий красивый групповой день рядом с Алматы.',
      intro: [
        'Тур Marmaris получил прозвище за ярко-бирюзовую воду озера Иссык в часе езды к востоку от Алматы. Озеро мы дополняем Медвежьим водопадом в зелёном Тургеньском ущелье — короткая прогулка по лесу к прохладному каскаду.',
        'Спокойный живописный день без тяжёлых походов — отлично для новичков и семей.',
      ],
      locations: ['Озеро Иссык', 'Медвежий водопад (Тургеньское ущелье)'],
      included: ['Трансфер в обе стороны', 'Профессиональный гид', 'Входные билеты в нацпарк'],
      optional: ['Питание', 'Добровольное страхование'],
      program: [
        { time: '08:00', text: 'Сбор группы в точке выезда' },
        { time: '08:30', text: 'Выезд из Алматы' },
        { time: '10:00', text: 'Озеро Иссык — смотровые и прогулка вдоль берега' },
        { time: '12:00', text: 'Тургеньское ущелье — прогулка к Медвежьему водопаду' },
        { time: '14:00', text: 'Свободное время / обед по желанию' },
        { time: '15:00', text: 'Выезд в Алматы' },
        { time: '17:00', text: 'Возвращение в город' },
      ],
      whatToBring: bringRu,
      notes: [scheduleRu],
      duration: 'Поездка на день · ~9 часов',
      season: 'Май – октябрь',
    },
  },
  {
    slug: 'assy-plato',
    image: '/images/assy-plateau.jpg',
    emoji: '🐎',
    priceKzt: 15990,
    priceNote: {
      en: '1-day 15,990 ₸ · 2-day with overnight 29,990 ₸',
      ru: '1 день 15 990 ₸ · 2 дня с ночёвкой 29 990 ₸',
    },
    weekdays: ['wed', 'fri'],
    departureNote: {
      en: '1-day: Wednesday & Friday · 2-day version: weekends (Sat–Sun).',
      ru: '1 день: среда и пятница · 2-дневный вариант: выходные (сб–вс).',
    },
    meetingPoint,
    en: {
      name: 'Assy Plato',
      tagline: '1 or 2 days · alpine plateau',
      metaTitle: 'Assy Plateau Group Tour from Almaty — Nomad Pastures & Observatory',
      metaDescription:
        'Group tour from Almaty to the Assy Plateau: alpine meadows at 2,500 m, nomad yurts, an observatory and the Turgen gorge. 1-day or 2-day option, per-person price.',
      teaser: 'Alpine meadows at 2,500 m where nomads graze horses, plus an observatory at the edge of the sky.',
      intro: [
        'The Assy Plateau is the nomadic side of Kazakhstan: a high summer pasture at ~2,500 m, dotted with yurts and grazing horses, crowned by the white dome of the Assy-Turgen observatory. We reach it through the Turgen gorge and its waterfalls.',
        'Available as a long single day or a relaxed 2-day trip with an overnight under the stars — the night sky up here is unforgettable.',
      ],
      locations: ['Assy Plateau', 'Turgen gorge', 'Assy-Turgen observatory'],
      included: ['Round-trip transfer', 'Professional guide', 'National park entrance fees'],
      optional: ['Yurt visit and kumys tasting', 'Meals', 'Overnight stay (2-day option)'],
      program: [
        { time: '07:00', text: 'Group meeting at the pickup point' },
        { time: '07:30', text: 'Departure from Almaty' },
        { time: '09:30', text: 'Turgen gorge — waterfall stop' },
        { time: '11:30', text: 'Climb to the Assy Plateau, viewpoints' },
        { time: '12:30', text: 'Free time / picnic / yurt visit' },
        { time: '14:00', text: 'Observatory photo stop' },
        { time: '15:00', text: 'Descend and drive back (1-day option)' },
        { time: '18:00', text: 'Arrival back in the city' },
      ],
      whatToBring: bringEn,
      notes: [
        'The upper road is gravel, so we use suitable vehicles. The 2-day version adds an overnight on the plateau — bring a warm layer, it is cold at night even in summer.',
        scheduleEn,
      ],
      duration: '1 day (~11 h) or 2 days',
      season: 'June – September',
    },
    ru: {
      name: 'Assy Plato',
      tagline: '1 или 2 дня · горное плато',
      metaTitle: 'Групповой тур на плато Ассы из Алматы — кочевые пастбища и обсерватория',
      metaDescription:
        'Групповой тур из Алматы на плато Ассы: альпийские луга на 2 500 м, юрты, обсерватория и Тургеньское ущелье. Вариант на 1 или 2 дня, цена за человека.',
      teaser: 'Альпийские луга на 2 500 м, где кочевники пасут лошадей, и обсерватория на краю неба.',
      intro: [
        'Плато Ассы — кочевая сторона Казахстана: высокогорное летнее пастбище на ~2 500 м с юртами и табунами лошадей, увенчанное белым куполом обсерватории Ассы-Тургень. Поднимаемся через Тургеньское ущелье с его водопадами.',
        'Доступно как длинный один день или спокойный двухдневный тур с ночёвкой под звёздами — ночное небо здесь незабываемо.',
      ],
      locations: ['Плато Ассы', 'Тургеньское ущелье', 'Обсерватория Ассы-Тургень'],
      included: ['Трансфер в обе стороны', 'Профессиональный гид', 'Входные билеты в нацпарк'],
      optional: ['Юрта и дегустация кумыса', 'Питание', 'Ночёвка (вариант на 2 дня)'],
      program: [
        { time: '07:00', text: 'Сбор группы в точке выезда' },
        { time: '07:30', text: 'Выезд из Алматы' },
        { time: '09:30', text: 'Тургеньское ущелье — остановка у водопада' },
        { time: '11:30', text: 'Подъём на плато Ассы, смотровые' },
        { time: '12:30', text: 'Свободное время / пикник / юрта' },
        { time: '14:00', text: 'Фотоостановка у обсерватории' },
        { time: '15:00', text: 'Спуск и дорога назад (вариант 1 дня)' },
        { time: '18:00', text: 'Возвращение в город' },
      ],
      whatToBring: bringRu,
      notes: [
        'Верхняя дорога гравийная, поэтому используем подходящие автомобили. Двухдневный вариант добавляет ночёвку на плато — возьмите тёплую вещь, ночью холодно даже летом.',
        scheduleRu,
      ],
      duration: '1 день (~11 ч) или 2 дня',
      season: 'Июнь – сентябрь',
    },
  },
  {
    slug: 'singing-dunes',
    image: '/images/singing-dunes.jpg',
    emoji: '🎶',
    priceKzt: 8990,
    weekdays: ['wed', 'fri', 'sun'],
    meetingPoint,
    en: {
      name: 'Singing Dunes',
      tagline: '1 day · Altyn-Emel',
      metaTitle: 'Singing Dunes Group Tour from Almaty — Altyn-Emel National Park',
      metaDescription:
        'Group day tour from Almaty to the Singing Dune of Altyn-Emel National Park — a 150 m dune that hums in the wind. Per-person price in tenge, certified guide.',
      teaser: 'A 150-metre sand dune that hums and sings in the wind, alone in the desert of Altyn-Emel.',
      intro: [
        'The Singing Dune (Aygaiqum) rises about 150 m from the desert floor of Altyn-Emel National Park, between the Ili River and the Aktau mountains. In dry, windy weather the shifting sand produces a deep, organ-like hum that gives the dune its name.',
        'A long but unforgettable day across empty steppe and the wide Ili valley, with a climb up the dune ridge for huge views.',
      ],
      locations: ['Singing Dune (Aygaiqum)', 'Ili valley', 'Altyn-Emel National Park'],
      included: ['Round-trip transfer', 'Professional guide', 'Altyn-Emel entrance and registration fees'],
      optional: ['Meals', 'Voluntary insurance'],
      program: [
        { time: '06:00', text: 'Group meeting at the pickup point' },
        { time: '06:30', text: 'Departure from Almaty' },
        { time: '09:30', text: 'Enter Altyn-Emel National Park (registration)' },
        { time: '11:00', text: 'Singing Dune — climb and free time' },
        { time: '13:00', text: 'Picnic / free time' },
        { time: '14:30', text: 'Depart the park' },
        { time: '17:00', text: 'Photo stops in the Ili valley' },
        { time: '21:00', text: 'Arrival back in the city' },
      ],
      whatToBring: bringEn,
      notes: [scheduleEn],
      duration: 'Full day · ~15 hours',
      season: 'April – October',
    },
    ru: {
      name: 'Singing Dunes',
      tagline: '1 день · Алтын-Эмель',
      metaTitle: 'Групповой тур Singing Dunes из Алматы — Поющий бархан, Алтын-Эмель',
      metaDescription:
        'Групповой тур из Алматы на Поющий бархан в нацпарке Алтын-Эмель — 150-метровая дюна, что «поёт» на ветру. Цена за человека в тенге, гид.',
      teaser: '150-метровый песчаный бархан, который гудит и «поёт» на ветру, посреди пустыни Алтын-Эмеля.',
      intro: [
        'Поющий бархан (Айгайкум) поднимается примерно на 150 м над пустыней нацпарка Алтын-Эмель, между рекой Или и горами Актау. В сухую ветреную погоду движущийся песок издаёт глубокий, похожий на орган гул — отсюда и название.',
        'Длинный, но незабываемый день через пустую степь и широкую долину Или, с подъёмом по гребню бархана ради огромных видов.',
      ],
      locations: ['Поющий бархан (Айгайкум)', 'Долина Или', 'Нацпарк Алтын-Эмель'],
      included: ['Трансфер в обе стороны', 'Профессиональный гид', 'Входные билеты и регистрация в Алтын-Эмеле'],
      optional: ['Питание', 'Добровольное страхование'],
      program: [
        { time: '06:00', text: 'Сбор группы в точке выезда' },
        { time: '06:30', text: 'Выезд из Алматы' },
        { time: '09:30', text: 'Въезд в нацпарк Алтын-Эмель (регистрация)' },
        { time: '11:00', text: 'Поющий бархан — подъём и свободное время' },
        { time: '13:00', text: 'Пикник / свободное время' },
        { time: '14:30', text: 'Выезд из парка' },
        { time: '17:00', text: 'Фотоостановки в долине Или' },
        { time: '21:00', text: 'Возвращение в город' },
      ],
      whatToBring: bringRu,
      notes: [scheduleRu],
      duration: 'Полный день · ~15 часов',
      season: 'Апрель – октябрь',
    },
  },
  {
    slug: 'altyn-emel',
    image: '/images/altyn-emel.jpg',
    emoji: '🏔️',
    priceKzt: 80000,
    weekdays: [],
    departureNote: {
      en: 'Multi-day trip: Mon–Wed and Fri–Sun blocks. Message us for the next date.',
      ru: 'Многодневный тур: блоки пн–ср и пт–вс. Напишите за ближайшей датой.',
    },
    meetingPoint,
    en: {
      name: 'Treasures of Altyn-Emel',
      tagline: 'Multi-day · national park',
      metaTitle: 'Treasures of Altyn-Emel Group Tour from Almaty — Aktau, Katutau & Singing Dune',
      metaDescription:
        'Multi-day group tour from Almaty through Altyn-Emel National Park: the striped Aktau mountains, the Katutau volcanic rocks, the Singing Dune and ancient petroglyphs.',
      teaser: 'A multi-day journey through Altyn-Emel — striped desert mountains, a singing dune and volcanic rocks.',
      intro: [
        'Altyn-Emel is Kazakhstan’s flagship desert park, and this multi-day trip does it justice: the striped pink-and-white Aktau "mountains", the black volcanic Katutau rocks, the Singing Dune and ancient petroglyphs and burial mounds — landscapes that feel like another planet.',
        'Because the park is vast and far from the city, this runs as a multi-day group tour with overnights inside or near the park. Full day-by-day itinerary on request.',
      ],
      locations: ['Aktau "White Mountains"', 'Katutau volcanic rocks', 'Singing Dune', 'Ili valley & petroglyphs'],
      included: [
        'Round-trip transfer and in-park 4x4 sections',
        'Professional guide',
        'Park entrance and registration fees',
        'Accommodation (overnight stays)',
      ],
      optional: ['Meals', 'Voluntary insurance'],
      whatToBring: bringEn,
      notes: [
        'This is a multi-day tour — exact dates, route and what to pack are confirmed on booking. Expect long drives, rough park tracks and hot, dry desert days.',
        scheduleEn,
      ],
      duration: 'Multi-day (2–3 days)',
      season: 'April – October',
    },
    ru: {
      name: 'Treasures of Altyn-Emel',
      tagline: 'Многодневный · нацпарк',
      metaTitle: 'Групповой тур Treasures of Altyn-Emel из Алматы — Актау, Катутау, Поющий бархан',
      metaDescription:
        'Многодневный групповой тур из Алматы по нацпарку Алтын-Эмель: полосатые горы Актау, вулканические скалы Катутау, Поющий бархан и древние петроглифы.',
      teaser: 'Многодневное путешествие по Алтын-Эмелю — полосатые горы пустыни, поющий бархан и вулканические скалы.',
      intro: [
        'Алтын-Эмель — главный пустынный парк Казахстана, и этот многодневный тур раскрывает его полностью: полосатые розово-белые «горы» Актау, чёрные вулканические скалы Катутау, Поющий бархан, древние петроглифы и курганы — пейзажи будто с другой планеты.',
        'Парк огромный и далеко от города, поэтому это многодневный групповой тур с ночёвками в парке или рядом. Подробная программа по дням — по запросу.',
      ],
      locations: ['«Белые горы» Актау', 'Вулканические скалы Катутау', 'Поющий бархан', 'Долина Или и петроглифы'],
      included: [
        'Трансфер в обе стороны и участки на 4x4 в парке',
        'Профессиональный гид',
        'Входные билеты и регистрация в парке',
        'Проживание (ночёвки)',
      ],
      optional: ['Питание', 'Добровольное страхование'],
      whatToBring: bringRu,
      notes: [
        'Это многодневный тур — точные даты, маршрут и список вещей подтверждаем при бронировании. Будут долгие переезды, тяжёлые дороги в парке и жаркие сухие дни в пустыне.',
        scheduleRu,
      ],
      duration: 'Многодневный (2–3 дня)',
      season: 'Апрель – октябрь',
    },
  },
  {
    slug: 'alakol',
    image: '/images/alakol.jpg',
    emoji: '🌊',
    priceKzt: 40000,
    priceNote: {
      en: '≈ 40,000–50,000 ₸ depending on dates and accommodation',
      ru: '≈ 40 000–50 000 ₸ в зависимости от дат и проживания',
    },
    weekdays: ['thu', 'fri', 'sat'],
    departureNote: {
      en: '3-day trip, departing Thursday–Saturday.',
      ru: '3-дневный тур, выезд в четверг–субботу.',
    },
    meetingPoint,
    en: {
      name: 'Alakol',
      tagline: '3 days · healing lake',
      metaTitle: 'Lake Alakol Group Tour from Almaty — 3-Day Trip to the Healing Lake',
      metaDescription:
        'Three-day group tour from Almaty to Lake Alakol — a large mineral lake famous for its healing black-pebble beaches and clean water. Per-person price in tenge.',
      teaser: 'A three-day escape to Lake Alakol — a vast mineral lake with healing black-pebble beaches.',
      intro: [
        'Alakol is a large, slightly salty lake on the border of the Almaty and Abai regions, famous for its mineral-rich water and black volcanic pebbles that locals consider healing. It is a true beach holiday a long drive from Almaty.',
        'This runs as a 3-day group trip with overnights at the lake — time to swim, relax on the beach and recover. Full itinerary and accommodation details on booking.',
      ],
      locations: ['Lake Alakol', 'Healing black-pebble beaches'],
      included: ['Round-trip transfer', 'Professional guide / trip leader', 'Accommodation (2 nights)'],
      optional: ['Meals', 'Beach activities', 'Voluntary insurance'],
      whatToBring: [
        'ID — required (Kaspi / eGov accepted)',
        'Swimwear, towel and beachwear',
        'Sunscreen, sunglasses and a hat',
        'Comfortable clothing and a warm layer for the evening',
        'Good mood and readiness for beautiful photos',
      ],
      notes: [
        'This is a 3-day tour — exact dates, accommodation and price (≈ 40,000–50,000 ₸) are confirmed on booking. The drive to Alakol is long, so the first and last days are mostly travel.',
        scheduleEn,
      ],
      duration: '3 days',
      season: 'June – September',
    },
    ru: {
      name: 'Alakol',
      tagline: '3 дня · целебное озеро',
      metaTitle: 'Групповой тур на озеро Алаколь из Алматы — 3 дня на целебном озере',
      metaDescription:
        'Трёхдневный групповой тур из Алматы на озеро Алаколь — большое минеральное озеро со знаменитыми целебными пляжами из чёрной гальки. Цена за человека в тенге.',
      teaser: 'Трёхдневный отдых на озере Алаколь — большое минеральное озеро с целебными пляжами из чёрной гальки.',
      intro: [
        'Алаколь — большое слабосолёное озеро на границе Алматинской области и области Абай, известное минеральной водой и чёрной вулканической галькой, которую местные считают целебной. Настоящий пляжный отдых в долгой дороге от Алматы.',
        'Это 3-дневный групповой тур с ночёвками на озере — время поплавать, отдохнуть на пляже и восстановиться. Полная программа и проживание — при бронировании.',
      ],
      locations: ['Озеро Алаколь', 'Целебные пляжи из чёрной гальки'],
      included: ['Трансфер в обе стороны', 'Профессиональный гид / сопровождающий', 'Проживание (2 ночи)'],
      optional: ['Питание', 'Пляжные активности', 'Добровольное страхование'],
      whatToBring: [
        'Удостоверение личности — обязательно (Kaspi / eGov подойдёт)',
        'Купальник, полотенце и пляжная одежда',
        'Солнцезащитный крем, очки и головной убор',
        'Удобная одежда и тёплая вещь на вечер',
        'Хорошее настроение и готовность к красивым фото',
      ],
      notes: [
        'Это 3-дневный тур — точные даты, проживание и цена (≈ 40 000–50 000 ₸) подтверждаются при бронировании. Дорога до Алаколя длинная, поэтому первый и последний дни — в основном переезд.',
        scheduleRu,
      ],
      duration: '3 дня',
      season: 'Июнь – сентябрь',
    },
  },
  {
    slug: 'green-soul',
    image: '/images/green-soul.jpg',
    emoji: '🌲',
    priceKzt: 9900,
    weekdays: [],
    departureNote: {
      en: 'Departs every day.',
      ru: 'Выезды каждый день.',
    },
    meetingPoint,
    en: {
      name: 'Green Soul',
      tagline: '½ day · mountains by the city',
      metaTitle: 'Green Soul Group Tour from Almaty — Ayusai & Alma-Arasan Gorges',
      metaDescription:
        'Easy daily group tour from Almaty to the green Ayusai and Alma-Arasan gorges — spruce forests, mountain rivers and fresh air minutes from the city. Per-person price in tenge.',
      teaser: 'Spruce forests and mountain rivers minutes from the city — an easy daily nature reset.',
      intro: [
        'Green Soul is our easiest, everyday escape: the lush Ayusai and Alma-Arasan gorges right on the edge of Almaty, with spruce forest, a clear mountain river and gentle walking trails. No long drive, no hard hiking — just green mountains and fresh air.',
        'Perfect for a half-day reset, a relaxed morning before a flight, or anyone who wants the Tian Shan without a full-day expedition.',
      ],
      locations: ['Ayusai gorge', 'Alma-Arasan gorge', 'Ile-Alatau National Park'],
      included: ['Round-trip transfer', 'Professional guide', 'National park entrance fees'],
      optional: ['Meals', 'Voluntary insurance'],
      program: [
        { time: '09:00', text: 'Group meeting at the pickup point' },
        { time: '09:30', text: 'Drive to the Ayusai / Alma-Arasan gorge' },
        { time: '10:00', text: 'Forest walk along the mountain river' },
        { time: '12:30', text: 'Tea / picnic and free time' },
        { time: '14:00', text: 'Drive back to Almaty' },
      ],
      whatToBring: bringEn,
      notes: [scheduleEn],
      duration: 'Half day · ~5 hours',
      season: 'All year round',
    },
    ru: {
      name: 'Green Soul',
      tagline: '½ дня · горы у города',
      metaTitle: 'Групповой тур Green Soul из Алматы — ущелья Аюсай и Алма-Арасан',
      metaDescription:
        'Лёгкий ежедневный групповой тур из Алматы в зелёные ущелья Аюсай и Алма-Арасан — еловые леса, горные реки и свежий воздух в минутах от города. Цена за человека в тенге.',
      teaser: 'Еловые леса и горные реки в минутах от города — лёгкая ежедневная перезагрузка на природе.',
      intro: [
        'Green Soul — наш самый лёгкий ежедневный выезд: зелёные ущелья Аюсай и Алма-Арасан прямо на краю Алматы, с еловым лесом, чистой горной рекой и спокойными тропами. Без долгой дороги и тяжёлых походов — только зелёные горы и свежий воздух.',
        'Идеально для перезагрузки на полдня, спокойного утра перед рейсом или для тех, кто хочет Тянь-Шань без полноценной экспедиции.',
      ],
      locations: ['Ущелье Аюсай', 'Ущелье Алма-Арасан', 'Иле-Алатауский нацпарк'],
      included: ['Трансфер в обе стороны', 'Профессиональный гид', 'Входные билеты в нацпарк'],
      optional: ['Питание', 'Добровольное страхование'],
      program: [
        { time: '09:00', text: 'Сбор группы в точке выезда' },
        { time: '09:30', text: 'Переезд в ущелье Аюсай / Алма-Арасан' },
        { time: '10:00', text: 'Прогулка по лесу вдоль горной реки' },
        { time: '12:30', text: 'Чай / пикник и свободное время' },
        { time: '14:00', text: 'Дорога обратно в Алматы' },
      ],
      whatToBring: bringRu,
      notes: [scheduleRu],
      duration: 'Полдня · ~5 часов',
      season: 'Круглый год',
    },
  },
];

export function getGroupTour(slug: string): GroupTour | undefined {
  return groupTours.find((t) => t.slug === slug);
}
