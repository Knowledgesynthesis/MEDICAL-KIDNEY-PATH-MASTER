export interface ModuleInfo {
  id: string
  path: string
  title: string
  shortTitle: string
  description: string
  icon: string
  category: 'foundations' | 'glomerular' | 'other' | 'advanced'
}

export const modules: ModuleInfo[] = [
  // Foundations
  {
    id: 'normal',
    path: '/normal',
    title: 'Normal Kidney Anatomy',
    shortTitle: 'Normal',
    description: 'Glomerular structure, tubules, vessels, and normal IF/EM patterns',
    icon: 'Microscope',
    category: 'foundations',
  },
  {
    id: 'glomerular',
    path: '/glomerular',
    title: 'Glomerular Patterns of Injury',
    shortTitle: 'Glomerular',
    description: 'Hypercellularity, GBM alterations, sclerosis, necrosis, and deposits',
    icon: 'Circle',
    category: 'foundations',
  },
  // Glomerular diseases
  {
    id: 'immune-complex',
    path: '/immune-complex',
    title: 'Immune-Complex GN',
    shortTitle: 'Immune-Complex',
    description: 'Post-infectious GN, IgA nephropathy, Lupus nephritis, Membranous',
    icon: 'Shield',
    category: 'glomerular',
  },
  {
    id: 'pauci-immune',
    path: '/pauci-immune',
    title: 'Pauci-Immune GN',
    shortTitle: 'Pauci-Immune',
    description: 'Crescentic GN with sparse IF and minimal EM deposits',
    icon: 'CircleSlash',
    category: 'glomerular',
  },
  {
    id: 'anti-gbm',
    path: '/anti-gbm',
    title: 'Anti-GBM Disease',
    shortTitle: 'Anti-GBM',
    description: 'Linear IgG IF pattern with crescentic LM',
    icon: 'Target',
    category: 'glomerular',
  },
  {
    id: 'podocytopathy',
    path: '/podocytopathy',
    title: 'Podocytopathies',
    shortTitle: 'Podocytopathy',
    description: 'Minimal Change Disease and FSGS variants',
    icon: 'Footprints',
    category: 'glomerular',
  },
  {
    id: 'membranous',
    path: '/membranous',
    title: 'Membranous Nephropathy',
    shortTitle: 'Membranous',
    description: 'Primary vs secondary, thickened GBM, subepithelial deposits',
    icon: 'Layers',
    category: 'glomerular',
  },
  {
    id: 'mpgn-c3g',
    path: '/mpgn-c3g',
    title: 'MPGN & C3 Glomerulopathies',
    shortTitle: 'MPGN/C3G',
    description: 'Double contours, C3-dominant IF, complement pathway disorders',
    icon: 'GitBranch',
    category: 'glomerular',
  },
  // Other diseases
  {
    id: 'diabetes',
    path: '/diabetes',
    title: 'Diabetic Nephropathy',
    shortTitle: 'Diabetic',
    description: 'Nodular glomerulosclerosis, GBM thickening, arteriolar hyalinosis',
    icon: 'Droplet',
    category: 'other',
  },
  {
    id: 'fibrillary-amyloid',
    path: '/fibrillary-amyloid',
    title: 'Fibrillary & Amyloidosis',
    shortTitle: 'Fibrillary/Amyloid',
    description: 'Fibril patterns, Congo-red staining, organized deposits',
    icon: 'Zap',
    category: 'other',
  },
  {
    id: 'tin',
    path: '/tin',
    title: 'Tubulointerstitial Diseases',
    shortTitle: 'TIN',
    description: 'Acute and chronic interstitial nephritis, ATI patterns',
    icon: 'Cylinder',
    category: 'other',
  },
  {
    id: 'vascular',
    path: '/vascular',
    title: 'Vascular Diseases',
    shortTitle: 'Vascular',
    description: 'TMA, hyaline arteriolosclerosis, endothelial injury',
    icon: 'Activity',
    category: 'other',
  },
  // Advanced
  {
    id: 'transplant',
    path: '/transplant',
    title: 'Transplant Pathology',
    shortTitle: 'Transplant',
    description: 'T-cell mediated, antibody-mediated, and chronic rejection patterns',
    icon: 'Heart',
    category: 'advanced',
  },
  {
    id: 'ihc-if-em',
    path: '/ihc-if-em',
    title: 'IHC / IF / EM Frameworks',
    shortTitle: 'IF/EM',
    description: 'Interpretation of immunofluorescence and electron microscopy',
    icon: 'Sparkles',
    category: 'advanced',
  },
  {
    id: 'pitfalls',
    path: '/pitfalls',
    title: 'Pitfalls & Mimics',
    shortTitle: 'Pitfalls',
    description: 'Common diagnostic challenges and dangerous mimics',
    icon: 'AlertTriangle',
    category: 'advanced',
  },
]

export const moduleCategories = {
  foundations: {
    title: 'Foundations',
    description: 'Core concepts in renal pathology',
  },
  glomerular: {
    title: 'Glomerular Diseases',
    description: 'Primary and secondary glomerulonephritides',
  },
  other: {
    title: 'Other Diseases',
    description: 'Tubulointerstitial, vascular, and metabolic disorders',
  },
  advanced: {
    title: 'Advanced Topics',
    description: 'Transplant pathology, special stains, and pitfalls',
  },
}
