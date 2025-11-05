import React, { useContext, useState, useRef, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
    </svg>
);

const ThemeSwitcher: React.FC = () => {
  const context = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  if (!context) {
    return null;
  }

  const { theme, setTheme, availableThemes } = context;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-card text-text-primary hover:bg-border/50 transition-colors"
        aria-label="Select theme"
      >
        <ThemeIcon />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-card rounded-lg shadow-lg border border-border z-20">
          <ul className="py-1">
            {availableThemes.map((t) => (
              <li key={t.name}>
                <button
                  onClick={() => {
                    setTheme(t.name);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm capitalize ${
                    theme.name === t.name
                      ? 'text-accent font-bold'
                      : 'text-text-primary hover:bg-background'
                  }`}
                >
                  {t.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;