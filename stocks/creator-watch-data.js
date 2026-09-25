// Creator Watch — real, dated videos from reputable Indian finance YouTubers, newest first.
// CRITICAL RULE, different from the Daily/Weekly Brief and from Movies/Cars aggregation:
// this page NEVER synthesizes a ReviewHub score, verdict, or recommendation from these videos.
// Every claim and opinion below is attributed to the named creator ("X said/argued/disclosed...").
// If a creator states their own stock opinion or personal position, report that fact plainly —
// never adopt it, endorse it, or rephrase it as ReviewHub's own view.
// COPYRIGHT: we link to and summarize creators' publicly available videos in our own words —
// we never reproduce their video or transcript content, and inclusion here is not an endorsement.
//
// CREATORS: the directory of channels this page tracks.
//   channel, avatarColor, channelUrl (real, verified — never guessed/constructed), focus (one line,
//   neutral description of what the channel covers, not a quality judgment)
const CREATORS = [
  { channel: "CA Rachana Phadke Ranade", avatarColor: "#9d174d", channelUrl: "https://www.youtube.com/@CARachanaRanade", focus: "CA-led personal finance and markets education — budgeting, taxes, mutual funds, and plain-language market explainers." },
  { channel: "Pranjal Kamra", avatarColor: "#1e40af", channelUrl: "https://www.youtube.com/@pranjalkamra", focus: "Founder of Finology; value-investing and stock market fundamentals, including his own personal investment opinions." },
  { channel: "Moneylife News Bites", avatarColor: "#166534", channelUrl: "https://www.youtube.com/channel/UCeK_VCmpErYrm1byma1-85Q", focus: "Weekly business-journalism deep dives hosted by veteran journalists Sucheta Dalal and Debashis Basu of Moneylife." },
  { channel: "Goraksh Brahmankar || The Doji", avatarColor: "#a16207", channelUrl: "https://www.youtube.com/@thedoji365", focus: "Independent technical analysis — weekly index support/resistance reads and sector strength/weakness." }
];
//
// CREATOR_WATCH: individual tracked videos.
//   channel, avatarColor, videoTitle, url, publishedDate, viewCount, subscriberCount, summary,
//   topics (array of short subject tags), verify (optional — one line flagging a specific figure or
//   claim in the video worth independently checking before relying on it; omit if nothing stands out)
const CREATOR_WATCH = [
  {
    channel: "CA Rachana Phadke Ranade",
    avatarColor: "#9d174d",
    videoTitle: "BSE vs NSE: Can NSE Repeat BSE's Massive Growth Story?",
    url: "https://www.youtube.com/watch?v=Z8k5_eiLraI",
    publishedDate: "18 Sep 2026",
    viewCount: 26824,
    subscriberCount: 5410000,
    summary: "Ahead of the NSE IPO's close, Ranade compared BSE's 2023-2026 turnaround (equity-options market share up from near-zero to over 30%, driven by a smaller Sensex/BankEx contract size, a Thursday expiry shift, and SEBI's single-weekly-expiry rule) against NSE's continued dominance in cash and futures (92-99% share). She argued NSE has structurally less room to grow given its already-near-total market share, while BSE's growth came from a much lower base — and noted NSE's FY26 PE (~43x at the upper price band) sits slightly below BSE's (~47x).",
    topics: ["NSE IPO", "BSE", "Market share"],
    verify: "The PE multiples cited (NSE ~43x, BSE ~47x) are her own calculation at the time of filming — confirm current multiples before relying on them."
  },
  {
    channel: "CA Rachana Phadke Ranade",
    avatarColor: "#9d174d",
    videoTitle: "Nifty at 23,000: Key Levels & Market Updates",
    url: "https://www.youtube.com/watch?v=5_l0VSGq-uw",
    publishedDate: "17 Sep 2026",
    viewCount: 37217,
    subscriberCount: 5410000,
    summary: "In a live Q&A, Ranade walked through why Nifty's RSI moving into oversold territory has historically preceded sharp rallies (600-1,800 points in prior instances this year), while also flagging real headwinds: FIIs net-sold ₹4,400 crore in the first half of September alone, US 10-year and 2-year bond yields near 5% and 4.7% are pulling capital toward US assets, and crude stayed elevated near $104/barrel. She named the RBI's 5-7 October Monetary Policy Committee meeting as the next major catalyst to watch, and cautioned that a hawkish rate commentary there could pressure markets further.",
    topics: ["Nifty", "Technical analysis", "RBI policy"],
    verify: "The historical RSI-rally figures (600-1,800 points) are her own back-of-envelope pattern read, not a guaranteed indicator of future moves."
  },
  {
    channel: "Pranjal Kamra",
    avatarColor: "#1e40af",
    videoTitle: "NSE IPO Explained | Should You Apply?",
    url: "https://www.youtube.com/watch?v=M_npo4c9DEA",
    publishedDate: "15 Sep 2026",
    viewCount: 194786,
    subscriberCount: 6500000,
    summary: "Kamra broke down NSE's revenue mix (86% from trading/clearing, ~60% from options alone) and flagged BSE's rise in equity-options market share (0% to over 30% since 2023) as a genuine competitive risk worth watching. He stated that, in his own assessment, NSE looks fairly-to-cheaply valued relative to BSE on a like-for-like basis, disclosed that he is personally invested in BSE, and said he personally intends to apply for the NSE IPO and hold long-term — explicitly framed as his own opinion and not a guarantee of listing-day gains.",
    topics: ["NSE IPO", "BSE", "Valuation"],
    verify: "Kamra discloses his own BSE holding and stated NSE IPO application intent — relevant personal positioning to weigh, not a neutral third-party take."
  },
  {
    channel: "Moneylife News Bites",
    avatarColor: "#166534",
    videoTitle: "Tata Sons: RBI's Endgame and a 53-year-old Exemption Whose Time May Be Up",
    url: "https://www.youtube.com/watch?v=YVusDAk4PKA",
    publishedDate: "17 Sep 2026",
    viewCount: 65527,
    subscriberCount: 136000,
    summary: "Sucheta Dalal reported that the RBI rejected Tata Sons' request to avoid classification as an 'upper-layer NBFC' (a status that would require it to list), and separately filed a caveat in the Bombay High Court to ensure it is heard if Tata Sons challenges that order. She linked the timing to a reported dispute over the Shapoorji Pallonji Group's ~18.37% stake (a ₹25,000 crore offer for 7% reportedly triggered an angry letter to the PMO and RBI), and questioned whether Tata Trusts' tax-exempt status on its 66% Tata Sons stake — held under a 1973 grandfather clause — still makes sense given how India's charitable-giving landscape has changed since.",
    topics: ["Tata Sons", "RBI", "NBFC classification"],
    verify: "The ₹25,000 crore SP Group stake-offer figure and the account of a PMO letter are as reported by Moneylife — worth cross-checking against other outlets before treating as settled fact."
  },
  {
    channel: "Goraksh Brahmankar || The Doji",
    avatarColor: "#a16207",
    videoTitle: "Will Indian Markets Recover?",
    url: "https://www.youtube.com/watch?v=ktO0RL3zN6I",
    publishedDate: "13 Sep 2026",
    viewCount: 21521,
    subscriberCount: 37600,
    summary: "In his weekly technical read, Brahmankar called Nifty's 23,100-23,200 zone a critical support level (a break below opens a path toward 22,500), while arguing current valuations (Nifty PE around 19.8x) and historical consolidation patterns (roughly 700-800 day corrections have preceded each of the last several bull runs) suggest this is more a phase to accumulate than to sell — a view he was explicit is his own read of the data, not a call to action. He flagged IT and Realty as the week's weakest sectors and Healthcare, Pharma and Defence as the strongest, and named the RBI's October policy meeting and the NSE IPO's liquidity draw as near-term factors to track.",
    topics: ["Nifty", "Technical analysis", "Sector rotation"],
    verify: "Support/resistance levels (23,100-23,200, 22,500) are his own technical read — a chart-pattern opinion, not a fundamental valuation call."
  }
];
//
// CREATOR_COMPARISONS: instances where two or more tracked creators discussed the same company or
// event close together in time — present each creator's framing fairly, side by side, without
// ranking whose view was "more correct." topicKey is just a stable id for future cross-linking.
const CREATOR_COMPARISONS = [
  {
    topicKey: "nse-vs-bse",
    title: "NSE vs. BSE valuation, ahead of the NSE IPO",
    takes: [
      { channel: "CA Rachana Phadke Ranade", position: "Sees NSE as structurally closer to its ceiling given its already near-total (92-99%) share of cash and futures trading, versus BSE's growth coming off a much lower options-market base — and calculated NSE's FY26 PE (~43x) as slightly below BSE's (~47x) at the time." },
      { channel: "Pranjal Kamra", position: "Also flagged BSE's rising options-market share as a real competitive risk to NSE, but concluded NSE looks fairly-to-cheaply valued versus BSE on his own like-for-like comparison — while disclosing he personally holds BSE shares, a relevant conflict of interest to weigh against his framing." }
    ],
    note: "Both creators point to the same underlying fact (BSE's rapid options-share gain since 2023) but land on different relative-value conclusions, partly using different PE comparisons calculated at different points in time. Neither take is verified or endorsed here — reported as each creator's own analysis."
  }
];
