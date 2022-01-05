/*
href: URL of your profile
title: Name of the site
description: small description
*/

export interface CardProps {
  href: string;
  title: string;
  description: string;
}

// you can add more such data if you want to add
// if you don't want to use any of these then just delete that particular data

export const CardData: Array<CardProps> = [
  {
    href: "https://www.linkedin.com/",
    title: "Linkedin",
    description: "Let's connect on LinkedIn",
  },
  {
    href: "https://www.youtube.com/",
    title: "Youtube",
    description: "Chek out my youtube channel",
  },
  {
    href: "https://www.instagram.com/",
    title: "Instagram",
    description: "Get to know me Personally",
  },
  {
    href: "https://github.com/",
    title: "Github",
    description: "Check out some of my projects",
  },
  {
    href: "https://twitter.com/",
    title: "Twitter",
    description: "Yes, I give opinions too",
  },
  {
    href: "https://web.whatsapp.com/",
    title: "Whatsapp",
    description: "Let's talk on Whatsapp",
  },
  {
    href: "https://leetcode.com/",
    title: "Leetcode",
    description: "See me grinding DSA daily",
  },
  {
    href: "https://medium.com/",
    title: "Medium",
    description: "Read some of my fantastic articles here",
  },
  {
    href: "https://codeforces.com/",
    title: "Codeforces",
    description: "My daily chill zone",
  },
  {
    href: "https://www.codechef.com/",
    title: "Codechef",
    description: "I cook code here",
  },
  {
    href: "https://www.hackerrank.com/",
    title: "HackerRank",
    description: "I practice programming here",
  },
  {
    href: "https://www.spotify.com/",
    title: "Spotify",
    description: "Listen to some of my favourite songs",
  },
];
