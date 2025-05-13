import { Language } from '../context/LanguageContext';

interface TranslatedTheory {
  theory: string[];
  examples: Array<{
    problem: string;
    solution: string;
  }>;
  quiz: Array<{
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }>;
}

export const translatedLessonContent: Record<string, Record<Language, TranslatedTheory>> = {
  'polynomial-equations': {
    en: {
      theory: [
        '<h2 class="text-xl font-bold">💡 Welcome to Polynomial Equations!</h2>',
        '<p class="text-base">In this lesson, we\'ll explore polynomial equations of different degrees. You\'ll learn how to solve quadratic and cubic equations using various methods.</p>',
        // ... more content in English
      ],
      examples: [
        {
          problem: 'Solve the equation: x² + 5x + 6 = 0',
          solution: 'Using factoring method: x² + 5x + 6 = (x + 2)(x + 3) = 0\nx = -2 or x = -3'
        }
        // ... more examples
      ],
      quiz: [
        {
          question: 'What is the degree of the polynomial x³ + 2x² - x + 1?',
          options: ['1', '2', '3', '4'],
          correctAnswer: 2,
          explanation: 'The degree of a polynomial is determined by the highest power of the variable. In this case, x³ has the highest power, so the degree is 3.'
        }
        // ... more quiz questions
      ]
    },
    zu: {
      theory: [
        '<h2 class="text-xl font-bold">💡 Siyakwamukela Ezibalo Zezibalo!</h2>',
        '<p class="text-base">Kulesi sifundo, sizofunda ngezibalo zezibalo zokubhala. Uzofunda ukuxazulula izibalo ze-quadratic ne-cubic ngezindlela ezahlukene.</p>',
        // ... more content in isiZulu
      ],
      examples: [
        {
          problem: 'Xazulula lesi sibalo: x² + 5x + 6 = 0',
          solution: 'Sisebenzisa indlela yokwehlukanisa: x² + 5x + 6 = (x + 2)(x + 3) = 0\nx = -2 noma x = -3'
        }
        // ... more examples
      ],
      quiz: [
        {
          question: 'Ithini idigri yesibalo x³ + 2x² - x + 1?',
          options: ['1', '2', '3', '4'],
          correctAnswer: 2,
          explanation: 'Idigri yesibalo itholakala ngamandla aphakeme kakhulu ezinguquko. Kulesi simo, x³ inamandla aphakeme kakhulu, ngakho idigri ngu-3.'
        }
        // ... more quiz questions
      ]
    },
    af: {
      theory: [
        '<h2 class="text-xl font-bold">💡 Welkom by Polinoomvergelykings!</h2>',
        '<p class="text-base">In hierdie les sal ons polinoomvergelykings van verskillende grade ondersoek. Jy sal leer hoe om kwadratiese en kubiese vergelykings op te los met verskeie metodes.</p>',
        // ... more content in Afrikaans
      ],
      examples: [
        {
          problem: 'Los die vergelyking op: x² + 5x + 6 = 0',
          solution: 'Met gebruik van faktorisering: x² + 5x + 6 = (x + 2)(x + 3) = 0\nx = -2 of x = -3'
        }
        // ... more examples
      ],
      quiz: [
        {
          question: 'Wat is die graad van die polinoom x³ + 2x² - x + 1?',
          options: ['1', '2', '3', '4'],
          correctAnswer: 2,
          explanation: 'Die graad van \'n polinoom word bepaal deur die hoogste mag van die veranderlike. In hierdie geval het x³ die hoogste mag, dus is die graad 3.'
        }
        // ... more quiz questions
      ]
    }
  }
  // Add more lessons here
};
