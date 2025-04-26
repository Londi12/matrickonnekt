"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import { 
  AcademicCapIcon,
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
  SparklesIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: <AcademicCapIcon className="h-8 w-8 text-blue-600" />,
    title: 'Comprehensive Curriculum',
    description: 'Covering all Grade 12 subjects with detailed lessons and practice materials.'
  },
  {
    icon: <ChartBarIcon className="h-8 w-8 text-blue-600" />,
    title: 'Progress Tracking',
    description: 'Monitor your learning journey with detailed analytics and performance insights.'
  },
  {
    icon: <ClockIcon className="h-8 w-8 text-blue-600" />,
    title: 'Flexible Learning',
    description: 'Study at your own pace with 24/7 access to all learning materials.'
  },
  {
    icon: <UserGroupIcon className="h-8 w-8 text-blue-600" />,
    title: 'Expert Support',
    description: 'Get help from qualified teachers and connect with fellow students.'
  },
  {
    icon: <SparklesIcon className="h-8 w-8 text-blue-600" />,
    title: 'Interactive Learning',
    description: 'Engage with interactive exercises, quizzes, and real-time feedback.'
  },
  {
    icon: <BookOpenIcon className="h-8 w-8 text-blue-600" />,
    title: 'Rich Resources',
    description: 'Access a wide range of study materials, including videos, practice problems, and more.'
  }
];

const testimonials = [
  {
    quote: "Matrickonnekt has transformed how I study mathematics. The interactive lessons make complex concepts easy to understand.",
    author: "Sarah M.",
    role: "Grade 12 Student"
  },
  {
    quote: "The practice problems and immediate feedback have helped me improve my grades significantly.",
    author: "John D.",
    role: "Grade 12 Student"
  },
  {
    quote: "As a teacher, I appreciate how well-structured the content is and how it aligns with the curriculum.",
    author: "Dr. Lisa R.",
    role: "Mathematics Teacher"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Matrickonnekt</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering Grade 12 students with comprehensive, interactive learning resources
            to excel in their academic journey.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Matrickonnekt, we believe that every student deserves access to quality education.
              Our platform is designed to make learning engaging, effective, and accessible,
              helping students achieve their academic goals and prepare for their future.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">Subjects Covered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-gray-600">Practice Problems</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Learning Access</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students who are already improving their grades with Matrickonnekt.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Get Started Now
          </button>
        </div>
      </main>
    </div>
  );
} 