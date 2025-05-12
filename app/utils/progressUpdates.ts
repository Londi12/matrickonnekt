let progressUpdateInterval: NodeJS.Timeout | null = null;

// Progress update types
export interface ProgressUpdate {
  timestamp: number;
  type: 'study' | 'practice' | 'exam' | 'flashcard';
  details: string;
}

// Store for recent progress updates
const progressUpdates: ProgressUpdate[] = [];

export function startProgressUpdates(callback: (updates: ProgressUpdate[]) => void) {
  if (progressUpdateInterval) {
    clearInterval(progressUpdateInterval);
  }

  progressUpdateInterval = setInterval(() => {
    // Get updates from the last 2 minutes
    const recentUpdates = progressUpdates.filter(
      update => Date.now() - update.timestamp < 120000
    );
    if (recentUpdates.length > 0) {
      callback(recentUpdates);
      // Clear processed updates
      progressUpdates.length = 0;
    }
  }, 120000); // Check every 2 minutes

  return () => {
    if (progressUpdateInterval) {
      clearInterval(progressUpdateInterval);
      progressUpdateInterval = null;
    }
  };
}

export function addProgressUpdate(update: Omit<ProgressUpdate, 'timestamp'>) {
  progressUpdates.push({
    ...update,
    timestamp: Date.now()
  });
}
