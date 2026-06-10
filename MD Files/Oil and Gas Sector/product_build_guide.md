# [PROJECT_NAME]

> [TAGLINE]

---

| Field          | Value                              |
| -------------- | ---------------------------------- |
| Company        | [COMPANY_NAME]                     |
| Website        | [WEBSITE]                          |
| Version        | [VERSION]                          |
| Market Focus   | [MARKET / REGION]                  |
| Document Type  | Product Reference & Build Guide    |
| Classification | [PUBLIC / INTERNAL / CONFIDENTIAL] |
| Prepared For   | Product, Engineering & Sales Teams |

**PRODUCT REFERENCE & BUILD GUIDE**
_Strategy · Architecture · Demo Scripts · Build Prompts_

---

## About This Document

This document is the definitive product reference and build guide for [PROJECT_NAME]. It is designed for use by product managers, engineering leads, sales engineers, and demo operators. Every module in this guide is structured to be independently buildable as a UI screen, prototype, or demo artifact.

The guide covers the platform's full functional scope, module-by-module, with purpose definitions, demo scripts, sample data, and ready-to-use build prompts. Placeholders in square brackets — such as [COMPANY_NAME] — should be replaced before distributing to any external audience.

> **Note:** Replace all [PLACEHOLDER] values before using this document externally. This template is designed to be reused across industries by substituting the constants in Section 10.

### Document Scope

- Covers all 7 core software modules of the [PROJECT_NAME] platform
- Includes submodule definitions, business value summaries, and demo scripts
- Provides one master build prompt and per-module build prompts for prototyping
- Includes brand constants, tech stack preferences, and demo data entities
- Written for [MARKET / REGION] market context with region-specific examples

---

## Table of Contents

**CORE MODULES**

- M1 — Regulatory Compliance & Filing Automation
  - 1.1 Regulatory Form Auto-Population
  - 1.2 Compliance Gap Detection
  - 1.3 Audit Trail & Filing History Management
- M2 — Land & Lease Document Intelligence
  - 2.1 Lease Document Ingestion & Data Extraction
  - 2.2 Lease Obligation & Deadline Tracking
  - 2.3 Contract Clause Analysis & Anomaly Flagging
- M3 — HSE Documentation & Permit Workflows
  - 3.1 AI-Assisted Job Safety Analysis (JSA) Drafting
  - 3.2 Permit-to-Work Workflow Automation
  - 3.3 Incident Report Generation & Root Cause Assistant
  - 3.4 Safety Procedure & SOP Management
- M4 — Technical Document Intelligence & Knowledge Management
  - 4.1 Natural Language Search Across Technical Documents
  - 4.2 Engineering Report & Summary Auto-Generation
  - 4.3 Meeting Summarisation & Action Tracking
  - 4.4 Institutional Knowledge Capture & Search
- M5 — Operational Workflow & Process Automation
  - 5.1 Multi-Step Approval Workflow Automation
  - 5.2 Daily Operational Reporting Automation
  - 5.3 Purchase Order & Procurement Workflow
- M6 — Workforce & Training Compliance Management
  - 6.1 Certification & Training Deadline Tracking
  - 6.2 Onboarding & Competency Documentation
  - 6.3 Crew Qualification Verification for Permit Issuance
- M7 — Management Reporting & Business Intelligence
  - 7.1 Automated Executive & Board Reporting
  - 7.2 Conversational Data Analysis
  - 7.3 ESG & Environmental Compliance Reporting

**APPENDICES**

- A — Demo Build Prompts
  - A.0 Master App Build Prompt
  - A.1–A.7 Per-Module Build Prompts
- B — Brand & Tech Constants

---

## M1 — Regulatory Compliance & Filing Automation

_Eliminate manual form-filling by auto-populating state regulatory filings from operational documents._

### Module Purpose

Teams across the [MARKET / REGION] market currently spend days — sometimes entire work weeks — copying data between internal systems to satisfy regulatory reporting requirements. Engineers extract figures from daily drilling reports, transfer them into spreadsheets, and then manually re-enter them into government portal forms. This process is error-prone, deeply time-consuming, and creates compliance exposure every time a deadline is missed.

[PROJECT_NAME]'s Regulatory Compliance module solves this entirely in software. AI agents read production and operational documents, understand the filing requirements for the relevant authority (e.g., OISD, PNGRB, or state-level regulators in [MARKET / REGION]), and auto-populate the required forms with a 99%+ accuracy rate. What previously took 3–5 days per filing period now takes under 30 minutes.

> **Documented outcome:** operators using this module have reclaimed 1,200+ hours annually, with a 100% regulatory approval rate on auto-generated filings.

### Demo Wow Moment

Upload a 12-page operational summary PDF from the previous month. Within 90 seconds, the platform extracts all relevant figures, maps them to the correct form fields, highlights any data gaps requiring human input, and presents a prefilled regulatory form ready for review and submission — all with zero manual data entry. The auditor sees a fully traceable submission trail showing which source document every field value came from.

---

### 1.1 Regulatory Form Auto-Population

**What it is:**
An AI agent that reads operational reports, extracts relevant data fields, and maps them automatically to the correct fields in official regulatory submission forms.

**What it does:**

- Parses PDF and structured operational reports to extract production volumes, dates, well identifiers, and operator details
- Maps extracted values to the exact field positions in regulatory forms (e.g., OISD-STD-189, PNGRB monthly production templates)
- Flags fields with missing or ambiguous source data and queues them for human review before submission
- Generates a source traceability record — every auto-filled value links back to the exact page and paragraph of the source document

**Why it matters:**
The cost of a failed or late regulatory submission in [MARKET / REGION] can include financial penalties, operational suspension notices, and reputational damage with the licensing authority. By removing human transcription from the critical path, this module eliminates the most common cause of filing errors while compressing the time investment from days to minutes.

**Demo Data / Demo Script:**

```
// INPUT: Monthly Production Summary — Block XYZ-07, [MARKET / REGION]
Operator: [COMPANY_NAME] | Block: XYZ-07 | Period: Oct 2025
Crude Oil Produced: 48,340 barrels | Gas Flared: 2.1 MMSCFD
Active Wells: 14 | Shut-in Wells: 2 | Water Injection: 18,200 bbl

// OUTPUT: Auto-filled Form Fields
Field 3A  -> 48,340 bbl  [Source: Page 2, Para 3]
Field 7B  -> 2.1 MMSCFD [Source: Page 4, Table 1]
Field 9C  -> 14          [Source: Page 1, Summary]
Field 12D -> FLAGGED — water disposal volume missing

// STATUS: 47/48 fields auto-populated | 1 field requires review
// Estimated time saved: 4.5 hours vs manual entry
```

---

### 1.2 Compliance Gap Detection

**What it is:**
A continuous monitoring engine that cross-references operational documents and current submissions against the latest applicable regulatory requirements, flagging gaps before they become violations.

**What it does:**

- Maintains an up-to-date knowledge base of regulations applicable to [MARKET / REGION] operations
- Compares drafted or submitted filings against regulatory requirements to identify missing disclosures or non-compliant data points
- Generates a prioritised gap report categorised by severity — Critical, Advisory, and Informational
- Recommends specific corrective actions for each identified gap with reference to the relevant regulatory clause

**Why it matters:**
Regulatory requirements in the [MARKET / REGION] energy sector are updated frequently, and compliance teams are expected to track these changes manually. A single overlooked update can result in a deficiency notice or, in more serious cases, an operational suspension. This module makes compliance proactive rather than reactive, turning the compliance team from form-fillers into strategic reviewers.

**Demo Data / Demo Script:**

```
// COMPLIANCE SCAN RESULTS — [COMPANY_NAME] | Filed: 14 Oct 2025

CRITICAL (1):
  > PNGRB Circular 2024-08: Methane intensity reporting now mandatory
    Affected field: Section 6, Emission Data — currently blank
    Action: Add methane intensity calculation before resubmission

ADVISORY (2):
  > OISD-GS-RP-04 updated Q3 2025 — emergency response contact format changed
  > Well integrity certification period reduced from 24 to 18 months

INFORMATIONAL (1):
  > New voluntary ESG supplementary schedule available for Q4 submissions

// Overall compliance score: 87% | Last scan: 2 minutes ago
```

---

### 1.3 Audit Trail & Filing History Management

**What it is:**
A tamper-evident, fully searchable record of every regulatory submission, revision, source document reference, and approval event — structured for instant retrieval during inspections or audits.

**What it does:**

- Automatically logs every submission event, including timestamp, operator, form version, and attached source documents
- Maintains version history for all filings — every revision is preserved and searchable
- Enables instant retrieval of any historical filing by date, form type, block, well, or operator
- Generates a one-click audit pack — a compiled PDF containing the submission, source documents, traceability map, and sign-off trail

**Why it matters:**
During a regulatory inspection or licence renewal review, operators are required to produce years of submission history on short notice. The manual process of locating, compiling, and presenting this history can consume weeks of senior staff time. With [PROJECT_NAME], an audit pack for any period can be generated in under 2 minutes.

**Demo Data / Demo Script:**

```
// AUDIT QUERY: 'Show all W-10 filings for Block XYZ-07, FY 2024-25'

RESULTS (12 filings found):
Apr 2024  W-10  v1.0  Submitted 05-Apr-24  Approved  Rajesh Kumar
May 2024  W-10  v1.0  Submitted 06-May-24  Approved  Rajesh Kumar
Jun 2024  W-10  v1.1  Submitted 04-Jun-24  Revised   Priya Menon  [see note]
...        ...   ...   ...                  ...       ...

// AUDIT PACK GENERATED: 12 filings + 12 source docs + traceability maps
// Pack size: 34 MB | Generated in: 00:01:48
```

---

## M2 — Land & Lease Document Intelligence

_Extract, structure, and track lease obligations from thousands of scanned contract documents._

### Module Purpose

Energy operators in [MARKET / REGION] routinely manage portfolios of hundreds — sometimes thousands — of individual lease agreements, production sharing contracts, and surface rights documents. These agreements span decades, exist in inconsistent formats, and are frequently only available as scanned paper records. Finding a specific obligation, expiry date, or rental clause requires manual document search that can take days.

[PROJECT_NAME]'s Land & Lease module applies document intelligence to solve this at scale. OCR combined with large language model processing extracts every material term from every document, regardless of age or format, and organises them into a searchable, obligation-aware database. Following a portfolio acquisition — where a company might inherit 80GB of legacy documents — this module replaces months of paralegal work with days of automated processing.

> **Real case benchmark:** 80 GB of legacy PDF lease records fully ingested, extracted, and indexed in under 72 hours — versus an estimated 4–6 months of manual review.

### Demo Wow Moment

Drop a folder of 200 scanned lease PDFs — some handwritten, some typewritten, dating back to the 1970s — into the upload interface. After processing, open the obligation calendar and see every rental payment deadline, drilling commitment, and renewal option mapped on a visual timeline. Click any date to see the exact contract clause it originated from, with a highlighted excerpt from the scanned document.

---

### 2.1 Lease Document Ingestion & Data Extraction

**What it is:**
An OCR and NLP pipeline that processes any format of lease document — scanned PDFs, digital contracts, typed or handwritten agreements — and extracts all material terms into structured, queryable data.

**What it does:**

- Performs optical character recognition on scanned and image-based documents, including low-quality historical scans
- Extracts and classifies: lessee/lessor names, block/survey identifiers, effective dates, expiry dates, rental rates, royalty percentages, drilling obligations, assignment restrictions, and renewal options
- Handles multi-format, multi-language documents common in [MARKET / REGION] portfolios
- Flags low-confidence extractions for human review — with the relevant document section highlighted for efficient verification

**Why it matters:**
A missed lease expiry or overlooked drilling commitment can result in the forfeiture of a production block worth hundreds of crores. Manual review at the scale of a modern lease portfolio is simply not feasible with human resources alone. This module makes the entire portfolio machine-readable in days.

**Demo Data / Demo Script:**

```
// DOCUMENT PROCESSED: KG-DWN-98/3 Block Lease (1998) — 48 pages, scanned

EXTRACTED FIELDS:
  Lessor:            Government of India, MoPNG
  Lessee:            [COMPANY_NAME]
  Block:             KG-DWN-98/3
  Effective Date:    15 March 1998
  Initial Term:      7 years (Phase 1: 3yr, Phase 2: 2yr, Phase 3: 2yr)
  Royalty Rate:      10% on crude, 10% on gas (onshore rate)
  Drilling Commit:   2 wells in Phase 1  [Source: Clause 5.3, Page 9]
  Renewal Option:    Yes — 25-year development period on discovery
  Assignment:        Prior GOI approval required  [Clause 14.1, Page 31]

// Confidence: 94% | 3 fields flagged for review (highlighted in UI)
// Time to extract: 00:02:14
```

---

### 2.2 Lease Obligation & Deadline Tracking

**What it is:**
An automated obligation calendar that converts extracted lease terms into time-bound commitments, with proactive alerts delivered well ahead of every deadline.

**What it does:**

- Converts all date-bound lease terms (rentals, work programme commitments, renewal options, surrender deadlines) into calendar events — without manual data entry
- Sends configurable advance alerts at 90-day, 30-day, and 7-day intervals before each obligation deadline
- Tracks obligation status — Upcoming, In Progress, Completed, Overdue — with documented evidence of completion
- Generates a portfolio obligation summary report for quarterly management review

**Why it matters:**
In [MARKET / REGION]'s regulatory environment, a missed minimum work programme commitment or a lapsed rental payment can trigger a notice of default from the licensing authority. These are not recoverable situations — they represent permanent loss of licence value. Automated obligation tracking is the cheapest insurance against portfolio-level compliance failures.

**Demo Data / Demo Script:**

```
// OBLIGATION CALENDAR — [COMPANY_NAME] Portfolio | Next 90 Days

OVERDUE (1):
  > Block CB-ONN-2010/1 — Annual surface rental: Rs. 18,40,000
    Due: 01 Oct 2025 | Status: OVERDUE by 14 days | Owner: Land Dept

DUE WITHIN 30 DAYS (3):
  > Block KG-DWN-98/3  — Phase 2 well spud commitment: 15 Nov 2025
  > Block RJ-ONN-2015/1 — Seismic data submission to DGH: 20 Nov 2025
  > Block CB-ONN-2010/1 — Annual progress report to MoPNG: 30 Nov 2025

DUE WITHIN 60-90 DAYS (5): [click to expand]

// Total active obligations: 47 | Compliance rate this year: 96%
```

---

### 2.3 Contract Clause Analysis & Anomaly Flagging

**What it is:**
An AI-assisted contract review tool that compares lease terms across the portfolio, identifies non-standard clauses, and surfaces unusual obligations that may require legal attention.

**What it does:**

- Compares clause language across all leases to identify deviations from standard PSC/RSC templates used in [MARKET / REGION]
- Flags unusual provisions — such as non-standard force majeure definitions, atypical cost recovery caps, or restricted transfer rights
- Identifies potentially conflicting obligations across overlapping lease areas
- Generates a contract comparison matrix — showing side-by-side key terms across all active leases

**Why it matters:**
Legal review of a 200-document portfolio for anomalous clauses would take a team of lawyers months and cost tens of lakhs. AI-assisted clause analysis surfaces the 5% of clauses that are genuinely non-standard, allowing legal counsel to focus their time on material issues rather than routine review.

**Demo Data / Demo Script:**

```
// ANOMALY SCAN — KG-DWN-98/3 vs portfolio benchmark

FLAGGED CLAUSES (2 of 3 reviewed):

  > Clause 8.4 — Cost Recovery Cap: 90% (vs standard 100%)
    Impact: Reduces recoverable costs in production phase
    Recommendation: Flag for CFO review before Phase 3 commitments

  > Clause 19.2 — Dispute Resolution: Arbitration seat — Singapore
    Impact: All disputes governed by Singapore Arbitration Act
    Deviation: 7 of 9 other leases specify Indian domestic arbitration
    Recommendation: Legal team to assess implications for [COMPANY_NAME]

// Scan complete: 142 clauses reviewed | 2 anomalies | 0 conflicts found
```

---

## M3 — HSE Documentation & Permit Workflows

_Replace manual safety documentation with AI-drafted, workflow-routed, compliance-ready safety instruments._

### Module Purpose

Health, Safety, and Environment documentation is among the most repetitive writing work in energy operations. Job Safety Analyses are written from scratch for tasks performed dozens of times per year. Permit-to-Work forms are filled manually, routed by hand, and physically signed across multiple approvers. Incident reports are drafted ad hoc, often inconsistently, with root cause analysis done informally or not at all.

[PROJECT_NAME]'s HSE module replaces this manual burden with AI-assisted generation, digital workflow routing, and structured documentation management. Every safety instrument produced through the platform is complete, traceable, consistently formatted, and archived automatically — creating a safety management system that actually gets used because it is faster than the manual alternative.

> **Safety management systems fail not because of bad intent but because of compliance fatigue. When documentation is faster with AI than without it, compliance rates improve automatically.**

### Demo Wow Moment

Type a plain-English description of a worksite activity: 'Hot work on gas compression skid at Well Pad C, replacing a faulty flange joint.' Within 20 seconds, [PROJECT_NAME] generates a complete, regulation-referenced JSA with identified hazards, risk ratings, and required controls — pre-populated with the correct PPE requirements, hot work permit triggers, and gas testing intervals for [MARKET / REGION] OISD standards. The supervisor reviews, edits if needed, approves in one click, and the permit is issued with a full digital trail.

---

### 3.1 AI-Assisted Job Safety Analysis (JSA) Drafting

**What it is:**
A generative AI tool that produces a complete, OISD-compliant Job Safety Analysis from a plain-English description of the planned work activity.

**What it does:**

- Accepts a free-text work description and generates a structured JSA with job steps, associated hazards, risk ratings (Likelihood × Severity matrix), and required controls
- Pre-loads JSA templates with the applicable OISD standards, PESO regulations, and [MARKET / REGION]-specific requirements for the work type
- References required PPE, isolation requirements, gas testing frequencies, and emergency response contacts
- Allows supervisors to edit, annotate, and approve the AI draft — or reject and regenerate — before the JSA is locked and issued

**Why it matters:**
In [MARKET / REGION]'s upstream operations, a JSA is legally required before every non-routine work activity. When a supervisor faces a 45-minute documentation task before starting a 2-hour job, the temptation to shortcut the process is significant. When AI can produce a 90% complete JSA in 20 seconds, documentation quality improves and compliance rates rise — because the system helps rather than obstructs.

**Demo Data / Demo Script:**

```
// INPUT (free text): 'Acid job on Well No. 7, Well Pad B — matrix stimulation
//   using 15% HCl. Duration: 6 hours. Personnel: 4. Location: onshore, Rajasthan'

// AI-GENERATED JSA EXCERPT:
Job Step 1: Site preparation and equipment staging
  Hazard:   Pressurised acid equipment — potential leak/spray
  Risk:     HIGH (4 x 4 matrix)
  Controls: Full face shield + chemical-resistant gloves + apron mandatory
            Cordon off 10m radius. Wind sock checked — upwind positioning only
            OISD-STD-105 Clause 7.2 compliance required

Job Step 2: Acid mixing and quality check
  Hazard:   Exothermic reaction — heat and fumes
  Risk:     MEDIUM (3 x 3)
  Controls: Mixing only in ventilated area. SCBA on standby. Eye wash station <10m

// Total job steps generated: 8 | Time to generate: 00:00:22
// Status: DRAFT — awaiting Supervisor review and sign-off
```

---

### 3.2 Permit-to-Work Workflow Automation

**What it is:**
A fully digital Permit-to-Work system that automates the issuance, multi-level routing, sign-off, extension, and close-out of all permit types, with a complete electronic audit trail.

**What it does:**

- Supports all standard permit types: Hot Work, Cold Work, Confined Space Entry, Electrical Isolation, Height Work, Excavation
- Enforces approver hierarchy — area authority, safety officer, and site manager approvals are sequentially required before permit activation
- Sends automated reminders to pending approvers and escalates overdue approvals to the next level
- Manages permit extensions, revalidations, and cancellations with documented reason trails
- Produces a live permit board — visual display of all active and pending permits on site

**Why it matters:**
Paper-based PTW systems are slow, illegible, and frequently lost. In [MARKET / REGION]'s onshore and offshore operations, the inability to locate a closed-out permit during an incident investigation can have serious regulatory and legal consequences. Digital PTW management ensures every permit event is logged, searchable, and provable.

**Demo Data / Demo Script:**

```
// ACTIVE PERMIT BOARD — Well Pad C, Rajasthan Block | 09:45 IST

PTW-2025-1147  HOT WORK     ACTIVE    Expires: 14:00  Issued by: Anand Sharma
PTW-2025-1148  ELEC ISOL    PENDING   Awaiting: Safety Officer sign-off
PTW-2025-1149  CONF SPACE   CLOSED    Completed: 08:30  Duration: 2h 15m
PTW-2025-1150  EXCAVATION   DRAFT     Initiator: Ravi Patel  [in progress]

// ESCALATION ALERT: PTW-2025-1148 pending >45 minutes
// Auto-escalated to: Site Manager Sushant Verma at 09:44 IST

// This month: 147 permits issued | 0 overdue closures | 2 extensions
```

---

### 3.3 Incident Report Generation & Root Cause Assistant

**What it is:**
An AI copilot that guides supervisors through structured incident documentation and assists in identifying probable root causes from narrative descriptions, producing a complete OSHA/OISD-format incident report.

**What it does:**

- Presents a structured incident capture form — immediate actions, personnel involved, timeline of events, equipment/area involved, injuries, and environmental impact
- AI analyses the narrative description and suggests probable immediate causes, underlying causes, and root causes using established frameworks (Bowtie, 5-Why, or Fault Tree)
- Auto-populates mandatory notification fields for DGMS, OISD, or factory inspectorate as applicable to the incident type and severity
- Generates a complete incident report in the required regulatory format, ready for submission within hours of the event

**Why it matters:**
Incident reports written hours after an event by a stressed supervisor are often incomplete, inconsistent, and legally exposed. When AI structures the documentation process and suggests root cause categories, the quality and completeness of reports improve dramatically — and the investigation value is preserved for future prevention.

**Demo Data / Demo Script:**

```
// INCIDENT INPUT (supervisor narrative):
  'Worker slipped while descending from a 3-metre elevated platform at Well 12.
   He was carrying a tool bag and grabbed the handrail but fell anyway.
   No injury — near miss. Platform surface was wet from earlier rain.'

// AI ROOT CAUSE SUGGESTIONS:
  Immediate Cause:   Wet surface on elevated platform
  Underlying Cause:  No anti-slip matting on platform surface
                     Tool bag not placed in tool bag holder as per SWP
  Root Cause (5-Why): Surface hazard assessment not part of pre-task inspection

// CORRECTIVE ACTIONS GENERATED:
  1. Install non-slip grating on all elevated platforms (Priority: HIGH, 7 days)
  2. Add 'wet surface check' to JSA template for outdoor elevated work
  3. Retrain all crew on tool handling at height (Priority: MED, 30 days)

// Report generated: DGMS Form-B template | Ready for supervisor review
```

---

### 3.4 Safety Procedure & SOP Management

**What it is:**
A centralised library for all safety procedures, standard operating procedures, and method statements — with AI-assisted creation, version control, and automated currency checks against current regulations.

**What it does:**

- Stores all SOPs in a searchable, version-controlled repository accessible to all site personnel
- AI flags SOPs that reference superseded regulations or outdated equipment standards — prompting scheduled reviews
- Assists in drafting new SOPs from scratch using Gen AI with the applicable regulatory standard loaded as context
- Tracks acknowledgement and sign-off — records which personnel have read and confirmed understanding of each relevant SOP

**Why it matters:**
An SOP library is only valuable if it is current and actually read. When procedures reference superseded OISD clauses — which happens routinely in libraries that haven't been reviewed in years — they can create false assurance or actively mislead workers. [PROJECT_NAME] makes SOP currency management automatic rather than a periodic manual task.

**Demo Data / Demo Script:**

```
// SOP LIBRARY STATUS — [COMPANY_NAME] | 64 documents

CURRENT:     51 SOPs  (79%) — last reviewed within 18 months
DUE REVIEW:  10 SOPs  (16%) — review overdue by >18 months
FLAGGED:      3 SOPs  ( 5%) — reference superseded OISD clauses

FLAGGED DETAIL:
  SOP-HSE-014  Scaffold Inspection — references OISD-STD-171 (2018 ed.)
               Current standard: OISD-STD-171 Rev.2 (2023) — 3 clauses changed
  SOP-HSE-027  Fire Fighting — PESO Circular 12/2022 now requires monthly drill
               Current SOP specifies quarterly drill only

// ACTION: AI can auto-draft updated sections for supervisor review
```

---

## M4 — Technical Document Intelligence & Knowledge Management

_Give every engineer instant, plain-English access to the full depth of the company's technical documentation._

### Module Purpose

Engineering teams in [MARKET / REGION] energy operations manage enormous volumes of technical documentation — well logs, completion reports, daily drilling reports, equipment manuals, geotechnical studies, and historical field data. Finding a specific piece of information in this archive currently requires knowing which document it might be in, having access to that document, and manually searching through it. Senior engineers routinely spend 2–3 hours per day on document retrieval tasks that add no technical value.

[PROJECT_NAME]'s Document Intelligence module applies natural language processing to make the entire document archive conversational. Any engineer can type a question in plain English — 'What was the mud weight used in the 2019 completion of Well 14?' — and get the answer in seconds, with the source document and page number cited. This module also automates the most time-consuming writing tasks: report drafting, meeting summarisation, and knowledge capture from retiring experts.

> **Documented outcome:** teams using LLM copilots for document work save 8–20 hours per engineer per month — equivalent to 1–2.5 additional productive days of technical work.

### Demo Wow Moment

Ask the platform, in plain English: 'What were the top 3 causes of NPT in the Cambay Basin wells drilled between 2018 and 2022, and which well had the worst vibration issues?' Within 10 seconds, the platform returns a structured answer referencing data from 14 different daily drilling reports, with the specific well names, dates, and document sources cited. No search query, no spreadsheet, no analyst — just a question and an answer.

---

### 4.1 Natural Language Search Across Technical Documents

**What it is:**
A conversational search interface that allows any user to query the company's full document archive using plain English questions, receiving cited, structured answers drawn from original source documents.

**What it does:**

- Indexes all document types: PDFs, Word files, Excel logs, scanned records, and structured data exports
- Processes natural language queries and returns answers with inline citations linking to the exact page and paragraph of the source document
- Handles complex, multi-part questions that would require reviewing multiple documents manually
- Supports domain-specific terminology — well names, formation names, tool acronyms, regulatory references — without requiring users to know the exact terminology

**Why it matters:**
The value of a company's technical knowledge is only realised if it can be accessed when needed. When information is locked inside hundreds of documents that only senior engineers know how to navigate, institutional knowledge becomes a bottleneck rather than an asset. NLP-powered search democratises access to that knowledge across the entire team.

**Demo Data / Demo Script:**

```
// QUERY: 'What cement blend was used in the Well B-07 surface casing?'
ANSWER: 'Class G cement with 35% fly ash and 3% CaCl2 accelerator.'
SOURCE: Well B-07 Completion Report, Page 22, Section 4.3 [click to view]

// QUERY: 'Which wells in this portfolio had casing failures, and what were causes?'
ANSWER: 'Three wells had casing integrity issues: B-07 (2019, corrosion at 2,140m),
   C-11 (2021, mechanical damage during workover), and D-03 (2023, cement failure).'
SOURCES: [3 documents cited] | Confidence: 94%

// QUERY: 'What is the maximum allowable H2S concentration in Rajasthan Block gas?'
ANSWER: '5,000 ppm per Block PSC Clause 11.4(b). OISD-STD-116 limit: 20 ppm
   at worksite. Contractor PPE spec requires BA at >10 ppm.'
SOURCES: [2 documents cited]
```

---

### 4.2 Engineering Report & Summary Auto-Generation

**What it is:**
A generative AI writing assistant that auto-drafts engineering reports, end-of-well summaries, shift handover notes, and management updates from raw field data, logs, and previous report templates.

**What it does:**

- Ingests raw inputs — daily drilling reports, production logs, test data, field notes — and drafts a structured narrative report in the company's standard format
- Produces end-of-well summary reports, monthly production reports, and well performance analyses in draft form for engineer review
- Generates shift handover notes automatically from logged activities, outstanding actions, and equipment status
- Matches the company's established report style and terminology — trained on the organisation's historical documents

**Why it matters:**
A senior drilling engineer spending 3 hours writing an end-of-well report is not using their most valuable skills. When AI generates a 90% complete draft in minutes, the engineer becomes an editor and validator rather than a transcriptionist — producing better reports faster and spending their remaining capacity on the technical decisions that actually require their expertise.

**Demo Data / Demo Script:**

```
// INPUT: 14 daily drilling reports + well schematic + mud log summary
// GENERATE: End-of-Well Summary Report

// AUTO-DRAFT EXCERPT:
Executive Summary:
Well B-14 was drilled to a total depth of 3,847m MD (3,312m TVD) in 14 days,
achieving a 96% on-bottom efficiency. A total of 3 NPT events were recorded,
accounting for 8.4 hours of lost time, primarily due to stuck pipe at 2,940m.
Final well cost was Rs. 8.47 crore, 6.2% under AFE.

Drilling Performance Summary:
  Phase 1 (26' surface): Drilled 248m in 1.5 days. Zero NPT. ROP avg: 42 m/hr.
  Phase 2 (17.5' intermediate): ...

// Draft completeness: 87% | Flagged for review: 3 sections
// Estimated time saved vs manual writing: 3.5 hours
```

---

### 4.3 Meeting Summarisation & Action Tracking

**What it is:**
An AI tool that automatically summarises operational and management meetings, extracts all action items, assigns owners, sets due dates, and tracks completion status.

**What it does:**

- Processes meeting transcripts (audio transcript or text minutes) and generates a structured summary with decisions made, actions assigned, and key discussion points
- Extracts action items in a structured format: owner name, action description, due date, and priority level
- Sends automated action reminders to assigned individuals and compiles an overdue action report for team leaders
- Integrates action status into the team's weekly status dashboard — eliminating the need for manual follow-up tracking

**Why it matters:**
Operations teams hold daily, weekly, and monthly review meetings. In a 50-person operations department, the combined time spent writing, distributing, and chasing meeting actions manually runs into hundreds of hours per year. More critically, actions that are not systematically tracked tend not to get done — creating operational risk from unresolved issues.

**Demo Data / Demo Script:**

```
// MEETING: Weekly Production Review | 28 Oct 2025 | Duration: 52 mins
// Input: pasted meeting transcript (1,840 words)

SUMMARY (auto-generated, 3 paragraphs):
  'Production at Well Pad A recovered to 94% of target following workover...
  Water injection shortfall remains unresolved pending pump replacement...
  Q3 financial closeout approved. Three actions carried forward from last week.'

ACTIONS EXTRACTED (6 items):
  1. Procurement to order replacement pump impeller — Anand Sharma — 04 Nov
  2. HSE to update emergency contact list for Pad B — Priya Menon — 31 Oct
  3. Finance to circulate Q4 OPEX budget template — Ravi Patel — 05 Nov
  4. Drilling to confirm spud date for B-15 — Sushant Verma — 02 Nov
  5. [2 more items]

// 2 actions overdue from previous meeting — highlighted in red
// Reminders auto-sent to all action owners immediately
```

---

### 4.4 Institutional Knowledge Capture & Search

**What it is:**
A structured knowledge base system that captures the expertise of senior engineers and field veterans — through document ingestion, interview transcripts, and annotated case studies — making that knowledge accessible to the full organisation.

**What it does:**

- Ingests and indexes informal knowledge sources: email threads, annotated reports, handwritten field notes, interview transcripts, lessons-learned documents
- Structures captured knowledge into a searchable taxonomy by well, field, formation, equipment type, and operation type
- Makes historical decisions and their reasoning searchable — 'Why was the wellhead design changed for the Phase 3 wells?'
- Identifies knowledge gaps — areas where the company's documentation is sparse and where key information exists only in individuals' heads

**Why it matters:**
The [MARKET / REGION] energy sector faces a significant demographic challenge: a generation of senior engineers who accumulated decades of field experience are retiring, taking irreplaceable institutional knowledge with them. When their expertise is not systematically captured, organisations repeatedly make the same mistakes, reinvent the same solutions, and lose the context behind critical past decisions. This module is the structural solution to that problem.

**Demo Data / Demo Script:**

```
// QUERY: 'Why was directional drilling avoided in the northern sector of Block XYZ?'
ANSWER: 'Based on three captured knowledge articles and one lessons-learned document:
   The northern sector has a known formation instability problem at the Deccan Trap
   interface (2,200–2,400m). Two directional wells drilled in 2009–2011 experienced
   severe wellbore collapse events at this interval. The decision was made by
   [Chief Geologist name] in 2012 to restrict all northern sector wells to vertical
   or near-vertical profiles pending further geomechanical study.'
SOURCES: Lessons Learned Report 2012-03, Field Review Note by [expert name], 1 email thread

// Knowledge base: 847 indexed items | Last updated: today
// Knowledge gap alert: Well B-11 to B-13 formation data — no documentation found
```

---

## M5 — Operational Workflow & Process Automation

_Replace manual approvals, status updates, and routine coordination tasks with automated, auditable workflows._

### Module Purpose

In energy operations, the time between a decision being made and that decision being executed is often dictated by the speed of manual approval chains — emails that wait in inboxes, paper forms routing between offices, and verbal handoffs that produce no record. In a business where an unresolved approval can delay a well workover worth crores, these friction points have real financial consequences.

[PROJECT_NAME]'s Workflow Automation module applies structured digital workflows to all recurring operational processes — approval chains, daily reporting, and procurement initiation — with full audit trails, automated escalation, and integration with existing data sources. The result is measurably faster operational execution with no increase in coordination overhead.

> **Workflow automation reduces approval cycle times by 60–80% in typical energy operations deployments — directly translating to faster operational execution and lower standby costs.**

### Demo Wow Moment

Watch a Workover Authority for Expenditure (AFE) progress from initiation to full approval through a live workflow board in real time. Each approver receives a mobile-friendly notification, reviews the scoped work and cost estimate, and approves from their phone. The full multi-level approval is completed in 4 minutes during the demo — versus the 2–3 day email chain it replaces. Every approval is timestamped, attributed, and stored permanently.

---

### 5.1 Multi-Step Approval Workflow Automation

**What it is:**
A configurable digital workflow engine that automates the routing, approval, escalation, and archiving of any multi-party authorisation process — from AFEs and MOC requests to budget exceptions and contract amendments.

**What it does:**

- Configurable workflow templates for AFE approvals, Management of Change (MOC), HSE exception requests, and contractor work authorisations
- Enforces approval authority limits — automatically escalates to the next level if an approver's authority limit is insufficient for the value or risk level
- Sends real-time notifications to pending approvers with a summary of what is being approved, by whom, and why
- Escalates automatically when approvals are delayed beyond a configurable threshold — with a full escalation audit trail
- Archives every approved, rejected, or withdrawn authorisation with all attached documents and comments

**Why it matters:**
In [MARKET / REGION]'s operational context, where workover crews may be on standby at day rates of Rs. 4–8 lakh per day, a 48-hour approval delay has a direct cash cost in addition to the opportunity cost of delayed production. Automated workflows collapse that delay from days to hours or minutes.

**Demo Data / Demo Script:**

```
// AFE WORKFLOW — Well B-09 Workover | Value: Rs. 1.14 Crore

STEP 1  Well Engineer initiates AFE          09:02 IST  ✓ Complete
STEP 2  HSE review and sign-off              09:07 IST  ✓ Complete  (Priya Menon)
STEP 3  Operations Manager approval          09:23 IST  ✓ Complete  (Anand Sharma)
STEP 4  Finance Controller review            09:31 IST  ⏳ PENDING  [reminder sent]
STEP 5  VP Operations final authorisation    —          ⏸ Awaiting Step 4

// Auto-escalation: If Step 4 not completed by 11:00 IST → escalate to CFO
// Workover crew notified on approval of Step 5 — auto-mobilisation alert sent
// Total approval time target: <2 hours vs previous avg: 51 hours
```

---

### 5.2 Daily Operational Reporting Automation

**What it is:**
A data aggregation and report generation system that automatically compiles daily operational reports from multiple source systems and distributes them to defined stakeholder lists — with zero manual aggregation.

**What it does:**

- Pulls data from existing systems (production logs, maintenance records, permit status, HSE incidents) at a scheduled time each day
- Compiles data into a standardised daily operations report covering production volumes, key events, open actions, and safety status
- Distributes reports automatically to defined distribution lists — executive, operations, and field levels receive appropriately filtered versions
- Flags anomalies and exceptions — days where production deviates from target, or HSE events are recorded — for attention callouts at the top of the report

**Why it matters:**
A daily operations report that takes 90 minutes to compile manually consumes 550 hours per year from senior operational staff. When that same report is auto-compiled in 3 minutes, those 550 hours are returned to productive technical work — and the report is consistently available at the same time every day, regardless of who is on shift.

**Demo Data / Demo Script:**

```
// DAILY OPERATIONS REPORT — [COMPANY_NAME] | 28 Oct 2025 | 06:00 IST
// Auto-generated and distributed to 24 recipients

PRODUCTION SUMMARY:
  Gross Oil: 41,280 bbl (Target: 43,500 bbl | Variance: -5.1%)
  Gas: 18.4 MMSCFD  |  Water: 6,240 bbl  |  Injection: 19,100 bbl

!! EXCEPTION: Well C-07 shut-in at 02:14 IST — ESP trip. Workover planned.

SAFETY: 0 LTI | 1 Near Miss recorded (PTW-1149) | 4 PTWs active
MAINTENANCE: 3 PMs completed | 1 breakdown (G-Compressor #2, ongoing)
OPEN ACTIONS: 14 total | 3 overdue (highlighted in attached detail report)

// Report compiled: 00:02:47 | Previous day avg manual compilation: 01:32:00
```

---

### 5.3 Purchase Order & Procurement Workflow

**What it is:**
An AI-assisted procurement workflow that converts approved maintenance plans, stock alerts, and service requests into structured purchase orders, routes them through the appropriate approval chain, and tracks delivery through to goods receipt.

**What it does:**

- Auto-generates draft Purchase Orders from approved work orders, minimum stock level alerts, or manual requisitions — pre-populated with preferred vendor, last price, and delivery lead time
- Routes POs through the correct approval level based on value and commodity category — consistent with the company's Delegation of Authority matrix
- Tracks PO status from creation through approval, dispatch, and goods receipt — with proactive alerts for delayed deliveries against critical maintenance schedules
- Consolidates pending requisitions for the same material or vendor to optimise ordering and reduce freight costs

**Why it matters:**
In [MARKET / REGION]'s onshore operations, procurement delays are among the leading causes of extended equipment downtime. When a pump impeller replacement takes 12 days because the PO spent 6 of those days in an inbox queue, the root cause is not logistics — it is process friction. Automated procurement workflows eliminate the queue.

**Demo Data / Demo Script:**

```
// TRIGGER: Min stock alert — Mud Pump Liner (Part No. MP-4027) at reorder point

AUTO-GENERATED DRAFT PO:
  PO Number:     [AUTO] PO-2025-3847
  Vendor:        Nat Petrosols Pvt. Ltd. (Preferred | Last price: Rs. 47,200/unit)
  Item:          Mud Pump Liner MP-4027 x 4 units
  Value:         Rs. 1,88,800 (within Site Manager authority)
  Delivery:      7 working days to Jodhpur yard
  Routing:       Site Manager approval only (below Rs. 2 lakh threshold)

  APPROVED by: Anand Sharma at 10:14 IST
  DISPATCHED: Vendor confirmation received 10:51 IST
  ETA: 07 Nov 2025

// PO cycle time: 37 minutes | Previous manual average: 3.2 days
```

---

## M6 — Workforce & Training Compliance Management

_Eliminate certification lapses and compliance risk by automating crew qualification tracking and training workflows._

### Module Purpose

Every worker deployed on an energy operation in [MARKET / REGION] must hold a current portfolio of certifications — H2S Awareness, First Aid, Well Control, rigging certificates, equipment operator licences, and several others depending on their role and work location. Managing the currency of these certifications across a workforce of hundreds, spread across multiple remote sites, is an administrative task of significant scale — and one where the consequences of failure include both regulatory non-compliance and serious safety risk.

[PROJECT_NAME]'s Workforce module makes certification management automated and proactive. The system tracks every employee's certification portfolio, alerts managers well ahead of expiry dates, blocks permit issuance to personnel with lapsed qualifications, and integrates with the onboarding process to ensure new hires reach full operational competency on a structured schedule.

> **A single worker deployed without a current well control certificate represents both a regulatory violation and a safety liability. Automated tracking prevents this from ever happening undetected.**

### Demo Wow Moment

The permit-to-work system is linked to the workforce module. When a supervisor tries to issue a Confined Space Entry permit naming a worker whose gas testing certification expired 8 days ago, the system automatically blocks the permit issuance and displays the specific expired certificate, its expiry date, and the next available recertification course. The permit cannot proceed until a qualified replacement is nominated or the certification is renewed. This demo runs in 30 seconds and makes the business case for the entire module instantly.

---

### 6.1 Certification & Training Deadline Tracking

**What it is:**
A centralised qualification register that tracks every employee's mandatory certification portfolio, sends advance expiry alerts, and provides a real-time compliance dashboard for site managers and HR.

**What it does:**

- Maintains a complete record of all certifications, licences, and mandatory training for every employee and contractor on site
- Sends automated alerts to the individual, their supervisor, and HR at 60-day, 30-day, and 7-day intervals before each certificate expires
- Provides a site-level compliance dashboard showing the percentage of the workforce with fully current qualifications
- Generates a monthly expiry forecast report — showing all certifications due to expire in the next 90 days across the entire organisation

**Why it matters:**
In [MARKET / REGION], the DGMS and OISD both have provisions for regulatory action against operators whose deployed personnel hold lapsed mandatory certifications. Beyond regulatory risk, deploying an unqualified worker creates direct liability in the event of an incident. Automated tracking converts what is currently a reactive, spreadsheet-based process into a proactive management system.

**Demo Data / Demo Script:**

```
// WORKFORCE COMPLIANCE DASHBOARD — [COMPANY_NAME] | Oct 2025

SITE: Rajasthan Block Operations Centre
Total Personnel: 142  |  Fully Compliant: 134 (94.4%)  |  With Gap: 8 (5.6%)

EXPIRING IN 30 DAYS (5 personnel):
  Ramesh Nair      H2S Awareness       Expires: 14 Nov  [send reminder]
  Suresh Kumar     First Aid (St. John) Expires: 19 Nov  [send reminder]
  Deepak Arora     Rigging Supervisor   Expires: 22 Nov  [book renewal]
  [2 more]

ALREADY EXPIRED (3 personnel) — CRITICAL:
  Vijay Singh      Well Control Level 1  Expired: 21 Oct  [BLOCKED from H2S ops]
  [2 more]

// 3 personnel automatically blocked from relevant permit types
```

---

### 6.2 Onboarding & Competency Documentation

**What it is:**
An AI-assisted onboarding system that generates role-specific competency frameworks, training plans, and induction materials for new employees and contractors — reducing the time to operational readiness.

**What it does:**

- Generates a role-specific onboarding checklist and training plan from a template library customised to [COMPANY_NAME]'s roles and competency standards
- AI drafts role-specific induction materials covering site rules, emergency procedures, and job-specific safety requirements
- Tracks onboarding task completion — induction sign-offs, equipment familiarisation, system access, and buddy allocation — against a target completion timeline
- Flags incomplete onboarding before a new hire's first day of unsupervised work

**Why it matters:**
The first 90 days of a new employee's tenure carry disproportionately high incident risk. A structured, documented onboarding process with tracked milestones is among the most evidence-based interventions for reducing that risk. When onboarding materials are generated automatically rather than assembled manually for each new hire, the quality and consistency of the process improves across all sites.

**Demo Data / Demo Script:**

```
// NEW HIRE: Arjun Mehta | Role: Assistant Drilling Engineer | Start: 04 Nov 2025

AUTO-GENERATED ONBOARDING PLAN (28 items, 30-day target):

Week 1 (Days 1-5):
  ✓ Site security induction & ID badge         Complete: 04 Nov
  ✓ Emergency mustering drill & assembly point  Complete: 04 Nov
  ⏳ OISD-STD-154 awareness training            Due: 06 Nov | [book now]
  ⏸ Driller's cabin familiarisation             Due: 07 Nov | Buddy: Sushant V.
  ⏸ H2S monitor calibration training            Due: 08 Nov | [book now]

Week 2-4: [12 more items]  |  Mandatory certs: [6 items]

// Completion tracking: 2/28 items done | On track for 04 Dec readiness
// Manager alert if <60% complete by Day 10
```

---

### 6.3 Crew Qualification Verification for Permit Issuance

**What it is:**
A real-time qualification gate integrated into the permit-to-work system that verifies all named personnel hold the required current certifications for the work type before a permit can be issued.

**What it does:**

- When a PTW is initiated, automatically checks the certification status of every named worker against the qualification requirements for that permit type
- Blocks permit issuance if any named worker lacks a required current certification — displaying the specific gap and expiry detail
- Allows the supervisor to substitute a qualified replacement inline, without leaving the permit workflow
- Logs all qualification checks — creating an immutable record that due diligence was performed before every work authorisation

**Why it matters:**
The permit-to-work system is the last formal safety barrier before a hazardous task begins. If that barrier can be bypassed — by a supervisor who does not realise a worker's certificate has lapsed, or who proceeds under time pressure — the system provides a false sense of security. Hard integration between PTW and qualification records makes this impossible, not just inadvisable.

**Demo Data / Demo Script:**

```
// PTW INITIATION: Confined Space Entry — Storage Tank T-04 | 11:30 IST
// Personnel named: Vijay Singh, Ramesh Nair, Deepak Arora

QUALIFICATION CHECK RESULTS:
  Vijay Singh    Confined Space Entry cert  ✓ CURRENT (exp. Mar 2026)
               Gas Testing Level 2         ✓ CURRENT (exp. Jan 2026)
  Ramesh Nair    Confined Space Entry cert  ✓ CURRENT (exp. Aug 2026)
               Gas Testing Level 2         ✗ EXPIRED (expired Oct 2025)
  Deepak Arora   Confined Space Entry cert  ✓ CURRENT (exp. Dec 2025)

!! PERMIT BLOCKED: Ramesh Nair — Gas Testing Level 2 certificate expired.
   Required for Confined Space Entry at this site.
   Action: Replace with qualified personnel, or Nair must complete renewal first.

// Supervisor substitutes: Suresh Kumar (cert current ✓) — Permit proceeds
```

---

## M7 — Management Reporting & Business Intelligence

_Give leadership instant, plain-English access to operational and financial performance — without analyst dependency._

### Module Purpose

Management teams in [MARKET / REGION] energy companies currently depend on a pipeline of analysts to compile, format, and distribute operational and financial reports. Board-level reporting consumes days of senior analyst time. Operational performance questions that should take seconds to answer require emails to three different departments. The result is a leadership team that is slower to decisions, less informed between formal reporting cycles, and heavily dependent on a small number of people who know how to navigate the data.

[PROJECT_NAME]'s Reporting & BI module breaks this dependency. Executives and managers can ask operational and financial questions in plain English and receive structured, cited answers in seconds. Routine reports compile and distribute themselves. ESG disclosures are generated from operational records, not assembled by hand. The result is a leadership team that is faster, better informed, and no longer bottlenecked by the reporting process.

> **'What is our production variance against plan this month, and which wells are responsible?' — answered in 8 seconds from natural language, with cited source data. That is the capability this module delivers.**

### Demo Wow Moment

In front of a management audience, type a conversational question into the BI interface: 'Compare our H1 2025 OPEX per barrel against H1 2024 and tell me which cost categories drove the difference.' The system returns a structured comparison table, identifies the top 3 cost drivers with percentage breakdowns, and cites the specific cost records behind each figure — in under 15 seconds. No analyst, no Excel, no PowerPoint. The question and the answer happen live on screen.

---

### 7.1 Automated Executive & Board Reporting

**What it is:**
A scheduled report generation engine that automatically compiles board-ready operational, financial, and safety reports from underlying data sources — producing structured, formatted documents without manual aggregation.

**What it does:**

- Pulls production, OPEX, safety, and compliance data from source systems on a scheduled basis
- Generates monthly and quarterly management reports in [COMPANY_NAME]'s standard board format — with charts, variance commentary, and exception highlights
- Drafts narrative commentary using Gen AI — summarising performance, explaining variances, and highlighting risks — for review and editing by the operations team
- Distributes finalised reports to defined lists automatically, with access controls ensuring board and executive versions are delivered to the right audiences

**Why it matters:**
A management report that is delivered late loses most of its decision-support value. When a report due on the 5th of each month is routinely delivered on the 9th because of data chasing and formatting delays, the business makes decisions on older information than it needs to. Automated compilation delivers consistent, on-time reporting regardless of staff availability.

**Demo Data / Demo Script:**

```
// MONTHLY MANAGEMENT REPORT — [COMPANY_NAME] | October 2025
// Auto-compiled: 01 Nov 2025 06:00 IST | Distributed to: 8 recipients

HEADLINE METRICS:
  Gross Production:  1,28,340 bbl   vs Target: 1,34,750 bbl  (-4.8%)
  OPEX per bbl:      Rs. 4,127       vs Budget:  Rs. 3,980    (+3.7%)
  HSE: 0 LTI | 0 Recordable | 4 Near Misses (vs 2 last month)
  Reg. Compliance:   100% on-time filings

AI-GENERATED VARIANCE COMMENTARY (draft):
  'Production shortfall of 6,410 bbl was primarily attributable to Well C-07
   shut-in (3,200 bbl impact) and planned maintenance downtime at Pad A (1,840 bbl).
   OPEX overrun was driven by unplanned pump repairs and increased chemical costs...'

// Draft reviewed and approved by VP Ops in 12 minutes | Sent to board
```

---

### 7.2 Conversational Data Analysis

**What it is:**
A natural language interface to operational and financial data that allows non-technical managers to ask complex analytical questions and receive structured, sourced answers — without SQL, Excel, or analyst support.

**What it does:**

- Processes plain-English questions about operational performance, financial data, production history, maintenance records, and compliance status
- Returns structured answers — tables, comparisons, trend summaries — with the underlying data records cited
- Handles comparative and trend questions: 'Which well has had the highest NPT rate over the last 6 months and what were the causes?'
- Accessible from desktop and mobile — enabling operational managers in the field to get data answers without returning to the office

**Why it matters:**
The gap between operational data and operational decision-making is often not a data availability problem — it is an access and interpretation problem. When only the person who built the Excel model can answer a question about the data it contains, that data is effectively unavailable to everyone else. Conversational BI makes every dataset accessible to everyone who needs it, in the language they actually use.

**Demo Data / Demo Script:**

```
Q: 'How much did we spend on chemical treatments in Q3 2025 vs Q3 2024?'
A: 'Chemical treatment spend in Q3 2025 was Rs. 1.84 crore, compared to
   Rs. 1.41 crore in Q3 2024 — an increase of 30.5%. The increase was
   primarily driven by scale inhibitor costs (+Rs. 28 lakh) at Pad B and
   higher H2S scavenger volumes at Well C-07 and C-11 (+Rs. 15 lakh).'
SOURCES: [Q3 2025 OPEX ledger, chemical inventory records]  |  Confidence: 97%

Q: 'Which 3 wells had the longest average repair turnaround time this year?'
A: 'Based on 47 recorded repair events: (1) Well D-03 avg 4.8 days,
   (2) Well B-07 avg 3.9 days, (3) Well C-11 avg 3.4 days.'
SOURCES: Maintenance records 2025  |  Confidence: 99%

Q: 'What is our current all-in lifting cost per barrel?'
A: 'Based on Oct 2025 actuals: Rs. 4,127/bbl (OPEX only) / Rs. 6,840/bbl (all-in).'
```

---

### 7.3 ESG & Environmental Compliance Reporting

**What it is:**
A software-based ESG data consolidation and reporting module that aggregates environmental and sustainability data from operational records and generates verified, audit-ready ESG disclosures — without manual data collection or hardware.

**What it does:**

- Consolidates environmental data from operational reports, fuel consumption logs, water usage records, and waste disposal manifests into a single ESG data register
- Calculates emissions estimates using activity-based methodologies and applicable emission factors — producing Scope 1 and Scope 2 estimates from operational records alone
- Auto-populates mandatory environmental filings for MoEFCC, CPCB, and other [MARKET / REGION] regulatory bodies
- Generates an annual ESG disclosure report in GRI or BRSR format — aligned with SEBI's Business Responsibility and Sustainability Reporting requirements for listed entities

**Why it matters:**
SEBI's BRSR requirements, which became mandatory for the top 1,000 listed Indian companies, have created a significant new compliance burden for energy sector companies. ESG data that previously only had internal relevance now drives material investment decisions and regulatory scrutiny. [PROJECT_NAME] enables compliance with these requirements without additional data infrastructure or reporting headcount.

**Demo Data / Demo Script:**

```
// ESG DATA REGISTER — [COMPANY_NAME] | FY 2024-25

SCOPE 1 EMISSIONS (estimated from operational records):
  Diesel combustion (field equipment): 4,847 tCO2e
  Gas flaring:                         1,203 tCO2e
  Fugitive methane (activity-based):     312 tCO2e
  TOTAL SCOPE 1:                       6,362 tCO2e

SCOPE 2 EMISSIONS:
  Grid electricity (office + facilities):  248 tCO2e

WATER:
  Fresh water consumed: 14,200 kL  |  Recycled: 8,900 kL (62.7%)

// BRSR Principle 6 disclosure: AUTO-GENERATED — ready for Board review
// MoEFCC annual environmental statement: AUTO-POPULATED — ready for filing
// ESG rating agency data pack: AVAILABLE for download
```

---

## Appendix A — Demo Build Prompts

The following prompts are designed to be used directly with an AI coding assistant (Cursor, Claude, v0, or similar) to generate a working prototype or demo interface. Each prompt specifies layout, components, sample data, and styling. Prompts use [PROJECT_NAME] and [COMPANY_NAME] as placeholders — replace before use.

---

### A.0 — Master App Build Prompt (Full Platform)

```
Build a web application demo for '[PROJECT_NAME]' — an AI automation platform
for [MARKET / REGION] energy operators. Use React + Tailwind CSS.

LAYOUT: Left sidebar navigation (7 modules + settings). Top header bar showing
'[COMPANY_NAME]' + current user 'Anand Sharma, VP Operations' + notification bell.
Main content area renders the active module. No mobile layout required for demo.

SIDEBAR MODULES (with Lucide icons):
  M1 Regulatory Compliance (FileCheck)  |  M2 Land & Lease (Map)
  M3 HSE & Permits (Shield)             |  M4 Document Intelligence (BookOpen)
  M5 Workflow Automation (GitBranch)     |  M6 Workforce (Users)
  M7 Management Reporting (BarChart2)

DEFAULT VIEW: M7 Management Reporting dashboard with 4 KPI cards:
  Gross Oil: 1,28,340 bbl | OPEX/bbl: Rs. 4,127 | LTI: 0 | Compliance: 100%
  Below KPI cards: bar chart (monthly production vs target, 12 months),
  table (top 5 open actions), and a conversational BI input box.

STYLING: Navy (#0D1B2A) sidebar. White main area. Gold (#C8922A) accent.
  Card borders: #D1D9E3. Clean sans-serif. Minimal, premium feel.

INTERACTIVITY: Clicking sidebar items renders a placeholder screen for each
module with the module title, icon, and 3 representative metric cards.
The conversational BI box in M7 should accept text input and return a
hardcoded demo response on submit.

SAMPLE DATA: Use Indian rupee (Rs.) currency. Dates in DD MMM YYYY format.
All names: [COMPANY_NAME], Anand Sharma, Priya Menon, Rajesh Kumar, Ravi Patel.
```

---

### A.1 — Regulatory Compliance Module Screen

```
Build a React component for the M1 Regulatory Compliance screen of [PROJECT_NAME].

LAYOUT (3-column): Left column (30%): list of recent filings with status badges
(Approved/Pending/Draft). Centre column (40%): active form view — a prefilled
PNGRB Monthly Production Template with field values highlighted in light blue.
Sourced fields show a small info icon; hovering shows 'Source: Doc name, Page X'.
Right column (30%): compliance gap panel with 3 items (1 Critical, 2 Advisory).

TOP BAR: Button 'Auto-populate from latest report' (primary, gold). Progress bar
showing '47/48 fields auto-populated'. Badge: '1 field needs review'.

DEMO INTERACTION: Clicking 'Auto-populate' triggers a 2-second loading animation
then fills visible form fields with sample values (from the demo script in M1.1).

STYLING: Match platform theme — navy header, white panels, gold CTA, clean tables.
Use React + Tailwind. No external chart library needed for this screen.
```

---

### A.2 — Land & Lease Module Screen

```
Build a React component for the M2 Land & Lease screen of [PROJECT_NAME].

LAYOUT (2-panel): Top half: obligation calendar — a 3-month timeline (Oct-Dec 2025)
with colour-coded deadline markers (red = overdue, amber = <30 days, green = >30 days).
Hovering a marker shows a tooltip with obligation name, lease block, and amount.
Bottom half: document list — 8 lease records with columns: Block Name, Document Type,
Effective Date, Expiry Date, Status (Active/Expiring/Expired), and Actions (View/Extract).

SIDEBAR PANEL (right 25%): Clicking any lease row opens an extraction panel showing
the key extracted fields (Lessor, Royalty Rate, Drilling Commitment, etc.) in a
clean key-value layout, with a 'View source document' link at the bottom.

SAMPLE DATA: Use KG-DWN-98/3, CB-ONN-2010/1, RJ-ONN-2015/1 as block names.
Show 1 overdue item (red) and 3 upcoming items (amber) in the calendar.
```

---

### A.3 — HSE Permit-to-Work Screen

```
Build a React component for the M3 HSE Permits screen of [PROJECT_NAME].

LAYOUT: Full-width permit board. Top section: 4 summary cards:
  Active Permits (4) | Pending Approval (1) | Closed Today (3) | Overdue (0)
Main table: permit list with columns: PTW Number, Type (colour badge), Status,
Personnel, Issued By, Expiry Time, and Actions.

PERMIT ROWS (use sample data from M3.2 demo script).
Status badges: ACTIVE=green, PENDING=amber, CLOSED=grey, ESCALATED=red.

DETAIL DRAWER: Clicking a permit row slides open a right-side drawer (400px)
showing: permit header, personnel qualification checks (with ✓ or ✗ per person),
approval chain progress (step 1-5 with timestamps), and attached JSA document link.

DEMO INTERACTION: A 'New Permit' button opens a modal. Typing a worker name
with an expired cert (use 'Vijay Singh') triggers an immediate red warning:
'Qualification check failed — Well Control Level 1 expired 21 Oct 2025.'
```

---

### A.4 — Document Intelligence Chat Screen

```
Build a React component for the M4 Document Intelligence screen of [PROJECT_NAME].

LAYOUT: Split screen — left 40%: document library panel showing 12 indexed
documents (well logs, completion reports, DDRs) with type icons and dates.
Right 60%: conversational search interface — a chat-style layout with message
bubbles. User messages on right (navy bg), AI responses on left (white card).
AI responses include a 'Sources cited' section showing 1-3 document references
as small chips (document name + page number), each clickable.

PRE-LOADED DEMO CONVERSATION (3 exchanges): Use the 3 Q&A pairs from M4.1
demo script. Show them as if already asked, so the demo panel looks active.

INPUT BAR: Fixed at bottom. Placeholder: 'Ask anything about your documents…'
Send button. On submit, append user message + a hardcoded AI response.

TOP BAR: 'Documents indexed: 847' | 'Last updated: Today' | 'Add documents' button.
```

---

### A.5 — Workflow Automation Screen

```
Build a React component for the M5 Workflow Automation screen of [PROJECT_NAME].

LAYOUT: Kanban-style workflow board with 4 columns:
  Initiated | In Review | Pending Approval | Approved/Closed
Each column shows workflow cards. A card contains: workflow type badge,
subject line, initiator name, value (Rs. formatted), and current approver.

SAMPLE CARDS (from M5.1 demo script): AFE for Well B-09 Workover (Rs. 1.14 Cr)
in 'Pending Approval' column; 2 other AFEs in other stages.

DETAIL VIEW: Clicking a card expands an approval chain timeline — 5 steps,
each showing approver name, role, timestamp (or 'Pending'), and approve/reject
buttons (visible only on the active step card).

DEMO INTERACTION: Clicking Approve on Step 4 (Finance Controller) moves the card
to Step 5 and triggers a notification badge on the VP Ops avatar in the header.

TOP METRICS BAR: Avg approval time this month: 1h 47m | Pending: 3 | Overdue: 1
```

---

### A.6 — Workforce Compliance Screen

```
Build a React component for the M6 Workforce Compliance screen of [PROJECT_NAME].

LAYOUT: Top half — donut chart showing workforce compliance rate (94.4%),
with a legend showing Fully Compliant (134), Expiring Soon (5), Expired (3).
Below: two-column layout — left column: 'Expiring in 30 Days' list with name,
cert name, expiry date, and 'Send Reminder' button per row.
Right column: 'Already Expired — Action Required' list with red warning styling,
name, cert, days overdue, and 'Block from permits' toggle (pre-toggled ON).

BOTTOM SECTION: Employee search — type a name to see their full cert portfolio.
Show sample result for 'Arjun Mehta' — 8 certs, 6 current, 2 pending completion.

Use sample data from M6.1 demo script. Styling: match platform theme.
Use Recharts for the donut chart. React + Tailwind.
```

---

### A.7 — Management Reporting & BI Screen

```
Build a React component for the M7 Management Reporting screen of [PROJECT_NAME].

LAYOUT: Top row — 4 KPI metric cards (outlined above in A.0 master prompt).
Second row — two charts side by side:
  Left (60%): Bar chart — monthly gross oil production vs target (12 months,
  Oct 2024 – Sep 2025). Use Recharts BarChart. Bars: navy actual, gold target.
  Right (40%): Donut chart — OPEX breakdown by category (Chemicals 28%,
  Labour 24%, Equipment 19%, Maintenance 16%, Other 13%).

Third row: AI query interface — label 'Ask a question about your operations'.
Input field + Submit button. On submit, show a hardcoded response card
with the answer text + 2 source chips. Use demo Q&A from M7.2 script.

Bottom row: auto-report schedule table — report name, frequency, last generated,
next scheduled, recipient count, and Download button for each.

STYLING: Premium, executive-grade dashboard. Clean cards, minimal borders.
Rs. currency format. Dates: DD MMM YYYY. React + Tailwind + Recharts.
```

---

## Appendix B — Brand & Tech Constants

Replace all placeholder values below before distributing this document or using these constants in any prototype, codebase, or customer-facing material.

### B.1 Product Identity

| Key              | Value                              |
| ---------------- | ---------------------------------- |
| `PRODUCT_NAME`   | [PROJECT_NAME]                     |
| `COMPANY_NAME`   | [COMPANY_NAME]                     |
| `TAGLINE`        | [TAGLINE]                          |
| `WEBSITE`        | [WEBSITE]                          |
| `VERSION`        | [VERSION]                          |
| `MARKET`         | [MARKET / REGION]                  |
| `CLASSIFICATION` | [PUBLIC / INTERNAL / CONFIDENTIAL] |

### B.2 Brand Colours

| Key            | Value                                             |
| -------------- | ------------------------------------------------- |
| `PRIMARY_NAVY` | `#0D1B2A` — headers, sidebar, primary text        |
| `ACCENT_BLUE`  | `#1A6B8A` — section headers, links, active states |
| `ACCENT_MID`   | `#2596BE` — secondary accents, chart series 1     |
| `ACCENT_LIGHT` | `#D6EEF7` — hover backgrounds, subtle fills       |
| `GOLD`         | `#C8922A` — primary CTA, highlights, badges       |
| `GOLD_LIGHT`   | `#FDF3E3` — warning/callout backgrounds           |
| `TEAL`         | `#0F7B6C` — success states, demo box header       |
| `TEAL_LIGHT`   | `#E3F4F2` — demo box background                   |
| `CORAL`        | `#C0392B` — critical alerts, expiry warnings      |
| `CORAL_LIGHT`  | `#FDECEA` — critical alert background             |
| `PURPLE`       | `#6B3FA0` — prompt box header, secondary accent   |
| `PURPLE_LIGHT` | `#F0EAF9` — prompt box background                 |
| `BORDER`       | `#D1D9E3` — card borders, table lines             |
| `MUTED`        | `#8892A0` — secondary text, footer labels         |

### B.3 Typography

| Key              | Value                                   |
| ---------------- | --------------------------------------- |
| `FONT_PRIMARY`   | Arial (universal, all platforms)        |
| `FONT_MONO`      | Courier New (code blocks, demo scripts) |
| `SIZE_H1`        | 36pt / 2.25rem — page titles            |
| `SIZE_H2`        | 28pt / 1.75rem — module titles          |
| `SIZE_H3`        | 24pt / 1.5rem — submodule titles        |
| `SIZE_BODY`      | 22pt / 1.375rem — body text             |
| `SIZE_SMALL`     | 20pt / 1.25rem — captions, metadata     |
| `WEIGHT_BOLD`    | 700 — headings, labels                  |
| `WEIGHT_REGULAR` | 400 — body text                         |

### B.4 Demo Entities & Sample Personnel

| Key        | Value                                                |
| ---------- | ---------------------------------------------------- |
| `PERSON_1` | Anand Sharma — VP Operations / Site Manager          |
| `PERSON_2` | Priya Menon — HSE Manager / Safety Officer           |
| `PERSON_3` | Rajesh Kumar — Well Engineer / Driller               |
| `PERSON_4` | Ravi Patel — Finance Controller                      |
| `PERSON_5` | Sushant Verma — Drilling Superintendent              |
| `PERSON_6` | Arjun Mehta — Assistant Drilling Engineer (new hire) |
| `PERSON_7` | Vijay Singh — Field Technician (expired cert demo)   |
| `PERSON_8` | Ramesh Nair — Senior Technician                      |

### B.5 Sample Projects & Operational Entities

| Key                | Value                                          |
| ------------------ | ---------------------------------------------- |
| `BLOCK_1`          | KG-DWN-98/3 — Krishna Godavari deepwater block |
| `BLOCK_2`          | CB-ONN-2010/1 — Cambay onshore block, Gujarat  |
| `BLOCK_3`          | RJ-ONN-2015/1 — Rajasthan onshore block        |
| `WELLPAD_A`        | Well Pad A — Rajasthan operations centre       |
| `WELLPAD_B`        | Well Pad B — Cambay field                      |
| `WELLPAD_C`        | Well Pad C — KG offshore platform              |
| `SAMPLE_VENDOR`    | Nat Petrosols Pvt. Ltd.                        |
| `SAMPLE_REGULATOR` | PNGRB / DGH / MoPNG / OISD / PESO / DGMS       |

### B.6 Format Preferences

| Key             | Value                                                         |
| --------------- | ------------------------------------------------------------- |
| `CURRENCY`      | Rs. [amount] — Indian Rupee (e.g. Rs. 1.84 crore, Rs. 47,200) |
| `LARGE_NUMBERS` | Indian format: lakh / crore (not million/billion)             |
| `DATE_FORMAT`   | DD MMM YYYY (e.g. 28 Oct 2025)                                |
| `DATE_SHORT`    | DD-MMM-YY (e.g. 28-Oct-25)                                    |
| `TIME_FORMAT`   | HH:MM IST (24-hour, Indian Standard Time)                     |
| `LANGUAGE`      | English (Indian) — formal, no regional slang                  |
| `VOLUME_OIL`    | bbl (barrels) and KL (kilolitres) — dual labelling            |
| `VOLUME_GAS`    | MMSCFD (million standard cubic feet per day)                  |

### B.7 Compliance & Regulatory References

| Key             | Value                                                              |
| --------------- | ------------------------------------------------------------------ |
| `REGULATOR_1`   | PNGRB — Petroleum and Natural Gas Regulatory Board                 |
| `REGULATOR_2`   | DGH — Directorate General of Hydrocarbons                          |
| `REGULATOR_3`   | MoPNG — Ministry of Petroleum and Natural Gas                      |
| `SAFETY_BODY_1` | OISD — Oil Industry Safety Directorate                             |
| `SAFETY_BODY_2` | DGMS — Directorate General of Mines Safety                         |
| `SAFETY_BODY_3` | PESO — Petroleum and Explosives Safety Organisation                |
| `ESG_STANDARD`  | BRSR — Business Responsibility and Sustainability Reporting (SEBI) |
| `ESG_FRAMEWORK` | GRI Standards — Global Reporting Initiative                        |

### B.8 Preferred Tech Stack

| Key           | Value                                               |
| ------------- | --------------------------------------------------- |
| `FRONTEND`    | React 18 + TypeScript + Tailwind CSS                |
| `CHARTS`      | Recharts (preferred) or Chart.js                    |
| `ICONS`       | Lucide React                                        |
| `STATE`       | Zustand (lightweight) or React Context              |
| `AI_API`      | Anthropic Claude API (claude-sonnet-4-6) — primary  |
| `DOCUMENT_AI` | LLM + OCR pipeline (Tesseract or AWS Textract)      |
| `BACKEND`     | Node.js + Express or Python FastAPI                 |
| `DATABASE`    | PostgreSQL + pgvector (for document embeddings)     |
| `AUTH`        | JWT + role-based access control                     |
| `DEPLOYMENT`  | AWS (preferred) or Azure — [MARKET / REGION] region |
| `COMPLIANCE`  | ISO 27001 aligned. Data residency: India preferred  |

---

_— End of Document —_

_[COMPANY_NAME] · [PRODUCT_NAME] · v[VERSION] · [CLASSIFICATION]_
