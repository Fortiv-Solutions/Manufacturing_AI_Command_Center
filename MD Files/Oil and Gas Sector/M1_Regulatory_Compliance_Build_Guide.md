# M1 — Regulatory Compliance & Filing Automation

### [PROJECT_NAME] · AI Operations Platform · [WEBSITE]

> **Module Tagline:** Autonomously reads your operational documents to auto-populate state regulatory filings — eliminating manual transcription, compliance backlogs, and submission delays.

**Document Type:** Module Build Guide & Parameter Reference
**Module Code:** M1
**Total Sub-Modules:** 3 (1.1 → 1.3)
**Version:** [VERSION]
**Company:** [COMPANY_NAME]
**Classification:** [PUBLIC / INTERNAL / CONFIDENTIAL]
**Market:** [MARKET / REGION] — India Focus (OISD · PNGRB · DGH · MoPNG)

---

## Module Overview

### Purpose

Replace manual data transcription for regulatory filings with an **autonomous compliance engine** that continuously reads operational documents, detects compliance gaps before they escalate, and auto-generates submission-ready regulatory forms — so your compliance team shifts from form-filling to strategic review.

### Core Problem Being Solved

| Pain Point                   | Without M1                                         | With M1                                           |
| ---------------------------- | -------------------------------------------------- | ------------------------------------------------- |
| Regulatory form preparation  | 3–5 days per filing period                         | Auto-generated in under 30 minutes                |
| Data freshness               | Manual extraction from yesterday's reports         | AI reads the latest operational documents         |
| Compliance gap detection     | Discovered after a deficiency notice               | Flagged before submission                         |
| Filing accuracy              | Human transcription errors in 1–5% of fields       | 99%+ accuracy with full source traceability       |
| Audit trail creation         | Manual compilation — days of senior staff time     | One-click audit pack generated in under 2 minutes |
| Regulatory updates           | Tracked manually by compliance team                | Continuous monitoring against latest circulars    |
| Submission history retrieval | Hours searching through email archives and folders | Instant retrieval by date, block, or form type    |

### Demo Wow Moment

**Live regulatory form auto-populating on screen** — AI reading a 12-page operational summary PDF, extracting all relevant figures, mapping them to the correct form fields for the PNGRB Monthly Production Template, and surfacing a single flagged gap — all within 90 seconds with zero manual data entry.

---

## Module-Level Parameters

| Parameter                | Value                                                                      |
| ------------------------ | -------------------------------------------------------------------------- |
| Module ID                | M1                                                                         |
| Module Name              | Regulatory Compliance & Filing Automation                                  |
| Sub-module Count         | 3                                                                          |
| Primary Output           | Auto-populated regulatory forms + compliance gap report + audit trail pack |
| Primary Users            | Compliance Manager, Well Engineer, Regulatory Affairs Lead, VP Operations  |
| Document Processing Time | Under 90 seconds per operational report                                    |
| Supported Regulators     | PNGRB, DGH, MoPNG, OISD, PESO, DGMS, MoEFCC, CPCB                          |
| Document Formats         | PDF (scanned and digital), Word, Excel, structured field exports           |
| Integration              | ERP, DMS, operator portal, regulatory submission portals                   |
| Languages                | English (primary), Hindi                                                   |
| Compliance References    | OISD-STD-189, PNGRB Act 2006, Petroleum Act 1934, PSC/RSC templates        |
| Currency Format          | Rs. Indian Rupee — Lakhs (L) and Crores (Cr)                               |
| Demo Financial Period    | FY 2024–25 (Apr 2024 – Mar 2025)                                           |

---

## Module Pages & Navigation Structure

```
M1 — Regulatory Compliance & Filing Automation
│
├── [Page 1]  Module Dashboard / Overview              ← Landing page for M1
│             (KPIs, filing status summary, compliance score, alert panel)
│
├── [Page 2]  1.1  Regulatory Form Auto-Population
│             (Document upload, field mapping view, gap flags, submission queue)
│
├── [Page 3]  1.2  Compliance Gap Detection
│             (Gap report panel, severity classification, corrective actions log)
│
└── [Page 4]  1.3  Audit Trail & Filing History Management
              (Filing history table, audit pack generator, version viewer)
```

---

## Page 1 — Module Dashboard (M1 Overview)

### Purpose

The landing screen for Module 1. Gives a full operational view of the compliance engine — recent filing status, open gaps, upcoming deadlines, and compliance health — all in one screen.

### Layout

- **Top Stats Bar** (4 KPI cards across)
- **Centre Left:** Filing status calendar — upcoming regulatory deadlines for the next 30 days
- **Centre Right:** Compliance score donut chart + active gap summary
- **Bottom:** Quick-access tiles to each sub-module (1.1 → 1.3) + recent activity log

### KPI Cards (Top Stats Bar)

| Card                     | Metric                                   | Mock Value | Color                          |
| ------------------------ | ---------------------------------------- | ---------- | ------------------------------ |
| Filings Due This Month   | Count of active submission deadlines     | 6          | Accent Blue #1A6B8A            |
| Compliance Gaps Open     | Flagged gaps requiring action            | 3          | Danger Coral #C0392B (pulsing) |
| Auto-Population Accuracy | % fields auto-filled without error       | 99.1%      | Success Teal #0F7B6C           |
| Filings Submitted YTD    | Approved submissions this financial year | 47         | Gold #C8922A                   |

### Compliance Score Donut Chart

Recharts donut showing overall compliance health by category:

| Category                           | Mock Score | Color   |
| ---------------------------------- | ---------- | ------- |
| Production Reporting (PNGRB)       | 97%        | #0F7B6C |
| Well Data Submissions (DGH)        | 94%        | #1A6B8A |
| Environmental Disclosures (MoEFCC) | 88%        | #E8A838 |
| Safety Reporting (OISD/DGMS)       | 91%        | #2596BE |
| HSE Statutory Returns (PESO)       | 85%        | #C0392B |

### Filing Deadline Calendar Strip

Compact timeline showing:

- Upcoming filing dates with form name and authority
- Status indicator per deadline (Pending Auto-Population / In Review / Submitted / Overdue)
- Days remaining counter per filing

### Sub-Module Quick Access Tiles (Bottom Row)

Three clickable tiles, each showing:

- Sub-module number + name
- One-line description
- Status indicator (Active / Idle)
- Key stat for today (filings queued / gaps detected / audit packs generated)

---

## Page 2 — Sub-Module 1.1: Regulatory Form Auto-Population

### What It Is

An always-on document intelligence agent that reads incoming operational reports and automatically maps extracted data to the correct fields in official regulatory submission forms — turning a multi-day manual exercise into a 30-minute review task.

### Supported Document Inputs

| Document Type               | Formats Supported                  | Processing Method      | Typical Processing Time |
| --------------------------- | ---------------------------------- | ---------------------- | ----------------------- |
| Monthly Production Report   | PDF (digital), PDF (scanned), Word | NLP + OCR              | 60–90 seconds           |
| Daily Drilling Report (DDR) | PDF, Excel, structured text        | NLP + table extraction | 30–60 seconds           |
| Well Test Report            | PDF, Word                          | NLP extraction         | 45–75 seconds           |
| Workover Completion Report  | PDF                                | NLP + OCR              | 60–90 seconds           |
| Operator Field Summary      | PDF, Word, Excel                   | NLP + structured parse | 20–45 seconds           |

### Supported Regulatory Forms

| Regulator | Form / Template                         | Submission Frequency | Fields Auto-Populated |
| --------- | --------------------------------------- | -------------------- | --------------------- |
| PNGRB     | Monthly Production Report Template      | Monthly              | 48 fields             |
| DGH       | W-10 Monthly Well Data Return           | Monthly              | 32 fields             |
| DGH       | Annual Field Development Plan Update    | Annual               | 84 fields             |
| OISD      | OISD-STD-189 Safety Return              | Quarterly            | 27 fields             |
| MoEFCC    | Annual Environmental Statement (Form-V) | Annual               | 61 fields             |
| CPCB      | Hazardous Waste Return                  | Six-monthly          | 19 fields             |

### What It Extracts Per Document

| Data Category       | Fields Extracted                                             | Mock Example                                    |
| ------------------- | ------------------------------------------------------------ | ----------------------------------------------- |
| Production Volumes  | Crude oil (bbl/KL), gas (MMSCFD), condensate (KL), water cut | Block XYZ-07: 48,340 bbl crude, 18.4 MMSCFD gas |
| Well Status         | Active wells, shut-in wells, workover wells, injectors       | 14 active, 2 shut-in, 1 workover in progress    |
| Flaring & Emissions | Gas flared (MMSCFD), reason code, duration                   | 2.1 MMSCFD flared — compressor trip event       |
| Water Injection     | Volume injected (bbl/KL), injection pressure, well IDs       | 18,200 bbl injected at 2,400 psi                |
| Operator Details    | Block ID, operator name, reporting period, contact           | [COMPANY_NAME], Block XYZ-07, Oct 2025          |
| HSE Events          | LTIs, near misses, reportable incidents                      | 0 LTI, 1 near miss (PTW-1149)                   |

### Field Mapping Logic

| Mapping Step               | Description                                                         | Output                             |
| -------------------------- | ------------------------------------------------------------------- | ---------------------------------- |
| Entity Recognition         | AI identifies data entities in source text                          | Crude oil volume → 48,340 bbl      |
| Unit Standardisation       | Converts to the unit required by the specific form                  | bbl → KL if form requires KL       |
| Field Position Mapping     | Maps entity to the correct form field by ID                         | Field 3A → 48,340 bbl              |
| Source Traceability Record | Links each filled field to its source document, page, and paragraph | [Source: Page 2, Para 3]           |
| Confidence Scoring         | Flags low-confidence extractions for human review                   | < 85% confidence → flag for review |
| Gap Detection              | Identifies required form fields with no extractable source data     | Field 12D → FLAGGED — data missing |

### Page Layout

**Top Control Bar:** "Auto-populate from document" button (primary, gold) + document upload zone + regulatory form selector + period selector
**Main Area (Left 40%):** Document list — uploaded reports with processing status badges (Processing / Ready / Failed)
**Main Area (Right 60%):** Active form view — prefilled form with fields highlighted in light blue; hovering shows source tooltip
**Top of Form:** Progress bar showing "47/48 fields auto-populated" + badge: "1 field needs review"
**Bottom:** "Submit for Review" button + "Export to PDF" button + "Push to Submission Portal" button

### Mock Demo Data — Populated Field Output

```
// INPUT: Monthly Production Summary — Block XYZ-07, [MARKET / REGION]
Operator:    [COMPANY_NAME] | Block: XYZ-07 | Period: Oct 2025
Crude Oil:   48,340 bbl     | Gas Flared: 2.1 MMSCFD
Active Wells: 14            | Shut-in Wells: 2
Water Inj:   18,200 bbl     | Injection Pressure: 2,400 psi

// OUTPUT: Auto-Filled PNGRB Monthly Production Template
Field 3A  → 48,340 bbl         [Source: Page 2, Para 3, Confidence: 99%]
Field 7B  → 2.1 MMSCFD         [Source: Page 4, Table 1, Confidence: 98%]
Field 9C  → 14                 [Source: Page 1, Summary, Confidence: 100%]
Field 10D → 2                  [Source: Page 1, Summary, Confidence: 100%]
Field 11E → 18,200 bbl         [Source: Page 3, Section 4, Confidence: 97%]
Field 12F → FLAGGED — water disposal volume missing from source document

// STATUS: 47/48 fields auto-populated | 1 field requires human input
// Source document: Oct_2025_Production_Summary_XYZ07.pdf (12 pages)
// Estimated time saved: 4.5 hours vs manual entry
// Processing time: 00:01:24
```

### Anomaly Detection Rules

| Anomaly Type               | Trigger Condition                                                     | Alert Action                                 |
| -------------------------- | --------------------------------------------------------------------- | -------------------------------------------- |
| Missing source data        | Required form field has no extractable match in any uploaded document | Flag field — queue for human input           |
| Value out of range         | Extracted value falls outside historical tolerance for that field     | Flag for review — show last 3 months' values |
| Period mismatch            | Document date does not match the selected filing period               | Warn user — confirm before proceeding        |
| Duplicate submission       | A filing for the same form, period, and block already exists          | Block submission — prompt to review revision |
| Confidence below threshold | Extracted value confidence score < 85%                                | Flag in amber — reviewer must confirm        |

### Key UI Elements

- **Auto-population animation** — progress bar + "Reading document… Extracting fields… Mapping to form… Ready" sequence
- **Source hover tooltip** — every filled field shows "Source: [document name], Page X, Para Y" on hover
- **Confidence indicator** — colour-coded per field: Teal (≥95%) / Blue (85–94%) / Amber (75–84%) / Red (<75%)
- **One-click submission push** — approved form pushed directly to the regulatory portal or exported as PDF
- **Gap highlight panel** — flagged fields listed on the right with recommended resolution action per field

### Why It Matters

Most compliance failures in [MARKET / REGION]'s upstream sector are not caused by genuine non-compliance — they are caused by transcription errors, missed deadlines, and the sheer burden of moving data from operational documents into regulatory form fields. When AI removes human transcription from the critical path entirely, the compliance team's role becomes review and governance rather than data entry — producing better submissions in a fraction of the time.

---

## Page 3 — Sub-Module 1.2: Compliance Gap Detection

### What It Is

A continuous monitoring engine that cross-references drafted and submitted filings against the latest applicable regulatory requirements, flagging gaps before they become deficiency notices or regulatory violations.

### Monitoring Parameters Per Filing

| Parameter                  | Description                                | Mock Example                    |
| -------------------------- | ------------------------------------------ | ------------------------------- |
| `filing_id`                | Internal filing reference                  | FILING-2025-1042                |
| `form_type`                | Regulatory form being assessed             | PNGRB Monthly Production Report |
| `period`                   | Reporting period covered                   | October 2025                    |
| `block_id`                 | Operational block                          | XYZ-07                          |
| `submitted_by`             | Preparer name                              | Rajesh Kumar                    |
| `submission_date`          | Date filed                                 | 14 Oct 2025                     |
| `regulatory_version`       | Version of regulation checked against      | PNGRB Circular 2024-08          |
| `gap_count_critical`       | Number of Critical gaps identified         | 1                               |
| `gap_count_advisory`       | Number of Advisory gaps identified         | 2                               |
| `gap_count_informational`  | Number of Informational items              | 1                               |
| `overall_compliance_score` | Weighted score out of 100%                 | 87%                             |
| `last_scan_timestamp`      | When the scan was last run                 | 2 minutes ago                   |
| `corrective_action_status` | % of gaps with assigned corrective actions | 67%                             |

### Gap Severity Classification

| Severity      | Definition                                                                 | Badge Color         | Required Response                                 |
| ------------- | -------------------------------------------------------------------------- | ------------------- | ------------------------------------------------- |
| Critical      | Missing mandatory disclosure or non-compliant field per current regulation | #C0392B Red Pulsing | Correct before submission or resubmit immediately |
| Advisory      | Potential non-compliance requiring verification; risk of deficiency notice | #C8922A Gold        | Review and address within 7 days                  |
| Informational | Regulatory update or voluntary disclosure available — not yet mandatory    | #1A6B8A Blue        | Review at next filing cycle                       |

### Regulatory Knowledge Base Parameters

| Knowledge Item        | Description                                                                | Update Method                    |
| --------------------- | -------------------------------------------------------------------------- | -------------------------------- |
| PNGRB circulars       | All active PNGRB production reporting circulars                            | Auto-ingested on publication     |
| OISD standards        | All applicable OISD-STD standards for operator filings                     | Versioned — alerts on revision   |
| DGH guidelines        | DGH field development and reporting requirements                           | Manual upload + version tracking |
| MoEFCC notifications  | Environmental compliance notifications applicable to upstream ops          | Auto-ingested on publication     |
| PSC / RSC obligations | Block-specific regulatory obligations from the production sharing contract | Uploaded per block at onboarding |

### Page Layout

**Top Stats Bar:** Total filings scanned (47) | Fully Compliant (41) | Gaps Identified (6) | Critical Open (1)
**Filter Bar:** Severity filter | Form type filter | Block filter | Period filter | Assigned owner filter
**Main Area (Left 60%):** Gap report table — all open gaps with severity badge, form reference, clause, description, and action
**Right Panel (40%):** Gap detail card — expands on row click with regulatory clause text, recommended corrective action, and evidence upload slot
**Bottom:** "Run Full Compliance Scan" button + "Export Gap Report" button + scan schedule settings

### Mock Demo Data — Compliance Scan Results

```
// COMPLIANCE SCAN RESULTS — [COMPANY_NAME] | Filing: FILING-2025-1042
// Filed: 14 Oct 2025 | Block: XYZ-07 | Form: PNGRB Monthly Production Report

CRITICAL (1):
  > PNGRB Circular 2024-08: Methane intensity reporting now mandatory from Q3 2025
    Affected field: Section 6, Emission Data — field currently blank
    Regulatory clause: Circular 2024-08, Para 3.1(c)
    Action required: Add methane intensity calculation before resubmission
    Deadline: Resubmit within 14 days of deficiency notice

ADVISORY (2):
  > OISD-GS-RP-04 updated Q3 2025 — emergency response contact format changed
    Affected section: Section 9B — current format does not match updated template
    Action: Update contact entries to new format at next filing
  > Well integrity certification period reduced from 24 to 18 months per DGH circular
    Affected field: Section 4D — two well certs shown as valid at 24-month interval
    Action: Review well certification schedule against new 18-month requirement

INFORMATIONAL (1):
  > New voluntary ESG supplementary schedule available for Q4 2025 submissions
    No action required — option to include in next filing cycle

// Overall compliance score: 87% | Last scan: 2 minutes ago
// 1 corrective action assigned | 2 pending assignment
```

### Gap Detail Panel (On Critical Gap Click)

```
CRITICAL GAP — PNGRB Circular 2024-08

DESCRIPTION:
Methane intensity reporting is now mandatory for all upstream operators
filing monthly production data under the PNGRB Act 2006. This requirement
applies to data from Q3 FY 2024-25 onward (effective 01 Jul 2025).

REGULATORY CLAUSE:
PNGRB Circular 2024-08, Para 3.1(c):
"All operators shall include aggregate methane intensity (tCH4 per ktoe
of production) as a mandatory disclosure in the Monthly Production Report
from the quarter ended 30 September 2025 onward."

AFFECTED FILING:
FILING-2025-1042 | Section 6: Emission Data | Field: 6.3 (Methane Intensity)

RECOMMENDED CORRECTIVE ACTION:
1. Calculate methane intensity from available flaring and fugitive emission data
2. Complete Field 6.3 in the form with the calculated value
3. Resubmit the updated filing to the PNGRB portal within 14 days

EVIDENCE REQUIRED:
☐ Methane intensity calculation worksheet
☐ Supporting operational data (flaring logs, equipment leak surveys)

[Assign to: Compliance Manager]  [Upload Evidence]  [Mark Resolved]
```

### Alert Rules

| Rule                             | Trigger                                                 | Alert Sent To                       |
| -------------------------------- | ------------------------------------------------------- | ----------------------------------- |
| Critical gap on filed submission | Critical gap detected on an already-submitted filing    | Compliance Manager + VP Operations  |
| Filing deadline approaching      | Filing due in 7 days with no draft started              | Compliance Manager                  |
| Regulatory update ingested       | New circular or standard update added to knowledge base | Compliance Manager                  |
| Scan not run in 72 hours         | No compliance scan performed in 3 days                  | Compliance Manager                  |
| Corrective action overdue        | Gap assigned but not resolved within defined window     | Compliance Manager + assigned owner |

### Key UI Elements

- **Pulsing red badge** on Critical gap rows — pulses every 2 seconds until acknowledged
- **Regulatory clause viewer** — click any gap to read the full applicable regulatory clause in context
- **Compliance score trend** — mini sparkline showing score trend over last 6 filings
- **"Assign to" dropdown** — each gap can be assigned to a named team member with a due date
- **Evidence upload slot** — corrective action resolution requires attached documentary evidence before the gap can be closed

### Why It Matters

Regulatory requirements in [MARKET / REGION]'s upstream sector evolve continuously — PNGRB issues circulars, OISD standards are revised, and DGH introduces new reporting templates without always providing advance notice to operators. A compliance team manually tracking these changes while simultaneously managing filing preparation is continuously exposed. Continuous automated scanning turns compliance from a reactive scramble into a managed, proactive process.

---

## Page 4 — Sub-Module 1.3: Audit Trail & Filing History Management

### What It Is

A tamper-evident, fully searchable record of every regulatory submission, document revision, source reference, and approval event — structured for immediate retrieval during inspections, audits, or licence renewal reviews.

### Audit Trail Data Fields Per Filing Event

| Field                     | Description                                        | Mock Example                          |
| ------------------------- | -------------------------------------------------- | ------------------------------------- |
| `filing_id`               | Unique filing reference                            | FILING-2025-1042                      |
| `form_type`               | Regulatory form submitted                          | PNGRB Monthly Production Report       |
| `block_id`                | Operational block                                  | XYZ-07                                |
| `period`                  | Reporting period                                   | October 2025                          |
| `version`                 | Filing version number                              | v1.0                                  |
| `status`                  | Current filing status                              | Approved                              |
| `submitted_by`            | Person who submitted the filing                    | Rajesh Kumar                          |
| `submitted_at`            | Timestamp of submission                            | 14 Oct 2025 09:32 IST                 |
| `reviewed_by`             | Reviewer who signed off before submission          | Priya Menon                           |
| `reviewed_at`             | Timestamp of review sign-off                       | 14 Oct 2025 09:15 IST                 |
| `source_documents`        | List of operational docs used to populate the form | Oct_2025_Production_Summary_XYZ07.pdf |
| `field_count_auto`        | Number of fields auto-populated                    | 47                                    |
| `field_count_manual`      | Number of fields manually entered                  | 1                                     |
| `gap_flags_at_submission` | Compliance gaps identified at submission time      | 0                                     |
| `regulatory_reference`    | Applicable regulation version checked against      | PNGRB Circular 2024-08                |
| `approval_status`         | Regulatory authority response                      | Approved — 21 Oct 2025                |
| `audit_pack_generated`    | Whether an audit pack has been generated           | Yes — 21 Oct 2025                     |

### Filing Version History Parameters

| Version Event           | Logged Data                                                   | Retained Indefinitely |
| ----------------------- | ------------------------------------------------------------- | --------------------- |
| Draft created           | Creator, timestamp, source documents attached                 | ✓                     |
| Field edit              | Changed field ID, old value, new value, editor, timestamp     | ✓                     |
| Review sign-off         | Reviewer name, role, timestamp, comments                      | ✓                     |
| Submission              | Submitter name, timestamp, portal reference number            | ✓                     |
| Regulatory approval     | Authority response, approval date, reference number           | ✓                     |
| Revision (resubmission) | Reason for revision, changed fields, new submission timestamp | ✓                     |
| Audit pack generation   | Generated by, timestamp, recipient                            | ✓                     |

### Audit Pack Contents

| Component                     | Description                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| Submitted form                | Final version of the regulatory form as submitted, in PDF                            |
| Source documents              | All operational documents used to populate the form                                  |
| Traceability map              | Table linking every auto-populated field to its source document, page, and paragraph |
| Version history               | Chronological log of all edits, reviews, and submission events                       |
| Compliance scan report        | Gap detection results at time of submission                                          |
| Sign-off trail                | Names, roles, and timestamps of all reviewers and approvers                          |
| Regulatory authority response | Approval confirmation or correspondence received                                     |

### Page Layout

**Top Search Bar:** Query by date range, form type, block, well ID, operator, status, or free text
**Main Area:** Filing history table — all filings with columns: Filing ID, Form, Block, Period, Version, Status, Submitted By, Submitted At, Authority Response, Actions
**Right Panel:** Filing detail view — opens on row click, showing all metadata, version history, and source document list
**Bottom:** "Generate Audit Pack" button + "Export History" button + audit pack archive list

### Mock Demo Data — Filing History Table

```
// AUDIT QUERY: 'Show all W-10 filings for Block XYZ-07, FY 2024-25'

RESULTS (12 filings found):

Filing ID        Form  Block   Period    Ver   Status    Submitted By    Approved
FILING-2024-0041 W-10  XYZ-07  Apr 2024  v1.0  Approved  Rajesh Kumar    05 May 2024
FILING-2024-0089 W-10  XYZ-07  May 2024  v1.0  Approved  Rajesh Kumar    06 Jun 2024
FILING-2024-0134 W-10  XYZ-07  Jun 2024  v1.1  Revised   Priya Menon     Resubmitted [see note]
FILING-2024-0178 W-10  XYZ-07  Jul 2024  v1.0  Approved  Rajesh Kumar    05 Aug 2024
FILING-2024-0223 W-10  XYZ-07  Aug 2024  v1.0  Approved  Anand Sharma    06 Sep 2024
FILING-2024-0267 W-10  XYZ-07  Sep 2024  v1.0  Approved  Rajesh Kumar    04 Oct 2024
FILING-2024-0314 W-10  XYZ-07  Oct 2024  v1.0  Approved  Rajesh Kumar    05 Nov 2024
FILING-2024-0361 W-10  XYZ-07  Nov 2024  v1.0  Approved  Priya Menon     06 Dec 2024
FILING-2024-0409 W-10  XYZ-07  Dec 2024  v1.0  Approved  Rajesh Kumar    07 Jan 2025
FILING-2025-0014 W-10  XYZ-07  Jan 2025  v1.0  Approved  Rajesh Kumar    05 Feb 2025
FILING-2025-0061 W-10  XYZ-07  Feb 2025  v1.0  Approved  Anand Sharma    06 Mar 2025
FILING-2025-0112 W-10  XYZ-07  Mar 2025  v1.0  Approved  Rajesh Kumar    04 Apr 2025

// AUDIT PACK GENERATED: 12 filings + 12 source docs + traceability maps
// Pack size: 34 MB | Generated in: 00:01:48
// Download: [Audit_Pack_W10_XYZ07_FY2024-25.zip]
```

### Filing Detail View (On Row Click — FILING-2024-0134)

```
FILING-2024-0134 — W-10 Monthly Well Data Return
Block: XYZ-07 | Period: June 2024 | Version: v1.1 (Revised)

REVISION NOTE:
Original filing v1.0 (submitted 04 Jun 2024) contained an error in Field 7C
(average wellhead pressure, Well No. 3). Value corrected from 280 psi to 310 psi
per the June DDR review conducted by Priya Menon on 18 Jun 2024.

VERSION HISTORY:
v1.0  Draft created   03 Jun 2024 14:22 IST  Rajesh Kumar
      Field edit      03 Jun 2024 16:45 IST  Rajesh Kumar   [7 fields updated]
      Review sign-off 04 Jun 2024 08:17 IST  Priya Menon
      Submitted       04 Jun 2024 09:03 IST  Rajesh Kumar
v1.1  Revision opened 18 Jun 2024 11:30 IST  Priya Menon    [Field 7C corrected]
      Review sign-off 18 Jun 2024 14:10 IST  Anand Sharma
      Resubmitted     18 Jun 2024 15:02 IST  Priya Menon
      DGH Approval    24 Jun 2024            Approved with note

SOURCE DOCUMENTS:
  June_2024_Production_Summary_XYZ07.pdf (14 pages)
  June_2024_Daily_Drilling_Reports_XYZ07_v2.xlsx (consolidated)

[View Submitted Form]  [Download Audit Pack]  [Compare Versions]
```

### Audit Pack Generation Workflow

| Step | Action                                                                                                                                              | System         |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| 1    | User clicks "Generate Audit Pack" for selected filing or date range                                                                                 | [PROJECT_NAME] |
| 2    | System compiles submitted form (final version), all source documents, traceability map, version history, compliance scan report, and sign-off trail | Automated      |
| 3    | Pack assembled as a single ZIP archive with a structured PDF index                                                                                  | Automated      |
| 4    | Pack available for download or distribution to the requesting authority                                                                             | [PROJECT_NAME] |
| 5    | Pack generation event logged in the audit trail                                                                                                     | Automated      |

### Key UI Elements

- **Full-text search** — any term (block name, person's name, form reference, regulatory clause number) instantly retrieves relevant filings
- **Version comparison view** — side-by-side diff of any two versions of the same filing, with changed fields highlighted
- **Tamper-evident log** — every event in the audit trail is write-once and time-stamped; no event can be deleted or backdated
- **One-click audit pack** — generates a court-ready, structured compliance record for any filing or range of filings in under 2 minutes
- **Bulk export** — full FY history for a block can be exported in a single operation for regulatory submission or legal review

### Why It Matters

During a regulatory inspection or licence renewal review in [MARKET / REGION], operators are required to produce years of submission history on short notice. The manual process of locating, compiling, and presenting this history — across email threads, shared drives, and physical archives — can consume weeks of senior staff time and introduces significant risk that records will be incomplete, inconsistent, or simply missing. [PROJECT_NAME] ensures a complete, immutable audit trail exists for every submission, accessible in under 2 minutes.

---

## Complete Module 1 — Master Parameter Reference

### All Data Fields Across M1

| Field Name                | Type       | Sub-module    | Description                                                        |
| ------------------------- | ---------- | ------------- | ------------------------------------------------------------------ |
| `document_id`             | String     | 1.1           | Unique identifier for each uploaded source document                |
| `document_type`           | Enum       | 1.1           | Monthly Report / DDR / Well Test / Workover Report / Field Summary |
| `document_period`         | Date       | 1.1           | Operational period covered by the document                         |
| `ocr_confidence`          | Number (%) | 1.1           | OCR confidence score for scanned documents                         |
| `field_id`                | String     | 1.1           | Regulatory form field identifier (e.g. Field 3A)                   |
| `field_value_auto`        | String     | 1.1           | Value extracted and auto-populated by AI                           |
| `field_value_manual`      | String     | 1.1           | Value entered or overridden by a human reviewer                    |
| `field_confidence`        | Number (%) | 1.1           | Confidence score for a specific extracted field                    |
| `source_document_ref`     | String     | 1.1           | Source document, page, and paragraph for a field value             |
| `gap_flag`                | Boolean    | 1.1, 1.2      | True if the field is flagged as missing or non-compliant           |
| `form_type`               | Enum       | 1.1, 1.3      | PNGRB Report / DGH W-10 / OISD Return / MoEFCC Form-V              |
| `auto_population_status`  | Enum       | 1.1           | Processing / Ready / Partial / Failed                              |
| `fields_auto_populated`   | Number     | 1.1           | Count of fields successfully auto-populated                        |
| `fields_flagged`          | Number     | 1.1           | Count of fields flagged for human review                           |
| `filing_id`               | String     | 1.1, 1.2, 1.3 | Internal filing reference                                          |
| `regulatory_version`      | String     | 1.2           | Version of the regulation checked against                          |
| `gap_severity`            | Enum       | 1.2           | Critical / Advisory / Informational                                |
| `gap_description`         | Text       | 1.2           | Description of the compliance gap                                  |
| `gap_clause`              | String     | 1.2           | Regulatory clause number and reference                             |
| `corrective_action`       | Text       | 1.2           | Recommended corrective action                                      |
| `gap_assigned_to`         | String     | 1.2           | Name of person assigned to resolve the gap                         |
| `gap_due_date`            | Date       | 1.2           | Deadline for resolving the gap                                     |
| `gap_status`              | Enum       | 1.2           | Open / In Progress / Resolved / Acknowledged                       |
| `compliance_score`        | Number (%) | 1.2           | Overall compliance score for the filing                            |
| `last_scan_at`            | DateTime   | 1.2           | Timestamp of the most recent compliance scan                       |
| `knowledge_base_version`  | String     | 1.2           | Version of the regulatory knowledge base used                      |
| `filing_version`          | String     | 1.3           | Semantic version of the filing (v1.0, v1.1, etc.)                  |
| `filing_status`           | Enum       | 1.3           | Draft / In Review / Submitted / Approved / Revised / Overdue       |
| `submitted_by`            | String     | 1.3           | Name of the person who submitted the filing                        |
| `submitted_at`            | DateTime   | 1.3           | Timestamp of submission                                            |
| `reviewed_by`             | String     | 1.3           | Name of the reviewer who signed off                                |
| `reviewed_at`             | DateTime   | 1.3           | Timestamp of review sign-off                                       |
| `authority_response`      | Text       | 1.3           | Regulatory authority approval note or correspondence               |
| `authority_response_date` | Date       | 1.3           | Date of regulatory authority response                              |
| `audit_pack_url`          | URL        | 1.3           | Download link for the generated audit pack                         |
| `version_event_type`      | Enum       | 1.3           | Draft / Edit / Review / Submit / Revise / Approve                  |
| `version_event_timestamp` | DateTime   | 1.3           | When the version event occurred                                    |
| `version_event_actor`     | String     | 1.3           | Who performed the version event                                    |

---

## Mock Data Constants (Demo-Ready)

### Demo Operator Profile

```
Operator:           [COMPANY_NAME]
Block:              XYZ-07 — Onshore, [MARKET / REGION]
Regulatory context: PNGRB Act 2006, DGH Production Sharing Contract
Annual filings:     ~60 individual regulatory submissions
Active blocks:      3 (XYZ-07, CB-ONN-2010/1, RJ-ONN-2015/1)
Compliance staff:   4 (2 Compliance Officers, 1 Regulatory Affairs Lead, 1 Environmental Officer)
ERP:                SAP (operational data source)
DMS:                SharePoint (document storage — legacy)
```

### Demo Personnel (Compliance & Regulatory)

```
Anand Sharma       — VP Operations (receives critical compliance alerts)
Priya Menon        — HSE & Regulatory Affairs Manager (primary compliance owner)
Rajesh Kumar       — Well Engineer (files W-10 and production data returns)
Ravi Patel         — Finance Controller (signs off cost and financial disclosures)
Sushant Verma      — Drilling Superintendent (reviews well integrity submissions)
Arjun Mehta        — Junior Compliance Officer (prepares draft filings)
```

### Demo Block & Well Pool

```
Block XYZ-07       KG Basin Onshore — primary demo block
Block CB-ONN-2010/1 Cambay Onshore — secondary demo block, Gujarat
Block RJ-ONN-2015/1 Rajasthan Onshore — tertiary demo block

Well No. 3         Active producer, Block XYZ-07
Well No. 7         Shut-in — workover in progress
Well No. 12        Water injector
Well No. 14        Active producer — highest output
```

### Demo Production KPIs (Last Month Reference)

```
Gross Oil:          48,340 bbl     (Target: 50,000 bbl | Variance: -3.3%)
Gas Produced:       18.4 MMSCFD
Gas Flared:         2.1 MMSCFD     (Flaring intensity: 11.4%)
Water Injected:     18,200 bbl     at avg 2,400 psi
Active Wells:       14             (2 shut-in, 1 workover)
Regulatory Filings: 6 due this month | 5 completed | 1 in draft
Compliance Score:   87%            (1 critical gap open)
```

### Demo Regulators & Forms

```
PNGRB              Petroleum and Natural Gas Regulatory Board
                   Form: Monthly Production Report — 48 fields
DGH                Directorate General of Hydrocarbons
                   Form: W-10 Monthly Well Data Return — 32 fields
MoPNG              Ministry of Petroleum and Natural Gas
                   Form: Annual Field Performance Update
OISD               Oil Industry Safety Directorate
                   Form: OISD-STD-189 Safety Return — 27 fields
DGMS               Directorate General of Mines Safety
                   Form: Form-B Incident Report
MoEFCC             Ministry of Environment, Forest and Climate Change
                   Form: Annual Environmental Statement (Form-V) — 61 fields
CPCB               Central Pollution Control Board
                   Form: Hazardous Waste Return — 19 fields
```

---

## Demo Build Prompt for M1 Screen

```
Build a Regulatory Compliance & Filing Automation AI screen for [PROJECT_NAME],
an AI operations platform for [MARKET / REGION] energy operators.

Clean light theme: Navy #0D1B2A primary, Accent Blue #1A6B8A section headers,
Gold #C8922A primary CTA, Teal #0F7B6C success states, Coral #C0392B critical alerts.
Card border: #D1D9E3. Background: #F5F6FA section fill. White cards.

Three sub-module tabs within M1: [1.1 Auto-Population] [1.2 Gap Detection] [1.3 Audit Trail]
Default view on 1.1 Auto-Population.

Show:
(1) Top KPI bar: Filings Due (6), Compliance Gaps Open (3 — pulsing coral),
    Auto-Population Accuracy (99.1%), Filings Submitted YTD (47 — gold)
(2) Document upload zone (left 40%): list of 3 uploaded documents with status badges
    (2 × Ready, 1 × Processing — animated spinner)
(3) Prefilled PNGRB Monthly Production Template (right 60%): fields populated in
    light blue highlight — hover any field to show source tooltip
    Progress bar at top: "47/48 fields auto-populated | 1 field needs review"
(4) One flagged field (Field 12F) shown in coral with "Water disposal volume missing"
(5) Gold "Submit for Review" CTA button at bottom right

Sub-module 1.2 tab shows: compliance gap panel with 1 Critical (pulsing red),
2 Advisory (gold), 1 Informational (blue). Overall score: 87%.

Sub-module 1.3 tab shows: filing history table with 6 rows,
status badges (Approved/Revised/Pending), and "Generate Audit Pack" button.

Indian regulatory context — PNGRB, DGH, OISD. Rs. currency. Dates: DD MMM YYYY.
JetBrains Mono for all numbers and field values. React + Tailwind + Recharts.
```

---

## Brand & Design Parameters for M1 UI

### Color Usage

| Element                 | Color                           | Hex                                 |
| ----------------------- | ------------------------------- | ----------------------------------- |
| Page background         | Light off-white                 | #F5F6FA                             |
| Card / panel background | White                           | #FFFFFF                             |
| Primary brand           | Deep navy                       | #0D1B2A                             |
| Section headers         | Accent blue                     | #1A6B8A                             |
| Primary CTA             | Gold                            | #C8922A                             |
| CTA background (light)  | Gold light                      | #FDF3E3                             |
| Success / Teal          | Compliance met, field confirmed | #0F7B6C                             |
| Success background      | Teal light                      | #E3F4F2                             |
| Critical / Danger       | Missing field, critical gap     | #C0392B (pulsing for active alerts) |
| Critical background     | Coral light                     | #FDECEA                             |
| Advisory / Warning      | Amber                           | #C8922A                             |
| Informational           | Accent blue                     | #1A6B8A                             |
| Card border             | Border grey                     | #D1D9E3                             |
| Secondary text          | Muted grey                      | #8892A0                             |

### Typography

| Use Case                              | Font                                 |
| ------------------------------------- | ------------------------------------ |
| Module title, page heading            | DM Serif Display or Playfair Display |
| Body text, labels, descriptions       | DM Sans or Plus Jakarta Sans         |
| All numbers, field values, timestamps | JetBrains Mono                       |

### Key Animations (Demo-Specific)

| Animation                    | Where                   | Description                                               |
| ---------------------------- | ----------------------- | --------------------------------------------------------- |
| Auto-population progress     | 1.1 auto-populate flow  | Progress bar + status labels populate sequentially        |
| Field fill effect            | 1.1 form view           | Fields highlight in light blue as they are populated      |
| Pulsing coral badge          | Critical gaps in 1.2    | Badge pulses every 2 seconds until acknowledged           |
| Source tooltip fade-in       | 1.1 form field hover    | Tooltip fades in with document reference on hover         |
| Confidence colour transition | 1.1 per-field indicator | Field border transitions colour based on confidence score |
| Audit pack generation        | 1.3 audit pack button   | Progress animation — "Compiling... Packaging... Ready"    |
| Alert drop-in                | M1 dashboard panel      | Alert cards drop in from top on new gap detection         |

---

## Technical Integration Map for M1

| Sub-module               | External Systems / APIs                                                         | Data Flow Direction                    |
| ------------------------ | ------------------------------------------------------------------------------- | -------------------------------------- |
| 1.1 Form Auto-Population | DMS (SharePoint / internal), ERP (SAP), OCR pipeline (Tesseract / AWS Textract) | Document → AI extraction → Form        |
| 1.1 Form Auto-Population | Regulatory portal APIs (where available)                                        | Form → Submission portal               |
| 1.2 Gap Detection        | Regulatory knowledge base (internal, auto-updated)                              | Knowledge base → Filing → Gap report   |
| 1.2 Gap Detection        | Email / notification API                                                        | Gap alert → Compliance Manager         |
| 1.3 Audit Trail          | All M1 sub-modules (write-once event log)                                       | All events → Immutable audit log       |
| 1.3 Audit Trail          | Cloud storage (PDF archive)                                                     | Audit pack → Secure archive → Download |

---

## Summary: M1 at a Glance

| Item                 | Detail                                                                 |
| -------------------- | ---------------------------------------------------------------------- |
| Module               | M1 — Regulatory Compliance & Filing Automation                         |
| Sub-modules          | 3 (1.1 → 1.3)                                                          |
| Total pages          | 4 (1 dashboard + 3 sub-module pages)                                   |
| Primary data objects | Auto-populated forms, compliance gap reports, filing audit trails      |
| Regulators covered   | PNGRB · DGH · MoPNG · OISD · DGMS · MoEFCC · CPCB · PESO               |
| Key output           | Submission-ready regulatory forms + gap report + one-click audit pack  |
| Demo focus           | Live form auto-populating from uploaded PDF in 90 seconds              |
| Design tone          | Clean, professional dashboard — light theme, premium, compliance-grade |
| Compliance           | OISD-STD-189 · PNGRB Act 2006 · Petroleum Act 1934 · PSC/RSC templates |
| Currency             | Rs. Indian Rupee — Lakhs (L) and Crores (Cr)                           |
| Date format          | DD MMM YYYY                                                            |
| Language             | English (Indian) — formal regulatory context                           |
| Market context       | [MARKET / REGION] upstream oil and gas operations                      |

---

_[PROJECT_NAME] · Regulatory Compliance Module — M1 Build Guide_
_by [COMPANY_NAME] · [WEBSITE]_
_Version [VERSION] · [PUBLIC / INTERNAL / CONFIDENTIAL]_
