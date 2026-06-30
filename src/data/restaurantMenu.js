export const breakfastCategories = [
  { id: "breakfast", label: "Завтраки" },
  { id: "main-menu", label: "Основное меню" },
  { id: "kids-menu", label: "Детское меню" },
  { id: "bar", label: "Барная карта" }
];

export const BREAKFAST_MENU_DATA = {
  combo: {
    title: "Комплексный завтрак",
    price: "1300 ₽",
    subtitle: "Время подачи: с 8:00 до 11:00",
    sections: [
      {
        label: "Блюдо №1 на выбор:",
        items: [
          "глазунья с хрустящим беконом",
          "скрэмбл со слабосолёной неркой",
          "омлет с вялеными томатами"
        ]
      },
      {
        label: "Блюдо №2 на выбор:",
        items: [
          "овсяная каша с бананом и арахисовой пастой",
          "рисовая каша на кокосовом молоке с вишней",
          "гречневая каша с яйцом и щёчками"
        ]
      },
      {
        label: "Напиток на выбор:",
        items: [
          "Кофе: эспрессо / доппио / американо / флэт уайт / капучино / латте",
          "Чай: ассам / сенча / молочный улун / ромашка / эрл грей / жасмин"
        ]
      }
    ]
  },
  sections: [
    // ==========================================
    // КАТЕГОРИЯ: ЗАВТРАКИ (breakfast)
    // ==========================================
    {
      title: "Яйца",
      category: "breakfast",
      items: [
        { name: "Омлет с вялеными томатами и устричным соусом", weight: "185 г", price: "560 ₽" },
        { name: "Глазунья с хрустящим беконом, фасолью и маринованным луком", weight: "185 г", price: "620 ₽" },
        { name: "Скрэмбл со слабосолёной неркой и семечками кимчи", weight: "190 г", price: "750 ₽" }
      ]
    },
    {
      title: "Сытное",
      category: "breakfast",
      items: [
        { name: "Сендвич с тунцом, яйцом и маринованным огурцом", weight: "250 г", price: "620 ₽" },
        { name: "Сендвич с ветчиной, сыром чеддер и вялеными томатами", weight: "250 г", price: "650 ₽" },
        { name: "Сырник с вишней и кокосовым кремом", weight: "290 г", price: "680 ₽" }
      ]
    },
    {
      title: "Каши",
      category: "breakfast",
      items: [
        { name: "Овсяная каша с бананом, арахисовой пастой и кедровыми орехами", weight: "350 г", price: "540 ₽" },
        { name: "Рисовая каша на кокосовом молоке с вишней и семенами чиа", weight: "350 г", price: "610 ₽" },
        { name: "Гречневая каша с томлёными щёчками, яйцом и пармезаном", weight: "260 г", price: "640 ₽" }
      ]
    },

    // ==========================================
    // КАТЕГОРИЯ: ОСНОВНОЕ МЕНЮ (main-menu)
    // ==========================================
    {
      title: "Закуски",
      category: "main-menu",
      items: [
        { name: "Овощной сет: болгарский перец, черри, огурец и редис", weight: "260 г", price: "420 ₽" },
        { name: "Паштет на бородинском хлебе с брусникой и кедровыми орехами", weight: "170 г", price: "560 ₽" },
        { name: "Разносолы: капуста, огурцы, томаты, мочёные яблоки и брусника", weight: "330 г", price: "630 ₽" },
        { name: "Грузди в сметане с укропом и маринованным луком", weight: "160 г", price: "790 ₽" },
        { name: "Картофельные оладьи с неркой, зеленью и сметаной", weight: "240 г", price: "790 ₽" },
        { name: "Тартар из говядины с горчичным кремом, каперсами и картофелем фри", weight: "250 г", price: "870 ₽" },
        { name: "Сугудай из муксуна с маринованным луком, мочёной смородиной и тартином", weight: "200 г", price: "980 ₽" },
        { name: "Сугудай из нерки с маринованным луком, мочёной смородиной и тартином", weight: "200 г", price: "980 ₽" },
        { name: "Сырный сет: пармезан, грецкий орех, кешью, миндаль и оливки", weight: "150 г", price: "1160 ₽" },
        { name: "Мясной сет: ростбиф, копчёный окорок, оленина, сало, горчица и сливочный хрен", weight: "200 г", price: "1190 ₽" },
        { name: "Хлебная корзина", weight: "300 г", price: "380 ₽" }
      ]
    },
    {
      title: "Салаты",
      category: "main-menu",
      items: [
        { name: "Винегрет с квашеной капустой и ароматным маслом", weight: "220 г", price: "540 ₽" },
        { name: "Мимоза с тунцом и семечками кимчи", weight: "190 г", price: "630 ₽" },
        { name: "Фета со свежими овощами и соусом цитронет", weight: "290 г", price: "650 ₽" },
        { name: "Оливье с ростбифом и зелёным майо", weight: "220 г", price: "720 ₽" },
        { name: "Тигровые креветки с цукини, огурцом и горчично-манговым соусом", weight: "200 г", price: "820 ₽" },
        { name: "Хрустящая курица с черри, пармезаном и соусом тартар", weight: "290 г", price: "820 ₽" },
        { name: "Ростбиф с печёным картофелем, маринованным огурцом, черри и горчичным кремом", weight: "310 г", price: "870 ₽" }
      ]
    },
    {
      title: "Пироги",
      category: "main-menu",
      items: [
        { name: "Расстегай с говядиной, трюфельным демиглясом и маринованным перцем", weight: "310 г", price: "840 ₽" },
        { name: "Расстегай с муксуном, неркой и сливочным соусом с хондаши", weight: "310 г", price: "890 ₽" }
      ]
    },
    {
      title: "Супы",
      category: "main-menu",
      items: [
        { name: "Бульон с куриными колбасками и лапшой", weight: "320 г", price: "460 ₽" },
        { name: "Окрошка с ростбифом на квасе или кефире", weight: "430 г", price: "590 ₽" },
        { name: "Сливочная уха с неркой и муксуном", weight: "340 г", price: "670 ₽" },
        { name: "Борщ с томлёными щёчками, салом и бородинским хлебом", weight: "520 г", price: "720 ₽" }
      ]
    },
    {
      title: "Вареники",
      category: "main-menu",
      items: [
        { name: "Вареник с творогом, вишней, сметаной и малиной", weight: "330 г", price: "620 ₽" },
        { name: "Вареник с томлёными щёчками и вяленой олениной", weight: "290 г", price: "680 ₽" },
        { name: "Вареник с неркой, муксуном и стружкой бонито", weight: "285 г", price: "720 ₽" }
      ]
    },
    {
      title: "Основные блюда",
      category: "main-menu",
      items: [
        { name: "Нерка с овощным рагу и семечками кимчи", weight: "330 г", price: "780 ₽" },
        { name: "Томлёные щёчки с гречкой, маринованным огурцом и попкорном из гречки", weight: "315 г", price: "940 ₽" },
        { name: "Бефстроганов с картофельным пюре и трюфельным демиглясом", weight: "340 г", price: "1140 ₽" },
        { name: "Вырезка быка с трюфельным демиглясом и маринованным перцем", weight: "220 г", price: "1380 ₽" },
        { name: "Куриная грудка су-вид", weight: "150 г", price: "460 ₽" },
        { name: "Запечённая нерка", weight: "100 г", price: "540 ₽" }
      ]
    },
    {
      title: "Гарниры",
      category: "main-menu",
      items: [
        { name: "Картофельное пюре", weight: "150 г", price: "320 ₽" },
        { name: "Гречка в сливочном соусе", weight: "160 г", price: "360 ₽" },
        { name: "Овощи запечённые", weight: "150 г", price: "380 ₽" }
      ]
    },
    {
      title: "Десерты",
      category: "main-menu",
      items: [
        { name: "Морковный кейк с облепиховым мороженым и солёной карамелью", weight: "210 г", price: "540 ₽" },
        { name: "Фисташковый чизкейк Сан Себастьян с малиновым соусом", weight: "185 г", price: "620 ₽" },
        { name: "Шарлотка с яблоками, кедровым мороженым и грецким орехом", weight: "210 г", price: "640 ₽" },
        { name: "Шоколадный брауни с кокосовым кремом и хрустящими чипсами", weight: "170 г", price: "680 ₽" }
      ]
    },

    // ==========================================
    // КАТЕГОРИЯ: ДЕТСКОЕ МЕНЮ (kids-menu)
    // ==========================================
    {
      title: "Детское меню — Основные блюда",
      category: "kids-menu",
      items: [
        { name: "Куриная грудка с картофельным пюре, сырным соусом и хрустящим луком", weight: "290 г", price: "490 ₽" },
        { name: "Макароны с сыром, томлёными щечками и сливочным соусом", weight: "200 г", price: "540 ₽" },
        { name: "Сэндвич с хрустящей курицей и сыром чеддер", weight: "270 г", price: "620 ₽" },
        { name: "Наггетсы с картофелем фри (*соус на выбор: кетчуп / сырный соус)", weight: "250 г", price: "640 ₽" }
      ]
    },
    {
      title: "Детское меню — Суп",
      category: "kids-menu",
      items: [
        { name: "Куриный суп с лапшой", weight: "220 г", price: "360 ₽" }
      ]
    },
    {
      title: "Детское меню — Салат",
      category: "kids-menu",
      items: [
        { name: "Оливье с курицей", weight: "175 г", price: "380 ₽" }
      ]
    },
    {
      title: "Детское меню — Овощи",
      category: "kids-menu",
      items: [
        { name: "Огурец, томаты черри, редис и болгарский перец", weight: "260 г", price: "420 ₽" }
      ]
    },
    {
      title: "Детское меню — Сладкое",
      category: "kids-menu",
      items: [
        { name: "Сырник с кокосовым кремом и малиновым вареньем", weight: "240 г", price: "560 ₽" }
      ]
    },
    {
      title: "Детское меню — Напитки",
      category: "kids-menu",
      items: [
        { name: "Лимон - апельсин", weight: "250 мл", price: "280 ₽" },
        { name: "Смородина - щавель", weight: "250 мл", price: "280 ₽" },
        { name: "Морс облепиховый", weight: "250 мл", price: "140 ₽" },
        { name: "Морс брусничный", weight: "250 мл", price: "140 ₽" },
        { name: "Молочный коктейль", weight: "250 мл", price: "300 ₽" },
        { name: "Какао с маршмеллоу", weight: "250 мл", price: "300 ₽" },
        { name: "*сироп на выбор", weight: "20 мл", price: "20 ₽" }
      ]
    },

    // ==========================================
    // КАТЕГОРИЯ: БАРНАЯ КАРТА (bar)
    // ==========================================
    {
      title: "Вино по бокалам — Игристое",
      category: "bar",
      items: [
        { name: "Tenimenti Civa, Prosecco Brut (Италия, Венето)", weight: "125 мл", price: "580 ₽" },
        { name: "Baron Arsius, Cremant de Bordeaux Brut (Франция, Бордо)", weight: "125 мл", price: "790 ₽" }
      ]
    },
    {
      title: "Вино по бокалам — Белое",
      category: "bar",
      items: [
        { name: "Hawkes Bay, The Kauri Tree Sauvignon Blanc (Новая Зеландия, Мальборо)", weight: "125 мл", price: "650 ₽" },
        { name: "Nikolaev & Sons, Полёт Шмеля (Россия, Краснодарский Край)", weight: "125 мл", price: "690 ₽" },
        { name: "J.Neus, Villa J.Neus Blanc / полусухое (Германия, Рейнхессен)", weight: "125 мл", price: "810 ₽" },
        { name: "Von Buhl, Bone Dry Riesling (Германия, Пфальц)", weight: "125 мл", price: "830 ₽" }
      ]
    },
    {
      title: "Вино по бокалам — Розовое",
      category: "bar",
      items: [
        { name: "Rem Akchurin, Rose (Россия, Крым)", weight: "125 мл", price: "550 ₽" }
      ]
    },
    {
      title: "Вино по бокалам — Безалкогольное",
      category: "bar",
      items: [
        { name: "Hans Baer, Riesling (Германия, Рейнхессен)", weight: "125 мл", price: "430 ₽" }
      ]
    },
    {
      title: "Вино по бокалам — Красное",
      category: "bar",
      items: [
        { name: "Santa Carolina, Reserva Cabernet Sauvignon (Чили, Центральная Долина)", weight: "125 мл", price: "500 ₽" },
        { name: "Casale dello Sparviero, Chianti Superiore (Италия, Тоскана)", weight: "125 мл", price: "690 ₽" },
        { name: "Domaine Bousquet, Reserve Malbec (Аргентина, Mentosa)", weight: "125 мл", price: "760 ₽" },
        { name: "Trapiche, Koskil Pinot Noir (Аргентина, Патагония)", weight: "125 мл", price: "800 ₽" }
      ]
    },
    {
      title: "Вино по бутылкам — Шампанское",
      category: "bar",
      items: [
        { name: "Champagne Marx-Coutelas, Tradition Brut", weight: "750 мл", price: "10000 ₽" },
        { name: "Champagne Delot, Brut Rose", weight: "750 мл", price: "11300 ₽" },
        { name: "Champagne Charles Heidsieck, Blanc de Blancs Brut", weight: "750 мл", price: "22650 ₽" }
      ]
    },
    {
      title: "Вино по бутылкам — Игристые разных стран",
      category: "bar",
      items: [
        { name: "Cavas Masachs, Vibracions Cava Brut (Испания, Каталония)", weight: "750 мл", price: "4260 ₽" },
        { name: "Paul G. Valentin, Cremant de Limoux №69 Rose Brut (Франция, Лангедок-Руссильон)", weight: "750 мл", price: "4850 ₽" },
        { name: "Domaine Delmas, Cremant de Limoux Cuvee Passion Brut (Франция, Лангедок-Руссильон)", weight: "750 мл", price: "5500 ₽" }
      ]
    },
    {
      title: "Вино по бутылкам — Белые разных стран",
      category: "bar",
      items: [
        { name: "Corvezzo, Pinot Grigio (Италия, Венето)", weight: "750 мл", price: "4160 ₽" },
        { name: "Florissima, Morio-Muskat / полусладкое (Германия, Пфальц)", weight: "750 мл", price: "4260 ₽" },
        { name: "Anselmo Mendes, 3 Rios Vinho Verde (Португалия, Виньо Верде)", weight: "750 мл", price: "4350 ₽" },
        { name: "Domaene Gobelsburg, Gruner Veltliner (Австрия, Кампталь)", weight: "750 мл", price: "5000 ₽" },
        { name: "Galitsky & Galitsky, Chardonnay (Россия, Краснодарский Край)", weight: "750 мл", price: "6750 ₽" },
        { name: "Maison Nicolas Morin, Bourgogne Chardonnay Les Ecrivains (Франция, Бургундия)", weight: "750 мл", price: "10950 ₽" }
      ]
    },
    {
      title: "Вино по бутылкам — Красные разных стран",
      category: "bar",
      items: [
        { name: "Nikolaev & Sons, Kavkazskoe / полусухое (Россия, Краснодарский Край)", weight: "750 мл", price: "4200 ₽" },
        { name: "Domaine d'Andezon, Cotes du Rhone Villages (Франция, Долина Роны)", weight: "750 мл", price: "4350 ₽" },
        { name: "Emilio Moro, Finca Resalso (Испания, Рибера дель Дуэро)", weight: "750 мл", price: "4890 ₽" },
        { name: "Guy Allion, Les Parcs Pinot Noir (Франция, Долина Луары)", weight: "750 мл", price: "5620 ₽" },
        { name: "Trefilari, Sampietrana Primitivo (Италия, Апулия)", weight: "750 мл", price: "5960 ₽" },
        { name: "Two Hands, Tenacity Shiraz (Австралия, Макларен)", weight: "750 мл", price: "6100 ₽" },
        { name: "Podere Le Ripi, Cielo d'Ulisse Brunello di Montalcino (Италия, Тоскана)", weight: "750 мл", price: "11800 ₽" }
      ]
    },
    {
      title: "Вино по бутылкам — Розовое",
      category: "bar",
      items: [
        { name: "Varas, Vinho Verde Rose (Португалия, Виньо Верде)", weight: "750 мл", price: "3300 ₽" }
      ]
    },
    {
      title: "Барная карта — Чай",
      category: "bar",
      items: [
        { name: "Ассам / Эрл Грей / Сенча / Жасмин / Молочный улун / Ромашка", weight: "500 мл", price: "280 ₽" }
      ]
    },
    {
      title: "Барная карта — Купажи",
      category: "bar",
      items: [
        { name: "Таежный (ассам / мята / саган дайля / лист брусники)", weight: "500 мл", price: "360 ₽" },
        { name: "Цветочный (ассам / мальва / гомфрена / календула / бессмертник)", weight: "500 мл", price: "360 ₽" },
        { name: "Смородиновый (ассам / лист смородины / смородина)", weight: "500 мл", price: "360 ₽" },
        { name: "Цитрусовый (ассам / апельсин / малина / лилия / васильки)", weight: "500 мл", price: "360 ₽" },
        { name: "Земляничный (сенча / лист земляники / земляника)", weight: "500 мл", price: "360 ₽" },
        { name: "Душистый (сенча / лемонграсс / барбарис / шиповник / лилия)", weight: "500 мл", price: "360 ₽" }
      ]
    },
    {
      title: "Барная карта — Авторские чаи",
      category: "bar",
      items: [
        { name: "Облепиха-персик-сенча", weight: "500 мл", price: "420 ₽" },
        { name: "Яблоко-имбирь-жасмин", weight: "500 мл", price: "420 ₽" },
        { name: "Лемонрасс-маракуйя-жасмин", weight: "500 мл", price: "420 ₽" },
        { name: "Смородина-тимьян-ассам", weight: "500 мл", price: "420 ₽" }
      ]
    },
    {
      title: "Морсы",
      category: "bar",
      items: [
        { name: "Облепиха", weight: "250 / 1000 мл", price: "140 / 440 ₽" },
        { name: "Брусника", weight: "250 / 1000 мл", price: "140 / 440 ₽" }
      ]
    },
    {
      title: "Лимонады",
      category: "bar",
      items: [
        { name: "Лимон – апельсин", weight: "250 / 1000 мл", price: "280 / 740 ₽" },
        { name: "Груша – розмарин", weight: "250 / 1000 мл", price: "280 / 740 ₽" },
        { name: "Облепиха – лемонграсс", weight: "250 / 1000 мл", price: "280 / 740 ₽" },
        { name: "Смородина – щавель", weight: "250 / 1000 мл", price: "280 / 740 ₽" }
      ]
    },
    {
      title: "Кофе",
      category: "bar",
      items: [
        { name: "Эспрессо", weight: "30 мл", price: "160 ₽" },
        { name: "Доппио", weight: "60 мл", price: "180 ₽" },
        { name: "Американо", weight: "160 мл", price: "180 ₽" },
        { name: "Капучино", weight: "250 мл", price: "280 ₽" },
        { name: "Латте", weight: "250 мл", price: "280 ₽" },
        { name: "Флэт Уайт", weight: "250 мл", price: "280 ₽" },
        { name: "Облепиховый Бамбл", weight: "200 мл", price: "320 ₽" },
        { name: "Эспрессо Тоник", weight: "200 мл", price: "320 ₽" },
        { name: "*на молоке кокосовом / миндальном", weight: "—", price: "80 ₽" }
      ]
    },
    {
      title: "Безалкогольные напитки",
      category: "bar",
      items: [
        { name: "Petroglyph / Petroglyph Epos", weight: "375 мл", price: "280 ₽" },
        { name: "Сок Rich", weight: "200 мл", price: "240 ₽" },
        { name: "Rich Cola Original / Zero", weight: "330 мл", price: "280 ₽" }
      ]
    },
    {
      title: "Свежевыжатые соки",
      category: "bar",
      items: [
        { name: "Грейпфрут", weight: "200 мл", price: "360 ₽" },
        { name: "Апельсин", weight: "200 мл", price: "360 ₽" }
      ]
    },
    {
      title: "Алкогольная барная карта — Коктейли",
      category: "bar",
      items: [
        { name: "Bellini (персик / ликер личи / просекко)", weight: "—", price: "680 ₽" },
        { name: "Garibaldi (апельсин / артишоковый биттер)", weight: "—", price: "680 ₽" },
        { name: "Salvia (вино на базилике / яблоко / просекко)", weight: "—", price: "680 ₽" },
        { name: "Crispy Sour (белое вино / ликер горечавки / лайм)", weight: "—", price: "680 ₽" },
        { name: "Golden Daisy (джин на крыжовнике / бузина / полынь)", weight: "—", price: "680 ₽" },
        { name: "Berry Gimlet (джин на ягодах / сухой херес / розмарин)", weight: "—", price: "680 ₽" },
        { name: "Sorrel Margarita (текила / щавель / апельсин)", weight: "—", price: "680 ₽" },
        { name: "Wild Manhattan (бурбон / орех / travis)", weight: "—", price: "680 ₽" },
        { name: "Penicilin (скотч / имбирь / цветочный мед)", weight: "—", price: "680 ₽" }
      ]
    },
    {
      title: "Алкогольная барная карта — Б/А Коктейли",
      category: "bar",
      items: [
        { name: "Amaro Tonic (амаро / инжир / тоник)", weight: "—", price: "580 ₽" },
        { name: "Orange Spritz (аперитив италиан спритц / апельсин / содовая)", weight: "—", price: "580 ₽" }
      ]
    },
    {
      title: "Бутылочное пиво",
      category: "bar",
      items: [
        { name: "Ayinger Lager Hell, светлое фильтрованное ABV 4,9 % IBU 15,4", weight: "500 мл", price: "820 ₽" },
        { name: "Ayinger Bräuweisse, пшеничное нефильтрованное ABV 5,1 % IBU 10,1", weight: "500 мл", price: "820 ₽" },
        { name: "Ayinger Altbairisch Dunkel, темное фильтрованное ABV 5 % IBU 20,7", weight: "500 мл", price: "820 ₽" },
        { name: "Bakalar Nealko, чешский лагер ABV 0,5 % IBU 20", weight: "330 мл", price: "580 ₽" },
        { name: "Clausthaler Non-Alcoholic, немецкий лагер ABV 0,5 % IBU 29", weight: "330 мл", price: "540 ₽" }
      ]
    },
    {
      title: "Настойки",
      category: "bar",
      items: [
        { name: "Водка на лимоне и ванили", weight: "40 мл", price: "300 ₽" },
        { name: "Джин на облепихе и розмарине", weight: "40 мл", price: "300 ₽" },
        { name: "Джин на малине и миндале", weight: "40 мл", price: "300 ₽" },
        { name: "Джин на крыжовнике и ванили", weight: "40 мл", price: "300 ₽" }
      ]
    },
    {
      title: "Vodka / Distillates",
      category: "bar",
      items: [
        { name: "Царская", weight: "40 мл", price: "220 ₽" },
        { name: "Beluga Noble", weight: "40 мл", price: "360 ₽" },
        { name: "Chinggis Grandkhaan", weight: "40 мл", price: "380 ₽" },
        { name: "Чистые росы", weight: "40 мл", price: "420 ₽" },
        { name: "Онегин", weight: "40 мл", price: "460 ₽" },
        { name: "Grey Goose", weight: "40 мл", price: "580 ₽" },
        { name: "Rakija Dunja Simex Original", weight: "40 мл", price: "460 ₽" },
        { name: "Rakija Sljiva Simex Original", weight: "40 мл", price: "460 ₽" },
        { name: "Полугар №3 Бородинский с Тмином", weight: "40 мл", price: "580 ₽" },
        { name: "Полугар №4 Мед и Перец", weight: "40 мл", price: "580 ₽" }
      ]
    },
    {
      title: "Vermouth / Bitters",
      category: "bar",
      items: [
        { name: "Martini Extra Dry / Rosso / Fiero / Bianco", weight: "40 мл", price: "240 ₽" },
        { name: "Absint Hipno", weight: "40 мл", price: "380 ₽" },
        { name: "Aperitifs RinQuinQuin a la Peche", weight: "40 мл", price: "420 ₽" },
        { name: "Aperitifs Gentiane de Lure", weight: "40 мл", price: "420 ₽" },
        { name: "Amaro Nonino Quintessentia", weight: "40 мл", price: "460 ₽" },
        { name: "Liqueur Frangelico", weight: "40 мл", price: "480 ₽" },
        { name: "Campari Bitter", weight: "40 мл", price: "380 ₽" },
        { name: "Cynar", weight: "40 мл", price: "460 ₽" },
        { name: "Fernet Branca", weight: "40 мл", price: "480 ₽" },
        { name: "Branca Menta", weight: "40 мл", price: "480 ₽" }
      ]
    },
    {
      title: "Gin",
      category: "bar",
      items: [
        { name: "Bosford Gin", weight: "40 мл", price: "320 ₽" },
        { name: "Bombay Sapphire Dry", weight: "40 мл", price: "520 ₽" },
        { name: "Drumshanbo Gunpowde", weight: "40 мл", price: "640 ₽" },
        { name: "Gin Mare Capri", weight: "40 мл", price: "680 ₽" },
        { name: "Hendrick's Neptunia", weight: "40 мл", price: "720 ₽" }
      ]
    },
    {
      title: "Tequila",
      category: "bar",
      items: [
        { name: "Espolon Blanco", weight: "40 мл", price: "620 ₽" },
        { name: "Espolon Reposado", weight: "40 мл", price: "680 ₽" },
        { name: "Rooster Rojo Ahumado", weight: "40 мл", price: "720 ₽" },
        { name: "Rooster Rojo Anejo", weight: "40 мл", price: "780 ₽" }
      ]
    },
    {
      title: "Whisky / Bourbon",
      category: "bar",
      items: [
        { name: "Dewar's White Label", weight: "40 мл", price: "380 ₽" },
        { name: "Dewar's Caribbean Smooth 8 Y.O.", weight: "40 мл", price: "460 ₽" },
        { name: "Ballantines Finest", weight: "40 мл", price: "520 ₽" },
        { name: "Aberfeldy 12 y.o.", weight: "40 мл", price: "780 ₽" },
        { name: "Auchentoshan American OakDewar's White Label", weight: "40 мл", price: "860 ₽" },
        { name: "Laphroaig 10 Y.O.", weight: "40 мл", price: "1400 ₽" },
        { name: "Macallan 12 Y.O.", weight: "40 мл", price: "2200 ₽" },
        { name: "Bushmills Original Blended", weight: "40 мл", price: "520 ₽" },
        { name: "Teeling Single Malt", weight: "40 мл", price: "760 ₽" },
        { name: "Jim Beam", weight: "40 мл", price: "520 ₽" }
      ]
    },
    {
      title: "Brendy",
      category: "bar",
      items: [
        { name: "Soberano Reserva 5 Y.O.", weight: "40 мл", price: "520 ₽" },
        { name: "Bisquit & Dubouche VS", weight: "40 мл", price: "720 ₽" },
        { name: "Courvoisier VS", weight: "40 мл", price: "840 ₽" },
        { name: "Francois de Martignac VSOP", weight: "40 мл", price: "1140 ₽" },
        { name: "Cognac Lautrec VSOP", weight: "40 мл", price: "1220 ₽" },
        { name: "Morbida Grappa Giovane Mazzetti d'Altavilla", weight: "40 мл", price: "580 ₽" }
      ]
    },
    {
      title: "Rum",
      category: "bar",
      items: [
        { name: "Cashaca Velho Barreiro", weight: "40 мл", price: "480 ₽" },
        { name: "Oakheart Original", weight: "40 мл", price: "360 ₽" },
        { name: "Matusalem Platino", weight: "40 мл", price: "440 ₽" },
        { name: "Chairman's Reserve", weight: "40 мл", price: "580 ₽" },
        { name: "Chairman`s Reserve Spiced", weight: "40 мл", price: "580 ₽" }
      ]
    },
    {
      title: "Барная карта завтраков — Свежевыжатые соки",
      category: "bar",
      items: [
        { name: "Грейпфрут", weight: "200 мл", price: "360 ₽" },
        { name: "Апельсин", weight: "200 мл", price: "360 ₽" }
      ]
    },
    {
      title: "Барная карта завтраков — Кофе",
      category: "bar",
      items: [
        { name: "Эспрессо", weight: "30 мл", price: "160 ₽" },
        { name: "Доппио", weight: "60 мл", price: "180 ₽" },
        { name: "Американо", weight: "160 мл", price: "180 ₽" },
        { name: "Капучино", weight: "250 мл", price: "280 ₽" },
        { name: "Латте", weight: "250 мл", price: "280 ₽" },
        { name: "Флэт уайт", weight: "250 мл", price: "280 ₽" },
        { name: "Облепиховый Бамбл", weight: "200 мл", price: "320 ₽" },
        { name: "Эспрессо Тоник", weight: "200 мл", price: "320 ₽" },
        { name: "*на молоке кокосовом / миндальном", weight: "—", price: "80 ₽" }
      ]
    },
    {
      title: "Барная карта завтраков — Чай",
      category: "bar",
      items: [
        { name: "Ассам / Эрл Грей / Сенча / Жасмин / Молочный улун / Ромашка", weight: "500 мл", price: "280 ₽" }
      ]
    },
    {
      title: "Барная карта завтраков — Вино",
      category: "bar",
      items: [
        { name: "Tenimenti Civa, Prosecco Brut / Италия, Венето", weight: "125 мл", price: "580 ₽" },
        { name: "Baron Arsius, Cremant de Bordeaux Brut / Франция, Бордо", weight: "125 мл", price: "790 ₽" }
      ]
    },
    {
      title: "Барная карта завтраков — Коктейли",
      category: "bar",
      items: [
        { name: "Bellini (персик / ликер личи / игристое)", weight: "—", price: "680 ₽" },
        { name: "Garibaldi (апельсин / артишоковый биттер)", weight: "—", price: "680 ₽" }
      ]
    }
  ]
};