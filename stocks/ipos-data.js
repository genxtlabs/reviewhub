// Real, dated IPO data — sourced from public reporting (Business Standard, Groww, Chittorgarh,
// Upstox, Kotak Neo, and issue-specific news coverage). Subscription figures are a snapshot from
// the afternoon of 25 Sep 2026 and move constantly until an issue closes — not a live feed.
// Shared by ipos.html (full tracker) and index.html (dashboard widgets).
const IPOS = [
  {
    name: "Reliance Jio (Jio Platforms)", status: "upcoming",
    desc: "India's largest telecom operator's parent — expected to be one of the biggest IPOs in Indian history.",
    issueSize: "~₹37,700 Cr (est.)", priceBand: "Not yet announced",
    dates: "SEBI approved 28 Aug 2026; RHP (with exact dates/price) still awaited",
    note: "DRHP filed 19 Jun 2026; a 100% fresh issue of up to 27 crore equity shares (no offer-for-sale). Widely expected around Diwali 2026, though no official date has been set."
  },
  {
    name: "Moneyview", status: "open",
    desc: "Digital lending fintech.",
    issueSize: "₹1,092 Cr (₹750 Cr fresh issue + ₹342 Cr offer-for-sale)", priceBand: "₹32 – ₹34",
    dates: "Opens 24 Sep, closes 28 Sep 2026 · Listing 1 Oct 2026",
    subscription: "5.58x", subStyle: "hot",
    note: "The most heavily subscribed mainboard issue currently open, by a wide margin."
  },
  {
    name: "A-One Steels India", status: "open",
    desc: "Steel manufacturer.",
    issueSize: "₹405 Cr (₹355 Cr fresh issue + ₹50 Cr offer-for-sale)", priceBand: "₹385 – ₹405",
    dates: "Opens 24 Sep, closes 28 Sep 2026 · Listing 1 Oct 2026",
    subscription: "1.26x", subStyle: "",
    note: "Lot size 37 shares."
  },
  {
    name: "German Green Steel and Power", status: "open",
    desc: "Gujarat-based TMT steel producer.",
    issueSize: "₹304 Cr (₹290 Cr fresh issue + ₹14 Cr offer-for-sale)", priceBand: "₹132 – ₹139",
    dates: "Opens 25 Sep, closes 29 Sep 2026 · Listing ~5 Oct 2026",
    subscription: "1.58x", subStyle: "",
    note: ""
  },
  {
    name: "Runwal Enterprises", status: "open",
    desc: "Mumbai-based real estate developer.",
    issueSize: "₹500 Cr", priceBand: "₹290 – ₹305",
    dates: "Opens 25 Sep, closes 29 Sep 2026 · Listing ~5 Oct 2026",
    subscription: "0.41x", subStyle: "cold",
    note: "Lot size 49 shares (~₹14,945 minimum retail investment at the upper band). Under-subscribed so far, with 4 days still to go."
  },
  {
    name: "Orient Cables (India)", status: "open",
    desc: "Cable manufacturer.",
    issueSize: "₹552 Cr (₹320 Cr fresh issue + ₹232 Cr offer-for-sale)", priceBand: "₹258 – ₹272",
    dates: "Opens 25 Sep, closes 29 Sep 2026 · Listing ~5 Oct 2026",
    subscription: "1.66x", subStyle: "",
    note: "Lot size 55 shares (~₹14,960 minimum retail investment at the upper band)."
  },
  {
    name: "AceVector (Snapdeal)", status: "open",
    desc: "Parent of e-commerce marketplace Snapdeal.",
    issueSize: "₹420 Cr (₹287 Cr fresh issue + ₹133 Cr offer-for-sale)", priceBand: "₹30 – ₹32",
    dates: "Opens 25 Sep, closes 29 Sep 2026 · Listing 5 Oct 2026",
    subscription: "0.20x", subStyle: "cold",
    note: "Sharply under-subscribed so far — the weakest demand among currently open mainboard issues."
  },
  {
    name: "Peshwa Wheat", status: "open", sme: true,
    desc: "Wheat and flour milling.",
    issueSize: "₹53.52 Cr", priceBand: "₹95 – ₹101",
    dates: "Opens 24 Sep, closes 28 Sep 2026 · BSE SME listing 1 Oct 2026",
    subscription: "1.97x", subStyle: "",
    note: ""
  },
  {
    name: "Roopa Screen", status: "open", sme: true,
    desc: "Printing/screen manufacturing.",
    issueSize: "₹19.20 Cr", priceBand: "₹60 – ₹64",
    dates: "Opens 24 Sep, closes 28 Sep 2026 · BSE SME listing 1 Oct 2026",
    subscription: "4.95x", subStyle: "hot",
    note: ""
  },
  {
    name: "Green Asia Impex", status: "open", sme: true,
    desc: "Import/export trading.",
    issueSize: "Not disclosed in public reporting reviewed", priceBand: "₹85 – ₹90",
    dates: "Opens 24 Sep, closes 28 Sep 2026 · NSE SME listing 1 Oct 2026",
    subscription: "Not yet available", subStyle: "",
    note: ""
  },
  {
    name: "Sai Urja Indo Ventures", status: "open", sme: true,
    desc: "Renewable energy-linked SME issue.",
    issueSize: "Not disclosed in public reporting reviewed", priceBand: "₹107 – ₹113",
    dates: "Opens 25 Sep, closes 29 Sep 2026 · BSE SME listing 5 Oct 2026",
    subscription: "0.04x", subStyle: "cold",
    note: "Extremely under-subscribed so far among the SME issues currently open."
  },
  {
    name: "Bench Mark Infotech Services", status: "open", sme: true,
    desc: "IT services SME issue.",
    issueSize: "Not disclosed in public reporting reviewed", priceBand: "₹104 – ₹110",
    dates: "Opens 25 Sep, closes 29 Sep 2026",
    subscription: "0.21x", subStyle: "cold",
    note: ""
  },
  {
    name: "Himalayan Solar", status: "open", sme: true,
    desc: "Solar energy SME issue.",
    issueSize: "Not disclosed in public reporting reviewed", priceBand: "₹98 – ₹103",
    dates: "Opens 25 Sep, closes 29 Sep 2026",
    subscription: "0.34x", subStyle: "cold",
    note: ""
  },
  {
    name: "Dudani Retail", status: "open", sme: true,
    desc: "Retail SME issue.",
    issueSize: "Not disclosed in public reporting reviewed", priceBand: "₹29 (fixed price)",
    dates: "Opens 25 Sep, closes 29 Sep 2026 · Listing ~5 Oct 2026",
    subscription: "Not yet available", subStyle: "",
    note: ""
  },
  {
    name: "Varmora Granito", status: "closed",
    desc: "Tiles and bathware manufacturer.",
    issueSize: "₹708.02 Cr", priceBand: "₹140 – ₹148",
    dates: "Closed 24 Sep 2026 · Listing expected 29 Sep 2026",
    note: "Subscribed 1.02x retail, 3.10x QIB, 0.94x NII. GMP has hovered near ₹0–₹9 (roughly flat to the upper band) in the days around closing — a modest listing-day pop, if any, is currently implied."
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
