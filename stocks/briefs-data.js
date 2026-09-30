// Market brief entries — newest first (unshift new entries at the top).
// Can be a single trading day OR a "last week" recap (as below) — whatever cadence is in use,
// each entry keeps this shape so the page renders it the same way either way.
// SCHEMA (kept intentionally simple/static so this never depends on the StockPulse backend being live):
//   date: "DD Mon YYYY" or a range like "15-18 Sep 2026" for a weekly recap
//   mood: one of "positive" | "upbeat" | "mixed" | "negative" — drives the card's mood-badge color
//   moodLabel: short display text for the badge (e.g. "Positive", "Upbeat", "Mixed", "Cautious")
//   dataStatus: honest label for how current the index figures below are — e.g. "Intraday — early
//               trade (~11:00 AM IST)", "End-of-day close", "Week-end close (Friday)". Never claim
//               a live/real-time feed this site doesn't have.
//   indices: array of { name, value?, changePct } for the session's headline index levels (Market
//            Overview). `value` is optional — omit it rather than back-computing/guessing a level
//            that was never actually verified; changePct alone is still honest and useful.
//   wittyLine: one line, no stock-specific calls
//   verdict: a read on the OVERALL MARKET MOOD only — never a buy/sell/hold call on any
//            individual stock. Informational tone only (e.g. "cautiously positive", "choppy, event-heavy").
//   assumptions: bullet list of the macro/flow inputs the verdict rests on (index levels, FII/DII flow,
//                global cues, rate/oil context) — again, no stock-specific recommendations. Displayed
//                on the page as "Key Drivers."
//   watchNext: one short, forward-looking sentence — the macro-level "what to monitor next," distinct
//              from any single stock (stocksToWatch below is the per-stock version of this).
//   news: bullet list of real, verifiable macro/economy/policy headlines for the period.
//   stocksToWatch: array of { ticker, name, reason } — real names with a genuine reason to pay
//                  attention today (upcoming listing, pending regulatory decision, ongoing dispute,
//                  results due, etc). Purely factual/forward-looking — NEVER a buy/sell/hold call,
//                  a rating, or a price target. This is "here's why this name might move today,"
//                  not "here's what to do about it."
//   stockUpdates: array of { ticker, name, update } — factual corporate announcements/news only
//                 (deals, dividends, approvals, results). Never phrased as a recommendation.
const DAILY_BRIEFS = [
  {
    date: "30 Sep 2026",
    mood: "mixed",
    moodLabel: "Mixed",
    dataStatus: "End-of-day close",
    indices: [
      { name: "SENSEX", value: "72,480.29", changePct: -0.07 },
      { name: "NIFTY 50", value: "22,620.45", changePct: -0.42 }
    ],
    watchNext: "Whether crude's pullback holds and helps break the three-day losing streak, allotment results due tomorrow for Orient Cables, German Green Steel, AceVector and Runwal Enterprises, and today's subscription start for Vishal Nirmiti and Nityas Gems & Jewellery.",
    wittyLine: "Crude finally did what everyone's been asking all week - it fell. The market said thanks with a third straight loss anyway. Orient Cables, meanwhile, closed 97x oversubscribed like nobody told it stocks were supposed to be nervous.",
    verdict: "Markets closed narrowly lower for a third straight session - Sensex down just 0.07%, Nifty down 0.42% - but the headline numbers undersell what was actually a calmer day underneath: breadth was strongly positive (1,720 advancers to 639 decliners on the NSE) as Brent crude pulled back sharply on signs of recovering Middle Eastern exports, finally easing the supply fears that drove this week's rout. The pressure instead concentrated in a handful of large caps - HDFC Bank, Infosys, and Bajaj Finance all fell - while TCS, IndiGo, and ICICI Bank led gainers. It was also a big day for IPOs: Orient Cables closed a blockbuster 97.28x oversubscribed, while Runwal Enterprises barely scraped past full subscription at 2.64x.",
    assumptions: [
      "Sensex fell 48.78 points (-0.07%) to 72,480.29 and Nifty 50 dropped 95.75 points (-0.42%) to 22,620.45 - a third consecutive losing session, but a much narrower move than the prior two days",
      "Market breadth was genuinely positive - 1,720 advancing stocks against 639 declining on the NSE - with the Midcap and Smallcap indices both trading in the green",
      "Brent crude pulled back sharply as recovering Middle Eastern export flows eased the immediate supply concerns that had driven crude toward $108/barrel earlier in the week",
      "Foreign institutional investors sold a further ₹9,980.22 crore (28 Sep data), partly offset by ₹6,952.71 crore of domestic institutional buying"
    ],
    news: [
      "Brent crude pulled back sharply after signs that Middle Eastern export flows are recovering, easing the acute supply concerns that had driven this week's spike toward $108/barrel.",
      "Foreign institutional investors extended their selling streak, offloading a further ₹9,980.22 crore of Indian equities (28 Sep data), while domestic institutional investors continued buying, picking up ₹6,952.71 crore.",
      "Two new mainboard IPOs opened for subscription: Vishal Nirmiti (₹178 crore, civil engineering and construction) and Nityas Gems & Jewellery (₹108.35 crore, lab-grown diamond jewellery), both closing 5 October."
    ],
    stocksToWatch: [
      { ticker: "VISHAL NIRMITI", name: "Vishal Nirmiti", reason: "Its ₹178 crore IPO opened for subscription today, closing 5 October." },
      { ticker: "NITYAS GEMS", name: "Nityas Gems & Jewellery", reason: "Its ₹108.35 crore IPO (lab-grown diamond jewellery) also opened today, closing 5 October." }
    ],
    stockUpdates: [
      { ticker: "ORIENT CABLES", name: "Orient Cables (India)", update: "Closed its IPO subscription window at a blockbuster 97.28x overall (QIB 192.68x, NII 121.90x, retail 32.21x) - the standout of this week's IPO batch. Allotment due 30 Sep, listing 5 Oct." },
      { ticker: "GERMAN GREEN STEEL", name: "German Green Steel and Power", update: "Closed its IPO at 30.41x overall subscription (NII 56.76x, QIB 21.91x, retail 23.97x). Allotment due 30 Sep, listing 5 Oct." },
      { ticker: "ACEVECTOR", name: "AceVector (Snapdeal)", update: "Closed its IPO at a modest 5.07x overall subscription (NII 8.53x, retail 4.82x, QIB 3.42x) after a very weak opening. Allotment due 30 Sep, listing 5 Oct." },
      { ticker: "RUNWAL ENTERPRISES", name: "Runwal Enterprises", update: "Closed its IPO just past full subscription at 2.64x overall (NII 4.14x, QIB 4.10x, retail only 1.19x) - the weakest demand among this batch. Allotment due 30 Sep, listing 5 Oct." }
    ]
  },
  {
    date: "29 Sep 2026",
    mood: "negative",
    moodLabel: "Negative",
    dataStatus: "Intraday — early trade (~10:00 AM IST)",
    indices: [
      { name: "SENSEX", value: "72,194", changePct: -0.79 },
      { name: "NIFTY 50", value: "22,606", changePct: -0.77 }
    ],
    watchNext: "Whether crude eases back from $107 as the US-Iran standoff develops further, how far the rupee slides past 96/dollar, and today's subscription closes for the Runwal Enterprises and Orient Cables IPOs.",
    wittyLine: "Yesterday's rout wasn't a one-off - the opening bell rang red again today. At least the IPO desk has something else to watch: two issues close for subscription this afternoon.",
    verdict: "Markets opened lower for an eighth straight session, extending Monday's sharp sell-off, as the same pressures - expensive crude near $107/barrel, a weaker rupee past 96/dollar, and persistent foreign investor selling - carry into Tuesday. Financials, metals and auto stocks are among the sectors investors are watching most closely in early trade.",
    assumptions: [
      "Sensex was down around 578 points (-0.79%) to about 72,194 and Nifty 50 down around 175 points (-0.77%) to about 22,606 as of 10:00 AM IST, following Monday's 1.52%/1.56% fall",
      "Brent crude held near $107/barrel, keeping India's import-cost and inflation concerns elevated after Monday's spike",
      "The rupee traded around 96.15 to the US dollar, near its weakest levels, adding to the pressure of costlier crude imports",
      "Foreign institutional investors have pulled billions out of Indian equities through September, with elevated US Treasury yields continuing to draw global capital away from emerging markets"
    ],
    news: [
      "Brent crude held near $107 a barrel, extending Monday's spike after US-Iran talks over the Strait of Hormuz broke down, keeping oil-driven inflation and rupee concerns front and center for the market.",
      "The Indian rupee traded near 96.15 against the US dollar, pressured by the costlier crude import bill and a stronger dollar.",
      "Foreign institutional investor selling continued into September, compounding pressure from elevated US Treasury yields drawing capital away from emerging markets like India."
    ],
    stocksToWatch: [
      { ticker: "RUNWAL ENT", name: "Runwal Enterprises", reason: "Its ₹1,000 crore IPO's subscription window closes today after a slow start - just 0.44x covered as of Sunday night - with allotment due Wednesday (30 Sep) ahead of listing on 5 October." },
      { ticker: "ORIENT CABLES", name: "Orient Cables (India)", reason: "Its IPO also closes today for subscription, having surged to 8.77x by the end of day two - well ahead of Runwal Enterprises - with listing also due 5 October." },
      { ticker: "MONEYVIEW", name: "Moneyview", reason: "Allotment for its blockbuster ₹1,091.68 crore IPO (98.46x oversubscribed on the final day) is expected to be finalized today, ahead of a 1 October listing." }
    ],
    stockUpdates: []
  },
  {
    date: "28 Sep 2026",
    mood: "negative",
    moodLabel: "Negative",
    dataStatus: "End-of-day close",
    indices: [
      { name: "SENSEX", value: "72,772", changePct: -1.52 },
      { name: "NIFTY 50", value: "22,780", changePct: -1.56 }
    ],
    watchNext: "Whether crude oil holds above $105 as the Strait of Hormuz standoff continues, further reaction in PSU Bank and Realty stocks, and Tuesday's IPO subscription closes for Runwal Enterprises and Orient Cables.",
    wittyLine: "Crude went from 'truce hopes' to '$108 and rising' in about 72 hours. Seven straight red sessions later, Dalal Street is running low on chairs.",
    verdict: "A sharp, broad sell-off - the seventh straight losing session - as hopes for a US-Iran truce collapsed entirely. Brent crude jumped as much as 3.7% to near $108/barrel after President Trump rejected Iran's offer to reopen the Strait of Hormuz and end hostilities, reviving fears of a Gulf supply disruption just as the rupee slid past 96/dollar. PSU Bank and Realty stocks bore the brunt, while foreign investors continued selling into the weakness.",
    assumptions: [
      "Sensex fell 1,124.02 points (-1.52%) to 72,771.72 and Nifty 50 dropped 360.25 points (-1.56%) to 22,780.25 - the seventh consecutive losing session and a near six-month low",
      "Brent crude jumped as much as 3.7% to around $108/barrel (WTI above $95) after President Trump rejected Iran's proposal to reopen the Strait of Hormuz and end hostilities, while Iran maintained diplomacy was the only way forward",
      "Nifty PSU Bank fell about 3.2% and Nifty Realty dropped over 2%, with Telecom, Energy, Metal, Private Bank and Oil & Gas indices each down more than 1%",
      "The rupee weakened roughly 0.19% to around 96 to the US dollar, adding to import-cost pressure from the pricier crude",
      "Just 1 of 30 Sensex stocks (Infosys) and 3 of 50 Nifty stocks closed higher; Tata Motors Passenger Vehicles, Adani Enterprises and Jio Financial Services were among the biggest laggards"
    ],
    news: [
      "Brent crude futures jumped as much as 3.7% to around $108 a barrel (WTI above $95) after US President Donald Trump said he had rejected an Iranian proposal to reopen the Strait of Hormuz and end hostilities, while Iran said diplomacy remained the only way forward - reviving fears of a Gulf oil-supply disruption.",
      "The Indian rupee weakened roughly 0.19% to around 96 against the US dollar, pressured by the more expensive crude import bill and a stronger dollar.",
      "Foreign institutional investors extended their selling streak through September, adding to the pressure on an equity market already down for seven straight sessions."
    ],
    stocksToWatch: [
      { ticker: "RUNWAL ENT", name: "Runwal Enterprises", reason: "Its ₹1,000 crore IPO's subscription window closes Tuesday (29 Sep) after a slow start - just 0.44x covered as of Sunday night - with listing due 5 October." },
      { ticker: "ORIENT CABLES", name: "Orient Cables (India)", reason: "Its IPO also closes Tuesday (29 Sep) after surging to 8.77x subscription by the end of day two, well ahead of Runwal Enterprises in investor demand." }
    ],
    stockUpdates: [
      { ticker: "MONEYVIEW", name: "Moneyview", update: "Its ₹1,091.68 crore IPO closed on its final day with a massive 98.46x overall subscription (QIBs 227.45x, NIIs 115.41x, retail 19.57x); allotment is due 29 September ahead of a 1 October listing." }
    ]
  },
  {
    date: "25 Sep 2026",
    mood: "mixed",
    moodLabel: "Mixed",
    dataStatus: "Intraday — early trade (~11:00 AM IST)",
    indices: [
      { name: "SENSEX", value: "73,526", changePct: -0.07 },
      { name: "NIFTY 50", value: "23,035", changePct: -0.12 }
    ],
    watchNext: "Whether today's stabilization holds, further US-Iran truce developments and their effect on oil, and the next move in the Tata Sons legal dispute.",
    wittyLine: "The market took a breather today after yesterday's tumble. Tata Sons, meanwhile, took out the lawyers.",
    verdict: "A quiet, range-bound session after yesterday's steep sell-off - markets are essentially pausing to catch their breath. Cooling crude oil, on growing hopes of a US-Iran truce, is helping ease yesterday's inflation scare, but Nifty IT remains a specific drag, extending a rough 2026 for the sector. The bigger story today is off the exchange: Tata Sons has formally defended Chandrasekaran's reappointment with three legal opinions, pushing the unresolved Tata Trusts dispute closer to an open legal battle.",
    assumptions: [
      "Sensex down ~0.07% to around 73,526 and Nifty down ~0.12% to around 23,035 in early trade, essentially flat after Thursday's 1.6%+ fall",
      "Crude oil eased further to around $94/barrel on growing hopes of a US-Iran truce that could ease tensions around the Strait of Hormuz - a reversal from the spike that drove yesterday's sell-off",
      "Nifty IT remained a specific drag again today, extending a rough 2026 for the sector - the index is down roughly 22% year-to-date amid soft global tech spending and elevated global interest rates",
      "NSE closed its first day of trading (24 Sep) at ₹1,818, a modest gain from its ₹1,800 listing price and around 1.8% above its ₹1,785 issue price"
    ],
    news: [
      "Tata Sons formally responded to Tata Trusts chairman Noel Tata's objections, submitting three separate legal opinions backing the legitimacy of N. Chandrasekaran's 17 September reappointment as chairman for a further five years. Coverage now frames the unresolved dispute as heading toward an open legal battle.",
      "Crude oil eased to around $94/barrel, down from this week's highs near $105, on growing hopes of a US-Iran truce that could ease tensions around the Strait of Hormuz and start restoring Persian Gulf exports.",
      "Nifty IT stocks remained under pressure again today, extending a difficult 2026 for the sector - the index is down roughly 22% for the year so far amid soft global technology spending, cautious client demand commentary, and elevated global interest rates."
    ],
    stocksToWatch: [
      { ticker: "TATA GROUP", name: "TCS, Tata Motors, Tata Chemicals, Titan, Tata Steel & others", reason: "Tata Sons has now formally defended Chandrasekaran's reappointment with three legal opinions, pushing the dispute with Tata Trusts toward what's being described as an open legal battle." }
    ],
    stockUpdates: [
      { ticker: "NSE", name: "National Stock Exchange", update: "Closed its first day of trading (24 Sep) at ₹1,818 - a modest gain from its ₹1,800 listing price and around 1.8% above its ₹1,785 IPO issue price, after touching an intraday high of ₹1,869." }
    ]
  },
  {
    date: "24 Sep 2026",
    mood: "negative",
    moodLabel: "Negative",
    dataStatus: "End-of-day close",
    indices: [
      { name: "SENSEX", value: "73,580.54", changePct: -1.67 },
      { name: "NIFTY 50", value: "23,063.10", changePct: -1.64 }
    ],
    watchNext: "Whether today's global bond and oil shock proves a one-day move or the start of a longer risk-off stretch, and how NSE trades in its first full week.",
    wittyLine: "Everyone else's portfolio had a rough day. NSE, trading in public for the very first time, somehow didn't.",
    verdict: "A sharply negative, broad-based sell-off - the worst single session for both benchmarks in roughly ten weeks. A global bond-market rout, triggered by hot US inflation data and rising Middle East-driven oil prices, pushed traders to price in far higher odds of a further US rate hike, and that risk-off mood hit Indian equities hard across the board. The one bright spot: NSE's own market debut went smoothly, listing at a premium and extending gains through the day even as the broader mood soured. The unresolved Tata Sons governance dispute remains a live overhang, with an AGM now reportedly expected within a month.",
    assumptions: [
      "Sensex closed at 73,580.54, down 1,247.71 points (-1.67%); Nifty closed at 23,063.10, down 383.70 points (-1.64%) - the steepest single-day decline for both benchmarks in roughly ten weeks",
      "Global bond markets sold off sharply, with US 30-year Treasury yields hitting their highest level since 2004, after hot US inflation data pushed the market-implied odds of a further Fed rate hike in October up to 71%, from just 11% a month ago",
      "Brent crude extended its climb to around $103-105/barrel on Middle East tensions tied to the Strait of Hormuz, reversing the cooling trend seen through most of this week",
      "NSE made its stock market debut today, listing at a modest 0.84% premium (₹1,800 vs the ₹1,785 issue price) before rallying as much as 3.83% intraday to a high of ₹1,869"
    ],
    news: [
      "Global bond markets sold off sharply, sending US 30-year Treasury yields to their highest level since 2004, as hot US inflation data pushed the market-implied odds of a further Federal Reserve rate hike in October up to 71%, from just 11% a month ago.",
      "Brent crude extended its recent climb to around $103-105/barrel, driven by Middle East tensions linked to the Strait of Hormuz - a reversal of the cooling trend seen through most of this week.",
      "Tata Sons is reportedly planning to hold its AGM within the next month, as the unresolved boardroom dispute between the board and Tata Trusts over N. Chandrasekaran's reappointment continues."
    ],
    stocksToWatch: [
      { ticker: "TATA GROUP", name: "TCS, Tata Motors, Tata Chemicals, Titan, Tata Steel & others", reason: "Tata Sons is reportedly planning to hold its AGM within the next month, which could force a resolution to the unresolved board-vs-Tata Trusts dispute over Chandrasekaran's reappointment." }
    ],
    stockUpdates: [
      { ticker: "NSE", name: "National Stock Exchange", update: "Made its stock market debut today after one of India's biggest-ever IPOs (₹22,562 crore). Shares listed at a modest 0.84% premium over the ₹1,785 issue price, touched an intraday high of ₹1,869 (+3.83% from listing), and settled around +3.13% for the day. Market cap stood at ₹4,59,137 crore after listing." }
    ]
  },
  {
    date: "23 Sep 2026",
    mood: "positive",
    moodLabel: "Positive",
    dataStatus: "Intraday — early-afternoon trade (~1:00 PM IST)",
    indices: [
      { name: "SENSEX", value: "74,907", changePct: 0.51 },
      { name: "NIFTY 50", value: "23,450", changePct: 0.52 }
    ],
    watchNext: "Tomorrow's (24 Sep) NSE listing, and whether the Tata Sons dispute escalates further after today's TVS Motor revelations.",
    wittyLine: "Metals and cooling oil did the heavy lifting for the market today. The Tata Sons saga did some lifting of its own — straight into a TVS warehouse.",
    verdict: "A constructive session on the surface: both benchmarks advanced through the afternoon on metal-stock strength and easing crude, and fresh upgrades to India's growth outlook added a genuinely positive undertone. But it's not an all-clear - IT stocks lagged, and the Tata Sons governance dispute just gained a new, more personal dimension that keeps that overhang firmly in place.",
    assumptions: [
      "Sensex up ~0.51% to around 74,907 and Nifty up ~0.52% to around 23,450 in early-afternoon trade, led by metal shares and a further pullback in crude oil prices",
      "Man Industries surged 15% to a fresh high of ₹974.40, one of today's most notable single-stock moves; Nifty IT lagged the broader advance, with Persistent Systems, LTIMindtree and Coforge among the index's top losers",
      "ADB raised its FY27 India GDP growth forecast to 7% (from 6.6%) and Fitch raised its own FY27 forecast to 6.9%, both citing stronger-than-expected Q1 FY27 growth",
      "NSE's IPO closed today with strong institutional-led demand, taking overall subscription to roughly 5.7-6x; its grey market premium has cooled further to around ₹43, implying a listing price near ₹1,828 against the ₹1,785 upper band ahead of tomorrow's (24 Sep) debut"
    ],
    news: [
      "ADB raised India's FY27 GDP growth forecast to 7% (from 6.6% previously); Fitch separately raised its own FY27 forecast to 6.9% - both citing stronger-than-expected Q1 FY27 growth momentum.",
      "NSE's ₹22,562 crore IPO closed today with strong institutional-led demand, taking overall subscription to roughly 5.7-6x ahead of tomorrow's stock market debut.",
      "A new twist emerged in the Tata Sons governance dispute: reports say N. Chandrasekaran's family members are directors of a company that leased farmland from TVS Motor for a warehouse project, shortly after TVS Motor chairman-emeritus Venu Srinivasan cast one of the votes backing Chandrasekaran's reappointment on 17 September. Tata Trusts said Srinivasan had not disclosed the connection to its trustees, adding a fresh conflict-of-interest question to the existing dispute over whether that reappointment vote was even valid."
    ],
    stocksToWatch: [
      { ticker: "NSE", name: "National Stock Exchange", reason: "Closed its IPO today at roughly 5.7-6x overall subscription, institutional-led; debuts on the exchanges tomorrow, 24 September." },
      { ticker: "TATA GROUP", name: "TCS, Tata Motors, Tata Chemicals, Titan, Tata Steel & others", reason: "The board-vs-Tata Trusts dispute over Chandrasekaran's reappointment just gained a fresh conflict-of-interest angle - worth watching across the group, not a single ticker." },
      { ticker: "TVSMOTOR", name: "TVS Motor Company", reason: "Newly drawn into the Tata Sons story after reports that it leased farmland to a company where Chandrasekaran family members are directors - a name that wasn't part of this saga until today." }
    ],
    stockUpdates: []
  },
  {
    date: "22 Sep 2026",
    mood: "positive",
    moodLabel: "Positive",
    dataStatus: "Intraday — early trade",
    indices: [
      { name: "SENSEX", value: "74,915", changePct: 0.08 },
      { name: "NIFTY 50", value: "23,450", changePct: 0.15 }
    ],
    watchNext: "Thursday's (24 Sep) NSE listing, and whether September's cumulative FII outflow trend turns around before month-end.",
    wittyLine: "Oil's down for the fourth day running. NSE's own listing premium is falling almost as fast.",
    verdict: "A quietly positive, if fragile, session. Falling crude oil (a fourth straight day of declines) and softer US bond yields lifted both benchmarks in early trade, with real estate leading gainers and IT lagging. The bigger undertone though: NSE's own IPO premium has cooled sharply ahead of Thursday's listing, and September's foreign outflows have now crossed ₹23,000 crore despite last week's brief buying spurt - a reminder that this recovery is tentative, not a clean trend reversal.",
    assumptions: [
      "Sensex up ~0.08% to around 74,915 and Nifty up ~0.15% to around 23,450 in early trade; Nifty Realty led gainers (+1%+) while Nifty IT was the biggest laggard (down over 1%)",
      "Brent crude fell for a fourth straight session, continuing to ease the oil-driven inflation and rate concerns flagged through last week",
      "NSE's IPO grey market premium has fallen sharply through September - from around ₹285 on 4 Sep to roughly ₹43-48 now - implying a far smaller listing pop than initially expected ahead of Thursday's (24 Sep) debut; share allotment was finalized today",
      "September's cumulative FII outflow has crossed ₹23,000 crore (through 19 Sep) - a reminder that the single-day net buying seen on 18 Sep hasn't reversed the broader monthly trend"
    ],
    news: [
      "Tata Trusts formally restated, in writing, that N. Chandrasekaran's 17 September reappointment as Tata Sons Executive Chairman is 'void' and has 'no legal effect.' Their argument rests on the company's Articles of Association requiring majority support from Trusts-nominated directors specifically - at the 17 Sep meeting, Tata Trusts chairman Noel Tata voted against the reappointment while the other Trusts nominee, Venu Srinivasan, voted in favour, which Tata Trusts says means that threshold wasn't met.",
      "NSE's share allotment was finalized today ahead of Thursday's (24 Sep) stock market debut. The issue's grey market premium has cooled sharply through September - from around ₹285 on 4 Sep to roughly ₹43-48 now - implying a far more modest listing gain than initially expected.",
      "September's cumulative FII outflow from Indian equities has crossed ₹23,000 crore (through 19 Sep), as elevated crude prices, high US bond yields, and geopolitical risk continue to weigh on foreign flows.",
      "India's broader IPO pipeline remains busy, with roughly 20 companies collectively looking to raise over ₹4,152 crore this week alone."
    ],
    stocksToWatch: [
      { ticker: "NSE", name: "National Stock Exchange", reason: "Share allotment finalized today; debuts on the exchanges this Thursday, 24 September, one of the most closely watched listings of the year." },
      { ticker: "TATA GROUP", name: "TCS, Tata Motors, Tata Chemicals, Titan, Tata Steel & others", reason: "The unresolved board-vs-Tata Trusts dispute over Chandrasekaran's chairmanship continues to create uncertainty around Tata Group holding-company stocks - not a single ticker, but worth watching across the group." },
      { ticker: "HDFCBANK", name: "HDFC Bank", reason: "RBI approval is still pending on the two shortlisted MD & CEO candidates the board sent in yesterday - an announcement either way could move the stock." }
    ],
    stockUpdates: []
  },
  {
    date: "21 Sep 2026",
    mood: "upbeat",
    moodLabel: "Upbeat",
    dataStatus: "Intraday — early-to-midday trade",
    indices: [
      { name: "SENSEX", changePct: 0.85 },
      { name: "NIFTY 50", changePct: 0.36 }
    ],
    watchNext: "NSE's listing timeline following today's IPO close, and any RBI response on the HDFC Bank CEO shortlist.",
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
    mood: "mixed",
    moodLabel: "Mixed",
    dataStatus: "Week-end close (Friday)",
    indices: [
      { name: "SENSEX", value: "74,294.96", changePct: -0.65 },
      { name: "NIFTY 50", value: "23,346.40" }
    ],
    watchNext: "Whether the Tata Sons dispute resolves or escalates, and whether Nifty can extend its bank-led bounce into the following week.",
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
