# M6 — AI-Powered Management Dashboards
### Manufacturing AI Command Center · Fortiv Solutions · fortivsolutions.in

> **Module Tagline:** Real-time operational intelligence pulling from ERP, CRM, and production systems — giving leadership live visibility into output, orders, inventory, cost variances, and financial performance, without waiting for anyone to prepare a report.

**Document Type:** Module Build Guide & Parameter Reference  
**Module Code:** M6  
**Total Sub-Modules:** 5 ( → )  
**Version:** 1.0  
**Company:** Fortiv Solutions  
**Classification:** Confidential  
**Market:** India — Gujarat Focus (Ahmedabad, Rajkot, Vadodara, Surat)

---

## Module Overview

### Purpose
Replace the weekly MIS meeting — where managers spend 2–3 hours compiling numbers from 5 different systems — with a **live, always-current management intelligence layer**. Every KPI the CFO, Production Head, Sales Head, and HR need is visible in one place, updated automatically from ERP and connected systems, with no manual compilation and no data lag.

### Core Problem Being Solved

| Pain Point | Without M6 | With M6 |
|---|---|---|
| Weekly MIS meeting | 2–3 hours compiling numbers | Data auto-compiled — meeting becomes decision-focused |
| Production status | Phone calls to supervisor | Live line status grid with OEE per line |
| Inventory position | Yesterday's ERP export | Real-time stock levels with reorder alerts |
| Sales & revenue | Monthly report from accounts | 12-month trend + open pipeline live |
| Cost variance | Quarterly analysis by finance | Monthly actual vs standard, updated from ERP |
| Workforce visibility | Attendance registers manually compiled | Live headcount, OT, and productivity dashboard |
| Alert management | No single alert surface | Prioritised alert centre — red/amber/green by urgency |

### Demo Wow Moment
**The CFO or Plant Head opens the dashboard at 7 AM before arriving at the factory** — and sees complete previous-day performance: production output vs target, dispatches, collections, top NCRs, and cost variances — all without a single report being prepared by any employee.

---

## Module-Level Parameters

| Parameter | Value |
|---|---|
| Module ID | M6 |
| Module Name | AI-Powered Management Dashboards |
| Sub-module Count | 5 |
| Primary Output | Real-time KPI dashboards for Production Head, Stores, Sales, CFO, and HR |
| Primary Users | CFO, Production Head, Sales Head, GM Operations, HR Manager |
| Data Refresh Rate | Real-time (production/attendance) + Every 15–30 minutes (ERP sync) + Daily (financial) |
| Systems Integrated | SAP, Oracle, Tally Prime, Odoo, ERPNext, ZKTeco/eSSL biometrics, MES, CRM |
| Languages | English, Hindi, Gujarati |
| ERP Integration | Read-only pull — all financial, inventory, and order data read from ERP |
| Compliance | GST-ready · BIS · ISO 9001 · Labour law (Gujarat) · DPDP Act 2023 |
| Currency Format | ₹ Indian Rupee — Lakhs (L) and Crores (Cr) |
| Demo Financial Period | FY 2024–25 (Apr 2024 – Mar 2025) |

---

## Module Pages & Navigation Structure

```
M6 — AI-Powered Management Dashboards
│
├── [Page 1]  Module Dashboard / Overview              ← Landing page for M6
│             (Dashboard selector, alert summary, last refresh status)
│
├── [Page]  Production Intelligence Dashboard
│             (Line status grid, OEE breakdown, downtime Pareto, shift handover)
│
├── [Page]  Inventory & Warehouse Intelligence Dashboard
│             (Stock levels table, reorder alerts, slow-moving, WIP & FG valuation)
│
├── [Page]  Sales & Revenue Intelligence Dashboard
│             (Revenue trend, order intake, customer concentration, pipeline forecast)
│
├── [Page]  Cost Variance & Financial KPI Dashboard
│             (Material price variance, conversion cost, budget vs actual, EBITDA)
│
└── [Page]  People & Productivity Dashboard
              (Attendance, overtime, operator productivity, training compliance)
```

---

## Page 1 — Module Dashboard (M6 Overview)

### Purpose
The landing screen for Module 6. Gives leadership a single entry point to all five management dashboards — with a summary of the most critical alerts across all dashboards, data freshness status, and one-click navigation to each view.

### Layout
- **Top Stats Bar** (4 KPI cards across — cross-module summary)
- **Centre Left:** Dashboard selector panel — 5 tiles for each sub-module dashboard
- **Centre Right:** Cross-module alert centre — top 6 alerts from all dashboards combined
- **Bottom:** Last data refresh timestamps for each connected system

### KPI Cards (Top Stats Bar)

| Card | Metric | Mock Value | Color |
|---|---|---|---|
| Production Today | Units produced vs target | 8,240 / 9,000 | Warning Amber #E8A838 |
| Revenue MTD | Month-to-date invoiced | ₹3.8 Cr | Success Green #1D9E75 |
| Open Alerts | Total unresolved alerts across all dashboards | 11 | Danger Red #D85A30 (pulsing) |
| Data Freshness | Time since last full system sync | 3 min ago | Success Green #1D9E75 |

### Dashboard Selector Tiles (Centre Left)

Five clickable tiles, one per sub-module, each showing:
- Dashboard number + name
- One-line description of the intended user
- Key live stat (one number pulled from that dashboard)
- Last refreshed timestamp
- Status indicator (Live / Delayed / Offline)

| Tile | Dashboard Name | Intended User | Live Stat |
|---|---|---|---|
|  | Production Intelligence | Production Head | OEE Plant Avg: 79% |
|  | Inventory & Warehouse | Stores Manager | 7 items below reorder |
|  | Sales & Revenue | Sales Head / MD | ₹42L pipeline this month |
|  | Cost Variance & Finance | CFO / MD | 3 cost heads above budget |
|  | People & Productivity | HR / Operations | Attendance today: 91% |

### Cross-Module Alert Centre (Top 6)

| # | Alert | Source | Severity | Time |
|---|---|---|---|---|
| 1 | CNC Line 1 OEE at 64% — below threshold for 3 hours | M | 🔴 Critical | 09:14 AM |
| 2 | MS Round Bar 20mm stock out — Line 4 at risk | M | 🔴 Critical | 08:47 AM |
| 3 | Receivables overdue: ₹1L past 60 days | M | 🔴 Critical | 08:00 AM |
| 4 | Sales vs target: ₹3.8Cr vs ₹Cr MTD (8%) | M | 🟡 Amber | 08:00 AM |
| 5 | OT budget: Line 4 at 118% of monthly OT limit | M | 🟡 Amber | 08:00 AM |
| 6 | Assembly Line 2 ahead of schedule by % | M | 🟢 Green | 09:10 AM |

### Data Refresh Status Panel (Bottom)

| System | Last Sync | Status | Records |
|---|---|---|---|
| SAP Business One (ERP) | 3 min ago | ✓ Healthy | 142 orders, 1,847 stock records |
| ERPNext MES (Shop Floor) | Real-time | ✓ Healthy | 6 lines, 22 jobs active |
| ZKTeco Biometric | 1 hour ago | ✓ Healthy | 312 clock-ins logged |
| Tally Prime (Accounting) | Daily 7:00 AM | ✓ Healthy | P&L, Balance Sheet refreshed |
| CRM (Sales Pipeline) | 15 min ago | ✓ Healthy | 38 open opportunities |

---

## Page 3 — Submodule: Production Intelligence Dashboard

### What It Is
A detailed production operations dashboard for the Production Head — showing line-wise performance, OEE breakdown by component, machine status, shift productivity, downtime Pareto analysis, and production plan adherence — updated in real time from MES and shop floor data.

### Monitoring Parameters Per Production Line

| Field | Description | Mock Example |
|---|---|---|
| `line_id` | Production line identifier | Assembly Line 2 |
| `line_status` | Running / Idle / Breakdown / Changeover | Running |
| `status_duration_min` | Time in current status | 4 hrs 12 min |
| `status_reason` | Reason if not Running | — |
| `hourly_target` | Planned output this hour | 480 units |
| `hourly_actual` | Actual output this hour | 510 units |
| `hourly_variance_pct` | % above or below hourly target | +% |
| `shift_target` | Full shift planned output | 3,840 units |
| `shift_actual_cumulative` | Cumulative output this shift | 2,080 units |
| `shift_projected_output` | At current rate, expected shift total | 4,160 units |
| `oee_availability` | Planned vs actual uptime % | 97% |
| `oee_performance` | Actual vs rated speed % | 94% |
| `oee_quality` | Good units / total produced % | 98% |
| `oee_composite` | Availability × Performance × Quality | 89% |
| `downtime_minutes_shift` | Unplanned downtime this shift | 0 min |
| `downtime_reason` | Categorised root cause | — |
| `maintenance_status` | Any open maintenance tickets | None |
| `plan_adherence_pct` | Jobs completed vs planned (today) | 108% |

### OEE Component Thresholds

| Component | World Class | Good | Average | Poor |
|---|---|---|---|---|
| Availability | ≥90% | 80–89% | 70–79% | <70% |
| Performance | ≥95% | 85–94% | 75–84% | <75% |
| Quality | ≥99% | 97–98% | 95–96% | <95% |
| Composite OEE | ≥85% | 70–84% | 60–69% | <60% |

### Line Status Colour Logic

| Status | Badge Color | Animation | Meaning |
|---|---|---|---|
| Running — Above Target | #1D9E75 Green | Steady | All good |
| Running — On Track | #2E86AB Blue | Steady | Within ±5% of target |
| Running — Below Target | #E8A838 Amber | Pulse slow | >5% behind target |
| Changeover | #E8A838 Amber | Blink | Planned changeover in progress |
| Idle — Unplanned | #D85A30 Red | Pulse fast | Stopped without reason logged |
| Breakdown | #D85A30 Red | Pulse fast | Active maintenance ticket open |

### Page Layout
**Top Stats Row:** Plant OEE Avg | Lines Running | Lines with Issues | Total Output Today | Target Today | Variance  
**Main Area (60%):** Line-by-line status grid with live counters and OEE gauges  
**Right Panel (40%):** Drill-down panel — expand any line for OEE component breakdown + hourly bar chart  
**Bottom Left:** Downtime Pareto chart (top 5 reasons, hours lost this month)  
**Bottom Right:** Shift handover log (auto-generated at each shift change)  

### Mock Demo Data — Morning Shift, Hour 4 (9:00–10:00 AM, 22 Jan)

| Line | Status | Hr Actual | Hr Target | Hr % | Shift Cumul | Shift Target | OEE |
|---|---|---|---|---|---|---|---|
| CNC Line 1 | 🔴 Below Target | 340 | 450 | 7% | 1,420 | 1,800 | 64% |
| Assembly Line 2 | 🟢 Above Target | 510 | 480 | 10% | 2,080 | 1,920 | 89% |
| Stamping Line 3 | 🟡 Changeover | 0 | 380 | 0% | 980 | 1,520 | 71% |
| Welding Line 4 | 🟢 On Track | 218 | 240 | 90.8% | 892 | 960 | 81% |
| Painting Line 5 | 🟢 On Track | 145 | 150 | 96.7% | 588 | 600 | 85% |
| Dispatch Packing | 🟢 On Track | 72 | 70 | 102.9% | 280 | 280 | 76% |

**Plant Totals:** 1,285 units this hour | 6,240 cumulative | 7,080 target | Variance: -11.9%

### OEE Drill-Down Panel (CNC Line 1 — On Click)

```
CNC LINE 1 — OEE: 64% (Poor)

COMPONENT BREAKDOWN:
Availability:  87%  ━━━━━━━━━━░░░░  (Planned: 93%)
Performance:   76%  ━━━━━━━━░░░░░░  (Rated: 45 units/hr — Actual: 34)
Quality:       97%  ━━━━━━━━━━━━░░  (34 good / 35 produced)

ROOT CAUSE FLAGS:
• Availability loss: 38 min unplanned downtime (07:12–07:50 AM)
  → Reason logged by supervisor: "Tooling change — insert broken"
• Performance loss: Running at 76% rated speed
  → Machine note: "Coolant pressure low — maintenance ticket #MT-441 open"

MAINTENANCE STATUS:
Ticket MT-441: Coolant system — Assigned: Maintenance Team
Status: In Progress | Open since: 07:52 AM | ETA: 11:00 AM

HOURLY TREND (This Shift):
Hr 1: 420 ✓  Hr 2: 390 ⚠️  Hr 3: 310 🔴  Hr 4: 340 🔴

[Send Alert to Production Head]  [View Full OEE History]
```

### Downtime Pareto Chart (Month-to-Date)

| Reason | Hours Lost | % of Total Downtime | Cumulative % |
|---|---|---|---|
| Tooling changes (unplanned) | 1 hrs | 34% | 34% |
| Machine breakdown | 8.7 hrs | 26% | 60% |
| Material shortage — line starved |  hrs | 16% | 76% |
| Changeover delays |  hrs | 12% | 88% |
| Operator absence — line stopped |  hrs | 8% | 96% |
| Other |  hrs | 4% | 100% |

### Shift Handover Log (Auto-Generated)

```
SHIFT HANDOVER REPORT | Morning → Afternoon | 22 Jan 2025 | 2:00 PM

OUTGOING (MORNING SHIFT) SUMMARY:
Production: 7,640 units | Target: 7,200 | Adherence: 106.1%
Best Line: Assembly Line 2 — 89% OEE
Problem Line: CNC Line 1 — 64% OEE, tooling issue (see MT-441)
Downtime Events: 3 (38 + 12 + 8 min) | Total: 58 min

HANDOVER NOTES:
• CNC Line 1 — coolant pressure issue open, Maintenance ETA 3 PM
• Stamping Line 3 — changeover completed, running by 1:30 PM
• Raw material CRCA mm running low — 3,400 kg remains, raising PO

INCOMING (AFTERNOON SHIFT) AWARENESS:
• Watch CNC Line 1 until MT-441 closed
• High-priority job JC-4822 (Tata AutoComp) must complete by end of shift

Signed: Mahesh Kapoor (Production Head)  [Acknowledge & Accept]
```

### Key UI Elements
- **Live unit counter tick-up** — numbers increment in real time per line
- **OEE ring gauges** — three concentric rings (Availability / Performance / Quality) with composite in centre
- **Pulsing red status** on breakdown / idle lines
- **Downtime Pareto bars** — clickable to show incident list for each reason category
- **Shift handover auto-generation** — triggered at shift change time (2 PM, 10 PM, 6 AM)
- **"Send to MD" button** — pushes production summary to MD dashboard alert centre

---

## Page 4 — Submodule: Inventory & Warehouse Intelligence Dashboard

### What It Is
A real-time inventory intelligence dashboard for the Stores Manager and MD — tracking raw material stock levels, WIP by production stage, finished goods warehouse position, reorder alerts, slow-moving stock, and total inventory valuation — updated from ERP every 15–30 minutes.

### Inventory Tracking Parameters Per Material

| Field | Description | Mock Example |
|---|---|---|
| `item_code` | Material / product code | RM-CRCA- |
| `item_description` | Description | CRCA Sheet mm |
| `category` | Raw Material / WIP / Finished Goods | Raw Material |
| `unit` | Unit of measure | KG |
| `current_stock` | Quantity on hand | 3,400 kg |
| `open_po_qty` | On order — not yet received | 2,000 kg |
| `available_qty` | On hand + on order | 5,400 kg |
| `weekly_consumption` | Average consumption per week | 1,800 kg |
| `days_coverage` | Days of production stock will cover | 20.8 days |
| `reorder_level` | Trigger level for reorder | 1,000 kg |
| `reorder_qty` | Recommended replenishment quantity | 3,000 kg |
| `reorder_status` | Surplus / Normal / Reorder Due / Critical / Stock Out | Normal |
| `last_receipt_date` | Date of most recent stock receipt | 18 Jan 2025 |
| `last_consumption_date` | Date of most recent issue | 22 Jan 2025 |
| `standard_cost` | Standard cost per unit | ₹68/kg |
| `stock_value` | Current stock × standard cost | ₹2,31,200 |
| `slow_moving_flag` | Zero consumption in last 60 days | ✗ |
| `dead_stock_flag` | Zero consumption in last 90+ days | ✗ |
| `committed_qty` | Allocated to approved production schedule | 6,200 kg |
| `free_stock` | Available − committed | Shortfall: 800 kg |

### Reorder Status Classification

| Status | Condition | Badge Color | Action Required |
|---|---|---|---|
| Surplus | Available > Required by >20% | Grey #9B9B9B | Review for excess |
| Normal | Available ≥ Required | Green #1D9E75 | Monitor |
| Reorder Due | Below reorder level + adequate lead time | Amber #E8A838 | Raise PO this week |
| Critical | Days coverage < 7 days | Red #D85A30 | Raise PO urgently |
| Stock Out | Zero on hand | Red Pulsing | Emergency procurement |

### Page Layout
**Top Stats Row:** Total RM items tracked | Normal | Reorder Due | Critical | Stock Out | Total RM Inventory Value (₹)  
**Filter Bar:** Category (RM / WIP / FG) | Status filter | Vendor filter | Slow-moving flag  
**Main Table (60%):** Full inventory list with status badges and key quantities  
**Right Panel (40%):** Inventory detail — expands on item click with trend chart and PO history  
**Bottom Left:** WIP summary by production stage  
**Bottom Right:** Finished goods position — free stock vs committed  

### Mock Demo Data — Raw Material Status (Top 12 Items)

| # | Item | On Hand | Required | Status | Days Cover | Value (₹) | Action |
|---|---|---|---|---|---|---|---|
| 1 | CRCA Sheet mm | 3,400 kg | 6,200 kg | 🔴 Critical | 13 days | 2,31,200 | Raise PO |
| 2 | Zinc Coating Powder | 180 kg | 420 kg | 🔴 Critical | 6 days | 61,200 | Raise PO URGENT |
| 3 | MS Round Bar 20mm | 0 kg | 800 kg | 🔴 Stock Out | 0 days | 0 | EMERGENCY |
| 4 | MIG Welding Wire | 45 spools | 80 spools | 🟡 Reorder Due | 11 days | 21,600 | Raise PO |
| 5 | Primer Coat Red | 120 litres | 200 litres | 🟡 Reorder Due | 14 days | 21,600 | Raise PO |
| 6 | CRCA Sheet mm | 5,200 kg | 3,800 kg | ⬜ Surplus | 47 days | 3,74,400 | Review |
| 7 | Aluminium Sheet 2mm | 1,800 kg | 1,400 kg | 🟢 Normal | 32 days | 3,96,000 | — |
| 8 | Hex Bolt M10 | 8,400 pcs | 12,000 pcs | 🟡 Reorder Due | 18 days | 35,280 | Raise PO |
| 9 | Cutting Oil | 200 litres | 320 litres | 🟡 Reorder Due | 19 days | 22,000 | Raise PO |
| 10 | Spring Steel Strip | 900 kg | 600 kg | 🟢 Normal | 38 days | 1,17,000 | — |
| 11 | Paint — RAL 7016 | 40 litres | 15 litres | ⬜ Surplus | 58 days | 12,000 | Review excess |
| 12 | Safety PPE Kits | 180 sets | 200 sets | 🟡 Reorder Due | 24 days | 54,000 | Raise PO |

### WIP Summary By Production Stage

| Stage | WIP Units | Est. Value (₹) | Avg Age in Stage |
|---|---|---|---|
| Raw Material Issued (not started) | 2,400 units | 3,84,000 | 0.4 days |
| CNC / Machining | 1,100 units | 2,86,000 |  days |
| Assembly | 1,800 units | 5,94,000 | 0.8 days |
| Welding | 620 units | 2,17,000 | 0.6 days |
| Surface Treatment | 840 units | 3,36,000 |  days |
| QC Inspection | 1,200 units | 5,16,000 | 0.5 days |
| **Total WIP** | **7,960 units** | **₹23,33,000** | |

### Finished Goods Position

| Item | FG Stock | Customer Committed | Free Stock | Status |
|---|---|---|---|---|
| MS-204 | 2,200 units | 1,000 units (SO-4821) | 1,200 units | 🟢 Available |
| MS-208 | 800 units | 2,500 units (SO-4822) | -1,700 units | 🔴 Shortfall |
| PC-112 | 1,400 units | 800 units (SO-4823) | 600 units | 🟢 Available |
| SP-044 | 3,100 units | 1,950 units (SO-4824+SO-4828) | 1,150 units | 🟢 Available |
| PC-118 | 200 units | 900 units (SO-4826) | -700 units | 🔴 Shortfall — in production |

### Slow-Moving & Dead Stock Summary

| Category | Count | Total Value (₹) | Recommended Action |
|---|---|---|---|
| Slow-moving (60+ days no consumption) | 4 items | ₹84,000 | Review with production planner |
| Dead stock (90+ days no consumption) | 2 items | ₹31,000 | Liquidation / return to vendor |
| Excess vs 30-day plan | 3 items | ₹4,82,000 | Hold — monitor over-ordering |

### Inventory Valuation Summary

| Category | Quantity | Total Value (₹) |
|---|---|---|
| Raw Materials | 1,847 SKUs | ₹4 L |
| Work-in-Progress | 7,960 units | ₹2 L |
| Finished Goods | 14,200 units | ₹6 L |
| **Total Inventory Value** | | **₹4 Cr** |

### Key UI Elements
- **One-click "Raise PO" per row** — routes to M2 PO generator module
- **"Raise All URGENT POs" button** — bulk action for all Critical and Stock Out items
- **Inventory value ticker** — live total inventory value updating as receipts and issues are posted
- **Stock trend sparkline** — 30-day consumption trend mini chart per item in the table
- **Slow-moving flag toggle** — filter to show only slow/dead stock items for periodic review
- **FG committed vs free** — colour-coded indicator so dispatch team can see available stock at a glance

---

## Page 5 — Submodule: Sales & Revenue Intelligence Dashboard

### What It Is
A sales performance intelligence dashboard for the Sales Head and MD — showing order intake trends, revenue performance vs target, customer concentration, product mix, dealer secondary sales, and probability-weighted pipeline forecast — updated from ERP and CRM.

### Sales KPI Parameters

| Field | Description | Mock Example |
|---|---|---|
| `order_intake_mtd_value` | Value of orders received this month | ₹ Cr |
| `order_intake_mtd_volume` | Count of orders received | 28 orders |
| `order_intake_vs_target_pct` | MTD intake vs monthly target | 9% |
| `revenue_invoiced_mtd` | Invoiced value this month | ₹3.8 Cr |
| `revenue_target_month` | Monthly revenue target | ₹ Cr |
| `revenue_vs_target_pct` | MTD revenue as % of target | 8% |
| `open_order_value` | Total value of open unfulfilled orders | ₹ Cr |
| `avg_order_value` | Average order value this month | ₹15L |
| `on_time_delivery_pct` | % orders delivered on committed date | 87% |
| `customer_count_active` | Customers who ordered this month | 14 |
| `new_customers_mtd` | New accounts who placed first order | 2 |
| `top_customer_revenue_pct` | Revenue from largest single customer | 22% |
| `pipeline_value_30d` | Probability-weighted 30-day forecast | ₹4.8 Cr |
| `pipeline_value_60d` | 60-day weighted forecast | ₹9.1 Cr |
| `pipeline_value_90d` | 90-day weighted forecast | ₹1 Cr |

### Page Layout
**Top KPI Bar:** Order Intake MTD | Revenue MTD vs Target | Open Order Value | Active Customers | OTD %  
**Centre Left (50%):** 12-month revenue trend chart (current year vs prior year)  
**Centre Right (50%):** Customer concentration bar chart (top 10 customers by revenue)  
**Bottom Left (50%):** Product mix donut — revenue by product category  
**Bottom Right (50%):** Pipeline forecast panel — 30/60/90 day weighted value  

### Revenue Trend (12 Months, FY 2024–25)

| Month | FY 24–25 (₹ Cr) | FY 23–24 (₹ Cr) | YoY Growth |
|---|---|---|---|
| Apr |  |  | +1% |
| May | 2.8 |  | +16.7% |
| Jun |  |  | +1% |
| Jul |  | 2.7 | +14.8% |
| Aug | 2.9 |  | +16.0% |
| Sep |  | 2.9 | +1% |
| Oct | 3.8 |  | +2% |
| Nov |  | 3.0 | +20.0% |
| Dec |  | 2.8 | +1% |
| Jan (MTD) | 3.8 |  | +1% |
| Feb | — |  | — |
| Mar | — |  | — |
| **FY Total** | **₹3 Cr (YTD)** | **₹3 Cr** | **+0.3% YTD** |

### Customer Concentration Analysis (Top 10 by MTD Revenue)

| Rank | Customer | Revenue MTD (₹L) | % of Total | YoY | Risk Flag |
|---|---|---|---|---|---|
| 1 | Tata AutoComp Systems | 84 | 2% | +18% | 🟡 Concentration risk |
| 2 | Bajaj Auto Components | 58 | 1% | +24% | — |
| 3 | Maruti Ancillaries Gujarat | 47 | 1% | +9% | — |
| 4 | Kapoor Industries Pvt. Ltd. | 38 | 10.0% | +5% | — |
| 5 | L&T Construction Materials | 29 | 7.6% | +31% | 🟢 Growing |
| 6 | Reliance Consumer Products | 24 | % | -4% | 🟡 Declining |
| 7 | Godrej Precision Engineering | 22 | 5.8% | +12% | — |
| 8 | Ashok Leyland Vendors | 18 | 4.7% | +7% | — |
| 9 | Adani Infrastructure Pvt. Ltd. | 16 | % | New | 🟢 New account |
| 10 | Amul Packaging Division | 14 | % | +3% | — |

**Concentration Risk Alert:** Top 2 customers = 3% of MTD revenue. Single-customer dependency risk: Tata AutoComp at 2%.

### Product Mix Analysis

| Product Category | Revenue MTD (₹L) | Volume (units) | Avg Margin % |
|---|---|---|---|
| CRCA Sheet Components (MS series) | 164 | 12,400 | 1% |
| Precision Castings (PC series) | 98 | 3,200 | 2% |
| Stamped Parts (SP series) | 76 | 8,800 | 1% |
| Custom Fabrication | 42 | 600 | 28.7% |
| **Total** | **₹380 L** | **25,000** | **19.8% avg** |

### Pipeline Forecast Panel

| Horizon | Opportunities | Gross Value | Probability Weight | Weighted Forecast |
|---|---|---|---|---|
| 30 days | 12 opportunities | ₹ Cr | Avg 75% | ₹4.8 Cr |
| 60 days | 21 opportunities | ₹12.8 Cr | Avg 71% | ₹9.1 Cr |
| 90 days | 31 opportunities | ₹19.4 Cr | Avg 69% | ₹1 Cr |

**Top 5 Open Opportunities (Ranked by Value × Probability):**

| Opportunity | Customer | Value (₹L) | Stage | Probability | Weighted (₹L) |
|---|---|---|---|---|---|
| Large CNC batch — Q4 | Tata AutoComp Systems | 180 | Negotiation | 85% | 153 |
| Stamped panel contract | Bajaj Auto Components | 120 | Proposal sent | 70% | 84 |
| Infrastructure hardware | Adani Infrastructure | 95 | Qualified | 60% | 57 |
| FMCG packaging parts | Amul Packaging | 72 | Demo done | 80% | 58 |
| New casting contract | Godrej Precision | 65 | RFQ stage | 50% | 33 |

### Key UI Elements
- **Revenue trend dual-line chart** — current year vs prior year with YoY % labels
- **Customer concentration donut** — visual representation of top 10 vs "all others"
- **Declining account flag** — customers with negative YoY growth shown in amber
- **Pipeline stage funnel** — visual funnel showing opportunities by stage with conversion rates
- **"At risk of missing target" alert** — auto-triggered when MTD revenue pace <80% of monthly target
- **Sales team performance tab** — orders per salesperson, conversion rate (requires CRM integration)

---

## Page 6 — Submodule: Cost Variance & Financial KPI Dashboard

### What It Is
A financial performance dashboard for the CFO and MD — tracking actual vs standard costs, material price variances, conversion cost trends, budget vs actual for all major cost heads, product profitability by SKU, and an EBITDA estimate — updated from ERP accounting data daily.

### Financial KPI Parameters

| Field | Description | Mock Example |
|---|---|---|
| `revenue_mtd` | Invoiced revenue month-to-date | ₹3.8 Cr |
| `revenue_target_month` | Monthly revenue target | ₹ Cr |
| `cogs_mtd` | Cost of goods sold this month | ₹2.96 Cr |
| `gross_margin_pct` | (Revenue − COGS) / Revenue | 2% |
| `material_cost_pct` | RM cost as % of revenue | 6% |
| `labour_cost_pct` | Direct labour as % of revenue | % |
| `overhead_cost_pct` | Overheads as % of revenue | % |
| `ebitda_estimate_mtd` | Estimated EBITDA this month | ₹46L |
| `ebitda_margin_pct` | EBITDA / Revenue % | 1% |
| `ebitda_target_pct` | Target EBITDA margin | 15% |
| `material_price_variance_pct` | Actual purchase price vs standard | +% above standard |
| `conversion_cost_per_unit` | Labour + overhead / units produced | ₹3/unit |
| `conversion_cost_standard` | Standard conversion cost per unit | ₹35.0/unit |
| `scrap_cost_mtd` | Material scrap value this month | ₹3.8L |
| `scrap_pct_revenue` | Scrap cost as % of revenue | 1.0% |
| `overdue_receivables` | Outstanding invoices >30 days | ₹4L |
| `overdue_60d_plus` | Outstanding invoices >60 days | ₹1L |
| `payables_due_week` | Vendor payments due this week | ₹12.8L |
| `cash_balance` | Current bank balance | ₹ Cr |

### Cost Head Budget vs Actual (MTD, January 2025)

| Cost Head | Budget (₹L) | Actual (₹L) | Variance (₹L) | Variance % | Status |
|---|---|---|---|---|---|
| Raw Materials | 220 | 233 | +13 | +5.9% | 🔴 Over |
| Direct Labour | 29 | 31 | +2 | +6.9% | 🔴 Over |
| Utilities (Power) | 18 | 19 | +1 | +% | 🟡 Watch |
| Maintenance | 12 | 11 | -1 | -% | 🟢 Under |
| Consumables / Tooling | 8 | 9 | +1 | +1% | 🔴 Over |
| Overheads (Admin) | 22 | 21 | -1 | -% | 🟢 Under |
| Freight Outward | 9 | 8 | -1 | -1% | 🟢 Under |
| Scrap & Rework | 4 | 3.8 | -0.2 | -5.0% | 🟢 Under |
| **Total Cost** | **322** | **335.8** | **+13.8** | **+%** | 🔴 Over |

### Material Price Variance Analysis (Key Materials)

| Material | Standard Rate (₹) | Actual Rate (₹) | Variance | Monthly Impact (₹L) |
|---|---|---|---|---|
| CRCA Sheet mm | ₹68/kg | ₹72/kg | +5.9% ↑ | +6.8 |
| CRCA Sheet mm | ₹72/kg | ₹74/kg | +2.8% ↑ | + |
| MS Round Bar 20mm | ₹55/kg | ₹53/kg | -% ↓ | - |
| Zinc Coating Powder | ₹340/kg | ₹360/kg | +5.9% ↑ | + |
| Aluminium Sheet 2mm | ₹220/kg | ₹228/kg | +% ↑ | + |
| MIG Welding Wire | ₹480/spool | ₹480/spool | 0% — | — |
| **Net Material Price Variance** | | | | **+14.0L (adverse)** |

**Alert:** Steel prices +5.9% above standard — supplier Mehta Steel Works. Review rate contract at next renewal (31 Mar 2025).

### Product Profitability Ranking (Contribution Margin per Product)

| Product Code | Description | Selling Price (₹/unit) | Variable Cost (₹/unit) | Contribution (₹/unit) | Margin % |
|---|---|---|---|---|---|
| Custom Fab | Custom fabrications | ₹1,840 | ₹1,312 | ₹528 | 28.7% |
| PC-112 | Precision casting A | ₹680 | ₹516 | ₹164 | 2% |
| PC-118 | Precision casting B | ₹720 | ₹548 | ₹172 | 23.9% |
| MS-204 | CRCA component A | ₹280 | ₹229 | ₹51 | 1% |
| MS-208 | CRCA component B | ₹320 | ₹263 | ₹57 | 17.8% |
| MS-212 | CRCA component C | ₹295 | ₹246 | ₹49 | 1% |
| SP-044 | Stamped part A | ₹180 | ₹152 | ₹28 | 1% |

**Insight:** Custom fabrication and precision castings deliver 24–29% margins. CRCA and stamped parts are volume products at 15–18%. Mix shift toward castings will improve overall EBITDA.

### EBITDA Bridge Chart (Waterfall — January 2025)

| Component | Value (₹L) |
|---|---|
| Revenue | +380 |
| Raw Material Cost | -233 |
| Direct Labour | -31 |
| Overheads & Admin | -40 |
| Utilities | -19 |
| Maintenance | -11 |
| **EBITDA (Estimated)** | **+46 (1% margin)** |
| Target EBITDA | +67.5 (15.0% margin) |
| **Gap to Target** | **-2L** |

**Primary EBITDA gap drivers:**
1. Revenue shortfall vs target: ₹70L below → ₹14L EBITDA impact (at 20% GM)
2. Material price adverse variance: ₹14L above standard
3. Labour cost above budget: ₹2L above plan

### Receivables & Cash Position

| Metric | Value | Status |
|---|---|---|
| Total outstanding receivables | ₹8L | — |
| Overdue >30 days | ₹4L | 🟡 Monitor |
| Overdue >60 days | ₹1L | 🔴 Action needed |
| Overdue >90 days | ₹L | 🔴 Escalate |
| Payables due this week | ₹12.8L | 🟡 Plan payment |
| Current cash balance | ₹ Cr | 🟡 Adequate |
| Net working capital position | ₹72L available | — |

### Page Layout
**Top KPI Bar:** Revenue MTD vs Target | Gross Margin % | EBITDA % | Cash Balance | Overdue Receivables  
**Centre Left (50%):** Budget vs Actual cost head comparison (bar chart)  
**Centre Right (50%):** EBITDA waterfall chart  
**Bottom Left (50%):** Material price variance table  
**Bottom Right (50%):** Product profitability ranking + receivables ageing  

### Key UI Elements
- **EBITDA waterfall chart** — animated build from Revenue down to EBITDA with colour-coded components
- **Budget variance bar chart** — over-budget bars in red, under-budget in green
- **"Gap to target" annotation** — always visible EBITDA gap with primary driver callout
- **Receivables ageing buckets** — 0–30 / 31–60 / 61–90 / 90+ day bands colour coded
- **"Send to CFO" alert button** — pushes cost overrun summary to CFO's WhatsApp
- **Daily refresh indicator** — financial data refreshed at 7:00 AM from Tally Prime

---

## Page 7 — Submodule: People & Productivity Dashboard

### What It Is
A workforce intelligence dashboard for HR and Operations — tracking daily attendance, overtime usage, operator-level productivity, training and certification compliance, contractor headcount, and attrition trends — combining biometric data, HRMS records, and MES production output.

### Workforce KPI Parameters

| Field | Description | Mock Example |
|---|---|---|
| `total_workforce` | Total headcount (permanent + contract) | 320 |
| `present_today` | Clocked-in today | 291 |
| `attendance_pct` | % of workforce present | 90.9% |
| `absent_count` | Total absences today | 29 |
| `critical_absences` | Absences on key/skilled roles | 4 |
| `lines_short_staffed` | Lines below required headcount | 2 |
| `ot_hours_mtd` | Overtime hours this month (all departments) | 384 hours |
| `ot_budget_hours` | Budgeted OT for the month | 320 hours |
| `ot_vs_budget_pct` | OT hours as % of budget | 120% |
| `ot_cost_mtd` | Cost of overtime this month | ₹L |
| `output_per_operator_shift` | Average units per operator per shift | 48 units |
| `output_per_operator_target` | Target units per operator | 52 units |
| `productivity_pct` | Actual vs target operator productivity | 9% |
| `training_due_count` | Employees with overdue training | 12 |
| `cert_expiring_30d` | Certifications expiring in 30 days | 5 |
| `contractor_headcount` | Contract workers today | 38 |
| `contractor_daily_cost` | Daily cost of contract labour | ₹57,000 |
| `attrition_mtd` | Voluntary separations this month | 3 |
| `attrition_rate_annualised` | Rolling 12-month annualised attrition | 1% |

### Page Layout
**Top KPI Bar:** Attendance Today | OT vs Budget | Operator Productivity | Attrition Rate | Training Overdue  
**Centre Left (50%):** Attendance heatmap — by department and shift  
**Centre Right (50%):** OT usage bar chart — by department vs budget  
**Bottom Left (50%):** Operator productivity league table — top and bottom performers  
**Bottom Right (50%):** Training compliance tracker + attrition trend  

### Attendance by Department (Today — 22 Jan 2025)

| Department | Headcount | Present | Absent | Attendance % | Status |
|---|---|---|---|---|---|
| CNC Operations | 42 | 38 | 4 | 90.5% | 🟡 2 critical absent |
| Assembly | 58 | 55 | 3 | 94.8% | 🟢 Adequate |
| Stamping | 24 | 24 | 0 | 100% | 🟢 Full |
| Welding | 36 | 30 | 6 | 8% | 🔴 Understaffed |
| Painting | 18 | 17 | 1 | 9% | 🟢 Adequate |
| QC Inspection | 14 | 13 | 1 | 92.9% | 🟢 Adequate |
| Maintenance | 22 | 21 | 1 | 9% | 🟢 Adequate |
| Stores & Dispatch | 28 | 26 | 2 | 92.9% | 🟢 Adequate |
| Admin & Support | 40 | 39 | 1 | 97.5% | 🟢 Full |
| Contract Workers | 38 | 28 | 10 | 7% | 🔴 High absence |
| **Total** | **320** | **291** | **29** | **90.9%** | 🟡 |

### Overtime Usage by Department (January 2025 MTD)

| Department | Budgeted OT (hrs) | Used OT (hrs) | Used % | OT Cost (₹) | Status |
|---|---|---|---|---|---|
| CNC Operations | 80 | 106 | 13% | ₹1,06,000 | 🔴 Over budget |
| Welding | 60 | 71 | 11% | ₹71,000 | 🔴 Over budget |
| Assembly | 70 | 68 | 9% | ₹68,000 | 🟢 On track |
| Stamping | 40 | 38 | 95.0% | ₹38,000 | 🟢 On track |
| Painting | 30 | 32 | 106.7% | ₹32,000 | 🟡 Watch |
| Maintenance | 40 | 42 | 105.0% | ₹42,000 | 🟡 Watch |
| QC | 20 | 27 | 135.0% | ₹27,000 | 🔴 Over budget |
| **Total** | **320** | **384** | **120.0%** | **₹3,84,000** | 🔴 Over |

**Alert:** CNC and QC departments at 132–135% of OT budget. CNC OT linked to chronic overload on Line 1. QC OT linked to increased inspection load from 3 new customer audits this month.

### Operator Productivity League Table

| Rank | Employee | Department | Shift | Output This Week | Target | % | Flag |
|---|---|---|---|---|---|---|---|
| 🥇 1 | Priya Mehta | Assembly | Morning | 2,840 units | 2,400 | 11% | Top performer |
| 🥈 2 | Arun Patel | Welding | Morning | 1,120 units | 960 | 116.7% | Top performer |
| 🥉 3 | Dinesh Patel | CNC | Afternoon | 890 units | 800 | 11% | — |
| 4 | Vijay Sharma | Assembly | Morning | 2,280 units | 2,400 | 95.0% | — |
| 5 | Kiran Shah | CNC | Afternoon | 760 units | 800 | 95.0% | — |
| … | … | … | … | … | … | … | |
| ▼ Last | Ramesh Kumar | CNC | Morning | 560 units | 800 | 70.0% | 🟡 Machine issues MT-441 |
| ▼ -2 | Deepak Joshi | Welding | Night | 680 units | 960 | 70.8% | 🟡 Skill gap — flag for training |

**Note:** Low productivity flagged alongside reason — distinguishes machine/equipment issues from operator skill gaps for correct action.

### Training Compliance Tracker

| Training Type | Due Count | Overdue | Next Due (Earliest) | Action |
|---|---|---|---|---|
| Safety Induction (Annual) | 4 employees | 4 (overdue) | 15 Jan 2025 | 🔴 Schedule immediately |
| CNC Machine Safety Cert | 2 employees | 1 (overdue) | 28 Jan 2025 | 🔴 Urgent |
| Welding Safety & PPE | 3 employees | 3 (overdue) | 10 Jan 2025 | 🔴 Overdue |
| Quality SOP Requalification | 2 employees | 0 | 31 Jan 2025 | 🟡 Due this month |
| First Aid Certification | 1 employee | 0 | 05 Feb 2025 | 🟢 On track |

**Compliance Risk:** 7 employees with overdue safety training. ISO 9001 audit scheduled 15 Feb — all safety training must be current before audit.

### Attrition & Retention Dashboard

| Metric | Value | Benchmark |
|---|---|---|
| Separations this month | 3 | Avg: /month |
| Rolling 12-month attrition rate | 1% | Industry avg: 18% |
| Average tenure (current workforce) |  years | — |
| Top exit reason (this quarter) | Better pay elsewhere (40%) | — |
| Department with highest attrition | CNC Operations (22% annual) | 🔴 Monitor |
| Longest-serving employees | 12 employees with >10 years | — |

### WhatsApp Daily HR Summary (Auto-sent to HR Manager — 8:00 AM)
```
👥 HR DAILY BRIEFING | Fortiv ManufactureSmart | 22 Jan 2025

ATTENDANCE: 291/320 (90.9%) | 2 lines short-staffed
⚠️ Welding dept: 6 absent — understaffed today
⚠️ CNC: 2 critical operators absent (M reallocations in progress)

OT ALERT: CNC at 132% OT budget MTD — review required
TRAINING: 7 employees overdue safety training — ISO audit in 24 days

Action items:
1. Welding coverage — coordinate with M reallocation agent
2. Schedule overdue safety training this week (7 employees)
3. CNC OT — escalate Line 1 machine issue to cut OT need

— Fortiv Manufacturing AI
```

### Key UI Elements
- **Attendance heatmap** — department × shift grid, colour-coded by attendance %
- **OT budget gauge per department** — radial gauge showing used vs budgeted hours
- **Productivity league table** — sortable, with colour-coded performance bands
- **Training compliance countdown** — days until overdue training becomes a compliance risk
- **Attrition trend sparkline** — 12-month rolling attrition rate mini chart
- **"Flag for HR review" button** — on any employee with chronic absence or low productivity
- **Contractor cost tracker** — daily billing rate × headcount = daily cost ticker

---

## Complete Module 6 — Master Parameter Reference

### All Data Fields Across M6

| Field Name | Type | Sub-module | Description |
|---|---|---|---|
| `kpi_attendance_pct` | Number (%) |  | Today's attendance % |
| `kpi_cash_balance` | Number (₹) |  | Current bank balance |
| `line_status` | Enum |  | Running / Idle / Breakdown / Changeover |
| `oee_availability` | Number (%) |  | Availability component |
| `oee_performance` | Number (%) |  | Performance component |
| `oee_quality` | Number (%) |  | Quality component |
| `oee_composite` | Number (%) |  | Overall Equipment Effectiveness |
| `downtime_minutes` | Number |  | Unplanned downtime this shift |
| `downtime_reason` | Enum |  | Tooling / Breakdown / Material / Operator / Other |
| `shift_output_cumulative` | Number |  | Units produced so far this shift |
| `shift_target` | Number |  | Full shift planned output |
| `plan_adherence_pct` | Number (%) |  | Jobs completed vs planned |
| `item_code` | String |  | Material / product code |
| `current_stock` | Number |  | Quantity on hand |
| `available_qty` | Number |  | On hand + on order |
| `days_coverage` | Number |  | Production days stock covers |
| `reorder_status` | Enum |  | Surplus / Normal / Reorder Due / Critical / Stock Out |
| `stock_value` | Number (₹) |  | Current stock × standard cost |
| `slow_moving_flag` | Boolean |  | Zero consumption 60+ days |
| `dead_stock_flag` | Boolean |  | Zero consumption 90+ days |
| `total_inventory_value` | Number (₹) |  | RM + WIP + FG total value |
| `revenue_invoiced_mtd` | Number (₹) | ,  | Month-to-date invoiced revenue |
| `revenue_target_month` | Number (₹) | ,  | Monthly revenue target |
| `order_intake_mtd_value` | Number (₹) |  | Order intake value this month |
| `customer_concentration_pct` | Number (%) |  | Largest customer as % of revenue |
| `pipeline_value_30d` | Number (₹) |  | 30-day weighted pipeline |
| `pipeline_value_60d` | Number (₹) |  | 60-day weighted pipeline |
| `gross_margin_pct` | Number (%) |  | Gross margin percentage |
| `ebitda_estimate_mtd` | Number (₹) |  | Estimated EBITDA this month |
| `ebitda_margin_pct` | Number (%) |  | EBITDA as % of revenue |
| `material_price_variance_pct` | Number (%) |  | Actual vs standard purchase price |
| `scrap_cost_mtd` | Number (₹) |  | Scrap material value this month |
| `overdue_receivables_60d` | Number (₹) |  | Receivables >60 days overdue |
| `payables_due_week` | Number (₹) |  | Vendor payments due this week |
| `cost_head_budget` | Number (₹) |  | Budgeted cost by head |
| `cost_head_actual` | Number (₹) |  | Actual cost by head |
| `cost_head_variance_pct` | Number (%) |  | Actual vs budget % |
| `total_workforce` | Number |  | Total headcount |
| `present_today` | Number |  | Clocked-in today |
| `critical_absences` | Number |  | Absences in key roles |
| `ot_hours_mtd` | Number |  | OT hours used this month |
| `ot_budget_hours` | Number |  | Budgeted OT hours this month |
| `output_per_operator_shift` | Number |  | Units per operator per shift |
| `training_due_count` | Number |  | Employees with overdue training |
| `attrition_rate_annualised` | Number (%) |  | Rolling 12-month attrition |
| `contractor_headcount` | Number |  | Contract workers today |
| `contractor_daily_cost` | Number (₹) |  | Daily cost of contract labour |

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
Accounting:         Tally Prime
Biometric:          ZKTeco, GIDC Vatva campus
Production Lines:   6 lines (CNC, Assembly, Stamping, Welding, Painting, Packing)
Shifts:             Morning (6 AM–2 PM) | Afternoon (2 PM–10 PM) | Night (10 PM–6 AM)
```

### Demo Leadership Team (Dashboard Users)
```
Vikram Joshi        — MD / Owner (M6 primary user — tablet view every morning)
Anita Kapoor        — CFO (M primary user — cost variance and financial KPIs)
Mahesh Kapoor       — Production Head (M primary user — line and OEE data)
Deepak Trivedi      — Planning Manager (M + M user — production and inventory)
Suresh Nair         — Sales Head (M primary user — revenue and pipeline)
Kavita Sharma       — GM Operations (M + M user — executive and people view)
Priya Desai         — HR Manager (M primary user — attendance, OT, attrition)
```

### Demo Financial KPIs (January 2025 Reference)
```
Revenue MTD:               ₹3.8 Cr (vs ₹ Cr target — 8%)
FY YTD Revenue:            ₹3 Cr
Gross Margin %:            2%
EBITDA %:                  1% (vs 15% target)
Material Cost %:           6% of revenue
Cash Balance:              ₹ Cr
Overdue Receivables:       ₹4L (₹1L over 60 days)
Payables Due This Week:    ₹12.8L
Material Price Variance:   +% adverse (steel price increase)
```

### Demo Production KPIs (January 2025 Reference)
```
Plant OEE Average:         79%
Best Line OEE:             Assembly Line 2 — 89%
Worst Line OEE:            CNC Line 1 — 64%
Production Today:          8,240 / 9,000 (9%)
Schedule Adherence MTD:    87%
Total Downtime MTD:        3 hours (all lines)
Top Downtime Reason:       Tooling changes — 1 hours
Dispatches MTD:            ₹3.8 Cr
On-Time Delivery:          87%
```

### Demo Inventory Snapshot (January 2025 Reference)
```
Total Inventory Value:     ₹4 Cr
Raw Material Value:        ₹4L
WIP Value:                 ₹2L
Finished Goods Value:      ₹6L
Items Below Reorder:       7
Critical / Stock Out:      3 (MS Round Bar 20mm — stock out)
Slow-Moving Items:         4
Dead Stock Items:          2
```

### Demo Workforce Snapshot (January 2025 Reference)
```
Total Workforce:           320 (282 permanent, 38 contract)
Attendance Today:          291 (90.9%)
Critical Absences:         4 (CNC Line 1 + Welding Line 4)
OT Hours MTD:              384 hrs (vs 320 budgeted — 120%)
OT Cost MTD:               ₹3.84L
Operator Productivity:     9% of target
Training Overdue:          7 employees
Attrition Rate (rolling):  1% annualised
Monthly Separations:       3 this month
```

---

## Demo Build Prompt for M6 Dashboard

```
Build a Manufacturing AI Management Dashboard for Fortiv ManufactureSmart Pvt. Ltd., 
a Gujarat precision metal components manufacturer. Dark theme, navy #1A3C5E primary, 
electric blue #2E86AB accent, amber #E8A838 warning, coral red #D85A30 danger, dark bg #0D1B2A.

Five sub-module navigation within M6. Default landing on M6 Overview / Module Dashboard.

Show:
(1) Top KPI bar: Production Today (8,240/9,000 — amber), Revenue MTD ₹3.8Cr (green),
    Open Alerts 11 (red), Data Freshness (3 min ago)
(2) Dashboard selector tiles: 5 tiles for sub-modules  to  with key live stats.
(3) Cross-module alert centre: top 6 alerts from all dashboards combined.
(4) Data Freshness status panel showing sync timestamp for SAP B1, MES, ZKTeco, Tally, and CRM.

Indian manufacturing context — Ahmedabad GIDC, SAP + Tally Prime integration, 
WhatsApp-first alerts, rupee currency (₹ lakhs and crores). 
JetBrains Mono for all numbers. Tablet and mobile responsive. React app with recharts.
```

---

## Brand & Design Parameters for M6 UI

### Color Usage
| Element | Color | Hex |
|---|---|---|
| Page background | Dark navy | #0D1B2A |
| Card/panel background | White | #FFFFFF |
| Primary brand | Deep navy | #1A3C5E |
| Accent / links | Electric blue | #2E86AB |
| Danger / critical alert | Coral red (pulsing for critical) | #D85A30 |
| Warning / watch | Amber | #E8A838 |
| Normal / success | Teal green | #1D9E75 |
| Cold / info | Electric blue | #2E86AB |
| Section background | Off white | #F5F6FA |

### Typography
| Use Case | Font |
|---|---|
| Module title, page heading | Playfair Display or DM Serif Display |
| Body text, labels, descriptions | DM Sans or Plus Jakarta Sans |
| All numbers, quantities, currency, timestamps | JetBrains Mono |

### Key Animations (Demo-Specific)
| Animation | Where | Description |
|---|---|---|
| OEE ring gauge fill |  drill-down | Rings animate to their % value on load |
| Revenue bar grow |  trend chart | Bars grow upward from zero on load |
| Pulsing red badge | CNC Line 1 OEE, stock out items | Badge pulses every 2 seconds |
| Unit counter tick-up |  production grid | Numbers increment as production data arrives |
| EBITDA waterfall build |  | Waterfall bars animate left to right on load |
| Attendance heatmap fade-in |  | Cells colour-fill sequentially by department |

---

## Technical Integration Map for M6

| Sub-module | External APIs / Systems | Data Flow Direction |
|---|---|---|
|  Production Intelligence | MES / Barcode scanners / ZKTeco | Shop floor → Live dashboard |
|  Production Intelligence | SAP Business One (job orders) | ERP → Production plan vs actual |
|  Inventory & Warehouse | SAP Business One (inventory module) | ERP → Stock levels (15–30 min sync) |
|  Inventory & Warehouse | M2 PO Generator | "Raise PO" button → M2 module |
|  Sales & Revenue | SAP (sales orders, invoices) + CRM | ERP + CRM → Revenue dashboard |
|  Sales & Revenue | M5 Dispatch module | Dispatch data → On-time delivery KPI |
|  Cost Variance | Tally Prime (P&L, ledgers) | Accounting → Financial KPIs (daily 7 AM) |
|  Cost Variance | SAP Business One (standard costs) | ERP standards → Variance analysis |
|  People & Productivity | ZKTeco / eSSL Biometric API | Biometric → Attendance dashboard |
|  People & Productivity | HRMS / SAP HR Module | HRMS → OT, training, attrition data |
|  People & Productivity | MES (output per operator) | Shop floor → Productivity league table |

---

## Summary: M6 at a Glance

| Item | Detail |
|---|---|
| Module | M6 — AI-Powered Management Dashboards |
| Sub-modules | 5 ( → ) |
| Total pages | 6 (1 module overview + 5 sub-module dashboards) |
| Primary data objects | Production KPIs, inventory position, revenue & orders, cost variances, workforce metrics |
| Systems covered | SAP Business One / Tally Prime / ERPNext MES / ZKTeco biometrics / CRM |
| Key output | Real-time, always-current management dashboards with zero manual compilation |
| Demo focus | Module landing overview showing critical cross-module alerts |
| Design tone | Dark navy dashboard, data-dense, executive clarity, mobile-first |
| Compliance | GST-ready · ISO 9001:2015 · IATF 16949 ready · DPDP Act 2023 |
| Currency | ₹ Indian Rupee — Lakhs (L) and Crores (Cr) |
| Date format | DD/MM/YYYY |
| Languages | English (primary) · Hindi · Gujarati |
| Shifts | Morning (6 AM–2 PM) · Afternoon (2 PM–10 PM) · Night (10 PM–6 AM) |

---

*Manufacturing AI Command Center — Module 6 Build Guide*  
*by Fortiv Solutions · fortivsolutions.in*  
*Version 1.0 · Confidential*
