import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://matrickonnekt.com' // Replace with your actual domain
  
  const routes = [
    '',
    '/about',
    '/study',
    '/mock-exam',
    '/flashcards',
    '/past-papers',
    '/study-guides',
    '/resources',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
