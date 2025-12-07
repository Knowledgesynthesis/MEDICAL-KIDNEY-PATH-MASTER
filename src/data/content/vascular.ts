export const vascularContent = {
  title: 'Vascular Diseases',
  description: 'Diseases primarily affecting the renal vasculature.',

  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: `Vascular diseases affect arteries, arterioles, and capillaries:

**Main Categories:**
- Thrombotic microangiopathy (TMA)
- Hypertensive changes
- Vasculitis
- Atheroemboli

**Key Concepts:**
- Endothelial injury is central
- Acute vs chronic changes
- Pattern recognition important`,
      keyPoints: [
        'Endothelial injury is key pathogenic mechanism',
        'Distinguish acute from chronic changes',
        'Clinical context essential',
      ],
    },
    {
      id: 'tma',
      title: 'Thrombotic Microangiopathy',
      content: `TMA is a pattern of microvascular injury:

**Light Microscopy:**
- Endothelial swelling
- Fibrin thrombi in glomerular capillaries
- Arteriolar thrombosis
- "Bloodless" glomeruli
- Mesangiolysis (acute)

**Chronic TMA:**
- Double contours
- Mucoid intimal thickening ("onion-skinning")
- Arterial changes

**IF:**
- Fibrin positive (in thrombi)
- Usually Ig negative

**EM:**
- Widened subendothelial space
- Fluffy material (insudated plasma)
- Endothelial detachment

**Causes:**
- HUS (typical and atypical)
- TTP
- Malignant hypertension
- Drugs
- Complement-mediated`,
      keyPoints: [
        'Fibrin thrombi are characteristic',
        'Endothelial swelling with subendothelial widening',
        'Many causes - clinical correlation needed',
      ],
    },
    {
      id: 'hypertensive',
      title: 'Hypertensive Nephrosclerosis',
      content: `Chronic hypertension causes characteristic changes:

**Benign Nephrosclerosis:**
- Arteriolar hyalinosis
- Arterial intimal fibrosis
- Glomerular ischemia
- Global glomerulosclerosis

**Arteriolosclerosis:**
- Hyaline deposits in arteriolar walls
- Initially subendothelial
- Eventually full-thickness

**Arterial Changes:**
- Fibroelastic intimal thickening
- Medial hypertrophy
- "Onion-skin" in malignant HTN

**Glomerular:**
- Ischemic changes
- Wrinkling of GBM
- Global sclerosis (solidified)`,
      keyPoints: [
        'Hyalinosis affects arterioles',
        'Intimal fibrosis affects arteries',
        'Secondary glomerular ischemia',
      ],
    },
    {
      id: 'malignant-htn',
      title: 'Malignant Hypertension',
      content: `Severe acute hypertensive injury:

**Arteriolar Changes:**
- Fibrinoid necrosis
- Necrotic smooth muscle
- Inflammatory cells

**Arterial Changes:**
- Mucoid intimal thickening
- "Onion-skin" layers
- Narrowed lumen

**Glomerular:**
- TMA pattern
- Mesangiolysis
- Fibrin thrombi

**"Red" vs "White" thrombi:**
- Red: RBC-rich
- White: Platelet/fibrin-rich`,
      keyPoints: [
        'Fibrinoid necrosis is key finding',
        'Onion-skin arterial changes',
        'May have TMA pattern',
      ],
    },
    {
      id: 'atheroemboli',
      title: 'Atheroembolic Disease',
      content: `Cholesterol crystal embolization:

**Source:**
- Aortic plaques
- Post-catheterization/surgery
- Spontaneous or anticoagulation

**Light Microscopy:**
- Cholesterol clefts in vessels
- "Needle-shaped" spaces
- Crystals dissolve in processing
- Foreign body giant cell reaction

**Location:**
- Arcuate and interlobular arteries
- May extend to glomerular hilum
- Often multiple emboli

**Secondary Changes:**
- Downstream ischemia
- Infarcts
- Cortical necrosis possible`,
      keyPoints: [
        'Cholesterol clefts are diagnostic',
        'Often post-procedural',
        'Look for multiple emboli',
      ],
    },
  ],

  glossary: [
    { term: 'TMA', definition: 'Thrombotic Microangiopathy' },
    { term: 'Fibrinoid necrosis', definition: 'Necrotic vessel wall with bright eosinophilic material' },
    { term: 'Onion-skin', definition: 'Concentric layers of intimal cells in malignant hypertension' },
    { term: 'Hyalinosis', definition: 'Glassy eosinophilic material in arteriolar walls' },
    { term: 'Mesangiolysis', definition: 'Dissolution of mesangial matrix' },
  ],
}
