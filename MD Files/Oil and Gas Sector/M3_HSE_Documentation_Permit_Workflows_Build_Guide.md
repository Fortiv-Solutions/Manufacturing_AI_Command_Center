# M3 — HSE Documentation & Permit Workflows
### [PROJECT_NAME] · AI Operations Platform · [WEBSITE]

> **Module Tagline:** Replaces manual safety documentation with AI-drafted, workflow-routed, compliance-ready safety instruments — so every job starts with a complete JSA and every permit is issued, tracked, and closed with a full digital trail.

**Document Type:** Module Build Guide & Parameter Reference
**Module Code:** M3
**Total Sub-Modules:** 4 (3.1 → 3.4)
**Version:** [VERSION]
**Company:** [COMPANY_NAME]
**Classification:** [PUBLIC / INTERNAL / CONFIDENTIAL]
**Market:** [MARKET / REGION] — India Focus (OISD · PESO · DGMS · MoEFCC)

---

## Module Overview

### Purpose
Replace manual safety documentation with an **autonomous HSE engine** that drafts regulation-referenced Job Safety Analyses from plain-English work descriptions, routes Permit-to-Work instruments through enforced approval chains, guides structured incident reporting with AI root cause analysis, and maintains a current, currency-checked SOP library — so your HSE team shifts from form-filling to safety governance.

### Core Problem Being Solved

| Pain Point | Without M3 | With M3 |
|---|---|---|
| JSA preparation | 30–45 minutes per activity, often skipped under time pressure | AI draft generated in under 30 seconds |
| Permit-to-Work routing | Paper forms, manual signatures, physical circulation | Digital workflow — approvals in minutes from any device |
| Permit board visibility | Whiteboard or paper log — no real-time status | Live permit board with active, pending, and closed status |
| Incident report quality | Drafted ad hoc post-incident, often incomplete | AI-guided structured capture with root cause suggestions |
| SOP currency | Library reviewed manually — often years out of date | Continuous regulatory currency checks with auto-flagging |
| Qualification verification | Supervisor manually checks paper certifications | Automatic qualification gate blocks permit for lapsed certs |
| Audit trail creation | Physical files, prone to loss or inconsistency | Tamper-evident digital log — every event recorded |

### Demo Wow Moment
**AI generating a complete, OISD-referenced JSA on screen in 20 seconds** — supervisor types: *'Hot work on gas compression skid at Well Pad C, replacing a faulty flange joint.'* The platform produces a structured JSA with identified hazards, risk ratings (Likelihood × Severity), required controls, PPE specifications, and gas testing intervals — fully referenced to applicable OISD standards. Supervisor reviews, approves in one click, permit issued. Zero manual documentation.

---

## Module-Level Parameters

| Parameter | Value |
|---|---|
| Module ID | M3 |
| Module Name | HSE Documentation & Permit Workflows |
| Sub-module Count | 4 |
| Primary Output | AI-drafted JSAs + digital PTW instruments + structured incident reports + current SOP library |
| Primary Users | HSE Manager, Site Supervisor, Operations Manager, Field Technician, Compliance Officer |
| JSA Generation Time | Under 30 seconds from plain-English work description |
| Supported Permit Types | Hot Work, Cold Work, Confined Space Entry, Electrical Isolation, Height Work, Excavation |
| Supported Regulators | OISD, PESO, DGMS, MoEFCC, Factory Inspectorate |
| Compliance References | OISD-STD-105, OISD-STD-154, OISD-STD-171, OISD-STD-189, OISD-GS-RP-04, PESO Act 1884 |
| Incident Report Formats | DGMS Form-B, OISD Incident Report, Internal HSE Report |
| Languages | English (primary), Hindi |
| Currency Format | Rs. Indian Rupee — Lakhs (L) and Crores (Cr) |
| Demo Financial Period | FY 2024–25 (Apr 2024 – Mar 2025) |

---

## Module Pages & Navigation Structure

```
M3 — HSE Documentation & Permit Workflows
│
├── [Page 1]  Module Dashboard / Overview              ← Landing page for M3
│             (KPIs, live permit board, open JSAs, SOP flags, recent incidents)
│
├── [Page 2]  3.1  AI-Assisted Job Safety Analysis (JSA) Drafting
│             (Work description input, AI-generated JSA, risk matrix, approval flow)
│
├── [Page 3]  3.2  Permit-to-Work Workflow Automation
│             (Permit board, approval chain, qualification gate, live status)
│
├── [Page 4]  3.3  Incident Report Generation & Root Cause Assistant
│             (Incident capture form, AI root cause panel, corrective actions, regulatory notification)
│
└── [Page 5]  3.4  Safety Procedure & SOP Management
              (SOP library, currency flags, version control, acknowledgement tracking)
```

---

## Page 1 — Module Dashboard (M3 Overview)

### Purpose
The landing screen for Module 3. Gives a complete real-time view of the site's safety documentation status — active permits, open JSAs, recent incidents, SOP currency health, and upcoming HSE deadlines — in a single screen.

### Layout
- **Top Stats Bar** (4 KPI cards across)
- **Centre Left:** Live permit board — all active and pending permits for the current shift
- **Centre Right:** HSE compliance score + SOP currency health donut
- **Bottom:** Quick-access tiles to each sub-module (3.1 → 3.4) + recent HSE activity log

### KPI Cards (Top Stats Bar)

| Card | Metric | Mock Value | Color |
|---|---|---|---|
| Active Permits | Permits currently live on site | 4 | Accent Blue #1A6B8A |
| JSAs Drafted Today | AI-generated JSAs created in the last 24 hours | 7 | Success Teal #0F7B6C |
| Open Incidents | Incidents under investigation or awaiting closure | 2 | Danger Coral #C0392B (pulsing) |
| SOP Flags | SOPs referencing superseded regulatory clauses | 3 | Gold #C8922A |

### HSE Compliance Score Donut Chart
Recharts donut showing site HSE documentation health by category:

| Category | Mock Score | Color |
|---|---|---|
| Permit Documentation | 98% | #0F7B6C |
| JSA Completion Rate | 94% | #1A6B8A |
| Incident Reporting Timeliness | 89% | #E8A838 |
| SOP Currency | 85% | #C0392B |
| Workforce Qualification Compliance | 94% | #2596BE |

### Live Permit Board Strip
Compact live board showing:
- Permit number, type badge, status, personnel, expiry time
- Status indicator per permit (Active / Pending / Closed / Escalated)
- Time remaining counter per active permit
- Escalation alert badge on overdue approvals

### Sub-Module Quick Access Tiles (Bottom Row)
Four clickable tiles, each showing:
- Sub-module number + name
- One-line description
- Status indicator (Active / Idle)
- Key stat for today (JSAs drafted / permits active / incidents open / SOP flags)

---

## Page 2 — Sub-Module 3.1: AI-Assisted Job Safety Analysis (JSA) Drafting

### What It Is
A generative AI tool that produces a complete, OISD-compliant Job Safety Analysis from a plain-English description of the planned work activity — turning a 45-minute documentation burden into a 20-second AI draft ready for supervisor review and sign-off.

### Supported Work Activity Types

| Work Category | Applicable Standards | Typical Job Steps Generated | Typical Processing Time |
|---|---|---|---|
| Hot Work (welding, cutting, grinding) | OISD-STD-105, PESO HWP | 6–9 steps | 18–25 seconds |
| Confined Space Entry | OISD-STD-154, Factory Act | 7–10 steps | 20–28 seconds |
| Chemical / Acid Work | OISD-STD-189, MSDS protocol | 6–8 steps | 18–24 seconds |
| Height Work / Scaffolding | OISD-STD-171, Construction regs | 5–7 steps | 15–20 seconds |
| Electrical Isolation | OISD-GS-RP-04, PESO Electrical | 6–9 steps | 18–25 seconds |
| Excavation / Civil Work | Factory Act, local municipal regs | 5–8 steps | 15–22 seconds |

### What the AI Generates Per JSA

| JSA Component | Description | Mock Example |
|---|---|---|
| Job Steps | Sequential task breakdown from description | Site preparation → Equipment staging → Work execution |
| Hazard Identification | Per-step hazard types and sources | Pressurised acid equipment — potential leak or spray |
| Risk Rating | Likelihood × Severity matrix score | HIGH (4 × 4 = 16) |
| Required Controls | Engineering, administrative, and PPE controls | Full face shield + chemical-resistant gloves mandatory |
| Regulatory References | Applicable OISD / PESO / DGMS clauses | OISD-STD-105 Clause 7.2 compliance required |
| Emergency Actions | Per-step emergency response procedures | Eye wash station within 10m; SCBA on standby |
| PPE Specification | Work-type and hazard-specific PPE list | Level C chemical suit, face shield, neoprene gloves |

### Risk Rating Matrix

| Likelihood \ Severity | Minor (1) | Moderate (2) | Serious (3) | Fatal (4) |
|---|---|---|---|---|
| Unlikely (1) | 1 — Low | 2 — Low | 3 — Medium | 4 — Medium |
| Possible (2) | 2 — Low | 4 — Medium | 6 — Medium | 8 — High |
| Likely (3) | 3 — Medium | 6 — Medium | 9 — High | 12 — Critical |
| Almost Certain (4) | 4 — Medium | 8 — High | 12 — Critical | 16 — Critical |

### JSA Approval Workflow

| Step | Action | Role | Required Before |
|---|---|---|---|
| 1 | AI generates draft JSA from work description | System | — |
| 2 | Supervisor reviews, edits, or annotates AI draft | Job Supervisor | Approval |
| 3 | Area Authority signs off (for High or Critical risk ratings) | Area Authority | Permit issuance |
| 4 | Safety Officer endorses (for Critical risk ratings or regulatory-specified activities) | Safety Officer | Permit issuance |
| 5 | JSA locked and linked to the corresponding PTW instrument | System | Work commencement |

### Page Layout
**Top Control Bar:** Work description text field (primary, full width) → "Generate JSA" button (Gold) + work type selector + site location selector + risk override toggle
**Main Area (Left 35%):** Job steps panel — numbered step list with expand/collapse per step showing hazards and controls
**Main Area (Right 65%):** JSA document view — formatted JSA with risk matrix badges per step; inline editing enabled for supervisor annotation
**Top of JSA:** Risk summary bar: Total steps (8) | HIGH risk steps (2) | Controls required (11) | Regulatory references (3)
**Bottom:** "Approve & Link to Permit" button (Gold) + "Reject & Regenerate" button + "Export JSA PDF" button

### Mock Demo Data — Generated JSA Output

```
// INPUT (free text): 'Acid job on Well No. 7, Well Pad B — matrix stimulation
//   using 15% HCl. Duration: 6 hours. Personnel: 4. Location: onshore, Rajasthan'

// AI-GENERATED JSA:
Activity:     Acid matrix stimulation — Well No. 7, Well Pad B
Prepared by:  [PROJECT_NAME] AI  |  Date: 28 Oct 2025  |  Risk Level: HIGH
Reference:    OISD-STD-105 | OISD-STD-189 | PESO Circular 2021-07

Job Step 1: Site preparation and equipment staging
  Hazard:   Pressurised acid equipment — potential leak or spray
  Risk:     HIGH (4 × 4 = 16)
  Controls: Full face shield + chemical-resistant gloves + apron mandatory
            Cordon off 10m radius. Wind sock checked — upwind positioning only
            OISD-STD-105 Clause 7.2 compliance required

Job Step 2: Acid mixing and quality check
  Hazard:   Exothermic reaction — heat and fumes
  Risk:     MEDIUM (3 × 3 = 9)
  Controls: Mixing only in ventilated area. SCBA on standby. Eye wash <10m
            Temperature monitoring — abort if >45°C during mixing

Job Step 3: Wellhead connection and pressure test
  Hazard:   High-pressure fluid — potential wellhead leak on connection
  Risk:     HIGH (4 × 3 = 12)
  Controls: Pressure test to 1.5× MAWP before acid injection
            All personnel behind blast shield during pressure test
            PTW Hot Work endorsement required for all open-flame equipment nearby

...

// Total job steps generated: 8 | Generation time: 00:00:22
// High risk steps: 2 | Controls generated: 14 | Reg. references: 5
// Status: DRAFT — awaiting Supervisor review and sign-off
// Linked permit: PTW-2025-1151 (pending issuance)
```

### Anomaly & Override Rules

| Rule | Trigger | System Action |
|---|---|---|
| Critical risk auto-escalation | Any step rated Critical (≥12 on matrix) | Mandatory Safety Officer approval added to workflow |
| Regulatory activity flag | Work type matches OISD-listed high-risk activities | Applicable OISD standard pre-loaded as context |
| Insufficient description | Work description lacks task, location, or chemical details | Prompt for missing fields before generation |
| Regeneration request | Supervisor clicks "Reject & Regenerate" with annotation | AI incorporates annotation into revised draft |
| Approval with edits | Supervisor modifies AI draft before approving | Edit log retained — original AI draft preserved |

### Key UI Elements
- **AI generation animation** — text field populates sequentially: "Identifying hazards… Applying risk matrix… Loading OISD references… Draft ready" — 20-second sequence
- **Risk badge per step** — colour-coded risk level badge beside each job step: Teal (Low) / Blue (Medium) / Gold (High) / Coral pulsing (Critical)
- **Inline editing** — supervisor can click any field in the JSA to edit; edit is logged with name and timestamp
- **Regulatory reference chips** — each applicable standard shown as a clickable chip; click opens the full clause text in a side panel
- **One-click permit link** — approved JSA auto-links to the corresponding PTW; permit cannot be issued without an approved JSA for High or Critical activities

### Why It Matters
In [MARKET / REGION]'s upstream operations, a JSA is legally required before every non-routine work activity under OISD and DGMS regulations. When a supervisor faces a 45-minute documentation task before a 2-hour job, compliance fatigue is predictable — and the consequences of a skipped or inadequate JSA manifest as incidents. When AI produces a 90% complete, regulation-referenced JSA in 20 seconds, compliance rates rise because the system helps rather than obstructs.

---

## Page 3 — Sub-Module 3.2: Permit-to-Work Workflow Automation

### What It Is
A fully digital Permit-to-Work system that automates the issuance, multi-level routing, sign-off, extension, and close-out of all permit types, with a real-time permit board and a complete electronic audit trail — replacing paper-based PTW systems that are slow, illegible, and frequently lost.

### Supported Permit Types

| Permit Type | Applicable Standard | Approval Levels Required | Max Duration | Extension Allowed |
|---|---|---|---|---|
| Hot Work | OISD-STD-105, PESO | 3 (Area Auth + Safety + Site Mgr) | 8 hours | Yes — 1× per shift |
| Cold Work | OISD general, SWP | 2 (Area Auth + Safety) | 12 hours | Yes |
| Confined Space Entry | OISD-STD-154, Factory Act | 3 (Area Auth + Safety + Site Mgr) | 4 hours | Yes — with re-gas test |
| Electrical Isolation | OISD-GS-RP-04 | 3 (Area Auth + Electrical + Safety) | Shift duration | No extension |
| Height Work | OISD-STD-171 | 2 (Area Auth + Safety) | 8 hours | Yes |
| Excavation | Local regs + site SWP | 2 (Area Auth + Civil) | 24 hours | Yes |

### Permit Monitoring Parameters

| Parameter | Description | Mock Example |
|---|---|---|
| `ptw_id` | Unique permit reference | PTW-2025-1147 |
| `permit_type` | Type of permit issued | Hot Work |
| `work_description` | Description of the authorised work | Flange replacement on gas compression skid, Pad C |
| `location` | Work location on site | Well Pad C — Compressor Area |
| `issued_by` | Authorising officer name | Anand Sharma |
| `issued_at` | Date and time of permit activation | 28 Oct 2025 07:30 IST |
| `expiry_at` | Date and time of permit expiry | 28 Oct 2025 14:00 IST |
| `personnel_named` | Workers covered by the permit | Rajesh Kumar, Ramesh Nair |
| `linked_jsa` | JSA reference linked to this permit | JSA-2025-0314 |
| `approval_chain_status` | Progress through approval steps | Step 3 of 3 — Complete |
| `qualification_check` | Result of automated qualification verification | All personnel — PASS |
| `status` | Current permit status | Active |
| `escalation_flag` | Whether an overdue approval escalation has fired | No |
| `close_out_by` | Person who closed the permit on completion | Rajesh Kumar |
| `close_out_at` | Timestamp of permit close-out | 28 Oct 2025 13:18 IST |

### Approval Chain Logic

| Approval Step | Role | Trigger | Escalation Rule |
|---|---|---|---|
| Step 1 | Area Authority | All permit types | Escalate to Site Manager if no response in 30 minutes |
| Step 2 | Safety Officer | All permit types | Escalate to HSE Manager if no response in 30 minutes |
| Step 3 | Site Manager | Hot Work, Confined Space, Electrical Isolation | Escalate to VP Operations if no response in 45 minutes |
| Step 4 | VP Operations | Critical risk activities or value-limit permits | Manual escalation only |

### Page Layout
**Top Stats Bar:** Active Permits (4) | Pending Approval (1) | Closed Today (3) | Overdue Closures (0)
**Filter Bar:** Permit type filter | Status filter | Location filter | Date range filter | Personnel filter
**Main Area:** Live permit board — full-width table with columns: PTW Number, Type (colour badge), Status, Location, Personnel, Issued By, Expiry Time, JSA Linked, Actions
**Detail Drawer (right 400px):** Opens on row click — shows full permit details, approval chain timeline, qualification check results, linked JSA summary, and close-out controls
**Bottom:** "New Permit" button (Gold) + "Export Permit Log" button + shift handover summary

### Mock Demo Data — Permit Board

```
// ACTIVE PERMIT BOARD — Well Pad C, Rajasthan Block | 09:45 IST

PTW-2025-1147  HOT WORK     ACTIVE    Expires 14:00  Issued: Anand Sharma
               Personnel: Rajesh Kumar, Ramesh Nair  |  JSA: JSA-2025-0314 ✓
               Qualification check: PASS — all personnel current

PTW-2025-1148  ELEC ISOL    PENDING   Awaiting: Safety Officer sign-off
               Pending since: 09:00 IST  |  [45 min — ESCALATION ALERT]
               Auto-escalated to: Site Manager Sushant Verma at 09:44 IST

PTW-2025-1149  CONF SPACE   CLOSED    Completed: 08:30  Duration: 2h 15m
               Personnel: Vijay Singh, Deepak Arora  |  Close-out: Rajesh Kumar

PTW-2025-1150  EXCAVATION   DRAFT     Initiator: Ravi Patel  [in progress]
               Status: JSA pending — block excavation scheduled for 11:00

// ESCALATION ALERT: PTW-2025-1148 — Safety Officer approval pending >45 minutes
// Auto-escalated to Site Manager at 09:44 IST | Response required

// This month: 147 permits issued | 0 overdue closures | 2 extensions granted
```

### Qualification Gate Logic

When a Permit-to-Work is initiated and personnel are named, the system automatically cross-references each person's certification records against the qualification requirements for that permit type:

| Permit Type | Qualifications Verified |
|---|---|
| Hot Work | Hot Work awareness, Gas Testing Level 1+, valid safety induction |
| Confined Space Entry | Confined Space Entry cert, Gas Testing Level 2, First Aid |
| Electrical Isolation | OISD Electrical cert, Lockout/Tagout trained, Electrical safety awareness |
| Height Work | Working at Height cert, Harness inspection trained, valid safety induction |

If any named worker fails the qualification check, the permit is blocked with a specific alert showing the expired or missing certificate. The supervisor must substitute a qualified person before the permit can proceed.

### Alert Rules

| Rule | Trigger | Alert Sent To |
|---|---|---|
| Approval overdue | Approval step pending >30 minutes | Pending approver + supervisor |
| Auto-escalation | Approval pending >45 minutes with no response | Next approval level in chain |
| Permit nearing expiry | Active permit within 30 minutes of expiry | Issued-by person + named personnel |
| Permit not closed out | Active permit 15 minutes past expiry with no close-out | Issued-by person + Safety Officer |
| Qualification fail | Named worker fails certification check | Initiating supervisor |

### Key UI Elements
- **Live permit board** — updates in real time; status changes without page refresh
- **Colour-coded type badges** — Hot Work (Coral), Cold Work (Teal), Confined Space (Gold), Electrical (Blue), Height (Purple), Excavation (Grey)
- **Approval chain timeline** — visual step-by-step progress tracker in the detail drawer; each step shows approver, role, timestamp, and approve/reject action button
- **Qualification check panel** — inline per-person qualification result in the permit draft; ✓ or ✗ with certificate name and expiry date
- **Shift handover summary** — one-click summary of all permits active at shift change, for physical or digital handover
- **Tamper-evident log** — every permit event (issue, approval, extension, close-out) is time-stamped and write-once

### Why It Matters
Paper-based PTW systems are slow, illegible, and frequently lost. In [MARKET / REGION]'s onshore operations, the inability to locate a closed-out permit during an incident investigation can have serious regulatory and legal consequences with DGMS. Digital PTW management ensures every permit event is logged, searchable, and provable — while the qualification gate prevents the single most common compliance failure: deploying a worker whose certification has lapsed.

---

## Page 4 — Sub-Module 3.3: Incident Report Generation & Root Cause Assistant

### What It Is
An AI copilot that guides supervisors through structured incident documentation immediately after an event, suggests probable root causes from narrative descriptions using established analysis frameworks, and generates a complete OISD/DGMS-format incident report ready for submission — transforming a high-stress post-incident writing task into a structured, AI-assisted process.

### Incident Classification Parameters

| Parameter | Description | Mock Example |
|---|---|---|
| `incident_id` | Unique incident reference | INC-2025-0089 |
| `incident_type` | Classification of the event | Near Miss |
| `severity` | Severity classification | Near Miss / First Aid / Medical Treatment / LTI / Fatality |
| `date_time` | Date and time of the incident | 28 Oct 2025 11:14 IST |
| `location` | Where the incident occurred | Well No. 12, Well Pad C |
| `personnel_involved` | Names of persons involved or injured | Ramesh Nair |
| `witnesses` | Names of witnesses | Rajesh Kumar |
| `immediate_actions` | Actions taken immediately after the incident | Area cordoned; worker assessed by medic |
| `injury_type` | Nature of injury (if any) | None — near miss, no contact |
| `equipment_involved` | Equipment associated with the event | Elevated platform access ladder |
| `regulatory_notification` | Whether DGMS/OISD notification is required | No — near miss, below notification threshold |
| `root_cause_method` | Framework used for root cause analysis | 5-Why |
| `corrective_actions_count` | Number of corrective actions generated | 3 |
| `report_status` | Current status of the report | Draft — awaiting supervisor review |

### Severity Classification & Regulatory Notifications

| Severity | Definition | DGMS Notification | OISD Notification | Reporting Deadline |
|---|---|---|---|---|
| Near Miss | Unplanned event — no injury or damage, but potential was present | Not required | Internal record required | Within 24 hours (internal) |
| First Aid | Injury requiring first aid only — no lost time | Not required | Site log entry | Same shift |
| Medical Treatment | Injury requiring medical treatment beyond first aid | Not required | Monthly summary | Within 7 days |
| Lost Time Injury (LTI) | Injury causing ≥1 shift of lost time | Required — Form-B, within 24 hours | Required — within 24 hours | Within 24 hours |
| Dangerous Occurrence | Defined dangerous occurrence under DGMS Metalliferous Mines Regulations | Required — immediate | Required — immediate | Immediately |
| Fatality | Any work-related death | Required — immediate + Form-A | Required — immediate | Immediately |

### AI Root Cause Framework

The AI analyses the supervisor's narrative description and applies selected frameworks to suggest root causes:

| Framework | Approach | Best For |
|---|---|---|
| 5-Why Analysis | Iteratively asks "why" 5 times to reach the systemic root cause | Most incident types — straightforward and field-practical |
| Bowtie Analysis | Maps threat pathways, barriers, and consequence controls | Complex incidents with multiple failure points |
| Fault Tree Analysis | Logical decomposition of contributing factors | Technical or equipment failures |

### Page Layout
**Top Control Bar:** Incident type selector + severity selector + "Start New Report" button (Gold) + report status badge
**Main Area (Left 50%):** Structured incident capture form — sequential sections: What Happened, Where & When, Who Was Involved, Immediate Actions, Equipment/Environment, Injury/Damage Details
**Main Area (Right 50%):** AI analysis panel — root cause suggestions, contributing factor list, corrective action recommendations, regulatory notification status
**Top of AI Panel:** Framework selector (5-Why / Bowtie / Fault Tree) + confidence score for root cause suggestions
**Bottom:** "Generate Formal Report" button (Gold) + "Submit for Review" button + "Notify Regulator" button (conditional on severity)

### Mock Demo Data — Incident Capture & Root Cause Output

```
// INCIDENT INPUT (supervisor narrative):
  'Worker slipped while descending from a 3-metre elevated platform at Well 12.
   He was carrying a tool bag and grabbed the handrail but fell anyway.
   No injury — near miss. Platform surface was wet from earlier rain.'

// AI ROOT CAUSE ANALYSIS (5-Why Framework):
  Immediate Cause:   Wet surface on elevated platform access ladder
  Why 1:             No anti-slip matting or grating on platform surface
  Why 2:             Platform specification did not include anti-slip requirement
  Why 3:             Existing JSA for elevated work did not flag wet-surface risk
  Why 4:             JSA template for height work lacks weather condition check
  Root Cause:        Pre-task inspection checklist does not include surface hazard
                     assessment for elevated work in wet conditions

// CONTRIBUTING FACTORS:
  > Worker carrying tool bag — hands not free for full handrail grip
  > Tool bag holder not installed at platform access point (per SWP-HSE-07)
  > No signage warning of wet surface risk after rainfall

// AI-GENERATED CORRECTIVE ACTIONS:
  1. Install non-slip grating on all elevated platforms — Priority: HIGH, Owner: Sushant Verma, Due: 04 Nov 2025
  2. Add 'wet surface hazard check' to JSA template for outdoor elevated work — Priority: HIGH, Due: 31 Oct 2025
  3. Install tool bag holder at all elevated platform access points — Priority: MED, Due: 14 Nov 2025
  4. Retrain all crew on two-point contact and tool handling at height — Priority: MED, Due: 30 Nov 2025

// Regulatory notification: NOT REQUIRED (near miss — below DGMS threshold)
// Report format: DGMS Internal Near Miss Record + OISD Site Log
// Report generated: INC-2025-0089 | Status: DRAFT — awaiting supervisor review
// Estimated time from incident to complete draft: 8 minutes
```

### Formal Report Output (On "Generate Formal Report")

```
// FORMAL INCIDENT REPORT — INC-2025-0089
// [COMPANY_NAME] | Well No. 12, Well Pad C | 28 Oct 2025

SECTION 1 — EVENT SUMMARY:
  At 11:14 IST on 28 October 2025, a near miss event occurred at Well Pad C
  when a worker (Ramesh Nair, Senior Technician) slipped while descending a
  3-metre elevated platform access ladder at Well No. 12. No injury was sustained.
  The platform surface was wet following morning rainfall.

SECTION 2 — IMMEDIATE ACTIONS TAKEN:
  Area cordoned at 11:16 IST. Worker assessed by site medic — no injury confirmed.
  Platform access suspended pending surface inspection (authorised by Anand Sharma).

SECTION 3 — ROOT CAUSE (5-WHY ANALYSIS):
  [See root cause output above]

SECTION 4 — CORRECTIVE ACTIONS:
  [4 actions as above — with owner, priority, and due date]

SECTION 5 — REGULATORY STATUS:
  DGMS notification: Not required (near miss — below Form-B threshold)
  OISD internal record: Required — added to site incident log

PREPARED BY: Rajesh Kumar, Site Supervisor  |  REVIEWED BY: Priya Menon, HSE Manager
DATE: 28 Oct 2025

// Status: DRAFT — pending Priya Menon sign-off
```

### Alert Rules

| Rule | Trigger | Alert Sent To |
|---|---|---|
| LTI or fatality | Incident classified as LTI or above | HSE Manager + VP Operations immediately |
| Regulatory notification due | Severity requires DGMS/OISD notification | HSE Manager + Compliance Officer |
| Corrective action overdue | Generated action not completed by due date | Assigned owner + HSE Manager |
| Incident trend alert | Same incident type recurs ≥3 times in 30 days | HSE Manager + Site Manager |
| Report not completed | Draft report not submitted within 24 hours of incident | Initiating supervisor + HSE Manager |

### Key UI Elements
- **Sequential form sections** — supervisor guided through capture fields in logical order; no section can be skipped on LTI or above
- **AI confidence score** — displayed per root cause suggestion; low confidence suggestions (<75%) shown in amber with "verify this finding" prompt
- **Framework toggle** — supervisor can switch between 5-Why, Bowtie, and Fault Tree without losing entered data; AI re-analyses on switch
- **Corrective action generator** — AI generates structured corrective actions with owner, priority, and due date; all editable before approval
- **Regulatory notification button** — conditionally enabled based on severity; clicking generates the required regulatory notification in the correct format and addresses it to the correct authority

### Why It Matters
Incident reports written hours after an event by a stressed supervisor are frequently incomplete, inconsistently structured, and inadequate for root cause investigation. The root cause analysis quality determines whether corrective actions prevent the next incident or merely address symptoms. When AI structures the documentation process, guides the supervisor through each section, and suggests root cause categories from the narrative, report quality improves consistently — preserving the investigation value that matters for future prevention.

---

## Page 5 — Sub-Module 3.4: Safety Procedure & SOP Management

### What It Is
A centralised, version-controlled library for all safety procedures, standard operating procedures, and method statements — with AI-assisted SOP drafting, continuous regulatory currency checking, and tracked acknowledgement records ensuring procedures are actually read and understood.

### SOP Record Parameters

| Field | Description | Mock Example |
|---|---|---|
| `sop_id` | Unique SOP reference | SOP-HSE-014 |
| `title` | Full SOP title | Scaffold Erection and Inspection Procedure |
| `category` | SOP category | Working at Height |
| `version` | Current version number | v3.1 |
| `effective_date` | Date version came into effect | 01 Jan 2024 |
| `review_due_date` | Scheduled next review date | 01 Jan 2026 |
| `regulatory_references` | Standards referenced in the SOP | OISD-STD-171 Rev.2 (2023) |
| `currency_status` | Whether referenced regulations are current | FLAGGED — references 2018 edition |
| `last_reviewed_by` | Person who last reviewed and approved | Priya Menon |
| `acknowledgement_rate` | % of required personnel who have confirmed reading | 87% |
| `personnel_requiring_ack` | Roles required to acknowledge this SOP | All field personnel + supervisors |
| `pending_acknowledgements` | Count of outstanding acknowledgements | 4 |

### SOP Currency Check Logic

The system continuously cross-references each SOP's cited regulatory standards against the current version of the applicable regulation in the knowledge base:

| Check Type | Trigger | Output |
|---|---|---|
| Standard version check | New regulatory version ingested | Flag all SOPs citing the superseded version |
| Clause change check | Specific clause amended in updated standard | Flag all SOPs containing that clause reference |
| Review schedule check | SOP review date approaches within 60 days | Alert SOP owner for scheduled review |
| Overdue review alert | Review date passed with no review logged | Escalate to HSE Manager |

### Page Layout
**Top Stats Bar:** Total SOPs (64) | Current (51 — 79%) | Due Review (10 — 16%) | Flagged (3 — 5%)
**Filter Bar:** Category filter | Currency status filter | Owner filter | Review status filter | Search
**Main Area (Left 65%):** SOP library table — columns: SOP ID, Title, Category, Version, Effective Date, Review Due, Currency Status, Acknowledgement Rate, Actions
**Right Panel (35%):** SOP detail card — opens on row click, showing full metadata, referenced standards, version history, flagged clauses, and acknowledgement list
**Bottom:** "Create New SOP" button (Gold) + "Export Library Report" button + "Run Currency Check" button

### Mock Demo Data — SOP Library Status

```
// SOP LIBRARY STATUS — [COMPANY_NAME] | 64 documents

CURRENT:     51 SOPs  (79%) — last reviewed within 18 months
DUE REVIEW:  10 SOPs  (16%) — review overdue by >18 months
FLAGGED:      3 SOPs  ( 5%) — reference superseded OISD clauses

FLAGGED DETAIL:

  SOP-HSE-014  Scaffold Erection and Inspection
               References: OISD-STD-171 (2018 edition)
               Current standard: OISD-STD-171 Rev.2 (2023) — 3 clauses updated
               Flagged clauses: 5.3 (load capacity tables), 7.1 (tie spacing), 9.4 (tag colours)
               Action: AI can auto-draft updated sections for supervisor review

  SOP-HSE-027  Fire Fighting and Emergency Response
               References: PESO Circular 12/2022 — monthly drill requirement
               Current SOP specifies: quarterly drill only
               Gap: Frequency non-compliance — monthly drill now mandatory
               Action: Update drill frequency clause before next HSE audit

  SOP-HSE-039  H2S Emergency Response and Evacuation
               References: OISD-GS-RP-04 (Q1 2024 edition)
               Current standard: OISD-GS-RP-04 Rev.1 (Q3 2025) — emergency contact format updated
               Action: Update Section 8 emergency contacts to new format

// Currency scan last run: Today 06:00 IST
// Regulatory knowledge base version: 2025-Q3
```

### SOP Detail Panel (On Row Click — SOP-HSE-014)

```
SOP-HSE-014 — Scaffold Erection and Inspection
Category: Working at Height  |  Version: v3.1  |  Status: FLAGGED

CURRENCY FLAG:
  OISD-STD-171 Rev.2 (2023) supersedes the edition referenced in this SOP.
  Affected clauses: 5.3 (load capacity tables updated), 7.1 (tie spacing
  requirements tightened), 9.4 (scaffold tag colour scheme changed).

  Recommended action: Update cited clauses and figures to Rev.2 standard.
  [Generate Draft Update Using AI]

VERSION HISTORY:
  v3.1  Revised 01 Jan 2024 by Priya Menon  [current]
  v3.0  Revised 14 Mar 2022 by Anand Sharma
  v2.1  Revised 09 Nov 2019 by [previous HSE lead]
  v2.0  Created 01 Apr 2017

ACKNOWLEDGEMENT STATUS:
  Required: All field personnel + supervisors (22 persons)
  Acknowledged: 19 (87%)
  Pending: 3 — [Arjun Mehta, new hire], [2 others — reminder sent 25 Oct]

[View Current SOP]  [Generate AI Draft Update]  [Send Acknowledgement Reminders]  [Archive Version]
```

### AI-Assisted SOP Drafting

When "Create New SOP" or "Generate AI Draft Update" is selected:

| Input | Description | Mock Example |
|---|---|---|
| Work category | Type of activity the SOP governs | Confined Space Entry |
| Applicable standards | OISD / PESO / DGMS standards to reference | OISD-STD-154, Factory Act Schedule |
| Site-specific requirements | Any site or block-specific conditions | Block RJ-ONN-2015/1 — H2S risk zone |
| Previous version (for updates) | Upload existing SOP for AI to update | SOP-HSE-022 v1.2 (current flagged version) |

Output: A complete draft SOP in [COMPANY_NAME]'s standard format, with all applicable regulatory clauses cited, PPE and equipment requirements specified, and a structured step-by-step procedure — ready for HSE Manager review and approval.

### Alert Rules

| Rule | Trigger | Alert Sent To |
|---|---|---|
| SOP flagged for currency | Regulatory update makes an SOP reference superseded | SOP owner + HSE Manager |
| Review overdue | Review date passed by >30 days with no review | SOP owner + HSE Manager |
| Acknowledgement below threshold | Acknowledgement rate falls below 80% for a mandatory SOP | SOP owner |
| New hire SOP gap | New employee onboarded — mandatory SOPs not yet acknowledged | Onboarding manager |
| Regulatory scan complete | Periodic currency scan completes | HSE Manager (summary report) |

### Key UI Elements
- **Currency status badge** — each SOP row shows Current (Teal) / Due Review (Gold) / Flagged (Coral pulsing) badge at a glance
- **Flagged clause viewer** — click a flagged SOP to see the specific clauses that are outdated, with side-by-side old and new clause text from the regulatory knowledge base
- **AI draft update** — one-click AI draft of the updated SOP sections, pre-populated with the current regulatory language, for HSE Manager review
- **Acknowledgement tracker** — per-SOP list of who has acknowledged, who has not, with bulk reminder send
- **Version comparison** — side-by-side diff between any two versions of the same SOP, with changed sections highlighted

### Why It Matters
An SOP library is only valuable if it is current and if personnel have actually read it. When procedures reference superseded OISD clauses — which routinely happens in libraries not reviewed in years — they can create false assurance or actively mislead workers. When acknowledgement tracking is manual, there is no proof that safety-critical procedures were communicated. [PROJECT_NAME] makes SOP currency management automatic and acknowledgement tracking systematic — turning the SOP library from a compliance tick-box into an active safety tool.

---

## Complete Module 3 — Master Parameter Reference

### All Data Fields Across M3

| Field Name | Type | Sub-module | Description |
|---|---|---|---|
| `jsa_id` | String | 3.1 | Unique JSA reference identifier |
| `jsa_work_description` | Text | 3.1 | Plain-English work description used to generate the JSA |
| `jsa_work_type` | Enum | 3.1 | Hot Work / Confined Space / Chemical / Height / Electrical / Excavation |
| `jsa_location` | String | 3.1 | Site location of the planned activity |
| `jsa_step_count` | Number | 3.1 | Total number of job steps generated |
| `jsa_risk_level` | Enum | 3.1 | Low / Medium / High / Critical |
| `jsa_regulatory_refs` | Array | 3.1 | OISD / PESO / DGMS clauses referenced |
| `jsa_generation_time` | Duration | 3.1 | Time taken to generate the draft JSA |
| `jsa_edit_log` | Array | 3.1 | Log of supervisor edits: field, old value, new value, editor, timestamp |
| `jsa_approved_by` | String | 3.1 | Name of supervisor who approved the JSA |
| `jsa_approved_at` | DateTime | 3.1 | Timestamp of JSA approval |
| `jsa_status` | Enum | 3.1 | Draft / Approved / Rejected / Linked / Archived |
| `ptw_id` | String | 3.2 | Unique PTW reference identifier |
| `ptw_type` | Enum | 3.2 | Hot Work / Cold Work / Confined Space / Electrical / Height / Excavation |
| `ptw_work_description` | Text | 3.2 | Description of the authorised work activity |
| `ptw_location` | String | 3.2 | Work location on site |
| `ptw_personnel` | Array | 3.2 | Names of all personnel covered by the permit |
| `ptw_linked_jsa` | String | 3.2 | JSA reference linked to this permit |
| `ptw_issued_by` | String | 3.2 | Authorising officer name |
| `ptw_issued_at` | DateTime | 3.2 | Permit activation timestamp |
| `ptw_expiry_at` | DateTime | 3.2 | Permit expiry timestamp |
| `ptw_approval_chain` | Array | 3.2 | Per-step approval records: role, approver, timestamp, action |
| `ptw_qualification_check` | Array | 3.2 | Per-person qualification results: name, cert, status, expiry |
| `ptw_status` | Enum | 3.2 | Draft / Pending / Active / Expired / Closed / Cancelled |
| `ptw_close_out_by` | String | 3.2 | Person who closed out the permit |
| `ptw_close_out_at` | DateTime | 3.2 | Permit close-out timestamp |
| `ptw_escalation_fired` | Boolean | 3.2 | Whether an overdue approval escalation was triggered |
| `incident_id` | String | 3.3 | Unique incident reference identifier |
| `incident_type` | Enum | 3.3 | Near Miss / First Aid / Medical Treatment / LTI / Dangerous Occurrence / Fatality |
| `incident_severity` | Enum | 3.3 | Near Miss / Minor / Moderate / Serious / Fatal |
| `incident_date_time` | DateTime | 3.3 | Date and time of incident |
| `incident_location` | String | 3.3 | Where the incident occurred |
| `incident_personnel` | Array | 3.3 | Names of persons involved |
| `incident_narrative` | Text | 3.3 | Supervisor's plain-English account of the event |
| `root_cause_method` | Enum | 3.3 | 5-Why / Bowtie / Fault Tree |
| `root_cause_immediate` | Text | 3.3 | Identified immediate cause |
| `root_cause_underlying` | Text | 3.3 | Identified underlying cause |
| `root_cause_systemic` | Text | 3.3 | Identified root (systemic) cause |
| `corrective_actions` | Array | 3.3 | Per-action: description, owner, priority, due date, status |
| `regulatory_notification_required` | Boolean | 3.3 | Whether DGMS/OISD notification is required |
| `regulatory_notification_sent_at` | DateTime | 3.3 | Timestamp of notification dispatch |
| `incident_report_status` | Enum | 3.3 | Draft / Under Review / Approved / Submitted / Closed |
| `sop_id` | String | 3.4 | Unique SOP reference identifier |
| `sop_title` | String | 3.4 | Full SOP title |
| `sop_category` | Enum | 3.4 | Work category (Height / Hot Work / Chemical / Confined Space / etc.) |
| `sop_version` | String | 3.4 | Current version number (v1.0, v2.1, etc.) |
| `sop_effective_date` | Date | 3.4 | Date current version came into effect |
| `sop_review_due_date` | Date | 3.4 | Scheduled next review date |
| `sop_regulatory_refs` | Array | 3.4 | Regulatory standards cited in the SOP |
| `sop_currency_status` | Enum | 3.4 | Current / Due Review / Flagged / Archived |
| `sop_flagged_clauses` | Array | 3.4 | Specific clauses identified as referencing superseded standards |
| `sop_acknowledgement_rate` | Number (%) | 3.4 | % of required personnel who have acknowledged the SOP |
| `sop_pending_acknowledgements` | Number | 3.4 | Count of outstanding acknowledgements |
| `sop_last_reviewed_by` | String | 3.4 | Name of last reviewer |
| `sop_last_reviewed_at` | DateTime | 3.4 | Timestamp of last review |

---

## Mock Data Constants (Demo-Ready)

### Demo Operator Profile

```
Operator:           [COMPANY_NAME]
Block:              XYZ-07 — Onshore, [MARKET / REGION]
HSE context:        OISD-STD-105, OISD-STD-154, OISD-STD-171, DGMS regulations
Annual permits:     ~1,800 PTWs issued per year across 3 sites
Incidents YTD:      2 LTIs, 14 Near Misses, 0 Fatalities (FY 2024-25)
HSE staff:          5 (1 HSE Manager, 2 Safety Officers, 1 Environmental Officer, 1 HSE Admin)
SOP library:        64 documents across 8 categories
```

### Demo Personnel (HSE & Operations)

```
Anand Sharma       — VP Operations / Site Manager (final approver for Critical permits)
Priya Menon        — HSE Manager (primary HSE documentation owner)
Rajesh Kumar       — Well Engineer / Site Supervisor (JSA and PTW initiator)
Ravi Patel         — Finance Controller (cost approval for safety capex actions)
Sushant Verma      — Drilling Superintendent / Area Authority
Ramesh Nair        — Senior Technician (incident subject in near miss demo)
Vijay Singh        — Field Technician (expired cert demo — Well Control Level 1)
Arjun Mehta        — Assistant Drilling Engineer (new hire — pending SOP acknowledgements)
```

### Demo HSE KPIs (Last Month Reference)

```
Active Permits:         4 (Hot Work 1, Conf. Space 1, Elec Isolation 1, Excavation 1 draft)
JSAs Drafted Today:     7 (5 AI-generated, 2 manually created)
Open Incidents:         2 (INC-2025-0089 near miss, INC-2025-0087 medical treatment)
SOP Flags:              3 (OISD-STD-171, PESO Circular, OISD-GS-RP-04)
Workforce Compliance:   94.4% (3 persons with lapsed certifications)
LTI Rate YTD:           0 (LTI-free since 01 Apr 2025 — 212 days)
Permit Compliance:      100% (0 overdue closures this month)
Near Miss Reporting:    14 YTD (target: 20 — under-reporting flag issued)
```

### Demo Permit Types & Standards

```
Hot Work            OISD-STD-105 — Recommended Practice on Welding and Cutting
Confined Space      OISD-STD-154 — Hazards in Entry into Confined Spaces
Height Work         OISD-STD-171 — Construction, Modification, Maintenance of Scaffolding
Electrical          OISD-GS-RP-04 — Safe Entry into Electrical Substations
Chemical Handling   OISD-STD-189 — Management of Change in Oil and Gas Operations
Fire Safety         PESO Circular 12/2022 — Fire Fighting Drill Frequency Requirement
```

---

## Demo Build Prompt for M3 Screen

```
Build an HSE Documentation & Permit Workflows AI screen for [PROJECT_NAME],
an AI operations platform for [MARKET / REGION] energy operators.

Clean light theme: Navy #0D1B2A primary, Accent Blue #1A6B8A section headers,
Gold #C8922A primary CTA, Teal #0F7B6C success states, Coral #C0392B critical alerts.
Card border: #D1D9E3. Background: #F5F6FA section fill. White cards.

Four sub-module tabs within M3: [3.1 JSA Drafting] [3.2 Permit-to-Work] [3.3 Incident Report] [3.4 SOP Library]
Default view on 3.2 Permit-to-Work.

Show:
(1) Top KPI bar: Active Permits (4 — accent blue), JSAs Today (7 — teal),
    Open Incidents (2 — pulsing coral), SOP Flags (3 — gold)
(2) Live permit board (full width): 4 permit rows with colour-coded type badges.
    PTW-2025-1148 shown in amber 'PENDING' with escalation alert badge.
    PTW-2025-1149 shown in grey 'CLOSED'. PTW-2025-1147 shown in teal 'ACTIVE'.
(3) Detail drawer (right 400px, open): Showing PTW-2025-1147 with 3-step approval
    chain (all complete with timestamps) and qualification check panel (2 persons, both ✓)
(4) "New Permit" Gold CTA button at top right

Sub-module 3.1 tab shows: Work description text input field with "Generate JSA" button.
Pre-loaded with acid job example. JSA panel showing 8 steps with risk badges.
Step 1 and Step 3 flagged HIGH (gold), all others MEDIUM (blue).

Sub-module 3.3 tab shows: Incident capture form (left) with AI root cause panel (right).
Near miss INC-2025-0089 pre-populated. Root cause analysis showing 3-level 5-Why.
4 corrective actions with owner and due date.

Sub-module 3.4 tab shows: SOP library table with 64 rows (show 8 sample rows).
3 rows with pulsing coral FLAGGED badge. Currency scan summary at top.
"Generate AI Draft Update" button on flagged rows.

Indian HSE context — OISD, PESO, DGMS. Dates: DD MMM YYYY. IST timestamps.
JetBrains Mono for all permit IDs, timestamps, and reference numbers. React + Tailwind + Recharts.
```

---

## Brand & Design Parameters for M3 UI

### Color Usage

| Element | Color | Hex |
|---|---|---|
| Page background | Light off-white | #F5F6FA |
| Card / panel background | White | #FFFFFF |
| Primary brand | Deep navy | #0D1B2A |
| Section headers | Accent blue | #1A6B8A |
| Primary CTA | Gold | #C8922A |
| CTA background (light) | Gold light | #FDF3E3 |
| Success / Teal | Permit active, JSA approved, SOP current | #0F7B6C |
| Success background | Teal light | #E3F4F2 |
| Critical / Danger | Escalated permits, critical incidents, flagged SOPs | #C0392B (pulsing for active alerts) |
| Critical background | Coral light | #FDECEA |
| Advisory / Warning | Pending approvals, medium risk ratings, due reviews | #C8922A |
| Informational | Accent blue | #1A6B8A |
| Card border | Border grey | #D1D9E3 |
| Secondary text | Muted grey | #8892A0 |

### Typography

| Use Case | Font |
|---|---|
| Module title, page heading | DM Serif Display or Playfair Display |
| Body text, labels, descriptions | DM Sans or Plus Jakarta Sans |
| All PTW IDs, timestamps, reference numbers, JSA step numbers | JetBrains Mono |

### Key Animations (Demo-Specific)

| Animation | Where | Description |
|---|---|---|
| JSA generation sequence | 3.1 generation flow | Text populates sequentially in JSA panel: hazards → risk ratings → controls — 20-second animated build |
| Risk badge colour transition | 3.1 per-step indicator | Badge colour transitions as risk rating is applied per step |
| Pulsing coral badge | Escalated permits in 3.2 | Permit row pulses every 2 seconds for overdue approvals |
| Approval chain step fill | 3.2 detail drawer | Steps fill with green tick as approvals complete, left to right |
| Qualification check result | 3.2 personnel panel | ✓ or ✗ badge appears per person with a short slide-in animation |
| Root cause tree build | 3.3 AI panel | 5-Why tree expands level by level as AI populates root cause |
| Currency scan progress | 3.4 scan trigger | Progress bar: "Checking standards… Comparing clauses… Flagging gaps… Done" |
| Alert drop-in | M3 dashboard panel | Alert cards drop in from top when escalation or critical flag fires |

---

## Technical Integration Map for M3

| Sub-module | External Systems / APIs | Data Flow Direction |
|---|---|---|
| 3.1 JSA Drafting | Regulatory knowledge base (OISD / PESO / DGMS standards) | Standards → AI context → JSA draft |
| 3.1 JSA Drafting | PTW module (3.2) — JSA linked on approval | Approved JSA → PTW instrument |
| 3.2 Permit-to-Work | Workforce module (M6) — qualification records | Qualification data → Gate check → Permit decision |
| 3.2 Permit-to-Work | Notification API — approver alerts + escalations | Permit event → Approver notification |
| 3.2 Permit-to-Work | Audit trail (write-once event log) | All permit events → Immutable log |
| 3.3 Incident Reporting | DGMS / OISD notification templates | Incident data → Regulatory notification |
| 3.3 Incident Reporting | Corrective action tracker → Workflow module (M5) | Corrective actions → Assigned workflow items |
| 3.4 SOP Management | Regulatory knowledge base — currency checks | Standards update → SOP flag |
| 3.4 SOP Management | Workforce module (M6) — acknowledgement records | SOP acknowledgement → Personnel competency record |

---

## Summary: M3 at a Glance

| Item | Detail |
|---|---|
| Module | M3 — HSE Documentation & Permit Workflows |
| Sub-modules | 4 (3.1 → 3.4) |
| Total pages | 5 (1 dashboard + 4 sub-module pages) |
| Primary data objects | AI-drafted JSAs, digital PTW instruments, structured incident reports, version-controlled SOPs |
| Regulators covered | OISD · PESO · DGMS · MoEFCC · Factory Inspectorate |
| Key output | Complete safety documentation set — JSA + PTW + incident report + current SOP — for any work activity |
| Demo focus | AI generating a complete OISD-referenced JSA in 20 seconds from a plain-English work description |
| Design tone | Clean, professional dashboard — light theme, premium, safety-grade |
| Compliance | OISD-STD-105 · OISD-STD-154 · OISD-STD-171 · OISD-GS-RP-04 · DGMS regulations · PESO Act |
| Currency | Rs. Indian Rupee — Lakhs (L) and Crores (Cr) |
| Date format | DD MMM YYYY |
| Language | English (Indian) — formal HSE regulatory context |
| Market context | [MARKET / REGION] upstream oil and gas operations |

---

*[PROJECT_NAME] · HSE Documentation & Permit Workflows Module — M3 Build Guide*
*by [COMPANY_NAME] · [WEBSITE]*
*Version [VERSION] · [PUBLIC / INTERNAL / CONFIDENTIAL]*
