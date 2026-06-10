# M1 — Production Planning Automation

### Manufacturing AI Command Center · Fortiv Solutions · fortivsolutions.in

> **Module Tagline:** Autonomously reads your ERP and MES data to auto-generate conflict-free production schedules — eliminating spreadsheet chaos, shift gaps, and planning delays.

**Document Type:** Module Build Guide & Parameter Reference  
**Module Code:** M1  
**Total Sub-Modules:** 7 → )  
**Version:** 1.0  
**Company:** Fortiv Solutions  
**Classification:** Confidential  
**Market:** India — Gujarat Focus (Ahmedabad, Rajkot, Vadodara, Surat)

---

## Module Overview

### Purpose

Replace manual Excel-based production planning with an **autonomous scheduling engine** that continuously reads live ERP and MES data, detects capacity conflicts before they happen, and auto-generates optimised production schedules — so your planning team shifts from firefighting to exception management.

### Core Problem Being Solved

| Pain Point              | Without M1                    | With M1                                 |
| ----------------------- | ----------------------------- | --------------------------------------- |
| Schedule creation       | 3–5 hours per week in Excel   | Auto-generated in 90 seconds            |
| Data freshness          | Yesterday's ERP export        | Live sync every 15–30 minutes           |
| Conflict detection      | Discovered during production  | Flagged before the shift starts         |
| Material readiness      | Stock-out halts the line      | MRP agent raises PO proactively         |
| Shift coverage          | Absent operator found at 6 AM | Gap detected 1 hour before shift        |
| Management visibility   | End-of-day verbal reports     | Real-time scoreboard with hourly alerts |
| Weekly planning meeting | 2–3 hours to compile numbers  | Report auto-delivered Monday 8 AM       |

### Demo Wow Moment

**Live production schedule auto-generating on screen** — AI reading ERP order data, flagging a machine bottleneck on Line 3, rescheduling two jobs, and issuing shift notifications — all in under 30 seconds with zero human input.

---

## Module-Level Parameters

| Parameter             | Value                                                                |
| --------------------- | -------------------------------------------------------------------- |
| Module ID             | M1                                                                   |
| Module Name           | Production Planning Automation                                       |
| Sub-module Count      | 7                                                                    |
| Primary Output        | Conflict-free production schedule + shift alerts + MRP requisitions  |
| Primary Users         | Production Head, Planning Manager, Shift Supervisors, MD             |
| Data Refresh Rate     | Real-time (MES/IoT) + Every 15–30 minutes (ERP sync)                 |
| Systems Integrated    | SAP, Oracle, Tally Prime, Odoo, ERPNext, ZKTeco/eSSL biometrics, MES |
| Languages             | English, Hindi, Gujarati                                             |
| ERP Integration       | Bi-directional — reads orders/stock, writes schedules/POs            |
| Compliance            | GST-ready · BIS · ISO 9001 · Labour law (Gujarat) · DPDP Act 2023    |
| Currency Format       | ₹ Indian Rupee — Lakhs (L) and Crores (Cr)                           |
| Demo Financial Period | FY 2024–25 (Apr 2024 – Mar 2025)                                     |

---

## Module Pages & Navigation Structure

```
M1 — Production Planning Automation
│
├── [Page 1]  Module Dashboard / Overview              ← Landing page for M1
│             (KPIs, live Gantt preview, ERP sync status, alert panel)
│
├── [Page]  ERP/MES Data Sync Agent
│             (Sync health panel, open orders feed, anomaly log)
│
├── [Page]  AI Production Schedule Generator
│             (Gantt chart, conflict badges, delta view, export button)
│
├── [Page]  Capacity Bottleneck Detector
│             (Capacity heatmap, forward-looking warning panel, recommendations)
│
├── [Page]  Shift Gap & Attendance Intelligence
│             (Shift dashboard, absence alerts, reallocation cards)
│
├── [Page]  Material Requirement Planning (MRP) Agent
│             (MRP table, critical stock alerts, one-click PO raise)
│
├── [Page]  Production vs Target Tracker
│             (Live scoreboard, hourly counters, OEE dashboard)
│
└── [Page]  Weekly Planning Report Automation
              (Report preview, send schedule, archive list)
```

---

## Page 1 — Module Dashboard (M1 Overview)

### Purpose

The landing screen for Module 1. Gives a helicopter view of the entire production planning engine — ERP sync health, open orders, schedule status, capacity alerts, and material risk — all in one screen.

### Layout

- **Top Stats Bar** (4 KPI cards across)
- **Centre Left:** Live Gantt chart preview (current week snapshot)
- **Centre Right:** Capacity utilisation donut + ERP sync pulse
- **Bottom:** Quick-access tiles to each sub-module → )

### KPI Cards (Top Stats Bar)

| Card                   | Metric                               | Mock Value | Color                        |
| ---------------------- | ------------------------------------ | ---------- | ---------------------------- |
| Open Production Orders | Count of active jobs in ERP          | 142        | Accent Blue #2E86AB          |
| Lines at Risk          | Lines flagged as capacity-overloaded | 2          | Danger Red #D85A30 (pulsing) |
| Schedule Adherence     | % jobs completed on time this week   | 87%        | Success Green #1D9E75        |
| Materials Critical     | Items below reorder level            | 7          | Warning Amber #E8A838        |

### Capacity Utilisation Donut Chart

Recharts donut showing utilisation by production line:

| Line                   | Mock Utilisation | Color   |
| ---------------------- | ---------------- | ------- |
| Line 1 (CNC)           | 94%              | #D85A30 |
| Line 2 (Assembly)      | 78%              | #2E86AB |
| Line 3 (Stamping)      | 61%              | #1D9E75 |
| Line 4 (Welding)       | 85%              | #E8A838 |
| Line 5 (Painting)      | 72%              | #1A3C5E |
| Line 6 (Dispatch Pack) | 55%              | #9B9B9B |

### Live ERP Sync Status Bar

Compact strip showing:

- Last sync timestamp ("Last sync: 47 seconds ago")
- Records pulled (open orders, BOM items, stock levels, attendance)
- Sync health indicator (pulsing green = healthy, amber = delayed, red = failed)

### Sub-Module Quick Access Tiles (Bottom Row)

Seven clickable tiles, each showing:

- Sub-module number + name
- One-line description
- Status indicator (Active / Paused)
- Key stat for today (jobs scheduled / materials flagged / shifts covered)

---

## Page 2 — Submodule: ERP/MES Data Sync Agent

### What It Is

An always-on integration agent that connects to existing ERP (SAP, Oracle, Tally, Odoo, or custom) and MES systems and continuously pulls live data into a unified planning data layer — the foundation all other M1 sub-modules rely on.

### Systems Connected

| System Type    | Supported Platforms                                 | Sync Method                | Frequency                |
| -------------- | --------------------------------------------------- | -------------------------- | ------------------------ |
| ERP            | SAP B1, Oracle NetSuite, Tally Prime, Odoo, ERPNext | API / DB query / File sync | Every 15–30 min          |
| MES            | ERPNext Shop Floor, Custom MES, Manual entry        | API / Webhook / CSV        | Real-time / Every 15 min |
| Biometric / HR | ZKTeco, eSSL, HRMS export                           | API / File sync            | Every 1 hour             |
| Inventory      | ERP stock module                                    | API / DB query             | Every 15–30 min          |

### What It Pulls Per Sync Cycle

| Data Category           | Fields Pulled                                              | Mock Example                                                       |
| ----------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------ |
| Open Sales Orders       | Order #, customer, item, quantity, due date, priority      | SO-2024-4821, Kapoor Industries, MS-204, 1,000 units, 28 Jan, HIGH |
| BOM (Bill of Materials) | Item code, RM components, quantities per unit              | MS-204: CRCA Sheet mm × kg, Zinc Coating × 0.3kg                   |
| Raw Material Stock      | Item code, description, current stock, unit, reorder level | CRCA mm: 3,400 kg on hand, reorder at 1,000 kg                     |
| WIP Inventory           | Job card, stage, quantity at each work centre              | JC-4821: 400 units at Assembly, Line 2                             |
| Machine Capacity        | Line ID, shift capacity (hours), rated output per hour     | CNC Line 1: 16 hrs/day, 45 components/hr                           |
| Workforce Roster        | Employee ID, shift assignment, skill, department           | EMP-0441: Ramesh Kumar, Morning, CNC Operator                      |
| Attendance              | Employee ID, clock-in time, status                         | EMP-0441: Clocked in 05:58                                         |

### Anomaly Detection Rules

| Anomaly Type      | Trigger Condition                                | Alert Action                                     |
| ----------------- | ------------------------------------------------ | ------------------------------------------------ |
| Missing BOM       | Sales order exists for item with no BOM          | Flag to planning manager — cannot schedule       |
| Zero-stock RM     | BOM requires material with zero stock            | Flag as CRITICAL — MRP agent notified            |
| Unallocated shift | Line has production jobs but no workers assigned | Alert to Production Head                         |
| Stale data        | No sync for > 45 minutes                         | Red sync health indicator + WhatsApp alert to IT |
| Orphan WIP        | WIP quantity with no linked job card             | Flag to stores for physical count                |

### Page Layout

**Top:** Sync health banner — "Last sync: 47 seconds ago | 142 open orders | 7 materials below reorder | Sync: ✓ Healthy"  
**Centre Left:** Data pull log — real-time rows showing each record type synced with timestamp and count  
**Centre Right:** Anomaly panel — 5 flagged items with severity badge and resolution CTA  
**Bottom:** Connection status for each integrated system (ERP / MES / Biometric) with last successful sync time

### Mock Demo Data — Anomaly Panel (5 Items)

| #   | Anomaly                                        | Severity | System | Resolution          |
| --- | ---------------------------------------------- | -------- | ------ | ------------------- |
| 1   | BOM missing for Item Code MS-218               | HIGH     | ERP    | "Create BOM" button |
| 2   | CRCA Sheet mm stock: 0 kg — required by 3 jobs | CRITICAL | ERP    | "Raise PO" button   |
| 3   | Line 4 Night Shift — no workforce assigned     | HIGH     | HRMS   | "Assign Workers"    |
| 4   | WIP Job JC-4799: no linked job card found      | MEDIUM   | MES    | "Investigate"       |
| 5   | No sync from SAP for 52 minutes                | HIGH     | ERP    | "Check Connection"  |

### Key UI Elements

- **Pulsing green sync dot** — updates every second with time counter
- **Record count tickers** — animated numbers incrementing on each sync
- **Anomaly severity badge** — Critical (red pulsing) / High (red) / Medium (amber) / Low (grey)
- **System connection status grid** — each system shown as a status card

### Why It Matters

Most planning problems in manufacturing stem from stale or siloed data. A planner working from yesterday's ERP export makes decisions based on yesterday's reality. Live sync means planning decisions are always made on current ground truth.

---

## Page 3 — Submodule: AI Production Schedule Generator

### What It Is

An AI scheduling engine that ingests the live ERP data from and automatically generates an optimised weekly production schedule — balancing order priorities, machine capacity, shift availability, and material constraints simultaneously in under 90 seconds.

### Schedule Generation Inputs

| Input Category        | Fields Used                                           | Source              |
| --------------------- | ----------------------------------------------------- | ------------------- |
| Open Orders           | Order #, item, qty, due date, customer priority       | ERP via             |
| Machine Capacity      | Hours available per line per shift, rated output/hr   | ERP / MES via       |
| Workforce             | Available operators per skill per shift               | HRMS via            |
| Material Availability | Current stock vs BOM requirement per job              | ERP via             |
| Scheduling Rules      | EDD / FIFO / Priority rules (configurable per client) | Admin configuration |

### Schedule Output Fields Per Job Card

| Field                | Description                | Mock Example                          |
| -------------------- | -------------------------- | ------------------------------------- |
| `job_id`             | Internal job card number   | JC-4821                               |
| `sales_order_ref`    | Linked sales order         | SO-2024-4821                          |
| `customer_name`      | Customer for this job      | Kapoor Industries                     |
| `item_code`          | Product being manufactured | MS-204                                |
| `quantity`           | Units to produce           | 1,000                                 |
| `line_assigned`      | Production line            | Line 3 — Stamping                     |
| `shift_assigned`     | Shift slot                 | Morning (6 AM – 2 PM)                 |
| `start_date`         | Planned start              | Monday 22 Jan                         |
| `completion_date`    | Planned completion         | Wednesday 24 Jan                      |
| `material_status`    | RM readiness               | ✓ Stock Available                     |
| `conflict_flag`      | Any scheduling conflict    | ⚠️ Capacity Issue                     |
| `conflict_detail`    | What the conflict is       | CNC Line 1: 94% loaded, risk of delay |
| `recommended_action` | AI suggestion              | Shift 2 jobs to Line 4 Thursday       |
| `priority_score`     | Job urgency score (0–100)  | 88 — Due in 6 days                    |

### Scheduling Logic Options

| Logic Type              | Description                                | Use Case                                     |
| ----------------------- | ------------------------------------------ | -------------------------------------------- |
| EDD (Earliest Due Date) | Schedules jobs with nearest due date first | Most common — meets delivery commitments     |
| FIFO                    | First order in = first scheduled           | Simple factories with few priority customers |
| Priority-Weighted       | Combines due date + customer priority tier | Large accounts get priority buffer           |
| Custom Rules            | Client-defined priority weights            | Configurable per factory                     |

### Page Layout

**Top Control Bar:** "Generate Schedule" button + scheduling logic selector + week selector  
**Main Area (70%):** Interactive Gantt chart — 6 lines × 5 days × 22 jobs  
**Right Panel (30%):** Conflict resolution panel — flagged issues with recommended actions  
**Bottom:** Schedule summary stats + "Export to ERP" and "Export to PDF" buttons

### Gantt Chart Parameters

| Element         | Description                                                                      |
| --------------- | -------------------------------------------------------------------------------- |
| Y-axis          | Production lines (Line 1 → Line 6)                                               |
| X-axis          | Days of the week (Monday → Friday), broken into shifts                           |
| Job bars        | Colour-coded by priority: Red (≥85 priority score) / Amber (60–84) / Green (<60) |
| Conflict badge  | Red ⚠️ icon on job bar + tooltip with conflict detail                            |
| Resolved badge  | Green ✓ icon after AI rescheduling                                               |
| Delta highlight | Yellow outline on any job moved vs. previous schedule                            |

### Mock Demo Data — 22 Jobs, 6 Lines, Week of 22–26 Jan

| Job ID  | Item   | Customer           | Line   | Days    | Qty   | Priority | Status                  |
| ------- | ------ | ------------------ | ------ | ------- | ----- | -------- | ----------------------- |
| JC-4821 | MS-204 | Kapoor Industries  | Line 3 | Mon–Wed | 1,000 | 88 🔴    | On Schedule             |
| JC-4822 | MS-208 | Tata AutoComp      | Line 1 | Mon–Thu | 2,500 | 92 🔴    | ⚠️ Conflict             |
| JC-4823 | PC-112 | Maruti Ancillaries | Line 2 | Mon–Tue | 800   | 71 🟡    | On Schedule             |
| JC-4824 | SP-044 | Reliance Consumer  | Line 4 | Tue–Wed | 1,200 | 65 🟡    | On Schedule             |
| JC-4825 | MS-204 | L&T Construction   | Line 3 | Thu–Fri | 600   | 55 🟢    | On Schedule             |
| JC-4826 | PC-118 | Bajaj Auto         | Line 2 | Wed–Thu | 900   | 79 🟡    | On Schedule             |
| JC-4827 | MS-212 | Ashok Leyland      | Line 1 | Fri     | 400   | 88 🔴    | ⚠️ Rescheduled → Line 4 |

### Conflict Resolution Banner (Demo)

```
⚠️ CONFLICT DETECTED: CNC Line 1 — Friday
Job JC-4822 (Tata AutoComp) + JC-4827 (Ashok Leyland) exceed Line 1 capacity by 18%.

AI RECOMMENDATION:
→ Move JC-4827 (400 units MS-212) to Line 4 — Thursday PM shift
→ Material available ✓ | Workforce available ✓ | Delivery date met ✓

[Accept Recommendation] [Review Manually]
```

### Key UI Elements

- **"Generate Schedule" animation** — progress bar + "Analysing 142 orders... Checking capacity... Resolving conflicts... Schedule Ready" sequence
- **Conflict badges** — pulsing red on affected job bars
- **Delta comparison toggle** — "Show changes vs previous schedule" highlights moved jobs in yellow
- **One-click ERP push** — approved schedule written back to ERP automatically

---

## Page 4 — Submodule: Capacity Bottleneck Detector

### What It Is

An AI analysis agent that continuously monitors machine utilisation, shift loading, and order pipeline data to identify capacity bottlenecks before they cause missed delivery commitments — and recommends corrective actions for the production head.

### Monitoring Parameters Per Work Centre

| Parameter                 | Description                                         | Mock Example                                |
| ------------------------- | --------------------------------------------------- | ------------------------------------------- |
| `line_id`                 | Production line identifier                          | CNC Line 1                                  |
| `rated_capacity_hrs`      | Maximum productive hours per day                    | 16 hrs (2 shifts)                           |
| `current_utilisation_pct` | Actual vs rated capacity                            | 94%                                         |
| `utilisation_status`      | Status based on threshold rules                     | Overloaded                                  |
| `chronic_overload_flag`   | True if >85% for 5+ consecutive days                | ✓ Chronic                                   |
| `forward_load_pct`        | Projected utilisation next 2 weeks                  | 102% (Week 3)                               |
| `bottleneck_type`         | Chronic / Hidden / Forward risk                     | Chronic                                     |
| `upstream_feed_rate`      | Units arriving from previous work centre/hr         | 38 units/hr                                 |
| `downstream_capacity`     | Units the next work centre can absorb/hr            | 42 units/hr                                 |
| `hidden_bottleneck_flag`  | Upstream irregularity causing downstream starvation | ✓ Detected                                  |
| `recommended_action`      | AI corrective action                                | Overtime Thursday–Friday OR split to Line 2 |
| `delay_risk_orders`       | Orders at risk if not addressed                     | JC-4819, JC-4823 — 3-day delay risk         |
| `estimated_delay_days`    | Projected delay if no action taken                  | 3 days                                      |

### Bottleneck Classification Logic

| Utilisation % | Status        | Badge Color     | Action Required  |
| ------------- | ------------- | --------------- | ---------------- |
| 0–69%         | Underloaded   | #1D9E75 Green   | No action        |
| 70–84%        | Normal        | #2E86AB Blue    | Monitor          |
| 85–94%        | High Load     | #E8A838 Amber   | Plan ahead       |
| 95–100%       | Near Capacity | #D85A30 Red     | Immediate action |
| >100%         | Overloaded    | #D85A30 Pulsing | Escalate now     |

### Page Layout

**Top Stats Row:** Total work centres (8) | Overloaded (2) | Near Capacity (1) | Normal (4) | Underloaded (1)  
**Main Area (60%):** Capacity heatmap — 8 work centres × 5 days, colour-coded by utilisation %  
**Right Panel (40%):** Bottleneck detail panel — expands on heatmap cell click  
**Bottom:** Forward-looking capacity warning — projected overload dates for next 4 weeks

### Capacity Heatmap Parameters

| Column       | Content                                                |
| ------------ | ------------------------------------------------------ |
| Work Centre  | Line name + type (CNC / Assembly / Stamping / Welding) |
| Mon–Fri %    | Utilisation colour cell per day                        |
| Week Avg %   | Rolling average for the week                           |
| Status Badge | Overloaded / High / Normal / Underloaded               |
| Trend Arrow  | ↑ increasing / → stable / ↓ decreasing vs last week    |

### Mock Demo Data — 8 Work Centres

| Work Centre      | Mon | Tue | Wed | Thu | Fri | Avg   | Status           |
| ---------------- | --- | --- | --- | --- | --- | ----- | ---------------- |
| CNC Line 1       | 91% | 94% | 96% | 94% | 98% | 9%    | 🔴 Overloaded    |
| Assembly Line 2  | 78% | 80% | 75% | 82% | 78% | 7%    | 🟡 High Load     |
| Stamping Line 3  | 61% | 65% | 58% | 63% | 60% | 6%    | 🟢 Normal        |
| Welding Line 4   | 86% | 88% | 85% | 90% | 87% | 8%    | 🟡 High Load     |
| Painting Line 5  | 72% | 68% | 74% | 70% | 73% | 7%    | 🟢 Normal        |
| Dispatch Packing | 55% | 60% | 52% | 58% | 54% | 55.8% | 🟢 Normal        |
| Heat Treatment   | 42% | 45% | 40% | 43% | 41% | 4%    | 🟢 Underloaded   |
| QC Inspection    | 88% | 91% | 87% | 93% | 90% | 89.8% | 🔴 Near Capacity |

### Bottleneck Detail Panel (On CNC Line 1 Click)

```
CNC LINE 1 — OVERLOADED (9% avg this week)

CHRONIC BOTTLENECK — 8 consecutive days above 85%

ORDERS AT RISK:
• JC-4819 (Kapoor Industries) — 3-day delay risk
• JC-4823 (Maruti Ancillaries) — 1-day delay risk

FORWARD PROJECTION:
Week 3 (5 Feb): 102% load — will exceed capacity

AI RECOMMENDATIONS:
1. Overtime: Thursday–Friday this week (+4 hrs) — cost ₹12,400
2. Subcontract: 600 units to Arvind Metals — est. cost ₹18,000
3. Reschedule: Split JC-4819 — 400 units to Line 4 from Wednesday

[Apply Recommendation 1] [Apply Recommendation 3] [Review All Options]
```

### Key UI Elements

- **Heatmap cells** — click to expand bottleneck detail panel
- **Pulsing red cells** — overloaded work centres pulse every 2 seconds
- **Forward warning strip** — horizontal timeline showing projected overload dates for next 30 days
- **"Send to Production Head" button** — WhatsApp alert with bottleneck summary

---

## Page 5 — Submodule: Shift Gap & Attendance Intelligence

### What It Is

An automation agent that monitors daily attendance from your HR/biometric system and automatically detects shift coverage gaps — then alerts supervisors and suggests cross-trained reallocation options before the shift starts, preventing line stoppages.

### Attendance Data Fields Per Employee Per Shift

| Field                     | Description                        | Mock Example                                    |
| ------------------------- | ---------------------------------- | ----------------------------------------------- |
| `employee_id`             | HR employee code                   | EMP-0441                                        |
| `employee_name`           | Full name                          | Ramesh Kumar                                    |
| `department`              | Production department              | CNC Operations                                  |
| `shift`                   | Assigned shift                     | Morning (6 AM – 2 PM)                           |
| `line_assigned`           | Production line                    | CNC Line 1                                      |
| `role`                    | Job role on line                   | CNC Operator — Grade A                          |
| `attendance_status`       | Present / Absent / Late / On Leave | Absent — Unplanned                              |
| `biometric_punch_in`      | Clock-in time from biometric       | — (not punched in by 5:50 AM)                   |
| `line_criticality`        | How critical this role is          | CRITICAL — only Grade A on Line 1               |
| `cross_trained_flag`      | Can do other roles                 | ✓ Also trained: Assembly Operator               |
| `suggested_replacement`   | AI-suggested substitute            | Dinesh Patel (EMP-0621) — Line 3, available     |
| `replacement_skill_match` | How well the substitute matches    | Good — Grade B, production rate ~85% of Grade A |

### Gap Detection Rules

| Rule                 | Trigger                                         | Alert Type                                          |
| -------------------- | ----------------------------------------------- | --------------------------------------------------- |
| Critical role absent | Grade A/key operator absent with no replacement | CRITICAL — WhatsApp to Supervisor + Production Head |
| Line understaffed    | Line below 80% required headcount               | HIGH — WhatsApp to Supervisor                       |
| Skill mismatch       | Absent operator has unique certification        | HIGH — manual intervention needed                   |
| High absence rate    | >20% of a line absent on same day               | HIGH — potential coordination issue                 |
| Pattern detection    | Same employee absent 3+ times in 30 days        | MEDIUM — flag for HR review                         |

### Alert Timing Schedule

| Alert Type                | Time Sent                 | Recipient                       |
| ------------------------- | ------------------------- | ------------------------------- |
| Pre-shift early warning   | 60 min before shift start | Shift Supervisor                |
| Critical gap alert        | 45 min before shift start | Supervisor + Production Head    |
| Reallocation confirmation | After supervisor approves | Replacement employee (WhatsApp) |
| Post-shift gap report     | 30 min after shift end    | Production Head + HR            |

### Page Layout

**Top Stats Bar:** Today's date + shift (Morning / Afternoon / Night) | Expected headcount | Actual present | Gap count | Lines affected  
**Main Area (60%):** Shift coverage dashboard — lines as rows, expected vs actual staffing  
**Right Panel (40%):** Gap resolution cards — absent employees with suggested replacements  
**Bottom:** WhatsApp alert preview panel + approval buttons

### Shift Dashboard Parameters

| Column          | Content                                             |
| --------------- | --------------------------------------------------- |
| Production Line | Line name                                           |
| Required        | Expected headcount for this shift                   |
| Present         | Actual clocked-in count                             |
| Gap             | Shortfall                                           |
| Status          | Fully Staffed / Minor Gap / Understaffed / Critical |
| Absent Roles    | Names of absent employees in critical roles         |

### Mock Demo Data — Morning Shift 22 Jan (6:45 AM View)

| Line            | Required | Present | Gap | Status           | Absent (Critical)                    |
| --------------- | -------- | ------- | --- | ---------------- | ------------------------------------ |
| CNC Line 1      | 8        | 6       | 2   | 🔴 Critical      | Ramesh Kumar (Grade A), Vijay Sharma |
| Assembly Line 2 | 12       | 11      | 1   | 🟡 Minor Gap     | Priya Mehta                          |
| Stamping Line 3 | 6        | 6       | 0   | 🟢 Fully Staffed | —                                    |
| Welding Line 4  | 10       | 8       | 2   | 🔴 Understaffed  | Arun Patel, Deepak Joshi             |
| Painting Line 5 | 5        | 5       | 0   | 🟢 Fully Staffed | —                                    |
| QC Inspection   | 4        | 3       | 1   | 🟡 Minor Gap     | Suresh Nair                          |

### Gap Resolution Cards (Right Panel — CNC Line 1)

```
CNC LINE 1 — CRITICAL GAP
2 operators absent | Shift starts in 47 minutes

ABSENT: Ramesh Kumar (Grade A CNC Operator)
SUGGESTION 1: Dinesh Patel (EMP-0621) — Line 3 (Stamping)
  ✓ CNC certified (Grade B) | Available this shift
  ⚠️ Production rate: ~85% of Grade A
  [Confirm Reallocation]

SUGGESTION 2: Kiran Shah (EMP-0744) — Dispatch Packing
  ✓ CNC certified (Grade A) | Available this shift
  ✓ Full production rate match
  [Confirm Reallocation]

ABSENT: Vijay Sharma (Assembly support role)
SUGGESTION: Ajay Trivedi (EMP-0381) — Assembly Line 2 (spare capacity)
  [Confirm Reallocation]

[Approve All Suggestions] [Send WhatsApp to Supervisor]
```

### WhatsApp Alert Preview

```
📍 CNC Line 1 — Morning Shift Alert | 5:47 AM

2 operators absent. Gap detected before shift.

Suggested reallocations:
1. Ramesh Kumar → Dinesh Patel (Grade B, confirmed available)
2. Vijay Sharma → Ajay Trivedi (available from Line 2)

Reply YES to confirm or call Supervisor Mahesh Kapoor (+91 98XXX XXXXX).

— Fortiv Manufacturing AI
```

### Key UI Elements

- **Shift clock countdown** — "Shift starts in 47 minutes" ticking down
- **Line status colour coding** — Fully Staffed (green) / Minor (amber) / Understaffed / Critical (red pulsing)
- **One-tap approval buttons** — supervisor confirms reallocation on phone
- **Absence pattern flag** — employees with recurring absences shown with a history icon

---

## Page 6 — Submodule: Material Requirement Planning (MRP) Agent

### What It Is

An AI agent that automatically calculates material requirements for the approved production schedule, compares against current stock, and generates purchase requisitions for items that need replenishment — before stock-outs can disrupt production.

### MRP Calculation Fields Per Material

| Field                    | Description                                        | Mock Example      |
| ------------------------ | -------------------------------------------------- | ----------------- |
| `item_code`              | Raw material code                                  | RM-CRCA-          |
| `item_description`       | Material description                               | CRCA Sheet mm     |
| `unit`                   | Unit of measure                                    | KG                |
| `current_stock_qty`      | Stock on hand today                                | 3,400 kg          |
| `open_po_qty`            | Quantity on order, not yet received                | 2,000 kg          |
| `available_qty`          | On hand + on order                                 | 5,400 kg          |
| `schedule_requirement`   | Required by approved production schedule           | 6,200 kg          |
| `shortfall_qty`          | Gap between available and required                 | 800 kg            |
| `stock_out_date`         | When current stock runs out at current consumption | 28 Jan            |
| `reorder_qty`            | Calculated reorder quantity (EOQ / Safety stock)   | 3,000 kg          |
| `required_delivery_date` | When material must arrive to avoid line stoppage   | 25 Jan            |
| `lead_time_days`         | Vendor lead time for this material                 | 5 days            |
| `reorder_status`         | Normal / Reorder Due / Critical / Surplus          | Critical          |
| `preferred_vendor`       | Primary vendor for this material                   | Mehta Steel Works |
| `standard_rate`          | Approved purchase rate                             | ₹68/kg            |
| `estimated_po_value`     | Reorder quantity × standard rate                   | ₹2,04,000         |
| `urgency_flag`           | URGENT if required within 7 days                   | ✓ URGENT          |

### MRP Status Classification

| Status      | Condition                           | Badge Color   | Action                |
| ----------- | ----------------------------------- | ------------- | --------------------- |
| Surplus     | Available > Required by >20%        | Grey #9B9B9B  | No action             |
| Normal      | Available > Required                | Green #1D9E75 | Monitor               |
| Reorder Due | Available < Required + Safety Stock | Amber #E8A838 | Raise PO              |
| Critical    | Stock covers <7 days of schedule    | Red #D85A30   | URGENT PO             |
| Stock Out   | Zero stock                          | Red Pulsing   | Emergency procurement |

### Page Layout

**Top Stats Row:** Total materials tracked | Normal (X) | Reorder Due (X) | Critical (X) | Stock Out (X)  
**Filter Bar:** Status filter | Vendor filter | Production line filter | Date range  
**Main Area:** MRP table — all tracked materials with status, quantities, shortfall, action  
**Right Panel:** Auto-generated PO preview for selected material  
**Bottom:** "Raise All URGENT POs" button + weekly MRP summary stats

### Mock Demo Data — MRP Table (15 Materials)

| #   | Material             | Current Stock | Required    | Shortfall  | Status         | Action    |
| --- | -------------------- | ------------- | ----------- | ---------- | -------------- | --------- |
| 1   | CRCA Sheet mm        | 3,400 kg      | 6,200 kg    | 2,800 kg   | 🔴 Critical    | Raise PO  |
| 2   | Zinc Coating Powder  | 180 kg        | 420 kg      | 240 kg     | 🔴 Critical    | Raise PO  |
| 3   | MS Round Bar 20mm    | 0 kg          | 800 kg      | 800 kg     | 🔴 Stock Out   | EMERGENCY |
| 4   | MIG Welding Wire     | 45 spools     | 80 spools   | 35 spools  | 🟡 Reorder Due | Raise PO  |
| 5   | Primer Coat Red      | 120 litres    | 200 litres  | 80 litres  | 🟡 Reorder Due | Raise PO  |
| 6   | CRCA Sheet mm        | 5,200 kg      | 3,800 kg    | Surplus    | ⬜ Surplus     | —         |
| 7   | Aluminium Sheet 2mm  | 1,800 kg      | 1,400 kg    | Surplus    | 🟢 Normal      | —         |
| 8   | Hex Bolt M10         | 8,400 pcs     | 12,000 pcs  | 3,600 pcs  | 🟡 Reorder Due | Raise PO  |
| 9   | Spring Steel Strip   | 900 kg        | 600 kg      | Surplus    | 🟢 Normal      | —         |
| 10  | Cutting Oil          | 200 litres    | 320 litres  | 120 litres | 🟡 Reorder Due | Raise PO  |
| 11  | Packaging Corrugated | 2,400 pcs     | 3,000 pcs   | 600 pcs    | 🟡 Reorder Due | Raise PO  |
| 12  | Grinding Disc 180mm  | 60 pcs        | 90 pcs      | 30 pcs     | 🟡 Reorder Due | Raise PO  |
| 13  | Paint — RAL 7016     | 40 litres     | 15 litres   | Surplus    | 🟢 Normal      | —         |
| 14  | Calibration Gas      | 3 cylinders   | 2 cylinders | Surplus    | 🟢 Normal      | —         |
| 15  | Safety PPE Kits      | 180 sets      | 200 sets    | 20 sets    | 🟡 Reorder Due | Raise PO  |

### WhatsApp Alert (Auto-triggered for Critical Items)

```
⚠️ URGENT STOCK ALERT | Fortiv Manufacturing AI

MS Round Bar 20mm — STOCK OUT
Current: 0 kg | Required: 800 kg (Schedule Week of 22 Jan)
Vendor: Gujarat Bearings Ltd.
Required delivery: 25 Jan (in 3 days)

Purchase requisition #PR-2024-1047 auto-raised.
PO approval needed from Purchase Head.

Action required NOW to avoid Line 4 stoppage.
— Fortiv Manufacturing AI
```

### Key UI Elements

- **One-click "Raise PO" button** per material row — triggers PO generation to M2 module
- **"Raise All URGENT POs" bulk action** — generates POs for all Critical / Stock Out items simultaneously
- **Estimated PO value summary** — total value of all POs to be raised (₹X lakhs)
- **Lead time vs required date check** — auto-flags materials where lead time > days available

---

## Page 7 — Submodule: Production vs Target Tracker

### What It Is

A real-time production performance tracking module that compares actual output per line, per shift, and per day against planned targets — giving supervisors and management instant visibility into schedule adherence and OEE, with hourly alerts when lines fall behind.

### Tracking Parameters Per Line Per Hour

| Field                    | Description                           | Mock Example             |
| ------------------------ | ------------------------------------- | ------------------------ |
| `line_id`                | Production line                       | CNC Line 1               |
| `shift`                  | Current shift                         | Morning                  |
| `hour`                   | Production hour (1–8)                 | Hour 4 (9 AM – 10 AM)    |
| `target_units_hour`      | Planned output this hour              | 450 units                |
| `actual_units_hour`      | Actual output this hour               | 340 units                |
| `variance_units`         | Actual vs target                      | -110 units               |
| `variance_pct`           | % above or below target               | -2%                      |
| `cumulative_target`      | Shift target up to this hour          | 1,800 units              |
| `cumulative_actual`      | Actual shift output so far            | 1,420 units              |
| `shift_target_total`     | Full shift target                     | 3,600 units              |
| `projected_shift_output` | At current rate, expected shift total | 2,840 units              |
| `projected_variance`     | Projected shortfall by end of shift   | -760 units               |
| `alert_triggered`        | Below 80% threshold                   | ✓ Alert Sent             |
| `alert_reason`           | Root cause noted by supervisor        | Machine changeover delay |
| `oee_availability`       | Planned vs actual uptime              | 87%                      |
| `oee_performance`        | Actual vs rated speed                 | 76%                      |
| `oee_quality`            | Good units vs total produced          | 97%                      |
| `oee_composite`          | Overall Equipment Effectiveness       | 64%                      |
| `downtime_minutes`       | Unplanned downtime this shift         | 38 min                   |
| `downtime_reason`        | Categorised reason                    | Tooling change unplanned |

### OEE Threshold Rules

| OEE Level   | Range  | Badge Color   | Action                   |
| ----------- | ------ | ------------- | ------------------------ |
| World Class | ≥85%   | Green #1D9E75 | Celebrate                |
| Good        | 70–84% | Blue #2E86AB  | Monitor                  |
| Average     | 60–69% | Amber #E8A838 | Investigate              |
| Poor        | <60%   | Red #D85A30   | Alert — immediate action |

### Alert Trigger Rules

| Rule                       | Condition                             | Alert Sent To                |
| -------------------------- | ------------------------------------- | ---------------------------- |
| Hourly below target        | Actual < 80% of hourly target         | Shift Supervisor (WhatsApp)  |
| Shift projection critical  | Projected shift total < 85% of target | Production Head (WhatsApp)   |
| OEE below threshold        | Composite OEE <65%                    | Production Head + MD         |
| Zero production            | No output for 30 minutes              | Supervisor + Maintenance     |
| Sustained underperformance | Below target for 3 consecutive hours  | Production Head (escalation) |

### Page Layout

**Top:** Live clock + shift indicator + "Today Total: X,XXX units | Target: X,XXX | Variance: +/-X%" ticker  
**Main Area:** Production scoreboard — 6 lines × live counters + hourly bar chart  
**Bottom Left:** OEE dashboard — 3 component gauges (Availability / Performance / Quality) + composite  
**Bottom Right:** Alert log — last 10 alerts with timestamp, line, issue, and resolution

### Production Scoreboard Parameters

| Column       | Content                                           |
| ------------ | ------------------------------------------------- |
| Line         | Production line name                              |
| Status       | 🟢 Running / 🔴 Stopped / 🟡 Changeover / ⚫ Idle |
| This Hour    | Units produced this hour                          |
| Hour Target  | Planned units this hour                           |
| Hour %       | Actual as % of target                             |
| Shift Total  | Cumulative units this shift                       |
| Shift Target | Full shift target                                 |
| Shift %      | Cumulative performance %                          |
| OEE          | Composite OEE for this shift                      |

### Mock Demo Data — Morning Shift, Hour 4 (9:00–10:00 AM)

| Line             | Status        | This Hr | Target | %        | Shift Total | Shift Target | Shift % | OEE |
| ---------------- | ------------- | ------- | ------ | -------- | ----------- | ------------ | ------- | --- |
| CNC Line 1       | 🟢 Running    | 340     | 450    | 7% 🔴    | 1,420       | 1,800        | 78.9%   | 64% |
| Assembly Line 2  | 🟢 Running    | 510     | 480    | 10% 🟢   | 2,080       | 1,920        | 10%     | 89% |
| Stamping Line 3  | 🟡 Changeover | 0       | 380    | 0% 🔴    | 980         | 1,520        | 6%      | 71% |
| Welding Line 4   | 🟢 Running    | 218     | 240    | 90.8% 🟢 | 892         | 960          | 92.9%   | 81% |
| Painting Line 5  | 🟢 Running    | 145     | 150    | 96.7% 🟢 | 588         | 600          | 98.0%   | 85% |
| Dispatch Packing | 🟢 Running    | 280     | 300    | 9% 🟢    | 1,140       | 1,200        | 95.0%   | 88% |

### WhatsApp Alert (Auto-triggered for CNC Line 1)

```
⚠️ PRODUCTION ALERT | 9:12 AM

CNC Line 1 — Hour 4: 340 units vs 450 target (7%)
Shift projected total: 2,840 vs 3,600 target

Action required. Please investigate.

Root cause options: [Tooling] [Material] [Operator] [Machine] [Other]
— tap to log reason

— Fortiv Manufacturing AI
```

### End-of-Day Report (Auto-sent to Management WhatsApp Group at 7 PM)

```
📊 DAILY PRODUCTION REPORT | 22 Jan 2025

Total Output: 8,240 units | Target: 9,000 | Variance: -%

LINE PERFORMANCE:
✅ Assembly Line 2: 108% of target (AHEAD)
✅ Welding Line 4: 93% — On Track
⚠️ CNC Line 1: 79% — Below Target (tooling delay, 38 min downtime)
⚠️ Stamping Line 3: 65% — Below Target (changeover overrun)
✅ Painting Line 5: 98% — On Track
✅ Dispatch Packing: 95% — On Track

OEE SUMMARY (Composite):
Line 1: 64% | Line 2: 89% | Line 3: 71% | Line 4: 81% | Line 5: 85% | Line 6: 88%

— Fortiv Manufacturing AI
```

### Key UI Elements

- **Live unit counters** — numbers tick up in real time as production data is received
- **"Ahead of Schedule" green banner** on Line 2
- **Red pulsing alert badge** on CNC Line 1 with "Below Target" label
- **OEE gauge dials** — animated circular gauges for Availability, Performance, Quality

---

## Page 8 — Submodule: Weekly Planning Report Automation

### What It Is

An automated report generation agent that compiles the weekly production plan, performance summary, upcoming order commitments, and risk flags into a formatted PDF report — delivered to all relevant stakeholders every Monday morning at 8:00 AM without any manual effort.

### Report Contents & Data Sources

| Report Section           | Content                                            | Data Source     |
| ------------------------ | -------------------------------------------------- | --------------- |
| Executive Summary        | Prior week performance vs target in 5 bullets      | M tracker       |
| Production KPI Dashboard | OEE per line, schedule adherence %, downtime hours | M               |
| Gantt Chart Snapshot     | This week's approved schedule                      | M               |
| Open Order Commitments   | Top 10 orders due this week with delivery status   | ERP via M       |
| Capacity Risk Flags      | Bottlenecks and forward-looking warnings           | M               |
| Material Status          | Critical / Reorder items with PO status            | M               |
| Shift & Attendance       | Last week absence rate, shift gap incidents        | M               |
| Exception Log            | Unresolved conflicts, missed targets, NCRs         | All sub-modules |

### Report Output Parameters

| Parameter        | Value                                                       |
| ---------------- | ----------------------------------------------------------- |
| Report Format    | Branded PDF (Fortiv design template or client-branded)      |
| Report Frequency | Every Monday at 8:00 AM                                     |
| Pages            | Typically 8–12 pages                                        |
| Delivery Method  | Email (PDF attachment) + WhatsApp summary (5-bullet digest) |
| Recipients       | MD, Production Head, Planning Manager, Department HODs      |
| Archive          | Stored in searchable cloud archive — all historical reports |
| Brand            | Fortiv Solutions letterhead OR client company letterhead    |
| Currency         | ₹ Lakhs and Crores                                          |
| Date Format      | DD/MM/YYYY                                                  |

### WhatsApp Digest Format (Monday 8:00 AM)

```
📊 WEEKLY PLANNING DIGEST | Week of 22–26 Jan 2025

1. LAST WEEK: 41,200 units produced vs 45,000 target (9% adherence)
2. TOP RISK THIS WEEK: CNC Line 1 — chronic overload, 3 jobs at risk
3. MATERIALS: 3 critical items below reorder — URGENT POs raised for 2
4. KEY ORDERS DUE: Tata AutoComp (2,500 units, 26 Jan) | Kapoor Industries (1,000 units, 24 Jan)
5. OEE LAST WEEK: Plant avg 79% | Best: Line 2 (89%) | Worst: Line 1 (64%)

Full report: [PDF link]
— Fortiv Manufacturing AI
```

### Report Approval Workflow

| Step | Action                                   | Who                          |
| ---- | ---------------------------------------- | ---------------------------- |
| 1    | AI compiles report from all data sources | Automated (Sunday night)     |
| 2    | Draft sent to Production Head for review | 7:00 AM Monday               |
| 3    | One-click "Approve & Send"               | Production Head              |
| 4    | Report sent to all recipients            | 8:00 AM Monday (on approval) |
| 5    | Auto-send if no action by 8:00 AM        | Automated fallback           |

### Page Layout

**Top:** Report schedule status — "Next report: Monday 27 Jan at 8:00 AM | Last sent: Monday 20 Jan"  
**Main Area (Left 60%):** Report preview with page thumbnails — click to expand any section  
**Right Panel (40%):** Recipient list + delivery schedule + archive of past reports  
**Bottom:** "Generate Preview Now" button + "Send Test Report" button

### Archive Parameters

| Column          | Content                                       |
| --------------- | --------------------------------------------- |
| Report Date     | Week ending date                              |
| Generated At    | Timestamp of generation                       |
| Sent To         | Number of recipients                          |
| Delivery Status | All Delivered / X Bounced                     |
| PDF Link        | Download link                                 |
| Key Stats       | Brief performance summary (production %, OEE) |

### Key UI Elements

- **Report page thumbnails** — mini previews of each page with section labels
- **Live data toggle** — "Use live data" vs "Use last week's data" for preview generation
- **Recipient management** — add/remove email and WhatsApp recipients with role tags
- **"Generate Now" button** — force-generates a report on demand outside the Monday cycle

---

## Complete Module 1 — Master Parameter Reference

### All Data Fields Across M1

| Field Name                | Type           | Sub-module | Description                                               |
| ------------------------- | -------------- | ---------- | --------------------------------------------------------- |
| `sync_timestamp`          | DateTime       |            | Last successful ERP sync time                             |
| `sync_health`             | Enum           |            | Healthy / Delayed / Failed                                |
| `open_order_count`        | Number         |            | Total open sales orders in ERP                            |
| `anomaly_count`           | Number         |            | Active anomalies detected                                 |
| `anomaly_type`            | Enum           |            | Missing BOM / Zero Stock / Unallocated Shift / Stale Data |
| `job_id`                  | String         |            | Internal job card number                                  |
| `sales_order_ref`         | String         |            | Linked ERP sales order                                    |
| `item_code`               | String         | ,          | Product / RM item code                                    |
| `line_assigned`           | Enum           |            | CNC Line 1–6                                              |
| `shift_assigned`          | Enum           | ,          | Morning / Afternoon / Night                               |
| `start_date`              | Date           |            | Job planned start                                         |
| `completion_date`         | Date           |            | Job planned completion                                    |
| `conflict_flag`           | Boolean        |            | Scheduling conflict detected                              |
| `conflict_detail`         | Text           |            | Description of the conflict                               |
| `recommended_action`      | Text           | ,          | AI corrective recommendation                              |
| `priority_score`          | Number (0–100) |            | Job scheduling urgency                                    |
| `utilisation_pct`         | Number (%)     |            | Work centre current utilisation                           |
| `utilisation_status`      | Enum           |            | Underloaded / Normal / High / Near Capacity / Overloaded  |
| `chronic_overload_flag`   | Boolean        |            | 5+ days above 85%                                         |
| `forward_load_pct`        | Number (%)     |            | Projected utilisation next 2 weeks                        |
| `delay_risk_orders`       | Array          |            | Job IDs at delivery risk                                  |
| `estimated_delay_days`    | Number         |            | Days of delay if unresolved                               |
| `employee_id`             | String         |            | HR employee code                                          |
| `attendance_status`       | Enum           |            | Present / Absent / Late / On Leave                        |
| `line_criticality`        | Enum           |            | Critical / Important / Flexible                           |
| `cross_trained_flag`      | Boolean        |            | Employee can cover other roles                            |
| `suggested_replacement`   | String         |            | Recommended substitute employee                           |
| `replacement_skill_match` | Enum           |            | Exact / Good / Partial                                    |
| `current_stock_qty`       | Number         |            | On-hand quantity                                          |
| `available_qty`           | Number         |            | On-hand + on-order                                        |
| `schedule_requirement`    | Number         |            | Required by approved schedule                             |
| `shortfall_qty`           | Number         |            | Gap to be procured                                        |
| `stock_out_date`          | Date           |            | When stock runs out                                       |
| `reorder_qty`             | Number         |            | Recommended PO quantity                                   |
| `required_delivery_date`  | Date           |            | Material needed by this date                              |
| `urgency_flag`            | Boolean        |            | Required within 7 days                                    |
| `reorder_status`          | Enum           |            | Surplus / Normal / Reorder Due / Critical / Stock Out     |
| `estimated_po_value`      | Number (₹)     |            | Estimated purchase order value                            |
| `target_units_hour`       | Number         |            | Planned output per hour                                   |
| `actual_units_hour`       | Number         |            | Actual output per hour                                    |
| `variance_pct`            | Number (%)     |            | Actual vs target %                                        |
| `projected_shift_output`  | Number         |            | Predicted end-of-shift total                              |
| `oee_availability`        | Number (%)     |            | Availability component of OEE                             |
| `oee_performance`         | Number (%)     |            | Performance component of OEE                              |
| `oee_quality`             | Number (%)     |            | Quality component of OEE                                  |
| `oee_composite`           | Number (%)     |            | Overall Equipment Effectiveness                           |
| `downtime_minutes`        | Number         |            | Unplanned downtime this shift                             |
| `downtime_reason`         | Enum           |            | Tooling / Material / Operator / Machine / Other           |
| `alert_triggered`         | Boolean        |            | Alert sent for this line/hour                             |
| `report_generated_at`     | DateTime       |            | When the weekly report was compiled                       |
| `report_sent_at`          | DateTime       |            | When the report was delivered                             |
| `report_recipients`       | Array          |            | Email/WhatsApp recipient list                             |
| `report_archive_url`      | URL            |            | Link to stored PDF                                        |

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
MES:                ERPNext Shop Floor Module
Biometric:          ZKTeco, GIDC Vatva campus
Production Lines:   6 lines (CNC, Assembly, Stamping, Welding, Painting, Packing)
Shifts:             Morning (6 AM–2 PM) | Afternoon (2 PM–10 PM) | Night (10 PM–6 AM)
```

### Demo Employee Pool (Planning & Shop Floor)

```
Mahesh Kapoor      — Production Head (recipient of all critical alerts)
Deepak Trivedi     — Planning Manager (schedule approval)
Ramesh Kumar       — CNC Operator Grade A, Line 1, Morning
Dinesh Patel       — CNC Operator Grade B, Line 3, cross-trained
Vijay Sharma       — Assembly Support, Line 2
Priya Mehta        — Assembly Operator, Line 2
Arun Patel         — Welder Grade A, Line 4
Deepak Joshi       — Welder Grade B, Line 4
Kiran Shah         — CNC Operator Grade A, Dispatch Packing (cross-trained)
Suresh Nair        — QC Inspector, QC department
Ajay Trivedi       — Assembly Operator, Line 2 (spare capacity)
```

### Demo Customer Order Pool (Active Sales Orders)

```
SO-2024-4821    Kapoor Industries          MS-204     1,000 units    Due: 24 Jan    Priority: HIGH
SO-2024-4822    Tata AutoComp Systems      MS-208     2,500 units    Due: 26 Jan    Priority: URGENT
SO-2024-4823    Maruti Ancillaries Gujarat PC-112       800 units    Due: 23 Jan    Priority: HIGH
SO-2024-4824    Reliance Consumer Products SP-044     1,200 units    Due: 28 Jan    Priority: MEDIUM
SO-2024-4825    L&T Construction Materials MS-204       600 units    Due: 31 Jan    Priority: MEDIUM
SO-2024-4826    Bajaj Auto Components      PC-118       900 units    Due: 27 Jan    Priority: HIGH
SO-2024-4827    Ashok Leyland Vendors      MS-212       400 units    Due: 26 Jan    Priority: HIGH
SO-2024-4828    Godrej Precision Engg.     SP-044       750 units    Due: 30 Jan    Priority: MEDIUM
```

### Demo Raw Material Pool

```
RM-CRCA-     CRCA Sheet mm         Mehta Steel Works, Ahmedabad      ₹68/kg
RM-CRCA-     CRCA Sheet mm         Mehta Steel Works, Ahmedabad      ₹72/kg
RM-MSR-20       MS Round Bar 20mm        Gujarat Bearings Ltd., Ahmedabad  ₹55/kg
RM-ZINC-001     Zinc Coating Powder      Shah Chemicals, Surat             ₹340/kg
RM-ALU-2.0      Aluminium Sheet 2mm      Arvind Metals, Rajkot             ₹220/kg
RM-MIG-001      MIG Welding Wire         Krishna Fasteners, Pune           ₹480/spool
RM-PRIMER-RED   Primer Coat Red          Bharat Lubricants, Mumbai         ₹180/litre
RM-HEX-M10      Hex Bolt M10             Patel Packaging, Rajkot           ₹0/piece
```

### Demo Production KPIs (Last Week Reference)

```
Total Output:           41,200 units
Target:                 45,000 units
Schedule Adherence:     9%
Plant OEE Average:      79%
Best Line (OEE):        Assembly Line 2 — 89%
Worst Line (OEE):       CNC Line 1 — 64%
Total Downtime:         4.8 hours (unplanned)
Top Downtime Reason:    Tooling changes —  hours
Customer Complaints:    2 (quality related)
On-Time Delivery:       87%
```

---

## Demo Build Prompt for M1 Dashboard

```
Build a Manufacturing Production Planning AI dashboard for Fortiv ManufactureSmart Pvt. Ltd.,
a Gujarat precision metal components manufacturer. Dark theme, navy #1A3C5E primary,
electric blue #2E86AB accent, amber #E8A838 warning, coral red #D85A30 danger, dark bg #0D1B2A.

Seven sub-module navigation within M1. Default landing on M1 Module Overview.

Show:
(1) Top KPI bar: Open Orders (142), Lines at Risk (2 — pulsing red), Schedule Adherence (87%),
    Materials Critical (7)
(2) Live Gantt chart: 6 production lines × 5 days × 22 jobs, colour-coded by priority
    (red/amber/green), conflict badge on CNC Line 1 Friday
(3) ERP sync status: "Last sync: 47 seconds ago | 142 orders | Sync: ✓ Healthy" — pulsing green dot
(4) Capacity utilisation mini donut for 6 lines
(5) Alert panel: 3 alerts (2 red, 1 amber)
(6) Quick tiles for 7 sub-modules at bottom

Indian manufacturing context — Ahmedabad GIDC, SAP ERP integration, WhatsApp-first alerts,
rupee currency (₹ lakhs). JetBrains Mono for all numbers. React app with recharts.
```

---

## Brand & Design Parameters for M1 UI

### Color Usage

| Element               | Color                            | Hex     |
| --------------------- | -------------------------------- | ------- |
| Page background       | Dark navy                        | #0D1B2A |
| Card/panel background | White                            | #FFFFFF |
| Primary brand         | Deep navy                        | #1A3C5E |
| Accent / links        | Electric blue                    | #2E86AB |
| Overloaded / danger   | Coral red (pulsing for critical) | #D85A30 |
| High load / warning   | Amber                            | #E8A838 |
| Normal / success      | Teal green                       | #1D9E75 |
| Cold / info           | Electric blue                    | #2E86AB |
| Section background    | Off white                        | #F5F6FA |

### Typography

| Use Case                            | Font                                 |
| ----------------------------------- | ------------------------------------ |
| Module title, page heading          | Playfair Display or DM Serif Display |
| Body text, labels, descriptions     | DM Sans or Plus Jakarta Sans         |
| All numbers, quantities, timestamps | JetBrains Mono                       |

### Key Animations (Demo-Specific)

| Animation            | Where                                 | Description                                         |
| -------------------- | ------------------------------------- | --------------------------------------------------- |
| Pulsing red badge    | Overloaded lines in , critical alerts | Badge pulses every 2 seconds                        |
| Unit counter tick-up | live scoreboard                       | Numbers increment as production data arrives        |
| Sync pulse           | sync status dot                       | Green dot pulses every second                       |
| Gantt generation     | schedule generator                    | Bars populate one by one on "Generate" click        |
| Conflict flash       | Gantt chart                           | Conflicted job bar flashes red then resolves        |
| MRP table loading    |                                       | Rows load with status badges appearing sequentially |
| Alert drop-in        | M1 dashboard                          | Alert cards drop in from top of panel               |

---

## Technical Integration Map for M1

| Sub-module          | External APIs / Systems                                      | Data Flow Direction                        |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------ |
| ERP/MES Sync        | SAP API / Oracle API / Tally ODBC / Odoo REST / ERPNext      | ERP → Planning Layer                       |
| ERP/MES Sync        | ZKTeco / eSSL Biometric API                                  | Biometric → Planning Layer                 |
| Schedule Generator  | Planning Layer (output of ) + Scheduling engine              | Planning Layer → ERP (schedule write-back) |
| Bottleneck Detector | Planning Layer + MES real-time feed                          | MES → Analysis → WhatsApp alert            |
| Shift Intelligence  | Biometric system + HRMS roster + WhatsApp Business API       | Biometric → Alert → Supervisor WhatsApp    |
| MRP Agent           | ERP inventory module + Production schedule () + WhatsApp API | ERP → MRP calc → PO creation → ERP         |
| Production Tracker  | MES / Barcode scanner / Manual supervisor app                | Shop floor → Tracker → WhatsApp alert      |
| Report Agent        | All M1 sub-module data + Email + WhatsApp Business API       | Data → PDF → Email + WhatsApp              |

---

## Summary: M1 at a Glance

| Item                 | Detail                                                                |
| -------------------- | --------------------------------------------------------------------- |
| Module               | M1 — Production Planning Automation                                   |
| Sub-modules          | 7 → )                                                                 |
| Total pages          | 8 (1 dashboard + 7 sub-module pages)                                  |
| Primary data objects | Production schedule, shift coverage, MRP requirements, OEE tracking   |
| Systems covered      | SAP / Oracle / Tally / Odoo / ZKTeco / eSSL / MES / WhatsApp Business |
| Key output           | Auto-generated schedule + real-time alerts + weekly PDF report        |
| Demo focus           | Live Gantt chart auto-generating + conflict resolution in 30 seconds  |
| Design tone          | Dark navy dashboard, data-dense, real-time, industrial precision      |
| Compliance           | GST-ready · BIS · ISO 9001:2015 · IATF 16949 ready · DPDP Act 2023    |
| Currency             | ₹ Indian Rupee — Lakhs (L) and Crores (Cr)                            |
| Date format          | DD/MM/YYYY                                                            |
| Languages            | English (primary) · Hindi · Gujarati                                  |
| Shifts               | Morning (6 AM–2 PM) · Afternoon (2 PM–10 PM) · Night (10 PM–6 AM)     |

---

_Manufacturing AI Command Center — Module 1 Build Guide_  
_by Fortiv Solutions · fortivsolutions.in_  
_Version 1.0 · Confidential_
