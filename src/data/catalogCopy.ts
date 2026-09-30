// Explanatory copy shown under the tour grids on /group-tours/ and
// /private-tours/. Gives search engines real text to match the many ways
// people phrase "tours from Almaty", and links each popular route.

export interface CatalogCopy {
  title: string;
  intro: string[];
  popularTitle: string;
  /** slug of a tour in the same catalog + a descriptive link label */
  popular: { slug: string; label: string }[];
  sections: { h2: string; p: string }[];
}

export const groupCopy: Record<'en' | 'ru', CatalogCopy> = {
  en: {
    title: 'Group tours from Almaty: how they work',
    intro: [
      'Group tours are the most affordable way to explore the Almaty region. You share a comfortable vehicle with other travelers, pay per person and join a set day trip led by an experienced local guide. Prices start from around 8,990 ₸ per person, and most departures leave from Sairan metro station in the city.',
      'They suit solo travelers, couples and friends who want to see Charyn Canyon, the Kolsai and Kaindy lakes or the Assy Plateau without renting a car or booking a private driver.',
    ],
    popularTitle: 'Popular group day trips from Almaty',
    popular: [
      { slug: 'trio-of-charyn', label: 'Charyn Canyon day trip — Valley of Castles, Moon and Black canyons' },
      { slug: 'lite-tour', label: 'Kolsai and Kaindy lakes with the Black Canyon viewpoint' },
      { slug: 'drive-tour', label: 'Kolsai Lake and Charyn Canyon in one day' },
      { slug: 'extreme-tour', label: 'Six locations in one day — both lakes and the Charyn canyons' },
      { slug: 'assy-plateau-2day', label: 'Assy Plateau overnight camping under the stars' },
      { slug: 'singing-dunes', label: 'Singing Dunes in Altyn-Emel National Park' },
      { slug: 'marmaris-issyk', label: 'Issyk Lake and Bear Waterfall' },
      { slug: 'city-tour', label: 'Almaty city tour — Medeu, Shymbulak and Kok-Tobe' },
    ],
    sections: [
      { h2: 'What is usually included', p: 'On most routes the price covers transport, a guide and ecological entrance fees; some add an off-road UAZ transfer or meals. Exactly what is and is not included is listed on each tour page.' },
      { h2: 'Dates and booking', p: 'Some tours run daily, others on set days during the season. Message us on WhatsApp with your preferred date and group size and we will confirm availability and the meeting point.' },
      { h2: 'Group or private?', p: 'If you travel with family, want to choose your own departure time or plan a custom route, a private tour gives you your own vehicle and guide.' },
    ],
  },
  ru: {
    title: 'Групповые туры из Алматы: как это устроено',
    intro: [
      'Групповые туры — самый доступный способ посмотреть Алматинскую область. Вы едете в комфортном транспорте вместе с другими путешественниками, платите за человека и присоединяетесь к готовому маршруту с опытным местным гидом. Цены — от 8 990 ₸ с человека, большинство выездов стартует от станции метро «Сайран».',
      'Они подходят тем, кто путешествует один, парам и друзьям, которые хотят увидеть Чарынский каньон, озёра Кольсай и Каинды или плато Ассы без аренды машины и личного водителя.',
    ],
    popularTitle: 'Популярные групповые поездки из Алматы',
    popular: [
      { slug: 'trio-of-charyn', label: 'Чарынский каньон на один день — Долина замков, Лунный и Чёрный каньоны' },
      { slug: 'lite-tour', label: 'Озёра Кольсай и Каинды со смотровой Чёрного каньона' },
      { slug: 'drive-tour', label: 'Кольсай и Чарынский каньон за один день' },
      { slug: 'extreme-tour', label: 'Шесть локаций за день — оба озера и каньоны Чарына' },
      { slug: 'assy-plateau-2day', label: 'Плато Ассы с ночёвкой в палатках под звёздами' },
      { slug: 'singing-dunes', label: 'Поющий бархан в нацпарке Алтын-Эмель' },
      { slug: 'marmaris-issyk', label: 'Озеро Иссык и Медвежий водопад' },
      { slug: 'city-tour', label: 'Обзорный тур по Алматы — Медеу, Шымбулак и Кок-Тобе' },
    ],
    sections: [
      { h2: 'Что обычно входит в стоимость', p: 'На большинстве маршрутов цена включает транспорт, гида и экологические сборы; на некоторых — ещё переезд на УАЗе или питание. Что именно входит и что нет, указано на странице каждого тура.' },
      { h2: 'Даты и бронирование', p: 'Часть туров идёт ежедневно, часть — в определённые дни сезона. Напишите нам в WhatsApp желаемую дату и количество человек — подтвердим наличие мест и точку сбора.' },
      { h2: 'Группой или индивидуально?', p: 'Если вы едете семьёй, хотите сами выбрать время выезда или собрать свой маршрут, индивидуальный тур даст вам отдельный транспорт и гида.' },
    ],
  },
};

export const privateCopy: Record<'en' | 'ru', CatalogCopy> = {
  en: {
    title: 'Private tours from Almaty: your own vehicle and guide',
    intro: [
      'On a private tour the vehicle and guide are just for your group. You choose the departure time, the pace and how long to stay at each stop — leave at sunrise for the light at Charyn, linger at Kolsai Lake, or cut a long day short.',
      'Prices are per vehicle, not per person. The table above shows the price for 1–3, 4–6, 7–13 and 14–18 travelers, so the larger your group, the less each person pays.',
    ],
    popularTitle: 'Popular private day trips from Almaty',
    popular: [
      { slug: 'kolsai-kaindy-black-canyon', label: 'Kolsai and Kaindy lakes with the Black Canyon' },
      { slug: 'kolsai-charyn-canyons', label: 'Kolsai Lake and the Charyn canyons' },
      { slug: 'kolsai-kaindy-three-canyons-2d', label: 'Kolsai, Kaindy and three canyons over two days' },
      { slug: 'big-almaty-lake', label: 'Big Almaty Lake — a half-day trip' },
      { slug: 'assy-plateau-1day', label: 'Assy Plateau and the observatory' },
      { slug: 'altyn-emel', label: 'Altyn-Emel: Aktau, Katutau and the Singing Dune' },
      { slug: 'almaty-city-tour', label: 'Almaty city tour' },
      { slug: 'ethno-village-huns', label: 'Ethno village “Huns” — nomadic culture show' },
    ],
    sections: [
      { h2: 'Who private tours suit', p: 'Families with children, couples, photographers who want the best light, groups of friends and corporate groups — and anyone short on time who wants the day built around them.' },
      { h2: 'Custom routes', p: 'Locations can be combined, changed or adjusted to your interests. Tell us what you want to see and how many days you have, and we will suggest a route and a vehicle that fits your group.' },
    ],
  },
  ru: {
    title: 'Индивидуальные туры из Алматы: свой транспорт и гид',
    intro: [
      'В индивидуальном туре транспорт и гид — только для вашей компании. Вы сами выбираете время выезда, темп и сколько оставаться на каждой точке: выехать на рассвете ради света на Чарыне, задержаться у Кольсая или сократить длинный день.',
      'Цена указана за транспорт, а не за человека. В таблице выше — стоимость для 1–3, 4–6, 7–13 и 14–18 человек: чем больше компания, тем дешевле выходит на каждого.',
    ],
    popularTitle: 'Популярные индивидуальные поездки из Алматы',
    popular: [
      { slug: 'kolsai-kaindy-black-canyon', label: 'Озёра Кольсай и Каинды с Чёрным каньоном' },
      { slug: 'kolsai-charyn-canyons', label: 'Кольсай и каньоны Чарына' },
      { slug: 'kolsai-kaindy-three-canyons-2d', label: 'Кольсай, Каинды и три каньона за два дня' },
      { slug: 'big-almaty-lake', label: 'Большое Алматинское озеро — поездка на полдня' },
      { slug: 'assy-plateau-1day', label: 'Плато Ассы и обсерватория' },
      { slug: 'altyn-emel', label: 'Алтын-Эмель: Актау, Катутау и Поющий бархан' },
      { slug: 'almaty-city-tour', label: 'Обзорная экскурсия по Алматы' },
      { slug: 'ethno-village-huns', label: 'Этно-аул «Гунны» — шоу кочевой культуры' },
    ],
    sections: [
      { h2: 'Кому подходят индивидуальные туры', p: 'Семьям с детьми, парам, фотографам, которым важен лучший свет, компаниям друзей и корпоративным группам — и всем, у кого мало времени и хочется, чтобы день строился вокруг вас.' },
      { h2: 'Свой маршрут', p: 'Локации можно объединять, менять или подстраивать под ваши интересы. Расскажите, что хотите увидеть и сколько у вас дней, — предложим маршрут и транспорт под вашу компанию.' },
    ],
  },
};
