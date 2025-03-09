import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./text-reveal-card";

export function TextRevealCardPreview() {
  return (
    (<div
      className="flex items-center justify-center bg-[#0E0E10] h-[40rem] w-full">
      <TextRevealCard text="You know the business" revealText="Satyajit Patel ">
        <TextRevealCardTitle>
          About Me
        </TextRevealCardTitle>
        <TextRevealCardDescription>
        I am Satyajit Patel, pursuing an MTech in AI & Data Science at VIT Bhopal.
        I have dedicated significant time to mastering Data Structures and Algorithms in C/C++, along with exploring various technologies and the foundations of computer science.
        I enjoy building and experimenting with technology, constantly learning through both creation and exploration.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>)
  );
}
