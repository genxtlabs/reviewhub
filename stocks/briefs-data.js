// Market brief entries — newest first (unshift new entries at the top).
// Can be a single trading day OR a "last week" recap (as below) — whatever cadence is in use,
// each entry keeps this shape so the page renders it the same way either way.
// SCHEMA (kept intentionally simple/static so this never depends on the StockPulse backend being live):
//   date: "DD Mon YYYY" or a range like "15-18 Sep 2026" for a weekly recap
//   wittyLine: one line, no stock-specific calls
//   verdict: a read on the OVERALL MARKET MOOD only — never a buy/sell/hold call on any
//            individual stock. Informational tone only (e.g. "cautiously positive", "choppy, event-heavy").
//   assumptions: bullet list of the macro/flow inputs the verdict rests on (index levels, FII/DII flow,
//                global cues, rate/oil context) — again, no stock-specific recommendations.
//   news: bullet list of real, verifiable macro/economy/policy headlines for the period.
//   stockUpdates: array of { ticker, name, update } — factual corporate announcements/news only
//                 (deals, dividends, approvals, results). Never phrased as a recommendation.
const DAILY_BRIEFS = [
  {
    date: "21 Sep 2026",
    wittyLine: "The market cheered cheaper oil today. HDFC Bank, meanwhile, finally cheered up about who's taking the corner office.",
    verdict: "A genuinely upbeat start to the week. Cooling crude oil and renewed foreign fund buying lifted both benchmarks through the morning, continuing the tentative stabilization seen at the end of last week. NSE's own IPO closing with healthy demand across categories adds to the positive tone, though elevated August inflation and the still-unresolved Tata Sons governance dispute remain real overhangs.",
    assumptions: [
      "Sensex up ~0.85% and Nifty up ~0.36% in early-to-midday trade, helped by Brent crude falling 2.25% to around $101.5/barrel",
      "FIIs turned net buyers on 18 Sep (+₹599.5 crore) after a prolonged selling stretch; DIIs remained net buyers as well (+₹1,019.7 crore)",
      "NSE's ₹22,562 crore IPO closed today at 1.46x overall subscription (non-institutional investors led at 2.31x); grey market premium of ~₹48 implies a modest ~2.7% potential listing gain over the ₹1,785 upper price band, with listing expected 24 September",
      "August retail inflation rose to 4.82% - the highest since December 2024 - driven by elevated food/beverage and transport costs"
    ],
    news: [
      "The RBI rejected Tata Sons' long-pending request to avoid classification as an 'upper-layer NBFC' - a status that would otherwise require it to list - adding a fresh regulatory dimension to the governance dispute already unfolding at the group.",
      "India's retail inflation rose to 4.82% in August, the highest since December 2024, up from 4.45% in July, driven by elevated food, beverage and transport costs linked to the ongoing Middle East conflict's impact on global oil prices.",
      "NSE's ₹22,562 crore initial public offering closed today with 1.46x overall subscription across categories, with listing expected on 24 September."
    ],
    stockUpdates: [
      { ticker: "HDFCBANK", name: "HDFC Bank", update: "The board sent two shortlisted candidate names to the RBI for the MD & CEO role, following Sashidhar Jagdishan's decision not to seek a further term (he retires in October). The bank hasn't disclosed the names publicly, though several other bank and NBFC chief executives have been reported as contenders. The board separately appointed a new executive director." },
      { ticker: "MANIKAPLA", name: "Manika Plastech", update: "Shares listed flat at ₹43 on both BSE and NSE, matching the IPO issue price, despite the ₹125.50 crore issue being subscribed 28.14 times ahead of listing." }
    ]
  },
  {
    date: "15-18 Sep 2026",
    wittyLine: "Sensex just logged its longest losing streak since 2020. Nifty, standing right next to it, quietly had its best run in a month.",
    verdict: "A genuinely mixed week. The Sensex extended its losing streak to a sixth straight week — its longest since 2020 — dragged down by IT-sector weakness and uncertainty from a public governance dispute at Tata Sons. The Nifty, in contrast, bucked the trend with three straight days of gains on banking and insurance strength. FII selling pressure eased by Friday and DIIs stayed net buyers through the week, which helped cushion the broader market even as headline sentiment stayed cautious.",
    assumptions: [
      "Markets were closed Monday 14 Sep for Ganesh Chaturthi — only 4 trading sessions this week",
      "Sensex closed the week at 74,294.96, down ~0.65% week-on-week — a sixth consecutive weekly decline",
      "Nifty closed Friday at 23,346.40, its third straight daily gain, helped by HDFC Life and SBI Life",
      "FIIs were net sellers mid-week (₹2,978 crore on 15 Sep) but turned modest net buyers by Friday (₹599.5 crore on 18 Sep); DIIs were net buyers on both days",
      "Brent crude stayed elevated (~$103-107/barrel) through the week on West Asia tensions, a continuing overhang on sentiment"
    ],
    news: [
      "A public governance dispute erupted at Tata Sons: the board voted on 17 September to reappoint N. Chandrasekaran as Executive Chairman for a further 5 years, reversing his own August decision not to seek reappointment. Tata Trusts, which holds a 66% stake, is disputing the legal validity of that board resolution. The uncertainty weighed on Tata Group-linked stocks through the week.",
      "NSE's own ₹22,569 crore public listing drew heavy investor demand this week — a rare mega-IPO that some market commentary linked to tighter secondary-market liquidity.",
      "India's unemployment rate fell to a 6-month low of 5.00% in August, compared to 5.10% in July.",
      "The government introduced a Merchant Discount Rate (MDR) of 0.4% on person-to-merchant UPI transactions above ₹2,000, effective 15 October — capped at ₹300 for transactions above ₹75,000. Person-to-person UPI transactions remain free.",
      "India's trade deficit narrowed to a 5-month low of $26.86 billion in August, from $31.98 billion in July, as export growth (up 26% YoY) outpaced import growth.",
      "Passenger vehicle sales rose 36.5% year-on-year to a record 4.39 lakh units in August, per SIAM data.",
      "The CMs of Uttar Pradesh, Uttarakhand, Himachal Pradesh, Rajasthan, Delhi and Haryana signed the Kishau Multipurpose Project agreement — 97,000 hectares to be irrigated and 1,476 million units of hydropower generated, with the Centre bearing ~90% of the cost."
    ],
    stockUpdates: [
      { ticker: "TCS", name: "Tata Consultancy Services", update: "Partnered with the Dubai Gold & Commodities Exchange to upgrade its trading systems, and separately partnered with Germany's Aareal Bank to modernise its IT systems using cloud and AI." },
      { ticker: "BHEL", name: "Bharat Heavy Electricals", update: "Approved a further ₹65 crore investment in its 50:50 JV with NTPC, and formed a new JV with Titagarh Rail Systems to maintain Vande Bharat Sleeper trains for 35 years." },
      { ticker: "BAJAJHLDNG", name: "Bajaj Holdings & Investment", update: "Declared an interim dividend of ₹65 per share (650% of face value) for FY27. Record date 21 September; payout due on or before 13 October." },
      { ticker: "CANBK", name: "Canara Bank", update: "Paid ₹159.80 crore interest on its ₹2,000 crore AT1 bonds. RBI has also permitted early repayment of ₹1,500 crore of these bonds." },
      { ticker: "BFRL", name: "Bharat Forge", update: "Entered a strategic aerospace-engine partnership with Pratt & Whitney Canada to study turboprop engines for DRDO's indigenous high-altitude UAV programme." },
      { ticker: "AUROPHARMA", name: "Aurobindo Pharma", update: "Received USFDA approval for a Beclomethasone Dipropionate HFA inhaler — a generic of Teva's QVAR used for asthma maintenance therapy. Reference market estimated at $301 million (IQVIA, TTM July 2026)." }
    ]
  }
];
