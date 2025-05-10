"use client";

import React, { useState, useEffect } from 'react';
import { XMarkIcon, BackspaceIcon } from '@heroicons/react/24/outline';
import { useCalculator } from '../context/CalculatorContext';

export default function Calculator() {
  const { isCalculatorOpen, closeCalculator } = useCalculator();
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [isNewNumber, setIsNewNumber] = useState(true);
  const [isScientificMode, setIsScientificMode] = useState(false);
  const [memory, setMemory] = useState(0);
  const [angleMode, setAngleMode] = useState<'DEG' | 'RAD'>('DEG');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLElement && e.target.closest('.calculator-header')) {
      setIsDragging(true);
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleNumber = (num: string) => {
    if (isNewNumber) {
      setDisplay(num);
      setIsNewNumber(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (operator: string) => {
    setEquation(display + ' ' + operator + ' ');
    setIsNewNumber(true);
  };

  const handleScientificFunction = (func: string) => {
    try {
      let result: number;
      const num = parseFloat(display);
      
      switch (func) {
        // Trigonometric functions
        case 'sin':
          result = Math.sin(angleMode === 'DEG' ? num * Math.PI / 180 : num);
          break;
        case 'cos':
          result = Math.cos(angleMode === 'DEG' ? num * Math.PI / 180 : num);
          break;
        case 'tan':
          result = Math.tan(angleMode === 'DEG' ? num * Math.PI / 180 : num);
          break;
        case 'asin':
          result = angleMode === 'DEG' ? Math.asin(num) * 180 / Math.PI : Math.asin(num);
          break;
        case 'acos':
          result = angleMode === 'DEG' ? Math.acos(num) * 180 / Math.PI : Math.acos(num);
          break;
        case 'atan':
          result = angleMode === 'DEG' ? Math.atan(num) * 180 / Math.PI : Math.atan(num);
          break;

        // Logarithms
        case 'log':
          result = Math.log10(num);
          break;
        case 'ln':
          result = Math.log(num);
          break;

        // Powers and roots
        case 'sqrt':
          result = Math.sqrt(num);
          break;
        case 'square':
          result = num * num;
          break;
        case 'cube':
          result = num * num * num;
          break;
        case 'reciprocal':
          result = 1 / num;
          break;
        case 'exp':
          result = Math.exp(num);
          break;
        case 'pow10':
          result = Math.pow(10, num);
          break;

        // Constants
        case 'pi':
          result = Math.PI;
          break;
        case 'e':
          result = Math.E;
          break;

        // Memory operations
        case 'm+':
          setMemory(memory + num);
          return;
        case 'm-':
          setMemory(memory - num);
          return;
        case 'mr':
          result = memory;
          break;
        case 'mc':
          setMemory(0);
          return;

        // Other functions
        case 'abs':
          result = Math.abs(num);
          break;
        case 'factorial':
          result = factorial(num);
          break;
        case 'percent':
          result = num / 100;
          break;
        default:
          return;
      }
      
      setDisplay(result.toString());
      setIsNewNumber(true);
    } catch (error) {
      setDisplay('Error');
      setIsNewNumber(true);
    }
  };

  const factorial = (n: number): number => {
    if (n < 0 || !Number.isInteger(n)) return NaN;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  };

  const handleEqual = () => {
    try {
      const result = eval(equation + display);
      setDisplay(result.toString());
      setEquation('');
      setIsNewNumber(true);
    } catch (error) {
      setDisplay('Error');
      setEquation('');
      setIsNewNumber(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setIsNewNumber(true);
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
      setIsNewNumber(true);
    }
  };

  const handleDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  if (!isCalculatorOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div 
        className="bg-white rounded-2xl shadow-2xl w-[32rem] overflow-hidden"
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          cursor: isDragging ? 'grabbing' : 'default'
        }}
        onMouseDown={handleMouseDown}
      >
        {/* Header */}
        <div className="calculator-header bg-gradient-to-r from-blue-600 to-blue-700 p-4 cursor-grab">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">Calculator</h2>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setAngleMode(angleMode === 'DEG' ? 'RAD' : 'DEG')}
                className="text-sm bg-white/20 text-white px-3 py-1.5 rounded-lg hover:bg-white/30 transition-colors"
              >
                {angleMode}
              </button>
              <button
                onClick={() => setIsScientificMode(!isScientificMode)}
                className="text-sm bg-white/20 text-white px-3 py-1.5 rounded-lg hover:bg-white/30 transition-colors"
              >
                {isScientificMode ? 'Standard' : 'Scientific'}
              </button>
              <button
                onClick={closeCalculator}
                className="text-white hover:text-gray-200 transition-colors p-1.5 hover:bg-white/20 rounded-lg"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Display */}
        <div className="p-4 bg-gray-50">
          <div className="text-right text-gray-500 text-sm h-6 font-mono">{equation}</div>
          <div className="text-right text-3xl font-bold text-gray-900 h-10 font-mono">{display}</div>
        </div>

        {/* Buttons */}
        <div className="p-4 grid grid-cols-5 gap-2">
          {isScientificMode && (
            <>
              {/* Row 1: Memory and Constants */}
              <button
                onClick={() => handleScientificFunction('m+')}
                className="bg-gray-100 text-gray-800 p-2.5 rounded-lg hover:bg-gray-200 transition-colors"
              >
                M+
              </button>
              <button
                onClick={() => handleScientificFunction('m-')}
                className="bg-gray-100 text-gray-800 p-2.5 rounded-lg hover:bg-gray-200 transition-colors"
              >
                M-
              </button>
              <button
                onClick={() => handleScientificFunction('mr')}
                className="bg-gray-100 text-gray-800 p-2.5 rounded-lg hover:bg-gray-200 transition-colors"
              >
                MR
              </button>
              <button
                onClick={() => handleScientificFunction('mc')}
                className="bg-gray-100 text-gray-800 p-2.5 rounded-lg hover:bg-gray-200 transition-colors"
              >
                MC
              </button>
              <button
                onClick={() => handleScientificFunction('pi')}
                className="bg-gray-100 text-gray-800 p-2.5 rounded-lg hover:bg-gray-200 transition-colors"
              >
                π
              </button>

              {/* Row 2: Trigonometric Functions */}
              <button
                onClick={() => handleScientificFunction('sin')}
                className="bg-gray-100 text-gray-800 p-2.5 rounded-lg hover:bg-gray-200 transition-colors"
              >
                sin
              </button>
              <button
                onClick={() => handleScientificFunction('cos')}
                className="bg-gray-100 text-gray-800 p-2.5 rounded-lg hover:bg-gray-200 transition-colors"
              >
                cos
              </button>
              <button
                onClick={() => handleScientificFunction('tan')}
                className="bg-gray-100 text-gray-800 p-2.5 rounded-lg hover:bg-gray-200 transition-colors"
              >
                tan
              </button>
              <button
                onClick={() => handleScientificFunction('asin')}
                className="bg-gray-100 text-gray-800 p-2.5 rounded-lg hover:bg-gray-200 transition-colors"
              >
                sin⁻¹
              </button>
              <button
                onClick={() => handleScientificFunction('acos')}
                className="bg-gray-100 text-gray-800 p-2.5 rounded-lg hover:bg-gray-200 transition-colors"
              >
                cos⁻¹
              </button>

              {/* Row 3: Logarithms and Powers */}
              <button
                onClick={() => handleScientificFunction('log')}
                className="bg-gray-100 text-gray-800 p-2.5 rounded-lg hover:bg-gray-200 transition-colors"
              >
                log
              </button>
              <button
                onClick={() => handleScientificFunction('ln')}
                className="bg-gray-100 text-gray-800 p-2.5 rounded-lg hover:bg-gray-200 transition-colors"
              >
                ln
              </button>
              <button
                onClick={() => handleScientificFunction('exp')}
                className="bg-gray-100 text-gray-800 p-2.5 rounded-lg hover:bg-gray-200 transition-colors"
              >
                eˣ
              </button>
              <button
                onClick={() => handleScientificFunction('pow10')}
                className="bg-gray-100 text-gray-800 p-2.5 rounded-lg hover:bg-gray-200 transition-colors"
              >
                10ˣ
              </button>
              <button
                onClick={() => handleScientificFunction('reciprocal')}
                className="bg-gray-100 text-gray-800 p-2.5 rounded-lg hover:bg-gray-200 transition-colors"
              >
                1/x
              </button>

              {/* Row 4: Powers and Roots */}
              <button
                onClick={() => handleScientificFunction('square')}
                className="bg-gray-100 text-gray-800 p-2.5 rounded-lg hover:bg-gray-200 transition-colors"
              >
                x²
              </button>
              <button
                onClick={() => handleScientificFunction('cube')}
                className="bg-gray-100 text-gray-800 p-2.5 rounded-lg hover:bg-gray-200 transition-colors"
              >
                x³
              </button>
              <button
                onClick={() => handleScientificFunction('sqrt')}
                className="bg-gray-100 text-gray-800 p-2.5 rounded-lg hover:bg-gray-200 transition-colors"
              >
                √
              </button>
              <button
                onClick={() => handleScientificFunction('factorial')}
                className="bg-gray-100 text-gray-800 p-2.5 rounded-lg hover:bg-gray-200 transition-colors"
              >
                x!
              </button>
              <button
                onClick={() => handleScientificFunction('abs')}
                className="bg-gray-100 text-gray-800 p-2.5 rounded-lg hover:bg-gray-200 transition-colors"
              >
                |x|
              </button>
            </>
          )}

          {/* Standard Calculator Buttons */}
          <button
            onClick={handleClear}
            className="col-span-2 bg-red-100 text-red-800 p-2.5 rounded-lg hover:bg-red-200 transition-colors"
          >
            Clear
          </button>
          <button
            onClick={handleBackspace}
            className="bg-gray-100 text-gray-800 p-2.5 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <BackspaceIcon className="h-5 w-5 mx-auto" />
          </button>
          <button
            onClick={() => handleScientificFunction('percent')}
            className="bg-gray-100 text-gray-800 p-2.5 rounded-lg hover:bg-gray-200 transition-colors"
          >
            %
          </button>
          <button
            onClick={() => handleOperator('/')}
            className="bg-blue-100 text-blue-800 p-2.5 rounded-lg hover:bg-blue-200 transition-colors"
          >
            ÷
          </button>

          {[7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num.toString())}
              className="bg-white text-gray-900 p-2.5 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleOperator('*')}
            className="bg-blue-100 text-blue-800 p-2.5 rounded-lg hover:bg-blue-200 transition-colors"
          >
            ×
          </button>

          {[4, 5, 6].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num.toString())}
              className="bg-white text-gray-900 p-2.5 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleOperator('-')}
            className="bg-blue-100 text-blue-800 p-2.5 rounded-lg hover:bg-blue-200 transition-colors"
          >
            -
          </button>

          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num.toString())}
              className="bg-white text-gray-900 p-2.5 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleOperator('+')}
            className="bg-blue-100 text-blue-800 p-2.5 rounded-lg hover:bg-blue-200 transition-colors"
          >
            +
          </button>

          <button
            onClick={() => handleNumber('0')}
            className="bg-white text-gray-900 p-2.5 rounded-lg hover:bg-gray-50 transition-colors shadow-sm col-span-2"
          >
            0
          </button>
          <button
            onClick={handleDecimal}
            className="bg-white text-gray-900 p-2.5 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
          >
            .
          </button>
          <button
            onClick={handleEqual}
            className="bg-blue-600 text-white p-2.5 rounded-lg hover:bg-blue-700 transition-colors row-span-2"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
} 