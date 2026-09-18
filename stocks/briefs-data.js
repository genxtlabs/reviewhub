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
