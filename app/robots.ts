import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/profile/',
          '/*?*', // Disallow URLs with query parameters
          '/*/amp/' // Disallow AMP pages if you have any
        ],
      }
    ],    sitemap: 'https://matrickonnekt.netlify.app/sitemap.xml',
    host: 'https://matrickonnekt.netlify.app'
  }
}
