export const immuneComplexContent = {
  title: 'Immune-Complex Glomerulonephritis',
  description: 'Diseases characterized by immune complex deposition in glomeruli.',

  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: `Immune-complex GN results from deposition of antigen-antibody complexes:

**Mechanisms:**
- Circulating immune complex deposition
- In situ immune complex formation
- Planted antigen with subsequent antibody binding

**Key IF Finding:**
- Granular staining pattern
- Location varies by disease
- Multiple immunoglobulins and complement

**Classic Examples:**
- Post-infectious GN
- IgA nephropathy
- Lupus nephritis
- Membranous nephropathy`,
      keyPoints: [
        'Granular IF is hallmark of immune-complex disease',
        'Complement activation leads to inflammation',
        'Location of deposits affects clinical presentation',
      ],
    },
    {
      id: 'post-infectious',
      title: 'Post-Infectious GN',
      content: `Classic immune-complex GN following infection:

**Light Microscopy:**
- Diffuse endocapillary hypercellularity
- Neutrophils in capillary loops ("exudative")
- May have crescents in severe cases

**Immunofluorescence:**
- Granular IgG and C3
- "Starry sky" or garland pattern
- Along capillary walls

**Electron Microscopy:**
- Subepithelial "humps"
- Large dome-shaped deposits
- Subendothelial deposits early

**Clinical:**
- Follows streptococcal or other infection
- Usually resolves spontaneously`,
      keyPoints: [
        'Subepithelial humps are characteristic',
        'Usually resolves but can cause AKI',
        'IgA-dominant variant exists (important pitfall)',
      ],
    },
    {
      id: 'iga-nephropathy',
      title: 'IgA Nephropathy',
      content: `Most common primary GN worldwide:

**Light Microscopy:**
- Mesangial hypercellularity (most common)
- Variable endocapillary proliferation
- Segmental sclerosis
- Crescents in severe cases

**Immunofluorescence:**
- Dominant or codominant mesangial IgA
- Often with C3
- Lambda light chain predominance

**Electron Microscopy:**
- Mesangial electron-dense deposits
- Paramesangial deposits
- Foot process effacement variable

**Oxford Classification (MEST-C):**
- M: Mesangial hypercellularity
- E: Endocapillary hypercellularity
- S: Segmental sclerosis
- T: Tubular atrophy/interstitial fibrosis
- C: Crescents`,
      keyPoints: [
        'IgA must be dominant or codominant',
        'Mesangial pattern on IF',
        'Oxford classification predicts prognosis',
      ],
    },
    {
      id: 'lupus-nephritis',
      title: 'Lupus Nephritis',
      content: `Renal manifestation of systemic lupus erythematosus:

**ISN/RPS Classification (Conceptual):**
- Class I: Minimal mesangial
- Class II: Mesangial proliferative
- Class III: Focal (<50% glomeruli)
- Class IV: Diffuse (≥50% glomeruli)
- Class V: Membranous
- Class VI: Advanced sclerotic

**Light Microscopy Features:**
- Wire loops (large subendothelial deposits)
- Hyaline thrombi
- Crescents in severe cases

**Immunofluorescence:**
- "Full house" pattern: IgG, IgA, IgM, C3, C1q
- All positive simultaneously
- Capillary wall and mesangial staining

**Electron Microscopy:**
- Deposits in multiple locations
- Tubuloreticular inclusions ("interferon footprint")
- Fingerprint-like deposits`,
      keyPoints: [
        'Full-house IF is highly suggestive of lupus',
        'Class III/IV are proliferative forms',
        'Tubuloreticular inclusions support diagnosis',
      ],
    },
    {
      id: 'membranous-overview',
      title: 'Membranous Nephropathy',
      content: `Subepithelial immune complex deposition:

**Light Microscopy:**
- Thickened GBM (diffuse)
- "Spikes" on silver stain
- No hypercellularity typically
- Stages I-IV based on GBM changes

**Immunofluorescence:**
- Granular IgG along capillary walls
- "Beaded" pattern
- C3 often present
- IgG4 subclass in primary MN

**Electron Microscopy:**
- Subepithelial deposits
- GBM reaction around deposits
- Foot process effacement

**Primary vs Secondary:**
- Primary: PLA2R or THSD7A antibodies
- Secondary: Lupus, infections, drugs, malignancy`,
      keyPoints: [
        'Subepithelial deposits cause "spikes"',
        'PLA2R staining supports primary MN',
        'Always consider secondary causes',
      ],
    },
  ],

  pitfalls: [
    {
      title: 'IgA-dominant PIGN vs IgAN',
      description: 'Post-infectious GN may have IgA-dominant staining. Look for clinical history, C3 co-dominance, and subepithelial humps.',
    },
    {
      title: 'Membranous vs early MPGN',
      description: 'Both have capillary wall deposits. Look for double contours and mesangial involvement in MPGN.',
    },
    {
      title: 'Lupus Class V vs Primary MN',
      description: 'Both have membranous pattern. Look for full-house IF, mesangial deposits, and TRI in lupus.',
    },
  ],

  glossary: [
    { term: 'Full-house', definition: 'Positive staining for IgG, IgA, IgM, C3, and C1q' },
    { term: 'Wire loop', definition: 'Thickened capillary wall from massive subendothelial deposits' },
    { term: 'Spike', definition: 'GBM projection between subepithelial deposits on silver stain' },
    { term: 'MEST-C', definition: 'Oxford classification for IgA nephropathy' },
    { term: 'PLA2R', definition: 'Phospholipase A2 receptor - target antigen in primary MN' },
  ],
}
