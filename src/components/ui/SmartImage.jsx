import Image from "next/image";
import { getDeterministicPalette } from "@/lib/utils/gradientGenerator";

export default function SmartImage({
                                     src,
                                     alt,
                                     title,
                                     fill = false,
                                     width,
                                     height,
                                     priority = false,
                                     sizes,
                                     className = ""
                                   }) {
  const seedString = title || alt || "default";
  const palette = getDeterministicPalette(seedString);

  // Эталонные скругления нашей дизайн-системы зашиты здесь: rounded-[24px] md:rounded-[40px]
  const containerStyles = `relative w-full h-full overflow-hidden rounded-[24px] md:rounded-[40px] ${className}`;

  // Сценарий 1: Заглушка
  if (!src) {
    return (
      <div
        className={containerStyles}
        style={{
          background: `linear-gradient(135deg, ${palette.bg} 0%, #0d1312 100%)`
        }}
      >
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ backgroundColor: palette.glow }}
        />
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center select-none z-10">
          <span className="text-brand-white/60 text-xs md:text-sm font-medium tracking-widest uppercase">
            [ {seedString} ]
          </span>
        </div>
      </div>
    );
  }

  // Сценарий 2: Оптимизированный Image
  return (
    <div className={containerStyles}>
      <Image
        src={src}
        alt={alt || title || "Изображение"}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        priority={priority}
        sizes={sizes}
        className="object-cover w-full h-full"
      />
    </div>
  );
}