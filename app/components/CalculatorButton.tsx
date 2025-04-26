"use client";

import React from 'react';
import { CalculatorIcon } from '@heroicons/react/24/outline';
import { useCalculator } from '../context/CalculatorContext';

export default function CalculatorButton() {
  const { openCalculator } = useCalculator();

  return (
    <button
      onClick={openCalculator}
      className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      aria-label="Open Calculator"
    >
      <CalculatorIcon className="h-6 w-6" />
    </button>
  );
} 