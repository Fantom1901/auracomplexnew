"use client";

export function CatalogTableRow({ name, description, extraInfo, mainInfo }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-1 md:gap-4 py-3 md:py-2.5 border-b border-brand-dark/5 md:border-none w-full">

      {/* Левая часть: Название и описание под ним */}
      <div className="flex flex-col flex-1">
        <span className="font-medium md:font-normal text-[15px] md:text-base lg:text-lg text-brand-dark leading-snug">
          {name}
        </span>
        {description && (
          <p className="text-xs md:text-sm text-brand-dark/50 font-normal mt-0.5 leading-normal max-w-2xl">
            {description}
          </p>
        )}
      </div>

      {/* Адаптивная пунктирная линия */}
      <div className="hidden md:block flex-1 border-b border-dashed border-stone-300 relative bottom-[6px] mx-3" />

      {/* Правая часть: Метрики (Граммы, цены ПН-ЧТ / ПТ-ВС) */}
      <div className="flex items-center gap-6 md:gap-8 lg:gap-12 font-medium text-brand-dark min-w-max mt-1 md:mt-0 text-sm md:text-base lg:text-lg">
        {extraInfo && (
          <div className="flex md:flex-col items-center md:items-end gap-1.5 md:p-0">
            <span className="tabular-nums font-normal text-brand-dark/40 text-xs md:text-sm">
              {extraInfo}
            </span>
          </div>
        )}

        {mainInfo && (
          <div className="flex md:flex-col items-center md:items-end gap-1.5 md:p-0">
            <span className="tabular-nums font-semibold md:font-medium text-brand-dark">
              {mainInfo}
            </span>
          </div>
        )}
      </div>

    </div>
  );
}

export function CatalogTableSection({ title, subtitle, children, headers = [] }) {
  return (
    <div className="mb-12 md:mb-16 last:mb-0 w-full">
      {/* Заголовок подкатегории */}
      <div className="mb-5 md:mb-6">
        <h3 className="font-medium text-lg md:text-xl lg:text-2xl tracking-tight text-brand-dark uppercase tracking-wider">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs md:text-sm text-brand-dark/50 mt-1 font-normal max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Шапка таблицы для десктопов (если переданы заголовки) */}
      {headers.length > 0 && (
        <div className="hidden md:grid grid-cols-12 gap-4 pb-2 border-b border-brand-dark/10 text-xs lg:text-sm uppercase tracking-widest font-semibold text-brand-dark/40 mb-4">
          <div className="col-span-7">{headers[0]}</div>
          {headers[1] && <div className="col-span-3 text-right">{headers[1]}</div>}
          {headers[2] && <div className="col-span-2 text-right">{headers[2]}</div>}
        </div>
      )}

      {/* Рендеринг строк */}
      <div className="flex flex-col gap-1 md:gap-3">
        {children}
      </div>
    </div>
  );
}