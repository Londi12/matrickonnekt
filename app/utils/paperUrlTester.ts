// Utility for testing WCED paper URLs and providing fallbacks
// This helps verify and track the success of direct paper links

/**
 * Attempts to check if a URL exists without downloading the full content
 * This is done using a HEAD request which is lightweight
 * 
 * Note: This might not work client-side due to CORS restrictions and 
 * should primarily be used server-side.
 */
export async function testUrlExists(url: string): Promise<boolean> {
  try {
    // Note: This approach has limitations in the browser due to CORS
    // A more reliable approach would be to implement this check on the server-side
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
    
    const response = await fetch(url, {
      method: 'HEAD',
      signal: controller.signal,
      mode: 'no-cors' // This limits what we can determine about the response
    });
    
    clearTimeout(timeoutId);
    
    // Due to CORS and no-cors mode, we can't reliably check status
    // This is best-effort only
    return true;
  } catch (error) {
    console.warn(`URL test failed for ${url}:`, error);
    return false;
  }
}

/**
 * Generate alternative URLs for a past paper based on different known patterns
 * Returns an array of URLs to try if the primary URL fails
 */
export function generateAlternativeUrls(
  subject: string, 
  year: string, 
  type: 'paper' | 'memo', 
  language: string = 'en', 
  paperNumber?: string
): string[] {
  // Function to format subject name for URL
  const formatSubjectForUrl = (subject: string): string => {
    // Special formatting for subjects with specific URL structures
    const specialFormats: {[key: string]: string} = {
      'English First Additional Language': 'english-fal',
      'English Home Language': 'english-hl',
      'English Second Additional Language': 'english-sal',
      'Afrikaans First Additional Language': 'afrikaans-eat',
      'Afrikaans Home Language': 'afrikaans-ht',
      'Afrikaans Second Additional Language': 'afrikaans-tat',
      'IsiXhosa First Additional Language': 'isixhosa-fal',
      'IsiXhosa Home Language': 'isixhosa-hl',
      'IsiXhosa Second Additional Language': 'isixhosa-sal',
      'IsiZulu First Additional Language': 'isizulu-fal',
      'IsiZulu Home Language': 'isizulu-hl',
      'Computer Applications Technology': 'computer-application-technology',
      'Mathematical Literacy': 'mathematical-literacy',
    };
    
    if (specialFormats[subject]) {
      return specialFormats[subject];
    }
    
    // Default formatting for other subjects
    return subject.toLowerCase().replace(/\s+/g, '-').replace(/:/g, '-');
  };
  
  const formattedSubject = formatSubjectForUrl(subject);
  
  // Extract paper number if present
  const paperNum = paperNumber ? paperNumber.replace(/[^0-9]/g, '') : '';
  
  // Determine language code for URL
  const langCode = language === 'af' ? 'vraestel' : 'paper';
  const memoLangCode = language === 'af' ? 'memo-afr' : 'memo';
  
  // Base URL for WCED ePortal
  const baseUrl = 'https://wcedeportal.co.za/eresources';
  
  // File name format
  const fileName = type === 'paper' 
    ? `${langCode}${paperNum ? '-' + paperNum : ''}` 
    : `${memoLangCode}${paperNum ? '-' + paperNum : ''}`;
  
  // Generate alternative URLs to try
  return [
    // Primary format: baseUrl/nsc-past-papers/subject/year/file.pdf
    `${baseUrl}/nsc-past-papers/${formattedSubject}/${year}/${fileName}.pdf`,
    
    // Alternative 1: baseUrl/past-papers/subject/year/file.pdf (older format)
    `${baseUrl}/past-papers/${formattedSubject}/${year}/${fileName}.pdf`,
    
    // Alternative 2: baseUrl/nsc-past-papers/subject_year/file.pdf
    `${baseUrl}/nsc-past-papers/${formattedSubject}_${year}/${fileName}.pdf`,
    
    // Alternative 3: baseUrl/nsc-past-papers/subject/file_year.pdf
    `${baseUrl}/nsc-past-papers/${formattedSubject}/${fileName}_${year}.pdf`,
    
    // Alternative 4: Different base folder structure (seen in some cases)
    `${baseUrl}/170622/22/${formattedSubject}/${year}/${fileName}.pdf`,
    
    // Last resort: general portal page
    'https://wcedeportal.co.za/past-papers'
  ];
}

/**
 * Track URL success or failure for analytics
 */
export function trackUrlSuccess(
  url: string, 
  success: boolean, 
  userId: string, 
  subject: string, 
  year: string
): void {
  // This could be implemented to send data to a backend for URL success tracking
  // For now, just log to console
  console.log(`URL ${success ? 'succeeded' : 'failed'}: ${url} for ${subject} (${year}) - User: ${userId}`);
  
  // In a production environment, you would send this data to your analytics service
}
