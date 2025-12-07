export const normalAnatomyContent = {
  title: 'Normal Kidney Anatomy',
  description: 'Understanding the normal kidney architecture is essential for recognizing pathologic changes.',

  sections: [
    {
      id: 'glomerulus',
      title: 'Glomerulus',
      content: `The glomerulus is the filtering unit of the kidney. It consists of:

**Key Components:**
- **Capillary Loops**: Fenestrated endothelial cells line the capillary lumen
- **Glomerular Basement Membrane (GBM)**: Three-layered structure (lamina rara interna, lamina densa, lamina rara externa)
- **Podocytes**: Visceral epithelial cells with foot processes
- **Mesangium**: Mesangial cells and matrix between capillary loops
- **Bowman's Capsule**: Parietal epithelial cells lining the urinary space

**Normal Measurements:**
- GBM thickness: ~300-400 nm
- Foot process width: ~500-600 nm`,
      keyPoints: [
        'Podocyte foot processes interdigitate to form filtration slits',
        'Mesangium provides structural support and contractile function',
        'GBM is the main filtration barrier for proteins',
      ],
    },
    {
      id: 'tubules',
      title: 'Tubules',
      content: `The tubular system reabsorbs and secretes substances from the glomerular filtrate.

**Proximal Tubule:**
- Brush border (microvilli)
- Abundant mitochondria
- Reabsorbs ~65% of filtered sodium

**Loop of Henle:**
- Thin descending and ascending limbs
- Thick ascending limb
- Countercurrent multiplication

**Distal Tubule:**
- Macula densa at juxtaglomerular apparatus
- Fine-tuning of electrolyte balance

**Collecting Duct:**
- Principal cells (water/sodium)
- Intercalated cells (acid-base)`,
      keyPoints: [
        'Proximal tubules have prominent brush borders',
        'Distal tubules have more defined lumens',
        'Collecting ducts have pale cytoplasm',
      ],
    },
    {
      id: 'vessels',
      title: 'Vessels',
      content: `The renal vasculature has distinctive patterns:

**Arterial System:**
- Interlobar arteries → Arcuate arteries → Interlobular arteries
- Afferent arterioles → Glomerular capillaries → Efferent arterioles

**Venous System:**
- Peritubular capillaries → Interlobular veins → Arcuate veins

**Key Features:**
- Arterioles have muscular walls
- Peritubular capillaries are essential for tubular function
- Vasa recta supply the medulla`,
      keyPoints: [
        'Afferent arteriole diameter affects glomerular pressure',
        'Efferent arteriole constriction maintains GFR',
        'Arteriolar hyalinosis is an early sign of hypertensive injury',
      ],
    },
    {
      id: 'interstitium',
      title: 'Interstitium',
      content: `The renal interstitium is the space between tubules and vessels.

**Normal Interstitium:**
- Sparse cellularity
- Contains fibroblasts and rare inflammatory cells
- Minimal collagen

**Key Points:**
- Expansion suggests interstitial nephritis or fibrosis
- Inflammatory infiltrates indicate active inflammation
- Fibrosis indicates chronic injury`,
      keyPoints: [
        'Normal interstitium is inconspicuous',
        'Interstitial expansion is always abnormal',
        'Tubular atrophy often accompanies interstitial fibrosis',
      ],
    },
    {
      id: 'normal-if',
      title: 'Normal IF Pattern',
      content: `Immunofluorescence in normal kidney:

**Findings:**
- No significant glomerular staining for IgG, IgA, IgM
- No complement (C3, C1q) deposition
- Linear albumin staining in tubular brush borders (normal)

**Interpretation:**
- Any granular or linear capillary loop staining is abnormal
- Mesangial deposits are abnormal
- Some nonspecific trapping may occur in sclerotic areas`,
      keyPoints: [
        'Normal IF should be essentially negative',
        'Tubular brush border albumin is normal',
        'Any significant Ig or complement staining warrants investigation',
      ],
    },
    {
      id: 'normal-em',
      title: 'Normal EM Pattern',
      content: `Electron microscopy of normal kidney:

**GBM:**
- Smooth, uniform thickness (~300-400 nm)
- Three-layer appearance
- No deposits

**Podocytes:**
- Regular foot processes
- Slit diaphragms visible
- No effacement

**Endothelium:**
- Fenestrated
- No swelling
- No loss of fenestrations`,
      keyPoints: [
        'GBM should be uniform without deposits',
        'Foot processes should be regular and well-defined',
        'No electron-dense deposits should be present',
      ],
    },
  ],

  glossary: [
    { term: 'GBM', definition: 'Glomerular Basement Membrane - the acellular matrix between endothelium and podocytes' },
    { term: 'Podocyte', definition: 'Visceral epithelial cell with foot processes covering the GBM' },
    { term: 'Mesangium', definition: 'Central stalk of the glomerulus containing mesangial cells and matrix' },
    { term: 'Fenestrations', definition: 'Pores in the endothelium allowing passage of plasma' },
    { term: 'Slit diaphragm', definition: 'Protein bridge between adjacent podocyte foot processes' },
  ],
}
