# M4 — Dealer & Distributor Communication Automation

### Manufacturing AI Command Center · Fortiv Solutions · fortivsolutions.in

> **Module Tagline:** AI agents handle order inquiries, stock queries, dispatch updates, and payment follow-ups with your dealer and distributor network 24/7 — eliminating repetitive manual communication and building stronger dealer relationships at scale.

**Document Type:** Module Build Guide & Parameter Reference  
**Module Code:** M4  
**Total Sub-Modules:** 6 ( → )  
**Version:** 1.0  
**Company:** Fortiv Solutions  
**Classification:** Confidential  
**Market:** India — Gujarat Focus (Ahmedabad, Rajkot, Vadodara, Surat)

---

## Module Overview

### Purpose

Replace the manual, reactive communication model between factory and dealer network with an **always-on AI communication layer** that handles order intake, dispatches updates, payment reminders, and onboarding automatically — so your sales and dispatch teams stop answering repetitive queries and focus on growing the distribution network instead.

### Core Problem Being Solved

| Pain Point                 | Without M4                                                         | With M4                                                      |
| -------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------ |
| Dealer order intake        | Salesperson takes call → manual ERP entry → calls back (30–60 min) | AI captures order via WhatsApp → ERP created in 2 minutes    |
| After-hours queries        | Dealer calls go unanswered until morning                           | AI responds in 12 seconds at any hour                        |
| Dispatch communication     | Dealer calls dispatch team repeatedly for tracking                 | Proactive WhatsApp updates at every milestone                |
| Payment follow-up          | Awkward manual calls by sales team                                 | Automated reminders on schedule, escalation only when needed |
| Secondary sales visibility | No visibility beyond factory shipment to dealer                    | Weekly auto-collection of dealer sell-out data               |
| New dealer onboarding      | 2–4 weeks of paperwork and follow-up                               | 2–3 day digital workflow with e-KYC and e-sign               |

### Demo Wow Moment

**A dealer sending a WhatsApp message at 9:30 PM asking about stock availability and order status — receiving an accurate, personalised response in 12 seconds**, including live inventory levels and confirmed dispatch date, from the AI agent — with the conversation logged automatically in CRM.

---

## Module-Level Parameters

| Parameter             | Value                                                                                     |
| --------------------- | ----------------------------------------------------------------------------------------- |
| Module ID             | M4                                                                                        |
| Module Name           | Dealer & Distributor Communication Automation                                             |
| Sub-module Count      | 6                                                                                         |
| Primary Output        | Automated dealer communication + order intake + payment follow-up + onboarding            |
| Primary Users         | Sales Head, Regional Sales Managers, Dispatch Team, Finance (Collections), Dealer Network |
| Communication Channel | WhatsApp Business API (primary) · Email · Dealer Web Portal                               |
| Languages             | English · Hindi · Gujarati                                                                |
| ERP Integration       | Bi-directional — reads stock/orders/invoices, writes new orders/PO logs                   |
| Systems Integrated    | SAP, Oracle, Tally Prime, Odoo, ERPNext, WhatsApp Business API, GSTN API, DigiSign        |
| Compliance            | GST-ready · DPDP Act 2023 · GSTN API verification · Aadhaar e-KYC                         |
| Currency Format       | ₹ Indian Rupee — Lakhs (L) and Crores (Cr)                                                |
| Demo Financial Period | FY 2024–25 (Apr 2024 – Mar 2025)                                                          |

---

## Module Pages & Navigation Structure

```
M4 — Dealer & Distributor Communication Automation
│
├── [Page 1]  Module Dashboard / Overview              ← Landing page for M4
│             (KPIs, live conversation feed, dealer activity map, alert panel)
│
├── [Page]  Dealer WhatsApp AI Agent
│             (Live chat simulation, query log, escalation panel, response analytics)
│
├── [Page]  Order Intake Automation
│             (Order parsing feed, validation status, ERP creation log, daily summary)
│
├── [Page]  Dispatch & Logistics Update Agent
│             (Active shipments tracker, notification log, delivery confirmation feed)
│
├── [Page]  Secondary Sales Tracking Agent
│             (Dealer sell-out dashboard, primary vs secondary comparison, stagnation alerts)
│
├── [Page]  Dealer Payment Follow-Up Automation
│             (Receivables ageing table, reminder status, collection dashboard)
│
└── [Page]  Dealer Onboarding Workflow
              (Application pipeline, KYC status, e-sign tracker, onboarding dashboard)
```

---

## Page 1 — Module Dashboard (M4 Overview)

### Purpose

The landing screen for Module 4. Provides a real-time view of the entire dealer communication engine — active conversations, orders received today, dispatches in transit, payment overdue alerts, and dealer activity health — all in one screen.

### Layout

- **Top Stats Bar** (4 KPI cards across)
- **Centre Left:** Live WhatsApp conversation feed (last 10 interactions)
- **Centre Right:** Dealer activity map (Gujarat state + key cities) + active orders donut
- **Bottom:** Quick-access tiles to each sub-module ( → )

### KPI Cards (Top Stats Bar)

| Card                 | Metric                              | Mock Value | Color                        |
| -------------------- | ----------------------------------- | ---------- | ---------------------------- |
| Active Dealers       | Total registered dealers in network | 84         | Accent Blue #2E86AB          |
| Orders Today         | Orders received via AI agent today  | 11         | Success Green #1D9E75        |
| Overdue Receivables  | Outstanding invoices past due date  | ₹1L        | Danger Red #D85A30 (pulsing) |
| Shipments in Transit | Active dispatches not yet confirmed | 23         | Warning Amber #E8A838        |

### Live Conversation Feed (Centre Left)

Scrolling real-time feed showing the last 10 dealer interactions:

| Time     | Dealer                        | Query Type            | AI Response Time | Status               |
| -------- | ----------------------------- | --------------------- | ---------------- | -------------------- |
| 9:47 PM  | Patel Agencies, Rajkot        | Order Status          | 11 sec           | ✓ Resolved           |
| 9:31 PM  | Sharma Distributors, Vadodara | Stock Inquiry         | 8 sec            | ✓ Resolved           |
| 8:55 PM  | Jain Traders, Surat           | Dispatch LR Number    | 14 sec           | ✓ Resolved           |
| 7:20 PM  | Kumar Enterprises, Ahmedabad  | Credit Limit Query    | 9 sec            | ✓ Resolved           |
| 6:44 PM  | Mehta Brothers, Rajkot        | Return Request        | —                | ↗ Escalated to Sales |
| 4:10 PM  | Desai & Co., Surat            | Price Inquiry         | 7 sec            | ✓ Resolved           |
| 3:52 PM  | Parikh Agencies, Ahmedabad    | New Order             | 112 sec          | ✓ Order Created      |
| 2:31 PM  | Raval Distributors, Vadodara  | Delivery Confirmation | 6 sec            | ✓ Resolved           |
| 1:08 PM  | Trivedi Trading, Rajkot       | Balance Statement     | 10 sec           | ✓ Resolved           |
| 11:43 AM | Shah Merchants, Surat         | Stock Inquiry         | 9 sec            | ✓ Resolved           |

### Dealer Activity Map

Gujarat state map with dealer location dots:

- **Green dot** — active dealer, ordered in last 7 days
- **Amber dot** — inactive for 8–30 days
- **Red dot** — inactive for 30+ days (stagnation risk)
- City clusters: Ahmedabad (24 dealers), Rajkot (18 dealers), Surat (22 dealers), Vadodara (20 dealers)

### Sub-Module Quick Access Tiles (Bottom Row)

Six clickable tiles, each showing:

- Sub-module number + name
- One-line description
- Status indicator (Active / Paused)
- Key stat for today (orders processed / messages sent / invoices followed up)

---

## Page 2 — Submodule: Dealer WhatsApp AI Agent

### What It Is

A fully autonomous AI agent deployed on WhatsApp Business API that handles inbound queries from your dealer and distributor network — stock enquiries, order status, pricing, dispatch confirmation, return requests, and balance statements — 24 hours a day, in English, Hindi, and Gujarati.

### Query Categories Handled

| Query Type         | Example Dealer Message                         | AI Response Behaviour                                                             |
| ------------------ | ---------------------------------------------- | --------------------------------------------------------------------------------- |
| Stock availability | "Do you have 500 units of MS-204 available?"   | Checks live ERP inventory → responds with qty available + lead time for balance   |
| Order status       | "Status of my order #ORD-2024-887?"            | Pulls ERP order → responds with current stage + estimated dispatch date           |
| Dispatch tracking  | "My material was to arrive today"              | Checks dispatch record → shares LR number, transporter, last tracking update      |
| Pricing            | "Current rate for MS-208?"                     | Retrieves dealer-specific rate card → responds with trade price + applicable slab |
| Credit limit       | "What is my remaining credit?"                 | Pulls AR balance → responds with credit limit, utilised, available                |
| Return/replacement | "Received 50 units with defects"               | Logs return request → confirms pickup scheduling → routes to M8 after-sales       |
| Balance statement  | "Send me my statement for Jan"                 | Generates mini-statement → sends as PDF or structured message                     |
| Escalation         | Pricing disputes, credit overrides, complaints | Routes to sales manager with full conversation context                            |

### Dealer Authentication

Each dealer is identified by their registered WhatsApp mobile number. On first message in a session:

- System identifies dealer account and retrieves: name, code, territory, outstanding balance, active orders, assigned sales manager
- If number is unregistered: AI responds with onboarding link and directs to sales team

### Page Layout

**Top:** Agent health bar — "WhatsApp Agent: Online | 84 dealers registered | Avg response: 9.4 sec today"  
**Centre Left (60%):** Live chat simulation panel — selected dealer conversation thread  
**Centre Right (40%):** Query log — all interactions today with type, response time, resolution status  
**Bottom:** Response performance analytics — queries by type, resolution rate, escalation rate

### Mock Demo Data — Simulated Conversation (Patel Agencies, Rajkot — 9:47 PM)

```
DEALER: Patel Agencies, Rajkot (+91 98XXX XXXXX)
──────────────────────────────────────────────────

[9:47:03 PM] Patel Agencies:
Kem cho, mara order #ORD-2024-1041 no status shu che?
(Hi, what is the status of my order #ORD-2024-1041?)

[9:47:14 PM] Fortiv AI Agent: (Response time: 11 seconds)
Namaste Patel Agencies! 🙏

Your order #ORD-2024-1041 details:
• Items: MS-204 × 500 units, SP-044 × 200 units
• Status: ✅ QC Cleared — Dispatch Scheduled
• Dispatch Date: Tomorrow, 23rd Jan (Morning)
• Transporter: Saurashtra Transport
• Estimated Delivery: 24th or 25th Jan

You will receive the LR number on WhatsApp once the truck is loaded tomorrow morning.

Is there anything else I can help you with?

[9:48:22 PM] Patel Agencies:
Ok thanks. Also do you have MS-208 in stock? Need 300 units.

[9:48:30 PM] Fortiv AI Agent: (Response time: 8 seconds)
MS-208 Stock Update:
• Available now: 840 units ✅
• Your trade price: ₹1,240/unit
• For 300 units: ₹3,72,000 + GST

Shall I book this order? Reply CONFIRM and I will create it right away.

[9:49:11 PM] Patel Agencies:
CONFIRM

[9:49:18 PM] Fortiv AI Agent:
✅ Order Confirmed!
Order #ORD-2024-1048 created.
• MS-208 × 300 units — ₹3,72,000 + GST
• Tentative dispatch: 25th Jan (subject to schedule)

Your sales contact Suresh Nair has been notified.
Thank you! 🙏

— Fortiv ManufactureSmart AI
```

### Response Analytics Panel

| Metric                                | Today           | This Week | This Month |
| ------------------------------------- | --------------- | --------- | ---------- |
| Total queries handled                 | 47              | 312       | 1,284      |
| Avg response time                     | 9.4 sec         | 10.2 sec  | 1 sec      |
| Resolved without escalation           | 91%             | 89%       | 87%        |
| Escalated to sales team               | 9%              | 11%       | 13%        |
| Orders created via AI                 | 11              | 68        | 274        |
| Languages: English / Hindi / Gujarati | 52% / 28% / 20% | —         | —          |

### Key UI Elements

- **Live chat panel** — scrolling WhatsApp-style conversation thread with dealer name, timestamp, read receipts
- **Response timer badge** — shows time-to-response on each AI message in green
- **Escalation flag** — conversation cards with unresolved escalations shown in amber
- **Language toggle** — shows conversation in original language + English translation

### Why It Matters

Dealers are your most important B2B customers. Slow query response — especially after business hours — damages relationships and pushes orders to competitors. A 12-second AI response at 9 PM builds trust and loyalty at zero incremental cost.

---

## Page 3 — Submodule: Order Intake Automation

### What It Is

An AI agent that accepts dealer orders via WhatsApp, email, or dealer portal — parses the order details, validates stock availability and credit limit, and logs the confirmed order into ERP — without any manual order entry by your sales team.

### Order Intake Channels

| Channel             | How It Works                                                                        | Processing Time   |
| ------------------- | ----------------------------------------------------------------------------------- | ----------------- |
| WhatsApp (text)     | Dealer sends informal message → AI parses items + quantities → validates → confirms | ~2 minutes        |
| WhatsApp (document) | Dealer sends PO as PDF or image → AI reads document → extracts line items           | ~3 minutes        |
| Email               | Dealer sends PO PDF → AI reads attachment → extracts and validates → creates order  | ~5 minutes        |
| Dealer Portal       | Web form with live stock and pricing display → real-time validation                 | Instant on submit |

### Order Validation Rules

| Validation Check       | Pass Condition                                 | Fail Action                                                         |
| ---------------------- | ---------------------------------------------- | ------------------------------------------------------------------- |
| Item code vs catalogue | Item code exists in active product list        | Flag: "Item MS-XXX not in active catalogue. Checking alternatives." |
| Stock availability     | Requested qty ≤ available stock                | Inform dealer of available qty + lead time for balance              |
| Credit limit           | Outstanding balance + new order ≤ credit limit | Flag to sales manager for credit override                           |
| Pricing vs rate card   | Dealer's applicable slab price confirmed       | Show price before confirmation                                      |
| MOQ compliance         | Order qty ≥ minimum order quantity             | Flag and suggest MOQ adjustment                                     |

### Order Data Fields Created in ERP

| Field                    | Description                   | Mock Example           |
| ------------------------ | ----------------------------- | ---------------------- |
| `order_id`               | System-generated order number | ORD-2024-1048          |
| `dealer_code`            | Registered dealer ID          | DLR-0094               |
| `dealer_name`            | Dealer business name          | Patel Agencies, Rajkot |
| `order_channel`          | How order was received        | WhatsApp               |
| `line_items`             | Items, quantities, unit price | MS-208 × 300 @ ₹1,240  |
| `order_value`            | Total order value             | ₹3,72,000              |
| `gst_applicable`         | GST rate and amount           | 18% — ₹66,960          |
| `total_with_gst`         | Invoice value                 | ₹4,38,960              |
| `tentative_dispatch`     | Estimated dispatch date       | 25th Jan               |
| `order_received_at`      | Timestamp of intake           | 22 Jan 2025, 9:49 PM   |
| `created_by`             | Entry method                  | AI Agent — WhatsApp    |
| `sales_manager_notified` | Notification sent             | ✓ Suresh Nair notified |

### Page Layout

**Top:** Today's order intake summary — "11 orders received | ₹24.8L value | 9 via WhatsApp | 1 via email | 1 via portal"  
**Centre Left (60%):** Order parsing feed — rolling list of today's orders with parsing animation on new intake  
**Centre Right (40%):** Validation panel — pass/fail details for the selected order  
**Bottom:** Daily order summary by dealer + "Export to ERP Report" button

### Mock Demo Data — Today's Orders (22 Jan 2025)

| Order #       | Dealer                        | Channel  | Items                      | Value  | Status                         |
| ------------- | ----------------------------- | -------- | -------------------------- | ------ | ------------------------------ |
| ORD-2024-1048 | Patel Agencies, Rajkot        | WhatsApp | MS-208 × 300               | ₹2L    | ✓ ERP Created                  |
| ORD-2024-1047 | Shah Merchants, Surat         | Email    | PC-112 × 150, MS-204 × 500 | ₹4L    | ✓ ERP Created                  |
| ORD-2024-1046 | Parikh Agencies, Ahmedabad    | WhatsApp | SP-044 × 400               | ₹2.88L | ✓ ERP Created                  |
| ORD-2024-1045 | Trivedi Trading, Rajkot       | Portal   | MS-212 × 200, PC-118 × 100 | ₹3.96L | ✓ ERP Created                  |
| ORD-2024-1044 | Kumar Enterprises, Ahmedabad  | WhatsApp | MS-204 × 800               | ₹4L    | ⚠️ Credit limit — Sales review |
| ORD-2024-1043 | Desai & Co., Surat            | WhatsApp | MS-208 × 250               | ₹0L    | ✓ ERP Created                  |
| ORD-2024-1042 | Raval Distributors, Vadodara  | Email    | PC-112 × 300               | ₹2.76L | ✓ ERP Created                  |
| ORD-2024-1041 | Jain Traders, Surat           | WhatsApp | MS-204 × 600, SP-044 × 200 | ₹2L    | ✓ ERP Created                  |
| ORD-2024-1040 | Mehta Brothers, Rajkot        | Portal   | MS-212 × 500               | ₹0L    | ✓ ERP Created                  |
| ORD-2024-1039 | Sharma Distributors, Vadodara | WhatsApp | PC-118 × 180               | ₹2L    | ✓ ERP Created                  |
| ORD-2024-1038 | Modi Sales, Ahmedabad         | WhatsApp | MS-208 × 350, MS-204 × 250 | ₹1L    | ✓ ERP Created                  |

### Order Parsing Animation (Demo)

```
[INCOMING — WhatsApp — Patel Agencies, Rajkot — 9:49 PM]

Raw message received:
"CONFIRM"  ← responding to AI stock offer

AI PARSING:
→ Context: Previous offer — MS-208 × 300 units @ ₹1,240/unit confirmed
→ Item code: MS-208 ✓ Active in catalogue
→ Stock check: 840 units available ✓ — 300 requested ✓
→ Credit check: Outstanding ₹L + new ₹2L = ₹7.92L vs limit ₹12L ✓
→ Price: ₹1,240/unit (DLR-0094 slab B rate) ✓
→ Order value: ₹3,72,000 + 18% GST = ₹4,38,960

CREATING IN ERP... ████████████░░░░  Done in 1m 54s

Order #ORD-2024-1048 — CREATED ✓
Confirmation sent to dealer ✓
Sales manager Suresh Nair notified ✓
```

### Key UI Elements

- **Parsing animation** — progress bar with steps (Received → Parsed → Validated → ERP Created) running on each new order
- **Exception badge** — amber flag on orders requiring manual sales team intervention
- **Channel icon** — WhatsApp / Email / Portal icon on each order card
- **Daily intake bar chart** — hourly order count throughout the day

### Why It Matters

Manual order intake in most companies involves a dealer calling → salesperson taking notes → manually entering into ERP → calling back to confirm — a process taking 30–60 minutes per order and prone to errors. Automation makes this a 2-minute, zero-error process.

---

## Page 4 — Submodule: Dispatch & Logistics Update Agent

### What It Is

An automated agent that sends proactive dispatch and logistics updates to dealers and distributors via WhatsApp — so they always know when their material is moving without having to call or repeatedly message your dispatch team.

### Notification Trigger Events

| Trigger                       | Timing                                    | Message Sent                                                                                        |
| ----------------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Dispatch Scheduled            | D-1 (day before dispatch)                 | "Your order #ORD-XXXX is scheduled for dispatch tomorrow. Estimated delivery: [date]."              |
| Material Dispatched           | At time of truck loading / GRN signed off | "Order #ORD-XXXX dispatched. LR No: [LR], Transporter: [name]. Track: [link]"                       |
| Delay Alert                   | When dispatch delayed beyond commitment   | "Dispatch of your order has been delayed by [N] days due to [reason]. New date: [date]. Apologies." |
| Delivery Confirmation Request | On estimated delivery date                | "Please confirm receipt of your order delivered today. Reply OK or message us for discrepancies."   |
| Non-Confirmation Follow-Up    | 48 hrs after delivery, if unconfirmed     | "We haven't received delivery confirmation for order #ORD-XXXX. Please update us."                  |

### Shipment Tracking Data Fields

| Field                     | Description                        | Mock Example                           |
| ------------------------- | ---------------------------------- | -------------------------------------- |
| `order_id`                | Sales order reference              | ORD-2024-1041                          |
| `dealer_name`             | Receiving dealer                   | Patel Agencies, Rajkot                 |
| `dispatch_date`           | Actual date of dispatch            | 23 Jan 2025                            |
| `lr_number`               | Lorry Receipt number               | TM24-88721                             |
| `transporter_name`        | Logistics partner                  | Saurashtra Transport                   |
| `vehicle_number`          | Truck registration                 | GJ-03-AX-7741                          |
| `tracking_link`           | Online tracking URL (if available) | track.saurastratransport.in/TM24-88721 |
| `committed_delivery_date` | Date promised to dealer            | 25 Jan 2025                            |
| `actual_delivery_date`    | Date confirmed by dealer           | — (in transit)                         |
| `delivery_status`         | Current status                     | In Transit                             |
| `confirmation_received`   | Dealer confirmed delivery          | ✗ Pending                              |
| `delay_flag`              | Dispatch delayed vs commitment     | ✗ No delay                             |

### Page Layout

**Top Stats:** Active shipments (23) | Delivered today (4) | Delayed (2) | Awaiting delivery confirmation (7)  
**Centre (65%):** Active shipments tracker table — all in-transit orders with current status  
**Right Panel (35%):** Notification log — last 20 messages sent with delivery receipt status  
**Bottom:** WhatsApp message preview panel + "Send Manual Update" button

### Mock Demo Data — Active Shipments (22 Jan 2025)

| Order #       | Dealer                     | Dispatch Date   | LR Number  | Transporter          | Status             | Delay      |
| ------------- | -------------------------- | --------------- | ---------- | -------------------- | ------------------ | ---------- |
| ORD-2024-1038 | Modi Sales, Ahmedabad      | 20 Jan          | TM24-88698 | Gujarat Express      | Delivered ✓        | None       |
| ORD-2024-1037 | Parikh Agencies, Ahmedabad | 20 Jan          | TM24-88702 | Ahmedabad Roadways   | Delivered ✓        | None       |
| ORD-2024-1036 | Sharma Dist., Vadodara     | 21 Jan          | TM24-88710 | Vadodara Transport   | In Transit         | None       |
| ORD-2024-1035 | Shah Merchants, Surat      | 21 Jan          | TM24-88715 | Saurashtra Transport | In Transit         | None       |
| ORD-2024-1034 | Trivedi Trading, Rajkot    | 21 Jan          | TM24-88718 | Rajkot Carriers      | In Transit         | None       |
| ORD-2024-1033 | Kumar Ent., Ahmedabad      | 19 Jan          | TM24-88690 | Gujarat Express      | In Transit         | 🔴 +2 Days |
| ORD-2024-1032 | Jain Traders, Surat        | 19 Jan          | TM24-88685 | Surat Fast Lines     | In Transit         | 🔴 +1 Day  |
| ORD-2024-1041 | Patel Agencies, Rajkot     | 23 Jan (sched.) | —          | Saurashtra Transport | Dispatch Scheduled | —          |

### Sample Dispatch WhatsApp Message

```
📦 Order Dispatched — Patel Agencies, Rajkot
23rd January 2025 | 8:12 AM

Order #ORD-2024-1041 has been dispatched.

Items:
• MS-204 × 600 units
• SP-044 × 200 units

LR Number: TM24-88721
Transporter: Saurashtra Transport
Vehicle: GJ-03-AX-7741
Estimated Delivery: 25th Jan (2 days)
Track: track.saurashtra.in/TM24-88721

Please confirm receipt by replying OK when material arrives.
For queries, reply here or call: +91 98XXX XXXXX

— Fortiv ManufactureSmart
```

### Key UI Elements

- **Status badges** — colour-coded: Dispatch Scheduled (blue), In Transit (amber), Delivered (green), Delayed (red pulsing)
- **Delay counter** — number of days past committed delivery in red on delayed rows
- **Notification receipt check** — WhatsApp blue tick (delivered/read) status shown per message
- **Bulk delay alert** — "Send delay alerts for 2 overdue shipments" button at top

### Why It Matters

Dealers calling the dispatch team repeatedly to track their orders is one of the biggest productivity drains in manufacturing companies. Proactive updates eliminate 80% of these inbound calls — freeing your dispatch team for actual logistics coordination.

---

## Page 5 — Submodule: Secondary Sales Tracking Agent

### What It Is

An AI agent that collects and aggregates secondary sales data (dealer sell-out to end customers) from your distributor network via WhatsApp or portal — giving you visibility into actual market demand, not just your shipments to dealers.

### Data Collection Process

| Step                   | What Happens                                                                                    |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| Weekly trigger         | Every Monday 9 AM: WhatsApp sent to all active dealers with a structured data request           |
| Dealer response        | Dealer shares data via Excel attachment, photo of register, or structured WhatsApp reply        |
| AI extraction          | AI reads the response, extracts product codes, quantities sold, and customer category           |
| Validation             | AI cross-checks against dealer's opening stock (from primary sales) to flag implausible numbers |
| Aggregation            | Data compiled by product, dealer, territory, and week                                           |
| Non-response follow-up | If no data by Wednesday: automated reminder; if still pending by Friday: flags to sales manager |

### Secondary Sales Data Fields

| Field                  | Description                           | Mock Example            |
| ---------------------- | ------------------------------------- | ----------------------- |
| `dealer_code`          | Dealer ID                             | DLR-0094                |
| `dealer_name`          | Name                                  | Patel Agencies, Rajkot  |
| `territory`            | Sales territory                       | Rajkot & Saurashtra     |
| `week`                 | Reporting week                        | W3 Jan 2025 (13–19 Jan) |
| `item_code`            | Product sold                          | MS-208                  |
| `qty_sold_secondary`   | Units sold to end customers           | 210 units               |
| `closing_stock_dealer` | Estimated stock at dealer after sales | 180 units               |
| `days_of_stock`        | Stock cover at current sell rate      | 22 days                 |
| `stagnation_flag`      | High stock, low secondary sales       | ✗ Normal                |
| `fast_mover_flag`      | Closing stock < 10 days cover         | ✓ Fast Mover            |
| `primary_last_week`    | Units billed from factory to dealer   | 500 units               |
| `sell_through_rate`    | Secondary / Primary %                 | 42% this week           |

### Primary vs Secondary Analysis

| Analysis Type     | What It Identifies                                      | Action                                         |
| ----------------- | ------------------------------------------------------- | ---------------------------------------------- |
| Inventory pile-up | High primary shipments, low secondary sell-through      | Alert sales for field visit / promotional push |
| Fast movers       | Low dealer stock, high secondary velocity               | Proactively suggest reorder to dealer          |
| Regional demand   | Products selling fast in one territory, slow in another | Redirect stock / adjust territory allocation   |
| Dead stock        | Item with no secondary sales in 30+ days                | Flag for return, swap, or scheme support       |

### Page Layout

**Top Stats:** Dealers reported this week (67/84) | Total secondary sales this week (₹6L) | Fast movers identified (4) | Stagnation alerts (3)  
**Main Area (60%):** Secondary sales dashboard — product × dealer matrix with sell-through rates  
**Right Panel (40%):** Stagnation and fast-mover alerts with recommended actions  
**Bottom:** Weekly trend chart — primary vs secondary sales last 8 weeks by territory

### Mock Demo Data — Dealer Stagnation Alerts

```
🔴 STAGNATION ALERT — Sharma Distributors, Vadodara
Item: PC-118 | Primary shipped (last 30 days): 600 units
Secondary sold (last 30 days): 82 units
Closing stock estimate: ~518 units | Days of cover: 189 days

RECOMMENDATION:
→ Field visit required — potential market issue or competitor activity
→ Consider: scheme support / retail push / stock swap option
[Assign to Sales Manager] [Schedule Field Visit]

──────────────────────────────────────────────────

🟡 STAGNATION ALERT — Jain Traders, Surat
Item: SP-044 | Primary shipped: 800 units
Secondary sold: 240 units | Closing stock: ~560 units | DoC: 70 days

RECOMMENDATION:
→ Dealer overstocked — pause next shipment or offer promotional scheme
[Hold Next Dispatch] [Send Scheme Offer]

──────────────────────────────────────────────────

✅ FAST MOVER — Patel Agencies, Rajkot
Item: MS-208 | Closing stock: ~180 units | DoC: 22 days (declining)
Secondary sell rate: accelerating +18% week-on-week

RECOMMENDATION:
→ Proactively suggest replenishment order before stock-out
[Send Replenishment Nudge to Dealer]
```

### Primary vs Secondary Trend Chart (8 Weeks)

| Week   | Primary Sales (₹L) | Secondary Sales (₹L) | Sell-Through % |
| ------ | ------------------ | -------------------- | -------------- |
| W2 Nov | 8                  | 7                    | 85%            |
| W3 Nov | 9                  | 7                    | 86%            |
| W4 Nov | 78.8               | 7                    | 94%            |
| W1 Dec | 9                  | 7                    | 74%            |
| W2 Dec | 8                  | 6                    | 77%            |
| W3 Dec | 10                 | 7                    | 71%            |
| W4 Dec | 94.8               | 80.4                 | 85%            |
| W1 Jan | 8                  | 6                    | 78%            |

### Key UI Elements

- **Heatmap matrix** — product × dealer colour-coded by sell-through rate (green / amber / red)
- **Stagnation alert cards** — right panel with days-of-cover gauge and recommended action
- **Response rate tracker** — "67 of 84 dealers submitted this week" progress bar
- **Territory comparison toggle** — switch between Ahmedabad / Rajkot / Surat / Vadodara views

### Why It Matters

Manufacturers who only track their own shipments to dealers are flying blind on actual market demand. Secondary sales visibility is the difference between demand-driven planning and guess-driven planning.

---

## Page 6 — Submodule: Dealer Payment Follow-Up Automation

### What It Is

An automated payment collection agent that sends structured, polite payment reminders to dealers based on invoice due dates — reducing outstanding receivables and eliminating the awkward manual chasing that strains dealer relationships.

### Reminder Cadence (Per Invoice)

| Trigger             | Timing              | Channel                        | Message Tone         | Recipient            |
| ------------------- | ------------------- | ------------------------------ | -------------------- | -------------------- |
| Pre-due reminder    | T-3 days before due | WhatsApp                       | Friendly             | Dealer               |
| Due date reminder   | On due date         | WhatsApp + Email               | Polite, direct       | Dealer               |
| First overdue       | T+7 days overdue    | WhatsApp                       | Firm, professional   | Dealer               |
| Escalation          | T+15 days overdue   | WhatsApp + Sales Manager alert | Management attention | Dealer + RSM         |
| Credit hold trigger | T+30 days overdue   | Sales Head notification        | Internal alert       | Sales Head + Finance |

### Payment Follow-Up Data Fields

| Field                     | Description                              | Mock Example                   |
| ------------------------- | ---------------------------------------- | ------------------------------ |
| `dealer_code`             | Dealer ID                                | DLR-0118                       |
| `dealer_name`             | Dealer business name                     | Sharma Distributors, Vadodara  |
| `invoice_number`          | ERP invoice reference                    | INV-2024-4421                  |
| `invoice_date`            | Date of invoice                          | 08 Jan 2025                    |
| `invoice_amount`          | Invoice value                            | ₹2,84,000                      |
| `due_date`                | Payment due as per credit terms          | 22 Jan 2025                    |
| `days_overdue`            | Days past due date                       | 0 (due today) / 7 / 15         |
| `reminder_stage`          | Current reminder in cadence              | T+7                            |
| `last_reminder_sent`      | Timestamp of last message                | 22 Jan 2025, 10:00 AM          |
| `dealer_response`         | Dealer's reply if any                    | "Will pay by 28th Jan"         |
| `payment_commitment_date` | Committed date if given                  | 28 Jan 2025                    |
| `commitment_status`       | Paid / Pending / Overdue                 | Pending — 6 days to commitment |
| `total_outstanding`       | All invoices outstanding for this dealer | ₹6,12,000                      |

### Sample Reminder Messages

```
T-3 Days (Friendly Pre-Due)
─────────────────────────────────
Hi Sharma Distributors 🙏

Just a friendly reminder that Invoice #INV-2024-4421 for ₹2,84,000
is due for payment on 22nd January 2025.

Please arrange payment at your convenience.

Thank you for your continued business!
— Fortiv ManufactureSmart Finance Team

─────────────────────────────────
T+7 Days (Overdue — Firm)
─────────────────────────────────
Dear Sharma Distributors,

Invoice #INV-2024-4421 for ₹2,84,000 is now 7 days overdue
(Due: 22nd Jan | Today: 29th Jan).

Please clear this at the earliest to maintain your credit limit
of ₹8,00,000. A delay beyond 15 days will require sales manager
review before new orders can be processed.

To share a payment date, simply reply with the date.

— Fortiv ManufactureSmart Finance Team
```

### Page Layout

**Top Stats:** Total outstanding (₹1.84Cr) | Overdue >30 days (₹2L — pulsing red) | Overdue 15–30 days (₹4L) | Due this week (₹3L)  
**Main Area (65%):** Dealer receivables ageing table — invoice-level detail with reminder status  
**Right Panel (35%):** Collection activity panel — reminders sent today, payment commitments received, payments cleared  
**Bottom:** Ageing bucket summary bar chart + "Bulk Send Reminders" button

### Mock Demo Data — Receivables Ageing Table (22 Jan 2025)

| Dealer                  | Invoice #     | Amount    | Due Date | Days O/D | Reminder Stage | Status                      |
| ----------------------- | ------------- | --------- | -------- | -------- | -------------- | --------------------------- |
| Sharma Dist., Vadodara  | INV-2024-4421 | ₹2,84,000 | 22 Jan   | 0        | Due Today      | 🟡 Reminder Sent            |
| Kumar Ent., Ahmedabad   | INV-2024-4398 | ₹4,12,000 | 15 Jan   | 7        | T+7            | 🟡 Awaiting Reply           |
| Jain Traders, Surat     | INV-2024-4389 | ₹1,96,000 | 07 Jan   | 15       | T+15           | 🔴 Escalated to RSM         |
| Raval Dist., Vadodara   | INV-2024-4371 | ₹3,48,000 | 29 Dec   | 24       | T+15           | 🔴 Committed: 28 Jan ✓      |
| Modi Sales, Ahmedabad   | INV-2024-4344 | ₹2,24,000 | 22 Dec   | 31       | Credit Hold    | 🔴 Sales Head Notified      |
| Patel Agencies, Rajkot  | INV-2024-4418 | ₹4,88,000 | 25 Jan   | —        | T-3            | 🟢 Pre-Reminder Sent        |
| Desai & Co., Surat      | INV-2024-4412 | ₹1,62,000 | 28 Jan   | —        | T-6            | 🟢 Due in 6 days            |
| Mehta Brothers, Rajkot  | INV-2024-4404 | ₹3,14,000 | 20 Jan   | 2        | T+2            | 🟡 Reminder Sent            |
| Shah Merchants, Surat   | INV-2024-4396 | ₹2,76,000 | 12 Jan   | 10       | T+7            | 🟡 Reply: "Paying 25th Jan" |
| Trivedi Trading, Rajkot | INV-2024-4388 | ₹1,44,000 | 05 Jan   | 17       | T+15           | 🔴 Escalated to RSM         |
| Parikh Agencies, Ahm.   | INV-2024-4502 | ₹5,24,000 | 30 Jan   | —        | T-8            | 🟢 Upcoming                 |

### Ageing Bucket Summary

| Bucket                | Amount      | Invoices | % of Outstanding |
| --------------------- | ----------- | -------- | ---------------- |
| Not yet due           | ₹8L         | 28       | 48%              |
| 0–7 days overdue      | ₹4L         | 14       | 23%              |
| 8–15 days overdue     | ₹2L         | 9        | 15%              |
| 16–30 days overdue    | ₹1L         | 5        | 8%               |
| 30+ days overdue      | ₹10.8L      | 4        | 6%               |
| **Total Outstanding** | **₹1.84Cr** | **60**   | **100%**         |

### Key UI Elements

- **Ageing bucket bar chart** — colour-coded: green (not due), amber (0–15 days), red (15+ days)
- **Payment commitment badge** — green "Committed: [date]" on dealers who responded with a payment date
- **Bulk send button** — "Send all T+7 reminders" one-click batch action
- **Collection this week panel** — running total of amounts received vs last week

### Why It Matters

Chasing dealer payments is one of the most uncomfortable and time-consuming activities for sales teams. Automated reminders handle the routine follow-up professionally and consistently, while escalation rules ensure the team intervenes only for genuinely problematic accounts.

---

## Page 7 — Submodule: Dealer Onboarding Workflow

### What It Is

An automated onboarding workflow that guides new dealer and distributor applicants through registration, KYC verification, agreement execution, and system access setup — digitising a process that typically takes 2–4 weeks into a 2–3 day workflow.

### Onboarding Stages

| Stage                | Step                                                                  | System               | Time              |
| -------------------- | --------------------------------------------------------------------- | -------------------- | ----------------- |
| 1. Application       | Dealer submits details via web form or WhatsApp                       | Onboarding portal    | Day 1 — 15 min    |
| 2. Document Upload   | GST certificate, PAN, Aadhaar, cancelled cheque, trade references     | Portal / WhatsApp    | Day 1 — 30 min    |
| 3. AI Verification   | GST status via GSTN API, PAN-Aadhaar linkage, bank account penny drop | Automated            | Day 1 — 2 hours   |
| 4. Credit Assessment | Application routed to credit team with AI-compiled profile            | Internal workflow    | Day 1–2 — 4 hours |
| 5. Agreement E-Sign  | Dealer agreement sent for digital signing via DigiSign                | E-sign platform      | Day 2 — same day  |
| 6. System Setup      | Dealer portal login created, WhatsApp contact added to AI agent       | IT auto-provisioning | Day 2–3 — 2 hours |
| 7. Welcome Kit       | Welcome WhatsApp with pricelist, order guide, and contacts            | Automated            | Day 3 — instant   |

### Dealer Application Data Fields

| Field                      | Description                      | Mock Example                       |
| -------------------------- | -------------------------------- | ---------------------------------- |
| `applicant_name`           | Proprietor / Director name       | Kalpesh Parikh                     |
| `business_name`            | Firm name                        | Parikh Enterprises, Vadodara       |
| `gstin`                    | GST Identification Number        | 24AABCP9821K1Z4                    |
| `pan_number`               | PAN of business                  | AABCP9821K                         |
| `registered_address`       | Business address                 | 14, Sayaji Gunj, Vadodara — 390005 |
| `territory_proposed`       | Territory dealer is applying for | Vadodara city + outskirts          |
| `product_interest`         | Products dealer wants to handle  | MS Series, PC Series               |
| `annual_purchase_estimate` | Estimated annual business volume | ₹60–80L                            |
| `credit_limit_requested`   | Requested credit limit           | ₹10L                               |
| `credit_limit_approved`    | Approved by credit team          | ₹8L                                |
| `bank_account`             | Account number for penny drop    | SBI — 3840XXXXXX                   |
| `agreement_status`         | E-sign status                    | ✓ Signed — 21 Jan 2025             |
| `portal_access_created`    | Login provisioned                | ✓ Active                           |
| `onboarding_complete_date` | Date all steps cleared           | 22 Jan 2025                        |

### KYC Verification Checks

| Check                     | Tool                   | Pass Condition                         | Fail Action                                 |
| ------------------------- | ---------------------- | -------------------------------------- | ------------------------------------------- |
| GST registration active   | GSTN API               | Status: Active + matches business name | Flag as mismatch — manual review            |
| PAN-Aadhaar linkage       | IT Dept API            | Linked as of last update               | Flag if unlinked — request updated PAN      |
| Bank account valid        | Penny drop (₹1 credit) | Account exists + name matches          | Flag mismatch — request new account details |
| GST return filing history | GSTN API               | Filed last 3 quarters                  | Flag if defaulter — credit team decision    |

### Page Layout

**Top Stats:** Applications this month (6) | Active in pipeline (3) | Completed onboarding (2) | Rejected (1)  
**Main Area (65%):** Onboarding pipeline — Kanban board with stages and applicant cards  
**Right Panel (35%):** Selected applicant detail — all verification results, document status, outstanding steps  
**Bottom:** KYC verification result panel for selected application

### Onboarding Pipeline — Kanban Board (Current Applications)

```
APPLIED        →  KYC VERIFY    →  CREDIT REVIEW  →  E-SIGN     →  SETUP    →  COMPLETE
──────────────────────────────────────────────────────────────────────────────────────────
Suresh Metals      Parikh Ent.     Gupta Trading    Kumar Dist.                Trivedi Co.
(Surat)            (Vadodara)      (Rajkot)         (Ahmedabad)               (Surat) ✓

Nair Agencies      Bhavsar Bros.
(Ahmedabad)        (Rajkot)
                   ⚠️ GSTN
                   mismatch
```

### Mock Demo Data — Parikh Enterprises, Vadodara (Active Application)

```
APPLICANT:     Parikh Enterprises, Vadodara
CONTACT:       Kalpesh Parikh — +91 94XXX XXXXX
APPLIED:       20 Jan 2025
CURRENT STAGE: Credit Review

KYC VERIFICATION RESULTS:
✓ GSTIN 24AABCP9821K1Z4 — Active | Registered name matches
✓ PAN AABCP9821K — Aadhaar linked ✓
✓ Bank account SBI-3840XXXXX — Penny drop passed ✓
✓ GST returns filed — Oct, Nov, Dec 2024 ✓

DOCUMENTS UPLOADED:
✓ GST Registration Certificate
✓ PAN Card (business)
✓ Cancelled cheque
✓ Aadhaar (proprietor)
✗ Trade references — 1 of 2 received

CREDIT ASSESSMENT:
Requested limit: ₹10L | Credit team review in progress
Annual purchase estimate: ₹60–80L

PENDING:
→ 1 trade reference outstanding — reminder sent 21 Jan
→ Credit team approval — expected today
→ Agreement e-sign — pending credit approval

[Send Reference Reminder] [Approve Credit ₹8L] [Reject Application]
```

### Welcome Kit WhatsApp Message (On Completion)

```
🎉 Welcome to Fortiv ManufactureSmart — Dealer Network!

Dear Kalpesh bhai,

Your dealership registration for Parikh Enterprises, Vadodara
has been approved. Welcome aboard! 🙏

Your Dealer Details:
• Dealer Code: DLR-0107
• Territory: Vadodara City + Outskirts
• Credit Limit: ₹8,00,000
• Payment Terms: 30 days from invoice date

Getting Started:
📋 Current Pricelist: [link]
📦 How to Place Orders: [guide link]
📲 Order via this WhatsApp number — our AI agent is always here
🧾 Portal Login: portal.fortivms.in | ID: parikh.ent@

Your Relationship Manager: Suresh Nair (+91 98XXX XXXXX)

We look forward to a long and successful partnership!

— Team Fortiv ManufactureSmart
```

### Key UI Elements

- **Kanban pipeline** — drag-drop cards across stages, stage count badges
- **KYC result badges** — green tick / amber warning / red fail per verification check
- **Document checklist** — tick list of required documents with upload status
- **Days-in-stage counter** — number of days applicant has been in current stage (flags if stuck)
- **Automated reminder log** — shows all follow-up messages sent to applicant

### Why It Matters

A dealer who has to wait 3 weeks to start ordering can become a competitor's dealer in that time. Automated onboarding creates a professional first impression, ensures compliance with GST and KYC requirements, and gets dealers ordering faster.

---

## Demo Build Prompt for M4 Dashboard

```
Build a Dealer & Distributor Communication Automation dashboard for Fortiv ManufactureSmart Pvt. Ltd.,
a Gujarat precision metal components manufacturer. Dark theme, navy #1A3C5E primary,
electric blue #2E86AB accent, amber #E8A838 warning, coral red #D85A30 danger, dark bg #0D1B2A.

Six sub-module navigation within M4. Default landing on M4 Module Overview.

Show:
(1) Top KPI bar: Active Dealers (84), Orders Today (11 — pulsing green),
    Overdue Receivables (₹1L — pulsing red), Shipments in Transit (23)
(2) Live WhatsApp conversation feed: 10 recent dealer interactions,
    scrolling, with AI response time badges (9–14 seconds each)
(3) Dealer activity map: Gujarat state map with 84 dealer dots
    colour-coded active/inactive/at-risk by territory
(4) Sub-module tiles: 6 tiles at bottom with today's KPI per module

Indian manufacturing context — Gujarat dealer network, WhatsApp Business API,
rupee currency (₹ lakhs). JetBrains Mono for all numbers. React app with recharts.
```

---

## Brand & Design Parameters for M4 UI

### Color Usage

| Element               | Color                            | Hex     |
| --------------------- | -------------------------------- | ------- |
| Page background       | Dark navy                        | #0D1B2A |
| Card/panel background | White                            | #FFFFFF |
| Primary brand         | Deep navy                        | #1A3C5E |
| Accent / links        | Electric blue                    | #2E86AB |
| Overdue / danger      | Coral red (pulsing for critical) | #D85A30 |
| Warning / pending     | Amber                            | #E8A838 |
| Active / success      | Teal green                       | #1D9E75 |
| Info / channel icon   | Electric blue                    | #2E86AB |
| Section background    | Off white                        | #F5F6FA |

### Typography

| Use Case                         | Font                                 |
| -------------------------------- | ------------------------------------ |
| Module title, page heading       | Playfair Display or DM Serif Display |
| Body text, labels, descriptions  | DM Sans or Plus Jakarta Sans         |
| All numbers, amounts, timestamps | JetBrains Mono                       |

### Key Animations (Demo-Specific)

| Animation                 | Where                                | Description                                                         |
| ------------------------- | ------------------------------------ | ------------------------------------------------------------------- |
| WhatsApp typing indicator | chat panel                           | "..." dots animate before AI response appears                       |
| Response timer            | chat panel                           | Timer counts up from 0 → "11 sec" badge on AI message               |
| Order parsing steps       | intake feed                          | Steps animate sequentially: Received → Parsed → Validated → Created |
| Pulsing red badge         | Overdue receivables KPI, delay flags | Badge pulses every 2 seconds                                        |
| Dealer map dot pulse      | M4 dashboard map                     | Active dealer dots pulse gently green                               |
| Kanban card drag          | onboarding pipeline                  | Cards slide between stages with smooth transition                   |
| Stagnation alert drop-in  | alerts panel                         | Alert cards drop in from top with amber flash                       |

---

## Technical Integration Map for M4

| Sub-module        | External APIs / Systems                                                                      | Data Flow Direction                               |
| ----------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| WhatsApp AI Agent | WhatsApp Business API · ERP (orders/stock/invoices)                                          | Dealer → WhatsApp → AI → ERP reads → Response     |
| Order Intake      | WhatsApp Business API · Email · ERP (order creation) · Dealer Portal                         | Dealer → AI parse → ERP write                     |
| Dispatch Updates  | ERP (dispatch module) · Transporter tracking API · WhatsApp Business API                     | ERP → AI → WhatsApp → Dealer                      |
| Secondary Sales   | WhatsApp Business API · ERP (primary sales) · Analytics layer                                | Dealer → WhatsApp → AI extract → Dashboard        |
| Payment Follow-Up | ERP (AR module) · WhatsApp Business API · Email                                              | ERP AR → AI scheduler → WhatsApp + Email → Dealer |
| Dealer Onboarding | GSTN API · IT Dept PAN-Aadhaar API · Bank penny drop · DigiSign e-sign · ERP (dealer master) | Portal → AI verify → ERP dealer master creation   |

---

## Demo Company Profile (Same as M1)

```
Company:            Fortiv ManufactureSmart Pvt. Ltd.
Location:           GIDC Vatva, Ahmedabad, Gujarat
Industry:           Precision Metal Components
Turnover:           ₹28–35 Cr annually
Workforce:          320 employees, 3 shifts
Products:           CRCA Sheet Components, Precision Castings, Stamped Parts
Customers:          Automotive Tier-1 & Tier-2, FMCG, Infrastructure
ERP:                SAP Business One
WhatsApp Business:  Fortiv ManufactureSmart verified business account
Dealer Network:     84 registered dealers across Gujarat
Territories:        Ahmedabad (24) · Surat (22) · Rajkot (18) · Vadodara (20)
```

## Demo Dealer Pool

```
Patel Agencies          — Rajkot        | DLR-0094 | ₹12L credit | Active — high order freq.
Shah Merchants          — Surat         | DLR-0081 | ₹8L credit  | Active
Sharma Distributors     — Vadodara      | DLR-0118 | ₹10L credit | ⚠️ Stagnant stock PC-118
Jain Traders            — Surat         | DLR-0063 | ₹6L credit  | 🔴 Payment overdue 15d
Kumar Enterprises       — Ahmedabad     | DLR-0027 | ₹15L credit | ⚠️ Credit limit hit
Parikh Agencies         — Ahmedabad     | DLR-0072 | ₹10L credit | Active
Raval Distributors      — Vadodara      | DLR-0055 | ₹8L credit  | Payment committed 28 Jan
Trivedi Trading         — Rajkot        | DLR-0048 | ₹7L credit  | 🔴 Payment overdue 17d
Desai & Co.             — Surat         | DLR-0039 | ₹9L credit  | Active
Mehta Brothers          — Rajkot        | DLR-0066 | ₹6L credit  | Return request pending
Modi Sales              — Ahmedabad     | DLR-0033 | ₹12L credit | 🔴 Credit hold >30d
```

## Demo Product Codes Referenced in M4

```
MS-204    CRCA Sheet Component — mm     ₹580/unit
MS-208    CRCA Sheet Component — mm     ₹1,240/unit
MS-212    CRCA Sheet Component — 2.0mm     ₹1,750/unit
PC-112    Precision Casting — Type A        ₹920/unit
PC-118    Precision Casting — Type B        ₹1,100/unit
SP-044    Stamped Part — Standard           ₹720/unit
```

---

## Summary: M4 at a Glance

| Item                 | Detail                                                                                     |
| -------------------- | ------------------------------------------------------------------------------------------ |
| Module               | M4 — Dealer & Distributor Communication Automation                                         |
| Sub-modules          | 6 ( → )                                                                                    |
| Total pages          | 7 (1 dashboard + 6 sub-module pages)                                                       |
| Primary data objects | Dealer orders, shipment status, outstanding invoices, secondary sales, onboarding pipeline |
| Systems covered      | WhatsApp Business API · SAP / Tally / Odoo · GSTN API · DigiSign · ERP                     |
| Key output           | Autonomous dealer communication + order creation + payment collection + onboarding         |
| Demo focus           | Live WhatsApp AI conversation responding in 12 seconds at 9:30 PM                          |
| Design tone          | Dark navy dashboard, WhatsApp-first, dealer-relationship focused                           |
| Compliance           | GST-ready · DPDP Act 2023 · GSTN API KYC · Aadhaar e-KYC                                   |
| Currency             | ₹ Indian Rupee — Lakhs (L) and Crores (Cr)                                                 |
| Date format          | DD/MM/YYYY                                                                                 |
| Languages            | English (primary) · Hindi · Gujarati                                                       |

---

_Manufacturing AI Command Center — Module 4 Build Guide_  
_by Fortiv Solutions · fortivsolutions.in_  
_Version 1.0 · Confidential_
