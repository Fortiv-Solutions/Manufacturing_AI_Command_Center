# M7 — Management Reporting & Business Intelligence

### [PROJECT_NAME] · AI Operations Platform · [WEBSITE]

> **Module Tagline:** Ask any operational or financial question in plain English and get a structured, cited answer in seconds — while board-ready reports compile and distribute themselves on schedule, without a single analyst in the loop.

**Document Type:** Module Build Guide & Parameter Reference
**Module Code:** M7
**Total Sub-Modules:** 3 (7.1 → 7.3)
**Version:** [VERSION]
**Company:** [COMPANY_NAME]
**Classification:** [PUBLIC / INTERNAL / CONFIDENTIAL]
**Market:** [MARKET / REGION] — India Focus (SEBI BRSR · MoEFCC · PNGRB · DGH)

---

## Module Overview

### Purpose

Break the dependency between leadership decision-making and the human analysts who currently sit between executives and their data. [PROJECT_NAME]'s Reporting & BI module gives management teams **direct, conversational access to operational and financial performance data** — in plain English, with cited source records — while automating the full lifecycle of routine reports so they compile, format, and distribute on schedule without any manual aggregation.

### Core Problem Being Solved

| Pain Point                            | Without M7                                                  | With M7                                                        |
| ------------------------------------- | ----------------------------------------------------------- | -------------------------------------------------------------- |
| Answering a data question             | Email to analyst → 30 minutes to 2 hours for response       | Natural language query → structured answer in under 15 seconds |
| Monthly management report compilation | 1–3 days of senior analyst time per report                  | Auto-compiled in under 5 minutes; distributed on schedule      |
| Board report preparation              | 3–5 days of multi-department coordination                   | Draft auto-generated; reviewed and approved in under 2 hours   |
| ESG / BRSR disclosure                 | Manual data collection across departments — weeks of effort | Auto-populated from operational records in hours               |
| Performance variance explanation      | Analyst manually traces data to explain a number            | AI identifies root causes with cited source records            |
| Data access for field managers        | Requires office return or analyst request                   | Mobile-accessible conversational BI from any device            |
| Reporting consistency                 | Varies by analyst, period, and availability                 | Standardised format, on-time delivery, every cycle             |

### Demo Wow Moment

**Conversational BI live on screen in front of management** — type "Compare our H1 2025 OPEX per barrel against H1 2024 and tell me which cost categories drove the difference." Within 15 seconds the system returns a structured comparison table, identifies the top three cost drivers with percentage breakdowns, and cites the specific cost ledger records behind each figure. No analyst, no Excel, no PowerPoint — the question and the answer happen live, in the room.

---

## Module-Level Parameters

| Parameter               | Value                                                                                                                               |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Module ID               | M7                                                                                                                                  |
| Module Name             | Management Reporting & Business Intelligence                                                                                        |
| Sub-module Count        | 3                                                                                                                                   |
| Primary Output          | Automated board/management reports + conversational BI answers with citations + ESG/BRSR disclosures                                |
| Primary Users           | VP Operations, CFO, Board Members, Department Heads, Operations Managers, ESG / Sustainability Lead                                 |
| Report Frequency        | Daily operational (automated), Monthly management (automated), Quarterly board (automated draft), Annual ESG/BRSR (automated draft) |
| Data Sources            | Production logs, OPEX/CAPEX ledgers, HSE records, maintenance records, M1–M6 module data, ERP (SAP)                                 |
| Report Formats          | PDF (board/management), Excel (data exports), in-app dashboard, email distribution                                                  |
| ESG Standards Supported | SEBI BRSR (mandatory), GRI Standards (voluntary), TCFD (optional), CDP (optional)                                                   |
| Conversational BI Scope | Production performance, OPEX/CAPEX, HSE metrics, compliance status, workforce, procurement                                          |
| Languages               | English (primary)                                                                                                                   |
| Compliance References   | SEBI BRSR (listed entities), MoEFCC environmental reporting, PNGRB production reporting, Companies Act 2013                         |
| Currency Format         | Rs. Indian Rupee — Lakhs (L) and Crores (Cr)                                                                                        |
| Demo Financial Period   | FY 2024–25 (Apr 2024 – Mar 2025)                                                                                                    |

---

## Module Pages & Navigation Structure

```
M7 — Management Reporting & Business Intelligence
│
├── [Page 1]  Module Dashboard / Overview              ← Landing page for M7
│             (KPIs, headline metrics, production vs target chart, BI query box)
│
├── [Page 2]  7.1  Automated Executive & Board Reporting
│             (Report schedule, draft review, distribution management, archive)
│
├── [Page 3]  7.2  Conversational Data Analysis
│             (Natural language BI interface, citation panel, query history)
│
└── [Page 4]  7.3  ESG & Environmental Compliance Reporting
              (ESG data register, emissions calculator, BRSR disclosure builder, filing tracker)
```

---

## Page 1 — Module Dashboard (M7 Overview)

### Purpose

The landing screen for Module 7. Provides an executive-grade summary of the company's current operational and financial position — headline metrics, production vs target chart, key exceptions, and a direct entry point into the conversational BI interface — giving any manager an instant, complete picture without opening a separate report.

### Layout

- **Top Stats Bar** (4 KPI cards across)
- **Centre Left (60%):** Bar chart — monthly gross oil production vs target (12 months rolling)
- **Centre Right (40%):** Donut chart — OPEX breakdown by cost category
- **Bottom Left:** Conversational BI input box with recent query history
- **Bottom Right:** Report schedule summary — next 3 reports due with status and distribution count

### KPI Cards (Top Stats Bar)

| Card                   | Metric                                                 | Mock Value                     | Color                |
| ---------------------- | ------------------------------------------------------ | ------------------------------ | -------------------- |
| Gross Production (MTD) | Barrels produced month-to-date vs target               | 1,28,340 bbl / 1,34,750 target | Accent Blue #1A6B8A  |
| OPEX per Barrel        | All-in lifting cost per barrel (current month actuals) | Rs. 4,127 / bbl                | Gold #C8922A         |
| HSE Status             | LTI count YTD + near miss count MTD                    | 0 LTI · 4 Near Misses          | Success Teal #0F7B6C |
| Regulatory Compliance  | % of filings submitted on time YTD                     | 100% on-time                   | Success Teal #0F7B6C |

### Production vs Target Bar Chart

Recharts BarChart — 12 months rolling (Nov 2024 – Oct 2025), two bars per month:

| Month    | Gross Oil (bbl) | Target (bbl) |
| -------- | --------------- | ------------ |
| Nov 2024 | 1,31,200        | 1,34,000     |
| Dec 2024 | 1,29,800        | 1,34,000     |
| Jan 2025 | 1,33,500        | 1,35,500     |
| Feb 2025 | 1,27,400        | 1,35,500     |
| Mar 2025 | 1,36,100        | 1,35,500     |
| Apr 2025 | 1,30,200        | 1,34,750     |
| May 2025 | 1,32,800        | 1,34,750     |
| Jun 2025 | 1,29,600        | 1,34,750     |
| Jul 2025 | 1,34,200        | 1,34,750     |
| Aug 2025 | 1,31,900        | 1,34,750     |
| Sep 2025 | 1,33,100        | 1,34,750     |
| Oct 2025 | 1,28,340        | 1,34,750     |

Bar colors: Navy (#0D1B2A) for actuals, Gold (#C8922A) for target line/bar.

### OPEX Breakdown Donut Chart

Recharts donut — current month OPEX by category:

| Category              | % Share | Rs. Value   | Color   |
| --------------------- | ------- | ----------- | ------- |
| Chemical Treatments   | 28%     | Rs. 1.47 Cr | #1A6B8A |
| Labour & Contractor   | 24%     | Rs. 1.26 Cr | #0F7B6C |
| Equipment Rental      | 19%     | Rs. 1.00 Cr | #C8922A |
| Maintenance & Repairs | 16%     | Rs. 0.84 Cr | #2596BE |
| Other / Miscellaneous | 13%     | Rs. 0.68 Cr | #8892A0 |

### Conversational BI Input Box (Bottom Left)

- Label: **"Ask a question about your operations"**
- Placeholder: _"e.g. Which wells had the highest NPT rate last quarter?"_
- Submit button (gold)
- Below: 3 recent query chips — clickable to re-run

### Report Schedule Strip (Bottom Right)

Three upcoming report rows:

| Report                      | Frequency | Next Due    | Status          | Recipients |
| --------------------------- | --------- | ----------- | --------------- | ---------- |
| Monthly Operations Report   | Monthly   | 01 Nov 2025 | Auto-compiling  | 24         |
| Board Quarterly Report (Q2) | Quarterly | 15 Nov 2025 | Draft ready     | 8          |
| BRSR Annual Disclosure      | Annual    | 31 Mar 2026 | Data collection | 3          |

---

## Page 2 — Sub-Module 7.1: Automated Executive & Board Reporting

### What It Is

A scheduled report generation engine that pulls production, financial, safety, and compliance data from all source systems on a defined schedule, compiles it into [COMPANY_NAME]'s standard report formats, generates AI-drafted narrative commentary for human review, and distributes the finalised report to defined recipient lists — with no manual aggregation at any step.

### Report Types Supported

| Report                     | Audience                                 | Frequency                                       | Key Sections                                                                | Auto-compiled From                                          |
| -------------------------- | ---------------------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Daily Operations Report    | Site manager, operations team            | Daily (06:00 IST)                               | Production, HSE, open actions, maintenance, permits                         | Production logs, HSE records, M3 PTW data, M5 workflow data |
| Weekly Production Summary  | VP Operations, department heads          | Weekly (Monday 07:00)                           | Weekly production vs target, variance drivers, top open actions             | Production logs, ERP, M5 action tracker                     |
| Monthly Management Report  | Senior leadership, department heads      | Monthly (1st of month, 06:00)                   | Production, OPEX, HSE, compliance, workforce, capex summary                 | All modules + ERP + financial ledger                        |
| Quarterly Board Report     | Board of Directors, investors            | Quarterly (15th of month following quarter-end) | Executive summary, production performance, financial summary, HSE, strategy | Monthly reports + board template                            |
| Annual ESG/BRSR Disclosure | Board, SEBI (listed entities), investors | Annual (March)                                  | BRSR Principles 1–9, emissions, water, waste, social metrics                | M7.3 ESG data register + operational records                |

### Report Compilation Workflow

| Step | Action                                                                                   | System                      | Duration      |
| ---- | ---------------------------------------------------------------------------------------- | --------------------------- | ------------- |
| 1    | Scheduled trigger fires at defined time                                                  | [PROJECT_NAME] scheduler    | Instant       |
| 2    | Data pull from all connected source systems (ERP, production logs, module data)          | Automated API + DB query    | 30–90 seconds |
| 3    | Data validation — checks for missing or anomalous values; flags exceptions               | Automated                   | 15–30 seconds |
| 4    | Metrics calculation — variances, trends, period comparisons                              | Automated                   | 15–30 seconds |
| 5    | Report template populated with calculated values and charts                              | Automated                   | 30–60 seconds |
| 6    | AI drafts narrative commentary — executive summary, variance explanations, risk callouts | Claude API                  | 45–90 seconds |
| 7    | Draft delivered to nominated reviewer for approval                                       | In-app notification + email | Instant       |
| 8    | Reviewer edits (if needed), approves, and triggers distribution                          | Reviewer action             | Varies        |
| 9    | Finalised report distributed to recipient list + archived                                | Automated                   | Instant       |

### Page Layout

**Top Control Bar:** \"New Report\" button (manual trigger) + report type selector + period selector + distribution list manager
**Main Area (Left 35%):** Report schedule list — all active report types with next due date, status badge, last generated timestamp, and recipient count
**Status Badges:**

- `SCHEDULED` — Blue — report will auto-compile at next scheduled time
- `COMPILING` — Gold pulsing — report is currently being generated
- `DRAFT READY` — Teal — compiled and awaiting reviewer approval
- `DISTRIBUTED` — Grey — finalised and sent to recipients
- `OVERDUE` — Coral pulsing — report not compiled within the scheduled window
  **Main Area (Right 65%):** Report detail view — opens on list row click; shows report preview panel, commentary review interface, distribution log, and archive links
  **Bottom:** \"Download PDF\" button + \"Send Now\" button + \"Edit Distribution List\" button + \"View Archive\" button

### Mock Demo Data — Monthly Management Report (October 2025)

```
// MONTHLY MANAGEMENT REPORT — [COMPANY_NAME] | October 2025
// Auto-compiled: 01 Nov 2025 05:58 IST | Compilation time: 4 min 12 sec
// Status: DRAFT READY — awaiting VP Operations review
// Distribution: 24 recipients (8 senior leadership + 16 department heads)

HEADLINE METRICS:
  Gross Production:    1,28,340 bbl   vs Target: 1,34,750 bbl  (-4.76%)   ↓
  Gas Production:         18.4 MMSCFD
  OPEX Total:          Rs. 5.25 Cr    vs Budget:  Rs. 5.09 Cr  (+3.14%)   ↑
  OPEX per Barrel:     Rs. 4,127      vs Budget:  Rs. 3,980    (+3.69%)   ↑
  CAPEX Spent MTD:     Rs. 2.14 Cr    vs Plan:    Rs. 2.40 Cr  (-10.8%)   ↓ (favourable)
  HSE:                 0 LTI | 0 Recordable | 4 Near Misses (vs 2 last month)
  Reg. Compliance:     100% on-time filings | 0 open critical gaps
  Workforce:           94.4% qualified | 3 workers currently blocked

AI-GENERATED EXECUTIVE SUMMARY (draft — for reviewer edit):
  'October 2025 production of 1,28,340 bbl came in 4.76% below target (6,410 bbl
  shortfall), attributable primarily to two events: the unplanned shut-in of Well C-07
  following an ESP trip on 28 Oct (estimated 3,200 bbl impact) and planned maintenance
  downtime at Pad A over 18–20 Oct (estimated 1,840 bbl impact). The remaining 1,370 bbl
  variance reflects minor operational inefficiencies across the active well portfolio.

  OPEX overrun of Rs. 16 lakh (3.69% above budget) was driven by unplanned pump repair
  costs at Pad B (Rs. 9 lakh) and increased H2S scavenger chemical volumes at Wells C-07
  and C-11 (Rs. 7 lakh). These are assessed as one-off events; no structural cost trend
  is indicated. CAPEX was Rs. 26 lakh below plan, reflecting a 3-week delay to the B-15
  well spud, which has been rescheduled to 14 Nov 2025.

  Four near-miss events were recorded in October against two in September. All four have
  been investigated; corrective actions are in progress. No LTIs or reportable incidents
  occurred. Well Control and HSE regulatory filings were completed on time with a 100%
  approval rate.'

DISTRIBUTION LOG (after approval):
  Anand Sharma     VP Operations        Sent: 01 Nov 2025 09:14 IST  ✓ Opened
  Ravi Patel       Finance Controller   Sent: 01 Nov 2025 09:14 IST  ✓ Opened
  Priya Menon      HSE Manager          Sent: 01 Nov 2025 09:14 IST  ✓ Opened
  [21 more recipients — click to expand]

// Reviewer: Anand Sharma | Review started: 01 Nov 2025 09:22 IST
// Edits: 2 minor wording changes in executive summary
// Approved and distributed: 01 Nov 2025 09:34 IST (36 minutes after draft delivery)
// Report archive: [Oct_2025_Monthly_Mgmt_Report_FINAL.pdf]
```

### AI Commentary Generation Rules

| Commentary Section    | Inputs                                            | What AI Generates                                                              |
| --------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------ |
| Executive Summary     | All headline metrics vs prior period and budget   | 3–4 paragraph narrative — performance, key variances, risks, outlook           |
| Variance Explanation  | Specific metric deltas + source data records      | Root cause identification for each material variance — concise, cited          |
| HSE Commentary        | Incident count, near misses, LTI rate, comparison | Safety performance narrative — trend, events, corrective action status         |
| Compliance Commentary | Filing status, gaps, regulatory changes           | Compliance position summary — status vs obligations, upcoming deadlines        |
| Outlook & Risks       | Budget vs plan, upcoming events, open actions     | Forward-looking paragraph — production forecast, key risks, mitigating actions |

### Report Archive Structure

| Archive Field     | Description                           | Mock Example                                  |
| ----------------- | ------------------------------------- | --------------------------------------------- |
| `report_id`       | Unique report reference               | RPT-2025-M10-MONTHLY                          |
| `report_type`     | Report category                       | Monthly Management Report                     |
| `period`          | Reporting period covered              | October 2025                                  |
| `compiled_at`     | Timestamp of auto-compilation         | 01 Nov 2025 05:58 IST                         |
| `approved_by`     | Name of the reviewing approver        | Anand Sharma                                  |
| `approved_at`     | Timestamp of approval                 | 01 Nov 2025 09:34 IST                         |
| `distributed_at`  | Timestamp of distribution             | 01 Nov 2025 09:34 IST                         |
| `recipient_count` | Number of recipients                  | 24                                            |
| `open_rate`       | % of recipients who opened the report | 87.5%                                         |
| `pdf_url`         | Download link to the archived PDF     | [link]                                        |
| `data_sources`    | Source systems used for compilation   | ERP (SAP), Production Logs, M1–M6 module data |

### Key UI Elements

- **Live compilation progress bar** — when a report is compiling, a step-by-step progress display shows: Data pull → Validation → Metrics → Template → Commentary → Ready
- **Inline commentary editor** — reviewer can edit AI-drafted narrative directly in the browser without downloading the document
- **Track changes mode** — edits made by the reviewer are highlighted for the approver to confirm before distribution
- **One-click distribution** — approved report sends to all recipients simultaneously with a single button press
- **Delivery receipts** — report detail view shows per-recipient open status and timestamp
- **Version archive** — every finalised report stored permanently; previous periods accessible by date, type, or keyword

### Why It Matters

A management report that arrives late loses most of its decision-support value. When the October report is distributed on the 9th instead of the 1st because of data chasing, formatting delays, and reviewer availability, the leadership team makes material decisions on information that is 9 days older than it needs to be. In a business where a single shut-in well costs crores per week, that lag has a real cost. Automated compilation delivers consistent, on-time reporting regardless of staff leave, system availability, or operational pressure.

---

## Page 3 — Sub-Module 7.2: Conversational Data Analysis

### What It Is

A natural language interface to the company's full operational and financial data that allows any manager or executive to ask complex analytical questions in plain English and receive structured, cited answers — without SQL knowledge, Excel access, or analyst support. Accessible from desktop and mobile.

### Query Types Supported

| Query Type              | Example Question                                                               | Answer Format                                       |
| ----------------------- | ------------------------------------------------------------------------------ | --------------------------------------------------- |
| Single metric retrieval | "What was our gross production in September 2025?"                             | Single value with source citation                   |
| Period comparison       | "Compare our Q2 2025 OPEX vs Q2 2024 by cost category"                         | Comparison table with delta values and % change     |
| Trend analysis          | "Show me the OPEX per barrel trend over the last 12 months"                    | Trend table or sparkline with narrative             |
| Root cause              | "Which wells drove the production shortfall in October?"                       | Ranked list with impact values and source citations |
| Ranking                 | "Which 3 wells had the longest average repair turnaround time this year?"      | Ranked list with values and supporting records      |
| Cross-module            | "What is the correlation between our near-miss count and maintenance backlog?" | Analytical response with data from M7 and M3        |
| Forecast                | "At current run rate, where will we end Q3 on OPEX vs budget?"                 | Projection with assumptions stated                  |
| Free-form               | "Why is our chemical cost up this month?"                                      | Root cause narrative with cited cost records        |

### Answer Components

| Component             | Description                                                             | Always Present |
| --------------------- | ----------------------------------------------------------------------- | -------------- |
| Direct answer         | The specific figure, comparison, or finding the question asked for      | ✓              |
| Confidence score      | System confidence in the answer based on data completeness              | ✓              |
| Source citations      | Document/record references for every data point used in the answer      | ✓              |
| Supporting table      | Structured data table where the answer involves comparison or ranking   | When relevant  |
| Caveat flag           | Any data gaps, assumptions, or period mismatches that affect the answer | When relevant  |
| Follow-up suggestions | 2–3 related questions the user may want to ask next                     | Optional       |

### Page Layout

**Full-Width Layout:** Chat-style conversational interface with message history

- User queries: right-aligned, navy background, white text
- AI responses: left-aligned, white card, navy text, with Sources section at the bottom of each card
- Source citations: small chips showing document/record name + date — each clickable to open the underlying record
  **Input Bar (Fixed Bottom):** Text field + Send button (gold) + Voice input toggle (optional)
  **Left Panel (25%, collapsible):** Query history — past 20 queries with timestamps; click to re-run or copy
  **Top Bar:** Data freshness indicator (\"Data current as of: 04 Nov 2025 06:00 IST\") + \"Export conversation\" button + \"Pin answer to dashboard\" button

### Mock Demo Conversation

```
// PRE-LOADED DEMO CONVERSATION (3 exchanges — shown as already completed)

──────────────────────────────────────────────────────────────────
USER (04 Nov 2025 09:14)
"Compare our H1 2025 OPEX per barrel against H1 2024 and tell me
which cost categories drove the difference."
──────────────────────────────────────────────────────────────────
AI RESPONSE:

H1 FY 2025 vs H1 FY 2024 — OPEX per Barrel Comparison

                        H1 FY 2024       H1 FY 2025       Δ (Rs.)   Δ (%)
  All-in OPEX/bbl       Rs. 3,741        Rs. 4,089        +348      +9.3%

TOP 3 COST DRIVERS OF THE INCREASE:
  1. Chemical Treatments   +Rs. 142/bbl  (+40.9%)
     Root cause: Scale inhibitor programme expanded to 3 new wells (Pad B);
     H2S scavenger volumes increased at Well C-07 and C-11.
  2. Equipment Rental      +Rs. 97/bbl   (+24.2%)
     Root cause: Additional ESP rental for Well A-04 workover (H1 2025 only);
     not recurring in H2.
  3. Maintenance & Repairs +Rs. 64/bbl   (+19.5%)
     Root cause: 2 unplanned pump failures at Pad A (Mar and May 2025) against
     0 unplanned failures in the same period last year.

Offsetting reduction: Labour & Contractor costs fell Rs. 55/bbl (-8.7%) following
the insourcing of 4 well-monitoring roles in Q4 FY 2024.

SOURCES: [H1 FY 2025 OPEX Ledger] [H1 FY 2024 OPEX Ledger] [Chemical PO Register]
         [Maintenance Records — Pad A 2025] [HR Headcount Report Q4 FY 2024]
CONFIDENCE: 97%

──────────────────────────────────────────────────────────────────
USER (04 Nov 2025 09:19)
"Which 3 wells had the highest NPT in Q3 2025 and what caused it?"
──────────────────────────────────────────────────────────────────
AI RESPONSE:

Top 3 Wells by Non-Productive Time — Q3 FY 2025 (Jul–Sep 2025)

  Rank  Well     NPT Hours  NPT %  Primary Cause
  1     C-07     38.4 hrs   7.1%   ESP motor failure (28 Aug) — 22 hrs;
                                    gas separator blockage (14 Sep) — 16.4 hrs
  2     A-04     29.1 hrs   5.4%   Workover — ESP string replacement (Jul 2025)
                                    Planned event; part of the H1 maintenance programme
  3     B-07     18.7 hrs   3.5%   Stuck pump jack during routine maintenance (02 Sep);
                                    3rd occurrence at this well in 12 months — pattern noted

NOTE: B-07's recurring stuck pump jack events suggest an underlying mechanical issue
not yet formally investigated. Recommend adding to the maintenance review agenda.

SOURCES: [Q3 2025 Daily Drilling Reports — C-07] [Workover Report A-04 Jul 2025]
         [Maintenance Records B-07 2024–2025]
CONFIDENCE: 94%

──────────────────────────────────────────────────────────────────
USER (04 Nov 2025 09:26)
"What is our current all-in lifting cost per barrel and how does
it compare to our budget for this financial year?"
──────────────────────────────────────────────────────────────────
AI RESPONSE:

Current Lifting Cost — October 2025 Actuals vs FY 2025–26 Budget

                        Actuals (Oct 25)   Budget FY 25-26   Variance
  OPEX-only (Rs./bbl)   Rs. 4,127          Rs. 3,980         +Rs. 147  (+3.69%)
  All-in (Rs./bbl)      Rs. 6,840          Rs. 6,510         +Rs. 330  (+5.07%)
  (All-in includes OPEX + allocated CAPEX + depreciation)

YTD OPEX/bbl (Apr–Oct 2025): Rs. 4,031 vs YTD budget Rs. 3,980 (+1.28%)
YTD position is within tolerance. October overage is primarily event-driven
(see unplanned repairs at Pad B — Rs. 9 lakh one-off).

SOURCES: [Oct 2025 OPEX Actuals — Finance Controller] [FY 2025-26 Budget — ERP]
         [CAPEX Schedule FY 2025-26] [Depreciation Register]
CONFIDENCE: 99%
```

### Data Coverage Scope

| Domain      | Data Available for Query                                                 | Data Source                     |
| ----------- | ------------------------------------------------------------------------ | ------------------------------- |
| Production  | Gross oil, gas, condensate, water cut, well-level production, NPT        | Production logs, DDRs           |
| Financial   | OPEX by category, CAPEX vs plan, OPEX/bbl, budget variances              | ERP (SAP) financial ledger      |
| HSE         | LTI count, near misses, incident types, permit counts, compliance gaps   | M3 HSE data, M1 compliance data |
| Workforce   | Qualification compliance rate, blocked workers, onboarding status        | M6 workforce data               |
| Maintenance | Equipment downtime, repair costs, PM completion rate, recurring failures | Maintenance records, ERP        |
| Procurement | PO cycle times, vendor performance, spend by category, outstanding POs   | M5 procurement data, ERP        |
| Regulatory  | Filing status, approval rates, compliance scores, gap counts             | M1 regulatory data              |

### Mobile Access

The conversational BI interface is designed for mobile-first use by field managers. On mobile:

- Single-column layout — query input at top, response below
- Previous answers collapsible with a tap
- Source citation chips expand to full record detail on tap
- Voice input available for hands-free querying in the field

### Key UI Elements

- **Streaming response** — AI answer streams word-by-word rather than appearing all at once, reinforcing the live intelligence feel
- **Pin to dashboard** — any answer can be pinned as a widget on the M7 dashboard for recurring visibility
- **Source drill-through** — every source citation chip is a live link to the underlying record in the relevant module
- **Confidence indicator** — each answer displays a confidence percentage; answers below 85% include a caveat explaining the data gap
- **Export** — any answer or the full conversation can be exported as PDF or copied to clipboard for inclusion in a report
- **Query suggestions** — after each answer, 2–3 follow-up question suggestions are shown as clickable chips

### Why It Matters

The gap between operational data and operational decision-making in [MARKET / REGION] energy companies is rarely a data availability problem — it is an access and interpretation problem. When only the person who built the Excel model can answer a question about the data it contains, that data is effectively unavailable to everyone else. A VP Operations in the field at 07:00 asking "why is our OPEX up this month" should not need to wait two hours for an analyst in the office to produce an answer. Conversational BI makes every dataset accessible to every decision-maker, in the language they actually use, from any device.

---

## Page 4 — Sub-Module 7.3: ESG & Environmental Compliance Reporting

### What It Is

A software-based ESG data consolidation and reporting module that aggregates environmental and sustainability data from operational records across the organisation, calculates emissions estimates using activity-based methodologies, auto-populates mandatory regulatory filings, and generates verified, audit-ready ESG disclosures in BRSR and GRI formats — without manual data collection or additional hardware.

### ESG Data Categories Tracked

| Category           | Metrics Tracked                                                                           | Source Systems                                                |
| ------------------ | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Scope 1 Emissions  | Diesel combustion, gas flaring, fugitive methane (activity-based), process venting        | Fuel consumption logs, flaring records, equipment inventories |
| Scope 2 Emissions  | Grid electricity consumption (offices, facilities, pumping stations)                      | Electricity meter records, utility bills                      |
| Water              | Fresh water consumed, recycled/reused water, wastewater discharge volume, water intensity | Water meter records, lab reports                              |
| Waste              | Hazardous waste generated and disposed, drilling cuttings, produced water volumes         | Waste manifests, disposal records                             |
| Biodiversity       | Land disturbed, land restored, protected area proximity                                   | Site environmental assessments                                |
| Social — Workforce | Total employees, gender ratio, contract workers, safety training hours, LTI rate          | HR records, M6 workforce data, M3 HSE data                    |
| Social — Community | Local hire %, CSR spend, community grievances                                             | HR records, CSR reports                                       |
| Governance         | Board composition, anti-corruption training %, ethics hotline disclosures                 | Governance records                                            |

### Emission Calculation Methodology

| Emission Source   | Calculation Method                                  | Emission Factor Source                            |
| ----------------- | --------------------------------------------------- | ------------------------------------------------- |
| Diesel combustion | Litres consumed × diesel emission factor            | MoEFCC / IPCC Tier 1                              |
| Gas flaring       | MMSCFD flared × gas composition × flaring EF        | IPCC Tier 2                                       |
| Fugitive methane  | Equipment count × activity-based emission factor    | EPA AP-42 / GHG Protocol Oil & Gas                |
| Grid electricity  | kWh consumed × grid emission factor (CEA published) | Central Electricity Authority (CEA) India grid EF |
| Diesel generators | Litres consumed × generator EF                      | MoEFCC / IPCC                                     |

### Page Layout

**Top Stats Bar:** Scope 1 Total (tCO2e) | Scope 2 Total (tCO2e) | Data Completeness % | BRSR Status Badge
**Tab Navigation:** [ESG Data Register] [Emissions Calculator] [BRSR Disclosure Builder] [Filing Tracker]
**Default Tab — ESG Data Register:**

- Data category tree (left 30%): Scope 1 / Scope 2 / Water / Waste / Social / Governance
- Data entry panel (right 70%): metric fields with auto-populated values from source systems, manual override option, data source label per field, and confidence indicator
  **Emissions Calculator Tab:**
- Input summary (top): data fed from ESG register — auto-populated, not re-entered
- Calculation output (bottom): emission totals by source with factor applied, formula shown, tCO2e result
  **BRSR Disclosure Builder Tab:**
- BRSR Principle selector (left): Principles 1–9 with completion status
- Disclosure editor (right): auto-populated draft text per principle; editable by reviewer
  **Filing Tracker Tab:**
- All ESG-related regulatory filings with due dates, status, and filed/pending indicators

### Mock Demo Data — ESG Data Register (FY 2024–25)

```
// ESG DATA REGISTER — [COMPANY_NAME] | FY 2024–25
// Data completeness: 89% | Last updated: 04 Nov 2025
// Source: Auto-consolidated from operational records + ERP

SCOPE 1 EMISSIONS (estimated from operational records):
  Diesel combustion (field equipment & vehicles):    4,847 tCO2e
    Source: Fuel consumption log — 19.4 lakh litres diesel × 2.67 kgCO2e/litre
  Gas flaring:                                       1,203 tCO2e
    Source: Flaring records — 847 MMSCF flared × 1.42 tCO2e/MMSCF
  Fugitive methane (activity-based):                   312 tCO2e (as CO2e at GWP 28)
    Source: Equipment inventory × EPA AP-42 factors
  Process venting:                                      94 tCO2e
    Source: Venting log — estimated from compressor records
  ─────────────────────────────────────────────────────────────────
  TOTAL SCOPE 1:                                     6,456 tCO2e

SCOPE 2 EMISSIONS:
  Grid electricity (offices + facilities):             248 tCO2e
    Source: CEA grid EF 0.82 tCO2e/MWh × 302 MWh consumed
  ─────────────────────────────────────────────────────────────────
  TOTAL SCOPE 2:                                       248 tCO2e

TOTAL GHG EMISSIONS (Scope 1 + 2):                  6,704 tCO2e
GHG INTENSITY:                                       0.052 tCO2e/bbl produced

WATER:
  Fresh water consumed:     14,200 kL  (Intensity: 0.11 kL/bbl)
  Recycled / reused:         8,900 kL  (62.7% of total)
  Wastewater discharged:     3,400 kL  (treated to consent standards)
  [Source: Water meter records + treatment plant logs]

WASTE:
  Hazardous waste generated: 84.3 MT  | Disposed via licensed contractor: 84.3 MT
  Drilling cuttings:         312 MT   | Disposed: CPCB-approved TSD facility
  Produced water:            6,240 bbl/day avg | Reinjected: 100%
  [Source: Waste manifests + disposal certificates]

SOCIAL — SAFETY:
  LTI Rate (per million man-hours): 0.00 (0 LTIs in FY 2024-25)
  TRIR (Total Recordable Incident Rate): 0.00
  Safety Training Hours:    2,847 hours total | Avg: 20.1 hours/employee
  [Source: M3 HSE records + training attendance logs]

// DATA GAPS (11% incomplete):
  Scope 3 supply chain emissions — not yet collected (voluntary for BRSR Year 1)
  Community grievance log — pending HR consolidation (ETA: 15 Nov 2025)
```

### BRSR Disclosure Builder — Sample Output

```
// BRSR PRINCIPLE 6 — ENVIRONMENT
// Auto-populated draft — for Board review and approval

P6 Essential Indicator 1: Energy consumption and intensity

  Total energy consumed from non-renewable sources: 519 TJ (diesel + grid electricity)
  Total energy consumed from renewable sources: 0 TJ
  Energy intensity (GJ per bbl produced): 4.05 GJ/bbl

  [DATA SOURCE: Fuel consumption log + CEA electricity records | Confidence: 96%]

P6 Essential Indicator 2: Water withdrawal and consumption

  Water withdrawn from surface/groundwater: 14,200 kL
  Water intensity: 0.11 kL per bbl produced
  Water recycled/reused: 8,900 kL (62.7%)

  [DATA SOURCE: Water meter records + treatment plant reports | Confidence: 94%]

P6 Essential Indicator 3: GHG emissions

  Scope 1: 6,456 tCO2e | Scope 2: 248 tCO2e | Total: 6,704 tCO2e
  GHG intensity: 0.052 tCO2e per bbl produced
  Methodology: IPCC Tier 1/2 + EPA AP-42 + CEA grid factor

  [DATA SOURCE: Calculated from operational records | Confidence: 91%]

// BRSR completion status:
  Principle 1 (Ethics & Transparency):   ████████░░  82%  Draft ready
  Principle 2 (Product Sustainability):  ██████░░░░  61%  In progress
  Principle 3 (Employee Wellbeing):      █████████░  90%  Draft ready
  Principle 4 (Stakeholder Engagement):  ████░░░░░░  43%  Data collection
  Principle 5 (Human Rights):            ███████░░░  72%  Draft ready
  Principle 6 (Environment):             █████████░  91%  Draft ready ← (shown above)
  Principle 7 (Policy Advocacy):         ██████████  100% Complete
  Principle 8 (Inclusive Growth):        █████░░░░░  52%  In progress
  Principle 9 (Consumer Responsibility): ███████░░░  74%  Draft ready
```

### Filing Tracker — ESG & Environmental Filings

| Filing                                  | Authority                     | Frequency   | FY 25-26 Due Date | Status          |
| --------------------------------------- | ----------------------------- | ----------- | ----------------- | --------------- |
| Annual Environmental Statement (Form-V) | MoEFCC via CPCB portal        | Annual      | 30 Sep 2026       | Data collection |
| Hazardous Waste Annual Return           | CPCB                          | Annual      | 30 Jun 2026       | Scheduled       |
| Consent to Operate Renewal              | State PCB                     | As required | 15 Mar 2026       | In preparation  |
| BRSR Disclosure (with Annual Report)    | SEBI / Stock Exchange         | Annual      | 31 Mar 2026       | 76% complete    |
| GHG Inventory (voluntary)               | Internal / CDP                | Annual      | 31 Dec 2025       | 89% complete    |
| ESG Rating Agency Data Pack             | CRISIL / MSCI (if applicable) | Annual      | 28 Feb 2026       | Scheduled       |

### Key UI Elements

- **Data source label per metric** — every auto-populated ESG data point shows its source system and the date the data was last updated
- **Manual override with reason** — any auto-populated value can be overridden; the override requires a reason note and is flagged in the audit trail
- **Completeness heat map** — BRSR Principles displayed as a colour-coded grid (red/amber/green) showing completion status at a glance
- **Draft narrative generator** — for each BRSR Principle, AI drafts the disclosure narrative from the underlying data; reviewer edits inline
- **Audit-ready export** — BRSR disclosure exported as a structured PDF with data sources, calculation methodology, and confidence scores for every metric — ready for third-party verification
- **Year-on-year comparison** — for metrics available in prior years, ESG register shows current vs prior year with % change

### Why It Matters

SEBI's BRSR requirements, which became mandatory for the top 1,000 listed Indian companies and are expanding to broader corporate India, have created a significant new compliance burden for energy sector companies. ESG data that previously had only internal relevance now drives material investment decisions, analyst ratings, and regulatory scrutiny. Assembling this data manually — chasing fuel logs, water meter readings, and waste manifests across multiple sites and departments — consumes weeks of senior staff time and introduces aggregation errors. [PROJECT_NAME] replaces that manual process by consolidating ESG data automatically from operational records already captured in the platform, producing a disclosure that is faster to prepare, more complete, and more defensible in audit.

---

## Complete Module 7 — Master Parameter Reference

### All Data Fields Across M7

| Field Name                 | Type       | Sub-module | Description                                                           |
| -------------------------- | ---------- | ---------- | --------------------------------------------------------------------- |
| `report_id`                | String     | 7.1        | Unique identifier for each generated report                           |
| `report_type`              | Enum       | 7.1        | Daily / Weekly / Monthly / Quarterly / Annual                         |
| `report_period`            | String     | 7.1        | Reporting period covered (e.g. October 2025, Q2 FY 2025)              |
| `compiled_at`              | DateTime   | 7.1        | Timestamp when the report was auto-compiled                           |
| `compilation_duration_sec` | Number     | 7.1        | Time in seconds for the full compilation run                          |
| `data_sources`             | Array      | 7.1        | List of source systems queried during compilation                     |
| `data_validation_errors`   | Number     | 7.1        | Count of validation issues detected during compilation                |
| `ai_commentary_draft`      | Text       | 7.1        | AI-generated narrative commentary — for reviewer editing              |
| `reviewer_id`              | String     | 7.1        | Employee ID of the nominated reviewer                                 |
| `reviewed_at`              | DateTime   | 7.1        | Timestamp of reviewer approval                                        |
| `edits_made`               | Number     | 7.1        | Count of edits made to AI commentary by reviewer                      |
| `distributed_at`           | DateTime   | 7.1        | Timestamp of distribution to recipient list                           |
| `recipient_count`          | Number     | 7.1        | Number of recipients                                                  |
| `open_rate`                | Number (%) | 7.1        | % of recipients who opened the report                                 |
| `report_status`            | Enum       | 7.1        | Scheduled / Compiling / Draft Ready / Distributed / Overdue           |
| `report_archive_url`       | URL        | 7.1        | Link to the archived finalised PDF                                    |
| `query_id`                 | String     | 7.2        | Unique identifier for each BI query                                   |
| `query_text`               | Text       | 7.2        | The plain-English question asked                                      |
| `query_timestamp`          | DateTime   | 7.2        | When the query was submitted                                          |
| `answer_text`              | Text       | 7.2        | AI-generated answer                                                   |
| `answer_confidence`        | Number (%) | 7.2        | Confidence score for the answer                                       |
| `source_citations`         | Array      | 7.2        | List of data sources cited in the answer                              |
| `data_domains`             | Array      | 7.2        | Which data domains were queried (Production / Financial / HSE / etc.) |
| `answer_type`              | Enum       | 7.2        | Single value / Comparison / Trend / Ranking / Root cause / Forecast   |
| `caveat_present`           | Boolean    | 7.2        | Whether the answer includes a data gap or assumption caveat           |
| `pinned_to_dashboard`      | Boolean    | 7.2        | Whether the answer has been pinned to the M7 dashboard                |
| `esg_period`               | String     | 7.3        | Financial year covered by the ESG register                            |
| `scope_1_total_tco2e`      | Number     | 7.3        | Total Scope 1 emissions in tCO2e                                      |
| `scope_2_total_tco2e`      | Number     | 7.3        | Total Scope 2 emissions in tCO2e                                      |
| `total_ghg_tco2e`          | Number     | 7.3        | Combined Scope 1 + 2 total                                            |
| `ghg_intensity`            | Number     | 7.3        | GHG intensity — tCO2e per bbl produced                                |
| `water_consumed_kl`        | Number     | 7.3        | Total fresh water consumed in kilolitres                              |
| `water_recycled_kl`        | Number     | 7.3        | Water recycled or reused in kilolitres                                |
| `water_intensity`          | Number     | 7.3        | Water intensity — kL per bbl produced                                 |
| `hazardous_waste_mt`       | Number     | 7.3        | Hazardous waste generated in metric tonnes                            |
| `lti_rate`                 | Number     | 7.3        | LTI frequency rate per million man-hours                              |
| `trir`                     | Number     | 7.3        | Total Recordable Incident Rate                                        |
| `safety_training_hours`    | Number     | 7.3        | Total safety training hours delivered                                 |
| `data_completeness_pct`    | Number (%) | 7.3        | Overall ESG data completeness across all categories                   |
| `brsr_principle_status`    | Object     | 7.3        | Completion % per BRSR Principle (P1–P9)                               |
| `brsr_overall_completion`  | Number (%) | 7.3        | Overall BRSR disclosure completion                                    |
| `emission_factor_version`  | String     | 7.3        | Version of emission factors used (e.g. IPCC AR6, CEA 2024)            |
| `last_data_refresh`        | DateTime   | 7.3        | Timestamp of the most recent auto-data pull from source systems       |
| `esg_filing_id`            | String     | 7.3        | Reference for a specific ESG/environmental regulatory filing          |
| `esg_filing_type`          | String     | 7.3        | BRSR / Form-V / Hazardous Waste Return / GHG Inventory                |
| `esg_filing_status`        | Enum       | 7.3        | Data Collection / Draft / Reviewer Approval / Filed / Acknowledged    |
| `esg_filing_due_date`      | Date       | 7.3        | Deadline for the filing                                               |
| `esg_filing_submitted_at`  | DateTime   | 7.3        | Timestamp of filing submission                                        |
| `third_party_verified`     | Boolean    | 7.3        | Whether the ESG data has been third-party verified                    |

---

## Mock Data Constants (Demo-Ready)

### Demo Operator Profile

```
Operator:             [COMPANY_NAME]
Reporting scope:      3 operational blocks (XYZ-07, CB-ONN-2010/1, RJ-ONN-2015/1)
Annual gross production: ~16 lakh bbl (approx 1.33 lakh bbl/month average)
Annual OPEX:          ~Rs. 63 Cr
Annual CAPEX:         ~Rs. 28 Cr
Reporting team:       VP Operations + Finance Controller + HSE Manager + ESG Lead
ERP:                  SAP (financial and operational data source)
Listed entity:        Yes — BRSR mandatory from FY 2023-24
ESG rating:           CRISIL ESG Score: 58/100 (FY 2024 baseline)
Reporting cadence:    Daily ops report, weekly summary, monthly management report, quarterly board
```

### Demo Personnel (Reporting & BI Context)

```
Anand Sharma       — VP Operations (primary approver of management and board reports)
Ravi Patel         — Finance Controller (OPEX/CAPEX data owner; reviews financial sections)
Priya Menon        — HSE Manager (HSE and ESG data owner; reviews safety sections)
Rajesh Kumar       — Well Engineer (primary BI user for production and well performance queries)
Sushant Verma      — Drilling Superintendent (BI user for NPT and drilling performance)
Arjun Mehta        — Asst. Drilling Engineer (new user — learning the BI interface)
ESG Lead           — [COMPANY_NAME] ESG Lead (primary owner of 7.3 BRSR disclosure)
```

### Demo Production KPIs (FY 2024–25 Reference)

```
FY 2024-25 Gross Oil:       15,82,600 bbl  (avg: 1,31,883 bbl/month)
FY 2024-25 OPEX Total:      Rs. 61.3 Cr    (avg OPEX/bbl: Rs. 3,875)
FY 2024-25 CAPEX Total:     Rs. 26.4 Cr
FY 2024-25 LTI Count:       0
FY 2024-25 Near Misses:     27
FY 2024-25 Regulatory Filings: 62 total | 62 on-time | 100% approval rate
FY 2024-25 BRSR:            Submitted with Annual Report | Score: 58/100 (CRISIL)

FY 2025-26 YTD (Apr–Oct 2025):
  Gross Oil:     8,97,480 bbl   vs Budget: 9,41,750 bbl  (-4.7%)
  OPEX Total:    Rs. 36.2 Cr    vs Budget: Rs. 35.8 Cr   (+1.1%)
  OPEX/bbl:      Rs. 4,031      vs Budget: Rs. 3,980      (+1.3%)
  HSE:           0 LTI | 18 Near Misses (vs 14 in same period FY 24-25)
```

### Demo ESG Data (FY 2024–25)

```
GHG Emissions:
  Scope 1:  6,456 tCO2e  (diesel: 4,847 | flaring: 1,203 | fugitive: 312 | venting: 94)
  Scope 2:    248 tCO2e  (grid electricity)
  Total:    6,704 tCO2e  | Intensity: 0.052 tCO2e/bbl produced

Water:
  Fresh water consumed: 14,200 kL | Recycled: 8,900 kL (62.7%)
  Intensity: 0.11 kL/bbl

Waste:
  Hazardous waste: 84.3 MT (100% disposed via licensed contractor)
  Drilling cuttings: 312 MT | Produced water: 100% reinjected

Social:
  Total employees: 142 (permanent) + 48 contractors
  Gender ratio: 83% male, 17% female
  LTI rate: 0.00 per million man-hours
  Safety training hours: 2,847 total | 20.1 hrs/employee avg

BRSR Completion (FY 2024-25 submission):
  P1 Ethics: 82% | P2 Products: 61% | P3 Employees: 90% | P4 Stakeholders: 43%
  P5 Human Rights: 72% | P6 Environment: 91% | P7 Policy: 100% | P8 Growth: 52%
  P9 Consumer: 74% | OVERALL: 76%
```

### Demo Report Schedule (Active)

```
Daily Ops Report         Auto-generates 06:00 IST daily    Last: 04 Nov 2025 06:00  ✓ Distributed
Weekly Production Summary Auto-generates Monday 07:00       Last: 03 Nov 2025 07:00  ✓ Distributed
Monthly Mgmt Report      Auto-generates 1st of month 06:00 Last: 01 Nov 2025 05:58  ✓ Distributed (Oct)
Q2 Board Report          Target: 15 Nov 2025               Status: Draft ready      Awaiting VP review
BRSR FY 2024-25          Filed with Annual Report           Status: Filed            SEBI acknowledged
BRSR FY 2025-26          Target: 31 Mar 2026               Status: 76% complete     On track
```

---

## Demo Build Prompt for M7 Screen

```
Build a Management Reporting & Business Intelligence screen for [PROJECT_NAME],
an AI operations platform for [MARKET / REGION] energy operators.

Clean light theme: Navy #0D1B2A primary, Accent Blue #1A6B8A section headers,
Gold #C8922A primary CTA, Teal #0F7B6C success states, Coral #C0392B critical alerts.
Card border: #D1D9E3. Background: #F5F6FA section fill. White cards.

Three sub-module tabs within M7: [7.1 Board Reporting] [7.2 Conversational BI] [7.3 ESG]
Default view on M7 Dashboard (before tabs).

DASHBOARD (default view):
(1) Top KPI bar: Gross Production MTD (1,28,340 bbl vs 1,34,750 target — show variance
    indicator ↓), OPEX/bbl (Rs. 4,127 — gold), HSE Status (0 LTI · 4 Near Misses — teal),
    Reg. Compliance (100% on-time — teal)
(2) Main area — two charts side by side:
    Left (60%): Recharts BarChart — 12-month production vs target (Nov 2024–Oct 2025).
    Navy bars = actual, gold line/bar = target. Show Oct 2025 bar noticeably below target.
    Right (40%): Recharts Donut — OPEX breakdown (5 categories from mock data above).
    Legend below donut with Rs. values.
(3) Bottom row:
    Left (60%): BI input field — label "Ask a question about your operations",
    placeholder text, gold Submit button. Below field: 3 recent query chips as clickable pills.
    Right (40%): Report schedule strip — 3 rows (Daily, Monthly, Q2 Board) with status badges
    and next-due date. Q2 Board shows "Draft Ready" in teal.

Sub-module 7.1 tab shows:
    Report schedule list (left 35%) — 5 report types with status badges, last generated,
    next scheduled. Monthly Mgmt Report row selected/highlighted.
    Report detail (right 65%) — shows Oct 2025 Monthly Report preview card with
    headline metrics table, AI commentary excerpt (first 3 sentences), reviewer name,
    and "Approve & Distribute" button (gold). Distribution log shows 3 recipients as
    sample rows with open timestamp.

Sub-module 7.2 tab shows:
    Full conversational BI interface. Pre-loaded with 2 of the 3 demo exchanges above
    (H1 OPEX comparison + NPT ranking). Source citation chips below each answer.
    Active input bar at bottom. 3 query history pills in left sidebar.
    Data freshness label at top: "Data current as of: 04 Nov 2025 06:00 IST".

Sub-module 7.3 tab shows:
    Top stats: Scope 1 (6,456 tCO2e — navy), Scope 2 (248 tCO2e — accent blue),
    Data Completeness (89% — teal), BRSR Status ("76% Complete" — gold).
    Tab navigation: [ESG Register] [Emissions] [BRSR Builder] [Filing Tracker]
    Default: ESG Register showing Scope 1 breakdown as a stacked data card with
    4 source rows (diesel, flaring, fugitive, venting) each showing tCO2e value,
    source label, and confidence %.
    BRSR Builder panel shows P1–P9 as a 3×3 grid of cards, each with principle name,
    completion % bar, and status badge (Complete / Draft Ready / In Progress).
    P6 (Environment) card is highlighted/selected showing the auto-populated draft text below.

Indian regulatory context — SEBI BRSR, MoEFCC, PNGRB. Rs. currency. Dates: DD MMM YYYY.
JetBrains Mono for all numbers, tCO2e values, Rs. figures, and timestamps.
React + Tailwind + Recharts.
```

---

## Brand & Design Parameters for M7 UI

### Color Usage

| Element                 | Color                                                | Hex                                 |
| ----------------------- | ---------------------------------------------------- | ----------------------------------- |
| Page background         | Light off-white                                      | #F5F6FA                             |
| Card / panel background | White                                                | #FFFFFF                             |
| Primary brand           | Deep navy                                            | #0D1B2A                             |
| Section headers         | Accent blue                                          | #1A6B8A                             |
| Primary CTA             | Gold                                                 | #C8922A                             |
| CTA background (light)  | Gold light                                           | #FDF3E3                             |
| Success / Teal          | On-target metric, compliance met, report distributed | #0F7B6C                             |
| Success background      | Teal light                                           | #E3F4F2                             |
| Critical / Danger       | Overdue report, data gap, critical variance          | #C0392B (pulsing for active alerts) |
| Critical background     | Coral light                                          | #FDECEA                             |
| Advisory / Warning      | Below-target metric, amber variance, draft ready     | #C8922A                             |
| Informational           | ESG data, citation chips, neutral annotations        | #1A6B8A                             |
| Chart actual            | Production / spend actuals                           | #0D1B2A (navy)                      |
| Chart target            | Budget / target series                               | #C8922A (gold)                      |
| Card border             | Border grey                                          | #D1D9E3                             |
| Secondary text          | Muted grey                                           | #8892A0                             |

### Typography

| Use Case                                                    | Font                                 |
| ----------------------------------------------------------- | ------------------------------------ |
| Module title, page heading                                  | DM Serif Display or Playfair Display |
| Body text, labels, descriptions, commentary                 | DM Sans or Plus Jakarta Sans         |
| All numbers, metrics, tCO2e values, Rs. figures, timestamps | JetBrains Mono                       |

### Key Animations (Demo-Specific)

| Animation                   | Where                        | Description                                                                              |
| --------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------- |
| BI response streaming       | 7.2 conversational interface | Answer text streams word-by-word — 40ms per token — for live intelligence feel           |
| Source chip reveal          | 7.2 after each answer        | Citation chips slide up with staggered 100ms delay per chip after answer completes       |
| Chart draw-in               | Dashboard + 7.1              | BarChart bars grow from baseline on tab load; donut segments draw sequentially           |
| Report compilation progress | 7.1 compiling state          | Step labels cycle: Data pull → Validation → Metrics → Template → Commentary → Ready      |
| BRSR completion bars        | 7.3 BRSR builder             | Principle completion bars animate from 0 to value on tab load                            |
| KPI variance indicator      | Dashboard KPI cards          | ↓ / ↑ arrows fade in after card value, colour-coded by favourable/unfavourable direction |
| Pinned answer animation     | 7.2 pin action               | Answer card shrinks and flies to a widget position on the dashboard                      |
| ESG data refresh pulse      | 7.3 data register            | \"Refreshing data...\" pulse on the freshness timestamp when data pull is triggered      |

---

## Technical Integration Map for M7

| Sub-module             | External Systems / APIs                                                             | Data Flow Direction                                                 |
| ---------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 7.1 Report Compilation | ERP (SAP) — OPEX/CAPEX/budget                                                       | ERP → Report engine → Report draft                                  |
| 7.1 Report Compilation | Production logs, M1–M6 module data                                                  | All modules → Report engine → Report draft                          |
| 7.1 Report Compilation | Claude API (Anthropic) — commentary generation                                      | Report metrics → AI → Draft narrative                               |
| 7.1 Report Compilation | Email / distribution API                                                            | Finalised report → Recipient list                                   |
| 7.2 Conversational BI  | All M7 data + ERP + production logs (read)                                          | User query → AI → Answer with citations                             |
| 7.2 Conversational BI  | Claude API (Anthropic) — NL query processing                                        | Plain-English query → AI → Structured answer                        |
| 7.3 ESG Register       | Fuel consumption logs, electricity meters, water meters, waste manifests (all read) | Operational records → ESG register                                  |
| 7.3 ESG Register       | M3 HSE data (LTI, near misses, training)                                            | M3 → ESG social metrics                                             |
| 7.3 ESG Register       | M6 workforce data (headcount, gender ratio)                                         | M6 → ESG social metrics                                             |
| 7.3 BRSR Builder       | Claude API (Anthropic) — disclosure narrative generation                            | ESG data → AI → BRSR draft text                                     |
| 7.3 Filing Tracker     | MoEFCC / CPCB / SEBI portals (where API available)                                  | Disclosure → Regulatory portal                                      |
| All M7                 | M7 report archive (write)                                                           | All finalised reports, queries, ESG disclosures → Permanent archive |

---

## Summary: M7 at a Glance

| Item                           | Detail                                                                                                        |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| Module                         | M7 — Management Reporting & Business Intelligence                                                             |
| Sub-modules                    | 3 (7.1 → 7.3)                                                                                                 |
| Total pages                    | 4 (1 dashboard + 3 sub-module pages)                                                                          |
| Primary data objects           | Automated reports, BI query-answer records, ESG data register, BRSR disclosures                               |
| Regulators / standards covered | SEBI BRSR · MoEFCC Form-V · CPCB Hazardous Waste Return · GRI Standards · TCFD                                |
| Key output                     | On-time automated reports + instant conversational BI answers with citations + audit-ready BRSR disclosure    |
| Demo focus                     | Live conversational BI — complex OPEX comparison question answered in under 15 seconds with cited source data |
| Design tone                    | Executive-grade dashboard — light theme, premium, data-dense but visually clean                               |
| Compliance                     | SEBI BRSR (mandatory listed) · MoEFCC · Companies Act 2013 · PNGRB Act 2006                                   |
| Currency                       | Rs. Indian Rupee — Lakhs (L) and Crores (Cr)                                                                  |
| Date format                    | DD MMM YYYY                                                                                                   |
| Language                       | English (Indian) — formal management and regulatory context                                                   |
| Market context                 | [MARKET / REGION] upstream oil and gas operations                                                             |

---

_[PROJECT_NAME] · Management Reporting & Business Intelligence Module — M7 Build Guide_
_by [COMPANY_NAME] · [WEBSITE]_
_Version [VERSION] · [PUBLIC / INTERNAL / CONFIDENTIAL]_
