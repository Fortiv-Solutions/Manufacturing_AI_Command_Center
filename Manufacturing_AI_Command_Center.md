# Manufacturing AI Command Center

### by Fortiv Solutions · fortivsolutions.in

> **India's First End-to-End Manufacturing AI Operating System**
> 8 Modules · 41 Sub-Modules · Built for Indian Industry · GST & BIS Compliant · WhatsApp-First

---

**Document Type:** Product Reference & Build Guide
**Version:** 1.0
**Company:** Fortiv Solutions
**Classification:** Confidential
**Market:** India — Gujarat Focus (Ahmedabad, Surat, Rajkot, Vadodara)

---

## Table of Contents

### Intelligence

1. [M1 — AI-Powered Management Dashboards](#m1--ai-powered-management-dashboards)

### Operations

2. [M2 — Production Planning Automation](#m2--production-planning-automation)
3. [M3 — Procurement & Vendor Workflow Automation](#m3--procurement--vendor-workflow-automation)
4. [M4 — Quality & Compliance Reporting](#m4--quality--compliance-reporting)

### Sales & Customer

5. [M5 — Dealer & Distributor Communication Automation](#m5--dealer--distributor-communication-automation)
6. [M6 — Customer & Dealer Voice Agents](#m6--customer--dealer-voice-agents)
7. [M7 — Customer Complaint & After-Sales Management](#m7--customer-complaint--after-sales-management)
8. [M8 — Follow Ups & Alerts](#m8--follow-ups--alerts)
9. [Demo Build Prompts](#demo-build-prompts)
10. [Brand & Tech Constants](#brand--tech-constants)

---

## M1 — AI-Powered Management Dashboards

> Real-time operational intelligence pulling from ERP, CRM, and spreadsheets — giving leadership live visibility into production output, order pipeline, inventory levels, cost variances, and financial performance.

**Module purpose:** Replace the weekly MIS meeting — where managers spend hours compiling numbers from 5 different systems — with a live, always-current management dashboard. Every KPI the MD and leadership team needs is visible in one place, updated automatically, with no manual compilation.

**Demo wow moment:** The MD opens the dashboard on their tablet at 7 AM before arriving at the factory — and sees complete previous day performance: production output, dispatches, collections, top NCRs, and cost variances — all without a single report being prepared by any employee.

---

### Production Intelligence Dashboard

**What it is:**
A detailed production operations dashboard for the Production Head — showing line-wise performance, OEE breakdown, machine status, shift productivity, and production vs plan tracking in real time.

**What it does:**

- Line status grid: all production lines with current status (Running / Idle / Breakdown / Changeover) and reason, updating in real time
- Hourly production counter per line: units produced this hour vs target, accumulating towards shift target
- OEE dashboard: Availability %, Performance %, Quality % per line for current shift and month-to-date — with trend sparklines
- Machine breakdown log: current active breakdowns with time since occurrence and maintenance team status
- Shift handover summary: auto-generated at each shift change — production by previous shift, issues noted, machines on hold
- Production plan adherence: jobs scheduled for today vs jobs completed — with delay flags
- Downtime analysis: top 5 reasons for downtime this month with hours lost per reason (Pareto chart)

---

### Inventory & Warehouse Intelligence Dashboard

**What it is:**
A real-time inventory dashboard that tracks raw material stock levels, WIP inventory by stage, and finished goods warehouse status — with automated alerts for items below reorder level and excess/slow-moving stock.

**What it does:**

- Raw material stock levels: all tracked materials with current quantity, reorder level, and days of production coverage remaining
- Reorder alert list: items below reorder level highlighted — with one-click "Raise Requisition" action
- Slow-moving and dead stock identification: items with zero consumption in the last 60/90 days — flagged for review
- WIP tracking: total WIP value by production stage and department
- Finished goods: current FG warehouse stock by item — with customer-committed quantity deducted to show "free" stock
- Warehouse utilisation: % of warehouse capacity occupied, with a visual floor plan (if warehouse is zoned)
- Inventory valuation: total raw material + WIP + FG value at standard cost, updated daily

---

### Sales & Revenue Intelligence Dashboard

**What it is:**
A sales performance dashboard for the Sales Head and MD — showing order intake, revenue trends, customer-wise performance, product-wise mix, and sales team productivity.

**What it does:**

- Order intake: orders received this month vs last month vs target — value and volume
- Revenue trend: monthly invoiced revenue for the last 12 months with this-year vs last-year comparison bar chart
- Customer concentration analysis: top 10 customers by revenue with % of total — highlighting dependency risk
- Product mix: revenue and volume by product category — with margin % per category if cost data is available
- Dealer/distributor performance: secondary sales from Secondary Sales Tracking Agent overlaid on primary sales — identifying distribution performance
- Sales team productivity: orders per salesperson, conversion rate, and pipeline value (from CRM data)
- Pipeline forecast: probability-weighted forecast for next 30/60/90 days based on open opportunities in CRM

---

### Cost Variance & Financial KPI Dashboard

**What it is:**
A financial performance dashboard for the CFO and MD — tracking actual vs standard costs, material price variances, conversion cost trends, and overall profitability — updated from ERP data automatically.

**What it does:**

- Material price variance: actual purchase price vs standard cost per material, identifying inflationary trends and supplier-specific price drift
- Conversion cost per unit: actual labour + overhead cost per unit produced vs standard, by product and line
- Scrap and rework cost: value of material scrapped and rework hours logged — as % of total production cost
- Budget vs actual: monthly comparison of all major cost heads against annual budget (materials, labour, utilities, maintenance, overheads)
- Product profitability: contribution margin per product (selling price minus variable cost) — ranked best to worst
- EBITDA tracker: month-to-date EBITDA estimate based on revenue invoiced and costs booked

---

### People & Productivity Dashboard

**What it is:**
A workforce productivity intelligence dashboard for HR and Operations — tracking attendance, overtime, productivity per operator, and training compliance across the manufacturing workforce.

**What it does:**

- Today's attendance: headcount in vs total workforce, by department and shift — with % attendance rate
- Overtime tracking: current month OT hours by department vs budget — with alert if OT exceeds 20% of regular hours
- Operator productivity: output per operator per shift by department — identifying high performers and laggards
- Training compliance: employees due for mandatory safety training, equipment certifications, or quality SOP requalification
- Contractor workforce: headcount and daily billing rate tracking for contract labour
- Attrition dashboard: voluntary separations this month, exit reason classification, attrition rate vs industry benchmark

---

## M2 — Production Planning Automation

> AI agents continuously read your ERP and MES data to auto-generate conflict-free production schedules — eliminating spreadsheet chaos, shift gaps, and planning delays.

**Module purpose:** Replace the weekly manual planning meeting and error-prone spreadsheet scheduling with an AI engine that pulls live data from your existing systems, detects capacity conflicts before they happen, and generates optimised production schedules automatically — so your planning team shifts from firefighting to exception management.

**Demo wow moment:** A live production schedule auto-generating on screen — AI reading ERP order data, flagging a machine bottleneck on Line 3, rescheduling two jobs, and issuing shift notifications — all in under 30 seconds with zero human input.

---

### ERP/MES Data Sync Agent

**What it is:**
An always-on integration agent that connects to your existing ERP (SAP, Oracle, Tally, Odoo, or custom) and MES systems and continuously pulls live data — open orders, material availability, machine status, workforce rosters, and WIP levels — into a unified planning data layer.

**What it does:**

- Connects to ERP via API, database query, or file-based sync depending on system capability
- Pulls: open sales orders (quantity, due date, priority), BOM (Bill of Materials) for each product, raw material stock levels, WIP inventory per work centre, machine capacity and shift schedules, and workforce attendance data
- Syncs every 15–30 minutes to keep the planning engine current
- Detects and flags data anomalies: missing BOMs, zero-stock materials referenced in open orders, unallocated shifts
- Maintains a clean, normalised planning data schema regardless of source system format
- Logs all sync events with timestamp and record count for audit purposes

**Why it matters:**
Most planning problems in manufacturing stem from stale or siloed data. A planner working from yesterday's ERP export makes decisions based on yesterday's reality. Live sync means planning decisions are always made on current ground truth.

**Demo data:** Show a live data panel — "Last sync: 47 seconds ago" — with open order count (142), materials below reorder (7 flagged in amber), machine utilisation rates, and a sync health indicator pulsing green.

---

### AI Production Schedule Generator

**What it is:**
An AI scheduling engine that ingests the live ERP data pulled by ERP/MES Data Sync Agent and automatically generates an optimised weekly production schedule — balancing order priorities, machine capacity, shift availability, and material constraints simultaneously.

**What it does:**

- Accepts inputs: open orders ranked by due date and customer priority, available machine hours per line per shift, workforce availability by skill/department, raw material availability per BOM line
- Generates a conflict-free schedule: job sequences per machine, quantity per shift, material pull timing, and workforce allocation
- Applies scheduling logic: EDD (Earliest Due Date), FIFO, or custom priority rules configurable per client
- Flags schedule exceptions automatically: "Job #4821 cannot start Monday — RM Aluminium Sheet short by 200 kg. Suggest reschedule to Wednesday post-delivery."
- Produces a visual Gantt chart exportable to PDF and ERP
- Re-generates schedule automatically if inputs change (new urgent order, machine breakdown reported) and highlights the delta vs previous schedule

**Why it matters:**
Manual scheduling in Excel takes a planner 3–5 hours per week and still produces suboptimal sequences. AI scheduling takes 90 seconds, considers 10x more variables simultaneously, and adjusts in real time when things change on the shop floor.

**Demo data:** Show a Gantt chart populating in real time — 6 production lines, 5 days, 22 jobs — with a red flag appearing on Line 3 Friday ("Machine OEE insufficient for this load") and the AI auto-shifting 2 jobs to Line 4 with a green "Conflict Resolved" badge.

---

### Capacity Bottleneck Detector

**What it is:**
An AI analysis agent that continuously monitors machine utilisation, shift loading, and order pipeline data to identify capacity bottlenecks before they cause missed delivery commitments — and recommends corrective actions.

**What it does:**

- Monitors real-time utilisation of every machine/work centre against rated capacity
- Identifies chronic bottlenecks: machines consistently loaded above 85% across multiple shifts
- Identifies hidden bottlenecks: machines that look underloaded but are the constraint because upstream operations feed them unevenly
- Generates forward-looking capacity warnings: "At current order intake rate, Assembly Line 2 will be overloaded by Week 3 of next month"
- Recommends corrective actions: overtime scheduling, subcontracting options, cross-trained worker reallocation, or order sequencing changes
- Produces a weekly capacity health report for the production head with trend charts

**Why it matters:**
Manufacturing delays are almost never random — they are predictable from capacity data weeks in advance. This agent converts reactive firefighting into proactive capacity management, protecting delivery performance and customer satisfaction.

**Demo data:** Show a capacity heatmap — 8 work centres, utilisation colour-coded green/amber/red — with a tooltip on the bottleneck cell: "CNC Line 1: 94% loaded. Risk of 3-day delay on Orders #4819, #4823. Recommend: overtime Thursday–Friday or split to Line 2."

---

### Shift Gap & Attendance Intelligence

**What it is:**
An automation agent that monitors daily attendance data from your HR/biometric system and automatically detects shift coverage gaps — then alerts supervisors and suggests reallocation options before the shift starts.

**What it does:**

- Integrates with biometric attendance systems (ZKTeco, eSSL, or HRMS export)
- Compares actual attendance vs planned roster for each shift and department
- Detects gaps: absent operators in critical roles, understaffed lines, skill mismatches
- Sends WhatsApp alerts to shift supervisors at least 1 hour before shift start: "Line 2 Morning Shift: 2 operators absent. Suggested reallocation: Ramesh Kumar (Line 3, available) + Dinesh Patel (cross-trained). Confirm?"
- Logs shift gap history to identify chronic absence patterns by individual, team, or shift
- Monthly attendance analytics report: absence rate by department, top absentees, cost impact of shift gaps

**Why it matters:**
A single absent operator on a critical machine can halt an entire production line. Early detection and automated reallocation suggestions mean supervisors spend 5 minutes solving a problem that would otherwise surface as a production stoppage.

**Demo data:** Show a shift dashboard at 6:45 AM — 3 absent workers highlighted in red on Line 2 and Line 4 — with a WhatsApp alert preview and two suggested reallocation cards the supervisor can approve with one tap.

---

### Material Requirement Planning (MRP) Agent

**What it is:**
An AI agent that automatically calculates material requirements for the approved production schedule, compares against current stock levels, and generates purchase requisitions for items that need replenishment — before stock-outs can disrupt production.

**What it does:**

- Reads approved production schedule from AI Production Schedule Generator and extracts per-item material requirements by date
- Compares requirements against real-time inventory levels pulled from ERP
- Calculates: projected stock-out date per material, reorder quantity (EOQ or safety-stock-based), and required delivery date from vendor
- Auto-generates purchase requisitions in ERP for items below reorder trigger
- Prioritises requisitions by production urgency: materials for jobs due in <7 days marked URGENT
- Alerts procurement team via WhatsApp for URGENT items: "Low stock alert: CRCA Sheet mm — current stock 400 kg, required 1,200 kg for Week 1 schedule. PO required by tomorrow."
- Weekly MRP summary: materials ordered, on order, critical, and surplus

**Why it matters:**
Stock-outs are the single biggest cause of production line stoppages in Indian manufacturing. MRP automation ensures procurement stays ahead of production demand rather than scrambling reactively when a line goes down.

**Demo data:** Show an MRP table — 15 materials, columns for current stock / required / shortfall / reorder status — with 3 rows in red ("Critical") and 4 in amber ("Reorder Due"), each with a one-click "Raise PO" button.

---

### Production vs Target Tracker

**What it is:**
A real-time production performance tracking module that compares actual output per line, per shift, and per day against planned targets — giving supervisors and management instant visibility into schedule adherence and output efficiency.

**What it does:**

- Pulls actual production count data from MES, barcode scanner output, or manual entry via supervisor app
- Compares actual vs planned output at hourly, shift, daily, and weekly granularity
- Calculates schedule adherence %: actual completed jobs vs planned completions for the period
- Raises alerts when production falls below 80% of hourly target: "Line 3 — Hour 4: 340 units vs 450 target (75%). Investigate."
- Tracks OEE (Overall Equipment Effectiveness): Availability × Performance × Quality per line
- Generates end-of-day production report auto-sent to management WhatsApp group: total output, target vs actual, top/bottom performing lines, and any stoppages with duration

**Why it matters:**
Most manufacturing managers find out about production shortfalls at the end of the day or end of the week — too late to recover. Hourly tracking with automated alerts gives 7–8 hours to course-correct within the same shift.

**Demo data:** Show a production scoreboard — 6 lines, live output counters ticking up — with a red alert on Line 3 ("Below Target") and a green banner on Line 1 ("Ahead of Schedule by 12%"). Bottom ticker: "Total today: 8,240 units | Target: 9,000 | Variance: -%."

---

### Weekly Planning Report Automation

**What it is:**
An automated report generation agent that compiles the weekly production plan, performance summary, upcoming order commitments, and risk flags into a formatted report — delivered to relevant stakeholders every Monday morning without any manual effort.

**What it does:**

- Aggregates: prior week actual vs target performance, line OEE summary, top 10 orders due this week, critical material status, and capacity risk flags
- Formats into a clean, branded PDF report (Fortiv-designed template or client-branded)
- Includes: Gantt snapshot of the week's plan, KPI dashboard (units produced, order fulfilment %, OEE %, downtime hours), and exception summary
- Auto-sends via email to: MD, Production Head, Planning Manager, and department HODs every Monday at 8:00 AM
- WhatsApp summary version: 5-bullet digest sent to management group simultaneously
- Stores all historical reports in a searchable archive

**Why it matters:**
The weekly planning meeting consumes 2–3 hours of senior management time every week. With this report arriving before the meeting, the conversation shifts from "what happened?" to "what do we do about it?" — cutting meeting time by half.

---

## M3 — Procurement & Vendor Workflow Automation

> Automate the entire procure-to-pay cycle — from PO creation to GRN matching to invoice reconciliation — so your procurement team focuses on vendor relationships, not paperwork.

**Module purpose:** Eliminate the manual, error-prone procurement workflow that creates delays, missed deliveries, and invoice disputes. AI agents handle PO generation, vendor follow-ups, GRN matching, and payment processing — integrating directly with your ERP so every transaction is logged without double entry.

**Demo wow moment:** A purchase requisition from Material Requirement Planning (MRP) Agent auto-converting into a formatted PO, triggering a WhatsApp to the vendor, receiving a delivery confirmation, matching against GRN, and queuing for payment — all without a single human keystroke shown live.

---

### Automated Purchase Order Generator

**What it is:**
An AI agent that converts approved purchase requisitions from your ERP into formatted Purchase Orders — selecting the right vendor, applying approved pricing, and issuing the PO via email and WhatsApp — without procurement staff intervention for standard repeat items.

**What it does:**

- Picks up approved purchase requisitions from ERP (triggered from MRP agent or manual raise)
- For each item: looks up approved vendor list, selects vendor based on configurable logic (lowest price / preferred vendor / fastest lead time / rotation policy)
- Populates PO with: vendor details, item description, HSN code, quantity, rate, GST %, delivery address, and required delivery date
- Routes POs above defined value threshold (e.g. ₹5 lakh) for manual approval before sending
- Issues PO via: email (PDF attachment) + WhatsApp Business message to vendor contact simultaneously
- Logs PO in ERP automatically with PO number, vendor, and line items
- Maintains PO register with open / acknowledged / fulfilled / cancelled status per line

**Why it matters:**
In most SME manufacturers, raising a PO involves a procurement officer manually filling a template, getting 2 approvals, and sending via email — taking 1–2 days. Automation collapses this to under 5 minutes for standard items, accelerating material inflow.

**Demo data:** Show a PO generation animation — requisition card → vendor auto-selected (Mehta Steel Works, ₹42,000) → PO formatted → WhatsApp sent to vendor → "PO #2024-1147 Issued" confirmation badge. Timeline: 4 minutes 12 seconds end-to-end.

---

### GRN (Goods Receipt Note) Matching Agent

**What it is:**
An AI agent that automatically matches incoming goods receipts against the corresponding PO — flagging quantity discrepancies, quality rejections, and partial deliveries without any manual cross-referencing.

**What it does:**

- Receives GRN input: via ERP entry, warehouse app, or scanned delivery challan (AI reads the document)
- Matches GRN line items against open PO lines: item code, description, quantity, and unit
- Flags discrepancies automatically:
  - Short delivery: "PO quantity 500 kg, received 380 kg — short by 120 kg"
  - Over-delivery: "PO quantity 100 units, received 115 — excess 15 units, approval required"
  - Item mismatch: "Item code on challan (MS-1204) does not match PO item code (MS-1202)"
- Routes discrepancies to the storekeeper and procurement officer for resolution
- Approves fully matching GRNs automatically and triggers the next step (invoice matching)
- Calculates pending delivery balances per PO for partial deliveries and keeps PO open accordingly

**Why it matters:**
Manual GRN matching is time-consuming and error-prone — discrepancies get missed, payment is made for goods not received, and disputes with vendors take weeks to resolve. AI matching catches every discrepancy at the point of receipt.

**Demo data:** Show a GRN matching screen — delivery challan uploaded → AI extracts 8 line items → 6 matched (green tick) → 1 short delivery flagged (amber) → 1 item code mismatch flagged (red) → resolution workflow triggered automatically.

---

### Invoice Reconciliation & Approval Workflow

**What it is:**
An AI agent that processes vendor invoices — matching each line item against the corresponding approved GRN and PO — and routes validated invoices for payment approval while flagging disputes for resolution.

**What it does:**

- Accepts vendor invoices via: email attachment, WhatsApp document, or supplier portal upload
- AI reads invoice: extracts vendor name, invoice number, date, line items, quantities, rates, GST components, and total
- Three-way match: invoice vs PO vs GRN — validates that goods were ordered, received, and invoiced correctly
- Tolerance rules: automatically approves minor variances within defined limits (e.g. ±2% on price, ±5 units on quantity)
- Flags for manual review: price deviations above tolerance, items not in PO, GST rate mismatches
- Routes approved invoices to Tally/ERP for booking and payment scheduling
- Generates accounts payable ageing report: invoices due in 0–7 days, 8–30 days, 30+ days
- Sends payment confirmation to vendor via WhatsApp once payment is processed

**Why it matters:**
Invoice processing in Indian manufacturing is typically 5–10 days of manual matching, chasing missing GRNs, and getting approvals. AI three-way matching compresses this to 24–48 hours — improving vendor relationships and avoiding late payment penalties.

**Demo data:** Show an invoice arriving via email → AI extraction panel populating (vendor: Jain Polymers, invoice ₹1,84,500) → three-way match running (PO matched ✓, GRN matched ✓, Rate matched ✓) → "Auto-Approved" badge → payment scheduled for 15th. Timeline: 3 minutes 8 seconds.

---

### Vendor Performance Scorecard

**What it is:**
An automated analytics module that tracks and scores every vendor across four dimensions — delivery, quality, pricing, and responsiveness — and generates monthly scorecards used for vendor selection, negotiations, and rationalisation decisions.

**What it does:**

- Pulls data automatically from: PO fulfilment records (OTD %), GRN rejection rates (quality %), invoice price vs quoted price (pricing compliance %), and follow-up response time (responsiveness)
- Calculates a composite vendor score (0–100) with weighted sub-scores per dimension
- Flags underperforming vendors: score below 60 triggers a performance improvement alert to procurement head
- Identifies star vendors: top 5 vendors with highest scores recommended for preferred vendor status and volume consolidation
- Generates monthly vendor scorecards as branded PDFs auto-sent to the procurement head
- Provides category-level analysis: which material categories have the weakest vendor performance

**Why it matters:**
Most manufacturers have no objective basis for vendor selection — decisions are based on habit, relationships, or whoever answers the phone fastest. Scorecards bring data discipline to vendor management and give procurement teams leverage in negotiations.

**Demo data:** Show a vendor leaderboard — 12 vendors, sorted by score — with sparkline trend charts, colour-coded scores, and a "At Risk" badge on two vendors below 55. Drill-down view for one vendor showing all four sub-scores with month-over-month trend.

---

### Purchase Budget & Spend Analytics

**What it is:**
A real-time spend intelligence dashboard that tracks actual procurement spend against approved budget — by category, vendor, department, and time period — giving finance and management complete visibility into purchasing activity.

**What it does:**

- Tracks all POs issued and invoices approved, mapped to budget categories (Raw Materials, Consumables, Packaging, Spares, Capex)
- Compares actual spend vs approved budget per category, monthly and year-to-date
- Flags over-budget categories: "Raw Material spend is 108% of monthly budget — ₹L over"
- Identifies spend concentration: "Top 3 vendors account for 61% of total spend — concentration risk"
- Price variance analysis: actual purchase price vs standard cost per item, trend over 6 months
- Auto-generates monthly purchase MIS report for CFO/finance team with spend summary, budget variance, and savings achieved via vendor negotiations

**Why it matters:**
Without spend visibility, procurement decisions are made in isolation. This module gives management real-time oversight over one of the largest cost lines in manufacturing — raw material and procurement spend.

---

## M4 — Quality & Compliance Reporting

> AI processes your existing inspection logs, batch records, and NCR data to auto-generate audit-ready compliance reports and trend analysis — eliminating weeks of manual documentation effort.

**Module purpose:** Transform quality management from a paper-heavy, reactive process into a data-driven, automated system. AI reads incoming inspection records, NCRs, and test reports — detects quality trends, generates compliance documentation, and ensures your factory is always audit-ready without manual report compilation.

**Demo wow moment:** An NCR raised on the shop floor → AI classifying it, routing it, performing root cause analysis from historical data, and generating a CAPA document — all in under 2 minutes, zero manual entry.

---

### Inspection Data Capture & Digitisation

**What it is:**
A digital inspection data capture system that replaces paper QC checksheets with mobile-friendly digital forms — feeding structured inspection data into the quality analytics engine in real time, accessible from any smartphone on the shop floor.

**What it does:**

- Digital inspection forms configured per product, process, and inspection stage (incoming / in-process / final)
- Mobile app: inspector opens form → scans batch or job number → enters measurement readings, visual inspection results, and pass/fail determination
- Accepts attachments: photos of defects, measurement instrument readings, and calibration certificates
- Validates entries: out-of-specification readings automatically highlighted and must be confirmed before saving
- Syncs data in real time to the central quality database — no paper, no end-of-day batch entry
- Supports offline mode: data queued and synced when connectivity resumes
- Configures inspection frequency rules: every batch / every Nth unit / time-based / on customer request

**Why it matters:**
Paper QC checksheets are completed hours after inspection, entries are illegible or incomplete, and data is never analysed because it is locked in physical registers. Digital capture creates a real-time, searchable, analysable quality record from day one.

**Demo data:** Show a mobile inspection form on a phone screen — inspector scanning a QR code on a batch → form auto-populating product name and specs → 6 measurement fields → one value flagged red (out of spec) → inspector adds a defect photo → submitted. Simultaneously, the dashboard updates in real time.

---

### NCR (Non-Conformance Report) Management Agent

**What it is:**
An AI-powered NCR management system that captures, classifies, routes, and tracks every non-conformance report from creation to closure — replacing the manual NCR register and disconnected email chains.

**What it does:**

- NCR raised via mobile form or desktop: product, batch, defect description, quantity affected, detected at (incoming/in-process/customer complaint)
- AI classification: automatically categorises defect by type (dimensional / surface / functional / documentation / packaging) using NLP on the defect description
- Severity scoring: Minor / Major / Critical — based on defect type and quantity affected
- Auto-routing: routes NCR to the responsible department (vendor → procurement, process → production HOD, product design → engineering)
- CAPA assignment: assigns Corrective Action and Preventive Action tasks with due dates to responsible persons
- Tracks CAPA closure: sends daily reminders to assignees, escalates overdue CAPAs to QA head
- Generates NCR closure report with root cause, action taken, and effectiveness check
- Monthly NCR summary: by defect type, department, vendor, and product — trend chart over 6 months

**Why it matters:**
Most factory NCR registers are filled in retrospect and never analysed. Unresolved NCRs recur indefinitely because CAPAs are not tracked. This system ensures every quality problem has an owner, a deadline, and a closure record.

**Demo data:** Show an NCR being raised — defect photo uploaded, AI classifying as "Surface Finish — Major" in 4 seconds, routing to Production HOD automatically, CAPA task assigned to Vijay Sharma (due 3 days), and WhatsApp notification sent — all with no manual steps after the initial form submission.

---

### Batch Record & Traceability Engine

**What it is:**
A digital batch record system that maintains complete forward and backward traceability for every manufactured batch — linking raw material lots, process parameters, equipment used, operator ID, inspection results, and dispatch details into a single searchable record.

**What it does:**

- Creates a batch record card at the start of every production run: batch number, product code, quantity, date, shift, and line assignment
- Links incoming: raw material lot numbers consumed, supplier GRN reference, and material test certificate
- Records in-process: machine ID, process parameters (temperature, speed, pressure — manual or automated input), operator/supervisor names
- Links inspection: in-process and final inspection results from Inspection Data Capture & Digitisation automatically attached to the batch record
- Links dispatch: delivery challan, customer, and dispatch date attached on goods outward
- Full traceability query: "Which customer received material from RM Lot #2024-778?" → traces forward from receipt to dispatch in under 10 seconds
- Reverse traceability: "Customer XYZ reported a defect in batch #B-4421" → immediately pulls all linked raw materials, process parameters, operators, and inspection data for root cause investigation

**Why it matters:**
When a customer raises a quality complaint or a product recall is necessary, most manufacturers spend 3–5 days manually tracing the affected batches through paper records. Digital traceability cuts this to minutes — and is mandatory for exports, automotive, pharma, and FMCG customers.

**Demo data:** Show a batch traceability tree diagram — Batch B-4421 at centre, expanding outward to RM lots (left), process steps (top), inspection records (right), and dispatch details (bottom) — with a "Trace Complete in 8 seconds" badge.

---

### Auto-Generated Compliance Reports

**What it is:**
An AI report generation agent that automatically compiles inspection data, test results, NCR summaries, and CAPA status into formatted compliance reports — ready for internal audits, customer audits, BIS, ISO, and regulatory inspections — without any manual document preparation.

**What it does:**

- Configurable report templates: ISO 9001 management review, BIS self-certification, customer-specific PPAP (Production Part Approval Process), and regulatory submission formats
- Auto-populates report fields from the quality database: inspection pass rates, defect rates, NCR counts, CAPA closure rates, calibration status
- Generates on demand or on a scheduled cycle (monthly / quarterly / annually)
- Includes charts: defect trend line, NCR by category Pareto, SPC control charts for critical process parameters, customer complaint trend
- Produces a PDF with company letterhead, document control header (revision number, date, approved by)
- Sends draft to QA Head for review with a one-click "Approve & Issue" button
- Maintains a document register: all issued compliance reports with version history and distribution record

**Why it matters:**
Preparing for an audit in most factories means a week of frantic document compilation, late nights, and stress. With automated report generation, audit preparation time drops from days to hours — and the factory is perpetually in an audit-ready state.

**Demo data:** Show a dashboard with "Generate ISO 9001 Q3 Management Review Report" button → progress bar runs for 12 seconds → 22-page PDF opens → cover page, KPI dashboard, defect trend charts, NCR Pareto, CAPA status table — all populated with real data. "Ready for review" badge with QA Head notification.

---

### SPC (Statistical Process Control) Monitor

**What it is:**
A real-time statistical process control monitoring module that tracks critical-to-quality (CTQ) process parameters, plots them on control charts, and alerts quality and production teams the moment a process goes out of control — before defective product is produced.

**What it does:**

- Accepts measurement data from: digital inspection forms (Inspection Data Capture & Digitisation), automated gauges (where integrated), or manual entry
- Plots X-Bar R charts, X-Bar S charts, or Individual-MR charts per CTQ parameter and product
- Applies Western Electric rules to detect out-of-control signals: single point beyond control limits, 8 consecutive points one side of centreline, 2 of 3 beyond 2-sigma, and 4 of 5 beyond 1-sigma
- Sends instant WhatsApp alert to production supervisor and QA team when an out-of-control signal is detected: "ALERT: CTQ Parameter 'Wall Thickness' on Line 2 — 2 consecutive points above UCL. Check process. Last reading: 4 mm (UCL: 0 mm)."
- Calculates process capability indices (Cp, Cpk) per CTQ and flags parameters with Cpk below 3
- Monthly SPC summary: all CTQ parameters with capability status, trend, and improvement recommendations

**Why it matters:**
Most quality issues in manufacturing are not sudden failures — they are gradual process drifts that produce defects for hours before anyone notices. SPC catches the drift at the first statistical signal, allowing correction before significant defective output accumulates.

**Demo data:** Show a control chart for "Component Diameter" — 25 data points, upper/lower control limits, centreline — with points 23 and 24 above UCL highlighted red and a WhatsApp alert notification appearing simultaneously on a mobile phone mockup.

---

### Calibration Management Agent

**What it is:**
An automated calibration management system that tracks every measuring instrument and gauge, sends calibration due reminders, logs calibration results, and ensures no out-of-calibration instrument is used for quality decisions.

**What it does:**

- Maintains a master register of all instruments: ID, name, type, location, calibration frequency, last calibration date, next due date, and calibration agency
- Sends reminders 30 days, 15 days, and 3 days before calibration due date — to lab in-charge and QA head via WhatsApp
- Marks instruments as "Overdue" if not calibrated by due date — auto-triggers a hold alert: "Instrument VN-204 calibration overdue. Do not use for final inspection until recalibrated."
- Logs calibration results: calibration certificate number, before/after readings, pass/fail, and next due date
- Stores calibration certificates digitally — searchable and downloadable for audits
- Monthly calibration compliance report: % instruments calibrated on time, overdue list, and certificates due for renewal

**Why it matters:**
Using an out-of-calibration instrument means your entire quality record for that period is suspect. Calibration compliance is a mandatory requirement for ISO 9001, IATF 16949, and most customer QMS requirements — and it is one of the most common audit findings when managed manually.

**Demo data:** Show a calibration tracker — 24 instruments in a table — with green (compliant), amber (due in 7 days), and red (overdue) status badges. A red row "Micrometer VN-204: 4 days overdue" with a "Hold" tag and a "Send Reminder to Lab" button.

---

### Customer Complaint Quality Linkage

**What it is:**
An AI agent that receives customer quality complaints from M8 (Customer Complaint Management), automatically links them to the relevant batch records, inspection history, and process parameters — accelerating root cause identification and 8D report preparation.

**What it does:**

- Receives complaint: product, batch number, defect description, and quantity affected from M8
- Pulls complete batch record from Batch Record & Traceability Engine: all RM lots, process parameters, inspection results, and operators
- Compares complaint defect type against NCR history: "Similar surface finish defect was observed internally on Batch B-4415 — same production line, same operator shift."
- Generates a pre-populated 8D report draft: D1 (team), D2 (problem description), D3 (containment), D4 (root cause from data analysis) — QA engineer reviews and completes D5–D8
- Identifies systemic issues: if 3+ complaints share the same root cause, escalates to management as "Systemic Quality Risk"
- Tracks complaint-to-CAPA closure time as a KPI

**Why it matters:**
When a customer calls with a quality complaint, the typical response is 3 days of frantic manual investigation. AI linkage cuts investigation time from days to hours — enabling faster customer response and deeper root cause resolution.

---

## M5 — Dealer & Distributor Communication Automation

> AI agents handle order inquiries, stock queries, dispatch updates, and payment follow-ups with your dealer and distributor network 24/7 — adapting Fortiv's proven SalesDrive model for B2B manufacturing distribution.

**Module purpose:** Build a scalable, always-on communication layer between your factory and your dealer/distributor network — so your sales and dispatch teams stop spending half their day answering repetitive WhatsApp and phone queries and focus on growing the network instead.

**Demo wow moment:** A dealer sending a WhatsApp message at 9:30 PM asking about stock availability and order status — receiving an accurate, personalised response in 12 seconds, including stock levels and confirmed dispatch date, from the AI agent.

---

### Dealer WhatsApp AI Agent

**What it is:**
A fully autonomous AI agent deployed on WhatsApp Business API that handles inbound queries from your dealer and distributor network — stock enquiries, order status, pricing, dispatch confirmation, and return requests — 24 hours a day, in English, Hindi, and Gujarati.

**What it does:**

- Each dealer is authenticated by their registered mobile number — agent identifies the dealer and retrieves their account context automatically
- Handles stock availability queries: "Do you have 500 units of Item Code MS-204 available?" → checks live inventory → responds with available quantity and lead time for balance
- Order status: "What is the status of my order #ORD-2024-887?" → pulls ERP data → responds with current stage (In Production / QC Cleared / Dispatch Scheduled / Dispatched with LR number)
- Dispatch confirmation: "My material was supposed to arrive today" → checks dispatch record → shares LR number, transporter name, and last tracking update
- Price and credit enquiries: current trade price, applicable discount, outstanding balance, and available credit limit
- Return and replacement requests: logs the request, confirms pickup scheduling, and routes to the after-sales team (M8)
- Escalates complex disputes to the sales manager with full conversation context

**Why it matters:**
Dealers are your most important B2B customers. Slow query response — especially after business hours — damages relationships and pushes orders to competitors. A 12-second AI response at 9 PM builds trust and loyalty at zero incremental cost.

**Demo data:** Show a simulated WhatsApp conversation — Dealer "Patel Agencies, Rajkot" messaging at 9:47 PM → AI responding in 11 seconds with order status, dispatch LR number, and expected delivery — dealer replying "Thanks, noted" — conversation logged in CRM with dealer account tag.

---

### Order Intake Automation

**What it is:**
An AI agent that accepts dealer orders via WhatsApp, email, or dealer portal — parses the order details, validates stock availability and credit limit, and logs the confirmed order into ERP — without any manual order entry by your sales team.

**What it does:**

- Order submission via:
  - WhatsApp: dealer sends a message ("Please book: MS-204 × 500 units, MS-208 × 200 units for this week dispatch") → AI extracts items, quantities → validates → confirms order
  - Email: dealer sends a PO attachment → AI reads the PDF/Excel → extracts line items → creates sales order in ERP
  - Dealer portal: web form with real-time stock and pricing display
- Validation before confirmation: item code vs catalogue check, available stock or lead time, credit limit available, MOQ compliance
- Order confirmation sent to dealer via WhatsApp within 2 minutes: order number, items, quantities, tentative dispatch date
- Sales team notified for any orders requiring manual attention: special pricing, credit overrides, or out-of-catalogue items
- Daily order intake report to sales head: orders received, value, dealer-wise summary

**Why it matters:**
In most manufacturing companies, order intake involves a dealer calling → salesperson taking notes → manually entering into ERP → calling back to confirm — a process taking 30–60 minutes per order and prone to errors. Automation makes this a 2-minute, zero-error process.

**Demo data:** Show a WhatsApp message from a dealer with an informal order request → AI parsing it into a structured order card with 3 line items → credit limit check passing → order #ORD-2024-1044 created in ERP → confirmation sent to dealer — total elapsed time: 1 minute 54 seconds.

---

### Dispatch & Logistics Update Agent

**What it is:**
An automated agent that sends proactive dispatch and logistics updates to dealers and distributors via WhatsApp — so they always know when their material is moving without having to call or WhatsApp your dispatch team repeatedly.

**What it does:**

- Trigger 1 — Dispatch Scheduled: "Your order #ORD-2024-1044 is scheduled for dispatch tomorrow. Estimated delivery: 25th Jan."
- Trigger 2 — Material Dispatched: "Your order #ORD-2024-1044 has been dispatched. LR No: TM24-88721, Transporter: Saurashtra Transport. Track: [link]"
- Trigger 3 — Delay Alert: if dispatch is delayed beyond committed date → "We regret to inform that dispatch of your order will be delayed by 2 days due to [reason]. New dispatch date: 27th Jan. Apologies for the inconvenience."
- Trigger 4 — Delivery Confirmation Request: "Please confirm receipt of your order #ORD-2024-1044 delivered today. Reply OK to confirm or message us if there is a discrepancy."
- Tracks delivery confirmation responses and flags unconfirmed deliveries to the dispatch team after 48 hours
- Monthly dealer communication analytics: messages sent, response rate, average response time

**Why it matters:**
Dealers calling the dispatch team repeatedly to track their orders is one of the biggest productivity drains in manufacturing companies. Proactive updates eliminate 80% of these inbound calls — freeing your dispatch team for actual logistics coordination.

---

### Secondary Sales Tracking Agent

**What it is:**
An AI agent that collects and aggregates secondary sales data (dealer sell-out to end customers) from your distributor network via WhatsApp or portal — giving you visibility into actual market demand, not just your shipments to dealers.

**What it does:**

- Sends automated weekly WhatsApp message to each dealer: "Hi [Dealer Name], please share this week's sales report. [Formatted template or link]"
- Processes responses: dealer shares sales data via Excel, photo, or structured WhatsApp reply → AI extracts product, quantity, and customer category data
- Aggregates secondary sales data by product, geography, dealer, and week
- Compares primary (your invoice to dealer) vs secondary (dealer sale to market): identifies inventory pile-up at dealers (high primary, low secondary) and fast-moving items (low dealer stock, high secondary)
- Alerts sales team to dealers with high inventory stagnation: "Sharma Distributors, Vadodara: 45 days of stock on hand. Requires field visit or promotional push."
- Monthly secondary sales dashboard for the national/regional sales head

**Why it matters:**
Manufacturers who only track their own shipments to dealers are flying blind on actual market demand. Secondary sales visibility is the difference between demand-driven planning and guess-driven planning.

---

### Dealer Onboarding Workflow

**What it is:**
An automated onboarding workflow that guides new dealer and distributor applicants through the registration, KYC verification, agreement execution, and system access setup — digitising a process that typically takes 2–4 weeks into a 2–3 day workflow.

**What it does:**

- Onboarding form: dealer submits business details, GST number, bank details, trade references, and KYC documents (GST certificate, PAN, Aadhaar, cancelled cheque) via web form or WhatsApp document upload
- AI document verification: validates GST registration status in real time (GSTN API), checks PAN-Aadhaar linkage, verifies bank account via penny drop
- Credit assessment workflow: routes application to credit team with a pre-compiled profile for limit setting
- Dealer agreement e-sign: sends digital agreement via e-sign platform (DigiSign or similar), receives signed copy, stores with dealer record
- System access setup: creates dealer login for portal, WhatsApp Business contact added to agent routing
- Welcome kit: automated WhatsApp welcome message with pricelist, order process guide, and key contact numbers
- Onboarding status tracker: shows the dealer their application progress through each stage in real time

**Why it matters:**
A dealer who has to wait 3 weeks to start ordering can become a competitor's dealer in that time. Automated onboarding creates a professional first impression and gets dealers ordering faster.

---

---

## M6 — Customer & Dealer Voice Agents

> AI voice agents handle inbound calls for order status, dispatch ETAs, complaint logging, and payment reminders — freeing your customer service and sales teams for higher-value interactions.

**Module purpose:** Deploy intelligent AI voice agents on your inbound customer and dealer helpline that can handle 80% of routine queries autonomously — in Hindi, Gujarati, and English — without putting callers on hold or routing them through frustrating IVR trees. Human agents intervene only when genuinely needed.

**Demo wow moment:** A live call recording where a dealer calls at 8:15 PM asking for their order status and dispatch ETA — the AI voice agent responds naturally in Hindi, retrieves the order data, and provides a complete accurate answer in under 45 seconds without any human involvement.

---

### Inbound Order Status Voice Agent

**What it is:**
An AI voice agent that handles inbound calls from customers and dealers requesting order status, dispatch updates, and delivery ETAs — retrieving live ERP data to provide accurate, real-time responses.

**What it does:**

- Greets caller in their preferred language (detected from caller ID or asked at start of call)
- Authenticates caller: "Please say your account name or registered mobile number" → verifies against CRM
- Handles order status queries: "Let me check your order status. Order #4821 for 1,000 units of MS-204 — current status: dispatched on 26th January. LR number is TM24-88744 with Saurashtra Transport. Expected delivery tomorrow."
- Handles delivery delay queries: explains delay reason from the dispatch notes and provides revised ETA
- Handles multiple order queries in a single call: "Do you have another order you'd like to check?"
- Escalates to human agent for: disputes, complaints, credit issues, or when caller requests to speak to someone
- Logs call summary to CRM: caller ID, query type, information provided, and resolution status

**Why it matters:**
Order status calls are the highest-volume inbound query in any manufacturing company — and the most repetitive. A voice agent handling these at any hour of day or night protects customer satisfaction while freeing your team for conversations that actually require human judgement.

---

### Complaint Logging Voice Agent

**What it is:**
An AI voice agent that handles inbound complaint calls — empathetically acknowledging the issue, capturing complete complaint details via structured voice dialogue, issuing a complaint reference number, and triggering the M8 complaint workflow automatically.

**What it does:**

- Detects complaint intent from opening statement: "I want to raise a complaint about my last delivery"
- Empathetic acknowledgement: "I'm very sorry to hear about this issue. Let me help you register your complaint so our team can resolve it urgently."
- Structured data collection via voice: product, invoice/order number, problem description, quantity affected, and customer-suggested resolution
- Issues complaint reference number on call: "Your complaint reference number is CMP-2024-441. Please note this for tracking."
- Triggers M8 complaint workflow with complete details logged
- Sends complaint confirmation WhatsApp to caller after the call: reference number, details captured, and expected response time
- Calibrated tone for escalated/frustrated callers: de-escalation language patterns and quicker human agent handoff

---

### Dealer Feedback & Survey Agent

**What it is:**
An AI voice agent that calls dealers monthly or post-delivery to collect structured feedback on product quality, delivery experience, and service satisfaction — building a real-time dealer satisfaction database without any manual survey effort.

**What it does:**

- Automated post-delivery call: 3–5 days after confirmed delivery — "How would you rate the quality of the material delivered? How would you rate the delivery experience?" (0–10 NPS scale via voice)
- Monthly dealer satisfaction survey: overall satisfaction, product quality rating, company responsiveness rating, and open-ended improvement suggestion captured via speech-to-text
- Aggregates NPS and satisfaction scores by dealer, region, product, and month
- Flags detractors (score 0–6) immediately to the regional sales manager for follow-up within 24 hours
- Generates quarterly dealer satisfaction report: NPS trend, satisfaction by region, top improvement themes from open feedback

**Why it matters:**
Most manufacturers have no structured mechanism to measure dealer satisfaction — they find out about issues when a dealer stops ordering. Proactive, regular feedback collection identifies problems early and demonstrates that the company values dealer input.

---

## M7 — Customer Complaint & After-Sales Management

> AI agents log, classify, route, and resolve customer complaints through a fully automated ticket lifecycle — ensuring every complaint has an owner, a deadline, and a customer-visible resolution update.

**Module purpose:** Transform complaint management from a reactive, ad-hoc process into a structured, traceable system. Every complaint received — by phone, WhatsApp, email, or voice agent — is instantly captured, classified, routed to the right team, and tracked to closure. Customers receive proactive updates without chasing.

**Demo wow moment:** A customer sending a WhatsApp complaint about a material defect → AI classifying it as "Quality — Surface Defect" in 6 seconds → automatically creating a complaint ticket → routing to QA team → sending acknowledgement to customer with a reference number and 48-hour resolution commitment — all without human intervention.

---

### Omnichannel Complaint Intake

**What it is:**
A unified complaint intake system that captures complaints from every channel — WhatsApp, email, phone (via Complaint Logging Voice Agent), dealer portal, and field sales reports — into a single complaint management system with a consistent ticket format, regardless of how the complaint arrived.

**What it does:**

- WhatsApp intake: customer or dealer sends a complaint message → AI captures, creates ticket, sends reference number
- Email intake: complaint email received → AI extracts details, creates ticket, sends acknowledgement
- Voice agent intake: complaint logged via Complaint Logging Voice Agent → automatically transferred to ticket system
- Portal intake: customer submits via web form → ticket created with all form data
- Field sales intake: sales rep logs a complaint on behalf of a customer via mobile app in the field
- All channels produce identical ticket format: complaint ID, channel source, date/time, customer details, product, order reference, complaint description, and media attachments
- SLA clock starts from the moment of intake regardless of channel

**Why it matters:**
Companies that handle complaints inconsistently — quickly via some channels, slowly via others — create a perception of unfairness and unpredictability. Unified intake ensures every customer gets the same professional, fast response regardless of how they reached out.

---

### AI Complaint Classification & Routing

**What it is:**
An AI NLP agent that reads every new complaint, automatically classifies it into a defined taxonomy, assigns a severity level, and routes it to the correct team — within seconds of receipt and without any manual triage.

**What it does:**

- Classification taxonomy configured per client, example for manufacturing:
  - Quality Defects: Dimensional / Surface Finish / Material Property / Contamination / Packaging
  - Delivery: Short Shipment / Late Delivery / Wrong Item / Damaged in Transit
  - Documentation: Wrong Invoice / Missing Certificate / Incorrect Challan
  - Service: Response Delay / Salesperson Issue / Communication Problem
- Severity scoring: Critical (production line stopped, large value affected) / Major (significant defect, moderate quantity) / Minor (cosmetic, small quantity)
- Routing rules: Quality → QA Team; Delivery → Dispatch Manager; Documentation → Sales Admin; Service → Sales Manager
- SLA assignment by severity: Critical (4 hours response, 24-hour resolution), Major (8-hour response, 48-hour resolution), Minor (24-hour response, 7-day resolution)
- Sends routing notification to the assigned team via WhatsApp: "New complaint routed to you: [Customer, Defect Type, Severity]. Please acknowledge within [SLA hours]."

---

### Customer Complaint Acknowledgement Agent

**What it is:**
An automated customer communication agent that sends an immediate, personalised acknowledgement to every complainant — confirming receipt, providing a reference number, explaining next steps, and committing to a response timeline.

**What it does:**

- Sends within 5 minutes of ticket creation — regardless of time of day
- Personalised WhatsApp message: "Dear [Customer Name], thank you for bringing this to our attention. We have registered your complaint (Ref: CMP-2024-441) regarding [brief complaint description]. Our [QA/Dispatch] team will contact you within [SLA hours] with an update. We sincerely apologise for the inconvenience."
- Email version: same content in a more formal format with complaint summary and our quality commitment statement
- If complaint was raised after business hours: "Our team will begin working on your complaint first thing tomorrow morning and will contact you by [time]."
- Sets customer expectation: explicit commitment on response time, assigned team name (not individual to avoid dependency)

**Why it matters:**
Customers who complain and receive silence feel ignored and become hostile. A professional acknowledgement in 5 minutes — even at 10 PM — signals that the company takes quality seriously and immediately de-escalates most complaints.

---

### CAPA (Corrective & Preventive Action) Tracking

**What it is:**
A structured CAPA management module that ensures every customer complaint generates a root cause investigation and documented corrective action — closing the loop between customer-facing resolution and internal process improvement.

**What it does:**

- For every Major or Critical complaint: auto-generates a CAPA task linked to the complaint ticket
- Links to quality module (Customer Complaint Quality Linkage): pulls batch record, inspection history, and similar NCR data for root cause analysis support
- CAPA task structure: Complaint summary → Immediate containment action → Root cause (5-Why or Fishbone) → Corrective action → Preventive action → Effectiveness verification
- Assigns CAPA to QA/production responsible person with due date
- Daily escalation: if CAPA not initiated within 24 hours (Critical) or 48 hours (Major) → WhatsApp alert to QA Head
- CAPA closure requires: evidence of action taken (photo, process change document, training record) and verification that the issue has not recurred
- Monthly CAPA summary: open vs closed, by defect category, average closure time, and repeat complaints (same defect recurring = CAPA ineffective flag)

---

### Customer Resolution Communication Agent

**What it is:**
An automated customer communication agent that sends proactive status updates to complainants as their complaint progresses through investigation and resolution — so customers never have to chase for an update.

**What it does:**

- Investigation started update (within SLA): "We have begun investigating your complaint CMP-2024-441. Our QA team is reviewing the batch records and will have an update for you by [date/time]."
- Root cause update (if available): "We have identified the likely cause of the issue as [brief explanation]. We are taking immediate corrective action. Replacement/credit/rework will be arranged as follows: [detail]."
- Resolution confirmed: "Your complaint CMP-2024-441 has been resolved. [Summary of action taken: replacement dispatched / credit note raised / process corrected]. We have implemented corrective actions to prevent recurrence."
- Post-resolution NPS: 3 days after closure, sends: "We hope your concern has been fully resolved. On a scale of 0–10, how satisfied are you with how we handled this? Reply with a number." — score logged to customer satisfaction tracker.

---

### Complaint Analytics & Quality Intelligence

**What it is:**
An analytics module that aggregates complaint data across the entire customer base to identify systemic quality and service issues — generating management reports that drive prioritised improvement investment.

**What it does:**

- Complaint trend by type: month-over-month trend chart by complaint category — identifying rising issues early
- Product-level complaint rate: complaints per thousand units shipped by product — identifying problematic products
- Customer-level complaint history: frequency of complaints by customer — distinguishing genuinely problematic products from high-maintenance accounts
- Complaint cost analysis: value of replacements, credit notes, rework, and logistics cost from complaints — the financial cost of quality failures
- Complaint-to-CAPA effectiveness: % of defect categories where repeat complaints have declined after CAPA implementation
- Monthly complaint summary report auto-sent to MD, QA Head, and Production Head: total complaints, by category, cost impact, and top systemic issues requiring leadership attention

---

## M8 — Follow Ups & Alerts

> Automated tracking, WhatsApp notifications, Outbound voice reminders, and alert escalation matrices for vendors and dealers.

**Module purpose:** Shift manual follow-up routines into scheduled, automated omnichannel loops — keeping procurement and finance pipelines clear without manual intervention.

**Demo wow moment:** Late vendor delivery or unpaid invoice triggers automated sequences of WhatsApp nudges, voice alerts, and escalation tasks automatically.

---

### Vendor Follow-Up Automation

**What it is:**
An automated follow-up system that monitors outstanding POs and sends timely, personalised reminders to vendors via WhatsApp and email — ensuring deliveries arrive on time without a procurement officer manually chasing each supplier.

**What it does:**

- Monitors all open POs and their promised delivery dates against current date
- Sends automated WhatsApp reminders on a configurable schedule:
  - T-5 days: "Reminder: PO #2024-1147 for 500 kg CRCA Sheet due in 5 days. Please confirm dispatch plan."
  - T-2 days: "Urgent: PO #2024-1147 delivery due in 2 days. Please share LR/courier number and ETA."
  - T+1 (overdue): "PO #2024-1147 was due yesterday. Please confirm new delivery date urgently."
- Escalates chronically late vendors to the procurement head via separate alert
- Logs all follow-up communications with vendor responses in the PO timeline
- Generates vendor on-time delivery (OTD) scorecard: % deliveries on-time, average delay days, and trend per vendor

**Why it matters:**
Procurement officers in typical factories spend 30–40% of their time chasing vendor deliveries. Automating follow-ups frees them entirely for strategic vendor development while ensuring no PO falls through the cracks.

**Demo data:** Show a vendor follow-up dashboard — 18 open POs — with status badges (On Track / Due Soon / Overdue), last message sent timestamp, and vendor response status. One overdue vendor highlighted red with an "Escalate to Manager" button.

---

### Dealer Payment Follow-Up Automation

**What it is:**
An automated payment collection agent that sends structured, polite payment reminders to dealers based on invoice due dates — reducing outstanding receivables and eliminating the awkward manual chasing that strains dealer relationships.

**What it does:**

- Pulls outstanding invoice data from ERP: dealer name, invoice number, amount, due date, and days overdue
- Sends automated WhatsApp reminders on a configurable schedule:
  - T-3 days before due: "Friendly reminder: Invoice #INV-2024-4421 for ₹2,84,000 is due on 25th Jan."
  - Due date: "Invoice #INV-2024-4421 of ₹2,84,000 is due today. Please arrange payment. Thank you."
  - T+7 overdue: "Invoice #INV-2024-4421 of ₹2,84,000 is now 7 days overdue. Please clear at the earliest to maintain your credit limit."
  - T+15 overdue: escalates to the regional sales manager with dealer's full outstanding statement
- Dealer can reply with a payment commitment date — AI logs it and suspends reminders until that date, then resumes if unpaid
- Weekly receivables collection dashboard: ageing bucket summary, top overdue dealers, amount recovered this week

**Why it matters:**
Chasing dealer payments is one of the most uncomfortable and time-consuming activities for sales teams. Automated reminders handle the routine follow-up professionally and consistently, while escalation rules ensure the team intervenes only for genuinely problematic accounts.

**Demo data:** Show a dealer outstanding table — 15 dealers, invoice-level ageing — with reminder status badges and an "overdue ₹1L" total highlighted in red. One dealer with a "Payment committed for 28th Jan" green badge after replying to the automated message.

---

### Payment Reminder Outbound Voice Agent

**What it is:**
An AI outbound voice agent that calls dealers and customers with overdue payments — delivering a polite, professional payment reminder and logging payment commitment responses — without requiring your finance team to make awkward collection calls.

**What it does:**

- Triggered from accounts receivable system when invoice is overdue by a configurable number of days (e.g. 7 days)
- Places outbound call to dealer/customer in business hours (9 AM – 6 PM)
- Script: "Good morning, may I speak with [contact name]? This is a call from [Company] regarding Invoice #INV-2024-4421 for ₹2,84,000, which was due on 25th January. We'd like to understand when we can expect the payment."
- Accepts and logs response: payment committed for a specific date, payment already made (logs for reconciliation check), request for extended credit (routes to manager), or dispute (routes to accounts team)
- If no answer: leaves a voicemail, sends WhatsApp follow-up within 30 minutes
- CRM updates: all call outcomes logged with commitment date or issue reason
- Escalates accounts with 3+ missed commitments to the collections manager for personal intervention

**Why it matters:**
Collection calls are stressful for finance teams and often deprioritised. AI voice agents make consistent, professional collection calls to every overdue account without any human reluctance — improving collection rates and freeing the finance team from an uncomfortable task.

---

## Demo Build Prompts

> Copy these prompts directly into Claude to build each module's demo screen.

### Master Prompt (Full App)

Build a full Manufacturing AI Command Center dashboard for Fortiv Solutions. Dark theme, navy #1A3C5E primary, electric blue #2E86AB accent, amber #E8A838 warning, coral red #D85A30 danger, dark bg #0D1B2A. Eight module navigation on the left sidebar. Default landing on the MD Command Dashboard. Indian manufacturing context — Gujarat-based company, GST/ERP integration, WhatsApp-first communication, rupee currency (₹ lakhs and crores). JetBrains Mono for all numbers. React app with recharts for all charts.

---

### Quick Module Prompts

**M1 — Production Schedule Dashboard:**
Build a production scheduling dashboard for a Gujarat manufacturing company. Show a Gantt chart with 6 production lines (Line 1–6) across Monday–Friday with 22 jobs colour-coded by priority (red/amber/green). AI conflict detection banner: "Line 3 Friday — Capacity exceeded. 2 jobs rescheduled to Line 4." Sidebar: MRP alert panel showing 5 materials in stock alert (3 critical in red, 2 amber). Bottom bar: "Last ERP sync: 2 minutes ago | Open Orders: 142 | Jobs scheduled today: 18". Navy #1A3C5E primary, dark theme. React + recharts.

**M2 — Procure-to-Pay Tracker:**
Build a procure-to-pay workflow tracker. Show 18 POs in a Kanban board: Raised → Sent to Vendor → Acknowledged → In Transit → GRN Pending → GRN Matched → Invoice Received → Invoice Approved → Payment Scheduled. Each card: vendor name (Indian vendors — Mehta Steel, Jain Polymers, Shah Chemicals), PO value in ₹, days in current stage, status badge. AI alert: "3 POs overdue for delivery — follow-up sent." GRN matching panel on right: challan uploaded → 7 items → 5 matched (green) → 2 flagged (red). Dark theme, navy primary. React app.

**M3 — Quality Intelligence Dashboard:**
Build a manufacturing quality intelligence dashboard. Four sections: (1) NCR live feed — 8 NCRs listed with defect type badge, severity (Critical/Major/Minor), assigned to, CAPA due date, days open. (2) SPC control chart for "Wall Thickness" — 30 data points, UCL/LCL lines, points 28–29 above UCL highlighted red with alert badge. (3) Inspection pass rate donut chart (9% pass, 5.8% reject) with last 6 months trend. (4) Calibration status — 24 instruments, 3 overdue in red. Amber #E8A838 accent, dark theme. React + recharts.

**M6 — MD Command Dashboard:**
Build a manufacturing MD command dashboard for a Gujarat SME manufacturer. Six KPI cards across top: Production Today (8,240 / 9,000 target), Dispatches (₹64L), Collections (₹42L), Open NCRs (7), Attendance (91%), and Cash Balance (₹Cr). Centre: production line status grid (6 lines, green/red/amber status dots with OEE % per line). Right panel: Alert Centre with 5 items (2 red urgent, 2 amber, 1 green). Bottom: revenue trend bar chart (12 months, ₹ crores). Mobile responsive. Dark #0D1B2A bg, navy #1A3C5E, electric blue #2E86AB accent. React + recharts.

**M8 — Complaint Management Dashboard:**
Build a customer complaint management dashboard for Indian manufacturing. Left panel: complaint inbox feed — 12 complaints, each with: complaint ID, customer name (Indian companies), defect type badge (Quality/Delivery/Documentation), severity badge (Critical/Major/Minor), SLA countdown timer, and assigned team. Centre: complaint detail view for selected complaint with timeline (Received → Classified → Routed → Investigation → Resolution). Right panel: analytics — complaint by type Pareto chart, open vs closed donut, avg resolution time trend. Coral red #D85A30 for overdue SLA. Dark theme. React + recharts.

---

## Brand & Tech Constants

```
Company:              Fortiv Solutions
Website:              fortivsolutions.in
Product:              Manufacturing AI Command Center
Tagline:              India's First End-to-End Manufacturing AI Operating System
Version:              1.0 (8 Modules, 41 Sub-Modules)
Market:               India — Gujarat Focus (Ahmedabad, Rajkot, Vadodara, Surat)

Brand Colors:
  Primary:            #1A3C5E  (deep navy)
  Accent:             #2E86AB  (electric blue)
  Success:            #1D9E75  (teal green)
  Warning:            #E8A838  (amber)
  Danger:             #D85A30  (coral red)
  Dark bg:            #0D1B2A  (near black)
  Light bg:           #F5F6FA  (off white)
  Card bg:            #FFFFFF

Typography:
  Display:            Playfair Display / DM Serif Display
  Body/UI:            DM Sans / Plus Jakarta Sans
  Data/Numbers:       JetBrains Mono

Demo Company Profile:
  Company:            Fortiv ManufactureSmart Pvt. Ltd.
  Location:           GIDC Vatva, Ahmedabad, Gujarat
  Industry:           Precision Metal Components
  Turnover:           ₹28–35 Cr annually
  Workforce:          320 employees, 3 shifts
  Products:           CRCA Sheet Components, Precision Castings, Stamped Parts
  Customers:          Automotive Tier-1 & Tier-2, FMCG, Infrastructure

Demo Vendor Names:
  Mehta Steel Works (Ahmedabad), Jain Polymers (Vadodara),
  Shah Chemicals (Surat), Patel Packaging (Rajkot),
  Gujarat Bearings Ltd. (Ahmedabad), Arvind Metals (Rajkot),
  Krishna Fasteners (Pune), Bharat Lubricants (Mumbai)

Demo Customer Names (Companies):
  Kapoor Industries Pvt. Ltd., Tata AutoComp Systems,
  Maruti Ancillaries Gujarat, Reliance Consumer Products,
  L&T Construction Materials, Bajaj Auto Components,
  Godrej Precision Engineering, Ashok Leyland Vendors,
  Amul Packaging Division, Adani Infrastructure Pvt. Ltd.

Demo Contact Names (Decision Makers):
  Rajesh Mehta (Purchase Manager), Priya Desai (Plant Head),
  Amit Shah (VP Supply Chain), Sunita Patel (QA Manager),
  Vikram Joshi (MD), Anita Kapoor (CFO),
  Deepak Trivedi (Production Head), Kavita Sharma (GM Operations),
  Suresh Nair (Regional Sales Head), Pooja Agarwal (Procurement Director)

ERP / Systems Context:
  ERP:                SAP Business One / Tally Prime / Odoo (client-dependent)
  MES:                Custom / ERPNext shop floor module
  Biometric:          ZKTeco / eSSL
  Accounting:         Tally Prime / Zoho Books
  e-Way Bill:         NIC GST Portal API integration
  e-Sign:             DigiSign / Aadhaar e-sign

Compliance:
  GST:                GST-compliant with e-way bill and e-invoice integration
  BIS:                BIS self-certification documentation support
  ISO:                ISO 9001:2015 / IATF 16949 documentation ready
  Labour:             PF, ESIC, Professional Tax (Gujarat), Contract Labour Act
  Taxation:           GST, TDS, Advance Tax, Customs (for importers)
  Privacy:            DPDP Act 2023 compliant

WhatsApp Languages:   English · Hindi · Gujarati
Currency:             ₹ (Indian Rupee) — always use lakhs (L) and crores (Cr)
Date Format:          DD/MM/YYYY
Financial Period:     FY 2024–25 (Apr 2024 – Mar 2025)
Production Shifts:    Morning (6 AM – 2 PM) · Afternoon (2 PM – 10 PM) · Night (10 PM – 6 AM)

Module Summary:
  M1: AI-Powered Management Dashboards        — 5 sub-modules
  M2: Production Planning Automation          — 7 sub-modules
  M3: Procurement & Vendor Workflow           — 5 sub-modules
  M4: Quality & Compliance Reporting          — 7 sub-modules
  M5: Dealer & Distributor Communication      — 5 sub-modules
  M6: Customer & Dealer Voice Agents          — 3 sub-modules
  M7: Customer Complaint & After-Sales        — 6 sub-modules
  M8: Follow Ups & Alerts                     — 3 sub-modules
  Total:                                        41 sub-modules
```

---

_Manufacturing AI Command Center by Fortiv Solutions_
_Version 1.0 · 8 Modules · 41 Sub-Modules · India-Ready_
_fortivsolutions.in · Confidential_
