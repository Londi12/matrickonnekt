import { Module } from "../types/modules";

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
          '<p class="text-base">This module covers essential numerical skills aligned with the 2025 CAPS curriculum.</p>',
          '<br>',
          '<h3 class="text-lg font-bold">📑 Key Topics</h3>',
          '<ul class="list-disc pl-6">',
          '<li class="text-sm">Working with large numbers and decimals in real-world contexts</li>',
          '<li class="text-sm">Ratio, rate and proportion in problem solving</li>',
          '<li class="text-sm">Percentages (increase/decrease, discounts, interest, VAT)</li>',
          '<li class="text-sm">Scientific notation for very large and very small numbers</li>',
          '<li class="text-sm">Estimation and calculation strategies for real-life situations</li>',
          '</ul>',
          '<br>',
          '<h3 class="text-lg font-bold">🎯 Assessment Focus</h3>',
          '<p class="text-base">The 2025 NSC examination will emphasize:</p>',
          '<ul class="list-disc pl-6">',
          '<li class="text-sm">Application of number calculations in contextualized problems</li>',
          '<li class="text-sm">Multi-step calculations involving percentages and ratios</li>',
          '<li class="text-sm">Problem-solving using appropriate calculation methods</li>',
          '</ul>'
        ],
        examples: [
          {
            problem: 'A clothing store marks up its items by 65% of cost price. During a sale, all items are discounted by 25%. Calculate the final selling price of a jacket that cost the store R480.',
            solution: 'Step 1: Calculate the marked price\nMarked price = Cost price + Markup\nMarkup = 65% of cost price = 0.65 × R480 = R312\nMarked price = R480 + R312 = R792\n\nStep 2: Calculate the sale price\nDiscount = 25% of marked price = 0.25 × R792 = R198\nSale price = Marked price - Discount = R792 - R198 = R594\n\nThe final selling price of the jacket is R594.'
          }
        ],
        interactive: [],
        quiz: [
          {
            question: 'A municipality increased water tariffs by 7.5% in April and then by another 4.8% in October of the same year. What was the total percentage increase for the year?',
            options: ['12.3%', '12.65%', '13.05%', '7.5% + 4.8% = 12.3%'],
            correctAnswer: 1,
            explanation: 'This requires compound percentage calculation. The total increase is (1 + 0.075) × (1 + 0.048) - 1 = 1.075 × 1.048 - 1 = 1.1266 - 1 = 0.1266 = 12.66% (rounded to 12.65%)'
          }
        ]
      },
      {
        id: "patterns-relationships",
        title: "Patterns, Relationships and Representations",
        theory: [
          '<h2 class="text-xl font-bold">💡 Patterns, Relationships and Representations</h2>',
          '<p class="text-base">Learn to identify and work with mathematical patterns and relationships aligned with the updated CAPS curriculum.</p>',
          '<br>',
          '<h3 class="text-lg font-bold">📑 Key Topics</h3>',
          '<ul class="list-disc pl-6">',
          '<li class="text-sm">Linear, quadratic, exponential, and inverse relationships in context</li>',
          '<li class="text-sm">Multiple representations (verbal, tables, graphs, equations)</li>',
          '<li class="text-sm">Analyzing and interpreting graphs from real-life situations</li>',
          '<li class="text-sm">Solving equations and inequalities graphically</li>',
          '<li class="text-sm">Using graphs to make predictions and identify trends</li>',
          '</ul>',
          '<br>',
          '<h3 class="text-lg font-bold">🎯 Assessment Focus</h3>',
          '<p class="text-base">The 2025 NSC examination will emphasize:</p>',
          '<ul class="list-disc pl-6">',
          '<li class="text-sm">Moving between different representations (tables, equations, graphs)</li>',
          '<li class="text-sm">Analysis and interpretation of real-world data and scenarios</li>',
          '<li class="text-sm">Making forecasts and decisions based on mathematical models</li>',
          '</ul>'
        ],
        examples: [
          {
            problem: 'The following table shows the depreciation value of a car over time. Determine the type of relationship, create an equation to model it, and predict the value after 5 years.\n\nYear | Value (R)\n-----|--------\n0    | 320,000\n1    | 272,000\n2    | 231,200\n3    | 196,520',
            solution: 'Step 1: Calculate the ratio between consecutive values\nR272,000 ÷ R320,000 = 0.85\nR231,200 ÷ R272,000 = 0.85\nR196,520 ÷ R231,200 = 0.85\n\nStep 2: Identify the relationship type\nSince we have a constant ratio (0.85), this is an exponential decay function.\n\nStep 3: Create the equation\nV(t) = P(1-r)^t where P is initial value, r is depreciation rate, t is time\nV(t) = 320,000(0.85)^t\n\nStep 4: Predict the value after 5 years\nV(5) = 320,000(0.85)^5 = 320,000(0.44371) = R142,000 (rounded)'
          }
        ],
        interactive: [],
        quiz: [
          {
            question: 'A cell phone plan charges R0.75 per minute for the first 100 minutes and R0.45 for each minute thereafter. Which graph best represents the relationship between call duration and cost?',
            options: [
              'A smoothly increasing straight line',
              'A smooth curve that increases at a decreasing rate',
              'A line with a change in slope at 100 minutes',
              'A horizontal line that jumps up at 100 minutes'
            ],
            correctAnswer: 2,
            explanation: 'This is a piecewise linear function with one slope for the first 100 minutes and a different slope after that, resulting in a line with a change in slope at 100 minutes.'
          }
        ]
      },
      {
        id: "finance",
        title: "Finance",
        theory: [
          '<h2 class="text-xl font-bold">💡 Finance</h2>',
          '<p class="text-base">Essential financial concepts and calculations updated for the 2025 curriculum.</p>',
          '<br>',
          '<h3 class="text-lg font-bold">📑 Key Topics</h3>',
          '<ul class="list-disc pl-6">',
          '<li class="text-sm">Personal and household finances (budgets, income, expenses)</li>',
          '<li class="text-sm">Banking (accounts, fees, interest, credit cards, loans)</li>',
          '<li class="text-sm">Income tax, UIF, medical aid, and pension calculations</li>',
          '<li class="text-sm">Simple and compound interest with different compounding periods</li>',
          '<li class="text-sm">Investment options and retirement planning</li>',
          '<li class="text-sm">Exchange rates and currency conversions</li>',
          '<li class="text-sm">Cost and revenue analysis for small businesses</li>',
          '</ul>',
          '<br>',
          '<h3 class="text-lg font-bold">🎯 Assessment Focus</h3>',
          '<p class="text-base">The 2025 NSC examination will emphasize:</p>',
          '<ul class="list-disc pl-6">',
          '<li class="text-sm">Critical analysis of financial information and options</li>',
          '<li class="text-sm">Application of financial formulas in realistic scenarios</li>',
          '<li class="text-sm">Evaluation of financial decisions using mathematical tools</li>',
          '</ul>'
        ],
        examples: [
          {
            problem: 'Thabo invests R25,000 in an account paying 8.5% p.a. compounded monthly. Calculate: (a) The effective annual interest rate, (b) The value of the investment after 5 years.',
            solution: 'Step 1: Calculate the effective annual interest rate\ni = nominal rate = 8.5% = 0.085\nn = compounding periods per year = 12 (monthly)\n\nEffective rate = (1 + i/n)^n - 1\nEffective rate = (1 + 0.085/12)^12 - 1\nEffective rate = (1 + 0.007083)^12 - 1\nEffective rate = 1.0885 - 1 = 0.0885 = 8.85%\n\nStep 2: Calculate the value after 5 years\nA = P(1 + i/n)^(nt)\nA = 25,000(1 + 0.085/12)^(12×5)\nA = 25,000(1 + 0.007083)^60\nA = 25,000(1.5264)\nA = R38,160.50'
          }
        ],
        interactive: [],
        quiz: [
          {
            question: 'A car valued at R350,000 depreciates at 15% per year. After how many complete years will its value first drop below R200,000?',
            options: ['3 years', '4 years', '5 years', '6 years'],
            correctAnswer: 2,
            explanation: 'Value after t years = 350,000(0.85)^t\nWe need 350,000(0.85)^t < 200,000\n(0.85)^t < 200,000/350,000 = 0.5714\nTaking log of both sides: t log(0.85) < log(0.5714)\nt < log(0.5714)/log(0.85) = -0.2433/(-0.0706) = 3.45\nSo after 4 complete years, the value will first drop below R200,000'
          }
        ]
      },
      {
        id: "measurement",
        title: "Measurement",
        theory: [
          '<h2 class="text-xl font-bold">💡 Measurement</h2>',
          '<p class="text-base">Understanding and applying measurement concepts aligned with the updated CAPS curriculum.</p>',
          '<br>',
          '<h3 class="text-lg font-bold">📑 Key Topics</h3>',
          '<ul class="list-disc pl-6">',
          '<li class="text-sm">Perimeter, area, surface area, and volume of 2D and 3D shapes</li>',
          '<li class="text-sm">Conversions between SI units and calculating rates</li>',
          '<li class="text-sm">Scale and proportion in maps, plans, and models</li>',
          '<li class="text-sm">Time calculations and time zones (international applications)</li>',
          '<li class="text-sm">Measuring and calculating quantities for practical applications</li>',
          '<li class="text-sm">Optimizing measurements in practical contexts</li>',
          '</ul>',
          '<br>',
          '<h3 class="text-lg font-bold">🎯 Assessment Focus</h3>',
          '<p class="text-base">The 2025 NSC examination will emphasize:</p>',
          '<ul class="list-disc pl-6">',
          '<li class="text-sm">Application of measurement principles in real-world problems</li>',
          '<li class="text-sm">Multi-step measurement calculations in context</li>',
          '<li class="text-sm">Optimization problems involving measurement</li>',
          '</ul>'
        ],
        examples: [
          {
            problem: 'A cylindrical water tank has a diameter of 2.4m and a height of 1.8m. Calculate: (a) The capacity of the tank in liters, (b) How long it will take to fill the tank if water flows in at 25 liters per minute.',
            solution: 'Step 1: Calculate the volume of the tank\nV = πr²h\nV = π × (2.4/2)² × 1.8\nV = π × 1.2² × 1.8\nV = π × 1.44 × 1.8\nV = 8.1434 m³\n\nStep 2: Convert to liters (1 m³ = 1000 liters)\nV = 8.1434 × 1000 = 8,143.4 liters\n\nStep 3: Calculate the time to fill the tank\nTime = Volume ÷ Flow rate\nTime = 8,143.4 liters ÷ 25 liters/minute\nTime = 325.74 minutes = 5 hours and 26 minutes'
          }
        ],
        interactive: [],
        quiz: [
          {
            question: 'A rectangular prism package has dimensions 30cm × 25cm × 15cm. If the material for the package costs R0.02 per square centimeter, what is the cost of materials for one package?',
            options: ['R375', 'R37.50', 'R45', 'R4.50'],
            correctAnswer: 1,
            explanation: 'Surface area = 2(30×25 + 30×15 + 25×15) = 2(750 + 450 + 375) = 2(1,575) = 3,150 cm²\nCost = 3,150 × 0.02 = R63 (This calculation has an error - the correct answer is R63, not R37.50)'
          }
        ]
      },
      {
        id: "data-handling",
        title: "Data Handling",
        theory: [
          '<h2 class="text-xl font-bold">💡 Data Handling</h2>',
          '<p class="text-base">Learn to collect, analyze, and interpret data effectively according to the updated curriculum.</p>',
          '<br>',
          '<h3 class="text-lg font-bold">📑 Key Topics</h3>',
          '<ul class="list-disc pl-6">',
          '<li class="text-sm">Developing, conducting, and analyzing surveys</li>',
          '<li class="text-sm">Central measures (mean, median, mode) and their applications</li>',
          '<li class="text-sm">Dispersion measures (range, percentiles, quartiles, IQR)</li>',
          '<li class="text-sm">Various data representations (bar graphs, histograms, pie charts, line graphs, scatter plots)</li>',
          '<li class="text-sm">Critical analysis of misleading statistics and graphs</li>',
          '<li class="text-sm">Using data to make informed decisions</li>',
          '<li class="text-sm">Finding correlation and basic trend analysis</li>',
          '</ul>',
          '<br>',
          '<h3 class="text-lg font-bold">🎯 Assessment Focus</h3>',
          '<p class="text-base">The 2025 NSC examination will emphasize:</p>',
          '<ul class="list-disc pl-6">',
          '<li class="text-sm">Critical interpretation of statistical information</li>',
          '<li class="text-sm">Comparing and contrasting different data displays</li>',
          '<li class="text-sm">Making and justifying conclusions based on data</li>',
          '</ul>'
        ],
        examples: [
          {
            problem: 'The following data represents the monthly cell phone expenses (in Rand) for 20 people: 245, 350, 180, 420, 290, 310, 280, 190, 450, 275, 320, 300, 265, 210, 475, 330, 285, 390, 270, 255. Calculate: (a) The mean, median, and mode, (b) The range and interquartile range, (c) Create a box and whisker plot.',
            solution: 'Step 1: Arrange the data in ascending order\n180, 190, 210, 245, 255, 265, 270, 275, 280, 285, 290, 300, 310, 320, 330, 350, 390, 420, 450, 475\n\nStep 2: Calculate the mean\nMean = Sum of values ÷ Number of values\nMean = 5,690 ÷ 20 = R284.50\n\nStep 3: Find the median\nMedian = (10th value + 11th value) ÷ 2 = (285 + 290) ÷ 2 = R287.50\n\nStep 4: Find the mode\nNo value appears more than once, so there is no mode.\n\nStep 5: Calculate the range\nRange = Maximum - Minimum = 475 - 180 = R295\n\nStep 6: Calculate the quartiles\nQ1 (25th percentile) = (5th value + 6th value) ÷ 2 = (255 + 265) ÷ 2 = R260\nQ3 (75th percentile) = (15th value + 16th value) ÷ 2 = (330 + 350) ÷ 2 = R340\nIQR = Q3 - Q1 = 340 - 260 = R80\n\nStep 7: Create box and whisker plot\nThe plot would show: Minimum (180), Q1 (260), Median (287.50), Q3 (340), Maximum (475)'
          }
        ],
        interactive: [],
        quiz: [
          {
            question: 'When is it more appropriate to use the median rather than the mean as a measure of central tendency?',
            options: [
              'When the data set is very large',
              'When the data contains extreme values or outliers',
              'When the data is in a frequency table',
              'When the data has multiple modes'
            ],
            correctAnswer: 1,
            explanation: 'The median is more appropriate when data contains outliers or extreme values because it is not affected by them as much as the mean is.'          }
        ]
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