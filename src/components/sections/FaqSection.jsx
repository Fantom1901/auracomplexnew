'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 📝 БАЗА ДАННЫХ FAQ (Вопросы восстановлены по контексту ответов)
const FAQ_DATA = [
  {
    id: 'pets',
    question: 'Можно ли приехать на отдых с домашним питомцем?',
    answer: 'Да, мы приветствуем гостей с собаками весом до 15 кг и возрастом от 1 года, но строго по предварительному согласованию с администрацией. Размещение возможно исключительно в отдельных домиках (в номерах проживание с животными не предусмотрено). При заселении обязательно наличие ветеринарного паспорта и соблюдение правил комплекса.',
    link: { text: 'Правила заселения с декоративной собакой', url: '/docs/pets-rules.pdf' }
  },
  {
    id: 'minibar',
    question: 'Что находится в мини-баре и можно ли там хранить продукты?',
    answer: 'В номерах установлен компактный мини-бар для охлаждения напитков и хранения снеков (внутри представлены попкорн, чипсы и напитки от AURA). Он отлично подходит для вина или воды, однако технически не предназначен для хранения скоропортящихся продуктов и детского питания.'
  },
  {
    id: 'ticks',
    question: 'Проводится ли на территории обработка от клещей?',
    answer: 'Да, территория AURA регулярно проходит комплексную обработку. Мы используем профессиональное оборудование — генераторы тумана, которые равномерно распыляют защитное средство на траву, кустарники и деревья. Все применяемые препараты строго сертифицированы и полностью безопасны для людей, детей и животных.'
  },
  {
    id: 'hookah',
    question: 'Разрешено ли курение кальяна на территории?',
    answer: 'Курение кальяна разрешено внутри арендованных домов и в прилегающих к ним беседках. Также для комфортного отдыха мы приглашаем вас посетить нашу стильную лаундж-зону «MOLOKO» и живописную летнюю террасу, расположенную прямо рядом с рестораном «Тепло».'
  },
  {
    id: 'bbq',
    question: 'Входит ли мангал в стоимость и можно ли заказать мясо?',
    answer: 'Мангал полностью входит в стоимость аренды всех домиков. Территория каждого дома оборудована индивидуальной беседкой с полноценной барбекю-зоной. Кроме того, шеф-повар ресторана «Тепло» разработал специальное гриль-меню: вы можете заранее заказать подготовленное мясо, рыбу или овощи у наших сотрудников.'
  },
  {
    id: 'grill-tools',
    question: 'Предоставляются ли решетки и инвентарь для барбекю?',
    answer: 'Каждая индивидуальная беседка по умолчанию укомплектована одной металлической решеткой для барбекю. Если вам понадобятся дополнительные аксессуары, вы можете привезти их с собой либо обратиться к администратору комплекса, чтобы приобрести необходимый инвентарь прямо на месте.'
  },
  {
    id: 'car-access',
    question: 'Можно ли подъехать к домику на автомобиле для разгрузки?',
    answer: 'Да, сразу после прибытия вы можете подъехать к дому, чтобы оперативно разгрузить багаж. Однако сразу после разгрузки автомобиль необходимо перегнать на одну из наших специальных парковочных площадок. Оставлять машины около домиков запрещено, чтобы не мешать проезду других гостей и сохранять эстетику комплекса.'
  },
  {
    id: 'pool',
    question: 'Нужно ли проживающим гостям бронировать бассейн?',
    answer: 'Для гостей, проживающих в комплексе, посещение бассейна полностью включено в стоимость — отдельное бронирование или запись не требуются, вы можете отдыхать у воды в любое удобное время. Для посетителей без проживания доступ к бассейну открыт исключительно по предварительной записи.'
  },
  {
    id: 'breakfast',
    question: 'В какое время в комплексе накрывают завтраки?',
    answer: 'Завтрак в ресторане нашего комплекса подается ежедневно с 8:00 утра до 11:00.'
  },
  {
    id: 'parking',
    question: 'Предусмотрена ли парковка для автомобилей гостей?',
    answer: 'Да, на территории комплекса оборудованы две просторные бесплатные охраняемые парковки, находящиеся под круглосуточным наблюдением.'
  }
];

export default function FaqSection() {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-light-bg text-brand-dark py-20 md:py-36 px-6 md:px-16 flex flex-col items-center">

      {/* ШАПКА СЕКЦИИ */}
      <div className="w-full max-w-[900px] mb-12 md:mb-20 flex flex-col gap-3 text-center items-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-brand-dark/40 font-medium"
        >
          FAQ
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-medium text-3xl md:text-5xl tracking-tight text-brand-dark"
        >
          Часто задаваемые вопросы
        </motion.h2>
      </div>

      {/* СПИСОК АККОРДЕОНОВ */}
      <div className="w-full max-w-[900px] flex flex-col">
        {FAQ_DATA.map((item, index) => {
          const isOpen = openId === item.id;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="border-b border-brand-dark/10 last:border-none"
            >
              {/* Кнопка-заголовок */}
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full py-6 md:py-8 flex items-center justify-between text-left gap-6 group cursor-pointer outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-base md:text-xl font-medium tracking-wide text-brand-dark/80 group-hover:text-brand-dark transition-colors duration-300">
                  {item.question}
                </span>

                {/* Изящная минималистичная стрелочка */}
                <div className="w-6 h-6 rounded-full bg-brand-dark/5 flex items-center justify-center group-hover:bg-brand-dark/10 transition-colors duration-300 shrink-0">
                  <motion.svg
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="w-3 h-3 stroke-brand-dark"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </motion.svg>
                </div>
              </button>

              {/* Раскрывающаяся панель ответа */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 md:pb-8 pr-12 text-sm md:text-base text-brand-dark/60 font-normal leading-relaxed tracking-wide flex flex-col items-start gap-4">
                      <p>{item.answer}</p>

                      {/* Если у вопроса есть ссылка (например, правила для собак) */}
                      {item.link && (
                        <a
                          href={item.link.url}
                          className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-brand-dark border-b border-brand-dark/20 hover:border-brand-dark transition-colors duration-300 pt-2"
                        >
                          {item.link.text}
                          <svg className="w-3 h-3 stroke-brand-dark" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}