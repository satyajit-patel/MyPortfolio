import { HoverEffect } from "./card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    (
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    )
  );
}
export const projects = [
  {
    title: "PDF-Chat",
    description:
      "Upload a PDF and ask questions about its content. Get accurate, context-aware answers using AI and RAG.",
    github: "https://github.com/satyajit-patel/PDF-Chat",
    deployed: "https://doc-chat-two.vercel.app/",
    hashtags: "#Next.js #Clerk #RAG, #LLM #Supabase #QdrantDB #VectorEmbedding #FullStack",
  },
  {
    title: "Shorty-Url",
    description:
      "A simple URL-shortening service built with Next.js 13 (App Router), MongoDB, and Clerk authentication.",
    github: "https://github.com/satyajit-patel/shorty-url-js",
    deployed: "https://shorty-url-js.vercel.app/",
    hashtags: "#Next.js #GoogleAuth #Clerk #MongoDB #FullStack",
  },
  {
    title: "EchoFriendly",
    description:
      "A real-time voice assistant that transcribes speech, processes it using an LLM, and responds via text-to-speech, enabling hands-free AI conversations.",
    github: "https://github.com/satyajit-patel/EchoFriendly",
    deployed: "https://echo-friendly.vercel.app/",
    hashtags: "#LLM #SpeechToSpeech #DeepgramAPI",
  },
  {
    title: "AutoBlogAI",
    description:
      "An AI-powered blog automation tool that generates and publishes high-quality blogs in real-time using web scraping, SEO optimization, and a fine-tuned language model.",
    github: "https://github.com/satyajit-patel/AutoBlogAI",
    deployed: "https://auto-blog-ai-eosin.vercel.app/",
    hashtags: "#FireCrawl #LLM #SEOOptimization #LangChain, #WebScraping",
  },
  {
    title: "AI-Powered-Mock-Interview-System",
    description:
      "A full-stack application that provides a LeetCode-style coding interview experience with AI-powered code review and feedback.",
    github: "https://github.com/satyajit-patel/AI-Powered-Mock-Interview-System",
    deployed: "https://ai-powered-mock-interview-system.vercel.app",
    hashtags: "#LLM #Judge0 #LangChain #MERN",
  },
  {
    title: "Job-Recommendation-System",
    description:
      "A microservice-based application that provides job recommendations based on resume analysis using Natural Language Processing.",
    github: "https://github.com/satyajit-patel/Job-Recommendation-System",
    deployed: "https://job-recommendation-system-two.vercel.app",
    hashtags: "#JWT #multer #LLM #Authentication #NLP #JobScraping, #MERN",
  },
  {
    title: "VisiPrompt",
    description:
      "A tool that Converts text prompts into AI-generated images instantly.",
    github: "https://github.com/satyajit-patel/VisiPrompt",
    deployed: "https://visi-prompt.vercel.app/",
    hashtags: "#LLM #StableDiffusion #huggingface",
  },
  {
    title: "VisionaryAI",
    description:
      "Llama Vision Preview is an AI-powered API that generates text descriptions from uploaded images.",
    github: "https://github.com/satyajit-patel/VisionaryAI",
    deployed: "https://visionary-ai-beryl.vercel.app",
    hashtags: "#Multer #LLM #AIModel, FullStack",
  },
  {
    title: "Efficient Image Classifier",
    description:
      "Takes an input image and classifies it into one of 1,000 predefined categories (like dog, car, cat, etc.).",
    github: "https://github.com/satyajit-patel/COCO",
    deployed: "https://coco-ebon.vercel.app",
    hashtags: "#Cloudinary #LLM #CocoDataset #ImageClassification #huggingface #convnext",
  },
  {
    title: "CSV-Analyst-Agent",
    description:
      "A streamlined web application that allows users to upload CSV files and interact with them using natural language queries, powered by AI.",
    github: "https://github.com/satyajit-patel/csv-agent",
    deployed: "https://csv-agent.vercel.app/",
    hashtags: "#LLM #Next.js #DataAnalysis",
  },
  {
    title: "Contest Tracker API",
    description:
      "The Contest Tracker API collects and stores coding contest details from various platforms and associates them with relevant YouTube solution links.",
    github: "https://github.com/satyajit-patel/TLE-Contest-Tracker-API",
    deployed: "https://tle-contest-tracker-api.vercel.app",
    hashtags: "#Fullstack #CronJob #YouTubeAPI",
  },
  {
    title: "Preview-Music",
    description:
      "This tool allows users to search for music and play 30-second song previews with attached Spotify link.",
    github: "https://github.com/satyajit-patel/preview-music",
    deployed: "https://preview-music-git-master-satyajit-patels-projects.vercel.app/",
    hashtags: "#Docker #DockerHub #React #SpotifyApi",
  },
  {
    title: "Joke-Generator",
    description:
      "A simple tool to quickly generate a witty joke on a given topic.",
    github: "https://github.com/satyajit-patel/Topic-Joke-Generator",
    deployed: "https://topic-joke-generator.vercel.app/",
    hashtags: "#LLM #React",
  },
  {
    title: "Mini-Twitter",
    description:
      "A sleek social platform for creating and sharing short posts. Built with Django and Bootstrap for full-stack CRUD operations.",
    github: "https://github.com/satyajit-patel/miniTwitter",
    deployed: "https://mini-twitter-lsd8.onrender.com/",
    hashtags: "#DJango #Python #CRUD",
  },
  {
    title: "Flashcard-Learning-Tool",
    description:
      "A tool that lets users flip cards to reveal answers and navigate through a set using Next and Previous buttons.",
    github: "https://github.com/satyajit-patel/flashcard-learning-tool",
    deployed: "https://flashcard-learning-tool-omega.vercel.app/",
    hashtags: "#MERN #CRUD",
  },
  {
    title: "Password-Generator",
    description:
      "This tool generates secure passwords with customizable options.",
    github: "https://github.com/satyajit-patel/password-generator",
    deployed: "https://password-generator-ten-green.vercel.app/",
    hashtags: "#React #ReactHooks",
  },
  {
    title: "User-Profile-Management",
    description:
      "A RESTful API for managing user profiles with JWT authentication.",
    github: "https://github.com/satyajit-patel/user-profile-api",
    deployed: "https://user-profile-api.vercel.app",
    hashtags: "#JWT, MERN",
  },
];