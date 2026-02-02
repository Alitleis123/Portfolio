"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import TerminalGuide from "./components/TerminalGuide";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const heroContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

type SectionDividerProps = {
  className?: string;
};

const SectionDivider = ({ className }: SectionDividerProps) => (
  <div className={`section-divider${className ? ` ${className}` : ""}`} aria-hidden="true" />
);

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const withBasePath = (path: string) => `${basePath}${path}`;

  const [lightbox, setLightbox] = useState<null | { images: string[]; title: string }>(null);
  const [openTimelineIndex, setOpenTimelineIndex] = useState<number | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const timelineItems = [
    {
      year: "2023",
      title: "Computer Technician Intern",
      range: "Jun–Sep 2023 · Robert DeFalco Realty",
      desc: "Improved IT reliability while streamlining onboarding for new workstations.",
      image: withBasePath("/Timeline/RobertDe%20Falco.png"),
      imageAlt: "Robert DeFalco Realty",
      scope:
        "Supported daily office operations by setting up hardware, resolving IT issues, and reducing downtime through repeatable standards.",
      highlights: [
        "Set up 20–30 office workstations with OS installs, software provisioning, and peripheral configuration.",
        "Resolved performance, connectivity, and printer/email issues, closing ~10–15 tickets per week.",
        "Standardized update, backup, and configuration baselines to reduce repeat incidents.",
        "Provided on-site technical support to keep daily operations running smoothly.",
      ],
      details: [
        "Installed and configured OS images, printers, scanners, and office peripherals.",
        "Maintained an organized ticket backlog and documented fixes for faster resolution.",
        "Verified endpoint security and baseline configurations after each setup.",
        "Optimized common workstation templates to reduce setup variance.",
      ],
      impact: [
        "Faster onboarding by shrinking setup time per device.",
        "Higher system reliability through repeatable maintenance routines.",
        "Improved staff productivity by resolving issues same-day.",
        "Lowered repeat issues through standardized configurations.",
      ],
      stats: ["20–30 setups", "10–15 tickets/wk", "30–60 min avg"],
      tech: ["Windows", "Office IT", "Hardware", "Troubleshooting"],
      accent: "#7c3aed",
    },
    {
      year: "2024",
      title: "Eternal Summary",
      range: "Sep 2023–Nov 2024",
      desc: "Built an AI summarizer extension for faster reading and better recall.",
      image: withBasePath("/Timeline/eternal%20summary%20icon.png"),
      imageAlt: "Eternal Summary icon",
      scope:
        "Designed a full-stack summarization workflow with async processing, reliable extraction, and a readable UI layer.",
      highlights: [
        "Engineered an LLM-driven summarizer to condense long-form pages into clear takeaways.",
        "Designed async request handling for low-latency summaries and stable API integration.",
        "Improved extraction quality with robust scraping and sanitization.",
        "Integrated a clean UI layer to keep summaries readable and actionable.",
      ],
      details: [
        "Built a request queue to keep response times consistent under load.",
        "Added resilient parsing to handle messy HTML and dynamic pages.",
        "Tuned prompt structure for consistent, concise summaries.",
        "Exposed configurable summarization lengths for different use cases.",
      ],
      impact: [
        "Tested outputs with sample pages and user feedback loops.",
        "Improved summary quality with better sanitization and parsing.",
        "Built a reusable pipeline that’s easy to expand to new sources.",
        "Increased reliability across diverse web content formats.",
      ],
      stats: ["User-tested", "Latency-focused", "LLM-powered"],
      tech: [
        "JavaScript (ES6+)",
        "HTML",
        "CSS",
        "Chrome Extension (MV3)",
        "OpenAI API",
        "fetch",
      ],
      accent: "#38bdf8",
    },
    {
      year: "2025",
      title: "Frontend Developer Intern",
      range: "Jun–Sep 2025 · Top Choice Realty",
      desc: "Shipped UI improvements that reduced friction in client workflows.",
      image: withBasePath("/Timeline/Top%20Choice%20Realty.jpg"),
      imageAlt: "Top Choice Realty",
      scope:
        "Worked closely with stakeholders to translate requirements into UI updates, workflow improvements, and data reliability fixes.",
      highlights: [
        "Collaborated cross-functionally to troubleshoot UX issues and iterate on UI flows.",
        "Automated routine data cleanup and updates with Python scripts for better consistency.",
        "Designed a centralized client/agent management system to remove duplicates and speed retrieval.",
        "Translated business requirements into clean, user-friendly interfaces.",
      ],
      details: [
        "Reduced data inconsistencies by validating critical fields at entry.",
        "Improved navigation patterns to cut search-to-action time.",
        "Standardized UI components for faster iteration and fewer regressions.",
        "Delivered updates in tight feedback loops with non-technical stakeholders.",
      ],
      impact: [
        "Reduced back-and-forth corrections through clearer UI flows.",
        "Improved data consistency with automation and validation.",
        "Delivered features faster with tighter feedback loops.",
        "Raised overall usability and client satisfaction.",
      ],
      stats: ["20–30% faster tasks", "Cleaner data", "Cross-team delivery"],
      tech: ["React", "TypeScript", "Python", "UX"],
      accent: "#6366f1",
    },
    {
      year: "2025",
      title: "Top Choice Realty Platform",
      range: "Jun–Sep 2025",
      desc: "Launched a full-stack real estate platform with secure listings and workflows.",
      image: withBasePath("/Timeline/Top%20Choice%20Realty.jpg"),
      imageAlt: "Top Choice Realty platform",
      scope:
        "Built the end-to-end platform, from authenticated APIs and data models to a responsive agent-focused UI.",
      highlights: [
        "Built RESTful APIs for properties, users, and transactions with secure authentication.",
        "Designed a responsive frontend optimized for usability and agent productivity.",
        "Streamlined listings and client access to reduce operational bottlenecks.",
        "Delivered the end-to-end product from data models to UI.",
      ],
      details: [
        "Implemented role-based access for agents, admins, and clients.",
        "Created reusable UI patterns for listings, filters, and client profiles.",
        "Structured data models to support scalable listing growth.",
        "Improved performance with lazy-loading and optimized assets.",
      ],
      impact: [
        "Centralized property data for faster access and cleaner workflows.",
        "Improved agent efficiency with a responsive, modern UI.",
        "Established a scalable base for future product expansion.",
        "Created a secure foundation for multi-user workflows.",
      ],
      stats: ["Full-stack launch", "RESTful APIs", "Responsive UI"],
      tech: ["React", "Tailwind", "TypeScript", "Framer Motion", "GitHub Actions"],
      accent: "#22d3ee",
    },
  ];

  return (
    <>
      <div className="relative min-h-screen overflow-hidden text-white">

        <section
          id="about"
          className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-start pt-28 px-10"
        >
          <div className="grid w-full grid-cols-1 items-center gap-20 md:grid-cols-2">

            {/* LEFT — NAME */}
            <div className="flex flex-col">
              <motion.h1
                className="mb-6 text-[4.5rem] font-light leading-tight tracking-wide"
                variants={heroContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.span variants={heroItem} className="block">
                  Ali
                </motion.span>
                <motion.span variants={heroItem} className="block">
                  Tleis
                </motion.span>
              </motion.h1>

              <div className="mb-5 whitespace-nowrap text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
                Lebanese‑American <span className="mx-2 opacity-40">•</span>
                Boston, MA <span className="mx-2 opacity-40">•</span>
                Northeastern ’28
              </div>

              <motion.p
                className="max-w-md text-lg text-zinc-400"
                variants={heroContainer}
                initial="hidden"
                animate="visible"
              >
                Computer Science student focused on building clean, scalable applications,
                with a strong interest in expressive UI, motion design, and creative tooling.
              </motion.p>

              <div className="mt-10 flex flex-wrap items-center gap-4 pointer-events-auto">
                <a
                  href="https://www.linkedin.com/in/ali-tleis-091800247/"
                  target="_blank"
                  className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/Alitleis123"
                  target="_blank"
                  className="rounded-xl border border-white/15 bg-black/30 px-6 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10"
                >
                  GitHub
                </a>
              </div>

              <div className="mt-10 h-px w-64 bg-gradient-to-r from-zinc-500 to-transparent" />

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "What I Build", text: "Full‑stack web apps, APIs, and interactive experiences." },
                  { title: "Tools I Use", text: "Next.js, React, TypeScript, Node, Tailwind, Framer Motion." },
                  { title: "Creative Work", text: "Video editing with DaVinci Resolve & After Effects." },
                  { title: "Fitness", text: "Consistent lifting and training — I like tracking progress and building discipline over time." },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/15 bg-black/30 p-4 backdrop-blur transition hover:bg-white/10"
                  >
                    <div className="text-sm font-semibold text-white">{item.title}</div>
                    <div className="mt-1 text-sm text-zinc-400">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — IMAGE + INTRO */}
            <div className="flex justify-end">
              <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6">
                <div className="relative mb-6 h-64 w-full overflow-hidden rounded-xl">
                  <img
                    src={withBasePath("/portrait/36B2F96D-AEC4-4C74-BA04-B7D58EE30BE0.jpg")}
                    alt="Ali Tleis portrait"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <p className="text-sm leading-7 text-zinc-400">
                  I enjoy building thoughtful software experiences that combine solid
                  engineering with clean visual design, motion, and usability.
                </p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
            </div>

          </div>
        </section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          className="relative z-10 mx-auto max-w-6xl px-6 py-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="section-title mb-4 text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-zinc-300 to-slate-400">
            Featured Projects
          </h2>

          <p className="mb-12 max-w-2xl text-lg text-zinc-300">
            A curated selection of projects focused on clean architecture,
            expressive UI, and thoughtful interaction.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Top Choice Realty",
                repo: "https://github.com/alitleis123/topchoicerealty",
                demo: undefined,
                showDemo: true,
                tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
                desc:
                  "Placeholder for a real estate website project. Details and visuals coming soon.",
                bullets: [
                  "Property listings and featured homes",
                  "Clean, fast browsing experience",
                  "Built with a modern UI focus",
                ],
                image: withBasePath("/projects/Top%20choice%20image%201.png"),
                images: [
                  withBasePath("/projects/Top%20choice%20image%201.png"),
                  withBasePath("/projects/Top%20choice%20image%202.png"),
                  withBasePath("/projects/Top%20choice%20image%203.png"),
                  withBasePath("/projects/Top%20choice%20image%204.png"),
                  withBasePath("/projects/Top%20choice%20image%205.png"),
                ],
              },
              {
                title: "Eternal Summary",
                repo: "https://github.com/Alitleis123/Eternal-Summary",
                demo: null,
                showDemo: false,
                tech: [
                  "Chrome Extension (MV3)",
                  "JavaScript",
                  "Node.js",
                  "Express API",
                  "LLM API",
                  "Prompting",
                ],
                desc:
                  "A Chrome extension that uses AI to summarize the webpage you’re currently viewing into quick, readable takeaways.",
                bullets: [
                  "Summarizes the active browser tab",
                  "Turns long pages into clear bullet takeaways",
                  "Built as a lightweight Chrome extension",
                ],
                image: withBasePath("/projects/EternalSummary.png"),
                images: [withBasePath("/projects/EternalSummary.png")],
              },
              {
                title: "DaVinci Resolve Smart Upscale Plugin",
                repo: null,
                demo: null,
                showDemo: false,
                tech: ["DaVinci Resolve", "Python", "Lua", "OpenCV", "FFmpeg"],
                desc:
                  "Built a custom DaVinci Resolve plugin to automatically upscale video footage to 4K with minimal quality loss.",
                bullets: [
                  "Implemented dead-frame detection to identify, remove, and resequence dead frames.",
                  "Automated timeline reconstruction for smooth playback and export.",
                  "Optimized upscale workflow with computer vision techniques.",
                ],
                image: withBasePath("/file.svg"),
                images: [withBasePath("/file.svg")],
              },
              {
                title: "CalorieCalculator",
                repo: "https://github.com/Alitleis123/CalorieCalculator",
                demo: "https://alitleis123.github.io/CalorieCalculator/",
                tech: ["React", "JavaScript", "HTML", "CSS"],
                desc:
                  "A calculator that estimates your maintenance calories and helps set goals to gain or lose weight based on your stats.",
                bullets: [
                  "Maintenance + gain/loss calorie targets",
                  "BMI calculation with a simple BMI scale",
                  "Inputs like height/weight to personalize results",
                ],
                image: withBasePath("/projects/CalorieCalculator.png"),
                images: [withBasePath("/projects/CalorieCalculator.png")],
              },
            ].map((project) => (
              <motion.div
                key={project.title}
                className="group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5 backdrop-blur-xl"
                whileHover={{ y: -8, boxShadow: "0 0 50px rgba(99,102,241,0.35)" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -inset-10 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent_65%)]" />
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setLightbox({
                      images: project.images ?? [project.image],
                      title: project.title,
                    })
                  }
                  className="group relative mb-4 h-32 w-full overflow-hidden rounded-xl border border-white/10 text-left"
                  aria-label={`Expand ${project.title} preview`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/10" />
                  <div className="pointer-events-none absolute bottom-3 right-3 rounded-lg border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/80 backdrop-blur">
                    Click to expand
                  </div>
                </button>

                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>

                <p className="mb-4 text-sm text-zinc-300">{project.desc}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="list-disc space-y-1 pl-4 text-sm text-zinc-400">
                  {project.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-3">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl bg-indigo-500/90 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
                    >
                      Live Demo
                    </a>
                  ) : project.showDemo ? (
                    <span className="inline-flex cursor-not-allowed items-center justify-center rounded-xl bg-indigo-500/40 px-4 py-2 text-sm font-medium text-white/60">
                      Live Demo
                    </span>
                  ) : null}

                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
                    >
                      View on GitHub
                    </a>
                  ) : (
                    <span className="inline-flex cursor-not-allowed items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/50">
                      View on GitHub
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* TECH STACK */}
        <motion.section
          id="tech-stack"
          className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="mb-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
            <h2 className="section-title text-3xl font-bold text-indigo-400">Tech Stack</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-400/40 to-transparent" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Frameworks & Libraries",
                items: [
                  "React",
                  "Node.js/Express",
                  "React Router",
                  "MUI",
                  "Vite",
                  "Tkinter",
                  "Django (basics)",
                ],
              },
              {
                title: "Backend & Systems",
                items: [
                  "REST APIs",
                  "Authentication (JWT)",
                  "Asynchronous Processing",
                  "System Integration",
                ],
              },
              {
                title: "Languages",
                items: [
                  "Java",
                  "Kotlin",
                  "C#",
                  "C++",
                  "Python",
                  "Lua",
                  "JavaScript",
                  "TypeScript",
                ],
              },
              {
                title: "Databases",
                items: [
                  "MongoDB (Mongoose, Atlas)",
                  "PostgreSQL",
                  "MySQL",
                ],
              },
              {
                title: "Tools",
                items: [
                  "Git / GitHub",
                  "Linux",
                  "Heroku",
                  "GitHub Pages",
                  "Jest/JUnit",
                  "Arduino"
                ],
              },
              {
                title: "Spoken Languages",
                items: [
                  "English (Native/Bilingual)",
                  "Arabic (Native/Bilingual)",
                  "French (Limited Working)",
                ],
              },
            ].map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 backdrop-blur-xl"
              >
                <h3 className="mb-4 text-lg font-semibold">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-black/30 px-4 py-3"
                    >
                      <div className="text-sm font-semibold text-white">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <SectionDivider />

        <section
          id="terminal"
          className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-6"
        >
          <div className="mb-10 text-center">
            <h2 className="section-title text-4xl font-semibold text-violet-300">Terminal</h2>
            <p className="mt-3 text-sm text-zinc-400">
              Type commands to explore my profile
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <TerminalGuide />
          </div>
        </section>

        <SectionDivider />

        {/* TIMELINE */}
        <section
          id="timeline"
          className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-10"
        >
          <div className="mb-14 text-center">
            <h2 className="section-title text-3xl font-bold text-violet-300">Timeline</h2>
            <p className="mt-2 text-sm text-zinc-400">
              A quick snapshot of my path so far.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-9 top-0 h-full w-px bg-gradient-to-b from-violet-500/70 via-indigo-500/50 to-sky-400/70 shadow-[0_0_24px_rgba(99,102,241,0.35)]" />
            <div className="space-y-12 pl-20">
              {timelineItems.map((item, index) => {
                const isOpen = openTimelineIndex === index;
                return (
                  <motion.div
                    key={`${item.year}-${item.title}`}
                    layout
                    className="relative grid gap-6 lg:grid-cols-[120px_1fr]"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    <div className="relative hidden items-start justify-center lg:flex">
                    <div
                      className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-[2px] bg-[#070910]/90 shadow-[0_0_0_8px_rgba(8,10,18,0.7),0_14px_35px_rgba(0,0,0,0.4)] transition ${isOpen ? "ring-pulse" : ""}`}
                      style={{ borderColor: item.accent }}
                    >
                        <span
                          className="text-xs font-semibold tracking-[0.3em]"
                          style={{ color: item.accent }}
                        >
                          {item.year}
                        </span>
                      </div>
                    </div>
                    <div className="relative lg:pl-0">
                      <div
                        className="absolute -left-12 top-8 hidden h-px w-10 lg:block"
                        style={{ backgroundColor: item.accent }}
                      />
                      <div
                        className={`absolute -left-14 top-6 flex h-12 w-12 items-center justify-center rounded-full border-[2px] bg-[#070910]/90 shadow-[0_0_0_6px_rgba(8,10,18,0.7),0_12px_30px_rgba(0,0,0,0.35)] transition lg:hidden ${isOpen ? "ring-pulse" : ""}`}
                        style={{ borderColor: item.accent }}
                      >
                        <span
                          className="text-[11px] font-semibold tracking-[0.3em]"
                          style={{ color: item.accent }}
                        >
                          {item.year}
                        </span>
                      </div>

                      <motion.div
                        layout
                        className={`relative w-full ${isOpen ? "max-w-[1100px]" : "max-w-[720px]"} rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/[0.03] to-transparent p-6 shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300`}
                        style={{ borderColor: isOpen ? item.accent : undefined }}
                      >
                        <div
                          className={`pointer-events-none absolute -inset-1 rounded-2xl opacity-0 transition duration-300 ${isOpen ? "opacity-80" : ""}`}
                          style={{
                            background: `radial-gradient(140% 140% at 20% 20%, ${item.accent}50, transparent 65%)`,
                          }}
                        />
                        <div className="relative">
                          <div className="flex flex-wrap items-start justify-between gap-4">
                            <div className="flex items-center gap-4">
                              {item.image ? (
                                <div className="h-14 w-14 overflow-hidden rounded-xl border border-white/10 bg-black/40">
                                  <img
                                    src={item.image}
                                    alt={item.imageAlt}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                              ) : null}
                              <div>
                                <div className="text-base font-semibold text-white">
                                  {item.title}
                                </div>
                                <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-violet-200/70">
                                  {item.range}
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() =>
                                setOpenTimelineIndex((current) =>
                                  current === index ? null : index
                                )
                              }
                              className="rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-violet-100/90 transition hover:border-violet-400/80 hover:bg-violet-400/20"
                              aria-expanded={isOpen}
                              aria-controls={`timeline-details-${index}`}
                            >
                              {isOpen ? "Hide" : "Expand"}
                            </button>
                          </div>
                          <p className="mt-4 text-sm text-zinc-300">{item.desc}</p>

                          <AnimatePresence initial={false}>
                            {isOpen ? (
                              <motion.div
                                id={`timeline-details-${index}`}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="overflow-hidden"
                              >
                                <div className="mt-6 grid gap-6 text-sm text-zinc-300 lg:grid-cols-[1.25fr_0.75fr]">
                                  <div className="space-y-5">
                                    <div>
                                      <div className="text-xs uppercase tracking-[0.2em] text-violet-200/70">
                                        Scope
                                      </div>
                                      <p className="mt-2 text-sm text-zinc-300">
                                        {item.scope}
                                      </p>
                                    </div>
                                    <div>
                                      <div className="text-xs uppercase tracking-[0.2em] text-violet-200/70">
                                        Key Contributions
                                      </div>
                                      <ul className="mt-3 space-y-2 pl-5 text-[13px]">
                                        {item.highlights.map((detail) => (
                                          <li key={detail} className="list-disc">
                                            {detail}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div>
                                      <div className="text-xs uppercase tracking-[0.2em] text-violet-200/70">
                                        Deep Dive
                                      </div>
                                      <ul className="mt-3 space-y-2 pl-5 text-[13px]">
                                        {item.details.map((detail) => (
                                          <li key={detail} className="list-disc">
                                            {detail}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div>
                                      <div className="text-xs uppercase tracking-[0.2em] text-violet-200/70">
                                        Stack
                                      </div>
                                      <div className="mt-3 flex flex-wrap gap-2">
                                        {item.tech.map((tool) => (
                                          <span
                                            key={tool}
                                            className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-zinc-200/70"
                                          >
                                            {tool}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="space-y-5">
                                  <div className="flex flex-wrap gap-2">
                                    {item.stats.map((stat) => (
                                      <span
                                        key={stat}
                                        className="rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-violet-100/80"
                                      >
                                        {stat}
                                      </span>
                                    ))}
                                  </div>
                                  {item.image ? (
                                    <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40">
                                      <img
                                        src={item.image}
                                        alt={item.imageAlt}
                                        className="h-40 w-full object-cover"
                                      />
                                    </div>
                                  ) : null}
                                    <div>
                                      <div className="text-xs uppercase tracking-[0.2em] text-violet-200/70">
                                        Impact
                                      </div>
                                      <ul className="mt-3 space-y-2 pl-5 text-[13px]">
                                        {item.impact.map((detail) => (
                                          <li key={detail} className="list-disc">
                                            {detail}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            ) : null}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* RESUME */}
        <motion.section
          id="resume"
          className="relative z-10 mx-auto max-w-5xl px-6 py-24"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="mb-12 text-center">
            <h2 className="section-title mb-4 text-3xl font-bold text-indigo-400">Resume</h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-300">
              A quick overview of my experience and background.  
              You can preview my resume below or download the full PDF.
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 backdrop-blur-xl">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold">Ali Tleis — Resume</h3>
                <p className="text-sm text-zinc-400">
                  Computer Science · Software Engineering
                </p>
              </div>

              <div className="flex gap-3">
                <a
                  href={withBasePath("/resume/resume.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
                >
                  Open in New Tab
                </a>

                <a
                  href={withBasePath("/resume/resume.pdf")}
                  download
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-500/90 px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-500"
                >
                  Download PDF
                </a>
              </div>
            </div>

            <div className="relative h-[80vh] w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
              <iframe
                src={withBasePath("/resume/resume.pdf")}
                className="h-full w-full"
                title="Ali Tleis Resume"
              />
            </div>
          </div>
        </motion.section>

        <SectionDivider />

        {/* CONTACT */}
        <section
          id="contact"
          className="relative z-10 mx-auto max-w-6xl px-6 py-24"
        >
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/[0.02] to-transparent p-10 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <h2 className="section-title text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-zinc-200 to-slate-400">
                  Let's Connect
                </h2>
                <p className="mt-5 text-lg leading-8 text-zinc-300">
                  If you’d like to reach out about opportunities, projects, or anything else,
                  feel free to get in touch. I’m always open to meaningful conversations and
                  new experiences.
                </p>
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-zinc-400">
                  Actively seeking software engineering co-ops and internships
                </p>
                <div className="mt-6 inline-flex rounded-full border border-white/10 bg-black/40 px-5 py-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
                  “A builder who cares about performance and experience.” — Robert DeFalco, CEO
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="mailto:tleis.a@northeastern.edu"
                    className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
                  >
                    Email Me
                  </a>
                  <a
                    href={withBasePath("/resume/resume.pdf")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-indigo-400/40 bg-indigo-500/20 px-6 py-3 text-sm font-medium text-indigo-100 transition hover:bg-indigo-500/30"
                  >
                    View Resume
                  </a>
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-5">
                  <div className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                    Primary Contact
                  </div>
                  <div className="mt-4 space-y-4">
                    <div>
                      <span className="block text-[11px] uppercase tracking-widest text-zinc-500">
                        School Email
                      </span>
                      <a
                        href="mailto:tleis.a@northeastern.edu"
                        className="mt-2 inline-flex items-center gap-2 text-base font-medium text-white transition hover:text-indigo-200"
                      >
                        tleis.a@northeastern.edu
                      </a>
                    </div>
                    <div>
                      <span className="block text-[11px] uppercase tracking-widest text-zinc-500">
                        Personal Email
                      </span>
                      <a
                        href="mailto:alitleis0731@gmail.com"
                        className="mt-2 inline-flex items-center gap-2 text-base font-medium text-white transition hover:text-indigo-200"
                      >
                        alitleis0731@gmail.com
                      </a>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-2 text-sm text-zinc-300">
                      <div>
                        <span className="block text-[11px] uppercase tracking-widest text-zinc-500">
                          Location
                        </span>
                        <p className="mt-1">Boston, MA</p>
                      </div>
                      <div>
                        <span className="block text-[11px] uppercase tracking-widest text-zinc-500">
                          Phone
                        </span>
                        <p className="mt-1">347‑513‑4098</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-black/70 via-black/40 to-black/20 p-6 shadow-[inset_0_0_30px_rgba(99,102,241,0.08)]">
                <h3 className="text-lg font-semibold text-white">Availability</h3>
                <div className="mt-4 grid gap-4 text-sm text-zinc-300">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                      Location
                    </div>
                    <div className="mt-2 text-base text-white">Boston, MA</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                      Status
                    </div>
                    <div className="mt-2 text-base text-white">
                      Open to internships and co-ops
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                      Response Time
                    </div>
                    <div className="mt-2 text-base text-white">Usually within 24 hours</div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                    Find Me Online
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      {
                        title: "GitHub",
                        desc: "Projects, experiments, and source code",
                        href: "https://github.com/Alitleis123",
                        external: true,
                      },
                      {
                        title: "LinkedIn",
                        desc: "Professional background and updates",
                        href: "https://www.linkedin.com/in/ali-tleis-091800247/",
                        external: true,
                      },
                      {
                        title: "Portfolio Projects",
                        desc: "Selected featured work",
                        href: "#projects",
                        external: false,
                      },
                    ].map((item) =>
                      item.external ? (
                        <a
                          key={item.title}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block rounded-xl border border-white/10 bg-black/40 px-4 py-3 transition hover:border-white/30 hover:bg-white/10"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <div className="font-medium text-white">{item.title}</div>
                              <div className="text-xs text-zinc-400">{item.desc}</div>
                            </div>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 transition group-hover:text-indigo-200">
                              Visit
                            </span>
                          </div>
                        </a>
                      ) : (
                        <a
                          key={item.title}
                          href={item.href}
                          className="group block rounded-xl border border-white/10 bg-black/40 px-4 py-3 transition hover:border-white/30 hover:bg-white/10"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <div className="font-medium text-white">{item.title}</div>
                              <div className="text-xs text-zinc-400">{item.desc}</div>
                            </div>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 transition group-hover:text-indigo-200">
                              Explore
                            </span>
                          </div>
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        {lightbox ? (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${lightbox.title} expanded preview`}
          >
            <div
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-black/60 backdrop-blur"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
                <div className="text-sm font-medium text-white/90">{lightbox.title}</div>
                <button
                  type="button"
                  onClick={() => setLightbox(null)}
                  className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:bg-white/10"
                >
                  Close (Esc)
                </button>
              </div>

              <div className="max-h-[78vh] space-y-4 overflow-auto p-4">
                {lightbox.images.map((src, index) => (
                  <img
                    key={`${src}-${index}`}
                    src={src}
                    alt={`${lightbox.title} preview ${index + 1}`}
                    className="h-auto w-full rounded-xl border border-white/10"
                  />
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
