const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

// Environment variables
const API_KEY = process.env.JUDGE0_API_KEY;
const API_HOST = "judge0-ce.p.rapidapi.com";

// Function to get language ID for Judge0
function getLanguageId(language) {
    const languageMap = {
        'python': 71,  // Python 3
        'javascript': 63,  // JavaScript Node.js
        'cpp': 54,  // C++
    };

    return languageMap[language.toLowerCase()] || 71;  // Default to Python 3
}

// Function to submit code to Judge0
async function submitCode(code, language, testCase) {
    try {
        const response = await axios.post(
            `https://${API_HOST}/submissions`,
            {
                source_code: code,
                language_id: getLanguageId(language),
                stdin: testCase,
            },
            {
                headers: {
                    "x-rapidapi-key": API_KEY,
                    "x-rapidapi-host": API_HOST,
                    "Content-Type": "application/json",
                },
            }
        );

        return response.data.token;
    } catch (error) {
        console.error("Submission Error:", error.response?.data || error.message);
        return null;
    }
}

// Function to fetch execution results
async function getResult(token) {
    try {
        const response = await axios.get(
            `https://${API_HOST}/submissions/${token}?base64_encoded=true`,
            {
                headers: {
                    "x-rapidapi-key": API_KEY,
                    "x-rapidapi-host": API_HOST,
                },
            }
        );

        const result = response.data;

        // Decode Base64 output if it exists
        function decodeBase64(value) {
            return value ? Buffer.from(value, "base64").toString("utf-8") : null;
        }

        // Determine execution status
        let executionStatus = result.status ? result.status.description : "Unknown";

        return {
            status: executionStatus,
            stdout: decodeBase64(result.stdout),
            stderr: decodeBase64(result.stderr),
            compile_output: decodeBase64(result.compile_output),
            message: result.message || null,
            time: result.time || null
        };
    } catch (error) {
        console.error("Fetching Error:", error.response?.data || error.message);
        return { status: "Error", message: error.message };
    }
}

module.exports = { submitCode, getResult };