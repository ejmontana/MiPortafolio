import React from 'react';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface LanguageToggleProps {
  currentLang: string;
  onToggle: () => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLang, onToggle }) => {
  return (
    <motion.button
      onClick={onToggle}
      className="fixed top-4 right-24 z-50 bg-white/10 backdrop-blur-sm dark:bg-gray-700/50 text-cyan-600 dark:text-cyan-400 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-white/20 dark:hover:bg-gray-600/50 transition-colors border border-white/20 dark:border-gray-700"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Globe size={20} />
      <span className="font-medium">{currentLang.toUpperCase()}</span>
    </motion.button>
  );
};