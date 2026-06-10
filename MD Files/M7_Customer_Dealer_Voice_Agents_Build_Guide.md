# M7 — Customer & Dealer Voice Agents

### Manufacturing AI Command Center · Fortiv Solutions · fortivsolutions.in

> **Module Tagline:** AI voice agents handle inbound calls for order status, dispatch ETAs, complaint logging, and payment reminders — freeing your customer service and sales teams for higher-value interactions.

**Document Type:** Module Build Guide & Parameter Reference  
**Module Code:** M7  
**Total Sub-Modules:** 4 ( → )  
**Version:** 1.0  
**Company:** Fortiv Solutions  
**Classification:** Confidential  
**Market:** India — Gujarat Focus (Ahmedabad, Rajkot, Vadodara, Surat)

---

## Module Overview

### Purpose

Deploy intelligent AI voice agents on your inbound customer and dealer helpline that can handle 80% of routine queries autonomously — in Hindi, Gujarati, and English — without putting callers on hold or routing them through frustrating IVR trees. Human agents intervene only when genuinely needed.

### Core Problem Being Solved

| Pain Point               | Without M7                                                   | With M7                                                                   |
| ------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------------------- |
| Order status calls       | Receptionist manually checks ERP, caller waits 5–10 min      | AI voice agent responds with live data in under 45 seconds                |
| After-hours queries      | Unanswered calls, missed dealer orders, frustrated customers | 24/7 voice agent handles all routine queries at any hour                  |
| Complaint logging        | Caller explains issue multiple times, manual ticket entry    | Structured capture in one call, ticket auto-created                       |
| Payment reminders        | Finance team makes awkward manual collection calls           | AI places consistent, professional outbound calls to all overdue accounts |
| Dealer satisfaction data | No structured feedback, no visibility into dealer sentiment  | Monthly automated NPS calls, aggregated dealer scorecard                  |
| Human agent load         | Customer service team overwhelmed with repetitive calls      | 80% routine queries handled autonomously — team focuses on exceptions     |
| Language barriers        | English-only IVR excludes Hindi/Gujarati-speaking dealers    | Fluent Hindi and Gujarati voice agents — natural conversation             |

### Demo Wow Moment

**A live call recording where a dealer calls at 8:15 PM asking for their order status and dispatch ETA** — the AI voice agent responds naturally in Hindi, retrieves the order data from ERP, and provides a complete accurate answer in under 45 seconds without any human involvement.

---

## Module-Level Parameters

| Parameter             | Value                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------- |
| Module ID             | M7                                                                                              |
| Module Name           | Customer & Dealer Voice Agents                                                                  |
| Sub-module Count      | 4                                                                                               |
| Primary Output        | Handled inbound queries + complaint tickets + payment commitments + satisfaction scores         |
| Primary Users         | Customer Service Head, Sales Manager, Finance Head, Regional Sales Managers                     |
| Call Hours            | Inbound: 24/7 · Outbound: 9 AM – 6 PM (business hours)                                          |
| Languages             | Hindi · Gujarati · English (auto-detected or caller-selected)                                   |
| Inbound Channels      | Company helpline number (routed via telephony / VoIP)                                           |
| Outbound Trigger      | ERP accounts receivable overdue flag + post-delivery delivery confirmation                      |
| Systems Integrated    | ERP (SAP / Tally / Odoo), CRM, M8 Complaint System, M4 Dealer Management, WhatsApp Business API |
| Compliance            | DPDP Act 2023 · TRAI call regulations · GST-ready · Labour law (Gujarat)                        |
| Currency Format       | ₹ Indian Rupee — Lakhs (L) and Crores (Cr)                                                      |
| Demo Financial Period | FY 2024–25 (Apr 2024 – Mar 2025)                                                                |

---

## Module Pages & Navigation Structure

```
M7 — Customer & Dealer Voice Agents
│
├── [Page 1]  Module Dashboard / Overview              ← Landing page for M7
│             (KPIs, live call log, agent status panel, language breakdown)
│
├── [Page]  Inbound Order Status Voice Agent
│             (Live call monitor, ERP query panel, call history log)
│
├── [Page]  Complaint Logging Voice Agent
│             (Active complaint calls, structured capture form, ticket preview)
│
├── [Page]  Payment Reminder Outbound Voice Agent
│             (Overdue accounts queue, call campaign status, commitment tracker)
│
└── [Page]  Dealer Feedback & Survey Agent
              (Survey campaign panel, NPS scoreboard, dealer satisfaction map)
```

---

## Page 1 — Module Dashboard (M7 Overview)

### Purpose

The landing screen for Module 7. Gives a real-time view of all voice agent activity — inbound call volumes, resolution rates, outbound campaign progress, and agent availability — across the entire dealer and customer call ecosystem.

### Layout

- **Top Stats Bar** (4 KPI cards across)
- **Centre Left:** Live call activity feed (incoming + active calls, real-time)
- **Centre Right:** Agent performance donut + language split bar chart
- **Bottom:** Quick-access tiles to each sub-module ( → )

### KPI Cards (Top Stats Bar)

| Card                   | Metric                                  | Mock Value | Color                 |
| ---------------------- | --------------------------------------- | ---------- | --------------------- |
| Calls Handled Today    | Total calls handled by AI (all agents)  | 47         | Accent Blue #2E86AB   |
| AI Resolution Rate     | % calls resolved without human handoff  | 82%        | Success Green #1D9E75 |
| Calls Escalated        | Calls transferred to human agents today | 8          | Warning Amber #E8A838 |
| Outbound Calls Pending | Payment reminder / survey calls queued  | 23         | Accent Blue #2E86AB   |

### Agent Performance Donut Chart

Recharts donut showing call distribution across sub-modules:

| Agent                  | Calls Today | Color   |
| ---------------------- | ----------- | ------- |
| Order Status Agent     | 28          | #2E86AB |
| Complaint Logger       | 9           | #D85A30 |
| Payment Reminder Agent | 6           | #E8A838 |
| Feedback Survey Agent  | 4           | #1D9E75 |

### Language Split Bar Chart

Compact horizontal bar showing call language distribution today:

| Language | Calls | %   |
| -------- | ----- | --- |
| Hindi    | 21    | 45% |
| Gujarati | 16    | 34% |
| English  | 10    | 21% |

### Live Call Activity Feed

Real-time scrolling panel showing:

- Active calls in progress (caller ID masked, query type badge, duration timer)
- Calls resolved in last 60 minutes (query type, language, resolution status)
- Human escalations with reason (Dispute / Credit / Complex Complaint / Caller Request)

### Sub-Module Quick Access Tiles (Bottom Row)

Four clickable tiles, each showing:

- Sub-module number + name
- One-line description
- Status indicator (Active / Paused)
- Today's key stat (calls handled / complaints logged / reminders sent / surveys completed)

---

## Page 2 — Submodule: Inbound Order Status Voice Agent

### What It Is

An AI voice agent that handles inbound calls from customers and dealers requesting order status, dispatch updates, and delivery ETAs — retrieving live ERP data to provide accurate, real-time responses in the caller's preferred language.

### Supported Query Types

| Query Type                  | Example Caller Statement                        | Agent Response Source              |
| --------------------------- | ----------------------------------------------- | ---------------------------------- |
| Order status                | "Mera order #4821 ka kya status hai?"           | ERP open orders via M1             |
| Dispatch confirmation       | "Mera maal kab dispatch hoga?"                  | ERP dispatch schedule              |
| Delivery ETA                | "LR number kya hai aur delivery kab aayegi?"    | Dispatch record + transporter data |
| Partial delivery            | "Humein sirf 500 units mile, 1000 ka order tha" | ERP GRN records                    |
| Production delay            | "Order late kyun ho raha hai?"                  | Production schedule from M         |
| Stock availability          | "Aapke paas MS-204 ka stock available hai?"     | ERP inventory                      |
| Pricing / rate confirmation | "MS-204 ka current rate kya hai?"               | ERP approved rate card             |
| Credit limit enquiry        | "Mera credit limit kitna baki hai?"             | ERP accounts receivable            |

### Call Flow — Step by Step

| Step                      | Agent Action                                                      | Example Dialogue                                                                                                                                                          |
| ------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Greeting               | Greets caller in auto-detected language or offers language choice | "Namaste, aap Fortiv ManufactureSmart ke AI assistant se baat kar rahe hain. Kripya apna account name ya registered mobile number batayein."                              |
| 2. Authentication         | Caller speaks name or mobile → matched against CRM/ERP            | "Dhanyawad, Kapoor Industries ka account mil gaya."                                                                                                                       |
| 3. Query Detection        | NLP intent classification from first sentence                     | Agent identifies: order status / dispatch / complaint / pricing                                                                                                           |
| 4. ERP Query              | Agent pulls real-time data from ERP                               | Internal: fetches order #4821 — dispatched 26 Jan, LR TM24-88744                                                                                                          |
| 5. Response               | Natural language delivery of information                          | "Aapka order #4821, 1,000 units MS-204 — 26 January ko dispatch ho gaya. LR number hai TM24-88744, Saurashtra Transport ke saath. Expected delivery kal, 28 January hai." |
| 6. Follow-up              | Asks if caller has another query                                  | "Kya aapko kuch aur puchna hai?"                                                                                                                                          |
| 7. CRM Logging            | Full call transcript, query type, and outcome logged              | System: creates call record in CRM with resolution status                                                                                                                 |
| 8. Escalation (if needed) | Detects frustration, disputes, or complex issues                  | "Main aapko hamare sales manager se connect karta hoon. Ek moment ruko."                                                                                                  |

### Escalation Trigger Rules

| Trigger Condition                                            | Escalation Action                                       |
| ------------------------------------------------------------ | ------------------------------------------------------- |
| Caller says "manager", "saab", "complaint"                   | Transfer to human + WhatsApp alert to sales manager     |
| Credit limit override request                                | Transfer to accounts team                               |
| Price dispute or rate disagreement                           | Transfer to sales manager with call context             |
| 3 unsuccessful authentication attempts                       | Transfer to human agent                                 |
| Caller expresses strong frustration (tone/language analysis) | De-escalation script first, then transfer if unresolved |
| Query cannot be answered from ERP data                       | Acknowledge gap, offer callback, log call for follow-up |

### Page Layout

**Top:** Live call monitor — "Active Now: 2 calls in progress" with caller type, language, duration, and query badge  
**Centre Left:** Current call transcript panel — real-time text rendering of ongoing call dialogue  
**Centre Right:** ERP query result panel — order details being fetched and displayed as agent responds  
**Bottom:** Call history log — last 20 calls with caller, query type, language, resolution, and duration

### Call Performance Parameters

| Metric                    | Description                                  | Mock Value    |
| ------------------------- | -------------------------------------------- | ------------- |
| Avg call duration         | Average call length for order status queries | 1 min 47 sec  |
| First-call resolution     | % queries resolved without callback needed   | 91%           |
| ERP data fetch time       | Time between query and ERP response          | seconds       |
| Escalation rate           | % calls transferred to human agent           | 9%            |
| Peak call hour            | Busiest time of day for order status calls   | 10 AM – 12 PM |
| After-hours calls handled | Calls outside 9 AM – 6 PM handled by AI      | 100%          |

### Mock Demo Data — Call History Log (Last 10 Calls)

| #   | Caller          | Account                  | Language | Query Type         | Duration | Resolution  | Time     |
| --- | --------------- | ------------------------ | -------- | ------------------ | -------- | ----------- | -------- |
| 1   | +91 98251 XXXXX | Kapoor Industries        | Hindi    | Order Status       | 1:42     | ✓ Resolved  | 9:47 AM  |
| 2   | +91 94262 XXXXX | Patel Agencies, Rajkot   | Gujarati | Dispatch ETA       | 2:08     | ✓ Resolved  | 10:03 AM |
| 3   | +91 99099 XXXXX | Maruti Ancillaries       | Hindi    | Credit Limit       | 3:21     | ⚠ Escalated | 10:18 AM |
| 4   | +91 98795 XXXXX | Reliance Consumer        | English  | Order Status       | 1:15     | ✓ Resolved  | 10:34 AM |
| 5   | +91 90163 XXXXX | Shah Traders, Surat      | Gujarati | Partial Delivery   | 2:44     | ✓ Resolved  | 11:02 AM |
| 6   | +91 98330 XXXXX | L&T Construction         | English  | Pricing Query      | 1:58     | ✓ Resolved  | 11:19 AM |
| 7   | +91 97126 XXXXX | Mehta Brothers, Vadodara | Gujarati | Order Status       | 1:33     | ✓ Resolved  | 11:45 AM |
| 8   | +91 99009 XXXXX | Bajaj Auto Components    | Hindi    | Dispatch Status    | 2:02     | ✓ Resolved  | 12:07 PM |
| 9   | +91 98251 XXXXX | Kapoor Industries        | Hindi    | Production Delay   | 4:11     | ⚠ Escalated | 12:33 PM |
| 10  | +91 94279 XXXXX | Godrej Precision         | English  | Stock Availability | 1:26     | ✓ Resolved  | 1:15 PM  |

### WhatsApp Follow-Up (Auto-sent after call)

```
📞 Call Summary | 26 Jan 2025, 9:47 AM

Dear Kapoor Industries,

Your order enquiry has been logged.

Order #SO-2024-4821 | 1,000 units MS-204
Status: Dispatched — 26 January
LR No: TM24-88744 | Saurashtra Transport
Expected delivery: 28 January

For further queries, call our helpline or reply to this message.
— Fortiv ManufactureSmart
```

### Key UI Elements

- **Live call waveform** — animated audio waveform on active call card
- **Real-time transcript** — scrolling text rendering of ongoing dialogue
- **ERP data fetch pulse** — visual indicator when agent is querying ERP (1–4 second fetch)
- **Language badge** — Hindi / Gujarati / English badge on every call card
- **Resolution rate ring gauge** — circular gauge showing today's first-call resolution %

### Why It Matters

Order status calls are the highest-volume inbound query in any manufacturing company — and the most repetitive. A voice agent handling these at any hour of day or night protects customer satisfaction while freeing your team for conversations that actually require human judgement.

---

## Page 3 — Submodule: Complaint Logging Voice Agent

### What It Is

An AI voice agent that handles inbound complaint calls — empathetically acknowledging the issue, capturing complete complaint details via structured voice dialogue, issuing a complaint reference number, and triggering the M8 complaint workflow automatically.

### Complaint Data Fields Captured Per Call

| Field                         | Captured By                                     | Mock Example                           |
| ----------------------------- | ----------------------------------------------- | -------------------------------------- |
| `complaint_id`                | Auto-generated                                  | CMP-2024-441                           |
| `caller_name`                 | Authentication step                             | Rajesh Mehta                           |
| `company_name`                | CRM lookup from mobile                          | Kapoor Industries Pvt. Ltd.            |
| `product_code`                | Voice input + NLP extraction                    | MS-204                                 |
| `invoice_order_ref`           | Voice input + ERP cross-check                   | SO-2024-4821                           |
| `defect_description`          | Free-form voice → speech-to-text                | "Surface has rust marks on 200 pieces" |
| `quantity_affected`           | Voice input + NLP extraction                    | 200 units                              |
| `defect_category`             | AI NLP classification                           | Surface Finish — Quality Defect        |
| `severity_level`              | Rule-based from quantity + defect type          | MAJOR                                  |
| `customer_resolution_request` | Voice input                                     | "Replacement batch or credit note"     |
| `photo_evidence_requested`    | Agent asks: "Can you send a photo on WhatsApp?" | Yes — WhatsApp requested               |
| `call_timestamp`              | System                                          | 26 Jan 2025, 10:22 AM                  |
| `call_duration`               | System                                          | 4 min 18 sec                           |
| `m8_ticket_created`           | Auto-trigger                                    | ✓ Ticket CMP-2024-441 created          |
| `assigned_to`                 | M8 routing logic                                | QA Team — Sunita Patel                 |
| `sla_response_deadline`       | Based on severity                               | 8 hours (Major) → by 6:22 PM today     |

### Call Flow — Step by Step

| Step                          | Agent Action                                       | Example Dialogue                                                                                                           |
| ----------------------------- | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 1. Complaint Detection        | Identifies complaint intent from opening statement | "Mujhe aapke product ke baare mein complain karni hai" → complaint intent detected                                         |
| 2. Empathetic Acknowledgement | Tone shift — warm, apologetic                      | "Main samajh sakta hoon, yeh bahut frustrating hoga. Main abhi aapki poori baat sunoonga aur complaint register karoonga." |
| 3. Authentication             | Confirms account identity                          | "Kripya apna company name ya order number batayein."                                                                       |
| 4. Structured Data Capture    | Agent asks specific questions one at a time        | "Konsa product hai? Order number kya hai? Kitne pieces affected hain? Kya problem exactly hai?"                            |
| 5. Severity Assessment        | Internal scoring based on answers                  | System: 200 units + surface defect = MAJOR severity                                                                        |
| 6. Reference Number           | Issued on-call                                     | "Aapka complaint reference number hai CMP-2024-441. Please isse note kar lijiye."                                          |
| 7. SLA Commitment             | States response timeline                           | "Hamari QA team 8 ghante mein aapse contact karegi — aaj shaam 6 baje tak."                                                |
| 8. Photo Request              | Asks for WhatsApp evidence                         | "Kya aap defect ki ek photo WhatsApp kar sakte hain? Isse hamaری investigation faster hogi."                               |
| 9. Closing                    | Reassurance and close                              | "Hum is matter ko seriously le rahe hain. Dhanyawad apni problem share karne ke liye. Hum bahut jald sampark karenge."     |
| 10. Auto-trigger              | M8 ticket created, QA team alerted                 | System: M8 complaint ticket + WhatsApp to QA Head                                                                          |

### Empathy Script Patterns (AI De-escalation)

| Caller Mood                | Detected By                               | Agent Script Pattern                                                                                       |
| -------------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Frustrated / Angry         | Raised voice tone, short sharp sentences  | "Main aapki baat poori tarah samajh raha hoon. Yeh nahin hona chahiye tha. Hum isko turant theek karenge." |
| Very upset (repeat caller) | CRM flag: >2 complaints in 90 days        | "Hum jaante hain aapko pehle bhi issue hua tha. Is baar hum ensure karenge ki yeh dobara nahi hoga."       |
| Threatening to leave       | Keywords: "band kar doonga", "competitor" | Immediate escalation to Sales Manager with flag                                                            |
| Confused about process     | Long pauses, repeated questions           | Slow down pace, simpler language, one question at a time                                                   |

### Complaint Severity Classification

| Severity | Conditions                                                          | SLA Response | SLA Resolution | Badge      |
| -------- | ------------------------------------------------------------------- | ------------ | -------------- | ---------- |
| Critical | Production line stopped / Large value (>₹5L) / Safety issue         | 4 hours      | 24 hours       | 🔴 Pulsing |
| Major    | Significant defect / Medium quantity (50–500 units) / Repeat defect | 8 hours      | 48 hours       | 🔴 Solid   |
| Minor    | Cosmetic defect / Small quantity (<50 units) / Documentation        | 24 hours     | 7 days         | 🟡 Amber   |

### Page Layout

**Top Stats Bar:** Complaints logged today (9) | Critical (1) | Major (4) | Minor (4) | Avg capture time (3 min 52 sec)  
**Centre Left:** Active complaint call panel — live call in progress with real-time transcript  
**Centre Right:** Structured ticket preview — fields populating as agent captures data on the call  
**Bottom:** Complaint log — all calls today with severity badge, account, defect category, and M8 ticket status

### Mock Demo Data — Complaint Calls Today (9 Calls)

| #   | Complaint ID | Account               | Defect Type       | Severity    | Qty         | Language | M8 Status             |
| --- | ------------ | --------------------- | ----------------- | ----------- | ----------- | -------- | --------------------- |
| 1   | CMP-2024-441 | Kapoor Industries     | Surface Finish    | 🔴 Major    | 200 units   | Hindi    | Routed to QA          |
| 2   | CMP-2024-442 | Tata AutoComp         | Dimensional       | 🔴 Critical | 1,200 units | English  | Escalated to QA Head  |
| 3   | CMP-2024-443 | Bajaj Auto Components | Packaging Damage  | 🟡 Minor    | 30 units    | Hindi    | Routed to Dispatch    |
| 4   | CMP-2024-444 | Shah Traders, Surat   | Wrong Item        | 🔴 Major    | 400 units   | Gujarati | Routed to Sales Admin |
| 5   | CMP-2024-445 | Maruti Ancillaries    | Late Delivery     | 🟡 Minor    | —           | Hindi    | Routed to Dispatch    |
| 6   | CMP-2024-446 | Godrej Precision      | Material Property | 🔴 Major    | 150 units   | English  | Routed to QA          |
| 7   | CMP-2024-447 | Patel Agencies        | Short Shipment    | 🟡 Minor    | 50 units    | Gujarati | Routed to Dispatch    |
| 8   | CMP-2024-448 | L&T Construction      | Contamination     | 🔴 Major    | 320 units   | English  | Routed to QA          |
| 9   | CMP-2024-449 | Ashok Leyland Vendors | Wrong Invoice     | 🟡 Minor    | —           | Hindi    | Routed to Sales Admin |

### WhatsApp Confirmation (Auto-sent after call)

```
✅ Complaint Registered | CMP-2024-441

Dear Kapoor Industries,

Your complaint has been registered successfully.

Product: MS-204 | Qty Affected: 200 units
Issue: Surface Finish — rust marks observed
Reference: CMP-2024-441

Our QA team will contact you by 6:22 PM today (within 8 hours).

If you have photos of the defect, please share them here.

We apologise for the inconvenience.
— Fortiv ManufactureSmart Quality Team
```

### Key UI Elements

- **Empathy indicator** — tone analysis badge showing caller sentiment in real time (Calm / Concerned / Upset / Escalation Risk)
- **Structured field population animation** — each complaint field highlights and fills as agent captures data
- **SLA clock** — countdown timer appears immediately on ticket creation showing hours remaining
- **M8 trigger badge** — "Ticket Created → Routed to QA" confirmation animation on call closure
- **Photo request tracking** — WhatsApp photo receipt status shown on complaint record

### Why It Matters

Customers who complain and receive silence feel ignored and become hostile. A professional, empathetic voice agent at any hour — capturing structured data in one call, issuing a reference number, and triggering the resolution workflow automatically — signals that the company takes quality seriously and immediately de-escalates most complaints.

---

## Page 4 — Submodule: Payment Reminder Outbound Voice Agent

### What It Is

An AI outbound voice agent that calls dealers and customers with overdue payments — delivering a polite, professional payment reminder and logging payment commitment responses — without requiring your finance team to make awkward collection calls.

### Outbound Call Campaign Parameters

| Parameter                | Description                                    | Mock Value             |
| ------------------------ | ---------------------------------------------- | ---------------------- |
| `dealer_name`            | Account name                                   | Patel Agencies, Rajkot |
| `contact_name`           | Decision-maker at account                      | Rajesh Patel           |
| `contact_mobile`         | Registered mobile for outbound                 | +91 98XXX XXXXX        |
| `invoice_number`         | Overdue invoice reference                      | INV-2024-4421          |
| `invoice_amount`         | Outstanding amount                             | ₹2,84,000              |
| `invoice_date`           | Invoice issue date                             | 10 Jan 2025            |
| `due_date`               | Payment due date                               | 25 Jan 2025            |
| `days_overdue`           | Days past due date                             | 8 days                 |
| `overdue_bucket`         | Ageing classification                          | 1–15 days              |
| `total_outstanding`      | Total outstanding across all invoices          | ₹4,12,000              |
| `credit_limit`           | Approved credit limit                          | ₹6,00,000              |
| `credit_utilisation_pct` | Outstanding as % of credit limit               | 68.7%                  |
| `call_attempt`           | Which attempt this is (1st / 2nd / 3rd)        | 2nd attempt            |
| `previous_commitment`    | Date promised in last call                     | 28 Jan (not paid)      |
| `call_outcome`           | Result of this call                            | Commitment — 31 Jan    |
| `commitment_date`        | New payment commitment                         | 31 Jan 2025            |
| `escalation_flag`        | Escalate to manager after 3 missed commitments | False                  |

### Call Script — Template (Hindi — 1st Reminder, 7 Days Overdue)

```
Agent: "Namaste, kya main Rajesh Patel ji se baat kar sakta hoon?"
Caller: "Haan, main bol raha hoon."
Agent: "Good morning Rajesh ji. Main Fortiv ManufactureSmart ki taraf se bol raha hoon.
        Aapki Invoice #INV-2024-4421, ₹2,84,000 ki, jo 25 January ko due thi, uske baare
        mein call kar raha hoon. Kya aap mujhe bata sakte hain ki payment kab tak expect
        kar sakte hain?"
```

### Call Script — Template (Gujarati — 2nd Reminder, Missed Commitment)

```
Agent: "Namaste, Rajesh bhai sathe vaat kari shakaay?"
Caller: "Haa, bolo."
Agent: "Good morning Rajesh bhai. Fortiv ManufactureSmart thi bol chhu. Tame pehla
        28 January no payment commitment aapyo hato Invoice #INV-2024-4421 mate.
        Payment nathi aavyo, to jannna hatu ke have kya date expect kari shakiye?"
```

### Call Outcome Classification

| Outcome               | Caller Response                | System Action                                                     |
| --------------------- | ------------------------------ | ----------------------------------------------------------------- |
| Commitment Given      | "31 tarikh tak kar doonga"     | Log commitment date, pause reminders until then, resume if unpaid |
| Payment Already Made  | "Humne kal transfer kiya tha"  | Flag for reconciliation check, hold further calls 48 hours        |
| Request for Extension | "2 hafte ki extension chahiye" | Route to Accounts Manager — cannot approve via AI                 |
| Dispute Raised        | "Yeh invoice galat hai"        | Route to Accounts + Sales team with dispute flag                  |
| No Answer             | —                              | Leave voicemail, send WhatsApp follow-up within 30 minutes        |
| Call Rejected         | —                              | Send WhatsApp, retry next business day                            |
| 3rd Missed Commitment | Pattern detected               | Escalate to Collections Manager — flag as "High Risk"             |

### Escalation & Intervention Rules

| Condition                | Days Overdue          | Action                                                              |
| ------------------------ | --------------------- | ------------------------------------------------------------------- |
| 1st automated reminder   | 7 days                | AI voice call + WhatsApp follow-up                                  |
| 2nd reminder             | 15 days               | AI voice call (mentions previous missed commitment if applicable)   |
| 3rd reminder (escalated) | 30 days               | AI call + escalate to regional sales manager for personal follow-up |
| Credit hold trigger      | 45 days + no response | Alert to Finance Head + Sales Manager — credit hold recommendation  |
| Legal / serious flag     | 60+ days, ₹10L+       | Escalate to MD and legal team — AI stops calling                    |

### Page Layout

**Top Stats Bar:** Total overdue accounts (18) | Amount overdue (₹2L) | Calls today (6) | Commitments secured (₹1L)  
**Main Area (Left 60%):** Overdue accounts table — accounts sorted by overdue amount with call status badges  
**Right Panel (40%):** Active campaign panel — today's scheduled calls with status (Called / Pending / No Answer / Escalated)  
**Bottom:** Collections performance bar — commitments secured this week vs overdue balance

### Mock Demo Data — Overdue Accounts Table (Top 10)

| #   | Account                       | Contact        | Invoice  | Amount    | Due Date | Days OD | Status            | Commitment |
| --- | ----------------------------- | -------------- | -------- | --------- | -------- | ------- | ----------------- | ---------- |
| 1   | Patel Agencies, Rajkot        | Rajesh Patel   | INV-4421 | ₹2,84,000 | 25 Jan   | 8       | 2nd Reminder      | 31 Jan     |
| 2   | Sharma Distributors, Vadodara | Ramesh Sharma  | INV-4398 | ₹1,92,000 | 20 Jan   | 13      | ⚠️ No Response    | Pending    |
| 3   | Mehta Agencies, Ahmedabad     | Vijay Mehta    | INV-4412 | ₹4,50,000 | 22 Jan   | 11      | Commitment        | 30 Jan     |
| 4   | Gujarat Traders, Surat        | Deepak Shah    | INV-4389 | ₹3,18,000 | 18 Jan   | 15      | ⚠️ Dispute Raised | Escalated  |
| 5   | Kapoor Industries             | Rajesh Kapoor  | INV-4367 | ₹78,000   | 15 Jan   | 18      | Commitment        | 29 Jan     |
| 6   | Joshi & Sons, Rajkot          | Anil Joshi     | INV-4401 | ₹1,40,000 | 21 Jan   | 12      | 1st Reminder      | Pending    |
| 7   | Patel Hardware, Anand         | Suresh Patel   | INV-4355 | ₹92,000   | 12 Jan   | 21      | 🔴 3rd Reminder   | Escalated  |
| 8   | R.K. Engineering, Ahmedabad   | Rakesh Kumar   | INV-4441 | ₹2,24,000 | 27 Jan   | 6       | 1st Reminder      | Pending    |
| 9   | Trivedi Traders, Surat        | Manish Trivedi | INV-4376 | ₹1,68,000 | 17 Jan   | 16      | Commitment        | 2 Feb      |
| 10  | Nair Industries, Ahmedabad    | Suresh Nair    | INV-4444 | ₹88,000   | 28 Jan   | 5       | 1st Reminder      | Today      |

### WhatsApp Follow-Up (Auto-sent after no-answer call)

```
💰 Payment Reminder | Fortiv ManufactureSmart

Dear Rajesh bhai (Patel Agencies),

Humne abhi call karne ki koshish ki thi. Invoice #INV-2024-4421
(₹2,84,000) 25 January ko due thi — abhi 8 din overdue hai.

Kripya payment arrange karein ya payment date confirm karें:
• Reply karein expected payment date
• Ya hamare accounts team se baat karein: +91 98XXX XXXXX

Jaldi payment ke liye shukriya.
— Fortiv ManufactureSmart Accounts Team
```

### Collections Performance Dashboard

| Metric                           | This Week | Last Week | Target |
| -------------------------------- | --------- | --------- | ------ |
| Calls Made                       | 28        | 22        | 30     |
| Commitments Secured              | 14        | 11        | 20     |
| Amount Committed                 | ₹1L       | ₹1L       | ₹25L   |
| Amount Collected (vs commitment) | ₹1L       | ₹9.8L     | —      |
| Commitment Fulfilment Rate       | 78%       | 71%       | 85%    |
| Accounts Escalated               | 3         | 2         | <3     |

### Key UI Elements

- **Overdue amount counter** — animated ₹ total for all outstanding accounts
- **Call queue countdown** — "Next call in 14 minutes — Patel Agencies (₹2.84L)" status strip
- **Commitment calendar** — mini calendar view showing all payment commitments by date
- **Escalation risk badge** — accounts with 2+ missed commitments flagged with a red "High Risk" badge
- **Weekly collections bar chart** — committed vs collected per week (last 6 weeks)

### Why It Matters

Collection calls are stressful for finance teams and often deprioritised. AI voice agents make consistent, professional collection calls to every overdue account without any human reluctance — improving collection rates and freeing the finance team from an uncomfortable task.

---

## Page 5 — Submodule: Dealer Feedback & Survey Agent

### What It Is

An AI voice agent that calls dealers monthly or post-delivery to collect structured feedback on product quality, delivery experience, and service satisfaction — building a real-time dealer satisfaction database without any manual survey effort.

### Survey Types & Triggers

| Survey Type           | Trigger                                 | Timing                            | Questions     |
| --------------------- | --------------------------------------- | --------------------------------- | ------------- |
| Post-Delivery NPS     | Delivery confirmation received in M4/M5 | 3–5 days after confirmed delivery | 3–5 questions |
| Monthly Satisfaction  | Recurring monthly campaign              | 1st week of each month            | 6–8 questions |
| Complaint Resolution  | Complaint closed in M8                  | 3 days after closure              | 3 questions   |
| New Dealer Onboarding | 30 days after first order               | Day 30                            | 5 questions   |

### Post-Delivery Survey — Voice Script (Hindi)

```
Agent: "Namaste [Dealer Name] ji. Main Fortiv ManufactureSmart ki customer experience team
        se bol raha hoon. Aapki recent delivery ke baare mein 2 minute ka feedback lena tha.
        Kya abhi baat karna theek rahega?"

[Caller agrees]

Q1: "26 January ko jo material deliver hua — uski quality ke baare mein
     0 se 10 tak kya rating denge? Jahan 10 sabse best hai."
     → Caller: "8 deta hoon"

Q2: "Delivery experience — time pe aaya, packaging theek tha — uske baare mein
     0 se 10 kya rating denge?"
     → Caller: "9 deta hoon"

Q3: "Hamari customer service aur communication ke baare mein rating?"
     → Caller: "7"

Q4: "Koi ek cheez hai jo hum better kar sakein?"
     → [Free form response — speech to text]
     → Caller: "Invoice thoda jaldi bhejain, usually late milti hai"

Agent: "Bahut shukriya aapke feedback ke liye Rajesh ji. Hum is par jaroor kaam karenge.
        Aapki koi aur baat ho toh hume call karein."
```

### Survey Data Fields Per Response

| Field               | Description                                       | Mock Example                                          |
| ------------------- | ------------------------------------------------- | ----------------------------------------------------- |
| `dealer_name`       | Dealer account name                               | Patel Agencies, Rajkot                                |
| `survey_type`       | Post-Delivery / Monthly / Complaint Resolution    | Post-Delivery                                         |
| `survey_date`       | Date of call                                      | 29 Jan 2025                                           |
| `language`          | Language used                                     | Hindi                                                 |
| `quality_score`     | Product quality NPS (0–10)                        | 8                                                     |
| `delivery_score`    | Delivery experience rating (0–10)                 | 9                                                     |
| `service_score`     | Customer service rating (0–10)                    | 7                                                     |
| `composite_nps`     | Calculated composite NPS                          | 8.0                                                   |
| `nps_category`      | Promoter / Passive / Detractor                    | Promoter (8–10)                                       |
| `open_feedback`     | Free-form improvement suggestion (speech-to-text) | "Invoice thoda jaldi bhejain, usually late milti hai" |
| `feedback_theme`    | NLP classification of open feedback               | Documentation — Invoice Timing                        |
| `call_duration`     | Survey call duration                              | 3 min 22 sec                                          |
| `completion_status` | Completed / Partial / Refused                     | Completed                                             |
| `escalation_flag`   | Detractor follow-up required                      | False                                                 |

### NPS Classification & Follow-Up Rules

| NPS Score | Category         | Follow-Up Action                                                | Timeline        |
| --------- | ---------------- | --------------------------------------------------------------- | --------------- |
| 9–10      | Promoter         | Log. Optional: send thank-you WhatsApp.                         | —               |
| 7–8       | Passive          | Log. Sales team review in monthly report.                       | Monthly review  |
| 5–6       | Detractor        | WhatsApp alert to regional sales manager — call within 24 hours | Within 24 hours |
| 0–4       | Strong Detractor | Immediate alert to Sales Head + Regional Manager — urgent call  | Same day        |

### Page Layout

**Top Stats Bar:** Surveys completed this month | Avg NPS score | Promoters (%) | Detractors (%)  
**Centre Left (50%):** NPS scoreboard — dealer-wise scores, trend arrows, and category badges  
**Centre Right (50%):** Feedback theme analysis — bar chart of top improvement themes from open responses  
**Bottom:** Survey campaign status — active campaigns with completion rate and pending calls

### NPS Scoreboard Parameters

| Column         | Content                                             |
| -------------- | --------------------------------------------------- |
| Dealer Name    | Account name + city                                 |
| Last NPS Score | Most recent composite NPS (0–10)                    |
| NPS Category   | Promoter (green) / Passive (blue) / Detractor (red) |
| Trend          | ↑ improving / → stable / ↓ declining vs last month  |
| Last Survey    | Date of most recent completed survey                |
| Open Feedback  | Last suggestion (truncated, expandable)             |

### Mock Demo Data — Dealer NPS Scoreboard (12 Dealers)

| Dealer              | City      | NPS | Category     | Trend | Last Feedback Theme |
| ------------------- | --------- | --- | ------------ | ----- | ------------------- |
| Patel Agencies      | Rajkot    |     | 🟢 Promoter  | ↑     | —                   |
| Mehta Brothers      | Vadodara  |     | 🔵 Passive   | →     | Faster delivery     |
| Sharma Distributors | Vadodara  |     | 🔴 Detractor | ↓     | Packaging quality   |
| Shah Traders        | Surat     | 9.0 | 🟢 Promoter  | ↑     | —                   |
| Joshi & Sons        | Rajkot    | 7.8 | 🔵 Passive   | →     | Invoice timing      |
| Trivedi Traders     | Surat     |     | 🟢 Promoter  | →     | —                   |
| R.K. Engineering    | Ahmedabad | 6.0 | 🔴 Detractor | ↓     | Product consistency |
| Kapoor Supplies     | Ahmedabad | 8.7 | 🟢 Promoter  | ↑     | —                   |
| Nair Industries     | Ahmedabad | 7.5 | 🔵 Passive   | →     | WhatsApp updates    |
| Desai Traders       | Surat     | 9.2 | 🟢 Promoter  | ↑     | —                   |
| Agarwal Metals      | Rajkot    | 4.8 | 🔴 Detractor | ↓     | Delivery delays     |
| Gupta Hardware      | Anand     | 7.0 | 🔵 Passive   | ↑     | Credit terms        |

### Feedback Theme Analysis (NLP Classification of Open Responses)

| Feedback Theme                 | Mentions This Month | % of Responses | Trend       |
| ------------------------------ | ------------------- | -------------- | ----------- |
| Delivery speed / timing        | 14                  | 28%            | ↑ Rising    |
| Invoice / documentation timing | 9                   | 18%            | → Stable    |
| Packaging quality              | 7                   | 14%            | ↑ Rising    |
| Product consistency            | 6                   | 12%            | → Stable    |
| WhatsApp communication         | 5                   | 10%            | ↓ Improving |
| Credit terms                   | 4                   | 8%             | → Stable    |
| Pricing                        | 3                   | 6%             | → Stable    |
| Other                          | 2                   | 4%             | —           |

### WhatsApp — Detractor Alert (Auto-triggered for Scores ≤ 6)

```
⚠️ DEALER NPS ALERT | Fortiv Manufacturing AI

DETRACTOR DETECTED — Immediate Follow-Up Required

Dealer: Sharma Distributors, Vadodara
Contact: Ramesh Sharma
NPS Score:  (Previous:  — declining)

Feedback: "Packaging quality khraab hai, last 2 deliveries mein bhi same issue tha"

Recommended action: Call within 24 hours.
This dealer has been a Passive-to-Detractor trend for 2 months.

— Fortiv Manufacturing AI | Survey Date: 26 Jan 2025
```

### Quarterly Dealer Satisfaction Report (Auto-generated)

```
📊 DEALER SATISFACTION REPORT | Q3 FY 2024-25 (Oct–Dec 2024)

OVERALL NPS:  (Previous Quarter:  — ↑ Improving)

CATEGORY BREAKDOWN:
🟢 Promoters (8–10):   42%  (5 dealers)
🔵 Passives (7–7.9):   33%  (4 dealers)
🔴 Detractors (0–6):   25%  (3 dealers)

TOP IMPROVEMENT THEMES THIS QUARTER:
1. Delivery speed (28% of feedback)
2. Invoice/documentation timing (18%)
3. Packaging quality (14%)

REGIONAL PERFORMANCE:
Rajkot:    NPS  ↑  |  Surat: NPS 8.7 ↑
Vadodara:  NPS  ↓  |  Ahmedabad: NPS  →

ACTION REQUIRED:
• Sharma Distributors (Vadodara) — Detractor × 2 months. Packaging complaint.
  Regional manager to visit.
• R.K. Engineering (Ahmedabad) — Product consistency complaint.
  Route to QA for batch review.

— Fortiv Manufacturing AI | Report generated: 1 Jan 2025
```

### Key UI Elements

- **NPS trend sparklines** — small line charts next to each dealer showing NPS over last 6 months
- **Detractor badge pulse** — red pulsing badge on dealers with NPS ≤ 6 until follow-up is logged
- **Feedback word cloud** — visual representation of open feedback themes (decorative, non-interactive)
- **Survey completion ring** — circular progress showing this month's survey completion rate (e.g. 9 / 12 completed)
- **Geography heat tile** — 4 Gujarat cities (Ahmedabad, Surat, Rajkot, Vadodara) with NPS colour overlays

### Why It Matters

Most manufacturers have no structured mechanism to measure dealer satisfaction — they find out about issues when a dealer stops ordering. Proactive, regular feedback collection identifies problems early, enables targeted intervention before relationships deteriorate, and demonstrates that the company values dealer input.

---

## Complete Module 7 — Master Parameter Reference

### All Data Fields Across M7

| Field Name                    | Type            | Sub-module | Description                                                                 |
| ----------------------------- | --------------- | ---------- | --------------------------------------------------------------------------- |
| `call_id`                     | String          | , , ,      | Unique call reference                                                       |
| `caller_mobile`               | String (masked) | ,          | Inbound caller mobile number                                                |
| `caller_account`              | String          | ,          | CRM account match                                                           |
| `call_language`               | Enum            | , , ,      | Hindi / Gujarati / English                                                  |
| `call_type`                   | Enum            | All        | Inbound / Outbound                                                          |
| `call_direction`              | Enum            | All        | Inbound / Outbound / Outbound                                               |
| `query_type`                  | Enum            |            | Order Status / Dispatch / Pricing / Credit / Stock                          |
| `authentication_status`       | Boolean         | ,          | Caller authenticated against CRM                                            |
| `erp_data_fetched`            | Boolean         |            | Live ERP data retrieved                                                     |
| `resolution_status`           | Enum            | ,          | Resolved / Escalated / Callback Required                                    |
| `escalation_reason`           | Enum            | ,          | Dispute / Credit / Complex / Caller Request / Frustration                   |
| `call_duration_seconds`       | Number          | All        | Call duration in seconds                                                    |
| `first_call_resolution`       | Boolean         |            | Query resolved without callback                                             |
| `complaint_id`                | String          |            | Complaint reference number (CMP-YYYY-XXX)                                   |
| `complaint_defect_type`       | Enum            |            | Dimensional / Surface / Material / Contamination / Delivery / Documentation |
| `complaint_severity`          | Enum            |            | Critical / Major / Minor                                                    |
| `complaint_quantity_affected` | Number          |            | Units affected                                                              |
| `complaint_caller_sentiment`  | Enum            |            | Calm / Concerned / Upset / Escalation Risk                                  |
| `m8_ticket_id`                | String          |            | Linked M8 complaint ticket                                                  |
| `sla_deadline`                | DateTime        |            | Response deadline per severity                                              |
| `invoice_number`              | String          |            | Invoice reference for payment reminder                                      |
| `invoice_amount`              | Number (₹)      |            | Outstanding invoice amount                                                  |
| `days_overdue`                | Number          |            | Days past due date                                                          |
| `overdue_bucket`              | Enum            |            | 1–15 / 16–30 / 31–45 / 45+ days                                             |
| `call_attempt_number`         | Number          |            | 1st / 2nd / 3rd reminder attempt                                            |
| `payment_commitment_date`     | Date            |            | Date caller committed to payment                                            |
| `call_outcome`                | Enum            |            | Commitment / Payment Made / Extension Request / Dispute / No Answer         |
| `collection_escalation_flag`  | Boolean         |            | True if 3+ missed commitments                                               |
| `survey_type`                 | Enum            |            | Post-Delivery / Monthly / Complaint Resolution / Onboarding                 |
| `quality_score`               | Number (0–10)   |            | Product quality NPS score                                                   |
| `delivery_score`              | Number (0–10)   |            | Delivery experience score                                                   |
| `service_score`               | Number (0–10)   |            | Customer service score                                                      |
| `composite_nps`               | Number (0–10)   |            | Weighted composite NPS                                                      |
| `nps_category`                | Enum            |            | Promoter / Passive / Detractor                                              |
| `open_feedback_text`          | Text            |            | Speech-to-text open response                                                |
| `feedback_theme`              | Enum            |            | Delivery / Invoice / Packaging / Product / Communication / Credit           |
| `survey_completion_status`    | Enum            |            | Completed / Partial / Refused                                               |
| `detractor_escalation_flag`   | Boolean         |            | True if NPS ≤ 6                                                             |
| `whatsapp_sent`               | Boolean         | All        | WhatsApp follow-up sent post-call                                           |

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
CRM:                Zoho CRM
Biometric:          ZKTeco, GIDC Vatva campus
Helpline Number:    1800-XXX-XXXX (toll-free, routed to AI voice agent)
Business Hours:     9:00 AM – 6:00 PM (Monday–Saturday)
After-Hours:        AI voice agent handles all inbound calls 24/7
```

### Demo Dealer / Customer Pool (Voice Agent Accounts)

```
Patel Agencies         — Rajkot     — +91 98251 XXXXX — Hindi/Gujarati
Mehta Brothers         — Vadodara   — +91 94262 XXXXX — Gujarati
Sharma Distributors    — Vadodara   — +91 99099 XXXXX — Hindi
Shah Traders           — Surat      — +91 90163 XXXXX — Gujarati
Kapoor Industries      — Ahmedabad  — +91 98330 XXXXX — Hindi
Trivedi Traders        — Surat      — +91 97126 XXXXX — Gujarati
R.K. Engineering       — Ahmedabad  — +91 98795 XXXXX — Hindi/English
Joshi & Sons           — Rajkot     — +91 99009 XXXXX — Gujarati
Nair Industries        — Ahmedabad  — +91 94279 XXXXX — English
Agarwal Metals         — Rajkot     — +91 98251 XXXXX — Hindi
Desai Traders          — Surat      — +91 90163 XXXXX — Gujarati
Gupta Hardware         — Anand      — +91 99795 XXXXX — Hindi/Gujarati
```

### Demo Contact Names (Dealers)

```
Rajesh Patel         — Patel Agencies (Purchase / Owner)
Vijay Mehta          — Mehta Brothers (MD)
Ramesh Sharma        — Sharma Distributors (Owner)
Deepak Shah          — Shah Traders (Purchase Manager)
Rajesh Kapoor        — Kapoor Industries (Purchase Head)
Manish Trivedi       — Trivedi Traders (MD)
Rakesh Kumar         — R.K. Engineering (Plant Head)
Anil Joshi           — Joshi & Sons (Owner)
Suresh Nair          — Nair Industries (Supply Chain)
Rohit Agarwal        — Agarwal Metals (Purchase Manager)
Pratik Desai         — Desai Traders (MD)
Vishal Gupta         — Gupta Hardware (Owner)
```

### Demo Call Volume Stats (Reference Week — 22–28 Jan 2025)

```
Total Calls (All Agents):       247
 Order Status:               148  (60%)
 Complaint Logging:           54  (22%)
 Payment Reminders (OB):      31  (13%)
 Feedback Surveys (OB):       14  (5%)

AI Resolution Rate:              81%
Human Escalation Rate:           19%
Avg Call Duration (all):         2 min 34 sec
After-Hours Calls (6 PM–9 AM):   38  (all handled by AI)
Top Language:                    Hindi (44%)
Complaints Logged via :       54 tickets → auto-routed to M8
Payment Commitments Secured:     14 of 31 overdue calls (₹1L committed)
NPS Surveys Completed:           14 of 12 active dealers (new + monthly)
Detractors Identified:           3 (flagged to sales manager)
```

---

## Demo Build Prompt for M7 Dashboard

```
Build a Customer & Dealer Voice Agents dashboard for Fortiv ManufactureSmart Pvt. Ltd.,
a Gujarat precision metal components manufacturer. Dark theme, navy #1A3C5E primary,
electric blue #2E86AB accent, amber #E8A838 warning, coral red #D85A30 danger, dark bg #0D1B2A.

Four sub-module navigation within M7. Default landing on M7 Module Overview.

Show:
(1) Top KPI bar: Calls Handled Today (47), AI Resolution Rate (82% — green),
    Calls Escalated (8 — amber), Outbound Pending (23)
(2) Live call activity feed — 3 active calls with waveform animation, language badge
    (Hindi/Gujarati/English), query type badge (Order Status / Complaint / Payment)
(3) Agent performance donut — calls split across 4 sub-agents (: 28, : 9,
    : 6, : 4) with colour-coded segments
(4) Language split bar chart — Hindi 45%, Gujarati 34%, English 21%
(5) Recent calls log — last 10 calls with caller, query type, language, duration,
    resolution badge (Resolved green / Escalated amber)
(6) Quick tiles for 4 sub-modules at bottom

Indian manufacturing context — Ahmedabad GIDC, Gujarat dealers, WhatsApp-first follow-ups,
rupee currency (₹ lakhs). JetBrains Mono for all numbers.
Animated call waveform on active calls. React app with recharts.
```

---

## Brand & Design Parameters for M7 UI

### Color Usage

| Element                   | Color                            | Hex     |
| ------------------------- | -------------------------------- | ------- |
| Page background           | Dark navy                        | #0D1B2A |
| Card/panel background     | White                            | #FFFFFF |
| Primary brand             | Deep navy                        | #1A3C5E |
| Accent / links            | Electric blue                    | #2E86AB |
| Escalated / danger        | Coral red (pulsing for critical) | #D85A30 |
| Warning / payment overdue | Amber                            | #E8A838 |
| Resolved / success        | Teal green                       | #1D9E75 |
| Info / language badge     | Electric blue                    | #2E86AB |
| Section background        | Off white                        | #F5F6FA |

### Typography

| Use Case                            | Font                                 |
| ----------------------------------- | ------------------------------------ |
| Module title, page heading          | Playfair Display or DM Serif Display |
| Body text, labels, descriptions     | DM Sans or Plus Jakarta Sans         |
| All numbers, quantities, timestamps | JetBrains Mono                       |

### Key Animations (Demo-Specific)

| Animation             | Where                 | Description                                             |
| --------------------- | --------------------- | ------------------------------------------------------- |
| Audio waveform        | Active call card in / | Animated sine wave pulses while call is in progress     |
| Transcript scroll     | Live call panel       | Text appearing word-by-word as dialogue progresses      |
| ERP fetch pulse       | right panel           | 3-second loading animation while ERP data is retrieved  |
| Ticket creation flash | call close            | M8 ticket card materialises with "Ticket Created" badge |
| NPS ring fill         | scoreboard            | Circular gauge animates to score on page load           |
| Collection counter    | stats bar             | ₹ amount increments as commitments are logged           |
| Detractor badge pulse | NPS table             | Red badge pulses on dealers with NPS ≤ 6                |

---

## Technical Integration Map for M7

| Sub-module         | External APIs / Systems                                  | Data Flow Direction                             |
| ------------------ | -------------------------------------------------------- | ----------------------------------------------- |
| Order Status Agent | ERP (SAP / Tally / Odoo) — open orders, dispatch, stock  | ERP → Voice Agent → Caller                      |
| Order Status Agent | CRM — caller authentication, call logging                | CRM → Authentication → CRM call log             |
| Complaint Logger   | M8 Complaint System — ticket creation                    | Voice Agent → M8 ticket → WhatsApp alert        |
| Complaint Logger   | CRM — account lookup, complaint history                  | CRM → Context → Voice Agent                     |
| Payment Reminder   | ERP Accounts Receivable — overdue invoices               | ERP → Campaign trigger → Outbound call          |
| Payment Reminder   | CRM — commitment logging, escalation                     | Voice Agent → CRM commitment → Finance alerts   |
| Payment Reminder   | WhatsApp Business API — follow-up messages               | Voice Agent → WhatsApp on no-answer             |
| Feedback Agent     | CRM — dealer contact list, delivery confirmation trigger | CRM → Survey campaign → NPS database            |
| Feedback Agent     | M4 Dealer Management — delivery confirmed trigger        | M4 → Survey trigger → Voice Agent               |
| Feedback Agent     | WhatsApp Business API — detractor alerts                 | NPS result → WhatsApp to regional sales manager |

---

## Summary: M7 at a Glance

| Item                 | Detail                                                                                                   |
| -------------------- | -------------------------------------------------------------------------------------------------------- |
| Module               | M7 — Customer & Dealer Voice Agents                                                                      |
| Sub-modules          | 4 ( → )                                                                                                  |
| Total pages          | 5 (1 dashboard + 4 sub-module pages)                                                                     |
| Primary data objects | Call records, complaint tickets, payment commitments, NPS scores                                         |
| Systems covered      | SAP / Tally / Odoo (ERP) · Zoho CRM · M8 Complaint System · M4 Dealer Management · WhatsApp Business API |
| Key output           | Autonomous call resolution + complaint tickets + payment commitments + dealer NPS scores                 |
| Demo focus           | Live call recording — Hindi language, ERP data retrieved in 45 seconds, zero human involvement           |
| Design tone          | Dark navy dashboard, real-time call activity, industrial precision                                       |
| Compliance           | DPDP Act 2023 · TRAI call regulations · GST-ready                                                        |
| Currency             | ₹ Indian Rupee — Lakhs (L) and Crores (Cr)                                                               |
| Date format          | DD/MM/YYYY                                                                                               |
| Languages            | Hindi (primary) · Gujarati · English                                                                     |
| Call Hours           | Inbound: 24/7 AI · Outbound: 9 AM – 6 PM                                                                 |

---

_Manufacturing AI Command Center — Module 7 Build Guide_  
_by Fortiv Solutions · fortivsolutions.in_  
_Version 1.0 · Confidential_
