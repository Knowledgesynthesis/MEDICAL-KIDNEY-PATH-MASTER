export const fibrillaryAmyloidContent = {
  title: 'Fibrillary GN & Amyloidosis',
  description: 'Organized deposits with fibrillar ultrastructure.',

  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: `Diseases with organized fibrillar deposits:

**Key Distinction:**
- Amyloidosis: Congo red POSITIVE
- Fibrillary GN: Congo red NEGATIVE
- Both have fibrils on EM

**Fibril Size Matters:**
- Amyloid: 8-12 nm fibrils
- Fibrillary GN: 15-30 nm fibrils
- Immunotactoid: >30 nm microtubules

**Importance:**
- Different diseases with different treatments
- EM is essential for diagnosis`,
      keyPoints: [
        'Congo red status is critical',
        'Fibril size distinguishes entities',
        'EM required for definitive diagnosis',
      ],
    },
    {
      id: 'amyloidosis',
      title: 'Amyloidosis',
      content: `Amyloid deposition in kidney:

**Light Microscopy:**
- Acellular, eosinophilic deposits
- Mesangial, capillary wall, vessels
- "Waxy" appearance
- May form nodules

**Congo Red Staining:**
- Apple-green birefringence
- Under polarized light
- Diagnostic finding

**Types:**
- AL (light chain): Most common renal
- AA (secondary): Chronic inflammation
- ALECT2: Leukocyte chemotactic factor 2
- AFib: Fibrinogen variant
- Hereditary forms

**IF:**
- Light chain restriction in AL (lambda > kappa)
- May be negative in other types
- SAP staining helpful`,
      keyPoints: [
        'Congo red positive with birefringence',
        'AL amyloid is most common renal type',
        'Typing is essential for treatment',
      ],
    },
    {
      id: 'amyloid-em',
      title: 'Amyloid - EM Findings',
      content: `Electron microscopy of amyloid:

**Fibrils:**
- 8-12 nm diameter
- Non-branching
- Randomly arranged
- Haphazard orientation

**Distribution:**
- Mesangium
- GBM (subepithelial, subendothelial)
- Along tubular basement membranes
- Vessel walls

**Associated Changes:**
- GBM disruption by fibrils
- Podocyte effacement variable
- No immune-type deposits`,
      keyPoints: [
        'Fibril size 8-12nm is diagnostic',
        'Random orientation pattern',
        'Distribution helps confirm diagnosis',
      ],
    },
    {
      id: 'fibrillary-gn',
      title: 'Fibrillary GN',
      content: `Congo red negative fibrillar disease:

**Light Microscopy:**
- MPGN-like pattern most common
- Mesangial expansion
- Can mimic various patterns
- Usually no nodules

**Immunofluorescence:**
- Smudgy IgG staining
- Polyclonal (IgG4 often dominant)
- C3 usually positive
- DNAJB9 positive (specific marker)

**Electron Microscopy:**
- Fibrils 15-30 nm diameter
- Randomly arranged
- No hollow core (unlike microtubules)

**Clinical:**
- Often presents with proteinuria
- Poor response to immunosuppression`,
      keyPoints: [
        'Congo red NEGATIVE',
        'DNAJB9 staining is diagnostic',
        'Larger fibrils than amyloid',
      ],
    },
    {
      id: 'immunotactoid',
      title: 'Immunotactoid Glomerulopathy',
      content: `Organized microtubular deposits:

**Key Features:**
- Microtubules >30 nm
- Hollow core visible
- Parallel arrangement
- Often associated with lymphoproliferative disease

**Distinction from Fibrillary:**
- Larger structures
- Hollow core (microtubules vs fibrils)
- Often monoclonal Ig
- Different clinical associations

**Workup:**
- Monoclonal protein evaluation
- Hematology evaluation
- Consider bone marrow`,
      keyPoints: [
        'Larger microtubules with hollow core',
        'Often associated with paraprotein',
        'Parallel arrangement typical',
      ],
    },
  ],

  differentialTable: [
    {
      feature: 'Congo Red',
      amyloid: 'Positive',
      fibrillary: 'Negative',
      immunotactoid: 'Negative',
    },
    {
      feature: 'Fibril size',
      amyloid: '8-12 nm',
      fibrillary: '15-30 nm',
      immunotactoid: '>30 nm',
    },
    {
      feature: 'Structure',
      amyloid: 'Solid fibrils',
      fibrillary: 'Solid fibrils',
      immunotactoid: 'Hollow microtubules',
    },
  ],

  glossary: [
    { term: 'Congo red', definition: 'Histochemical stain that shows apple-green birefringence with amyloid' },
    { term: 'AL amyloid', definition: 'Amyloid derived from immunoglobulin light chains' },
    { term: 'DNAJB9', definition: 'Marker stain specific for fibrillary GN' },
    { term: 'Birefringence', definition: 'Optical property seen under polarized light' },
    { term: 'Microtubule', definition: 'Larger organized structure with hollow core' },
  ],
}
