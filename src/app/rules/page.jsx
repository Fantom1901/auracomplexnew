import PageWrapper from '@/components/layout/PageWrapper';
import { RulesSidebar, RulesMainContent } from '@/components/modules/rules/RulesComponents';
import {
  CHECK_IN_DATA,
  AUTO_DATA,
  CONTACTS_DATA,
  RULES_SECTIONS,
  SAFETY_DATA,
  EXTERNAL_CONTACTS
} from './rules.config';

export default function RulesPage() {
  return (
    <PageWrapper title="Памятка гостя">
      <div className="w-full bg-light-bg text-brand-dark pb-12 font-sans selection:bg-brand-dark selection:text-white">

        {/* Интро */}
        <div className="max-w-3xl mb-12 lg:mb-16 space-y-4">
          <p className="text-lg md:text-xl font-light text-brand-dark/80 leading-relaxed">
            Добро пожаловать в загородный комплекс <span className="font-medium text-brand-dark">«Аура»</span>!
            Мы рады вас приветствовать и надеемся, что ваше пребывание будет незабываемым. Несколько полезных советов и важной информации для вашего комфорта:
          </p>
        </div>

        {/* Основной контент с жесткой структурой гридов */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Левая колонка — забирает строго 4 части из 12 */}
          <div className="lg:col-span-4 w-full">
            <RulesSidebar
              checkIn={CHECK_IN_DATA}
              auto={AUTO_DATA}
              contacts={CONTACTS_DATA}
            />
          </div>

          {/* Правая колонка — забирает строго 8 частей из 12 */}
          <div className="lg:col-span-8 w-full">
            <RulesMainContent
              sections={RULES_SECTIONS}
              safety={SAFETY_DATA}
              externalContacts={EXTERNAL_CONTACTS}
            />
          </div>

        </div>

        {/* Аутро */}
        <div className="mt-16 pt-8 border-t border-brand-dark/5 text-center">
          <p className="text-sm text-brand-dark/50 italic font-light">
            Если у вас возникли дополнительные пожелания — наша команда всегда рядом. Желаем вам приятного отдыха!
          </p>
        </div>

      </div>
    </PageWrapper>
  );
}