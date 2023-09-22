"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export const Resume = () => {
  const resumeRef = useRef(null);
  const handlePrint = useReactToPrint({ content: () => resumeRef.current });

  return (
    <div>
      <article
        ref={resumeRef}
        className="border border-slate-500 w-[21cm] h-[29.7cm] flex justify-center items-center"
      >
        <h1>Hello</h1>
      </article>
      <button onClick={handlePrint}>Print</button>
    </div>
  );
};
