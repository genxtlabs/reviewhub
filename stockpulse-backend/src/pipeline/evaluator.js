import Anthropic from "@anthropic-ai/sdk";
import { log } from "../logger.js";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function evaluate(stock, notes, summary) {
  const response = await client.messages.create({
    model: process.env.CLAUDE_MODEL || "claude-sonnet-5",
    max_tokens: 300,
    messages: [
      {
        role: "user",
        content: `Research notes:
${notes}

Summary produced from those notes:
${JSON.stringify(summary, null, 2)}

Check two things:
1. Is every number and claim in the summary traceable to the research notes (no invented figures)?
2. Does the summary avoid buy/sell/hold recommendation language (it should describe data, not advise action)?

Respond with ONLY "APPROVED" if both checks pass, or "REVISE" if either fails.`,
      },
    ],
  });

  const verdict = response.content.find((b) => b.type === "text")?.text.trim();
  await log("evaluator", { ticker: stock.ticker, verdict }, { stockId: stock.id });
  return verdict;
}
