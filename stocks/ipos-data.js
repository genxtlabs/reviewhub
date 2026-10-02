// Real, dated IPO data — sourced from public reporting (Business Standard, Groww, Chittorgarh,
// Upstox, Kotak Neo, 5paisa, Goodreturns, and issue-specific news coverage). Subscription figures
// are a snapshot from the morning of 2 Oct 2026 and move constantly until an issue closes — not a live feed.
// Shared by ipos.html (full tracker) and index.html (dashboard widgets).
const IPOS = [
  {
    name: "Vishal Nirmiti", status: "open",
    desc: "Manufactures pre-stressed concrete railway sleepers, pre-cast concrete products and fabricated steel pipes for railways, renewable power and industrial projects.",
    issueSize: "₹178 Cr (₹145 Cr fresh issue + ₹33 Cr offer-for-sale)", priceBand: "₹208 – ₹220",
    dates: "Closes 5 Oct 2026 · Listing ~8 Oct 2026",
    subscription: "0.6x (as of day 3)", subStyle: "cold",
    note: "QIB fully covered at 1.00x and HNI (10L+) at 1.10x, but retail lagging well behind at 0.50x overall. Allotment due 6 Oct."
  },
  {
    name: "Nityas Gems & Jewellery", status: "open",
    desc: "Gems and jewellery manufacturer and retailer.",
    issueSize: "₹108.35 Cr", priceBand: "₹70 – ₹75",
    dates: "Closes 5 Oct 2026 · Listing ~8 Oct 2026",
    subscription: "0.43x (as of day 3)", subStyle: "cold",
    note: "Retail leading demand at 0.72x, but QIB (0.30x) and the HNI categories remain well under-subscribed heading into the final two days. Allotment due 6 Oct."
  },
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
    name: "Moneyview", status: "listed",
    desc: "Digital lending fintech.",
    issueSize: "₹1,091.68 Cr (₹750 Cr fresh issue + ₹342 Cr offer-for-sale)", priceBand: "₹32 – ₹34",
    dates: "Listed 1 Oct 2026",
    note: "The standout listing of this entire batch — debuted at ₹55 on NSE (+61.76%) and ₹55.61 on BSE, against a ₹34 issue price, after closing as the most heavily subscribed mainboard issue of the batch (98.46x - QIBs 227.45x, NIIs 115.41x, retail 19.57x)."
  },
  {
    name: "A-One Steels India", status: "listed",
    desc: "Steel manufacturer.",
    issueSize: "₹405 Cr (₹355 Cr fresh issue + ₹50 Cr offer-for-sale)", priceBand: "₹385 – ₹405",
    dates: "Listed 1 Oct 2026",
    note: "Listed at ₹455 on NSE (+12.35%) and ₹462 on BSE (+14.07%) over the ₹405 issue price, though it gave back most of that pop intraday, trading around ₹415 by late morning - still +2.52% over issue price. Final subscription: QIB 7.69x, NII 25.80x, retail 9.11x."
  },
  {
    name: "German Green Steel and Power", status: "closed",
    desc: "Gujarat-based TMT steel producer.",
    issueSize: "₹304 Cr (₹290 Cr fresh issue + ₹14 Cr offer-for-sale)", priceBand: "₹132 – ₹139",
    dates: "Closed 29 Sep 2026 · Listing ~5 Oct 2026",
    subscription: "30.41x", subStyle: "hot",
    note: "Closed strong - NII 56.76x, QIB 21.91x, retail 23.97x. Allotment due 30 Sep."
  },
  {
    name: "Runwal Enterprises", status: "closed",
    desc: "Mumbai-based real estate developer.",
    issueSize: "₹500 Cr", priceBand: "₹290 – ₹305",
    dates: "Closed 29 Sep 2026 · Listing ~5 Oct 2026",
    subscription: "2.64x", subStyle: "",
    note: "Lot size 49 shares (~₹14,945 minimum retail investment at the upper band). Scraped past full subscription late - QIB 4.10x, NII 4.14x, but retail only 1.19x, the weakest demand in this batch. Allotment due 30 Sep."
  },
  {
    name: "Orient Cables (India)", status: "closed",
    desc: "Cable manufacturer.",
    issueSize: "₹552 Cr (₹320 Cr fresh issue + ₹232 Cr offer-for-sale)", priceBand: "₹258 – ₹272",
    dates: "Closed 29 Sep 2026 · Listing ~5 Oct 2026",
    subscription: "97.28x", subStyle: "hot",
    note: "Lot size 55 shares (~₹14,960 minimum retail investment at the upper band). Blockbuster final-day surge - QIB 192.68x, NII 121.90x, retail 32.21x. The standout of this IPO batch. Allotment due 30 Sep."
  },
  {
    name: "AceVector (Snapdeal)", status: "closed",
    desc: "Parent of e-commerce marketplace Snapdeal.",
    issueSize: "₹420 Cr (₹287 Cr fresh issue + ₹133 Cr offer-for-sale)", priceBand: "₹30 – ₹32",
    dates: "Closed 29 Sep 2026 · Listing 5 Oct 2026",
    subscription: "5.07x", subStyle: "",
    note: "Closed modestly subscribed - NII 8.53x, retail 4.82x, QIB 3.42x - after a very weak opening. Allotment due 30 Sep."
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
    name: "Sai Urja Indo Ventures", status: "closed", sme: true,
    desc: "Renewable energy-linked SME issue.",
    issueSize: "Not disclosed in public reporting reviewed", priceBand: "₹107 – ₹113",
    dates: "Closed 29 Sep 2026 · BSE SME listing ~5 Oct 2026",
    subscription: "4.95x", subStyle: "hot",
    note: "A strong final-day surge from a weak 0.23x on day 2 - NII led at 9.90x, retail 4.02x, QIB 2.80x. Allotment finalized 30 Sep."
  },
  {
    name: "Bench Mark Infotech Services", status: "closed", sme: true,
    desc: "IT services SME issue.",
    issueSize: "Not disclosed in public reporting reviewed", priceBand: "₹104 – ₹110",
    dates: "Closed 29 Sep 2026 · NSE SME listing ~5 Oct 2026",
    subscription: "103.12x", subStyle: "hot",
    note: "A blockbuster final-day jump from 1.29x on day 2 - NII 136.92x, retail 96.90x, QIB 88.62x. Allotment finalized 30 Sep."
  },
  {
    name: "Himalayan Solar", status: "closed", sme: true,
    desc: "Solar energy SME issue.",
    issueSize: "Not disclosed in public reporting reviewed", priceBand: "₹98 – ₹103",
    dates: "Closed 29 Sep 2026",
    subscription: "0.71x", subStyle: "cold",
    note: "Closed under-subscribed - QIB 1.58x, retail 0.84x, NII just 0.26x. Allotment finalized 30 Sep."
  },
  {
    name: "Dudani Retail", status: "closed", sme: true,
    desc: "Retail SME issue.",
    issueSize: "Not disclosed in public reporting reviewed", priceBand: "₹29 (fixed price)",
    dates: "Closed 29 Sep 2026 · Listing ~5 Oct 2026",
    subscription: "1.42x", subStyle: "",
    note: "Retail carried this one home at 2.31x after a slow start; NII lagged at 0.52x. Allotment finalized 30 Sep."
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
