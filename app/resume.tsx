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
      <article
        ref={resumeRef}
        className="border border-slate-500 w-[21cm] h-[29.7cm] flex"
      >
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
            <ul className="flex flex-wrap gap-2">
              {technologies.map(({ name, icon }) => (
                <li key={name}>
                  <Badge variant="secondary" className="gap-1">
                    <Image src={icon} alt={name} className="h-4 w-4" />
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
            <ul className="text-xs space-y-1">
              <li>
                <p>Bachelor of Engineering, Electrotechnics</p>
                <p className="text-muted-foreground">
                  October 2013 - June 2018, Poznan University of Technology -
                  Poznan, Poland
                </p>
              </li>
              <li>
                <p>Master of Engineering, Civil Engineering</p>
                <p className="text-muted-foreground">
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
              <div className="flex items-center gap-1 text-xs text-muted-foreground my-1">
                <CalendarDaysIcon className="h-4 w-4" /> October 2021 - Ongoing
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur pariatur labore, perferendis numquam, quibusdam
                dolorum dolores eligendi placeat voluptatem culpa consequatur
                vero ab aperiam tempora officiis sequi nesciunt alias. Nam,
                similique nemo. Aliquam obcaecati expedita cumque nulla illo
                blanditiis aut, eos perspiciatis unde impedit esse qui. Animi
                ullam quae ab.
              </p>
              <ul className="list-disc list-inside">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
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
              <div className="flex items-center gap-1 text-xs text-muted-foreground my-1">
                <CalendarDaysIcon className="h-4 w-4" /> September 2013 -
                September 2021
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur pariatur labore, perferendis numquam, quibusdam
                dolorum dolores eligendi placeat voluptatem culpa consequatur
                vero ab aperiam tempora officiis sequi nesciunt alias. Nam,
                similique nemo. Aliquam obcaecati expedita cumque nulla illo
                blanditiis aut, eos perspiciatis unde impedit esse qui. Animi
                ullam quae ab.
              </p>
              <ul className="list-disc list-inside">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>

            <h2 className="text-xl font-bold uppercase text-foreground mt-6">
              Major side projects
            </h2>
            <Separator className="h-[2px] bg-primary mb-3" />
            <div>
              <a
                href="https://www.wega-elektronik.pl/pl/home"
                className="font-bold text-sm"
              >
                Scoutmaker Pro
              </a>
              <div className="flex items-center gap-1 text-xs text-muted-foreground my-1">
                <CalendarDaysIcon className="h-4 w-4" /> May 2020 - December
                2022
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur pariatur labore, perferendis numquam, quibusdam
                dolorum dolores eligendi placeat voluptatem culpa consequatur
                vero ab aperiam tempora officiis sequi nesciunt alias. Nam,
                similique nemo. Aliquam obcaecati expedita cumque nulla illo
                blanditiis aut, eos perspiciatis unde impedit esse qui. Animi
                ullam quae ab.
              </p>
              <ul className="list-disc list-inside">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
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
