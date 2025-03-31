const { submitCode, getResult } = require("../utils/judge0");
const { llama } = require("../utils/llama");

const judge0 = async (req, res) => {
    const { code, language, input } = req.body;
    // console.log(code);
    // console.log(language);
    // console.log(input);
    
    if (!code) {
        return res.status(400).json({ status: "Error", message: "Code is required" });
    }

    try {
        // Submit the code
        const token = await submitCode(code, language, input);
        if (!token) {
            return res.status(500).json({ status: "Error", message: "Failed to submit code" });
        }

        // Wait a moment for processing
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        // Check for results
        const result = await getResult(token);
        
        // Check if we need to poll for results (still processing)
        if (result.status === "Processing" || result.status === "In Queue") {
            let finalResult;
            let attempts = 0;
            const maxAttempts = 10;
            
            // Poll for results up to maxAttempts times
            while (attempts < maxAttempts) {
                await new Promise(resolve => setTimeout(resolve, 2000));
                finalResult = await getResult(token);
                
                // If no longer processing, break out of the loop
                if (finalResult.status !== "Processing" && finalResult.status !== "In Queue") {
                    break;
                }
                
                attempts++;
            }
            
            return res.json(finalResult);
        }
        
        return res.json({result});
    } catch (error) {
        console.error("API Error:", error.message);
        return res.status(500).json({ status: "Error", message: "Server error: " + error.message });
    }
}

const llm = async (req, res) => {
    try {
        const {text} = req.body;
        // console.log(text);
    
        const content = await llama(text);
    
        res.json({ reply: content || "" });
      } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
      }
}

module.exports = { judge0, llm };