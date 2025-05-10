import React, { useState } from 'react';
import { CalendarIcon, PlusIcon, CheckCircleIcon, TrashIcon } from '@heroicons/react/24/outline';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns';
import { StudyActivity } from '../types/user';

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
  date: string;
}

interface ActivityCalendarProps {
  activities: StudyActivity[];
}

export default function ActivityCalendar({ activities }: ActivityCalendarProps) {
  const today = new Date();
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(today);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [newTodo, setNewTodo] = useState('');

  // Create a map of activities by date
  const activitiesByDate = activities.reduce((acc, activity) => {
    if (!activity || typeof activity !== 'object') {
      console.error('Invalid activity object:', activity);
      return acc;
    }

    try {
      // Convert string timestamp to Date if needed
      let timestamp: Date;
      if (activity.timestamp instanceof Date) {
        timestamp = activity.timestamp;
      } else if (typeof activity.timestamp === 'string') {
        timestamp = new Date(activity.timestamp);
      } else {
        console.error('Invalid timestamp type:', typeof activity.timestamp);
        return acc;
      }
      
      if (isNaN(timestamp.getTime())) {
        console.error('Invalid timestamp value:', activity.timestamp);
        return acc;
      }
      
      const date = format(timestamp, 'yyyy-MM-dd');
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(activity);
      return acc;
    } catch (error) {
      console.error('Error processing activity:', activity, error);
      return acc;
    }
  }, {} as Record<string, StudyActivity[]>);

  // Create a map of todos by date
  const todosByDate = todos.reduce((acc, todo) => {
    if (!acc[todo.date]) {
      acc[todo.date] = [];
    }
    acc[todo.date].push(todo);
    return acc;
  }, {} as Record<string, TodoItem[]>);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim() || !selectedDate) return;

    const todo: TodoItem = {
      id: Date.now().toString(),
      text: newTodo.trim(),
      completed: false,
      date: selectedDate
    };

    setTodos([...todos, todo]);
    setNewTodo('');
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Activity Calendar</h2>
        <CalendarIcon className="h-6 w-6 text-gray-500" />
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {/* Day headers */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
        
        {/* Calendar days */}
        {days.map((day) => {
          const dateStr = format(day, 'yyyy-MM-dd');
          const dayActivities = activitiesByDate[dateStr] || [];
          const dayTodos = todosByDate[dateStr] || [];
          const isCurrentMonth = isSameMonth(day, today);
          const isCurrentDay = isToday(day);
          
          return (
            <div
              key={dateStr}
              onClick={() => setSelectedDate(dateStr)}
              className={`
                relative p-2 text-center rounded-lg cursor-pointer
                ${isCurrentMonth ? 'text-gray-900' : 'text-gray-400'}
                ${isCurrentDay ? 'bg-blue-50' : ''}
                ${dayActivities.length > 0 ? 'bg-green-50' : ''}
                ${selectedDate === dateStr ? 'ring-2 ring-blue-500' : ''}
              `}
            >
              <span className="text-sm">{format(day, 'd')}</span>
              {(dayActivities.length > 0 || dayTodos.length > 0) && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {dayActivities.length > 0 && (
                    <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  )}
                  {dayTodos.length > 0 && (
                    <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-500">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-50 rounded-full mr-2"></div>
          <span>Activity</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-50 rounded-full mr-2"></div>
          <span>Today</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
          <span>Todos</span>
        </div>
      </div>

      {/* Todo Section */}
      {selectedDate && (
        <div className="mt-6 border-t pt-4">
          <h3 className="text-sm font-medium text-gray-900 mb-3">
            Todos for {format(new Date(selectedDate), 'MMMM d, yyyy')}
          </h3>
          
          <form onSubmit={addTodo} className="mb-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new todo..."
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <PlusIcon className="h-4 w-4" />
                Add
              </button>
            </div>
          </form>

          <ul className="space-y-2">
            {todosByDate[selectedDate]?.map(todo => (
              <li
                key={todo.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
              >
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`p-1 rounded-full transition-colors ${
                      todo.completed ? 'text-green-600' : 'text-gray-400'
                    }`}
                  >
                    <CheckCircleIcon className="h-5 w-5" />
                  </button>
                  <span className={`text-sm ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                    {todo.text}
                  </span>
                </div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                >
                  <TrashIcon className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>

          {(!todosByDate[selectedDate] || todosByDate[selectedDate].length === 0) && (
            <p className="text-center text-sm text-gray-500 mt-4">No todos for this day. Add one above!</p>
          )}
        </div>
      )}
    </div>
  );
} 