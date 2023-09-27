import next from "./icons/next.svg";
import html from "./icons/html.svg";
import css from "./icons/css.svg";
import js from "./icons/javascript.svg";
import ts from "./icons/typescript.svg";
import contentful from "./icons/contentful.svg";
import express from "./icons/express.svg";
import gatsby from "./icons/gatsby.svg";
import graphql from "./icons/graphql.svg";
import nest from "./icons/nestjs.svg";
import node from "./icons/node.svg";
import payload from "./icons/payloadcms.svg";
import postgres from "./icons/postgresql.svg";
import react from "./icons/react.svg";
import sanity from "./icons/sanity.svg";
import redwood from "./icons/redwoodjs.svg";
import type { JobProps } from "@/components/job";
import type { ReactNode } from "react";
import { NetguruContent } from "./components/netguru-content";
import { PlaymakerContent } from "./components/playmaker-content";
import { WegaContent } from "./components/wega-content";

export const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: js,
  },
  {
    name: "TypeScript",
    icon: ts,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "Next.js",
    icon: next,
  },
  {
    name: "Gatsby",
    icon: gatsby,
  },
  {
    name: "RedwoodJS",
    icon: redwood,
  },
  {
    name: "Sanity",
    icon: sanity,
  },
  {
    name: "Contentful",
    icon: contentful,
  },
  {
    name: "Payload CMS",
    icon: payload,
  },
  {
    name: "NodeJS",
    icon: node,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "NestJS",
    icon: nest,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
];

type Job = Pick<JobProps, "title" | "time" | "company"> & {
  id: string;
  content: ReactNode;
};

export const jobs: Array<Job> = [
  {
    id: "1",
    title: "Frontend Developer",
    company: { name: "Netguru", url: "https://www.netguru.com/" },
    time: "October 2021 - Ongoing",
    content: <NetguruContent />,
  },
  {
    id: "2",
    title: "Web Developer, Tech Lead",
    company: { name: "Playaker Pro", url: "https://playaker.pro" },
    time: "May 2020 - December 2022",
    content: <PlaymakerContent />,
  },
  {
    id: "3",
    title: "Product Manager",
    company: {
      name: "WEGA Elektronik",
      url: "https://www.wega-elektronik.pl/pl/home",
    },
    time: "September 2013 - September 2021",
    content: <WegaContent />,
  },
];
