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
      className="fixed top-4 right-4 z-50 bg-gray-800 text-cyan-400 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-gray-700 transition-colors border border-gray-700"
    >
      <Globe size={20} />
      <span className="font-medium">{currentLang.toUpperCase()}</span>
    </button>
  );
};