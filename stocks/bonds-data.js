// Real bond examples, terms as of late Sep 2026 — sourced from RBI notifications, issuer
// prospectuses, and financial news coverage. Not a live feed — see bonds.html's disclaimer.
// Shared by bonds.html (full page) and index.html (dashboard widget).
const BONDS = [
  {
    issuer: "RBI Floating Rate Savings Bond (2020)", category: "Sovereign · retail savings bond", rating: "Sovereign", ratingClass: "sovereign",
    coupon: "8.05%", couponLabel: "p.a. (Jul–Dec 2026, floating)",
    tenure: "7 years", payout: "Semi-annual", eligibility: "Resident individuals & HUFs only", taxStatus: "Taxable",
    note: "Rate resets every 1 Jan and 1 Jul, set at the National Savings Certificate (NSC) rate + 0.35% — it moves with NSC, not with your expectations of where rates are headed."
  },
  {
    issuer: "Government of India 10-Year G-Sec", category: "Sovereign · benchmark bond", rating: "Sovereign", ratingClass: "sovereign",
    coupon: "~7.04%", couponLabel: "yield (as of 22 Sep 2026)",
    tenure: "10 years", payout: "Semi-annual", eligibility: "Open to all (via RBI Retail Direct, brokers, or bond funds)", taxStatus: "Taxable",
    note: "The reference point the rest of India's bond market is priced against. Yield moves daily with rate expectations and inflation data — the 7.04% figure is a snapshot, not fixed."
  },
  {
    issuer: "Power Finance Corporation (PFC) NCD", category: "PSU · non-convertible debenture", rating: "AAA", ratingClass: "",
    coupon: "6.85% – 7.05%", couponLabel: "p.a. (Jan 2026 public tranche)",
    tenure: "Varies by series", payout: "Series-dependent", eligibility: "Open to all", taxStatus: "Taxable",
    note: "A government-owned NBFC's public NCD issue — illustrates how even a AAA-rated issuer prices only modestly above sovereign G-Secs."
  },
  {
    issuer: "Muthoot Fincorp NCD", category: "NBFC · non-convertible debenture", rating: "Check current rating", ratingClass: "",
    coupon: "8.56% – 9.25%", couponLabel: "p.a. (2026 public issue, by payout option)",
    tenure: "Series-dependent", payout: "Monthly, annual, or cumulative options", eligibility: "Open to all", taxStatus: "Taxable",
    note: "A meaningfully higher coupon than the PSU/sovereign examples above — the market's way of compensating for a lower-rated, less liquid issuer. Higher coupon is compensation for risk, not a bonus."
  }
];
