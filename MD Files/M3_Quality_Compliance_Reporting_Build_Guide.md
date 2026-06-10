# M3 — Quality & Compliance Reporting

### Manufacturing AI Command Center · Fortiv Solutions · fortivsolutions.in

> **Module Tagline:** AI processes your existing inspection logs, batch records, and NCR data to auto-generate audit-ready compliance reports and trend analysis — eliminating weeks of manual documentation effort.

**Document Type:** Module Build Guide & Parameter Reference  
**Module Code:** M3  
**Total Sub-Modules:** 7 ( → )  
**Version:** 1.0  
**Company:** Fortiv Solutions  
**Classification:** Confidential  
**Market:** India — Gujarat Focus (Ahmedabad, Rajkot, Vadodara, Surat)

---

## Module Overview

### Purpose

Transform quality management from a paper-heavy, reactive process into a **data-driven, automated system**. AI reads incoming inspection records, NCRs, and test reports — detects quality trends, generates compliance documentation, links customer complaints to root-cause batch data, and ensures your factory is always audit-ready without manual report compilation.

### Core Problem Being Solved

| Pain Point              | Without M3                                                        | With M3                                                                |
| ----------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Inspection data capture | Paper checksheets — filled hours later, illegible, never analysed | Mobile digital forms — real-time, structured, searchable               |
| NCR management          | Manual register, no CAPA tracking, problems recur                 | AI-classified, auto-routed, CAPA tracked to closure                    |
| Batch traceability      | 3–5 days manual search through paper records                      | Forward + backward trace in under 10 seconds                           |
| Compliance reports      | 1–2 weeks manual compilation before every audit                   | Auto-generated on demand — always audit-ready                          |
| SPC monitoring          | No statistical monitoring — defects found after the fact          | Real-time out-of-control detection before defective output accumulates |
| Calibration management  | Instruments used past due date — discovered in audit              | Automated reminders 30/15/3 days before due date                       |
| Customer complaints     | 3–5 days manual investigation                                     | AI links complaint to batch record in minutes                          |

### Demo Wow Moment

**An NCR raised on the shop floor** — AI classifying it, routing it, performing root cause analysis from historical data, and generating a CAPA document — all in under 2 minutes, zero manual entry.

---

## Module-Level Parameters

| Parameter             | Value                                                                                                                                    |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Module ID             | M3                                                                                                                                       |
| Module Name           | Quality & Compliance Reporting                                                                                                           |
| Sub-module Count      | 7                                                                                                                                        |
| Primary Output        | Digital inspection records + NCR register + batch traceability + auto compliance reports + SPC alerts + calibration tracker + 8D reports |
| Primary Users         | QA Manager, QC Inspector, Production HOD, QA Head, MD, Auditors                                                                          |
| Data Sources          | Mobile inspection forms, ERP batch data, biometric/job card data, M8 customer complaints                                                 |
| Systems Integrated    | ERPNext / SAP B1 / custom MES, WhatsApp Business API, email, GST/BIS/ISO template engine                                                 |
| Languages             | English, Hindi, Gujarati                                                                                                                 |
| ERP Integration       | Reads batch/job card/BOM data; writes inspection results, NCR records, CAPA tasks                                                        |
| Compliance            | ISO 9001:2015 · IATF 16949 ready · BIS self-certification · PPAP · DPDP Act 2023 · Gujarat Factories Act                                 |
| Currency Format       | ₹ Indian Rupee — Lakhs (L) and Crores (Cr)                                                                                               |
| Demo Financial Period | FY 2024–25 (Apr 2024 – Mar 2025)                                                                                                         |

---

## Module Pages & Navigation Structure

```
M3 — Quality & Compliance Reporting
│
├── [Page 1]  Module Dashboard / Overview              ← Landing page for M3
│             (Quality KPIs, NCR live feed, inspection pass rate, calibration status)
│
├── [Page]  Inspection Data Capture & Digitisation
│             (Mobile form builder, live inspection feed, out-of-spec alert panel)
│
├── [Page]  NCR Management Agent
│             (NCR inbox, AI classification panel, CAPA tracker, monthly Pareto)
│
├── [Page]  Batch Record & Traceability Engine
│             (Batch record card, traceability tree, forward/backward trace query)
│
├── [Page]  Auto-Generated Compliance Reports
│             (Report template library, generation panel, PDF preview, archive)
│
├── [Page]  SPC (Statistical Process Control) Monitor
│             (Control charts per CTQ, out-of-control alerts, Cp/Cpk dashboard)
│
├── [Page]  Calibration Management Agent
│             (Instrument register, due date tracker, certificate archive, hold alerts)
│
└── [Page]  Customer Complaint Quality Linkage
              (Complaint-to-batch link, 8D report generator, systemic risk tracker)
```

---

## Page 1 — Module Dashboard (M3 Overview)

### Purpose

The landing screen for Module 3. Gives the QA Manager and Production Head a live view of the factory's quality health — inspection pass rates, open NCRs, active SPC alerts, calibration compliance, and open customer complaints — in one screen.

### Layout

- **Top Stats Bar** (5 KPI cards across)
- **Centre Left:** Inspection pass rate trend chart (last 30 days, by line)
- **Centre Right:** Open NCR summary by severity + CAPA overdue count
- **Right Panel:** Live alert feed — SPC out-of-control signals + calibration overdue
- **Bottom:** Quick-access tiles to each sub-module ( → )

### KPI Cards (Top Stats Bar)

| Card                     | Metric                                    | Mock Value | Color                        |
| ------------------------ | ----------------------------------------- | ---------- | ---------------------------- |
| Inspection Pass Rate     | % lots passed final inspection this month | 9%         | Success Green #1D9E75        |
| Open NCRs                | Active non-conformance reports            | 12         | Warning Amber #E8A838        |
| CAPA Overdue             | CAPAs past their due date                 | 3          | Danger Red #D85A30 (pulsing) |
| Calibration Compliance   | % instruments calibrated on time          | 87.5%      | Warning Amber #E8A838        |
| Customer Complaints Open | Active complaints from M8                 | 4          | Danger Red #D85A30           |

### Inspection Pass Rate Trend Chart

Recharts line chart — 30 days × pass rate % per production line:

| Line             | This Month Pass Rate | Trend                            |
| ---------------- | -------------------- | -------------------------------- |
| CNC Line 1       | 9%                   | ↓ Declining (was 96% last month) |
| Assembly Line 2  | 97.8%                | → Stable                         |
| Stamping Line 3  | 9%                   | ↑ Improving                      |
| Welding Line 4   | 9%                   | → Stable                         |
| Painting Line 5  | 9%                   | → Stable                         |
| Dispatch Packing | 99.1%                | ↑ Improving                      |

### Open NCR Summary Panel

| Severity  | Count  | Avg Age (Days) | CAPA Overdue |
| --------- | ------ | -------------- | ------------ |
| Critical  | 1      | 2 days         | 0            |
| Major     | 4      | 6 days         | 2            |
| Minor     | 7      | 12 days        | 1            |
| **Total** | **12** | **9 days avg** | **3**        |

### Live Alert Feed (Right Panel — Top 5 Alerts)

| #   | Alert                                                    | Source      | Severity    | Action           |
| --- | -------------------------------------------------------- | ----------- | ----------- | ---------------- |
| 1   | SPC ALERT: Wall Thickness — Line 2, 2 pts above UCL      | SPC         | 🔴 CRITICAL | \"View Chart\"   |
| 2   | Calibration OVERDUE: Micrometer VN-204 — 4 days past due | Calibration | 🔴 HIGH     | \"Schedule Now\" |
| 3   | NCR-2024-441 CAPA overdue by 2 days — Vijay Sharma       | NCR         | 🔴 HIGH     | \"Escalate\"     |
| 4   | Customer Complaint CMP-2024-441 — 8D draft pending       | Complaint   | 🟡 MEDIUM   | \"Open 8D\"      |
| 5   | Reject rate CNC Line 1 — above 8% this week (was 4%)     | Inspection  | 🟡 MEDIUM   | \"Investigate\"  |

### Sub-Module Quick Access Tiles (Bottom Row)

Seven clickable tiles, each showing:

- Sub-module number + name
- One-line description
- Status indicator (Active / Setup Required)
- Key stat today (inspections logged / NCRs open / instruments due)

---

## Page 2 — Submodule: Inspection Data Capture & Digitisation

### What It Is

A digital inspection data capture system that replaces paper QC checksheets with mobile-friendly digital forms — feeding structured inspection data into the quality analytics engine in real time, accessible from any smartphone on the shop floor.

### Inspection Form Fields Per Inspection Record

| Field                    | Description                        | Mock Example                                                                                 |
| ------------------------ | ---------------------------------- | -------------------------------------------------------------------------------------------- |
| `inspection_id`          | Auto-generated record ID           | INS-2024-8841                                                                                |
| `batch_number`           | Production batch                   | B-4821                                                                                       |
| `job_card_number`        | Linked job card                    | JC-4821                                                                                      |
| `product_code`           | Item being inspected               | MS-204                                                                                       |
| `product_description`    | Full product name                  | MS Sheet Component 204                                                                       |
| `inspection_stage`       | When in the process                | Final Inspection                                                                             |
| `inspection_date`        | Date of inspection                 | 24 Jan 2025                                                                                  |
| `inspection_time`        | Time stamp                         | 14:22                                                                                        |
| `inspector_id`           | Inspector employee code            | EMP-0891                                                                                     |
| `inspector_name`         | Inspector name                     | Suresh Nair                                                                                  |
| `line_id`                | Production line                    | CNC Line 1                                                                                   |
| `lot_quantity`           | Total units in lot                 | 1,000                                                                                        |
| `sample_size`            | Units inspected                    | 80 (AQL 1.0 Level II)                                                                        |
| `defects_found`          | Count of defective units in sample | 7                                                                                            |
| `defect_rate_pct`        | Defects ÷ sample size              | 8.75%                                                                                        |
| `accept_reject_decision` | Pass/Fail                          | REJECT                                                                                       |
| `rejection_reason`       | Primary defect type                | Surface Finish — Scratches                                                                   |
| `rejected_quantity`      | Units rejected                     | 1,000 (full lot hold)                                                                        |
| `accepted_quantity`      | Units cleared                      | 0                                                                                            |
| `measurement_readings`   | CTQ measurement data (JSON)        | [{param: \"Wall Thickness\", nominal: 3.00, actual: 4, usl: 0, lsl: 2.80, result: \"FAIL\"}] |
| `attachments`            | Photos of defects                  | 2 photos attached                                                                            |
| `remarks`                | Inspector notes                    | \"Scratches concentrated on one face — possibly fixture issue\"                              |
| `supervisor_notified`    | Alert sent                         | ✓ WhatsApp sent to Mahesh Kapoor                                                             |

### Inspection Stage Types

| Stage             | Trigger                      | Sample Basis            | Who Inspects         |
| ----------------- | ---------------------------- | ----------------------- | -------------------- |
| Incoming (IQC)    | Material received at stores  | AQL sampling per lot    | QC Inspector         |
| In-Process (IPQC) | Every N-th unit / time-based | Defined per product SOP | Line QC / Supervisor |
| Final (FQC)       | Production batch complete    | AQL sampling per lot    | Senior QC Inspector  |
| Pre-Dispatch      | Before loading               | 100% visual or AQL      | QC + Dispatch team   |
| Customer-Specific | On customer request          | As specified            | QA Manager level     |

### Out-of-Spec Alert Rules

| Condition                                  | Alert Type                                  | Sent To                        |
| ------------------------------------------ | ------------------------------------------- | ------------------------------ |
| Single reading outside spec limits         | In-form highlight — inspector must confirm  | Inspector                      |
| Lot rejected at final inspection           | WhatsApp alert to Production Head + QA Head | Mahesh Kapoor + Sunita Patel   |
| Rejection rate >5% this shift on any line  | WhatsApp to QA Manager                      | Sunita Patel                   |
| Same defect type 3× in 7 days on same line | Escalation alert — potential systemic issue | QA Head + Production Head      |
| Incoming lot rejected (IQC fail)           | Alert to Procurement Officer + Stores       | Harish Solanki + Bhavesh Patel |

### Page Layout

**Top Control Bar:** Line filter + inspection stage filter + date range + \"Start New Inspection\" button  
**Main Area (Left 60%):** Live inspection feed — chronological list of all inspections today with pass/reject badge  
**Right Panel (40%):** Selected inspection expanded — full measurement table + photos + out-of-spec highlights  
**Bottom:** Daily inspection summary stats — total lots inspected / passed / rejected / rejection rate by line

### Mock Demo Data — Today's Inspection Feed (22 Jan 2025, 14 records)

| #   | Inspection ID | Batch            | Product | Stage        | Line       | Qty        | Result    | Defect Type                      |
| --- | ------------- | ---------------- | ------- | ------------ | ---------- | ---------- | --------- | -------------------------------- |
| 1   | INS-2024-8841 | B-4821           | MS-204  | Final        | CNC Line 1 | 1,000      | 🔴 REJECT | Surface — Scratches              |
| 2   | INS-2024-8842 | B-4820           | MS-208  | Final        | CNC Line 1 | 800        | ✅ PASS   | —                                |
| 3   | INS-2024-8843 | B-4815           | PC-112  | Final        | Assembly 2 | 500        | ✅ PASS   | —                                |
| 4   | INS-2024-8844 | RM-CRCA- Lot#441 | CRCA mm | Incoming     | Stores     | 3,000 kg   | ✅ PASS   | —                                |
| 5   | INS-2024-8845 | B-4822           | SP-044  | In-Process   | Stamping 3 | 200 (IPQC) | ✅ PASS   | —                                |
| 6   | INS-2024-8846 | B-4818           | MS-212  | Final        | CNC Line 1 | 400        | 🟡 HOLD   | Dimensional — 3 units borderline |
| 7   | INS-2024-8847 | B-4819           | PC-118  | Final        | Assembly 2 | 900        | ✅ PASS   | —                                |
| 8   | INS-2024-8848 | B-4816           | MS-204  | Pre-Dispatch | Dispatch   | 800        | ✅ PASS   | —                                |

### Inspection Detail Expanded View (INS-2024-8841 — REJECTED)

```
BATCH B-4821 | MS-204 | Final Inspection | 24 Jan 2025 14:22
Inspector: Suresh Nair | CNC Line 1 | 1,000 units

MEASUREMENT RESULTS:
Parameter          Nominal   LSL    USL    Reading   Result
Wall Thickness     3.00mm    2.80   0   4mm    ❌ FAIL (above USL)
Component Length   85.00mm   80  80  80mm   ✅ PASS
Hole Diameter      12.00mm   11.90  10  12.04mm   ✅ PASS
Surface Finish     Ra     —      Ra  Ra     ❌ FAIL (above limit)
Edge Chamfer       0.5mm     0.3    0.7    0.52mm    ✅ PASS

DECISION: REJECT — 2 parameters out of spec
REJECTION REASON: Surface Finish (scratches) + Wall Thickness above USL
LOT STATUS: Full lot HOLD (1,000 units) — NCR raised automatically

[View Photos (2)] [Raise NCR] [Escalate to QA Head] [Release for Rework]
```

### Mobile Inspection Form (Demo View)

```
📱 INSPECTION FORM — FORTIV QMS
Batch: B-4821 | MS-204 | Final Inspection
Scanned from: QR code on Job Card JC-4821

MEASUREMENT ENTRY:
Wall Thickness: [4] mm ← ⚠️ ABOVE USL (0)
Component Length: [80] mm ✓
Hole Diameter: [12.04] mm ✓
Surface Finish Ra: [] ← ⚠️ ABOVE LIMIT ()
Edge Chamfer: [0.52] mm ✓

DEFECTS FOUND IN SAMPLE: [7] of 80 units

[📷 Add Photo] [Submit Inspection]
```

### Key UI Elements

- **Mobile form with QR scan** — inspector scans batch QR → form auto-fills product + spec limits
- **Out-of-spec red highlight** — field turns red instantly when value exceeds limit, with LSL/USL shown
- **Auto NCR trigger** — rejected lots generate NCR draft automatically (linked to )
- **Offline mode indicator** — shows \"Offline — 3 inspections queued\" when connectivity lost
- **Line rejection rate ticker** — live percentage updating with each new inspection submission

### Why It Matters

Paper QC checksheets are completed hours after inspection, entries are illegible or incomplete, and data is never analysed because it is locked in physical registers. Digital capture creates a real-time, searchable, analysable quality record from day one.

---

## Page 3 — Submodule: NCR (Non-Conformance Report) Management Agent

### What It Is

An AI-powered NCR management system that captures, classifies, routes, and tracks every non-conformance report from creation to closure — replacing the manual NCR register and disconnected email chains.

### NCR Record Fields

| Field                          | Description                | Mock Example                                               |
| ------------------------------ | -------------------------- | ---------------------------------------------------------- |
| `ncr_id`                       | NCR reference number       | NCR-2024-441                                               |
| `ncr_date`                     | Date raised                | 22 Jan 2025                                                |
| `source`                       | How NCR was raised         | Auto-triggered from INS-2024-8841                          |
| `product_code`                 | Non-conforming product     | MS-204                                                     |
| `batch_number`                 | Affected batch             | B-4821                                                     |
| `job_card_number`              | Linked job card            | JC-4821                                                    |
| `defect_description`           | Raw description entered    | \"Scratches on face + wall thickness 4mm vs spec 0mm max\" |
| `ai_defect_type`               | AI classification          | Surface Finish                                             |
| `ai_defect_sub_type`           | AI sub-classification      | Mechanical Scratch                                         |
| `ai_classification_confidence` | Model confidence %         | 94%                                                        |
| `detected_at`                  | Stage of detection         | Final Inspection                                           |
| `quantity_affected`            | Units non-conforming       | 1,000                                                      |
| `severity`                     | AI severity score          | Major                                                      |
| `severity_rationale`           | Why this severity          | Quantity 1,000 + customer order affected                   |
| `routed_to_dept`               | Auto-routed department     | Production — CNC Line 1                                    |
| `routed_to_person`             | Assigned owner             | Deepak Trivedi (Planning Manager)                          |
| `routing_reason`               | Why this department        | Process defect — production responsible                    |
| `capa_assigned_to`             | CAPA task owner            | Vijay Sharma — CNC Supervisor                              |
| `capa_due_date`                | CAPA completion deadline   | 25 Jan 2025                                                |
| `capa_status`                  | Current CAPA stage         | Root Cause Under Investigation                             |
| `immediate_action`             | Containment taken          | Full lot segregated — rework ordered                       |
| `root_cause`                   | Identified root cause      | Worn fixture pad causing vibration — surface scratch       |
| `corrective_action`            | Fix implemented            | Fixture pad replaced (Tool Store ref: TS-441)              |
| `preventive_action`            | Process change             | Add fixture inspection to daily pre-shift checklist        |
| `effectiveness_check_date`     | When to verify CAPA worked | 5 Feb 2025                                                 |
| `ncr_status`                   | Current status             | Open — CAPA In Progress                                    |
| `days_open`                    | Days since NCR raised      | 2                                                          |
| `closure_date`                 | When NCR was closed        | —                                                          |

### AI Classification Taxonomy

| Level 1           | Level 2 Sub-types                                              |
| ----------------- | -------------------------------------------------------------- |
| Dimensional       | Oversize / Undersize / Profile deviation / Hole position       |
| Surface Finish    | Mechanical scratch / Rust / Burr / Porosity / Paint defect     |
| Functional        | Assembly fit failure / Strength failure / Leakage / Electrical |
| Material          | Wrong grade / Hardness failure / Composition deviation         |
| Documentation     | Missing test cert / Wrong certificate / Label error            |
| Packaging         | Damage in transit / Wrong packing / Qty mismatch               |
| Incoming (Vendor) | Vendor non-conformance — routed to procurement                 |

### Severity Scoring Matrix

| Score    | Severity                                                          | Criteria              | CAPA SLA        |
| -------- | ----------------------------------------------------------------- | --------------------- | --------------- |
| Critical | Production line stopped OR customer field failure OR >5,000 units | 24 hr CAPA initiation | 7 days closure  |
| Major    | >500 units OR customer order affected OR export shipment          | 48 hr CAPA initiation | 14 days closure |
| Minor    | <500 units, in-house detection, no customer impact                | 72 hr CAPA initiation | 30 days closure |

### CAPA Escalation Rules

| Rule                     | Trigger                                             | Escalation Action                              |
| ------------------------ | --------------------------------------------------- | ---------------------------------------------- |
| CAPA not initiated       | Critical: >24 hrs / Major: >48 hrs / Minor: >72 hrs | WhatsApp to QA Head                            |
| CAPA past due date       | Any severity                                        | WhatsApp to QA Head + Production HOD           |
| CAPA overdue >3 days     | Any severity                                        | Escalation to MD                               |
| Same defect recurring    | 3+ NCRs same defect type in 30 days                 | \"Systemic Quality Risk\" flag to QA Head + MD |
| Effectiveness check fail | CAPA verified but defect recurred                   | CAPA re-opened + severity upgraded             |

### Page Layout

**Top Stats Row:** Open NCRs (12) | Critical (1) | Major (4) | Minor (7) | CAPA Overdue (3)  
**Left Panel (40%):** NCR inbox — all open NCRs listed with severity badge, age, and CAPA status  
**Centre (60%):** Selected NCR detail — full timeline from raise to current status  
**Bottom:** Monthly NCR Pareto chart — defect type frequency + 6-month trend

### Mock Demo Data — Open NCR Register (12 Active NCRs)

| #   | NCR ID       | Product | Batch   | Defect Type            | Severity    | Age     | Assigned To    | CAPA Status                 |
| --- | ------------ | ------- | ------- | ---------------------- | ----------- | ------- | -------------- | --------------------------- |
| 1   | NCR-2024-441 | MS-204  | B-4821  | Surface — Scratch      | 🔴 Major    | 2 days  | Vijay Sharma   | In Progress                 |
| 2   | NCR-2024-438 | MS-208  | B-4809  | Dimensional — Oversize | 🔴 Major    | 5 days  | Arun Patel     | Root Cause Pending          |
| 3   | NCR-2024-435 | PC-112  | B-4801  | Surface — Burr         | 🟡 Minor    | 8 days  | Priya Mehta    | Corrective Action Done      |
| 4   | NCR-2024-431 | SP-044  | B-4795  | Surface — Scratch      | 🔴 Major    | 12 days | Vijay Sharma   | ⚠️ CAPA Overdue (2 days)    |
| 5   | NCR-2024-428 | MS-212  | B-4788  | Dimensional — Profile  | 🔴 Major    | 14 days | Arun Patel     | ⚠️ CAPA Overdue (1 day)     |
| 6   | NCR-2024-422 | PC-118  | B-4780  | Documentation          | 🟡 Minor    | 18 days | Suresh Nair    | Awaiting Sign-off           |
| 7   | NCR-2024-419 | MS-204  | B-4774  | Surface — Paint        | 🟡 Minor    | 21 days | Deepak Joshi   | Corrective Action Done      |
| 8   | NCR-2024-412 | RM-CRCA | Lot-441 | Incoming — Vendor      | 🔴 Major    | 28 days | Harish Solanki | Vendor Response Pending     |
| 9   | NCR-2024-408 | MS-208  | B-4765  | Surface — Rust         | 🟡 Minor    | 30 days | Priya Mehta    | Effectiveness Check Pending |
| 10  | NCR-2024-401 | SP-044  | B-4758  | Functional — Fit       | 🔴 Critical | 34 days | Mahesh Kapoor  | ⚠️ CAPA Overdue (3 days)    |
| 11  | NCR-2024-398 | MS-204  | B-4752  | Surface — Scratch      | 🟡 Minor    | 36 days | Vijay Sharma   | Near Closure                |
| 12  | NCR-2024-391 | PC-112  | B-4744  | Packaging — Damage     | 🟡 Minor    | 41 days | Bhavesh Patel  | Awaiting Evidence           |

### NCR Detail Panel + CAPA Timeline (NCR-2024-441)

```
NCR-2024-441 | MS-204 | Batch B-4821 | MAJOR
Raised: 22 Jan 2025 14:38 | Age: 2 days | Assigned: Vijay Sharma (CNC Supervisor)

AI CLASSIFICATION (94% confidence):
  Defect Type:   Surface Finish → Mechanical Scratch
  Detected At:   Final Inspection (INS-2024-8841)
  Qty Affected:  1,000 units (full lot)
  Severity:      MAJOR — customer order impacted (SO-2024-4821, Kapoor Industries)

IMMEDIATE CONTAINMENT:
  ✓ Full lot segregated in Hold Area B — 22 Jan 14:45
  ✓ Production Head notified — 22 Jan 14:40

CAPA TIMELINE:
  22 Jan 14:38  NCR raised (auto-triggered from inspection)
  22 Jan 14:40  Routed to Vijay Sharma — CAPA due 25 Jan
  22 Jan 16:15  Root cause investigation started
  23 Jan 10:22  ROOT CAUSE IDENTIFIED: Worn fixture pad on CNC-01
                causing micro-vibration → surface scratches
  23 Jan 14:00  CORRECTIVE ACTION: Fixture pad replaced (TS-441)
  [PENDING]     Preventive action — add fixture check to pre-shift
  [PENDING]     Effectiveness verification — due 5 Feb

SIMILAR NCRs IN LAST 90 DAYS:
  NCR-2024-431: MS SP-044, Surface Scratch (12 days ago) — same line
  NCR-2024-398: MS-204, Surface Scratch (36 days ago) — same line
  ⚠️ 3 scratch NCRs on CNC Line 1 in 90 days — SYSTEMIC RISK FLAG

[Close NCR] [Escalate] [View Linked Batch Record] [Export 8D Report]
```

### Monthly NCR Pareto Data (Jan 2025)

| Defect Type     | Count | % of Total | Cumulative % |
| --------------- | ----- | ---------- | ------------ |
| Surface Finish  | 5     | 4%         | 4%           |
| Dimensional     | 3     | 25.0%      | 66.7%        |
| Incoming Vendor | 2     | 16.7%      | 8%           |
| Functional      | 1     | %          | 9%           |
| Documentation   | 1     | %          | 100%         |

### Key UI Elements

- **AI classification badge** — defect type shown with confidence %, appears within 4 seconds of NCR creation
- **CAPA countdown timer** — \"Due in 1 day 14 hrs\" or \"⚠️ Overdue 2 days\" in pulsing red
- **Systemic risk flag** — yellow banner when 3+ NCRs share the same defect type in 30 days
- **NCR-to-inspection link** — \"View source inspection\" jumps to the triggering record in
- **Pareto chart** — Recharts bar + line combo, filterable by month and production line

### Why It Matters

Most factory NCR registers are filled in retrospect and never analysed. Unresolved NCRs recur indefinitely because CAPAs are not tracked. This system ensures every quality problem has an owner, a deadline, and a closure record.

---

## Page 4 — Submodule: Batch Record & Traceability Engine

### What It Is

A digital batch record system that maintains complete forward and backward traceability for every manufactured batch — linking raw material lots, process parameters, equipment used, operator ID, inspection results, and dispatch details into a single searchable record.

### Batch Record Fields (Complete)

| Field                      | Description                       | Mock Example                                                         |
| -------------------------- | --------------------------------- | -------------------------------------------------------------------- |
| `batch_number`             | Unique batch identifier           | B-4821                                                               |
| `batch_created_at`         | When batch record was opened      | 22 Jan 2025, 06:10 AM                                                |
| `product_code`             | Item manufactured                 | MS-204                                                               |
| `product_description`      | Product name                      | MS Sheet Component 204                                               |
| `sales_order_ref`          | Customer order this batch fulfils | SO-2024-4821                                                         |
| `customer_name`            | End customer                      | Kapoor Industries Pvt. Ltd.                                          |
| `planned_quantity`         | Planned production                | 1,000 units                                                          |
| `actual_quantity_produced` | Actual output                     | 1,000 units                                                          |
| `production_line`          | Line used                         | CNC Line 1                                                           |
| `shift`                    | Shift of production               | Morning (6 AM – 2 PM)                                                |
| `operator_name`            | Primary operator                  | Ramesh Kumar                                                         |
| `supervisor_name`          | Shift supervisor                  | Vijay Sharma                                                         |
| `rm_lot_1`                 | Raw material lot 1                | CRCA mm — Lot RM-2024-441 (Mehta Steel Works, GRN-2024-441)          |
| `rm_lot_1_qty`             | RM consumed                       | 2,500 kg                                                             |
| `rm_lot_2`                 | Raw material lot 2                | Zinc Coating Powder — Lot RM-2024-388 (Shah Chemicals, GRN-2024-388) |
| `rm_lot_2_qty`             | RM consumed                       | 750 kg                                                               |
| `machine_id`               | Primary machine used              | CNC-01                                                               |
| `machine_program`          | CNC programme reference           | PRG-MS204-V                                                          |
| `process_param_1`          | Process parameter 1               | Spindle Speed: 2,800 RPM                                             |
| `process_param_2`          | Process parameter 2               | Feed Rate: 0.18 mm/rev                                               |
| `process_param_3`          | Process parameter 3               | Cutting Depth: mm                                                    |
| `ipqc_inspection_ref`      | In-process inspection record      | INS-2024-8831 (Pass)                                                 |
| `fqc_inspection_ref`       | Final inspection record           | INS-2024-8841 (Reject — Rework)                                      |
| `inspection_result`        | Overall batch QC decision         | Rework Required                                                      |
| `rework_details`           | If rework done                    | 1,000 units reworked — fixture replaced                              |
| `post_rework_inspection`   | After rework inspection           | INS-2024-8862 (Pass — 24 Jan)                                        |
| `qc_release_date`          | When QC cleared the batch         | 24 Jan 2025                                                          |
| `dispatch_challan`         | Delivery challan                  | DC-2025-0441                                                         |
| `dispatch_date`            | Date dispatched                   | 26 Jan 2025                                                          |
| `transporter`              | Logistics partner                 | Saurashtra Transport                                                 |
| `lr_number`                | Lorry receipt number              | TM24-88744                                                           |
| `delivery_confirmed_date`  | When customer confirmed receipt   | 28 Jan 2025                                                          |
| `ncr_linked`               | NCR raised on this batch          | NCR-2024-441                                                         |
| `complaint_linked`         | Customer complaint linked         | — (none)                                                             |

### Traceability Query Types

| Query Type                    | Example Input                                                  | Output                                            |
| ----------------------------- | -------------------------------------------------------------- | ------------------------------------------------- |
| Forward trace from RM lot     | \"Which customers received material from RM Lot RM-2024-441?\" | All batches → delivery challans → customers       |
| Backward trace from batch     | \"Show all inputs for Batch B-4821\"                           | RM lots + machine + operator + inspection records |
| Backward trace from complaint | \"CMP-2024-441 — trace Batch B-4821\"                          | Full batch record + all RM lots + process data    |
| Cross-batch lot contamination | \"Which other batches used RM Lot RM-2024-441?\"               | All batches that consumed this RM lot             |
| Operator trace                | \"All batches produced by Ramesh Kumar in Jan\"                | All batch records for operator                    |
| Machine trace                 | \"All batches on CNC-01 where spindle speed >3,000 RPM\"       | Filtered batch records by process parameter       |

### Traceability Tree Structure (Batch B-4821)

```
                    BATCH B-4821 (MS-204, 1,000 units)
                           │
          ┌────────────────┼────────────────────────────────────┐
          │                │                                    │
    RAW MATERIALS    PROCESS / MACHINE              QUALITY RECORDS
          │                │                                    │
  RM-2024-441        CNC-01 Machine            INS-2024-8831 (IPQC — Pass)
  CRCA mm         PRG-MS204-V            INS-2024-8841 (FQC — Reject)
  2,500 kg           Ramesh Kumar              NCR-2024-441 (Surface Scratch)
  Mehta Steel        22 Jan, Morning           INS-2024-8862 (Post-Rework — Pass)
  GRN-2024-441       2,800 RPM                 QC Release: 24 Jan
          │
  RM-2024-388             │
  Zinc Powder        DISPATCH RECORD
  750 kg             DC-2025-0441
  Shah Chemicals     LR: TM24-88744
  GRN-2024-388       Saurashtra Transport
                     Delivered: 28 Jan
                     Customer: Kapoor Industries
```

### Page Layout

**Top Control Bar:** Search box (\"Enter batch number, RM lot, customer name, or complaint ID\") + trace type selector (Forward / Backward / Cross-batch)  
**Centre (65%):** Traceability tree diagram — interactive node-link diagram, click any node to expand  
**Right Panel (35%):** Selected node detail — full record for clicked item  
**Bottom:** Batch register table — all batches this month, filterable by product / line / date / QC result

### Mock Demo Data — Batch Register (Jan 2025, Recent 10)

| Batch  | Product | Customer           | Line       | Produced | Qty   | QC Result              | Dispatched |
| ------ | ------- | ------------------ | ---------- | -------- | ----- | ---------------------- | ---------- |
| B-4828 | SP-044  | Reliance Consumer  | Stamping 3 | 24 Jan   | 1,200 | ✅ Pass                | Pending    |
| B-4827 | MS-212  | Ashok Leyland      | CNC Line 1 | 24 Jan   | 400   | ✅ Pass                | Pending    |
| B-4821 | MS-204  | Kapoor Industries  | CNC Line 1 | 22 Jan   | 1,000 | ✅ Pass (after rework) | 26 Jan     |
| B-4820 | MS-208  | Tata AutoComp      | CNC Line 1 | 22 Jan   | 500   | ✅ Pass                | 25 Jan     |
| B-4819 | PC-112  | Maruti Ancillaries | Assembly 2 | 21 Jan   | 800   | ✅ Pass                | 24 Jan     |
| B-4818 | MS-212  | Ashok Leyland      | CNC Line 1 | 21 Jan   | 400   | 🟡 Hold                | Pending    |
| B-4817 | PC-118  | Bajaj Auto         | Assembly 2 | 20 Jan   | 900   | ✅ Pass                | 23 Jan     |
| B-4816 | MS-204  | Kapoor Industries  | CNC Line 1 | 20 Jan   | 800   | ✅ Pass                | 22 Jan     |
| B-4815 | SP-044  | Reliance Consumer  | Stamping 3 | 19 Jan   | 1,200 | ✅ Pass                | 22 Jan     |
| B-4809 | MS-208  | Tata AutoComp      | CNC Line 1 | 18 Jan   | 2,000 | 🔴 NCR                 | Rework     |

### Trace Result Panel (\"Which customers received RM Lot RM-2024-441?\")

```
FORWARD TRACE: RM Lot RM-2024-441 (CRCA Sheet mm, Mehta Steel Works)

TRACE COMPLETED IN 6 SECONDS

BATCHES USING THIS LOT:
  B-4821  MS-204   1,000 units → Kapoor Industries   Dispatched 26 Jan  (NCR linked)
  B-4816  MS-204     800 units → Kapoor Industries   Dispatched 22 Jan  No NCR
  B-4820  MS-208     500 units → Tata AutoComp       Dispatched 25 Jan  No NCR

CUSTOMERS AFFECTED (if recall needed): 2 customers, 3 batches, 2,300 units

RECOMMENDATION: Batch B-4821 has NCR-2024-441 (surface scratch). Verify Batches B-4816
and B-4820 did not exhibit same issue.

[Export Trace Report] [Raise NCR on Affected Batches] [Notify Customers]
```

### Key UI Elements

- **Trace search bar** — accepts batch number, RM lot, complaint ID, or customer name
- **Interactive tree diagram** — built in D3 / Recharts tree layout — nodes expand on click
- **6-second trace badge** — \"Trace completed in 6 seconds\" shown on result
- **Recall readiness button** — \"If recall required: 3 batches, 2 customers — Export recall list\"
- **Batch QR codes** — each batch record has a QR code for shop floor scanning

### Why It Matters

When a customer raises a quality complaint or a product recall is necessary, most manufacturers spend 3–5 days manually tracing the affected batches through paper records. Digital traceability cuts this to minutes — and is mandatory for exports, automotive, pharma, and FMCG customers.

---

## Page 5 — Submodule: Auto-Generated Compliance Reports

### What It Is

An AI report generation agent that automatically compiles inspection data, test results, NCR summaries, and CAPA status into formatted compliance reports — ready for internal audits, customer audits, BIS, ISO, and regulatory inspections — without any manual document preparation.

### Report Template Library

| Report Type                              | Standard                 | Frequency           | Pages | Auto-Send To                 |
| ---------------------------------------- | ------------------------ | ------------------- | ----- | ---------------------------- |
| ISO 9001 Management Review               | ISO 9001:2015 Clause 9.3 | Monthly / Quarterly | 10–14 | QA Head, MD                  |
| IATF 16949 Process Audit Report          | IATF 16949:2016          | On demand           | 8–12  | Customer QA, QA Head         |
| BIS Self-Certification Monthly           | BIS scheme requirements  | Monthly             | 4–6   | QA Head                      |
| Customer PPAP (Production Part Approval) | AIAG PPAP Level 3        | On demand           | 15–20 | Customer                     |
| NCR Monthly Summary                      | Internal                 | Monthly             | 4–6   | QA Head, Production Head, MD |
| CAPA Status Report                       | Internal                 | Weekly              | 3–5   | QA Head, Production HODs     |
| Calibration Compliance Report            | ISO 9001 Clause .5       | Monthly             | 3–4   | QA Head                      |
| Incoming Quality (IQC) Report            | Internal                 | Monthly             | 4–5   | QA Head, Purchase Manager    |
| Customer Complaint Summary               | Internal + Customer      | Monthly             | 4–6   | MD, QA Head, Sales Head      |
| SPC Monthly Review                       | Internal                 | Monthly             | 6–8   | QA Head, Production Head     |

### Report Output Fields (Per Report)

| Field               | Description                  | Mock Example                             |
| ------------------- | ---------------------------- | ---------------------------------------- |
| `report_id`         | Unique report reference      | RPT-2024-ISO-JAN                         |
| `report_type`       | Template type                | ISO 9001 Management Review               |
| `report_period`     | Reporting period             | January 2025                             |
| `generated_at`      | Auto-generation timestamp    | 31 Jan 2025, 23:58                       |
| `generated_by`      | System / triggered by        | Fortiv Manufacturing AI (auto-scheduled) |
| `data_sources`      | Sub-modules data pulled from | M, M, M, M, M, M                         |
| `pages`             | Report page count            | 12 pages                                 |
| `status`            | Draft / Approved / Issued    | Draft — pending QA Head review           |
| `review_sent_to`    | Draft sent to                | Sunita Patel (QA Head)                   |
| `approved_by`       | Sign-off name                | —                                        |
| `issued_at`         | Final issue timestamp        | —                                        |
| `recipients`        | Distribution list            | MD, Production Head, Customer QA (PPAP)  |
| `archive_url`       | Stored PDF link              | /reports/RPT-2024-ISO-JAN.pdf            |
| `document_revision` | Version number               | Rev 01                                   |

### Auto-Population Data Points (ISO 9001 Management Review — Jan 2025)

| Report Section         | Auto-Populated Value                                                       |
| ---------------------- | -------------------------------------------------------------------------- |
| Inspection Pass Rate   | 9% (Line-wise breakdown)                                                   |
| NCRs Raised            | 12 (5 Surface / 3 Dimensional / 2 Vendor / 1 Functional / 1 Documentation) |
| CAPA Closure Rate      | 72% (18 of 25 CAPAs closed on time)                                        |
| Customer Complaints    | 4 open / 8 closed this month                                               |
| Calibration Compliance | 87.5% (21 of 24 instruments on time)                                       |
| Defect Rate Trend      | -0.8% vs December (improving)                                              |
| OEE Quality Component  | Avg 9% across 6 lines                                                      |
| On-Time Delivery       | 87%                                                                        |
| Process Capability     | Cp ≥3 on 7 of 10 CTQs                                                      |
| Top Systemic Risk      | Surface Finish — 3 NCRs in 90 days on CNC Line 1                           |

### Approval Workflow

| Step | Action                                          | Who                | Timing             |
| ---- | ----------------------------------------------- | ------------------ | ------------------ |
| 1    | AI compiles report from all data sources        | Automated          | Night of month-end |
| 2    | Draft sent to QA Head for review                | System             | 7:00 AM on 1st     |
| 3    | QA Head reviews — one-click \"Approve & Issue\" | QA Head            | By 9:00 AM         |
| 4    | Report issued to all recipients                 | System             | On approval        |
| 5    | Auto-send if no action by 10:00 AM              | Automated fallback | 10:00 AM 1st       |

### Page Layout

**Top:** Report schedule status — \"Next auto-report: ISO Management Review — 1 Feb at 8:00 AM\"  
**Left Panel (35%):** Template library — all 10 report types with last generated date and schedule  
**Centre (65%):** Report preview — page thumbnail carousel for selected report  
**Right Drawer:** Recipient list + revision history + distribution archive  
**Bottom:** \"Generate Now\" button + \"Send Test Report\" button

### Mock Demo Data — Report Archive (Last 6 Reports)

| Report                        | Period    | Generated    | Pages | Status               | Sent To            |
| ----------------------------- | --------- | ------------ | ----- | -------------------- | ------------------ |
| ISO 9001 Management Review    | Jan 2025  | 31 Jan 23:58 | 12    | ✅ Approved & Issued | MD, QA Head, HODs  |
| NCR Monthly Summary           | Jan 2025  | 31 Jan 23:59 | 5     | ✅ Issued            | QA Head, Prod Head |
| CAPA Status Report            | W3 Jan    | 19 Jan 08:00 | 4     | ✅ Issued            | QA Head, HODs      |
| Calibration Compliance        | Jan 2025  | 1 Feb 08:00  | 3     | ✅ Issued            | QA Head            |
| Customer Complaint Summary    | Jan 2025  | 1 Feb 08:05  | 5     | 🟡 Draft — pending   | QA Head            |
| PPAP — MS-204 (Tata AutoComp) | On-demand | 19 Jan 14:22 | 18    | ✅ Issued            | Customer QA        |

### ISO Report Auto-Content Preview (Page 1 — Executive Summary)

```
MANAGEMENT REVIEW REPORT | ISO 9001:2015 | January 2025
Fortiv ManufactureSmart Pvt. Ltd. | GIDC Vatva, Ahmedabad
Document No: QMS-MR-JAN-2025 | Rev 01

EXECUTIVE SUMMARY (Auto-generated):

1. Inspection Performance: Plant-wide pass rate 9% vs target 95%. CNC Line 1
   declining (9%) — root cause investigation in progress (fixture wear — NCR-2024-441).

2. NCR Status: 12 active NCRs. Surface finish is top defect category (4%).
   3 CAPAs overdue — escalation sent. Systemic risk: 3 surface scratch NCRs on CNC Line 1.

3. Customer Satisfaction: 4 open complaints. 8D report issued for CMP-2024-441 (Kapoor Industries).
   Average complaint resolution time:  days vs target 3 days.

4. Calibration: 87.5% compliance. Micrometer VN-204 overdue — scheduled for 27 Jan.

5. Process Capability: 7 of 10 CTQs meeting Cpk ≥3 target. Wall Thickness on CNC Line 1
   currently at Cpk 0.98 — improvement action required.

[Full report: 12 pages — see page thumbnails below]
```

### Key UI Elements

- **\"Generate Report\" progress animation** — \"Pulling inspection data... Compiling NCR summary... Generating charts... Report ready\" sequence (12 seconds)
- **Page thumbnail carousel** — mini previews of all report pages, click to expand
- **Live data toggle** — \"Use live data\" vs \"Use archived month-end data\" for preview generation
- **\"Send Test\" button** — generates and emails a watermarked draft to QA Head before official run
- **Document control header** — every PDF shows doc number, revision, approved-by, and issue date

### Why It Matters

Preparing for an audit in most factories means a week of frantic document compilation, late nights, and stress. With automated report generation, audit preparation time drops from days to hours — and the factory is perpetually in an audit-ready state.

---

## Page 6 — Submodule: SPC (Statistical Process Control) Monitor

### What It Is

A real-time statistical process control monitoring module that tracks critical-to-quality (CTQ) process parameters, plots them on control charts, and alerts quality and production teams the moment a process goes out of control — before defective product is produced.

### CTQ Parameter Fields Per Measurement

| Field                 | Description                  | Mock Example             |
| --------------------- | ---------------------------- | ------------------------ |
| `ctq_id`              | CTQ parameter code           | CTQ-CNC1-WT              |
| `ctq_name`            | Parameter name               | Wall Thickness           |
| `product_code`        | Product                      | MS-204                   |
| `line_id`             | Production line              | CNC Line 1               |
| `measurement_date`    | Date                         | 24 Jan 2025              |
| `measurement_time`    | Time                         | 09:15 AM                 |
| `subgroup_number`     | Sequential subgroup          | 23                       |
| `subgroup_size`       | n value                      | 5                        |
| `individual_readings` | Raw measurements             | [3.04, 3.06, 4, 8, 2]    |
| `subgroup_mean`       | X-bar                        | 48                       |
| `subgroup_range`      | R                            | 0.20                     |
| `ucl_xbar`            | Upper control limit (X-bar)  | 48                       |
| `lcl_xbar`            | Lower control limit (X-bar)  | 2.852                    |
| `ucl_r`               | Upper control limit (R)      | 0.423                    |
| `centreline_xbar`     | Process average              | 3.000                    |
| `usl`                 | Upper spec limit             | 0                        |
| `lsl`                 | Lower spec limit             | 2.80                     |
| `out_of_control`      | OOC signal detected          | ✓                        |
| `ooc_rule_triggered`  | Western Electric rule        | Rule 1: Point beyond UCL |
| `alert_sent`          | Alert dispatched             | ✓ WhatsApp sent 09:16 AM |
| `cp`                  | Process capability index     | 1                        |
| `cpk`                 | Process capability (centred) | 0.98                     |
| `capability_status`   | Cp/Cpk assessment            | ⚠️ Incapable (Cpk < 3)   |

### Western Electric Rules Monitored

| Rule   | Description                                  | Signal Meaning             |
| ------ | -------------------------------------------- | -------------------------- |
| Rule 1 | 1 point beyond ±3σ (UCL/LCL)                 | Sudden large shift         |
| Rule 2 | 8 consecutive points same side of centreline | Process mean shifted       |
| Rule 3 | 6 consecutive points trending up or down     | Gradual process drift      |
| Rule 4 | 14 alternating up-down points                | Systematic over-adjustment |
| Rule 5 | 2 of 3 consecutive points beyond ±2σ         | Unusual variation          |
| Rule 6 | 4 of 5 consecutive points beyond ±1σ         | Process mean drifting      |

### Process Capability Thresholds

| Cpk Value | Status    | Badge Color   | Action                        |
| --------- | --------- | ------------- | ----------------------------- |
| ≥7        | Excellent | #1D9E75 Green | No action                     |
| 3–6       | Capable   | #2E86AB Blue  | Monitor                       |
| 1.00–2    | Marginal  | #E8A838 Amber | Investigate and improve       |
| <1.00     | Incapable | #D85A30 Red   | Immediate process improvement |

### CTQ Parameters Tracked (Demo — 10 CTQs)

| CTQ               | Product | Line       | Nominal | LSL   | USL    | Cpk  | Status       |
| ----------------- | ------- | ---------- | ------- | ----- | ------ | ---- | ------------ |
| Wall Thickness    | MS-204  | CNC Line 1 | 3.00mm  | 2.80  | 0      | 0.98 | 🔴 Incapable |
| Component Length  | MS-204  | CNC Line 1 | 85.00mm | 80    | 80     | 4    | 🔵 Capable   |
| Hole Diameter     | MS-204  | CNC Line 1 | 12.00mm | 11.90 | 10     | 1    | 🔵 Capable   |
| Surface Finish Ra | MS-204  | CNC Line 1 | Ra      | —     |        | 1.02 | 🟡 Marginal  |
| Weld Penetration  | MS-208  | Welding 4  | 4.00mm  | 0     | 0      | 8    | 🔵 Capable   |
| Stamping Flatness | SP-044  | Stamping 3 | 0.00    | —     | 0.15mm | 2    | 🔵 Capable   |
| Paint Thickness   | MS-204  | Painting 5 | 60μm    | 45    | 75     | 9    | 🟢 Excellent |
| Assembly Gap      | PC-112  | Assembly 2 | 0.50mm  | 0.30  | 0.70   | 4    | 🔵 Capable   |
| Tensile Load      | MS-212  | Testing    | 850 N   | 750   | 950    | 8    | 🔵 Capable   |
| Edge Chamfer      | MS-204  | CNC Line 1 | 0.50mm  | 0.30  | 0.70   | 5    | 🔵 Capable   |

### Page Layout

**Top Control Bar:** Product filter + Line filter + CTQ selector + date range  
**Top Stats Row:** CTQs monitored (10) | In Control (8) | OOC Alert (1) | Incapable (Cpk<3) (2)  
**Main Area (70%):** Control chart — selected CTQ, X-bar and R chart overlaid, 30 subgroups, UCL/LCL/CL lines  
**Right Panel (30%):** CTQ summary table — all CTQs with Cp/Cpk traffic lights + mini sparkline charts  
**Bottom:** Capability dashboard — radar/bar chart of all 10 CTQs vs 3 target

### Control Chart Mock Data — Wall Thickness (CTQ-CNC1-WT, 30 Subgroups)

| Subgroup | X-bar     | R         | OOC?                                        |
| -------- | --------- | --------- | ------------------------------------------- |
| 1–20     | 2.98–3.04 | 0.08–0.14 | All in control                              |
| 21       | 3.08      | 0.16      | —                                           |
| 22       | 2         | 0.18      | —                                           |
| 23       | 48        | 0.20      | ⚠️ Rule 5: 2 of 3 beyond +2σ                |
| 24       | 56        | 0.20      | 🔴 Rule 1: Point beyond UCL + Rule 2 signal |
| 25       | 62        | 0.22      | 🔴 Continued OOC                            |

### SPC WhatsApp Alert (Auto-triggered — Subgroup 24)

```
⚠️ SPC ALERT | 09:16 AM | 24 Jan 2025

CTQ: Wall Thickness — CNC Line 1 (MS-204)
Signal: Point beyond UCL (Rule 1)
Last reading: X-bar = 62 mm | UCL = 48 mm
Previous signal: Rule 5 (subgroup 23)

Cpk current: 0.98 (INCAPABLE — target ≥3)
USL: 0mm | 3 readings approaching spec limit

IMMEDIATE ACTION REQUIRED.
Check: Cutting depth setting | Tool wear | Fixture condition

Sent to: Vijay Sharma (CNC Supervisor) | Sunita Patel (QA Manager)

— Fortiv Manufacturing AI | SPC Monitor
```

### Key UI Elements

- **Live control chart** — Recharts line chart with UCL/LCL/CL drawn as horizontal reference lines
- **OOC point highlight** — out-of-control subgroups shown as red enlarged dots with rule label
- **Cpk gauge dial** — animated gauge showing current Cpk with colour zones (green/blue/amber/red)
- **Trend annotation** — \"Upward trend detected\" annotation with arrow on chart when Rule 3 fires
- **\"Add measurement\" input** — supervisor can enter a new reading directly in the chart panel

### Why It Matters

Most quality issues in manufacturing are not sudden failures — they are gradual process drifts that produce defects for hours before anyone notices. SPC catches the drift at the first statistical signal, allowing correction before significant defective output accumulates.

---

## Page 7 — Submodule: Calibration Management Agent

### What It Is

An automated calibration management system that tracks every measuring instrument and gauge, sends calibration due reminders, logs calibration results, and ensures no out-of-calibration instrument is used for quality decisions.

### Instrument Register Fields

| Field                        | Description                           | Mock Example                               |
| ---------------------------- | ------------------------------------- | ------------------------------------------ |
| `instrument_id`              | Instrument code                       | VN-204                                     |
| `instrument_name`            | Name                                  | Micrometer 0–25mm                          |
| `make_model`                 | Manufacturer and model                | Mitutoyo 103-137                           |
| `instrument_type`            | Type category                         | Dimensional                                |
| `location`                   | Where instrument is used              | CNC Line 1                                 |
| `responsible_person`         | Instrument custodian                  | Ramesh Kumar                               |
| `calibration_frequency_days` | Calibration interval                  | 180 days                                   |
| `last_calibration_date`      | Date of last calibration              | 15 Jul 2024                                |
| `next_due_date`              | Due date for next calibration         | 28 Jan 2025                                |
| `current_date`               | Today                                 | 22 Jan 2025                                |
| `days_to_due`                | Days remaining                        | -4 (OVERDUE)                               |
| `calibration_status`         | Current compliance status             | OVERDUE                                    |
| `calibration_agency`         | Who calibrates                        | Metrology Lab, Ahmedabad (NABL accredited) |
| `last_certificate_number`    | Certificate reference                 | CAL-2024-VN204-001                         |
| `last_calibration_result`    | Pass / Fail                           | Pass                                       |
| `before_reading`             | Instrument reading before calibration | +0.002mm bias                              |
| `after_reading`              | Instrument reading after calibration  | 0.000mm                                    |
| `certificate_url`            | Stored certificate PDF                | /calibration/CAL-2024-VN204-001.pdf        |
| `hold_flag`                  | True if instrument on hold            | ✓ HOLD — Do not use                        |
| `hold_reason`                | Why instrument is on hold             | Overdue — calibration not yet completed    |
| `reminder_30d_sent`          | 30-day reminder sent                  | ✓ Sent 28 Dec 2024                         |
| `reminder_15d_sent`          | 15-day reminder sent                  | ✓ Sent 12 Jan 2025                         |
| `reminder_3d_sent`           | 3-day reminder sent                   | ✓ Sent 25 Jan 2025                         |

### Instrument Categories Tracked

| Category                 | Count (Demo) | Examples                                      |
| ------------------------ | ------------ | --------------------------------------------- |
| Dimensional — Hand tools | 10           | Micrometers, Vernier callipers, height gauges |
| Dimensional — Gauges     | 6            | Go/No-Go gauges, bore gauges, thread gauges   |
| Surface Finish           | 2            | Surface roughness tester                      |
| Weighing                 | 2            | Precision balances                            |
| Pressure / Temperature   | 3            | Pressure gauges, thermocouples                |
| Electrical               | 1            | Multimeter (QC lab)                           |
| **Total**                | **24**       | —                                             |

### Calibration Compliance Status (24 Instruments)

| Status                              | Count | Color       |
| ----------------------------------- | ----- | ----------- |
| ✅ Compliant (>30 days remaining)   | 16    | Green       |
| 🟡 Due Soon (8–30 days remaining)   | 5     | Amber       |
| 🟠 Urgent (1–7 days remaining)      | 0     | Orange      |
| 🔴 Overdue (<0 days)                | 3     | Red         |
| ⛔ On Hold (overdue + hold applied) | 3     | Red Pulsing |

### Automated Reminder Schedule

| Reminder        | Timing                  | Sent To                        | Channel                               |
| --------------- | ----------------------- | ------------------------------ | ------------------------------------- |
| 30-day advance  | 30 days before due      | Lab In-Charge + QA Head        | WhatsApp                              |
| 15-day reminder | 15 days before due      | Lab In-Charge                  | WhatsApp                              |
| 3-day urgent    | 3 days before due       | Lab In-Charge + QA Head        | WhatsApp + Email                      |
| Overdue Day 1   | Day past due            | QA Head + responsible person   | WhatsApp                              |
| Overdue + Hold  | Day past due            | All QC inspectors on that line | WhatsApp (\"Do not use\" instruction) |
| Scheduled       | On booking confirmation | Lab In-Charge                  | WhatsApp                              |

### Page Layout

**Top Stats Row:** Total instruments (24) | Compliant (16) | Due Soon (5) | Overdue (3) | On Hold (3)  
**Filter Bar:** Location filter | Type filter | Status filter | Responsible person filter  
**Main Area:** Instrument register table — all 24 instruments with status, due date, location, and custodian  
**Right Panel:** Selected instrument detail — calibration history, certificate archive, reminder log  
**Bottom:** Monthly calibration compliance trend chart + \"Schedule All Overdue\" bulk action

### Mock Demo Data — Instrument Register (24 Instruments, Key Rows)

| #   | Instrument ID | Name                     | Location   | Due Date    | Days | Status       | Certificate  |
| --- | ------------- | ------------------------ | ---------- | ----------- | ---- | ------------ | ------------ |
| 1   | VN-201        | Vernier Calliper 0–300mm | CNC Line 1 | 15 Mar 2025 | +52  | ✅ Compliant | CAL-2024-201 |
| 2   | VN-204        | Micrometer 0–25mm        | CNC Line 1 | 28 Jan 2025 | -4   | 🔴 OVERDUE   | CAL-2024-204 |
| 3   | VN-207        | Height Gauge             | QC Lab     | 14 Feb 2025 | +23  | 🟡 Due Soon  | CAL-2024-207 |
| 4   | VN-210        | Go/No-Go Gauge M12       | Assembly 2 | 8 Feb 2025  | +17  | 🟡 Due Soon  | CAL-2024-210 |
| 5   | VN-214        | Surface Roughness Tester | CNC Line 1 | 20 Jan 2025 | -8   | 🔴 OVERDUE   | CAL-2024-214 |
| 6   | VN-218        | Bore Gauge 12–18mm       | CNC Line 1 | 22 Jan 2025 | -0   | 🔴 OVERDUE   | CAL-2024-218 |
| 7   | VN-221        | Vernier Calliper 0–150mm | Welding 4  | 5 Apr 2025  | +73  | ✅ Compliant | CAL-2024-221 |
| 8   | VN-225        | Precision Balance 0–500g | QC Lab     | 1 Mar 2025  | +38  | ✅ Compliant | CAL-2024-225 |
| 9   | VN-228        | Thread Gauge M10         | Assembly 2 | 12 Feb 2025 | +21  | 🟡 Due Soon  | CAL-2024-228 |
| 10  | VN-231        | Pressure Gauge           | Stamping 3 | 15 Apr 2025 | +83  | ✅ Compliant | CAL-2024-231 |

### Overdue Instrument Hold Alert (Auto-sent to all CNC Line 1 QC staff)

```
⛔ INSTRUMENT HOLD NOTICE | 22 Jan 2025

Micrometer VN-204 — OVERDUE (4 days past calibration due date)
Location: CNC Line 1

DO NOT USE Micrometer VN-204 for any inspection or measurement until
recalibration is completed and a new certificate is obtained.

Use Micrometer VN-201 (Compliant — due 15 Mar) as alternative.

Calibration scheduled: 27 Jan 2025 (Metrology Lab, Ahmedabad)

— Fortiv QA System | Calibration Management
```

### Key UI Elements

- **Traffic light status column** — green/amber/red/pulsing-red per instrument row
- **Days counter** — positive = days remaining, negative = days overdue (red text)
- **Certificate viewer** — click certificate number to open scanned PDF in panel
- **\"Schedule Calibration\" button** — opens booking form with lab details pre-filled
- **Hold toggle** — QA Head can apply/release hold directly from the table

### Why It Matters

Using an out-of-calibration instrument means your entire quality record for that period is suspect. Calibration compliance is a mandatory requirement for ISO 9001, IATF 16949, and most customer QMS requirements — and it is one of the most common audit findings when managed manually.

---

## Page 8 — Submodule: Customer Complaint Quality Linkage

### What It Is

An AI agent that receives customer quality complaints from M8 (Customer Complaint Management), automatically links them to the relevant batch records, inspection history, and process parameters — accelerating root cause identification and 8D report preparation.

### Complaint Linkage Fields

| Field                          | Description                           | Mock Example                                             |
| ------------------------------ | ------------------------------------- | -------------------------------------------------------- |
| `complaint_id`                 | M8 complaint reference                | CMP-2024-441                                             |
| `complaint_date`               | Date complaint received               | 27 Jan 2025                                              |
| `customer_name`                | Complaining customer                  | Kapoor Industries Pvt. Ltd.                              |
| `product_code`                 | Product reported defective            | MS-204                                                   |
| `batch_number_reported`        | Batch identified by customer          | B-4821                                                   |
| `delivery_challan_ref`         | Challan on which goods were delivered | DC-2025-0441                                             |
| `defect_description_customer`  | Customer's description                | \"Surface scratches on multiple components\"             |
| `quantity_affected_customer`   | How many units affected               | 200 of 1,000 received                                    |
| `batch_record_linked`          | Batch record auto-pulled              | ✓ B-4821 — linked                                        |
| `fqc_inspection_linked`        | Final inspection record               | INS-2024-8841 (Reject — Rework)                          |
| `ncr_linked`                   | Internal NCR                          | NCR-2024-441 (Surface — Scratch)                         |
| `rm_lots_used`                 | RM lots in this batch                 | RM-2024-441 (CRCA), RM-2024-388 (Zinc)                   |
| `machine_used`                 | Machine traced                        | CNC-01                                                   |
| `operator_at_production`       | Operator on that batch                | Ramesh Kumar                                             |
| `process_params_at_production` | Process data                          | Spindle 2,800 RPM / Feed 0.18 mm/rev                     |
| `historical_ncr_match`         | Similar NCRs found                    | NCR-2024-431 (same defect, same line, 12 days prior)     |
| `ai_root_cause_suggestion`     | AI preliminary root cause             | Fixture wear on CNC-01 — consistent with NCR-2024-441    |
| `systemic_flag`                | Pattern across complaints             | ✓ 3rd surface scratch complaint on CNC Line 1 in 90 days |
| `8d_report_status`             | 8D document progress                  | D1–D4 pre-populated by AI                                |
| `capa_linked`                  | CAPA from NCR                         | CAPA-NCR-441                                             |
| `complaint_to_capa_days`       | Time from complaint to CAPA           | 1 day                                                    |

### 8D Report Structure (AI-Assisted Pre-Population)

| Discipline | Title               | AI-Populated? | Content Source                                           |
| ---------- | ------------------- | ------------- | -------------------------------------------------------- |
| D1         | Team Formation      | ✓ Auto        | QA Head + Production Head + CNC Supervisor               |
| D2         | Problem Description | ✓ Auto        | Customer complaint description + batch data              |
| D3         | Containment Action  | ✓ Auto        | Batch record — \"Lot segregated, rework ordered 22 Jan\" |
| D4         | Root Cause Analysis | ✓ Partial     | NCR data + historical pattern — human review required    |
| D5         | Corrective Action   | ✗ Manual      | QA team to complete                                      |
| D6         | CAPA Implementation | ✗ Manual      | QA team to complete                                      |
| D7         | Prevent Recurrence  | ✗ Manual      | QA team to complete                                      |
| D8         | Team Recognition    | ✗ Manual      | QA Head                                                  |

### Systemic Risk Detection Rules

| Rule             | Trigger                                                    | Action                                          |
| ---------------- | ---------------------------------------------------------- | ----------------------------------------------- |
| Same defect type | 3+ customer complaints on same defect in 90 days           | \"Systemic Quality Risk\" alert to QA Head + MD |
| Same product     | 3+ complaints on same product code in 60 days              | Flag product for design/process review          |
| Same operator    | 2+ complaints traced to same operator's batches in 30 days | Flag to HR + QA for investigation               |
| Same RM lot      | 2+ complaints traced to same RM lot                        | Trigger recall assessment + vendor NCR          |
| Same machine     | 3+ complaints traced to same machine                       | Preventive maintenance + capability re-study    |

### Page Layout

**Top Stats Row:** Open complaint links (4) | 8D Reports in progress (3) | Closed this month (8) | Systemic Risk Flags (1)  
**Left Panel (40%):** Complaint list — complaints received from M8 with linkage status  
**Centre (60%):** Selected complaint — linkage tree + 8D report panel  
**Bottom:** Systemic risk tracker — pattern flags with complaint count and trend

### Mock Demo Data — Active Complaint Links (4 Open)

| #   | Complaint ID | Customer           | Product | Defect               | Qty Affected | Batch Linked | 8D Status  |
| --- | ------------ | ------------------ | ------- | -------------------- | ------------ | ------------ | ---------- |
| 1   | CMP-2024-441 | Kapoor Industries  | MS-204  | Surface Scratch      | 200 units    | B-4821 ✓     | D1–D4 Done |
| 2   | CMP-2024-438 | Tata AutoComp      | MS-208  | Dimensional Oversize | 50 units     | B-4809 ✓     | D1–D2 Done |
| 3   | CMP-2024-435 | Maruti Ancillaries | PC-112  | Assembly Gap         | 30 units     | B-4797 ✓     | Draft      |
| 4   | CMP-2024-431 | Bajaj Auto         | PC-118  | Surface Burr         | 15 units     | B-4780 ✓     | Closed     |

### 8D Report Preview (CMP-2024-441, AI Pre-filled D1–D4)

```
8D PROBLEM SOLVING REPORT
Complaint: CMP-2024-441 | Kapoor Industries | MS-204 | 27 Jan 2025
Prepared by: Fortiv Manufacturing AI (D1–D4) | QA Team to complete D5–D8

D1 — TEAM:
  Team Leader: Sunita Patel (QA Manager)
  Members: Vijay Sharma (CNC Supervisor), Mahesh Kapoor (Production Head), Ramesh Kumar (Operator)

D2 — PROBLEM DESCRIPTION:
  Customer: Kapoor Industries Pvt. Ltd. | Complaint ref: CMP-2024-441
  Product: MS-204 | Batch: B-4821 | Delivery: DC-2025-0441 (26 Jan 2025)
  Defect: Surface scratches observed on ~200 of 1,000 units received.
  Affected dimension: Surface Finish Ra — measured Ra  vs spec max Ra .

D3 — CONTAINMENT ACTION:
  ✓ Full lot B-4821 (1,000 units) segregated at Kapoor Industries — 27 Jan
  ✓ Internal: NCR-2024-441 raised, lot held at factory — 22 Jan (pre-complaint)
  ✓ Replacement batch B-4827 (400 units dispatched 26 Jan) cleared QC

D4 — ROOT CAUSE (AI-suggested — human review required):
  Likely cause: Worn fixture pad on CNC-01 causing micro-vibration during
  machining, resulting in surface scratches. Evidence:
  • NCR-2024-441: Same defect, same line, raised 22 Jan
  • NCR-2024-431: Same defect, CNC Line 1, raised 10 Jan
  • NCR-2024-398: Same defect, CNC Line 1, raised 17 Dec
  Pattern: 3 surface scratch NCRs in 90 days — all traced to CNC-01

D5–D8: [PENDING — QA Team to complete]

[Review D4] [Complete D5-D8] [Send to Customer] [Export PDF]
```

### Key UI Elements

- **Linkage auto-complete** — complaint received from M8 → batch linked in under 5 seconds
- **Pre-populated 8D** — D1–D4 filled by AI, edit-ready for QA team
- **Systemic risk banner** — yellow \"Systemic Quality Risk — 3 surface scratch complaints in 90 days\" strip
- **\"Send to Customer\" button** — 8D PDF formatted with Fortiv letterhead, sent via email + WhatsApp
- **Complaint-to-CAPA KPI** — average days from complaint receipt to CAPA initiated (target: <2 days)

### Why It Matters

When a customer calls with a quality complaint, the typical response is 3 days of frantic manual investigation. AI linkage cuts investigation time from days to hours — enabling faster customer response and deeper root cause resolution.

---

## Complete Module 3 — Master Parameter Reference

### All Data Fields Across M3

| Field Name                   | Type       | Sub-module | Description                                  |
| ---------------------------- | ---------- | ---------- | -------------------------------------------- |
| `inspection_id`              | String     |            | Unique inspection record                     |
| `batch_number`               | String     | , , ,      | Production batch reference                   |
| `product_code`               | String     | –          | Item code inspected                          |
| `inspection_stage`           | Enum       |            | Incoming / In-Process / Final / Pre-Dispatch |
| `inspector_id`               | String     |            | QC inspector employee code                   |
| `lot_quantity`               | Number     |            | Total units in lot                           |
| `sample_size`                | Number     |            | AQL sample size inspected                    |
| `defects_found`              | Number     |            | Defective units in sample                    |
| `defect_rate_pct`            | Number (%) | ,          | Defects ÷ sample × 100                       |
| `accept_reject_decision`     | Enum       |            | Pass / Reject / Hold                         |
| `rejection_reason`           | String     | ,          | Primary defect type noted                    |
| `measurement_readings`       | JSON       | ,          | CTQ measurement data array                   |
| `ncr_id`                     | String     | , ,        | NCR reference number                         |
| `ai_defect_type`             | Enum       |            | AI-classified defect category                |
| `ai_defect_sub_type`         | Enum       |            | AI-classified sub-category                   |
| `severity`                   | Enum       | ,          | Critical / Major / Minor                     |
| `routed_to_dept`             | String     |            | Responsible department                       |
| `capa_assigned_to`           | String     | ,          | CAPA task owner                              |
| `capa_due_date`              | Date       |            | CAPA completion deadline                     |
| `capa_status`                | Enum       |            | Not Started / In Progress / Done / Overdue   |
| `root_cause`                 | Text       | ,          | Identified root cause                        |
| `corrective_action`          | Text       |            | Fix implemented                              |
| `preventive_action`          | Text       |            | Process change to prevent recurrence         |
| `ncr_status`                 | Enum       |            | Open / In Progress / Closed                  |
| `days_open`                  | Number     |            | Age of open NCR                              |
| `rm_lot_number`              | String     |            | Raw material lot identifier                  |
| `machine_id`                 | String     |            | Machine/work centre used                     |
| `process_param_spindle`      | Number     |            | Spindle speed RPM                            |
| `process_param_feed`         | Number     |            | Feed rate mm/rev                             |
| `qc_release_date`            | Date       |            | When batch cleared QC                        |
| `dispatch_challan`           | String     |            | Linked dispatch challan                      |
| `delivery_confirmed_date`    | Date       |            | Customer delivery confirmation               |
| `trace_query_type`           | Enum       |            | Forward / Backward / Cross-batch             |
| `trace_result_batches`       | Array      |            | Batches returned by trace                    |
| `report_id`                  | String     |            | Compliance report reference                  |
| `report_type`                | Enum       |            | ISO 9001 / IATF / PPAP / NCR Summary / etc.  |
| `report_period`              | String     |            | Reporting period                             |
| `report_status`              | Enum       |            | Draft / Approved / Issued                    |
| `ctq_id`                     | String     |            | CTQ parameter code                           |
| `ctq_name`                   | String     |            | Parameter name                               |
| `subgroup_mean`              | Number     |            | X-bar value                                  |
| `subgroup_range`             | Number     |            | R value                                      |
| `ucl_xbar`                   | Number     |            | Upper control limit                          |
| `lcl_xbar`                   | Number     |            | Lower control limit                          |
| `out_of_control`             | Boolean    |            | OOC signal detected                          |
| `ooc_rule_triggered`         | Enum       |            | Western Electric rule number                 |
| `cp`                         | Number     |            | Process capability index                     |
| `cpk`                        | Number     |            | Centred capability index                     |
| `capability_status`          | Enum       |            | Excellent / Capable / Marginal / Incapable   |
| `instrument_id`              | String     |            | Instrument code                              |
| `calibration_frequency_days` | Number     |            | Calibration interval days                    |
| `last_calibration_date`      | Date       |            | Last calibration date                        |
| `next_due_date`              | Date       |            | Next calibration due                         |
| `days_to_due`                | Number     |            | Days remaining (negative = overdue)          |
| `calibration_status`         | Enum       |            | Compliant / Due Soon / Overdue / On Hold     |
| `hold_flag`                  | Boolean    |            | Instrument on hold                           |
| `certificate_url`            | URL        |            | Calibration certificate PDF link             |
| `complaint_id`               | String     |            | M8 complaint reference                       |
| `batch_record_linked`        | Boolean    |            | Batch auto-linked                            |
| `ai_root_cause_suggestion`   | Text       |            | AI preliminary root cause                    |
| `systemic_flag`              | Boolean    |            | Pattern-based systemic risk                  |
| `8d_report_status`           | Enum       |            | Draft / D1-D4 Done / Complete / Sent         |
| `complaint_to_capa_days`     | Number     |            | Days from complaint to CAPA                  |

---

## Mock Data Constants (Demo-Ready)

### Demo Company Profile

```
Company:            Fortiv ManufactureSmart Pvt. Ltd.
Location:           GIDC Vatva, Ahmedabad, Gujarat
Industry:           Precision Metal Components
Turnover:           ₹28–35 Cr annually
Workforce:          320 employees, 3 shifts
Products:           CRCA Sheet Components, Precision Castings, Stamped Parts
Customers:          Automotive Tier-1 & Tier-2, FMCG, Infrastructure
ERP:                SAP Business One
QMS Standard:       ISO 9001:2015 (certified) | IATF 16949 (in progress)
Production Lines:   6 lines (CNC, Assembly, Stamping, Welding, Painting, Packing)
```

### Demo QA Team

```
Sunita Patel        — QA Head (all critical alerts, approves compliance reports)
Suresh Nair         — Senior QC Inspector (final inspection, QC lab)
Priya Mehta         — QC Inspector (in-process, Assembly Line 2)
Deepak Joshi        — QC Inspector (Welding / Stamping)
Vijay Sharma        — CNC Supervisor (CAPA owner for CNC-related NCRs)
Arun Patel          — Welding Supervisor (CAPA owner for welding NCRs)
Bhavesh Patel       — Storekeeper (incoming inspection coordination)
Mahesh Kapoor       — Production Head (recipient of all critical quality alerts)
```

### Demo Products & CTQ Parameters

```
MS-204  MS Sheet Component 204    CTQs: Wall Thickness, Surface Finish Ra, Component Length
MS-208  MS Stamped Component 208  CTQs: Flatness, Hole Position, Edge Profile
MS-212  MS Round Component 212    CTQs: Diameter, Concentricity, Surface Finish
PC-112  Precision Casting 112     CTQs: Wall Thickness, Porosity, Dimensional Profile
PC-118  Precision Casting 118     CTQs: Surface Finish, Hardness, Dimensional
SP-044  Stamped Part 044          CTQs: Flatness, Hole Diameter, Bend Angle
```

### Demo NCR History (Last 90 Days — CNC Line 1 Surface Scratch Pattern)

```
NCR-2024-398  MS-204  B-4752  Surface — Scratch  CNC Line 1  17 Dec 2024  Closed
NCR-2024-431  SP-044  B-4795  Surface — Scratch  CNC Line 1  10 Jan 2025  CAPA Overdue
NCR-2024-441  MS-204  B-4821  Surface — Scratch  CNC Line 1  22 Jan 2025  In Progress
⚠️ SYSTEMIC RISK FLAG: 3 surface scratch NCRs in 90 days — CNC Line 1
```

### Demo Calibration Lab

```
Metrology Lab, Ahmedabad (NABL Accredited — Lab Code: NABL-C-XXXX)
Contact: Lab Manager — Rajesh Iyer | +91 79 XXXX XXXX
Standard turnaround: 3–5 working days
Instruments calibrated: Dimensional, surface, pressure, electrical
Certificate format: NABL-compliant with uncertainty of measurement
```

### Demo Compliance Calendar (Jan–Mar 2025)

```
31 Jan  ISO 9001 Management Review Report — auto-generated
1 Feb   Monthly NCR + CAPA Status Report — auto-sent
3 Feb   Monthly Calibration Compliance Report — auto-sent
15 Feb  CAPA effectiveness checks due — B-4821 fixture fix (NCR-2024-441)
28 Feb  ISO 9001 Management Review Report — Feb
Q1 Mar  Internal Audit planned — QMS Clause 8 (Operations)
15 Mar  Customer PPAP Review — Tata AutoComp (MS-208)
```

### Demo SPC Control Limits (Established — MS-204, CNC Line 1)

```
Wall Thickness (nominal 3.00mm):
  UCL X-bar: 48mm | CL: 3.000mm | LCL: 2.852mm | USL: 0mm | LSL: 2.80mm
  Cpk (current): 0.98 ← INCAPABLE — investigation in progress

Surface Finish Ra (target ≤ Ra):
  UCL X-bar: 1 | CL: 2 | LCL: 3 | USL: 0 | No LSL
  Cpk (current): 1.02 ← MARGINAL — monitor closely

Component Length (nominal 85.00mm):
  UCL X-bar: 88mm | CL: 85.00mm | LCL: 82mm | USL: 80mm | LSL: 80mm
  Cpk (current): 4 ← CAPABLE
```

---

## Demo Build Prompt for M3 Dashboard

```
Build a Quality & Compliance Reporting AI dashboard for Fortiv ManufactureSmart Pvt. Ltd.,
a Gujarat precision metal components manufacturer. Dark theme, navy #1A3C5E primary,
electric blue #2E86AB accent, amber #E8A838 warning, coral red #D85A30 danger, dark bg #0D1B2A.

Seven sub-module navigation within M3. Default landing on M3 Module Overview.

Show:
(1) Top KPI bar: Inspection Pass Rate (9%), Open NCRs (12 — amber), CAPA Overdue (3 — pulsing red),
    Calibration Compliance (87.5%), Customer Complaints Open (4)
(2) Inspection pass rate line chart: 6 production lines × 30 days — CNC Line 1 declining (9%)
    shown in red, others stable/green
(3) Open NCR summary: severity breakdown donut (Critical 1 / Major 4 / Minor 7) + CAPA overdue badges
(4) Live alert feed: 5 items — SPC alert, calibration overdue, CAPA overdue, complaint pending, rejection spike
(5) Sub-module tiles for  →  at bottom

Indian manufacturing context — ISO 9001:2015, IATF 16949, NABL calibration, WhatsApp-first alerts,
Ahmedabad GIDC. JetBrains Mono for all numbers. React app with recharts.
```

---

## Brand & Design Parameters for M3 UI

### Color Usage

| Element                    | Color                            | Hex     |
| -------------------------- | -------------------------------- | ------- |
| Page background            | Dark navy                        | #0D1B2A |
| Card/panel background      | White                            | #FFFFFF |
| Primary brand              | Deep navy                        | #1A3C5E |
| Accent / links             | Electric blue                    | #2E86AB |
| Overdue / danger / fail    | Coral red (pulsing for critical) | #D85A30 |
| Warning / due soon / major | Amber                            | #E8A838 |
| Pass / compliant / capable | Teal green                       | #1D9E75 |
| Cold / info                | Electric blue                    | #2E86AB |
| Section background         | Off white                        | #F5F6FA |

### Typography

| Use Case                              | Font                                 |
| ------------------------------------- | ------------------------------------ |
| Module title, page heading            | Playfair Display or DM Serif Display |
| Body text, labels, descriptions       | DM Sans or Plus Jakarta Sans         |
| All numbers, measurements, Cpk values | JetBrains Mono                       |

### Key Animations (Demo-Specific)

| Animation                  | Where | Description                                                                    |
| -------------------------- | ----- | ------------------------------------------------------------------------------ |
| Inspection row submission  |       | New inspection row slides into feed with pass/reject badge appearing           |
| NCR AI classification      |       | \"Classifying...\" spinner → defect type badge appears in 4 seconds            |
| GRN match sweep            |       | Traceability tree nodes expand one by one from batch outward                   |
| Report generation progress |       | \"Pulling data... Compiling... Generating charts... Ready\" 12-second sequence |
| OOC point highlight        |       | Control chart point turns red + pulses when OOC rule fires                     |
| SPC alert pop-in           |       | WhatsApp alert preview slides in from right of screen                          |
| Calibration status pill    |       | Status badge changes from amber to red as days counter reaches zero            |
| 8D pre-fill animation      |       | D1–D4 fields populate one by one as AI reads batch data                        |

---

## Technical Integration Map for M3

| Sub-module         | External APIs / Systems                                            | Data Flow Direction                          |
| ------------------ | ------------------------------------------------------------------ | -------------------------------------------- |
| Inspection Capture | ERP (batch/job card data) + Mobile app + Barcode/QR scanner        | Shop floor → Quality DB → ERP                |
| NCR Management     | Quality DB + WhatsApp Business API + ERP (CAPA tasks)              | Quality DB → NCR System → WhatsApp           |
| Traceability       | ERP (RM lots, GRNs, dispatch challans) + Quality DB                | ERP + Quality DB → Trace engine              |
| Compliance Reports | All M3 sub-modules + ERP + Email                                   | Quality DB → Report engine → Email + Archive |
| SPC Monitor        | Inspection data () + Automated gauges (where available) + WhatsApp | Measurement data → SPC engine → WhatsApp     |
| Calibration        | Instrument master DB + WhatsApp + Email + Certificate store        | Calendar trigger → WhatsApp reminders        |
| Complaint Linkage  | M8 (complaint intake) + ERP (batch/GRN) + Quality DB (NCR/CAPA)    | M8 → Linkage engine → 8D generator           |

---

## Summary: M3 at a Glance

| Item                 | Detail                                                                                                                                                      |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Module               | M3 — Quality & Compliance Reporting                                                                                                                         |
| Sub-modules          | 7 ( → )                                                                                                                                                     |
| Total pages          | 8 (1 dashboard + 7 sub-module pages)                                                                                                                        |
| Primary data objects | Inspection records, NCRs, batch records, compliance reports, SPC charts, calibration register, 8D reports                                                   |
| Systems covered      | SAP / ERPNext / custom MES / WhatsApp Business / NABL calibration labs / ISO/IATF template engine                                                           |
| Key output           | Digital inspection records + AI-classified NCRs + 10-second batch trace + auto compliance PDFs + real-time SPC alerts                                       |
| Demo focus           | NCR raised → AI classified → CAPA assigned → 8D pre-filled → all in under 2 minutes                                                                         |
| Design tone          | Dark navy dashboard, data-dense, compliance-critical, audit-ready                                                                                           |
| Compliance           | ISO 9001:2015 · IATF 16949 ready · BIS self-certification · PPAP · Gujarat Factories Act · DPDP Act 2023                                                    |
| Currency             | ₹ Indian Rupee — Lakhs (L) and Crores (Cr)                                                                                                                  |
| Date format          | DD/MM/YYYY                                                                                                                                                  |
| Languages            | English (primary) · Hindi · Gujarati                                                                                                                        |
| Connects to          | M (production schedule → batch creation) · M (GRN rejection → NCR) · M (QC clearance gate) · M8 (complaint → 8D linkage) · M6 (quality KPIs → MD dashboard) |

---

_Manufacturing AI Command Center — Module 3 Build Guide_  
_by Fortiv Solutions · fortivsolutions.in_  
_Version 1.0 · Confidential_
