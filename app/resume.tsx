"use client";

import { technologies } from "@/app/data";
import {
  CalendarDaysIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const Resume = () => {
  const resumeRef = useRef(null);
  const handlePrint = useReactToPrint({ content: () => resumeRef.current });

  return (
    <div>
      <article ref={resumeRef} className="w-[21cm] h-[29.7cm] flex">
        <aside className="bg-primary basis-2/5 p-4 space-y-6">
          <header>
            <h1 className="text-4xl font-extrabold tracking-tight">
              Jakub Figlak
            </h1>
            <p className="text-muted-foreground">Frontend Developer</p>
          </header>
          <section>
            <h2 className="text-lg font-bold mb-2">Contact</h2>
            <ul className="text-xs space-y-2">
              <li>
                <a href="tel:+48792475974" className="flex items-center gap-2">
                  <PhoneIcon className="h-4 w-4" /> +48 792 475 974
                </a>
              </li>
              <li>
                <a
                  href="mailto:jakub.figlak@gmail.com"
                  className="flex items-center gap-2"
                >
                  <MailIcon className="h-4 w-4" /> jakub.figlak@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jakubfiglak"
                  className="flex items-center gap-2"
                >
                  <GithubIcon className="h-4 w-4" /> GitHub
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/jakubfiglak/"
                  className="flex items-center gap-2"
                >
                  <LinkedinIcon className="h-4 w-4" /> LinkedIn
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-bold mb-2">Summary</h2>
            <p className="text-sm text-justify">
              Skilled Frontend developer with 3+ years of professionale
              experience building cutting-edge web applications for startups and
              corporate clients. Proficient with CSS and JavaScript frameworks,
              dedicated to delivering exceptional user experiences. Strongly
              enthusiastic for learning new skills, staying up-to-date with the
              latest industry trends and technologies. Combines technical
              expertise with a business-oriented perspective.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold mb-2">Tech Stack</h2>
            <ul className="flex flex-wrap gap-1">
              {technologies.map(({ name, icon }) => (
                <li key={name}>
                  <Badge variant="secondary" className="gap-1">
                    <Image src={icon} alt={name} className="h-4 w-4" priority />
                    {name}
                  </Badge>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-bold mb-2">Languages</h2>
            <ul className="text-sm">
              <li className="flex justify-between">
                <span>🇵🇱 Polish</span>
                <span className="text-muted-foreground">Native</span>
              </li>
              <li className="flex justify-between">
                <span>🇬🇧 English</span>
                <span className="text-muted-foreground">C1</span>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-bold mb-2">Education</h2>
            <ul className="text-sm space-y-2">
              <li>
                <p>Bachelor of Engineering, Electrotechnics</p>
                <p className="text-muted-foreground text-xs">
                  October 2013 - June 2018, Poznan University of Technology -
                  Poznan, Poland
                </p>
              </li>
              <li>
                <p>Master of Engineering, Civil Engineering</p>
                <p className="text-muted-foreground text-xs">
                  October 2008 - June 2013, Poznan University of Technology -
                  Poznan, Poland
                </p>
              </li>
            </ul>
          </section>
        </aside>

        <section className="flex-1 p-4">
          <div className="text-xs text-muted-foreground">
            <h2 className="text-xl font-bold uppercase text-foreground">
              Professional experience
            </h2>
            <Separator className="h-[2px] bg-primary mb-3" />
            <div>
              <h3 className="font-bold text-base text-foreground">
                Frontend Developer
              </h3>
              <a href="https://www.netguru.com/" className="font-bold text-sm">
                Netguru
              </a>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1 mb-4">
                <CalendarDaysIcon className="h-4 w-4" /> October 2021 - Ongoing
              </div>
              <ul className="list-disc list-inside">
                <li>
                  Developed, maintained, and debugged React and NodeJS
                  applications, spanning static, headless CMS-powered websites
                  to highly interactive web apps.
                </li>
                <li>
                  Led end-to-end product development, making crucial
                  architectural decisions and collaborating closely with
                  cross-functional teams, including Product Owners, Product
                  Managers, UI/UX Designers, and Backend Engineers.
                </li>
                <li>
                  Implemented data tracking strategies to gain insights into
                  user behavior and enhance retention, fostering collaboration
                  across departments.
                </li>
                <li>
                  Spearheaded a significant tech stack unification initiative
                  for a key client, successfully migrating legacy applications
                  to a modern, unified stack, resulting in notable performance
                  improvements and cost savings.
                </li>
                <li>
                  Placed emphasis on clean code and best practices to maintain
                  codebase quality and enhance team productivity.
                </li>
                <li>
                  Orchestrated the Frontend Coffee initiative, facilitating
                  knowledge sharing and technical discussions through department
                  meetings and speaker arrangements.
                </li>
                <li>
                  Collaborated as a co-author for the Frontend Digest, a weekly
                  blog post curating insightful frontend-related articles and
                  resources. -{" "}
                  <a href="https://frontenddigest.substack.com/">
                    https://frontenddigest.substack.com/
                  </a>
                </li>
              </ul>
            </div>
            <Separator className="my-2" />
            <div>
              <h3 className="font-bold text-base text-foreground">
                Web Developer, Tech Lead
              </h3>
              <a href="https://playmaker.pro/" className="font-bold text-sm">
                Playmaker Pro
              </a>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1 mb-4">
                <CalendarDaysIcon className="h-4 w-4" /> May 2020 - December
                2022
              </div>
              <ul className="list-disc list-inside">
                <li>
                  Designed and developed a dynamic web application (
                  <a href="https://scoutmaker.pro/">https://scoutmaker.pro/</a>)
                  tailored for football scouts, streamlining the process of
                  running observations, preparing player notes, and generating
                  comprehensive reports in real-time while observing games at
                  the stadium.
                </li>
                <li>
                  Collaborated closely with the product owner to identify and
                  prioritize essential features, ensuring rapid implementation
                  and continuous improvement of the application to meet the
                  evolving needs of the scouting team.
                </li>
                <li>
                  Played a pivotal role in facilitating scouting contract
                  signings with professional Polish football teams, including
                  those in the top-tier, by providing an efficient and powerful
                  scouting tool that enhanced the team&apos;s capabilities and
                  credibility.
                </li>
                <li>
                  Demonstrated leadership and mentorship skills by successfully
                  onboarding a junior engineer to the project during the final
                  months of my tenure. Guided the junior engineer&apos;s
                  professional growth and facilitated a seamless transition,
                  ultimately enabling them to assume full responsibility for the
                  project.
                </li>
              </ul>
            </div>
            <Separator className="my-2" />

            <div>
              <h3 className="font-bold text-base text-foreground">
                Production Manager
              </h3>
              <a
                href="https://www.wega-elektronik.pl/pl/home"
                className="font-bold text-sm"
              >
                WEGA Elektronik
              </a>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1 mb-4">
                <CalendarDaysIcon className="h-4 w-4" /> September 2013 -
                September 2021
              </div>
              <ul className="list-disc list-inside">
                <li>
                  Successfully implemented an ERP system within the
                  organization, leading to improved efficiency, better resource
                  allocation, and streamlined operations across various
                  departments.
                </li>
                <li>
                  Proficiently prepared Bills of Materials (BOMs) for
                  production, ensuring accurate documentation and efficient
                  inventory management, which minimized errors and reduced
                  production delays.
                </li>
                <li>
                  Wrote CNC machine programs for manufacturing processes,
                  optimizing precision, speed, and resource utilization in the
                  production of packaging machines.
                </li>
                <li>
                  Maintained strong relationships with existing suppliers and
                  proactively explored new supplier partnerships, resulting in
                  cost savings and improved supply chain reliability.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </article>
      <button
        onClick={() => {
          console.log("whatever?!");
          handlePrint();
        }}
      >
        Print
      </button>
    </div>
  );
};
