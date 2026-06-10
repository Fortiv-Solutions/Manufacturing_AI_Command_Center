# M6 — Workforce & Training Compliance Management

### [PROJECT_NAME] · AI Operations Platform · [WEBSITE]

> **Module Tagline:** Automatically tracks every worker's certification portfolio, blocks unqualified personnel from hazardous permits, and drives onboarding to operational readiness — so no deployment decision is ever made without current qualification data.

**Document Type:** Module Build Guide & Parameter Reference
**Module Code:** M6
**Total Sub-Modules:** 3 (6.1 → 6.3)
**Version:** [VERSION]
**Company:** [COMPANY_NAME]
**Classification:** [PUBLIC / INTERNAL / CONFIDENTIAL]
**Market:** [MARKET / REGION] — India Focus (OISD · DGMS · PESO · PNGRB)

---

## Module Overview

### Purpose

Replace the error-prone, spreadsheet-based management of workforce certifications with an **automated qualification engine** that continuously monitors every worker's certification portfolio, triggers proactive renewal alerts, enforces hard gates at the point of permit issuance, and structures onboarding into a documented, trackable competency pathway — so compliance is a system property, not a supervisor's memory.

### Core Problem Being Solved

| Pain Point                              | Without M6                                                 | With M6                                                              |
| --------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------- |
| Certification currency visibility       | Checked manually per person, per permit — often missed     | Real-time dashboard — every cert, every worker, live                 |
| Expiry alerts                           | Email reminder if someone remembers to set one             | Automated 60/30/7-day alerts to worker, supervisor, and HR           |
| Permit-to-work qualification gate       | Verbal confirmation or paper-based check — easily bypassed | Hard system block — permit cannot proceed without valid certs        |
| Unqualified worker deployment           | Discovered after deployment, if at all                     | Blocked at source — system enforces the gate                         |
| Onboarding consistency                  | Ad hoc — depends on the supervisor                         | Auto-generated role-specific plan with tracked milestones            |
| Regulatory audit readiness              | Manual compilation of certificates per person              | Instant export — full team qualification snapshot in under 2 minutes |
| Knowledge of expiring certs across site | No aggregate visibility                                    | 90-day expiry forecast for the full workforce                        |

### Demo Wow Moment

**The permit-to-work qualification block in live action** — supervisor initiates a Confined Space Entry permit, names three workers, and before the permit can proceed, the system immediately surfaces an expired Gas Testing certificate for one of them, displays the exact expiry date, and prevents issuance. The supervisor substitutes a qualified replacement inline. The whole exchange takes 30 seconds and makes the entire module's business case in one interaction.

---

## Module-Level Parameters

| Parameter                   | Value                                                                                                                                                                                      |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Module ID                   | M6                                                                                                                                                                                         |
| Module Name                 | Workforce & Training Compliance Management                                                                                                                                                 |
| Sub-module Count            | 3                                                                                                                                                                                          |
| Primary Output              | Qualification compliance dashboard + proactive expiry alerts + PTW qualification gate + structured onboarding tracker                                                                      |
| Primary Users               | Site Manager, HSE Manager, HR Lead, Permit Issuer, Supervisor                                                                                                                              |
| Alert Channels              | In-app notification, email, SMS (optional)                                                                                                                                                 |
| Certification Types Tracked | H2S Awareness, First Aid, Well Control (Level 1–3), Confined Space Entry, Gas Testing, Rigging Supervisor, BOSIET, HUET, OISD-STD-154, Equipment Operator Licences, Scaffolding Supervisor |
| Worker Categories           | [COMPANY_NAME] employees, embedded contractors, subcontractors, visitors requiring site induction                                                                                          |
| Integration                 | PTW system (M3), HR/HRIS, training provider records, DGMS competency register                                                                                                              |
| Languages                   | English (primary), Hindi                                                                                                                                                                   |
| Compliance References       | DGMS Metalliferous Mines Regulations, OISD-STD-154, OISD-STD-116, PESO licensing requirements, PNGRB Act 2006                                                                              |
| Currency Format             | Rs. Indian Rupee — Lakhs (L) and Crores (Cr)                                                                                                                                               |
| Demo Financial Period       | FY 2024–25 (Apr 2024 – Mar 2025)                                                                                                                                                           |

---

## Module Pages & Navigation Structure

```
M6 — Workforce & Training Compliance Management
│
├── [Page 1]  Module Dashboard / Overview              ← Landing page for M6
│             (KPIs, compliance rate donut, expiry forecast, alert panel)
│
├── [Page 2]  6.1  Certification & Training Deadline Tracking
│             (Qualification register, expiry alerts, 90-day forecast, block list)
│
├── [Page 3]  6.2  Onboarding & Competency Documentation
│             (Role-specific onboarding plan, milestone tracker, induction sign-offs)
│
└── [Page 4]  6.3  Crew Qualification Verification for Permit Issuance
              (PTW qualification gate, per-worker cert check, substitute workflow)
```

---

## Page 1 — Module Dashboard (M6 Overview)

### Purpose

The landing screen for Module 6. Provides a full operational view of workforce qualification health — overall compliance rate, workers with gaps, certifications expiring in the next 90 days, and onboarding progress for new hires — giving HSE and HR managers immediate visibility without needing to run a report.

### Layout

- **Top Stats Bar** (4 KPI cards across)
- **Centre Left:** Compliance rate donut chart (fully compliant vs expiring vs expired)
- **Centre Right:** 90-day expiry forecast — bar chart showing how many certificates expire each month
- **Bottom:** Alert panel (overdue expirations + pending onboarding milestones) + quick-access tiles to 6.1 → 6.3

### KPI Cards (Top Stats Bar)

| Card                              | Metric                                             | Mock Value | Color                          |
| --------------------------------- | -------------------------------------------------- | ---------- | ------------------------------ |
| Workforce Compliance Rate         | % of total workforce with all certs current        | 94.4%      | Success Teal #0F7B6C           |
| Certifications Expiring (30 Days) | Count of certs due to expire within 30 days        | 5          | Gold #C8922A (pulsing)         |
| Workers Currently Blocked         | Workers with at least one lapsed mandatory cert    | 3          | Danger Coral #C0392B (pulsing) |
| Onboardings In Progress           | New hires / contractors with open onboarding plans | 2          | Accent Blue #1A6B8A            |

### Compliance Rate Donut Chart

Recharts donut showing workforce breakdown by qualification status:

| Category                  | Mock Count | %     | Color   |
| ------------------------- | ---------- | ----- | ------- |
| Fully Compliant           | 134        | 94.4% | #0F7B6C |
| Expiring Within 30 Days   | 5          | 3.5%  | #C8922A |
| Already Expired — Blocked | 3          | 2.1%  | #C0392B |

### 90-Day Expiry Forecast Bar Chart

Recharts BarChart — one bar per month showing the number of certificates due to expire:

| Month         | Certs Expiring | Color   |
| ------------- | -------------- | ------- |
| November 2025 | 8              | #C8922A |
| December 2025 | 5              | #1A6B8A |
| January 2026  | 11             | #C0392B |

### Alert Panel (Bottom Left)

Three alert rows:

- **BLOCKED (3 workers):** Vijay Singh — Well Control Level 1 expired 21 Oct · Suresh Kumar — BOSIET expired 02 Nov · Deepak Arora — Gas Testing Level 2 expired 29 Oct
- **EXPIRING IN 7 DAYS (2 workers):** Ramesh Nair — H2S Awareness expires 14 Nov · Meena Sharma — First Aid expires 17 Nov
- **ONBOARDING ALERT:** Arjun Mehta — 2/28 tasks complete · Day 3 of 30 · At risk if pace not maintained

### Sub-Module Quick Access Tiles (Bottom Row)

Three clickable tiles, each showing:

- Sub-module number + name
- One-line description
- Status indicator (Active / Idle)
- Key stat for today (certs flagged / onboardings active / permits checked today)

---

## Page 2 — Sub-Module 6.1: Certification & Training Deadline Tracking

### What It Is

A centralised qualification register that maintains the complete certification portfolio for every employee and contractor on site, fires automated alerts well ahead of every expiry, and enforces a hard block on permit access for anyone with a lapsed mandatory certificate — without requiring a supervisor to manually check.

### Certification Categories Tracked

| Category             | Example Certifications                                              | Renewal Frequency | Mandatory For                         |
| -------------------- | ------------------------------------------------------------------- | ----------------- | ------------------------------------- |
| Safety Awareness     | H2S Awareness, Fire Safety Awareness, PTW Awareness                 | Annual            | All site personnel                    |
| Emergency Response   | First Aid (St. John Ambulance), HUET, BOSIET                        | 2–3 years         | Offshore personnel + site supervisors |
| Well Operations      | Well Control Level 1, Level 2, Level 3 (IWCF/IADC)                  | 2 years           | Drilling crew, well supervisors       |
| Confined Space       | Confined Space Entry, Gas Testing Level 1 & 2                       | 1–2 years         | Maintenance, integrity personnel      |
| Lifting & Rigging    | Rigging Supervisor, Crane Operator Licence, Slingers                | 2–3 years         | Crane operators, rigging crew         |
| Statutory Licences   | DGMS Blasting Certificate, PESO Licence, Electrical Supervisor Cert | 3–5 years         | Role-specific statutory requirement   |
| Equipment Operations | Forklift Operator, MEWP Operator, Heavy Vehicle                     | 3 years           | Equipment operators                   |
| Environmental        | OISD-STD-154 Awareness, Oil Spill Response                          | Annual            | Environment, HSE personnel            |

### Alert Schedule

| Alert Type            | Trigger                                | Recipients                                      | Channel                                     |
| --------------------- | -------------------------------------- | ----------------------------------------------- | ------------------------------------------- |
| 60-Day Advance Notice | Certificate expires in exactly 60 days | Individual worker, direct supervisor            | In-app + email                              |
| 30-Day Alert          | Certificate expires in 30 days         | Individual worker, supervisor, HR               | In-app + email + SMS (optional)             |
| 7-Day Final Warning   | Certificate expires in 7 days          | Individual worker, supervisor, HR, Site Manager | In-app + email + SMS                        |
| Expiry Day Block      | Certificate expires today              | Site Manager, HSE Manager                       | In-app — hard block applied                 |
| Renewal Overdue       | Certificate already expired            | Site Manager, HSE Manager                       | Daily digest — pulsing alert until resolved |

### Page Layout

**Top Filter Bar:** Site filter | Department filter | Certification type filter | Status filter (All / Expiring / Expired / Current) | Search by name
**Main Table:** Employee qualification register — columns: Worker Name, Role, Department, Cert Name, Cert Body, Issue Date, Expiry Date, Days Remaining, Status Badge, Actions
**Status Badges:**

- `CURRENT` — Teal — cert valid, more than 30 days remaining
- `EXPIRING SOON` — Gold — cert expires within 30 days
- `CRITICAL` — Coral — cert expires within 7 days
- `EXPIRED — BLOCKED` — Red pulsing — cert lapsed; worker blocked from relevant permit types
  **Right Panel:** Worker cert detail card — opens on row click, showing full certification portfolio for the selected individual
  **Bottom:** \"Export Compliance Report\" button + \"Book Renewal\" shortcut + \"Schedule Training\" action + 90-day forecast toggle

### Mock Demo Data — Qualification Register

```
// WORKFORCE COMPLIANCE DASHBOARD — [COMPANY_NAME] | 04 Nov 2025
// Site: Rajasthan Block Operations Centre
// Total Personnel: 142 | Fully Compliant: 134 (94.4%) | With Gap: 8 (5.6%)

ALREADY EXPIRED — BLOCKED (3 personnel):
  Vijay Singh      Well Control Level 1   Expired: 21 Oct 2025  [BLOCKED: H2S ops + well work]
  Suresh Kumar     BOSIET                 Expired: 02 Nov 2025  [BLOCKED: offshore rotations]
  Deepak Arora     Gas Testing Level 2    Expired: 29 Oct 2025  [BLOCKED: confined space entry]

EXPIRING IN 7 DAYS (2 personnel):
  Ramesh Nair      H2S Awareness          Expires: 11 Nov 2025  [send reminder — 7 days]
  Meena Sharma     First Aid (St. John)   Expires: 14 Nov 2025  [send reminder — 10 days]

EXPIRING IN 8–30 DAYS (3 personnel):
  Suresh Kumar     Rigging Supervisor     Expires: 22 Nov 2025  [book renewal]
  Priya Menon      OISD-STD-154           Expires: 25 Nov 2025  [send reminder]
  Ravi Patel       Fire Safety Awareness  Expires: 30 Nov 2025  [send reminder]

// Renewal bookings triggered: 1 (Vijay Singh — Well Control scheduled 14 Nov)
// Training provider notified: IWCF Regional Centre, Mumbai
// Next monthly expiry forecast: 8 certs in Nov | 5 in Dec | 11 in Jan 2026
```

### Worker Detail Card (On Row Click — Vijay Singh)

```
WORKER PROFILE: Vijay Singh
Role: Field Technician | Department: Operations | Site: Rajasthan Pad A
Employee ID: EMP-0472 | Onboard Date: 12 Mar 2019

CERTIFICATION PORTFOLIO (8 mandatory certs for role):

  H2S Awareness         ✓ CURRENT   Issued: 04 Nov 2024  Expires: 03 Nov 2025  [EXPIRING SOON]
  Well Control Level 1  ✗ EXPIRED   Issued: 22 Oct 2021  Expired: 21 Oct 2025  [RENEWAL BOOKED: 14 Nov]
  First Aid (St. John)  ✓ CURRENT   Issued: 08 Jan 2025  Expires: 07 Jan 2027
  Confined Space Entry  ✓ CURRENT   Issued: 15 Mar 2024  Expires: 14 Mar 2026
  Gas Testing Level 1   ✓ CURRENT   Issued: 15 Mar 2024  Expires: 14 Mar 2026
  Fire Safety Awareness ✓ CURRENT   Issued: 02 Feb 2025  Expires: 01 Feb 2026
  PTW Awareness         ✓ CURRENT   Issued: 12 Mar 2024  Expires: 11 Mar 2026
  OISD-STD-154          ✓ CURRENT   Issued: 04 Nov 2024  Expires: 03 Nov 2025  [EXPIRING SOON]

PERMIT ACCESS STATUS:
  Blocked permit types: Hot Work (Well Ops), H2S Area Entry, Well Control Operations
  Accessible permit types: Cold Work, Confined Space (as entrant), Fire Watch

[Book Renewal]  [Send Reminder]  [Download Cert Portfolio]  [View Permit History]
```

### Compliance Block Logic

| Certification        | If Expired                                                    | Blocked Permit Types                                                    | Blocked Roles                              |
| -------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------ |
| Well Control Level 1 | Blocked from well operations and H2S area entry               | Hot Work (well area), Well Test Permits, Workover AFE execution         | Driller, Well Engineer, Tool Pusher        |
| Gas Testing Level 2  | Blocked from issuing or being named on confined space permits | Confined Space Entry (as gas tester), issuing PTW as responsible person | Gas Tester, PTW Issuer, Safety Officer     |
| BOSIET               | Blocked from offshore rotations                               | Offshore Helicopter Travel Clearance                                    | All offshore-rotation personnel            |
| H2S Awareness        | Blocked from H2S-designated areas                             | Any permit in H2S-rated zones                                           | All personnel in H2S areas                 |
| First Aid            | Blocked from lone-worker deployments and remote operations    | Remote Location Work Permit, Lone Worker Clearance                      | All personnel requiring lone-worker status |

### Key UI Elements

- **Pulsing red row** — expired cert rows pulse every 2 seconds to prevent visual dismissal
- **Bulk reminder action** — select multiple expiring workers and send group reminders in one click
- **Training provider shortcut** — \"Book Renewal\" pre-populates a booking request with the worker's name, cert type, and site
- **Compliance rate sparkline** — mini trend chart showing site compliance rate over the last 6 months
- **Export to PDF** — one-click site compliance snapshot for regulatory inspection or management review

### Why It Matters

In [MARKET / REGION]'s upstream operations, the DGMS and OISD both carry provisions for regulatory action against operators whose deployed personnel hold lapsed mandatory certifications. Beyond regulatory exposure, deploying an unqualified worker creates direct civil and criminal liability in the event of a serious incident. The current reality — managed via shared spreadsheets updated irregularly — means that compliance is unknown until someone manually checks. [PROJECT_NAME] converts this from a periodic manual review into a continuous, automated compliance state.

---

## Page 3 — Sub-Module 6.2: Onboarding & Competency Documentation

### What It Is

An AI-assisted onboarding system that generates a role-specific, time-bound competency plan for every new hire and contractor, tracks completion of each milestone, flags at-risk onboardings before the first day of unsupervised work, and provides a documented record of every induction event — reducing time-to-readiness and eliminating the inconsistency of ad hoc onboarding.

### Onboarding Plan Parameters

| Parameter               | Description                                              | Mock Example                      |
| ----------------------- | -------------------------------------------------------- | --------------------------------- |
| `onboarding_id`         | Unique onboarding reference                              | ONB-2025-0047                     |
| `worker_name`           | New hire or contractor name                              | Arjun Mehta                       |
| `role`                  | Assigned role on site                                    | Assistant Drilling Engineer       |
| `start_date`            | First day on site                                        | 04 Nov 2025                       |
| `target_readiness_date` | Target date for full unsupervised operational clearance  | 04 Dec 2025                       |
| `onboarding_type`       | New hire / contractor / role-transfer / return-to-site   | New hire                          |
| `site`                  | Assigned site                                            | Rajasthan Block Operations Centre |
| `buddy_assigned`        | Named buddy for Week 1 familiarisation                   | Sushant Verma                     |
| `supervisor`            | Responsible line manager                                 | Anand Sharma                      |
| `total_tasks`           | Total onboarding milestones in the plan                  | 28                                |
| `tasks_complete`        | Milestones completed to date                             | 2                                 |
| `completion_percentage` | % of plan completed                                      | 7.1%                              |
| `on_track`              | System-assessed readiness trajectory                     | At Risk (pace below target)       |
| `alert_threshold`       | % complete by Day 10 required before manager alert fires | 60%                               |

### Onboarding Plan Structure

| Week                | Milestone Category                                  | Example Tasks                                                                                                         |
| ------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Week 1 (Days 1–5)   | Site induction, emergency procedures, system access | Site security induction, emergency muster drill, badge issuance, H2S briefing, email + DMS access, buddy allocation   |
| Week 2 (Days 6–10)  | Safety training, equipment familiarisation          | OISD-STD-154 training, driller's cabin familiarisation, H2S monitor calibration session, PTW system orientation       |
| Week 3 (Days 11–20) | Operational familiarisation, shadow shifts          | Shadow well test with Rajesh Kumar, attend daily drilling review × 5, complete MOC procedure training                 |
| Week 4 (Days 21–30) | Competency sign-offs, mandatory certs               | Well Control Level 1 enrolment, complete Confined Space Entry cert, supervisor sign-off on independent task readiness |

### AI-Generated Onboarding Content

| Content Item                  | Description                                                                                         | Generated From                                     |
| ----------------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| Role-specific task list       | 25–35 milestones tailored to the role, site, and applicable regulations                             | Role template library + site-specific requirements |
| Site induction materials      | Day 1 pack: emergency exits, muster points, site rules, H2S protocols, contact list                 | Site template + [COMPANY_NAME] induction standard  |
| JSA awareness briefing        | Role-specific safety orientation covering the primary hazards for the assigned work area            | Job type + hazard register for the site            |
| Competency checklist          | Behavioural and technical competency items for the role, drawn from OISD-154 and internal standards | Role + OISD-STD-154 competency framework           |
| Mandatory cert enrolment list | Pre-populated list of certifications required for the role with suggested booking dates             | Role requirements matrix + cert renewal schedule   |

### Page Layout

**Top Summary Bar:** Active onboardings (2) | Avg completion rate (61%) | On Track (1) | At Risk (1) | Completed this month (3)
**Main Area (Left 35%):** Onboarding list — all active and recent onboarding plans with worker name, role, start date, completion %, and on-track status badge
**Main Area (Right 65%):** Onboarding plan detail — opens on list row click; shows the full milestone tracker as a checklist grouped by week, with completion toggles and due dates
**Top of Plan Detail:** Worker name + role + readiness date + buddy + supervisor + completion progress bar
**Bottom:** \"Generate Induction Pack\" button + \"Send Reminder to Buddy\" button + \"Mark Ready for Unsupervised Work\" button (requires supervisor sign-off)

### Mock Demo Data — Active Onboarding Plan

```
// NEW HIRE ONBOARDING: Arjun Mehta | Asst. Drilling Engineer | Start: 04 Nov 2025
// Onboarding ID: ONB-2025-0047 | Target Readiness: 04 Dec 2025
// Buddy: Sushant Verma | Supervisor: Anand Sharma | Tasks: 2/28 complete

WEEK 1 (Days 1–5) — Target complete by 08 Nov:
  ✓ Site security induction & ID badge         Completed: 04 Nov 2025  Anand Sharma
  ✓ Emergency mustering drill & assembly points Completed: 04 Nov 2025  Priya Menon
  ⏳ OISD-STD-154 awareness training            Due: 06 Nov | [Book now — 1 slot available]
  ⏸ Driller's cabin familiarisation            Due: 07 Nov | Buddy: Sushant Verma
  ⏸ H2S monitor calibration training           Due: 08 Nov | [Book now]
  ⏸ PTW system orientation (read access)       Due: 08 Nov | IT access request raised

WEEK 2 (Days 6–10) — Target complete by 14 Nov:
  ⏸ Shadow well test (with Rajesh Kumar)        Due: 10 Nov | Scheduled 10 Nov 08:00
  ⏸ Attend daily drilling review × 5           Due: 14 Nov | Ongoing
  ⏸ MOC procedure training (online)            Due: 13 Nov | [Assign module]
  ⏸ ERP (SAP) system orientation               Due: 12 Nov | IT ticket: #SAP-0891

WEEKS 3–4: [14 more milestones] | Mandatory certs: [6 enrolments required]

// ALERT: Pace below target — 2/28 tasks done by Day 3 (expected 5)
// Manager alert sent to Anand Sharma: 04 Nov 22:00 IST
// At-risk flag: if <60% complete by Day 10, escalate to Site Manager
```

### Competency Sign-Off Framework

| Competency Level | Description                                            | Who Signs Off                | Evidence Required            |
| ---------------- | ------------------------------------------------------ | ---------------------------- | ---------------------------- |
| Awareness        | Has attended the relevant briefing or training         | Supervisor acknowledgement   | Attendance record            |
| Understanding    | Can explain the procedure or requirement correctly     | Supervisor verbal assessment | Assessment note on file      |
| Competent        | Has performed the task correctly under supervision     | Supervisor sign-off          | Observed task record         |
| Independent      | Can perform the task independently without supervision | Line Manager final clearance | Competency sign-off form     |
| Supervisor       | Can supervise others performing the task               | Department Head sign-off     | Formal competency assessment |

### Induction Pack Generator

On clicking \"Generate Induction Pack\" for a new hire:

```
// GENERATED: Induction Pack — Arjun Mehta | 04 Nov 2025
// Role: Assistant Drilling Engineer | Site: Rajasthan Block Ops Centre

PACK CONTENTS (auto-compiled in 47 seconds):
  1. Welcome letter + site contact list
  2. Site map + muster point locations + evacuation routes
  3. Emergency procedures summary (H2S, fire, medical, spill)
  4. PTW awareness guide (as entrant — first 30 days)
  5. Role-specific hazard awareness briefing (7 pages — AI-generated)
  6. Code of conduct + site rules
  7. Training schedule — weeks 1–4 with booking links
  8. Buddy allocation notice — Sushant Verma, Ext. 4412
  9. IT access request confirmation (DMS, ERP, email)
  10. Certification requirements list + provisional booking schedule

// Pack format: PDF, 34 pages | Download or email to Arjun Mehta
// Generated in: 00:00:47 | All content: [COMPANY_NAME] approved templates
```

### Key UI Elements

- **Milestone completion toggle** — each task has a checkbox; on completion, the supervisor confirms sign-off and timestamps are auto-logged
- **At-risk flag** — plan cards with pace below target display an amber \"At Risk\" badge that pulses until manager acknowledges
- **Buddy assignment panel** — buddy receives in-app notifications for each milestone they are responsible for
- **Week-by-week progress bar** — visual heat map of completion across the four onboarding weeks
- **Competency matrix view** — toggles from task list to a role competency grid, showing attainment level per competency area

### Why It Matters

The first 90 days of a new employee's time on an energy operation site carry disproportionately high incident risk. A structured, documented onboarding process with tracked milestones is among the most evidence-based risk reduction measures available to an operator. When onboarding plans are generated automatically rather than assembled informally for each new hire, the quality and consistency of the process improves across all sites and supervisors — and the documented record exists to demonstrate due diligence if an early-tenure incident is ever investigated.

---

## Page 4 — Sub-Module 6.3: Crew Qualification Verification for Permit Issuance

### What It Is

A real-time qualification gate integrated directly into the permit-to-work system (M3) that verifies all named personnel hold current, valid certifications for the permit type before issuance can proceed — making it structurally impossible to issue a permit to an unqualified crew without the system detecting and blocking it.

### Permit-Type Qualification Matrix

| Permit Type             | Required Certifications (All Named Personnel)             | Required Certifications (Issuing Supervisor)                     |
| ----------------------- | --------------------------------------------------------- | ---------------------------------------------------------------- |
| Hot Work                | H2S Awareness, Fire Safety Awareness, PTW Awareness       | Well Control Level 1 (if near well area), Fire Warden cert       |
| Confined Space Entry    | Confined Space Entry cert, Gas Testing Level 1 (entrants) | Gas Testing Level 2 (gas tester), Confined Space Supervisor cert |
| H2S Area Entry          | H2S Awareness, PTW Awareness                              | H2S Area Supervisor cert, Gas Testing Level 1                    |
| Well Control Operations | Well Control Level 1 (minimum), OISD-STD-154              | Well Control Level 2 or above                                    |
| Electrical Isolation    | Electrical Safety Awareness                               | Electrical Supervisor Licence (PESO)                             |
| Working at Height       | Working at Height Awareness                               | Rope Access or Scaffold Supervisor cert (if applicable)          |
| Excavation              | Ground Disturbance Awareness                              | Civil Supervisor sign-off                                        |
| Offshore Helicopter     | BOSIET (or HUET renewal), Sea Survival                    | Offshore Logistics Coordinator clearance                         |

### Verification Logic Per Permit

| Verification Step          | Description                                                                                                           | Output                                                              |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Worker name entry          | Supervisor types or selects worker name on PTW form                                                                   | System looks up worker ID in qualification register                 |
| Cert check per permit type | System compares each named worker's active certs against the permit-type matrix                                       | Pass / Fail per worker per required cert                            |
| Confidence flag            | Cert expiry within 7 days of permit end date is flagged as marginal — advisory only                                   | Advisory warning (does not block)                                   |
| Hard block trigger         | Any named worker fails one or more required certs                                                                     | Permit cannot be confirmed; block screen shown                      |
| Substitute workflow        | Supervisor selects a replacement worker inline                                                                        | System checks replacement worker immediately and re-runs all checks |
| Audit log                  | Every qualification check event is logged — who checked, which workers, which certs, result, and final permit outcome | Immutable log entry created regardless of outcome                   |

### Page Layout

**Integration Point:** This sub-module renders as a panel within the PTW issuance flow (M3.2), not as a standalone screen. It activates automatically when personnel are added to a permit form.
**Qualification Check Panel (Within PTW Form):**

- Worker name input field with auto-complete from the employee register
- Per-worker cert status table — one row per worker, one column per required cert, ✓ or ✗ per cell
- Block overlay — if any ✗ is present, a red overlay on the Submit button with the specific gap displayed
- Substitute worker field — appears inline when a block is triggered; checking a replacement runs verification immediately
  **Audit Log Entry (Bottom of Panel):**
- Timestamp, permit type, all workers checked, cert results, final outcome
- Read-only — cannot be edited or deleted after creation

### Mock Demo Data — Qualification Check: Confined Space Entry

```
// PTW INITIATION: Confined Space Entry — Storage Tank T-04 | 11:30 IST 04 Nov 2025
// Permit type: Confined Space Entry | Issuer: Priya Menon (HSE Manager)
// Workers named: Vijay Singh, Ramesh Nair, Deepak Arora

QUALIFICATION CHECK — REQUIRED CERTS FOR CONFINED SPACE ENTRY:
  Confined Space Entry  |  Gas Testing Level 2 (for gas tester)  |  H2S Awareness

RESULTS:
  Vijay Singh    Confined Space Entry   ✓ CURRENT  (exp. 14 Mar 2026)
                 Gas Testing Level 1    ✓ CURRENT  (exp. 14 Mar 2026)
                 H2S Awareness          ✗ EXPIRING  (exp. 11 Nov 2025 — 7 days) [advisory]

  Ramesh Nair    Confined Space Entry   ✓ CURRENT  (exp. 20 Aug 2026)
                 Gas Testing Level 2    ✗ EXPIRED   (expired 29 Oct 2025)
                 H2S Awareness          ✓ CURRENT  (exp. 11 Nov 2025)

  Deepak Arora   Confined Space Entry   ✓ CURRENT  (exp. 08 Dec 2025)
                 Gas Testing Level 2    ✓ CURRENT  (exp. 18 Feb 2026)
                 H2S Awareness          ✓ CURRENT  (exp. 25 Mar 2026)

!! PERMIT BLOCKED:
   Ramesh Nair — Gas Testing Level 2 expired 29 Oct 2025
   Required: Current Gas Testing Level 2 for named gas tester role in Confined Space Entry.
   Action: Replace Ramesh Nair with a currently qualified gas tester, or Nair must complete renewal first.

// SUBSTITUTE WORKER SELECTED: Suresh Kumar
// CHECKING: Suresh Kumar — Gas Testing Level 2...
// RESULT: ✓ CURRENT (exp. 14 Sep 2026)
// All workers now qualified — permit cleared to proceed.

// AUDIT LOG ENTRY:
   PTW check at 11:30 IST — Vijay Singh ✓, Ramesh Nair ✗ (Gas Testing L2 expired),
   Deepak Arora ✓ — block applied. Substitute Suresh Kumar ✓ — block resolved.
   Permit PTW-2025-1163 issued at 11:34 IST by Priya Menon.
```

### Advisory vs Hard Block Rules

| Rule                | Trigger                                                                       | System Response                                                                                   |
| ------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Hard block          | Named worker has a mandatory cert that is expired                             | Red block overlay on Submit — cannot proceed without substitution or renewal                      |
| Advisory warning    | Named worker's cert expires within 7 days of permit end date                  | Amber advisory — permit can proceed; supervisor acknowledges the warning                          |
| Near-expiry flag    | Cert expires within 30 days — not related to permit end date                  | Informational flag on worker row — no block, visible for awareness                                |
| Supervisor cert gap | Issuing supervisor lacks a required supervisory cert                          | Hard block — more severe than worker gap; displayed at top of check panel                         |
| Role mismatch       | Worker is assigned to a function (e.g. gas tester) requiring a cert they lack | Hard block specific to that function — substitute required for the function, not the whole permit |

### Substitute Workflow Detail

| Step | Action                                                                                    | System            |
| ---- | ----------------------------------------------------------------------------------------- | ----------------- |
| 1    | Block triggered — reason displayed with expired cert name and expiry date                 | Automatic         |
| 2    | Supervisor clicks \"Add substitute\" inline on the blocked worker row                     | Supervisor action |
| 3    | New worker name entered — auto-complete from employee register                            | Supervisor action |
| 4    | System runs qualification check on the substitute immediately                             | Automatic         |
| 5a   | Substitute passes — block resolved, permit can proceed                                    | Permit unblocked  |
| 5b   | Substitute also fails — second block displayed; repeat from Step 2                        | Automatic         |
| 6    | Substitution event logged — original worker, reason, substitute worker, all check results | Automatic         |

### Key UI Elements

- **Inline cert check** — qualification panel appears within the PTW form in real time as each worker is added; no separate screen required
- **Red block overlay** — when a block is triggered, the Submit button is visually replaced by a red \"PERMIT BLOCKED\" banner describing the gap
- **One-click cert view** — clicking a ✗ cell opens the full cert record for that worker, showing expiry date, issuing body, and renewal status
- **Audit trail append** — every check, block, substitution, and permit outcome is appended to the qualification audit log with timestamps
- **Manager escalation** — if a block cannot be resolved within 15 minutes (no qualified substitute available), an escalation alert is sent to the Site Manager

### Why It Matters

The permit-to-work system is the last formal safety barrier before a hazardous task begins in [MARKET / REGION]'s upstream operations. When that barrier can be bypassed — because a supervisor does not know a worker's certificate lapsed, or because time pressure makes a verbal check feel sufficient — the system provides a false sense of security. Hard integration between the PTW and the qualification register makes non-compliance structurally impossible rather than merely inadvisable. It also creates a documented record, for every single permit issued, that all named personnel were checked and confirmed qualified — which is exactly the evidence that matters in the event of a serious incident investigation.

---

## Complete Module 6 — Master Parameter Reference

### All Data Fields Across M6

| Field Name                 | Type       | Sub-module    | Description                                                       |
| -------------------------- | ---------- | ------------- | ----------------------------------------------------------------- |
| `worker_id`                | String     | 6.1, 6.2, 6.3 | Unique identifier for each employee or contractor                 |
| `worker_name`              | String     | 6.1, 6.2, 6.3 | Full name of the worker                                           |
| `worker_role`              | String     | 6.1, 6.2, 6.3 | Assigned role on site                                             |
| `worker_type`              | Enum       | 6.1, 6.2      | Employee / Contractor / Subcontractor / Visitor                   |
| `department`               | String     | 6.1, 6.2      | Assigned department or crew                                       |
| `site`                     | String     | 6.1, 6.2, 6.3 | Assigned operational site                                         |
| `cert_id`                  | String     | 6.1           | Unique identifier for a specific certificate record               |
| `cert_name`                | String     | 6.1, 6.3      | Name of the certification                                         |
| `cert_body`                | String     | 6.1           | Issuing body (IWCF, St. John Ambulance, DGMS, etc.)               |
| `cert_issue_date`          | Date       | 6.1           | Date the certificate was issued                                   |
| `cert_expiry_date`         | Date       | 6.1, 6.3      | Date the certificate expires                                      |
| `cert_status`              | Enum       | 6.1, 6.3      | Current / Expiring Soon / Critical / Expired — Blocked            |
| `days_to_expiry`           | Number     | 6.1, 6.3      | Days remaining until certificate expiry                           |
| `renewal_booked`           | Boolean    | 6.1           | Whether a renewal course is booked                                |
| `renewal_date`             | Date       | 6.1           | Date of the booked renewal training                               |
| `renewal_provider`         | String     | 6.1           | Training provider for the renewal                                 |
| `block_status`             | Boolean    | 6.1, 6.3      | Whether the worker is currently blocked from permit-relevant work |
| `blocked_permit_types`     | Array      | 6.1, 6.3      | List of permit types from which the worker is blocked             |
| `alert_60_sent`            | Boolean    | 6.1           | Whether the 60-day alert has been sent                            |
| `alert_30_sent`            | Boolean    | 6.1           | Whether the 30-day alert has been sent                            |
| `alert_7_sent`             | Boolean    | 6.1           | Whether the 7-day alert has been sent                             |
| `onboarding_id`            | String     | 6.2           | Unique reference for the onboarding plan                          |
| `onboarding_type`          | Enum       | 6.2           | New hire / Contractor / Role transfer / Return to site            |
| `start_date`               | Date       | 6.2           | Worker's first day on site                                        |
| `target_readiness_date`    | Date       | 6.2           | Date by which the worker should be cleared for independent work   |
| `buddy_assigned`           | String     | 6.2           | Name of the assigned buddy for Week 1                             |
| `supervisor`               | String     | 6.2           | Name of the line manager responsible for sign-off                 |
| `total_tasks`              | Number     | 6.2           | Total milestones in the onboarding plan                           |
| `tasks_complete`           | Number     | 6.2           | Milestones completed                                              |
| `completion_percentage`    | Number (%) | 6.2           | % of plan completed                                               |
| `on_track_status`          | Enum       | 6.2           | On Track / At Risk / Overdue / Complete                           |
| `task_id`                  | String     | 6.2           | Unique identifier for a specific onboarding milestone             |
| `task_name`                | String     | 6.2           | Description of the onboarding milestone                           |
| `task_due_date`            | Date       | 6.2           | Target completion date for the milestone                          |
| `task_completed_date`      | Date       | 6.2           | Actual completion date (null if incomplete)                       |
| `task_signed_off_by`       | String     | 6.2           | Name of the person who signed off the task                        |
| `competency_level`         | Enum       | 6.2           | Awareness / Understanding / Competent / Independent / Supervisor  |
| `induction_pack_generated` | Boolean    | 6.2           | Whether an induction pack has been generated                      |
| `ptw_check_id`             | String     | 6.3           | Unique identifier for a PTW qualification check event             |
| `ptw_id`                   | String     | 6.3           | Permit-to-work ID being checked                                   |
| `permit_type`              | Enum       | 6.3           | Hot Work / Confined Space Entry / Electrical Isolation / etc.     |
| `check_timestamp`          | DateTime   | 6.3           | When the qualification check was performed                        |
| `check_result`             | Enum       | 6.3           | Pass / Blocked / Blocked — Resolved                               |
| `block_reason`             | Text       | 6.3           | Description of the cert gap that triggered the block              |
| `blocked_worker_id`        | String     | 6.3           | Worker ID of the blocked individual                               |
| `substitute_worker_id`     | String     | 6.3           | Worker ID of the substitute (if substitution occurred)            |
| `substitute_check_result`  | Enum       | 6.3           | Pass / Fail (for substitute worker)                               |
| `issuer_id`                | String     | 6.3           | Worker ID of the permit issuer (supervisor)                       |
| `issuer_cert_check_result` | Enum       | 6.3           | Pass / Fail for the issuing supervisor's own certs                |
| `permit_final_outcome`     | Enum       | 6.3           | Issued / Blocked — Not Issued / Issued After Substitution         |

---

## Mock Data Constants (Demo-Ready)

### Demo Workforce Profile

```
Operator:             [COMPANY_NAME]
Site:                 Rajasthan Block Operations Centre
Total Personnel:      142 (94 employees, 41 contractors, 7 subcontractors)
Fully Compliant:      134 (94.4%)
With Gaps:            8 (5.6%)
Certifications Tracked: 847 active cert records across 142 workers
Active Onboardings:   2
Completed Onboardings (this month): 3
Permits Issued (MTD): 147
Qualification Blocks (MTD): 4
```

### Demo Personnel (Workforce & HR Context)

```
Anand Sharma       — VP Operations (receives workforce compliance alerts + escalations)
Priya Menon        — HSE Manager (primary owner of qualification compliance + PTW gate)
Sushant Verma      — Drilling Superintendent (buddy for Arjun Mehta's onboarding)
Arjun Mehta        — Asst. Drilling Engineer (new hire — active onboarding ONB-2025-0047)
Vijay Singh        — Field Technician (Well Control Level 1 expired — currently blocked)
Ramesh Nair        — Senior Technician (H2S Awareness expiring 11 Nov 2025)
Suresh Kumar       — Field Technician (BOSIET expired — blocked from offshore rotations)
Deepak Arora       — Field Technician (Gas Testing Level 2 expired — blocked from confined space)
Meena Sharma       — Environment Officer (First Aid expiring 14 Nov 2025)
```

### Demo Certification Events (Active)

```
EXPIRED (current demo state):
  Vijay Singh      Well Control Level 1    Expired: 21 Oct 2025  Renewal: 14 Nov 2025
  Suresh Kumar     BOSIET                  Expired: 02 Nov 2025  Renewal: TBC
  Deepak Arora     Gas Testing Level 2     Expired: 29 Oct 2025  Renewal: TBC

EXPIRING WITHIN 7 DAYS:
  Ramesh Nair      H2S Awareness           Expires: 11 Nov 2025
  Meena Sharma     First Aid (St. John)    Expires: 14 Nov 2025

RECENTLY RENEWED (for contrast in demo):
  Rajesh Kumar     Well Control Level 2    Renewed: 01 Oct 2025  New Expiry: 30 Sep 2027
  Ravi Patel       Fire Safety Awareness   Renewed: 22 Oct 2025  New Expiry: 21 Oct 2026
  Priya Menon      Gas Testing Level 2     Renewed: 15 Sep 2025  New Expiry: 14 Sep 2027
```

### Demo PTW Qualification Blocks (MTD)

```
Block 1 (01 Nov):  Ramesh Nair — Confined Space Entry — Gas Testing L2 expired
                   Resolved: Suresh Kumar substituted — permit PTW-2025-1148 issued
Block 2 (03 Nov):  Vijay Singh — Hot Work (well area) — Well Control L1 expired
                   Not resolved: no qualified substitute available — permit not issued
Block 3 (04 Nov):  Deepak Arora — Confined Space Entry — Gas Testing L2 expired
                   Resolved: Priya Menon named as gas tester — permit PTW-2025-1163 issued
Block 4 (04 Nov):  Suresh Kumar — Offshore Helicopter clearance — BOSIET expired
                   Not resolved: offshore rotation postponed — logistics notified
```

### Demo Onboarding Cases

```
ONB-2025-0047  Arjun Mehta        Asst. Drilling Engineer   Start: 04 Nov  Status: At Risk (2/28)
ONB-2025-0048  Kavita Reddy       Environment Analyst       Start: 28 Oct  Status: On Track (14/24)
ONB-2025-0041  Prateek Joshi      Well Engineer (transfer)  Start: 14 Oct  Status: Complete (27/27)
ONB-2025-0038  Rajan Pillai       HSE Supervisor            Start: 01 Oct  Status: Complete (31/31)
```

---

## Demo Build Prompt for M6 Screen

```
Build a Workforce & Training Compliance Management screen for [PROJECT_NAME],
an AI operations platform for [MARKET / REGION] energy operators.

Clean light theme: Navy #0D1B2A primary, Accent Blue #1A6B8A section headers,
Gold #C8922A primary CTA, Teal #0F7B6C success states, Coral #C0392B critical alerts.
Card border: #D1D9E3. Background: #F5F6FA section fill. White cards.

Three sub-module tabs within M6: [6.1 Cert Tracking] [6.2 Onboarding] [6.3 PTW Gate]
Default view on 6.1 Cert Tracking.

Show:
(1) Top KPI bar: Workforce Compliance Rate (94.4% — teal), Certs Expiring 30 Days
    (5 — gold pulsing), Workers Currently Blocked (3 — coral pulsing),
    Onboardings In Progress (2 — accent blue)
(2) Top half: Recharts donut — Fully Compliant (134, teal), Expiring Soon (5, gold),
    Expired Blocked (3, coral). Legend on right of donut.
(3) Bottom half: two-column layout —
    Left: "Expiring in 30 Days" list — name, cert, expiry date, days remaining,
    "Send Reminder" button per row. Use Ramesh Nair, Meena Sharma, Deepak Arora,
    Suresh Kumar, Sushant Verma as sample rows.
    Right: "Already Expired — Action Required" list — red row styling with pulsing
    left border, name, cert, days overdue, "View Renewal" button. Vijay Singh,
    Suresh Kumar, Deepak Arora as sample rows.
(4) Bottom: Employee search field with placeholder "Search worker…"
    On clicking "Vijay Singh" from a dropdown result, display his full cert portfolio
    in a card (8 certs, 1 expired highlighted red, 2 expiring highlighted gold, rest teal).

Sub-module 6.2 tab shows:
    Active onboarding list (2 rows) with completion % and On Track / At Risk badge.
    Clicking Arjun Mehta's row expands a milestone tracker — week-by-week checklist
    with ✓, ⏳, ⏸ icons, task names, due dates, and responsible person.
    Progress bar at top: "2/28 milestones complete | Day 3 of 30 | At Risk".

Sub-module 6.3 tab shows:
    PTW qualification check panel. Pre-populated with PTW-2025-1163 (Confined Space).
    Three worker rows: Vijay Singh, Ramesh Nair, Deepak Arora.
    Show cert check grid: ✓ and ✗ per cell.
    Ramesh Nair Gas Testing L2 cell shows ✗ in coral.
    Red "PERMIT BLOCKED" overlay on the Submit button with reason text.
    Below: "Add substitute worker" field — type "Suresh Kumar" — show ✓ check —
    block clears — Submit button becomes gold and active.

Indian regulatory context — OISD, DGMS, PESO. Rs. currency. Dates: DD MMM YYYY.
JetBrains Mono for all numbers, cert codes, and timestamps. React + Tailwind + Recharts.
```

---

## Brand & Design Parameters for M6 UI

### Color Usage

| Element                 | Color                                          | Hex                                 |
| ----------------------- | ---------------------------------------------- | ----------------------------------- |
| Page background         | Light off-white                                | #F5F6FA                             |
| Card / panel background | White                                          | #FFFFFF                             |
| Primary brand           | Deep navy                                      | #0D1B2A                             |
| Section headers         | Accent blue                                    | #1A6B8A                             |
| Primary CTA             | Gold                                           | #C8922A                             |
| CTA background (light)  | Gold light                                     | #FDF3E3                             |
| Success / Teal          | Cert current, task complete                    | #0F7B6C                             |
| Success background      | Teal light                                     | #E3F4F2                             |
| Critical / Danger       | Expired cert, permit block, overdue onboarding | #C0392B (pulsing for active alerts) |
| Critical background     | Coral light                                    | #FDECEA                             |
| Advisory / Warning      | Expiring soon, at-risk onboarding              | #C8922A                             |
| Informational           | Near-expiry, passive flag                      | #1A6B8A                             |
| Card border             | Border grey                                    | #D1D9E3                             |
| Secondary text          | Muted grey                                     | #8892A0                             |

### Typography

| Use Case                                          | Font                                 |
| ------------------------------------------------- | ------------------------------------ |
| Module title, page heading                        | DM Serif Display or Playfair Display |
| Body text, labels, descriptions                   | DM Sans or Plus Jakarta Sans         |
| All numbers, cert codes, field values, timestamps | JetBrains Mono                       |

### Key Animations (Demo-Specific)

| Animation               | Where                      | Description                                                           |
| ----------------------- | -------------------------- | --------------------------------------------------------------------- |
| Pulsing coral border    | Expired cert rows in 6.1   | Left border pulses every 2 seconds until acknowledged                 |
| Pulsing KPI badge       | "Workers Blocked" KPI card | Badge pulses on page load until acknowledged                          |
| PTW block overlay       | 6.3 Submit button          | Red overlay fades in smoothly when a block is triggered               |
| Block resolve animation | 6.3 on substitute pass     | Coral overlay fades out; Submit button transitions to gold            |
| Cert check reveal       | 6.3 per-worker rows        | ✓/✗ results reveal sequentially (150ms delay per row) for demo impact |
| Milestone toggle        | 6.2 task checklist         | Smooth checkmark animation + timestamp reveal on completion           |
| Donut chart draw        | 6.1 compliance donut       | Segments draw in sequentially on tab load                             |
| At-risk badge pulse     | 6.2 onboarding list        | Amber "At Risk" badge pulses on row with below-pace completion        |

---

## Technical Integration Map for M6

| Sub-module        | External Systems / APIs                                                                 | Data Flow Direction                                                          |
| ----------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 6.1 Cert Tracking | HR/HRIS (employee records), Training provider records, DGMS competency register         | HR system → Cert register → Compliance dashboard                             |
| 6.1 Cert Tracking | Email / SMS / notification API                                                          | Alert → Worker + Supervisor + HR                                             |
| 6.2 Onboarding    | HR/HRIS (new hire records), LMS (Learning Management System), DMS (induction materials) | HR → Onboarding plan → Milestone tracker                                     |
| 6.2 Onboarding    | Email / notification API                                                                | Milestone alert → Buddy + Supervisor                                         |
| 6.3 PTW Gate      | M3.2 PTW issuance system (read/write)                                                   | PTW form → Qualification check → Block or proceed                            |
| 6.3 PTW Gate      | M6.1 Qualification register (read)                                                      | Qualification register → Cert check → PTW result                             |
| All M6            | M6 Audit log (write-once)                                                               | All cert events, blocks, substitutions, onboarding sign-offs → Immutable log |

---

## Summary: M6 at a Glance

| Item                 | Detail                                                                                                            |
| -------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Module               | M6 — Workforce & Training Compliance Management                                                                   |
| Sub-modules          | 3 (6.1 → 6.3)                                                                                                     |
| Total pages          | 4 (1 dashboard + 3 sub-module pages)                                                                              |
| Primary data objects | Certification records, onboarding plans, PTW qualification check events                                           |
| Regulations covered  | DGMS Metalliferous Mines Regulations · OISD-STD-154 · OISD-STD-116 · PESO Licensing                               |
| Key output           | Real-time compliance dashboard + proactive expiry alerts + PTW qualification gate + structured onboarding tracker |
| Demo focus           | Live PTW qualification block — unqualified worker blocked in 30 seconds; substitute cleared and permit issued     |
| Design tone          | Clean, professional dashboard — light theme, premium, compliance-grade                                            |
| Compliance           | OISD-STD-154 · DGMS Regulations · PESO requirements · PNGRB Act 2006                                              |
| Currency             | Rs. Indian Rupee — Lakhs (L) and Crores (Cr)                                                                      |
| Date format          | DD MMM YYYY                                                                                                       |
| Language             | English (Indian) — formal HSE and regulatory context                                                              |
| Market context       | [MARKET / REGION] upstream oil and gas operations                                                                 |

---

_[PROJECT_NAME] · Workforce & Training Compliance Module — M6 Build Guide_
_by [COMPANY_NAME] · [WEBSITE]_
_Version [VERSION] · [PUBLIC / INTERNAL / CONFIDENTIAL]_
