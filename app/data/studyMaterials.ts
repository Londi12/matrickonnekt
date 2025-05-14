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
      en: 'A complete guide to differential and integral calculus - Official WCED Resource',
      zu: 'Umhlahlandlela ophelele we-calculus differential ne-integral - Umthombo we-WCED',
      af: 'ʼn Volledige gids vir differensiaal- en integraalrekening - Amptelike WCED Hulpbron'
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
  {
    id: 3,
    subject: 'Mathematics',
    type: 'study-guide',
    title: {
      en: 'Analytical Geometry Master Guide',
      zu: 'Umhlahlandlela Obalulekile we-Analytical Geometry',
      af: 'Analitiese Meetkunde Meestergids'
    },
    description: {
      en: 'Comprehensive study guide for Analytical Geometry - From DBE Math Mind Series',
      zu: 'Umhlahlandlela wokufunda ophelele we-Analytical Geometry - Kusuka kwi-DBE Math Mind Series',
      af: 'Omvattende studiegids vir Analitiese Meetkunde - Van DBE Wiskunde Reeks'
    },
    fileUrl: 'https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements/MathematicsMindTheGap.aspx',
    officialSource: true
  },
  {
    id: 4,
    subject: 'Mathematics',
    type: 'worksheet',
    title: {
      en: 'Algebraic Functions & Equations',
      zu: 'Imisebenzi ye-Algebraic nezinhlelo Zezibalo',
      af: 'Algebraïese Funksies & Vergelykings'
    },
    description: {
      en: 'Practice worksheet with past exam questions on algebraic functions - DBE Grade 12 Resource',
      zu: 'Isikhathi sokuzilolonga semi buzo yangaphambilini ye-algebraic functions - Umthombo we-DBE Grade 12',
      af: 'Oefenwerkkaart met vorige eksamenvrae oor algebraïese funksies - DBE Graad 12 Hulpbron'
    },
    fileUrl: 'https://www.education.gov.za/Curriculum/NationalSeniorCertificate/NSCPastExaminationpapers.aspx',
    officialSource: true
  },
  // Physical Sciences
  {
    id: 5,
    subject: 'Physical Sciences',
    type: 'study-guide',
    title: {
      en: 'Mechanics and Motion',
      zu: 'I-Mechanics kanye ne-Motion',
      af: 'Meganika en Beweging'
    },
    description: {
      en: 'Comprehensive guide to mechanics and kinematics - Includes practice problems - WCED Materials',
      zu: 'Umhlahlandlela ophelele we-mechanics ne-kinematics - Ifaka izinkinga zokuzilolonga - Izinto ze-WCED',
      af: 'Omvattende gids vir meganika en kinematika - Sluit oefenprobleme in - WCED Materiaal'
    },
    fileUrl: 'https://wcedeportal.co.za/physical-sciences/study-guides/mechanics-motion',
    officialSource: true
  },
  {
    id: 6,
    subject: 'Physical Sciences',
    type: 'study-guide',
    title: {
      en: 'Electrodynamics Complete Guide',
      zu: 'Umhlahlandlela Ophelele we-Electrodynamics',
      af: 'Elektrodinamika Volledige Gids'
    },
    description: {
      en: 'In-depth study guide covering electric circuits, electromagnetism, and electrical generators - DBE Mind the Gap',
      zu: 'Umhlahlandlela wokufunda ojulile ohlanganisa izinhlaka zikagesi, i-electromagnetism, kanye namajenereta kagesi - DBE Mind the Gap',
      af: 'In-diepte studiegids wat elektriese stroombane, elektromagnetisme en elektriese opwekkers dek - DBE Mind the Gap'
    },
    fileUrl: 'https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements/PhysicalSciencesMindTheGap.aspx',
    officialSource: true
  },
  // Life Sciences
  {
    id: 7,
    subject: 'Life Sciences',
    type: 'study-guide',
    title: {
      en: 'Evolution and Genetics',
      zu: 'Ukuthuthuka ne-Genetics',
      af: 'Evolusie en Genetika'
    },
    description: {
      en: 'Complete guide to evolution and genetics concepts with diagrams - WCED ePortal Resource',
      zu: 'Umhlahlandlela ophelele wemibono ye-evolution ne-genetics kanye nezithombe - Umthombo we-WCED ePortal',
      af: 'Volledige gids vir evolusie en genetika konsepte met diagramme - WCED ePortal Hulpbron'
    },
    fileUrl: 'https://wcedeportal.co.za/life-sciences/study-guides/evolution-genetics',
    officialSource: true
  },
  {
    id: 8,
    subject: 'Life Sciences',
    type: 'study-guide',
    title: {
      en: 'Human Physiology Study Guide',
      zu: 'Umhlahlandlela Wokufunda i-Human Physiology',
      af: 'Menslike Fisiologie Studiegids'
    },
    description: {
      en: 'Comprehensive study guide on human systems: nervous, endocrine, circulatory and reproductive systems - DBE Mind the Gap',
      zu: 'Umhlahlandlela wokufunda ojulile ngezinhlelo zomuntu: izinhlelo zenervous, endocrine, ukuhamba kwegazi kanye nokuzala - DBE Mind the Gap',
      af: 'Omvattende studiegids oor menslike stelsels: senuweestelsel, endokriene stelsel, bloedsomloopstelsel en voortplantingstelsel - DBE Mind the Gap'
    },
    fileUrl: 'https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements/LifeSciencesMindTheGap.aspx',
    officialSource: true
  },
  // Accounting
  {
    id: 9,
    subject: 'Accounting',
    type: 'study-guide',
    title: {
      en: 'Financial Statements Guide',
      zu: 'Umhlahlandlela Wezintatimende Zezimali',
      af: 'Finansiële State Gids'
    },
    description: {      en: 'Comprehensive guide to preparing and analyzing financial statements - WCED ePortal Resource',
      zu: 'Umhlahlandlela ophelele wokulungiselela nokuhlaziya izintatimende zezimali - Umthombo we-WCED ePortal',
      af: 'Omvattende gids vir die voorbereiding en ontleding van finansiële state - WCED ePortal Hulpbron'
    },
    fileUrl: 'https://wcedeportal.co.za/accounting/study-guides/financial-statements',
    officialSource: true
  },
  {
    id: 10,
    subject: 'Accounting',
    type: 'worksheet',
    title: {
      en: 'Cash Flow Statements Practice',
      zu: 'Ukuzilolonga Kwezintatimende Zokugeleza Kwemali',
      af: 'Kontantvloeistaat Oefening'
    },
    description: {
      en: 'Practice exercises for preparing cash flow statements with solutions - WCED ePortal Resource',
      zu: 'Imisebenzi yokuzilolonga yokulungiselela izintatimende zokugeleza kwemali kanye nezixazululo - Umthombo we-WCED ePortal',
      af: 'Oefenopdragte vir die voorbereiding van kontantvloeistate met oplossings - WCED ePortal Hulpbron'
    },
    fileUrl: 'https://wcedeportal.co.za/accounting/worksheets/cash-flow-statements',
    officialSource: true
  },
  {
    id: 11,
    subject: 'Accounting',
    type: 'study-guide',
    title: {
      en: 'Companies Financial Reporting',
      zu: 'Ukubika Kwezimali Zezinkampani',
      af: 'Maatskappye Finansiële Verslagdoening'
    },
    description: {
      en: 'Complete guide to companies financial reporting including published financial statements - DBE Mind the Gap',
      zu: 'Umhlahlandlela ophelele wokubika kwezimali zezinkampani kuhlanganisa nezintatimende zezimali ezishicilelwe - DBE Mind the Gap',
      af: 'Volledige gids tot maatskappye se finansiële verslagdoening, insluitend gepubliseerde finansiële state - DBE Mind the Gap'
    },
    fileUrl: 'https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements/AccountingMindTheGap.aspx',
    officialSource: true
  },
  // English
  {
    id: 12,
    subject: 'English',
    type: 'study-guide',
    title: {
      en: 'Literature Study Guide',
      zu: 'Umhlahlandlela Wokufunda Imibhalo',
      af: 'Letterkunde Studiegids'
    },
    description: {
      en: 'Analysis and study guide for prescribed literature works - WCED ePortal Resource',
      zu: 'Ukuhlaziywa nomhlahlandlela wemisebenzi eyalelwe yemibhalo - Umthombo we-WCED ePortal',
      af: 'Analise en studiegids vir voorgeskrewe letterkundige werke - WCED ePortal Hulpbron'
    },
    fileUrl: 'https://wcedeportal.co.za/english/study-guides/literature',
    officialSource: true
  },
  {
    id: 13,
    subject: 'English',
    type: 'worksheet',
    title: {
      en: 'Language and Comprehension',
      zu: 'Ulimi Nokuqonda',
      af: 'Taal en Begrip'
    },
    description: {
      en: 'Practice exercises for language structures and comprehension - WCED ePortal Resource',
      zu: 'Imisetshenzana yokuzilolonga yezakhiwo zolimi nokuqonda - Umthombo we-WCED ePortal',
      af: 'Oefeninge vir taalstrukture en begrip - WCED ePortal Hulpbron'
    },
    fileUrl: 'https://wcedeportal.co.za/english/worksheets/language-comprehension',
    officialSource: true
  },
  {
    id: 14,
    subject: 'English',
    type: 'study-guide',
    title: {
      en: 'Poetry Analysis Guide',
      zu: 'Umhlahlandlela Wokuhlaziya Izinkondlo',
      af: 'Poësie-analise Gids'
    },
    description: {
      en: 'Comprehensive guide to analyzing poetry with examples from prescribed poems - DBE Mind the Gap',
      zu: 'Umhlahlandlela ophelele wokuhlaziya izinkondlo nezibonelo ezisuka ezinkondlweni ezinqunyiwe - DBE Mind the Gap',
      af: 'Omvattende gids vir die ontleding van poësie met voorbeelde uit voorgeskrewe gedigte - DBE Mind the Gap'
    },
    fileUrl: 'https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements/EnglishMindTheGap.aspx',
    officialSource: true
  },
  // Physical Sciences
  {
    id: 15,
    subject: 'Physical Sciences',
    type: 'worksheet',
    title: {
      en: 'Chemical Reactions Practice',
      zu: 'Ukuzilolonga Kwezenzo Zekhemikhali',
      af: 'Chemiese Reaksies Oefening'
    },
    description: {
      en: 'Practice problems on balancing equations and reaction types - WCED ePortal Resource',
      zu: 'Izinkinga zokuzilolonga ekuqondiseni izinkambu kanye nezinhlobo zomnyakazo - Umthombo we-WCED ePortal',
      af: 'Oefenprobleme oor die balansering van vergelykings en reaksietipes - WCED ePortal Hulpbron'
    },
    fileUrl: 'https://wcedeportal.co.za/physical-sciences/worksheets/chemical-reactions',
    officialSource: true
  },
  {
    id: 16,
    subject: 'Physical Sciences',
    type: 'worksheet',
    title: {
      en: 'Organic Chemistry Worksheet',
      zu: 'Isikhati Sokuzilolnga se-Organic Chemistry',
      af: 'Organiese Chemie Werkkaart'
    },
    description: {
      en: 'Advanced practice problems on organic molecules, nomenclature and reactions - Education.gov.za Resource',
      zu: 'Izinkinga zokuzilolonga ezithuthukile kumamolecule e-organic, i-nomenclature kanye neminyakazo - Umthombo we-Education.gov.za',
      af: 'Gevorderde oefenprobleme oor organiese molekule, nomenklatuur en reaksies - Education.gov.za Hulpbron'
    },
    fileUrl: 'https://www.education.gov.za/Curriculum/NationalSeniorCertificate/NSCPastExaminationpapers.aspx',
    officialSource: true
  },
  {
    id: 17,
    subject: 'Life Sciences',
    type: 'worksheet',
    title: {
      en: 'Plant Biology Practice',
      zu: 'Ukuzilolonga Kwezifundo Zezitshalo',
      af: 'Plantbiologie Oefening'
    },
    description: {
      en: 'Worksheet covering photosynthesis, plant hormones and responses - Based on CAPS curriculum - WCED ePortal',
      zu: 'Isikhathi sokuzilolonga esihlanganisa i-photosynthesis, amahormone ezitshalo kanye nezimpendulo - Kusekwe ku-curriculum ye-CAPS - WCED ePortal',
      af: 'Werkkaart wat fotosintese, planthormone en reaksies dek - Gebaseer op KABV kurrikulum - WCED ePortal'
    },
    fileUrl: 'https://wcedeportal.co.za/life-sciences/worksheets/plant-biology',
    officialSource: true
  },
  {
    id: 18,
    subject: 'Life Sciences',
    type: 'worksheet',
    title: {
      en: 'Ecology and Environmental Studies',
      zu: 'I-Ecology Nezi fundo Zemvelo',
      af: 'Ekologie en Omgewingstudies'
    },
    description: {
      en: 'Practice questions on ecosystems, biodiversity and human impact - Education.gov.za Resource',
      zu: 'Imibuzo yokuzilolonga ngama-ecosystem, i-biodiversity kanye nomthelela wabantu - Umthombo we-Education.gov.za',
      af: 'Oefenvrae oor ekosisteme, biodiversiteit en menslike impak - Education.gov.za Hulpbron'
    },
    fileUrl: 'https://www.education.gov.za/Curriculum/NationalSeniorCertificate/NSCPastExaminationpapers.aspx',
    officialSource: true
  },
  {
    id: 19,
    subject: 'English',
    type: 'worksheet',
    title: {
      en: 'Essay Writing and Creative Texts',
      zu: 'Ukubhala Izindaba Nemibhalo Yobuciko',
      af: 'Opstelskryf en Kreatiewe Tekste'
    },
    description: {
      en: 'Practice worksheets for different essay types and creative writing - Education.gov.za Resource',
      zu: 'Amakhasi okuzilolonga ngezinhlobo ezahlukene zezindaba nokubhala okuyisipesheli - Umthombo we-Education.gov.za',
      af: 'Oefenwerkkaarte vir verskillende opsteltipes en kreatiewe skryfwerk - Education.gov.za Hulpbron'
    },
    fileUrl: 'https://www.education.gov.za/Curriculum/NationalSeniorCertificate/NSCPastExaminationpapers.aspx',
    officialSource: true
  },
  {
    id: 20,
    subject: 'Accounting',
    type: 'worksheet',
    title: {
      en: 'Cost Accounting and Manufacturing',
      zu: 'Ukubalwa Kwezindleko Nokukhiqiza',
      af: 'Kosteberekening en Vervaardiging'
    },
    description: {
      en: 'Worksheet on manufacturing costs, break-even analysis and production reports - Education.gov.za Resource',
      zu: 'Isikhathi sokuzilolonga ngezindleko zokukhiqiza, ukuhlaziywa kwe-break-even kanye nemibiko yokukhiqiza - Umthombo we-Education.gov.za',
      af: 'Werkkaart oor vervaardigingskoste, gelykbreekontleding en produksieverslae - Education.gov.za Hulpbron'
    },
    fileUrl: 'https://www.education.gov.za/Curriculum/NationalSeniorCertificate/NSCPastExaminationpapers.aspx',
    officialSource: true
  }
];
