"use client";

export default function CatalogComboCard({ title, price, subtitle, sections = [] }) {
    if (!sections.length) return null;

    return (
      <div className="w-full border border-brand-dark/20 rounded-2xl md:rounded-[24px] p-5 sm:p-8 md:p-10 bg-transparent mb-12 md:mb-16">

          {/* Шапка комплексного предложения */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-brand-dark/10 pb-4 mb-6 sm:mb-8">
              <div className="flex flex-col gap-1">
                  <h3 className="font-medium text-xl md:text-2xl lg:text-3xl tracking-tight text-brand-dark uppercase">
                      {title}
                  </h3>
                  {subtitle && (
                    <span className="text-xs md:text-sm font-mono tracking-wider text-brand-dark/50">
              {subtitle}
            </span>
                  )}
              </div>
              {price && (
                <span className="text-xl md:text-2xl font-semibold text-brand-dark tabular-nums min-w-max">
            {price}
          </span>
              )}
          </div>

          {/* Сетка колонок (динамически распределяется в зависимости от количества колонок) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 text-sm lg:text-base text-brand-dark">
              {sections.map((section, idx) => (
                <div
                  key={idx}
                  className={`space-y-3 ${
                    idx > 0
                      ? "border-t md:border-t-0 md:border-l border-brand-dark/10 pt-6 md:pt-0 md:pl-6 lg:pl-8"
                      : ""
                  }`}
                >
                    {section.label && (
                      <span className="text-xs uppercase tracking-widest text-brand-dark/40 font-bold block">
                {section.label}
              </span>
                    )}

                    {/* Рендеринг строк списка — это может быть просто массив строк, либо массив со слэшами */}
                    {Array.isArray(section.items) ? (
                      <ul className="space-y-2 list-disc list-inside font-normal opacity-90 pl-1 leading-relaxed">
                          {section.items.map((item, iIdx) => (
                            <li key={iIdx} className="leading-relaxed">{item}</li>
                          ))}
                      </ul>
                    ) : (
                      <p className="leading-relaxed opacity-80 text-sm lg:text-[15px]">
                          {section.items}
                      </p>
                    )}
                </div>
              ))}
          </div>

      </div>
    );
}