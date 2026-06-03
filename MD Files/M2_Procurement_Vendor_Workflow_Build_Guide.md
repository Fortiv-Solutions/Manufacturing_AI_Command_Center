# M2 — Procurement & Vendor Workflow Automation
### Manufacturing AI Command Center · Fortiv Solutions · fortivsolutions.in

> **Module Tagline:** Automate the entire procure-to-pay cycle — from PO creation to GRN matching to invoice reconciliation — so your procurement team focuses on vendor relationships, not paperwork.

**Document Type:** Module Build Guide & Parameter Reference  
**Module Code:** M2  
**Total Sub-Modules:** 6 ( → )  
**Version:** 1.0  
**Company:** Fortiv Solutions  
**Classification:** Confidential  
**Market:** India — Gujarat Focus (Ahmedabad, Rajkot, Vadodara, Surat)

---

## Module Overview

### Purpose
Replace the manual, error-prone procurement workflow that creates delays, missed deliveries, and invoice disputes with an **autonomous procure-to-pay engine** that handles PO generation, vendor follow-ups, GRN matching, and invoice reconciliation — integrating directly with your ERP so every transaction is logged without double entry.

### Core Problem Being Solved

| Pain Point | Without M2 | With M2 |
|---|---|---|
| PO creation | 1–2 days per standard PO | Auto-generated in under 5 minutes |
| Vendor follow-up | Procurement officer manually chasing each supplier | Automated WhatsApp reminders on schedule |
| GRN matching | Manual cross-referencing — errors missed | AI matching flags every discrepancy at receipt |
| Invoice processing | 5–10 days manual matching and approval | 24–48 hours with AI three-way match |
| Vendor performance | Based on habit and relationships | Data-driven scorecard across 4 dimensions |
| Spend visibility | End-of-month finance report | Real-time spend vs budget dashboard |
| Payment follow-up | Finance team making awkward collection calls | Automated reminders + escalation rules |

### Demo Wow Moment
**A purchase requisition from M auto-converting into a formatted PO** — triggering a WhatsApp to the vendor, receiving delivery confirmation, matching against GRN, and queuing for payment — all without a single human keystroke shown live.

---

## Module-Level Parameters

| Parameter | Value |
|---|---|
| Module ID | M2 |
| Module Name | Procurement & Vendor Workflow Automation |
| Sub-module Count | 6 |
| Primary Output | Automated POs + vendor follow-ups + matched GRNs + approved invoices + vendor scorecards |
| Primary Users | Purchase Manager, Procurement Officer, Stores Manager, CFO, Finance Team |
| Data Sources | ERP (SAP/Tally/Odoo), WhatsApp Business API, email, GRN/challan documents |
| Systems Integrated | SAP B1, Tally Prime, Odoo, ERPNext, WhatsApp Business API, e-Way Bill (NIC), e-Sign |
| Languages | English, Hindi, Gujarati |
| ERP Integration | Bi-directional — reads requisitions/stock, writes POs/GRNs/invoices/payments |
| Compliance | GST-ready · e-Way Bill · e-Invoice · TDS (194C) · MSME Payment Act · DPDP Act 2023 |
| Currency Format | ₹ Indian Rupee — Lakhs (L) and Crores (Cr) |
| Demo Financial Period | FY 2024–25 (Apr 2024 – Mar 2025) |

---

## Module Pages & Navigation Structure

```
M2 — Procurement & Vendor Workflow Automation
│
├── [Page 1]  Module Dashboard / Overview              ← Landing page for M2
│             (KPIs, PO pipeline Kanban, spend pulse, vendor alert panel)
│
├── [Page]  Automated Purchase Order Generator
│             (Requisition queue, PO preview, vendor selector, issuance log)
│
├── [Page]  Vendor Follow-Up Automation
│             (Open PO tracker, follow-up schedule, OTD scorecard, escalation log)
│
├── [Page]  GRN Matching Agent
│             (Challan upload panel, AI match results, discrepancy resolution queue)
│
├── [Page]  Invoice Reconciliation & Approval Workflow
│             (Invoice inbox, three-way match panel, approval queue, AP ageing)
│
├── [Page]  Vendor Performance Scorecard
│             (Vendor leaderboard, sub-score breakdown, trend charts, risk flags)
│
└── [Page]  Purchase Budget & Spend Analytics
              (Spend vs budget dashboard, price variance, category analysis, MIS report)
```

---

## Page 1 — Module Dashboard (M2 Overview)

### Purpose
The landing screen for Module 2. Gives the Purchase Manager and CFO a helicopter view of the entire procure-to-pay pipeline — open requisitions, POs in flight, pending GRNs, invoices awaiting approval, and vendor delivery health — in one screen.

### Layout
- **Top Stats Bar** (4 KPI cards across)
- **Centre:** Procure-to-pay Kanban pipeline (all active POs across 8 stages)
- **Right Panel:** Vendor alert feed + urgent action items
- **Bottom:** Spend pulse strip + quick-access tiles to sub-modules ( → )

### KPI Cards (Top Stats Bar)

| Card | Metric | Mock Value | Color |
|---|---|---|---|
| Open Purchase Orders | Count of active POs | 34 | Accent Blue #2E86AB |
| Overdue Deliveries | POs past promised delivery date | 3 | Danger Red #D85A30 (pulsing) |
| Invoices Pending Approval | Invoices awaiting three-way match sign-off | 8 | Warning Amber #E8A838 |
| Monthly Spend | Total PO value issued this month | ₹3L | Success Green #1D9E75 |

### Procure-to-Pay Kanban Pipeline
Eight-stage horizontal Kanban with PO card count per stage:

| Stage | Mock Count | Badge Color |
|---|---|---|
| Requisition Raised | 6 | Grey |
| PO Generated | 4 | Blue |
| PO Sent to Vendor | 9 | Blue |
| Acknowledged by Vendor | 5 | Blue |
| In Transit / Awaiting Delivery | 7 | Amber |
| GRN Pending | 4 | Amber |
| Invoice Received | 5 | Amber |
| Payment Scheduled | 3 | Green |

### Vendor Alert Feed (Right Panel)
Live feed of the 5 most urgent vendor/procurement actions:

| # | Alert | Severity | Action |
|---|---|---|---|
| 1 | MS Round Bar 20mm — delivery 2 days overdue (Mehta Steel Works) | CRITICAL | \"Chase Vendor\" |
| 2 | Invoice #JINV-2024-4821 — price deviation 4.8% above PO rate | HIGH | \"Review\" |
| 3 | PO #2024-1147 — no vendor acknowledgement after 48 hours | HIGH | \"Follow Up\" |
| 4 | GRN #GRN-2024-441 — item code mismatch on 1 line item | MEDIUM | \"Resolve\" |
| 5 | Zinc Coating Powder — delivery due tomorrow, not yet confirmed | MEDIUM | \"Send Reminder\" |

### Spend Pulse Strip (Bottom)
Compact horizontal bar showing:
- Month-to-date spend vs monthly budget (₹3L of ₹52L — 73.8% utilised)
- Top 3 spend categories this month (Raw Materials 68% / Consumables 18% / Packaging 14%)
- Spend trend indicator vs last month (↑ +% vs Apr)

### Sub-Module Quick Access Tiles (Bottom Row)
Six clickable tiles, each showing:
- Sub-module number + name
- One-line description
- Status indicator (Active / Paused)
- Key stat for today (POs pending / vendors flagged / invoices queued)

---

## Page 2 — Submodule: Automated Purchase Order Generator

### What It Is
An AI agent that converts approved purchase requisitions from the ERP into formatted Purchase Orders — selecting the right vendor, applying approved pricing, and issuing the PO via email and WhatsApp — without procurement staff intervention for standard repeat items.

### PO Generation Inputs

| Input | Source | Mock Example |
|---|---|---|
| Purchase Requisition | ERP (manual or MRP agent M trigger) | PR-2024-1047 — CRCA Sheet mm, 3,000 kg, required by 25 Jan |
| Approved Vendor List | ERP vendor master | Mehta Steel Works (primary), Arvind Metals (secondary) |
| Approved Rate Card | ERP purchase rate master | ₹68/kg (last approved rate, valid FY 2024–25) |
| Vendor Lead Time | Vendor master | 5 days |
| Approval Threshold | Admin configuration | Manual approval required for POs above ₹5L |
| GST Details | Vendor master + item HSN | HSN 7209 — GST 18% |

### PO Output Fields Per Purchase Order

| Field | Description | Mock Example |
|---|---|---|
| `po_number` | System-generated PO number | PO-2024-1147 |
| `pr_reference` | Linked purchase requisition | PR-2024-1047 |
| `vendor_name` | Selected vendor | Mehta Steel Works |
| `vendor_gstin` | Vendor GST number | 24AABCM1234A1Z5 |
| `vendor_contact` | Primary contact and mobile | Suresh Mehta — +91 98XXX XXXXX |
| `delivery_address` | Factory delivery address | GIDC Vatva, Ahmedabad — 382445 |
| `item_code` | Material code | RM-CRCA- |
| `item_description` | Material description | CRCA Sheet mm |
| `hsn_code` | HSN code for GST | 7209 |
| `quantity` | Ordered quantity | 3,000 kg |
| `unit` | Unit of measure | KG |
| `rate` | Approved purchase rate | ₹68.00 |
| `basic_value` | Quantity × rate | ₹2,04,000 |
| `gst_rate` | Applicable GST % | 18% |
| `gst_value` | GST amount | ₹36,720 |
| `total_po_value` | Basic + GST | ₹2,40,720 |
| `required_delivery_date` | When material must arrive | 25 Jan 2025 |
| `payment_terms` | Agreed payment terms | Net 30 days from GRN |
| `po_status` | Current status | Sent to Vendor |
| `issued_via` | Channel used to send PO | Email + WhatsApp |
| `issued_at` | Timestamp of issuance | 22 Jan 2025, 10:14 AM |

### Vendor Selection Logic

| Logic Type | Description | When Used |
|---|---|---|
| Preferred Vendor | Always selects the primary approved vendor | Standard repeat items |
| Lowest Rate | Selects vendor with the lowest current approved rate | Price-sensitive categories |
| Fastest Lead Time | Selects vendor who can deliver earliest | URGENT requisitions |
| Rotation Policy | Alternates between approved vendors for a category | Volume-split agreements |
| Manual Override | Procurement officer selects vendor manually | New items, special requirements |

### Approval Routing Rules

| Condition | Routing | Approver |
|---|---|---|
| PO value ≤ ₹50,000 | Auto-approved — no manual sign-off | — |
| PO value ₹50,001 – ₹5,00,000 | WhatsApp approval request to Purchase Manager | Purchase Manager |
| PO value > ₹5,00,000 | Sequential approval: Purchase Manager → CFO | Purchase Manager + CFO |
| New vendor (not in approved list) | Mandatory manual review + vendor qualification | Purchase Manager + MD |
| Emergency URGENT requisition | Fast-track — single approver, 2-hour SLA | Purchase Manager |

### Page Layout
**Top:** Requisition queue — pending PRs awaiting PO generation with priority badges  
**Centre Left (60%):** PO generation panel — selected PR expanded with vendor auto-fill, rate pre-populated, approval routing shown  
**Centre Right (40%):** PO preview — formatted PO document (real-time render as fields are filled)  
**Bottom:** Issued PO log — last 10 POs with vendor, value, status, and WhatsApp delivery confirmation  

### Mock Demo Data — Requisition Queue (6 Pending PRs)

| # | PR Number | Material | Qty | Required By | Triggered By | Value Est. | Priority |
|---|---|---|---|---|---|---|---|
| 1 | PR-2024-1047 | CRCA Sheet mm | 3,000 kg | 25 Jan | M MRP Agent | ₹2,04,000 | 🔴 URGENT |
| 2 | PR-2024-1048 | Zinc Coating Powder | 500 kg | 27 Jan | M MRP Agent | ₹1,70,000 | 🔴 URGENT |
| 3 | PR-2024-1049 | MIG Welding Wire | 40 spools | 30 Jan | Manual | ₹19,200 | 🟡 Normal |
| 4 | PR-2024-1050 | Hex Bolt M10 | 5,000 pcs | 1 Feb | M MRP Agent | ₹21,000 | 🟡 Normal |
| 5 | PR-2024-1051 | Cutting Oil (Industrial) | 200 litres | 3 Feb | Manual | ₹18,400 | 🟢 Low |
| 6 | PR-2024-1052 | Safety PPE Kits | 20 sets | 5 Feb | Manual | ₹14,000 | 🟢 Low |

### PO Generation Animation (Demo Flow)
```
STEP 1 — Requisition Selected: PR-2024-1047 (CRCA Sheet mm, 3,000 kg)
STEP 2 — Vendor Auto-Selected: Mehta Steel Works (preferred vendor, rate ₹68/kg)
STEP 3 — PO Fields Populated: HSN 7209, GST 18%, delivery date 25 Jan
STEP 4 — Approval Check: ₹2,40,720 → requires Purchase Manager approval
STEP 5 — Approval WhatsApp Sent: \"Approve PO #2024-1147 for ₹L — Mehta Steel Works?\"
STEP 6 — Approval Received (1 min 47 sec): Purchase Manager tapped \"Approve\"
STEP 7 — PO Issued: Email PDF + WhatsApp to Suresh Mehta, Mehta Steel Works
STEP 8 — ERP Updated: PO #2024-1147 logged — status: Sent to Vendor
TOTAL TIME: 4 minutes 12 seconds
```

### WhatsApp PO Notification to Vendor
```
📋 PURCHASE ORDER | Fortiv ManufactureSmart Pvt. Ltd.
PO Number: PO-2024-1147
Date: 22 Jan 2025

Dear Mehta Steel Works,

Please find below our Purchase Order:
• CRCA Sheet mm — 3,000 kg @ ₹68.00/kg
• Basic Value: ₹2,04,000 | GST (18%): ₹36,720
• Total: ₹2,40,720

Delivery Address: GIDC Vatva, Ahmedabad — 382445
Required By: 25 Jan 2025
Payment Terms: Net 30 days from GRN

Please acknowledge this PO and share your delivery commitment.
Full PO attached as PDF.

— Fortiv Manufacturing AI | Purchase Dept.
```

### Key UI Elements
- **\"Generate PO\" animation** — watch fields populate sequentially with a progress indicator
- **Vendor auto-select highlight** — selected vendor shown with selection rationale badge (\"Preferred Vendor\" / \"Fastest Lead Time\")
- **Approval status tracker** — real-time timer showing \"Approval pending: 2 min 14 sec\"
- **WhatsApp delivery receipt** — blue double-tick confirmation when vendor receives PO message
- **PO register table** — all POs with filter by vendor / status / date range / value range

### Why It Matters
In most SME manufacturers, raising a PO involves a procurement officer manually filling a template, getting 2 approvals, and sending via email — taking 1–2 days. Automation collapses this to under 5 minutes for standard items, accelerating material inflow and reducing the procurement team's administrative burden.

---

## Page 3 — Submodule: Vendor Follow-Up Automation

### What It Is
An automated follow-up system that monitors outstanding POs and sends timely, personalised reminders to vendors via WhatsApp and email — ensuring deliveries arrive on time without a procurement officer manually chasing each supplier.

### Follow-Up Schedule Per PO

| Trigger | Days Relative to Delivery Date | Message Type | Channel |
|---|---|---|---|
| Acknowledgement check | T+2 (if no vendor acknowledgement) | \"Please acknowledge PO\" | WhatsApp |
| Dispatch reminder | T-5 | \"Delivery due in 5 days — confirm dispatch plan\" | WhatsApp + Email |
| Urgent reminder | T-2 | \"Delivery in 2 days — share LR/courier number and ETA\" | WhatsApp |
| Overdue Day 1 | T+1 | \"Delivery was due yesterday — confirm new date\" | WhatsApp |
| Overdue Day 3 | T+3 | \"3 days overdue — escalating to procurement head\" | WhatsApp + Email |
| Escalation | T+5 | Separate alert to Purchase Manager with vendor's delay history | Internal WhatsApp |

### PO Tracking Fields

| Field | Description | Mock Example |
|---|---|---|
| `po_number` | PO reference | PO-2024-1147 |
| `vendor_name` | Vendor | Mehta Steel Works |
| `item_description` | Material ordered | CRCA Sheet mm |
| `quantity_ordered` | Units on order | 3,000 kg |
| `po_value` | Total PO value | ₹2,40,720 |
| `promised_delivery_date` | Vendor-committed date | 25 Jan 2025 |
| `current_date` | Today | 22 Jan 2025 |
| `days_to_delivery` | Days remaining | 3 days |
| `follow_up_stage` | Current follow-up step | T-5 reminder sent |
| `last_vendor_response` | Most recent vendor message | \"Will dispatch on 24th\" |
| `last_response_timestamp` | When vendor responded | 22 Jan 12:34 PM |
| `otd_track_record` | Vendor on-time delivery % (last 12 months) | 78% |
| `po_status` | Overall status | On Track |
| `escalation_flag` | True if escalated to manager | False |

### Vendor OTD Scoring

| OTD % | Status | Badge Color | Action |
|---|---|---|---|
| ≥95% | Excellent | #1D9E75 Green | No action |
| 85–94% | Good | #2E86AB Blue | Monitor |
| 70–84% | Average | #E8A838 Amber | Review in vendor scorecard |
| 55–69% | Poor | #D85A30 Red | Performance improvement discussion |
| <55% | Critical | #D85A30 Pulsing | Escalate + consider alternate vendor |

### Page Layout
**Top Stats Row:** Open POs tracked (34) | On Track (24) | Due Soon (7) | Overdue (3)  
**Filter Bar:** Vendor filter | Status filter | Material category filter | Date range  
**Main Area:** Open PO tracker table — all 34 POs with status badges, follow-up stage, last vendor response  
**Right Panel:** Selected PO expanded — full message history + next scheduled action + vendor OTD sparkline  
**Bottom:** Escalation log — POs that have been escalated with outcome notes  

### Mock Demo Data — Open PO Tracker (18 POs shown)

| # | PO Number | Vendor | Material | Delivery Date | Days | OTD % | Status | Last Message |
|---|---|---|---|---|---|---|---|---|
| 1 | PO-2024-1139 | Gujarat Bearings | MS Round Bar 20mm | 20 Jan | -2 🔴 | 71% | Overdue | \"Delayed — new date 24th\" |
| 2 | PO-2024-1141 | Shah Chemicals | Zinc Coating Powder | 24 Jan | +2 🟡 | 84% | Due Soon | \"Dispatched — LR: SC441\" |
| 3 | PO-2024-1143 | Arvind Metals | Aluminium Sheet 2mm | 26 Jan | +4 🟢 | 91% | On Track | \"Confirmed dispatch 25th\" |
| 4 | PO-2024-1144 | Patel Packaging | Hex Bolt M10 | 27 Jan | +5 🟢 | 88% | On Track | No response to T-5 reminder |
| 5 | PO-2024-1145 | Mehta Steel Works | CRCA Sheet mm | 28 Jan | +6 🟢 | 94% | On Track | \"Will deliver on time\" |
| 6 | PO-2024-1146 | Krishna Fasteners | MIG Welding Wire | 29 Jan | +7 🟢 | 82% | On Track | T-5 reminder sent today |
| 7 | PO-2024-1147 | Mehta Steel Works | CRCA Sheet mm | 25 Jan | +3 🟢 | 94% | On Track | \"Acknowledge — will dispatch 24th\" |

### WhatsApp Follow-Up Messages (Auto-generated per schedule)
```
--- T-5 REMINDER ---
📦 Delivery Reminder | Fortiv ManufactureSmart
PO #2024-1146 for 40 spools MIG Welding Wire is due on 29 Jan — in 5 days.
Please confirm your dispatch plan and share truck/courier details.
— Fortiv Procurement AI

--- T-2 URGENT ---
⚡ Urgent: PO #2024-1146 delivery due in 2 days.
Please share LR/courier number and expected delivery time.
— Fortiv Procurement AI

--- T+1 OVERDUE ---
⚠️ PO #2024-1139 (MS Round Bar 20mm) was due yesterday.
Current delay: 1 day. Please confirm new delivery date urgently.
Your OTD performance is being tracked.
— Fortiv Procurement AI
```

### Key UI Elements
- **Follow-up timeline strip** — visual timeline per PO showing all sent messages and upcoming scheduled actions
- **Vendor response logging** — click \"Log Response\" to record vendor's verbal/WhatsApp reply
- **\"Escalate to Manager\" button** — one-click escalation with full PO history forwarded to Purchase Manager via WhatsApp
- **OTD sparkline** — 12-month on-time delivery trend per vendor shown in the expanded panel
- **Bulk follow-up action** — select multiple overdue POs → send consolidated follow-up WhatsApp

### Why It Matters
Procurement officers in typical factories spend 30–40% of their time chasing vendor deliveries. Automating follow-ups frees them entirely for strategic vendor development while ensuring no PO falls through the cracks.

---

## Page 4 — Submodule: GRN (Goods Receipt Note) Matching Agent

### What It Is
An AI agent that automatically matches incoming goods receipts against the corresponding PO — flagging quantity discrepancies, quality rejections, and partial deliveries without any manual cross-referencing.

### GRN Matching Fields Per Line Item

| Field | Description | Mock Example |
|---|---|---|
| `grn_number` | GRN reference number | GRN-2024-441 |
| `po_reference` | Linked purchase order | PO-2024-1147 |
| `vendor_name` | Delivering vendor | Mehta Steel Works |
| `delivery_challan_number` | Vendor's delivery challan number | DC-MS-2024-887 |
| `grn_date` | Date of receipt | 24 Jan 2025 |
| `item_code_on_po` | Item code as per PO | RM-CRCA- |
| `item_code_on_challan` | Item code on delivery challan | RM-CRCA- |
| `item_code_match` | Codes match | ✓ Match |
| `description_on_po` | Description as per PO | CRCA Sheet mm |
| `description_on_challan` | Description on challan | CRCA Sheet mm |
| `description_match` | Descriptions match | ✓ Match |
| `po_quantity` | Quantity ordered | 3,000 kg |
| `received_quantity` | Quantity physically received | 2,840 kg |
| `quantity_variance` | Received vs ordered | -160 kg (Short) |
| `quantity_match_status` | Match result | ⚠️ Short Delivery |
| `rate_on_po` | Rate as per PO | ₹68.00/kg |
| `rate_on_challan` | Rate on challan | ₹68.00/kg |
| `rate_match` | Rates match | ✓ Match |
| `grn_value` | Received qty × PO rate | ₹1,93,120 |
| `pending_delivery_qty` | Balance to be delivered | 160 kg |
| `quality_inspection_status` | QC outcome | Passed — full lot |
| `grn_status` | Overall GRN result | Partial — PO remains open |
| `auto_approved` | Fully matched GRNs auto-approved | False (partial) |

### Discrepancy Classification

| Discrepancy Type | Trigger Condition | Auto-Action |
|---|---|---|
| Short Delivery | Received qty < PO qty | Flag + keep PO open for balance |
| Over-Delivery | Received qty > PO qty + tolerance (2%) | Flag + approval needed before accepting excess |
| Item Code Mismatch | Challan code ≠ PO item code | HOLD — route to procurement officer immediately |
| Description Mismatch | Description differs | Flag for verification — may be alias or variant |
| Rate Discrepancy | Challan rate ≠ PO rate | Flag for invoice reconciliation pre-warning |
| Quality Rejection | QC rejects part or full lot | GRN marked as Rejected + return process triggered |
| Damaged Goods | Goods arrived damaged | Flag + create rejection note + photo attached |

### Page Layout
**Top Stats Row:** GRNs today (4) | Auto-Approved (2) | Discrepancy Flagged (1) | Pending Inspection (1)  
**Left Panel (40%):** Challan upload panel — drag-and-drop or scan — with AI extraction preview  
**Centre (60%):** GRN matching results — line-by-line comparison table with match/flag badges  
**Bottom:** GRN register — all GRNs this week with status, value, and linked PO  

### Mock Demo Data — GRN Matching Screen (GRN-2024-441, 8 Line Items)

| # | Item Description | PO Qty | Received | Item Code | Rate | Status |
|---|---|---|---|---|---|---|
| 1 | CRCA Sheet mm | 3,000 kg | 2,840 kg | ✓ | ✓ | ⚠️ Short -160 kg |
| 2 | CRCA Sheet mm | 1,500 kg | 1,500 kg | ✓ | ✓ | ✅ Full Match |
| 3 | MS Round Bar 20mm | 800 kg | 800 kg | ✓ | ✓ | ✅ Full Match |
| 4 | Aluminium Sheet 2mm | 600 kg | 600 kg | ✓ | ✓ | ✅ Full Match |
| 5 | Spring Steel Strip | 400 kg | 400 kg | ✓ | ✓ | ✅ Full Match |
| 6 | Hex Bolt M10 | 5,000 pcs | 5,000 pcs | ✓ | ✓ | ✅ Full Match |
| 7 | CRCA Sheet 1.0mm | 200 kg | 200 kg | ⚠️ MISMATCH | ✓ | 🔴 Code Mismatch |
| 8 | Packing Straps | 100 rolls | 100 rolls | ✓ | ✓ | ✅ Full Match |

### GRN Match Summary Banner
```
GRN-2024-441 | Mehta Steel Works | 24 Jan 2025

MATCHING COMPLETE — 2 ISSUES FOUND

✅ 6 of 8 line items: FULLY MATCHED
⚠️ 1 Short Delivery: CRCA Sheet mm — 2,840 kg received vs 3,000 kg ordered (PO remains open for 160 kg)
🔴 1 Item Code Mismatch: CRCA Sheet 1.0mm — PO code RM-CRCA-1.0, Challan shows RM-CRCA-1.00-HR

RECOMMENDED ACTIONS:
→ Accept short delivery — raise balance follow-up on PO-2024-1147 for 160 kg
→ Clarify item code mismatch with vendor before accepting CRCA 1.0mm lot

[Accept Partial GRN] [Hold Line 7 — Item Code Mismatch] [Reject Full GRN]
```

### Challan AI Extraction Panel (Left)
```
CHALLAN UPLOADED: DC-MS-2024-887
Vendor: Mehta Steel Works
Date: 24 Jan 2025
Extracting line items...

✓ 8 items extracted
✓ Linked to PO: PO-2024-1147 (via vendor + date match)
✓ Matching against PO lines...

Extraction confidence: 94% — Please review highlighted fields
```

### Key UI Elements
- **Drag-and-drop challan upload** — PDF or photo of challan → AI extracts in 8–12 seconds
- **Line-by-line match table** — colour-coded rows: green (match) / amber (partial) / red (mismatch)
- **Mismatch detail tooltip** — hover over flagged cell to see PO value vs challan value side by side
- **Accept partial GRN** — one-click to accept matched lines, keep PO open for balance
- **Return workflow trigger** — rejected lots auto-generate a return delivery challan draft

### Why It Matters
Manual GRN matching is time-consuming and error-prone — discrepancies get missed, payment is made for goods not received, and disputes with vendors take weeks to resolve. AI matching catches every discrepancy at the point of receipt.

---

## Page 5 — Submodule: Invoice Reconciliation & Approval Workflow

### What It Is
An AI agent that processes vendor invoices — matching each line item against the corresponding approved GRN and PO — and routes validated invoices for payment approval while flagging disputes for resolution.

### Three-Way Match Fields Per Invoice

| Field | Description | Mock Example |
|---|---|---|
| `invoice_number` | Vendor invoice number | JINV-2024-4821 |
| `invoice_date` | Date of invoice | 25 Jan 2025 |
| `vendor_name` | Invoice vendor | Jain Polymers |
| `vendor_gstin` | Vendor GST number | 24AABCJ5678B1Z3 |
| `invoice_received_via` | Channel | Email attachment |
| `po_reference` | Matched PO | PO-2024-1151 |
| `grn_reference` | Matched GRN | GRN-2024-447 |
| `item_description` | Invoiced item | Primer Coat Red |
| `invoiced_quantity` | Quantity on invoice | 150 litres |
| `grn_quantity` | Quantity received (GRN) | 150 litres |
| `po_quantity` | Quantity ordered (PO) | 150 litres |
| `invoiced_rate` | Rate on invoice | ₹198.00/litre |
| `po_rate` | Approved rate on PO | ₹180.00/litre |
| `rate_variance_pct` | Deviation from PO rate | +10.0% 🔴 |
| `rate_variance_amt` | Over-charge amount | ₹2,700 |
| `invoiced_gst_rate` | GST rate on invoice | 18% |
| `expected_gst_rate` | GST rate per HSN | 18% |
| `gst_match` | GST rate check | ✓ Match |
| `invoice_basic_value` | Before GST | ₹29,700 |
| `invoice_gst_value` | GST charged | ₹5,346 |
| `invoice_total` | Total invoiced amount | ₹35,046 |
| `approved_value` | Payable based on PO rate | ₹31,860 |
| `disputed_amount` | Amount under dispute | ₹3,186 |
| `match_result` | Three-way match outcome | ⚠️ Partial — Price Deviation |
| `auto_approved` | Within tolerance — auto-approved | False |
| `routed_to` | Approval owner | Purchase Manager |
| `payment_due_date` | Due date per payment terms | 24 Feb 2025 |

### Invoice Processing Tolerance Rules

| Tolerance Type | Rule | Action |
|---|---|---|
| Price variance | ≤2% deviation from PO rate | Auto-approve |
| Price variance | >2% and ≤5% deviation | Flag for Purchase Manager review |
| Price variance | >5% deviation | Hold — mandatory approval + vendor query |
| Quantity variance | ≤5 units or ≤1% (whichever lower) | Auto-approve |
| Quantity variance | Exceeds GRN received quantity | Reject — cannot invoice for undelivered goods |
| GST rate mismatch | Invoice GST ≠ HSN-mapped rate | Hold — GST compliance risk |
| Items not in PO | Invoice contains items without PO reference | Hold — requires manual approval |

### AP Ageing Buckets

| Bucket | Days Outstanding | Mock Value | Color |
|---|---|---|---|
| Current | 0–7 days | ₹L | Green |
| Due Soon | 8–15 days | ₹1L | Blue |
| Near Due | 16–30 days | ₹6.8L | Amber |
| Overdue | 31–45 days | ₹L | Red |
| Critically Overdue | >45 days | ₹0.6L | Red Pulsing |

### Page Layout
**Top Stats Row:** Invoices received this month (18) | Auto-Approved (11) | Pending Review (5) | Disputed (2)  
**Left Panel (40%):** Invoice inbox — all received invoices with status badges and source channel icons  
**Centre (60%):** Three-way match panel — selected invoice with PO/GRN/Invoice side-by-side comparison  
**Bottom:** AP ageing dashboard + \"Schedule All Due Payments\" bulk action button  

### Mock Demo Data — Invoice Inbox (10 Most Recent)

| # | Invoice # | Vendor | Value | Status | Match Result | Due Date |
|---|---|---|---|---|---|---|
| 1 | JINV-2024-4821 | Jain Polymers | ₹35,046 | 🔴 Disputed | Price deviation +10% | 24 Feb |
| 2 | MSW-INV-447 | Mehta Steel Works | ₹1,93,120 | ✅ Auto-Approved | Full match | 23 Feb |
| 3 | GBL-2024-821 | Gujarat Bearings | ₹44,000 | 🟡 Pending | Item code query | 21 Feb |
| 4 | SC-INV-2024-441 | Shah Chemicals | ₹1,70,000 | ✅ Auto-Approved | Full match | 26 Feb |
| 5 | PP-INV-2024-212 | Patel Packaging | ₹21,000 | ✅ Auto-Approved | Full match | 28 Feb |
| 6 | AM-2024-119 | Arvind Metals | ₹3,96,000 | 🟡 Review | Rate +3.8% | 20 Feb |
| 7 | KF-2024-088 | Krishna Fasteners | ₹19,200 | ✅ Auto-Approved | Full match | 1 Mar |
| 8 | BL-2024-041 | Bharat Lubricants | ₹36,720 | ✅ Auto-Approved | Full match | 3 Mar |
| 9 | MSW-INV-451 | Mehta Steel Works | ₹2,40,720 | 🟡 Pending | Partial GRN — 2,840/3,000 kg received | 25 Feb |
| 10 | GBL-2024-829 | Gujarat Bearings | ₹55,000 | 🔴 Hold | Missing PO reference | — |

### Three-Way Match Panel (Invoice JINV-2024-4821 — Jain Polymers)
```
THREE-WAY MATCH | Invoice JINV-2024-4821 | Jain Polymers
Received via: Email attachment | 25 Jan 2025

               PO-2024-1151      GRN-2024-447      INVOICE
Item           Primer Coat Red   Primer Coat Red   Primer Coat Red
Qty            150 litres        150 litres ✓      150 litres ✓
Rate           ₹180.00/litre     —                 ₹198.00/litre ⚠️
GST            18%               —                 18% ✓
Basic Value    ₹27,000           —                 ₹29,700
GST Amount     ₹4,860            —                 ₹5,346
Total          ₹31,860           —                 ₹35,046

RESULT: PRICE DEVIATION DETECTED
• Invoice rate ₹198.00 vs PO rate ₹180.00 — variance +₹18/litre (+10.0%)
• Excess invoice amount: ₹3,186 (beyond tolerance threshold of 2%)

ACTION REQUIRED:
→ Query Jain Polymers on rate discrepancy before approving
→ Approved payable value: ₹31,860 (at PO rate)
→ Disputed amount: ₹3,186

[Send Query to Vendor] [Approve at PO Rate ₹31,860] [Reject Invoice] [Escalate to CFO]
```

### Key UI Elements
- **Invoice AI extraction** — email/WhatsApp invoice attachment auto-read; fields extracted in 10–15 seconds
- **Three-way match colour coding** — green cells (match) / amber (tolerance) / red (deviation)
- **Payment schedule calendar** — visual calendar showing payment due dates per vendor
- **\"Approve at PO Rate\" one-click** — disputes resolved at PO rate with variance noted for vendor negotiation
- **Tally/ERP push button** — approved invoices sent to ERP for payment booking automatically

### Why It Matters
Invoice processing in Indian manufacturing is typically 5–10 days of manual matching, chasing missing GRNs, and getting approvals. AI three-way matching compresses this to 24–48 hours — improving vendor relationships and avoiding late payment penalties (critical for MSME vendors under the 45-day payment rule).

---

## Page 6 — Submodule: Vendor Performance Scorecard

### What It Is
An automated analytics module that tracks and scores every vendor across four dimensions — delivery, quality, pricing, and responsiveness — and generates monthly scorecards used for vendor selection, negotiations, and rationalisation decisions.

### Vendor Score Fields Per Vendor Per Month

| Field | Description | Mock Example |
|---|---|---|
| `vendor_id` | Vendor code | VND-001 |
| `vendor_name` | Vendor name | Mehta Steel Works |
| `vendor_category` | Material category supplied | Raw Materials — Steel |
| `total_pos_this_month` | POs issued | 6 |
| `total_po_value_this_month` | Total procurement value | ₹1L |
| `otd_deliveries` | On-time deliveries count | 5 |
| `total_deliveries` | Total deliveries | 6 |
| `otd_pct` | On-time delivery % | 8% |
| `avg_delay_days` | Average delay on late orders |  days |
| `grn_rejection_rate` | Lots rejected at GRN (%) | % |
| `quality_complaints` | Customer complaints linked to this vendor's material | 0 |
| `invoice_price_compliance` | Invoice rate vs PO rate within tolerance (%) | 96.7% |
| `response_time_avg_hrs` | Average hours to respond to PO/follow-up |  hrs |
| `query_resolution_days` | Average days to resolve GRN/invoice queries | 1.8 days |
| `delivery_score` | Sub-score: OTD weighted | 78/100 |
| `quality_score` | Sub-score: rejection rate weighted | 85/100 |
| `pricing_score` | Sub-score: price compliance + variance | 88/100 |
| `responsiveness_score` | Sub-score: response time + query resolution | 82/100 |
| `composite_score` | Weighted composite (0–100) | 83/100 |
| `score_vs_last_month` | Change vs prior month | ↑ +4 |
| `vendor_tier` | Performance tier | Preferred |
| `at_risk_flag` | Score below 60 | False |

### Vendor Score Tiers

| Score | Tier | Badge Color | Action |
|---|---|---|---|
| 90–100 | Star Vendor | #1D9E75 Gold | Volume consolidation candidate |
| 75–89 | Preferred | #2E86AB Blue | Standard procurement |
| 60–74 | Acceptable | #E8A838 Amber | Monitor — improvement required |
| 45–59 | At Risk | #D85A30 Red | Performance improvement notice issued |
| <45 | Critical | #D85A30 Pulsing | Vendor rationalisation — find alternate |

### Score Weightings

| Dimension | Weight | Rationale |
|---|---|---|
| Delivery (OTD) | 35% | Production line disruption impact is highest |
| Quality (Rejection Rate) | 30% | Defective material halts production |
| Pricing Compliance | 20% | Budget adherence and invoice disputes |
| Responsiveness | 15% | Communication reliability |

### Page Layout
**Top Stats Row:** Total active vendors (12) | Star (2) | Preferred (6) | Acceptable (3) | At Risk (1)  
**Main Area (Left 50%):** Vendor leaderboard — all 12 vendors ranked by composite score with sparkline trends  
**Right Panel (50%):** Vendor detail drill-down — sub-score breakdown, 6-month trend, and category-level analysis  
**Bottom:** Auto-generated monthly scorecard PDF preview + \"Send to Procurement Head\" button  

### Mock Demo Data — Vendor Leaderboard (12 Vendors)

| # | Vendor | Category | Score | Tier | OTD | Quality | Pricing | Resp. | Trend |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Mehta Steel Works | Steel RM | 91 | ⭐ Star | 94% | 98% | 97% | 94% | ↑ +3 |
| 2 | Shah Chemicals | Chemicals | 88 | 🔵 Preferred | 90% | 95% | 91% | 88% | → 0 |
| 3 | Patel Packaging | Packaging | 86 | 🔵 Preferred | 88% | 97% | 89% | 85% | ↑ +2 |
| 4 | Bharat Lubricants | Consumables | 84 | 🔵 Preferred | 87% | 94% | 88% | 82% | ↓ -1 |
| 5 | Krishna Fasteners | Fasteners | 83 | 🔵 Preferred | 86% | 92% | 86% | 83% | → 0 |
| 6 | Arvind Metals | Non-Ferrous | 80 | 🔵 Preferred | 83% | 89% | 82% | 79% | ↑ +5 |
| 7 | Jain Polymers | Polymers | 77 | 🔵 Preferred | 80% | 88% | 74% | 82% | ↓ -4 |
| 8 | Gujarat Bearings | Steel RM | 72 | 🟡 Acceptable | 75% | 86% | 78% | 71% | ↓ -6 |
| 9 | Kailash Packaging | Packaging | 69 | 🟡 Acceptable | 71% | 84% | 74% | 73% | → 0 |
| 10 | Surat Chemicals | Chemicals | 64 | 🟡 Acceptable | 68% | 81% | 70% | 68% | ↓ -8 |
| 11 | Raj Fasteners | Fasteners | 61 | 🟡 Acceptable | 64% | 78% | 68% | 65% | ↓ -3 |
| 12 | Vikram Steel | Steel RM | 47 | 🔴 At Risk | 51% | 72% | 58% | 54% | ↓ -12 |

### Vendor Detail Panel (Vendor: Vikram Steel — At Risk)
```
VIKRAM STEEL | At Risk (Score: 47/100) ↓ -12 vs last month

COMPOSITE BREAKDOWN:
  Delivery Score:      41/100 (OTD: 51% — 6 late deliveries of 11 this month)
  Quality Score:       58/100 (Rejection rate: % — 2 lots rejected)
  Pricing Score:       45/100 (3 invoices with >5% rate deviation this month)
  Responsiveness:      43/100 (Avg response time: 1 hours — slowest vendor)

6-MONTH TREND: 72 → 68 → 64 → 60 → 59 → 47 (declining)

ACTIONS RECOMMENDED:
1. Issue formal vendor performance improvement notice
2. Reduce PO volume — reallocate 40% of CRCA Sheet orders to Mehta Steel Works
3. Invite Vikram Steel for performance review meeting within 7 days

[Issue Performance Notice] [Reduce PO Volume] [Request Vendor Meeting]
```

### Key UI Elements
- **Leaderboard rank change arrows** — ↑ / → / ↓ with points gained/lost vs prior month
- **Sparkline trend** — 6-month score trend mini chart per vendor in the table
- **Drill-down radar chart** — 4-axis radar chart for Delivery / Quality / Pricing / Responsiveness
- **\"At Risk\" alert pulse** — vendors below 60 have a pulsing red badge
- **Monthly scorecard PDF** — auto-formatted with vendor name, logo placeholder, scores, trend, and recommendations

### Why It Matters
Most manufacturers have no objective basis for vendor selection — decisions are based on habit, relationships, or whoever answers the phone fastest. Scorecards bring data discipline to vendor management and give procurement teams leverage in negotiations.

---

## Page 7 — Submodule: Purchase Budget & Spend Analytics

### What It Is
A real-time spend intelligence dashboard that tracks actual procurement spend against approved budget — by category, vendor, department, and time period — giving finance and management complete visibility into purchasing activity.

### Spend Tracking Fields

| Field | Description | Mock Example |
|---|---|---|
| `period` | Reporting period | Jan 2025 |
| `budget_category` | Spend category | Raw Materials |
| `monthly_budget` | Approved budget for this category | ₹36.0L |
| `mtd_spend` | Month-to-date actual spend (POs issued) | ₹3L |
| `budget_variance_amt` | Over/under budget | ₹L over |
| `budget_utilisation_pct` | MTD spend as % of budget | 106.7% |
| `ytd_budget` | Annual budget to date | ₹2,16,0L |
| `ytd_actual` | Year-to-date actual | ₹2,24,0L |
| `ytd_variance_pct` | YTD variance | +% |
| `top_vendor_by_category` | Largest vendor in this category | Mehta Steel Works |
| `top_vendor_spend_pct` | Concentration in top vendor | 64% of category spend |
| `price_variance_pct` | Actual price vs standard cost this month | +2.8% |
| `savings_achieved` | Cost savings vs prior year rate | ₹L |
| `po_count_mtd` | POs issued this month | 34 |
| `avg_po_value` | Average PO value | ₹3L |

### Spend Categories & Mock Budget vs Actual (Jan 2025)

| Category | Monthly Budget | MTD Spend | Variance | Status |
|---|---|---|---|---|
| Raw Materials — Steel | ₹36.0L | ₹3L | +₹L (106.7%) | 🔴 Over Budget |
| Raw Materials — Non-Ferrous | ₹8.0L | ₹L | -₹0.8L (90.0%) | 🟢 Under Budget |
| Consumables | ₹4.0L | ₹3.8L | -₹0.2L (95.0%) | 🟢 On Track |
| Packaging Materials | ₹3.0L | ₹2.9L | -₹0.1L (96.7%) | 🟢 On Track |
| Maintenance Spares | ₹L | ₹L | +₹0.6L (124.0%) | 🔴 Over Budget |
| Safety & PPE | ₹0.8L | ₹0.7L | -₹0.1L (87.5%) | 🟢 Under Budget |
| Capital Purchases | ₹5.0L | ₹0.0L | -₹5.0L (0.0%) | ⬜ Not Started |
| **Total** | **₹59.3L** | **₹56.1L** | **-₹L (9%)** | **🟢 Within Budget** |

### Price Variance Analysis (Top 5 Materials — Jan 2025)

| Material | Standard Cost | Avg Purchase Price | Variance | Trend |
|---|---|---|---|---|
| CRCA Sheet mm | ₹65.00/kg | ₹68.00/kg | +₹3.00 (+%) | ↑ Rising 3 months |
| MS Round Bar 20mm | ₹53.00/kg | ₹55.00/kg | +₹2.00 (+3.8%) | → Stable |
| Zinc Coating Powder | ₹330.00/kg | ₹340.00/kg | +₹10.00 (+3.0%) | ↑ Rising 2 months |
| Aluminium Sheet 2mm | ₹218.00/kg | ₹220.00/kg | +₹2.00 (+0.9%) | → Stable |
| Primer Coat Red | ₹180.00/litre | ₹198.00/litre | +₹18.00 (+10.0%) | 🔴 Spike — query raised |

### Page Layout
**Top Stats Row:** MTD Total Spend (₹56.1L) | Budget Utilisation (9%) | Over-Budget Categories (2) | Price Variance This Month (+₹1.8L overall)  
**Main Area (Left 50%):** Spend vs budget bar chart — all categories side by side, actual vs budget  
**Right Panel (50%):** Vendor concentration analysis — spend Pareto by vendor + concentration risk flag  
**Bottom Left:** Price variance trend chart — 12-month actual vs standard cost per major material  
**Bottom Right:** Monthly MIS summary + \"Generate CFO Report\" button  

### Vendor Concentration Analysis (Top 5 Vendors by Spend — Jan 2025)

| Vendor | Jan Spend | % of Total | Cumulative % | Risk |
|---|---|---|---|---|
| Mehta Steel Works | ₹2L | 43.8% | 43.8% | 🟡 Monitor |
| Shah Chemicals | ₹6.8L | 1% | 55.9% | — |
| Arvind Metals | ₹L | 9.6% | 6% | — |
| Patel Packaging | ₹L | 7.5% | 73.0% | — |
| Gujarat Bearings | ₹3.8L | 6.8% | 79.8% | — |
| All Others | ₹1L | 20.2% | 100% | — |

### CFO Monthly MIS Auto-Report (Auto-generated 1st of each month)
```
📊 PURCHASE MIS REPORT | January 2025
Fortiv ManufactureSmart Pvt. Ltd. | Prepared by Fortiv Manufacturing AI

SUMMARY:
• Total Procurement Spend: ₹56.1L vs Budget ₹59.3L (9% utilisation — within budget)
• Over-Budget Categories: Raw Material Steel (+₹L, 106.7%) | Maintenance Spares (+₹0.6L)
• Total POs Issued: 34 | Avg PO Value: ₹3L
• Vendor Count: 12 active vendors | Top vendor (Mehta Steel): 43.8% of total spend

PRICE VARIANCE ALERT:
• Primer Coat Red — invoice rate ₹198/L vs standard ₹180/L (+10%) → Vendor query raised
• CRCA Sheet mm — ₹68/kg vs standard ₹65/kg (+%) — rising 3 months — review rate card

SAVINGS THIS MONTH:
• Negotiated rate reduction with Arvind Metals on Aluminium Sheet — saving ₹L

PAYMENT COMPLIANCE:
• MSME vendors (45-day rule): 8 of 8 payments made within 45 days ✓

— Fortiv Manufacturing AI | Purchase Analytics
```

### Key UI Elements
- **Spend vs budget bar chart** — dual bars (budget vs actual) per category, over-budget shown in red
- **Concentration risk alert** — top vendor exceeding 40% share triggers an amber flag
- **Price variance heatmap** — materials sorted by variance % with 6-month trend sparklines
- **MSME payment compliance indicator** — mandatory 45-day rule compliance tracker for MSME vendors
- **\"Generate CFO Report\" button** — produces formatted PDF MIS report on demand

### Why It Matters
Without spend visibility, procurement decisions are made in isolation. This module gives management real-time oversight over one of the largest cost lines in manufacturing — raw material and procurement spend — enabling informed negotiation, budget control, and compliance.

---

## Complete Module 2 — Master Parameter Reference

### All Data Fields Across M2

| Field Name | Type | Sub-module | Description |
|---|---|---|---|
| `po_number` | String | , , ,  | Unique PO reference number |
| `pr_reference` | String |  | Linked purchase requisition |
| `vendor_id` | String | – | Vendor master code |
| `vendor_name` | String | – | Vendor company name |
| `vendor_gstin` | String | ,  | Vendor GST registration number |
| `item_code` | String | , ,  | Material item code |
| `hsn_code` | String | ,  | HSN code for GST |
| `quantity_ordered` | Number | , ,  | Quantity in PO |
| `unit` | Enum | ,  | KG / PCS / LTR / MTR / SET |
| `po_rate` | Number (₹) | ,  | Approved rate per unit |
| `po_value_basic` | Number (₹) | ,  | Before GST |
| `gst_rate` | Number (%) | ,  | Applicable GST % |
| `po_value_total` | Number (₹) | ,  | Including GST |
| `required_delivery_date` | Date | ,  | When material must arrive |
| `payment_terms` | String | ,  | e.g. Net 30 days from GRN |
| `po_status` | Enum | ,  | Generated / Sent / Acknowledged / Delivered / Closed |
| `issued_via` | Enum |  | Email / WhatsApp / Portal |
| `vendor_acknowledged` | Boolean |  | PO acknowledged by vendor |
| `follow_up_stage` | Enum |  | T-5 / T-2 / T+1 / Escalated |
| `last_vendor_response` | Text |  | Most recent vendor communication |
| `otd_pct` | Number (%) | ,  | On-time delivery % |
| `avg_delay_days` | Number | ,  | Average delay on late orders |
| `grn_number` | String | ,  | GRN reference number |
| `delivery_challan_number` | String |  | Vendor challan number |
| `received_quantity` | Number | ,  | Quantity physically received |
| `quantity_variance` | Number |  | Received vs ordered |
| `quantity_match_status` | Enum |  | Match / Short / Over / Mismatch |
| `item_code_match` | Boolean |  | Challan code matches PO |
| `rate_match` | Boolean | ,  | Rate matches PO |
| `grn_status` | Enum |  | Approved / Partial / Rejected / Disputed |
| `auto_approved` | Boolean | ,  | Auto-approved without manual review |
| `invoice_number` | String |  | Vendor invoice number |
| `invoice_date` | Date |  | Date on invoice |
| `invoiced_rate` | Number (₹) |  | Rate on vendor invoice |
| `rate_variance_pct` | Number (%) |  | Invoice rate vs PO rate % |
| `rate_variance_amt` | Number (₹) |  | Over/under-charge amount |
| `match_result` | Enum |  | Full Match / Partial / Disputed / Rejected |
| `payment_due_date` | Date |  | Payment due per terms |
| `disputed_amount` | Number (₹) |  | Amount under dispute |
| `delivery_score` | Number (0–100) |  | OTD sub-score |
| `quality_score` | Number (0–100) |  | Rejection rate sub-score |
| `pricing_score` | Number (0–100) |  | Price compliance sub-score |
| `responsiveness_score` | Number (0–100) |  | Response time sub-score |
| `composite_score` | Number (0–100) |  | Weighted overall vendor score |
| `vendor_tier` | Enum |  | Star / Preferred / Acceptable / At Risk / Critical |
| `at_risk_flag` | Boolean |  | Score below 60 |
| `grn_rejection_rate` | Number (%) |  | % lots rejected at GRN |
| `budget_category` | Enum |  | RM Steel / RM Non-Ferrous / Consumables / Packaging / Spares / Capex |
| `monthly_budget` | Number (₹) |  | Approved monthly budget per category |
| `mtd_spend` | Number (₹) |  | Month-to-date actual spend |
| `budget_utilisation_pct` | Number (%) |  | MTD spend ÷ monthly budget |
| `price_variance_pct` | Number (%) |  | Actual price vs standard cost |
| `vendor_concentration_pct` | Number (%) |  | Top vendor's % of total spend |

---

## Mock Data Constants (Demo-Ready)

### Demo Vendor Pool (12 Active Vendors)
```
Mehta Steel Works           — Ahmedabad | CRCA & MS Flat Products | ₹68/kg CRCA mm
Gujarat Bearings Ltd.       — Ahmedabad | Steel Long Products | ₹55/kg MS Round Bar
Shah Chemicals              — Surat | Industrial Chemicals | ₹340/kg Zinc Coating
Arvind Metals               — Rajkot | Non-Ferrous | ₹220/kg Aluminium Sheet
Patel Packaging             — Rajkot | Packaging & Fasteners | ₹0/pc Hex Bolt M10
Krishna Fasteners           — Pune | Welding Consumables | ₹480/spool MIG Wire
Bharat Lubricants           — Mumbai | Cutting Oils & Lubricants | ₹92/litre Cutting Oil
Jain Polymers               — Vadodara | Polymers & Coatings | ₹180/litre Primer Coat
Kailash Packaging           — Ahmedabad | Corrugated Packaging | ₹0/pc Corrugated Box
Surat Chemicals             — Surat | Industrial Chemicals (secondary) | Alt supplier
Raj Fasteners               — Rajkot | Fasteners (secondary) | Alt supplier
Vikram Steel                — Ahmedabad | Steel (At Risk — declining performance)
```

### Demo Procurement Team
```
Rajesh Mehta        — Purchase Manager (approves POs ₹50K–₹5L, first approver above ₹5L)
Anita Kapoor        — CFO (final approver above ₹5L, monthly MIS recipient)
Harish Solanki      — Procurement Officer (day-to-day PO management, vendor follow-ups)
Bhavesh Patel       — Storekeeper (GRN creation, physical stock receipt)
Deepak Trivedi      — Planning Manager (raises URGENT requisitions from M)
```

### Demo Active PO Register (34 Open POs — Summary)
```
Steel Raw Materials:
  PO-2024-1147  Mehta Steel Works     CRCA mm      3,000 kg    ₹2,40,720   25 Jan — On Track
  PO-2024-1148  Gujarat Bearings      MS Round Bar    800 kg      ₹52,360     26 Jan — Overdue 2 days
  PO-2024-1149  Mehta Steel Works     CRCA mm      1,500 kg    ₹1,29,600   28 Jan — On Track
  PO-2024-1150  Vikram Steel          CRCA mm      2,000 kg    ₹1,32,000   24 Jan — Overdue 1 day

Chemicals & Coatings:
  PO-2024-1151  Jain Polymers         Primer Coat Red 150 litres  ₹35,046     (Invoice disputed)
  PO-2024-1152  Shah Chemicals        Zinc Coating    500 kg      ₹2,00,200   24 Jan — GRN Pending
  PO-2024-1153  Bharat Lubricants     Cutting Oil     200 litres  ₹21,888     29 Jan — On Track

Consumables & Packaging:
  PO-2024-1154  Krishna Fasteners     MIG Welding Wire 40 spools  ₹22,608     29 Jan — On Track
  PO-2024-1155  Patel Packaging       Hex Bolt M10    5,000 pcs   ₹24,780     27 Jan — On Track
  PO-2024-1156  Kailash Packaging     Corrugated Box  3,000 pcs   ₹30,150     31 Jan — On Track
```

### Demo Invoice Register (Jan 2025)
```
INV  Auto-Approved:  11 invoices | Total: ₹42.8L
INV  Pending Review: 5 invoices | Total: ₹1L
INV  Disputed:       2 invoices | Total: ₹3.8L
INV  Total Received: 18 invoices | ₹5L (some multi-month)
```

### Demo Payment Ageing Summary
```
0–7 days due:     ₹L  (Mehta Steel — Jan invoices)
8–15 days due:    ₹1L (Shah Chemicals, Arvind Metals)
16–30 days due:   ₹6.8L  (Multiple vendors)
31–45 days due:   ₹L  (URGENT — approaching MSME 45-day rule)
>45 days overdue: ₹0.6L  (ONE disputed invoice — Vikram Steel)
TOTAL AP:         ₹3L
```

---

## Demo Build Prompt for M2 Dashboard

```
Build a Procurement & Vendor Workflow Automation dashboard for Fortiv ManufactureSmart Pvt. Ltd.,
a Gujarat precision metal components manufacturer. Dark theme, navy #1A3C5E primary,
electric blue #2E86AB accent, amber #E8A838 warning, coral red #D85A30 danger, dark bg #0D1B2A.

Six sub-module navigation within M2. Default landing on M2 Module Overview.

Show:
(1) Top KPI bar: Open POs (34), Overdue Deliveries (3 — pulsing red),
    Invoices Pending Approval (8), Monthly Spend (₹3L)
(2) Procure-to-pay Kanban pipeline: 8 stages × PO cards with vendor names,
    values, and status badges — Raised / Sent / Acknowledged / In Transit /
    GRN Pending / Invoice Received / Payment Scheduled
(3) Vendor alert feed: 5 alerts (2 red, 2 amber, 1 blue) with action buttons
(4) Spend vs budget mini bar chart: 6 categories, 2 over-budget in red
(5) Quick tiles for 6 sub-modules at bottom

Indian manufacturing context — GIDC Vatva Ahmedabad, SAP ERP, WhatsApp Business API,
GST/e-Way Bill compliance, rupee currency (₹ lakhs). JetBrains Mono for all numbers.
React app with recharts.
```

---

## Brand & Design Parameters for M2 UI

### Color Usage
| Element | Color | Hex |
|---|---|---|
| Page background | Dark navy | #0D1B2A |
| Card/panel background | White | #FFFFFF |
| Primary brand | Deep navy | #1A3C5E |
| Accent / links | Electric blue | #2E86AB |
| Overdue / danger | Coral red (pulsing for critical) | #D85A30 |
| High load / warning | Amber | #E8A838 |
| Matched / success | Teal green | #1D9E75 |
| Cold / info | Electric blue | #2E86AB |
| Section background | Off white | #F5F6FA |

### Typography
| Use Case | Font |
|---|---|
| Module title, page heading | Playfair Display or DM Serif Display |
| Body text, labels, descriptions | DM Sans or Plus Jakarta Sans |
| All numbers, quantities, timestamps | JetBrains Mono |

### Key Animations (Demo-Specific)
| Animation | Where | Description |
|---|---|---|
| PO generation sequence |  | Steps 1–8 populate one by one with timing stamps |
| WhatsApp sent animation |  | Message box slides in, double-tick appears |
| GRN match sweep |  | Rows turn green/amber/red sequentially as AI matches |
| Three-way match columns |  | PO / GRN / Invoice columns populate side by side |
| Kanban card movement | M2 Dashboard | Card animates sliding from one stage to next |
| Score bar fill |  | Vendor score bars animate filling to their value |
| Spend vs budget bar |  | Actual spend bar grows in on page load |

---

## Technical Integration Map for M2

| Sub-module | External APIs / Systems | Data Flow Direction |
|---|---|---|
|  PO Generator | ERP (SAP/Tally/Odoo) — reads PRs, writes POs | ERP → PO Engine → ERP + Email + WhatsApp |
|  Vendor Follow-Up | WhatsApp Business API + ERP PO register | ERP → Follow-up engine → Vendor WhatsApp |
|  GRN Matching | ERP inventory module — writes GRN | Challan (PDF/photo) → AI extract → ERP GRN |
|  Invoice Reconciliation | Email inbox / WhatsApp / Tally for booking | Invoice → AI extract → three-way match → ERP |
|  Vendor Scorecard | ERP PO/GRN/Invoice data (aggregated) | ERP → Analytics → Scorecard PDF + WhatsApp |
|  Spend Analytics | ERP PO/Invoice data + finance budget master | ERP → Spend dashboard → CFO WhatsApp/Email |

---

## Summary: M2 at a Glance

| Item | Detail |
|---|---|
| Module | M2 — Procurement & Vendor Workflow Automation |
| Sub-modules | 6 ( → ) |
| Total pages | 7 (1 dashboard + 6 sub-module pages) |
| Primary data objects | POs, GRNs, invoices, vendor scores, spend budgets |
| Systems covered | SAP / Tally Prime / Odoo / WhatsApp Business / Email / NIC e-Way Bill |
| Key output | Auto-generated POs + AI-matched GRNs + three-way matched invoices + monthly vendor scorecards |
| Demo focus | PO auto-generation in 4 mins 12 secs + GRN AI matching sweep + invoice three-way match |
| Design tone | Dark navy dashboard, data-dense, process-flow-oriented, compliance-ready |
| Compliance | GST-ready · e-Way Bill · e-Invoice · TDS 194C · MSME Payment Act · DPDP Act 2023 |
| Currency | ₹ Indian Rupee — Lakhs (L) and Crores (Cr) |
| Date format | DD/MM/YYYY |
| Languages | English (primary) · Hindi · Gujarati |
| Connects to | M (MRP Agent raises PRs) · M3 (GRN rejection feeds quality module) · M6 (spend data feeds CFO dashboard) |

---

*Manufacturing AI Command Center — Module 2 Build Guide*  
*by Fortiv Solutions · fortivsolutions.in*  
*Version 1.0 · Confidential*
