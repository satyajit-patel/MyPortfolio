const express = require("express");
const cors = require("cors");
require("dotenv").config();
// const Groq = require("groq-sdk");
const { ChatGroq } = require("@langchain/groq");
const { HumanMessage, SystemMessage } = require("@langchain/core/messages");

const PORT = process.env.PORT;
const key = process.env.GROQ_API_KEY;

const app = express();
app.use(cors());
app.use(express.json());

// const groq = new Groq({ apiKey:  key});

// Define model
const groqLlama = new ChatGroq({
  model: "llama-3.3-70b-versatile",
  apiKey: key,
});
// Function to get AI response
const getContent = async (message) => {
  const response = await groqLlama.invoke(message);
  return response.content;
};

// app.post("/api/v1/chat", async (req, res) => {
//   try {
//     const { text } = req.body;
//     const chatCompletion = await groq.chat.completions.create({
//       messages: [
//         { role: "system", content: "You are a concise and engaging chatbot. Respond briefly but naturally. Avoid unnecessary details while keeping replies helpful and friendly" },
//         { role: "user", content: `Give a short and essential response for this: ${text}` }
//       ],
//       model: "llama-3.3-70b-versatile",
//       temperature: 0.7,
//       max_completion_tokens: 256
//     });

//     res.json({ reply: chatCompletion.choices[0]?.message?.content || "" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

let chatHistory = [];

app.post("/api/v1/chat", async (req, res) => {
  try {
    const {text} = req.body;

    chatHistory.push(new SystemMessage("You are a concise and engaging chatbot. Respond briefly but naturally. Avoid unnecessary details while keeping replies helpful and friendly"));
    let message = `Give a short and essential response for this: ${text}`;
    console.log(message);
    chatHistory.push(new HumanMessage(message));
    let content = await getContent(chatHistory);
    chatHistory.push(new SystemMessage(content));

    res.json({ reply: content || "" });
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
