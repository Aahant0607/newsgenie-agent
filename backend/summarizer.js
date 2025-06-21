const { OpenAI } = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function summarize(text) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: "Summarize news articles concisely." },
      { role: "user", content: text }
    ]
  });
  return completion.choices[0].message.content;
}

module.exports = summarize;
