import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  currentLang: string;
  onToggle: () => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLang, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 z-50 bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-gray-50 transition-colors"
    >
      <Globe size={20} />
      <span className="font-medium">{currentLang.toUpperCase()}</span>
    </button>
  );
};