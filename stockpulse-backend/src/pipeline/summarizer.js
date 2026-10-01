import Anthropic from "@anthropic-ai/sdk";
import { log } from "../logger.js";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Deliberately informational framing, not "buy/sell" calls — see the SEBI Investment
// Adviser discussion: a site publishing recommendations to the public needs registration,
// a site publishing factual/structural analysis does not. Keep the prompt on that side of the line.
const SYSTEM_PROMPT = `You are a financial data summarizer for an informational Indian stock analysis site.
Rules:
- Describe what the data shows. Never tell the reader to buy, sell, or hold.
- Never invent numbers. Every figure must come from the research notes provided.
- If the research notes don't support a claim, omit the claim rather than guess.
- Keep language factual and neutral, not promotional or alarmist.`;

export async function summarize(stock, notes) {
  const response = await client.messages.create({
    model: process.env.CLAUDE_MODEL || "claude-sonnet-5",
    max_tokens: 900,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: `Company: ${stock.name} (${stock.ticker})
Sector: ${stock.sector || "unknown"}

Research notes:
${notes}

Produce a JSON object with this exact shape:
{
  "title": string,               // short, factual headline
  "keyPoints": string[],         // 3-5 bullet points, each traceable to the notes above
  "priceContext": string,        // 1-2 sentences on where the price sits vs recent range
  "takeaway": string             // 1-2 sentence neutral summary, no buy/sell language
}
Respond with ONLY the JSON, no other text.`,
      },
    ],
  });

  const raw = response.content.find((b) => b.type === "text")?.text ?? "{}";
  const summary = JSON.parse(raw);

  await log("summarizer", { ticker: stock.ticker, summary }, { stockId: stock.id });
  return summary;
}
