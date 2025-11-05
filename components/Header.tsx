import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

interface HeaderProps {
  currentLang: string;
  onLangChange: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentLang, onLangChange }) => {
  return (
    <header className="bg-card/80 backdrop-blur-sm sticky top-0 z-10 border-b border-border/50">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center gap-4">
        <a href="#" className="text-2xl font-bold tracking-wider text-accent hover:text-accent-hover transition-colors">
          // MINIMALIST.BLOG
        </a>
        <div className="flex items-center gap-2">
          <LanguageSwitcher currentLang={currentLang} onLangChange={onLangChange} />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
