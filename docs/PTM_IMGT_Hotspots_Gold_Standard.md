# PTM & IMGT Hotspots — Official Gold-Standard Specification (v3.6.0)

## 1. 4-Tier Risk Classification System (Gold Standard)

All Post-Translational Modification (PTM) and IMGT structural hotspot evaluations across `TAP_2024_Batch.py` (v3.6.0), `TNP_2025_Batch.py` (v3.6.0), `src/server/stats.ts`, `src/components/Guidelines.tsx`, and `src/components/ResultsViewer.tsx` strictly adhere to the following 4-Tier specification:

| Tier | Risk Level | Type | Amino Acid / Motif & 3D Structural Condition | Color Flag |
| :--- | :--- | :--- | :--- | :--- |
| **Tier 1** | **Intolerable**（不可接受风险） | Free Cys; N-glycosylation | **`C`** (unpaired free thiol after strict 1-to-1 3D disulfide pairing across Levels 1–4 below, anywhere in the variable domain);<br>**`Nx[ST]` except `NP[ST]`** (overlapping lookahead scan `(?=(N[^P][ST]))`, anywhere in the variable domain due to co-translational ER glycosylation) | **RED** |
| **Tier 2** | **High risk**（高风险） | Isomerization; Deamidation | **`NG & DG; exposed & in loops`**<br>(处于暴露环区的 `NG`、`DG`) | **RED** |
| **Tier 3** | **Moderate risk**（中等风险） | Oxidation; Deamidation; Isomerization | **`M, W, NS, NT, NN, NH, DS, DD; exposed & in loops`**<br>(处于暴露环区的 `M, W, NS, NT, NN, NH, DS, DD`) | **AMBER** |
| **Tier 4** | **Low risk**（低风险） | Deamidation; Isomerization | **`Nx, Dx not mentioned above; exposed & in loops`**<br>(未列入前述等级的其余 15 种 `Nx` [含 `NP`] 与其余 17 种 `Dx` [含 `DP, DT, DH` 等]，且处于暴露环区) | **LIGHT_GREEN** |
| **Protected** | **Structurally Protected**（结构保护态） | β-Strand / Helix / Buried Core | Any `Nx`, `Dx`, `M`, `W` located on a rigid $\beta$-strand or helix (`[CDR-Strand]` / `[FR-Strand]`), or buried in the hydrophobic core (`[*,Buried]`, $\text{RSA} < 7.5\%$), or located in `[FR-Loop]` when the extended `+ FR-Loop` toggle is OFF | **DARK_GREEN** |

### Mathematical Partition of Overlapping Dipeptide Motifs (`Nx` and `Dx`)
All sequence motif scans use zero-width positive lookaheads (`(?=(N[^P][ST]))`, `(?=(N[ACDEFGHIKLMNPQRSTVWY]))`, `(?=(D[ACDEFGHIKLMNPQRSTVWY]))`) so overlapping patterns such as `NNG`, `DDG`, `DDS`, `NNS`, or `NNST` are detected with zero misses:
- **Deamidation (`Nx`, all 20 Asn dipeptides when `exposed & in loops`)**:
  - **Tier 2 (`High risk`)**: `NG` (1 motif)
  - **Tier 3 (`Moderate risk`)**: `NS, NT, NN, NH` (4 motifs)
  - **Tier 4 (`Low risk`)**: All other 15 `Nx` motifs (`NA, NC, ND, NE, NF, NI, NK, NL, NM, NP, NQ, NR, NV, NW, NY`)
- **Isomerization (`Dx`, all 20 Asp dipeptides when `exposed & in loops`)**:
  - **Tier 2 (`High risk`)**: `DG` (1 motif)
  - **Tier 3 (`Moderate risk`)**: `DS, DD` (2 motifs)
  - **Tier 4 (`Low risk`)**: All other 17 `Dx` motifs (`DA, DC, DE, DF, DH, DI, DK, DL, DM, DN, DP, DQ, DR, DT, DV, DW, DY` — no separate `Cleavage` category)
- **Oxidation (`M` and `W` when `exposed & in loops`)**:
  - **Tier 3 (`Moderate risk`)**: `M` and `W` when `exposed & in loops`

---

## 2. Strict 1-to-1 3D Disulfide Pairing Specification (Free Cys Detection)

Both `TAP_2024_Batch.py` (solving `VH ∪ VL` jointly) and `TNP_2025_Batch.py` (solving `VHH`) perform **strict 1-to-1 maximum-cardinality, minimum-distance matching** (exact Bitmask DP for $m \le 16$ Cys residues, greedy minimum-distance 1-to-1 fallback for $m > 16$). Each Cys can pair with at most one partner across a 4-level geometric hierarchy designed to accurately handle both crystal structures and ImmuneBuilder / OpenMM-relaxed models:

| Level | Scope | Exact 3D Geometric Criterion | Physical Basis |
| :--- | :--- | :--- | :--- |
| **Level 1 · Standard Covalent** | Any intra- or inter-chain Cys pair | $S_\gamma\text{–}S_\gamma \le 3.5\text{ \AA}$ | Ideal covalent disulfide (~2.05 Å) plus modeling tolerance |
| **Level 2 · OpenMM Relaxation** | Any intra- or inter-chain Cys pair | $(C_\beta\text{–}C_\beta \le 5.0\text{ \AA} \land S_\gamma\text{–}S_\gamma \le 5.5\text{ \AA})$;<br>missing $S_\gamma$ fallback: $C_\beta\text{–}C_\beta \le 4.8\text{ \AA}$ | Absorbs OpenMM unbonded `–SH` steric repulsion (~3.5–5.0 Å) while gating against false pairings |
| **Level 3 · Canonical IgV Core** | Same-chain `IMGT 23–104` or FR2 `IMGT 40–55` | `23–104`: $C_\alpha\text{–}C_\alpha \le 7.5\text{ \AA}$;<br>`40–55`: $C_\alpha\text{–}C_\alpha \le 7.5\text{ \AA} \land (\text{no } S_\gamma \lor S_\gamma\text{–}S_\gamma \le 6.5\text{ \AA})$ | Preserves invariant IgV core & conserved FR2 disulfides under rotamer flip |
| **Level 4a · ds-scFv Inter-Chain (TAP)** | Opposite chains `VH:IMGT49 ↔ VL:IMGT120` (Kabat `H44–L100`) | Opposite chains $\land\ C_\alpha\text{–}C_\alpha \le 8.5\text{ \AA} \land (\text{no } S_\gamma \lor S_\gamma\text{–}S_\gamma \le 8.0\text{ \AA})$ | Recognizes engineered clinical ds-scFv inter-chain disulfides (22/1,121 in TAP 2024) and tags `Inter-chain`; single-sided mutations stay **Tier 1 RED** |
| **Level 4b · VHH Interloop (TNP)** | Same-chain `IMGT {35–38, 50, 55} ↔ CDR3 (IMGT 105–117)` | Same chain $\land\ C_\alpha\text{–}C_\alpha \le 18.0\text{ \AA}$ | Recognizes camelid CDR1/FR2 ↔ CDR3 interloop disulfides under unconstrained NanoBodyBuilder2 long-CDR3 modeling (0/39 false Free Cys in TNP 2025) |

---

## 3. Pure 3D Structure-Driven Residue Evaluation Pipeline

Every input antibody is provided as a 3D `.pdb` or `.cif` structure with zero sequence-only fallback heuristics:

1. **Step 1 — Regional Identity & IMGT Numbering (`ANARCI --scheme imgt`)**:
   - First variable domain truncated at `//` and aligned via exact contiguous substring (`seq.find(anarci_seq)` with `X` wildcard fallback).
   - **`CDR` Region**: IMGT **`27–38`** (CDR1), **`56–65`** (CDR2), and **`105–117`** (CDR3, including insertion codes).
   - **`FR` Region**: All remaining IMGT positions (`1–26`, `39–55`, `66–104`, `118–128`).

2. **Step 2 — 3D Secondary Structure (`Loop` vs `Strand` via Kabsch–Sander DSSP)**:
   - Amide hydrogen placed along the preceding carbonyl vector: $\mathbf{H}_i = \mathbf{N}_i + 1.01\text{ \AA} \times \frac{\mathbf{C}_{i-1} - \mathbf{O}_{i-1}}{\|\mathbf{C}_{i-1} - \mathbf{O}_{i-1}\|}$ (skipping Proline and chain breaks $\|\mathbf{N}_i - \mathbf{C}_{i-1}\| > 2.5\text{ \AA}$).
   - Electrostatic H-bond energy ($|i - j| \ge 2$, $r_{ON} \le 5.2\text{ \AA}$, $\min(r) \ge 0.5\text{ \AA}$):
     $$E = 27.888 \left(\frac{1}{r_{ON}} + \frac{1}{r_{CH}} - \frac{1}{r_{OH}} - \frac{1}{r_{CN}}\right) < -0.5\text{ kcal/mol}$$
   - Standard DSSP **Top-2 H-bond limit** per donor and acceptor, **3₁₀ / α / π-helix protection**, exact transposed β-bridge indexing, and **β-bulge ladder extension** ($\min(\Delta i, \Delta j) \le 2 \land \max(\Delta i, \Delta j) \le 5$ with hairpin turn-crossing and chain-break guards) accurately classify conserved IgV β-bulges (e.g., IGHV3 E-strand `VH NS@IMGT92`) as **`[FR-Strand]`**.

3. **Step 3 — Surface Exposure (`Exp` vs `Buried` via Joy `PSA`)**:
   - Evaluated strictly on the reactive residue (`N`, `D`, `M`, `W`, `C`) using Joy `PSA` relative side-chain solvent accessibility (default cutoff `7.5%`, configurable via `--ptm_rsa_cutoff`):
     - **`Exp`**: $\text{side\_rsa} \ge 7.5\%$
     - **`Buried`**: $\text{side\_rsa} < 7.5\%$

4. **Canonical Site Token Format**:
   $$\text{linearPos}@\text{IMGT}\{\text{imgtLabel}\}(\text{Motif})[\{\text{CDR}|\text{FR}\}\text{-}\{\text{Loop}|\text{Strand}\},\{\text{Exp}|\text{Buried}\}]$$

---

## 4. Synchronized Loop Scope Toggle (`CDR-Loop Only` vs. `+ FR-Loop`)

The Loop Scope toggle (`ptmIncludeFrLoops` persisted via `src/utils/filterState.ts`) is synchronized across both **Guidelines** and **Results & Compare**:
- **Default Mode (`includeFrLoops = false` · `CDR-Loop Only — Strict 01 Parity`)**:
  - `"exposed & in loops"` strictly requires **`[CDR-Loop,Exp]`**, aligning 100% with `01. 3D Surface & CDR` while keeping framework turns (`[FR-Loop,Exp]`) and rigid stems (`[CDR-Strand,*]`) in `Protected`.
- **Extended Mode (`includeFrLoops = true` · `+ FR-Loop — CDR + Framework Turns`)**:
  - Expands `"exposed & in loops"` to **`[CDR-Loop,Exp] ∪ [FR-Loop,Exp]`**, surfacing exposed framework turns (e.g., HV4 / DE-loop `IMGT 82–85`) for deep humanization or de-immunization review.
