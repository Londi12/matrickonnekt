import { Subject, Module } from '../types';

/**
 * Updated subjects data based on WCED ePortal Grade 12 subject support resources
 * Last updated: May 11, 2025
 * Source: https://wcedeportal.co.za/grade12-subject-support
 */

export const updatedSubjects: Subject[] = [
  {
    id: 'english-hl',
    name: 'English Home Language',
    description: 'Grade 12 English Home Language covering language, literature, writing, and comprehension skills.',
    iconUrl: '/icons/english-icon.svg',
    modules: [
      {
        id: 'literature',
        name: 'Literature Study',
        description: 'Analysis of prescribed literature works including poetry, drama, and novels',
        lessons: [
          {
            id: 'poetry-analysis',
            title: 'Poetry Analysis & Appreciation',
            description: 'Techniques for analyzing poetry, including figurative language, tone, and themes',
            content: 'poetryAnalysis',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Poetic devices', 'Theme analysis', 'Unseen poetry']
          },
          {
            id: 'shakespeare-study',
            title: 'Shakespeare Drama Study',
            description: 'In-depth analysis of prescribed Shakespearean drama',
            content: 'shakespeareDrama',
            difficulty: 'advanced',
            duration: 50,
            topics: ['Character analysis', 'Themes and motifs', 'Historical context']
          },
          {
            id: 'novel-analysis',
            title: 'Novel Analysis',
            description: 'Critical analysis of prescribed novels',
            content: 'novelAnalysis',
            difficulty: 'advanced',
            duration: 50,
            topics: ['Plot development', 'Character study', 'Literary devices']
          }
        ]
      },
      {
        id: 'language',
        name: 'Language Skills',
        description: 'Advanced language usage and comprehension',
        lessons: [
          {
            id: 'comprehension',
            title: 'Critical Reading & Comprehension',
            description: 'Advanced reading comprehension strategies',
            content: 'criticalReading',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Main ideas', 'Inference', 'Author\'s purpose']
          },
          {
            id: 'language-structures',
            title: 'Language Structures & Conventions',
            description: 'Advanced grammar and language usage',
            content: 'languageStructures',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Syntax', 'Parts of speech', 'Punctuation']
          },
          {
            id: 'visual-literacy',
            title: 'Visual Literacy',
            description: 'Analysis of visual texts and advertisements',
            content: 'visualLiteracy',
            difficulty: 'intermediate',
            duration: 40,
            topics: ['Advertisement analysis', 'Cartoons', 'Infographics']
          }
        ]
      },
      {
        id: 'writing',
        name: 'Writing Skills',
        description: 'Essay writing and transactional texts',
        lessons: [
          {
            id: 'creative-writing',
            title: 'Creative Writing',
            description: 'Narrative and descriptive essay writing',
            content: 'creativeWriting',
            difficulty: 'advanced',
            duration: 50,
            topics: ['Narrative essays', 'Descriptive essays', 'Short stories']
          },
          {
            id: 'argumentative-writing',
            title: 'Argumentative & Discursive Writing',
            description: 'Argumentative and discursive essay techniques',
            content: 'argumentativeWriting',
            difficulty: 'advanced',
            duration: 50,
            topics: ['Argumentative essays', 'Discursive essays', 'Opinion pieces']
          },
          {
            id: 'transactional-writing',
            title: 'Transactional Writing',
            description: 'Various forms of transactional texts',
            content: 'transactionalWriting',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Formal letters', 'Reports', 'Reviews']
          }
        ]
      }
    ]
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    description: 'Grade 12 Mathematics covering algebra, calculus, geometry, trigonometry, statistics and probability.',
    iconUrl: '/icons/math-icon.svg',
    modules: [
      {
        id: 'algebra',
        name: 'Algebra',
        description: 'Algebraic expressions, equations and inequalities',
        lessons: [
          {
            id: 'polynomial-equations',
            title: 'Polynomial Equations & Inequalities',
            description: 'Solving higher-order equations and inequalities',
            content: 'algebraPolynomialEquations',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Cubic equations', 'Factor theorem', 'Remainder theorem']
          },
          {
            id: 'nature-of-roots',
            title: 'Nature of Roots',
            description: 'Analyzing the nature of roots of quadratic equations',
            content: 'algebraNatureOfRoots',
            difficulty: 'intermediate',
            duration: 40,
            topics: ['Discriminant', 'Equal roots', 'Complex roots']
          },
          {
            id: 'algebraic-fractions',
            title: 'Algebraic Fractions',
            description: 'Working with algebraic fractions and rational expressions',
            content: 'algebraicFractions',
            difficulty: 'advanced',
            duration: 50,
            topics: ['Simplifying fractions', 'Adding fractions', 'Multiplying fractions']
          }
        ]
      },
      {
        id: 'functions',
        name: 'Functions',
        description: 'Various functions and their properties',
        lessons: [
          {
            id: 'function-characteristics',
            title: 'Function Characteristics',
            description: 'Domain, range, intercepts and asymptotes of functions',
            content: 'functionCharacteristics',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Domain and range', 'Intercepts', 'Asymptotes']
          },
          {
            id: 'exponential-functions',
            title: 'Exponential & Logarithmic Functions',
            description: 'Properties and applications of exponential and logarithmic functions',
            content: 'exponentialFunctions',
            difficulty: 'advanced',
            duration: 50,
            topics: ['Exponential growth', 'Logarithmic laws', 'Applications']
          },
          {
            id: 'inverses',
            title: 'Function Inverses',
            description: 'Finding and graphing inverse functions',
            content: 'functionInverses',
            difficulty: 'advanced',
            duration: 45,
            topics: ['Inverse operations', 'Restricting domains', 'Graphing inverses']
          }
        ]
      },
      {
        id: 'calculus',
        name: 'Differential Calculus',
        description: 'Introduction to differential calculus',
        lessons: [
          {
            id: 'limits',
            title: 'Limits & Continuity',
            description: 'Understanding limits and continuous functions',
            content: 'limitsAndContinuity',
            difficulty: 'advanced',
            duration: 45,
            topics: ['Limit definition', 'Evaluating limits', 'Continuity']
          },
          {
            id: 'first-principles',
            title: 'First Principles Differentiation',
            description: 'Differentiation from first principles',
            content: 'firstPrinciplesDifferentiation',
            difficulty: 'advanced',
            duration: 50,
            topics: ['Difference quotient', 'Limit definition', 'Basic derivatives']
          },
          {
            id: 'applications',
            title: 'Applications of Derivatives',
            description: 'Using derivatives to solve real-world problems',
            content: 'derivativeApplications',
            difficulty: 'advanced',
            duration: 60,
            topics: ['Optimization', 'Rate of change', 'Curve sketching']
          }
        ]
      },
      {
        id: 'geometry',
        name: 'Analytical Geometry',
        description: 'Coordinate geometry in two dimensions',
        lessons: [
          {
            id: 'circle-geometry',
            title: 'Circle Geometry',
            description: 'Properties of circles and theorems',
            content: 'circleGeometry',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Tangents', 'Chords', 'Angles in circles']
          },
          {
            id: 'euclidean-geometry',
            title: 'Euclidean Geometry',
            description: 'Euclidean geometry and proofs',
            content: 'euclideanGeometry',
            difficulty: 'advanced',
            duration: 55,
            topics: ['Similarity', 'Congruence', 'Proportionality']
          }
        ]
      },
      {
        id: 'trigonometry',
        name: 'Trigonometry',
        description: 'Trigonometric functions, identities and equations',
        lessons: [
          {
            id: 'compound-angles',
            title: 'Compound & Double Angles',
            description: 'Compound angle and double angle formulae',
            content: 'compoundAngles',
            difficulty: 'advanced',
            duration: 45,
            topics: ['Addition formulas', 'Double angle formulas', 'Applications']
          },
          {
            id: 'trig-equations',
            title: 'Trigonometric Equations',
            description: 'Solving trigonometric equations',
            content: 'trigEquations',
            difficulty: 'advanced',
            duration: 50,
            topics: ['General solutions', 'Multiple angle equations', 'Combined functions']
          },
          {
            id: '3d-trigonometry',
            title: '3D Trigonometry',
            description: 'Trigonometry in three dimensions',
            content: 'threeDTrigonometry',
            difficulty: 'advanced',
            duration: 55,
            topics: ['Angles of elevation/depression', '3D problems', 'Navigation']
          }
        ]
      },
      {
        id: 'statistics',
        name: 'Statistics & Probability',
        description: 'Data handling, probability and counting principles',
        lessons: [
          {
            id: 'regression-correlation',
            title: 'Regression & Correlation',
            description: 'Linear regression and correlation analysis',
            content: 'regressionCorrelation',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Scatter plots', 'Correlation coefficient', 'Line of best fit']
          },
          {
            id: 'probability-distributions',
            title: 'Probability Distributions',
            description: 'Working with probability distributions',
            content: 'probabilityDistributions',
            difficulty: 'advanced',
            duration: 50,
            topics: ['Normal distribution', 'Binomial distribution', 'Expected value']
          },
          {
            id: 'counting-principles',
            title: 'Counting Principles',
            description: 'Permutations, combinations and arrangements',
            content: 'countingPrinciples',
            difficulty: 'intermediate',
            duration: 40,
            topics: ['Factorial notation', 'Permutations', 'Combinations']
          }
        ]
      },
      {
        id: 'financial',
        name: 'Financial Mathematics',
        description: 'Simple and compound interest, annuities and loans',
        lessons: [
          {
            id: 'compound-growth',
            title: 'Compound Growth & Decay',
            description: 'Applications of exponential growth and decay',
            content: 'compoundGrowthDecay',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Compound interest', 'Half-life', 'Population growth']
          },
          {
            id: 'annuities',
            title: 'Annuities & Future Value',
            description: 'Understanding annuities and future value calculations',
            content: 'annuitiesFutureValue',
            difficulty: 'intermediate',
            duration: 50,
            topics: ['Annuity formulas', 'Retirement planning', 'Investment growth']
          },
          {
            id: 'loans-bonds',
            title: 'Loans, Bonds & Depreciation',
            description: 'Understanding loan repayments and depreciation',
            content: 'loansDepreciation',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Loan repayments', 'Bond values', 'Straight-line depreciation']
          }
        ]
      }
    ]
  },
  {
    id: 'physical-sciences',
    name: 'Physical Sciences',
    description: 'Grade 12 Physical Sciences covering physics and chemistry concepts',
    iconUrl: '/icons/science-icon.svg',
    modules: [
      {
        id: 'mechanics',
        name: 'Mechanics',
        description: 'Newton\'s laws and applications',
        lessons: [
          {
            id: 'momentum-impulse',
            title: 'Momentum & Impulse',
            description: 'Conservation of momentum and impulse applications',
            content: 'momentumImpulse',
            difficulty: 'intermediate',
            duration: 50,
            topics: ['Conservation of momentum', 'Elastic collisions', 'Inelastic collisions']
          },
          {
            id: 'work-energy-power',
            title: 'Work, Energy & Power',
            description: 'Work-energy theorem and applications',
            content: 'workEnergyPower',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Work-energy theorem', 'Conservation of energy', 'Power calculations']
          },
          {
            id: 'vertical-projectile-motion',
            title: 'Vertical Projectile Motion',
            description: 'Objects in free-fall under gravity',
            content: 'verticalProjectileMotion',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Equations of motion', 'Maximum height', 'Time of flight']
          }
        ]
      },
      {
        id: 'waves-sound-light',
        name: 'Waves, Sound & Light',
        description: 'Properties and phenomena of waves',
        lessons: [
          {
            id: 'doppler-effect',
            title: 'Doppler Effect',
            description: 'Understanding frequency changes due to relative motion',
            content: 'dopplerEffect',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Observer motion', 'Source motion', 'Applications']
          },
          {
            id: 'photoelectric-effect',
            title: 'Photoelectric Effect',
            description: 'Einstein\'s explanation of the photoelectric effect',
            content: 'photoelectricEffect',
            difficulty: 'advanced',
            duration: 50,
            topics: ['Work function', 'Threshold frequency', 'Photon energy']
          }
        ]
      },
      {
        id: 'electricity-magnetism',
        name: 'Electricity & Magnetism',
        description: 'Electrostatics, circuits and electromagnetism',
        lessons: [
          {
            id: 'electrodynamics',
            title: 'Electrodynamics',
            description: 'Electromagnetic induction and applications',
            content: 'electrodynamics',
            difficulty: 'advanced',
            duration: 50,
            topics: ['Faraday\'s law', 'Lenz\'s law', 'Generators and motors']
          },
          {
            id: 'electric-circuits',
            title: 'Electric Circuits',
            description: 'Internal resistance and electrical power',
            content: 'electricCircuits',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Internal resistance', 'EMF', 'Power dissipation']
          }
        ]
      },
      {
        id: 'matter-materials',
        name: 'Matter & Materials',
        description: 'Properties and structure of matter',
        lessons: [
          {
            id: 'optical-phenomena',
            title: 'Optical Phenomena & Properties',
            description: 'Refraction, diffraction and interference of light',
            content: 'opticalPhenomena',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Refraction', 'Diffraction', 'Interference']
          }
        ]
      },
      {
        id: 'chemical-change',
        name: 'Chemical Change',
        description: 'Reaction rates, equilibrium and electrochemistry',
        lessons: [
          {
            id: 'rates-equilibrium',
            title: 'Rates & Equilibrium',
            description: 'Reaction rates and chemical equilibrium',
            content: 'ratesEquilibrium',
            difficulty: 'intermediate',
            duration: 50,
            topics: ['Reaction rates', 'Equilibrium constant', 'Le Chatelier\'s principle']
          },
          {
            id: 'acids-bases',
            title: 'Acids & Bases',
            description: 'Acid-base reactions and pH calculations',
            content: 'acidsBases',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['pH calculations', 'Titrations', 'Buffers']
          },
          {
            id: 'electrochemical-reactions',
            title: 'Electrochemical Reactions',
            description: 'Galvanic and electrolytic cells',
            content: 'electrochemicalReactions',
            difficulty: 'advanced',
            duration: 50,
            topics: ['Galvanic cells', 'Electrolytic cells', 'Standard electrode potentials']
          }
        ]
      },
      {
        id: 'organic-chemistry',
        name: 'Organic Chemistry',
        description: 'Structure and reactions of organic compounds',
        lessons: [
          {
            id: 'organic-nomenclature',
            title: 'Organic Nomenclature',
            description: 'Naming organic compounds and identifying functional groups',
            content: 'organicNomenclature',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['IUPAC naming', 'Functional groups', 'Isomers']
          },
          {
            id: 'organic-reactions',
            title: 'Organic Reactions',
            description: 'Addition, elimination and substitution reactions',
            content: 'organicReactions',
            difficulty: 'advanced',
            duration: 50,
            topics: ['Addition reactions', 'Elimination reactions', 'Substitution reactions']
          }
        ]
      }
    ]
  },
  {
    id: 'life-sciences',
    name: 'Life Sciences',
    description: 'Grade 12 Life Sciences covering genetics, evolution and human physiology',
    iconUrl: '/icons/biology-icon.svg',
    modules: [
      {
        id: 'genetics-inheritance',
        name: 'Genetics & Inheritance',
        description: 'DNA, genetic inheritance and meiosis',
        lessons: [
          {
            id: 'dna-structure',
            title: 'DNA Structure & Replication',
            description: 'Structure of DNA and the replication process',
            content: 'dnaStructure',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['DNA structure', 'Semi-conservative replication', 'Genetic code']
          },
          {
            id: 'meiosis',
            title: 'Meiosis',
            description: 'Process and significance of meiosis in sexual reproduction',
            content: 'meiosis',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Phases of meiosis', 'Crossing over', 'Genetic variation']
          },
          {
            id: 'genetic-inheritance',
            title: 'Patterns of Inheritance',
            description: 'Mendel\'s laws and genetic disorders',
            content: 'geneticInheritance',
            difficulty: 'advanced',
            duration: 50,
            topics: ['Monohybrid crosses', 'Dihybrid crosses', 'Sex-linked inheritance']
          }
        ]
      },
      {
        id: 'evolution',
        name: 'Evolution',
        description: 'Evidence and mechanisms of evolution',
        lessons: [
          {
            id: 'evolution-theories',
            title: 'Theories of Evolution',
            description: 'Historical development of evolutionary theory',
            content: 'evolutionTheories',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Lamarck\'s theory', 'Darwin\'s theory', 'Modern synthesis']
          },
          {
            id: 'human-evolution',
            title: 'Human Evolution',
            description: 'Evidence for human evolution',
            content: 'humanEvolution',
            difficulty: 'intermediate',
            duration: 50,
            topics: ['Fossil record', 'Out-of-Africa hypothesis', 'Hominin timeline']
          }
        ]
      },
      {
        id: 'human-physiology',
        name: 'Human Physiology',
        description: 'Systems of the human body',
        lessons: [
          {
            id: 'nervous-system',
            title: 'Nervous System',
            description: 'Structure and function of the human nervous system',
            content: 'nervousSystem',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Neurons', 'Reflex arc', 'Central nervous system']
          },
          {
            id: 'endocrine-system',
            title: 'Endocrine System',
            description: 'Hormonal regulation in humans',
            content: 'endocrineSystem',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Hormones', 'Homeostasis', 'Feedback mechanisms']
          },
          {
            id: 'reproduction',
            title: 'Human Reproduction',
            description: 'Male and female reproductive systems',
            content: 'humanReproduction',
            difficulty: 'intermediate',
            duration: 50,
            topics: ['Gametogenesis', 'Fertilization', 'Development']
          }
        ]
      },
      {
        id: 'ecology',
        name: 'Ecology & Environment',
        description: 'Interactions between organisms and their environment',
        lessons: [
          {
            id: 'population-ecology',
            title: 'Population Ecology',
            description: 'Population dynamics and human impact',
            content: 'populationEcology',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Population growth', 'Carrying capacity', 'Human population']
          },
          {
            id: 'biodiversity',
            title: 'Biodiversity & Conservation',
            description: 'Importance of biodiversity and conservation strategies',
            content: 'biodiversity',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Biodiversity loss', 'Conservation strategies', 'Sustainable development']
          }
        ]
      }
    ]
  },
  {
    id: 'accounting',
    name: 'Accounting',
    description: 'Grade 12 Accounting covering financial reporting, analysis and ethics',
    iconUrl: '/icons/accounting-icon.svg',
    modules: [
      {
        id: 'companies',
        name: 'Companies: Financial Statements',
        description: 'Preparation and analysis of company financial statements',
        lessons: [
          {
            id: 'income-statement',
            title: 'Income Statement & Notes',
            description: 'Preparing the income statement for companies',
            content: 'incomeStatement',
            difficulty: 'intermediate',
            duration: 50,
            topics: ['Sales and cost of sales', 'Operating expenses', 'Taxation']
          },
          {
            id: 'balance-sheet',
            title: 'Balance Sheet & Notes',
            description: 'Preparing the balance sheet for companies',
            content: 'balanceSheet',
            difficulty: 'advanced',
            duration: 55,
            topics: ['Non-current assets', 'Current assets', 'Equity and liabilities']
          },
          {
            id: 'cash-flow',
            title: 'Cash Flow Statement',
            description: 'Preparing the cash flow statement',
            content: 'cashFlowStatement',
            difficulty: 'advanced',
            duration: 50,
            topics: ['Operating activities', 'Investing activities', 'Financing activities']
          }
        ]
      },
      {
        id: 'analysis',
        name: 'Financial Analysis',
        description: 'Analysis and interpretation of financial information',
        lessons: [
          {
            id: 'financial-indicators',
            title: 'Financial Indicators',
            description: 'Calculating and interpreting financial indicators',
            content: 'financialIndicators',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Liquidity ratios', 'Solvency ratios', 'Profitability ratios']
          },
          {
            id: 'audit-reports',
            title: 'Audit Reports & Corporate Governance',
            description: 'Understanding audit reports and corporate governance',
            content: 'auditReports',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Types of audit opinions', 'King Code', 'Ethics']
          }
        ]
      },
      {
        id: 'inventory',
        name: 'Inventory & Cost Accounting',
        description: 'Inventory valuation and cost accounting',
        lessons: [
          {
            id: 'inventory-systems',
            title: 'Inventory Systems & Valuation',
            description: 'Different inventory systems and valuation methods',
            content: 'inventorySystems',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['FIFO', 'Weighted average', 'Periodic vs perpetual']
          },
          {
            id: 'manufacturing',
            title: 'Manufacturing Accounts',
            description: 'Cost accounting for manufacturing enterprises',
            content: 'manufacturingAccounts',
            difficulty: 'advanced',
            duration: 50,
            topics: ['Direct costs', 'Indirect costs', 'Production cost statement']
          }
        ]
      },
      {
        id: 'budgeting',
        name: 'Budgeting & Internal Control',
        description: 'Budgeting process and internal controls',
        lessons: [
          {
            id: 'cash-budgets',
            title: 'Cash Budgets',
            description: 'Preparing and analyzing cash budgets',
            content: 'cashBudgets',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Cash receipts', 'Cash payments', 'Budgeted cash flow']
          },
          {
            id: 'projected-statements',
            title: 'Projected Income Statements',
            description: 'Preparing projected financial statements',
            content: 'projectedStatements',
            difficulty: 'advanced',
            duration: 50,
            topics: ['Sales projections', 'Expense projections', 'Budgeted profit']
          }
        ]
      }
    ]
  }
];

export default updatedSubjects;