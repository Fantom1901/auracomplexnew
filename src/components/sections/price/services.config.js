// services.config.js

export const TABS = [
  { id: 'all-services', label: 'Все услуги' },
  { id: 'relax', label: 'Отдых' },
  { id: 'kids', label: 'Для детей' },
  { id: 'excursions', label: 'Экскурсии' },
  { id: 'transfer', label: 'Трансфер' }
];

export const SERVICES_DATA = [
  {
    id: 'pool',
    category: 'relax', // Исправил на 'relax', чтобы работала фильтрация по вкладке "Отдых"
    title: 'Подогреваемый панорамный бассейн',
    description: 'Просторный бассейн и бар на крыше с видом на реку и горы – лучшее место для расслабления среди горных пейзажей.',
    schedule: 'с 8:00 до 21:00',
    prices: [
      { label: 'Для проживающих гостей', price: 'Бесплатно' },
      { label: 'Гостевой визит (08:00–21:00)', price: '3 300 ₽' },
      { label: 'Вечерний визит (16:00–21:00)', price: '2 000 ₽' },
      { label: 'Дети до 12 лет (без лежака)', price: 'Бесплатно' },
    ],
    imageSrc: '/services/pool.jpg',
    showButton: true,
  },
  {
    id: 'kids-room',
    category: 'kids',
    title: 'Детская игровая зона',
    description: 'Безопасное пространство для творчества и активных игр ваших детей под присмотром профессиональных аниматоров.',
    schedule: 'с 9:00 до 20:00',
    prices: [
      { label: 'Для проживающих гостей', price: 'Включено' },
      { label: 'Индивидуальная няня (1 час)', price: '1 200 ₽' }
    ],
    imageSrc: '/services/kids.jpg',
    showButton: false,
  },
  {
    id: 'excursion-mana',
    category: 'excursions',
    title: 'Сплавы и экскурсии по Мане',
    description: 'Авторские водные и пешие маршруты к Манской петле. Откройте для себя дикую природу Сибири в сопровождении опытных гидов комплекта.',
    schedule: 'По предварительной записи',
    prices: [
      { label: 'Групповой сплав (от 4 человек)', price: 'от 5 000 ₽ / чел' },
      { label: 'Индивидуальный маршрут', price: 'Расчёт по запросу' }
    ],
    imageSrc: '/services/mana.jpg',
    showButton: true,
  },
  {
    id: 'transfer-premium',
    category: 'transfer',
    title: 'Премиальный трансфер',
    description: 'Комфортабельные поездки из любой точки Красноярска, аэропорта Емельяново или Дивногорска на автомобилях бизнес-класса.',
    schedule: 'Круглосуточно (24/7)',
    prices: [
      { label: 'Аэропорт — Комплекс AURA', price: '4 500 ₽' },
      { label: 'Красноярск (Центр) — Комплекс', price: '3 500 ₽' }
    ],
    imageSrc: '/services/transfer.jpg',
    showButton: true,
  }
];