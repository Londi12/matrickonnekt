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
          }        ]
      }
    ]
  },
  {
    id: 'consumer-studies',
    name: 'Consumer Studies',
    description: 'Grade 12 Consumer Studies covering consumer knowledge, food production, clothing, and entrepreneurship.',
    iconUrl: '/icons/consumer-icon.svg',
    modules: [
      {
        id: 'consumer',
        name: 'The Consumer',
        description: 'Consumer rights, responsibilities and financial aspects',
        lessons: [
          {
            id: 'consumer-decisions',
            title: 'Consumer Decision-Making',
            description: 'Factors influencing consumer choices and behavior',
            content: 'consumerDecisions',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Consumer rights', 'Financial decisions', 'Contractual aspects']
          },
          {
            id: 'sustainable-consumption',
            title: 'Sustainable Consumption',
            description: 'Impact of consumer choices on sustainability',
            content: 'sustainableConsumption',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Environmental impact', 'Ethical consumption', 'Resource management']
          }
        ]
      },
      {
        id: 'food-nutrition',
        name: 'Food & Nutrition',
        description: 'Food production, safety, and nutritional aspects',
        lessons: [
          {
            id: 'food-safety',
            title: 'Food Safety & Quality Control',
            description: 'Ensuring food safety and quality in production',
            content: 'foodSafety',
            difficulty: 'intermediate',
            duration: 50,
            topics: ['Food hygiene', 'Quality control', 'Food regulations']
          },
          {
            id: 'food-preservation',
            title: 'Food Preservation',
            description: 'Methods for preserving and storing food',
            content: 'foodPreservation',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Preservation methods', 'Storage techniques', 'Shelf life']
          }
        ]
      },
      {
        id: 'entrepreneurship',
        name: 'Entrepreneurship',
        description: 'Small-scale production and entrepreneurial skills',
        lessons: [
          {
            id: 'small-business',
            title: 'Small Enterprise Development',
            description: 'Planning and developing a small production enterprise',
            content: 'smallBusiness',
            difficulty: 'advanced',
            duration: 50,
            topics: ['Business planning', 'Production factors', 'Target market']
          },
          {
            id: 'costing-pricing',
            title: 'Costing & Pricing',
            description: 'Calculating production costs and setting prices',
            content: 'costingPricing',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Cost calculations', 'Pricing strategies', 'Profit margins']
          }
        ]
      }
    ]
  },
  {
    id: 'tourism',
    name: 'Tourism',
    description: 'Grade 12 Tourism covering tourism attractions, sectors, sustainable tourism, and travel.',
    iconUrl: '/icons/tourism-icon.svg',
    modules: [
      {
        id: 'attractions',
        name: 'Tourism Attractions',
        description: 'World Heritage Sites and major international attractions',
        lessons: [
          {
            id: 'world-heritage',
            title: 'World Heritage Sites',
            description: 'South African UNESCO World Heritage Sites',
            content: 'worldHeritageSites',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Cultural sites', 'Natural sites', 'Mixed heritage sites']
          },
          {
            id: 'global-attractions',
            title: 'International Tourism Icons',
            description: 'Major global tourism destinations and landmarks',
            content: 'globalAttractions',
            difficulty: 'intermediate',
            duration: 50,
            topics: ['Famous landmarks', 'Natural wonders', 'Cultural attractions']
          }
        ]
      },
      {
        id: 'sustainable-tourism',
        name: 'Sustainable Tourism',
        description: 'Environmental and social responsibility in tourism',
        lessons: [
          {
            id: 'responsible-tourism',
            title: 'Responsible Tourism Practices',
            description: 'Implementation of sustainable tourism principles',
            content: 'responsibleTourism',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Eco-tourism', 'Community involvement', 'Conservation']
          },
          {
            id: 'tourism-impacts',
            title: 'Tourism Impacts',
            description: 'Positive and negative impacts of tourism',
            content: 'tourismImpacts',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Environmental impacts', 'Socio-cultural impacts', 'Economic impacts']
          }
        ]
      },
      {
        id: 'travel-geography',
        name: 'Tourism Geography & Travel',
        description: 'Time zones, travel calculations and documentation',
        lessons: [
          {
            id: 'foreign-exchange',
            title: 'Foreign Exchange Calculations',
            description: 'Currency conversions and exchange rate applications',
            content: 'foreignExchange',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Exchange rates', 'Currency conversions', 'BSR and commission']
          },
          {
            id: 'time-zones',
            title: 'World Time Zones',
            description: 'Calculating time differences for international travel',
            content: 'timeZones',
            difficulty: 'intermediate',
            duration: 50,
            topics: ['International date line', 'UTC/GMT', 'Travel schedules']
          }
        ]
      }
    ]
  },
  {
    id: 'information-technology',
    name: 'Information Technology',
    description: 'Grade 12 Information Technology covering programming, databases, and systems development.',
    iconUrl: '/icons/it-icon.svg',
    modules: [
      {
        id: 'solution-development',
        name: 'Solution Development',
        description: 'Programming principles and software development',
        lessons: [
          {
            id: 'oop-concepts',
            title: 'Object-Oriented Programming',
            description: 'Advanced OOP concepts and implementation',
            content: 'oopConcepts',
            difficulty: 'advanced',
            duration: 50,
            topics: ['Classes & objects', 'Inheritance', 'Polymorphism']
          },
          {
            id: 'data-structures',
            title: 'Data Structures & Algorithms',
            description: 'Implementation and application of data structures',
            content: 'dataStructures',
            difficulty: 'advanced',
            duration: 55,
            topics: ['Arrays', 'Linked lists', 'Searching & sorting']
          }
        ]
      },
      {
        id: 'database-management',
        name: 'Database Management',
        description: 'Database design and SQL implementation',
        lessons: [
          {
            id: 'database-design',
            title: 'Database Design & Normalization',
            description: 'Relational database design principles',
            content: 'databaseDesign',
            difficulty: 'advanced',
            duration: 50,
            topics: ['ER diagrams', 'Normalization', 'Data integrity']
          },
          {
            id: 'sql-operations',
            title: 'Advanced SQL',
            description: 'Complex SQL queries and database operations',
            content: 'advancedSql',
            difficulty: 'advanced',
            duration: 50,
            topics: ['Complex queries', 'Joins', 'Stored procedures']
          }
        ]
      },
      {
        id: 'it-implications',
        name: 'Social Implications',
        description: 'Ethical and social aspects of IT',
        lessons: [
          {
            id: 'it-ethics',
            title: 'IT Ethics & Legislation',
            description: 'Ethical considerations and legal aspects of IT',
            content: 'itEthics',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Privacy', 'Intellectual property', 'Cybercrime']
          },
          {
            id: 'emerging-tech',
            title: 'Emerging Technologies',
            description: 'Latest trends and developments in IT',
            content: 'emergingTech',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['AI & machine learning', 'IoT', 'Cloud computing']
          }
        ]
      }
    ]
  },
  {
    id: 'computer-applications-technology',
    name: 'Computer Applications Technology',
    description: 'Grade 12 Computer Applications Technology covering applications, systems, and information management.',
    iconUrl: '/icons/cat-icon.svg',
    modules: [
      {
        id: 'office-applications',
        name: 'Solution Development',
        description: 'Advanced office productivity applications',
        lessons: [
          {
            id: 'word-processing',
            title: 'Advanced Word Processing',
            description: 'Complex document creation and management',
            content: 'wordProcessing',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Mail merge', 'Forms', 'Styles & templates']
          },
          {
            id: 'spreadsheets',
            title: 'Advanced Spreadsheets',
            description: 'Complex calculations and data analysis',
            content: 'spreadsheets',
            difficulty: 'advanced',
            duration: 50,
            topics: ['Functions', 'Pivot tables', 'Data validation']
          },
          {
            id: 'databases',
            title: 'Database Applications',
            description: 'Creating and managing relational databases',
            content: 'databases',
            difficulty: 'advanced',
            duration: 50,
            topics: ['Queries', 'Forms', 'Reports']
          }
        ]
      },
      {
        id: 'systems-technologies',
        name: 'Systems Technologies',
        description: 'Hardware, software and computer management',
        lessons: [
          {
            id: 'hardware-concepts',
            title: 'Computer Hardware',
            description: 'Components and specifications of computer systems',
            content: 'hardwareConcepts',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Processing devices', 'Storage', 'Input/output devices']
          },
          {
            id: 'software-management',
            title: 'Software Management',
            description: 'Operating systems and application software',
            content: 'softwareManagement',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Operating systems', 'Utility software', 'Application software']
          }
        ]
      },
      {
        id: 'information-management',
        name: 'Information Management',
        description: 'Data handling and information processing',
        lessons: [
          {
            id: 'data-collection',
            title: 'Data Collection & Analysis',
            description: 'Gathering and processing information',
            content: 'dataCollection',
            difficulty: 'intermediate',
            duration: 45,
            topics: ['Information sources', 'Data validation', 'Data analysis']
          },
          {
            id: 'info-presentation',
            title: 'Information Presentation',
            description: 'Presenting data in appropriate formats',
            content: 'infoPresentation',
            difficulty: 'intermediate',
            duration: 40,
            topics: ['Report formats', 'Visual representation', 'Audience considerations']
          }
        ]
      }
    ]
  }
];

export default updatedSubjects;