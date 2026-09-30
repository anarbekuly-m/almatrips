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
  {
    slug: 'big-almaty-lake',
    image: '/images/big-almaty-lake.jpg',
    group: [],
    private: ['big-almaty-lake'],
    en: {
      name: 'Big Almaty Lake',
      metaTitle: 'Big Almaty Lake Tour from Almaty — By Car, No Hiking Needed',
      metaDescription: 'Big Almaty Lake tours from Almaty: a turquoise glacial lake at 2,511 m about an hour from the city. Private half-day trips by car, no hiking required. How to get there, when to go and what to know.',
      h1: 'Big Almaty Lake tours from Almaty',
      lead: 'A turquoise glacial lake at 2,511 m, ringed by peaks over 4,000 m and barely an hour from the city — reached by car, with no hiking required.',
      facts: ['About 1 hour from the city centre', 'Altitude: 2,511 m', 'All year — best May to October', 'Half-day trip, no hiking needed'],
      groupTitle: 'Group tours to Big Almaty Lake',
      privateTitle: 'Private tours to Big Almaty Lake',
      moreLink: 'All Big Almaty Lake tours',
      body: [
        { t: 'h2', text: 'How to get to Big Almaty Lake' },
        { t: 'p', text: 'The lake sits at the top of the Big Almaty gorge inside Ile-Alatau National Park. A mountain road climbs most of the way, so a car or a tour takes you to the viewpoints above the water without any real hiking. Walking up from the lower gorge is possible, but it is a long, steep day, and most visitors drive.' },
        { t: 'h2', text: 'What to expect' },
        { t: 'p', text: 'The colour shifts from bright turquoise to milky jade depending on the season and the light — fine glacial silt is what gives the water its tone. The lake is also a drinking-water reservoir for Almaty, so you cannot swim or walk down to the shore; the viewpoints above are where the photographs are taken.' },
        { t: 'p', text: 'Access to the upper road can be restricted at times, for example after heavy snow or during maintenance work. We check the current situation before every trip, so you will know in advance.' },
        { t: 'h2', text: 'Good to know' },
        { t: 'ul', items: [
          'It is much colder than in the city — bring a jacket even in summer.',
          'The altitude is comfortable for a short visit for most people; just take it slowly.',
          'It fits easily into the same day as an Almaty city tour or a relaxed afternoon in town.',
        ] },
      ],
    },
    ru: {
      name: 'Большое Алматинское озеро',
      metaTitle: 'Тур на Большое Алматинское озеро (БАО) из Алматы — на машине, без подъёма',
      metaDescription: 'Туры на БАО из Алматы: бирюзовое ледниковое озеро на высоте 2 511 м, около часа от города. Индивидуальные поездки на машине на полдня, без пешего подъёма. Как добраться, когда ехать и что важно знать.',
      h1: 'Туры на Большое Алматинское озеро',
      lead: 'Бирюзовое ледниковое озеро на 2 511 м в окружении четырёхтысячников — всего в часе от города. Доезжаем на машине, без пешего подъёма.',
      facts: ['Около часа от центра города', 'Высота: 2 511 м', 'Круглый год, лучше с мая по октябрь', 'Полдня, без трекинга'],
      groupTitle: 'Групповые туры на БАО',
      privateTitle: 'Индивидуальные туры на БАО',
      moreLink: 'Все туры на Большое Алматинское озеро',
      body: [
        { t: 'h2', text: 'Как добраться до БАО' },
        { t: 'p', text: 'Озеро находится в верхней части Большого Алматинского ущелья, на территории Иле-Алатауского нацпарка. Большую часть пути поднимается горная дорога, поэтому на машине или с туром вы доезжаете до смотровых над водой без настоящего трекинга. Подняться пешком от нижней части ущелья можно, но это долгий крутой день — большинство едет на машине.' },
        { t: 'h2', text: 'Чего ожидать' },
        { t: 'p', text: 'Цвет меняется от яркого бирюзового до молочно-нефритового в зависимости от сезона и света — такой оттенок воде даёт мелкая ледниковая взвесь. Озеро — источник питьевой воды для Алматы, поэтому купаться и спускаться к берегу нельзя; фотографируют со смотровых площадок выше.' },
        { t: 'p', text: 'Подъезд по верхней дороге иногда ограничивают — например, после сильного снегопада или на время работ. Мы проверяем ситуацию перед каждой поездкой, так что вы узнаете об этом заранее.' },
        { t: 'h2', text: 'Полезно знать' },
        { t: 'ul', items: [
          'Там заметно холоднее, чем в городе, — куртка нужна даже летом.',
          'Для короткого визита высота комфортна большинству; просто не торопитесь.',
          'Поездку легко совместить с обзорной экскурсией по Алматы в тот же день.',
        ] },
      ],
    },
  },
  {
    slug: 'issyk-lake',
    image: '/images/issyk-lake.jpg',
    group: ['marmaris-issyk'],
    private: ['issyk-waterfall'],
    en: {
      name: 'Issyk Lake and Turgen Gorge',
      metaTitle: 'Issyk Lake & Turgen Gorge Tours from Almaty — Lake and Bear Waterfall',
      metaDescription: 'Day tours from Almaty to Issyk Lake and the Bear Waterfall in the Turgen gorge, about 1.5–2 hours away. Group and private trips with easy walks, ideal for families. Not to be confused with Issyk-Kul.',
      h1: 'Issyk Lake and Turgen Gorge tours from Almaty',
      lead: 'A turquoise mountain lake in a spruce gorge and a forest walk to a waterfall — the easiest nature day trip from Almaty, with short walks suitable for families.',
      facts: ['About 1.5–2 hours from Almaty', 'Short, easy walks', 'Season: May to October', 'Good for families'],
      groupTitle: 'Group tours to Issyk Lake',
      privateTitle: 'Private tours to Issyk Lake',
      moreLink: 'All Issyk Lake tours',
      body: [
        { t: 'h2', text: 'Issyk Lake is not Issyk-Kul' },
        { t: 'p', text: 'The names confuse a lot of travelers. Issyk Lake is a small mountain lake in Kazakhstan, in the Issyk gorge east of Almaty. Issyk-Kul is a huge lake in Kyrgyzstan, several hours away across the border. The tours on this page go to Issyk Lake in Kazakhstan — no border crossing involved.' },
        { t: 'h2', text: 'What the day looks like' },
        { t: 'p', text: 'The morning is spent at Issyk Lake: viewpoints, a walk along the shore and time for a picnic. The route then continues to the Turgen gorge for a forest walk to the Bear Waterfall. Both walks are short and gentle, which makes this one of the best choices for families, older travelers or a quiet day between longer trips.' },
        { t: 'h2', text: 'Good to know' },
        { t: 'ul', items: [
          'Wear comfortable shoes — the waterfall path can be wet and uneven.',
          'Cafés along the route are limited; bring water and snacks.',
          'The gorges are at their greenest from late May to September.',
        ] },
      ],
    },
    ru: {
      name: 'Озеро Иссык и Тургенское ущелье',
      metaTitle: 'Туры на озеро Иссык и в Тургенское ущелье из Алматы — озеро и водопад',
      metaDescription: 'Однодневные туры из Алматы на озеро Иссык и к Медвежьему водопаду в Тургенском ущелье — около 1,5–2 часов пути. Групповые и индивидуальные поездки с лёгкими прогулками, хорошо для семей. Не путать с Иссык-Кулем.',
      h1: 'Туры на озеро Иссык и в Тургенское ущелье',
      lead: 'Бирюзовое горное озеро в еловом ущелье и прогулка по лесу к водопаду — самый лёгкий природный выезд из Алматы, с короткими прогулками, подходящими для семей.',
      facts: ['Около 1,5–2 часов от Алматы', 'Короткие лёгкие прогулки', 'Сезон: май–октябрь', 'Подходит для семей'],
      groupTitle: 'Групповые туры на озеро Иссык',
      privateTitle: 'Индивидуальные туры на озеро Иссык',
      moreLink: 'Все туры на озеро Иссык',
      body: [
        { t: 'h2', text: 'Озеро Иссык — это не Иссык-Куль' },
        { t: 'p', text: 'Названия путают многие. Озеро Иссык — небольшое горное озеро в Казахстане, в Иссыкском ущелье к востоку от Алматы. Иссык-Куль — огромное озеро в Кыргызстане, в нескольких часах езды через границу. Туры на этой странице — на озеро Иссык в Казахстане, без пересечения границы.' },
        { t: 'h2', text: 'Как проходит день' },
        { t: 'p', text: 'Утро — на озере Иссык: смотровые, прогулка вдоль берега и время на пикник. Затем маршрут продолжается в Тургенское ущелье — прогулка по лесу к Медвежьему водопаду. Обе прогулки короткие и спокойные, поэтому это один из лучших вариантов для семей, старшего поколения или спокойного дня между дальними поездками.' },
        { t: 'h2', text: 'Полезно знать' },
        { t: 'ul', items: [
          'Наденьте удобную обувь — тропа к водопаду бывает мокрой и неровной.',
          'Кафе по маршруту немного — возьмите воду и перекус.',
          'Ущелья самые зелёные с конца мая по сентябрь.',
        ] },
      ],
    },
  },
  {
    slug: 'almaty-city',
    image: '/images/almaty-city-tour.jpg',
    group: ['city-tour'],
    private: ['almaty-city-tour'],
    guide: 'almaty-city-tour-what-to-see',
    en: {
      name: 'Almaty City, Medeu and Shymbulak',
      metaTitle: 'Almaty City Tours — Medeu, Shymbulak, Kok-Tobe & the Old Centre',
      metaDescription: 'Almaty city tours: the Medeu skating rink, the Shymbulak cable car, Kok-Tobe hill, Zenkov Cathedral, Panfilov Park and the Green Bazaar. Group and private sightseeing tours, all year round.',
      h1: 'Almaty city tours',
      lead: 'The mountains above the city and the historic centre in one day — Medeu, the Shymbulak cable car, Kok-Tobe, Zenkov Cathedral and the Green Bazaar.',
      facts: ['Full day or 4 hours', 'Runs all year round', 'No fitness required', 'Cable car tickets paid separately'],
      groupTitle: 'Group city tour',
      privateTitle: 'Private city tour',
      moreLink: 'All Almaty city tours',
      body: [
        { t: 'h2', text: 'What a city tour covers' },
        { t: 'p', text: 'Almaty’s sights come in two halves. Up in the mountains are the Medeu high-altitude skating rink and the Shymbulak resort, where a cable car climbs to around 3,200 m. Down in the city are Panfilov Park with the wooden Zenkov Cathedral, the Green Bazaar and Kok-Tobe hill with its panorama over Almaty.' },
        { t: 'p', text: 'The group City Tour covers both halves in one full day. The private city tour is shorter and flexible: it can start in the evening to finish on Kok-Tobe at sunset, or be fitted around a layover.' },
        { t: 'h2', text: 'Good to know' },
        { t: 'ul', items: [
          'Go up to Shymbulak in the morning — clouds often build over the peaks later in the day.',
          'It is much colder at 3,200 m than in the city, even in summer.',
          'Cable car tickets for Shymbulak and Kok-Tobe are usually paid separately.',
        ] },
      ],
    },
    ru: {
      name: 'Алматы, Медеу и Шымбулак',
      metaTitle: 'Обзорные туры по Алматы — Медеу, Шымбулак, Кок-Тобе и старый центр',
      metaDescription: 'Обзорные экскурсии по Алматы: каток Медеу, канатная дорога Шымбулака, Кок-Тобе, Вознесенский собор, парк Панфилова и Зелёный базар. Групповые и индивидуальные туры круглый год.',
      h1: 'Обзорные туры по Алматы',
      lead: 'Горы над городом и исторический центр за один день — Медеу, канатная дорога Шымбулака, Кок-Тобе, Вознесенский собор и Зелёный базар.',
      facts: ['Полный день или 4 часа', 'Круглый год', 'Подготовка не нужна', 'Канатные дороги — отдельно'],
      groupTitle: 'Групповой обзорный тур',
      privateTitle: 'Индивидуальный обзорный тур',
      moreLink: 'Все обзорные туры по Алматы',
      body: [
        { t: 'h2', text: 'Что входит в обзорный тур' },
        { t: 'p', text: 'Достопримечательности Алматы делятся на две части. В горах — высокогорный каток Медеу и курорт Шымбулак, где канатная дорога поднимается примерно на 3 200 м. В городе — парк Панфилова с деревянным Вознесенским собором, Зелёный базар и холм Кок-Тобе с панорамой Алматы.' },
        { t: 'p', text: 'Групповой City Tour охватывает обе части за один полный день. Индивидуальная обзорная экскурсия короче и гибче: её можно начать вечером, чтобы закончить на Кок-Тобе на закате, или подстроить под пересадку.' },
        { t: 'h2', text: 'Полезно знать' },
        { t: 'ul', items: [
          'На Шымбулак лучше подниматься утром — к обеду над вершинами часто собираются облака.',
          'На 3 200 м гораздо холоднее, чем в городе, даже летом.',
          'Билеты на канатные дороги Шымбулака и Кок-Тобе обычно оплачиваются отдельно.',
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
