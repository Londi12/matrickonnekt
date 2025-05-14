export interface DownloadResult {
  success: boolean;
  error?: string;
}

// Used to track which users have accessed which documents
export interface WCEDAccessRecord {
  userId: string;
  documentId: number;
  timestamp: number;
  subject: string;
  paperType?: string;
  resourceType?: 'paper' | 'memo';
  language?: string;
  urlSuccess?: boolean; // Track if the direct URL was successfully used
  fallbackUsed?: boolean; // Track if a fallback was needed
}

// Keep track of document access attempts
const accessRecords: WCEDAccessRecord[] = [];

// Optional function to test if a URL exists (can only be used server-side)
// Note: For client-side usage, we can't reliably check if a URL is valid beforehand,
// so we rely on the fallback mechanism in the UI
async function checkUrlExists(url: string): Promise<boolean> {
  // This function would attempt to verify if a URL exists without downloading it
  // However, this can only work in Node.js/server environments due to CORS restrictions
  // For client-side browser usage, this would not work consistently
  // But here's how it might be implemented server-side:
  /*
  try {
    const response = await fetch(url, { 
      method: 'HEAD',
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
    return response.ok;
  } catch (error) {
    return false;
  }
  */
  
  // For now, return true to avoid blocking downloads
  return true;
}

export async function handleWCEDDownload(
  documentId: number, 
  userId: string, 
  subject: string,
  paperType?: string,
  resourceType?: 'paper' | 'memo',
  language?: string
): Promise<DownloadResult> {
  try {
    // Check if user has accessed too many documents recently 
    const recentAccess = accessRecords.filter(record => 
      record.userId === userId && 
      record.timestamp > Date.now() - 24 * 60 * 60 * 1000 // Last 24 hours
    );

    // Limit of 15 documents per 24 hours per user (increased from 10)
    if (recentAccess.length >= 15) {
      return {
        success: false,
        error: 'Daily download limit reached. Please try again tomorrow.'
      };
    }

    // Record this access attempt with more detailed tracking information
    accessRecords.push({
      userId,
      documentId,
      timestamp: Date.now(),
      subject,
      paperType,
      resourceType,
      language,
      urlSuccess: undefined, // Will be updated later if we can track success
      fallbackUsed: false    // Initially no fallback needed
    });

    // Log the access for analytics purposes (could be expanded to a database in the future)
    console.log(`User ${userId} accessed ${subject} ${paperType || ''} ${resourceType || ''} in ${language || 'default'} language`);
    
    // Create potential analytics event that could be sent to a server
    // This could be expanded to store in a database or analytics service
    const analyticsEvent = {
      eventType: 'paperDownload',
      userId,
      subject,
      year: documentId,
      paperType,
      resourceType,
      language,
      timestamp: new Date().toISOString(),
    };
    
    // For future implementation - analytics tracking
    // e.g., sendAnalyticsEvent(analyticsEvent);
    
    return {
      success: true
    };

  } catch (error) {
    console.error('Download tracking error:', error);
    return {
      success: false,
      error: 'Failed to download document. Please try again later.'
    };
  }
}
