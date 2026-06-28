"use client";

import PageWrapper from "@/components/layout/PageWrapper";
import CapsuleTabBar from "@/components/ui/navigation/CapsuleTabBar";
import AnimatedButton from "@/components/ui/buttons/AnimatedButton"; // Подключаем твою кнопку из правильной папки
import PriceBlock from "./components/PriceBlock";
import { useAdminPrice } from "./hooks/useAdminPrice";

export default function AdminPricePage() {
  const {
    categories,
    activeTab,
    setActiveTab,
    currentData,
    notes,
    setNotes,
    isSaving,
    message,
    handleBlockChange,
    handleItemChange,
    addItem,
    removeItem,
    handleSave
  } = useAdminPrice();

  return (
    <PageWrapper title="Управление прайс-листом">
      <div className="w-full bg-light-bg text-brand-dark pb-24 font-sans selection:bg-brand-dark selection:text-white">

        {/* Контроллеры верхнего уровня */}
        <div className="w-full max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-brand-dark/10 pb-6 mb-8 gap-4">
          <p className="text-base font-light text-brand-dark/70 leading-relaxed">
            Режим редактирования цен. Конфиг: <code className="bg-stone-200/60 px-1.5 py-0.5 rounded text-xs font-mono">data/priceData.js</code>.
          </p>

          {/* Твоя новая анимированная кнопка сохранения */}
          <AnimatedButton
            onClick={handleSave}
            disabled={isSaving}
            variant="dark"
            size="sm"
            animation="shimmer"
            className="w-full sm:w-auto"
          >
            {isSaving ? "Сохранение..." : "Сохранить изменения"}
          </AnimatedButton>
        </div>

        {/* Нотификации */}
        {message && (
          <div className="max-w-[1400px] mx-auto mb-6 p-4 bg-stone-100 border border-brand-dark/10 text-sm text-brand-dark font-medium rounded">
            {message}
          </div>
        )}

        {/* Таб-бар */}
        <div className="w-full max-w-[1400px] mx-auto mb-10">
          <CapsuleTabBar tabs={categories} activeId={activeTab.id} onChange={setActiveTab} />
        </div>

        {/* Основные блоки форм */}
        <div className="w-full max-w-[1400px] mx-auto space-y-12">
          {currentData.map((block, bIdx) => (
            <PriceBlock
              key={bIdx}
              block={block}
              blockIndex={bIdx}
              onBlockChange={handleBlockChange}
              onItemChange={handleItemChange}
              onAddItem={addItem}
              onRemoveItem={removeItem}
            />
          ))}
        </div>

        {/* Нижние сноски */}
        {activeTab.id === "stay" && (
          <div className="mt-12 w-full max-w-[1400px] mx-auto border border-brand-dark/10 bg-white/50 p-6 md:p-8 rounded-lg space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-brand-dark/40">Общие примечания к разделу «Проживание»</h3>
            <div className="space-y-3">
              {notes.map((note, idx) => (
                <div key={idx} className="flex gap-4 items-center">
                  <input
                    type="text"
                    value={note}
                    onChange={(e) => {
                      const updated = [...notes];
                      updated[idx] = e.target.value;
                      setNotes(updated);
                    }}
                    className="w-full bg-white border border-stone-200 rounded px-3 py-2 text-sm text-brand-dark/80 focus:outline-none focus:border-brand-dark/40"
                  />
                  <button
                    onClick={() => {
                      const updated = [...notes];
                      updated.splice(idx, 1);
                      setNotes(updated);
                    }}
                    className="text-sm text-brand-dark/40 hover:text-rose-600 px-2 transition-colors"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <button
                onClick={() => setNotes([...notes, "Новая общая сноска"])}
                className="text-xs font-semibold text-brand-dark/60 hover:text-brand-dark uppercase tracking-wider pt-2 inline-block transition-colors"
              >
                + Добавить примечание
              </button>
            </div>
          </div>
        )}

      </div>
    </PageWrapper>
  );
}