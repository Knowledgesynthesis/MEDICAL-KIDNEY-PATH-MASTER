export const pitfallsContent = {
  title: 'Pitfalls & Dangerous Mimics',
  description: 'Common diagnostic challenges and errors to avoid.',

  sections: [
    {
      id: 'if-pitfalls',
      title: 'IF Interpretation Pitfalls',
      content: `Common IF interpretation errors:

**Pseudolinear Staining:**
- Artifact from tissue handling
- Appears linear but irregular
- Compare multiple glomeruli
- True anti-GBM is smooth, ribbon-like

**Diabetic Kidney:**
- Linear albumin/IgG common
- Non-specific trapping
- NOT anti-GBM disease
- Clinical correlation essential

**Sclerotic Areas:**
- Non-specific trapping of Ig
- IgM and C3 in sclerosis
- Does not indicate immune-complex disease
- Evaluate non-sclerotic glomeruli

**Weak Staining:**
- May miss light chain restriction
- Recut or pronase digestion may help
- AL amyloid often weakly positive`,
      keyPoints: [
        'Pseudolinear staining mimics anti-GBM',
        'Sclerotic trapping is not diagnostic',
        'Weak staining may miss disease',
      ],
    },
    {
      id: 'sampling',
      title: 'Sampling Errors',
      content: `Inadequate sampling causes missed diagnoses:

**FSGS:**
- Focal nature = can be missed
- More glomeruli = higher detection
- May diagnose as MCD initially
- Serial sections may help

**Crescentic GN:**
- Crescents may be focal
- Sample 20+ glomeruli ideally
- One crescent is significant

**Amyloid:**
- May be patchy deposition
- Sample vessels, interstitium
- Multiple Congo red levels helpful

**Transplant:**
- Minimum 10 glomeruli preferred
- 2 arteries for arteritis
- Cortex more than medulla`,
      keyPoints: [
        'FSGS requires adequate sampling',
        'One crescent warrants investigation',
        'Minimum sample requirements exist',
      ],
    },
    {
      id: 'mimics',
      title: 'Disease Mimics',
      content: `Entities that can be confused:

**IgA-dominant PIGN vs IgAN:**
- PIGN can have dominant IgA
- Look for clinical infection history
- Subepithelial humps favor PIGN
- C3 codominance favors PIGN

**Diabetic Nodules vs Other:**
- Amyloid: Congo red positive
- LCDD: Light chain restriction
- Fibrillary GN: Larger fibrils
- Clinical context essential

**C3 GN vs Infection-Related:**
- Both C3 dominant
- Infection workup essential
- May need to observe and rebiopsy

**TMA vs MPGN:**
- Both have double contours
- TMA: endothelial swelling, thrombi
- Clinical presentation differs
- EM helps distinguish`,
      keyPoints: [
        'IgA-dominant infection exists',
        'Multiple causes of nodular GN',
        'Clinical context resolves ambiguity',
      ],
    },
    {
      id: 'transplant-pitfalls',
      title: 'Transplant Pitfalls',
      content: `Common transplant interpretation challenges:

**BK vs Rejection:**
- Both have interstitial inflammation
- Both have tubulitis
- SV40 stain is essential
- Can coexist

**Early vs Established Lesions:**
- Timing matters for interpretation
- Early biopsies may be hard to classify
- "Borderline" category exists

**Recurrent Disease:**
- May mimic rejection
- Original disease may recur
- IgAN, FSGS, diabetic common
- Consider carefully

**Drug Toxicity vs Rejection:**
- CNI toxicity has specific features
- Isometric vacuolization
- Arteriolar hyalinosis pattern`,
      keyPoints: [
        'Always stain for BK virus',
        'Recurrent disease can mimic rejection',
        'Timing affects interpretation',
      ],
    },
    {
      id: 'crescent-pitfalls',
      title: 'Crescent Assessment',
      content: `Crescent evaluation challenges:

**Overcalling Crescents:**
- Must be in Bowman's space
- Distinguish from glomerular collapse
- Distinguish from adhesion artifact

**Undercalling Crescents:**
- Small crescents can be missed
- Serial sections may help
- Any crescent is significant

**Crescent Age:**
- Cellular: Potentially reversible
- Fibrous: Irreversible
- Mixed: Variable response

**Associated Diseases:**
- Pauci-immune: Check ANCA
- Anti-GBM: Check linear IF
- Immune-complex: Check IF pattern
- All three cause crescents`,
      keyPoints: [
        'True crescents are in Bowman space',
        'Composition predicts response',
        'IF pattern determines type',
      ],
    },
    {
      id: 'artifact',
      title: 'Processing Artifacts',
      content: `Technical issues causing misinterpretation:

**Frozen Section Artifacts:**
- Ice crystal damage
- Poor morphology
- Can affect IF interpretation

**Fixation Issues:**
- Delayed fixation
- Autolysis mimics ATI
- Nuclear changes

**EM Artifacts:**
- Poor preservation
- Myelin figures
- Electron lucency from processing

**Staining Artifacts:**
- Uneven staining
- Background fluorescence
- Cross-reactivity issues

**How to Handle:**
- Request recuts
- Compare all modalities
- Clinical correlation
- Consider rebiopsy if critical`,
      keyPoints: [
        'Technical factors affect interpretation',
        'Correlate LM, IF, EM findings',
        'Request additional material if needed',
      ],
    },
  ],

  glossary: [
    { term: 'Pseudolinear', definition: 'Artifact mimicking linear IF pattern' },
    { term: 'Trapping', definition: 'Non-specific accumulation of proteins in damaged tissue' },
    { term: 'Sampling error', definition: 'Missing focal lesions due to insufficient tissue' },
    { term: 'Mimic', definition: 'Disease that resembles another on pathology' },
    { term: 'Artifact', definition: 'Change caused by tissue processing, not disease' },
  ],
}
