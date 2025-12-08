export const podocytopathyContent = {
  title: 'Podocytopathies',
  description: 'Diseases primarily affecting podocytes, characterized by foot process effacement.',

  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: `Podocytopathies are disorders of the podocyte:

**Common Features:**
- Proteinuria (often nephrotic range)
- Foot process effacement on EM
- Variable LM findings
- Usually negative or minimal IF

**Spectrum:**
- Minimal Change Disease (MCD)
- Focal Segmental Glomerulosclerosis (FSGS)
- Collapsing glomerulopathy

**Key Concept:**
- Same injury mechanism, different stages/severity
- Podocyte injury → detachment → sclerosis`,
      keyPoints: [
        'Foot process effacement is the hallmark',
        'MCD and FSGS represent a spectrum',
        'IF is typically negative',
      ],
    },
    {
      id: 'mcd',
      title: 'Minimal Change Disease',
      content: `MCD shows minimal changes on light microscopy:

**Light Microscopy:**
- Near-normal glomeruli
- May have mild mesangial prominence
- No sclerosis
- No significant hypercellularity

**Immunofluorescence:**
- Negative for all immunoglobulins
- Negative for complement
- May have trace IgM in mesangium

**Electron Microscopy:**
- Diffuse foot process effacement
- >80% effacement typical
- No deposits
- Microvillous transformation of podocytes

**Clinical:**
- Most common cause of nephrotic syndrome in children
- Usually steroid-responsive`,
      keyPoints: [
        'Normal LM + negative IF + diffuse FPE = MCD',
        'Responds well to steroids',
        'Must exclude early FSGS (sampling)',
      ],
    },
    {
      id: 'fsgs',
      title: 'Focal Segmental Glomerulosclerosis',
      content: `FSGS shows focal and segmental sclerosis:

**Definition:**
- Focal: Some but not all glomeruli
- Segmental: Part of the glomerular tuft
- At least one glomerulus with segmental sclerosis

**Columbia Classification:**
- FSGS NOS (not otherwise specified)
- Perihilar variant
- Cellular variant
- Tip variant (best prognosis)
- Collapsing variant (worst prognosis)

**Light Microscopy:**
- Segmental sclerosis/hyalinosis
- Adhesion to Bowman's capsule
- Foam cells in some variants
- Podocyte hypertrophy

**IF/EM:**
- Usually negative IF (may have IgM/C3 in sclerosis)
- Foot process effacement
- May be less diffuse than MCD`,
      keyPoints: [
        'Columbia classification guides prognosis',
        'Tip variant has best prognosis',
        'Collapsing variant is most aggressive',
      ],
    },
    {
      id: 'collapsing',
      title: 'Collapsing Glomerulopathy',
      content: `Most severe form of podocyte injury:

**Light Microscopy:**
- Collapse of glomerular tuft
- Podocyte proliferation and hypertrophy
- "Crowded" appearance
- Protein resorption droplets in tubules

**Associations:**
- HIV-associated nephropathy (HIVAN)
- Viral infections (COVID-19, parvovirus)
- Drugs (interferons, pamidronate)
- APOL1 genetic risk variants

**IF/EM:**
- Usually negative IF
- Severe foot process effacement
- Tubuloreticular inclusions (if viral)

**Prognosis:**
- Rapid progression to ESRD
- Poor response to treatment`,
      keyPoints: [
        'Collapsed tuft with podocyte proliferation',
        'Strong association with viral infections',
        'Worst prognosis among FSGS variants',
      ],
    },
    {
      id: 'adaptive',
      title: 'Adaptive FSGS',
      content: `Secondary FSGS from hemodynamic stress:

**Causes:**
- Reduced nephron mass (surgical, reflux)
- Obesity
- Congenital single kidney
- Chronic hyperfiltration

**Features:**
- Perihilar sclerosis pattern
- Glomerulomegaly
- Less diffuse foot process effacement
- May have preserved podocyte number

**Distinction from Primary:**
- Less proteinuria per degree of sclerosis
- Foot process effacement <50%
- Clinical context is key`,
      keyPoints: [
        'Glomerulomegaly suggests adaptive FSGS',
        'Look for causes of hyperfiltration',
        'Less foot process effacement than primary',
      ],
    },
  ],

  pitfalls: [
    {
      title: 'Undersampling in FSGS',
      description: 'Focal nature means early FSGS may be missed. Diagnosis of MCD requires adequate sampling.',
    },
    {
      title: 'Secondary vs Primary FSGS',
      description: 'Degree of foot process effacement and clinical context help distinguish primary from adaptive FSGS.',
    },
  ],

  glossary: [
    { term: 'Foot process effacement', definition: 'Flattening and widening of podocyte foot processes' },
    { term: 'Podocyte', definition: 'Visceral epithelial cell essential for glomerular filtration' },
    { term: 'Collapsing', definition: 'Variant of FSGS with tuft collapse and podocyte proliferation' },
    { term: 'APOL1', definition: 'Gene variant associated with increased FSGS risk in African ancestry' },
    { term: 'Glomerulomegaly', definition: 'Enlarged glomeruli, seen in adaptive FSGS' },
  ],
}
