export const banyaCategories = [
  { id: "grand", label: "Гранд-баня" },
  { id: "height", label: "Бани на высоте" }
];

export const BANYA_ITEMS_DATA = [
  {
    id: "grand-banya",
    category: "grand",
    title: "Гранд-баня",
    description: "Парная, комната отдыха, санузел, душевая с обливным ведром и уединённая терраса с BBQ, купелью и видом на Ману и горы.",
    features: [
      { label: "Площадь банного пространства", value: "400 м²" },
      { label: "Площадь бани", value: "150 м²" },
      { label: "Площадь террасы", value: "250 м²" },
      { label: "Количество мест", value: "12 чел" }
    ],
    images: [
      { title: "Терраса с купелью Гранд-бани", tag: "Экстерьер", src: "/assets/banya/grand-1.webp" },
      { title: "Просторная парная", tag: "Парная", src: "/assets/banya/grand-2.webp" },
      { title: "Комната отдыха", tag: "Интерьер", src: "/assets/banya/grand-3.webp" }
    ]
  },
  {
    id: "banya-height",
    category: "height",
    title: "Баня на высоте",
    description: "Парная, комната отдыха, санузел, душевая с обливным ведром и уединённая терраса с BBQ и видом на Ману и горы.",
    features: [
      { label: "Площадь банного пространства", value: "47 м²" },
      { label: "Площадь бани", value: "36 м²" },
      { label: "Площадь террасы", value: "11 м²" },
      { label: "Количество мест", value: "6 чел" }
    ],
    images: [
      { title: "Вид на горы из чана", tag: "Купель", src: "/assets/banya/height-1.webp" },
      { title: "Интерьер бани на высоте", tag: "Интерьер", src: "/assets/banya/height-2.webp" }
    ]
  }
];