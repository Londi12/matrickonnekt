export function generateCourseSchema(course: {
  name: string;
  description: string;
  provider?: string;
  topics?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: course.provider || 'Matrickonnekt',
      sameAs: 'https://matrickonnekt.netlify.app'
    },
    ...(course.topics && {
      hasCourseInstance: course.topics.map(topic => ({
        '@type': 'CourseInstance',
        name: topic
      }))
    })
  }
}

export function generateEducationalOrgSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Matrickonnekt',
    description: 'Comprehensive Grade 12 learning platform featuring interactive lessons, mock exams, and study resources',
    url: 'https://matrickonnekt.netlify.app',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ZA'
    }
  }
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  datePublished: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    publisher: {
      '@type': 'Organization',
      name: 'Matrickonnekt',
      logo: {
        '@type': 'ImageObject',
        url: 'https://matrickonnekt.com/logo.png' // Replace with actual logo URL
      }
    },
    ...(article.image && {
      image: article.image
    })
  }
}
