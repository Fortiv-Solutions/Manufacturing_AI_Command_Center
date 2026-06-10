# M8 — Customer Complaint & After-Sales Management

### Manufacturing AI Command Center · Fortiv Solutions · fortivsolutions.in

> **Module Tagline:** AI agents log, classify, route, and resolve every customer complaint through a fully automated ticket lifecycle — ensuring every complaint has an owner, a deadline, and a customer-visible resolution update, all without manual triage.

**Document Type:** Module Build Guide & Parameter Reference
**Module Code:** M8
**Total Sub-Modules:** 6 ( →
**Version:** 1.0
**Company:** Fortiv Solutions
**Classification:** Confidential
**Market:** India — Gujarat Focus (Ahmedabad, Rajkot, Vadodara, Surat)

---

## Module Overview

### Purpose

Replace the ad-hoc, reactive complaint handling process — scattered across WhatsApp chats, phone calls, and email threads — with an **autonomous complaint management engine** that captures every complaint from every channel, instantly classifies and routes it to the right team, tracks resolution against SLA timers, and keeps customers informed with proactive updates — so your quality and customer service teams shift from fire-fighting to root cause elimination.

### Core Problem Being Solved

| Pain Point            | Without M8                                            | With M8                                                     |
| --------------------- | ----------------------------------------------------- | ----------------------------------------------------------- |
| Complaint capture     | Missed calls, lost WhatsApp threads, informal logging | Every complaint captured from any channel within 60 seconds |
| Acknowledgement       | Customer waits hours or days for a response           | Personalised acknowledgement within 5 minutes, 24/7         |
| Classification        | Manual reading and sorting by a coordinator           | AI classifies defect type and severity in 6 seconds         |
| Routing               | Forwarded over WhatsApp to the right person           | Auto-routed to responsible team with SLA clock started      |
| Resolution tracking   | No system — complaints fall through the cracks        | Live SLA countdown per complaint, escalation if breached    |
| Customer updates      | Customer has to chase for status                      | Proactive status WhatsApp at every milestone                |
| Root cause closure    | NCR raised informally, rarely closed                  | CAPA auto-generated, tracked, and closure verified          |
| Management visibility | No data — complaints invisible to leadership          | Real-time analytics dashboard with cost and trend data      |

### Demo Wow Moment

**Customer sends a WhatsApp message with a defect photo → AI reads the message, classifies it as "Quality — Surface Defect — Major" in 6 seconds → complaint ticket created → QA team notified via WhatsApp → customer receives acknowledgement with reference number and 48-hour commitment — all before a human has touched the complaint.**

---

## Module-Level Parameters

| Parameter             | Value                                                                              |
| --------------------- | ---------------------------------------------------------------------------------- |
| Module ID             | M8                                                                                 |
| Module Name           | Customer Complaint & After-Sales Management                                        |
| Sub-module Count      | 6                                                                                  |
| Primary Output        | Complaint ticket → SLA-tracked resolution → CAPA → customer notification           |
| Primary Users         | QA Head, Customer Service Team, Production Head, MD                                |
| Intake Channels       | WhatsApp, Email, Phone (via M), Dealer Portal, Field Sales App                     |
| AI Classification     | NLP-based — defect taxonomy in 6 seconds                                           |
| SLA Levels            | Critical: 4hr response / 24hr resolution · Major: 8hr / 48hr · Minor: 24hr / 7-day |
| Systems Integrated    | WhatsApp Business API, ERP (batch traceability), M3 Quality module, Email, CRM     |
| Languages             | English, Hindi, Gujarati                                                           |
| Compliance            | ISO 9001:2015 · IATF 16949 · Consumer Protection Act 2019 · DPDP Act 2023          |
| Currency Format       | ₹ Indian Rupee — Lakhs (L) and Crores (Cr)                                         |
| Demo Financial Period | FY 2024–25 (Apr 2024 – Mar 2025)                                                   |

---

## Module Pages & Navigation Structure

```
M8 — Customer Complaint & After-Sales Management
│
├── [Page 1]  Module Dashboard / Overview              ← Landing page for M8
│             (Live complaint KPIs, SLA health, complaint feed, channel summary)
│
├── [Page]  Omnichannel Complaint Intake
│             (Unified inbox, channel breakdown, incoming complaint feed)
│
├── [Page]  AI Complaint Classification & Routing
│             (Classification panel, routing rules, SLA assignment, routing log)
│
├── [Page]  Customer Complaint Acknowledgement Agent
│             (Acknowledgement preview, delivery status, template manager)
│
├── [Page]  CAPA Tracking
│             (CAPA task board, root cause forms, closure verification, escalation log)
│
├── [Page]  Customer Resolution Communication Agent
│             (Update timeline per complaint, resolution templates, NPS collection)
│
└── [Page]  Complaint Analytics & Quality Intelligence
              (Trend charts, Pareto analysis, cost dashboard, management report)
```

---

## Page 1 — Module Dashboard (M8 Overview)

### Purpose

The landing screen for Module 8. Gives leadership and the quality team a real-time view of the complaint pipeline — how many are open, what SLA health looks like, which channels complaints are arriving from, and which complaint types are most common — all in one screen.

### Layout

- **Top Stats Bar** (5 KPI cards across)
- **Centre Left:** Live complaint inbox feed — most recent 8 complaints with status badges
- **Centre Right:** SLA health donut + complaint type Pareto bar chart
- **Bottom:** Channel breakdown tiles (WhatsApp / Email / Phone / Portal / Field) + quick navigation to each sub-module

### KPI Cards (Top Stats Bar)

| Card                | Metric                                          | Mock Value | Color                        |
| ------------------- | ----------------------------------------------- | ---------- | ---------------------------- |
| Open Complaints     | Total complaints not yet resolved               | 12         | Accent Blue #2E86AB          |
| SLA Breached        | Complaints past their resolution deadline       | 2          | Danger Red #D85A30 (pulsing) |
| Resolved This Week  | Complaints closed in the last 7 days            | 18         | Success Green #1D9E75        |
| Avg Resolution Time | Mean hours from intake to closure               | 31 hrs     | Warning Amber #E8A838        |
| Complaint Cost MTD  | Value of replacements + credit notes this month | ₹3.8L      | Deep Navy #1A3C5E            |

### Complaint Type Pareto (Bar Chart)

Recharts horizontal bar — complaint volume by type, sorted highest to lowest:

| Complaint Type                | Mock Count | Color   |
| ----------------------------- | ---------- | ------- |
| Quality — Surface Defect      | 8          | #D85A30 |
| Delivery — Short Shipment     | 5          | #E8A838 |
| Quality — Dimensional         | 4          | #D85A30 |
| Delivery — Late               | 3          | #E8A838 |
| Documentation — Wrong Invoice | 2          | #2E86AB |
| Packaging — Damaged           | 2          | #2E86AB |
| Service — Response Delay      | 1          | #9B9B9B |

### SLA Health Donut

Recharts donut — current open complaints by SLA status:

| SLA Status            | Mock Count | Color   |
| --------------------- | ---------- | ------- |
| Within SLA            | 8          | #1D9E75 |
| At Risk (<2 hrs left) | 2          | #E8A838 |
| SLA Breached          | 2          | #D85A30 |

### Channel Breakdown Tiles (Bottom Row)

Five tiles, each showing:

- Channel name + icon
- Complaints received today / this week
- Avg response time for channel
- Status (Active / Paused)

| Channel         | Today | This Week | Avg Response |
| --------------- | ----- | --------- | ------------ |
| WhatsApp        | 3     | 14        | 4 min        |
| Email           | 1     | 6         | 22 min       |
| Phone (via M7)  | 2     | 8         | 2 min        |
| Dealer Portal   | 0     | 3         | 8 min        |
| Field Sales App | 1     | 4         | 15 min       |

---

## Page 2 — Submodule: Omnichannel Complaint Intake

### What It Is

A unified complaint intake system that captures complaints from every channel — WhatsApp, email, phone (via M voice agent), dealer portal, and field sales reports — into a single complaint management system with a consistent ticket format, regardless of how the complaint arrived. The SLA clock starts from the moment of intake, irrespective of channel.

### Intake Channels & Processing

| Channel               | Intake Method                                  | AI Processing                                         | Response Time         |
| --------------------- | ---------------------------------------------- | ----------------------------------------------------- | --------------------- |
| WhatsApp Business     | Customer sends message / photo / voice note    | NLP reads complaint, extracts details, creates ticket | < 60 seconds          |
| Email                 | Complaint email to dedicated inbox             | AI reads email body + attachments, creates ticket     | < 5 minutes           |
| Phone — M Voice Agent | Caller logs complaint via voice dialogue       | M transfers structured data directly                  | Immediate on call end |
| Dealer Portal         | Web form submission                            | Form data maps directly to ticket fields              | Immediate on submit   |
| Field Sales App       | Sales rep logs complaint on behalf of customer | App form creates ticket with rep ID                   | < 5 minutes on submit |

### Ticket Fields (Unified Format Across All Channels)

| Field                   | Description                               | Mock Example                                                        |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------- |
| `complaint_id`          | Auto-generated reference number           | CMP-2024-441                                                        |
| `intake_channel`        | Source channel                            | WhatsApp                                                            |
| `intake_timestamp`      | Date and time complaint received          | 22 Jan 2025, 14:37:22                                               |
| `customer_name`         | Company name                              | Kapoor Industries Pvt. Ltd.                                         |
| `customer_contact`      | Contact name and mobile                   | Rajesh Mehta — +91 98XXX XXXXX                                      |
| `order_ref`             | Linked sales order or invoice             | SO-2024-4821 / INV-2024-4441                                        |
| `product_code`          | Item code of complained product           | MS-204                                                              |
| `batch_ref`             | Batch or lot number if available          | B-4821                                                              |
| `complaint_description` | Verbatim or AI-transcribed complaint text | "Surface has rust spots on 40 pieces from the last delivery"        |
| `defect_type`           | AI-classified type (after routing to )    | Quality — Surface Defect                                            |
| `severity`              | AI-assessed severity (after routing to )  | Major                                                               |
| `quantity_affected`     | Units complained about                    | 40 pieces                                                           |
| `media_attachments`     | Photos, videos, documents attached        | 3 photos (rust_spots_1.jpg, rust_spots_2.jpg, delivery_challan.pdf) |
| `sla_response_due`      | Deadline for first response               | 22 Jan 2025, 22:37 (8 hours — Major)                                |
| `sla_resolution_due`    | Deadline for closure                      | 24 Jan 2025, 14:37 (48 hours — Major)                               |
| `assigned_team`         | Team routed to                            | QA Team                                                             |
| `assigned_person`       | Specific assignee                         | Sunita Patel (QA Manager)                                           |
| `status`                | Current complaint status                  | Under Investigation                                                 |

### Intake Processing Logic (Per Channel)

**WhatsApp Intake:**

- Customer message received on WhatsApp Business number
- AI reads text, extracts: customer name (from registered number lookup), complaint description, product mentioned, order number if stated
- If photo/video attached: AI tags as "media attached — quality evidence"
- Ticket auto-created; customer receives acknowledgement within 5 minutes (handled by )

**Email Intake:**

- Email arrives at complaints@[company].in (dedicated inbox monitored by AI agent)
- AI extracts: sender name, company, subject line, complaint body, any attached PDFs (delivery challan, invoice)
- AI reads attached PDFs using OCR if needed — extracts order number, quantity, product
- Ticket created with all extracted fields populated

**Voice Agent Intake (M):**

- M collects: product, order number, defect description, quantity affected, customer's suggested resolution
- On call end, structured JSON passed directly to M8 intake → ticket created automatically
- No manual re-entry needed

### Page Layout

**Top:** Channel health banner — "Intake channels: 5 active | Today: 7 complaints received | Oldest unacknowledged: 0 hrs 14 min"
**Centre Left:** Unified inbox feed — chronological list of all complaints received today, with channel icon, customer name, and acknowledgement status
**Centre Right:** Channel volume chart — bar chart showing complaints by channel for last 7 days
**Bottom:** Media attachment gallery for selected complaint — shows attached photos with zoom capability

### Mock Demo Data — Incoming Complaints Feed (Today, 22 Jan)

| #   | Time  | Channel      | Customer           | Description (brief)                               | Status             |
| --- | ----- | ------------ | ------------------ | ------------------------------------------------- | ------------------ |
| 1   | 14:37 | 💬 WhatsApp  | Kapoor Industries  | "Rust spots on 40 pieces"                         | Acknowledged       |
| 2   | 13:22 | 📧 Email     | Tata AutoComp      | "Short delivery — 200 units missing from SO-4822" | Routed to Dispatch |
| 3   | 11:48 | 📞 Phone     | Maruti Ancillaries | "Wrong invoice number — GST mismatch"             | Under Resolution   |
| 4   | 10:15 | 🌐 Portal    | Bajaj Auto         | "Dimensional issue — shaft diameter out of spec"  | CAPA Raised        |
| 5   | 09:03 | 📱 Field App | Reliance Consumer  | "Packaging torn — 3 cartons damaged in transit"   | Resolved           |
| 6   | 08:44 | 💬 WhatsApp  | L&T Construction   | "Late delivery — 4 days overdue"                  | Escalated          |
| 7   | 07:31 | 📧 Email     | Godrej Precision   | "Material test certificate missing from delivery" | Acknowledged       |

### Key UI Elements

- **Channel icon badges** — colour-coded icons for each intake channel on complaint rows
- **Acknowledgement status dot** — pulsing amber if not yet acknowledged (past 5-minute SLA)
- **"Create Manual Ticket" button** — for complaints received via unmonitored channels (in-person visit, trade fair)
- **Media viewer panel** — click any complaint to expand photo attachments
- **Unread count badge** — tab shows count of complaints not yet actioned

---

## Page 3 — Submodule: AI Complaint Classification & Routing

### What It Is

An AI NLP agent that reads every new complaint ticket from , automatically classifies it into a defined defect taxonomy, assigns a severity level, maps it to a responsible team, sets the SLA clock, and sends routing notifications — within 6 seconds of ticket creation and without any manual triage.

### Classification Taxonomy

| Primary Category  | Sub-Categories                                                                                             |
| ----------------- | ---------------------------------------------------------------------------------------------------------- |
| Quality — Defects | Surface Finish · Dimensional · Material Property · Contamination · Functional Failure · Cosmetic           |
| Delivery          | Short Shipment · Late Delivery · Wrong Item Sent · Damaged in Transit · Delivery to Wrong Address          |
| Documentation     | Wrong Invoice · Missing Test Certificate · Incorrect Delivery Challan · GST Error · Wrong PO Reference     |
| Service           | Response Delay · Salesperson Behaviour · Communication Gap · Pricing Dispute · Return/Replacement Handling |
| Packaging         | Damaged Packaging · Wrong Labelling · Insufficient Packaging · Missing Barcode / Serial                    |

### Severity Scoring Matrix

| Severity    | Triggers                                                                                                                    | SLA — Response | SLA — Resolution         | Badge Color     |
| ----------- | --------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------------ | --------------- |
| Critical    | Production line stopped at customer site · Large value (>₹5L affected) · Safety-critical defect · Regulatory non-compliance | 4 hours        | 24 hours                 | #D85A30 Pulsing |
| Major       | Significant defect affecting >50 units · Delivery short by >20% · Customer production impacted                              | 8 hours        | 48 hours                 | #D85A30         |
| Minor       | Cosmetic defect · Small quantity (<20 units) · Documentation error with easy resolution · Packaging issue                   | 24 hours       | 7 days                   | #E8A838         |
| Information | Query rather than complaint · Requires clarification before classification                                                  | 2 hours        | N/A — reclassify on info | #2E86AB         |

### Routing Rules

| Complaint Category          | Assigned Team          | Team Lead Notified                |
| --------------------------- | ---------------------- | --------------------------------- |
| Quality — Any               | QA Team                | Sunita Patel (QA Manager)         |
| Delivery — Short Shipment   | Dispatch Manager       | Kavita Sharma (GM Operations)     |
| Delivery — Late             | Production + Dispatch  | Deepak Trivedi (Planning Manager) |
| Delivery — Wrong Item       | Dispatch + Sales Admin | Kavita Sharma                     |
| Documentation — Invoice/GST | Sales Admin / Finance  | Anita Kapoor (CFO)                |
| Documentation — Certificate | QA Team                | Sunita Patel (QA Manager)         |
| Service                     | Regional Sales Manager | Suresh Nair (Regional Sales Head) |
| Packaging                   | Dispatch / Stores      | Kavita Sharma (GM Operations)     |

### Classification Fields Per Complaint

| Field                       | Description                                            | Mock Example                                                                        |
| --------------------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| `classification_timestamp`  | When AI classification was completed                   | 22 Jan 2025, 14:37:28 (6 sec after intake)                                          |
| `primary_category`          | Top-level defect category                              | Quality                                                                             |
| `sub_category`              | Specific defect type                                   | Surface Finish                                                                      |
| `severity_score`            | AI-computed severity (Critical / Major / Minor / Info) | Major                                                                               |
| `severity_reasoning`        | Why this severity was assigned                         | "40 units affected, material received at customer site, production may be impacted" |
| `confidence_score`          | AI confidence in classification                        | 94%                                                                                 |
| `assigned_team`             | Team routed to                                         | QA Team                                                                             |
| `assigned_person`           | Primary responsible contact                            | Sunita Patel                                                                        |
| `sla_response_due`          | First response deadline                                | 22 Jan 2025, 22:37                                                                  |
| `sla_resolution_due`        | Resolution deadline                                    | 24 Jan 2025, 14:37                                                                  |
| `routing_notification_sent` | WhatsApp sent to assigned team                         | ✓ Sent — 14:37:30                                                                   |
| `escalation_path`           | Who gets notified if SLA is breached                   | QA Head → Production Head → MD                                                      |
| `linked_batch`              | Batch reference auto-pulled from ERP                   | B-4821                                                                              |
| `similar_complaints`        | Past complaints with same defect type                  | 2 similar complaints in last 90 days (CMP-2024-388, CMP-2024-402)                   |

### Routing WhatsApp Notification (Auto-sent to Assigned Team)

```
⚠️ NEW COMPLAINT ROUTED | CMP-2024-441
Severity: MAJOR | Category: Quality — Surface Finish

Customer: Kapoor Industries Pvt. Ltd.
Product: MS-204 | Qty Affected: 40 units
Complaint: "Surface has rust spots on 40 pieces from last delivery"
Order Ref: SO-2024-4821 | Batch: B-4821

Response SLA: By 10:37 PM today
Resolution SLA: By 24 Jan 2:37 PM

3 photos attached — view in M8 portal.
Similar complaints: 2 in last 90 days — check M8 CAPA history.

Assigned to: Sunita Patel (QA Team)
[View Complaint] [Acknowledge] [Escalate]
— Fortiv Manufacturing AI
```

### Page Layout

**Top:** Classification queue banner — "Complaints pending classification: 0 | Avg classification time today: 5.8 seconds"
**Centre Left:** Classification feed — all complaints with AI classification details, confidence score, and routing confirmation
**Centre Right:** Routing rules configuration panel — view and edit routing logic per category
**Bottom:** Classification accuracy log — complaints where routing was overridden manually (human feedback loop)

### Mock Demo Data — Classification Log (Last 7 Complaints)

| Complaint ID | Customer           | AI Classification                   | Severity | Confidence | Routed To             | Time  |
| ------------ | ------------------ | ----------------------------------- | -------- | ---------- | --------------------- | ----- |
| CMP-2024-441 | Kapoor Industries  | Quality — Surface Finish            | Major    | 94%        | QA Team               | 6 sec |
| CMP-2024-440 | Tata AutoComp      | Delivery — Short Shipment           | Major    | 98%        | Dispatch Manager      | 4 sec |
| CMP-2024-439 | Maruti Ancillaries | Documentation — GST Error           | Minor    | 91%        | Finance               | 7 sec |
| CMP-2024-438 | Bajaj Auto         | Quality — Dimensional               | Critical | 89%        | QA Team               | 8 sec |
| CMP-2024-437 | Reliance Consumer  | Packaging — Damaged                 | Minor    | 96%        | Dispatch / Stores     | 5 sec |
| CMP-2024-436 | L&T Construction   | Delivery — Late                     | Major    | 87%        | Production + Dispatch | 9 sec |
| CMP-2024-435 | Godrej Precision   | Documentation — Missing Certificate | Minor    | 93%        | QA Team               | 6 sec |

### Key UI Elements

- **Classification animation** — brief visual of AI reading complaint text, taxonomy tree populating, severity badge appearing
- **Confidence score bar** — coloured progress bar (green >90%, amber 75–90%, red <75%)
- **Manual override** — team can reclassify; override logged and used to retrain model
- **"Similar complaints" link** — one-click view of past complaints with same defect type
- **SLA countdown** — starts immediately on classification completion

---

## Page 4 — Submodule: Customer Complaint Acknowledgement Agent

### What It Is

An automated customer communication agent that sends an immediate, personalised acknowledgement to every complainant — confirming receipt, providing a reference number, naming the responsible team, and committing to a response timeline — within 5 minutes of ticket creation, regardless of time of day.

### Acknowledgement Fields (Per Complaint)

| Field                   | Description                                           | Mock Example                                                             |
| ----------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------ |
| `ack_timestamp`         | When acknowledgement was sent                         | 22 Jan 2025, 14:42:15                                                    |
| `ack_channel`           | Channel used for acknowledgement                      | WhatsApp (mirrors intake channel)                                        |
| `recipient_name`        | Customer contact name                                 | Rajesh Mehta                                                             |
| `complaint_ref`         | Reference number shared                               | CMP-2024-441                                                             |
| `complaint_summary`     | Brief restatement of complaint                        | "Surface defect reported on 40 pieces of MS-204 from delivery of 20 Jan" |
| `assigned_team_name`    | Team name (not individual to avoid dependency)        | QA Team                                                                  |
| `response_commitment`   | When customer will hear next                          | By 10:37 PM today (8-hour SLA)                                           |
| `resolution_commitment` | Full resolution commitment                            | By 24 Jan 2025, 2:37 PM                                                  |
| `apology_language`      | Tone calibration                                      | Formal apology for Major/Critical; acknowledgement for Minor             |
| `after_hours_flag`      | Whether complaint was received outside business hours | False (received at 14:37)                                                |
| `delivery_status`       | WhatsApp delivery confirmation                        | ✓ Delivered + Read — 14:42:58                                            |

### Acknowledgement Message Templates

**WhatsApp — Major Complaint (Business Hours)**

```
Dear Rajesh ji,

Thank you for contacting us regarding your recent delivery. We have registered your concern and sincerely apologise for the inconvenience caused.

📋 Complaint Reference: CMP-2024-441
🔍 Issue Noted: Surface defect on MS-204 — 40 pieces
👥 Assigned To: Our QA Team
⏰ You will receive an update by: 10:37 PM today

We take quality concerns very seriously and will revert with our findings within the committed time.

— Fortiv ManufactureSmart Customer Service
```

**WhatsApp — Critical Complaint (Any Hour)**

```
Dear [Name] ji,

We have received your complaint and understand this is impacting your operations. We sincerely apologise.

📋 Reference: CMP-2024-XXX
⚡ PRIORITY: Our QA Head has been notified immediately.
📞 Our team will call you within 4 hours.

We are treating this as our highest priority.

— Fortiv ManufactureSmart
```

**WhatsApp — After-Hours Receipt**

```
Dear [Name] ji,

Your complaint has been received (Ref: CMP-2024-XXX) and logged at [time].

Our team begins work at 8:00 AM tomorrow and will contact you by [time].

We apologise for the inconvenience and appreciate your patience.

— Fortiv ManufactureSmart Customer Service
```

**Email — Formal Acknowledgement (All Severities)**

```
Subject: Complaint Acknowledgement — Ref: CMP-2024-441 | Kapoor Industries

Dear Mr. Rajesh Mehta,

This is to acknowledge receipt of your complaint dated 22nd January 2025 regarding surface defects observed on our product MS-204 (40 pieces) from delivery against SO-2024-4821.

We have registered your complaint under Reference Number CMP-2024-441 and have assigned it to our Quality Assurance Team for immediate investigation.

Committed Response Timeline:
• Initial investigation update: By 10:37 PM, 22nd January 2025
• Full resolution: By 14:37, 24th January 2025

We take quality concerns very seriously and assure you that this matter will receive our complete attention. Please quote Reference CMP-2024-441 in any future communication regarding this matter.

We sincerely apologise for the inconvenience caused.

Yours sincerely,
Fortiv ManufactureSmart Customer Service
Tel: +91 79 XXXX XXXX | complaints@fortivsolutions.in
```

### Acknowledgement Rules

| Condition                          | Template Used                                               | Channel                                 |
| ---------------------------------- | ----------------------------------------------------------- | --------------------------------------- |
| Critical — any hour                | Critical priority template                                  | WhatsApp + Email + Phone call triggered |
| Major — business hours (8 AM–8 PM) | Major business hours template                               | WhatsApp + Email                        |
| Major — after hours                | After-hours template                                        | WhatsApp (email at 8 AM)                |
| Minor — any hour                   | Minor acknowledgement template                              | WhatsApp                                |
| Intake via email                   | Email acknowledgement + WhatsApp if mobile number available | Email + WhatsApp                        |
| Intake via portal                  | Portal acknowledgement + WhatsApp                           | Portal notification + WhatsApp          |

### Page Layout

**Top:** Acknowledgement health banner — "Acknowledgements sent today: 7 | Within 5-min SLA: 7 (100%) | Failed deliveries: 0"
**Centre Left:** Acknowledgement log — each complaint with sent timestamp, channel, read receipt status
**Centre Right:** Template manager — view/edit acknowledgement templates per severity and channel
**Bottom:** Failed delivery queue — complaints where WhatsApp/email delivery failed (with retry options)

### Mock Demo Data — Acknowledgement Log (Today)

| Complaint ID | Customer           | Severity | Sent At  | Channel                 | Time to Send | Delivered | Read |
| ------------ | ------------------ | -------- | -------- | ----------------------- | ------------ | --------- | ---- |
| CMP-2024-441 | Kapoor Industries  | Major    | 14:42:15 | WhatsApp + Email        | 4 min 53 sec | ✓         | ✓    |
| CMP-2024-440 | Tata AutoComp      | Major    | 13:26:44 | WhatsApp + Email        | 4 min 22 sec | ✓         | ✓    |
| CMP-2024-439 | Maruti Ancillaries | Minor    | 11:52:18 | WhatsApp                | 4 min 30 sec | ✓         | —    |
| CMP-2024-438 | Bajaj Auto         | Critical | 10:18:55 | WhatsApp + Email + Call | 3 min 55 sec | ✓         | ✓    |
| CMP-2024-437 | Reliance Consumer  | Minor    | 09:07:11 | WhatsApp                | 4 min 08 sec | ✓         | ✓    |
| CMP-2024-436 | L&T Construction   | Major    | 08:48:22 | WhatsApp + Email        | 4 min 18 sec | ✓         | ✓    |
| CMP-2024-435 | Godrej Precision   | Minor    | 07:35:44 | Email                   | 4 min 13 sec | ✓         | —    |

### Key UI Elements

- **5-minute SLA timer** — countdown appears on any unacknowledged complaint
- **Read receipt indicator** — WhatsApp blue tick confirmation displayed per complaint
- **Template preview** — click any template to see exactly what was sent
- **Bulk acknowledgement resend** — for cases where delivery failed
- **"Send Now" manual override** — trigger acknowledgement manually if auto-send had a channel issue

---

## Page 5 — Submodule: CAPA (Corrective & Preventive Action) Tracking

### What It Is

A structured CAPA management module that ensures every Major or Critical customer complaint generates a formal root cause investigation and documented corrective action — with task assignment, due date tracking, escalation for overdue items, and closure verification — closing the loop between customer-facing resolution and internal process improvement.

### CAPA Fields Per Complaint

| Field                        | Description                                          | Mock Example                                                                                                                                                                                                      |
| ---------------------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `capa_id`                    | CAPA record number                                   | CAPA-2024-441                                                                                                                                                                                                     |
| `linked_complaint`           | Complaint this CAPA is linked to                     | CMP-2024-441                                                                                                                                                                                                      |
| `triggered_severity`         | Severity that triggered CAPA generation              | Major                                                                                                                                                                                                             |
| `capa_triggered_at`          | When CAPA was auto-created                           | 22 Jan 2025, 14:37 (on classification)                                                                                                                                                                            |
| `assigned_to`                | CAPA responsible person                              | Sunita Patel (QA Manager)                                                                                                                                                                                         |
| `capa_initiation_due`        | Deadline to begin CAPA (Critical: 24hr, Major: 48hr) | 24 Jan 2025, 14:37                                                                                                                                                                                                |
| `capa_closure_due`           | Full CAPA completion deadline                        | 05 Feb 2025                                                                                                                                                                                                       |
| `d1_team`                    | CAPA team assigned                                   | Sunita Patel (QA), Deepak Trivedi (Planning), Ramesh Kumar (Line 1)                                                                                                                                               |
| `d2_problem`                 | Clear problem statement                              | "40 pieces of MS-204 supplied to Kapoor Industries (SO-2024-4821) have rust spots on the surface, detected at incoming inspection. Batch B-4821 produced on CNC Line 1, Morning Shift, 18 Jan 2025."              |
| `d3_containment`             | Immediate containment action                         | "Recalled 3 remaining units from customer; issued credit note ₹44,000 for 40 affected units; replacement batch B-4831 dispatched 23 Jan."                                                                         |
| `d4_root_cause`              | Root cause identified                                | "CRCA Sheet lot RM-CRCA- / Lot 88421 had inadequate zinc coating (spec: 20μm, measured: 12μm). Incoming inspection did not catch this due to sampling size gap (1 in 100 vs required 1 in 20 for this supplier)." |
| `d5_corrective_action`       | Corrective action implemented                        | "Supplier Mehta Steel Works issued NCR; incoming inspection sampling increased to 1-in-20 for this material; affected lot quarantined (450 kg)."                                                                  |
| `d6_preventive_action`       | Preventive action for recurrence                     | "Revised incoming inspection checklist for all CRCA material to include zinc coating spot-check. Supplier quality agreement updated. Monthly audit of Mehta Steel Works' coating process added."                  |
| `d7_effectiveness_check_due` | When effectiveness will be verified                  | 05 Mar 2025 (30 days post-closure)                                                                                                                                                                                |
| `d8_congratulations`         | CAPA closed and verified                             | — (pending)                                                                                                                                                                                                       |
| `capa_status`                | Current status                                       | Root Cause Under Investigation                                                                                                                                                                                    |
| `evidence_attached`          | Proof of actions taken                               | NCR to supplier (PDF), revised checklist (PDF), replacement dispatch challan                                                                                                                                      |
| `repeat_flag`                | Whether this is a repeat defect                      | ✓ 2 similar complaints in 90 days — systemic risk flag raised                                                                                                                                                     |

### CAPA Status Flow

```
Auto-Generated → Initiation Pending → Problem Defined →
Containment Done → Root Cause Identified → Actions Assigned →
Actions Completed → Effectiveness Check Pending → CAPA Closed
```

### Escalation Rules

| Condition                                      | Escalation Action      | Recipient                      |
| ---------------------------------------------- | ---------------------- | ------------------------------ |
| CAPA not initiated within 24 hrs (Critical)    | WhatsApp alert         | QA Head + Production Head      |
| CAPA not initiated within 48 hrs (Major)       | WhatsApp alert         | QA Head                        |
| CAPA not closed within 14 days                 | Weekly escalation      | QA Head + MD                   |
| Same defect appears in 3+ complaints (90 days) | Systemic risk alert    | MD + QA Head + Production Head |
| Effectiveness check shows recurrence           | CAPA reopen + escalate | QA Head                        |

### Page Layout

**Top Stats Row:** Total CAPAs open | Overdue initiation (X) | Overdue closure (X) | Closed this month (X) | Systemic flags (X)
**Main Area (Left 60%):** CAPA task board — Kanban view across status stages with complaint ID, customer, defect, assignee, and due date
**Right Panel (40%):** CAPA detail form for selected record — 8D sections expandable, evidence upload, closure checklist
**Bottom:** Systemic quality risk panel — defect categories with 3+ complaints in 90 days highlighted

### Mock Demo Data — Open CAPAs

| CAPA ID       | Complaint    | Customer           | Defect            | Severity | Status                   | Days Open | Due    | Assignee       |
| ------------- | ------------ | ------------------ | ----------------- | -------- | ------------------------ | --------- | ------ | -------------- |
| CAPA-2024-441 | CMP-2024-441 | Kapoor Industries  | Surface Finish    | Major    | Root Cause Investigation | 0         | 05 Feb | Sunita Patel   |
| CAPA-2024-438 | CMP-2024-438 | Bajaj Auto         | Dimensional       | Critical | Containment Done         | 1         | 28 Jan | Sunita Patel   |
| CAPA-2024-430 | CMP-2024-430 | Tata AutoComp      | Material Property | Major    | Actions Assigned         | 8         | 10 Feb | Vijay Sharma   |
| CAPA-2024-421 | CMP-2024-421 | Maruti Ancillaries | Surface Finish    | Major    | Effectiveness Check      | 18        | 24 Jan | Sunita Patel   |
| CAPA-2024-412 | CMP-2024-412 | L&T Construction   | Late Delivery     | Major    | Actions Completed        | 22        | 01 Feb | Deepak Trivedi |

### CAPA Detail Panel (8D Form — CMP-2024-441)

```
CAPA-2024-441 | CMP-2024-441 | Kapoor Industries
Major | Surface Finish — MS-204 | Day 1 of 14

D1 TEAM ASSEMBLED ✓
   Sunita Patel (QA), Deepak Trivedi (Planning), Ramesh Kumar (CNC Line 1)

D2 PROBLEM STATEMENT ✓
   40 pieces of MS-204 from Batch B-4821 have rust spots on the surface.
   Detected at Kapoor Industries incoming inspection, 22 Jan 2025.

D3 CONTAINMENT ✓
   3 units recalled from customer site.
   Credit note ₹44,000 issued.
   Replacement batch B-4831 dispatched 23 Jan.

D4 ROOT CAUSE ⟳ IN PROGRESS
   Batch record pulled from M — under analysis.
   Similar complaints CMP-2024-388 and CMP-2024-402 also surface defects on CRCA.
   Hypothesis: zinc coating insufficiency in supplier lot.
   [Add Root Cause] [Attach Evidence]

D5–D6 ACTIONS → Not yet started
D7 EFFECTIVENESS CHECK → Scheduled: 05 Mar 2025
D8 CLOSURE → Pending

[Upload Evidence] [Send Update to Customer] [Escalate to QA Head]
```

### Systemic Risk Panel

```
⚠️ SYSTEMIC QUALITY RISK DETECTED

Surface Finish Defects — 3 complaints in 90 days
• CMP-2024-388 (Tata AutoComp, 02 Nov) — CAPA closed
• CMP-2024-402 (Maruti Ancillaries, 14 Dec) — CAPA closed
• CMP-2024-441 (Kapoor Industries, 22 Jan) — CAPA open

CAPA actions for CMP-388 and CMP-402 have not prevented recurrence.
Recommend: MD-level review of CRCA supplier quality.

[Notify MD] [Schedule Review Meeting] [View All CAPAs]
```

### Key UI Elements

- **8D form accordion** — expandable sections D1–D8, each with completion status badge
- **Evidence upload** — drag-and-drop attachment of photos, revised SOPs, supplier NCRs
- **Overdue CAPA pulsing badge** — red pulsing badge on any CAPA past initiation or closure deadline
- **"Send to QA Head" button** — one-click escalation with full CAPA summary
- **Progress bar per CAPA** — visual % of 8D stages completed

---

## Page 6 — Submodule: Customer Resolution Communication Agent

### What It Is

An automated customer communication agent that sends proactive status updates to complainants as their complaint progresses through investigation, containment, and resolution — so customers never have to chase for an update. Every milestone in the complaint lifecycle triggers a customer-facing communication automatically.

### Update Trigger Events & Message Templates

| Trigger Event            | Timing                      | Communication Sent                               |
| ------------------------ | --------------------------- | ------------------------------------------------ |
| Complaint received       | Within 5 min                | Acknowledgement (handled by )                    |
| Investigation started    | On team acknowledgement     | "Investigation underway" update                  |
| Root cause identified    | On D4 completion in CAPA    | "Root cause found" update with explanation       |
| Containment action taken | On D3 completion            | "Immediate action taken" update                  |
| Replacement dispatched   | On dispatch system trigger  | "Replacement dispatched" update with LR number   |
| Credit note issued       | On ERP credit note creation | "Credit note issued" notification with reference |
| Resolution confirmed     | On CAPA D7 completion       | "Complaint resolved" closure message             |
| NPS survey               | 3 days after closure        | Post-resolution satisfaction survey              |

### Resolution Update Fields

| Field               | Description                         | Mock Example                                      |
| ------------------- | ----------------------------------- | ------------------------------------------------- |
| `update_id`         | Sequence number for this complaint  | CMP-2024-441 — Update 2 of 4                      |
| `update_type`       | Type of milestone reached           | Root Cause Identified                             |
| `update_timestamp`  | When update was sent                | 23 Jan 2025, 09:15:42                             |
| `customer_name`     | Recipient                           | Rajesh Mehta                                      |
| `complaint_ref`     | Reference for tracking              | CMP-2024-441                                      |
| `update_content`    | The message sent                    | Root cause text (see template below)              |
| `resolution_detail` | Specific action taken               | Replacement batch dispatched / Credit note raised |
| `resolution_value`  | Value of remedy (if financial)      | Credit note ₹44,000                               |
| `lr_number`         | LR number if replacement dispatched | TM24-88755                                        |
| `next_update_due`   | When next communication expected    | 24 Jan — resolution confirmation                  |
| `delivery_status`   | Message delivery confirmation       | ✓ Delivered + Read                                |
| `customer_response` | Any reply from customer             | "Thank you for the quick update"                  |

### Resolution Message Templates

**Investigation Started Update:**

```
Dear Rajesh ji,

Our QA Team has begun investigating your complaint (Ref: CMP-2024-441).

🔍 Status: Investigation Underway
📦 Product under review: Batch B-4821
📅 Next update: By 10:37 PM today

We will revert with our findings shortly.

— Fortiv ManufactureSmart QA Team
```

**Root Cause Identified:**

```
Dear Rajesh ji,

Update on your complaint CMP-2024-441:

🔎 ROOT CAUSE IDENTIFIED:
We have determined that the surface defects were caused by insufficient zinc coating in the raw material lot received from our supplier. The material did not meet our internal specification of 20μm minimum.

✅ IMMEDIATE ACTIONS TAKEN:
1. Defective lot quarantined — 450 kg held from production
2. Replacement batch (B-4831) — 40 units — dispatched today
   LR No: TM24-88755, Transporter: Saurashtra Transport
3. Credit note of ₹44,000 against Invoice INV-2024-4441 raised and emailed to your accounts team

🛡️ PREVENTIVE ACTION:
We have raised a formal supplier NCR and revised our incoming inspection process. This defect type will be systematically checked for all future batches.

We sincerely apologise for the inconvenience and assure you this will not recur.

— Sunita Patel, QA Manager
Fortiv ManufactureSmart Pvt. Ltd.
```

**Resolution Confirmation:**

```
Dear Rajesh ji,

Your complaint CMP-2024-441 has been resolved.

✅ RESOLUTION SUMMARY:
• 40 defective units replaced (Batch B-4831, dispatched 23 Jan)
• Credit note ₹44,000 raised (Ref: CN-2024-0118)
• Supplier corrective action initiated
• Incoming inspection process revised

We hope this has addressed your concern completely. Your satisfaction is our priority.

📊 FEEDBACK REQUEST:
On a scale of 0–10, how satisfied are you with how we handled this complaint?
Reply with your rating — it takes 5 seconds and helps us serve you better.

Thank you for your patience and for bringing this to our attention.

— Fortiv ManufactureSmart Customer Service
```

**NPS Survey (3 Days Post-Closure):**

```
Dear Rajesh ji,

Following up on your complaint CMP-2024-441 (resolved 24 Jan).

📊 Quick Feedback — 3 questions, 30 seconds:

1. How satisfied are you with the resolution? (0–10)
2. How satisfied with the speed of our response? (0–10)
3. Any suggestions for improvement? (Optional — free text)

Reply with your answers or tap the link: [Survey Link]

Your feedback directly shapes how we improve our quality and service.

— Fortiv ManufactureSmart
```

### Communication Timeline View (Per Complaint)

```
CMP-2024-441 | Kapoor Industries | Major — Surface Defect

TIMELINE:
22 Jan 14:37  ● COMPLAINT RECEIVED (WhatsApp)
22 Jan 14:42  ✓ ACKNOWLEDGED — delivered + read
22 Jan 14:37  ✓ ROUTED — QA Team, SLA: 48 hrs
22 Jan 15:10  ✓ INVESTIGATION STARTED UPDATE — sent + read
23 Jan 09:15  ✓ ROOT CAUSE UPDATE — sent + read
              Customer replied: "Thank you for the quick update"
23 Jan 10:30  ✓ REPLACEMENT DISPATCHED — LR TM24-88755, sent + read
24 Jan 14:20  ⟳ RESOLUTION CONFIRMATION — pending
26 Jan        ◌ NPS SURVEY — scheduled
```

### Page Layout

**Top:** Communication health banner — "Updates sent today: 14 | Open complaints with overdue update: 1 | Avg time to resolution update: hrs"
**Main Area (Left 60%):** Complaint communication timeline view — select any complaint to see full message history
**Right Panel (40%):** Template library — all message templates, editable per severity and trigger type
**Bottom:** NPS score tracker — post-resolution satisfaction scores collected this month with trend chart

### Mock Demo Data — NPS Scores (Last 30 Days)

| Complaint Ref | Customer           | Resolution Date | NPS Score | Category  | Follow-Up                   |
| ------------- | ------------------ | --------------- | --------- | --------- | --------------------------- |
| CMP-2024-435  | Godrej Precision   | 19 Jan          | 9         | Promoter  | None needed                 |
| CMP-2024-430  | Tata AutoComp      | 18 Jan          | 7         | Passive   | Sales follow-up             |
| CMP-2024-421  | Maruti Ancillaries | 16 Jan          | 4         | Detractor | 🔴 Flagged to Sales Manager |
| CMP-2024-415  | Reliance Consumer  | 14 Jan          | 8         | Promoter  | None needed                 |
| CMP-2024-408  | Bajaj Auto         | 11 Jan          | 6         | Passive   | Sales follow-up             |
| CMP-2024-402  | Ashok Leyland      | 08 Jan          | 3         | Detractor | 🔴 Flagged — escalated      |
| CMP-2024-395  | Kapoor Industries  | 05 Jan          | 9         | Promoter  | None needed                 |

**Month NPS Summary:** Net Promoter Score = +29 (Promoters 43%, Passives 29%, Detractors 29%)

### Key UI Elements

- **Timeline view** — vertical chronological event feed per complaint with sent + read status
- **"Send Update Now" button** — manually trigger any communication template outside the automated schedule
- **Detractor alert badge** — NPS score ≤6 triggers automatic flag to Regional Sales Manager
- **Customer response capture** — any WhatsApp reply from customer logged in timeline
- **Draft preview** — shows the next scheduled auto-update for any open complaint

---

## Page 7 — Submodule: Complaint Analytics & Quality Intelligence

### What It Is

An analytics module that aggregates all complaint data to identify systemic quality and service failures — providing management with trend charts, Pareto analysis, complaint cost impact, CAPA effectiveness scores, and automated monthly reports that drive prioritised improvement investment.

### Analytics Fields & Calculations

| Metric                          | Calculation                                     | Mock Value               |
| ------------------------------- | ----------------------------------------------- | ------------------------ |
| `total_complaints_mtd`          | Count of complaints received this month         | 28                       |
| `complaint_rate_ppm`            | Complaints per million units shipped            | 312 PPM                  |
| `avg_response_time_hrs`         | Mean time from intake to first response         | 3.8 hrs                  |
| `avg_resolution_time_hrs`       | Mean time from intake to closure                | 31 hrs                   |
| `sla_compliance_response_pct`   | % complaints responded within SLA               | 94%                      |
| `sla_compliance_resolution_pct` | % complaints resolved within SLA                | 81%                      |
| `complaint_cost_mtd`            | Total value of replacements + credit notes      | ₹3.8L                    |
| `capa_closure_rate_pct`         | % of raised CAPAs closed within due date        | 73%                      |
| `repeat_complaint_pct`          | % of complaints with same defect type recurring | 18%                      |
| `nps_score_mtd`                 | Net Promoter Score from post-resolution surveys | +29                      |
| `top_defect_category`           | Most frequent complaint category                | Quality — Surface Finish |
| `worst_resolution_customer`     | Customer with most unresolved complaints        | L&T Construction         |
| `complaint_cost_ytd`            | Year-to-date complaint cost                     | ₹3L                      |

### Analytics Charts & Panels

**Complaint Trend Chart (12 Months — Line Chart)**
Monthly complaint volume with a 3-month rolling average trend line:

| Month    | Complaints | 3-Month Avg |
| -------- | ---------- | ----------- |
| Feb 2024 | 14         | —           |
| Mar 2024 | 18         | —           |
| Apr 2024 | 12         | 14.7        |
| May 2024 | 16         | 1           |
| Jun 2024 | 22         | 16.7        |
| Jul 2024 | 19         | 19.0        |
| Aug 2024 | 24         | 2           |
| Sep 2024 | 21         | 2           |
| Oct 2024 | 18         | 21.0        |
| Nov 2024 | 25         | 2           |
| Dec 2024 | 22         | 2           |
| Jan 2025 | 28         | 25.0        |

**Complaint Type Pareto (Horizontal Bar)**

| Type                      | Count (MTD) | Cumulative % |
| ------------------------- | ----------- | ------------ |
| Quality — Surface Finish  | 8           | 2%           |
| Delivery — Short Shipment | 5           | 4%           |
| Quality — Dimensional     | 4           | 60.7%        |
| Delivery — Late           | 3           | 7%           |
| Documentation             | 3           | 8%           |
| Packaging                 | 2           | 89.3%        |
| Service                   | 1           | 92.9%        |
| Others                    | 2           | 100%         |

**Product-Level Complaint Rate (Per Thousand Units Shipped)**

| Product | Units Shipped MTD | Complaints | Rate (per 1,000) |
| ------- | ----------------- | ---------- | ---------------- |
| MS-204  | 12,400            | 6          | 4.8              |
| MS-208  | 8,200             | 5          | 6.1              |
| PC-112  | 5,600             | 2          |                  |
| SP-044  | 7,800             | 3          | 3.8              |
| MS-212  | 4,100             | 1          |                  |

**Complaint Cost Breakdown (MTD)**

| Cost Category                      | Amount    |
| ---------------------------------- | --------- |
| Replacement material + re-dispatch | ₹1.9L     |
| Credit notes issued                | ₹L        |
| Rework / sorting cost              | ₹0.4L     |
| Internal investigation hours       | ₹0.3L     |
| **Total MTD**                      | **₹3.8L** |

**Customer-Level Complaint History (Last 90 Days)**

| Customer           | Complaints | Open | Avg Resolution (hrs) | Quality Rating |
| ------------------ | ---------- | ---- | -------------------- | -------------- |
| Kapoor Industries  | 4          | 1    | 28                   | ⚠️ Attention   |
| Tata AutoComp      | 5          | 1    | 34                   | ⚠️ Attention   |
| Maruti Ancillaries | 3          | 0    | 22                   | 🟢 Good        |
| Bajaj Auto         | 2          | 1    | 18                   | 🟢 Good        |
| L&T Construction   | 4          | 2    | 51                   | 🔴 Poor        |
| Reliance Consumer  | 2          | 0    | 14                   | 🟢 Good        |
| Godrej Precision   | 1          | 0    | 19                   | 🟢 Good        |

### Monthly Management Report (Auto-generated, sent first Monday of each month)

**WhatsApp Digest — MD Group:**

```
📊 COMPLAINT MANAGEMENT REPORT | Jan 2025

1. TOTAL COMPLAINTS: 28 (vs 22 Dec — ↑27%) | Complaint rate: 312 PPM
2. TOP ISSUE: Quality — Surface Finish (8 complaints) — linked to CRCA supplier
3. COMPLAINT COST: ₹3.8L MTD | ₹3L YTD — credit notes + replacements
4. SLA COMPLIANCE: Response 94% ✓ | Resolution 81% ⚠️ — 5 breached
5. NPS SCORE: +29 (2 detractors flagged — L&T Construction, Ashok Leyland)

Full report: [PDF link]
— Fortiv Manufacturing AI
```

**PDF Report Contents (8–10 pages):**

- Executive summary (5 bullets)
- Complaint volume trend chart (12 months)
- Pareto chart by defect type
- Customer-wise complaint heatmap
- Product-level complaint rate table
- SLA compliance scorecard
- Complaint cost breakdown
- CAPA status and closure rate
- NPS trend and detractor list
- Top 3 systemic risks with recommended actions

### Page Layout

**Top Stats Row:** Total complaints MTD | Complaint rate (PPM) | Avg resolution time | SLA compliance % | NPS score
**Main Area (Left 50%):** Complaint trend line chart (12 months) + Pareto horizontal bar below
**Main Area (Right 50%):** Complaint cost breakdown donut + customer complaint heatmap table
**Bottom Left:** CAPA effectiveness tracker — open vs closed, repeat rate trend
**Bottom Right:** "Generate Report Now" button + last sent date + archive of past reports

### Key UI Elements

- **PPM trend indicator** — complaint rate per million with up/down arrow and month-over-month change
- **Pareto 80/20 line** — vertical line on Pareto chart showing the 20% of categories causing 80% of complaints
- **Systemic risk heat badges** — categories with 3+ complaints in 90 days highlighted in pulsing red
- **"Generate Monthly Report" button** — force-generate report on demand
- **Drill-down tables** — click any chart segment to expand complaint-level detail
- **Export** — download full analytics dataset as Excel for CFO/finance review

---

## Complete Module 8 — Master Parameter Reference

### All Data Fields Across M8

| Field Name                      | Type          | Sub-module | Description                                                                   |
| ------------------------------- | ------------- | ---------- | ----------------------------------------------------------------------------- |
| `complaint_id`                  | String        |            | Unique auto-generated complaint reference                                     |
| `intake_channel`                | Enum          |            | WhatsApp / Email / Phone / Portal / Field App                                 |
| `intake_timestamp`              | DateTime      |            | Date and time complaint was received                                          |
| `customer_name`                 | String        |            | Customer company name                                                         |
| `customer_contact`              | String        |            | Contact person name and mobile                                                |
| `order_ref`                     | String        |            | Linked sales order or invoice number                                          |
| `product_code`                  | String        | ,          | Complained product item code                                                  |
| `batch_ref`                     | String        |            | Batch or lot number                                                           |
| `complaint_description`         | Text          |            | Verbatim or transcribed complaint text                                        |
| `quantity_affected`             | Number        |            | Units affected by the complaint                                               |
| `media_attachments`             | Array         |            | Photos, videos, documents attached                                            |
| `classification_timestamp`      | DateTime      |            | When AI classification was completed                                          |
| `primary_category`              | Enum          |            | Quality / Delivery / Documentation / Service / Packaging                      |
| `sub_category`                  | Enum          |            | Specific defect type within category                                          |
| `severity`                      | Enum          |            | Critical / Major / Minor / Information                                        |
| `severity_reasoning`            | Text          |            | AI explanation for severity assignment                                        |
| `confidence_score`              | Number (%)    |            | AI classification confidence                                                  |
| `assigned_team`                 | String        |            | Team routed to                                                                |
| `assigned_person`               | String        |            | Primary responsible individual                                                |
| `sla_response_due`              | DateTime      |            | First response deadline                                                       |
| `sla_resolution_due`            | DateTime      |            | Resolution deadline                                                           |
| `routing_notification_sent`     | Boolean       |            | Whether routing WhatsApp was sent                                             |
| `escalation_path`               | Array         |            | Ordered list of escalation contacts                                           |
| `linked_batch`                  | String        |            | Batch pulled from ERP for traceability                                        |
| `similar_complaints`            | Array         |            | Past complaint IDs with same defect                                           |
| `ack_timestamp`                 | DateTime      |            | When acknowledgement was sent                                                 |
| `ack_channel`                   | Enum          |            | Channel used for acknowledgement                                              |
| `apology_language`              | Enum          |            | Formal / Standard / Urgent                                                    |
| `after_hours_flag`              | Boolean       |            | Whether received outside business hours                                       |
| `delivery_status`               | Enum          |            | Delivered / Read / Failed                                                     |
| `capa_id`                       | String        |            | CAPA record number                                                            |
| `capa_triggered_at`             | DateTime      |            | When CAPA was auto-generated                                                  |
| `capa_status`                   | Enum          |            | Initiation Pending / Root Cause / Actions / Effectiveness / Closed            |
| `capa_initiation_due`           | DateTime      |            | Initiation deadline                                                           |
| `capa_closure_due`              | DateTime      |            | Full closure deadline                                                         |
| `d1_team`                       | Array         |            | CAPA team members (8D format)                                                 |
| `d2_problem`                    | Text          |            | Clear problem statement                                                       |
| `d3_containment`                | Text          |            | Immediate containment actions                                                 |
| `d4_root_cause`                 | Text          |            | Root cause identified                                                         |
| `d5_corrective_action`          | Text          |            | Corrective action details                                                     |
| `d6_preventive_action`          | Text          |            | Preventive action details                                                     |
| `d7_effectiveness_check_due`    | Date          |            | Effectiveness verification date                                               |
| `repeat_flag`                   | Boolean       |            | Whether this is a repeat defect                                               |
| `evidence_attached`             | Array         |            | Documents proving action taken                                                |
| `update_id`                     | String        |            | Communication sequence identifier                                             |
| `update_type`                   | Enum          |            | Acknowledgement / Investigation / Root Cause / Replacement / Resolution / NPS |
| `update_timestamp`              | DateTime      |            | When update was sent                                                          |
| `resolution_detail`             | Text          |            | Specific resolution action                                                    |
| `resolution_value`              | Number (₹)    |            | Financial value of remedy                                                     |
| `lr_number`                     | String        |            | LR number if replacement dispatched                                           |
| `customer_response`             | Text          |            | Customer's reply to update                                                    |
| `nps_score`                     | Number (0–10) |            | Post-resolution satisfaction score                                            |
| `nps_category`                  | Enum          |            | Promoter (9–10) / Passive (7–8) / Detractor (0–6)                             |
| `total_complaints_mtd`          | Number        |            | Total complaints this month                                                   |
| `complaint_rate_ppm`            | Number        |            | Complaints per million units shipped                                          |
| `avg_response_time_hrs`         | Number        |            | Mean response time in hours                                                   |
| `avg_resolution_time_hrs`       | Number        |            | Mean resolution time in hours                                                 |
| `sla_compliance_response_pct`   | Number (%)    |            | % complaints responded within SLA                                             |
| `sla_compliance_resolution_pct` | Number (%)    |            | % complaints resolved within SLA                                              |
| `complaint_cost_mtd`            | Number (₹)    |            | Total complaint cost this month                                               |
| `capa_closure_rate_pct`         | Number (%)    |            | % CAPAs closed on time                                                        |
| `repeat_complaint_pct`          | Number (%)    |            | % complaints that are repeats                                                 |
| `report_generated_at`           | DateTime      |            | Monthly report generation timestamp                                           |
| `report_recipients`             | Array         |            | Email and WhatsApp recipient list                                             |

---

## Mock Data Constants (Demo-Ready)

### Demo Customer Complaint Pool (Active Complaints for Demo)

```
CMP-2024-441   Kapoor Industries        MS-204    Surface Finish    Major     Under Investigation
CMP-2024-440   Tata AutoComp            MS-208    Short Shipment    Major     Routed to Dispatch
CMP-2024-439   Maruti Ancillaries       PC-112    GST Error         Minor     Under Resolution
CMP-2024-438   Bajaj Auto               SP-044    Dimensional       Critical  CAPA Raised
CMP-2024-437   Reliance Consumer        MS-204    Damaged Packaging Minor     Resolved
CMP-2024-436   L&T Construction         MS-212    Late Delivery     Major     Escalated
CMP-2024-435   Godrej Precision         PC-118    Missing Cert.     Minor     Resolved
CMP-2024-430   Tata AutoComp            MS-208    Material Property Major     CAPA — Actions Assigned
CMP-2024-421   Maruti Ancillaries       MS-204    Surface Finish    Major     Effectiveness Check
CMP-2024-412   L&T Construction         MS-212    Late Delivery     Major     CAPA — Actions Completed
CMP-2024-402   Ashok Leyland            PC-112    Surface Finish    Major     Closed — NPS 3 ⚠️
CMP-2024-388   Tata AutoComp            MS-204    Surface Finish    Major     Closed — NPS 7
```

### Demo Contact Persons for Complaint Handling

```
Sunita Patel         — QA Manager (primary owner, Quality complaints)
Kavita Sharma        — GM Operations (Delivery and Dispatch complaints)
Anita Kapoor         — CFO (Documentation and Finance complaints)
Suresh Nair          — Regional Sales Head (Service complaints + escalations)
Deepak Trivedi       — Planning Manager (Late delivery root cause)
Vikram Joshi         — MD (Critical escalations + monthly report recipient)
```

### Demo Vendor Involved in Root Cause (CMP-2024-441)

```
Mehta Steel Works, GIDC Naroda, Ahmedabad
CRCA Sheet mm supplier — Lot 88421
Zinc coating measured: 12μm (Spec: 20μm minimum)
Supplier NCR raised: SNCR-2024-041
```

### Demo KPIs (Last Month Reference — Dec 2024)

```
Total Complaints Dec:       22
Complaint Rate:             248 PPM
Avg Response Time:           hrs
Avg Resolution Time:        27 hrs
SLA Response Compliance:    97%
SLA Resolution Compliance:  86%
Complaint Cost Dec:         ₹2.9L
CAPA Closure Rate:          80%
Repeat Complaint Rate:      14%
NPS Score Dec:              +35
```

---

## Demo Build Prompt for M8 Dashboard

```
Build a Customer Complaint & After-Sales Management AI dashboard for
Fortiv ManufactureSmart Pvt. Ltd., a Gujarat precision metal components manufacturer.

Dark theme: navy #1A3C5E primary, electric blue #2E86AB accent,
amber #E8A838 warning, coral red #D85A30 danger, dark bg #0D1B2A.

Six sub-module navigation within M8. Default landing on M8 Module Overview.

Show:
(1) Top KPI bar: Open Complaints (12), SLA Breached (2 — pulsing red),
    Resolved This Week (18), Avg Resolution (31 hrs — amber),
    Complaint Cost MTD (₹3.8L)
(2) Live complaint inbox feed: 7 complaints with channel icon, customer name
    (Indian companies), defect type badge, severity, SLA countdown timer
(3) Complaint type Pareto chart (Recharts horizontal bar) — 7 categories,
    Quality Surface Defect highest
(4) SLA health donut: Within SLA (8) / At Risk (2) / Breached (2)
(5) Channel breakdown tiles: WhatsApp/Email/Phone/Portal/Field with count
(6) Quick navigation tiles to 6 sub-modules at bottom

Indian manufacturing context — Ahmedabad GIDC, WhatsApp-first alerts,
rupee currency (₹ lakhs). JetBrains Mono for all numbers. React + recharts.
```

---

## Brand & Design Parameters for M8 UI

### Color Usage (Consistent with Module System)

| Element                 | Color                          | Hex     |
| ----------------------- | ------------------------------ | ------- |
| Page background         | Dark navy                      | #0D1B2A |
| Card / panel background | White                          | #FFFFFF |
| Primary brand           | Deep navy                      | #1A3C5E |
| Accent / links          | Electric blue                  | #2E86AB |
| Critical / SLA breached | Coral red (pulsing for urgent) | #D85A30 |
| Major / at-risk         | Amber                          | #E8A838 |
| Resolved / within SLA   | Teal green                     | #1D9E75 |
| Section background      | Off white                      | #F5F6FA |

### Severity Color Mapping

| Severity    | Background | Text  | Animation               |
| ----------- | ---------- | ----- | ----------------------- |
| Critical    | #D85A30    | White | Pulsing every 2 seconds |
| Major       | #D85A30    | White | Static                  |
| Minor       | #E8A838    | White | Static                  |
| Resolved    | #1D9E75    | White | Static                  |
| Information | #2E86AB    | White | Static                  |

### Typography

| Use Case                            | Font                                 |
| ----------------------------------- | ------------------------------------ |
| Module title, page heading          | Playfair Display or DM Serif Display |
| Body text, labels, descriptions     | DM Sans or Plus Jakarta Sans         |
| All numbers, quantities, timestamps | JetBrains Mono                       |

### Key Animations (Demo-Specific)

| Animation               | Where                   | Description                                              |
| ----------------------- | ----------------------- | -------------------------------------------------------- |
| SLA countdown timer     | All complaint rows      | Live countdown in red when <2 hrs remaining              |
| AI classification pulse | classification feed     | Brief flash as AI reads complaint and taxonomy populates |
| Pulsing red badge       | SLA breached complaints | Badge pulses every 2 seconds                             |
| Acknowledgement tick    | acknowledgement log     | Green tick appears on read receipt confirmation          |
| CAPA stage progress     | Kanban board            | Card slides to next column on stage update               |
| NPS score drop-in       | NPS tracker             | Score badge animates in when customer replies            |
| Pareto bar fill         | analytics               | Bars fill left-to-right on page load                     |

---

## Technical Integration Map for M8

| Sub-module      | External Systems                                                   | Data Flow Direction                                |
| --------------- | ------------------------------------------------------------------ | -------------------------------------------------- |
| Intake          | WhatsApp Business API / Email / M Voice Agent / Dealer Portal      | All channels → Complaint ticket                    |
| Classification  | NLP engine / M3 quality module (historical NCR data)               | Ticket → Classification → Routing → WhatsApp alert |
| Acknowledgement | WhatsApp Business API / Email SMTP                                 | Complaint event → Customer message                 |
| CAPA            | M batch traceability / M NCR history / WhatsApp API                | Complaint → CAPA task → Escalation alerts          |
| Resolution      | WhatsApp Business API / ERP (credit notes, dispatch) / Email       | Milestone event → Customer update → NPS collection |
| Analytics       | All M8 sub-module data / Email / WhatsApp / M6 (MD dashboard feed) | Aggregated data → Charts → Monthly PDF report      |

---

## Summary: M8 at a Glance

| Item                 | Detail                                                                                     |
| -------------------- | ------------------------------------------------------------------------------------------ |
| Module               | M8 — Customer Complaint & After-Sales Management                                           |
| Sub-modules          | 6 ( →                                                                                      |
| Total pages          | 7 (1 dashboard + 6 sub-module pages)                                                       |
| Primary data objects | Complaint ticket, CAPA record, customer communication, NPS score                           |
| Intake channels      | WhatsApp · Email · Phone (M) · Dealer Portal · Field Sales App                             |
| AI capabilities      | NLP classification in 6 sec · Auto-routing · Auto-acknowledgement · CAPA generation        |
| SLA tiers            | Critical (4hr/24hr) · Major (8hr/48hr) · Minor (24hr/7-day)                                |
| Key output           | Complaint resolved + CAPA closed + customer satisfied + analytics for management           |
| Demo focus           | WhatsApp complaint → AI classification in 6 sec → auto-acknowledgement → CAPA → resolution |
| Design tone          | Dark navy, data-dense, real-time SLA visibility, customer-centric                          |
| Compliance           | ISO 9001:2015 · IATF 16949 · Consumer Protection Act 2019 · DPDP Act 2023                  |
| Currency             | ₹ Indian Rupee — Lakhs (L) and Crores (Cr)                                                 |
| Date format          | DD/MM/YYYY                                                                                 |
| Languages            | English (primary) · Hindi · Gujarati                                                       |
| Escalation           | Automated WhatsApp escalation at every SLA breach and systemic risk trigger                |

---

_Manufacturing AI Command Center — Module 8 Build Guide_
_by Fortiv Solutions · fortivsolutions.in_
_Version 1.0 · Confidential_
