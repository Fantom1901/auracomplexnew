// RulesComponents.jsx
import Link from 'next/link';

// Левая колонка: Инфо-панель ресепшна и таймингов
export function RulesSidebar({ checkIn, auto, contacts }) {
  return (
    // Убрали lg:col-span-4, оставили только липкость внутри выделенного родителем пространства
    <div className="space-y-6 lg:sticky lg:top-28 w-full">
      {/* Карточка: Тайминги */}
      <div className="p-6 rounded-2xl border border-brand-dark/10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-6">
        <div className="flex items-center gap-2 text-brand-dark/40">
          <svg className="w-4 h-4 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xs uppercase tracking-wider font-mono font-medium">{checkIn.title}</span>
        </div>

        <div className="grid grid-cols-2 gap-4 border-b border-brand-dark/5 pb-4">
          {checkIn.types.map((type, idx) => (
            <div key={idx}>
              <span className="text-xs text-brand-dark/50 block mb-0.5">{type.label}</span>
              <p className="text-sm font-medium">{type.checkIn}</p>
              <p className="text-xs text-brand-dark/60">{type.checkOut}</p>
            </div>
          ))}
        </div>

        {/* Инфо про Авто */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-brand-dark/40">
            <svg className="w-4 h-4 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V11.25c0-4.446-3.542-7.89-8-7.89-4.458 0-8 3.444-8 7.89v4.25m17.25 0v-1.75a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
            </svg>
            <span className="text-xs uppercase tracking-wider font-mono font-medium">{auto.title}</span>
          </div>
          <p className="text-xs text-brand-dark/70 font-light leading-relaxed">{auto.description}</p>
        </div>
      </div>

      {/* Карточка: Контакты Ресепшна */}
      <div className="p-6 rounded-2xl bg-brand-dark text-white space-y-4">
        <span className="text-[10px] uppercase tracking-widest text-white/50 font-mono block">{contacts.title}</span>
        <div className="space-y-1">
          {contacts.phones.map((phone, idx) => (
            <a key={idx} href={`tel:${phone.replace(/\D/g, '')}`} className="block text-lg font-medium hover:opacity-80 transition-opacity">
              {phone}
            </a>
          ))}
        </div>
        <p className="text-xs text-white/60 font-light">{contacts.note}</p>
      </div>
    </div>
  );
}

// Правая колонка: Списки правил, безопасность, внешние службы
export function RulesMainContent({ sections, safety, externalContacts }) {
  return (
    // Убрали lg:col-span-8, теперь это просто чистый вертикальный стек
    <div className="space-y-10 w-full">
      {sections.map((section) => (
        <section key={section.id} className="space-y-4">
          <h2 className="text-xl font-normal tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-dark" /> {section.title}
          </h2>

          {section.type === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-light leading-relaxed">
              {section.items.map((item, idx) => (
                <div key={idx} className={`p-5 rounded-xl bg-stone-100/60 border border-stone-200/40 ${item.fullWidth ? 'md:col-span-2' : ''}`}>
                  <span className="font-medium text-brand-dark block mb-1">{item.label}</span>
                  {item.text}
                </div>
              ))}
            </div>
          ) : (
            <ul className="space-y-3 text-sm font-light text-brand-dark/90 pl-1">
              {section.items.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <span className="font-mono text-xs text-brand-dark/40 pt-0.5">{item.id}.</span>
                  <p><strong className="font-medium text-brand-dark">{item.label}:</strong> {item.text}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {/* Охрана и Пожарная безопасность */}
      <section className="space-y-4 p-6 rounded-2xl bg-orange-50/50 border border-orange-200/40 text-stone-900">
        <h2 className="text-base font-medium tracking-tight text-orange-950 flex items-center gap-2">
          <svg className="w-4 h-4 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          {safety.title}
        </h2>
        <div className="text-sm font-light space-y-2.5 text-orange-950/90 leading-relaxed">
          {safety.items.map((text, idx) => <p key={idx}>• {text}</p>)}
        </div>
      </section>

      {/* Внешние контакты */}
      <section className="pt-6 border-t border-brand-dark/10 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-brand-dark/70 font-light">
        {externalContacts.map((contact, idx) => (
          <div key={idx} className="space-y-1">
            <span className="text-[10px] font-mono font-medium uppercase tracking-wider block text-brand-dark/40">{contact.label}</span>
            {contact.href ? (
              <p className="text-sm font-medium text-brand-dark"><Link href={contact.href} className="underline decoration-brand-dark/20 hover:decoration-brand-dark">{contact.value}</Link></p>
            ) : (
              <p className="text-sm font-medium text-brand-dark">{contact.value}</p>
            )}
            {contact.note && <p className="text-[11px] text-brand-dark/60">{contact.note}</p>}
          </div>
        ))}
      </section>
    </div>
  );
}