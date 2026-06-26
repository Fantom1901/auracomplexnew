import PageWrapper from '@/components/ui/PageWrapper';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <PageWrapper title="Юридические документы">
      <div className="w-full bg-light-bg text-brand-dark px-4 py-12 md:py-20 font-sans selection:bg-brand-dark selection:text-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* ЛЕВАЯ КОЛОНКА: Название и быстрый контакт */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-dark/50 font-mono font-medium block">
              Правовая информация
            </span>
            <h1 className="text-3xl md:text-4xl font-normal tracking-tight leading-tight">
              Политика в отношении обработки персональных данных
            </h1>
            <div className="w-12 h-[1px] bg-brand-dark/20" />
            <p className="text-sm text-brand-dark/70 font-light leading-relaxed">
              Действует бессрочно до замены её новой версией. По вопросам обработки данных пишите на:
            </p>
            <a
              href="mailto:me.hotel@yandex.ru"
              className="inline-block text-sm font-medium border-b border-brand-dark/30 hover:border-brand-dark transition-colors duration-200"
            >
              me.hotel@yandex.ru
            </a>
          </div>

          {/* ПРАВАЯ КОЛОНКА: Сам текст политики с премиальной типографикой */}
          <div className="lg:col-span-8 space-y-12 text-brand-dark/90 font-light text-base leading-relaxed">

            {/* Раздел 1 */}
            <section className="space-y-4">
              <h2 className="text-xl font-normal tracking-tight text-brand-dark">1. Общие положения</h2>
              <p>
                Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» (далее — Закон о персональных данных) и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые ООО МИОТЕЛЬ (далее — Оператор).
              </p>
              <p>
                <strong className="font-medium text-brand-dark">1.1.</strong> Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.
              </p>
              <p>
                <strong className="font-medium text-brand-dark">1.2.</strong> Настоящая политика Оператора в отношении обработки персональных данных (далее — Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта <Link href="https://mehotel.ru/" className="underline underline-offset-4 decoration-brand-dark/20 hover:decoration-brand-dark">https://mehotel.ru/</Link>.
              </p>
            </section>

            {/* Раздел 2 */}
            <section className="space-y-4">
              <h2 className="text-xl font-normal tracking-tight text-brand-dark">2. Основные понятия, используемые в Политике</h2>
              <div className="space-y-3 pl-4 border-l border-brand-dark/10">
                <p><span className="font-medium text-brand-dark">2.1. Автоматизированная обработка</span> — обработка персональных данных с помощью средств вычислительной техники.</p>
                <p><span className="font-medium text-brand-dark">2.2. Блокирование</span> — временное прекращение обработки (за исключением случаев, если она необходима для уточнения данных).</p>
                <p><span className="font-medium text-brand-dark">2.3. Веб-сайт</span> — совокупность графических и информационных материалов, программ для ЭВМ и баз данных по адресу <span className="font-mono text-sm">https://mehotel.ru/</span>.</p>
                <p><span className="font-medium text-brand-dark">2.4. Информационная система</span> — совокупность содержащихся в базах данных персональных данных и обеспечивающих их обработку технологий.</p>
                <p><span className="font-medium text-brand-dark">2.5. Обезличивание</span> — действия, в результате которых невозможно определить без доп. информации принадлежность данных конкретному Пользователю.</p>
                <p><span className="font-medium text-brand-dark">2.6. Обработка персональных данных</span> — любое действие с использованием средств автоматизации или без них, включая сбор, запись, систематизацию, хранение, уточнение, передачу, удаление и уничтожение.</p>
                <p><span className="font-medium text-brand-dark">2.7. Оператор</span> — юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и/или осуществляющие обработку данных.</p>
                <p><span className="font-medium text-brand-dark">2.8. Персональные данные</span> — любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта.</p>
                <p><span className="font-medium text-brand-dark">2.9. Данные, разрешенные для распространения</span> — доступ неограниченного круга лиц к которым предоставлен субъектом путем дачи согласия в порядке, предусмотренном Законом.</p>
                <p><span className="font-medium text-brand-dark">2.10. Пользователь</span> — любой посетитель веб-сайта.</p>
                <p><span className="font-medium text-brand-dark">2.11. Предоставление</span> — действия, направленные на раскрытие данных определенному лицу или кругу лиц.</p>
                <p><span className="font-medium text-brand-dark">2.12. Распространение</span> — действия, направленные на раскрытие неограниченному кругу лиц (в СМИ, сетях и т.д.).</p>
                <p><span className="font-medium text-brand-dark">2.13. Трансграничная передача</span> — передача данных на территорию иностранного государства органу власти или иностранному лицу.</p>
                <p><span className="font-medium text-brand-dark">2.14. Уничтожение</span> — действия, в результате которых данные уничтожаются безвозвратно с невозможностью дальнейшего восстановления.</p>
              </div>
            </section>

            {/* Раздел 3 */}
            <section className="space-y-4">
              <h2 className="text-xl font-normal tracking-tight text-brand-dark">3. Основные права и обязанности Оператора</h2>
              <div className="space-y-4">
                <p className="font-medium text-brand-dark/80">3.1. Оператор имеет право:</p>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-brand-dark/40">
                  <li>Получать от субъекта достоверные информацию и/или документы;</li>
                  <li>Продолжить обработку без согласия в случае его отзыва при наличии законных оснований;</li>
                  <li>Самостоятельно определять состав необходимых и достаточных мер безопасности.</li>
                </ul>
                <p className="font-medium text-brand-dark/80">3.2. Оператор обязан:</p>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-brand-dark/40">
                  <li>Предоставлять информацию по просьбе субъекта;</li>
                  <li>Отвечать на обращения граждан в установленные законом сроки;</li>
                  <li>Сообщать в Роскомнадзор необходимую информацию в течение 10 дней с даты запроса;</li>
                  <li>Публиковать неограниченный доступ к настоящей Политике;</li>
                  <li>Принимать правовые, организационные и технические меры защиты данных.</li>
                </ul>
              </div>
            </section>

            {/* Раздел 4 */}
            <section className="space-y-4">
              <h2 className="text-xl font-normal tracking-tight text-brand-dark">4. Права и обязанности субъектов персональных данных</h2>
              <div className="space-y-4">
                <p className="font-medium text-brand-dark/80">4.1. Субъекты имеют право:</p>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-brand-dark/40">
                  <li>Получать информацию об обработке, требовать уточнения, блокирования или уничтожения неполных/неточных данных;</li>
                  <li>Выдвигать условие предварительного согласия при обработке в целях продвижения услуг;</li>
                  <li>Отозвать согласие или требовать прекращения обработки;</li>
                  <li>Обжаловать действия Оператора в суде или уполномоченном органе.</li>
                </ul>
                <p className="font-medium text-brand-dark/80">4.2. Субъекты обязаны:</p>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-brand-dark/40">
                  <li>Предоставлять Оператору достоверные данные и сообщать об их изменениях.</li>
                </ul>
              </div>
            </section>

            {/* Раздел 5 */}
            <section className="space-y-4">
              <h2 className="text-xl font-normal tracking-tight text-brand-dark">5. Принципы обработки персональных данных</h2>
              <p>
                Обработка строится на законной и справедливой основе, ограничивается достижением конкретных, заранее определенных целей. Не допускается избыточность данных или объединение несовместимых баз данных. Хранение осуществляется не дольше, чем этого требуют цели обработки, если иное не установлено федеральным законом или договором.
              </p>
            </section>

            {/* Раздел 6 — Выделенный блок акцентного цвета */}
            <section className="p-6 md:p-8 rounded-2xl bg-brand-dark text-white space-y-4 shadow-sm">
              <h2 className="text-xl font-normal tracking-tight text-brand-white">6. Цели обработки персональных данных</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <span className="opacity-50 text-[10px] uppercase tracking-wider block mb-1">Цель:</span>
                  <p className="font-medium">Предоставление доступа Пользователю к сервисам, информации и/или материалам на веб-сайте.</p>
                </div>
                <div>
                  <span className="opacity-50 text-[10px] uppercase tracking-wider block mb-1">Состав данных:</span>
                  <p className="font-mono opacity-90">имя, город, номер телефона, место работы, занимаемая должность.</p>
                </div>
                <div>
                  <span className="opacity-50 text-[10px] uppercase tracking-wider block mb-1">Правовые основания:</span>
                  <p>Уставные документы Оператора, заключаемые договоры.</p>
                </div>
                <div>
                  <span className="opacity-50 text-[10px] uppercase tracking-wider block mb-1">Виды обработки:</span>
                  <p>Сбор, запись, систематизация, накопление, хранение, уничтожение. Отправка информационных писем на телефон.</p>
                </div>
              </div>
            </section>

            {/* Раздел 7 */}
            <section className="space-y-4">
              <h2 className="text-xl font-normal tracking-tight text-brand-dark">7. Условия обработки персональных данных</h2>
              <p>
                Обработка осуществляется с согласия субъекта, либо для выполнения международных договоров, осуществления правосудия, исполнения судебных актов, а также для исполнения гражданско-правовых договоров, где субъект является выгодоприобретателем.
              </p>
            </section>

            {/* Раздел 8 */}
            <section className="space-y-4">
              <h2 className="text-xl font-normal tracking-tight text-brand-dark">8. Порядок сбора, хранения и передачи</h2>
              <p>
                Оператор обеспечивает полную сохранность и конфиденциальность. Персональные данные Пользователя никогда и ни при каких условиях не будут переданы третьим лицам, за исключением требований действующего законодательства.
              </p>
              <blockquote className="border-l-2 border-brand-dark pl-4 italic text-sm text-brand-dark/70 my-2">
                Для актуализации или отзыва согласия направьте уведомление на email <span className="font-mono text-xs font-semibold">me.hotel@yandex.ru</span> с пометкой «Актуализация персональных данных» или «Отзыв согласия».
              </blockquote>
            </section>

            {/* Раздел 9, 10, 11 */}
            <section className="space-y-4">
              <h2 className="text-xl font-normal tracking-tight text-brand-dark">9-11. Дополнительные условия</h2>
              <p>
                Оператор осуществляет как автоматизированную, так и неавтоматизированную обработку данных. До начала трансграничной передачи Оператор обязан уведомить уполномоченный орган по защите прав субъектов. Лица, получившие доступ к данным, обязаны соблюдать строгую конфиденциальность.
              </p>
            </section>

            {/* Раздел 12 */}
            <section className="space-y-4 pt-6 border-t border-brand-dark/10">
              <h2 className="text-xl font-normal tracking-tight text-brand-dark">12. Заключительные положения</h2>
              <p>
                Любые изменения политики будут отражены в данном документе. Действующая версия всегда расположена в свободном доступе по адресу:
                <br />
                <Link href="https://mehotel.ru/privacy" className="font-mono text-sm text-brand-dark font-medium underline underline-offset-4 decoration-brand-dark/20 hover:decoration-brand-dark">
                  https://mehotel.ru/privacy
                </Link>
              </p>
            </section>

          </div>

        </div>
      </div>
    </PageWrapper>
  );
}