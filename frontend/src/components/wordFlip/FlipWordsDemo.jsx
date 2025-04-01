import React from "react";
import { FlipWords } from "./flip-words";

export function FlipWordsDemo() {
  const words = ["GenAI", "DSA", "Full Stack","ML", "Cloud", "Cricket"];

  return (
    <div className="flex justify-center items-center px-4 bg-black">
      <div
        className="text-4xl mx-auto font-normal text-gray-100 p-2">
        I like
        <FlipWords words={words} /> <br />
        Hi, I'm Satyajit Patel
      </div>
    </div>
  );
}
