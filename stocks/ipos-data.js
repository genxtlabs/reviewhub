// Real, dated IPO data — sourced from public reporting (Business Standard, Groww, Chittorgarh,
// Upstox, Kotak Neo, and issue-specific news coverage). Subscription figures are a snapshot from
// the morning of 30 Sep 2026 and move constantly until an issue closes — not a live feed.
// Shared by ipos.html (full tracker) and index.html (dashboard widgets).
const IPOS = [
  {
    name: "SRIT India", status: "closed",
    desc: "IT services company offering digital and automation solutions across healthcare, e-governance and telecom.",
    issueSize: "₹218.40 Cr (fresh issue)", priceBand: "₹123 – ₹130",
    dates: "Closed 30 Sep 2026 · BSE/NSE listing 6 Oct 2026",
    subscription: "14.34x", subStyle: "hot",
    note: "Closed strong - NII 32.36x, retail 14.77x. Allotment due 1 Oct."
  },
  {
    name: "Shah Investor's Home", status: "closed",
    desc: "Retail broking company providing equity and derivatives brokerage services.",
    issueSize: "₹90.17 Cr", priceBand: "₹159 – ₹167",
    dates: "Closed 30 Sep 2026 · Listing ~6 Oct 2026",
    subscription: "3.08x", subStyle: "hot",
    note: "NII led at 5.81x, retail 3.05x, QIB 1.08x. Allotment due 1 Oct."
  },
  {
    name: "Reliance Jio (Jio Platforms)", status: "upcoming",
    desc: "India's largest telecom operator's parent — expected to be one of the biggest IPOs in Indian history.",
    issueSize: "~₹37,700 Cr (est.)", priceBand: "Not yet announced",
    dates: "SEBI approved 28 Aug 2026; RHP (with exact dates/price) still awaited",
    note: "DRHP filed 19 Jun 2026; a 100% fresh issue of up to 27 crore equity shares (no offer-for-sale). Widely expected around Diwali 2026, though no official date has been set."
  },
  {
    name: "Moneyview", status: "closed",
    desc: "Digital lending fintech.",
    issueSize: "₹1,091.68 Cr (₹750 Cr fresh issue + ₹342 Cr offer-for-sale)", priceBand: "₹32 – ₹34",
    dates: "Closed 28 Sep 2026 · Listing 1 Oct 2026",
    subscription: "98.46x", subStyle: "hot",
    note: "Closed as the most heavily subscribed mainboard issue of the batch by far — QIBs 227.45x, NIIs 115.41x, retail 19.57x. Allotment due 29 Sep."
  },
  {
    name: "A-One Steels India", status: "closed",
    desc: "Steel manufacturer.",
    issueSize: "₹405 Cr (₹355 Cr fresh issue + ₹50 Cr offer-for-sale)", priceBand: "₹385 – ₹405",
    dates: "Closed 28 Sep 2026 · Listing 1 Oct 2026",
    subscription: "12.23x", subStyle: "hot",
    note: "Final subscription: QIB 7.69x, NII 25.80x, retail 9.11x. Lot size 37 shares."
  },
  {
    name: "German Green Steel and Power", status: "open",
    desc: "Gujarat-based TMT steel producer.",
    issueSize: "₹304 Cr (₹290 Cr fresh issue + ₹14 Cr offer-for-sale)", priceBand: "₹132 – ₹139",
    dates: "Closes 29 Sep 2026 (today) · Listing ~5 Oct 2026",
    subscription: "5.39x", subStyle: "hot",
    note: "Climbing steadily through its bidding window - was 3x on day 2."
  },
  {
    name: "Runwal Enterprises", status: "open",
    desc: "Mumbai-based real estate developer.",
    issueSize: "₹500 Cr", priceBand: "₹290 – ₹305",
    dates: "Closes 29 Sep 2026 (today) · Listing ~5 Oct 2026",
    subscription: "0.70x", subStyle: "cold",
    note: "Lot size 49 shares (~₹14,945 minimum retail investment at the upper band). QIB 1.05x, NII 0.93x, retail 0.41x - improved from Sunday's 0.44x but still under-subscribed overall heading into the final hours."
  },
  {
    name: "Orient Cables (India)", status: "open",
    desc: "Cable manufacturer.",
    issueSize: "₹552 Cr (₹320 Cr fresh issue + ₹232 Cr offer-for-sale)", priceBand: "₹258 – ₹272",
    dates: "Closes 29 Sep 2026 (today) · Listing ~5 Oct 2026",
    subscription: "8.32x", subStyle: "hot",
    note: "Lot size 55 shares (~₹14,960 minimum retail investment at the upper band). NII 17.37x, retail 9.16x as of day 2 close; QIB lagging at just 6%."
  },
  {
    name: "AceVector (Snapdeal)", status: "open",
    desc: "Parent of e-commerce marketplace Snapdeal.",
    issueSize: "₹420 Cr (₹287 Cr fresh issue + ₹133 Cr offer-for-sale)", priceBand: "₹30 – ₹32",
    dates: "Closes 29 Sep 2026 (today) · Listing 5 Oct 2026",
    subscription: "1.19x", subStyle: "",
    note: "Recovered from a very weak opening (0.20x-0.24x on day 1) to cross fully subscribed heading into the close."
  },
  {
    name: "Peshwa Wheat", status: "closed", sme: true,
    desc: "Wheat and flour milling.",
    issueSize: "₹53.52 Cr", priceBand: "₹95 – ₹101",
    dates: "Closed 28 Sep 2026 · BSE SME listing 1 Oct 2026",
    subscription: "2.77x", subStyle: "",
    note: ""
  },
  {
    name: "Roopa Screen", status: "closed", sme: true,
    desc: "Printing/screen manufacturing.",
    issueSize: "₹19.20 Cr", priceBand: "₹60 – ₹64",
    dates: "Closed 28 Sep 2026 · BSE SME listing 1 Oct 2026",
    subscription: "350x", subStyle: "hot",
    note: "One of the biggest oversubscriptions this batch — retail alone came in at 529x, NII 281x, QIB 111x."
  },
  {
    name: "Green Asia Impex", status: "closed", sme: true,
    desc: "Import/export trading.",
    issueSize: "Not disclosed in public reporting reviewed", priceBand: "₹85 – ₹90",
    dates: "Closed 28 Sep 2026 · NSE SME listing 1 Oct 2026",
    subscription: "0.42x", subStyle: "cold",
    note: "Weak demand throughout - 0.01x on day 1, 0.03x on day 2, closing at 0.42x."
  },
  {
    name: "Sai Urja Indo Ventures", status: "open", sme: true,
    desc: "Renewable energy-linked SME issue.",
    issueSize: "Not disclosed in public reporting reviewed", priceBand: "₹107 – ₹113",
    dates: "Closes 29 Sep 2026 (today) · BSE SME listing 5 Oct 2026",
    subscription: "0.23x (as of day 2)", subStyle: "cold",
    note: "Up from an extremely weak 0.04x day-1 start, but still well under-subscribed heading into today's close."
  },
  {
    name: "Bench Mark Infotech Services", status: "open", sme: true,
    desc: "IT services SME issue.",
    issueSize: "Not disclosed in public reporting reviewed", priceBand: "₹104 – ₹110",
    dates: "Closes 29 Sep 2026 (today)",
    subscription: "1.29x (as of day 2)", subStyle: "",
    note: "Crossed fully subscribed by day 2, up from 0.21x."
  },
  {
    name: "Himalayan Solar", status: "open", sme: true,
    desc: "Solar energy SME issue.",
    issueSize: "Not disclosed in public reporting reviewed", priceBand: "₹98 – ₹103",
    dates: "Closes 29 Sep 2026 (today)",
    subscription: "0.71x (as of day 2)", subStyle: "cold",
    note: "Improved from 0.34x but still short of full subscription heading into today's close."
  },
  {
    name: "Dudani Retail", status: "open", sme: true,
    desc: "Retail SME issue.",
    issueSize: "Not disclosed in public reporting reviewed", priceBand: "₹29 (fixed price)",
    dates: "Closes 29 Sep 2026 (today) · Listing ~5 Oct 2026",
    subscription: "0.28x (as of day 2)", subStyle: "cold",
    note: ""
  },
  {
    name: "Varmora Granito", status: "listed",
    desc: "Tiles and bathware manufacturer.",
    issueSize: "₹708.02 Cr", priceBand: "₹140 – ₹148",
    dates: "Listed 29 Sep 2026",
    note: "Debuted at ₹152 on BSE (+2.7%) and ₹155 on NSE (+4.73%) over the ₹148 issue price, touching a high of ₹163.45 intraday - a modest but real listing-day pop despite the broader market's sharp fall the same week."
  },
  {
    name: "National Stock Exchange (NSE)", status: "listed",
    desc: "India's largest stock exchange.",
    issueSize: "₹22,562 Cr", priceBand: "₹1,785 (issue price)",
    dates: "Listed 24 Sep 2026",
    note: "Closed ~5.7–6x overall subscribed. Listed at ₹1,800 (+0.84% over issue price), touched an intraday high of ₹1,869, and closed its first trading day at ₹1,818. See our full coverage on the <a href=\"daily-brief.html\" style=\"color:var(--accent-solid); font-weight:600;\">Daily Brief</a>."
  },
  {
    name: "Om Galaxy", status: "listed", sme: true,
    desc: "SME-platform issue.",
    issueSize: "₹105 Cr", priceBand: "—",
    dates: "Listed 18 Sep 2026", note: ""
  },
  {
    name: "Maharaja & Speedex India", status: "listed", sme: true,
    desc: "SME-platform issue.",
    issueSize: "₹80.13 Cr", priceBand: "—",
    dates: "Listed 18 Sep 2026", note: ""
  }
];
