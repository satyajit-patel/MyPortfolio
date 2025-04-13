import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./text-reveal-card";
import {FlipWordsDemo} from "../wordFlip/FlipWordsDemo";

export function TextRevealCardPreview() {
  return (
    (
    <div className="h-screen">
    <FlipWordsDemo />
    <div
      className="flex items-center justify-center bg-black h-[40rem] w-full">
      <TextRevealCard text="You know the business" revealText="Satyajit Patel ">
        <TextRevealCardTitle>
          About Me
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          I'm Satyajit Patel, a proud loud introvert who loves coding, getting my hands dirty building tech, and exploring unmet technologies. I'm currently pursuing an MTech in AI & Data Science at VIT Bhopal, diving deep into C++, GenAI, algorithms, and all things tech. When I'm not experimenting with new ideas, you'll find me enjoying a good game of cricket.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
    </div>)
  );
}
