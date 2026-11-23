# Therapeutic Antibody Profiler_IB (AbDev Studio · v3.6.0)

A pure **3D structure-driven therapeutic antibody & nanobody developability profiling workbench** built with React 19, TypeScript, Vite, Express, and Python HPC batch pipelines.

AbDev Studio projects candidate **conventional monoclonal antibodies (mAb Fv: VH + VL)** and **single-domain nanobodies (VHH)** onto calibrated **OPIG TAP (2024, N = 1,121)** and **TNP (2025, N = 39)** clinical reference distributions—delivering 5-tier quantitative percentile ratings, two-chain coupled biophysical modeling, and 3D-gated 4-tier PTM hotspot diagnostics.

---

## Key Capabilities (v3.6.0)

- **Dual-Modality Clinical Benchmarks**:
  - **TAP (2024) Conventional mAb (`N = 1,121`, 53 columns)**: `L_tot`, `PSH`, `PPC`, `PNC`, `SFvCSP`, plus `VL_Type` (`K` = 970 / 86.5%, `L` = 151 / 13.5%), calibrated 9-class `Genetics`, and full `VH` / `VL` / `VHVL` biophysical & PTM panels.
  - **TNP (2025) Single-Domain Nanobody (`N = 39`, 30 columns)**: `Tetrad` (IMGT 42, 49, 50, 52), `L`, `L3`, `C` (CDR3 compactness), `PSH`, `PPC`, `PNC`, calibrated 6-class `Genetics`, and full `VHH` biophysical & PTM panels (0/39 N-Glyc, 0/39 Free Cys).
- **Pure 3D Structural Biology Engine (`TAP_2024_Batch.py` & `TNP_2025_Batch.py`)**:
  - **ANARCI IMGT Numbering**: First-domain truncation (`//`) with exact contiguous sequence-to-structure alignment and full insertion-code support (`111A/112A`).
  - **Kabsch–Sander (1983) DSSP Engine**: Carbonyl-vector amide hydrogen placement (`1.01 Å`), chain-break guards, standard Top-2 H-bond limit, 3₁₀/α/π-helix protection, and β-bulge ladder extension (eliminating false positives on conserved IgV β-bulges such as IGHV3 `VH NS@IMGT92`).
  - **Joy PSA Side-Chain RSA**: Lee & Richards solvent accessibility on intact 3D structures (`RSA ≥ 7.5%` default, configurable via `--ptm_rsa_cutoff`).
  - **Strict 1-to-1 3D Disulfide Pairing**: Exact Bitmask DP matching across a 4-level geometric hierarchy supporting covalent disulfides (`Sγ–Sγ ≤ 3.5 Å`), OpenMM relaxation tolerance (`Cβ–Cβ ≤ 5.0 Å ∧ Sγ–Sγ ≤ 5.5 Å`), canonical IgV `23–104` / `40–55`, engineered TAP **ds-scFv** inter-chain `VH:IMGT49 ↔ VL:IMGT120`, and camelid TNP **VHH interloop** `IMGT {35–38, 50, 55} ↔ CDR3 (105–117)` (`Cα–Cα ≤ 18.0 Å`).
- **Coupled Biophysical Engine (Biopython ProtParam / Bjellqvist pKa Standard)**:
  - True heterodimer `VHVL_MW`, two-chain coupled `VHVL_pI` bisection on `pH ∈ [1.0, 14.0]`, additive `VHVL_Charge_pH7.4`, length-weighted `VHVL_GRAVY`, and true dipeptide-weighted `VHVL_Instability = ((L_VH − 1)·II_VH + (L_VL − 1)·II_VL) / (L_VH + L_VL − 2)`.
  - 7 interactive clinical distribution cards (including `Length`) in Guidelines & live percentile scoring in Results.
- **Synchronized Workbench & Export**:
  - Real-time synchronization of **5D TAP / 4D TNP cohort filters** and the **PTM Loop Scope switch (`CDR-Loop Only` vs. `+ FR-Loop`)** between Guidelines and ResultsViewer.
  - Dynamic worst-case **`TAP Overall`** / **`TNP Overall`** 3D tier columns, `-0.0000` signed-zero normalization, real numeric typed **Excel (`.xlsx`)** export with color-coded fills, standalone HTML reports, and iframe-safe Blob archive downloads.

---

## Local Development

### Prerequisites
- **Node.js** `>= 18`
- *(Optional, for HPC batch 3D profiling)* Remote Linux cluster reachable via SSH with **ImmuneBuilder** (`ABodyBuilder2` / `NanoBodyBuilder2`), **ANARCI**, **Joy PSA**, **Biopython**, and **NumPy**.

### Quick Start
```bash
npm install
npm run dev
```
The full-stack Express + Vite server runs on **`http://localhost:3000`**.

### Production Build & Verification
```bash
npm run build
npm run lint
```

### Remote HPC CLI Usage
Both batch profiling scripts can also be downloaded from **Settings → Section 3 (Reference Database Management)** and executed standalone on a Linux HPC node:
```bash
python3 TAP_2024_Batch.py /path/to/mAb_PDBs --workers 8 --ptm_rsa_cutoff 7.5
python3 TNP_2025_Batch.py /path/to/VHH_PDBs --workers 8 --ptm_rsa_cutoff 7.5
```

---

## Documentation
- **In-App Whitepaper**: Open the **Docs** tab inside the application for the complete bilingual (ZH / EN) 10-chapter algorithm whitepaper, schema dictionary, engineering guidelines, and symbol glossary.
- **PTM Gold Standard Spec**: See [`docs/PTM_IMGT_Hotspots_Gold_Standard.md`](docs/PTM_IMGT_Hotspots_Gold_Standard.md).
