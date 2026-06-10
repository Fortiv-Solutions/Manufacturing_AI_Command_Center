# M5 — Operational Workflow & Process Automation

### [PROJECT_NAME] · AI Operations Platform · [WEBSITE]

> **Module Tagline:** Replaces manual approval chains, daily reporting burdens, and procurement delays with automated, auditable workflows — so operational decisions execute in hours instead of days, and nothing falls through the cracks.

**Document Type:** Module Build Guide & Parameter Reference
**Module Code:** M5
**Total Sub-Modules:** 3 (5.1 → 5.3)
**Version:** [VERSION]
**Company:** [COMPANY_NAME]
**Classification:** [PUBLIC / INTERNAL / CONFIDENTIAL]
**Market:** [MARKET / REGION] — India Focus (upstream oil and gas operations)

---

## Module Overview

### Purpose

Replace the manual coordination overhead that slows operational execution — email approval chains that sit in inboxes for days, daily reports that take 90 minutes to compile by hand, and purchase orders delayed because a requisition is waiting for someone to notice it — with **structured digital workflows that route, escalate, and close automatically**, so operational decisions move at the speed of the business rather than at the speed of email.

### Core Problem Being Solved

| Pain Point                | Without M5                                                   | With M5                                                           |
| ------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------- |
| AFE / work order approval | 2–3 day email chain across 4–5 approvers                     | Multi-level digital approval completed in under 2 hours           |
| Approval visibility       | No one knows where a request is in the chain                 | Live workflow board shows every request's current status          |
| Approval escalation       | Delayed approvals stall operations — no automatic escalation | Auto-escalation fires after configurable timeout; never stalls    |
| Daily operations report   | 90-minute manual compilation from multiple systems           | Auto-compiled in under 3 minutes; distributed on schedule         |
| Report consistency        | Different format every day depending on who wrote it         | Consistent template, consistent time, every shift                 |
| Purchase order initiation | Manual requisition → email → PO creation → approval: 3+ days | Auto-generated draft PO from stock alert → approved in 37 minutes |
| Procurement visibility    | No real-time view of PO status or delivery timeline          | Live PO tracker from creation to goods receipt                    |
| Process audit trail       | Approval decisions in email threads — difficult to locate    | Every step time-stamped and archived; one-click retrieval         |

### Demo Wow Moment

**Live AFE approval in under 4 minutes on screen** — a Workover Authority for Expenditure for Well B-09 (Rs. 1.14 crore) is initiated, routed through HSE review, Operations Manager approval, and Finance Controller sign-off, with each approver receiving a mobile-friendly notification and approving from their phone. The entire multi-level approval completes in 4 minutes during the demo — versus the 51-hour average it replaces. Every approval step is time-stamped, attributed, and stored permanently.

---

## Module-Level Parameters

| Parameter                  | Value                                                                                                   |
| -------------------------- | ------------------------------------------------------------------------------------------------------- |
| Module ID                  | M5                                                                                                      |
| Module Name                | Operational Workflow & Process Automation                                                               |
| Sub-module Count           | 3                                                                                                       |
| Primary Output             | Completed approval workflows + auto-compiled daily reports + tracked purchase orders                    |
| Primary Users              | VP Operations, Operations Manager, Well Engineer, Finance Controller, Procurement Lead, Site Supervisor |
| Approval Cycle Improvement | 60–80% reduction in approval cycle time vs email-based process                                          |
| Daily Report Compilation   | Under 3 minutes (vs 90-minute manual average)                                                           |
| PO Cycle Time              | Under 1 hour from trigger to approved PO (vs 3.2-day manual average)                                    |
| Workflow Types Supported   | AFE, MOC, HSE Exception, Contractor Work Authorisation, Budget Exception, Contract Amendment            |
| Integration                | ERP (SAP), DMS (SharePoint), procurement portals, email / notification API                              |
| Languages                  | English (primary), Hindi                                                                                |
| Currency Format            | Rs. Indian Rupee — Lakhs (L) and Crores (Cr)                                                            |
| Demo Financial Period      | FY 2024–25 (Apr 2024 – Mar 2025)                                                                        |

---

## Module Pages & Navigation Structure

```
M5 — Operational Workflow & Process Automation
│
├── [Page 1]  Module Dashboard / Overview              ← Landing page for M5
│             (KPIs, live workflow board summary, report schedule, procurement status)
│
├── [Page 2]  5.1  Multi-Step Approval Workflow Automation
│             (Workflow board, initiation form, approval chain, escalation tracker)
│
├── [Page 3]  5.2  Daily Operational Reporting Automation
│             (Report schedule, auto-compiled report view, distribution log, exception highlights)
│
└── [Page 4]  5.3  Purchase Order & Procurement Workflow
              (PO tracker, auto-generated draft POs, approval routing, delivery status)
```

---

## Page 1 — Module Dashboard (M5 Overview)

### Purpose

The landing screen for Module 5. Provides a complete real-time view of all operational workflow activity — pending approvals, report distribution status, open purchase orders, escalations, and process health — in a single screen.

### Layout

- **Top Stats Bar** (4 KPI cards across)
- **Centre Left:** Live workflow board summary — pending approvals by type and status
- **Centre Right:** Process health chart + average cycle time trend
- **Bottom:** Quick-access tiles to each sub-module (5.1 → 5.3) + recent activity log

### KPI Cards (Top Stats Bar)

| Card                      | Metric                                                     | Mock Value | Color                          |
| ------------------------- | ---------------------------------------------------------- | ---------- | ------------------------------ |
| Workflows Pending         | Approvals awaiting action across all workflow types        | 3          | Accent Blue #1A6B8A            |
| Escalations Active        | Workflows that have auto-escalated due to overdue approval | 1          | Danger Coral #C0392B (pulsing) |
| Reports Distributed Today | Auto-compiled reports sent to distribution lists           | 2          | Success Teal #0F7B6C           |
| POs Awaiting Approval     | Purchase orders in the approval queue                      | 4          | Gold #C8922A                   |

### Process Health Chart

Recharts bar chart showing average approval cycle time by workflow type this month vs last month:

| Workflow Type  | This Month Avg | Last Month Avg | Color   |
| -------------- | -------------- | -------------- | ------- |
| AFE Approvals  | 1h 47m         | 2h 12m         | #0F7B6C |
| MOC Requests   | 3h 20m         | 4h 05m         | #1A6B8A |
| HSE Exceptions | 0h 52m         | 1h 10m         | #2596BE |
| PO Approvals   | 0h 37m         | 0h 41m         | #C8922A |

### Live Workflow Board Summary

Compact summary table showing:

- Workflow type and reference
- Current step and pending approver
- Time in current step
- Escalation status
- Value (where applicable)

### Sub-Module Quick Access Tiles (Bottom Row)

Three clickable tiles, each showing:

- Sub-module number + name
- One-line description
- Status indicator (Active / Idle)
- Key stat for today (workflows active / reports sent / POs in queue)

---

## Page 2 — Sub-Module 5.1: Multi-Step Approval Workflow Automation

### What It Is

A configurable digital workflow engine that automates the routing, approval, escalation, and archiving of any multi-party authorisation process — from AFEs and Management of Change requests to HSE exceptions and contractor work authorisations — collapsing email-based approval cycles from days to hours.

### Supported Workflow Types

| Workflow Type                   | Description                                       | Typical Approval Steps | Value / Risk Threshold | Typical Cycle Time (M5) |
| ------------------------------- | ------------------------------------------------- | ---------------------- | ---------------------- | ----------------------- |
| AFE — Authority for Expenditure | Capital or significant operational spend approval | 3–5 steps              | All values             | Under 2 hours           |
| MOC — Management of Change      | Technical or procedural change authorisation      | 3–4 steps              | All changes            | Under 4 hours           |
| HSE Exception Request           | Deviation from standard HSE procedure             | 2–3 steps              | All exceptions         | Under 1 hour            |
| Contractor Work Authorisation   | Approval to mobilise or extend a contractor       | 2–4 steps              | All mobilisations      | Under 3 hours           |
| Budget Exception                | Spend above approved budget line                  | 3–5 steps              | >Rs. 50,000 deviation  | Under 2 hours           |
| Contract Amendment              | Change to an existing vendor or service contract  | 3–4 steps              | All amendments         | Under 4 hours           |

### Workflow Record Parameters

| Parameter                  | Description                                       | Mock Example                                          |
| -------------------------- | ------------------------------------------------- | ----------------------------------------------------- |
| `workflow_id`              | Unique workflow reference                         | WF-2025-0847                                          |
| `workflow_type`            | Type of workflow                                  | AFE                                                   |
| `subject`                  | Brief description of the request                  | Well B-09 Workover — ESP replacement and tubing pull  |
| `initiated_by`             | Person who initiated the workflow                 | Rajesh Kumar                                          |
| `initiated_at`             | Timestamp of initiation                           | 28 Oct 2025 09:02 IST                                 |
| `value`                    | Financial value of the request (where applicable) | Rs. 1,14,000 (Rs. 1.14 lakh)                          |
| `current_step`             | Current step number in the approval chain         | Step 4 of 5                                           |
| `current_approver`         | Person whose action is required                   | Ravi Patel — Finance Controller                       |
| `current_step_age_min`     | Minutes elapsed at the current step               | 68 minutes                                            |
| `escalation_threshold_min` | Minutes before auto-escalation fires              | 120 minutes                                           |
| `escalation_fired`         | Whether escalation has been triggered             | No                                                    |
| `status`                   | Overall workflow status                           | In Progress                                           |
| `completed_at`             | Timestamp of final approval or rejection          | — (in progress)                                       |
| `total_cycle_time`         | Time from initiation to completion                | — (in progress)                                       |
| `attached_documents`       | Supporting documents attached to the request      | AFE Form, Well B-09 Workover Programme, Cost Estimate |

### Approval Chain Parameters (Per Step)

| Field                | Description                               | Mock Example                                                                   |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------------------------ |
| `step_number`        | Step position in the chain                | Step 3                                                                         |
| `step_name`          | Name of this approval step                | Operations Manager Approval                                                    |
| `approver_name`      | Named approver for this step              | Anand Sharma                                                                   |
| `approver_role`      | Role of the approver                      | VP Operations                                                                  |
| `authority_limit`    | Maximum value this approver can authorise | Rs. 5 crore                                                                    |
| `status`             | Step completion status                    | Complete                                                                       |
| `actioned_at`        | Timestamp of approval or rejection        | 28 Oct 2025 09:23 IST                                                          |
| `action_taken`       | Decision made                             | Approved                                                                       |
| `comments`           | Approver comments                         | Workover programme reviewed — approved. Confirm HSE method statement attached. |
| `escalation_sent_to` | Who received the escalation (if fired)    | —                                                                              |
| `escalation_sent_at` | When escalation was sent (if fired)       | —                                                                              |

### Delegation of Authority Matrix

The workflow engine enforces [COMPANY_NAME]'s Delegation of Authority matrix automatically — no approval can proceed to the wrong level or bypass a required step:

| Approval Level | Role                   | AFE Authority      | MOC Authority              | HSE Exception |
| -------------- | ---------------------- | ------------------ | -------------------------- | ------------- |
| Level 1        | Site Supervisor        | Up to Rs. 50,000   | Minor changes (procedural) | Low risk only |
| Level 2        | Operations Manager     | Up to Rs. 50 lakh  | Moderate changes           | Medium risk   |
| Level 3        | VP Operations          | Up to Rs. 5 crore  | All changes                | High risk     |
| Level 4        | CFO / Finance Director | Up to Rs. 20 crore | —                          | —             |
| Level 5        | MD / Board             | Above Rs. 20 crore | —                          | —             |

### Page Layout

**Top Control Bar:** "New Workflow" button (Gold, primary) + workflow type filter + status filter + date range filter + initiator filter
**Main Area:** Kanban-style workflow board — 4 columns: [Initiated] [In Review] [Pending Approval] [Approved / Closed]
Each card shows: workflow type badge, subject line, initiator, value (Rs. formatted), current approver, time in step
**Detail Drawer (right 420px):** Opens on card click — full workflow metadata, approval chain timeline (step-by-step with timestamps and comments), attached documents list, and approve/reject action buttons (active only for the current pending approver)
**Bottom:** Workflow metrics bar — avg cycle time this month | completed today | overdue escalations | rejection rate

### Mock Demo Data — AFE Approval Workflow

```
// AFE WORKFLOW — Well B-09 Workover | Value: Rs. 1.14 Lakh
// Initiated: 28 Oct 2025 09:02 IST | Initiated by: Rajesh Kumar

STEP 1  Well Engineer initiates AFE and submits workover programme
        Initiated:   09:02 IST  ✓ Complete
        Documents:   AFE Form B-09, Workover Programme v1.0, Cost Estimate

STEP 2  HSE review and sign-off
        Assigned to: Priya Menon — HSE Manager
        Completed:   09:07 IST  ✓ Complete
        Comment:     "HSE method statement reviewed. Acid job JSA required
                      before mobilisation — linked as condition of approval."

STEP 3  Operations Manager approval
        Assigned to: Anand Sharma — VP Operations
        Completed:   09:23 IST  ✓ Complete
        Comment:     "Workover programme reviewed — approved. Confirm HSE
                      method statement attached before rig mobilisation."

STEP 4  Finance Controller review
        Assigned to: Ravi Patel — Finance Controller
        Pending:     09:31 IST  ⏳ PENDING — 68 minutes elapsed
        Threshold:   Auto-escalation at 120 minutes (fires at 11:31 IST if no action)
        Reminder:    Sent to Ravi Patel at 10:31 IST (60-minute reminder)

STEP 5  VP Operations final authorisation
        Assigned to: Anand Sharma — VP Operations
        Status:      ⏸ Awaiting Step 4 completion

// WORKOVER CREW ALERT: Auto-mobilisation notification will be sent to rig
//   contractor on final approval of Step 5
// Total approval time target: <2 hours
// Previous average (email process): 51 hours
// Estimated standby cost saved at Rs. 6 lakh/day crew rate: Rs. 1.27 lakh
```

### Escalation Logic

| Escalation Trigger       | Condition                                                       | Action                                                      |
| ------------------------ | --------------------------------------------------------------- | ----------------------------------------------------------- |
| Step timeout             | Approval step has been pending beyond the configured threshold  | Send escalation notification to the approver's line manager |
| Approver unavailable     | Approver has set an out-of-office delegate                      | Auto-reassign step to named delegate                        |
| Authority limit exceeded | Request value exceeds the current approver's authority limit    | Auto-route to the next authority level                      |
| Rejection appeal         | Initiator appeals a rejection                                   | Route to the next authority level for review                |
| SLA breach               | Workflow total cycle time exceeds the defined SLA for that type | Flag to workflow administrator + VP Operations              |

### Alert Rules

| Rule               | Trigger                                      | Alert Sent To                   |
| ------------------ | -------------------------------------------- | ------------------------------- |
| Step pending       | Approval step assigned to approver           | Approver — immediately          |
| 60-minute reminder | Step pending for 60 minutes with no action   | Approver                        |
| Auto-escalation    | Step pending beyond threshold with no action | Approver's line manager         |
| Workflow complete  | Final step approved                          | Initiator + all prior approvers |
| Rejection          | Any step rejected                            | Initiator — immediately         |
| SLA breach         | Total cycle time exceeds SLA                 | Workflow admin + VP Operations  |

### Key UI Elements

- **Kanban workflow board** — drag-to-move disabled (system-controlled state); cards visually advance columns as steps complete
- **Approval chain timeline** — step-by-step visual progress tracker in the detail drawer; each step shows approver avatar, role, timestamp, decision, and comment
- **Authority limit badge** — each approver's step shows their authority limit; if the request value exceeds their limit, the step is automatically skipped and routed to the next level
- **Escalation countdown** — active pending steps show a countdown timer to auto-escalation; turns amber at 50% elapsed, coral at 80%
- **Mobile-optimised approval** — approvers receive a push notification with a summary card; one-tap approve or reject from mobile without opening the full application
- **One-click audit export** — any completed workflow exports a full approval record: all steps, timestamps, approver names, comments, and attached documents

### Why It Matters

In [MARKET / REGION]'s operational context, where workover crews may be on standby at day rates of Rs. 4–8 lakh per day, a 48-hour approval delay has a direct cash cost in addition to the opportunity cost of delayed production. When the average AFE approval time drops from 51 hours to under 2 hours, that is not an administrative improvement — it is a material operational and financial outcome. Every day of standby time eliminated at Rs. 6 lakh/day represents a direct saving attributable to workflow automation.

---

## Page 3 — Sub-Module 5.2: Daily Operational Reporting Automation

### What It Is

A data aggregation and report generation system that automatically pulls operational data from source systems at a scheduled time each day, compiles it into a standardised report, flags anomalies and exceptions, and distributes it to defined stakeholder lists — replacing a 90-minute manual task with a 3-minute automated process that delivers consistent, on-time reporting every shift.

### Supported Report Types

| Report Type               | Schedule         | Distribution                         | Data Sources                                                       | Pages     |
| ------------------------- | ---------------- | ------------------------------------ | ------------------------------------------------------------------ | --------- |
| Daily Operations Report   | 06:00 IST daily  | All operations staff (24 recipients) | Production logs, maintenance records, permit status, HSE incidents | 2–3 pages |
| Night Shift Summary       | 06:30 IST daily  | Site manager, operations manager     | Night shift activity log, equipment status                         | 1 page    |
| Weekly Operations Summary | Monday 07:00 IST | Management + board (8 recipients)    | 7-day aggregated daily reports + exception summary                 | 4–5 pages |
| Well Status Report        | 08:00 IST daily  | Drilling team, VP Operations         | Well activity logs, drilling parameters, NPT events                | 2–3 pages |
| Production Flash          | 07:00 IST daily  | VP Operations, Finance Controller    | Production volumes vs target, variance                             | 1 page    |

### Report Parameters

| Parameter                       | Description                                            | Mock Example                                            |
| ------------------------------- | ------------------------------------------------------ | ------------------------------------------------------- |
| `report_id`                     | Unique report reference                                | RPT-2025-1847                                           |
| `report_type`                   | Type of automated report                               | Daily Operations Report                                 |
| `report_date`                   | Date the report covers                                 | 28 Oct 2025                                             |
| `generated_at`                  | Timestamp of auto-compilation                          | 28 Oct 2025 06:00 IST                                   |
| `generation_time_sec`           | Time taken to compile the report                       | 167 seconds (2 min 47 sec)                              |
| `data_sources_pulled`           | Systems queried during compilation                     | Production log, Maintenance CMMS, Permit board, HSE log |
| `recipients_count`              | Number of distribution list recipients                 | 24                                                      |
| `distributed_at`                | Timestamp of distribution                              | 28 Oct 2025 06:03 IST                                   |
| `exceptions_flagged`            | Number of anomaly or exception items in the report     | 2                                                       |
| `previous_day_compilation_time` | Manual compilation time the prior day (for comparison) | 01:32:00                                                |
| `report_status`                 | Current report status                                  | Distributed                                             |

### Exception Detection Rules

| Exception Type             | Trigger Condition                                       | Report Callout                                                  |
| -------------------------- | ------------------------------------------------------- | --------------------------------------------------------------- |
| Production shortfall       | Daily production >5% below target                       | !! EXCEPTION — production variance with well and cause detail   |
| Well shut-in               | Any producing well shut in during the period            | !! EXCEPTION — well name, shut-in time, reason, workover status |
| LTI or recordable incident | HSE incident of severity ≥ Medical Treatment            | !! EXCEPTION — incident summary, investigation status           |
| Critical equipment failure | CMMS breakdown record for critical path equipment       | !! EXCEPTION — equipment, impact, repair ETA                    |
| Overdue maintenance        | PM overdue by >3 days on safety-critical equipment      | !! WARNING — equipment, overdue duration, action owner          |
| Permit not closed          | Active permit 15+ minutes past expiry without close-out | !! WARNING — permit reference and location                      |

### Page Layout

**Top Control Bar:** Report type selector + date selector + "Generate Now" button (Gold) + distribution list manager
**Main Area (Left 30%):** Report schedule panel — all configured reports with next run time, last run time, status (Scheduled / Running / Distributed / Failed), and recipient count
**Main Area (Right 70%):** Report viewer — most recent compiled report displayed in full; exception items highlighted in coral at the top; drill-down links on each section
**Top of Report Viewer:** Report metadata bar — generated at, compilation time, recipients, exception count
**Bottom:** "Download Report" button + "Edit Distribution List" button + "Resend" button + historical report archive (last 30 days)

### Mock Demo Data — Daily Operations Report

```
// DAILY OPERATIONS REPORT — [COMPANY_NAME] | 28 Oct 2025 | 06:00 IST
// Auto-compiled: 00:02:47 | Distributed to: 24 recipients | Exceptions: 2

══════════════════════════════════════════════════════
PRODUCTION SUMMARY
══════════════════════════════════════════════════════
Gross Oil:    41,280 bbl   (Target: 43,500 bbl | Variance: -5.1%)
Gas:          18.4 MMSCFD  (Target: 18.8 MMSCFD | Variance: -2.1%)
Water:         6,240 bbl
Water Inj:    19,100 bbl   (Target: 18,200 bbl | Variance: +5.0%)
Active Wells:  14 producers | 2 shut-in | 1 workover in progress

!! EXCEPTION: Well C-07 shut-in at 02:14 IST — ESP trip (motor overload fault)
   Impact: -3,200 bbl vs plan | Workover planned for 29 Oct
   Owner: Rajesh Kumar | Crew mobilisation: 07:00 IST today

!! EXCEPTION: Pad A compressor downtime 00:30–03:15 IST (G-Compressor #2 bearing)
   Impact: -540 bbl deferred production | Repair ongoing — ETA: 12:00 IST today
   Owner: Sushant Verma | Spare parts: in yard

══════════════════════════════════════════════════════
SAFETY & PERMIT STATUS
══════════════════════════════════════════════════════
LTI:           0  |  Recordable: 0  |  Near Misses: 0
Active Permits: 4  (Hot Work: 1, Elec Isolation: 1, Conf Space: 1, Excavation: 1 draft)
PTW Closed Yesterday: 3  |  Overdue Closures: 0

══════════════════════════════════════════════════════
MAINTENANCE STATUS
══════════════════════════════════════════════════════
PMs Completed Yesterday:   3
Breakdowns:                1 (G-Compressor #2 — ongoing — see exception above)
PMs Overdue (>3 days):     0
Work Orders Open:          7  |  Raised Yesterday: 2  |  Closed Yesterday: 3

══════════════════════════════════════════════════════
OPEN ACTIONS
══════════════════════════════════════════════════════
Total Open: 14  |  Due Today: 3  |  Overdue: 0
  > Pump impeller order (Anand Sharma) — due 04 Nov — OPEN
  > B-15 spud confirmation (Sushant Verma) — due 02 Nov — OPEN
  > Q4 OPEX template distribution (Ravi Patel) — due 05 Nov — OPEN
  [11 further actions in attached detail report]

══════════════════════════════════════════════════════
DRILLING
══════════════════════════════════════════════════════
Well B-15: Pre-spud preparations in progress | Planned spud: 05 Nov 2025
Well B-14: Post-drill documentation in progress | EoW report due: 04 Nov

// Previous day manual compilation time: 01:32:00
// Today auto-compilation time: 00:02:47 | Time saved: 01:29:13
// Report generated by [PROJECT_NAME] — reviewed by: [recipient opens and acts]
```

### Report Schedule Management

| Schedule Setting    | Description                              | Mock Value                                                |
| ------------------- | ---------------------------------------- | --------------------------------------------------------- |
| Report name         | Identifier for the automated report      | Daily Operations Report                                   |
| Schedule            | Cron-style schedule for auto-generation  | 06:00 IST daily                                           |
| Data sources        | Systems to query at generation time      | Production log, CMMS, Permit board, HSE log, Drilling log |
| Distribution list   | Named recipients or role-based groups    | All Ops Staff (24)                                        |
| Exception threshold | Sensitivity of anomaly detection         | Standard (5% variance triggers exception)                 |
| Retention           | How long historical reports are retained | 365 days                                                  |
| Fallback            | Action if data source is unavailable     | Use last available data + flag in report                  |

### Key UI Elements

- **Exception callout cards** — exception items appear at the top of the report in coral cards before the body sections; each shows impact, owner, and current status
- **Section drill-down** — any metric in the report links to the underlying data source entry for verification
- **Schedule status indicator** — green (running on schedule) / amber (delayed) / red (failed) per report type in the schedule panel
- **Historical archive** — dropdown to view any prior day's report for comparison; side-by-side comparison mode available
- **"Generate Now" override** — operations manager can trigger an out-of-schedule report at any time (e.g. after a significant incident)
- **Compilation time badge** — every report shows the auto-compilation time alongside the former manual average; the delta is the daily time saving made visible

### Why It Matters

A daily operations report that takes 90 minutes to compile manually consumes over 550 hours of senior operational staff time per year — equivalent to more than 13 full working weeks. When that same report is auto-compiled in under 3 minutes, those 550 hours are returned to productive technical work. More importantly, the report is consistently available at the same time every day, with the same format, whether the usual author is on site or not. Operational decisions that depend on yesterday's numbers no longer wait for the report to be written.

---

## Page 4 — Sub-Module 5.3: Purchase Order & Procurement Workflow

### What It Is

An AI-assisted procurement workflow that converts approved maintenance plans, minimum stock level alerts, and manual requisitions into structured draft purchase orders, routes them through the correct approval chain based on value and commodity, and tracks delivery through to goods receipt — collapsing a 3-day manual procurement cycle to under one hour for standard items.

### PO Trigger Types

| Trigger Type            | Description                                                        | Mock Example                                                       |
| ----------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| Minimum stock alert     | Inventory item falls below reorder point in the stores system      | Mud pump liner MP-4027: 0 units in stock (reorder point: 2 units)  |
| Approved work order     | Maintenance work order requires specific parts to proceed          | WO-2025-0847 requires 4× bearing assemblies for G-Compressor #2    |
| Manual requisition      | Engineer or supervisor raises a manual material or service request | Rajesh Kumar requests 200m of 3.5" production tubing for Well B-09 |
| Blanket order depletion | Spend against a blanket order approaches its limit                 | Chemical supply blanket order at 88% of approved value             |
| Contractor mobilisation | Approved workflow (M5.1) triggers contractor service PO            | WF-2025-0847 AFE approved — rig contractor PO required             |

### PO Record Parameters

| Parameter                 | Description                                       | Mock Example                              |
| ------------------------- | ------------------------------------------------- | ----------------------------------------- |
| `po_id`                   | Unique PO reference                               | PO-2025-3847                              |
| `po_trigger`              | What initiated the PO                             | Minimum stock alert — Part No. MP-4027    |
| `vendor_name`             | Selected vendor                                   | Nat Petrosols Pvt. Ltd.                   |
| `vendor_preferred`        | Whether this is a preferred / approved vendor     | Yes                                       |
| `last_price`              | Price paid on the most recent order for this item | Rs. 47,200 per unit                       |
| `item_description`        | Description of goods or services ordered          | Mud Pump Liner MP-4027                    |
| `quantity`                | Quantity ordered                                  | 4 units                                   |
| `unit_price`              | Unit price on this PO                             | Rs. 47,200                                |
| `total_value`             | Total PO value                                    | Rs. 1,88,800                              |
| `delivery_location`       | Delivery destination                              | Jodhpur yard — Block RJ-ONN-2015/1        |
| `delivery_lead_time_days` | Vendor-quoted lead time                           | 7 working days                            |
| `estimated_delivery_date` | Calculated delivery date                          | 07 Nov 2025                               |
| `approval_level_required` | Approval tier based on value and category         | Site Manager (below Rs. 2 lakh threshold) |
| `approval_status`         | Current approval status                           | Approved                                  |
| `approved_by`             | Name of approver                                  | Anand Sharma                              |
| `approved_at`             | Timestamp of approval                             | 28 Oct 2025 10:14 IST                     |
| `vendor_confirmation_at`  | Timestamp of vendor order confirmation            | 28 Oct 2025 10:51 IST                     |
| `goods_receipt_at`        | Timestamp of goods receipt confirmation           | — (in transit)                            |
| `po_cycle_time`           | Time from trigger to approved PO                  | 37 minutes                                |

### PO Approval Thresholds (Delegation of Authority — Procurement)

| Value Band                    | Approval Required                       | Typical Cycle Time |
| ----------------------------- | --------------------------------------- | ------------------ |
| Up to Rs. 50,000              | Site Supervisor only                    | Under 15 minutes   |
| Rs. 50,001 – Rs. 2,00,000     | Site Manager                            | Under 30 minutes   |
| Rs. 2,00,001 – Rs. 10,00,000  | Operations Manager + Finance Controller | Under 1 hour       |
| Rs. 10,00,001 – Rs. 50,00,000 | VP Operations + Finance Controller      | Under 2 hours      |
| Above Rs. 50,00,000           | VP Operations + CFO                     | Under 4 hours      |

### Vendor Intelligence Parameters

| Field                      | Description                                       | Mock Example            |
| -------------------------- | ------------------------------------------------- | ----------------------- |
| `vendor_id`                | Unique vendor record                              | VND-0041                |
| `vendor_name`              | Vendor name                                       | Nat Petrosols Pvt. Ltd. |
| `vendor_category`          | Commodity / service category                      | Drilling consumables    |
| `approved_vendor`          | Whether vendor is on the approved vendor list     | Yes                     |
| `last_order_date`          | Date of most recent order                         | 14 Sep 2025             |
| `last_order_value`         | Value of most recent order                        | Rs. 94,400              |
| `avg_delivery_performance` | On-time delivery rate (last 12 months)            | 94%                     |
| `avg_lead_time_days`       | Average lead time across last 10 orders           | 6.8 days                |
| `open_pos_count`           | Number of open (undelivered) POs with this vendor | 2                       |
| `ytd_spend`                | Year-to-date spend with this vendor               | Rs. 8.4 lakh            |

### Page Layout

**Top Stats Bar:** POs Raised This Month (34) | Pending Approval (4) | In Transit (11) | Overdue Deliveries (1)
**Filter Bar:** Status filter | Vendor filter | Value band filter | Category filter | Date range filter
**Main Area:** PO tracker table — all POs with columns: PO Number, Trigger, Vendor, Item, Value, Approval Status, Delivery ETA, Status, Actions
**Detail Panel (right 40%):** Opens on row click — full PO details, approval chain, vendor confirmation, delivery timeline, goods receipt confirmation button
**Bottom:** "New Requisition" button (Gold) + "Consolidation Suggestions" button + vendor performance summary

### Mock Demo Data — PO Generation & Approval

```
// TRIGGER: Minimum stock alert — Mud Pump Liner (Part No. MP-4027)
//   Current stock: 0 units | Reorder point: 2 units | Criticality: HIGH
//   [PROJECT_NAME] auto-generates draft PO:

AUTO-GENERATED DRAFT PO:
  PO Number:      [AUTO] PO-2025-3847
  Trigger:        Min stock alert — MP-4027 (0 units in stock)
  Vendor:         Nat Petrosols Pvt. Ltd. (Preferred | Approved vendor)
  Last price:     Rs. 47,200 per unit (Order date: 14 Sep 2025)
  Item:           Mud Pump Liner MP-4027 × 4 units
  Total value:    Rs. 1,88,800
  Approval route: Site Manager only (below Rs. 2,00,000 threshold)
  Delivery:       7 working days to Jodhpur yard
  ETA:            07 Nov 2025

  DRAFT GENERATED: 28 Oct 2025 09:37 IST
  APPROVAL SENT:   To Anand Sharma (Site Manager) at 09:37 IST

  APPROVED:        Anand Sharma at 10:14 IST
  Comment:         "Approved. Confirm vendor has stock before dispatch."

  VENDOR CONFIRMED: Nat Petrosols at 10:51 IST
  Confirmation:     Stock confirmed — dispatching 29 Oct, ETA 07 Nov Jodhpur

// PO CYCLE TIME: 37 minutes (trigger to approved PO)
// Previous manual average: 3.2 days
// Mud pump now protected — critical maintenance schedule maintained

// OPEN PO TRACKER — [COMPANY_NAME] | 28 Oct 2025

PO-2025-3847  Mud Pump Liner MP-4027 ×4    Rs. 1,88,800  Nat Petrosols   In Transit  ETA: 07 Nov
PO-2025-3841  Scale Inhibitor SI-200 ×200L  Rs. 96,000   ChemTreat India  Delivered   Received 26 Oct
PO-2025-3836  ESP Motor — 75HP ×1           Rs. 4,20,000  Grundfos India   In Transit  ETA: 02 Nov
PO-2025-3829  3.5" Production Tubing ×200m  Rs. 2,84,000  Tenaris India    In Transit  ETA: 01 Nov
PO-2025-3821  Mud Weight Barite ×5MT        Rs. 1,12,500  MI Swaco India   !! OVERDUE  Was 25 Oct

// OVERDUE DELIVERY ALERT: PO-2025-3821 — Mud Weight Barite
//   Expected: 25 Oct 2025 | Now: 28 Oct 2025 — 3 days overdue
//   Auto-alert sent to vendor and procurement lead on 26 Oct
//   Vendor response: Logistics delay — new ETA 30 Oct (confirmed this morning)
```

### Consolidation Suggestion Logic

When multiple requisitions arrive for the same commodity category or vendor within a defined window, the system surfaces a consolidation suggestion:

```
// CONSOLIDATION SUGGESTION:
//   3 requisitions for drilling chemicals received in the last 48 hours
//   All from the same preferred vendor: ChemTreat India

  REQ-2025-0441  Scale inhibitor SI-200     Rs. 96,000   (Pad A — Rajesh Kumar)
  REQ-2025-0444  Corrosion inhibitor CI-80   Rs. 54,000   (Pad B — Sushant Verma)
  REQ-2025-0447  H2S scavenger HS-40        Rs. 78,000   (Pad C — Arjun Mehta)

  Combined order: Rs. 2,28,000
  Estimated freight saving: Rs. 8,400 (single delivery vs three separate)
  Combined order requires: Operations Manager + Finance Controller approval

  [Consolidate into Single PO]  [Keep Separate]
```

### Alert Rules

| Rule                        | Trigger                                              | Alert Sent To                         |
| --------------------------- | ---------------------------------------------------- | ------------------------------------- |
| PO approval pending         | Draft PO sent to approver                            | Approver — immediately                |
| Approval overdue            | PO pending approval for >60 minutes                  | Approver + procurement lead           |
| Vendor confirmation overdue | No vendor confirmation within 4 hours of approved PO | Procurement lead                      |
| Delivery overdue            | PO delivery date passed with no goods receipt        | Procurement lead + PO initiator       |
| Critical item overdue       | Overdue delivery flagged as critical path item       | Procurement lead + VP Operations      |
| Blanket order limit         | Blanket order reaches 85% of approved value          | Finance Controller + procurement lead |

### Key UI Elements

- **Auto-draft PO card** — system-generated draft POs appear in a distinct card with "AI Generated" badge; approver can edit any field before approving
- **Last price reference** — every line item shows the last price paid and the date, with a colour indicator if the current price is higher (amber) or lower (teal) than last order
- **Delivery timeline bar** — each in-transit PO shows a visual timeline from order date to ETA with today's position marked; turns coral if overdue
- **Vendor scorecard chip** — each PO shows the vendor's on-time delivery rate as a chip; click opens the full vendor performance summary
- **Consolidation prompt** — when consolidation is suggested, a banner appears above the PO table with the saving estimate and a one-click consolidate action
- **Goods receipt confirmation** — when a delivery arrives, the site store confirms receipt directly in the PO tracker; goods receipt event triggers automatic CMMS update and PO closure

### Why It Matters

In [MARKET / REGION]'s onshore operations, procurement delays are among the leading causes of extended equipment downtime. When a pump impeller replacement takes 12 days because the PO spent 6 of those days in an inbox queue, the root cause is not logistics — it is process friction. A rig crew on standby at Rs. 6 lakh per day while a PO awaits approval represents a direct, quantifiable cost of slow process. Automated procurement eliminates the queue, with every approval decision made faster because the draft PO, vendor recommendation, and authority routing are already done.

---

## Complete Module 5 — Master Parameter Reference

### All Data Fields Across M5

| Field Name                          | Type     | Sub-module | Description                                                                            |
| ----------------------------------- | -------- | ---------- | -------------------------------------------------------------------------------------- |
| `workflow_id`                       | String   | 5.1        | Unique workflow reference identifier                                                   |
| `workflow_type`                     | Enum     | 5.1        | AFE / MOC / HSE Exception / Contractor Auth / Budget Exception / Contract Amendment    |
| `workflow_subject`                  | Text     | 5.1        | Brief description of the request                                                       |
| `workflow_initiated_by`             | String   | 5.1        | Name of the person who initiated the workflow                                          |
| `workflow_initiated_at`             | DateTime | 5.1        | Timestamp of initiation                                                                |
| `workflow_value`                    | Number   | 5.1        | Financial value of the request (Rs.)                                                   |
| `workflow_current_step`             | Number   | 5.1        | Current step number in the chain                                                       |
| `workflow_total_steps`              | Number   | 5.1        | Total steps in this workflow type                                                      |
| `workflow_current_approver`         | String   | 5.1        | Name of the person whose action is required                                            |
| `workflow_current_step_age_min`     | Number   | 5.1        | Minutes elapsed at the current step                                                    |
| `workflow_escalation_threshold_min` | Number   | 5.1        | Minutes before auto-escalation fires                                                   |
| `workflow_escalation_fired`         | Boolean  | 5.1        | Whether escalation has been triggered                                                  |
| `workflow_status`                   | Enum     | 5.1        | Initiated / In Progress / Approved / Rejected / Withdrawn / Escalated                  |
| `workflow_completed_at`             | DateTime | 5.1        | Timestamp of final resolution                                                          |
| `workflow_total_cycle_time`         | Duration | 5.1        | Time from initiation to completion                                                     |
| `workflow_attached_documents`       | Array    | 5.1        | Supporting documents attached                                                          |
| `step_number`                       | Number   | 5.1        | Step position in the approval chain                                                    |
| `step_name`                         | String   | 5.1        | Name of this approval step                                                             |
| `step_approver_name`                | String   | 5.1        | Named approver for this step                                                           |
| `step_approver_role`                | String   | 5.1        | Role of the approver                                                                   |
| `step_authority_limit`              | Number   | 5.1        | Maximum value this approver can authorise (Rs.)                                        |
| `step_status`                       | Enum     | 5.1        | Pending / Complete / Escalated / Skipped                                               |
| `step_actioned_at`                  | DateTime | 5.1        | Timestamp of approval or rejection                                                     |
| `step_action_taken`                 | Enum     | 5.1        | Approved / Rejected / Returned / Delegated                                             |
| `step_comments`                     | Text     | 5.1        | Approver comments                                                                      |
| `step_escalation_sent_to`           | String   | 5.1        | Recipient of escalation notification (if fired)                                        |
| `step_escalation_sent_at`           | DateTime | 5.1        | When escalation was sent                                                               |
| `report_id`                         | String   | 5.2        | Unique report generation reference                                                     |
| `report_type`                       | Enum     | 5.2        | Daily Ops / Night Shift / Weekly Summary / Well Status / Production Flash              |
| `report_date`                       | Date     | 5.2        | Date the report covers                                                                 |
| `report_generated_at`               | DateTime | 5.2        | Timestamp of auto-compilation                                                          |
| `report_generation_time_sec`        | Number   | 5.2        | Compilation duration in seconds                                                        |
| `report_data_sources`               | Array    | 5.2        | Systems queried during compilation                                                     |
| `report_recipients_count`           | Number   | 5.2        | Number of distribution list recipients                                                 |
| `report_distributed_at`             | DateTime | 5.2        | Timestamp of distribution                                                              |
| `report_exceptions_count`           | Number   | 5.2        | Number of exception items flagged                                                      |
| `report_exception_items`            | Array    | 5.2        | Per-exception: type, description, impact, owner, status                                |
| `report_status`                     | Enum     | 5.2        | Scheduled / Running / Distributed / Failed / Resent                                    |
| `po_id`                             | String   | 5.3        | Unique PO reference                                                                    |
| `po_trigger_type`                   | Enum     | 5.3        | Min Stock Alert / Work Order / Manual Requisition / Blanket Depletion / Contractor Mob |
| `po_trigger_reference`              | String   | 5.3        | Reference of the triggering event                                                      |
| `po_vendor_id`                      | String   | 5.3        | Vendor record reference                                                                |
| `po_vendor_name`                    | String   | 5.3        | Vendor name                                                                            |
| `po_vendor_preferred`               | Boolean  | 5.3        | Whether vendor is on approved vendor list                                              |
| `po_last_price`                     | Number   | 5.3        | Unit price on the most recent order (Rs.)                                              |
| `po_item_description`               | Text     | 5.3        | Description of goods or services                                                       |
| `po_quantity`                       | Number   | 5.3        | Quantity ordered                                                                       |
| `po_unit_price`                     | Number   | 5.3        | Unit price on this PO (Rs.)                                                            |
| `po_total_value`                    | Number   | 5.3        | Total PO value (Rs.)                                                                   |
| `po_delivery_location`              | String   | 5.3        | Delivery destination                                                                   |
| `po_lead_time_days`                 | Number   | 5.3        | Vendor lead time in working days                                                       |
| `po_estimated_delivery_date`        | Date     | 5.3        | Calculated delivery date                                                               |
| `po_approval_level`                 | Enum     | 5.3        | Supervisor / Site Manager / Ops Manager / VP Ops / CFO                                 |
| `po_approval_status`                | Enum     | 5.3        | Draft / Pending Approval / Approved / Rejected / Cancelled                             |
| `po_approved_by`                    | String   | 5.3        | Name of approver                                                                       |
| `po_approved_at`                    | DateTime | 5.3        | Timestamp of approval                                                                  |
| `po_vendor_confirmation_at`         | DateTime | 5.3        | Timestamp of vendor order confirmation                                                 |
| `po_goods_receipt_at`               | DateTime | 5.3        | Timestamp of goods receipt confirmation                                                |
| `po_cycle_time`                     | Duration | 5.3        | Time from trigger to approved PO                                                       |
| `po_status`                         | Enum     | 5.3        | Draft / Approved / Confirmed / In Transit / Delivered / Overdue / Cancelled            |
| `consolidation_suggestion_id`       | String   | 5.3        | Reference for a suggested PO consolidation                                             |
| `consolidation_requisitions`        | Array    | 5.3        | Requisition references included in the consolidation                                   |
| `consolidation_saving_estimate`     | Number   | 5.3        | Estimated freight / volume saving (Rs.)                                                |

---

## Mock Data Constants (Demo-Ready)

### Demo Operator Profile

```
Operator:           [COMPANY_NAME]
Block:              XYZ-07, CB-ONN-2010/1, RJ-ONN-2015/1 — Onshore, [MARKET / REGION]
Annual AFEs:        ~60 AFEs raised per year across all blocks
Annual POs:         ~400 purchase orders per year
Daily report recipients: 24 (all operations staff)
Approval cycle (pre-M5): AFE average 51 hours | PO average 3.2 days
Approval cycle (M5):     AFE average 1h 47m | PO average 37 minutes
Standby crew rate:  Rs. 4–8 lakh per day (workover crew)
ERP:                SAP (cost records, inventory, procurement)
CMMS:               Maximo or equivalent (maintenance work orders)
```

### Demo Personnel (Operations & Finance)

```
Anand Sharma       — VP Operations / Site Manager (Step 3 + Step 5 approver on AFEs)
Priya Menon        — HSE Manager (Step 2 HSE sign-off on all AFEs and MOCs)
Rajesh Kumar       — Well Engineer (primary AFE and requisition initiator)
Ravi Patel         — Finance Controller (Step 4 Finance review on AFEs above Rs. 50k)
Sushant Verma      — Drilling Superintendent (workover AFE reviewer; procurement requester)
Arjun Mehta        — Assistant Drilling Engineer (requisition initiator for field items)
```

### Demo Workflow & Procurement KPIs (Month Reference)

```
Workflows initiated MTD:     23 (AFE: 8, MOC: 4, HSE Exception: 6, Contractor Auth: 5)
Workflows completed MTD:     21 | Pending: 3 | Escalated: 1
Avg AFE cycle time MTD:      1h 47m (target: <2h)
Fastest AFE this month:      0h 23m (emergency workover — verbal pre-auth)
Slowest AFE this month:      6h 14m (Budget Exception — CFO required)
POs raised MTD:              34 | Approved: 30 | Pending: 4 | Overdue delivery: 1
Avg PO cycle time MTD:       37 minutes (trigger to approved PO)
Daily reports compiled MTD:  28 (100% on-time delivery, avg 2 min 47 sec)
Total time saved (reports):  28 × 89 min = 41.5 hours saved this month
```

### Demo Vendors (Approved Vendor List — Sample)

```
Nat Petrosols Pvt. Ltd.    Drilling consumables       On-time delivery: 94%  Jodhpur
ChemTreat India Pvt. Ltd.  Production chemicals       On-time delivery: 91%  Ahmedabad
Grundfos India Pvt. Ltd.   Pumps and ESP equipment    On-time delivery: 88%  Mumbai
Tenaris India              Tubulars and casing        On-time delivery: 96%  Mumbai
MI Swaco India             Drilling fluids and mud    On-time delivery: 82%  Delhi
```

### Demo Workflow References

```
WF-2025-0847   AFE — Well B-09 Workover (Rs. 1.14 lakh) — IN PROGRESS (Step 4 pending)
WF-2025-0843   MOC — Revised acid job procedure for Well Pad B — APPROVED (completed 26 Oct)
WF-2025-0839   HSE Exception — Confined space entry without gas testing (emergency) — APPROVED
WF-2025-0831   Contractor Auth — Rig crew extension for B-14 (14 days) — APPROVED (24 Oct)
WF-2025-0829   Budget Exception — Additional chemical spend Rs. 38,000 over budget line — APPROVED
```

---

## Demo Build Prompt for M5 Screen

```
Build an Operational Workflow & Process Automation AI screen for [PROJECT_NAME],
an AI operations platform for [MARKET / REGION] energy operators.

Clean light theme: Navy #0D1B2A primary, Accent Blue #1A6B8A section headers,
Gold #C8922A primary CTA, Teal #0F7B6C success states, Coral #C0392B critical alerts.
Card border: #D1D9E3. Background: #F5F6FA section fill. White cards.

Three sub-module tabs within M5: [5.1 Approval Workflows] [5.2 Daily Reports] [5.3 Procurement]
Default view on 5.1 Approval Workflows.

Show:
(1) Top KPI bar: Workflows Pending (3 — accent blue), Escalations Active (1 — pulsing coral),
    Reports Distributed Today (2 — teal), POs Awaiting Approval (4 — gold)
(2) Kanban workflow board — 4 columns: Initiated | In Review | Pending Approval | Approved/Closed
    WF-2025-0847 AFE card visible in "Pending Approval" column: navy card, gold value badge
    (Rs. 1.14L), amber escalation countdown showing "68 min elapsed / 120 min threshold"
    WF-2025-0843 MOC card in "Approved/Closed" column: teal border, completion timestamp
(3) Detail drawer (right 420px, open): WF-2025-0847 approval chain timeline — 5 steps,
    Steps 1-3 showing teal tick + approver name + timestamp. Step 4 showing amber pending
    state with "68 min" elapsed counter. Step 5 greyed out (awaiting Step 4).
    "Approve" and "Reject" gold/coral buttons at bottom of drawer.
(4) "New Workflow" Gold CTA at top right.

Sub-module 5.2 tab shows: Schedule panel (left 30%) listing 5 configured reports with
green status badges (all scheduled on time). Report viewer (right 70%) showing the
28 Oct Daily Operations Report. Two coral exception callout cards at the top
(Well C-07 shut-in, Pad A compressor). Production metrics in a clean formatted block.
Compilation time badge: "Compiled in 2m 47s | Previous manual avg: 1h 32m"

Sub-module 5.3 tab shows: PO tracker table with 5 rows from the demo data. PO-2025-3847
showing "Approved" status in teal. PO-2025-3821 showing coral "OVERDUE" badge with
"3 days" overdue callout. Vendor scorecard chips on each row. "New Requisition" Gold CTA.
Consolidation suggestion banner above the table showing Rs. 8,400 freight saving opportunity.

Indian operations context — Rs. currency, Indian number format (lakh/crore).
Dates: DD MMM YYYY. IST timestamps. JetBrains Mono for all IDs, values, and timestamps.
React + Tailwind + Recharts.
```

---

## Brand & Design Parameters for M5 UI

### Color Usage

| Element                 | Color                                                              | Hex                                 |
| ----------------------- | ------------------------------------------------------------------ | ----------------------------------- |
| Page background         | Light off-white                                                    | #F5F6FA                             |
| Card / panel background | White                                                              | #FFFFFF                             |
| Primary brand           | Deep navy                                                          | #0D1B2A                             |
| Section headers         | Accent blue                                                        | #1A6B8A                             |
| Primary CTA             | Gold                                                               | #C8922A                             |
| CTA background (light)  | Gold light                                                         | #FDF3E3                             |
| Success / Teal          | Approved steps, distributed reports, delivered POs                 | #0F7B6C                             |
| Success background      | Teal light                                                         | #E3F4F2                             |
| Critical / Danger       | Escalated workflows, overdue deliveries, failed reports            | #C0392B (pulsing for active alerts) |
| Critical background     | Coral light                                                        | #FDECEA                             |
| Advisory / Warning      | Pending steps nearing escalation, pending approvals, overdue items | #C8922A                             |
| Informational           | Accent blue                                                        | #1A6B8A                             |
| Card border             | Border grey                                                        | #D1D9E3                             |
| Secondary text          | Muted grey                                                         | #8892A0                             |

### Typography

| Use Case                                                      | Font                                 |
| ------------------------------------------------------------- | ------------------------------------ |
| Module title, page heading                                    | DM Serif Display or Playfair Display |
| Body text, labels, descriptions                               | DM Sans or Plus Jakarta Sans         |
| All workflow IDs, PO numbers, timestamps, values, cycle times | JetBrains Mono                       |

### Key Animations (Demo-Specific)

| Animation                    | Where                 | Description                                                                                                           |
| ---------------------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Kanban card advance          | 5.1 board on approval | Card slides from "Pending Approval" to "Approved/Closed" column on final approval                                     |
| Escalation countdown         | 5.1 pending step      | Timer counts down in real time; amber at 50% elapsed, coral at 80%; pulses at 90%                                     |
| Approval chain step fill     | 5.1 detail drawer     | Each completed step fills with a teal tick and timestamp in sequence                                                  |
| Mobile approval animation    | 5.1 demo              | Phone notification slides in; tap approve; card advances on board simultaneously                                      |
| Report compilation animation | 5.2 generate trigger  | Progress bar: "Pulling production data… Reading maintenance records… Checking permits… Compiling… Distributing… Done" |
| Exception card drop-in       | 5.2 report view       | Coral exception cards drop into the top of the report as anomalies are detected                                       |
| PO draft generation          | 5.3 trigger event     | "Detecting trigger… Identifying vendor… Checking last price… Routing approval… Draft ready" — 3-second sequence       |
| Delivery timeline advance    | 5.3 PO tracker        | Timeline bar animates to show current position between order date and ETA                                             |

---

## Technical Integration Map for M5

| Sub-module             | External Systems / APIs                                                        | Data Flow Direction                        |
| ---------------------- | ------------------------------------------------------------------------------ | ------------------------------------------ |
| 5.1 Approval Workflows | Email / push notification API — approver alerts and escalations                | Workflow event → Notification → Approver   |
| 5.1 Approval Workflows | ERP (SAP) — cost records, AFE register, budget lines                           | Workflow approval → ERP commitment record  |
| 5.1 Approval Workflows | M3 (HSE) — HSE sign-off step links to JSA and method statement                 | HSE review step → JSA reference            |
| 5.1 Approval Workflows | M6 (Workforce) — approver authority verification                               | Approver identity → Authority matrix check |
| 5.2 Daily Reporting    | Production log (ERP / SCADA)                                                   | Production data → Report compilation       |
| 5.2 Daily Reporting    | CMMS (Maximo / equivalent) — maintenance and breakdown records                 | Maintenance data → Report compilation      |
| 5.2 Daily Reporting    | M3 (HSE) — permit board and incident log                                       | HSE data → Report compilation              |
| 5.2 Daily Reporting    | M4 (Document Intelligence) — meeting actions and open items                    | Open actions → Report compilation          |
| 5.2 Daily Reporting    | Email distribution API — report delivery                                       | Compiled report → Distribution list        |
| 5.3 Procurement        | ERP (SAP) — inventory levels, reorder points, approved vendor list, last price | Stock alert → PO draft trigger             |
| 5.3 Procurement        | CMMS — maintenance work orders requiring parts                                 | WO parts list → PO draft trigger           |
| 5.3 Procurement        | 5.1 Workflows — PO approval routed through workflow engine                     | PO draft → Approval workflow               |
| 5.3 Procurement        | ERP — approved PO posted back as commitment                                    | Approved PO → ERP commitment record        |
| 5.3 Procurement        | CMMS — goods receipt triggers WO status update                                 | Goods receipt → WO parts received flag     |

---

## Summary: M5 at a Glance

| Item                 | Detail                                                                                    |
| -------------------- | ----------------------------------------------------------------------------------------- |
| Module               | M5 — Operational Workflow & Process Automation                                            |
| Sub-modules          | 3 (5.1 → 5.3)                                                                             |
| Total pages          | 4 (1 dashboard + 3 sub-module pages)                                                      |
| Primary data objects | Approval workflow records, auto-compiled operational reports, purchase orders             |
| Key output           | Completed multi-step approvals + daily reports on schedule + POs from trigger to delivery |
| Demo focus           | Live AFE approval completing in under 4 minutes on screen — vs 51-hour email average      |
| Design tone          | Clean, professional dashboard — light theme, premium, operations-grade                    |
| Compliance           | Delegation of Authority matrix enforced · SAP ERP integrated · Full audit trail           |
| Currency             | Rs. Indian Rupee — Lakhs (L) and Crores (Cr)                                              |
| Date format          | DD MMM YYYY                                                                               |
| Language             | English (Indian) — formal operational context                                             |
| Market context       | [MARKET / REGION] upstream oil and gas operations                                         |

---

_[PROJECT_NAME] · Operational Workflow & Process Automation Module — M5 Build Guide_
_by [COMPANY_NAME] · [WEBSITE]_
_Version [VERSION] · [PUBLIC / INTERNAL / CONFIDENTIAL]_
