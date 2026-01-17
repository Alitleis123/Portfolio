"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";

type Line = {
  kind: "input" | "output";
  content: ReactNode;
};

const HELP_OUTPUT: ReactNode = (
  <pre className="whitespace-pre-wrap text-violet-100/80">
{`Available commands:
  help        - Show this help message
  banner      - Show ASCII art banner
  about       - Learn about Ali
  skills      - View technical skills
  experience  - View work experience
  education   - View education
  projects    - View featured projects
  contact     - Get contact information
  resume      - Download resume link
  socials     - View social links
  clear       - Clear terminal

Type a command and press Enter!`}
  </pre>
);

const INITIAL_LINES: Line[] = [
  {
    kind: "output",
    content: "Type 'help' to see a full list of commands.",
  },
];

export default function TerminalGuide() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const withBasePath = (path: string) => `${basePath}${path}`;

  const [input, setInput] = useState("");
  const [lines, setLines] = useState<Line[]>(INITIAL_LINES);
  const endRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const focusInput = () => {
    inputRef.current?.focus();
  };

  const commands = useMemo<Record<string, ReactNode[]>>(
    () => ({
      help: [HELP_OUTPUT],
      banner: [
        <pre key="banner" className="text-violet-200/90">
{`   _    _ _ _            _           _ _       
  / \\  | (_) |_ ___  ___| |_ ___  __| (_) ___  
 / _ \\ | | | __/ _ \\/ __| __/ _ \\/ _\` | |/ _ \\ 
/ ___ \\| | | ||  __/ (__| ||  __/ (_| | |  __/ 
/_/   \\_\\_|_|\\__\\___|\\___|\\__\\___|\\__,_|_|\\___|`}
        </pre>,
      ],
      about: [
        "Ali Tleis is a computer science student focused on clean, scalable apps and expressive UI.",
        "Based in Boston. Actively seeking software engineering co-ops and internships.",
      ],
      skills: [
        "Frontend: Next.js, React, TypeScript, Tailwind, Framer Motion",
        "Backend: Node.js, Express, REST APIs",
        "Tools: Git, Docker, Linux",
      ],
      experience: [
        "Project-focused portfolio with emphasis on UI, animation, and thoughtful UX.",
        "Open to new opportunities and collaborations.",
      ],
      projects: [
        "Top Choice Realty — real estate site (in progress).",
        "Eternal Summary — Chrome extension for AI summaries.",
        "CalorieCalculator — maintenance and goal calculator.",
      ],
      education: ["Northeastern University — Class of 2028."],
      contact: [
        "School: tleis.a@northeastern.edu",
        "Personal: alitleis0731@gmail.com",
        "Location: Boston, MA",
      ],
      resume: [
        "Resume PDF:",
        <a
          key="resume-link"
          href={withBasePath("/resume/resume.pdf")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-300 underline underline-offset-2"
        >
          Open resume
        </a>,
      ],
      socials: [
        <a
          key="github-link"
          href="https://github.com/Alitleis123"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-300 underline underline-offset-2"
        >
          GitHub
        </a>,
        <a
          key="linkedin-link"
          href="https://www.linkedin.com/in/ali-tleis-091800247/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-300 underline underline-offset-2"
        >
          LinkedIn
        </a>,
      ],
    }),
    [basePath]
  );

  useEffect(() => {
    requestAnimationFrame(() => {
      endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }, [lines]);
  
  useEffect(() => {
    focusInput();
  }, []);

  const runCommand = (raw: string) => {
    const cmd = raw.trim();
    if (!cmd) return;
    const normalized = cmd.toLowerCase();

    if (normalized === "clear") {
      setLines(INITIAL_LINES);
      return;
    }

    const response = commands[normalized];
    const outputs = response ?? [
      `Unknown command: "${cmd}". Type "help" for options.`,
    ];

    setLines((prev) => [
      ...prev,
      { kind: "input", content: `> ${cmd}` },
      ...outputs.map<Line>((item) => ({ kind: "output", content: item })),
    ]);
    focusInput();
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    runCommand(input);
    setInput("");
  };

  return (
    <div
      className="rounded-[28px] border border-violet-400/30 bg-black/70 p-8 shadow-2xl shadow-violet-500/20 backdrop-blur"
      onClick={focusInput}
      onPointerDown={focusInput}
      tabIndex={0}
    >
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        </div>
        <div className="flex-1 text-center text-xs text-violet-200/70">
          <span className="text-violet-300/80">&gt;_</span> ali@portfolio ~ bash
        </div>
        <button
          type="button"
          onClick={focusInput}
          className="text-xs text-violet-200/40 transition hover:text-violet-100"
        >
          click to focus
        </button>
      </div>

      <div className="mt-6 max-h-[340px] min-h-[190px] space-y-4 overflow-auto rounded-2xl border border-white/10 bg-black/50 p-6 text-[15px] leading-7 text-violet-100/90 font-mono">
        {lines.map((line, index) => (
          <div
            key={`${line.kind}-${index}`}
            className={line.kind === "input" ? "text-violet-300" : "text-violet-100/80"}
          >
            {line.content}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <div className="mt-6 grid gap-5">
        <form onSubmit={onSubmit} className="flex items-center gap-4 font-mono">
          <span className="text-violet-300 text-lg">&gt;</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                runCommand(input);
                setInput("");
              }
            }}
            placeholder="Type a command..."
            className="w-full rounded-2xl border border-white/10 bg-black/60 px-5 py-3 text-[15px] text-violet-100 placeholder:text-violet-200/40 focus:border-violet-400/60 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-2xl border border-violet-400/30 bg-violet-400/10 px-5 py-3 text-[15px] text-violet-100 transition hover:border-violet-400/60 hover:bg-violet-400/20"
          >
            Run
          </button>
        </form>

        <div className="flex flex-wrap items-center gap-3 text-sm text-violet-200/60">
          <span className="uppercase tracking-[0.2em] text-violet-200/40">Quick</span>
          {["help", "about", "skills", "projects", "contact", "education"].map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={() => runCommand(cmd)}
              className="rounded-full border border-violet-400/20 bg-violet-400/5 px-4 py-1.5 font-mono transition hover:border-violet-400/60 hover:text-violet-100"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
