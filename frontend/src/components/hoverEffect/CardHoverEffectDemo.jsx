import { HoverEffect } from "./card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    (<div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>)
  );
}
export const projects = [
  {
    title: "EchoFriendly",
    description:
      "A real-time voice assistant that transcribes speech, processes it using an LLM, and responds via text-to-speech, enabling hands-free AI conversations.",
    github: "https://github.com/satyajit-patel/EchoFriendly",
    deployed: "https://echo-friendly.vercel.app/"
  },
  {
    title: "Flashcard-Learning-Tool",
    description:
      "A tool that lets users flip cards to reveal answers and navigate through a set using Next and Previous buttons.",
    github: "https://github.com/satyajit-patel/flashcard-learning-tool",
    deployed: "https://flashcard-learning-tool-omega.vercel.app/"
  },
  {
    title: "AutoBlogAI",
    description:
      "An AI-powered blog automation tool that generates and publishes high-quality blogs in real-time using web scraping, SEO optimization, and a fine-tuned language model.",
    github: "https://github.com/satyajit-patel/autoBlogAI",
    deployed: "https://auto-blog-ai-one.vercel.app/"
  },
  {
    title: "Preview-Music",
    description:
      "This tool allows users to search for music and play 30-second song previews with attached Spotify link.",
    github: "https://github.com/satyajit-patel/preview-music",
    deployed: "https://preview-music-git-master-satyajit-patels-projects.vercel.app/"
  },
  {
    title: "Password-Generator",
    description:
      "This tool generates secure passwords with customizable options.",
    github: "https://github.com/satyajit-patel/password-generator",
    deployed: "https://password-generator-ten-green.vercel.app/"
  },
  {
    title: "Joke-Generator",
    description:
      "A simple tool to quickly generate a witty joke on a given topic.",
    github: "https://github.com/satyajit-patel/Topic-Joke-Generator",
    deployed: "https://topic-joke-generator.vercel.app/"
  },
];
