"use client";

import { UserMockExamResult, MockPaper } from '@/app/types/mockExam';
import { TrophyIcon, AcademicCapIcon, ClockIcon, ChartBarIcon } from '@heroicons/react/24/outline';

interface MockExamResultProps {
  result: UserMockExamResult;
  paper: MockPaper;
}

export default function MockExamResult({ result, paper }: MockExamResultProps) {
  const percentage = Math.round((result.score / paper.totalMarks) * 100);
  
  const getGrade = (percentage: number) => {
    if (percentage >= 80) return { grade: 'Level 7', color: 'text-green-600' };
    if (percentage >= 70) return { grade: 'Level 6', color: 'text-green-500' };
    if (percentage >= 60) return { grade: 'Level 5', color: 'text-blue-500' };
    if (percentage >= 50) return { grade: 'Level 4', color: 'text-yellow-500' };
    if (percentage >= 40) return { grade: 'Level 3', color: 'text-orange-500' };
    return { grade: 'Level 1-2', color: 'text-red-500' };
  };

  const { grade, color } = getGrade(percentage);

  const badges = {
    exam_pro: {
      name: 'Exam Pro',
      description: 'Scored above 80% in a mock exam',
      icon: '🏆',
    },
    pass_master: {
      name: 'Pass Master',
      description: 'Successfully passed a mock exam',
      icon: '🎯',
    },
    // Add more badges as needed
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Overall Score */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Results</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className={`text-3xl font-bold ${color}`}>{percentage}%</div>
            <div className="text-sm text-gray-600 mt-1">Overall Score</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">{grade}</div>
            <div className="text-sm text-gray-600 mt-1">Achievement Level</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">{result.score}/{paper.totalMarks}</div>
            <div className="text-sm text-gray-600 mt-1">Marks</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">
              {Math.floor(result.timeSpent / 60)}:{(result.timeSpent % 60).toString().padStart(2, '0')}
            </div>
            <div className="text-sm text-gray-600 mt-1">Time Spent</div>
          </div>
        </div>
      </div>

      {/* Badges Earned */}
      {result.badges.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Badges Earned</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {result.badges.map((badgeId) => {
              const badge = badges[badgeId as keyof typeof badges];
              return (
                <div key={badgeId} className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <div className="font-medium text-gray-900">{badge.name}</div>
                  <div className="text-sm text-gray-600">{badge.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Question Breakdown */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Question Breakdown</h3>
        <div className="space-y-4">
          {result.answers.map((answer, index) => {
            const question = paper.questions[index];
            return (
              <div key={question.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200">
                  {index + 1}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`text-sm ${answer.isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                      {answer.marksEarned}/{question.marks} marks
                    </span>
                    <span className="text-sm text-gray-500">• {question.topic}</span>
                  </div>
                  <p className="text-gray-900 mb-2">{question.question}</p>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-medium">Your Answer:</span>
                      <span className={answer.isCorrect ? 'text-green-600' : 'text-red-600'}>
                        {answer.answer || 'No answer provided'}
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Correct Answer:</span>
                      <span className="text-green-600">{question.answer}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Topic Analysis */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Topic Analysis</h3>
        <div className="space-y-4">
          {Object.entries(
            result.answers.reduce((acc, answer) => {
              const question = paper.questions.find(q => q.id === answer.questionId);
              if (!question) return acc;
              
              if (!acc[question.topic]) {
                acc[question.topic] = {
                  total: 0,
                  earned: 0,
                  questions: 0,
                  correct: 0
                };
              }
              
              acc[question.topic].total += question.marks;
              acc[question.topic].earned += answer.marksEarned;
              acc[question.topic].questions++;
              if (answer.isCorrect) acc[question.topic].correct++;
              
              return acc;
            }, {} as Record<string, { total: number; earned: number; questions: number; correct: number }>)
          ).map(([topic, stats]) => (
            <div key={topic} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-900">{topic}</div>
                <div className="text-sm text-gray-600">
                  {stats.correct}/{stats.questions} questions correct
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-gray-900">
                  {Math.round((stats.earned / stats.total) * 100)}%
                </div>
                <div className="text-sm text-gray-600">
                  {stats.earned}/{stats.total} marks
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
