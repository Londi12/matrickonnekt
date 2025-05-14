"use client";

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface Tab {
  id: string;
  label: string;
}

interface MobileResponsiveTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function MobileResponsiveTabs({ tabs, activeTab, onTabChange }: MobileResponsiveTabsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative mb-4">
      {/* Mobile View - Dropdown */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between px-4 py-2 bg-white text-gray-600 rounded-lg border border-gray-200 shadow-sm"
        >
          <span>{tabs.find(tab => tab.id === activeTab)?.label || tabs[0].label}</span>
          <ChevronDownIcon className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
        
        {isExpanded && (
          <div className="absolute z-50 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  onTabChange(tab.id);
                  setIsExpanded(false);
                }}
                className={`w-full text-left px-4 py-2 hover:bg-blue-50 transition-colors ${
                  activeTab === tab.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>      {/* Desktop View - Horizontal Tabs */}
      <div className="hidden lg:block">
        <div className="flex space-x-2 overflow-x-auto border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-6 py-3 rounded-t-lg whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? "bg-white text-blue-600 border-t border-l border-r border-gray-200 font-medium -mb-px"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
