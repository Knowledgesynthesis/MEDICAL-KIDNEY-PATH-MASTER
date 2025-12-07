export const diabeticContent = {
  title: 'Diabetic Nephropathy',
  description: 'Microvascular complication of diabetes affecting the kidney.',

  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: `Diabetic nephropathy is the leading cause of ESRD:

**Key Features:**
- GBM thickening (earliest change)
- Mesangial expansion
- Nodular glomerulosclerosis (Kimmelstiel-Wilson)
- Arteriolar hyalinosis

**RPS Classification:**
- Class I: GBM thickening only
- Class IIa: Mild mesangial expansion
- Class IIb: Severe mesangial expansion
- Class III: Nodular sclerosis (K-W nodules)
- Class IV: Advanced diabetic glomerulosclerosis

**Clinical:**
- Progressive proteinuria
- Often with retinopathy
- Long history of diabetes`,
      keyPoints: [
        'GBM thickening is earliest change',
        'Nodules are classic but not required',
        'Classification guides prognosis',
      ],
    },
    {
      id: 'light-microscopy',
      title: 'Light Microscopy',
      content: `LM findings in diabetic nephropathy:

**Glomerular Changes:**
- Diffuse mesangial expansion
- Nodular sclerosis (Kimmelstiel-Wilson)
- Increased mesangial matrix
- GBM thickening

**K-W Nodules:**
- Acellular, PAS-positive nodules
- Peripheral location in lobules
- Compressed capillary loops around nodules
- May have "cap" of hyaline material

**Vascular:**
- Arteriolar hyalinosis
- Affects BOTH afferent and efferent
- Very characteristic finding

**Tubulointerstitial:**
- Tubular atrophy
- Interstitial fibrosis
- Protein resorption droplets`,
      keyPoints: [
        'Nodules are PAS-positive, acellular',
        'Afferent AND efferent hyalinosis',
        'Vascular changes support diagnosis',
      ],
    },
    {
      id: 'immunofluorescence',
      title: 'Immunofluorescence',
      content: `IF findings in diabetic nephropathy:

**Typical Pattern:**
- Linear staining along GBM and TBM
- Albumin, IgG (non-specific trapping)
- NOT immune complex deposition

**Key Points:**
- This is NOT anti-GBM disease
- Represents increased permeability
- May have mesangial IgM (non-specific)

**Excluding Other Diseases:**
- Diabetics can develop other GN
- Granular Ig suggests superimposed disease
- Always correlate with clinical history`,
      keyPoints: [
        'Linear staining is non-specific trapping',
        'Not true immune complex disease',
        'Watch for superimposed GN',
      ],
    },
    {
      id: 'electron-microscopy',
      title: 'Electron Microscopy',
      content: `EM findings in diabetic nephropathy:

**GBM Changes:**
- Diffuse thickening (>500nm)
- Uniform appearance
- No deposits

**Mesangium:**
- Expanded matrix
- Mesangiolysis in nodules
- No immune deposits

**Podocytes:**
- Variable foot process effacement
- Proportional to proteinuria

**Measurement:**
- GBM thickness measurement helpful
- Compare to normal (~300-400nm)`,
      keyPoints: [
        'GBM thickening is diffuse and uniform',
        'No immune-type deposits',
        'Measurement confirms diagnosis',
      ],
    },
    {
      id: 'differential',
      title: 'Differential Diagnosis',
      content: `Other nodular glomerulopathies:

**Amyloidosis:**
- Congo red positive
- Fibrils on EM (8-12nm)
- Different clinical context

**Light Chain Deposition Disease:**
- Kappa light chain restriction
- Punctate deposits on EM
- Monoclonal protein present

**Fibrillary GN:**
- Larger fibrils than amyloid (15-30nm)
- Congo red negative
- Different IF pattern

**Idiopathic Nodular Glomerulosclerosis:**
- Same histology
- No diabetes history
- Often heavy smokers

**Key Distinction:**
- Clinical history is essential
- Special stains help (Congo red, IF)`,
      keyPoints: [
        'Clinical history is crucial',
        'Congo red distinguishes amyloid',
        'Light chains suggest LCDD',
      ],
    },
  ],

  glossary: [
    { term: 'Kimmelstiel-Wilson', definition: 'Nodular diabetic glomerulosclerosis' },
    { term: 'Mesangial expansion', definition: 'Increased mesangial matrix between capillary loops' },
    { term: 'Arteriolar hyalinosis', definition: 'Hyaline deposition in arteriolar walls' },
    { term: 'RPS classification', definition: 'Renal Pathology Society classification for diabetic nephropathy' },
    { term: 'ESRD', definition: 'End-stage renal disease' },
  ],
}
