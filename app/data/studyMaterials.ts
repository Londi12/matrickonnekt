export interface StudyMaterial {
  id: number;
  subject: string;
  type: 'study-guide' | 'worksheet';
  title: {
    en: string;
    zu: string;
    af: string;
  };
  description: {
    en: string;
    zu: string;
    af: string;
  };
  fileUrl: string;
  officialSource: boolean;
}

export const studyMaterials: StudyMaterial[] = [
  // Mathematics
  {
    id: 1,
    subject: 'Mathematics',
    type: 'study-guide',
    title: {
      en: 'Calculus Comprehensive Guide',
      zu: 'Umhlahlandlela Ophelele we-Calculus',
      af: 'Omvattende Calculus Gids'
    },
    description: {
      en: 'A complete guide to differential and integral calculus',
      zu: 'Umhlahlandlela ophelele we-calculus differential ne-integral',
      af: 'ʼn Volledige gids vir differensiaal- en integraalrekening'
    },
    fileUrl: 'https://wcedeportal.co.za/mathematical-literacy/study-guides/calculus-study-guide',
    officialSource: true
  },
  {
    id: 2,
    subject: 'Mathematics',
    type: 'worksheet',
    title: {
      en: 'Trigonometry Practice',
      zu: 'Ukuzilolonga kwe-Trigonometry',
      af: 'Trigonometrie Oefening'
    },
    description: {
      en: 'Practice problems covering all trigonometry concepts - Official WCED Resource',
      zu: 'Izinkinga zokuzilolonga ezihlaba zonke izingxenye ze-trigonometry - Umthombo we-WCED',
      af: 'Oefenprobleme wat alle trigonometrie konsepte dek - Amptelike WCED Hulpbron'
    },
    fileUrl: 'https://wcedeportal.co.za/mathematical-literacy/worksheets/trigonometry-practice',
    officialSource: true
  },
  // Physical Sciences
  {
    id: 3,
    subject: 'Physical Sciences',
    type: 'study-guide',
    title: {
      en: 'Mechanics and Motion',
      zu: 'I-Mechanics kanye ne-Motion',
      af: 'Meganika en Beweging'
    },
    description: {
      en: 'Comprehensive guide to mechanics and kinematics - Includes practice problems',
      zu: 'Umhlahlandlela ophelele we-mechanics ne-kinematics - Ifaka izinkinga zokuzilolonga',
      af: 'Omvattende gids vir meganika en kinematika - Sluit oefenprobleme in'
    },
    fileUrl: 'https://wcedeportal.co.za/physical-sciences/study-guides/mechanics-motion',
    officialSource: true
  },
  // Life Sciences
  {
    id: 4,
    subject: 'Life Sciences',
    type: 'study-guide',
    title: {
      en: 'Evolution and Genetics',
      zu: 'Ukuthuthuka ne-Genetics',
      af: 'Evolusie en Genetika'
    },
    description: {
      en: 'Complete guide to evolution and genetics concepts with diagrams',
      zu: 'Umhlahlandlela ophelele wemibono ye-evolution ne-genetics kanye nezithombe',
      af: 'Volledige gids vir evolusie en genetika konsepte met diagramme'
    },
    fileUrl: 'https://wcedeportal.co.za/life-sciences/study-guides/evolution-genetics',
    officialSource: true
  },
  // Accounting
  {
    id: 5,
    subject: 'Accounting',
    type: 'study-guide',
    title: {
      en: 'Financial Statements Guide',
      zu: 'Umhlahlandlela Wezintatimende Zezimali',
      af: 'Finansiële State Gids'
    },
    description: {
      en: 'Comprehensive guide to preparing and analyzing financial statements',
      zu: 'Umhlahlandlela ophelele wokulungiselela nokuhlaziya izintatimende zezimali',
      af: 'Omvattende gids vir die voorbereiding en ontleding van finansiële state'
    },
    fileUrl: 'https://wcedeportal.co.za/accounting/study-guides/financial-statements',
    officialSource: true
  },
  {
    id: 6,
    subject: 'Accounting',
    type: 'worksheet',
    title: {
      en: 'Cash Flow Statements Practice',
      zu: 'Ukuzilolonga Kwezintatimende Zokugeleza Kwemali',
      af: 'Kontantvloeistaat Oefening'
    },
    description: {
      en: 'Practice exercises for preparing cash flow statements with solutions',
      zu: 'Imisebenzi yokuzilolonga yokulungiselela izintatimende zokugeleza kwemali kanye nezixazululo',
      af: 'Oefenopdragte vir die voorbereiding van kontantvloeistate met oplossings'
    },
    fileUrl: 'https://wcedeportal.co.za/accounting/worksheets/cash-flow-statements',
    officialSource: true
  },
  // English Home Language
  {
    id: 7,
    subject: 'English Home Language',
    type: 'study-guide',
    title: {
      en: 'Literature Study Guide',
      zu: 'Umhlahlandlela Wokufunda Imibhalo',
      af: 'Letterkunde Studiegids'
    },
    description: {
      en: 'Analysis and study guide for prescribed literature works',
      zu: 'Ukuhlaziywa nomhlahlandlela wemisebenzi eyalelwe yemibhalo',
      af: 'Analise en studiegids vir voorgeskrewe letterkundige werke'
    },
    fileUrl: 'https://wcedeportal.co.za/english/study-guides/literature',
    officialSource: true
  },
  {
    id: 8,
    subject: 'English Home Language',
    type: 'worksheet',
    title: {
      en: 'Language and Comprehension',
      zu: 'Ulimi Nokuqonda',
      af: 'Taal en Begrip'
    },
    description: {
      en: 'Practice exercises for language structures and comprehension',
      zu: 'Imisetshenzana yokuzilolonga yezakhiwo zolimi nokuqonda',
      af: 'Oefeninge vir taalstrukture en begrip'
    },
    fileUrl: 'https://wcedeportal.co.za/english/worksheets/language-comprehension',
    officialSource: true
  },
  // IsiZulu Home Language
  {
    id: 9,
    subject: 'IsiZulu Home Language',
    type: 'study-guide',
    title: {
      en: 'IsiZulu Literature Guide',
      zu: 'Umhlahlandlela Wemibhalo YesiZulu',
      af: 'IsiZulu Letterkunde Gids'
    },
    description: {
      en: 'Comprehensive guide to IsiZulu literature and poetry',
      zu: 'Umhlahlandlela ophelele wemibhalo nezinkondlo zesiZulu',
      af: 'Omvattende gids vir IsiZulu letterkunde en poësie'
    },
    fileUrl: 'https://wcedeportal.co.za/isizulu/study-guides/literature',
    officialSource: true
  },
  // Physical Sciences
  {
    id: 10,
    subject: 'Physical Sciences',
    type: 'worksheet',
    title: {
      en: 'Chemical Reactions Practice',
      zu: 'Ukuzilolonga Kwezenzo Zekhemikhali',
      af: 'Chemiese Reaksies Oefening'
    },
    description: {
      en: 'Practice problems on balancing equations and reaction types',
      zu: 'Izinkinga zokuzilolonga ekuqondiseni izinkambu kanye nezinhlobo zomnyakazo',
      af: 'Oefenprobleme oor die balansering van vergelykings en reaksietipes'
    },
    fileUrl: 'https://wcedeportal.co.za/physical-sciences/worksheets/chemical-reactions',
    officialSource: true
  }
];
