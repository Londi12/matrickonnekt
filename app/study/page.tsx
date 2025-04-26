"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import AuthCheck from '../components/AuthCheck';
import { useAuth } from '../context/AuthContext';
import { updateStreak, markTopicCompleted, updateStudyTime } from '../utils/userProgress';
import AlgebraSimplifyingExpressions from '../components/lessons/AlgebraSimplifyingExpressions';
import AlgebraMultiplyingExpressions from '../components/lessons/AlgebraMultiplyingExpressions';
import AlgebraFactorisingEquations from '../components/lessons/AlgebraFactorisingEquations';
import AlgebraInequalities from '../components/lessons/AlgebraInequalities';
import AlgebraicFractions from '../components/lessons/AlgebraicFractions';
import AlgebraNatureOfRoots from '../components/lessons/AlgebraNatureOfRoots';
import ArithmeticSequences from '../components/lessons/ArithmeticSequences';
import GeometricSequences from '../components/lessons/GeometricSequences';
import SigmaNotation from '../components/lessons/SigmaNotation';
import LinearQuadraticFunctions from '../components/lessons/LinearQuadraticFunctions';
import ExponentialHyperbolicFunctions from '../components/lessons/ExponentialHyperbolicFunctions';
import LogarithmicFunctions from '../components/lessons/LogarithmicFunctions';
import Transformations from '../components/lessons/Transformations';
import FunctionInverses from '../components/lessons/FunctionInverses';
import FinanceGrowthDecay from '../components/lessons/FinanceGrowthDecay';
import DepreciationInflation from '../components/lessons/DepreciationInflation';
import AnnuitiesPresentFutureValue from '../components/lessons/AnnuitiesPresentFutureValue';
import FirstPrinciplesDifferentiation from '../components/lessons/FirstPrinciplesDifferentiation';
import RulesOfDifferentiation from '../components/lessons/RulesOfDifferentiation';
import MaximaAndMinima from '../components/lessons/MaximaAndMinima';
import SketchingGraphsUsingDerivatives from '../components/lessons/SketchingGraphsUsingDerivatives';
import BasicProbabilityRules from '../components/lessons/BasicProbabilityRules';
import TreeDiagrams from '../components/lessons/TreeDiagrams';
import VennDiagrams from '../components/lessons/VennDiagrams';
import IndependentDependentEvents from '../components/lessons/IndependentDependentEvents';
import { 
  AcademicCapIcon,
  BookOpenIcon,
  ChartBarIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  PlayIcon,
  PauseIcon,
  ChartBarIcon as ChartBarIconSolid,
  PencilIcon,
  DocumentCheckIcon,
  StopIcon
} from '@heroicons/react/24/outline';

// Mock data for demonstration
const subjects = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: '📐',
    description: 'Comprehensive Grade 12 Mathematics curriculum',
    progress: 65,
    lastAccessed: '2 hours ago',
    topics: [
      {
        id: 'algebra',
        name: 'Algebra',
        progress: 70,
        lessons: [
          { id: 1, title: 'Simplifying Expressions', completed: true },
          { id: 2, title: 'Multiplying Algebraic Expressions', completed: false },
          { id: 3, title: 'Factorising and Solving Equations', completed: false },
          { id: 4, title: 'Inequalities', completed: false },
          { id: 5, title: 'Algebraic Fractions', completed: false },
          { id: 6, title: 'Nature of Roots', completed: false }
        ]
      },
      {
        id: 'patterns',
        name: 'Patterns',
        progress: 45,
        lessons: [
          { id: 1, title: 'Arithmetic Sequences and Series', completed: true },
          { id: 2, title: 'Geometric Sequences and Series', completed: false },
          { id: 3, title: 'Sigma Notation', completed: false }
        ]
      },
      {
        id: 'functions',
        name: 'Functions and Graphs',
        progress: 30,
        lessons: [
          { id: 1, title: 'Linear and Quadratic Functions', completed: true },
          { id: 2, title: 'Exponential and Hyperbolic Functions', completed: false },
          { id: 3, title: 'Logarithmic Functions', completed: false },
          { id: 4, title: 'Transformations', completed: false },
          { id: 5, title: 'Inverses of Functions', completed: false }
        ]
      },
      {
        id: 'finance',
        name: 'Finance, Growth and Decay',
        progress: 20,
        lessons: [
          { id: 1, title: 'Simple and Compound Interest', completed: false },
          { id: 2, title: 'Depreciation and Inflation', completed: false },
          { id: 3, title: 'Annuities and Present/Future Value', completed: false }
        ]
      },
      {
        id: 'calculus',
        name: 'Calculus',
        progress: 15,
        lessons: [
          { id: 1, title: 'First Principles of Differentiation', completed: false },
          { id: 2, title: 'Rules of Differentiation', completed: false },
          { id: 3, title: 'Maxima and Minima', completed: false },
          { id: 4, title: 'Sketching Graphs using Derivatives', completed: false }
        ]
      },
      {
        id: 'probability',
        name: 'Probability',
        progress: 0,
        lessons: [
          { id: 1, title: 'Basic Probability Rules', completed: false },
          { id: 2, title: 'Tree Diagrams', completed: false },
          { id: 3, title: 'Venn Diagrams', completed: false },
          { id: 4, title: 'Independent and Dependent Events', completed: false }
        ]
      },
      {
        id: 'statistics',
        name: 'Statistics',
        progress: 0,
        lessons: [
          { id: 1, title: 'Mean, Median, Mode', completed: false },
          { id: 2, title: 'Standard Deviation and Variance', completed: false },
          { id: 3, title: 'Box-and-whisker Plots', completed: false },
          { id: 4, title: 'Histograms and Ogives', completed: false }
        ]
      },
      {
        id: 'trigonometry',
        name: 'Trigonometry',
        progress: 0,
        lessons: [
          { id: 1, title: 'Trig Ratios', completed: false },
          { id: 2, title: 'Identities and Equations', completed: false },
          { id: 3, title: 'Graphs of Sine, Cosine, and Tangent', completed: false },
          { id: 4, title: 'Reduction Formulas', completed: false },
          { id: 5, title: 'Real-life Applications', completed: false }
        ]
      },
      {
        id: 'analytical',
        name: 'Analytical Geometry',
        progress: 0,
        lessons: [
          { id: 1, title: 'Distance Formula', completed: false },
          { id: 2, title: 'Midpoint Formula', completed: false },
          { id: 3, title: 'Gradient and Equation of a Line', completed: false },
          { id: 4, title: 'Circles', completed: false }
        ]
      },
      {
        id: 'euclidean',
        name: 'Euclidean Geometry',
        progress: 0,
        lessons: [
          { id: 1, title: 'Theorems of Circles', completed: false },
          { id: 2, title: 'Similar Triangles', completed: false },
          { id: 3, title: 'Proportionality', completed: false },
          { id: 4, title: 'Geometry Proofs', completed: false }
        ]
      }
    ]
  },
  {
    id: 'mathlit',
    name: 'Mathematical Literacy',
    icon: '📊',
    description: 'Practical mathematics for everyday life',
    progress: 0,
    lastAccessed: 'Never',
    topics: [
      {
        id: 'numbers',
        name: 'Numbers and Calculations',
        progress: 0,
        lessons: [
          { id: 1, title: 'Working with Large Numbers and Decimals', completed: false },
          { id: 2, title: 'Ratio and Proportion', completed: false },
          { id: 3, title: 'Percentages', completed: false },
          { id: 4, title: 'Estimations and Rounding', completed: false }
        ]
      },
      {
        id: 'patterns',
        name: 'Patterns and Relationships',
        progress: 0,
        lessons: [
          { id: 1, title: 'Linear and Inverse Relationships', completed: false },
          { id: 2, title: 'Exponential Relationships', completed: false },
          { id: 3, title: 'Interpreting Graphs', completed: false },
          { id: 4, title: 'Making Predictions from Graphs', completed: false }
        ]
      },
      {
        id: 'finance',
        name: 'Finance',
        progress: 0,
        lessons: [
          { id: 1, title: 'Personal and Business Finance', completed: false },
          { id: 2, title: 'Budgeting', completed: false },
          { id: 3, title: 'Income and Expenses', completed: false },
          { id: 4, title: 'Simple and Compound Interest', completed: false },
          { id: 5, title: 'Loans and Investments', completed: false },
          { id: 6, title: 'Taxation and Bank Statements', completed: false }
        ]
      },
      {
        id: 'measurement',
        name: 'Measurement',
        progress: 0,
        lessons: [
          { id: 1, title: 'Perimeter and Area', completed: false },
          { id: 2, title: 'Volume of 3D Objects', completed: false },
          { id: 3, title: 'Metric Conversions', completed: false },
          { id: 4, title: 'Time and Time Zones', completed: false },
          { id: 5, title: 'Scales, Maps, and Plans', completed: false }
        ]
      },
      {
        id: 'data',
        name: 'Data Handling',
        progress: 0,
        lessons: [
          { id: 1, title: 'Collecting and Organizing Data', completed: false },
          { id: 2, title: 'Mean, Median, Mode, and Range', completed: false },
          { id: 3, title: 'Types of Graphs', completed: false },
          { id: 4, title: 'Interpreting Data', completed: false }
        ]
      },
      {
        id: 'probability',
        name: 'Probability',
        progress: 0,
        lessons: [
          { id: 1, title: 'Basic Chance Concepts', completed: false },
          { id: 2, title: 'Probability as Fractions and Percentages', completed: false },
          { id: 3, title: 'Predicting Outcomes', completed: false },
          { id: 4, title: 'Fair vs Biased Games', completed: false }
        ]
      }
    ]
  },
  {
    id: 'lifesciences',
    name: 'Life Sciences',
    icon: '🧬',
    description: 'Understanding biological processes and living organisms',
    progress: 0,
    lastAccessed: 'Never',
    topics: [
      {
        id: 'dna',
        name: 'DNA: Code of Life',
        progress: 0,
        lessons: [
          { id: 1, title: 'Structure of DNA and RNA', completed: false },
          { id: 2, title: 'DNA Replication', completed: false },
          { id: 3, title: 'Protein Synthesis', completed: false },
          { id: 4, title: 'Mutations and their Effects', completed: false }
        ]
      },
      {
        id: 'meiosis',
        name: 'Meiosis',
        progress: 0,
        lessons: [
          { id: 1, title: 'Phases of Meiosis', completed: false },
          { id: 2, title: 'Significance in Variation and Reproduction', completed: false },
          { id: 3, title: 'Differences between Mitosis and Meiosis', completed: false }
        ]
      },
      {
        id: 'vertebrate-reproduction',
        name: 'Reproduction in Vertebrates',
        progress: 0,
        lessons: [
          { id: 1, title: 'Asexual and Sexual Reproduction', completed: false },
          { id: 2, title: 'Reproductive Strategies', completed: false },
          { id: 3, title: 'Comparison of Reproduction in Different Vertebrates', completed: false }
        ]
      },
      {
        id: 'human-reproduction',
        name: 'Human Reproduction',
        progress: 0,
        lessons: [
          { id: 1, title: 'Male and Female Reproductive Systems', completed: false },
          { id: 2, title: 'Menstrual Cycle and Hormonal Control', completed: false },
          { id: 3, title: 'Fertilisation, Pregnancy, and Birth', completed: false },
          { id: 4, title: 'Contraception and STIs', completed: false }
        ]
      },
      {
        id: 'genetics',
        name: 'Genetics and Inheritance',
        progress: 0,
        lessons: [
          { id: 1, title: 'Mendelian Genetics', completed: false },
          { id: 2, title: 'Monohybrid and Dihybrid Crosses', completed: false },
          { id: 3, title: 'Pedigrees and Genetic Disorders', completed: false },
          { id: 4, title: 'Interpretation of Genetic Problems', completed: false }
        ]
      },
      {
        id: 'evolution',
        name: 'Evolution by Natural Selection',
        progress: 0,
        lessons: [
          { id: 1, title: 'Theories of Evolution', completed: false },
          { id: 2, title: 'Natural Selection', completed: false },
          { id: 3, title: 'Speciation and Fossil Records', completed: false },
          { id: 4, title: 'Human Evolution', completed: false }
        ]
      },
      {
        id: 'human-impact',
        name: 'Human Impact on the Environment',
        progress: 0,
        lessons: [
          { id: 1, title: 'Loss of Biodiversity', completed: false },
          { id: 2, title: 'Waste Management and Pollution', completed: false },
          { id: 3, title: 'Climate Change and Deforestation', completed: false },
          { id: 4, title: 'Sustainable Resource Use and Conservation', completed: false }
        ]
      },
      {
        id: 'exam-skills',
        name: 'Exam Skills & Application',
        progress: 0,
        lessons: [
          { id: 1, title: 'Interpreting Diagrams and Data', completed: false },
          { id: 2, title: 'Application to Real-world Issues', completed: false },
          { id: 3, title: 'Practical Investigations and Scientific Methods', completed: false }
        ]
      }
    ]
  },
  {
    id: 'physics',
    name: 'Physical Sciences',
    icon: '⚡',
    description: 'Physics and Chemistry',
    progress: 30,
    lastAccessed: '1 day ago',
    topics: [
      {
        id: 'electric-circuits',
        name: 'Electric Circuits',
        progress: 0,
        lessons: [
          { id: 1, title: 'Ohm\'s Law', completed: false },
          { id: 2, title: 'Series and Parallel Circuits', completed: false },
          { id: 3, title: 'Internal Resistance', completed: false },
          { id: 4, title: 'Power and Energy in Circuits', completed: false }
        ]
      },
      {
        id: 'electrodynamics',
        name: 'Electrodynamics',
        progress: 0,
        lessons: [
          { id: 1, title: 'Electromagnetism', completed: false },
          { id: 2, title: 'Faraday\'s Law and Electromagnetic Induction', completed: false },
          { id: 3, title: 'Electric Motors and Generators', completed: false },
          { id: 4, title: 'AC vs DC', completed: false }
        ]
      },
      {
        id: 'electrostatics',
        name: 'Electrostatics',
        progress: 0,
        lessons: [
          { id: 1, title: 'Electric Fields and Field Lines', completed: false },
          { id: 2, title: 'Coulomb\'s Law', completed: false },
          { id: 3, title: 'Electric Potential and Energy', completed: false }
        ]
      },
      {
        id: 'work-energy',
        name: 'Work, Energy, and Power',
        progress: 0,
        lessons: [
          { id: 1, title: 'Work Done by a Force', completed: false },
          { id: 2, title: 'Conservation of Mechanical Energy', completed: false },
          { id: 3, title: 'Power and Efficiency', completed: false }
        ]
      },
      {
        id: 'momentum',
        name: 'Momentum and Impulse',
        progress: 0,
        lessons: [
          { id: 1, title: 'Conservation of Linear Momentum', completed: false },
          { id: 2, title: 'Elastic and Inelastic Collisions', completed: false },
          { id: 3, title: 'Impulse and Force', completed: false }
        ]
      },
      {
        id: 'waves',
        name: 'Waves, Sound, and Light',
        progress: 0,
        lessons: [
          { id: 1, title: 'Transverse and Longitudinal Waves', completed: false },
          { id: 2, title: 'Wave Speed, Frequency, and Wavelength', completed: false },
          { id: 3, title: 'Sound Waves and Resonance', completed: false },
          { id: 4, title: 'Reflection, Refraction, Diffraction', completed: false },
          { id: 5, title: 'Doppler Effect', completed: false }
        ]
      },
      {
        id: '2d-motion',
        name: 'Two-Dimensional Motion',
        progress: 0,
        lessons: [
          { id: 1, title: 'Projectile Motion', completed: false },
          { id: 2, title: 'Horizontal and Vertical Components', completed: false },
          { id: 3, title: 'Equations of Motion in 2D', completed: false }
        ]
      },
      {
        id: 'organic-chemistry',
        name: 'Organic Chemistry',
        progress: 0,
        lessons: [
          { id: 1, title: 'Hydrocarbons (Alkanes, Alkenes, Alkynes)', completed: false },
          { id: 2, title: 'Alcohols, Carboxylic Acids, Esters', completed: false },
          { id: 3, title: 'Functional Groups and Naming Compounds', completed: false },
          { id: 4, title: 'Reactions and Isomerism', completed: false }
        ]
      },
      {
        id: 'chemical-equilibrium',
        name: 'Chemical Equilibrium',
        progress: 0,
        lessons: [
          { id: 1, title: 'Reversible Reactions', completed: false },
          { id: 2, title: 'Le Chatelier\'s Principle', completed: false },
          { id: 3, title: 'Industrial Applications', completed: false }
        ]
      },
      {
        id: 'acids-bases',
        name: 'Acids and Bases',
        progress: 0,
        lessons: [
          { id: 1, title: 'pH and Indicators', completed: false },
          { id: 2, title: 'Strong vs Weak Acids/Bases', completed: false },
          { id: 3, title: 'Reactions with Metals, Carbonates, Bases', completed: false },
          { id: 4, title: 'Titration Calculations', completed: false }
        ]
      },
      {
        id: 'reaction-rates',
        name: 'Reaction Rates',
        progress: 0,
        lessons: [
          { id: 1, title: 'Factors Affecting Rate', completed: false },
          { id: 2, title: 'Interpreting Rate Graphs', completed: false },
          { id: 3, title: 'Collision Theory', completed: false }
        ]
      },
      {
        id: 'electrochemistry',
        name: 'Electrochemistry',
        progress: 0,
        lessons: [
          { id: 1, title: 'Redox Reactions', completed: false },
          { id: 2, title: 'Galvanic and Electrolytic Cells', completed: false },
          { id: 3, title: 'Electrolysis of Solutions', completed: false },
          { id: 4, title: 'Standard Electrode Potential', completed: false }
        ]
      },
      {
        id: 'gas-laws',
        name: 'Ideal Gases and Gas Laws',
        progress: 0,
        lessons: [
          { id: 1, title: 'Boyle\'s, Charles\'s, and Combined Gas Laws', completed: false },
          { id: 2, title: 'Ideal Gas Equation (PV = nRT)', completed: false },
          { id: 3, title: 'Molar Volume at STP', completed: false }
        ]
      }
    ]
  },
  {
    id: 'accounting',
    name: 'Accounting',
    icon: '💰',
    description: 'Financial Accounting and Management',
    progress: 0,
    lastAccessed: 'Never',
    topics: [
      {
        id: 'concepts',
        name: 'Accounting Concepts and GAAP',
        progress: 0,
        lessons: [
          { id: 1, title: 'Basic Accounting Terminology', completed: false },
          { id: 2, title: 'GAAP Principles', completed: false },
          { id: 3, title: 'Accounting Standards', completed: false }
        ]
      },
      {
        id: 'financial',
        name: 'Financial Statements',
        progress: 0,
        lessons: [
          { id: 1, title: 'Income Statement', completed: false },
          { id: 2, title: 'Balance Sheet', completed: false },
          { id: 3, title: 'Cash Flow Statement', completed: false },
          { id: 4, title: 'Financial Analysis and Ratios', completed: false }
        ]
      },
      {
        id: 'companies',
        name: 'Companies',
        progress: 0,
        lessons: [
          { id: 1, title: 'Accounting for Companies', completed: false },
          { id: 2, title: 'Final Accounts', completed: false },
          { id: 3, title: 'Taxation and Dividends', completed: false },
          { id: 4, title: 'Ledger Accounts', completed: false },
          { id: 5, title: 'Share Capital and Retained Income', completed: false }
        ]
      },
      {
        id: 'inventory',
        name: 'Inventory Valuation',
        progress: 0,
        lessons: [
          { id: 1, title: 'FIFO Method', completed: false },
          { id: 2, title: 'Weighted Average Method', completed: false },
          { id: 3, title: 'Stock Control', completed: false }
        ]
      },
      {
        id: 'reconciliations',
        name: 'Reconciliations',
        progress: 0,
        lessons: [
          { id: 1, title: 'Bank Reconciliation', completed: false },
          { id: 2, title: 'Creditors\' Reconciliation', completed: false },
          { id: 3, title: 'Debtors\' Reconciliation', completed: false },
          { id: 4, title: 'Control Accounts', completed: false }
        ]
      },
      {
        id: 'assets',
        name: 'Fixed Assets',
        progress: 0,
        lessons: [
          { id: 1, title: 'Depreciation Methods', completed: false },
          { id: 2, title: 'Asset Disposal', completed: false },
          { id: 3, title: 'Asset Registers', completed: false },
          { id: 4, title: 'Maintenance and Insurance', completed: false }
        ]
      },
      {
        id: 'controls',
        name: 'Internal Controls and Ethics',
        progress: 0,
        lessons: [
          { id: 1, title: 'Internal Control Processes', completed: false },
          { id: 2, title: 'Audit and Control Measures', completed: false },
          { id: 3, title: 'Business Ethics', completed: false },
          { id: 4, title: 'Fraud Prevention', completed: false }
        ]
      },
      {
        id: 'budgeting',
        name: 'Budgeting',
        progress: 0,
        lessons: [
          { id: 1, title: 'Cash Budgets', completed: false },
          { id: 2, title: 'Projected Income Statements', completed: false },
          { id: 3, title: 'Variance Analysis', completed: false }
        ]
      },
      {
        id: 'cost',
        name: 'Cost Accounting',
        progress: 0,
        lessons: [
          { id: 1, title: 'Break-even Analysis', completed: false },
          { id: 2, title: 'Cost Concepts', completed: false },
          { id: 3, title: 'Manufacturing Accounts', completed: false }
        ]
      }
    ]
  },
  {
    id: 'business',
    name: 'Business Studies',
    icon: '🏢',
    description: 'Business Management and Entrepreneurship',
    progress: 0,
    lastAccessed: 'Never',
    topics: [
      {
        id: 'macro-environment',
        name: 'Macro Environment',
        progress: 0,
        lessons: [
          { id: 1, title: 'Impact of Macro Environment on Businesses', completed: false },
          { id: 2, title: 'PESTLE Analysis', completed: false },
          { id: 3, title: 'Strategic Responses to Change', completed: false },
          { id: 4, title: 'Business Strategies and Frameworks', completed: false }
        ]
      },
      {
        id: 'micro-environment',
        name: 'Micro Environment and Market Environment',
        progress: 0,
        lessons: [
          { id: 1, title: 'Components of Micro Environment', completed: false },
          { id: 2, title: 'Business Functions', completed: false },
          { id: 3, title: 'Stakeholder Relationships', completed: false },
          { id: 4, title: 'Competitive Advantage', completed: false }
        ]
      },
      {
        id: 'business-strategies',
        name: 'Business Strategies',
        progress: 0,
        lessons: [
          { id: 1, title: 'Strategic Planning and Implementation', completed: false },
          { id: 2, title: 'Types of Strategies', completed: false },
          { id: 3, title: 'Strategy Evaluation Tools', completed: false }
        ]
      },
      {
        id: 'creative-thinking',
        name: 'Creative Thinking and Problem Solving',
        progress: 0,
        lessons: [
          { id: 1, title: 'Problem-solving Techniques', completed: false },
          { id: 2, title: 'Creative Thinking in Business', completed: false },
          { id: 3, title: 'Decision-making Skills', completed: false },
          { id: 4, title: 'Idea Generation Techniques', completed: false }
        ]
      },
      {
        id: 'business-sectors',
        name: 'Business Sectors and their Environments',
        progress: 0,
        lessons: [
          { id: 1, title: 'Primary, Secondary, and Tertiary Sectors', completed: false },
          { id: 2, title: 'Role of Sectors in the Economy', completed: false },
          { id: 3, title: 'Interrelationship between Sectors', completed: false }
        ]
      },
      {
        id: 'ownership',
        name: 'Forms of Ownership',
        progress: 0,
        lessons: [
          { id: 1, title: 'Types of Business Ownership', completed: false },
          { id: 2, title: 'Advantages and Disadvantages', completed: false },
          { id: 3, title: 'Impact on Capital, Taxation, and Continuity', completed: false }
        ]
      },
      {
        id: 'hr-function',
        name: 'Human Resources Function',
        progress: 0,
        lessons: [
          { id: 1, title: 'Recruitment, Selection, and Induction', completed: false },
          { id: 2, title: 'Employment Contracts and Termination', completed: false },
          { id: 3, title: 'Labour Legislation', completed: false },
          { id: 4, title: 'Skills Development and Performance Appraisal', completed: false }
        ]
      },
      {
        id: 'workplace-legislation',
        name: 'Legislation in the Workplace',
        progress: 0,
        lessons: [
          { id: 1, title: 'Basic Conditions of Employment Act (BCEA)', completed: false },
          { id: 2, title: 'Labour Relations Act (LRA)', completed: false },
          { id: 3, title: 'Employment Equity Act (EEA)', completed: false },
          { id: 4, title: 'Consumer Protection Act (CPA)', completed: false },
          { id: 5, title: 'Skills Development Act (SDA)', completed: false }
        ]
      },
      {
        id: 'ethics',
        name: 'Ethics and Professionalism',
        progress: 0,
        lessons: [
          { id: 1, title: 'Business Ethics vs Professional Behaviour', completed: false },
          { id: 2, title: 'Ethical Issues in Business', completed: false },
          { id: 3, title: 'Role of Professional Bodies', completed: false }
        ]
      },
      {
        id: 'csr-csi',
        name: 'Corporate Social Responsibility and Investment',
        progress: 0,
        lessons: [
          { id: 1, title: 'CSR vs CSI', completed: false },
          { id: 2, title: 'Benefits and Challenges', completed: false },
          { id: 3, title: 'Impact on Stakeholders and Business Image', completed: false }
        ]
      },
      {
        id: 'investment',
        name: 'Investment: Securities and Insurance',
        progress: 0,
        lessons: [
          { id: 1, title: 'Types of Investments', completed: false },
          { id: 2, title: 'Risk and Return', completed: false },
          { id: 3, title: 'Johannesburg Stock Exchange (JSE)', completed: false },
          { id: 4, title: 'Types of Insurance', completed: false }
        ]
      },
      {
        id: 'presentation',
        name: 'Presentation and Data Response',
        progress: 0,
        lessons: [
          { id: 1, title: 'Case Studies and Scenario-based Questions', completed: false },
          { id: 2, title: 'Interpreting Graphs, Tables, and Charts', completed: false },
          { id: 3, title: 'Business Report and Presentation Skills', completed: false }
        ]
      }
    ]
  },
  {
    id: 'economics',
    name: 'Economics',
    icon: '📈',
    description: 'Micro and Macro Economics',
    progress: 0,
    lastAccessed: 'Never',
    topics: [
      {
        id: 'circular-flow',
        name: 'Circular Flow',
        progress: 0,
        lessons: [
          { id: 1, title: 'Four-sector Model', completed: false },
          { id: 2, title: 'Flows of Income and Spending', completed: false },
          { id: 3, title: 'Injections and Leakages', completed: false },
          { id: 4, title: 'Open and Closed Economies', completed: false }
        ]
      },
      {
        id: 'business-cycles',
        name: 'Business Cycles',
        progress: 0,
        lessons: [
          { id: 1, title: 'Phases of the Business Cycle', completed: false },
          { id: 2, title: 'Characteristics and Effects', completed: false },
          { id: 3, title: 'Government Intervention', completed: false },
          { id: 4, title: 'Economic Indicators', completed: false }
        ]
      },
      {
        id: 'public-sector',
        name: 'Public Sector Economics',
        progress: 0,
        lessons: [
          { id: 1, title: 'Government Revenue and Expenditure', completed: false },
          { id: 2, title: 'Fiscal Policy and National Budget', completed: false },
          { id: 3, title: 'Types of Taxes', completed: false },
          { id: 4, title: 'Features of a Good Tax System', completed: false },
          { id: 5, title: 'Public Sector Provisioning', completed: false }
        ]
      },
      {
        id: 'foreign-exchange',
        name: 'Foreign Exchange Markets',
        progress: 0,
        lessons: [
          { id: 1, title: 'Exchange Rate Systems', completed: false },
          { id: 2, title: 'Demand and Supply of Foreign Currency', completed: false },
          { id: 3, title: 'Appreciation and Depreciation', completed: false },
          { id: 4, title: 'Balance of Payments and Trade', completed: false }
        ]
      },
      {
        id: 'growth-development',
        name: 'Economic Growth and Development',
        progress: 0,
        lessons: [
          { id: 1, title: 'Growth vs Development', completed: false },
          { id: 2, title: 'Measures of Development', completed: false },
          { id: 3, title: 'Growth and Development Strategies', completed: false },
          { id: 4, title: 'Causes of Underdevelopment', completed: false }
        ]
      },
      {
        id: 'inflation',
        name: 'Inflation',
        progress: 0,
        lessons: [
          { id: 1, title: 'Types of Inflation', completed: false },
          { id: 2, title: 'Measuring Inflation', completed: false },
          { id: 3, title: 'Causes and Consequences', completed: false },
          { id: 4, title: 'Control Measures', completed: false }
        ]
      },
      {
        id: 'labour-markets',
        name: 'Labour Markets',
        progress: 0,
        lessons: [
          { id: 1, title: 'Labour Supply and Demand', completed: false },
          { id: 2, title: 'Minimum Wage', completed: false },
          { id: 3, title: 'Labour Productivity', completed: false },
          { id: 4, title: 'Unemployment', completed: false }
        ]
      },
      {
        id: 'monetary-policy',
        name: 'Monetary Policy and Banking',
        progress: 0,
        lessons: [
          { id: 1, title: 'Role of SARB', completed: false },
          { id: 2, title: 'Monetary Policy Tools', completed: false },
          { id: 3, title: 'Commercial Banks and Money Creation', completed: false },
          { id: 4, title: 'Money Supply and Financial Stability', completed: false }
        ]
      },
      {
        id: 'population',
        name: 'Population and Labour Force',
        progress: 0,
        lessons: [
          { id: 1, title: 'Population Trends and Demographics', completed: false },
          { id: 2, title: 'Labour Force Participation', completed: false },
          { id: 3, title: 'Dependency Ratio', completed: false },
          { id: 4, title: 'Population Policy', completed: false }
        ]
      },
      {
        id: 'poverty-inequality',
        name: 'Poverty and Inequality',
        progress: 0,
        lessons: [
          { id: 1, title: 'Causes and Effects', completed: false },
          { id: 2, title: 'Gini Coefficient and Lorenz Curve', completed: false },
          { id: 3, title: 'Redistribution Methods', completed: false },
          { id: 4, title: 'Global Comparisons', completed: false }
        ]
      },
      {
        id: 'trade',
        name: 'Protectionism and Free Trade',
        progress: 0,
        lessons: [
          { id: 1, title: 'Protectionism: Pros and Cons', completed: false },
          { id: 2, title: 'Trade Protection Tools', completed: false },
          { id: 3, title: 'WTO and Trade Agreements', completed: false },
          { id: 4, title: 'Free Trade Zones', completed: false }
        ]
      },
      {
        id: 'contemporary',
        name: 'Contemporary Economic Issues',
        progress: 0,
        lessons: [
          { id: 1, title: 'Globalisation', completed: false },
          { id: 2, title: 'Environmental Sustainability', completed: false },
          { id: 3, title: 'Inclusive Economy', completed: false },
          { id: 4, title: 'South Africa\'s Economic Challenges', completed: false }
        ]
      }
    ]
  },
  {
    id: 'history',
    name: 'History',
    icon: '📚',
    description: 'World History and South African History',
    progress: 0,
    lastAccessed: 'Never',
    topics: [
      {
        id: 'cold-war',
        name: 'The Cold War',
        progress: 0,
        lessons: [
          { id: 1, title: 'Origins: Yalta and Potsdam Conferences', completed: false },
          { id: 2, title: 'USA vs USSR Ideologies', completed: false },
          { id: 3, title: 'Key Events', completed: false },
          { id: 4, title: 'Proxy Wars and Nuclear Arms Race', completed: false },
          { id: 5, title: 'Role of Superpowers', completed: false }
        ]
      },
      {
        id: 'independent-africa',
        name: 'Independent Africa',
        progress: 0,
        lessons: [
          { id: 1, title: 'Challenges Facing Independent States', completed: false },
          { id: 2, title: 'Congo under Mobutu Sese Seko', completed: false },
          { id: 3, title: 'Tanzania under Julius Nyerere', completed: false },
          { id: 4, title: 'Role of the OAU/AU', completed: false },
          { id: 5, title: 'Political, Social, and Economic Struggles', completed: false }
        ]
      },
      {
        id: 'civil-protests',
        name: 'Civil Society Protests (1950s to 1970s)',
        progress: 0,
        lessons: [
          { id: 1, title: 'USA Civil Rights Movement', completed: false },
          { id: 2, title: 'Martin Luther King Jr.', completed: false },
          { id: 3, title: 'Malcolm X and Black Power', completed: false },
          { id: 4, title: 'Black Consciousness Movement', completed: false },
          { id: 5, title: 'Steve Biko', completed: false },
          { id: 6, title: 'Student Protests', completed: false }
        ]
      },
      {
        id: 'sa-crisis',
        name: 'South Africa 1970s–1980s: Crisis and Resistance',
        progress: 0,
        lessons: [
          { id: 1, title: 'Internal Resistance', completed: false },
          { id: 2, title: 'International Community', completed: false },
          { id: 3, title: 'State Repression', completed: false },
          { id: 4, title: 'Role of Media', completed: false },
          { id: 5, title: 'State of Emergency', completed: false }
        ]
      },
      {
        id: 'democracy',
        name: 'The Coming of Democracy in South Africa (1990–1994)',
        progress: 0,
        lessons: [
          { id: 1, title: 'Unbanning of Political Organisations', completed: false },
          { id: 2, title: 'Release of Nelson Mandela', completed: false },
          { id: 3, title: 'Negotiation Process', completed: false },
          { id: 4, title: 'Road to 1994 Election', completed: false },
          { id: 5, title: 'Transition Challenges', completed: false }
        ]
      },
      {
        id: 'new-world-order',
        name: 'The End of the Cold War and a New World Order',
        progress: 0,
        lessons: [
          { id: 1, title: 'Collapse of USSR', completed: false },
          { id: 2, title: 'Global Impact', completed: false },
          { id: 3, title: 'Influence on South Africa', completed: false },
          { id: 4, title: 'Rise of Globalisation', completed: false }
        ]
      }
    ]
  },
  {
    id: 'geography',
    name: 'Geography',
    icon: '🌍',
    description: 'Physical and Human Geography',
    progress: 0,
    lastAccessed: 'Never',
    topics: [
      {
        id: 'climatology',
        name: 'Climatology',
        progress: 0,
        lessons: [
          { id: 1, title: 'Mid-latitude Cyclones', completed: false },
          { id: 2, title: 'Tropical Cyclones', completed: false },
          { id: 3, title: 'Climate and Weather in South Africa', completed: false },
          { id: 4, title: 'Droughts and Floods', completed: false },
          { id: 5, title: 'Anticyclones', completed: false },
          { id: 6, title: 'Urban Climates', completed: false }
        ]
      },
      {
        id: 'geomorphology',
        name: 'Geomorphology',
        progress: 0,
        lessons: [
          { id: 1, title: 'Fluvial Processes', completed: false },
          { id: 2, title: 'River Profiles', completed: false },
          { id: 3, title: 'River Capture and Rejuvenation', completed: false },
          { id: 4, title: 'Catchment and River Management', completed: false },
          { id: 5, title: 'Drainage Basins and Density', completed: false }
        ]
      },
      {
        id: 'settlements',
        name: 'Rural and Urban Settlements',
        progress: 0,
        lessons: [
          { id: 1, title: 'Settlement Hierarchy and Patterns', completed: false },
          { id: 2, title: 'Rural Depopulation and Land Reform', completed: false },
          { id: 3, title: 'Urbanisation and Counter-urbanisation', completed: false },
          { id: 4, title: 'Land Use in Urban Areas', completed: false },
          { id: 5, title: 'Settlement Challenges', completed: false },
          { id: 6, title: 'Urban Sustainability and Planning', completed: false }
        ]
      },
      {
        id: 'economic-geography',
        name: 'Economic Geography',
        progress: 0,
        lessons: [
          { id: 1, title: 'Economic Activities', completed: false },
          { id: 2, title: 'Agriculture', completed: false },
          { id: 3, title: 'Mining', completed: false },
          { id: 4, title: 'Industry', completed: false },
          { id: 5, title: 'Trade and Transport', completed: false },
          { id: 6, title: 'South Africa in Global Trade', completed: false }
        ]
      },
      {
        id: 'resources',
        name: 'Resources and Sustainability',
        progress: 0,
        lessons: [
          { id: 1, title: 'Water Resources', completed: false },
          { id: 2, title: 'Energy Resources', completed: false },
          { id: 3, title: 'Soil and Land Degradation', completed: false },
          { id: 4, title: 'Sustainable Development Goals', completed: false },
          { id: 5, title: 'Environmental Degradation', completed: false }
        ]
      },
      {
        id: 'mapwork',
        name: 'Mapwork & GIS',
        progress: 0,
        lessons: [
          { id: 1, title: 'Topographic Map Reading', completed: false },
          { id: 2, title: 'Orthophoto Maps', completed: false },
          { id: 3, title: 'Scale and Distance', completed: false },
          { id: 4, title: 'Gradient and Vertical Exaggeration', completed: false },
          { id: 5, title: 'Cross Sections and Profiles', completed: false },
          { id: 6, title: 'GIS Concepts and Applications', completed: false }
        ]
      }
    ]
  },
  {
    id: 'lifeskills',
    name: 'Life Orientation',
    icon: '🎯',
    description: 'Personal Development and Social Responsibility',
    progress: 0,
    lastAccessed: 'Never',
    topics: [
      {
        id: 'self-development',
        name: 'Development of the Self in Society',
        progress: 0,
        lessons: [
          { id: 1, title: 'Life Roles', completed: false },
          { id: 2, title: 'Dealing with Change, Loss, and Grief', completed: false },
          { id: 3, title: 'Coping with Stress, Conflict, and Crisis', completed: false },
          { id: 4, title: 'Gender Roles and Equity', completed: false },
          { id: 5, title: 'Human Rights and Social Justice', completed: false },
          { id: 6, title: 'Personal Lifestyle Choices', completed: false }
        ]
      },
      {
        id: 'social-responsibility',
        name: 'Social and Environmental Responsibility',
        progress: 0,
        lessons: [
          { id: 1, title: 'Environmental Issues', completed: false },
          { id: 2, title: 'Sustainable Development', completed: false },
          { id: 3, title: 'Community Responsibility', completed: false },
          { id: 4, title: 'Respect for Diversity', completed: false },
          { id: 5, title: 'Social and Environmental Activism', completed: false }
        ]
      },
      {
        id: 'democracy',
        name: 'Democracy and Human Rights',
        progress: 0,
        lessons: [
          { id: 1, title: 'Democratic Participation', completed: false },
          { id: 2, title: 'Political Parties and Elections', completed: false },
          { id: 3, title: 'Government Structures', completed: false },
          { id: 4, title: 'Constitutional Rights', completed: false },
          { id: 5, title: 'Contemporary Social Issues', completed: false }
        ]
      },
      {
        id: 'careers',
        name: 'Careers and Career Choices',
        progress: 0,
        lessons: [
          { id: 1, title: 'Career and Subject Alignment', completed: false },
          { id: 2, title: 'Tertiary Institutions', completed: false },
          { id: 3, title: 'Bursaries and Opportunities', completed: false },
          { id: 4, title: 'Job Market and Entrepreneurship', completed: false },
          { id: 5, title: 'CV Writing and Interviews', completed: false },
          { id: 6, title: 'Career Adaptability', completed: false }
        ]
      },
      {
        id: 'study-skills',
        name: 'Study Skills and Exam Preparation',
        progress: 0,
        lessons: [
          { id: 1, title: 'Time Management', completed: false },
          { id: 2, title: 'Learning Styles', completed: false },
          { id: 3, title: 'Summarising and Note-taking', completed: false },
          { id: 4, title: 'Exam Preparation', completed: false },
          { id: 5, title: 'Managing Exam Stress', completed: false }
        ]
      },
      {
        id: 'physical-education',
        name: 'Physical Education & Well-being',
        progress: 0,
        lessons: [
          { id: 1, title: 'Physical Activities', completed: false },
          { id: 2, title: 'Benefits of Exercise', completed: false },
          { id: 3, title: 'Fitness and Training', completed: false },
          { id: 4, title: 'Healthy Lifestyle', completed: false },
          { id: 5, title: 'Nutrition and Substance Abuse', completed: false }
        ]
      }
    ]
  },
  {
    id: 'cat',
    name: 'Computer Applications Technology',
    icon: '💻',
    description: 'Digital literacy and computer applications',
    progress: 0,
    lastAccessed: 'Never',
    topics: [
      {
        id: 'digital-devices',
        name: 'Digital Devices',
        progress: 0,
        lessons: [
          { id: 1, title: 'Functions of Computers', completed: false },
          { id: 2, title: 'Types of Digital Devices', completed: false },
          { id: 3, title: 'Device Usage and Applications', completed: false }
        ]
      },
      {
        id: 'productivity',
        name: 'Productivity Applications',
        progress: 0,
        lessons: [
          { id: 1, title: 'Word Processing (MS Word, Google Docs)', completed: false },
          { id: 2, title: 'Spreadsheets (MS Excel, Google Sheets)', completed: false },
          { id: 3, title: 'Presentations (MS PowerPoint, Google Slides)', completed: false }
        ]
      },
      {
        id: 'data-management',
        name: 'Data Management',
        progress: 0,
        lessons: [
          { id: 1, title: 'Organizing Data in Spreadsheets', completed: false },
          { id: 2, title: 'Data Analysis Techniques', completed: false },
          { id: 3, title: 'Creating Graphs and Charts', completed: false }
        ]
      },
      {
        id: 'communication',
        name: 'Communication and Networks',
        progress: 0,
        lessons: [
          { id: 1, title: 'Internet Usage', completed: false },
          { id: 2, title: 'Email and Cloud Services', completed: false },
          { id: 3, title: 'Social Media Tools', completed: false },
          { id: 4, title: 'Online Communication', completed: false }
        ]
      },
      {
        id: 'web-design',
        name: 'Web Design',
        progress: 0,
        lessons: [
          { id: 1, title: 'HTML Basics', completed: false },
          { id: 2, title: 'CSS Fundamentals', completed: false },
          { id: 3, title: 'Website Creation', completed: false },
          { id: 4, title: 'Digital Content Management', completed: false }
        ]
      },
      {
        id: 'practical-skills',
        name: 'Practical Skills',
        progress: 0,
        lessons: [
          { id: 1, title: 'Word Processing Skills', completed: false },
          { id: 2, title: 'Spreadsheet and Database Usage', completed: false },
          { id: 3, title: 'Creating Effective Presentations', completed: false },
          { id: 4, title: 'Basic Web Design Skills', completed: false }
        ]
      }
    ]
  },
  {
    id: 'it',
    name: 'Information Technology',
    icon: '🖥️',
    description: 'Computer systems and software development',
    progress: 0,
    lastAccessed: 'Never',
    topics: [
      {
        id: 'systems-tech',
        name: 'Systems Technologies',
        progress: 0,
        lessons: [
          { id: 1, title: 'Hardware Components', completed: false },
          { id: 2, title: 'Software Components', completed: false },
          { id: 3, title: 'Operating Systems', completed: false }
        ]
      },
      {
        id: 'data-management',
        name: 'Data and Information Management',
        progress: 0,
        lessons: [
          { id: 1, title: 'Database Management', completed: false },
          { id: 2, title: 'SQL Fundamentals', completed: false },
          { id: 3, title: 'Data Organization', completed: false },
          { id: 4, title: 'Data Storage and Retrieval', completed: false }
        ]
      },
      {
        id: 'software-dev',
        name: 'Software Development',
        progress: 0,
        lessons: [
          { id: 1, title: 'Programming Languages', completed: false },
          { id: 2, title: 'Code Writing and Debugging', completed: false },
          { id: 3, title: 'Problem-solving', completed: false },
          { id: 4, title: 'Algorithms', completed: false }
        ]
      },
      {
        id: 'networks',
        name: 'Networks',
        progress: 0,
        lessons: [
          { id: 1, title: 'Network Types', completed: false },
          { id: 2, title: 'Network Communication', completed: false },
          { id: 3, title: 'Network Protocols', completed: false }
        ]
      },
      {
        id: 'security',
        name: 'Security and Ethics',
        progress: 0,
        lessons: [
          { id: 1, title: 'Cybersecurity Principles', completed: false },
          { id: 2, title: 'Data Protection', completed: false },
          { id: 3, title: 'Privacy Issues', completed: false },
          { id: 4, title: 'Ethical Considerations', completed: false }
        ]
      },
      {
        id: 'practical-skills',
        name: 'Practical Skills',
        progress: 0,
        lessons: [
          { id: 1, title: 'Programming', completed: false },
          { id: 2, title: 'Database Design', completed: false },
          { id: 3, title: 'Website Design', completed: false }
        ]
      }
    ]
  },
  {
    id: 'tourism',
    name: 'Tourism',
    icon: '✈️',
    description: 'Tourism industry and management',
    progress: 0,
    lastAccessed: 'Never',
    topics: [
      {
        id: 'tourism-sectors',
        name: 'Tourism Sectors',
        progress: 0,
        lessons: [
          { id: 1, title: 'Accommodation Types', completed: false },
          { id: 2, title: 'Transportation', completed: false },
          { id: 3, title: 'Tourist Attractions', completed: false }
        ]
      },
      {
        id: 'tourism-marketing',
        name: 'Tourism Marketing',
        progress: 0,
        lessons: [
          { id: 1, title: 'Advertising Methods', completed: false },
          { id: 2, title: 'Social Media Marketing', completed: false },
          { id: 3, title: 'Marketing Strategies', completed: false }
        ]
      },
      {
        id: 'tourism-geography',
        name: 'Tourism Geography',
        progress: 0,
        lessons: [
          { id: 1, title: 'South African Destinations', completed: false },
          { id: 2, title: 'Global Destinations', completed: false },
          { id: 3, title: 'Tourism Regions in SA', completed: false }
        ]
      },
      {
        id: 'tourism-impact',
        name: 'Impact of Tourism',
        progress: 0,
        lessons: [
          { id: 1, title: 'Economic Impact', completed: false },
          { id: 2, title: 'Social and Cultural Effects', completed: false },
          { id: 3, title: 'Environmental Impact', completed: false }
        ]
      },
      {
        id: 'tourism-development',
        name: 'Tourism Development',
        progress: 0,
        lessons: [
          { id: 1, title: 'Growth and Development', completed: false },
          { id: 2, title: 'Government Plans', completed: false },
          { id: 3, title: 'Development Strategies', completed: false }
        ]
      },
      {
        id: 'tourism-management',
        name: 'Tourism Management',
        progress: 0,
        lessons: [
          { id: 1, title: 'Business Management', completed: false },
          { id: 2, title: 'Customer Service', completed: false },
          { id: 3, title: 'Quality Standards', completed: false }
        ]
      },
      {
        id: 'tourism-trends',
        name: 'Tourism Trends',
        progress: 0,
        lessons: [
          { id: 1, title: 'New Travel Styles', completed: false },
          { id: 2, title: 'Current Challenges', completed: false },
          { id: 3, title: 'Future Trends', completed: false }
        ]
      },
      {
        id: 'sa-tourism',
        name: 'Tourism in South Africa',
        progress: 0,
        lessons: [
          { id: 1, title: 'Current State', completed: false },
          { id: 2, title: 'Economic Role', completed: false },
          { id: 3, title: 'Future Prospects', completed: false }
        ]
      }
    ]
  }
];

export default function StudyPage() {
  const { user } = useAuth();
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSubjectSelector, setShowSubjectSelector] = useState(true);
  const [expandedTopics, setExpandedTopics] = useState<{ [key: string]: boolean }>({});
  const [activeLesson, setActiveLesson] = useState<{ subjectId: string; topicId: string; lessonId: number } | null>(null);
  const [isEditingNotes, setIsEditingNotes] = useState(false);
  const [lessonNotes, setLessonNotes] = useState<{ [key: string]: string }>({});
  const [filter, setFilter] = useState('all');
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerTime, setTimerTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null);

  const handleSubjectSelect = (subjectId: string) => {
    setSelectedSubjects(prev =>
      prev.includes(subjectId)
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId]
    );
  };

  const handleStartLearning = async () => {
    if (selectedSubjects.length > 0) {
      setShowSubjectSelector(false);
      if (user) {
        await updateStreak(user.uid);
        setIsTimerRunning(true);
      }
    }
  };

  const toggleTopic = (topicId: string) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  const filteredSubjects = subjects.filter(subject =>
    selectedSubjects.includes(subject.id)
  );

  const getActiveLessonContent = () => {
    if (!activeLesson) return null;
    
    const subject = subjects.find(s => s.id === activeLesson.subjectId);
    if (!subject) return null;

    const topic = subject.topics.find(t => t.id === activeLesson.topicId);
    if (!topic) return null;

    const lesson = topic.lessons.find(l => l.id === activeLesson.lessonId);
    if (!lesson) return null;

    switch (activeLesson.subjectId) {
      case 'mathematics':
        switch (activeLesson.topicId) {
          case 'algebra':
            switch (activeLesson.lessonId) {
              case 1: return <AlgebraSimplifyingExpressions />;
              case 2: return <AlgebraMultiplyingExpressions />;
              case 3: return <AlgebraFactorisingEquations />;
              case 4: return <AlgebraInequalities />;
              case 5: return <AlgebraicFractions />;
              case 6: return <AlgebraNatureOfRoots />;
              default: return null;
            }
          case 'patterns':
            switch (activeLesson.lessonId) {
              case 1: return null; // ArithmeticSequences
              case 2: return null; // GeometricSequences
              case 3: return null; // SigmaNotation
              default: return null;
            }
          case 'functions':
            switch (activeLesson.lessonId) {
              case 1: return <LinearQuadraticFunctions />;
              case 2: return null; // ExponentialHyperbolicFunctions
              case 3: return null; // LogarithmicFunctions
              case 4: return <Transformations />;
              case 5: return <FunctionInverses />;
              default: return null;
            }
          case 'finance':
            switch (activeLesson.lessonId) {
              case 1: return <FinanceGrowthDecay />;
              case 2: return <DepreciationInflation />;
              case 3: return <AnnuitiesPresentFutureValue />;
              default: return null;
            }
          case 'calculus':
            switch (activeLesson.lessonId) {
              case 1: return <FirstPrinciplesDifferentiation />;
              case 2: return <RulesOfDifferentiation />;
              case 3: return <MaximaAndMinima />;
              case 4: return <SketchingGraphsUsingDerivatives />;
              default: return null;
            }
          case 'probability':
            switch (activeLesson.lessonId) {
              case 1: return <BasicProbabilityRules />;
              case 2: return <TreeDiagrams />;
              case 3: return <VennDiagrams />;
              case 4: return <IndependentDependentEvents />;
              default: return null;
            }
          default:
            return null;
        }
      default:
        return null;
    }
  };

  const handleSaveNotes = () => {
    // Implementation of saving notes
  };

  const handleLessonClick = async (subjectId: string, topicId: string, lessonId: number) => {
    if (user) {
      await markTopicCompleted(user.uid, topicId);
    }
    setActiveLesson({ subjectId, topicId, lessonId });
  };

  const getFilteredTopics = (subject: typeof subjects[0]) => {
    if (filter === 'all') {
      return subject.topics;
    } else if (filter === 'in-progress') {
      return subject.topics.filter(topic => topic.progress < 100);
    } else if (filter === 'completed') {
      return subject.topics.filter(topic => topic.progress === 100);
    }
    return [];
  };

  const handleStartTimer = () => {
    if (!isTimerRunning) {
      setIsTimerRunning(true);
      const interval = setInterval(() => {
        setTimerTime(prev => prev + 1);
      }, 1000);
      setTimerInterval(interval);
    }
  };

  const handlePauseTimer = () => {
    if (isTimerRunning && timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
      setIsTimerRunning(false);
    }
  };

  const handleStopTimer = async () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
    if (user && timerTime > 0) {
      const minutes = Math.ceil(timerTime / 60);
      await updateStudyTime(user.uid, minutes);
    }
    setTimerTime(0);
    setIsTimerRunning(false);
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1 flex overflow-hidden">
        {/* Subject Selection Screen */}
        {showSubjectSelector ? (
          <div className="flex-1 flex flex-col p-4">
            <div className="text-center mb-4">
              <h1 className="text-2xl font-bold text-gray-900">Choose Your Subjects</h1>
            </div>

            {/* Search Bar */}
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search subjects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            {/* Subject Grid */}
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto">
              {subjects.map((subject) => (
                <div
                  key={subject.id}
                  onClick={() => handleSubjectSelect(subject.id)}
                  className={`group relative bg-white rounded-lg p-4 cursor-pointer transition-all ${
                    selectedSubjects.includes(subject.id)
                      ? 'ring-2 ring-blue-500 shadow-md'
                      : 'hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${
                      selectedSubjects.includes(subject.id)
                        ? 'bg-blue-100'
                        : 'bg-gray-100 group-hover:bg-blue-50'
                    }`}>
                      <span className="text-xl">{subject.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-gray-900">{subject.name}</h3>
                      <p className="text-xs text-gray-500">{subject.description}</p>
                    </div>
                    {selectedSubjects.includes(subject.id) ? (
                      <div className="absolute top-2 right-2">
                        <div className="bg-blue-500 text-white rounded-full p-1">
                          <CheckCircleIcon className="h-4 w-4" />
                        </div>
                      </div>
                    ) : (
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRightIcon className="h-4 w-4 text-gray-400" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Selection Summary and Start Button */}
            <div className="mt-4 bg-white border-t border-gray-200 p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">
                    {selectedSubjects.length} subject{selectedSubjects.length !== 1 ? 's' : ''} selected
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    {selectedSubjects.length > 0
                      ? subjects
                          .filter(s => selectedSubjects.includes(s.id))
                          .map(s => s.name)
                          .join(', ')
                      : 'No subjects selected'}
                  </p>
                </div>
                <AuthCheck required={true}>
                  <button
                    onClick={handleStartLearning}
                    disabled={selectedSubjects.length === 0}
                    className={`px-6 py-2 rounded-lg text-white font-medium flex items-center space-x-2 ${
                      selectedSubjects.length === 0
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    <span>Start Learning</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </AuthCheck>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex">
            {/* Sidebar with Subjects */}
            <div className="w-48 bg-white border-r border-gray-200 flex flex-col">
              <div className="p-3 border-b border-gray-200">
                <h2 className="text-sm font-semibold text-gray-900">Subjects</h2>
              </div>
              <div className="flex-1 overflow-y-auto">
                {filteredSubjects.map((subject) => (
                  <div
                    key={subject.id}
                    className="p-2 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{subject.icon}</span>
                      <span className="text-xs font-medium text-gray-900">{subject.name}</span>
                    </div>
                    <div className="mt-1">
                      <div className="h-1 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${subject.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="w-96 flex flex-col">
              {/* Header */}
              <div className="p-3 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <h1 className="text-sm font-bold text-gray-900">Topics</h1>
                  <button
                    onClick={() => setShowSubjectSelector(true)}
                    className="px-2 py-1 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-xs"
                  >
                    Change
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-32 px-2 py-1 pl-8 text-xs rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <MagnifyingGlassIcon className="h-4 w-4 text-gray-400 absolute left-2 top-1/2 transform -translate-y-1/2" />
                  </div>
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value as any)}
                    className="px-2 py-1 text-xs rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="all">All</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>

              {/* Topics and Lessons */}
              <div className="flex-1 overflow-y-auto">
                {filteredSubjects.map((subject) => (
                  <div key={subject.id} className="p-2">
                    <div className="mb-2 flex items-center justify-between">
                      <h2 className="text-xs font-semibold text-gray-900 flex items-center">
                        <span className="text-sm mr-1">{subject.icon}</span>
                        {subject.name}
                      </h2>
                      <div className="flex items-center space-x-1">
                        <div className="w-16 h-1 bg-gray-200 rounded-full">
                          <div
                            className="h-full bg-blue-600 rounded-full"
                            style={{ width: `${subject.progress}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium text-gray-900">{Math.round(subject.progress)}%</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {getFilteredTopics(subject).map((topic) => (
                        <div key={topic.id} className="bg-white rounded-lg shadow-sm">
                          <button
                            onClick={() => toggleTopic(topic.id)}
                            className="w-full p-2 flex items-center justify-between text-left hover:bg-gray-50 rounded-t-lg"
                          >
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                <span className="text-blue-600 font-semibold text-xs">{Math.round(topic.progress)}%</span>
                              </div>
                              <div>
                                <h3 className="text-xs font-semibold text-gray-900">{topic.name}</h3>
                                <p className="text-xs text-gray-500">
                                  {topic.lessons.filter(l => l.completed).length}/{topic.lessons.length}
                                </p>
                              </div>
                            </div>
                            {expandedTopics[topic.id] ? (
                              <ChevronDownIcon className="h-4 w-4 text-gray-400" />
                            ) : (
                              <ChevronRightIcon className="h-4 w-4 text-gray-400" />
                            )}
                          </button>

                          {expandedTopics[topic.id] && (
                            <div className="border-t border-gray-100">
                              {topic.lessons.map((lesson) => (
                                <div
                                  key={lesson.id}
                                  className="flex items-center justify-between p-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                                  onClick={() => {
                                    handleLessonClick(subject.id, topic.id, lesson.id);
                                    setActiveLesson({ subjectId: subject.id, topicId: topic.id, lessonId: lesson.id });
                                  }}
                                >
                                  <div className="flex items-center space-x-2">
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                                      lesson.completed ? 'bg-green-100' : 'bg-gray-100'
                                    }`}>
                                      {lesson.completed ? (
                                        <CheckCircleIcon className="h-3 w-3 text-green-500" />
                                      ) : (
                                        <PlayIcon className="h-3 w-3 text-blue-500" />
                                      )}
                                    </div>
                                    <span className="text-xs text-gray-600">{lesson.title}</span>
                                  </div>
                                  <span className="text-xs text-gray-500">
                                    {lesson.completed ? 'Done' : 'Start'}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lesson Content and Notes */}
            {activeLesson && (
              <div className="flex-1 bg-white border-l border-gray-200 flex flex-col">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">
                        {subjects.find(s => s.id === activeLesson.subjectId)?.topics.find(t => t.id === activeLesson.topicId)?.name}
                      </h2>
                      <p className="text-sm text-gray-600">
                        {subjects.find(s => s.id === activeLesson.subjectId)?.topics.find(t => t.id === activeLesson.topicId)?.lessons.find(l => l.id === activeLesson.lessonId)?.title}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => {/* TODO: Implement quiz functionality */}}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                      >
                        <AcademicCapIcon className="h-5 w-5" />
                        <span>Take Quiz</span>
                      </button>
                      <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg">
                        <ClockIcon className="h-5 w-5 text-gray-600" />
                        <span className="text-sm font-medium text-gray-900">{formatTime(timerTime)}</span>
                      </div>
                      <button 
                        onClick={handleStartTimer}
                        disabled={isTimerRunning}
                        className={`p-2 text-gray-600 hover:bg-gray-100 rounded-lg ${isTimerRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <PlayIcon className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={handlePauseTimer}
                        disabled={!isTimerRunning}
                        className={`p-2 text-gray-600 hover:bg-gray-100 rounded-lg ${!isTimerRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <PauseIcon className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={handleStopTimer}
                        disabled={!isTimerRunning && timerTime === 0}
                        className={`p-2 text-gray-600 hover:bg-gray-100 rounded-lg ${!isTimerRunning && timerTime === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <StopIcon className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={() => setIsEditingNotes(!isEditingNotes)}
                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                      >
                        <PencilIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 overflow-y-auto">
                  {/* Lesson Content Section */}
                  <div className="p-4 border-b border-gray-200 flex-1">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Lesson Content</h3>
                    <div className="bg-gray-50 rounded-lg p-4 min-h-[400px]">
                      {getActiveLessonContent() || (
                        <p className="text-gray-600">
                          No content available for this lesson yet. Content will be added soon.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Notes Section */}
                  <div className="p-4 flex-none">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-gray-500">Your Notes</h3>
                      <button
                        onClick={() => setIsEditingNotes(!isEditingNotes)}
                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                      >
                        <PencilIcon className="h-5 w-5" />
                      </button>
                    </div>
                    {isEditingNotes ? (
                      <div className="space-y-2">
                        <textarea
                          value={lessonNotes[`${activeLesson.subjectId}-${activeLesson.topicId}-${activeLesson.lessonId}`] || ''}
                          onChange={(e) => setLessonNotes(prev => ({
                            ...prev,
                            [`${activeLesson.subjectId}-${activeLesson.topicId}-${activeLesson.lessonId}`]: e.target.value
                          }))}
                          className="w-full h-48 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Take your notes here..."
                        />
                        <button
                          onClick={handleSaveNotes}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                        >
                          <DocumentCheckIcon className="h-4 w-4" />
                          <span>Save Notes</span>
                        </button>
                      </div>
                    ) : (
                      <div className="p-4 bg-gray-50 rounded-lg min-h-[12rem]">
                        {lessonNotes[`${activeLesson.subjectId}-${activeLesson.topicId}-${activeLesson.lessonId}`] || 'No notes yet. Click the pencil icon to add notes.'}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
} 