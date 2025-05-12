import React from 'react';
import { UserProgress } from '../types/user';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ProgressAnalyticsProps {
  userProgress: UserProgress;
}

export default function ProgressAnalytics({ userProgress }: ProgressAnalyticsProps) {
  // Process data for charts
  const subjects = Object.entries(userProgress.subjects || {});
  
  // Calculate weekly study time
  const last7Days = [...Array(7)].map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    return date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  });

  // Group activities by date for the last 7 days
  const studyTimeByDay = last7Days.map(day => {
    const dayActivities = userProgress.recentActivity?.filter(activity => {
      const activityDate = new Date(activity.timestamp).toISOString().split('T')[0];
      return activityDate === day;
    }) || [];
    
    // Calculate total study time for that day (minutes)
    const totalMinutes = dayActivities.reduce((sum, activity) => sum + (activity.duration || 0), 0);
    
    return {
      day: new Date(day).toLocaleDateString('en-US', { weekday: 'short' }),
      minutes: totalMinutes
    };
  });

  // Prepare data for subject progress chart
  const subjectProgressData = {
    labels: subjects.map(([name, _]) => name),
    datasets: [
      {
        label: 'Subject Progress (%)',
        data: subjects.map(([_, data]) => data.progress || 0),
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1,
      },
    ],
  };

  // Prepare data for weekly study time chart
  const weeklyStudyData = {
    labels: studyTimeByDay.map(d => d.day),
    datasets: [
      {
        label: 'Study Time (minutes)',
        data: studyTimeByDay.map(d => d.minutes),
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Progress Analytics</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-md font-medium text-gray-700 mb-2">Subject Progress</h3>
          <div className="h-64">
            <Bar options={options} data={subjectProgressData} />
          </div>
        </div>
        
        <div>
          <h3 className="text-md font-medium text-gray-700 mb-2">Weekly Study Time</h3>
          <div className="h-64">
            <Line options={options} data={weeklyStudyData} />
          </div>
        </div>
      </div>
    </div>
  );
}
