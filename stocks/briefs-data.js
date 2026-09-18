// Daily market brief entries — one per trading day, newest first (unshift new entries at the top).
// SCHEMA (kept intentionally simple/static so this never depends on the StockPulse backend being live):
//   date: "DD Mon YYYY"
//   wittyLine: one line, no stock-specific calls
//   verdict: a read on the OVERALL MARKET MOOD for the day only — never a buy/sell/hold call on any
//            individual stock. Informational tone only (e.g. "cautiously positive", "choppy, event-heavy").
//   assumptions: bullet list of the macro/flow inputs the verdict rests on (index futures, FII/DII flow,
//                global cues, rate/oil context) — again, no stock-specific recommendations.
//   news: bullet list of real, verifiable macro/economy/policy headlines for the day.
//   stockUpdates: array of { ticker, name, update } — factual corporate announcements/news only
//                 (deals, dividends, approvals, results). Never phrased as a recommendation.
const DAILY_BRIEFS = [
  {
    date: "18 Sep 2026",
    wittyLine: "The economy's having a good month. UPI just decided it deserves a cut too.",
    verdict: "Cautiously constructive heading into the session. A five-month-low trade deficit, cooling unemployment, and a record August for passenger vehicles are genuine tailwinds — but mixed overnight Asian cues and largely inactive FII flows point to consolidation rather than a strong directional move today.",
    assumptions: [
      "GIFT Nifty trading marginally lower pre-open, pointing to a flat-to-slightly-negative start",
      "FIIs largely inactive/balanced over recent sessions — no strong directional flow either way",
      "Asian markets mixed-to-lower overnight (Nikkei, Hang Seng, Taiwan Weighted all down)",
      "Falling oil prices continue to ease pressure on the RBI's rate-hike calculus"
    ],
    news: [
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
