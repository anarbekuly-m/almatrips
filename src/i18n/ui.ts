export type Lang = 'en' | 'ru';

export const BRAND = 'Almatrips';
export const WHATSAPP_NUMBER = '77776256625';
export const WHATSAPP_DISPLAY = '+7 777 625 6625';
export const INSTAGRAM = 'https://instagram.com/almatrips.kz';
export const INSTAGRAM_DISPLAY = '@almatrips.kz';

export const languages: Record<Lang, string> = {
  en: 'EN',
  ru: 'RU',
};

const en = {
  'meta.home.title': 'Almatrips — Group & Private Tours from Almaty, Kazakhstan',
  'meta.home.description':
    'Group and private tours from Almaty to Kazakhstan’s most beautiful places: Kolsai & Kaindy Lakes, the Charyn canyons, Altyn-Emel and more. Easy WhatsApp booking.',
  'meta.tours.title': 'Tours from Almaty — Group & Private Trips | Almatrips',
  'meta.tours.description':
    'Group and private tours from Almaty, Kazakhstan: canyons, alpine lakes, mountain plateaus and city highlights. Choose the format that suits you.',
  'meta.about.title': 'About Almatrips — Group & Private Tours in Almaty',
  'meta.about.description':
    'Almatrips is a local travel company in Almaty running group and private tours to canyons, alpine lakes, mountains, national parks and cultural sites.',
  'meta.contact.title': 'Contact Almatrips — Book a Tour from Almaty',
  'meta.contact.description':
    'Book a group or private tour from Almaty via WhatsApp or our contact form. Fast replies and clear tour details before booking.',

  'nav.tours': 'Tours',
  'nav.private': 'Private Tours',
  'nav.group': 'Group Tours',
  'nav.about': 'About Us',
  'nav.contact': 'Contacts',
  'nav.whatsapp': 'WhatsApp',

  'meta.private.title': 'Private Tours from Almaty — Your Own Vehicle & Guide | Almatrips',
  'meta.private.description':
    'Private tours from Almaty: your own transport, a guide and a flexible schedule. Kolsai & Kaindy Lakes, the Charyn canyons, Altyn-Emel and more. Price per transport.',
  'meta.group.title': 'Group Tours from Almaty — Join a Group | Almatrips',
  'meta.group.description':
    'Affordable group tours from Almaty, priced per person. Kolsai & Kaindy Lakes, the Charyn canyons, Altyn-Emel and more. Certified guide, easy WhatsApp booking.',

  'private.h1': 'Private tours from Almaty',
  'private.lead':
    'Your own transport and your own pace — just your party and a guide. The meeting point or pickup location depends on the selected tour. Price per transport.',
  'group.h1': 'Group tours from Almaty',
  'group.lead':
    'Join a group of travelers and enjoy the best price. Travel with a certified guide to the region’s most beautiful places. Price per person.',

  'choose.kicker': 'Two ways to travel',
  'choose.title': 'Choose your style',
  'choose.group.badge': 'Best value',
  'choose.group.title': 'Group Tours',
  'choose.group.text':
    'Join a group of travelers and enjoy the best price. Price per person.',
  'choose.group.price': 'from 7 990 ₸ / person',
  'choose.group.cta': 'See group tours',
  'choose.private.badge': 'Most personal',
  'choose.private.title': 'Private Tours',
  'choose.private.text':
    'Your own transport, guide and schedule. Meeting point or pickup location depends on the selected tour. Price per transport.',
  'choose.private.price': '',
  'choose.private.cta': 'See private tours',

  'card.perPerson': 'per person',

  'book.group.label': 'Group tour',
  'book.group.note': 'Shared minivan · departs once 2+ guests join · certified guide. Fixed departure days on request.',
  'book.private.label': 'Private tour',
  'book.private.note': 'Your own vehicle, sized to your group · hotel pickup · flexible timing.',
  'book.privateOnly': 'This tour runs as a private trip only — too remote to fill a shared group.',
  'tour.perPerson': 'per person',
  'tour.joinGroup': 'Join a group',
  'tour.bookPrivate': 'Book private',

  'gt.locations': 'Locations',
  'gt.dates': 'Departure dates',
  'gt.program': 'Program',
  'gt.optional': 'Optional (extra cost)',
  'gt.bring': 'What to bring',
  'gt.notes': 'Good to know',
  'gt.meeting': 'Meeting point',
  'gt.book': 'Reserve a seat',
  'gt.bookNote': 'Message us on WhatsApp to confirm your seat on one of the dates above.',
  'gt.from': 'from',
  'gt.departures': 'Departures',
  'gt.daily': 'Daily departures',
  'wd.mon': 'Mon',
  'wd.tue': 'Tue',
  'wd.wed': 'Wed',
  'wd.thu': 'Thu',
  'wd.fri': 'Fri',
  'wd.sat': 'Sat',
  'wd.sun': 'Sun',
  'card.upTo6': 'for 1–6 people',
  'price.perGroup': 'Price by group size',
  'price.people': 'pax',
  'price.guests': 'Guests',
  'price.price': 'Price',
  'price.more': 'More than 18 guests? Message us and we will arrange it.',
  'card.perTransport': 'per vehicle · 1–18',
  'price.perTransport': 'Price is per private vehicle, not per person.',
  'tour.routeNote': 'The final route may vary with season, road conditions and the availability of locations.',
  'priv.tour': 'Tour',
  'priv.pax': 'pax',
  'priv.format': 'Tour format',
  'priv.formatText': 'Private tour with separate transport.',
  'priv.note1': 'The price is for private transport, not per person.',
  'priv.note2': 'Locations and routes can be selected, changed or adjusted according to your preferences.',
  'priv.contact': 'For details and booking, please contact us directly on WhatsApp.',
  'month.june': 'June',
  'month.july': 'July',
  'month.august': 'August',

  'hero.kicker': 'Group & private tours from Almaty · Kazakhstan',
  'hero.title': 'Discover the best of Kazakhstan from Almaty',
  'hero.sub':
    'Almatrips runs group and private tours from Almaty to Kazakhstan’s most beautiful places — canyons, alpine lakes, mountains, nomad plateaus, national parks and cultural destinations.',
  'hero.cta': 'Browse tours',
  'hero.cta2': 'Chat on WhatsApp',

  'trust.1': 'Certified local guide',
  'trust.2': '5+ years of experience',
  'trust.3': 'Private & group tours',

  'tours.featured': 'Popular destinations',
  'tours.featuredSub': 'Pick a place you want to see, then choose your format — group or private.',
  'tours.all': 'All tours from Almaty',
  'tours.allSub': 'Group and private tours from Almaty — choose the format that suits you best.',
  'tours.viewAll': 'View all tours',
  'dest.seeGroup': 'Group tours',
  'dest.seePrivate': 'Private tours',

  'card.from': 'from',
  'card.perCar': 'per car',
  'card.details': 'Tour details',

  'how.title': 'Booking takes only a few steps',
  'how.1.title': 'Choose a tour',
  'how.1.text': 'Pick a tour and date — or message us on WhatsApp, tell us what you want to see, and we will suggest the best route.',
  'how.2.title': 'Message us on WhatsApp',
  'how.2.text': 'Message us on WhatsApp, and we will confirm the available dates, tour details and meeting information.',
  'how.3.title': 'Meet your guide',
  'how.3.text': 'You will meet your guide at the meeting point or pickup location, and set off on your tour.',

  'why.title': 'Why travel with Almatrips',
  'why.1.title': 'Group & private tours',
  'why.1.text': 'Choose the format that fits you — join a group for the best price, or book a private tour for your own pace.',
  'why.2.title': 'Experienced local guides',
  'why.2.text': 'We work with experienced local guides and drivers who know the region and make every trip safe and comfortable.',
  'why.3.title': 'Trips for every taste',
  'why.3.text': 'Day trips from Almaty, nature and city tours, cultural routes and multi-day journeys across Kazakhstan.',
  'why.4.title': 'Clear and honest',
  'why.4.text': 'We explain each tour’s details before booking, so you always know what to expect. Questions are answered fast on WhatsApp.',

  'about.teaser.title': 'A local travel company in Almaty',
  'about.teaser.text':
    'Almatrips organizes group and private tours from Almaty to canyons, alpine lakes, mountains, national parks and cultural sites. Our team helps travelers choose the best route for their time, budget and travel style.',
  'about.teaser.cta': 'More about us',

  'cta.title': 'Ready to explore Kazakhstan?',
  'cta.sub': 'Tell us your dates — we will reply within minutes with a plan.',
  'cta.btn': 'Plan my trip on WhatsApp',

  'tour.highlights': 'Highlights',
  'tour.itinerary': 'Itinerary',
  'tour.included': "What's included",
  'tour.notIncluded': 'Not included',
  'tour.faq': 'Good to know',
  'tour.book': 'Book via WhatsApp',
  'tour.priceLabel': 'Price',
  'tour.perCar': 'per car',
  'tour.duration': 'Duration',
  'tour.season': 'Season',
  'tour.back': 'All tours',
  'tour.bookNote': 'Message us on WhatsApp — we confirm availability and all tour details before booking.',
  'tour.groupNote': 'Group of 4 or more? Message us — we will arrange a minivan or Sprinter.',

  'wa.generic': "Hello Almatrips! I'd like to plan a tour from Almaty.",
  'wa.tour': "Hello Almatrips! I'd like to book the {title}. Date: ___ , guests: ___",
  'wa.group': "Hello Almatrips! I'd like to JOIN A GROUP tour: {title}. Date: ___ , guests: ___",
  'wa.private': "Hello Almatrips! I'd like a PRIVATE tour: {title}. Date: ___ , guests: ___",

  'contact.title': 'Contact us',
  'contact.sub': 'WhatsApp is the fastest way — we usually reply within minutes.',
  'contact.formTitle': 'Or send a request',
  'contact.formNote': 'The form opens WhatsApp with your message ready to send.',
  'form.name': 'Your name',
  'form.tour': 'Tour',
  'form.anyTour': 'Not sure yet / custom trip',
  'form.date': 'Preferred date',
  'form.people': 'Number of guests',
  'form.message': 'Anything else we should know?',
  'form.submit': 'Send via WhatsApp',

  'about.title': 'About Almatrips',
  'footer.tagline': 'Almatrips — group and private tours from Almaty, Kazakhstan. The way travel should feel.',
  'footer.tours': 'Tours',
  'footer.contact': 'Contact',
  'footer.city': 'Almaty, Kazakhstan',
  'footer.credits': 'Photo credits',
  'footer.rights': 'All rights reserved.',
};

const ru: typeof en = {
  'meta.home.title': 'Almatrips — групповые и индивидуальные туры из Алматы',
  'meta.home.description':
    'Групповые и индивидуальные туры из Алматы к самым красивым местам Казахстана: Кольсай и Каинды, каньоны Чарына, Алтын-Эмель и другие. Бронирование в WhatsApp.',
  'meta.tours.title': 'Туры из Алматы — групповые и индивидуальные | Almatrips',
  'meta.tours.description':
    'Групповые и индивидуальные туры из Алматы: каньоны, горные озёра, плато и город. Выбирайте удобный формат.',
  'meta.about.title': 'О компании Almatrips — групповые и индивидуальные туры',
  'meta.about.description':
    'Almatrips — местная туркомпания в Алматы. Организуем групповые и индивидуальные туры к каньонам, горным озёрам, горам, нацпаркам и культурным местам.',
  'meta.contact.title': 'Контакты Almatrips — забронировать тур из Алматы',
  'meta.contact.description':
    'Забронируйте групповой или индивидуальный тур из Алматы через WhatsApp или форму. Быстрые ответы и понятные детали тура до брони.',

  'nav.tours': 'Туры',
  'nav.private': 'Индивидуальные',
  'nav.group': 'Групповые',
  'nav.about': 'О нас',
  'nav.contact': 'Контакты',
  'nav.whatsapp': 'WhatsApp',

  'meta.private.title': 'Индивидуальные туры из Алматы — личный транспорт и гид | Almatrips',
  'meta.private.description':
    'Индивидуальные туры из Алматы: личный транспорт, гид и гибкий график. Кольсай и Каинды, каньоны Чарына, Алтын-Эмель и другие. Цена за транспорт.',
  'meta.group.title': 'Групповые туры из Алматы — присоединяйтесь к группе | Almatrips',
  'meta.group.description':
    'Доступные групповые туры из Алматы по цене за человека. Кольсай и Каинды, каньоны Чарына, Алтын-Эмель и другие. Сертифицированный гид, бронирование в WhatsApp.',

  'private.h1': 'Индивидуальные туры из Алматы',
  'private.lead':
    'Личный транспорт и свой темп — только ваша компания и гид. Точка сбора или место выезда зависят от выбранного тура. Цена за транспорт.',
  'group.h1': 'Групповые туры из Алматы',
  'group.lead':
    'Присоединяйтесь к группе путешественников и получите лучшую цену. Поездка с сертифицированным гидом к самым красивым местам региона. Цена за человека.',

  'choose.kicker': 'Два способа путешествовать',
  'choose.title': 'Выберите формат',
  'choose.group.badge': 'Выгодно',
  'choose.group.title': 'Групповые туры',
  'choose.group.text':
    'Присоединяйтесь к группе путешественников и получите лучшую цену. Цена за человека.',
  'choose.group.price': 'от 7 990 ₸ / человек',
  'choose.group.cta': 'Групповые туры',
  'choose.private.badge': 'Максимально лично',
  'choose.private.title': 'Индивидуальные туры',
  'choose.private.text':
    'Личный транспорт, гид и график. Точка сбора или место выезда зависят от выбранного тура. Цена за транспорт.',
  'choose.private.price': '',
  'choose.private.cta': 'Индивидуальные туры',

  'card.perPerson': 'за человека',

  'book.group.label': 'Групповой тур',
  'book.group.note': 'Общий минивэн · выезд при наборе от 2 гостей · сертифицированный гид. Фиксированные дни — по запросу.',
  'book.private.label': 'Индивидуальный тур',
  'book.private.note': 'Личный автомобиль под размер группы · трансфер от отеля · гибкий график.',
  'book.privateOnly': 'Этот тур проводится только индивидуально — слишком удалён, чтобы собрать общую группу.',
  'tour.perPerson': 'за человека',
  'tour.joinGroup': 'В группу',
  'tour.bookPrivate': 'Индивидуально',

  'gt.locations': 'Локации',
  'gt.dates': 'Даты выездов',
  'gt.program': 'Программа',
  'gt.optional': 'Дополнительно (за доплату)',
  'gt.bring': 'Что взять с собой',
  'gt.notes': 'Полезно знать',
  'gt.meeting': 'Точка сбора',
  'gt.book': 'Забронировать место',
  'gt.bookNote': 'Напишите нам в WhatsApp, чтобы подтвердить место на одну из дат выше.',
  'gt.from': 'от',
  'gt.departures': 'Дни выездов',
  'gt.daily': 'Ежедневные выезды',
  'wd.mon': 'Пн',
  'wd.tue': 'Вт',
  'wd.wed': 'Ср',
  'wd.thu': 'Чт',
  'wd.fri': 'Пт',
  'wd.sat': 'Сб',
  'wd.sun': 'Вс',
  'card.upTo6': 'за 1–6 человек',
  'price.perGroup': 'Цена по размеру группы',
  'price.people': 'чел.',
  'price.guests': 'Гостей',
  'price.price': 'Цена',
  'price.more': 'Больше 18 гостей? Напишите — организуем.',
  'card.perTransport': 'за машину · 1–18',
  'price.perTransport': 'Цена за машину (транспорт), не за человека.',
  'tour.routeNote': 'Маршрут может меняться в зависимости от сезона, дорог и доступности локаций.',
  'priv.tour': 'Тур',
  'priv.pax': 'чел.',
  'priv.format': 'Формат тура',
  'priv.formatText': 'Индивидуальный тур на отдельном транспорте.',
  'priv.note1': 'Цена указана за частный транспорт, а не за человека.',
  'priv.note2': 'Локации и маршрут можно выбирать, менять или корректировать по вашему желанию.',
  'priv.contact': 'За деталями и бронированием обращайтесь к нам напрямую в WhatsApp.',
  'month.june': 'Июнь',
  'month.july': 'Июль',
  'month.august': 'Август',

  'hero.kicker': 'Групповые и индивидуальные туры из Алматы · Казахстан',
  'hero.title': 'Откройте лучшее в Казахстане из Алматы',
  'hero.sub':
    'Almatrips проводит групповые и индивидуальные туры из Алматы к самым красивым местам Казахстана — каньоны, горные озёра, горы, кочевые плато, нацпарки и культурные места.',
  'hero.cta': 'Смотреть туры',
  'hero.cta2': 'Написать в WhatsApp',

  'trust.1': 'Сертифицированный гид',
  'trust.2': 'Опыт 5+ лет',
  'trust.3': 'Индивидуально и группой',

  'tours.featured': 'Популярные направления',
  'tours.featuredSub': 'Выберите место, которое хотите увидеть, а затем — формат: групповой или индивидуальный.',
  'tours.all': 'Все туры из Алматы',
  'tours.allSub': 'Групповые и индивидуальные туры из Алматы — выбирайте удобный формат.',
  'tours.viewAll': 'Все туры',
  'dest.seeGroup': 'Групповые туры',
  'dest.seePrivate': 'Индивидуальные туры',

  'card.from': 'от',
  'card.perCar': 'за машину',
  'card.details': 'Подробнее',

  'how.title': 'Бронирование — в несколько шагов',
  'how.1.title': 'Выберите тур',
  'how.1.text': 'Выберите тур и дату — или напишите нам в WhatsApp, расскажите, что хотите увидеть, и мы предложим лучший маршрут.',
  'how.2.title': 'Напишите в WhatsApp',
  'how.2.text': 'Напишите нам в WhatsApp — мы подтвердим доступные даты, детали тура и информацию о встрече.',
  'how.3.title': 'Встреча с гидом',
  'how.3.text': 'Вы встречаете гида в точке сбора или месте выезда — и отправляетесь в тур.',

  'why.title': 'Почему едут с Almatrips',
  'why.1.title': 'Группой и индивидуально',
  'why.1.text': 'Выбирайте формат под себя — присоединяйтесь к группе ради лучшей цены или берите индивидуальный тур в своём темпе.',
  'why.2.title': 'Опытные местные гиды',
  'why.2.text': 'Мы работаем с опытными местными гидами и водителями, которые знают регион и делают каждую поездку безопасной и комфортной.',
  'why.3.title': 'Туры на любой вкус',
  'why.3.text': 'Однодневные выезды из Алматы, природные и городские туры, культурные маршруты и многодневные путешествия по Казахстану.',
  'why.4.title': 'Понятно и честно',
  'why.4.text': 'Мы объясняем детали каждого тура до брони, чтобы вы знали, чего ожидать. На вопросы быстро отвечаем в WhatsApp.',

  'about.teaser.title': 'Местная туркомпания в Алматы',
  'about.teaser.text':
    'Almatrips организует групповые и индивидуальные туры из Алматы к каньонам, горным озёрам, горам, нацпаркам и культурным местам. Наша команда помогает выбрать лучший маршрут под ваше время, бюджет и стиль путешествия.',
  'about.teaser.cta': 'Подробнее о нас',

  'cta.title': 'Готовы открыть Казахстан?',
  'cta.sub': 'Назовите даты — ответим за несколько минут с готовым планом.',
  'cta.btn': 'Спланировать тур в WhatsApp',

  'tour.highlights': 'Главное в туре',
  'tour.itinerary': 'Программа',
  'tour.included': 'Что включено',
  'tour.notIncluded': 'Не включено',
  'tour.faq': 'Полезно знать',
  'tour.book': 'Забронировать в WhatsApp',
  'tour.priceLabel': 'Цена',
  'tour.perCar': 'за машину',
  'tour.duration': 'Длительность',
  'tour.season': 'Сезон',
  'tour.back': 'Все туры',
  'tour.bookNote': 'Напишите нам в WhatsApp — подтвердим доступность и все детали тура до брони.',
  'tour.groupNote': 'Вас 4 и больше? Напишите нам — организуем минивэн или Sprinter.',

  'wa.generic': 'Здравствуйте! Хочу спланировать тур из Алматы.',
  'wa.tour': 'Здравствуйте! Хочу забронировать тур «{title}». Дата: ___ , гостей: ___',
  'wa.group': 'Здравствуйте! Хочу в ГРУППОВОЙ тур: «{title}». Дата: ___ , гостей: ___',
  'wa.private': 'Здравствуйте! Хочу ИНДИВИДУАЛЬНЫЙ тур: «{title}». Дата: ___ , гостей: ___',

  'contact.title': 'Связаться с нами',
  'contact.sub': 'WhatsApp — самый быстрый способ: обычно отвечаем за несколько минут.',
  'contact.formTitle': 'Или отправьте заявку',
  'contact.formNote': 'Форма откроет WhatsApp с уже готовым сообщением.',
  'form.name': 'Ваше имя',
  'form.tour': 'Тур',
  'form.anyTour': 'Пока не решил(а) / свой маршрут',
  'form.date': 'Желаемая дата',
  'form.people': 'Количество гостей',
  'form.message': 'Что ещё нам стоит знать?',
  'form.submit': 'Отправить в WhatsApp',

  'about.title': 'О компании Almatrips',
  'footer.tagline': 'Almatrips — групповые и индивидуальные туры из Алматы, Казахстан. Такими и должны быть путешествия.',
  'footer.tours': 'Туры',
  'footer.contact': 'Контакты',
  'footer.city': 'Алматы, Казахстан',
  'footer.credits': 'Авторы фотографий',
  'footer.rights': 'Все права защищены.',
};

export const ui: Record<Lang, typeof en> = { en, ru };

export function t(lang: Lang, key: keyof typeof en): string {
  return ui[lang][key] ?? ui.en[key];
}

/** Prefix a path with the language segment ('/ru') when needed. */
export function localizePath(lang: Lang, path: string): string {
  return lang === 'en' ? path : `/ru${path === '/' ? '/' : path}`;
}

export function waLink(lang: Lang, tourTitle?: string, format?: 'group' | 'private'): string {
  let template: string;
  if (!tourTitle) {
    template = t(lang, 'wa.generic');
  } else if (format === 'group') {
    template = t(lang, 'wa.group').replace('{title}', tourTitle);
  } else if (format === 'private') {
    template = t(lang, 'wa.private').replace('{title}', tourTitle);
  } else {
    template = t(lang, 'wa.tour').replace('{title}', tourTitle);
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(template)}`;
}
