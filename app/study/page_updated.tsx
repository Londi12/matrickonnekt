"use client";

// ... Keep all existing imports ...

const getActiveLessonContent = () => {
  if (!selectedLesson) return null;
  
  const subject = subjects.find(s => s.id === selectedSubjects[0]);
  if (!subject) return null;

  const topic = subject.topics.find((t: any) => t.id === selectedTopic);
  if (!topic) return null;

  const lesson = topic.lessons.find((l: any) => l.id === selectedLesson);
  if (!lesson) return null;

  switch (selectedSubjects[0]) {
    case 'english-hl':
      switch (lesson.lessonId) {
        case 'poetry-analysis': return <PoetryAnalysis />;
        case 'shakespeare-study': return <ShakespeareDrama />;
        case 'novel-analysis': return <NovelAnalysis />;
        case 'comprehension': return <CriticalReading />;
        case 'language-structures': return <LanguageStructures />;
        case 'visual-literacy': return <VisualLiteracy />;
        case 'creative-writing': return <CreativeWriting />;
        case 'argumentative-writing': return <ArgumentativeWriting />;
        case 'transactional-writing': return <TransactionalWriting />;
        default: return null;
      }
    
    case 'mathematics':
      switch (lesson.lessonId) {
        // Algebra
        case 'polynomial-equations': return <AlgebraPolynomialEquations />;
        case 'nature-of-roots': return <AlgebraNatureOfRoots />;
        case 'algebraic-fractions': return <AlgebraicFractions />;
        
        // Functions
        case 'function-characteristics': return <LinearQuadraticFunctions />;
        case 'exponential-functions': return <ExponentialHyperbolicFunctions />;
        case 'logarithmic': return <LogarithmicFunctions />;
        case 'transformations': return <Transformations />;
        case 'inverses': return <FunctionInverses />;
        
        // Patterns (Sequences and Series)
        case 'arithmetic-sequences': return <ArithmeticSequences />;
        case 'geometric-sequences': return <GeometricSequences />;
        case 'sigma-notation': return <SigmaNotation />;

        // Financial Mathematics
        case 'simple-compound-interest': return <FinanceGrowthDecay />;
        case 'depreciation': return <DepreciationInflation />;
        case 'annuities': return <AnnuitiesPresentFutureValue />;
        
        // Calculus
        case 'limits': return <FirstPrinciplesDifferentiation />;
        case 'differentiation': return <RulesOfDifferentiation />;
        case 'applications': return <MaximaAndMinima />;
        case 'curve-sketching': return <SketchingGraphsUsingDerivatives />;
        
        // Probability and Statistics
        case 'probability-concepts': return <BasicProbabilityRules />;
        case 'probability-trees': return <TreeDiagrams />;
        case 'venn-diagrams': return <VennDiagrams />;
        case 'probability-independence': return <IndependentDependentEvents />;
        case 'descriptive-statistics': return <StatisticsMeanMedianMode />;
        
        default: return null;
      }

    default:
      return null;
  }
};
