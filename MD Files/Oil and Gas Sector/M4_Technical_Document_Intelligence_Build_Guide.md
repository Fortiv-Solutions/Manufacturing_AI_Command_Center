# M4 — Technical Document Intelligence & Knowledge Management
### [PROJECT_NAME] · AI Operations Platform · [WEBSITE]

> **Module Tagline:** Gives every engineer instant, plain-English access to the full depth of the company's technical documentation — and automates the most time-consuming writing tasks so senior engineers spend their time on decisions, not documents.

**Document Type:** Module Build Guide & Parameter Reference
**Module Code:** M4
**Total Sub-Modules:** 4 (4.1 → 4.4)
**Version:** [VERSION]
**Company:** [COMPANY_NAME]
**Classification:** [PUBLIC / INTERNAL / CONFIDENTIAL]
**Market:** [MARKET / REGION] — India Focus (upstream oil and gas operations)

---

## Module Overview

### Purpose
Replace hours of daily document retrieval with a **conversational document intelligence engine** that answers plain-English questions from the full technical archive, auto-drafts engineering reports from raw field data, summarises operational meetings with extracted action items, and captures the institutional knowledge of senior engineers before it walks out the door — so your technical team spends their time on engineering, not on finding, reading, and writing documents.

### Core Problem Being Solved

| Pain Point | Without M4 | With M4 |
|---|---|---|
| Document retrieval | 2–3 hours per engineer per day searching across folders, email, and SharePoint | Answer in under 10 seconds from a plain-English query |
| Multi-document analysis | Requires a senior engineer to manually cross-reference dozens of reports | AI synthesises across all relevant documents in one response |
| End-of-well report writing | 3–5 hours for a senior drilling engineer to write from raw DDRs | AI draft in under 5 minutes — engineer reviews and approves |
| Shift handover notes | Written manually each shift — inconsistent, often incomplete | Auto-compiled from logged activities — consistent every shift |
| Meeting action tracking | Actions noted manually, circulated by email, frequently lost | AI extracts all actions, assigns owners, sends reminders |
| Institutional knowledge | Exists in senior engineers' heads — lost on departure or retirement | Captured, indexed, and searchable by the full team |
| New engineer ramp-up | Months before a new hire can navigate the document archive | Answers in plain English from day one |

### Demo Wow Moment
**Live cross-document query answered in 10 seconds** — the user types: *'What were the top 3 causes of NPT in the Cambay Basin wells drilled between 2018 and 2022, and which well had the worst vibration issues?'* The platform returns a structured answer citing data from 14 different daily drilling reports, with the specific well names, dates, NPT hours, and the source document for each finding. No search query, no spreadsheet, no analyst — just a question and a cited, structured answer.

---

## Module-Level Parameters

| Parameter | Value |
|---|---|
| Module ID | M4 |
| Module Name | Technical Document Intelligence & Knowledge Management |
| Sub-module Count | 4 |
| Primary Output | Cited answers from document archive + auto-drafted engineering reports + meeting action logs + indexed institutional knowledge base |
| Primary Users | Drilling Engineer, Well Engineer, Operations Manager, Reservoir Engineer, New Graduate Engineer, VP Operations |
| Query Response Time | Under 10 seconds for single-document queries; under 30 seconds for multi-document synthesis |
| Supported Document Types | PDF (digital and scanned), Word, Excel, structured text, email threads, handwritten field notes (via OCR) |
| Report Generation Time | Under 5 minutes from raw input documents |
| Document Archive Scale | Designed for archives of 100 to 100,000+ documents |
| Languages | English (primary), Hindi |
| Compliance References | DGH reporting standards, PSC/RSC documentation obligations, OISD reporting requirements |
| Currency Format | Rs. Indian Rupee — Lakhs (L) and Crores (Cr) |
| Demo Financial Period | FY 2024–25 (Apr 2024 – Mar 2025) |

---

## Module Pages & Navigation Structure

```
M4 — Technical Document Intelligence & Knowledge Management
│
├── [Page 1]  Module Dashboard / Overview              ← Landing page for M4
│             (KPIs, document archive health, recent queries, report queue, knowledge gaps)
│
├── [Page 2]  4.1  Natural Language Search Across Technical Documents
│             (Query interface, cited answer panel, document viewer, search history)
│
├── [Page 3]  4.2  Engineering Report & Summary Auto-Generation
│             (Report type selector, source document upload, draft output, edit and approve)
│
├── [Page 4]  4.3  Meeting Summarisation & Action Tracking
│             (Transcript input, AI summary, action item list, reminder status, overdue tracker)
│
└── [Page 5]  4.4  Institutional Knowledge Capture & Search
              (Knowledge base browser, capture interface, gap alert panel, expert query)
```

---

## Page 1 — Module Dashboard (M4 Overview)

### Purpose
The landing screen for Module 4. Gives a full operational view of the document intelligence engine — archive status, recent queries, report drafts in progress, outstanding meeting actions, and institutional knowledge gaps — all in one screen.

### Layout
- **Top Stats Bar** (4 KPI cards across)
- **Centre Left:** Recent query log — last 10 queries with response time and confidence score
- **Centre Right:** Document archive health donut + knowledge gap summary
- **Bottom:** Quick-access tiles to each sub-module (4.1 → 4.4) + recent activity log

### KPI Cards (Top Stats Bar)

| Card | Metric | Mock Value | Color |
|---|---|---|---|
| Documents Indexed | Total documents in the searchable archive | 847 | Accent Blue #1A6B8A |
| Queries Today | Natural language queries run in the last 24 hours | 34 | Success Teal #0F7B6C |
| Reports in Draft | Auto-generated reports awaiting engineer review | 3 | Gold #C8922A |
| Actions Overdue | Meeting action items past their due date | 2 | Danger Coral #C0392B (pulsing) |

### Document Archive Health Donut Chart
Recharts donut showing archive completeness and currency by document category:

| Category | Mock Coverage | Color |
|---|---|---|
| Daily Drilling Reports | 98% | #0F7B6C |
| Well Completion Reports | 91% | #1A6B8A |
| Production Logs | 96% | #2596BE |
| Equipment Manuals | 74% | #E8A838 |
| Geotechnical Studies | 68% | #C0392B |

### Recent Query Log Strip
Compact log showing:
- Query text (truncated to 60 characters)
- Queried by (user name)
- Documents searched (count)
- Response time
- Confidence score
- Timestamp

### Sub-Module Quick Access Tiles (Bottom Row)
Four clickable tiles, each showing:
- Sub-module number + name
- One-line description
- Status indicator (Active / Idle)
- Key stat for today (queries run / drafts in queue / actions open / knowledge items added)

---

## Page 2 — Sub-Module 4.1: Natural Language Search Across Technical Documents

### What It Is
A conversational search interface that allows any user — from VP Operations to a new graduate engineer — to query the company's full technical document archive using plain English questions, receiving structured, cited answers drawn from original source documents in under 10 seconds.

### Supported Document Types & Indexing

| Document Type | Formats | Indexing Method | Typical Document Count |
|---|---|---|---|
| Daily Drilling Reports (DDR) | PDF, Excel, structured text | Full-text + table extraction | 200–500 per active block per year |
| Well Completion Reports | PDF, Word | NLP + section extraction | 1 per well drilled |
| Production Logs | PDF, Excel, CSV | Structured data parse + NLP | Monthly per block |
| Well Test Reports | PDF, Word | NLP extraction | Per test event |
| Equipment Manuals | PDF (scanned and digital) | OCR + NLP | 50–200 in typical fleet |
| Geotechnical / Reservoir Studies | PDF, Word | NLP + figure metadata | Per study |
| HSE Incident Reports | PDF, Word | NLP extraction | Per incident |
| Regulatory Filings & Correspondence | PDF, Word | NLP extraction | Per filing period |
| Email threads (technical) | .eml, .msg | NLP extraction | Selective ingestion |
| Handwritten field notes | Image (JPG, PNG), scanned PDF | OCR + NLP | Per note captured |

### Query Capability Levels

| Query Type | Description | Mock Example |
|---|---|---|
| Single-fact lookup | One specific data point from one document | "What was the mud weight used in the Well B-07 completion?" |
| Multi-document synthesis | Answer requiring data from multiple documents | "Which wells had casing failures and what were the causes?" |
| Comparative analysis | Side-by-side comparison across wells or periods | "Compare ROP performance in Phase 2 across all Cambay wells" |
| Trend analysis | Pattern identification across a time series | "What NPT causes were most common in the last 3 years?" |
| Regulatory lookup | Specific regulatory requirement from ingested circulars | "What is the max H2S concentration allowed on the Rajasthan block?" |
| Expert knowledge query | Answers from captured institutional knowledge items | "Why was directional drilling avoided in the northern sector?" |

### Answer Components

| Component | Description | Mock Example |
|---|---|---|
| Direct answer | Plain-English answer to the question | "Class G cement with 35% fly ash and 3% CaCl2 accelerator." |
| Supporting detail | Additional context from the source | Section 4.3 describes the full mix design and rationale |
| Confidence score | AI confidence in the extracted answer | 97% |
| Source citations | Document name, page, and section for each cited fact | Well B-07 Completion Report, Page 22, Section 4.3 |
| Source preview | Highlighted excerpt from source document in side panel | [Highlighted paragraph shown on click] |
| Related queries | Suggested follow-up questions | "What BHA was run in the Well B-07 production casing?" |

### Page Layout
**Top Search Bar:** Plain-English query input (full width, prominent) + "Search" button (Gold) + document scope selector (All Documents / Well Reports / DDRs / Production / Regulatory) + date range filter
**Main Area (Left 60%):** Answer panel — structured answer with inline citation chips; each chip clickable to open source preview
**Main Area (Right 40%):** Source viewer — highlighted source document excerpt with page reference; tabs for each cited source
**Below Answer:** Confidence score badge + documents searched count + query time + "Save to Knowledge Base" button
**Bottom:** Query history — last 10 queries for this user, clickable to reload

### Mock Demo Data — Query Responses

```
// QUERY 1: 'What cement blend was used in the Well B-07 surface casing?'
ANSWER: Class G cement with 35% fly ash and 3% CaCl2 accelerator was used
        for the surface casing cement job.
SOURCE: Well B-07 Completion Report, Page 22, Section 4.3 [click to view]
CONFIDENCE: 97% | Documents searched: 1 | Response time: 00:00:04

// QUERY 2: 'Which wells in this portfolio had casing failures and what were the causes?'
ANSWER: Three wells have recorded casing integrity issues:
        — Well B-07 (2019): Corrosion at 2,140m — attributed to H2S partial
          pressure exceeding design threshold in production casing
        — Well C-11 (2021): Mechanical damage at 1,870m during workover — casing
          deformed by overweight workover string run without centraliser
        — Well D-03 (2023): Cement failure at shoe — gas migration in annulus
          detected 14 days post-cement
SOURCES: [Well B-07 Workover Report 2019, p.8], [Well C-11 Workover Report 2021, p.4],
         [Well D-03 Post-Drill Review 2023, p.12]
CONFIDENCE: 94% | Documents searched: 23 | Response time: 00:00:09

// QUERY 3: 'What is the maximum allowable H2S concentration in Rajasthan Block gas?'
ANSWER: The Block RJ-ONN-2015/1 PSC sets a maximum H2S concentration of 5,000 ppm
        in produced gas at the wellhead (Clause 11.4(b)). The OISD-STD-116 worksite
        limit is 20 ppm; the contractor PPE specification requires breathing apparatus
        at concentrations above 10 ppm.
SOURCES: [Block RJ-ONN-2015/1 PSC, Clause 11.4(b)], [OISD-STD-116, Section 6]
CONFIDENCE: 99% | Documents searched: 4 | Response time: 00:00:06

// QUERY 4 (multi-document synthesis):
// 'What were the top 3 causes of NPT in Cambay Basin wells 2018-2022?'
ANSWER: Based on 14 Daily Drilling Reports across 6 wells (2018–2022):
        1. Stuck pipe events: 34.2% of total NPT (47.3 hours) — predominantly
           at the Kalol formation transition (2,100–2,400m)
        2. BOP testing and well control events: 22.8% (31.5 hours)
        3. Equipment failure (surface equipment, primarily pump and rotary): 19.4% (26.8 hours)
        Well CB-ONN-14 had the worst vibration-induced NPT: 18.2 hours across
        3 separate events in the 12.25" section.
SOURCES: [14 DDRs cited — CB-ONN-11 through CB-ONN-16, 2018–2022]
CONFIDENCE: 91% | Documents searched: 14 | Response time: 00:00:11
```

### Anomaly & Confidence Rules

| Rule | Trigger | System Action |
|---|---|---|
| Low confidence answer | Confidence score <75% | Answer shown in amber with "Low confidence — verify source" warning |
| Conflicting sources | Two or more documents provide contradictory data | Both values shown with source reference; user prompted to verify |
| No answer found | Query returns no relevant results in the archive | Explicit "No relevant documents found" message — suggest adding document |
| Partial answer | Answer found for part of a multi-part query | Answered parts shown; unanswered parts flagged as "Not found in archive" |
| Scanned document | Answer drawn from OCR-processed scanned document | OCR confidence score shown alongside answer confidence |

### Key UI Elements
- **Inline citation chips** — every fact in the answer has a clickable chip showing document name and page; click opens the source preview panel
- **Source highlighting** — the relevant passage in the source document is highlighted in gold in the preview panel
- **Confidence colour coding** — answer border colour reflects confidence: Teal (≥95%) / Blue (85–94%) / Amber (75–84%) / Coral (<75%)
- **Document scope filter** — user can restrict the search to a subset of the archive (e.g. only DDRs, or only a specific block)
- **Query history** — full query history per user, searchable; any prior query can be re-run or shared with a colleague
- **"Save to Knowledge Base"** — high-value answers can be saved as knowledge items for faster future retrieval

### Why It Matters
The value of a company's technical knowledge is only realised if it can be accessed when needed. In [MARKET / REGION]'s upstream sector, senior drilling engineers spend 2–3 hours per day on document retrieval tasks — time that adds zero technical value. When information locked inside hundreds of documents becomes instantly queryable in plain English, that time is returned to engineering work. More critically, when any engineer can access the full depth of the archive — not just those who know which folder it lives in — institutional knowledge stops being a bottleneck.

---

## Page 3 — Sub-Module 4.2: Engineering Report & Summary Auto-Generation

### What It Is
A generative AI writing assistant that ingests raw field data, daily logs, and previous report templates and produces a structured, 90% complete engineering report draft in under 5 minutes — turning a 3–5 hour writing task into a 20-minute review and approval exercise.

### Supported Report Types

| Report Type | Primary Inputs | Typical Pages | Generation Time |
|---|---|---|---|
| End-of-Well Summary | 14–30 DDRs + well schematic + mud log summary | 12–18 pages | 3–5 minutes |
| Monthly Production Report | Production logs + injection data + HSE summary | 6–10 pages | 2–3 minutes |
| Well Performance Analysis | Production history + test data + completion report | 8–14 pages | 3–5 minutes |
| Workover Completion Report | Pre-job programme + daily workover reports + test results | 8–12 pages | 3–4 minutes |
| NPT & Trouble Analysis | DDR NPT logs + incident reports | 4–8 pages | 2–3 minutes |
| Shift Handover Note | Today's activity log + outstanding actions + equipment status | 1–2 pages | Under 1 minute |
| Management Update | Weekly KPIs + exception items + action status | 2–3 pages | Under 2 minutes |

### Report Generation Parameters

| Parameter | Description | Mock Example |
|---|---|---|
| `report_type` | Type of report being generated | End-of-Well Summary |
| `report_subject` | Well, block, or asset the report covers | Well B-14, Block CB-ONN-2010/1 |
| `source_documents` | List of input documents used | 14 DDRs + well schematic + mud log |
| `report_period` | Time period covered by the report | 14 Oct 2025 – 28 Oct 2025 |
| `template_reference` | Company standard report template applied | [COMPANY_NAME] EoW Template v2.3 |
| `draft_completeness` | AI assessment of draft completeness | 87% |
| `flagged_sections` | Sections requiring human input or verification | 3 sections flagged |
| `estimated_time_saved` | Estimated manual writing time replaced | 3.5 hours |
| `generation_time` | Time taken to produce the draft | 4 minutes 12 seconds |
| `draft_status` | Current status of the draft | Pending engineer review |
| `reviewed_by` | Engineer who reviewed and approved the draft | Rajesh Kumar |
| `approved_at` | Timestamp of approval | 28 Oct 2025 16:44 IST |

### What the AI Extracts Per Report Type

**End-of-Well Summary:**

| Section | Data Source | Mock Content |
|---|---|---|
| Executive Summary | DDRs, final depth, cost records | Total depth, drilling days, NPT summary, cost vs AFE |
| Drilling Performance | DDRs phase by phase | ROP per phase, BHA details, mud system |
| NPT Analysis | DDR NPT log entries | Total NPT hours, causes, percentage by category |
| Well Cost Summary | Cost records, AFE | Final cost vs AFE, major cost drivers |
| Lessons Learned | NPT events, trouble log | Key technical learnings for future wells |
| Recommendations | Pattern analysis across inputs | BHA configuration, mud weight window, zone flags |

### Page Layout
**Top Control Bar:** Report type selector (dropdown) + "Select Source Documents" button + template selector + period selector + "Generate Draft" button (Gold, primary)
**Main Area (Left 35%):** Source document panel — uploaded or selected documents with processing status badges (Ingested / Processing / Failed); document count and total pages shown
**Main Area (Right 65%):** Draft report panel — AI-generated report in the company template format; flagged sections highlighted in gold; inline editing enabled throughout
**Top of Draft:** Progress bar: "87% complete | 3 sections flagged for review" + estimated time saved badge
**Right Margin:** Per-section completeness indicator — green tick (complete) / gold flag (needs review) / red X (no source data)
**Bottom:** "Approve & Finalise" button (Gold) + "Export to PDF" button + "Export to Word" button + "Save Draft" button

### Mock Demo Data — Generated Report Output

```
// INPUT: 14 daily drilling reports + well schematic + mud log summary
//         Well B-14, Block CB-ONN-2010/1, Cambay Onshore
// REPORT TYPE: End-of-Well Summary

// AUTO-DRAFT — SECTION 1: EXECUTIVE SUMMARY
Well B-14 was drilled to a total depth of 3,847m MD (3,312m TVD) in 14 days,
achieving a 96% on-bottom efficiency. A total of 3 NPT events were recorded,
accounting for 8.4 hours of lost time, primarily due to stuck pipe at 2,940m
in the Cambay Shale section. Final well cost was Rs. 8.47 crore, 6.2% under
the approved AFE of Rs. 9.03 crore.

// SECTION 2: DRILLING PERFORMANCE SUMMARY
Phase 1 — 26" Surface Section (0–248m):
  Drilled in 1.5 days | Zero NPT | ROP avg: 42 m/hr
  BHA: PDC bit + motor + MWD | Mud: Spud gel, 1.05 SG

Phase 2 — 17.5" Intermediate Section (248–1,420m):
  Drilled in 4.2 days | NPT: 1.8 hours (trip for bit wear) | ROP avg: 28 m/hr
  BHA: Tri-cone bit + stabiliser + MWD/LWD | Mud: KCl polymer, 1.22 SG

Phase 3 — 12.25" Production Section (1,420–3,847m):
  Drilled in 8.3 days | NPT: 6.6 hours (stuck pipe at 2,940m — 5.2hr; pump
  failure at 3,400m — 1.4hr) | ROP avg: 19 m/hr
  BHA: PDC bit + RSS + MWD/LWD + neutron density | Mud: OBM, 1.58 SG

// SECTION 3: NPT ANALYSIS
Total NPT: 8.4 hours (3.5% of total well time)
  > Stuck pipe — 2,940m Cambay Shale: 5.2 hours [Source: DDR Day 10, p.3]
    Probable cause: High ECD during connections — mud weight at lower end of window
  > Pump failure (HH pump #2): 1.4 hours [Source: DDR Day 13, p.2]
  > BOP function test: 1.8 hours [Source: DDR Day 4, p.1]

// SECTION 5: LESSONS LEARNED [⚠ FLAGGED — engineer input required]
  > Stuck pipe event at Cambay Shale: [AI note: insufficient data in DDRs
    to confirm root cause — recommend engineer review mud logs for ECD trend]
  > [2 additional flagged items]

// DRAFT COMPLETENESS: 87% | Flagged sections: 3
// Source documents used: 14 DDRs, 1 well schematic, 1 mud log summary
// Estimated time saved vs manual writing: 3.5 hours
// Generation time: 00:04:12
```

### Flagged Section Handling

| Flag Type | Trigger | UI Indicator | Resolution |
|---|---|---|---|
| Insufficient source data | Required section has no corresponding data in input documents | Red X in section margin + gold highlight in draft | Engineer writes section manually |
| Conflicting data | Two source documents provide different values for the same field | Gold flag + both values shown with source | Engineer selects correct value |
| Low-confidence extraction | AI confidence in extracted data <80% | Amber underline + "verify this figure" tooltip | Engineer verifies against source |
| Template section not populated | Report template has a mandatory section with no AI content | Gold flag + "Section not populated" placeholder | Engineer writes or confirms not applicable |

### Key UI Elements
- **Generation progress animation** — "Reading source documents… Extracting drilling data… Applying template… Drafting narrative… Ready" — 4-minute animated sequence with document count
- **Per-section completeness indicator** — right margin shows green/gold/red status per section; hover shows reason for flag
- **Inline editing** — any part of the draft is editable in place; edits tracked with editor name and timestamp
- **Source traceability** — hover any data point in the draft to see the source document and page it was extracted from
- **Version control** — every saved draft version retained; engineer can compare drafts and restore previous versions

### Why It Matters
A senior drilling engineer spending 3–5 hours writing an end-of-well report is not using their most scarce and valuable resource — their technical judgement. When AI generates a 90% complete draft in 5 minutes, the engineer becomes a reviewer and validator rather than a transcriptionist. The report is produced faster, the engineer's time is returned to technical decisions, and the quality of reporting improves because more time is spent on analysis rather than formatting.

---

## Page 4 — Sub-Module 4.3: Meeting Summarisation & Action Tracking

### What It Is
An AI tool that transforms operational and management meeting transcripts into structured summaries with extracted action items, assigned owners, due dates, and automated reminders — eliminating the manual effort of minutes writing and ensuring that actions discussed in meetings are systematically tracked to completion.

### Supported Meeting Types

| Meeting Type | Typical Frequency | Typical Duration | Action Items Generated |
|---|---|---|---|
| Daily Production Review | Daily | 20–30 minutes | 3–8 actions |
| Weekly Operations Review | Weekly | 45–90 minutes | 6–15 actions |
| Monthly Management Review | Monthly | 60–120 minutes | 10–20 actions |
| Well Planning / Pre-Spud | Per well | 90–180 minutes | 15–30 actions |
| Incident Review | Per incident | 60–120 minutes | 8–20 corrective actions |
| HSE Committee Meeting | Monthly | 60–90 minutes | 8–15 actions |
| Contractor Coordination | Weekly | 30–60 minutes | 4–10 actions |

### Meeting Record Parameters

| Parameter | Description | Mock Example |
|---|---|---|
| `meeting_id` | Unique meeting reference | MTG-2025-0847 |
| `meeting_type` | Type of meeting | Weekly Production Review |
| `meeting_date` | Date of the meeting | 28 Oct 2025 |
| `duration_minutes` | Duration of the meeting | 52 minutes |
| `participants` | Named attendees | Anand Sharma, Priya Menon, Rajesh Kumar, Ravi Patel |
| `transcript_words` | Word count of input transcript | 1,840 words |
| `input_method` | How the transcript was provided | Pasted text / Audio transcript / Uploaded file |
| `summary_paragraphs` | Number of paragraphs in the AI summary | 3 |
| `actions_extracted` | Total action items generated | 6 |
| `actions_overdue_from_prior` | Actions carried forward from previous meeting | 2 |
| `decisions_recorded` | Explicit decisions logged | 4 |
| `reminders_sent` | Whether action reminders were auto-dispatched | Yes — sent immediately on approval |
| `summary_status` | Current status of the meeting summary | Approved — 28 Oct 2025 |

### Action Item Parameters

| Field | Description | Mock Example |
|---|---|---|
| `action_id` | Unique action reference | ACT-2025-1284 |
| `action_description` | Plain-English description of the required action | Order replacement pump impeller — Part No. MP-4027 |
| `owner` | Named person responsible for completing the action | Anand Sharma |
| `due_date` | Deadline for action completion | 04 Nov 2025 |
| `priority` | Urgency classification | High / Medium / Low |
| `meeting_reference` | Meeting from which the action was extracted | MTG-2025-0847 |
| `status` | Current completion status | Open / In Progress / Complete / Overdue / Deferred |
| `reminder_schedule` | When automated reminders are sent | 3 days before due + day of due date |
| `completion_note` | Note added on completion | Impeller ordered, PO-2025-3847 raised, ETA 07 Nov |
| `completed_at` | Timestamp of completion sign-off | — (open) |

### Page Layout
**Top Control Bar:** "New Meeting" button (Gold) + meeting type selector + date selector + participant selector
**Input Panel (Left 40%):** Transcript input — large text area for pasting transcript, or upload button for .txt / .docx / audio transcript file; word count shown; "Process Meeting" button
**Output Panel (Right 60%):** Tabbed output view — [Summary] [Actions] [Decisions] tabs
- **Summary tab:** 3-paragraph narrative summary + key discussion points list
- **Actions tab:** Structured action table with all extracted items, owner, priority, due date, status
- **Decisions tab:** Bulleted list of explicit decisions recorded in the meeting
**Bottom:** "Approve & Send Reminders" button (Gold) + "Export Minutes" button + "Link to Previous Meeting" button

### Mock Demo Data — Meeting Summarisation Output

```
// MEETING: Weekly Production Review | 28 Oct 2025 | Duration: 52 mins
// Participants: Anand Sharma, Priya Menon, Rajesh Kumar, Ravi Patel, Sushant Verma
// Input: pasted transcript — 1,840 words

// AI SUMMARY (3 paragraphs):
Production at Well Pad A recovered to 94% of target following the completion of
the Well C-07 ESP workover on 26 October. Gross oil for the week ending 27 October
was 41,280 bbl, against a target of 43,500 bbl, with the remaining shortfall
attributable to planned maintenance downtime at Pad A compressor station.

Water injection shortfall remains unresolved pending delivery of the replacement
pump impeller for the Pad B injection pump. Current injection rate is 12,400 bbl/day
against a target of 18,200 bbl/day. Anand Sharma confirmed that a purchase order
has been approved and the impeller is expected on site by 07 November.

Q3 financial closeout was approved, with OPEX confirmed at Rs. 4.8 crore against
a budget of Rs. 4.6 crore (+4.3%). Three actions from last week's meeting were
carried forward, all with revised due dates agreed by owners.

// DECISIONS RECORDED (4):
  1. Q3 OPEX closeout approved at Rs. 4.8 crore — signed off by Ravi Patel
  2. Well C-07 workover declared complete and well returned to production
  3. Pad B injection pump repair prioritised — target restoration by 10 Nov 2025
  4. B-15 spud date confirmed: 05 Nov 2025 — Sushant Verma to mobilise rig crew

// ACTIONS EXTRACTED (6 items):
  ACT-2025-1284  Order replacement pump impeller (MP-4027)
                 Owner: Anand Sharma  |  Due: 04 Nov 2025  |  Priority: HIGH
                 Status: OPEN

  ACT-2025-1285  Update emergency contact list for Well Pad B
                 Owner: Priya Menon   |  Due: 31 Oct 2025  |  Priority: HIGH
                 Status: OPEN

  ACT-2025-1286  Circulate Q4 OPEX budget template to all cost owners
                 Owner: Ravi Patel    |  Due: 05 Nov 2025  |  Priority: MEDIUM
                 Status: OPEN

  ACT-2025-1287  Confirm B-15 spud date and mobilise rig crew
                 Owner: Sushant Verma |  Due: 02 Nov 2025  |  Priority: HIGH
                 Status: OPEN

  ACT-2025-1288  Submit Q3 production data to DGH (W-10 return)
                 Owner: Rajesh Kumar  |  Due: 07 Nov 2025  |  Priority: HIGH
                 Status: OPEN

  ACT-2025-1289  Resolve Pad A gas lift valve delivery delay with vendor
                 Owner: Anand Sharma  |  Due: 06 Nov 2025  |  Priority: MEDIUM
                 Status: OPEN

// CARRIED FORWARD FROM LAST WEEK (2 — OVERDUE):
  ACT-2025-1261  Scaffold inspection at Well Pad B — Sushant Verma — was due 24 Oct
  ACT-2025-1268  Chemical inventory audit — Priya Menon — was due 25 Oct

// Reminders auto-sent to all 6 action owners at time of approval
// Overdue actions highlighted in coral and escalated to Anand Sharma
```

### Action Reminder Schedule

| Reminder Type | Trigger | Sent To |
|---|---|---|
| Assignment notification | Action created and approved | Assigned owner — immediately |
| 3-day advance reminder | 3 days before due date | Assigned owner |
| Due date reminder | Day of due date | Assigned owner |
| Overdue alert | Day after due date with no completion | Assigned owner + meeting chair |
| Escalation | 3 days overdue with no completion | Assigned owner + their line manager |

### Key UI Elements
- **Transcript-to-summary animation** — input panel shows "Reading transcript… Identifying decisions… Extracting actions… Assigning owners… Summary ready" — sequential fill
- **Action table sort and filter** — sortable by owner, due date, priority, or status; filterable by meeting, owner, or overdue status
- **Carried-forward tracking** — actions not completed before the next meeting of the same type automatically appear as "Carried Forward" in the new meeting's action panel
- **Owner accountability dashboard** — click any person's name to see all open actions assigned to them across all meetings
- **One-click completion** — owner can mark an action complete directly from the reminder notification, with optional completion note
- **Export as minutes** — approved summary + decisions + action table formatted as a professional meeting minutes document for distribution

### Why It Matters
Operations teams hold daily, weekly, and monthly review meetings. In a 50-person operations department, the combined time spent writing, distributing, and chasing meeting actions manually runs into hundreds of hours per year. More critically, actions discussed in meetings but not systematically tracked tend not to get done — creating operational risk from unresolved issues, delayed procurement, and forgotten commitments. When AI extracts and tracks every action automatically, the gap between discussion and execution closes.

---

## Page 5 — Sub-Module 4.4: Institutional Knowledge Capture & Search

### What It Is
A structured knowledge base system that captures the expertise of senior engineers and field veterans — through document ingestion, annotated case studies, and expert interview transcripts — indexing it in a searchable taxonomy that makes decades of accumulated experience accessible to the full organisation, including engineers who joined yesterday.

### Knowledge Item Types

| Knowledge Type | Source | Description | Mock Example |
|---|---|---|---|
| Lessons Learned | Post-well and post-incident reports | Documented technical decisions with outcomes | Why formation stabiliser was added in the Kalol section |
| Expert Annotation | Senior engineer note on an existing document | Handwritten or typed note capturing context not in the formal record | "These ROP figures are misleading — bit was worn from prior run" |
| Decision Record | Documented rationale for a past technical decision | Why a particular approach was chosen and by whom | Well spacing decision for Phase 3 development |
| Case Study | Structured account of a technical problem and its resolution | Structured write-up with context, analysis, and outcome | How the stuck pipe event in CB-14 was resolved |
| Interview Transcript | Structured interview with departing or senior expert | Expert's knowledge captured before departure | Chief Geologist's knowledge of northern sector instability |
| Field Observation | Site-specific condition or equipment behaviour note | Practical knowledge about specific site or equipment | Generator #3 runs rough below 40°C ambient — needs pre-heat |

### Knowledge Taxonomy

Knowledge items are indexed across multiple dimensions for efficient retrieval:

| Dimension | Values | Mock Example |
|---|---|---|
| Well / Block | Specific well or block reference | Well B-07, Block CB-ONN-2010/1 |
| Formation | Geological formation reference | Kalol Formation, Cambay Shale |
| Operation Type | Drilling / Production / Workover / HSE / Reservoir | Drilling |
| Equipment Type | Equipment category or specific asset | PDC bit, ESP pump, gas lift valve |
| Knowledge Category | Lessons Learned / Decision Record / Expert Note / Case Study | Lessons Learned |
| Risk Level | High / Medium / Low (severity of ignoring this knowledge) | High |
| Expert Source | Name of contributing expert | Sushant Verma, Drilling Superintendent |
| Date Captured | When the item was added | 14 Sep 2025 |

### Knowledge Gap Detection

The system automatically identifies areas of the technical archive where documentation is sparse — indicating either genuinely unexplored territory or, more commonly, knowledge that exists only in people's heads:

| Gap Type | Trigger | Alert |
|---|---|---|
| Well with no post-drill review | Well completed but no end-of-well summary in archive | Flag to engineering lead |
| Formation with no lessons learned | Formation drilled multiple times but no structured learnings captured | Flag to drilling supervisor |
| Departing expert with no knowledge capture | Personnel record shows departure date within 60 days | Alert to line manager — initiate knowledge capture session |
| Equipment with no failure history | Equipment type in asset register but no maintenance or failure records | Flag to maintenance lead |
| Regulatory change with no updated guidance | New circular ingested but no internal guidance note referencing it | Flag to compliance lead |

### Page Layout
**Top Stats Bar:** Total knowledge items (847) | Added this month (14) | Knowledge gaps detected (3) | Experts profiled (6)
**Search Bar:** Plain-English query input + category filter + well/block filter + expert filter
**Main Area (Left 30%):** Knowledge taxonomy browser — collapsible tree: by Block → by Well → by Formation → by Category; item count shown per node
**Main Area (Right 70%):** Knowledge item viewer — selected item shown with full text, source reference, expert attribution, date, and related items
**Bottom Left:** "Add Knowledge Item" button (Gold) + "Start Expert Interview" button
**Bottom Right:** Knowledge gap panel — list of detected gaps with "Initiate Capture" action per gap

### Mock Demo Data — Knowledge Base Queries & Gap Detection

```
// QUERY: 'Why was directional drilling avoided in the northern sector of Block XYZ?'

ANSWER: Based on three captured knowledge articles and one lessons-learned document:
  The northern sector has a documented formation instability problem at the
  Deccan Trap interface (2,200–2,400m). Two directional wells drilled in
  2009–2011 (Well XYZ-04 and XYZ-05) experienced severe wellbore collapse
  events at this interval, with total mud loss and stuck BHA in both cases.
  A decision was made by the Chief Geologist in 2012 to restrict all northern
  sector wells to vertical or near-vertical profiles (max inclination 8°) pending
  further geomechanical study. The study has not yet been commissioned.

SOURCES:
  [Lessons Learned Report 2012-03, p.4]
  [Well XYZ-04 Post-Drill Review 2010, p.9]
  [Well XYZ-05 Workover Report 2011, p.6]
  [Expert Interview — Chief Geologist, 2019, p.2]
CONFIDENCE: 96% | Knowledge items referenced: 4

// KNOWLEDGE BASE STATUS:
  Total indexed items: 847
  Wells covered: 24 of 27 active wells (3 with no post-drill documentation)
  Formations covered: 12 formations documented
  Experts profiled: 6 (2 recently retired — knowledge captured)
  Last updated: Today

// KNOWLEDGE GAPS DETECTED (3):
  > Wells B-11, B-12, B-13: No post-drill formation data documented
    — 3 wells drilled between 2016–2018 with no completion reports in archive
    — Action: Locate physical records or interview drilling supervisor
    — Risk: HIGH — these wells penetrated the Hazad formation, no learnings captured

  > Departing expert: Sushant Verma (Drilling Superintendent) — notice given
    — 23 years of field experience in Cambay Basin wells
    — Knowledge capture session recommended before 30 Nov 2025 (last working day)
    — Action: [Schedule Knowledge Capture Session]

  > Formation: Olpad Sandstone — drilled in 4 wells, no structured lesson learned
    — High ROP variability noted in DDRs but no root cause documented
    — Action: [Create Lessons Learned Item]
```

### Knowledge Capture Interface (Expert Session)

When "Start Expert Interview" is selected, a structured capture session guides the expert through a series of prompts tailored to their role and tenure:

| Prompt Category | Example Prompt | Output |
|---|---|---|
| Formation knowledge | "What non-obvious characteristics of the Kalol formation would you want a new engineer to know?" | Structured formation note |
| Equipment behaviour | "Which pieces of equipment on this site behave differently from the manual, and how?" | Equipment behaviour note |
| Decision history | "What are the 3 most important technical decisions made on Block XYZ-07 in your time here, and why?" | Decision records |
| Failure lessons | "What was the most instructive failure you were involved in, and what did the team learn from it?" | Lessons learned item |
| Who else to ask | "Which colleagues have knowledge in areas you don't, and what would you ask them?" | Knowledge network mapping |

### Key UI Elements
- **Knowledge taxonomy tree** — collapsible left panel organising all knowledge by block, well, formation, and category; item counts shown per node; click any node to browse items
- **Related items panel** — every knowledge item shows automatically identified related items (same well, same formation, same operation type)
- **Expert attribution badge** — every item shows the contributing expert's name, role, and date captured
- **Gap alert panel** — detected knowledge gaps shown with risk classification and one-click "Initiate Capture" action
- **Knowledge health score** — per-block or per-well coverage score showing what percentage of expected knowledge areas have documented items
- **Export for onboarding** — select a well, block, or topic and export a compiled "onboarding pack" of all relevant knowledge items for a new team member

### Why It Matters
The [MARKET / REGION] energy sector faces a significant demographic challenge: a generation of senior engineers who accumulated decades of field experience in the Cambay Basin, KG Basin, and Rajasthan blocks are reaching retirement age. When their expertise is not systematically captured, organisations repeatedly make the same mistakes, reinvent the same solutions, and lose the context behind critical past decisions. This module is the structural answer to that problem — and the return on investment compounds with every new engineer who joins the team.

---

## Complete Module 4 — Master Parameter Reference

### All Data Fields Across M4

| Field Name | Type | Sub-module | Description |
|---|---|---|---|
| `document_id` | String | 4.1 | Unique identifier for each indexed document |
| `document_type` | Enum | 4.1 | DDR / Completion Report / Production Log / Manual / Study / etc. |
| `document_title` | String | 4.1 | Full document title |
| `document_date` | Date | 4.1 | Date of the document |
| `document_well` | String | 4.1 | Well or block the document relates to |
| `document_pages` | Number | 4.1 | Total page count |
| `ocr_applied` | Boolean | 4.1 | Whether OCR processing was applied |
| `ocr_confidence` | Number (%) | 4.1 | OCR confidence score (for scanned documents) |
| `index_status` | Enum | 4.1 | Indexed / Processing / Failed / Excluded |
| `query_id` | String | 4.1 | Unique identifier for each submitted query |
| `query_text` | Text | 4.1 | Full text of the submitted query |
| `query_scope` | Enum | 4.1 | All Documents / DDRs / Well Reports / Production / Regulatory |
| `query_response` | Text | 4.1 | AI-generated answer text |
| `query_confidence` | Number (%) | 4.1 | Confidence score for the query response |
| `query_sources` | Array | 4.1 | List of cited source documents with page references |
| `query_time_ms` | Number | 4.1 | Query response time in milliseconds |
| `query_documents_searched` | Number | 4.1 | Number of documents searched to answer the query |
| `report_id` | String | 4.2 | Unique report generation reference |
| `report_type` | Enum | 4.2 | End-of-Well / Monthly Production / Well Performance / Workover / NPT Analysis / Handover / Management Update |
| `report_subject` | String | 4.2 | Well, block, or asset the report covers |
| `report_source_documents` | Array | 4.2 | Input documents used to generate the draft |
| `report_period` | DateRange | 4.2 | Time period covered |
| `report_template` | String | 4.2 | Template reference applied |
| `report_draft_completeness` | Number (%) | 4.2 | AI assessment of draft completeness |
| `report_flagged_sections` | Array | 4.2 | Sections requiring human input or verification |
| `report_generation_time` | Duration | 4.2 | Time taken to generate the draft |
| `report_time_saved` | Duration | 4.2 | Estimated manual writing time saved |
| `report_edit_log` | Array | 4.2 | Log of engineer edits: section, change, editor, timestamp |
| `report_status` | Enum | 4.2 | Draft / Under Review / Approved / Published / Archived |
| `report_approved_by` | String | 4.2 | Name of engineer who approved the report |
| `report_approved_at` | DateTime | 4.2 | Timestamp of approval |
| `meeting_id` | String | 4.3 | Unique meeting reference |
| `meeting_type` | Enum | 4.3 | Daily Production / Weekly Ops / Monthly Mgmt / Well Planning / Incident Review / HSE / Contractor |
| `meeting_date` | Date | 4.3 | Date of the meeting |
| `meeting_duration_min` | Number | 4.3 | Duration in minutes |
| `meeting_participants` | Array | 4.3 | Named attendees |
| `meeting_transcript_words` | Number | 4.3 | Word count of input transcript |
| `meeting_summary_text` | Text | 4.3 | AI-generated narrative summary |
| `meeting_decisions` | Array | 4.3 | Extracted decisions: description, decision-maker |
| `action_id` | String | 4.3 | Unique action item reference |
| `action_description` | Text | 4.3 | Plain-English action description |
| `action_owner` | String | 4.3 | Assigned owner name |
| `action_due_date` | Date | 4.3 | Action due date |
| `action_priority` | Enum | 4.3 | High / Medium / Low |
| `action_status` | Enum | 4.3 | Open / In Progress / Complete / Overdue / Deferred |
| `action_meeting_ref` | String | 4.3 | Meeting from which the action was extracted |
| `action_completion_note` | Text | 4.3 | Note added on action completion |
| `action_completed_at` | DateTime | 4.3 | Completion timestamp |
| `knowledge_item_id` | String | 4.4 | Unique knowledge item reference |
| `knowledge_type` | Enum | 4.4 | Lessons Learned / Expert Annotation / Decision Record / Case Study / Interview / Field Observation |
| `knowledge_title` | String | 4.4 | Short title of the knowledge item |
| `knowledge_content` | Text | 4.4 | Full text content of the knowledge item |
| `knowledge_well` | String | 4.4 | Well or block the item relates to |
| `knowledge_formation` | String | 4.4 | Geological formation (if applicable) |
| `knowledge_operation_type` | Enum | 4.4 | Drilling / Production / Workover / HSE / Reservoir |
| `knowledge_expert_source` | String | 4.4 | Name of contributing expert |
| `knowledge_risk_level` | Enum | 4.4 | High / Medium / Low (risk of ignoring this knowledge) |
| `knowledge_date_captured` | Date | 4.4 | When the item was added to the knowledge base |
| `knowledge_source_ref` | String | 4.4 | Source document or interview reference |
| `knowledge_gap_type` | Enum | 4.4 | Missing Post-Drill / No Formation Lessons / Departing Expert / No Failure History / Regulatory Gap |
| `knowledge_gap_risk` | Enum | 4.4 | High / Medium / Low |

---

## Mock Data Constants (Demo-Ready)

### Demo Operator Profile

```
Operator:           [COMPANY_NAME]
Block:              XYZ-07, CB-ONN-2010/1, RJ-ONN-2015/1 — Onshore, [MARKET / REGION]
Document archive:   847 indexed documents across 3 blocks and 27 active wells
Archive age range:  1998 (earliest lease document) to present
Engineering staff:  12 (4 drilling engineers, 3 production engineers, 2 reservoir, 3 operations)
Senior experts:     6 profiled (2 recently retired — knowledge captured before departure)
Meeting cadence:    Daily production reviews + weekly ops reviews + monthly management
Action backlog:     47 open actions across all meetings (2 overdue)
DMS:                SharePoint (legacy) — being migrated to [PROJECT_NAME]
```

### Demo Personnel (Engineering & Operations)

```
Anand Sharma       — VP Operations (monthly management review chair)
Priya Menon        — HSE Manager (incident review lead)
Rajesh Kumar       — Well Engineer (primary DDR and EoW report author)
Ravi Patel         — Finance Controller (Q3 closeout approver)
Sushant Verma      — Drilling Superintendent (subject of knowledge capture — departing)
Arjun Mehta        — Assistant Drilling Engineer (primary beneficiary of NL search and knowledge base)
```

### Demo Wells & Archive Content

```
Well B-07          CB-ONN-2010/1 — drilled 2019 — casing failure on record
Well B-14          CB-ONN-2010/1 — drilled Oct 2025 — EoW report demo subject
Well C-07          XYZ-07 — ESP workover completed 26 Oct 2025
Well C-11          CB-ONN-2010/1 — drilled 2021 — mechanical casing damage
Well D-03          XYZ-07 — drilled 2023 — cement failure at shoe
Wells B-11–B-13    CB-ONN-2010/1 — drilled 2016–2018 — KNOWLEDGE GAP (no post-drill records)
Well XYZ-04        XYZ-07 — drilled 2010 — directional well, wellbore collapse in Deccan Trap
Well XYZ-05        XYZ-07 — drilled 2011 — directional well, BHA lost in wellbore collapse
```

### Demo Document Archive (Sample)

```
Document Category        Count    Date Range          Format
Daily Drilling Reports   312      2015 – present      PDF + Excel
Well Completion Reports   24      1998 – present      PDF (mixed scanned/digital)
Production Logs           84      2012 – present      Excel + PDF
Well Test Reports         31      2005 – present      PDF
Equipment Manuals         67      Various             PDF (scanned, many legacy)
Geotechnical Studies      18      1998 – 2020         PDF (scanned)
HSE Incident Reports      47      2010 – present      PDF + Word
Regulatory Filings       127      2006 – present      PDF
Meeting Records           94      2018 – present      Word + PDF
Knowledge Items           47      Captured 2022–2025  [PROJECT_NAME] native
TOTAL                    847
```

### Demo Meeting Actions (Outstanding)

```
Open actions:       47 across all meetings
Overdue (>due date): 2 (ACT-2025-1261 scaffold inspection, ACT-2025-1268 chemical audit)
Due this week:      8 actions
Completed MTD:      31 actions (66% completion rate this month)
Average completion: 2.4 days from assignment to completion
```

---

## Demo Build Prompt for M4 Screen

```
Build a Technical Document Intelligence & Knowledge Management AI screen for [PROJECT_NAME],
an AI operations platform for [MARKET / REGION] energy operators.

Clean light theme: Navy #0D1B2A primary, Accent Blue #1A6B8A section headers,
Gold #C8922A primary CTA, Teal #0F7B6C success states, Coral #C0392B critical alerts.
Card border: #D1D9E3. Background: #F5F6FA section fill. White cards.

Four sub-module tabs within M4: [4.1 Document Search] [4.2 Report Generation] [4.3 Meeting Actions] [4.4 Knowledge Base]
Default view on 4.1 Document Search.

Show:
(1) Top KPI bar: Documents Indexed (847 — accent blue), Queries Today (34 — teal),
    Reports in Draft (3 — gold), Actions Overdue (2 — pulsing coral)
(2) Search bar (full width, prominent): pre-filled with Query 4 from the demo script
    ('What were the top 3 causes of NPT in Cambay Basin wells 2018-2022?')
(3) Answer panel (left 60%): structured answer showing 3 NPT causes with percentages
    and hours. Each data point has a clickable citation chip (document name + page).
    Confidence badge: 91% in teal. "14 documents searched | 11 seconds" footer.
(4) Source viewer (right 40%): highlighted excerpt from one of the 14 DDRs showing
    the NPT log entry being cited, with page reference.

Sub-module 4.2 tab shows: Source document panel (left 35%) with 14 DDR files listed,
all showing "Ingested" status. Report draft panel (right 65%) showing the Well B-14
End-of-Well Summary excerpt. Progress bar: "87% complete | 3 sections flagged".
3 flagged sections shown with gold flag in margin. "Approve & Finalise" Gold CTA.

Sub-module 4.3 tab shows: Two-panel view. Left: transcript input area (pre-populated
with meeting transcript, 1,840 words). Right: output tabs [Summary][Actions][Decisions].
Actions tab active — showing 6-row action table with owners, due dates, priority badges.
2 rows highlighted coral for overdue carried-forward actions.
"Approve & Send Reminders" Gold CTA at bottom.

Sub-module 4.4 tab shows: Taxonomy tree (left 30%) with Block → Well → Formation
hierarchy, item counts per node. Knowledge item viewer (right 70%) showing the
directional drilling decision record for Block XYZ. Gap alert panel at bottom
showing 3 knowledge gaps with risk badges (2 HIGH, 1 MEDIUM).

Indian engineering context — DGH, OISD, PSC references. Rs. currency. Dates: DD MMM YYYY.
JetBrains Mono for all document IDs, query response times, and reference numbers.
React + Tailwind + Recharts.
```

---

## Brand & Design Parameters for M4 UI

### Color Usage

| Element | Color | Hex |
|---|---|---|
| Page background | Light off-white | #F5F6FA |
| Card / panel background | White | #FFFFFF |
| Primary brand | Deep navy | #0D1B2A |
| Section headers | Accent blue | #1A6B8A |
| Primary CTA | Gold | #C8922A |
| CTA background (light) | Gold light | #FDF3E3 |
| Success / Teal | High confidence, complete sections, current documents | #0F7B6C |
| Success background | Teal light | #E3F4F2 |
| Critical / Danger | Overdue actions, knowledge gaps (High risk), low confidence | #C0392B (pulsing for active alerts) |
| Critical background | Coral light | #FDECEA |
| Advisory / Warning | Medium confidence, flagged report sections, pending reviews | #C8922A |
| Informational | Accent blue | #1A6B8A |
| Source highlight | Gold light with gold border | #FDF3E3 / #C8922A border |
| Card border | Border grey | #D1D9E3 |
| Secondary text | Muted grey | #8892A0 |

### Typography

| Use Case | Font |
|---|---|
| Module title, page heading | DM Serif Display or Playfair Display |
| Body text, labels, descriptions | DM Sans or Plus Jakarta Sans |
| All query IDs, document references, response times, timestamps | JetBrains Mono |

### Key Animations (Demo-Specific)

| Animation | Where | Description |
|---|---|---|
| Document search animation | 4.1 query submission | Status bar animates: "Searching 847 documents… Extracting relevant passages… Synthesising answer… Ready" |
| Citation chip fade-in | 4.1 answer panel | Citation chips fade in beside each sourced fact as the answer renders |
| Source highlight pulse | 4.1 source viewer | Highlighted passage pulses once on load to draw attention |
| Report generation progress | 4.2 generation flow | Progress bar + section-by-section completion: "Reading DDRs… Extracting performance data… Drafting narrative… Flagging gaps… Draft ready" |
| Flag indicator drop-in | 4.2 report margin | Gold flag icons drop into the report margin as flagged sections are identified |
| Transcript processing | 4.3 meeting input | Word count increments as transcript is processed; "Extracting actions…" animation |
| Action row highlight | 4.3 overdue actions | Overdue action rows pulse coral once on tab load |
| Knowledge tree expand | 4.4 taxonomy browser | Tree nodes expand with a smooth animate-height transition |
| Gap alert drop-in | 4.4 gap panel | Gap alert cards slide in from bottom on load |

---

## Technical Integration Map for M4

| Sub-module | External Systems / APIs | Data Flow Direction |
|---|---|---|
| 4.1 Document Search | DMS (SharePoint / internal), ERP (SAP data exports), email archive | Source documents → Index → Query engine |
| 4.1 Document Search | OCR pipeline (Tesseract / AWS Textract) for scanned documents | Scanned doc → OCR → Indexed text |
| 4.2 Report Generation | DMS — source document retrieval; ERP — cost and production data | Source data → AI draft → Report |
| 4.2 Report Generation | DMS — approved report published back to document store | Approved report → DMS |
| 4.3 Meeting Actions | Calendar / scheduling system — meeting metadata | Meeting record → Action log |
| 4.3 Meeting Actions | Email / notification API — action reminders and escalations | Action → Reminder → Owner |
| 4.3 Meeting Actions | Workflow module (M5) — high-value actions linked to formal workflows | Meeting action → M5 workflow item |
| 4.4 Knowledge Base | All M4 sub-modules — high-value answers and reports saved as knowledge items | Query answer / report → Knowledge item |
| 4.4 Knowledge Base | HR / personnel system — departing expert alerts | Personnel record → Knowledge capture trigger |

---

## Summary: M4 at a Glance

| Item | Detail |
|---|---|
| Module | M4 — Technical Document Intelligence & Knowledge Management |
| Sub-modules | 4 (4.1 → 4.4) |
| Total pages | 5 (1 dashboard + 4 sub-module pages) |
| Primary data objects | Cited query answers, auto-drafted engineering reports, meeting action logs, indexed knowledge items |
| Document archive scale | 847 documents in demo; designed for 100 to 100,000+ |
| Key output | Plain-English answers from the full archive + 90% complete report drafts + tracked meeting actions + searchable institutional knowledge |
| Demo focus | Live cross-document NPT analysis query answered in 10 seconds, citing 14 DDRs |
| Design tone | Clean, professional dashboard — light theme, premium, engineering-grade |
| Compliance | DGH reporting standards · PSC/RSC documentation obligations · OISD reporting requirements |
| Currency | Rs. Indian Rupee — Lakhs (L) and Crores (Cr) |
| Date format | DD MMM YYYY |
| Language | English (Indian) — formal technical and engineering context |
| Market context | [MARKET / REGION] upstream oil and gas operations |

---

*[PROJECT_NAME] · Technical Document Intelligence & Knowledge Management Module — M4 Build Guide*
*by [COMPANY_NAME] · [WEBSITE]*
*Version [VERSION] · [PUBLIC / INTERNAL / CONFIDENTIAL]*
