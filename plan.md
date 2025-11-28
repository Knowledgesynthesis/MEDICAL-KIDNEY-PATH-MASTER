# **MEDICAL KIDNEY PATH MASTER — OPTIMIZED MASTER PROMPT FOR EDUCATIONAL APP GENERATION**

A **mobile-first**, **dark-mode**, **offline-ready**, pathology-resident–level educational platform covering **Medical Kidney / Renal Pathology** exactly as taught in a **renal pathology rotation**, renal biopsy signout, or standard nephropathology texts (e.g., Heptinstall, WHO — conceptual only).

This app must cover:
- Glomerular diseases (primary & secondary)  
- Immune-complex vs pauci-immune vs anti-GBM patterns  
- Podocytopathies (MCD, FSGS variants)  
- Diabetic nephropathy  
- Membranous, MPGN, C3 glomerulopathies  
- Lupus nephritis (ISN/RPS conceptual)  
- Complement pathway concepts  
- Tubulointerstitial diseases  
- Vascular diseases  
- Transplant pathology (rejection patterns, Banff concepts — educational only)  
- Light microscopy, immunofluorescence, EM concepts (icon-based only)  
- Pitfalls & mimics  
- Integrated synthetic renal biopsy interpretation  

All content must be **synthetic**, **non-clinical**, **diagrammatic**, and **educational-only**.  
ALL images must be **schematic icons**, not real photomicrographs.  
Assessments are **session-only**, **no tracking**, **no PHI**.

---

# **MASTER PROMPT — Medical Kidney Path Master Educational App Generator (SPECIALIZED VERSION)**

## **0. ROLE & MISSION**

You are:
- Product Manager  
- Staff Engineer  
- Instructional Designer  
- Renal Pathology SME  
- IHC/IF/EM SME  
- UX Writer  
- QA Specialist  

**Mission:**  
Design a complete, pattern-based **renal biopsy interpretation education system**, teaching architecture, glomerular patterns, immune-complex deposition patterns, IF logic, EM patterns, vascular/tubulointerstitial disease, and transplant pathology in a resident-friendly, structured format.

---

# **1. INPUTS (TO FILL WHEN USING PROMPT)**

- **PRIMARY TOPICS:** {{TOPICS}}  
  Default: glomerular disease, tubulointerstitial pathology, vascular lesions, transplant pathology, IF/EM conceptual interpretation, complement pathways.

- **LEVELS:** {{LEVELS}}  
  Default: PGY1–PGY4 pathology residents; renal pathology fellows; nephrology fellows (non-diagnostic).

- **CONTEXT:** {{CONTEXT}}  
  Default: Renal biopsy signout, rotation preparation, boards study.

- **LEARNING OBJECTIVES:** {{LEARNING_OBJECTIVES}}  
  Examples:  
  - Differentiate immune-complex vs pauci-immune vs anti-GBM patterns.  
  - Identify LM patterns (hypercellularity types, crescents, sclerosis).  
  - Interpret synthetic IF patterns (granular vs linear).  
  - Recognize podocytopathies (MCD, FSGS patterns).  
  - Understand membrane/GBM alterations (MEM, MPGN, C3G).  
  - Recognize diabetic nephropathy vs mimics.  
  - Understand tubulointerstitial nephritis patterns.  
  - Interpret transplant biopsy patterns (Banff concepts only).  
  - Integrate LM + IF + EM conceptually.

- **CONSTRAINTS:** {{CONSTRAINTS}}  
  Must include:  
  - Mobile-first  
  - Dark-mode-first  
  - Offline-ready  
  - Icons only (no real histology)  
  - No PHI  
  - No clinical advice or treatment suggestions  
  - No data tracking or storage  

- **REFERENCES:** {{REFERENCES}}  
  Optional conceptual alignment with ISN/RPS and Banff frameworks.

- **VOICE:** {{VOICE_TONE}}  
  Default: calm, structured, algorithmic reasoning.

---

# **2. EXECUTIVE SUMMARY & NAME OPTIONS**

**Goal:**  
Make medical kidney pathology intuitive by teaching systematic biopsy interpretation: LM → IF → EM → integrated reasoning.

**Name Options:**  
- **Medical Kidney Path Master**  
- **GlomeruloLogic Studio**  
- **NephroDx Atlas**  

**Success Criteria:**  
- Users classify renal biopsies into conceptual glomerular disease categories.  
- Trainees differentiate immune-complex vs pauci-immune vs anti-GBM.  
- Residents understand LM/IF/EM correlation.  
- Learners correctly identify major patterns of glomerular injury.  
- Users integrate LM + IF + EM into a synthetic impression.

---

# **3. PERSONAS & USE CASES**

### PERSONAS
**PGY-1 Resident:**  
Needs basics of glomerular anatomy & LM patterns.

**PGY-3 Resident:**  
Needs IF/EM integration & disease classification.

**Renal Path Fellow:**  
Needs rare entities, complex complement pathways, transplant pathology.

### USE CASES
- “Is this immune-complex glomerulonephritis?”  
- “What does this IF pattern suggest conceptually?”  
- “What type of crescentic GN is this?”  
- “Does this EM cartoon represent foot process effacement or deposits?”  
- “Is this diabetic nephropathy vs primary GN?”  
- “Is this T-cell vs antibody-mediated transplant rejection pattern?”

---

# **4. CURRICULUM MAP & KNOWLEDGE GRAPH**

## MODULE A — Normal Kidney Anatomy (Icons)
- Glomerulus (mesangium, capillary loops, podocytes)  
- Tubules (proximal vs distal)  
- Vessels  
- Interstitium  
- Normal IF/EM patterns (cartoon)

---

## MODULE B — Glomerular Patterns of Injury (LM)
### Hypercellularity patterns  
- Mesangial  
- Endocapillary  
- Extracapillary (crescents)

### GBM alterations  
- Thickening  
- Double contours (tram-tracks)

### Sclerosis patterns  
- Segmental  
- Global  

### Necrosis  
- Fibrinoid necrosis cartoon  

### Deposits  
- Subepithelial  
- Subendothelial  
- Mesangial  

---

## MODULE C — Immune-Complex Glomerulonephritis
### LM patterns  
- Endocapillary hypercellularity  
- Mesangial expansion  
- “Lobular” patterns  

### IF patterns  
- Granular IgG/IgA/IgM  
- Complement patterns (C3 only vs full-house)

### EM patterns  
- Subendothelial deposits  
- Subepithelial “humps”  
- Mesangial deposits  

### Major Entities  
- Post-infectious GN  
- IgA nephropathy  
- Lupus nephritis (ISN/RPS conceptual)  
- Membranous nephropathy  

Pitfalls:  
- IgA-dominant PIGN vs IgAN  
- Membranous vs early MPGN patterns  

---

## MODULE D — Pauci-Immune Glomerulonephritis
- Crescentic GN cartoon  
- Fibrinoid necrosis  
- Sparse IF  
- EM minimal deposits  

Pattern-based only; NO clinical ANCA interpretation.

---

## MODULE E — Anti-GBM Disease
- Linear IgG IF cartoon  
- Crescentic LM  
- EM: no immune-complex deposits  

Pitfalls:  
- Linear artifact vs true linear staining  

---

## MODULE F — Podocytopathies
### Minimal Change Disease  
- LM near-normal  
- IF negative  
- EM: diffuse foot process effacement  

### FSGS  
- Segmental sclerosis icons  
- Tip variant / collapsing variant cartoons  

### Adaptive FSGS (high-level)  

Pitfalls:  
- Under-sampling of FSGS lesions  

---

## MODULE G — Membranous Nephropathy (Primary vs Secondary)
- Thickened GBM cartoon  
- IF granular IgG  
- EM subepithelial deposits  
- PLA2R conceptual marker (non-clinical)  

Pitfalls:  
- Overlapping features with early MPGN  

---

## MODULE H — MPGN & C3 Glomerulopathies
- Double-contour cartoon  
- C3-dominant IF  
- Electron-dense deposit cartoon (C3G)  
- MPGN-like patterns without defining etiology  

Pitfalls:  
- “MPGN pattern” vs “MPGN disease”  
- C3-dominant patterns interpretation  

---

## MODULE I — Diabetic Nephropathy
- Nodular glomerulosclerosis (Kimmelstiel-Wilson cartoon)  
- GBM thickening  
- Arteriolar hyalinosis  
- Tubulointerstitial atrophy  

Pitfalls:  
- Overlapping with other nodular lesions (e.g., fibrillary GN)  

---

## MODULE J — Fibrillary & Immunotactoid Glomerulopathies (Conceptual)
- Fibril size cartoons  
- Congo-red negative amyloid mimics  

---

## MODULE K — Amyloidosis
- Congo-red cartoon  
- Hilar nodules  
- Random deposits on EM  

---

## MODULE L — Tubulointerstitial Diseases
- Acute interstitial nephritis (eosinophilic cartoon)  
- Chronic interstitial nephritis  
- Acute tubular injury  
- Drug-induced patterns (synthetic only)  
- Viral inclusions (high-level icon)

---

## MODULE M — Vascular Diseases
- Thrombotic microangiopathy (TMA) cartoon  
- Hyaline arteriolosclerosis  
- Endothelial swelling  
- Fibrin thrombi  

---

## MODULE N — Transplant Pathology (Conceptual)
### Acute T-cell–mediated
- Tubulitis cartoon  
- Interstitial inflammation  

### Antibody-mediated
- Peritubular capillaritis  
- C4d cartoon  
- Glomerulitis  

### Chronic transplant injury  
- Transplant glomerulopathy (double contours)  
- Chronic interstitial fibrosis + tubular atrophy (cartoon)

NO Banff scoring — only conceptual frameworks.

---

## MODULE O — IHC / IF / EM Frameworks
### IF  
- Granular vs linear  
- Mesangial vs capillary loop distribution

### EM  
- Foot process effacement  
- Deposit locations (mesangial, subepithelial, subendothelial)

### IHC (conceptual only)  
- C4d in transplant  
- Light chain restriction in monoclonal GNs  

---

## MODULE P — Pitfalls & Dangerous Mimics
- Pseudolinear IF patterns  
- Sampling error in FSGS  
- Diabetic nodules vs amyloid  
- PIGN vs IgA nephropathy  
- C3 glomerulopathy vs infection-related GN  
- Transplant “too early to classify” scenarios  

---

## MODULE Q — Integrated Renal Biopsy Case Bank
Synthetic cases combining LM + IF + EM:
- Immune-complex GN  
- Pauci-immune GN  
- Anti-GBM  
- MCD vs FSGS  
- Membranous vs MPGN  
- Diabetic nephropathy  
- C3 glomerulopathy  
- Amyloid / fibrillary  
- TIN / ATI  
- Transplant biopsies  
- Pitfall-focused cases  

---

# **5. INTERACTIVE MODELS**

| Interactive | Purpose | Inputs | Outputs | Visuals | Guardrails |
|------------|----------|--------|----------|---------|-----------|
| IF Pattern Simulator | Granular vs linear vs mesangial | Synthetic IF patterns | Pattern category | Icon IF panels | Educational only |
| LM Glomerular Pattern Finder | Hypercellularity, crescents, sclerosis | LM clues | Pattern family | Cartoon LM | Non-diagnostic |
| EM Deposit Locator | Deposit distribution | EM icons | Subepithelial/subendothelial/mesangial | Schematic EM | Synthetic |
| GN Classification Engine | LM + IF + EM | Feature set | Broad GN class | Flowchart UI | No clinical advice |
| Podocytopathy Navigator | LM + EM clues | Pattern | MCD vs FSGS variants | Icons | Educational |
| Transplant Pattern Explorer | PT capillaritis + C4d + tubulitis | Synthetic IHC + LM | TCMR vs ABMR vs chronic | Icons | Educational |
| C3G vs MPGN Tool | IF + EM | Pattern grouping | Category | Icon panels | Not for patient care |
| Integrated Renal Case Builder | LM + IF + EM | Synthetic report | Template | Educational-only |

---

# **6. ASSESSMENT (SESSION-ONLY)**

Question types:
- MCQ  
- LM pattern classification  
- IF interpretation  
- EM deposit localization  
- GN class identification  
- Podocytopathy classification  
- Vascular lesion recognition  
- Transplant pathology logic  
- Integrated renal cases  

End-of-session output:  
**“You answered X/Y correctly this session.”**

---

# **7. RENAL PATHOLOGY REASONING FRAMEWORK**

1. Start with **LM architecture**  
2. Evaluate **hypercellularity**, **GBM**, **sclerosis**, **necrosis**  
3. Go to **IF**: granular vs linear vs negative; Ig pattern; complement  
4. Then **EM**: deposit location, foot process effacement  
5. Integrate all findings → GN class  
6. Add tubulointerstitial & vascular context  
7. Consider transplant-specific patterns  
8. Recognize pitfalls  

Pitfalls:
- Overcalling crescents  
- Missing necrosis in small samples  
- Misreading pseudo-linear IF  
- Under-recognizing FSGS on limited tissue  
- Misinterpreting TMA vs transplant glomerulopathy  

---

# **8. ACCESSIBILITY, EQUITY, SAFETY**

- WCAG 2.2 AA  
- Dark mode  
- All content synthetic  
- No real histology  
- Inclusive language  
- STRONG DISCLAIMER:  
  “Educational use only. Not for diagnosis or clinical care.”  
- Offline-capable  
- NO tracking or saved data  

---

# **9. TECH ARCHITECTURE**

Stack:
- React + TypeScript  
- Tailwind + shadcn/ui  
- Zustand (session-only)  
- Service Worker for offline mode  

Routes:
- `/normal`  
- `/glomerular`  
- `/immune-complex`  
- `/pauci-immune`  
- `/anti-gbm`  
- `/podocytopathy`  
- `/membranous`  
- `/mpgn-c3g`  
- `/diabetes`  
- `/fibrillary-amyloid`  
- `/tin`  
- `/vascular`  
- `/transplant`  
- `/ihc-if-em`  
- `/pitfalls`  
- `/cases`  
- `/assessment`  
- `/settings`

Settings ONLY:
- Dark/light  
- About  
- Disclaimer  

---

# **10. DATA SCHEMAS**

### Renal Case Schema

{
"id": "renal_case_12",
"lm": ["endocapillary hypercellularity"],
"if": {"IgG": "granular", "C3": "positive"},
"em": ["subendothelial deposits"],
"question": "Most consistent broad GN class?",
"options": ["Pauci-immune", "Anti-GBM", "Immune-complex"],
"correct": "Immune-complex"
}


### IF Pattern Schema


{
"id": "if_pattern_4",
"distribution": "linear",
"Ig": "IgG",
"interpretation": "Anti-GBM-like (synthetic)"
}


### EM Schema


{
"id": "em_example_2",
"deposits": "subepithelial humps",
"interpretation": "Post-infectious-like pattern (synthetic)"
}


---

# **11. SCREEN INVENTORY & WIREFRAMES**

### HOME  
- Glomerular • Immune-Complex • Pauci-Immune • Anti-GBM • Podocytopathy • Membranous • MPGN/C3G • Diabetic • Fibrillary/Amyloid • TIN • Vascular • Transplant • IF/EM • Pitfalls • Cases • Assessment • Settings

### LESSON PAGE  
- Pattern diagrams  
- LM/IF/EM concept cards  
- Differential tables  
- Pitfall alerts  

### CASE ENGINE  
- Multi-modality synthetic renal biopsy  
- Immediate feedback with concept explanation  

### ASSESSMENT  
- 10–20 questions  
- No saved scores  

### SETTINGS  
- Dark/light  
- About  
- Disclaimer  

---

# **12. COPY & CONTENT KIT**

Examples:
- “Granular IF suggests immune-complex deposition.”  
- “Linear IgG IF pattern conceptually supports anti-GBM processes.”  
- “Subepithelial humps indicate post-infectious patterns.”  
- “Foot process effacement is characteristic of podocytopathies.”  
- “Double contours suggest MPGN-like injury.”  
- “C4d in peritubular capillaries conceptually supports antibody-mediated rejection.”

Glossary includes:  
GBM, mesangium, crescents, tram-tracks, full-house IF, foot process effacement, nodular sclerosis, double contours, tubulitis, peritubular capillaritis.

---

# **13. CREATOR-SIDE A/B TESTING (No In-App Tracking)**  
Ideas:
- LM-first vs IF-first teaching  
- Deposit-location visualization styles  
- Transplant pattern vs GN pattern differentiation  
- Podocytopathy clarification module  

---

# **14. QA CHECKLIST**
- LM/IF/EM frameworks accurate (conceptual)  
- No clinical treatment or diagnostic guidance  
- All images schematic  
- No PHI  
- Dark-mode/offline validated  

---

# **15. ROADMAP**
- M0: Foundations + LM + IF/EM  
- M1: Immune-complex + Pauci-immune + Anti-GBM  
- M2: Podocytopathies + Membranous + MPGN/C3G  
- M3: Diabetic + Amyloid/Fibrillary + TIN + Vascular  
- M4: Transplant pathology  
- M5: 100+ renal biopsy cases  

---

# **ACCEPTANCE CRITERIA**
- Covers entire medical kidney pathology curriculum  
- All synthetic diagrams  
- Mobile-first, offline, dark-mode  
- No tracking, no PHI  
- Educational-only  

---

## **NOW GENERATE**
Using this blueprint, generate the full **Medical Kidney Path Master** educational app specification following the required Output Format and constraints.
