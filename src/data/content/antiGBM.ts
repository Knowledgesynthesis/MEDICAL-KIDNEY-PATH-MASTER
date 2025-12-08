export const antiGBMContent = {
  title: 'Anti-GBM Disease',
  description: 'Autoantibodies against the glomerular basement membrane causing crescentic GN.',

  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: `Anti-GBM disease is an autoimmune condition:

**Target Antigen:**
- NC1 domain of type IV collagen (α3 chain)
- Present in GBM and alveolar basement membrane

**Clinical Presentation:**
- Rapidly progressive glomerulonephritis
- Goodpasture syndrome: kidney + lung involvement
- Isolated renal disease also occurs

**Key Features:**
- Linear IgG along GBM on IF
- Crescentic GN on LM
- No immune deposits on EM
- Circulating anti-GBM antibodies`,
      keyPoints: [
        'Linear IgG is diagnostic hallmark',
        'Medical emergency requiring plasma exchange',
        'Lung involvement = Goodpasture syndrome',
      ],
    },
    {
      id: 'light-microscopy',
      title: 'Light Microscopy',
      content: `LM findings in anti-GBM disease:

**Active Disease:**
- Crescents (often circumferential)
- Fibrinoid necrosis
- GBM rupture
- Variable global involvement

**Pattern:**
- Usually affects majority of glomeruli
- Crescents in same stage of evolution
- Suggests acute, simultaneous onset

**Chronicity:**
- Fibrous crescents in late disease
- Global sclerosis
- Interstitial fibrosis

**Compared to Pauci-Immune:**
- Similar LM appearance
- Cannot distinguish by LM alone
- IF is essential`,
      keyPoints: [
        'Crescents are usually synchronous',
        'Often affects nearly all glomeruli',
        'LM indistinguishable from pauci-immune',
      ],
    },
    {
      id: 'immunofluorescence',
      title: 'Immunofluorescence',
      content: `IF is diagnostic in anti-GBM disease:

**Classic Pattern:**
- Linear IgG along GBM
- Smooth, ribbon-like staining
- Following all capillary loops
- Intensity usually 2-3+

**Complement:**
- Linear C3 may be present
- Less intense than IgG typically

**Tubular Basement Membrane:**
- May also show linear staining
- Less common than GBM staining

**Bowman's Capsule:**
- May show linear staining
- Especially when disrupted`,
      keyPoints: [
        'Linear IgG is the diagnostic finding',
        'Must distinguish from artifact',
        'Intensity correlates with disease activity',
      ],
    },
    {
      id: 'electron-microscopy',
      title: 'Electron Microscopy',
      content: `EM findings in anti-GBM disease:

**Key Finding:**
- NO immune-type electron-dense deposits

**GBM Changes:**
- Ruptures/breaks
- Thinning or irregularity
- No organized deposits

**Other Features:**
- Fibrin in crescents
- Epithelial cell proliferation
- Inflammatory cell infiltration

**Importance:**
- Confirms absence of immune complexes
- Supports anti-GBM mechanism
- Differentiates from immune-complex disease`,
      keyPoints: [
        'Absence of deposits is key',
        'GBM rupture is common',
        'EM helps exclude immune-complex disease',
      ],
    },
    {
      id: 'pitfalls',
      title: 'Pitfalls',
      content: `Common diagnostic challenges:

**Pseudolinear Staining:**
- Artifact from tissue compression
- Usually less smooth than true linear
- Check IgG subclasses

**Diabetic Kidney:**
- Can show linear albumin/IgG
- Non-specific trapping
- Clinical correlation needed

**Double-Positive Disease:**
- Anti-GBM + ANCA positive
- Both mechanisms may contribute
- Affects treatment decisions

**Post-Transplant Anti-GBM:**
- May develop in Alport patients
- Allograft provides "foreign" α3 chain`,
      keyPoints: [
        'Pseudolinear staining is a common pitfall',
        'ANCA should always be checked',
        '5-10% may be double-positive',
      ],
    },
  ],

  glossary: [
    { term: 'Anti-GBM', definition: 'Antibodies against glomerular basement membrane' },
    { term: 'Linear IF', definition: 'Smooth ribbon-like staining along basement membrane' },
    { term: 'Goodpasture syndrome', definition: 'Anti-GBM disease affecting both kidneys and lungs' },
    { term: 'NC1 domain', definition: 'Non-collagenous domain of type IV collagen, the target antigen' },
    { term: 'Double-positive', definition: 'Presence of both anti-GBM and ANCA antibodies' },
  ],
}
