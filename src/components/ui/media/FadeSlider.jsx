"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import SmartImage from "@/components/ui/media/SmartImage";

// Настраиваем благородные, более медленные тайминги и кривую разгона
const galleryVariants = {
  enter: { opacity: 0 },
  center: {
    opacity: 1,
    transition: {
      opacity: {
        duration: 0.75, // Увеличили время проявления (было 0.35)
        ease: [0.33, 1, 0.68, 1] // Плавный разгон и мягкое замедление (Cubic Bezier)
      }
    }
  },
  exit: {
    opacity: 0,
    transition: {
      opacity: {
        duration: 0.55, // Увеличили время затухания (было 0.25)
        ease: [0.32, 0, 0.67, 0] // Мягкий уход в темноту
      }
    }
  }
};

const getValidIndex = (page, total) => {
  return ((page % total) + total) % total;
};

export default function FadeSlider({ images = [], interval = 6000, className = "" }) {
  const [page, setPage] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (images.length <= 1) return;

    // Увеличили интервал до 6 секунд, чтобы пользователь успел рассмотреть массивный кадр
    const timer = setInterval(() => {
      setPage((prev) => prev + 1);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  if (!images.length) return null;

  const activeIndex = getValidIndex(page, images.length);

  return (
  <div className={`relative overflow-hidden w-full h-full rounded-[32px] isolation-isolate bg-stone-800 ${className}`}>
    <AnimatePresence initial={false} mode="wait">
      <m.div
        key={page}
        variants={galleryVariants}
        initial="enter"
        animate="center"
        exit="exit"
        className="absolute -inset-px overflow-hidden rounded-[32px] will-change-opacity"
      >
        <SmartImage
          src={images[activeIndex]}
          alt={`Атмосфера AURA — кадр ${activeIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
          className="object-cover w-full h-full scale-[1.01]"
          priority={activeIndex === 0}
          loading={activeIndex === 0 && !isMounted ? "eager" : "lazy"}
        />
      </m.div>
    </AnimatePresence>
  </div>
);
}