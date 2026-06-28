"use client";

import { m } from "framer-motion";

export default function CloseButton({ onClick, className = "" }) {
  return (
    <m.button
      onClick={onClick}
      whileHover={{ scale: 1.05, rotate: 90 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-brand-dark/10 flex items-center justify-center text-brand-dark hover:border-brand-dark hover:bg-brand-dark hover:text-brand-white transition-colors duration-300 cursor-pointer will-change-transform ${className}`}
      aria-label="Закрыть"
    >
      <svg
        className="w-5 h-5 stroke-current"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </m.button>
  );
}