import { Module } from "../types";

export const mathModules: Module[] = [
  {
    id: "mathematical-literacy",
    title: "Mathematical Literacy",
    description: "Essential mathematical skills for everyday life and work",
    icon: "📊",
    progress: 0,
    lessons: [
      {
        id: "numbers-calculations",
        title: "Numbers and Calculations with Numbers",
        theory: [
          '<h2 class="text-xl font-bold">💡 Numbers and Calculations with Numbers</h2>',
          '<p class="text-base">This module covers essential numerical skills needed for everyday life and work.</p>',
          '<br>',
          '<h3 class="text-lg font-bold">📑 Key Topics</h3>',
          '<ul class="list-disc pl-6">',
          '<li class="text-sm">Working with large numbers and decimals</li>',
          '<li class="text-sm">Ratio and proportion</li>',
          '<li class="text-sm">Percentages (increase/decrease, discounts, interest)</li>',
          '<li class="text-sm">Estimations and rounding</li>',
          '</ul>'
        ],
        examples: [],
        interactive: [],
        quiz: []
      },
      {
        id: "patterns-relationships",
        title: "Patterns, Relationships and Representations",
        theory: [
          '<h2 class="text-xl font-bold">💡 Patterns, Relationships and Representations</h2>',
          '<p class="text-base">Learn to identify and work with mathematical patterns and relationships in real-world contexts.</p>',
          '<br>',
          '<h3 class="text-lg font-bold">📑 Key Topics</h3>',
          '<ul class="list-disc pl-6">',
          '<li class="text-sm">Linear, inverse, and exponential relationships</li>',
          '<li class="text-sm">Interpreting and drawing graphs from real-life situations</li>',
          '<li class="text-sm">Describing trends and making predictions from graphs</li>',
          '</ul>'
        ],
        examples: [],
        interactive: [],
        quiz: []
      },
      {
        id: "finance",
        title: "Finance",
        theory: [
          '<h2 class="text-xl font-bold">💡 Finance</h2>',
          '<p class="text-base">Essential financial concepts and calculations for personal and business contexts.</p>',
          '<br>',
          '<h3 class="text-lg font-bold">📑 Key Topics</h3>',
          '<ul class="list-disc pl-6">',
          '<li class="text-sm">Personal and business finance</li>',
          '<li class="text-sm">Budgeting</li>',
          '<li class="text-sm">Income, expenses, profit/loss</li>',
          '<li class="text-sm">Interest (simple and compound)</li>',
          '<li class="text-sm">Loans, hire purchase, savings and investments</li>',
          '<li class="text-sm">Taxation (PAYE, UIF), bank statements, payslips</li>',
          '</ul>'
        ],
        examples: [],
        interactive: [],
        quiz: []
      },
      {
        id: "measurement",
        title: "Measurement",
        theory: [
          '<h2 class="text-xl font-bold">💡 Measurement</h2>',
          '<p class="text-base">Understanding and applying measurement concepts in various contexts.</p>',
          '<br>',
          '<h3 class="text-lg font-bold">📑 Key Topics</h3>',
          '<ul class="list-disc pl-6">',
          '<li class="text-sm">Perimeter, area, volume (2D and 3D objects)</li>',
          '<li class="text-sm">Units of measurement (metric conversions)</li>',
          '<li class="text-sm">Time (24-hour and 12-hour clock, time zones)</li>',
          '<li class="text-sm">Scales, maps, and plans</li>',
          '</ul>'
        ],
        examples: [],
        interactive: [],
        quiz: []
      },
      {
        id: "data-handling",
        title: "Data Handling",
        theory: [
          '<h2 class="text-xl font-bold">💡 Data Handling</h2>',
          '<p class="text-base">Learn to collect, analyze, and interpret data effectively.</p>',
          '<br>',
          '<h3 class="text-lg font-bold">📑 Key Topics</h3>',
          '<ul class="list-disc pl-6">',
          '<li class="text-sm">Collecting and organizing data</li>',
          '<li class="text-sm">Mean, median, mode and range</li>',
          '<li class="text-sm">Graphs (bar graphs, pie charts, histograms, line graphs)</li>',
          '<li class="text-sm">Interpreting data and making decisions</li>',
          '</ul>'
        ],
        examples: [],
        interactive: [],
        quiz: []
      },
      {
        id: "probability",
        title: "Probability",
        theory: [
          '<h2 class="text-xl font-bold">💡 Probability</h2>',
          '<p class="text-base">Understanding chance and probability in everyday situations.</p>',
          '<br>',
          '<h3 class="text-lg font-bold">📑 Key Topics</h3>',
          '<ul class="list-disc pl-6">',
          '<li class="text-sm">Basic chance concepts</li>',
          '<li class="text-sm">Expressing probability as fractions, percentages, ratios</li>',
          '<li class="text-sm">Predicting outcomes of everyday events</li>',
          '<li class="text-sm">Fair vs biased games</li>',
          '</ul>'
        ],
        examples: [],
        interactive: [],
        quiz: []
      }
    ]
  },
  {
    id: "algebra",
    title: "Algebra & Number Patterns",
    description: "Advanced algebraic concepts and problem solving",
    icon: "x",
    progress: 0,
    lessons: [
      {
        id: "cubic-equations",
        title: "Lesson 1: Cubic Equations & Inequalities",
        theory: [
          '<h2 class="text-xl font-bold">💡 Welcome to Cubic Equations & Inequalities!</h2>',
          '<p class="text-base">In this lesson, we\'ll dive into the fascinating world of cubic equations and inequalities. These are fundamental tools in advanced algebra that help us solve complex problems in various fields.</p>',
          '<p class="text-base">By the end of this lesson, you\'ll be able to solve cubic equations, analyze their graphs, and tackle cubic inequalities with confidence.</p>',
          '<br>',
          '<h3 class="text-lg font-bold">✏️ Definition and Background</h3>',
          '<p class="text-base">A cubic equation is a polynomial equation of the third degree, with the general form:</p>',
          '<p class="text-base font-mono">f(x) = ax³ + bx² + cx + d</p>',
          '<p class="text-base">where a, b, c, and d are constants, and a ≠ 0.</p>',
          '<p class="text-base">Cubic equations have been studied since ancient times. Mesopotamian mathematicians solved special cases as early as 2000 BCE, while the general solution was developed in 16th century Italy by mathematicians like Cardano and Tartaglia.</p>',
          '<br>',
          '<h3 class="text-lg font-bold">📑 Core Principles</h3>',
          '<p class="text-base">Understanding cubic equations requires knowledge of several key principles:</p>',
          '<ul class="list-disc pl-6">',
          '<li class="text-sm">A cubic equation always has at least one real root</li>',
          '<li class="text-sm">It can have a maximum of three real roots</li>',
          '<li class="text-sm">If a is positive, the graph rises to the right and falls to the left</li>',
          '<li class="text-sm">If a is negative, the graph falls to the right and rises to the left</li>',
          '<li class="text-sm">The graph of a cubic function can have a maximum of two turning points</li>',
          '</ul>',
          '<br>',
          '<p class="text-base">Methods for solving cubic equations include:</p>',
          '<ol class="list-decimal pl-6">',
          '<li class="text-sm">Factor Theorem and Synthetic Division</li>',
          '<li class="text-sm">Rational Root Theorem</li>',
          '<li class="text-sm">Graphical Methods</li>',
          '<li class="text-sm">Cardano\'s Formula (for general cases)</li>',
          '</ol>',
          '<br>',
          '<h4 class="text-base font-bold">📑 Solving by Factoring</h4>',
          '<p class="text-base">When we can find at least one root, we can use the factor theorem:</p>',
          '<p class="text-base">If r is a root of f(x), then (x - r) is a factor of f(x).</p>',
          '<p class="text-base">After finding one factor, we can use polynomial division to find the remaining quadratic factor.</p>',
          '<br>',
          '<h4 class="text-base font-bold">📑 Cubic Inequalities</h4>',
          '<p class="text-base">A cubic inequality takes the form:</p>',
          '<p class="text-base font-mono">ax³ + bx² + cx + d > 0 (or <, ≥, ≤)</p>',
          '<p class="text-base">To solve, we:</p>',
          '<ol class="list-decimal pl-6">',
          '<li class="text-sm">Find all real roots of the corresponding equation</li>',
          '<li class="text-sm">These roots divide the number line into intervals</li>',
          '<li class="text-sm">Test one point in each interval</li>',
          '<li class="text-sm">Select intervals where the inequality is satisfied</li>',
          '</ol>',
          '<br>',
          '<h3 class="text-lg font-bold">✅ Practical Relevance</h3>',
          '<p class="text-base">Cubic equations and inequalities are used in:</p>',
          '<ul class="list-disc pl-6">',
          '<li class="text-sm">Physics: Modeling motion and vibrations</li>',
          '<li class="text-sm">Engineering: Structural design and analysis</li>',
          '<li class="text-sm">Computer graphics: Creating curved surfaces</li>',
          '<li class="text-sm">Economics: Describing certain market behaviors</li>',
          '<li class="text-sm">Environmental science: Modeling population growth</li>',
          '</ul>',
          '<br>',
          '<h3 class="text-lg font-bold">💡 Conclusion</h3>',
          '<p class="text-base">Cubic equations and inequalities are powerful tools in algebra that help us solve complex problems and model real-world phenomena. Understanding their properties and solution methods provides a strong foundation for advanced mathematical analysis.</p>',
          '<p class="text-base">Remember that practice is essential to mastering these concepts. Try working through different problems to build your confidence and skills.</p>',
          '<br>',
          '<h3 class="text-lg font-bold">❓ Self-Check Questions</h3>',
          '<p class="text-base">Before moving on, ask yourself:</p>',
          '<ul class="list-disc pl-6">',
          '<li class="text-sm">Can you identify the standard form of a cubic equation?</li>',
          '<li class="text-sm">What is the maximum number of real roots a cubic equation can have?</li>',
          '<li class="text-sm">How do you use the factor theorem to solve a cubic equation?</li>',
          '<li class="text-sm">What are the steps for solving a cubic inequality?</li>',
          '<li class="text-sm">Can you think of a real-world application for cubic equations?</li>',
          '</ul>'
        ],
        examples: [
          {
            problem: 'Solve the equation x³ - 6x² + 11x - 6 = 0',
            solution: 'Step 1: Try x = 1\nf(1) = 1³ - 6(1)² + 11(1) - 6 = 1 - 6 + 11 - 6 = 0 ✓\nSo x = 1 is a root, and (x-1) is a factor.\n\nStep 2: Use polynomial division to find the other factors\nx³ - 6x² + 11x - 6 = (x-1)(x² - 5x + 6)\n\nStep 3: Factor the quadratic expression\nx² - 5x + 6 = (x-2)(x-3)\n\nStep 4: Write the complete factorization\nx³ - 6x² + 11x - 6 = (x-1)(x-2)(x-3)\n\nSolution: x = 1, 2, 3'
          },
          {
            problem: 'Find all real roots of 2x³ + 3x² - 11x - 6 = 0',
            solution: 'Step 1: Try some values. Let\'s try x = -2\nf(-2) = 2(-2)³ + 3(-2)² + (-11)(-2) - 6\n     = 2(-8) + 3(4) + 22 - 6\n     = -16 + 12 + 22 - 6 = 0 ✓\n\nStep 2: Use polynomial division to divide by (x+2)\n2x³ + 3x² - 11x - 6 = (x+2)(2x² - x - 3)\n\nStep 3: Factor the quadratic\n2x² - x - 3 = (2x+3)(x-1)\n\nStep 4: Write the complete factorization\n2x³ + 3x² - 11x - 6 = (x+2)(2x+3)(x-1)\n\nSolution: x = -2, -3/2, 1'
          },
          {
            problem: 'Solve the inequality x³ - 4x² + x + 6 > 0',
            solution: 'Step 1: Find the roots of the equation x³ - 4x² + x + 6 = 0\nTrying some values, we can verify that x = -1, 2, and 3 are the roots.\n\nStep 2: These roots divide the number line into 4 intervals: (-∞,-1), (-1,2), (2,3), (3,∞)\n\nStep 3: Test one point in each interval\nInterval (-∞,-1): Try x = -2\nf(-2) = (-2)³ - 4(-2)² + (-2) + 6 = -8 - 16 - 2 + 6 = -20 < 0\n\nInterval (-1,2): Try x = 0\nf(0) = 0³ - 4(0)² + 0 + 6 = 0 - 0 + 0 + 6 = 6 > 0\n\nInterval (2,3): Try x = 2.5\nf(2.5) = (2.5)³ - 4(2.5)² + 2.5 + 6 = 15.625 - 25 + 2.5 + 6 = -0.875 < 0\n\nInterval (3,∞): Try x = 4\nf(4) = 4³ - 4(4)² + 4 + 6 = 64 - 64 + 4 + 6 = 10 > 0\n\nStep 4: Select intervals where f(x) > 0\nSolution: x ∈ (-1,2) ∪ (3,∞)'
          },
          {
            problem: 'Find the local maximum and minimum of f(x) = x³ - 3x² - 9x + 5',
            solution: 'Step 1: Find critical points by calculating f\'(x) = 0\nf\'(x) = 3x² - 6x - 9\n3x² - 6x - 9 = 0\n3(x² - 2x - 3) = 0\nx² - 2x - 3 = 0\n(x-3)(x+1) = 0\nx = 3 or x = -1\n\nStep 2: Calculate the second derivative\nf\'\'(x) = 6x - 6\n\nStep 3: Determine the nature of critical points\nf\'\'(-1) = 6(-1) - 6 = -6 - 6 = -12 < 0, so x = -1 is a local maximum\nf\'\'(3) = 6(3) - 6 = 18 - 6 = 12 > 0, so x = 3 is a local minimum\n\nStep 4: Calculate the function values at these points\nf(-1) = (-1)³ - 3(-1)² - 9(-1) + 5 = -1 - 3 + 9 + 5 = 10 (local maximum)\nf(3) = 3³ - 3(3)² - 9(3) + 5 = 27 - 27 - 27 + 5 = -22 (local minimum)'
          },
          {
            problem: 'The function f(x) = x³ + px² + qx + r has roots at x = -2, x = 1, and x = 3. Find the values of p, q, and r.',
            solution: 'Step 1: Since -2, 1, and 3 are roots, we can write\nf(x) = a(x+2)(x-1)(x-3) where a is a constant\n\nStep 2: Expand the right side\nf(x) = a(x+2)[(x-1)(x-3)]\nf(x) = a(x+2)[x² - 4x + 3]\nf(x) = a[x³ - 4x² + 3x + 2x² - 8x + 6]\nf(x) = a[x³ - 2x² - 5x + 6]\n\nStep 3: Compare with the original form f(x) = x³ + px² + qx + r\nSince the coefficient of x³ is 1, we must have a = 1\nSo f(x) = x³ - 2x² - 5x + 6\n\nStep 4: Identify the values\np = -2, q = -5, r = 6'
          }
        ],
        interactive: [],
        quiz: [
          {
            question: 'What is the maximum number of real roots a cubic equation can have?',
            options: ['1', '2', '3', '4'],
            correctAnswer: 2,
            explanation: 'A cubic equation can have at most 3 real roots. It must have at least 1 real root.'
          },
          {
            question: 'If a cubic equation has roots at x = -1, x = 2, and x = 4, what is its simplified form if the coefficient of x³ is 1?',
            options: [
              'x³ - 5x² + 4x + 8 = 0',
              'x³ - 5x² + 2x + 8 = 0',
              'x³ - 5x² + 6x - 8 = 0',
              'x³ - 5x² - 6x + 8 = 0'
            ],
            correctAnswer: 2,
            explanation: 'The equation is (x+1)(x-2)(x-4) = 0, which expands to x³ - 5x² + 6x - 8 = 0'
          },
          {
            question: 'Which method cannot be used to solve a cubic equation?',
            options: [
              'Factor Theorem',
              'Rational Root Theorem',
              'Quadratic Formula',
              'Synthetic Division'
            ],
            correctAnswer: 2,
            explanation: 'The Quadratic Formula can only be used for quadratic equations. It cannot directly solve cubic equations.'
          },
          {
            question: 'For the cubic function f(x) = -2x³ + 3x² - x + 1, what is true about its end behavior?',
            options: [
              'Rises to the left, falls to the right',
              'Falls to the left, rises to the right',
              'Rises in both directions',
              'Falls in both directions'
            ],
            correctAnswer: 1,
            explanation: 'Since the leading coefficient (-2) is negative, the function falls to the left and rises to the right.'
          },
          {
            question: 'To solve a cubic inequality like x³ - 6x² + 11x - 6 > 0, what is the first step?',
            options: [
              'Graph the function',
              'Find the roots of the corresponding equation',
              'Take the derivative',
              'Apply the quadratic formula'
            ],
            correctAnswer: 1,
            explanation: 'The first step is to find the roots of the equation x³ - 6x² + 11x - 6 = 0, which divide the number line into intervals.'
          }
        ]
      }
    ]
  }
]; 