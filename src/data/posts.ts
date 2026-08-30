// Blog posts (EN + RU). Written to capture the informational searches
// travelers make while planning a trip — each post links to the matching tours.

export type Block =
  | { t: 'p'; text: string }
  | { t: 'h2'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'tip'; text: string };

export interface PostContent {
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  body: Block[];
}

export interface Post {
  slug: string;
  image: string;
  /** ISO date — used for schema.org and sorting. */
  date: string;
  readMinutes: number;
  en: PostContent;
  ru: PostContent;
}

export const posts: Post[] = [
  {
    slug: 'best-day-trips-from-almaty',
    image: '/images/hero.jpg',
    date: '2026-08-24',
    readMinutes: 7,
    en: {
      title: 'Best Day Trips from Almaty: 8 Places Worth the Drive',
      metaTitle: 'Best Day Trips from Almaty — 8 Places Worth the Drive (2026)',
      metaDescription:
        'The best one-day trips from Almaty, Kazakhstan: Charyn Canyon, Kolsai and Kaindy Lakes, Big Almaty Lake, Assy Plateau and more. Driving times, seasons and costs.',
      excerpt:
        'Charyn Canyon, alpine lakes, a singing sand dune and a high nomad plateau — all reachable and back in a single day from Almaty.',
      body: [
        { t: 'p', text: 'Almaty sits at the foot of the Trans-Ili Alatau mountains, and that location is its superpower: within a few hours’ drive you can stand in a red rock canyon, swim-cold alpine lakes, desert dunes or a 2,500 m summer pasture. Almost all of it works as a day trip.' },
        { t: 'p', text: 'Here are the eight trips we run most often, with honest driving times so you can plan a realistic week.' },

        { t: 'h2', text: '1. Charyn Canyon — the classic' },
        { t: 'p', text: 'About 200 km east of Almaty, roughly 3 to 3.5 hours each way on good asphalt. The star is the Valley of Castles: an easy 2 km trail down between red sandstone towers to the Charyn River. Most trips also stop at the Moon Canyon and Black Canyon viewpoints, which cost nothing extra in time but give the best wide panoramas.' },
        { t: 'p', text: 'Best months are April to October. Summer midday is genuinely hot with almost no shade, so an early start matters more here than on any other route.' },

        { t: 'h2', text: '2. Kolsai Lakes — the alpine one' },
        { t: 'p', text: 'Kolsai-1 sits around 1,800 m in spruce forest near Saty village, about 5 hours from the city. The water is deep green, the air is 8–12°C cooler than Almaty, and you can walk the shoreline or rent a boat. June to September is the window; earlier and the road can still be difficult.' },

        { t: 'h2', text: '3. Kaindy Lake — the sunken forest' },
        { t: 'p', text: 'The famous one with dead spruce trunks standing straight out of turquoise water, created by a 1911 earthquake. It is close to Kolsai, so the two are usually combined.' },
        { t: 'tip', text: 'The last stretch to Kaindy is rough off-road. Ordinary cars cannot make it — you transfer to a UAZ 4x4, then walk 20–30 minutes uphill from the parking. Factor that in if you are travelling with small children or limited mobility.' },

        { t: 'h2', text: '4. Big Almaty Lake (BAO)' },
        { t: 'p', text: 'The closest big view to the city: a glacial lake at 2,511 m, ringed by peaks over 4,000 m, about an hour from the centre. Perfect as a half-day or a first acclimatisation trip. Note that BAO supplies Almaty with drinking water, so you cannot swim or walk down to the shoreline — the viewpoints above are where the photos happen anyway.' },

        { t: 'h2', text: '5. Assy Plateau — nomad country' },
        { t: 'p', text: 'A wide high pasture at about 2,500 m where shepherds graze horses through the summer, topped by the Assy-Turgen observatory. You reach it through the green Turgen gorge and its waterfalls. Far fewer visitors than Charyn or Kolsai, and the night sky here is among the darkest near Almaty — which is why the overnight camping version is popular.' },

        { t: 'h2', text: '6. Issyk Lake and the Bear Waterfall' },
        { t: 'p', text: 'A turquoise mountain lake barely 90 minutes east, paired with an easy forest walk to a waterfall in the Turgen gorge. This is the gentlest day on the list: short drive, short walks, good for families or a relaxed day between bigger trips.' },

        { t: 'h2', text: '7. Singing Dunes, Altyn-Emel' },
        { t: 'p', text: 'A 150 m sand dune in the desert between the Ili River and the Aktau mountains. In dry, windy conditions the shifting sand produces a low humming sound — hence the name. It is a long day (about 4 hours each way), but the landscape feels like another country entirely.' },

        { t: 'h2', text: '8. Medeu, Shymbulak and the city itself' },
        { t: 'p', text: 'If you only have a few hours, stay close: the Medeu high-altitude skating rink, the Shymbulak cable car up to 3,200 m, Zenkov Cathedral in Panfilov Park, the Green Bazaar and the Kok-Tobe viewpoint. No fitness required and it works year round.' },

        { t: 'h2', text: 'How to choose' },
        { t: 'ul', items: [
          'Only one free day? Charyn Canyon — the most dramatic scenery per hour of driving.',
          'Two days? Add Kolsai and Kaindy, or take the two-day version so you are not rushing.',
          'Half a day or a layover? Big Almaty Lake, Issyk, or a city tour.',
          'Want somewhere quiet? Assy Plateau.',
          'Travelling in winter? The city, Medeu and Shymbulak stay open; the high lakes do not.',
        ] },

        { t: 'h2', text: 'Group tour or private?' },
        { t: 'p', text: 'Group departures are the cheapest way to see these places — you share a comfortable vehicle with other travelers and pay per person, starting around 8,990 ₸. Private tours cost more because you pay per vehicle, but you choose the departure time, the pace and the stops, and the route can be adjusted to what you actually want to see.' },
        { t: 'p', text: 'Either way, the practical details — dates, meeting point, what is included — are worth confirming before you book. Message us on WhatsApp and we will tell you honestly which option fits your dates and group size.' },
      ],
    },
    ru: {
      title: '8 лучших однодневных поездок из Алматы',
      metaTitle: '8 лучших однодневных поездок из Алматы — куда съездить на день',
      metaDescription:
        'Куда съездить из Алматы на один день: Чарынский каньон, озёра Кольсай и Каинды, БАО, плато Ассы, Поющий бархан. Время в пути, сезоны и цены.',
      excerpt:
        'Чарынский каньон, горные озёра, поющий бархан и высокогорное плато — всё это реально успеть за один день из Алматы.',
      body: [
        { t: 'p', text: 'Алматы стоит у подножия Заилийского Алатау, и в этом его главная сила: за несколько часов дороги можно оказаться в красном каньоне, у ледникового озера, в пустыне с барханами или на летнем пастбище на высоте 2 500 м. Почти всё это укладывается в один день.' },
        { t: 'p', text: 'Вот восемь поездок, которые мы проводим чаще всего — с честным временем в пути, чтобы вы могли спланировать реальную неделю.' },

        { t: 'h2', text: '1. Чарынский каньон — классика' },
        { t: 'p', text: 'Около 200 км к востоку от Алматы, примерно 3–3,5 часа в одну сторону по хорошему асфальту. Главное здесь — Долина замков: пологая тропа 2 км между красными песчаниковыми башнями вниз к реке Чарын. Обычно по пути добавляют смотровые Лунного и Чёрного каньонов — времени почти не отнимают, а панорамы дают лучшие.' },
        { t: 'p', text: 'Лучшие месяцы — с апреля по октябрь. Летом в полдень по-настоящему жарко и почти нет тени, поэтому ранний выезд тут важнее, чем на любом другом маршруте.' },

        { t: 'h2', text: '2. Озеро Кольсай — горное' },
        { t: 'p', text: 'Кольсай-1 лежит на высоте около 1 800 м в еловом лесу рядом с селом Саты, примерно 5 часов от города. Вода тёмно-зелёная, воздух на 8–12 °C прохладнее, чем в Алматы. Можно пройтись вдоль берега или взять лодку. Сезон — с июня по сентябрь.' },

        { t: 'h2', text: '3. Озеро Каинды — затонувший лес' },
        { t: 'p', text: 'То самое озеро, где из бирюзовой воды торчат прямые стволы елей — результат землетрясения 1911 года. Находится рядом с Кольсаем, поэтому их обычно объединяют.' },
        { t: 'tip', text: 'Последний участок до Каинды — бездорожье. Обычная машина не проедет: пересадка на УАЗ, а затем 20–30 минут пешком в гору от парковки. Учитывайте это, если едете с маленькими детьми или есть ограничения по здоровью.' },

        { t: 'h2', text: '4. Большое Алматинское озеро (БАО)' },
        { t: 'p', text: 'Самый близкий большой вид: ледниковое озеро на 2 511 м в окружении четырёхтысячников, примерно час от центра. Отлично как поездка на полдня или первая акклиматизация. Учтите: БАО снабжает город питьевой водой, поэтому купаться и спускаться к воде нельзя — но лучшие кадры всё равно со смотровых выше.' },

        { t: 'h2', text: '5. Плато Ассы — кочевая сторона' },
        { t: 'p', text: 'Просторное высокогорное пастбище на ~2 500 м, где летом пасут лошадей, с обсерваторией Ассы-Тургень наверху. Подъём идёт через зелёное Тургеньское ущелье с водопадами. Туристов гораздо меньше, чем на Чарыне или Кольсае, а ночное небо — одно из самых тёмных рядом с Алматы, поэтому популярен вариант с ночёвкой в палатках.' },

        { t: 'h2', text: '6. Озеро Иссык и Медвежий водопад' },
        { t: 'p', text: 'Бирюзовое горное озеро всего в полутора часах к востоку плюс лёгкая прогулка по лесу к водопаду в Тургеньском ущелье. Самый спокойный день из списка: короткая дорога, лёгкие тропы — хорошо для семей и как передышка между большими поездками.' },

        { t: 'h2', text: '7. Поющий бархан, Алтын-Эмель' },
        { t: 'p', text: '150-метровая песчаная дюна в пустыне между рекой Или и горами Актау. В сухую ветреную погоду песок издаёт низкий гул — отсюда и название. День длинный (около 4 часов в одну сторону), но пейзаж совершенно не похож на всё остальное вокруг Алматы.' },

        { t: 'h2', text: '8. Медеу, Шымбулак и сам город' },
        { t: 'p', text: 'Если времени всего несколько часов — оставайтесь рядом: высокогорный каток Медеу, канатная дорога Шымбулака до 3 200 м, Вознесенский собор в парке Панфилова, Зелёный базар и смотровая Кок-Тобе. Никакой подготовки не нужно, и работает круглый год.' },

        { t: 'h2', text: 'Как выбрать' },
        { t: 'ul', items: [
          'Всего один свободный день? Чарынский каньон — максимум впечатлений на час дороги.',
          'Два дня? Добавьте Кольсай и Каинды или возьмите двухдневный вариант, чтобы не спешить.',
          'Полдня или пересадка? БАО, Иссык или обзорная по городу.',
          'Хочется тишины? Плато Ассы.',
          'Зимой? Город, Медеу и Шымбулак работают; высокогорные озёра — нет.',
        ] },

        { t: 'h2', text: 'Группа или индивидуально?' },
        { t: 'p', text: 'Групповые выезды — самый доступный способ увидеть эти места: вы едете в комфортном транспорте с другими путешественниками и платите за человека, от 8 990 ₸. Индивидуальные туры дороже, потому что цена за транспорт, зато вы выбираете время выезда, темп и остановки, а маршрут можно подстроить под ваши интересы.' },
        { t: 'p', text: 'В любом случае детали — даты, точку сбора, что включено — стоит уточнить до брони. Напишите нам в WhatsApp, и мы честно скажем, какой вариант подходит под ваши даты и состав группы.' },
      ],
    },
  },
  {
    slug: 'charyn-canyon-guide',
    image: '/images/charyn-canyon.jpg',
    date: '2026-08-24',
    readMinutes: 6,
    en: {
      title: 'Charyn Canyon from Almaty: A Practical Guide',
      metaTitle: 'Charyn Canyon from Almaty — How to Visit (Guide 2026)',
      metaDescription:
        'How to visit Charyn Canyon from Almaty: distance and driving time, the Valley of Castles trail, the Moon and Black canyons, best season, what to bring and tour options.',
      excerpt:
        'Everything you actually need to know before going: how far it is, which canyon is which, when to go and what the walk is really like.',
      body: [
        { t: 'p', text: 'Charyn Canyon is the single most photographed landscape near Almaty, and for good reason — a 150–300 m deep gorge of red sandstone towers carved by the Charyn River. It is often described as a smaller Grand Canyon, which undersells how different it actually feels: you walk down inside it rather than looking at it from a rim.' },

        { t: 'h2', text: 'Where it is and how long it takes' },
        { t: 'p', text: 'The canyon lies roughly 200 km east of Almaty, close to the Chinese border. Driving time is about 3 to 3.5 hours each way on decent asphalt, so a return day trip runs 10–12 hours door to door. There is no train or convenient public transport, so realistically you go by car or on a tour.' },

        { t: 'h2', text: 'The four canyons — which is which' },
        { t: 'p', text: 'People say “Charyn Canyon”, but the area is a system of several canyons, and tours differ in how many they include.' },
        { t: 'ul', items: [
          'Valley of Castles — the main event. A 2 km walking trail descends between the sandstone formations to the Charyn River. Gentle downhill on the way in, a steady uphill on the way back.',
          'Moon Canyon — a viewpoint with wide, pale, lunar-looking rock. Ten minutes of your time, excellent panoramas.',
          'Black Canyon — a dark, deeper gorge seen from above. Usually a short photo stop on the drive.',
          'Charyn River — the green ribbon at the bottom of the Valley of Castles, with trees and a small guesthouse area.',
        ] },
        { t: 'tip', text: 'If a tour only lists “Charyn Canyon”, ask whether the Moon and Black canyon viewpoints are included. They add very little driving time but a lot to the day.' },

        { t: 'h2', text: 'How hard is the walk?' },
        { t: 'p', text: 'Easier than people expect. The Valley of Castles trail is a wide gravel path, about 2 km down to the river and the same back. There is no scrambling and no exposure. The return climb is the only real effort — it is gradual, but in summer heat it is the part people underestimate. If you would rather not walk back up, a shuttle taxi usually operates inside the canyon for a small fee.' },

        { t: 'h2', text: 'Best time to go' },
        { t: 'p', text: 'April to October is the season. Spring and early autumn are ideal: comfortable temperatures and better light. July and August are hot — often above 35°C with essentially no shade in the canyon, which is why early departures matter. Winter visits are possible and the red rock against snow is striking, but the days are short and the trail can be icy.' },

        { t: 'h2', text: 'What to bring' },
        { t: 'ul', items: [
          'More water than you think — at least 1.5–2 litres per person in summer.',
          'A hat, sunglasses and sunscreen. There is no shade on the trail.',
          'Comfortable closed shoes — the path is gravel and dusty.',
          'Your ID (original). There are checkpoints on some routes near the border zone.',
          'Snacks. Food options at the canyon are limited and basic.',
        ] },

        { t: 'h2', text: 'Combining Charyn with the lakes' },
        { t: 'p', text: 'Charyn sits on the same road as Kolsai and Kaindy lakes, so the two get combined constantly. Be realistic about it: canyon plus one lake in a single day is a long but reasonable trip. Canyon plus both lakes in one day means a very early start, a strict schedule and limited time at each stop. If the lakes matter to you, the two-day version with an overnight in Saty village is far more enjoyable.' },

        { t: 'h2', text: 'Group or private' },
        { t: 'p', text: 'A group departure to the Charyn canyons starts at 8,990 ₸ per person, which is the cheapest way to get there. A private tour is priced per vehicle instead, and makes sense if you want to leave at sunrise for the light, stay longer at the river, or travel with a family that sets its own pace.' },
        { t: 'p', text: 'Message us on WhatsApp with your dates and group size, and we will tell you which departures are available and what the day actually looks like.' },
      ],
    },
    ru: {
      title: 'Чарынский каньон из Алматы: практический гид',
      metaTitle: 'Чарынский каньон из Алматы — как добраться и что нужно знать',
      metaDescription:
        'Как поехать в Чарынский каньон из Алматы: расстояние и время в пути, тропа Долины замков, Лунный и Чёрный каньоны, сезон, что взять с собой и варианты туров.',
      excerpt:
        'Всё, что реально нужно знать перед поездкой: сколько ехать, какой каньон какой, когда лучше и насколько тяжёлая тропа.',
      body: [
        { t: 'p', text: 'Чарынский каньон — самый фотографируемый пейзаж рядом с Алматы, и заслуженно: ущелье глубиной 150–300 м из красных песчаниковых башен, прорезанное рекой Чарын. Его часто называют младшим братом Гранд-Каньона, хотя ощущение другое: сюда вы спускаетесь внутрь, а не смотрите сверху.' },

        { t: 'h2', text: 'Где это и сколько ехать' },
        { t: 'p', text: 'Каньон находится примерно в 200 км к востоку от Алматы, недалеко от границы с Китаем. Дорога занимает около 3–3,5 часов в одну сторону по нормальному асфальту, то есть поездка туда-обратно — это 10–12 часов от двери до двери. Удобного общественного транспорта нет, поэтому едут на машине или с туром.' },

        { t: 'h2', text: 'Четыре каньона — что есть что' },
        { t: 'p', text: 'Говорят «Чарынский каньон», но на деле это система из нескольких каньонов, и туры отличаются тем, сколько из них включено.' },
        { t: 'ul', items: [
          'Долина замков — главное место. Тропа 2 км спускается между скальными «замками» к реке Чарын. Вниз идти легко, обратно — стабильный подъём.',
          'Лунный каньон — смотровая с широкими светлыми породами, похожими на лунный пейзаж. Десять минут времени, отличные панорамы.',
          'Чёрный каньон — тёмное глубокое ущелье, вид сверху. Обычно короткая фотоостановка по дороге.',
          'Река Чарын — зелёная лента внизу Долины замков, с деревьями и небольшой зоной отдыха.',
        ] },
        { t: 'tip', text: 'Если в туре указан только «Чарынский каньон», уточните, входят ли смотровые Лунного и Чёрного каньонов. Времени в дороге они почти не добавляют, а день делают заметно насыщеннее.' },

        { t: 'h2', text: 'Насколько тяжело идти?' },
        { t: 'p', text: 'Легче, чем многие думают. Тропа по Долине замков — широкая гравийная дорожка, около 2 км вниз к реке и столько же обратно. Никакого лазания и обрывов. Единственная нагрузка — подъём назад: он пологий, но летом по жаре его обычно недооценивают. Если подниматься не хочется, внутри каньона обычно ходит машина-шаттл за небольшую плату.' },

        { t: 'h2', text: 'Когда лучше ехать' },
        { t: 'p', text: 'Сезон — с апреля по октябрь. Идеальны весна и начало осени: комфортная температура и хороший свет. Июль и август жаркие — часто выше 35 °C, а тени в каньоне практически нет, поэтому ранний выезд важен. Зимой тоже можно, красные скалы на фоне снега смотрятся эффектно, но день короткий, а тропа бывает скользкой.' },

        { t: 'h2', text: 'Что взять с собой' },
        { t: 'ul', items: [
          'Воды больше, чем кажется нужным — летом минимум 1,5–2 литра на человека.',
          'Головной убор, очки и крем от солнца. Тени на тропе нет.',
          'Удобная закрытая обувь — дорожка гравийная и пыльная.',
          'Оригинал удостоверения личности. На некоторых маршрутах есть посты рядом с погранзоной.',
          'Перекус. Еды на месте мало и выбор простой.',
        ] },

        { t: 'h2', text: 'Совмещать ли Чарын с озёрами' },
        { t: 'p', text: 'Чарын стоит на той же дороге, что Кольсай и Каинды, поэтому их постоянно объединяют. Здесь стоит быть реалистом: каньон плюс одно озеро за день — длинная, но нормальная поездка. Каньон плюс оба озера за день — это очень ранний выезд, жёсткий график и мало времени на каждой точке. Если озёра для вас важны, двухдневный вариант с ночёвкой в Саты гораздо приятнее.' },

        { t: 'h2', text: 'Группа или индивидуально' },
        { t: 'p', text: 'Групповой выезд к каньонам Чарына начинается от 8 990 ₸ с человека — самый доступный способ туда попасть. Индивидуальный тур считается за транспорт и имеет смысл, если хочется выехать на рассвете ради света, подольше побыть у реки или ехать семьёй в своём темпе.' },
        { t: 'p', text: 'Напишите нам в WhatsApp даты и количество человек — расскажем, какие выезды есть и как реально проходит день.' },
      ],
    },
  },
  {
    slug: 'almaty-city-tour-what-to-see',
    image: '/images/almaty-city-tour.jpg',
    date: '2026-08-24',
    readMinutes: 5,
    en: {
      title: 'Almaty City Tour: What to See in One Day',
      metaTitle: 'Almaty City Tour — What to See in One Day (Local Guide)',
      metaDescription:
        'What to see in Almaty in one day: Medeu, Shymbulak, Zenkov Cathedral, Panfilov Park, the Green Bazaar and Kok-Tobe. Route order, timing and practical tips.',
      excerpt:
        'A wooden cathedral, a Soviet-era skating rink, a mountain cable car and a bazaar full of dried fruit — Almaty in a single well-ordered day.',
      body: [
        { t: 'p', text: 'Almaty rewards a day of wandering more than most cities in Central Asia. It is green, walkable in the centre, and has a wall of 4,000 m mountains at the end of the southern streets. The trick is ordering the stops so you are not crossing the city twice.' },

        { t: 'h2', text: 'Morning: go up to the mountains first' },
        { t: 'p', text: 'Start with Medeu, the high-altitude skating rink at 1,691 m — the highest of its kind in the world, and a piece of Soviet sporting history where dozens of speed skating records were set. From there continue up to Shymbulak, the ski resort above it. The cable car climbs in three stages to Talgar Pass at 3,200 m.' },
        { t: 'tip', text: 'Go up in the morning. Clouds build over the peaks in the afternoon, and the view from the top is the whole point. Bring a jacket even in July — it is genuinely cold at 3,200 m.' },

        { t: 'h2', text: 'Midday: the historic centre' },
        { t: 'p', text: 'Come back down to Panfilov Park, a wide tree-shaded park that holds two things worth your time: Zenkov Cathedral, a candy-coloured Orthodox church built in 1907 and one of the tallest wooden buildings in the world, and the Second World War memorial with its eternal flame. Both are a short walk apart.' },

        { t: 'h2', text: 'Afternoon: the Green Bazaar' },
        { t: 'p', text: 'A ten-minute walk from the park is the Green Bazaar, the city’s main market. This is the most useful stop for understanding the region: rows of dried apricots and raisins, horse meat and kazy, mountains of nuts, honey and spices. Vendors expect you to taste before buying, and most will offer. It is also the best place to pick up gifts, along with chocolate from the local Rakhat factory.' },

        { t: 'h2', text: 'Evening: Kok-Tobe' },
        { t: 'p', text: 'Finish on Kok-Tobe hill, reached by cable car from the centre. You get the full panorama of the city against the mountains, and if you time it for sunset the light over Almaty is the best photograph of the day. There are cafés, a small park and the famous Beatles statue at the top.' },

        { t: 'h2', text: 'A realistic timeline' },
        { t: 'ul', items: [
          '08:00–09:30 — drive up to Medeu, walk the dam and the rink.',
          '09:50–13:00 — Shymbulak and the cable car, free time at the top.',
          '13:40–15:00 — Panfilov Park and Zenkov Cathedral.',
          '15:00–16:30 — Green Bazaar and Rakhat.',
          '16:30–18:00 — Kok-Tobe and the city panorama.',
        ] },

        { t: 'h2', text: 'Practical notes' },
        { t: 'p', text: 'Cable car tickets at Shymbulak and Kok-Tobe are usually not included in tour prices — budget for them separately. The city is walkable in the centre but the mountain sections are not, so some transport is necessary. Almaty is comfortable to visit year round: the mountain stops work in winter as a ski day, and in summer the same slopes become hiking trails and terraces.' },
        { t: 'p', text: 'We run this as both a group city tour and a private one — the private version can start in the evening if you would rather finish on Kok-Tobe at sunset, or be shortened to fit a layover. Message us on WhatsApp and tell us how much time you have.' },
      ],
    },
    ru: {
      title: 'Обзорная по Алматы: что посмотреть за один день',
      metaTitle: 'Что посмотреть в Алматы за 1 день — маршрут обзорной экскурсии',
      metaDescription:
        'Что посмотреть в Алматы за один день: Медеу, Шымбулак, Вознесенский собор, парк Панфилова, Зелёный базар и Кок-Тобе. Порядок маршрута, тайминг и советы.',
      excerpt:
        'Деревянный собор, высокогорный каток, канатная дорога и базар с сухофруктами — Алматы за один правильно собранный день.',
      body: [
        { t: 'p', text: 'Алматы благодарен к неспешной прогулке больше многих городов Центральной Азии: зелёный, в центре пеший, и в конце южных улиц — стена четырёхтысячников. Главное — выстроить точки так, чтобы не пересекать город дважды.' },

        { t: 'h2', text: 'Утро: сначала в горы' },
        { t: 'p', text: 'Начните с Медеу — высокогорного катка на 1 691 м, самого высокого в мире и части советской спортивной истории, где были установлены десятки мировых рекордов. Оттуда поднимайтесь на Шымбулак: канатная дорога идёт в три этапа до Талгарского перевала на 3 200 м.' },
        { t: 'tip', text: 'Поднимайтесь утром. К обеду над вершинами собираются облака, а вид сверху — весь смысл подъёма. Куртку берите даже в июле: на 3 200 м реально холодно.' },

        { t: 'h2', text: 'День: исторический центр' },
        { t: 'p', text: 'Спуститесь в парк Панфилова — просторный тенистый парк, где стоит задержаться ради двух вещей: Вознесенского собора, разноцветной православной церкви 1907 года и одного из самых высоких деревянных зданий мира, и мемориала Славы с вечным огнём. Идти между ними пару минут.' },

        { t: 'h2', text: 'После обеда: Зелёный базар' },
        { t: 'p', text: 'В десяти минутах ходьбы от парка — Зелёный базар, главный рынок города. Это самая полезная остановка для понимания региона: ряды кураги и изюма, конина и казы, горы орехов, мёд и специи. Пробовать перед покупкой здесь нормально, продавцы сами предложат. Отсюда же удобно везти подарки — вместе с шоколадом местной фабрики «Рахат».' },

        { t: 'h2', text: 'Вечер: Кок-Тобе' },
        { t: 'p', text: 'Завершайте на холме Кок-Тобе, куда идёт канатная дорога из центра. Оттуда открывается полная панорама города на фоне гор, а если подгадать закат — это лучший кадр дня. Наверху кафе, небольшой парк и знаменитый памятник The Beatles.' },

        { t: 'h2', text: 'Реалистичный тайминг' },
        { t: 'ul', items: [
          '08:00–09:30 — подъём на Медеу, прогулка по плотине и катку.',
          '09:50–13:00 — Шымбулак и канатная дорога, свободное время наверху.',
          '13:40–15:00 — парк Панфилова и Вознесенский собор.',
          '15:00–16:30 — Зелёный базар и «Рахат».',
          '16:30–18:00 — Кок-Тобе и панорама города.',
        ] },

        { t: 'h2', text: 'Практические моменты' },
        { t: 'p', text: 'Билеты на канатные дороги Шымбулака и Кок-Тобе обычно не входят в стоимость туров — закладывайте их отдельно. Центр удобно обойти пешком, а вот горная часть требует транспорта. Алматы комфортен круглый год: зимой горные точки работают как лыжный день, а летом те же склоны становятся тропами и террасами с видом.' },
        { t: 'p', text: 'Мы проводим этот маршрут и группой, и индивидуально — индивидуальный вариант можно начать вечером, чтобы закончить на Кок-Тобе на закате, или сократить под пересадку. Напишите в WhatsApp, сколько у вас времени.' },
      ],
    },
  },
  {
    slug: 'best-time-to-visit-almaty',
    image: '/images/kolsai-kaindy-lakes.jpg',
    date: '2026-08-24',
    readMinutes: 6,
    en: {
      title: 'Best Time to Visit Almaty — Season by Season',
      metaTitle: 'Best Time to Visit Almaty, Kazakhstan — Month by Month Guide',
      metaDescription:
        'When to visit Almaty: what is open each season, when the mountain lakes are reachable, weather by month, and which tours work in winter, spring, summer and autumn.',
      excerpt:
        'Which months open the mountain lakes, when the canyons are unbearably hot, and what still works in winter — planned around what you actually want to see.',
      body: [
        { t: 'p', text: 'There is no single best month to visit Almaty — it depends entirely on whether you came for mountains, canyons, the city or snow. The most common planning mistake is booking for May expecting the famous alpine lakes, and finding the roads to them still closed.' },

        { t: 'h2', text: 'Summer: June to September — the widest choice' },
        { t: 'p', text: 'This is the only window when absolutely everything is open. The roads to Kolsai and Kaindy are reliable, the Assy Plateau is green with shepherd camps, and the high passes are clear. If the alpine lakes are the reason you are coming, this is your season — there is no workaround.' },
        { t: 'p', text: 'The trade-off is heat in the lowlands. July and August at Charyn Canyon and the Singing Dunes regularly pass 35°C with no shade, so those trips start early. The mountains stay pleasant — expect 8–12°C cooler at the lakes than in the city.' },

        { t: 'h2', text: 'Autumn: late September to October — the best light' },
        { t: 'p', text: 'Arguably the nicest time to travel here. The heat breaks, the crowds thin out, and the canyons take on much better colour in low autumn light. The lakes are still reachable in early autumn but get cold quickly. By late October the higher routes begin to close.' },

        { t: 'h2', text: 'Winter: November to March — city and snow' },
        { t: 'p', text: 'The high lakes and the Assy Plateau are effectively out — the roads are snowed in. But the city season is excellent: Shymbulak becomes a proper ski resort, Medeu opens for skating, and the historic centre is quiet and atmospheric. Charyn can still be visited on clear days, and red rock against snow is a genuinely underrated sight.' },

        { t: 'h2', text: 'Spring: April to May — green, but limited' },
        { t: 'p', text: 'The foothills turn brilliantly green and wildflowers come out, which makes the gorges near the city — Ayusai, Alma-Arasan, Turgen — beautiful. Charyn opens for the season in April. But be clear-eyed about the high country: in April and often well into May, the roads to Kolsai and Kaindy are still difficult or closed, and the Assy Plateau is not yet accessible.' },

        { t: 'h2', text: 'Quick planning table' },
        { t: 'ul', items: [
          'Want Kolsai and Kaindy lakes → June to September. No flexibility on this.',
          'Want Charyn Canyon → April to October, ideally spring or autumn to avoid the heat.',
          'Want the Assy Plateau or camping under the stars → June to September.',
          'Want Singing Dunes and Altyn-Emel → April to October, avoid peak summer midday.',
          'Want skiing, skating or a city break → November to March.',
          'Want green gorges close to the city → April to October, best in May.',
        ] },

        { t: 'h2', text: 'A note on booking ahead' },
        { t: 'p', text: 'Summer weekends are the busiest period for group departures, and popular dates for the lakes fill up first. If your travel dates are fixed, it is worth checking availability early rather than deciding on arrival — especially for the two-day trips, which run on set dates rather than daily.' },
        { t: 'p', text: 'Tell us your dates on WhatsApp and we will tell you honestly what is open and reachable in that window, and what is not worth attempting.' },
      ],
    },
    ru: {
      title: 'Когда лучше ехать в Алматы — по сезонам',
      metaTitle: 'Когда лучше ехать в Алматы — гид по сезонам и месяцам',
      metaDescription:
        'Когда ехать в Алматы: что открыто в каждый сезон, когда доступны горные озёра, погода по месяцам и какие туры работают зимой, весной, летом и осенью.',
      excerpt:
        'В какие месяцы открываются горные озёра, когда в каньонах невыносимо жарко и что работает зимой — план под то, что вы хотите увидеть.',
      body: [
        { t: 'p', text: 'Единственного «лучшего месяца» для Алматы не существует — всё зависит от того, ради чего вы едете: горы, каньоны, город или снег. Самая частая ошибка при планировании — взять билеты на май в расчёте на знаменитые горные озёра и обнаружить, что дороги к ним ещё закрыты.' },

        { t: 'h2', text: 'Лето: июнь–сентябрь — максимум возможностей' },
        { t: 'p', text: 'Это единственное окно, когда открыто буквально всё. Дороги на Кольсай и Каинды надёжны, плато Ассы зелёное, с чабанскими стоянками, перевалы чистые. Если вы едете ради горных озёр — это ваш сезон, обходных путей нет.' },
        { t: 'p', text: 'Плата за это — жара внизу. В июле и августе на Чарыне и Поющем бархане регулярно выше 35 °C без тени, поэтому такие поездки стартуют рано. В горах при этом комфортно: у озёр на 8–12 °C прохладнее, чем в городе.' },

        { t: 'h2', text: 'Осень: конец сентября–октябрь — лучший свет' },
        { t: 'p', text: 'Пожалуй, самое приятное время для поездок. Жара спадает, людей меньше, а каньоны в низком осеннем свете выглядят гораздо выразительнее. В начале осени озёра ещё доступны, но быстро становятся холодными. К концу октября высокогорные маршруты начинают закрываться.' },

        { t: 'h2', text: 'Зима: ноябрь–март — город и снег' },
        { t: 'p', text: 'Высокогорные озёра и плато Ассы фактически недоступны — дороги в снегу. Зато отличный городской сезон: Шымбулак работает как полноценный горнолыжный курорт, Медеу открыт для катания, а исторический центр тихий и атмосферный. Чарын можно посещать в ясные дни, и красные скалы на фоне снега — незаслуженно недооценённое зрелище.' },

        { t: 'h2', text: 'Весна: апрель–май — зелено, но с ограничениями' },
        { t: 'p', text: 'Предгорья становятся ярко-зелёными, цветут маки и тюльпаны — ущелья рядом с городом (Аюсай, Алма-Арасан, Тургень) в это время особенно хороши. Чарын открывается в апреле. Но по высокогорью нужно быть реалистом: в апреле и часто вплоть до конца мая дороги на Кольсай и Каинды ещё сложные или закрыты, а плато Ассы недоступно.' },

        { t: 'h2', text: 'Коротко для планирования' },
        { t: 'ul', items: [
          'Нужны Кольсай и Каинды → июнь–сентябрь. Вариантов нет.',
          'Нужен Чарынский каньон → апрель–октябрь, лучше весна или осень без жары.',
          'Нужно плато Ассы или ночёвка под звёздами → июнь–сентябрь.',
          'Нужен Поющий бархан и Алтын-Эмель → апрель–октябрь, избегая летнего полудня.',
          'Нужны лыжи, коньки или городской отдых → ноябрь–март.',
          'Нужны зелёные ущелья рядом с городом → апрель–октябрь, лучше всего в мае.',
        ] },

        { t: 'h2', text: 'Про бронирование заранее' },
        { t: 'p', text: 'Летние выходные — самый загруженный период для групповых выездов, и популярные даты на озёра разбирают первыми. Если даты поездки фиксированы, лучше уточнить наличие заранее, а не решать по приезде — особенно для двухдневных туров, которые идут по расписанию, а не ежедневно.' },
        { t: 'p', text: 'Напишите нам даты в WhatsApp, и мы честно скажем, что в это окно открыто и куда реально доехать, а что пробовать не стоит.' },
      ],
    },
  },
];
