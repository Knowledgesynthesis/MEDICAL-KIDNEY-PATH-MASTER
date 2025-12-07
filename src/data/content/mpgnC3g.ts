export const mpgnC3gContent = {
  title: 'MPGN & C3 Glomerulopathies',
  description: 'Membranoproliferative patterns and complement-mediated glomerular diseases.',

  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: `MPGN is a pattern, not a single disease:

**MPGN Pattern Features:**
- Mesangial and endocapillary hypercellularity
- GBM double contours (tram-tracks)
- Lobular accentuation of glomeruli
- Capillary wall thickening

**Modern Classification:**
- Immune complex-mediated MPGN
- Complement-mediated (C3 glomerulopathy)
- Not classified by EM type anymore

**Key Concept:**
- IF pattern determines classification
- Ig-positive → Immune complex MPGN
- C3-only → C3 glomerulopathy`,
      keyPoints: [
        'MPGN is a pattern requiring etiologic workup',
        'IF determines immune complex vs complement',
        'Double contours are the hallmark',
      ],
    },
    {
      id: 'light-microscopy',
      title: 'Light Microscopy',
      content: `LM findings in MPGN pattern:

**Classic Features:**
- Lobular accentuation of glomeruli
- Mesangial hypercellularity
- Endocapillary hypercellularity
- GBM thickening

**Double Contours:**
- Best seen on silver/PAS stains
- New GBM formed under endothelium
- Mesangial interposition
- "Tram-track" appearance

**Other Findings:**
- Intracapillary inflammation
- May have crescents
- Variable sclerosis

**Differential:**
- TMA can have double contours
- Transplant glomerulopathy
- Chronic endothelial injury`,
      keyPoints: [
        'Silver stain best for double contours',
        'Lobular pattern is characteristic',
        'Chronic endothelial injury key mechanism',
      ],
    },
    {
      id: 'immune-complex-mpgn',
      title: 'Immune Complex MPGN',
      content: `MPGN caused by immune complex deposition:

**IF Pattern:**
- Positive for Ig (IgG, IgA, and/or IgM)
- Positive for complement (C3, C1q)
- Granular capillary wall and mesangial

**Common Causes:**
- Hepatitis C (with or without cryoglobulinemia)
- Hepatitis B
- Autoimmune diseases
- Monoclonal gammopathy

**EM Findings:**
- Subendothelial deposits
- Mesangial deposits
- Variable subepithelial deposits

**Workup:**
- Hepatitis serologies
- Cryoglobulins
- Monoclonal protein evaluation
- Autoimmune serologies`,
      keyPoints: [
        'Ig-positive IF indicates immune complex type',
        'Hepatitis C is most common cause',
        'Cryoglobulinemia workup essential',
      ],
    },
    {
      id: 'c3-glomerulopathy',
      title: 'C3 Glomerulopathy',
      content: `Complement-mediated disease without significant Ig:

**Definition:**
- C3 dominant on IF
- C3 intensity ≥2 orders of magnitude > any Ig
- No significant immunoglobulin staining

**Two Types:**
- Dense Deposit Disease (DDD)
- C3 Glomerulonephritis (C3GN)

**Dense Deposit Disease:**
- Highly electron-dense intramembranous deposits
- "Sausage-shaped" dense transformation of GBM
- Often younger patients

**C3GN:**
- Less dense, more typical immune-type deposits
- Subendothelial, mesangial, subepithelial
- More variable appearance

**Mechanism:**
- Alternative complement pathway dysregulation
- C3 nephritic factor (autoantibody)
- Complement factor mutations`,
      keyPoints: [
        'C3 dominant = C3 glomerulopathy',
        'DDD has intramembranous dense deposits',
        'Complement pathway evaluation needed',
      ],
    },
    {
      id: 'workup',
      title: 'Workup and Evaluation',
      content: `Essential evaluation for MPGN pattern:

**All Cases:**
- Serum/urine protein electrophoresis
- Hepatitis B and C serologies
- Cryoglobulins
- ANA, complement levels (C3, C4)

**If C3-Dominant:**
- Alternative pathway evaluation
- C3 nephritic factor
- Factor H, I, B levels
- Genetic testing consideration

**If Ig-Positive:**
- Full infection workup
- Monoclonal protein evaluation
- Consider bone marrow if MGRS suspected

**Special Stains:**
- C4d may help (positive in classical pathway)
- Light chain restriction if monoclonal`,
      keyPoints: [
        'Comprehensive workup is essential',
        'Classification drives evaluation',
        'Monoclonal protein always considered',
      ],
    },
  ],

  pitfalls: [
    {
      title: 'MPGN Pattern vs Disease',
      description: 'MPGN is a pattern that can be caused by many diseases. Always search for underlying cause.',
    },
    {
      title: 'C3 Dominant vs C3 Only',
      description: 'C3 glomerulopathy requires C3 dominance, not just C3 positivity. Compare intensity to Ig.',
    },
  ],

  glossary: [
    { term: 'Double contours', definition: 'GBM duplication from new basement membrane formation' },
    { term: 'C3 nephritic factor', definition: 'Autoantibody stabilizing C3 convertase' },
    { term: 'DDD', definition: 'Dense Deposit Disease - intramembranous electron-dense deposits' },
    { term: 'C3GN', definition: 'C3 Glomerulonephritis - complement-mediated with typical deposits' },
    { term: 'MGRS', definition: 'Monoclonal Gammopathy of Renal Significance' },
  ],
}
