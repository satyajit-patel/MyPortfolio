const express = require("express");
const cors = require("cors");
const Groq = require("groq-sdk");
require("dotenv").config();

const PORT = process.env.PORT;
const key = process.env.GROQ_API_KEY;

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend requests
app.use(express.static("dist"));

const groq = new Groq({ apiKey:  key});

app.post("/api/v1/chat", async (req, res) => {
  try {
    const { text } = req.body;
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "You are a concise and engaging chatbot. Respond briefly but naturally. Avoid unnecessary details while keeping replies helpful and friendly" },
        { role: "user", content: `Give a short and essential response for this: ${text}` }
      ],
      model: "mixtral-8x7b-32768",
      temperature: 0.7,
      max_completion_tokens: 256
    });

    res.json({ reply: chatCompletion.choices[0]?.message?.content || "" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => console.log("Server running on port", PORT));
