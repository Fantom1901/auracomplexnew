import React, { useId, useState, useRef, useEffect } from 'react';

const SmartInput = ({
                      label,
                      value = '',
                      onChange,
                      type = 'text',
                      placeholder = '',
                      className = '',
                      inputClassName = '',
                      fontMono = false,
                      ...props
                    }) => {
  const inputId = useId();
  const [isFocused, setIsFocused] = useState(false);
  const spanRef = useRef(null);
  const [width, setWidth] = useState(150);

  const isFullWidth = className.includes('w-full');

  useEffect(() => {
    if (spanRef.current && !isFullWidth) {
      // ИСПРАВЛЕНО: Даем инпуту расти, но ограничиваем его, например, в 400px (или выстави сколько тебе комфортно для таблиц)
      const calculatedWidth = spanRef.current.offsetWidth + 40;
      const maxWidth = 400;

      setWidth(Math.min(maxWidth, Math.max(150, calculatedWidth)));
    }
  }, [value, placeholder, isFullWidth]);

  const isLabelActive = isFocused || (value && value.length > 0) || placeholder;

  return (
    // ДОБАВЛЕНО: max-w-full гарантирует, что даже если расчет заглючит, инпут физически не вылезет за родителя
    <div className={`relative flex flex-col max-w-full ${className}`}>

      {!isFullWidth && (
        <span
          ref={spanRef}
          className={`absolute invisible h-0 whitespace-pre text-sm font-medium ${fontMono ? 'font-mono' : 'font-sans'}`}
        >
          {value || placeholder || label}
        </span>
      )}

      <div
        className="relative w-full max-w-full"
        style={isFullWidth ? {} : { width: `${width}px` }}
      >
        <input
          id={inputId}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full h-[52px] bg-white text-brand-dark rounded-xl border border-brand-dark/10
            px-4 text-sm font-medium transition-all duration-300
            focus:border-brand-dark focus:shadow-[0_4px_12px_rgba(0,0,0,0.05)]
            outline-none overflow-x-auto truncate
            ${fontMono ? 'font-mono tracking-tight' : 'font-sans tracking-normal'} 
            ${inputClassName}
          `}
          {...props}
        />

        <label
          htmlFor={inputId}
          className={`
            absolute left-4 pointer-events-none transition-all duration-300 max-w-[calc(100%-2rem)] truncate
            ${isLabelActive
            ? 'top-[6px] text-[10px] text-brand-dark/50'
            : 'top-[18px] text-sm text-brand-dark/40'
          }
          `}
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default SmartInput;