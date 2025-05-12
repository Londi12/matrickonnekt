// Generate a unique ID (similar to Firebase's auto-ID)
export function generateId(): string {
  // Characters used in Firebase-like IDs
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  // Generate a 20-character string
  for (let i = 0; i < 20; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return result;
}

// Parse date string to Date object safely
export function parseDate(dateString: string | Date): Date {
  if (dateString instanceof Date) {
    return dateString;
  }
  
  try {
    const date = new Date(dateString);
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return new Date();
    }
    return date;
  } catch (e) {
    return new Date();
  }
}
