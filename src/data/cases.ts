export interface Case {
  id: string
  title: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  category: string
  presentation: string
  lm: string[]
  if_pattern: {
    IgG?: string
    IgA?: string
    IgM?: string
    C3?: string
    C1q?: string
    C4d?: string
    kappa?: string
    lambda?: string
  }
  em: string[]
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  keyTeachingPoints: string[]
}

export const cases: Case[] = [
  {
    id: 'case-001',
    title: 'Young Patient with Hematuria',
    difficulty: 'beginner',
    category: 'Immune-Complex GN',
    presentation: 'A 25-year-old patient presents with episodic gross hematuria coinciding with upper respiratory infections.',
    lm: [
      'Mesangial hypercellularity',
      'No significant endocapillary proliferation',
      'No crescents',
      'Mild interstitial inflammation',
    ],
    if_pattern: {
      IgA: 'Dominant, 3+ mesangial',
      IgG: 'Trace mesangial',
      IgM: 'Trace mesangial',
      C3: '2+ mesangial',
      C1q: 'Negative',
    },
    em: [
      'Mesangial electron-dense deposits',
      'Paramesangial extension of deposits',
      'Mild foot process effacement',
    ],
    question: 'What is the most likely diagnosis?',
    options: [
      'Post-infectious glomerulonephritis',
      'IgA nephropathy',
      'Lupus nephritis',
      'Minimal change disease',
    ],
    correctAnswer: 1,
    explanation: 'The combination of dominant mesangial IgA on IF, mesangial hypercellularity on LM, and mesangial deposits on EM is classic for IgA nephropathy. The clinical presentation of synpharyngitic hematuria (hematuria with upper respiratory infection) is characteristic.',
    keyTeachingPoints: [
      'IgA must be dominant or codominant',
      'Mesangial pattern on IF is characteristic',
      'Synpharyngitic hematuria is typical presentation',
    ],
  },
  {
    id: 'case-002',
    title: 'Nephrotic Syndrome in a Child',
    difficulty: 'beginner',
    category: 'Podocytopathy',
    presentation: 'An 8-year-old child presents with generalized edema and heavy proteinuria.',
    lm: [
      'Normal-appearing glomeruli',
      'No mesangial expansion',
      'No sclerosis',
      'Mild tubular protein reabsorption droplets',
    ],
    if_pattern: {
      IgG: 'Negative',
      IgA: 'Negative',
      IgM: 'Negative',
      C3: 'Negative',
      C1q: 'Negative',
    },
    em: [
      'Diffuse foot process effacement (>80%)',
      'No electron-dense deposits',
      'Normal GBM thickness',
    ],
    question: 'What is the most likely diagnosis?',
    options: [
      'Focal segmental glomerulosclerosis',
      'Minimal change disease',
      'Membranous nephropathy',
      'IgA nephropathy',
    ],
    correctAnswer: 1,
    explanation: 'Normal LM, negative IF, and diffuse foot process effacement on EM in a child with nephrotic syndrome is classic for minimal change disease. This is the most common cause of nephrotic syndrome in children.',
    keyTeachingPoints: [
      'Normal LM + negative IF + diffuse FPE = MCD',
      'Most common nephrotic syndrome in children',
      'Usually steroid-responsive',
    ],
  },
  {
    id: 'case-003',
    title: 'Rapidly Progressive Renal Failure',
    difficulty: 'intermediate',
    category: 'Pauci-Immune GN',
    presentation: 'A 65-year-old patient presents with rapidly rising creatinine and active urine sediment with RBC casts.',
    lm: [
      'Fibrinoid necrosis in 30% of glomeruli',
      'Cellular crescents in 60% of glomeruli',
      'Segmental involvement',
      'Interstitial inflammation',
    ],
    if_pattern: {
      IgG: 'Negative',
      IgA: 'Negative',
      IgM: 'Negative',
      C3: 'Trace in necrotic areas',
      C1q: 'Negative',
    },
    em: [
      'No electron-dense immune deposits',
      'GBM breaks',
      'Fibrin in Bowman space',
    ],
    question: 'What type of crescentic glomerulonephritis is this?',
    options: [
      'Anti-GBM disease (Type I)',
      'Immune complex-mediated (Type II)',
      'Pauci-immune (Type III)',
      'Cannot be determined',
    ],
    correctAnswer: 2,
    explanation: 'The combination of crescentic GN with fibrinoid necrosis, negative/trace IF (pauci-immune), and absence of deposits on EM indicates pauci-immune crescentic GN. This is Type III and is often ANCA-associated.',
    keyTeachingPoints: [
      'Pauci-immune = little or no immune staining',
      'Often ANCA-associated',
      'Crescents with necrosis is characteristic',
    ],
  },
  {
    id: 'case-004',
    title: 'Linear IF Pattern',
    difficulty: 'intermediate',
    category: 'Anti-GBM',
    presentation: 'A 30-year-old patient presents with hemoptysis and rapidly progressive renal failure.',
    lm: [
      'Circumferential cellular crescents in 90% of glomeruli',
      'Fibrinoid necrosis',
      'GBM rupture',
      'Minimal chronic changes',
    ],
    if_pattern: {
      IgG: '3+ linear along GBM',
      IgA: 'Negative',
      IgM: 'Negative',
      C3: '1+ linear',
      C1q: 'Negative',
    },
    em: [
      'No electron-dense deposits',
      'GBM breaks',
      'Fibrin in crescents',
    ],
    question: 'What is the diagnosis?',
    options: [
      'Pauci-immune crescentic GN',
      'Anti-GBM disease',
      'Lupus nephritis',
      'Post-infectious GN',
    ],
    correctAnswer: 1,
    explanation: 'Linear IgG staining along the GBM with crescentic GN and NO deposits on EM is diagnostic of anti-GBM disease. The clinical presentation with hemoptysis and renal failure suggests Goodpasture syndrome (pulmonary-renal involvement).',
    keyTeachingPoints: [
      'Linear IgG is the hallmark of anti-GBM',
      'No immune deposits on EM',
      'Lung involvement = Goodpasture syndrome',
    ],
  },
  {
    id: 'case-005',
    title: 'Full-House IF Pattern',
    difficulty: 'intermediate',
    category: 'Lupus Nephritis',
    presentation: 'A 28-year-old female presents with proteinuria, hematuria, and positive ANA.',
    lm: [
      'Diffuse endocapillary hypercellularity',
      'Wire loop lesions',
      'Cellular crescents in 20% of glomeruli',
      'Interstitial inflammation',
    ],
    if_pattern: {
      IgG: '3+ granular capillary wall and mesangial',
      IgA: '2+ granular',
      IgM: '2+ granular',
      C3: '3+ granular',
      C1q: '2+ granular',
    },
    em: [
      'Subendothelial deposits',
      'Mesangial deposits',
      'Subepithelial deposits',
      'Tubuloreticular inclusions',
    ],
    question: 'Based on the ISN/RPS classification (conceptual), what class is this lupus nephritis?',
    options: [
      'Class II - Mesangial proliferative',
      'Class III - Focal proliferative',
      'Class IV - Diffuse proliferative',
      'Class V - Membranous',
    ],
    correctAnswer: 2,
    explanation: 'Diffuse endocapillary proliferation affecting >50% of glomeruli indicates Class IV lupus nephritis. The full-house IF pattern (IgG, IgA, IgM, C3, C1q all positive) is highly characteristic of lupus. Wire loops and TRI on EM support the diagnosis.',
    keyTeachingPoints: [
      'Full-house IF is classic for lupus',
      'Class IV = diffuse (>50% glomeruli)',
      'TRI ("interferon footprint") supports diagnosis',
    ],
  },
  {
    id: 'case-006',
    title: 'Nephrotic Syndrome with GBM Thickening',
    difficulty: 'intermediate',
    category: 'Membranous Nephropathy',
    presentation: 'A 55-year-old patient presents with nephrotic syndrome.',
    lm: [
      'Diffuse GBM thickening',
      'Spikes on silver stain',
      'No hypercellularity',
      'No crescents',
    ],
    if_pattern: {
      IgG: '3+ granular capillary wall',
      IgA: 'Negative',
      IgM: 'Negative',
      C3: '1+ granular',
      C1q: 'Negative',
    },
    em: [
      'Subepithelial electron-dense deposits',
      'GBM spikes between deposits',
      'Diffuse foot process effacement',
    ],
    question: 'What additional stain would help distinguish primary from secondary membranous nephropathy?',
    options: [
      'Congo red',
      'PLA2R',
      'SV40',
      'Oil red O',
    ],
    correctAnswer: 1,
    explanation: 'PLA2R (phospholipase A2 receptor) staining is positive in about 70-80% of primary membranous nephropathy cases. Positivity supports a primary etiology, while negativity should prompt workup for secondary causes.',
    keyTeachingPoints: [
      'PLA2R positive suggests primary MN',
      'Subepithelial deposits cause spikes',
      'Always consider secondary causes',
    ],
  },
  {
    id: 'case-007',
    title: 'Double Contours with C3 Dominance',
    difficulty: 'advanced',
    category: 'C3 Glomerulopathy',
    presentation: 'A 35-year-old presents with proteinuria and hematuria. Complement C3 level is low.',
    lm: [
      'MPGN pattern with lobular accentuation',
      'Double contours on silver stain',
      'Mesangial and endocapillary hypercellularity',
    ],
    if_pattern: {
      IgG: 'Negative',
      IgA: 'Negative',
      IgM: 'Trace',
      C3: '3+ capillary wall and mesangial',
      C1q: 'Negative',
    },
    em: [
      'Subendothelial deposits',
      'Mesangial deposits',
      'Dense intramembranous deposits in some areas',
    ],
    question: 'What is the most appropriate diagnosis?',
    options: [
      'Immune complex MPGN',
      'C3 glomerulopathy',
      'Lupus nephritis',
      'Post-infectious GN',
    ],
    correctAnswer: 1,
    explanation: 'C3-dominant staining (C3 intensity ≥2 orders of magnitude greater than any immunoglobulin) in an MPGN pattern indicates C3 glomerulopathy. This indicates alternative complement pathway dysregulation and requires complement workup.',
    keyTeachingPoints: [
      'C3 dominance defines C3 glomerulopathy',
      'Requires complement pathway evaluation',
      'Different from immune-complex MPGN',
    ],
  },
  {
    id: 'case-008',
    title: 'Nodular Glomerulosclerosis',
    difficulty: 'intermediate',
    category: 'Diabetic Nephropathy',
    presentation: 'A 60-year-old patient with 20-year history of diabetes presents with progressive proteinuria.',
    lm: [
      'Nodular mesangial expansion (Kimmelstiel-Wilson nodules)',
      'GBM thickening',
      'Arteriolar hyalinosis (afferent and efferent)',
      'Tubular atrophy and interstitial fibrosis',
    ],
    if_pattern: {
      IgG: '1+ linear GBM (non-specific)',
      IgA: 'Negative',
      IgM: 'Negative',
      C3: 'Negative',
      C1q: 'Negative',
    },
    em: [
      'Diffuse GBM thickening (550 nm)',
      'Mesangial matrix expansion',
      'No immune deposits',
    ],
    question: 'Which finding would suggest an alternative diagnosis to diabetic nephropathy?',
    options: [
      'Arteriolar hyalinosis',
      'Positive Congo red staining',
      'Linear IgG on IF',
      'GBM thickening on EM',
    ],
    correctAnswer: 1,
    explanation: 'Positive Congo red staining would indicate amyloidosis, which can also cause nodular glomerulosclerosis. Always perform Congo red on nodular lesions to exclude amyloid. Other differentials include light chain deposition disease and fibrillary GN.',
    keyTeachingPoints: [
      'Congo red distinguishes amyloid',
      'Multiple causes of nodular lesions',
      'Both afferent and efferent hyalinosis in diabetes',
    ],
  },
  {
    id: 'case-009',
    title: 'Transplant Dysfunction',
    difficulty: 'advanced',
    category: 'Transplant Pathology',
    presentation: 'A kidney transplant recipient presents with rising creatinine 6 months post-transplant.',
    lm: [
      'Peritubular capillaritis',
      'Glomerulitis',
      'Mild interstitial inflammation',
      'Early double contours',
    ],
    if_pattern: {
      C4d: '2+ linear peritubular capillaries',
    },
    em: [
      'Peritubular capillary basement membrane multilayering',
      'Subendothelial widening in glomeruli',
    ],
    question: 'What type of rejection is suggested by these findings?',
    options: [
      'Acute T-cell mediated rejection',
      'Acute antibody-mediated rejection',
      'Chronic T-cell mediated rejection',
      'BK virus nephropathy',
    ],
    correctAnswer: 1,
    explanation: 'Microvascular inflammation (peritubular capillaritis, glomerulitis), positive C4d staining in peritubular capillaries, and early transplant glomerulopathy features suggest antibody-mediated rejection (ABMR).',
    keyTeachingPoints: [
      'Microvascular inflammation = ABMR finding',
      'C4d supports complement activation',
      'Double contours indicate chronicity',
    ],
  },
  {
    id: 'case-010',
    title: 'Post-Infectious Pattern',
    difficulty: 'beginner',
    category: 'Immune-Complex GN',
    presentation: 'A 10-year-old child presents with edema and dark urine 2 weeks after strep throat.',
    lm: [
      'Diffuse endocapillary hypercellularity',
      'Neutrophils in capillary loops',
      'No crescents',
    ],
    if_pattern: {
      IgG: '2+ granular capillary wall',
      IgA: 'Trace',
      IgM: 'Trace',
      C3: '3+ granular ("starry sky")',
      C1q: 'Negative',
    },
    em: [
      'Large subepithelial "humps"',
      'Subendothelial deposits (early)',
      'Foot process effacement',
    ],
    question: 'What are the characteristic EM findings?',
    options: [
      'Mesangial deposits only',
      'Subepithelial humps',
      'Intramembranous dense deposits',
      'Organized fibrils',
    ],
    correctAnswer: 1,
    explanation: 'Subepithelial "humps" (large dome-shaped deposits) are characteristic of post-infectious glomerulonephritis. Combined with the clinical history, exudative endocapillary proliferation, and granular IgG/C3 staining, this is classic for PIGN.',
    keyTeachingPoints: [
      'Subepithelial humps are characteristic',
      'Exudative pattern with neutrophils',
      'Usually resolves spontaneously',
    ],
  },
]
