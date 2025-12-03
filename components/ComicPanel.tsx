import React from 'react';

interface ComicPanelProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'alert' | 'dark';
}

export const ComicPanel: React.FC<ComicPanelProps> = ({ children, className = '', variant = 'primary' }) => {
  const getBgColor = () => {
    switch (variant) {
      case 'alert': return 'bg-brand-red text-white';
      case 'secondary': return 'bg-brand-yellow text-black';
      case 'dark': return 'bg-brand-dark text-white';
      default: return 'bg-white text-black';
    }
  };

  return (
    <div className={`border-4 border-black p-6 md:p-10 shadow-comic transition-transform hover:-translate-y-1 ${getBgColor()} ${className}`}>
      {children}
    </div>
  );
};

export const SpeechBubble: React.FC<{ children: React.ReactNode; direction?: 'left' | 'right' }> = ({ children, direction = 'left' }) => {
  return (
    <div className={`relative bg-white border-2 border-black p-4 rounded-xl shadow-comic-sm text-black font-body font-semibold mb-6 max-w-lg ${direction === 'right' ? 'ml-auto' : ''}`}>
      {children}
      <div className={`absolute bottom-[-10px] w-4 h-4 bg-white border-r-2 border-b-2 border-black transform rotate-45 ${direction === 'right' ? 'right-8' : 'left-8'}`}></div>
    </div>
  );
};