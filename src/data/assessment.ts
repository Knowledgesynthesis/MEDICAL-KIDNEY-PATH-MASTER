export interface AssessmentQuestion {
  id: string
  category: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: 'q1',
    category: 'IF Patterns',
    question: 'Which IF pattern is characteristic of anti-GBM disease?',
    options: [
      'Granular mesangial staining',
      'Linear IgG along GBM',
      'Full-house pattern',
      'C3-dominant staining',
    ],
    correctAnswer: 1,
    explanation: 'Anti-GBM disease shows linear IgG staining along the glomerular basement membrane, representing antibodies bound to the α3 chain of type IV collagen.',
  },
  {
    id: 'q2',
    category: 'Glomerular Patterns',
    question: 'What type of hypercellularity is seen in crescentic glomerulonephritis?',
    options: [
      'Mesangial hypercellularity',
      'Endocapillary hypercellularity',
      'Extracapillary hypercellularity',
      'Intracapillary hypercellularity',
    ],
    correctAnswer: 2,
    explanation: 'Crescents represent extracapillary hypercellularity - proliferation of cells in Bowman\'s space, outside the glomerular capillaries.',
  },
  {
    id: 'q3',
    category: 'Deposit Location',
    question: 'Where are the characteristic deposits located in membranous nephropathy?',
    options: [
      'Mesangial',
      'Subendothelial',
      'Subepithelial',
      'Intramembranous',
    ],
    correctAnswer: 2,
    explanation: 'Membranous nephropathy is characterized by subepithelial deposits (between podocytes and GBM), which cause the classic "spike" pattern on silver stain.',
  },
  {
    id: 'q4',
    category: 'IgA Nephropathy',
    question: 'What is the minimum IF finding required for diagnosis of IgA nephropathy?',
    options: [
      'Any IgA staining',
      'IgA co-dominant with IgG',
      'IgA dominant or co-dominant',
      'IgA with full-house pattern',
    ],
    correctAnswer: 2,
    explanation: 'IgA nephropathy requires IgA to be dominant (strongest) or co-dominant with another immunoglobulin, not merely present.',
  },
  {
    id: 'q5',
    category: 'Lupus Nephritis',
    question: 'What IF pattern is classic for lupus nephritis?',
    options: [
      'IgG-dominant pattern',
      'C3-only pattern',
      'Full-house pattern (IgG, IgA, IgM, C3, C1q)',
      'Linear IgG pattern',
    ],
    correctAnswer: 2,
    explanation: 'Full-house pattern with IgG, IgA, IgM, C3, and C1q all positive is highly characteristic of lupus nephritis.',
  },
  {
    id: 'q6',
    category: 'Podocytopathy',
    question: 'What is the hallmark EM finding in minimal change disease?',
    options: [
      'Subepithelial deposits',
      'Diffuse foot process effacement',
      'GBM thickening',
      'Electron-dense deposits',
    ],
    correctAnswer: 1,
    explanation: 'Minimal change disease shows diffuse foot process effacement (>80%) on EM, with normal LM and negative IF.',
  },
  {
    id: 'q7',
    category: 'FSGS',
    question: 'Which FSGS variant has the worst prognosis?',
    options: [
      'Tip variant',
      'Perihilar variant',
      'Collapsing variant',
      'FSGS NOS',
    ],
    correctAnswer: 2,
    explanation: 'Collapsing FSGS has the worst prognosis, characterized by tuft collapse with podocyte hypertrophy and proliferation.',
  },
  {
    id: 'q8',
    category: 'Diabetic Nephropathy',
    question: 'What vascular finding is characteristic of diabetic nephropathy?',
    options: [
      'Afferent arteriolar hyalinosis only',
      'Efferent arteriolar hyalinosis only',
      'Both afferent and efferent arteriolar hyalinosis',
      'Fibrinoid necrosis of arterioles',
    ],
    correctAnswer: 2,
    explanation: 'Diabetic nephropathy characteristically shows hyalinosis of BOTH afferent and efferent arterioles, unlike hypertension which mainly affects afferent arterioles.',
  },
  {
    id: 'q9',
    category: 'Amyloidosis',
    question: 'What stain is diagnostic for amyloidosis?',
    options: [
      'PAS',
      'Silver (Jones)',
      'Congo red with apple-green birefringence',
      'Trichrome',
    ],
    correctAnswer: 2,
    explanation: 'Congo red staining with apple-green birefringence under polarized light is diagnostic for amyloidosis.',
  },
  {
    id: 'q10',
    category: 'TMA',
    question: 'What is a characteristic finding of thrombotic microangiopathy on LM?',
    options: [
      'Crescents',
      'Endothelial swelling with fibrin thrombi',
      'Mesangial hypercellularity',
      'GBM spikes',
    ],
    correctAnswer: 1,
    explanation: 'TMA shows endothelial swelling with fibrin thrombi in capillaries, along with "bloodless" glomeruli and possible mesangiolysis.',
  },
  {
    id: 'q11',
    category: 'C3 Glomerulopathy',
    question: 'What defines C3 glomerulopathy on IF?',
    options: [
      'Any C3 positivity',
      'C3 with equal immunoglobulin staining',
      'C3 dominance (≥2 orders of magnitude > Ig)',
      'C3 with C1q positivity',
    ],
    correctAnswer: 2,
    explanation: 'C3 glomerulopathy requires C3 dominance, defined as C3 intensity at least 2 orders of magnitude greater than any immunoglobulin.',
  },
  {
    id: 'q12',
    category: 'Transplant',
    question: 'What finding suggests antibody-mediated rejection in a transplant?',
    options: [
      'Tubulitis alone',
      'Interstitial fibrosis',
      'Peritubular capillaritis with C4d positivity',
      'BK virus inclusions',
    ],
    correctAnswer: 2,
    explanation: 'Antibody-mediated rejection is characterized by microvascular inflammation (peritubular capillaritis, glomerulitis) with C4d positivity in peritubular capillaries.',
  },
  {
    id: 'q13',
    category: 'Crescentic GN',
    question: 'What is the IF pattern in pauci-immune crescentic GN?',
    options: [
      'Linear IgG',
      'Granular immune deposits',
      'Little or no immune staining',
      'Full-house pattern',
    ],
    correctAnswer: 2,
    explanation: 'Pauci-immune crescentic GN shows little or no immunoglobulin staining on IF, distinguishing it from anti-GBM (linear) and immune-complex (granular) types.',
  },
  {
    id: 'q14',
    category: 'Post-Infectious GN',
    question: 'What is the characteristic EM finding in post-infectious GN?',
    options: [
      'Mesangial deposits only',
      'Subepithelial humps',
      'Intramembranous dense deposits',
      'Foot process effacement only',
    ],
    correctAnswer: 1,
    explanation: 'Post-infectious GN characteristically shows large subepithelial "humps" (dome-shaped deposits) on EM.',
  },
  {
    id: 'q15',
    category: 'Fibrillary',
    question: 'What distinguishes fibrillary GN from amyloidosis?',
    options: [
      'Presence of fibrils on EM',
      'Congo red staining result',
      'IF pattern',
      'Location of deposits',
    ],
    correctAnswer: 1,
    explanation: 'Both have fibrils on EM, but amyloidosis is Congo red POSITIVE while fibrillary GN is Congo red NEGATIVE. Fibril size also differs (amyloid 8-12nm, fibrillary 15-30nm).',
  },
  {
    id: 'q16',
    category: 'TIN',
    question: 'What finding suggests drug-induced acute interstitial nephritis?',
    options: [
      'Eosinophil-rich interstitial infiltrate',
      'Granulomatous inflammation only',
      'Plasma cell predominance',
      'Neutrophilic infiltrate',
    ],
    correctAnswer: 0,
    explanation: 'Drug-induced AIN often shows an eosinophil-rich interstitial infiltrate, though eosinophils are not always present.',
  },
  {
    id: 'q17',
    category: 'MPGN',
    question: 'What is the characteristic LM finding in MPGN pattern?',
    options: [
      'Segmental sclerosis',
      'Double contours (tram-tracks)',
      'Crescent formation',
      'Nodular sclerosis',
    ],
    correctAnswer: 1,
    explanation: 'MPGN pattern shows double contours (tram-tracks) on silver stain, resulting from new basement membrane formation and mesangial interposition.',
  },
  {
    id: 'q18',
    category: 'Membranous',
    question: 'What marker supports primary membranous nephropathy?',
    options: [
      'C1q positivity',
      'PLA2R positivity',
      'Full-house IF pattern',
      'TRI on EM',
    ],
    correctAnswer: 1,
    explanation: 'PLA2R (phospholipase A2 receptor) positivity supports primary membranous nephropathy and is present in 70-80% of primary cases.',
  },
  {
    id: 'q19',
    category: 'Vascular',
    question: 'What is "onion-skin" lesion associated with?',
    options: [
      'Diabetic nephropathy',
      'Malignant hypertension',
      'Amyloidosis',
      'IgA nephropathy',
    ],
    correctAnswer: 1,
    explanation: 'Onion-skin lesions (concentric layers of intimal cells) are characteristic of malignant hypertension.',
  },
  {
    id: 'q20',
    category: 'EM',
    question: 'Which deposit location is most associated with inflammation?',
    options: [
      'Mesangial',
      'Subepithelial',
      'Subendothelial',
      'Intramembranous',
    ],
    correctAnswer: 2,
    explanation: 'Subendothelial deposits are most inflammatory because they are accessible to circulating inflammatory cells and complement.',
  },
]

// Helper function to shuffle array
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Get a random subset of questions
export function getRandomQuestions(count: number = 10): AssessmentQuestion[] {
  return shuffleArray(assessmentQuestions).slice(0, count)
}
