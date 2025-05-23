import React from "react";
import { FloatingDock } from "./floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconMail, // Email icon
  IconBook, // Google Scholar (alternative)
  IconBrandLinkedin, // LinkedIn
  IconCode, // LeetCode (alternative)
} from "@tabler/icons-react";
import { Icon } from '@iconify/react';

// import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/satyajit-patel-67b081189",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/satyajit-patel",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/SatyajitPatel5",
    },
    {
      title: "LeetCode",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://leetcode.com/u/satyajit_2",
    },
    {
      title: "GoogleScholar",
      icon: (
        <IconBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://scholar.google.com/citations?user=rcOjTuEAAAAJ&hl=en&authuser=1",
    },
    {
      title: "Peerlist",
      icon: (
        <Icon icon="simple-icons:peerlist" className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://peerlist.io/i_satyajit",
    },
    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:thriver1998@gmail.com",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links} />
    </div>
  );
}
