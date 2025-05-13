import { Language } from '../context/LanguageContext';

interface TranslatedContent {
  title: string;
  description: string;
  content: string;
  topics: string[];
}

interface LessonTranslations {
  en: TranslatedContent;
  zu: TranslatedContent;
  af: TranslatedContent;
}

export const getLessonTranslations = (lessonId: string, language: Language = 'en'): TranslatedContent | null => {
  const translations = lessonTranslationsMap[lessonId];
  return translations ? translations[language] : null;
};

// Example translation map
const lessonTranslationsMap: Record<string, LessonTranslations> = {
  'polynomial-equations': {
    en: {
      title: 'Polynomial Equations',
      description: 'Learn about polynomial equations and their solutions',
      content: 'Content in English',
      topics: ['Polynomial basics', 'Factoring', 'Solving equations']
    },
    zu: {
      title: 'Izibalo Zezibalo',
      description: 'Funda ngezibalo zezibalo nezixazululo zazo',
      content: 'Okuqukethwe ngesiZulu',
      topics: ['Izisekelo zezibalo', 'Ukwahlulela', 'Ukuxazulula izibalo']
    },
    af: {
      title: 'Polinoomvergelykings',
      description: 'Leer oor polinoomvergelykings en hul oplossings',
      content: 'Inhoud in Afrikaans',
      topics: ['Polinoombasisse', 'Faktorisering', 'Vergelykings oplos']
    }
  }
  // Add more lesson translations here
};

interface SubjectTranslations {
  name: string;
  description: string;
}

const subjectTranslationsMap: Record<string, Record<Language, SubjectTranslations>> = {
  mathematics: {
    en: {
      name: 'Mathematics',
      description: 'Grade 12 Mathematics covering advanced algebra, calculus, and geometry'
    },
    zu: {
      name: 'IziBalo',
      description: 'IziBalo zebanga le-12 zifaka i-algebra ephakeme, i-calculus, ne-geometry'
    },
    af: {
      name: 'Wiskunde',
      description: 'Graad 12 Wiskunde wat gevorderde algebra, calculus en meetkunde dek'
    }
  },
  // Add more subject translations
};

export const getSubjectTranslations = (subjectId: string, language: Language = 'en'): SubjectTranslations | null => {
  const translations = subjectTranslationsMap[subjectId];
  return translations ? translations[language] : null;
};

interface TopicTranslations {
  name: string;
  description: string;
}

const topicTranslationsMap: Record<string, Record<Language, TopicTranslations>> = {
  algebra: {
    en: {
      name: 'Algebra',
      description: 'Advanced algebraic concepts and problem solving'
    },
    zu: {
      name: 'I-Algebra',
      description: 'Imiqondo yezibalo ephakeme nokuxazulula izinkinga'
    },
    af: {
      name: 'Algebra',
      description: 'Gevorderde algebraïese konsepte en probleemoplossing'
    }
  },
  // Add more topic translations
};

export const getTopicTranslations = (topicId: string, language: Language = 'en'): TopicTranslations | null => {
  const translations = topicTranslationsMap[topicId];
  return translations ? translations[language] : null;
};
