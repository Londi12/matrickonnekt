// This service simulates file storage using base64 encoding in localStorage
import { getItem, setItem } from '../utils/localStorage';

interface StoredFile {
  id: string;
  name: string;
  type: string;
  size: number;
  data: string; // base64 encoded data
}

const FILES_STORAGE_KEY = 'matrickonnekt_files';

export const getStoredFiles = (): StoredFile[] => {
  return getItem<StoredFile[]>(FILES_STORAGE_KEY, []);
};

export const saveFile = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = async () => {
      try {
        const base64Data = reader.result as string;
        const storedFile: StoredFile = {
          id: Math.random().toString(36).substr(2, 9),
          name: file.name,
          type: file.type,
          size: file.size,
          data: base64Data,
        };
        
        const files = getStoredFiles();
        files.push(storedFile);
        setItem(FILES_STORAGE_KEY, files);
        
        // Return a fake URL that can be used to identify this file
        resolve(`local-storage://${storedFile.id}`);
      } catch (error) {
        reject(error);
      }
    };
    
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    
    reader.readAsDataURL(file);
  });
};

export const getFileUrl = (fileId: string): string => {
  const files = getStoredFiles();
  const file = files.find(f => `local-storage://${f.id}` === fileId);
  return file ? file.data : '';
};
