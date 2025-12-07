export const tinContent = {
  title: 'Tubulointerstitial Diseases',
  description: 'Diseases primarily affecting the tubules and interstitium.',

  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: `Tubulointerstitial nephritis (TIN) patterns:

**Classification:**
- Acute Interstitial Nephritis (AIN)
- Chronic Interstitial Nephritis (CIN)
- Acute Tubular Injury (ATI)

**Key Distinction:**
- Acute: Inflammatory, potentially reversible
- Chronic: Fibrotic, irreversible
- ATI: Tubular injury without inflammation

**Common Causes:**
- Drugs (most common cause of AIN)
- Infections
- Autoimmune diseases
- Metabolic disorders`,
      keyPoints: [
        'AIN is often drug-induced',
        'Chronicity indicated by fibrosis',
        'Glomeruli often normal or secondarily affected',
      ],
    },
    {
      id: 'ain',
      title: 'Acute Interstitial Nephritis',
      content: `AIN is characterized by interstitial inflammation:

**Light Microscopy:**
- Interstitial edema
- Inflammatory infiltrate (lymphocytes, plasma cells)
- Eosinophils (suggestive of drug reaction)
- Tubulitis (lymphocytes invading tubular epithelium)

**Distribution:**
- Patchy involvement
- Cortex more than medulla
- May spare some areas

**Tubular Changes:**
- Tubulitis
- Tubular injury variable
- Regenerative changes

**IF/EM:**
- Usually negative
- May have TBM deposits in some causes`,
      keyPoints: [
        'Eosinophils suggest drug etiology',
        'Tubulitis is characteristic feature',
        'Patchy distribution typical',
      ],
    },
    {
      id: 'drug-induced',
      title: 'Drug-Induced AIN',
      content: `Most common cause of AIN:

**Common Culprits:**
- NSAIDs
- Antibiotics (penicillins, cephalosporins, rifampin)
- Proton pump inhibitors
- Checkpoint inhibitors (immunotherapy)

**Classic Features:**
- Eosinophil-rich infiltrate
- Granulomas (rare, rifampin, NSAIDs)
- Onset days to weeks after drug exposure

**Clinical Triad (Classic but not always present):**
- Fever
- Rash
- Eosinophilia

**Prognosis:**
- Usually reversible with drug withdrawal
- May require steroids`,
      keyPoints: [
        'NSAIDs and antibiotics most common',
        'PPIs increasingly recognized',
        'Classic triad often absent',
      ],
    },
    {
      id: 'chronic-tin',
      title: 'Chronic Interstitial Nephritis',
      content: `CIN represents end-stage of many processes:

**Light Microscopy:**
- Interstitial fibrosis
- Tubular atrophy
- Scattered mononuclear cells
- Thickened tubular basement membranes

**Tubular Atrophy Features:**
- Simplified epithelium
- Thickened basement membrane
- Reduced tubular caliber
- "Endocrine" appearance

**Causes:**
- Chronic obstruction
- Reflux nephropathy
- Chronic drug toxicity
- Analgesic nephropathy
- Progression of AIN

**Secondary Changes:**
- Glomerular obsolescence
- Arteriolosclerosis`,
      keyPoints: [
        'Fibrosis indicates chronicity',
        'Tubular atrophy with thick TBMs',
        'Often end-stage of various injuries',
      ],
    },
    {
      id: 'ati',
      title: 'Acute Tubular Injury',
      content: `ATI (formerly ATN) patterns:

**Light Microscopy:**
- Tubular simplification/flattening
- Loss of brush border (proximal tubules)
- Cytoplasmic vacuolization
- Luminal debris

**Types:**
- Ischemic ATI
- Nephrotoxic ATI

**Ischemic ATI:**
- Patchy necrosis
- Affects straight segment (S3)
- TBM rupture may occur

**Toxic ATI:**
- Often proximal tubule
- More uniform/diffuse
- Specific patterns by toxin

**Recovery:**
- Tubular regeneration visible
- Mitotic figures
- Can fully recover if cause removed`,
      keyPoints: [
        'Tubular flattening is key finding',
        'Ischemic vs toxic have different patterns',
        'Potentially fully reversible',
      ],
    },
  ],

  glossary: [
    { term: 'AIN', definition: 'Acute Interstitial Nephritis' },
    { term: 'ATI', definition: 'Acute Tubular Injury' },
    { term: 'Tubulitis', definition: 'Lymphocytic infiltration of tubular epithelium' },
    { term: 'Interstitial fibrosis', definition: 'Increased collagen deposition between tubules' },
    { term: 'Tubular atrophy', definition: 'Simplified, shrunken tubules with thick basement membranes' },
  ],
}
