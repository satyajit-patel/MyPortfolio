const { ChatGroq } = require("@langchain/groq");
const { HumanMessage, SystemMessage } = require("@langchain/core/messages");
require("dotenv").config();

const key = process.env.GROQ_API_KEY;

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
  
  let chatHistory = [];
  chatHistory.push(new SystemMessage("You are a concise and engaging chatbot. Respond briefly but naturally. Avoid unnecessary details while keeping replies helpful and friendly"));

  const llama = async (text) => {
    try {
        let message = `Give a short and essential response for this: ${text}`;
        chatHistory.push(new HumanMessage(message));
        let content = await getContent(chatHistory);
        chatHistory.push(new SystemMessage(content));
    
        return content;
      } catch (error) {
        return error.message;
      }
  }

  module.exports = { llama };