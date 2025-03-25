const express = require("express");
const cors = require("cors");
const Groq = require("groq-sdk");
require("dotenv").config();

const PORT = process.env.PORT;
const key = process.env.GROQ_API_KEY;

const app = express();
app.use(cors());
app.use(express.json());

const groq = new Groq({ apiKey:  key});

app.post("/api/v1/chat", async (req, res) => {
  try {
    const { text } = req.body;
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "You are a concise and engaging chatbot. Respond briefly but naturally. Avoid unnecessary details while keeping replies helpful and friendly" },
        { role: "user", content: `Give a short and essential response for this: ${text}` }
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_completion_tokens: 256
    });

    res.json({ reply: chatCompletion.choices[0]?.message?.content || "" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.use("/ping", (req, res) => {
  res.send("pong");
})
app.use("/", (req, res) => {
  res.send("pong");
})

app.listen(PORT, () => console.log("Server running on port", PORT));
