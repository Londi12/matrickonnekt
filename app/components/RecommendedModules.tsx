import React from 'react';
import { Module } from '../types';
import { AcademicCapIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface RecommendedModulesProps {
  modules: Module[];
}

export default function RecommendedModules({ modules }: RecommendedModulesProps) {
  // Sort modules by progress to show least completed first
  const sortedModules = [...modules].sort((a, b) => a.progress - b.progress);
  // Take just the first 3 modules
  const recommendedModules = sortedModules.slice(0, 3);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Recommended for You</h2>
        <Link href="/study" className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
          View all <ArrowRightIcon className="h-4 w-4 ml-1" />
        </Link>
      </div>
      <div className="space-y-4">
        {recommendedModules.map((module) => (
          <Link 
            href={`/study/${module.id}`} 
            key={module.id}
            className="block transition-all hover:shadow-md"
          >
            <div className="flex items-start p-4 hover:bg-blue-50 rounded-lg border border-gray-100">
              <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                <span className="text-2xl">{module.icon}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">{module.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{module.description}</p>
                <div className="mt-2">
                  <div className="flex items-center">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${module.progress}%` }}
                      />
                    </div>
                    <span className="ml-2 text-sm text-gray-500">{module.progress}%</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
        
        {recommendedModules.length === 0 && (
          <div className="text-center py-8">
            <AcademicCapIcon className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No modules found</p>
          </div>
        )}
      </div>
    </div>
  );
}
