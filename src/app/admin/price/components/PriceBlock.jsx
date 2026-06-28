import PriceItemRow from "./PriceItemRow";

import SmartInput from '@/components/ui/inputs/SmartInput';


export default function PriceBlock({
                                     block,
                                     blockIndex,
                                     onBlockChange,
                                     onItemChange,
                                     onAddItem,
                                     onRemoveItem
                                   }) {
  return (
    <div className="border border-brand-dark/10 bg-white/50 p-6 md:p-8 rounded-lg space-y-6">
      {/* Шапка блока */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4 border-b border-brand-dark/5">
        <div>
          <label className="text-xs font-semibold text-brand-dark/40 uppercase tracking-[0.15em] block mb-2">Название группы</label>
          <SmartInput
            type="text"
            value={block.title}
            onChange={(e) => onBlockChange(blockIndex, "title", e.target.value)}
          />
        </div>
        {block.subtitle !== undefined && (
          <div>
            <label className="text-xs font-semibold text-brand-dark/40 uppercase tracking-[0.15em] block mb-2">Условия / Подзаголовок</label>
            <SmartInput
              type="text"
              value={block.subtitle}
              onChange={(e) => onBlockChange(blockIndex, "subtitle", e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Таблица позиций */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
          <tr className="border-b border-brand-dark/10 text-xs text-brand-dark/40 uppercase tracking-wider">
            <th className="py-2 pr-4 font-semibold">Позиция</th>
            <th className="py-2 px-4 font-semibold">Описание</th>
            {block.isSingle ? (
              <th className="py-2 px-4 font-semibold w-36 text-center">Цена</th>
            ) : (
              <>
                <th className="py-2 px-4 font-semibold w-32 text-center">Будни (WD)</th>
                <th className="py-2 px-4 font-semibold w-32 text-center">Выходные (WE)</th>
              </>
            )}
            <th className="py-2 pl-4 text-right w-20">Действие</th>
          </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
          {block.items.map((item, itemIndex) => (
            <PriceItemRow
              key={itemIndex}
              item={item}
              isSingle={block.isSingle}
              onChange={(field, val) => onItemChange(blockIndex, itemIndex, field, val)}
              onRemove={() => onRemoveItem(blockIndex, itemIndex)}
            />
          ))}
          </tbody>
        </table>
      </div>

      {/* Футер блока сноски */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 border-t border-brand-dark/5 gap-4">
        {block.note !== undefined ? (
          <div className="w-full sm:max-w-2xl">
            <label className="text-[10px] font-bold text-brand-dark/30 uppercase tracking-wider block mb-1">Сноска к разделу</label>
            <input
              type="text"
              value={block.note}
              onChange={(e) => onBlockChange(blockIndex, "note", e.target.value)}
              className="w-full bg-transparent border-b border-stone-200 hover:border-stone-400 focus:border-brand-dark/40 py-1 text-xs text-brand-dark/60 italic focus:outline-none transition-colors"
            />
          </div>
        ) : <div />}

        <button
          onClick={() => onAddItem(blockIndex)}
          className="px-4 py-2 border border-brand-dark/20 text-brand-dark/80 hover:bg-brand-dark hover:text-white text-xs uppercase tracking-wider font-medium rounded transition-all ml-auto"
        >
          + Добавить позицию
        </button>
      </div>
    </div>
  );
}