'use client';

import { useCalculator } from '../context/CalculatorContext';
import { CalculatorIcon } from '@heroicons/react/24/outline'; 
import Calculator from './Calculator';
import { useEffect } from 'react';

export default function ClientCalculator() {
  const { isCalculatorOpen, openCalculator } = useCalculator();

  // Handle keyboard shortcut (Ctrl + .)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === '.') {
        e.preventDefault();
        openCalculator();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [openCalculator]);

  return (
    <>
      <button
        onClick={openCalculator}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        aria-label="Open Calculator"
        title="Open Calculator (Ctrl + .)"
      >
        <CalculatorIcon className="h-6 w-6" />
      </button>
      <Calculator />
    </>
  );
} 