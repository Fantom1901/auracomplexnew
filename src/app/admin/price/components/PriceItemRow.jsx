import React from 'react';
import SmartInput from '@/components/ui/inputs/SmartInput';

export default function priceItemRow({ item, isSingle, onChange, onRemove }) {
  return (
    <tr className="text-sm hover:bg-stone-50/50 transition-colors group/row">
      {/* Название позиции */}
      <td className="py-3 pr-4 w-1/3 align-middle">
        <SmartInput
          value={item.name}
          onChange={(e) => onChange("name", e.target.value)}
          className="w-full"
          inputClassName="!py-2.5" // Делаем инпут компактным специально для таблицы
        />
      </td>

      {/* Описание */}
      <td className="py-3 px-2 align-middle">
        <SmartInput
          value={item.desc}
          onChange={(e) => onChange("desc", e.target.value)}
          className="w-full"
          inputClassName="!py-2.5 text-brand-dark/70"
        />
      </td>

      {/* Ячейки цен */}
      {isSingle ? (
        <td className="py-3 px-2 w-36 align-middle">
          <SmartInput
            value={item.price}
            onChange={(e) => onChange("price", e.target.value)}
            fontMono
            className="w-full"
            inputClassName="!py-2.5 text-center"
          />
        </td>
      ) : (
        <>
          <td className="py-3 px-2 w-32 align-middle">
            <SmartInput
              value={item.wd}
              onChange={(e) => onChange("wd", e.target.value)}
              fontMono
              className="w-full"
              inputClassName="!py-2.5 text-center"
            />
          </td>
          <td className="py-3 px-2 w-32 align-middle">
            <SmartInput
              value={item.we}
              onChange={(e) => onChange("we", e.target.value)}
              fontMono
              className="w-full"
              inputClassName="!py-2.5 text-center"
            />
          </td>
        </>
      )}

      {/* Кнопка удаления */}
      <td className="py-3 pl-4 text-right align-middle w-20">
        <button
          type="button"
          onClick={onRemove}
          className="text-xs uppercase tracking-wider text-rose-600 hover:text-rose-800 font-semibold px-2 py-1 opacity-40 group-hover/row:opacity-100 transition-all duration-300"
        >
          Удалить
        </button>
      </td>
    </tr>
  );
}