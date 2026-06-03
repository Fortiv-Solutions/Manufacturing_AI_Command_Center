# M2 — Land & Lease Document Intelligence
### [PROJECT_NAME] · AI Operations Platform · [WEBSITE]

> **Module Tagline:** Autonomously ingests scanned lease agreements and contract documents to extract every material term, track every obligation, and flag every anomaly — replacing months of paralegal review with days of automated processing.

**Document Type:** Module Build Guide & Parameter Reference
**Module Code:** M2
**Total Sub-Modules:** 3 (2.1 → 2.3)
**Version:** [VERSION]
**Company:** [COMPANY_NAME]
**Classification:** [PUBLIC / INTERNAL / CONFIDENTIAL]
**Market:** [MARKET / REGION] — India Focus (PSC · RSC · DGH · MoPNG · Surface Rights)

---

## Module Overview

### Purpose
Replace manual paralegal document review with an **autonomous land and lease intelligence engine** that ingests any format of lease document — scanned, typed, handwritten, decades old — extracts every material term, converts date-bound obligations into a live calendar, and flags every non-standard clause for legal attention, so your land team shifts from document searching to portfolio governance.

### Core Problem Being Solved

| Pain Point | Without M2 | With M2 |
|---|---|---|
| Portfolio ingestion after acquisition | 4–6 months of manual paralegal review | 80 GB of legacy records processed in under 72 hours |
| Finding a specific lease clause | Hours of manual document search per query | Instant natural language retrieval with source citation |
| Obligation tracking | Spreadsheets updated manually — gaps inevitable | Live obligation calendar auto-generated from extracted terms |
| Deadline alerts | Reminders set manually, often missed | Automated 90/30/7-day alerts from every identified obligation |
| Non-standard clause detection | Full legal review of every document | AI surfaces the 5% of clauses that genuinely require attention |
| Cross-portfolio comparison | Analyst manually building comparison matrices | Instant side-by-side comparison across all leases |
| Missed rental payment | Discovered after default notice arrives | Flagged as overdue the moment a deadline passes |
| Legacy document accessibility | Only experts can navigate the archive | Any team member can query the portfolio in plain English |

### Demo Wow Moment
**Live obligation calendar populating on screen** — a folder of 200 scanned lease PDFs dropped into the upload interface, processed in minutes, and every rental payment deadline, drilling commitment, and renewal option mapped on a visual timeline. Click any date to see the exact contract clause it originated from, with a highlighted excerpt from the scanned document.

---

## Module-Level Parameters

| Parameter | Value |
|---|---|
| Module ID | M2 |
| Module Name | Land & Lease Document Intelligence |
| Sub-module Count | 3 |
| Primary Output | Structured lease database + obligation calendar + anomaly flags + comparison matrix |
| Primary Users | Land Manager, Legal Counsel, Commercial Director, VP Operations, CFO |
| Document Processing Speed | Scanned PDF (48 pages): under 3 minutes per document |
| Supported Document Formats | PDF (scanned), PDF (digital), Word, TIFF, JPEG scan, typed text |
| OCR Capability | Low-quality historical scans, typewritten text, handwritten annotations |
| Languages Processed | English, Hindi (regional documents common in [MARKET / REGION]) |
| Contract Standards | PSC (Production Sharing Contract), RSC (Revenue Sharing Contract), NELP, OALP |
| Regulatory Context | DGH, MoPNG, Petroleum Act 1934, Oilfields (Regulation & Development) Act 1948 |
| Currency Format | Rs. Indian Rupee — Lakhs (L) and Crores (Cr) |
| Demo Financial Period | FY 2024–25 (Apr 2024 – Mar 2025) |

---

## Module Pages & Navigation Structure

```
M2 — Land & Lease Document Intelligence
│
├── [Page 1]  Module Dashboard / Overview              ← Landing page for M2
│             (KPIs, portfolio health, upcoming obligations, alert panel)
│
├── [Page 2]  2.1  Lease Document Ingestion & Data Extraction
│             (Upload zone, processing queue, extracted field viewer, confidence flags)
│
├── [Page 3]  2.2  Lease Obligation & Deadline Tracking
│             (Obligation calendar, status tracker, alert configuration, portfolio summary)
│
└── [Page 4]  2.3  Contract Clause Analysis & Anomaly Flagging
              (Clause comparison matrix, anomaly panel, deviation detail, legal action queue)
```

---

## Page 1 — Module Dashboard (M2 Overview)

### Purpose
The landing screen for Module 2. Gives a helicopter view of the entire lease portfolio — total documents indexed, upcoming obligations, active anomaly flags, and portfolio-level compliance health — all in one screen.

### Layout
- **Top Stats Bar** (4 KPI cards across)
- **Centre Left:** Obligation timeline — next 90 days, colour-coded by urgency
- **Centre Right:** Portfolio health donut chart + document processing status
- **Bottom:** Quick-access tiles to each sub-module (2.1 → 2.3) + recent activity log

### KPI Cards (Top Stats Bar)

| Card | Metric | Mock Value | Color |
|---|---|---|---|
| Total Lease Documents | Total documents indexed in portfolio | 214 | Accent Blue #1A6B8A |
| Obligations Overdue | Past-deadline obligations with no completion record | 1 | Danger Coral #C0392B (pulsing) |
| Due Within 30 Days | Obligations falling due in the next 30 days | 3 | Warning Gold #C8922A |
| Anomalous Clauses Flagged | Non-standard clauses requiring legal review | 5 | Accent Mid #2596BE |

### Portfolio Health Donut Chart
Recharts donut showing portfolio composition by document type:

| Category | Mock Count | Color |
|---|---|---|
| Production Sharing Contracts (PSC) | 9 | #0D1B2A |
| Revenue Sharing Contracts (RSC) | 4 | #1A6B8A |
| Surface Rights Agreements | 61 | #2596BE |
| Mineral Lease Deeds | 38 | #0F7B6C |
| Farm-In / Farm-Out Agreements | 12 | #C8922A |
| Miscellaneous / Legacy | 90 | #8892A0 |

### Obligation Timeline Strip
Compact 90-day timeline showing:
- Obligation name and block identifier per event marker
- Colour coding: Red = Overdue, Amber = Due within 30 days, Teal = Due within 60–90 days
- Click any marker to navigate directly to the obligation detail in sub-module 2.2

### Sub-Module Quick Access Tiles (Bottom Row)
Three clickable tiles, each showing:
- Sub-module number + name
- One-line description
- Status indicator (Active / Processing / Idle)
- Key stat for today (documents in queue / obligations due / anomalies open)

---

## Page 2 — Sub-Module 2.1: Lease Document Ingestion & Data Extraction

### What It Is
An OCR and NLP pipeline that processes any format of lease document — scanned PDFs, digital contracts, typed or handwritten historical agreements — and extracts all material terms into a structured, queryable lease database, regardless of document age, quality, or format.

### Supported Document Inputs

| Document Type | Formats Accepted | Processing Method | Typical Processing Time |
|---|---|---|---|
| Production Sharing Contract (PSC) | PDF (digital), PDF (scanned) | NLP extraction | 3–5 minutes (40–80 pages) |
| Revenue Sharing Contract (RSC) | PDF (digital), Word | NLP extraction | 2–4 minutes |
| Surface Rights Agreement | PDF (scanned), PDF (digital), Word | OCR + NLP | 1–3 minutes (10–25 pages) |
| Mineral Lease Deed | PDF (scanned) — often historical | OCR + NLP | 2–4 minutes |
| Farm-In / Farm-Out Agreement | PDF (digital), Word | NLP extraction | 2–3 minutes |
| Legacy typed documents | PDF (scanned), TIFF, JPEG | High-sensitivity OCR + NLP | 3–6 minutes |
| Handwritten annotations | PDF (scanned), JPEG | OCR (handwriting model) + NLP | 4–8 minutes |

### Extracted Fields Per Document

| Field Category | Fields Extracted | Mock Example |
|---|---|---|
| Parties | Lessor name, lessee name, lessor authority, contact designation | Lessor: Government of India, MoPNG; Lessee: [COMPANY_NAME] |
| Block / Survey | Block identifier, survey area, acreage, onshore / offshore flag | Block KG-DWN-98/3, 3,288 sq km, deepwater offshore |
| Term & Phases | Contract effective date, initial term, phase durations, expiry date | Effective 15 Mar 1998; Phase 1: 3yr; Phase 2: 2yr; Phase 3: 2yr |
| Financial Terms | Royalty rate (crude), royalty rate (gas), surface rental amount, rental escalation | 10% crude royalty; Rs. 18,40,000 annual surface rental |
| Work Programme | Minimum work programme obligations per phase, seismic commitments, well count | Phase 1: 2 wells minimum + 500 sq km seismic [Clause 5.3, Page 9] |
| Renewal & Extension | Renewal option details, discovery-triggered extension, surrender provisions | 25-year development period on commercial discovery |
| Assignment & Transfer | Assignment restrictions, pre-emption rights, GOI approval requirements | Prior GOI approval required for any assignment [Clause 14.1, Page 31] |
| Dispute Resolution | Governing law, arbitration clause, arbitration seat, notice requirements | Arbitration — UNCITRAL rules, seat: New Delhi |
| Force Majeure | Definition scope, notification period, duration limits | Clause 22.1 — standard NELP definition |
| Termination | Termination triggers, notice period, obligations on termination | 90-day notice; all data to DGH on termination |

### OCR & Extraction Quality Parameters

| Parameter | Description | Threshold |
|---|---|---|
| OCR character accuracy | % of characters correctly read from scanned document | Target ≥ 97% for digital scans; ≥ 90% for legacy/handwritten |
| Field extraction confidence | AI confidence score for each extracted field value | ≥ 85% → auto-accepted; 70–84% → flagged amber; < 70% → flagged red |
| Field coverage rate | % of expected fields successfully extracted from a document | Target ≥ 90% per document |
| Low-confidence flag rate | % of extracted fields flagged for human review | Benchmark: < 8% of all extracted fields |
| Human review time per document | Time for a reviewer to verify flagged fields | Target: < 15 minutes per 50-page document |

### Page Layout
**Top Control Bar:** "Upload Documents" button (primary, gold) + bulk upload zone + processing queue status counter
**Main Area (Left 35%):** Document list — all uploaded documents with processing status badges (Queued / Processing / Extracted / Needs Review / Complete)
**Main Area (Right 65%):** Extracted field viewer — key-value layout showing all extracted fields for the selected document, with source clause reference per field
**Top of Viewer:** Confidence summary bar — "47 of 52 fields extracted at ≥85% confidence | 3 fields need review"
**Bottom:** "Accept Extraction" button + "Flag for Re-review" button + "Add to Portfolio" button

### Mock Demo Data — Extraction Output

```
// DOCUMENT PROCESSED: KG-DWN-98/3 Block Lease Agreement (1998) — 48 pages, scanned

EXTRACTION COMPLETE — 49 fields extracted | 3 flagged for review

PARTIES:
  Lessor:              Government of India, MoPNG      [Confidence: 100% | Page 1]
  Lessee:              [COMPANY_NAME]                  [Confidence: 100% | Page 1]

BLOCK DETAILS:
  Block ID:            KG-DWN-98/3                     [Confidence: 100% | Page 1]
  Location:            Krishna Godavari Basin, Deepwater [Confidence: 99% | Page 2]
  Acreage:             3,288 sq km                     [Confidence: 97% | Page 3, Table 1]

TERM & PHASES:
  Effective Date:      15 March 1998                   [Confidence: 100% | Page 1]
  Phase 1:             3 years (ends 14 Mar 2001)      [Confidence: 99% | Page 5]
  Phase 2:             2 years (ends 14 Mar 2003)      [Confidence: 98% | Page 5]
  Phase 3:             2 years (ends 14 Mar 2005)      [Confidence: 98% | Page 5]
  Development Period:  25 years on commercial discovery [Confidence: 96% | Page 6, Clause 4.2]

FINANCIAL:
  Royalty (Crude):     10% — onshore rate              [Confidence: 99% | Page 11, Clause 7.1]
  Royalty (Gas):       10% — onshore rate              [Confidence: 99% | Page 11, Clause 7.1]
  Surface Rental:      ⚠ FLAGGED — figure illegible in scan [Confidence: 61% | Page 12]
  Cost Recovery Cap:   90%                             [Confidence: 97% | Page 18, Clause 8.4]

WORK PROGRAMME:
  Phase 1 Commitment:  2 wells minimum                 [Confidence: 98% | Page 9, Clause 5.3]
  Seismic Commitment:  500 sq km 3D seismic            [Confidence: 96% | Page 9, Clause 5.2]

ASSIGNMENT:
  Assignment Rights:   Prior GOI approval required     [Confidence: 99% | Page 31, Clause 14.1]

DISPUTE RESOLUTION:
  Governing Law:       ⚠ FLAGGED — clause partially obscured [Confidence: 68% | Page 37]
  Arbitration Seat:    ⚠ FLAGGED — requires human verification [Confidence: 72% | Page 38]

// Processing time: 00:02:14 | OCR accuracy: 96.4%
// 3 fields flagged for human review — estimated review time: 12 minutes
```

### Anomaly Detection During Extraction

| Anomaly Type | Trigger Condition | Alert Action |
|---|---|---|
| Illegible scan region | OCR confidence < 70% for a field that is flagged as mandatory | Flag field in red — highlight scan region for human review |
| Missing mandatory field | Expected field not found in any section of the document | Flag as missing — request manual entry or document supplement |
| Date inconsistency | Extracted dates imply term overlap or logical contradiction | Flag for legal review — show conflicting dates side by side |
| Non-standard royalty rate | Extracted rate deviates from the standard NELP/OALP range for the block type | Flag as anomaly — cross-reference to portfolio benchmark |
| Duplicate document detected | Document appears to match an existing record in the portfolio | Warn user — compare before adding to avoid duplication |
| Handwriting detected | OCR engine detects handwritten content in a typed document | Apply handwriting model automatically — flag affected fields |

### Key UI Elements
- **Upload animation** — drag-and-drop zone with "Processing… extracting fields" progress sequence per document
- **Source clause hyperlink** — every extracted field links to the exact page and clause in the source document (PDF viewer opens inline)
- **Confidence colour coding** — field border: Teal (≥95%) / Blue (85–94%) / Amber (70–84%) / Red (<70%)
- **Flagged field highlight** — flagged fields shown with orange underline and a "Review" action button
- **Bulk ingestion progress bar** — for batch uploads of 50+ documents, shows overall progress with ETA
- **Human review mode** — one-click mode that steps through flagged fields one by one for efficient reviewer workflow

### Why It Matters
A missed lease expiry or overlooked minimum work programme commitment in [MARKET / REGION]'s upstream sector can result in the forfeiture of a production block worth hundreds of crores. Manual review at the scale of a modern lease portfolio — particularly following an acquisition where legacy documents may be in inconsistent or degraded formats — is not feasible with human resources alone. This sub-module makes the entire portfolio machine-readable in days rather than months.

---

## Page 3 — Sub-Module 2.2: Lease Obligation & Deadline Tracking

### What It Is
An automated obligation calendar that converts every date-bound lease term extracted by sub-module 2.1 into a time-bound commitment, with proactive multi-level alerts delivered well ahead of every deadline and a full completion evidence trail.

### Obligation Data Fields Per Entry

| Field | Description | Mock Example |
|---|---|---|
| `obligation_id` | Unique obligation reference | OBL-2025-0047 |
| `obligation_type` | Category of obligation | Surface Rental Payment |
| `block_id` | Block the obligation relates to | CB-ONN-2010/1 |
| `document_ref` | Source lease document | CB-ONN-2010_1_Surface_Rights_2010.pdf |
| `clause_ref` | Clause and page in source document | Clause 6.2, Page 14 |
| `due_date` | Obligation deadline | 01 Oct 2025 |
| `obligation_description` | Full description of what is due | Annual surface rental payment — Rs. 18,40,000 to MoPNG |
| `obligation_value` | Financial value if applicable | Rs. 18,40,000 |
| `status` | Current status | Overdue |
| `days_overdue` | Days past deadline if overdue | 14 |
| `assigned_owner` | Team or person responsible | Land Department |
| `completion_evidence` | Document uploaded to evidence completion | — (not yet uploaded) |
| `completion_date` | Date obligation was fulfilled | — (not yet completed) |
| `alert_90d_sent` | 90-day advance alert delivered | Yes — 02 Jul 2025 |
| `alert_30d_sent` | 30-day advance alert delivered | Yes — 01 Sep 2025 |
| `alert_7d_sent` | 7-day advance alert delivered | Yes — 24 Sep 2025 |
| `escalation_sent` | Post-deadline escalation delivered | Yes — 08 Oct 2025 |
| `regulatory_consequence` | Risk of non-compliance | Notice of Default from MoPNG; potential block forfeiture |

### Obligation Type Classification

| Obligation Type | Description | Typical Frequency |
|---|---|---|
| Surface Rental Payment | Annual rental paid to the licensing authority | Annual |
| Minimum Work Programme | Drilling commitments or seismic obligations per phase | Phase-linked |
| Well Spud Commitment | Deadline by which a committed well must be spudded | Per PSC/RSC phase |
| Seismic Data Submission | Required submission of seismic datasets to DGH | Per PSC/RSC phase |
| Annual Progress Report | Mandatory progress report to MoPNG or DGH | Annual |
| Renewal Option Exercise | Deadline to formally exercise a renewal or extension right | Contract-defined |
| Relinquishment Deadline | Deadline to surrender a portion of the block as required | Per PSC/RSC phase |
| Environmental Clearance Renewal | Statutory environmental clearance renewal deadline | Licence-defined |
| Certification Renewal | Well integrity, operating permit, or statutory certificate renewal | Variable |
| Data Submission to DGH | Production data, well data, or seismic data packages | Per PSC/RSC |

### Alert Schedule Configuration

| Alert Level | Default Timing | Recipient | Channel |
|---|---|---|---|
| Advance — 90 days | 90 days before due date | Land Manager | Email + Platform notification |
| Advance — 30 days | 30 days before due date | Land Manager + Legal Counsel | Email + Platform notification |
| Advance — 7 days | 7 days before due date | Land Manager + Legal Counsel + VP Operations | Email + Platform notification |
| Overdue — Day 1 | Day of deadline if not marked complete | Land Manager + VP Operations | Email + Platform notification (urgent) |
| Escalation | 7 days after deadline if still open | Commercial Director + VP Operations | Email (escalation) |
| Completion confirmation | When evidence uploaded and status set to Complete | Land Manager + Legal Counsel | Email confirmation |

### Page Layout
**Top Stats Bar:** Total active obligations (47) | Overdue (1 — pulsing red) | Due in 30 days (3) | Due in 60–90 days (5) | Completed this year (38)
**Main Area (Left 65%):** Obligation calendar — 3-month rolling timeline with colour-coded event markers; list view toggle available
**Right Panel (35%):** Obligation detail card — opens on calendar marker click, showing full obligation metadata, alert history, and evidence upload slot
**Bottom:** "Portfolio Obligation Summary" report button + alert configuration settings + "Mark Complete" and "Upload Evidence" buttons

### Obligation Calendar Parameters

| Element | Description |
|---|---|
| Y-axis (list view) | Block name — one row per active block |
| X-axis | Rolling 3-month timeline, subdivided by week |
| Event marker (overdue) | Red pulsing dot with obligation type label |
| Event marker (due ≤30 days) | Amber dot with obligation type label |
| Event marker (due 31–90 days) | Teal dot with obligation type label |
| Event marker (completed) | Grey dot with tick icon |
| Click action | Opens obligation detail panel on right |

### Mock Demo Data — Obligation Calendar

```
// OBLIGATION CALENDAR — [COMPANY_NAME] Portfolio | Next 90 Days
// As at: 15 Oct 2025

OVERDUE (1):
  OBL-2025-0041
  > Block CB-ONN-2010/1 — Annual Surface Rental: Rs. 18,40,000
    Due: 01 Oct 2025 | Status: OVERDUE — 14 days past deadline
    Owner: Land Department | Alerts sent: 90d ✓ | 30d ✓ | 7d ✓ | Escalation ✓
    Evidence: NOT UPLOADED
    Risk: Notice of Default from MoPNG — potential block forfeiture
    [Upload Payment Evidence]  [Notify MoPNG]

DUE WITHIN 30 DAYS (3):
  OBL-2025-0043
  > Block KG-DWN-98/3 — Phase 2 Well Spud Commitment
    Due: 15 Nov 2025 | Days remaining: 31 | Owner: Drilling Dept
    Source: Clause 5.3, Page 9, KG-DWN-98/3 PSC (1998)
    [View Clause]  [Assign Owner]  [Mark In Progress]

  OBL-2025-0044
  > Block RJ-ONN-2015/1 — Seismic Data Package Submission to DGH
    Due: 20 Nov 2025 | Days remaining: 36 | Owner: Geoscience Dept
    Source: Clause 8.1, Page 22, RJ-ONN-2015/1 RSC (2015)
    [View Clause]  [Assign Owner]  [Mark In Progress]

  OBL-2025-0045
  > Block CB-ONN-2010/1 — Annual Progress Report to MoPNG
    Due: 30 Nov 2025 | Days remaining: 46 | Owner: Regulatory Affairs
    Source: Clause 12.3, Page 28, CB-ONN-2010/1 PSC (2010)
    [View Clause]  [Assign Owner]  [Upload Draft]

DUE WITHIN 60–90 DAYS (5): [click to expand]
  OBL-2025-0046 — KG-DWN-98/3 — Phase 3 Relinquishment — 14 Dec 2025
  OBL-2025-0047 — RJ-ONN-2015/1 — Annual Surface Rental — 01 Jan 2026
  [3 more items]

// Total active obligations: 47 | Completed this year: 38 | Compliance rate: 96%
```

### Completion Evidence Workflow

| Step | Action | Who |
|---|---|---|
| 1 | Obligation becomes due — reminder sent to assigned owner | Automated |
| 2 | Owner fulfils the obligation (payment made, document submitted, etc.) | Land Department |
| 3 | Owner uploads completion evidence to the obligation record | Land Manager |
| 4 | Land Manager confirms and marks the obligation as Complete | Land Manager |
| 5 | Completion event logged in the audit trail with timestamp and evidence reference | Automated |
| 6 | Completion confirmation sent to Land Manager and Legal Counsel | Automated |
| 7 | Obligation marked as Complete in portfolio summary report | Automated |

### Key UI Elements
- **Pulsing red marker** on overdue obligations — pulses until evidence is uploaded and status set to Complete
- **Days remaining countdown** — displayed on each obligation card and calendar marker
- **Alert history log** — every alert sent (90d, 30d, 7d, overdue, escalation) logged with timestamp per obligation
- **Evidence upload slot** — each obligation has a dedicated file upload slot for completion proof (payment receipts, submission acknowledgements, DGH correspondence)
- **Portfolio obligation report** — one-click PDF report summarising all obligations, status, and compliance rate for quarterly board presentation
- **Calendar / list view toggle** — calendar view for visual overview; list view for detailed management

### Why It Matters
In [MARKET / REGION]'s regulatory environment, a missed minimum work programme commitment or a lapsed rental payment is not simply an administrative oversight — it can trigger a notice of default from the licensing authority, representing permanent loss of licence value for a production block worth hundreds or thousands of crores. Automated obligation tracking converts what is currently a reactive, spreadsheet-based process into a proactive, evidence-backed compliance system.

---

## Page 4 — Sub-Module 2.3: Contract Clause Analysis & Anomaly Flagging

### What It Is
An AI-assisted contract review tool that compares clause language across the entire lease portfolio, identifies deviations from standard PSC/RSC templates, flags non-standard or unusual provisions, and surfaces potentially conflicting obligations for legal attention — without requiring a lawyer to read every document.

### Clause Analysis Parameters Per Document

| Parameter | Description | Mock Example |
|---|---|---|
| `clause_id` | Internal clause reference | CL-KG98-8.4 |
| `document_ref` | Source document | KG-DWN-98/3 PSC (1998) |
| `block_id` | Block | KG-DWN-98/3 |
| `clause_number` | Clause reference in the document | Clause 8.4 |
| `clause_category` | Category of the clause | Cost Recovery |
| `clause_text_extracted` | AI-extracted clause text summary | Cost recovery cap set at 90% of gross revenue |
| `benchmark_standard` | Standard template clause for comparison | NELP standard: 100% cost recovery |
| `deviation_type` | Type of deviation identified | Value deviation — lower than standard |
| `deviation_severity` | Impact level of the deviation | High — material financial impact |
| `anomaly_flag` | True if flagged as non-standard | True |
| `conflict_flag` | True if conflicts with another lease in the portfolio | False |
| `legal_action_required` | Whether legal review is recommended | Yes — CFO review before Phase 3 commitments |
| `legal_action_status` | Status of the legal review action | Pending assignment |
| `notes` | Any additional context from the AI | 7 of 9 other leases in the portfolio use 100% recovery |

### Clause Categories Monitored

| Category | Standard Template | Key Risk if Non-Standard |
|---|---|---|
| Cost Recovery Cap | 100% under NELP/OALP standard | Reduced recoverable costs in production phase |
| Royalty Rate | Block-type dependent (NELP standard schedule) | Higher royalty obligation than expected |
| Profit Petroleum Split | DGH-prescribed schedule by production band | Less favourable revenue share in high-output phases |
| Force Majeure | Standard NELP definition — broad natural events + government actions | Narrower definition may leave operator exposed |
| Dispute Resolution | Domestic arbitration — ICADR or ad hoc, seat: India | Foreign arbitration seat creates jurisdictional complexity |
| Assignment Rights | Prior GOI approval required — standard | Additional pre-emption rights create transfer risk |
| Relinquishment Obligations | Standard NELP phase-end percentages | Higher or earlier relinquishment commitment |
| Data Rights | All data to DGH on termination — standard | Non-standard data ownership creates IP exposure |
| Termination Triggers | Default + notice period — standard | Wider triggering events create vulnerability |
| Environmental Obligations | Reference to MoEFCC clearance conditions | Absolute obligations beyond clearance conditions |

### Anomaly Severity Classification

| Severity | Definition | Badge Color | Required Response |
|---|---|---|---|
| High | Material financial, legal, or operational impact — requires immediate legal review | #C0392B Red | Assign to Legal Counsel within 5 days |
| Medium | Potential risk — non-standard but manageable with awareness and monitoring | #C8922A Gold | Review before next contract milestone |
| Low | Minor deviation from standard — informational; may reflect negotiated terms | #1A6B8A Blue | Log and monitor — no immediate action required |

### Contract Comparison Matrix Parameters

| Column | Content |
|---|---|
| Clause Category | Category name (Cost Recovery, Royalty, Dispute Resolution, etc.) |
| Portfolio Standard | The most common clause language across the portfolio (auto-derived) |
| Per-lease columns | Each active lease shown as a column, value populated for each clause category |
| Deviation highlight | Cells where a lease deviates from the portfolio standard highlighted in colour |
| Anomaly badge | Red / Gold / Blue badge on cells with flagged anomalies |

### Page Layout
**Top Stats Bar:** Clauses analysed (142) | Anomalies flagged (5) | Conflicts detected (0) | Legal actions pending (3)
**Filter Bar:** Severity filter | Clause category filter | Block filter | Anomaly status filter
**Main Area (Left 60%):** Anomaly panel — table of all flagged clauses with severity badge, block, clause reference, deviation summary, and action status
**Right Panel (40%):** Anomaly detail card — expands on row click with full clause text, benchmark comparison, impact description, and legal action assignment
**Bottom:** "View Comparison Matrix" button (opens full-portfolio matrix view) + "Export Anomaly Report" button

### Mock Demo Data — Anomaly Scan Results

```
// ANOMALY SCAN — Portfolio-wide clause analysis
// Documents scanned: 214 | Clauses reviewed: 142 | Anomalies identified: 5

HIGH SEVERITY (2):

  CL-KG98-8.4
  > Block KG-DWN-98/3 — Clause 8.4: Cost Recovery Cap — 90%
    Standard: NELP template specifies 100% cost recovery
    Deviation: 10 percentage points below standard — material production-phase impact
    Portfolio context: 8 of 9 active PSCs use 100% recovery
    Impact: At projected Phase 3 production, estimated shortfall Rs. 4.2–6.8 Cr annually
    Recommendation: Flag for CFO and Commercial Director review before Phase 3 entry
    Status: Pending assignment
    [Assign to CFO]  [View Full Clause]  [Add to Legal Queue]

  CL-KG98-19.2
  > Block KG-DWN-98/3 — Clause 19.2: Dispute Resolution — Arbitration Seat: Singapore
    Standard: 7 of 9 portfolio leases specify Indian domestic arbitration
    Deviation: Foreign arbitration seat — Singapore International Arbitration Centre
    Impact: All disputes governed by Singapore Arbitration Act; higher litigation costs;
            Indian courts have limited supervisory jurisdiction
    Recommendation: Legal team to assess enforcement implications and risk exposure
    Status: Assigned — Priya Menon | Due: 30 Oct 2025
    [View Full Clause]  [View Legal Team Notes]

MEDIUM SEVERITY (2):

  CL-CB10-22.1
  > Block CB-ONN-2010/1 — Clause 22.1: Force Majeure — Narrower definition
    Standard: NELP standard includes government actions and regulatory delays
    Deviation: Clause excludes government action from force majeure scope
    Impact: Operator bears risk of delays caused by licensing authority inaction
    Recommendation: Review before any phase extension application

  CL-RJ15-14.3
  > Block RJ-ONN-2015/1 — Clause 14.3: Assignment — Additional pre-emption right
    Standard: GOI approval required; no pre-emption right in standard NELP
    Deviation: MoPNG holds pre-emption right on any third-party farm-in transaction
    Impact: Limits farm-down options and increases transaction complexity
    Recommendation: Note before initiating any farm-in discussions

LOW SEVERITY (1):
  CL-CB10-11.2 — CB-ONN-2010/1 — Notice period for termination: 60 days vs standard 90 days
    [informational — review at next contract milestone]

// Scan complete: 142 clauses | 5 anomalies | 0 portfolio conflicts
// Comparison matrix updated: 15 Oct 2025 08:30 IST
```

### Anomaly Detail Panel (On High Severity Row Click)

```
HIGH SEVERITY — CL-KG98-8.4

DOCUMENT: KG-DWN-98/3 Production Sharing Contract (1998)
CLAUSE: 8.4 — Cost Petroleum and Cost Recovery
BLOCK: KG-DWN-98/3

EXTRACTED CLAUSE TEXT:
"The Contractor shall be entitled to recover from Cost Petroleum an amount
not exceeding ninety percent (90%) of the total Petroleum produced and saved
in any Calendar Year, in respect of costs incurred in accordance with the
Accounting Procedure set out in Exhibit C."

STANDARD NELP TEMPLATE:
"The Contractor shall be entitled to recover one hundred percent (100%) of
total Petroleum produced and saved in any Calendar Year in respect of
allowable costs..."

DEVIATION ANALYSIS:
The cost recovery cap of 90% is 10 percentage points below the standard NELP
template. At projected Phase 3 production of approximately 12,000–18,000 bbl/day,
this deviation results in a material unrecoverable cost exposure estimated at
Rs. 4.2–6.8 Cr annually at current prices.

PORTFOLIO CONTEXT:
  KG-DWN-98/3:       90%  ← THIS DOCUMENT (anomalous)
  CB-ONN-2010/1:     100%  (standard)
  RJ-ONN-2015/1:     100%  (standard)
  [6 other blocks]:  100%  (standard)

LEGAL ACTION:
Review recommended before [COMPANY_NAME] commits to Phase 3 expenditure.
CFO and Commercial Director should assess implications for project economics.

Assigned to: [unassigned]
Due date: [unset]

[Assign to Team Member]  [Set Due Date]  [Mark Reviewed]  [Upload Legal Notes]
```

### Conflict Detection Logic

| Conflict Type | Detection Method | Alert |
|---|---|---|
| Overlapping area obligations | Cross-reference block survey boundaries for overlapping commitments | Flag both leases — legal review required |
| Contradictory assignment restrictions | Identify conflicting assignment clause language across leases on the same block | Flag for immediate legal review |
| Inconsistent data obligations | Identify conflicting data submission requirements for the same well or survey area | Flag to Regulatory Affairs and Legal |
| Duplicate rental obligations | Detect potential double-payment obligations for overlapping surface rights areas | Flag to Land Manager and Finance |

### Key UI Elements
- **Comparison matrix view** — full-screen spreadsheet-style matrix: clause categories as rows, all active leases as columns, deviations highlighted in severity colour
- **Benchmark reference panel** — clicking any clause category shows the standard NELP/OALP template language for instant reference
- **Legal action queue** — flagged anomalies can be added to a structured legal action queue with assigned owner, due date, and status tracking
- **Export report** — anomaly report exportable as PDF for legal team distribution or board presentation
- **Clause text viewer** — clicking any clause reference opens the source document PDF with the relevant clause highlighted in context

### Why It Matters
Legal review of a 200-document lease portfolio for anomalous clauses would take a team of lawyers months and cost tens of lakhs. The reality is that most of those clauses are standard — the same NELP or OALP language repeated across dozens of documents. AI-assisted analysis surfaces the 5% of clauses that are genuinely non-standard, allowing legal counsel to focus their time on material issues. For [COMPANY_NAME], this means commercial risks like the 90% cost recovery cap at KG-DWN-98/3 are identified before they become expensive surprises in the production phase.

---

## Complete Module 2 — Master Parameter Reference

### All Data Fields Across M2

| Field Name | Type | Sub-module | Description |
|---|---|---|---|
| `document_id` | String | 2.1 | Unique identifier for each ingested lease document |
| `document_type` | Enum | 2.1 | PSC / RSC / Surface Rights / Mineral Lease / Farm-In / Legacy |
| `document_date` | Date | 2.1 | Date of the original document |
| `ocr_accuracy` | Number (%) | 2.1 | Overall OCR character accuracy for scanned documents |
| `field_count_extracted` | Number | 2.1 | Total fields successfully extracted from the document |
| `field_count_flagged` | Number | 2.1 | Fields flagged for human review |
| `field_confidence` | Number (%) | 2.1 | Confidence score per extracted field |
| `source_clause_ref` | String | 2.1 | Clause and page reference for each extracted field |
| `lessor_name` | String | 2.1 | Name of the lessor party |
| `lessee_name` | String | 2.1 | Name of the lessee (operator) |
| `block_id` | String | 2.1, 2.2, 2.3 | Block identifier |
| `block_type` | Enum | 2.1 | Onshore / Offshore / Deepwater |
| `contract_type` | Enum | 2.1 | PSC / RSC / NELP / OALP / Pre-NELP / Other |
| `effective_date` | Date | 2.1 | Contract effective date |
| `initial_term_years` | Number | 2.1 | Total initial contract term in years |
| `expiry_date` | Date | 2.1 | Contract expiry date |
| `royalty_rate_crude` | Number (%) | 2.1 | Royalty rate on crude oil production |
| `royalty_rate_gas` | Number (%) | 2.1 | Royalty rate on gas production |
| `surface_rental_value` | Number (Rs.) | 2.1 | Annual surface rental amount |
| `cost_recovery_cap` | Number (%) | 2.1 | Cost recovery cap percentage |
| `renewal_option` | Boolean | 2.1 | Whether a renewal or extension option exists |
| `renewal_trigger` | Text | 2.1 | Event or condition triggering the renewal right |
| `assignment_restriction` | Text | 2.1 | Assignment clause summary |
| `dispute_resolution_type` | Enum | 2.1 | Domestic Arbitration / Foreign Arbitration / Court |
| `arbitration_seat` | String | 2.1 | City/jurisdiction of arbitration seat |
| `work_programme_detail` | Text | 2.1 | Summary of minimum work programme commitments |
| `ingestion_status` | Enum | 2.1 | Queued / Processing / Extracted / Needs Review / Complete |
| `obligation_id` | String | 2.2 | Unique obligation reference |
| `obligation_type` | Enum | 2.2 | Surface Rental / Well Spud / Seismic / Progress Report / Renewal / Relinquishment |
| `obligation_description` | Text | 2.2 | Full description of the obligation |
| `obligation_value` | Number (Rs.) | 2.2 | Financial value if applicable |
| `due_date` | Date | 2.2 | Obligation deadline |
| `obligation_status` | Enum | 2.2 | Upcoming / In Progress / Completed / Overdue |
| `days_remaining` | Number | 2.2 | Days until the due date (negative if overdue) |
| `assigned_owner` | String | 2.2 | Team or individual responsible for fulfilling the obligation |
| `alert_90d_sent` | Boolean | 2.2 | Whether the 90-day advance alert was delivered |
| `alert_30d_sent` | Boolean | 2.2 | Whether the 30-day advance alert was delivered |
| `alert_7d_sent` | Boolean | 2.2 | Whether the 7-day advance alert was delivered |
| `escalation_sent` | Boolean | 2.2 | Whether the post-deadline escalation alert was delivered |
| `completion_evidence_url` | URL | 2.2 | Link to the uploaded completion evidence document |
| `completion_date` | Date | 2.2 | Date the obligation was fulfilled |
| `regulatory_consequence` | Text | 2.2 | Risk description if obligation is not met |
| `clause_id` | String | 2.3 | Internal clause analysis reference |
| `clause_number` | String | 2.3 | Clause reference within the source document |
| `clause_category` | Enum | 2.3 | Cost Recovery / Royalty / Dispute Resolution / Assignment / Force Majeure / etc. |
| `clause_text_extracted` | Text | 2.3 | AI-extracted clause summary |
| `benchmark_standard` | Text | 2.3 | Standard template clause for comparison |
| `deviation_type` | Enum | 2.3 | Value deviation / Language deviation / Missing clause / Additional obligation |
| `deviation_severity` | Enum | 2.3 | High / Medium / Low |
| `anomaly_flag` | Boolean | 2.3 | True if clause is flagged as non-standard |
| `conflict_flag` | Boolean | 2.3 | True if clause conflicts with another lease in the portfolio |
| `legal_action_required` | Boolean | 2.3 | Whether legal review is recommended |
| `legal_action_assigned_to` | String | 2.3 | Legal team member assigned to review |
| `legal_action_due_date` | Date | 2.3 | Due date for the legal review action |
| `legal_action_status` | Enum | 2.3 | Pending / In Review / Resolved / Accepted Risk |

---

## Mock Data Constants (Demo-Ready)

### Demo Operator Portfolio Profile

```
Operator:              [COMPANY_NAME]
Total Lease Documents: 214 (across 3 active blocks)
Active Blocks:         3 — KG-DWN-98/3, CB-ONN-2010/1, RJ-ONN-2015/1
Legacy Documents:      ~90 documents pre-2000 (scanned paper records)
Active PSCs/RSCs:      13
Surface Rights Docs:   61
Portfolio Valuation:   Rs. 800+ Cr in licensed block value
Land Team Size:        3 (Land Manager, Legal Counsel, Land Officer)
Archive Format:        Mixed — SharePoint, scanned physical files, email attachments
```

### Demo Personnel (Land & Legal)

```
Anand Sharma       — VP Operations (receives escalation alerts on overdue obligations)
Priya Menon        — HSE & Regulatory Affairs Manager (co-signs compliance obligations)
Rajesh Kumar       — Land Manager (primary owner of obligation calendar)
Ravi Patel         — Finance Controller (reviews financial clause anomalies)
Sushant Verma      — Drilling Superintendent (owns well spud and work programme obligations)
Arjun Mehta        — Land Officer / Junior Legal (prepares obligation status reports)
```

### Demo Block, Contract & Obligation Pool

```
BLOCK KG-DWN-98/3 — Krishna Godavari Basin, Deepwater Offshore
  Contract type:     PSC (Production Sharing Contract) — NELP Round 1
  Effective date:    15 March 1998
  Operator:          [COMPANY_NAME]
  Key anomalies:     Cost recovery cap 90% (vs 100% standard); Singapore arbitration seat
  Active obligations: 2 (Phase 2 well spud — Nov 2025; Phase 3 relinquishment — Dec 2025)

BLOCK CB-ONN-2010/1 — Cambay Basin, Onshore, Gujarat
  Contract type:     PSC — NELP Round 8
  Effective date:    12 July 2010
  Operator:          [COMPANY_NAME]
  Key anomalies:     Narrow force majeure definition; 60-day notice period (vs 90-day standard)
  Active obligations: 2 (Surface rental OVERDUE — Rs. 18,40,000; Annual progress report — Nov 2025)

BLOCK RJ-ONN-2015/1 — Rajasthan Basin, Onshore
  Contract type:     RSC — OALP Round 1
  Effective date:    03 January 2015
  Operator:          [COMPANY_NAME]
  Key anomalies:     Additional pre-emption right on assignment
  Active obligations: 3 (Seismic data submission — Nov 2025; surface rental — Jan 2026; [1 more])
```

### Demo Obligation Register (Active)

```
OBL-2025-0041  CB-ONN-2010/1  Surface Rental Payment       Rs. 18,40,000  01 Oct 2025  OVERDUE
OBL-2025-0043  KG-DWN-98/3   Phase 2 Well Spud Commitment  —              15 Nov 2025  Upcoming
OBL-2025-0044  RJ-ONN-2015/1 Seismic Data Submission (DGH) —              20 Nov 2025  Upcoming
OBL-2025-0045  CB-ONN-2010/1 Annual Progress Report (MoPNG) —             30 Nov 2025  Upcoming
OBL-2025-0046  KG-DWN-98/3   Phase 3 Relinquishment        —              14 Dec 2025  Upcoming
OBL-2025-0047  RJ-ONN-2015/1 Annual Surface Rental          Rs. 22,10,000  01 Jan 2026  Upcoming
```

### Demo Anomaly Register (Active)

```
CL-KG98-8.4    KG-DWN-98/3   Clause 8.4   Cost Recovery Cap: 90% vs 100% standard   HIGH
CL-KG98-19.2   KG-DWN-98/3   Clause 19.2  Arbitration seat: Singapore vs India       HIGH
CL-CB10-22.1   CB-ONN-2010/1 Clause 22.1  Force majeure: excludes government action  MEDIUM
CL-RJ15-14.3   RJ-ONN-2015/1 Clause 14.3  Pre-emption right on assignment            MEDIUM
CL-CB10-11.2   CB-ONN-2010/1 Clause 11.2  Termination notice: 60 days vs 90 days     LOW
```

### Demo Portfolio KPIs (Current)

```
Total Documents Indexed:     214
Fully Extracted (≥90%):      198 (92.5%)
Needs Review:                 16 (7.5%)
Total Active Obligations:     47
Obligations Completed YTD:    38
Compliance Rate YTD:          96%
Overdue Obligations:           1
Anomalies Flagged (total):     5
Legal Actions Pending:         3
Last Portfolio Scan:          15 Oct 2025
```

---

## Demo Build Prompt for M2 Screen

```
Build a Land & Lease Document Intelligence AI screen for [PROJECT_NAME],
an AI operations platform for [MARKET / REGION] energy operators.

Clean light theme: Navy #0D1B2A primary, Accent Blue #1A6B8A section headers,
Gold #C8922A primary CTA, Teal #0F7B6C success states, Coral #C0392B critical alerts.
Card border: #D1D9E3. Background: #F5F6FA section fill. White cards.

Three sub-module tabs within M2: [2.1 Document Ingestion] [2.2 Obligation Tracking] [2.3 Clause Analysis]
Default view on 2.2 Obligation Tracking.

Show:
(1) Top KPI bar: Total Documents (214), Obligations Overdue (1 — pulsing coral),
    Due Within 30 Days (3 — gold), Anomalies Flagged (5 — accent blue)

(2) Obligation calendar (left 65%): 3-month rolling timeline (Oct–Dec 2025)
    with colour-coded event markers — 1 red pulsing (overdue), 3 amber, 5 teal.
    Hovering a marker shows obligation name and block.

(3) Obligation detail panel (right 35%): shows the overdue obligation
    (CB-ONN-2010/1 — Surface Rental Rs. 18,40,000 — 14 days overdue)
    with alert history, risk description, and "Upload Evidence" button in coral.

Sub-module 2.1 tab shows: document upload zone with processing queue —
    3 documents (2 × Complete in teal, 1 × Processing with spinner).
    Extracted field viewer for KG-DWN-98/3 with confidence indicators per field.

Sub-module 2.3 tab shows: anomaly table with 5 rows (2 High, 2 Medium, 1 Low),
    severity badges, and a detail panel for the 90% cost recovery cap anomaly.
    "View Comparison Matrix" button at bottom.

Indian upstream context — PSC/RSC, DGH, PNGRB, MoPNG. Rs. currency.
Dates: DD MMM YYYY. JetBrains Mono for all numbers and field values.
React + Tailwind + Recharts.
```

---

## Brand & Design Parameters for M2 UI

### Color Usage

| Element | Color | Hex |
|---|---|---|
| Page background | Light off-white | #F5F6FA |
| Card / panel background | White | #FFFFFF |
| Primary brand | Deep navy | #0D1B2A |
| Section headers | Accent blue | #1A6B8A |
| Primary CTA | Gold | #C8922A |
| CTA background (light) | Gold light | #FDF3E3 |
| Obligation complete / success | Teal | #0F7B6C |
| Success background | Teal light | #E3F4F2 |
| Overdue / critical | Coral red (pulsing for active alerts) | #C0392B |
| Critical background | Coral light | #FDECEA |
| Due within 30 days / warning | Gold amber | #C8922A |
| Due within 60–90 days | Accent mid blue | #2596BE |
| Low anomaly / informational | Accent blue | #1A6B8A |
| Card border | Border grey | #D1D9E3 |
| Secondary text | Muted grey | #8892A0 |

### Typography

| Use Case | Font |
|---|---|
| Module title, page heading | DM Serif Display or Playfair Display |
| Body text, labels, descriptions | DM Sans or Plus Jakarta Sans |
| All numbers, field values, timestamps | JetBrains Mono |

### Key Animations (Demo-Specific)

| Animation | Where | Description |
|---|---|---|
| Document processing spinner | 2.1 upload queue | Spinner on each document being OCR'd and extracted |
| Field population effect | 2.1 extracted field viewer | Fields appear sequentially as extraction completes |
| Confidence colour transition | 2.1 per-field indicator | Field border colour transitions based on confidence score |
| Pulsing red marker | 2.2 overdue obligations in calendar | Event marker pulses every 2 seconds until resolved |
| Days countdown | 2.2 obligation detail cards | Days remaining counter visible on each obligation |
| Completion tick animation | 2.2 obligation marked complete | Event marker transitions from amber to teal with tick |
| Anomaly row highlight | 2.3 High severity rows | Subtle coral background pulse on High severity rows |
| Comparison matrix load | 2.3 matrix view | Cells populate with deviation highlights sequentially |

---

## Technical Integration Map for M2

| Sub-module | External Systems / APIs | Data Flow Direction |
|---|---|---|
| 2.1 Document Ingestion | DMS (SharePoint / internal), email attachments, file upload | Document → OCR pipeline → NLP extraction → Lease database |
| 2.1 Document Ingestion | OCR engine (Tesseract / AWS Textract / Azure Form Recogniser) | Scanned document → Structured text → Field extraction |
| 2.2 Obligation Tracking | Lease database (output of 2.1) | Extracted dates → Obligation calendar → Alert system |
| 2.2 Obligation Tracking | Email / notification API | Obligation alert → Land Manager / Legal / VP Operations |
| 2.2 Obligation Tracking | Document storage (completion evidence) | Evidence upload → Obligation record → Audit log |
| 2.3 Clause Analysis | Lease database (output of 2.1) + Regulatory template library | Extracted clauses → Benchmark comparison → Anomaly flag |
| 2.3 Clause Analysis | Legal team workflow (internal) | Anomaly flag → Legal action queue → Resolution record |

---

## Summary: M2 at a Glance

| Item | Detail |
|---|---|
| Module | M2 — Land & Lease Document Intelligence |
| Sub-modules | 3 (2.1 → 2.3) |
| Total pages | 4 (1 dashboard + 3 sub-module pages) |
| Primary data objects | Extracted lease terms, obligation calendar entries, clause anomaly flags |
| Contract standards | PSC · RSC · NELP · OALP · Surface Rights · Farm-In/Out |
| Regulators covered | DGH · MoPNG · Petroleum Act 1934 · Oilfields (R&D) Act 1948 |
| Key output | Structured lease database + live obligation calendar + anomaly report + comparison matrix |
| Demo focus | Obligation calendar populating from uploaded lease PDFs; overdue obligation detail |
| Design tone | Clean, professional dashboard — light theme, premium, legal-grade precision |
| Currency | Rs. Indian Rupee — Lakhs (L) and Crores (Cr) |
| Date format | DD MMM YYYY |
| Language | English (Indian) — formal legal and commercial context |
| Market context | [MARKET / REGION] upstream oil and gas — PSC/RSC portfolio management |

---

*[PROJECT_NAME] · Land & Lease Document Intelligence Module — M2 Build Guide*
*by [COMPANY_NAME] · [WEBSITE]*
*Version [VERSION] · [PUBLIC / INTERNAL / CONFIDENTIAL]*
