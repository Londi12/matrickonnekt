import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Study - Interactive Grade 12 Learning Resources | Matrickonnekt',
  description: 'Access comprehensive Grade 12 study materials with interactive lessons, practice exercises, and expert guidance in Mathematics, Physical Sciences, Life Sciences, and more. Prepare effectively for your matric exams.',
  keywords: [
    'grade 12 study',
    'matric study materials',
    'online learning south africa',
    'mathematics lessons grade 12',
    'physical science tutorials',
    'life sciences study guide',
    'interactive learning matric',
    'matric exam preparation',
    'grade 12 practice exercises',
    'south african curriculum'
  ],
  openGraph: {
    title: 'Study - Interactive Grade 12 Learning Resources | Matrickonnekt',
    description: 'Master your Grade 12 subjects with our comprehensive study materials, interactive lessons, and expert-guided practice exercises. Join thousands of successful matric students.',
    type: 'website',
    url: 'https://matrickonnekt.netlify.app/study',
    images: [{
      url: '/study-resources-preview.jpg',
      width: 1200,
      height: 630,
      alt: 'Matrickonnekt Study Resources Preview'
    }]
  },
  alternates: {    canonical: 'https://matrickonnekt.netlify.app/study',
    languages: {
      'en-ZA': 'https://matrickonnekt.netlify.app/study',
      'zu': 'https://matrickonnekt.netlify.app/zu/study',
      'af': 'https://matrickonnekt.netlify.app/af/study'
    }
  }
}
