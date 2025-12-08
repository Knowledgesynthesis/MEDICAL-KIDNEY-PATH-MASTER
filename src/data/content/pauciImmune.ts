export const pauciImmuneContent = {
  title: 'Pauci-Immune Glomerulonephritis',
  description: 'Necrotizing and crescentic GN with minimal immune deposits.',

  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: `Pauci-immune GN is characterized by:

**Definition:**
- Focal necrotizing GN with crescents
- Little or no immune complex deposition on IF
- Often ANCA-associated (but not always)

**Clinical Associations:**
- Granulomatosis with polyangiitis (GPA)
- Microscopic polyangiitis (MPA)
- Eosinophilic granulomatosis with polyangiitis (EGPA)
- ANCA-negative pauci-immune GN

**Presentation:**
- Rapidly progressive renal failure
- Active urine sediment (RBC casts)
- Often with systemic vasculitis`,
      keyPoints: [
        'Crescents are the hallmark',
        'Sparse or absent IF staining',
        'Medical emergency requiring urgent treatment',
      ],
    },
    {
      id: 'light-microscopy',
      title: 'Light Microscopy',
      content: `LM findings in pauci-immune GN:

**Acute/Active Features:**
- Fibrinoid necrosis of glomerular tuft
- Cellular crescents
- GBM rupture
- Karyorrhexis

**Crescent Staging:**
- Cellular: >75% cells
- Fibrocellular: Mixed cells and fibrous tissue
- Fibrous: >75% fibrous tissue

**Distribution:**
- Focal or diffuse involvement
- Segmental within affected glomeruli
- Skip lesions common

**Other Findings:**
- Interstitial inflammation
- Tubulitis
- Acute tubular injury`,
      keyPoints: [
        'Necrosis + crescents = pauci-immune until proven otherwise',
        'Crescent composition predicts reversibility',
        'Cellular crescents may respond to treatment',
      ],
    },
    {
      id: 'immunofluorescence',
      title: 'Immunofluorescence',
      content: `IF findings define "pauci-immune":

**Characteristic Pattern:**
- Negative or trace staining only
- No significant IgG, IgA, IgM
- No or minimal C3

**What is Acceptable:**
- Trace staining in necrotic areas
- Fibrin in crescents (expected)
- Mild non-specific trapping

**Important:**
- If significant Ig staining → not pauci-immune
- Consider anti-GBM or immune-complex disease`,
      keyPoints: [
        'Pauci-immune = little/no immune staining',
        'Fibrin staining in crescents is expected',
        'Strong staining should prompt reconsideration',
      ],
    },
    {
      id: 'electron-microscopy',
      title: 'Electron Microscopy',
      content: `EM findings in pauci-immune GN:

**Typical Findings:**
- No or rare immune-type deposits
- GBM breaks/rupture
- Fibrin in Bowman's space
- Inflammatory cells in crescents

**Endothelial Changes:**
- Swelling
- Loss of fenestrations
- Detachment from GBM

**What Should NOT Be Seen:**
- Organized immune deposits
- Subepithelial humps
- Dense deposits within GBM`,
      keyPoints: [
        'EM confirms absence of immune deposits',
        'GBM rupture is common finding',
        'Useful to exclude other diagnoses',
      ],
    },
    {
      id: 'differential',
      title: 'Differential Diagnosis',
      content: `Other causes of crescentic GN:

**Anti-GBM Disease:**
- Linear IgG on IF
- No immune deposits on EM
- Different clinical course

**Immune-Complex Crescentic GN:**
- Granular IF staining
- Deposits on EM
- Examples: lupus, IgA, post-infectious

**Infection-Associated:**
- May have minimal immune deposits
- Culture/clinical history important

**Drug-Induced:**
- Similar pattern possible
- Medication history essential`,
      keyPoints: [
        'IF pattern distinguishes the three types',
        'All present with RPGN clinically',
        'Treatment differs significantly',
      ],
    },
  ],

  glossary: [
    { term: 'Pauci-immune', definition: 'Little or no immunoglobulin deposition on IF' },
    { term: 'ANCA', definition: 'Anti-neutrophil cytoplasmic antibody' },
    { term: 'Crescent', definition: 'Proliferative lesion in Bowman\'s space' },
    { term: 'Fibrinoid necrosis', definition: 'Homogeneous eosinophilic necrotic material' },
    { term: 'RPGN', definition: 'Rapidly progressive glomerulonephritis' },
  ],
}
