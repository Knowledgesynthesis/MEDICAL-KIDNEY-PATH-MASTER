export const membranousContent = {
  title: 'Membranous Nephropathy',
  description: 'Immune complex disease with subepithelial deposits causing GBM thickening.',

  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: `Membranous nephropathy is characterized by:

**Key Features:**
- Subepithelial immune deposits
- GBM thickening without hypercellularity
- Granular IgG along capillary walls
- Nephrotic syndrome presentation

**Classification:**
- Primary (80%): Autoantibodies to podocyte antigens
- Secondary (20%): Lupus, infections, drugs, malignancy

**Target Antigens in Primary MN:**
- PLA2R (70-80% of primary cases)
- THSD7A (2-5%)
- Others being discovered`,
      keyPoints: [
        'Subepithelial deposits cause GBM thickening',
        'PLA2R is the main target in primary MN',
        'Always consider secondary causes',
      ],
    },
    {
      id: 'light-microscopy',
      title: 'Light Microscopy',
      content: `LM findings evolve through stages:

**Stage I:**
- Near-normal GBM thickness
- Subtle changes only
- Requires EM for diagnosis

**Stage II:**
- GBM thickening visible
- "Spikes" on silver stain
- Deposits visible between spikes

**Stage III:**
- Prominent GBM thickening
- Deposits incorporated into GBM
- "Chain-link" or "moth-eaten" appearance

**Stage IV:**
- Irregular GBM thickening
- Lucent areas where deposits resolved
- May have secondary sclerosis

**Other Features:**
- No hypercellularity
- No crescents (unless severe)
- Tubular protein droplets`,
      keyPoints: [
        'Stages correlate with disease duration',
        'Silver stain shows spikes best',
        'Absence of hypercellularity is typical',
      ],
    },
    {
      id: 'immunofluorescence',
      title: 'Immunofluorescence',
      content: `IF pattern in membranous nephropathy:

**Classic Pattern:**
- Granular IgG along capillary walls
- Diffuse and global distribution
- "Beaded" or "lumpy-bumpy"
- Usually 2-3+ intensity

**Complement:**
- C3 often positive
- C1q usually negative in primary
- C1q positive suggests lupus

**IgG Subclass:**
- Primary MN: IgG4 predominant
- Secondary MN: IgG1/IgG3 may predominate

**PLA2R Staining:**
- Positive in ~70% of primary MN
- Granular pattern on podocytes
- Correlates with serum antibody`,
      keyPoints: [
        'IgG4 predominance suggests primary MN',
        'PLA2R staining supports primary MN',
        'Full-house pattern suggests lupus',
      ],
    },
    {
      id: 'electron-microscopy',
      title: 'Electron Microscopy',
      content: `EM is essential for staging:

**Deposits:**
- Subepithelial location
- Electron-dense material
- Size varies with stage

**GBM Reaction:**
- Stage I: Small deposits on GBM
- Stage II: GBM spikes between deposits
- Stage III: Deposits within GBM
- Stage IV: Lucent areas, irregular GBM

**Podocyte Changes:**
- Foot process effacement
- Overlying deposit areas
- Variable extent

**No Other Deposits:**
- Subendothelial deposits suggest lupus
- Mesangial deposits suggest secondary cause`,
      keyPoints: [
        'Subepithelial location is diagnostic',
        'Stage correlates with GBM reaction',
        'Other deposit locations suggest secondary MN',
      ],
    },
    {
      id: 'secondary-causes',
      title: 'Secondary Causes',
      content: `Always evaluate for secondary MN:

**Autoimmune:**
- Lupus nephritis class V
- Mixed features with other classes

**Infections:**
- Hepatitis B (historically common)
- Hepatitis C
- Syphilis

**Malignancy:**
- Solid tumors (especially in older patients)
- Lung, GI, prostate common

**Drugs:**
- NSAIDs
- Penicillamine
- Gold
- Checkpoint inhibitors

**Clues to Secondary:**
- C1q positivity
- Non-IgG4 predominance
- Mesangial deposits
- Tubuloreticular inclusions`,
      keyPoints: [
        'Age-appropriate cancer screening needed',
        'Hepatitis serologies required',
        'Clinical history is essential',
      ],
    },
  ],

  glossary: [
    { term: 'PLA2R', definition: 'Phospholipase A2 receptor - target antigen in primary MN' },
    { term: 'Spikes', definition: 'GBM projections between subepithelial deposits' },
    { term: 'Subepithelial', definition: 'Location between podocytes and GBM' },
    { term: 'IgG4', definition: 'IgG subclass predominant in primary MN' },
    { term: 'THSD7A', definition: 'Thrombospondin domain-containing 7A - target in some primary MN' },
  ],
}
