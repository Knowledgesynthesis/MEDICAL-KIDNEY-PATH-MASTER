export const glomerularPatternsContent = {
  title: 'Glomerular Patterns of Injury',
  description: 'Recognition of light microscopy patterns is the foundation of renal pathology diagnosis.',

  sections: [
    {
      id: 'hypercellularity',
      title: 'Hypercellularity Patterns',
      content: `Increased cellularity in glomeruli indicates active disease. Three main patterns:

**Mesangial Hypercellularity:**
- More than 3 cells per mesangial area
- Seen in: IgA nephropathy, early lupus, resolving GN
- Mild, moderate, or severe based on cell count

**Endocapillary Hypercellularity:**
- Increased cells within capillary lumens
- Neutrophils, monocytes, swollen endothelial cells
- Seen in: Post-infectious GN, lupus, MPGN
- Occludes capillary lumens

**Extracapillary Hypercellularity (Crescents):**
- Proliferation in Bowman's space
- Parietal epithelial cells + inflammatory cells
- Indicates severe/rapidly progressive disease
- Cellular → Fibrocellular → Fibrous`,
      keyPoints: [
        'Mesangial = mild, endocapillary = moderate-severe, crescents = severe',
        'Crescents indicate urgent clinical situation',
        'Pattern helps narrow differential diagnosis',
      ],
    },
    {
      id: 'gbm-alterations',
      title: 'GBM Alterations',
      content: `Changes to the glomerular basement membrane:

**Thickening:**
- Uniform: Diabetic nephropathy, membranous
- Irregular: Chronic changes, healing

**Double Contours (Tram-tracks):**
- New basement membrane formation
- Mesangial interposition
- Seen in: MPGN, TMA, chronic transplant glomerulopathy
- Best seen with silver stains (Jones)

**Thinning:**
- Thin basement membrane disease
- Alport syndrome (with lamellation)

**Spikes:**
- Subepithelial deposits with GBM reaction
- Classic for membranous nephropathy`,
      keyPoints: [
        'Use silver stains to evaluate GBM',
        'Double contours suggest chronic endothelial injury',
        'Spikes indicate subepithelial deposits',
      ],
    },
    {
      id: 'sclerosis',
      title: 'Sclerosis Patterns',
      content: `Sclerosis represents irreversible glomerular scarring:

**Segmental Sclerosis:**
- Part of the tuft involved
- FSGS: various locations (tip, perihilar, NOS)
- Adhesions to Bowman's capsule common

**Global Sclerosis:**
- Entire glomerulus scarred
- End-stage of any glomerular disease
- Normal: up to 10% with age
- Pathologic: >10% or clustered

**Nodular Sclerosis:**
- Kimmelstiel-Wilson nodules (diabetes)
- Must distinguish from other nodular lesions`,
      keyPoints: [
        'Segmental = potentially treatable cause',
        'Global = end-stage, irreversible',
        'Location of segmental lesion has diagnostic significance',
      ],
    },
    {
      id: 'necrosis',
      title: 'Necrosis',
      content: `Glomerular necrosis indicates severe, active injury:

**Fibrinoid Necrosis:**
- Bright eosinophilic material in tuft
- PAS-negative (unlike deposits)
- Often associated with crescents

**Karyorrhexis:**
- Nuclear fragmentation
- Indicates apoptotic/necrotic cells

**Rupture:**
- Break in GBM/Bowman's capsule
- Allows crescent formation

**Associations:**
- Pauci-immune GN (ANCA-associated)
- Anti-GBM disease
- Severe lupus nephritis`,
      keyPoints: [
        'Necrosis requires urgent clinical action',
        'Often seen with crescents',
        'Check for ANCA and anti-GBM antibodies',
      ],
    },
    {
      id: 'deposits',
      title: 'Deposit Patterns',
      content: `Immune deposits have characteristic locations:

**Subepithelial:**
- Between podocytes and GBM
- Membranous nephropathy
- "Humps" in post-infectious GN

**Subendothelial:**
- Between endothelium and GBM
- Lupus nephritis
- MPGN

**Mesangial:**
- Within mesangial matrix
- IgA nephropathy
- Lupus (classes I, II)

**Intramembranous:**
- Within the GBM itself
- Dense deposit disease (C3GN)`,
      keyPoints: [
        'Location correlates with IF pattern',
        'Subepithelial = less inflammation',
        'Subendothelial = more inflammation',
      ],
    },
  ],

  differentialTable: [
    {
      pattern: 'Mesangial hypercellularity',
      conditions: ['IgA nephropathy', 'Early lupus', 'Resolving GN'],
    },
    {
      pattern: 'Endocapillary hypercellularity',
      conditions: ['Post-infectious GN', 'Lupus Class III/IV', 'MPGN'],
    },
    {
      pattern: 'Crescents',
      conditions: ['Pauci-immune GN', 'Anti-GBM', 'Severe immune-complex GN'],
    },
    {
      pattern: 'GBM thickening',
      conditions: ['Diabetic nephropathy', 'Membranous', 'Chronic injury'],
    },
    {
      pattern: 'Double contours',
      conditions: ['MPGN', 'TMA', 'Transplant glomerulopathy'],
    },
  ],

  glossary: [
    { term: 'Crescent', definition: 'Extracapillary proliferation in Bowman\'s space' },
    { term: 'Fibrinoid necrosis', definition: 'Eosinophilic proteinaceous material from vessel wall destruction' },
    { term: 'Double contours', definition: 'Duplication of GBM from new layer formation (tram-tracks)' },
    { term: 'Segmental', definition: 'Affecting part but not all of the glomerular tuft' },
    { term: 'Global', definition: 'Affecting the entire glomerular tuft' },
  ],
}
