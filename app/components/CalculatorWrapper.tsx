"use client";

import React from 'react';
import { CalculatorProvider } from '../context/CalculatorContext';
import Calculator from './Calculator';
import CalculatorButton from './CalculatorButton';

export default function CalculatorWrapper() {
  return (
    <CalculatorProvider>
      <CalculatorButton />
      <Calculator />
    </CalculatorProvider>
  );
} 