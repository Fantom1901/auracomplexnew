import PageWrapper from "@/components/layout/PageWrapper";
import AnimatedButton from "@/components/ui/buttons/AnimatedButton";
import ChangePasswordForm from "./components/ChangePasswordForm"; // Импортируем форму

export default function AdminDashboardPage() {
    const adminModules = [
        {
            id: "price",
            title: "Прайс-лист",
            desc: "Управление ценами на проживание, оздоровительные программы и дополнительные услуги комплекса.",
            href: "/admin/price",
            isActive: true,
            icon: "💰",
        },
        {
            id: "booking",
            title: "Бронирования",
            desc: "Просмотр текущих заявок, статусы оплаты, управление сеткой заселения гостей.",
            href: "/admin/bookings",
            isActive: false,
            icon: "📅",
        },
        {
            id: "rooms",
            title: "Номерной фонд",
            desc: "Редактирование категорий номеров, лимитов по местам, описаний и галерей.",
            href: "/admin/rooms",
            isActive: false,
            icon: "🏡",
        },
    ];

    return (
      <PageWrapper title="Панель управления">
          <div className="w-full max-w-[1400px] mx-auto bg-light-bg text-brand-dark pb-24 px-4 font-sans selection:bg-brand-dark selection:text-white">

              {/* Сетка карточек модулей */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {adminModules.map((module) => (
                    <div
                      key={module.id}
                      className={`
                relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl border transition-all duration-500 ease-[cubic-bezier(0.16,_1,_0.3,_1)]
                ${module.isActive
                        ? 'bg-white border-brand-dark/10 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)] hover:border-brand-dark/20'
                        : 'bg-stone-50/60 border-stone-200/40 opacity-60'
                      }
              `}
                    >
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-3xl sm:text-4xl select-none">{module.icon}</span>
                                {!module.isActive && (
                                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/30 bg-stone-200/50 px-2 py-0.5 rounded">
                      В разработке
                    </span>
                                )}
                            </div>

                            <div className="space-y-2">
                                <h2 className="text-lg font-semibold tracking-tight text-brand-dark">
                                    {module.title}
                                </h2>
                                <p className="text-xs sm:text-sm text-brand-dark/60 font-light leading-relaxed">
                                    {module.desc}
                                </p>
                            </div>
                        </div>

                        <div className="pt-6 sm:pt-8 border-t border-brand-dark/5 mt-6 sm:mt-8">
                            {module.isActive ? (
                              <AnimatedButton
                                href={module.href}
                                variant="dark"
                                size="sm"
                                animation="shimmer"
                                className="w-full sm:w-auto text-center"
                              >
                                  Открыть модуль
                              </AnimatedButton>
                            ) : (
                              <button
                                disabled
                                className="text-xs uppercase tracking-wider text-brand-dark/20 font-medium cursor-not-allowed"
                              >
                                  Доступ ограничен
                              </button>
                            )}
                        </div>
                    </div>
                  ))}
              </div>

              {/* Секция безопасности */}
              <ChangePasswordForm />

          </div>
      </PageWrapper>
    );
}