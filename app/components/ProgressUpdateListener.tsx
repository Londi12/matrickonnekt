'use client';

import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { startProgressUpdates, ProgressUpdate } from '../utils/progressUpdates';

export default function ProgressUpdateListener() {
  useEffect(() => {
    const cleanup = startProgressUpdates((updates: ProgressUpdate[]) => {
      updates.forEach(update => {
        const message = getProgressMessage(update);
        toast(message, {
          icon: getProgressIcon(update.type),
          duration: 5000
        });
      });
    });

    return cleanup;
  }, []);

  return null;
}

function getProgressMessage(update: ProgressUpdate): string {
  switch (update.type) {
    case 'study':
      return `📚 Study Progress: ${update.details}`;
    case 'practice':
      return `✍️ Practice Update: ${update.details}`;
    case 'exam':
      return `📝 Exam Progress: ${update.details}`;
    case 'flashcard':
      return `🗂️ Flashcard Progress: ${update.details}`;
    default:
      return `📊 Progress Update: ${update.details}`;
  }
}

function getProgressIcon(type: ProgressUpdate['type']): string {
  switch (type) {
    case 'study':
      return '📚';
    case 'practice':
      return '✍️';
    case 'exam':
      return '📝';
    case 'flashcard':
      return '🗂️';
    default:
      return '📊';
  }
}
