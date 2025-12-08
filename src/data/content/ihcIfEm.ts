export const ihcIfEmContent = {
  title: 'IHC / IF / EM Frameworks',
  description: 'Systematic approach to special studies in renal pathology.',

  sections: [
    {
      id: 'if-overview',
      title: 'IF Overview',
      content: `Immunofluorescence is essential in renal pathology:

**Standard Panel:**
- IgG, IgA, IgM
- C3, C1q
- Kappa, Lambda light chains
- Fibrin/fibrinogen
- Albumin

**Patterns:**
- Granular: Immune complex deposition
- Linear: Anti-GBM or non-specific trapping
- Negative: Pauci-immune or non-immune disease

**Reporting:**
- Location (mesangial, capillary wall)
- Intensity (0-4+ scale)
- Distribution (focal, diffuse, segmental, global)`,
      keyPoints: [
        'Pattern determines disease category',
        'Intensity and location are critical',
        'Always correlate with LM findings',
      ],
    },
    {
      id: 'if-patterns',
      title: 'IF Pattern Recognition',
      content: `Key IF patterns and their meanings:

**Granular Capillary Wall:**
- Immune complex GN
- Subepithelial or subendothelial deposits
- Examples: Membranous, lupus, MPGN

**Granular Mesangial:**
- Mesangial immune deposits
- Examples: IgA nephropathy, lupus class II
- Usually less inflammatory

**Linear IgG:**
- Anti-GBM disease
- Must distinguish from artifact
- Check for clinical correlation

**Full-House Pattern:**
- IgG, IgA, IgM, C3, C1q all positive
- Classic for lupus nephritis
- Rarely seen in other diseases

**C3 Dominant:**
- C3 glomerulopathy
- Minimal or no Ig staining
- Complement pathway dysregulation`,
      keyPoints: [
        'Granular = immune complex',
        'Linear = anti-GBM or artifact',
        'Full-house = lupus',
      ],
    },
    {
      id: 'light-chains',
      title: 'Light Chain Evaluation',
      content: `Light chain staining is essential:

**Normal:**
- Polytypic (both kappa and lambda)
- No restriction

**Monoclonal:**
- Single light chain restriction
- Kappa OR lambda predominant
- Seen in LCDD, amyloid, PGNMID

**LCDD Pattern:**
- Linear staining along TBM and GBM
- Usually kappa restriction
- Punctate deposits on EM

**AL Amyloid:**
- May be patchy or weak
- Lambda more common than kappa
- Congo red is definitive

**PGNMID:**
- Proliferative GN with monoclonal Ig deposits
- Often IgG3 with kappa or lambda`,
      keyPoints: [
        'Restriction indicates monoclonal',
        'LCDD typically has kappa',
        'AL amyloid often has lambda',
      ],
    },
    {
      id: 'em-overview',
      title: 'EM Overview',
      content: `Electron microscopy provides ultrastructural detail:

**Key Structures:**
- GBM: Thickness, contour, deposits
- Podocytes: Foot processes
- Endothelium: Fenestrations, swelling
- Mesangium: Matrix, deposits

**Deposit Characteristics:**
- Location: Mesangial, subendothelial, subepithelial
- Electron density
- Organization: Amorphous, organized

**Measurements:**
- GBM thickness (normal ~300-400 nm)
- Foot process width (normal ~500-600 nm)`,
      keyPoints: [
        'Location of deposits is diagnostic',
        'Measurements support diagnosis',
        'Organized deposits have specific differential',
      ],
    },
    {
      id: 'em-deposits',
      title: 'EM Deposit Localization',
      content: `Deposit location determines diagnosis:

**Subepithelial:**
- Between podocytes and GBM
- Membranous nephropathy
- Post-infectious "humps"
- Less inflammatory

**Subendothelial:**
- Between endothelium and GBM
- Lupus nephritis
- MPGN
- More inflammatory (accessible to circulation)

**Mesangial:**
- Within mesangial matrix
- IgA nephropathy
- Lupus (class I, II)
- Less inflammatory

**Intramembranous:**
- Within GBM itself
- Dense deposit disease
- Highly electron-dense`,
      keyPoints: [
        'Subepithelial = membranous pattern',
        'Subendothelial = more inflammatory',
        'Mesangial = mild inflammation typically',
      ],
    },
    {
      id: 'special-ihc',
      title: 'Special IHC Stains',
      content: `Additional stains for specific diagnoses:

**PLA2R:**
- Positive in primary membranous
- Granular podocyte staining
- Correlates with serum antibody

**DNAJB9:**
- Diagnostic for fibrillary GN
- Congo red negative fibrils
- Specific marker

**C4d:**
- Transplant: ABMR diagnosis
- Peritubular capillary staining

**SV40:**
- BK virus detection in transplant
- Nuclear positivity

**SAP (Serum Amyloid P):**
- Labels all amyloid types
- When light chain staining fails`,
      keyPoints: [
        'PLA2R supports primary MN',
        'DNAJB9 confirms fibrillary GN',
        'C4d important in transplant',
      ],
    },
  ],

  glossary: [
    { term: 'IF', definition: 'Immunofluorescence microscopy' },
    { term: 'EM', definition: 'Electron microscopy' },
    { term: 'IHC', definition: 'Immunohistochemistry' },
    { term: 'Full-house', definition: 'Positive staining for IgG, IgA, IgM, C3, and C1q' },
    { term: 'Restriction', definition: 'Predominance of single light chain (monoclonal)' },
    { term: 'PLA2R', definition: 'Phospholipase A2 receptor' },
  ],
}
