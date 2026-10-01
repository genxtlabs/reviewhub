import Parser from "rss-parser";
import { log } from "../logger.js";

const rssParser = new Parser({ timeout: 8000 });

// Yahoo Finance's public chart endpoint — the same free, no-key source the yfinance
// Python library wraps. Indian NSE tickers just need a ".NS" suffix.
export async function fetchPriceSnapshot(ticker) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?range=3mo&interval=1d`;
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`Yahoo Finance fetch failed: ${res.status}`);
  const data = await res.json();
  const result = data?.chart?.result?.[0];
  if (!result) throw new Error("No price data returned for ticker");

  const meta = result.meta;
  const closes = result.indicators?.quote?.[0]?.close?.filter((c) => c != null) || [];

  return {
    ticker,
    currency: meta.currency,
    price: meta.regularMarketPrice,
    previousClose: meta.chartPreviousClose,
    dayHigh: meta.regularMarketDayHigh,
    dayLow: meta.regularMarketDayLow,
    fiftyTwoWeekHigh: meta.fiftyTwoWeekHigh,
    fiftyTwoWeekLow: meta.fiftyTwoWeekLow,
    threeMonthCloses: closes.slice(-63), // ~3 months of trading days, for a simple trend
    fetchedAt: new Date().toISOString(),
  };
}

// Free news via Google News RSS scoped to the company name — no API key required.
async function fetchNews(companyName) {
  const url = `https://news.google.com/rss/search?q=${encodeURIComponent(companyName)}&hl=en-IN&gl=IN&ceid=IN:en`;
  try {
    const feed = await rssParser.parseURL(url);
    return (feed.items || []).slice(0, 8).map((item) => ({
      title: item.title,
      source: item.source?.name || item.creator || "unknown",
      link: item.link,
      publishedAt: item.pubDate,
    }));
  } catch (err) {
    // News is supplementary — a feed failure shouldn't kill the whole pipeline run
    return [];
  }
}

export async function research(stock) {
  const [priceSnapshot, news] = await Promise.all([
    fetchPriceSnapshot(stock.ticker),
    fetchNews(stock.name),
  ]);

  const notes = [
    `PRICE DATA for ${stock.name} (${stock.ticker}):`,
    JSON.stringify(priceSnapshot, null, 2),
    ``,
    `RECENT NEWS HEADLINES:`,
    news.length
      ? news.map((n) => `- "${n.title}" (${n.source}, ${n.publishedAt})`).join("\n")
      : "- No recent news found.",
  ].join("\n");

  await log("researcher", { ticker: stock.ticker, priceSnapshot, newsCount: news.length }, { stockId: stock.id });

  return { notes, priceSnapshot, news };
}
