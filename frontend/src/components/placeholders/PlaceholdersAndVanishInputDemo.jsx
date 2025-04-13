import { PlaceholdersAndVanishInput } from "./placeholders-and-vanish-input";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { useEffect, useState } from "react";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [markdownText, setMarkdownText] = useState("");
  const [text, setText] = useState("hello");

  const VITE_BACKEND_API = import.meta.env.VITE_BACKEND_API;
  // console.log("llm", VITE_BACKEND_API);

  async function getLLMResponse(text) {
    try {
      const res = await axios.post(`${VITE_BACKEND_API}/api/v1/chat`, { text });
      return res.data.reply;
    } catch (error) {
      console.error("Error:", error);
      return "Error fetching response.";
    }
  }

  useEffect(() => {
    const wakeUpServer = async () => {
      const ans = await getLLMResponse(text);
      console.log(ans);
    };
    wakeUpServer();
  }, []);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };
  
  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log("submitted", text);
    setIsLoading(true);
    setMarkdownText(""); // Clear previous text while loading
    const response = await getLLMResponse(text);
    setMarkdownText(response);
    setIsLoading(false);
  };
  
  // Function to handle ReactMarkdown rendering safely
  const renderMarkdown = () => {
    try {
      // Note: Removed the className from ReactMarkdown component as it's not supported
      return <ReactMarkdown>{markdownText}</ReactMarkdown>;
    } catch (error) {
      console.error("Error rendering markdown:", error);
      return <div className="text-red-500">Error displaying content: {error.message}</div>;
    }
  };
  
  return (
    <div className="h-screen flex flex-col justify-center items-center px-4 bg-black">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-gray-100">
        Ask Anything
      </h2>
      <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
      
      {/* Show loading state outside the markdownText condition */}
      {isLoading && (
        <div className="w-full max-w-lg mx-auto mt-4">
          <div className="bg-black text-white p-3 rounded-lg shadow-lg w-full">
            <div className="bg-gray-800 text-gray-200 font-mono p-3 rounded-md border border-gray-600 max-h-64 overflow-y-auto w-full break-words">
              <p className="animate-pulse">Loading...</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Show markdown content only when not loading and there is content */}
      {!isLoading && markdownText.length > 0 && (
        <div className="w-full max-w-lg mx-auto mt-4">
          <div className="bg-black text-white p-3 rounded-lg shadow-lg w-full">
            <div className="bg-gray-800 text-gray-200 font-mono p-3 rounded-md border border-gray-600 max-h-64 overflow-y-auto w-full break-words text-sm sm:text-base">
              {renderMarkdown()}
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <button
              onClick={() => setMarkdownText("")}
              className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
            >
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
                <span>Clear</span>
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}