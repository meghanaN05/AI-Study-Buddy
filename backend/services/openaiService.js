import fetch from "node-fetch";

const GITHUB_AI_URL = "https://models.inference.ai.azure.com/chat/completions";

export const askAI = async (messages) => {
  try {
    const response = await fetch(GITHUB_AI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GITHUB_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages,
      }),
    });

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "⚠️ No response from AI";
  } catch (error) {
    console.error("AI Error:", error);
    return "⚠️ Error contacting AI service";
  }
};
