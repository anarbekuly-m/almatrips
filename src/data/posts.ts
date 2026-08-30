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
  {
    slug: 'kolsai-kaindy-lakes-guide',
    image: '/images/kaindy.jpg',
    date: '2026-08-25',
    readMinutes: 7,
    en: {
      title: 'Kolsai and Kaindy Lakes: A Complete Guide',
      metaTitle: 'Kolsai & Kaindy Lakes from Almaty — Complete Guide (2026)',
      metaDescription:
        'How to visit Kolsai and Kaindy Lakes from Almaty: driving time, the sunken forest, the UAZ transfer, hiking to Kolsai 2, best season, what to bring and tour prices.',
      excerpt:
        'Two very different lakes a few kilometres apart — one emerald and forested, one full of drowned trees. Here is how to do both properly.',
      body: [
        { t: 'p', text: 'These are the two lakes that put the Almaty region on travel wish lists. They sit close together near the village of Saty, about five hours east of the city, but they feel nothing alike — Kolsai is a deep green alpine lake in spruce forest, while Kaindy is a flooded valley with dead trees standing upright in turquoise water.' },

        { t: 'h2', text: 'Kolsai: three lakes, not one' },
        { t: 'p', text: 'Most visitors see Kolsai-1, the lower lake at around 1,800 m. It is the one reachable by car, with a shoreline path, boat and catamaran rental, and guesthouses nearby. It is also the only one that fits comfortably into a day trip.' },
        { t: 'p', text: 'Kolsai-2 lies about 5 km further up a forest trail, roughly 3–4 hours of walking each way with real elevation gain. Kolsai-3 is higher still and close to the Kyrgyz border. If you want the upper lakes, plan an overnight in Saty — trying to squeeze them into a day trip does not work.' },

        { t: 'h2', text: 'Kaindy: the sunken forest' },
        { t: 'p', text: 'Kaindy was created by an earthquake in 1911, which triggered a landslide that dammed the valley. The spruce forest drowned, but the cold water preserved the trunks — so bare grey spires still rise straight out of a lake that shifts between turquoise and deep blue depending on the light.' },
        { t: 'p', text: 'It sits at about 2,000 m, and it is smaller than people expect. Give yourself an hour to walk around, take photos and go down to the water.' },
        { t: 'tip', text: 'The last few kilometres to Kaindy are rough off-road. Regular cars cannot do it: you switch to a UAZ 4x4, then walk 20–30 minutes uphill from the parking area. Horses can be rented on site if the walk is a problem. On our tours the UAZ transfer is included in the price.' },

        { t: 'h2', text: 'How long the trip really takes' },
        { t: 'p', text: 'Be realistic about the distances. Almaty to Saty is roughly 300 km and about five hours of driving. A one-day trip to both lakes means leaving around 05:00 and returning near 22:00 — it is done constantly and it works, but it is a long day in a vehicle.' },
        { t: 'ul', items: [
          'One day, both lakes — departure around 05:00, back around 21:30–22:00.',
          'One day, lakes plus Charyn canyons — very early start, strict timing at each stop.',
          'Two days with a night in Saty — far more relaxed, and the only way to also hike to Kolsai-2.',
        ] },

        { t: 'h2', text: 'Best time to go' },
        { t: 'p', text: 'June to September. This is not flexible — outside that window the mountain roads become unreliable and Kaindy in particular can be unreachable. Early autumn is beautiful, with fewer people and golden larch colour, but nights get cold fast.' },
        { t: 'p', text: 'The lakes sit high enough to be 8–12°C cooler than the city, so a warm layer is worth packing even in July. Swimming is possible in Kolsai but the water is genuinely cold year-round.' },

        { t: 'h2', text: 'Documents and checkpoints' },
        { t: 'p', text: 'The route passes close to the Kyrgyz border and there are checkpoints on the way. Every traveler needs an original ID document — a passport for foreign citizens, a birth certificate for children. Digital ID through Kaspi or eGov is accepted for Kazakhstani citizens. This is not optional; people are turned back for missing documents.' },

        { t: 'h2', text: 'What to bring' },
        { t: 'ul', items: [
          'ID document — required, no exceptions.',
          'A warm layer and a windproof jacket, even in summer.',
          'Comfortable walking shoes for the Kaindy trail.',
          'Snacks and water — options along the route are limited.',
          'Cash for horse or boat rental on site.',
        ] },

        { t: 'h2', text: 'Tour options and prices' },
        { t: 'p', text: 'Group departures covering Kolsai, Kaindy and the Black Canyon viewpoint start at 13,990 ₸ per person, including the UAZ transfer and park fees. A six-location express version adding the Charyn canyons runs 17,990 ₸. Private tours are priced per vehicle instead, which makes sense for families or anyone who wants to control the departure time and pace.' },
        { t: 'p', text: 'Message us on WhatsApp with your dates — we will tell you which departures are running and whether the one-day or two-day version fits what you want to see.' },
      ],
    },
    ru: {
      title: 'Озёра Кольсай и Каинды: полный гид',
      metaTitle: 'Кольсай и Каинды из Алматы — полный гид по поездке',
      metaDescription:
        'Как поехать на Кольсай и Каинды из Алматы: время в пути, затонувший лес, переезд на УАЗе, поход на Кольсай-2, сезон, что взять и цены туров.',
      excerpt:
        'Два совершенно разных озера в паре километров друг от друга — изумрудное в еловом лесу и с затонувшим лесом. Как посмотреть оба нормально.',
      body: [
        { t: 'p', text: 'Именно эти два озера делают Алматинскую область местом из списков желаний. Они лежат рядом, у села Саты, примерно в пяти часах к востоку от города, но ощущаются совершенно по-разному: Кольсай — глубокое зелёное озеро в еловом лесу, а Каинды — затопленная долина, где из бирюзовой воды торчат сухие стволы.' },

        { t: 'h2', text: 'Кольсай: озёр три, а не одно' },
        { t: 'p', text: 'Большинство видит Кольсай-1 — нижнее озеро на высоте около 1 800 м. Именно к нему можно доехать на машине: есть тропа вдоль берега, прокат лодок и катамаранов, гостевые дома рядом. И только оно спокойно помещается в однодневную поездку.' },
        { t: 'p', text: 'Кольсай-2 находится примерно в 5 км выше по лесной тропе — это 3–4 часа ходьбы в одну сторону с реальным набором высоты. Кольсай-3 ещё выше, у границы с Кыргызстаном. Если хотите верхние озёра, планируйте ночёвку в Саты: втиснуть их в один день не получится.' },

        { t: 'h2', text: 'Каинды: затонувший лес' },
        { t: 'p', text: 'Каинды появилось после землетрясения 1911 года: оползень перегородил долину, еловый лес затопило, но холодная вода сохранила стволы. Поэтому серые «мачты» до сих пор стоят прямо из воды, которая меняет цвет от бирюзового до тёмно-синего в зависимости от света.' },
        { t: 'p', text: 'Озеро на высоте около 2 000 м и меньше, чем многие ожидают. Закладывайте примерно час на прогулку вокруг, фото и спуск к воде.' },
        { t: 'tip', text: 'Последние километры до Каинды — бездорожье. Обычная машина не проедет: пересадка на УАЗ, затем 20–30 минут пешком в гору от парковки. На месте можно арендовать лошадь, если идти тяжело. В наших турах переезд на УАЗе включён в стоимость.' },

        { t: 'h2', text: 'Сколько реально занимает поездка' },
        { t: 'p', text: 'Оценивайте расстояния трезво. От Алматы до Саты около 300 км и примерно пять часов дороги. Однодневная поездка на оба озера — это выезд около 05:00 и возвращение к 22:00. Так ездят постоянно и это работает, но день в дороге длинный.' },
        { t: 'ul', items: [
          'Один день, оба озера — выезд около 05:00, возвращение к 21:30–22:00.',
          'Один день, озёра плюс каньоны Чарына — очень ранний старт и жёсткий тайминг на точках.',
          'Два дня с ночёвкой в Саты — гораздо спокойнее и единственный вариант дойти до Кольсая-2.',
        ] },

        { t: 'h2', text: 'Когда ехать' },
        { t: 'p', text: 'С июня по сентябрь. Здесь вариантов нет: вне этого окна горные дороги ненадёжны, а Каинды может быть просто недоступно. Ранняя осень очень красива — меньше людей и золотой цвет, но ночи быстро становятся холодными.' },
        { t: 'p', text: 'Озёра расположены достаточно высоко, чтобы быть на 8–12 °C прохладнее города, поэтому тёплую вещь стоит взять даже в июле. В Кольсае можно купаться, но вода холодная круглый год.' },

        { t: 'h2', text: 'Документы и посты' },
        { t: 'p', text: 'Маршрут проходит недалеко от границы с Кыргызстаном, по дороге есть посты. Каждому нужен оригинал удостоверения личности: иностранцам — паспорт, детям — свидетельство о рождении. Гражданам Казахстана подойдёт цифровой документ в Kaspi или eGov. Это не формальность — без документов разворачивают.' },

        { t: 'h2', text: 'Что взять с собой' },
        { t: 'ul', items: [
          'Документ, удостоверяющий личность — обязательно.',
          'Тёплый слой и ветровку даже летом.',
          'Удобную обувь для тропы на Каинды.',
          'Перекус и воду — вариантов по дороге немного.',
          'Наличные на прокат лошади или лодки на месте.',
        ] },

        { t: 'h2', text: 'Варианты туров и цены' },
        { t: 'p', text: 'Групповые выезды с Кольсаем, Каинды и смотровой Чёрного каньона стартуют от 13 990 ₸ с человека, включая переезд на УАЗе и экологические сборы. Экспресс-версия на шесть локаций с каньонами Чарына — 17 990 ₸. Индивидуальные туры считаются за транспорт: это удобно семьям и тем, кто хочет сам выбрать время выезда и темп.' },
        { t: 'p', text: 'Напишите нам даты в WhatsApp — подскажем, какие выезды есть и что лучше подойдёт: однодневный вариант или двухдневный.' },
      ],
    },
  },
  {
    slug: 'assy-plateau-guide',
    image: '/images/assy-plateau.jpg',
    date: '2026-08-25',
    readMinutes: 6,
    en: {
      title: 'Assy Plateau: Kazakhstan’s High Pasture and Dark Sky',
      metaTitle: 'Assy Plateau from Almaty — Guide to the Plateau & Camping',
      metaDescription:
        'A guide to the Assy Plateau near Almaty: how to get there, the observatory, nomad summer pastures, camping under the stars, best season and what to pack.',
      excerpt:
        'A 2,500 m summer pasture where shepherds still graze horses, with one of the darkest night skies within reach of Almaty.',
      body: [
        { t: 'p', text: 'If Charyn is the region’s most photographed landscape, Assy is its most underrated. It is a broad high plateau about 100 km east of Almaty, reached by climbing through the Turgen gorge, and in summer it becomes exactly what the Kazakh steppe is supposed to look like — open grassland, herds of horses, and yurts belonging to families who move up here for the season.' },

        { t: 'h2', text: 'Getting there' },
        { t: 'p', text: 'The drive takes about four hours each way. The first part goes through the green Turgen gorge with its waterfalls; the upper section is a gravel road that climbs steeply onto the plateau. It is bumpy in places, which is why sturdier vehicles are used, but it is part of the experience rather than a hardship.' },

        { t: 'h2', text: 'The observatory' },
        { t: 'p', text: 'At about 2,750 m sits the Assy-Turgen observatory, built in the Soviet era and still operating. Its domes on an otherwise empty ridge make one of the most distinctive photographs in the region. You are looking from outside rather than touring the facility, but the setting is the point.' },

        { t: 'h2', text: 'Why the night sky matters here' },
        { t: 'p', text: 'This is the real reason to consider staying overnight. At 2,500 m with no towns nearby, there is almost no light pollution — on a clear moonless night the Milky Way is visible to the naked eye in a way most visitors have never seen. That is why the two-day camping version of this trip exists, and why people who take it rate it higher than the day trip.' },
        { t: 'tip', text: 'Nights on the plateau are cold even in July — often near freezing. If you camp, a warm sleeping bag matters more than anything else you pack. On our two-day trips the basic camp setup is included, but tents and sleeping bags are rented separately at a shop on the way out of the city.' },

        { t: 'h2', text: 'When to go' },
        { t: 'p', text: 'June to September, and that window is firm. Outside it the road over the plateau is closed by snow, the pastures are empty and there is nothing to see. Peak season is July and August, when the grass is green and the shepherd camps are up. September is quieter and clearer but noticeably colder at night.' },

        { t: 'h2', text: 'Day trip or overnight?' },
        { t: 'ul', items: [
          'Day trip (about 15,990 ₸ per person) — roughly 12 hours door to door, with 2–3 hours on the plateau. Enough to see it and take photographs.',
          'Two days with camping (about 29,990 ₸ per person) — sunset, the night sky, sunrise, and a morning on the plateau without rushing.',
        ] },
        { t: 'p', text: 'If the stars are what drew you here, the day trip will not deliver them — you are driving back down before dark. Choose the overnight.' },

        { t: 'h2', text: 'What to pack' },
        { t: 'ul', items: [
          'Warm clothing and a windproof layer. The plateau is exposed and the weather turns quickly.',
          'Sunscreen and sunglasses — UV is strong at altitude even on cool days.',
          'Insect repellent in mid-summer.',
          'Food and water. There are no shops on the plateau; buy on the way.',
          'A power bank, and a headlamp if you are staying the night.',
        ] },
        { t: 'p', text: 'Tell us your dates on WhatsApp and we will confirm which departures are running — the camping trips go on fixed dates rather than daily, and summer weekends fill first.' },
      ],
    },
    ru: {
      title: 'Плато Ассы: высокогорное пастбище и тёмное небо',
      metaTitle: 'Плато Ассы из Алматы — гид по поездке и кемпингу',
      metaDescription:
        'Гид по плато Ассы рядом с Алматы: как добраться, обсерватория, кочевые пастбища, ночёвка под звёздами, сезон и что взять с собой.',
      excerpt:
        'Летнее пастбище на 2 500 м, где до сих пор пасут лошадей, и одно из самых тёмных ночных небес рядом с Алматы.',
      body: [
        { t: 'p', text: 'Если Чарын — самый фотографируемый пейзаж региона, то Ассы — самый недооценённый. Это широкое высокогорное плато примерно в 100 км к востоку от Алматы, куда поднимаются через Тургеньское ущелье. Летом оно выглядит ровно так, как должна выглядеть казахская степь: открытые луга, табуны лошадей и юрты семей, которые поднимаются сюда на сезон.' },

        { t: 'h2', text: 'Как добраться' },
        { t: 'p', text: 'Дорога занимает около четырёх часов в одну сторону. Первая часть идёт через зелёное Тургеньское ущелье с водопадами, верхний участок — гравийная дорога с крутым подъёмом на плато. Местами трясёт, поэтому едут на подготовленном транспорте, но это скорее часть приключения, чем неудобство.' },

        { t: 'h2', text: 'Обсерватория' },
        { t: 'p', text: 'На высоте около 2 750 м стоит обсерватория Ассы-Тургень, построенная в советское время и работающая до сих пор. Её купола на пустом хребте дают один из самых узнаваемых кадров региона. Внутрь не водят, но смысл именно в виде снаружи.' },

        { t: 'h2', text: 'Почему здесь важно ночное небо' },
        { t: 'p', text: 'Это главная причина задуматься о ночёвке. На 2 500 м и без городов поблизости засветки практически нет: в ясную безлунную ночь Млечный Путь виден невооружённым глазом так, как большинство людей никогда не видели. Именно ради этого существует двухдневный вариант с кемпингом, и те, кто его выбирает, оценивают поездку выше однодневной.' },
        { t: 'tip', text: 'Ночи на плато холодные даже в июле — часто около нуля. Если ночуете, тёплый спальник важнее всего остального. В наших двухдневных турах базовый кемпинг включён, а палатки и спальники берут в прокате по дороге из города.' },

        { t: 'h2', text: 'Когда ехать' },
        { t: 'p', text: 'С июня по сентябрь, и это окно жёсткое. Вне его дорога через плато закрыта снегом, пастбища пустые и смотреть нечего. Пик — июль и август, когда трава зелёная и стоят чабанские стоянки. Сентябрь тише и прозрачнее, но заметно холоднее ночью.' },

        { t: 'h2', text: 'Один день или с ночёвкой?' },
        { t: 'ul', items: [
          'Однодневная поездка (около 15 990 ₸ с человека) — примерно 12 часов от двери до двери, из них 2–3 часа на плато. Достаточно, чтобы увидеть и поснимать.',
          'Два дня с кемпингом (около 29 990 ₸ с человека) — закат, звёздное небо, рассвет и утро на плато без спешки.',
        ] },
        { t: 'p', text: 'Если вы едете ради звёзд, однодневный вариант их не даст — вы будете спускаться до темноты. Берите с ночёвкой.' },

        { t: 'h2', text: 'Что взять' },
        { t: 'ul', items: [
          'Тёплую одежду и ветрозащиту. Плато открытое, погода меняется быстро.',
          'Крем от солнца и очки — на высоте УФ сильный даже в прохладный день.',
          'Средство от насекомых в середине лета.',
          'Еду и воду. На плато магазинов нет, покупайте по дороге.',
          'Power bank, а при ночёвке — налобный фонарь.',
        ] },
        { t: 'p', text: 'Напишите даты в WhatsApp — подтвердим, какие выезды идут. Кемпинговые туры проводятся по фиксированным датам, и летние выходные разбирают первыми.' },
      ],
    },
  },
  {
    slug: 'altyn-emel-singing-dunes-guide',
    image: '/images/singing-dunes.jpg',
    date: '2026-08-25',
    readMinutes: 6,
    en: {
      title: 'Altyn-Emel and the Singing Dunes: What to Expect',
      metaTitle: 'Altyn-Emel & the Singing Dunes from Almaty — Travel Guide',
      metaDescription:
        'Visiting Altyn-Emel National Park from Almaty: the Singing Dune, the striped Aktau mountains, Katutau, the 700-year-old willow, park permits, season and tours.',
      excerpt:
        'A humming sand dune, candy-striped desert mountains and volcanic rock — the strangest landscape within reach of Almaty.',
      body: [
        { t: 'p', text: 'Altyn-Emel is Kazakhstan’s flagship desert park, spread over 4,600 square kilometres between the Ili River and the Aktau ridge. Nothing about it looks like the green gorges near Almaty. It is dry, enormous and empty, and it holds the three sights that make the long drive worth it.' },

        { t: 'h2', text: 'The Singing Dune' },
        { t: 'p', text: 'Aygaiqum rises about 150 m out of otherwise flat desert — a single enormous dune that has stayed in the same place for centuries because of how the wind funnels between the mountains. Climbing the ridge takes 20–40 minutes in soft sand and gives you a view across the Ili valley.' },
        { t: 'p', text: 'The "singing" is real but conditional: when the sand is dry and a breeze moves the upper layer, it produces a low humming vibration you feel as much as hear. After rain, or on a still day, it stays silent.' },
        { t: 'tip', text: 'Be honest with yourself about expectations — the sound is not guaranteed and no guide can promise it. The dune and the landscape are worth the trip regardless. And you will get sand everywhere; that is simply part of the day.' },

        { t: 'h2', text: 'Aktau: the striped mountains' },
        { t: 'p', text: 'Deeper into the park, the Aktau "White Mountains" look genuinely artificial — layered bands of pink, white, red and pale green laid down when this was a seabed millions of years ago, then lifted and eroded into ridges. This is the most photographed part of Altyn-Emel and, for many visitors, better than the dune.' },

        { t: 'h2', text: 'Katutau and the old willow' },
        { t: 'p', text: 'Katutau is the opposite: black, jagged volcanic rock, twisted into shapes that feel lunar. Between the sights, tours usually stop at a solitary willow said to be around 700 years old, standing alone in the steppe — a small thing that photographs beautifully.' },

        { t: 'h2', text: 'One day or two?' },
        { t: 'p', text: 'This is the key planning decision, and the distances make it for you.' },
        { t: 'ul', items: [
          'One day (from 17,990 ₸ per person) — the Singing Dune only. About four hours of driving each way, roughly 13 hours door to door. Aktau and Katutau are simply too far to add.',
          'Two days with an overnight (from 55,990 ₸ per person) — the dune on day one, then Aktau, Katutau and the willow on day two. Accommodation, breakfast and lunch included.',
        ] },
        { t: 'p', text: 'If the striped mountains are what you came for, the one-day trip will not include them. That catches people out, so it is worth being clear about before booking.' },

        { t: 'h2', text: 'Permits and practicalities' },
        { t: 'p', text: 'Altyn-Emel is a national park, so entry involves registration at Basshi village before you continue to the sights. On organised tours this and the park fees are handled for you. Inside the park the tracks are rough, so an off-road transfer is used for the dune and the mountain sections.' },

        { t: 'h2', text: 'Season and what to bring' },
        { t: 'p', text: 'April to October. Midsummer is very hot in open desert with no shade, so spring and autumn are more comfortable. Bring a hat, sunglasses, sunscreen, more water than feels necessary, closed shoes you do not mind filling with sand, and a windproof layer — the Ili valley can be surprisingly breezy.' },
        { t: 'p', text: 'Message us on WhatsApp and we will tell you which departures are scheduled, and whether the one-day or two-day version matches what you actually want to see.' },
      ],
    },
    ru: {
      title: 'Алтын-Эмель и Поющий бархан: чего ожидать',
      metaTitle: 'Алтын-Эмель и Поющий бархан из Алматы — гид по поездке',
      metaDescription:
        'Поездка в нацпарк Алтын-Эмель из Алматы: Поющий бархан, полосатые горы Актау, Катутау, 700-летняя ива, оформление в парке, сезон и туры.',
      excerpt:
        'Гудящий бархан, полосатые пустынные горы и вулканические скалы — самый странный пейзаж в досягаемости от Алматы.',
      body: [
        { t: 'p', text: 'Алтын-Эмель — главный пустынный парк Казахстана, около 4 600 км² между рекой Или и хребтом Актау. Здесь всё не похоже на зелёные ущелья рядом с Алматы: сухо, огромно и пусто. И здесь есть три вещи, ради которых стоит долгая дорога.' },

        { t: 'h2', text: 'Поющий бархан' },
        { t: 'p', text: 'Айгайкум поднимается примерно на 150 м посреди плоской пустыни — одна огромная дюна, которая веками остаётся на месте из-за того, как ветер проходит между горами. Подъём по гребню занимает 20–40 минут по мягкому песку и открывает вид на долину Или.' },
        { t: 'p', text: '«Пение» реально, но с условием: когда песок сухой и ветер двигает верхний слой, возникает низкая вибрация, которую скорее чувствуешь, чем слышишь. После дождя или в безветренный день бархан молчит.' },
        { t: 'tip', text: 'Будьте честны с ожиданиями: звук не гарантирован, и ни один гид не может его обещать. Бархан и пейзаж стоят поездки в любом случае. И песок будет везде — это просто часть дня.' },

        { t: 'h2', text: 'Актау: полосатые горы' },
        { t: 'p', text: 'Глубже в парке горы Актау выглядят почти искусственно: слоистые полосы розового, белого, красного и бледно-зелёного — отложения древнего морского дна, поднятые и размытые в хребты. Это самая фотографируемая часть Алтын-Эмеля, и многим она нравится больше бархана.' },

        { t: 'h2', text: 'Катутау и старая ива' },
        { t: 'p', text: 'Катутау — полная противоположность: чёрные острые вулканические скалы причудливых форм, почти лунный пейзаж. Между локациями туры обычно останавливаются у одинокой ивы, которой, по преданию, около 700 лет — небольшая деталь, но кадр получается отличный.' },

        { t: 'h2', text: 'Один день или два?' },
        { t: 'p', text: 'Это главное решение при планировании, и расстояния решают за вас.' },
        { t: 'ul', items: [
          'Один день (от 17 990 ₸ с человека) — только Поющий бархан. Около четырёх часов дороги в одну сторону, примерно 13 часов от двери до двери. Актау и Катутау добавить физически некуда.',
          'Два дня с ночёвкой (от 55 990 ₸ с человека) — бархан в первый день, затем Актау, Катутау и ива во второй. Проживание, завтрак и обед включены.',
        ] },
        { t: 'p', text: 'Если вы едете ради полосатых гор — в однодневный тур они не входят. На этом часто спотыкаются, поэтому лучше понимать заранее.' },

        { t: 'h2', text: 'Оформление и практика' },
        { t: 'p', text: 'Алтын-Эмель — национальный парк, поэтому въезд предполагает регистрацию в селе Басши перед выездом к локациям. В организованных турах это и сборы парка берут на себя. Внутри парка дороги тяжёлые, поэтому к бархану и в горы едут на внедорожном транспорте.' },

        { t: 'h2', text: 'Сезон и что взять' },
        { t: 'p', text: 'С апреля по октябрь. В разгар лета в открытой пустыне очень жарко и нет тени, поэтому весна и осень комфортнее. Возьмите головной убор, очки, крем от солнца, воды больше, чем кажется нужным, закрытую обувь, которую не жалко засыпать песком, и ветровку — в долине Или бывает неожиданно ветрено.' },
        { t: 'p', text: 'Напишите в WhatsApp — расскажем, какие выезды запланированы и что подойдёт: однодневный вариант или двухдневный.' },
      ],
    },
  },
  {
    slug: 'kazakhstan-travel-tips',
    image: '/images/almaty-city-tour.jpg',
    date: '2026-08-25',
    readMinutes: 8,
    en: {
      title: 'Kazakhstan Travel Tips: What First-Time Visitors Should Know',
      metaTitle: 'Kazakhstan Travel Tips — Money, SIM, Safety & Language (2026)',
      metaDescription:
        'Practical tips for visiting Kazakhstan: currency and payments, SIM cards and internet, safety, language, tipping, taxis, what to wear and how to get around Almaty.',
      excerpt:
        'Money, phones, safety, language and the small practical things nobody tells you before landing in Almaty.',
      body: [
        { t: 'p', text: 'Kazakhstan is straightforward to travel in, but a few things work differently enough to catch first-time visitors out. Here is what actually matters in practice.' },

        { t: 'h2', text: 'Visas and entry' },
        { t: 'p', text: 'Kazakhstan is visa-free for citizens of many countries for stays of up to 30 days, and the list has expanded considerably in recent years. Rules do change, so check the current requirements for your nationality on an official government source before booking flights — do not rely on a blog post, including this one, as your final answer.' },
        { t: 'p', text: 'Keep your passport with you when travelling outside the city. Some routes east of Almaty pass border-zone checkpoints where an original document is required.' },

        { t: 'h2', text: 'Money and payments' },
        { t: 'p', text: 'The currency is the tenge (₸, KZT). Kazakhstan is remarkably cashless — card payments and QR transfers work almost everywhere in Almaty, including small cafés and market stalls. The local app Kaspi dominates daily life, though it generally requires a local bank account.' },
        { t: 'p', text: 'Bring some cash anyway. Once you leave the city — national park entrances, horse rental at the lakes, roadside cafés, village guesthouses — cash is often the only option. Exchange offices in Almaty give better rates than the airport.' },

        { t: 'h2', text: 'SIM cards and internet' },
        { t: 'p', text: 'A local SIM is cheap and easy to buy with your passport at any operator shop or the airport. Coverage in Almaty is excellent and data is inexpensive. In the mountains it becomes patchy: expect no signal at Kaindy, on the Assy Plateau or in parts of Charyn. Download offline maps before you go.' },

        { t: 'h2', text: 'Language' },
        { t: 'p', text: 'Kazakh is the state language and Russian is widely spoken in Almaty — most daily interaction happens in one of the two. English is common among younger people, in hotels and in tourism, but far less so with taxi drivers, market vendors or in villages. A translation app covers the gap comfortably.' },
        { t: 'ul', items: [
          'Salem / Сәлем — hello (informal)',
          'Rakhmet / Рахмет — thank you',
          'Kansha? / Қанша? — how much?',
          '"Spasibo" and "skolko" work equally well in Russian.',
        ] },

        { t: 'h2', text: 'Safety' },
        { t: 'p', text: 'Almaty is a comfortable city to walk around, including in the evening, and violent crime against visitors is rare. Normal city sense applies — watch your belongings in crowded markets and on public transport. The genuine risks here are outdoors rather than urban: altitude, sudden weather changes in the mountains, and cold water in the lakes.' },

        { t: 'h2', text: 'Getting around Almaty' },
        { t: 'p', text: 'The city has a small but clean metro, extensive buses, and cheap ride-hailing through Yandex Go and inDrive — most visitors use apps rather than hailing cars on the street. The centre is walkable and laid out on a grid, with the mountains always to the south, which makes it hard to get properly lost.' },

        { t: 'h2', text: 'What to wear' },
        { t: 'p', text: 'Layers, always. Almaty can be 30°C while a lake at 2,000 m is 15°C and windy, on the same day. Kazakhstan is secular and dress is casual and modern; there are no particular restrictions for visitors, though modest clothing is appropriate when visiting mosques.' },

        { t: 'h2', text: 'Tipping and etiquette' },
        { t: 'ul', items: [
          'Tipping is not obligatory. In restaurants 10% is generous and appreciated; some add a service charge already.',
          'Hospitality is taken seriously — if you are offered tea in a home or a yurt, accepting is the polite response.',
          'Remove your shoes when entering someone’s home.',
          'Bargaining is normal at bazaars, not in shops.',
        ] },

        { t: 'h2', text: 'Altitude' },
        { t: 'p', text: 'Several popular trips go above 2,500 m, and Shymbulak’s cable car reaches 3,200 m. Most people feel nothing more than mild breathlessness, but take the first day gently, drink water and avoid a heavy hike immediately after arriving from sea level.' },

        { t: 'h2', text: 'Booking tours' },
        { t: 'p', text: 'Most local operators, ourselves included, work through WhatsApp rather than online booking systems. That sounds informal to visitors used to instant confirmation, but it is simply how business is done here — you get a real person, faster answers and a route that can be adjusted to your dates.' },
        { t: 'p', text: 'If you are planning a trip around Almaty, message us and we will tell you honestly what is open in your travel window and what is worth your time.' },
      ],
    },
    ru: {
      title: 'Казахстан: практические советы для путешественников',
      metaTitle: 'Советы туристам в Казахстане — деньги, связь, безопасность',
      metaDescription:
        'Практические советы для поездки в Казахстан: валюта и оплата, SIM-карта и интернет, безопасность, язык, чаевые, такси, что надеть и как передвигаться по Алматы.',
      excerpt:
        'Деньги, связь, безопасность, язык и мелочи, о которых не рассказывают перед прилётом в Алматы.',
      body: [
        { t: 'p', text: 'Путешествовать по Казахстану просто, но несколько вещей устроены достаточно иначе, чтобы застать врасплох в первый раз. Вот что действительно важно на практике.' },

        { t: 'h2', text: 'Виза и въезд' },
        { t: 'p', text: 'Казахстан безвизовый для граждан многих стран на срок до 30 дней, и список за последние годы заметно расширился. Правила меняются, поэтому проверяйте актуальные требования для вашего гражданства на официальном источнике до покупки билетов — не полагайтесь на статью в блоге, включая эту.' },
        { t: 'p', text: 'За городом держите документ при себе. Некоторые маршруты к востоку от Алматы проходят посты в приграничной зоне, где нужен оригинал.' },

        { t: 'h2', text: 'Деньги и оплата' },
        { t: 'p', text: 'Валюта — тенге (₸, KZT). Казахстан на удивление безналичный: карты и QR-переводы работают почти везде в Алматы, включая небольшие кафе и точки на базаре. Повседневную жизнь во многом определяет Kaspi, но для него обычно нужен местный счёт.' },
        { t: 'p', text: 'Наличные всё равно возьмите. За городом — входы в нацпарки, прокат лошадей у озёр, придорожные кафе, гостевые дома в сёлах — часто принимают только их. В обменниках города курс лучше, чем в аэропорту.' },

        { t: 'h2', text: 'SIM-карта и интернет' },
        { t: 'p', text: 'Местная SIM стоит недорого и покупается по паспорту в любом салоне или в аэропорту. В Алматы покрытие отличное, интернет дешёвый. В горах связь пропадает: на Каинды, на плато Ассы и местами на Чарыне сигнала не будет. Скачайте офлайн-карты заранее.' },

        { t: 'h2', text: 'Язык' },
        { t: 'p', text: 'Государственный язык — казахский, в Алматы широко используется русский, и повседневное общение идёт на одном из двух. Английский распространён среди молодёжи, в отелях и туризме, но гораздо реже у таксистов, на базаре и в сёлах. Приложение-переводчик закрывает разрыв.' },
        { t: 'ul', items: [
          'Сәлем — привет',
          'Рахмет — спасибо',
          'Қанша? — сколько?',
          'На русском «спасибо» и «сколько» работают так же.',
        ] },

        { t: 'h2', text: 'Безопасность' },
        { t: 'p', text: 'По Алматы комфортно гулять, в том числе вечером, и преступления против туристов редки. Работают обычные городские правила: следите за вещами на людных базарах и в транспорте. Настоящие риски здесь не городские, а природные — высота, резкая смена погоды в горах и холодная вода в озёрах.' },

        { t: 'h2', text: 'Как передвигаться по Алматы' },
        { t: 'p', text: 'В городе есть небольшое, но чистое метро, много автобусов и дешёвые такси через Яндекс Go и inDrive — большинство пользуется приложениями, а не ловит машину на улице. Центр удобен для прогулок и построен сеткой, а горы всегда на юге, поэтому заблудиться сложно.' },

        { t: 'h2', text: 'Что надеть' },
        { t: 'p', text: 'Всегда слоями. В Алматы может быть +30 °C, а на озере на 2 000 м в тот же день +15 °C и ветер. Казахстан светский, одежда обычная и современная, особых ограничений для туристов нет, но при посещении мечетей уместна скромная одежда.' },

        { t: 'h2', text: 'Чаевые и этикет' },
        { t: 'ul', items: [
          'Чаевые не обязательны. В ресторане 10 % — щедро и приятно; иногда сервис уже включён в счёт.',
          'К гостеприимству относятся серьёзно: если предлагают чай в доме или юрте, вежливо согласиться.',
          'В гостях обувь снимают.',
          'Торговаться нормально на базаре, но не в магазинах.',
        ] },

        { t: 'h2', text: 'Высота' },
        { t: 'p', text: 'Несколько популярных поездок идут выше 2 500 м, а канатная дорога Шымбулака поднимает на 3 200 м. Большинство ощущает разве что лёгкую одышку, но первый день лучше провести спокойно, пить воду и не идти в тяжёлый поход сразу после прилёта с равнины.' },

        { t: 'h2', text: 'Как бронируют туры' },
        { t: 'p', text: 'Большинство местных операторов, включая нас, работает через WhatsApp, а не через онлайн-системы бронирования. Для приезжих, привыкших к мгновенному подтверждению, это звучит неформально, но так здесь принято: вы получаете живого человека, быстрые ответы и маршрут, который можно подстроить под ваши даты.' },
        { t: 'p', text: 'Если планируете поездку вокруг Алматы — напишите нам, и мы честно скажем, что открыто в ваши даты и что действительно стоит времени.' },
      ],
    },
  },
  {
    slug: 'almaty-3-day-itinerary',
    image: '/images/big-almaty-lake.jpg',
    date: '2026-08-25',
    readMinutes: 7,
    en: {
      title: '3 Days in Almaty: A Realistic Itinerary',
      metaTitle: '3 Days in Almaty — Itinerary for a Perfect Short Trip',
      metaDescription:
        'A realistic 3-day Almaty itinerary: the city and mountains on day one, Charyn Canyon on day two, alpine lakes on day three. Plus 4 and 5-day variations.',
      excerpt:
        'Three days is enough for the city, a canyon and a mountain lake — if you order them correctly. Here is the plan that works.',
      body: [
        { t: 'p', text: 'Three days is the most common length of stay in Almaty, and it is genuinely enough to see the best of the region — provided you accept one rule: the big landscapes are 3–5 hours away, so each of them costs a full day. Trying to fit two distant destinations into one day is where short trips go wrong.' },
        { t: 'p', text: 'This itinerary assumes you arrive the night before day one and leave on the evening of day three or later.' },

        { t: 'h2', text: 'Day 1 — the city and the mountains above it' },
        { t: 'p', text: 'Start close to home while you adjust. Morning: go up to Medeu, the high-altitude skating rink, then continue to Shymbulak and take the cable car to Talgar Pass at 3,200 m. Go in the morning — clouds build over the peaks after midday.' },
        { t: 'p', text: 'Afternoon: come back down for Panfilov Park and Zenkov Cathedral, then the Green Bazaar. Finish at sunset on Kok-Tobe for the city panorama.' },
        { t: 'p', text: 'This day doubles as gentle altitude acclimatisation before the higher trips.' },

        { t: 'h2', text: 'Day 2 — Charyn Canyon' },
        { t: 'p', text: 'The single most dramatic landscape per hour of driving. Roughly 3–3.5 hours each way, with the Valley of Castles trail — 2 km down between red sandstone towers to the Charyn River — as the centrepiece, plus the Moon and Black canyon viewpoints.' },
        { t: 'p', text: 'Expect an early departure and a return in the evening. Bring far more water than feels necessary; there is no shade in the canyon.' },

        { t: 'h2', text: 'Day 3 — pick your lake' },
        { t: 'p', text: 'Here you have a genuine choice, and it depends on how much driving you can still face.' },
        { t: 'ul', items: [
          'Kolsai and Kaindy (full day, ~05:00 to 22:00) — the famous alpine lakes and the sunken forest. The most rewarding, but a long day in a vehicle.',
          'Big Almaty Lake (half day) — a glacial lake at 2,511 m barely an hour from the centre. Best if you have an evening flight.',
          'Issyk Lake and Bear Waterfall (about 10 hours) — a gentler middle option with short walks.',
        ] },
        { t: 'p', text: 'If your flight leaves on day three, take Big Almaty Lake. If you have the full day, take Kolsai and Kaindy.' },

        { t: 'h2', text: 'If you have four days' },
        { t: 'p', text: 'Add the Assy Plateau — a 2,500 m summer pasture with almost no tourists and an observatory on the ridge. Or, if the timing works, do the two-day Assy trip with a night of camping; the dark sky there is the thing people remember most.' },

        { t: 'h2', text: 'If you have five days' },
        { t: 'p', text: 'Add Altyn-Emel: the Singing Dune, the striped Aktau mountains and the volcanic Katutau. Note that Aktau and Katutau require the two-day version — a single day only reaches the dune.' },
        { t: 'p', text: 'An alternative fifth day is the Ethno Village for the cultural side, or horseback riding in the Alatau foothills.' },

        { t: 'h2', text: 'Practical notes for a short trip' },
        { t: 'ul', items: [
          'Order matters: city first, then the far trips. It gives you altitude acclimatisation and a buffer if weather turns.',
          'Do not schedule a distant trip on your departure day. Roads back can be slower than planned.',
          'Season decides your options — the alpine lakes and Assy only work June to September.',
          'Carry your passport on every trip outside the city.',
          'Group departures are the cheapest way to do all of this, from 8,990 ₸ per person; private tours give you control over departure time and pace.',
        ] },

        { t: 'h2', text: 'What this costs' },
        { t: 'p', text: 'Done with group tours, the three days above come to roughly 45,000–50,000 ₸ per person in tour costs — a city tour, Charyn, and the lakes — before food and cable car tickets. Private versions cost more but are priced per vehicle, so they get better value the larger your group.' },
        { t: 'p', text: 'Send us your dates on WhatsApp and we will map out the three days around what is actually running that week.' },
      ],
    },
    ru: {
      title: '3 дня в Алматы: реалистичный маршрут',
      metaTitle: '3 дня в Алматы — маршрут на короткую поездку',
      metaDescription:
        'Реалистичный маршрут на 3 дня в Алматы: город и горы в первый день, Чарынский каньон во второй, горные озёра в третий. Плюс варианты на 4 и 5 дней.',
      excerpt:
        'Трёх дней хватает на город, каньон и горное озеро — если выстроить их в правильном порядке. Вот рабочий план.',
      body: [
        { t: 'p', text: 'Три дня — самая частая длительность поездки в Алматы, и этого действительно хватает, чтобы увидеть лучшее в регионе. При одном условии: большие пейзажи находятся в 3–5 часах езды, поэтому каждый из них стоит целого дня. Попытка втиснуть два дальних направления в один день — главная ошибка коротких поездок.' },
        { t: 'p', text: 'Маршрут рассчитан на то, что вы прилетаете накануне первого дня и улетаете вечером третьего или позже.' },

        { t: 'h2', text: 'День 1 — город и горы над ним' },
        { t: 'p', text: 'Начните рядом, пока привыкаете. Утром — подъём на Медеу, затем Шымбулак и канатная дорога до Талгарского перевала на 3 200 м. Именно утром: после полудня над вершинами собираются облака.' },
        { t: 'p', text: 'После обеда — парк Панфилова и Вознесенский собор, затем Зелёный базар. Завершение — закат на Кок-Тобе с панорамой города.' },
        { t: 'p', text: 'Этот день заодно работает как мягкая акклиматизация перед более высокими поездками.' },

        { t: 'h2', text: 'День 2 — Чарынский каньон' },
        { t: 'p', text: 'Максимум впечатлений на час дороги. Примерно 3–3,5 часа в одну сторону, главное — тропа по Долине замков: 2 км вниз между красными башнями к реке Чарын, плюс смотровые Лунного и Чёрного каньонов.' },
        { t: 'p', text: 'Выезд ранний, возвращение вечером. Воды берите заметно больше, чем кажется нужным: тени в каньоне нет.' },

        { t: 'h2', text: 'День 3 — выбираете озеро' },
        { t: 'p', text: 'Здесь есть реальный выбор, и зависит он от того, сколько дороги вы ещё готовы вытерпеть.' },
        { t: 'ul', items: [
          'Кольсай и Каинды (полный день, ~05:00–22:00) — знаменитые горные озёра и затонувший лес. Самое сильное впечатление, но длинный день в дороге.',
          'БАО (полдня) — ледниковое озеро на 2 511 м в часе от центра. Лучший вариант, если вечером самолёт.',
          'Иссык и Медвежий водопад (около 10 часов) — спокойная середина с лёгкими прогулками.',
        ] },
        { t: 'p', text: 'Если на третий день вылет — берите БАО. Если день свободен целиком — Кольсай и Каинды.' },

        { t: 'h2', text: 'Если есть четыре дня' },
        { t: 'p', text: 'Добавьте плато Ассы — летнее пастбище на 2 500 м почти без туристов и с обсерваторией на хребте. Или, если совпадают даты, возьмите двухдневный вариант с ночёвкой: тёмное небо там запоминается больше всего.' },

        { t: 'h2', text: 'Если есть пять дней' },
        { t: 'p', text: 'Добавьте Алтын-Эмель: Поющий бархан, полосатые горы Актау и вулканический Катутау. Учтите, что Актау и Катутау доступны только в двухдневном варианте — за один день успевают лишь к бархану.' },
        { t: 'p', text: 'Альтернатива на пятый день — этно-аул ради культурной части или катание на лошадях в предгорьях Алатау.' },

        { t: 'h2', text: 'Практика для короткой поездки' },
        { t: 'ul', items: [
          'Порядок важен: сначала город, потом дальние поездки. Это даёт акклиматизацию и запас на случай погоды.',
          'Не ставьте дальнюю поездку на день вылета. Дорога обратно бывает медленнее плана.',
          'Сезон решает: горные озёра и Ассы работают только с июня по сентябрь.',
          'Документ берите на каждую поездку за город.',
          'Групповые выезды — самый доступный способ всё это увидеть, от 8 990 ₸ с человека; индивидуальные дают контроль над временем и темпом.',
        ] },

        { t: 'h2', text: 'Сколько это стоит' },
        { t: 'p', text: 'На групповых турах три описанных дня выходят примерно в 45 000–50 000 ₸ с человека за сами туры — обзорная, Чарын и озёра — без еды и билетов на канатные дороги. Индивидуальные дороже, но считаются за транспорт, поэтому чем больше компания, тем выгоднее.' },
        { t: 'p', text: 'Пришлите даты в WhatsApp — соберём три дня под то, что реально идёт на этой неделе.' },
      ],
    },
  },
];
