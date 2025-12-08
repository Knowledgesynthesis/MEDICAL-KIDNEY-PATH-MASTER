export const transplantContent = {
  title: 'Transplant Pathology',
  description: 'Patterns of injury in kidney allografts.',

  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: `Transplant kidney biopsy evaluates:

**Main Categories:**
- T-cell mediated rejection (TCMR)
- Antibody-mediated rejection (ABMR)
- Chronic changes
- Other pathology (BK virus, recurrent disease)

**Key Concepts:**
- Banff classification provides framework
- Multiple injury patterns may coexist
- Clinical correlation essential

**Note:**
- This is conceptual/educational content
- Not for clinical application`,
      keyPoints: [
        'TCMR and ABMR are main rejection types',
        'Patterns may overlap',
        'Banff provides classification framework',
      ],
    },
    {
      id: 'tcmr',
      title: 'T-Cell Mediated Rejection',
      content: `TCMR involves cellular immune attack:

**Acute TCMR Features:**
- Interstitial inflammation
- Tubulitis (lymphocytes in tubules)
- Endothelialitis (intimal arteritis)

**Tubulitis:**
- Mononuclear cells invading tubular epithelium
- Involves non-atrophic tubules
- Counted as cells per cross-section

**Arterial Intimal Arteritis:**
- Inflammatory cells under endothelium
- May cause endothelial damage
- Indicates more severe rejection

**Chronic Active TCMR:**
- Features of acute TCMR plus
- Interstitial fibrosis
- Tubular atrophy`,
      keyPoints: [
        'Tubulitis in non-atrophic tubules',
        'Arteritis indicates severity',
        'Interstitial inflammation characteristic',
      ],
    },
    {
      id: 'abmr',
      title: 'Antibody-Mediated Rejection',
      content: `ABMR involves humoral immune attack:

**Active ABMR Features:**
- Microvascular inflammation
- C4d deposition
- DSA (donor-specific antibodies)

**Microvascular Inflammation:**
- Peritubular capillaritis (ptc)
- Glomerulitis (g)
- Mononuclear cells in capillaries

**C4d Staining:**
- Complement activation marker
- Peritubular capillary staining
- Linear along basement membrane

**Chronic Active ABMR:**
- Transplant glomerulopathy (TG)
- Double contours on LM
- Peritubular capillary BM multilayering`,
      keyPoints: [
        'Microvascular inflammation is key',
        'C4d supports diagnosis',
        'TG indicates chronicity',
      ],
    },
    {
      id: 'transplant-glomerulopathy',
      title: 'Transplant Glomerulopathy',
      content: `Chronic antibody-mediated injury:

**Light Microscopy:**
- Double contours (tram-tracks)
- GBM duplication
- Similar to MPGN pattern

**Pathophysiology:**
- Repeated endothelial injury
- New basement membrane formation
- From chronic ABMR

**EM:**
- Subendothelial lucency
- GBM lamination
- Peritubular capillary multilayering

**Significance:**
- Indicates chronic injury
- Poor prognosis
- Often irreversible`,
      keyPoints: [
        'Double contours indicate chronicity',
        'From repeated endothelial injury',
        'Associated with chronic ABMR',
      ],
    },
    {
      id: 'other-pathology',
      title: 'Other Transplant Pathology',
      content: `Other conditions affecting allografts:

**BK Virus Nephropathy:**
- Viral cytopathic effect
- Intranuclear inclusions
- SV40 immunostain positive
- Can mimic rejection

**Recurrent Disease:**
- Original disease may recur
- FSGS, IgA, diabetic common
- May be aggressive in transplant

**Drug Toxicity:**
- Calcineurin inhibitor toxicity
- Isometric tubular vacuolization
- Arteriolar hyalinosis pattern

**Acute Tubular Injury:**
- Ischemic from preservation
- Delayed graft function`,
      keyPoints: [
        'BK virus requires SV40 stain',
        'Disease recurrence possible',
        'Drug toxicity has specific patterns',
      ],
    },
  ],

  glossary: [
    { term: 'TCMR', definition: 'T-cell mediated rejection' },
    { term: 'ABMR', definition: 'Antibody-mediated rejection' },
    { term: 'Tubulitis', definition: 'Lymphocytic infiltration of tubular epithelium' },
    { term: 'C4d', definition: 'Complement degradation product, marker of complement activation' },
    { term: 'TG', definition: 'Transplant glomerulopathy' },
    { term: 'DSA', definition: 'Donor-specific antibodies' },
  ],
}
