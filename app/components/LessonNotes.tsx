import React, { useState, useEffect } from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

interface Note {
  id: string;
  content: string;
  timestamp: Date;
}

interface LessonNotesProps {
  lessonId: string;
  subjectId: string;
  topicId: string;
  onSave: (notes: Note[]) => void;
}

export default function LessonNotes({ 
  lessonId, 
  subjectId, 
  topicId,
  onSave 
}: LessonNotesProps) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState('');
  const [isEditing, setIsEditing] = useState<string | null>(null);

  useEffect(() => {
    // Load saved notes from localStorage
    const savedNotes = localStorage.getItem(`notes_${subjectId}_${topicId}_${lessonId}`);
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, [lessonId, subjectId, topicId]);

  const handleAddNote = () => {
    if (newNote.trim()) {
      const note: Note = {
        id: Date.now().toString(),
        content: newNote,
        timestamp: new Date()
      };
      const updatedNotes = [...notes, note];
      setNotes(updatedNotes);
      setNewNote('');
      onSave(updatedNotes);
      localStorage.setItem(
        `notes_${subjectId}_${topicId}_${lessonId}`,
        JSON.stringify(updatedNotes)
      );
    }
  };

  const handleDeleteNote = (noteId: string) => {
    const updatedNotes = notes.filter(note => note.id !== noteId);
    setNotes(updatedNotes);
    onSave(updatedNotes);
    localStorage.setItem(
      `notes_${subjectId}_${topicId}_${lessonId}`,
      JSON.stringify(updatedNotes)
    );
  };

  const handleEditNote = (noteId: string, content: string) => {
    const updatedNotes = notes.map(note =>
      note.id === noteId ? { ...note, content } : note
    );
    setNotes(updatedNotes);
    onSave(updatedNotes);
    localStorage.setItem(
      `notes_${subjectId}_${topicId}_${lessonId}`,
      JSON.stringify(updatedNotes)
    );
    setIsEditing(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Lesson Notes</h3>
      
      <div className="mb-4">
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Add a new note..."
          className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
        <button
          onClick={handleAddNote}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Add Note
        </button>
      </div>

      <div className="space-y-4">
        {notes.map((note) => (
          <div key={note.id} className="bg-gray-50 rounded-lg p-3">
            {isEditing === note.id ? (
              <div>
                <textarea
                  value={note.content}
                  onChange={(e) => handleEditNote(note.id, e.target.value)}
                  className="w-full h-24 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
                <div className="flex justify-end space-x-2 mt-2">
                  <button
                    onClick={() => setIsEditing(null)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-200 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleEditNote(note.id, note.content)}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-gray-900 whitespace-pre-wrap">{note.content}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-500">
                    {new Date(note.timestamp).toLocaleString()}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setIsEditing(note.id)}
                      className="p-1 text-gray-600 hover:text-blue-600"
                    >
                      <PencilIcon className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteNote(note.id)}
                      className="p-1 text-gray-600 hover:text-red-600"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 