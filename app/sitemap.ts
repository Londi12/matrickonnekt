import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://matrickonnekt.netlify.app'
  
  // Define routes with their priorities and change frequencies
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/study', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/mock-exam', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/flashcards', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/past-papers', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/study-guides', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/resources', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  return routes
}
