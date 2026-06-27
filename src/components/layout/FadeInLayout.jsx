"use client";

import { motion, AnimatePresence } from 'framer-motion';

export default function FadeInLayout({
                                       children,
                                       animateKey, // Ключ для анимации списков (например, activeTabId)
                                       withPresence = false, // Если true, компонент сам добавит AnimatePresence
                                       mode = "wait",
                                       className = "",
                                       delay = 0
                                     }) {
  const content = (
    <motion.div
      key={animateKey}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.4, // Наша эталонная премиальная скорость
        ease: [0.16, 1, 0.3, 1],
        delay: delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );

  if (withPresence) {
    return <AnimatePresence mode={mode}>{content}</AnimatePresence>;
  }

  return content;
}