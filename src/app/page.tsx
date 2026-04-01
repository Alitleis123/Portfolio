"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaMapMarkerAlt } from "react-icons/fa";

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

const SectionDivider = ({ className }: { className?: string }) => (
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
      desc: "Configured and automated workstation imaging and baseline setups to standardize deployments.",
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
      tech: [
        "Windows",
        "Linux",
        "PowerShell",
        "OS Imaging (WinPE)",
        "Azure DevOps",
        "Virtual Machines",
      ],
      testimonial: {
        quote: "A builder who cares about performance and experience.",
        author: "Robert DeFalco",
        role: "CEO, Robert DeFalco Realty",
      },
      accent: "#7c3aed",
    },
    {
      year: "2024",
      title: "Eternal Summary",
      range: "Sep 2023–Nov 2024",
      desc: "Built an MV3 Chrome extension with async backend summarization and resilient parsing.",
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
        "Built a reusable pipeline that's easy to expand to new sources.",
        "Increased reliability across diverse web content formats.",
      ],
      stats: ["User-tested", "Latency-focused", "LLM-powered"],
      tech: [
        "JavaScript (ES6+)",
        "HTML",
        "CSS",
        "Chrome Extension (MV3)",
        "Node.js/Express",
        "OpenAI API",
        "Fetch API",
      ],
      testimonial: null,
      accent: "#38bdf8",
    },
    {
      year: "2025",
      title: "Frontend Developer Intern",
      range: "Jun–Sep 2025 · Top Choice Realty",
      desc: "Delivered full-stack improvements across UI flows, data reliability, and backend integrations.",
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
      tech: ["React", "TypeScript", "MongoDB", "REST APIs", "Tailwind CSS"],
      testimonial: null,
      accent: "#6366f1",
    },
    {
      year: "2025",
      title: "Top Choice Realty Platform",
      range: "Jun–Sep 2025",
      desc: "Launched a production-ready real estate platform with authenticated APIs and schema-driven data.",
      image: withBasePath("/projects/Top%20choice%20image%201.png"),
      imageAlt: "Top Choice Realty platform preview",
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
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "REST APIs", "Tailwind CSS"],
      testimonial: null,
      accent: "#22d3ee",
    },
  ];

  const coreStack = [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
  ];

  const stackGroups = [
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
      accent: "from-indigo-400/60 via-violet-400/30 to-transparent",
    },
    {
      title: "Backend & Systems",
      items: [
        "Node.js / Express",
        "API Design",
        "Authentication (JWT)",
        "Schema Design",
      ],
      accent: "from-sky-400/60 via-cyan-400/30 to-transparent",
    },
    {
      title: "Languages",
      items: [
        "TypeScript",
        "JavaScript",
        "Python",
        "C#",
        "Java",
        "C++",
        "Lua",
        "Kotlin",
      ],
      accent: "from-emerald-400/60 via-teal-400/30 to-transparent",
    },
    {
      title: "Databases",
      items: [
        "MongoDB (Mongoose, Atlas)",
        "PostgreSQL",
        "MySQL",
      ],
      accent: "from-fuchsia-400/60 via-pink-400/30 to-transparent",
    },
    {
      title: "DevOps & Deployment",
      items: [
        "Git / GitHub",
        "Docker",
        "Azure DevOps",
        "Heroku",
        "GitHub Pages",
        "Linux",
      ],
      accent: "from-amber-400/60 via-orange-400/30 to-transparent",
    },
    {
      title: "Testing & Tooling",
      items: [
        "Jest / JUnit",
        "PowerShell",
        "OpenCV",
        "FFmpeg",
        "Arduino",
      ],
      accent: "from-rose-400/60 via-red-400/30 to-transparent",
    },
  ];

  return (
    <>
      <div className="relative min-h-screen overflow-hidden text-white">

        <section
          id="about"
          className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-10"
        >
          {/* Hero */}
          <div className="grid w-full grid-cols-1 items-center gap-16 md:grid-cols-2">
            <div className="flex flex-col">
              <motion.h1
                className="mb-5 text-[4.5rem] font-light leading-[1.05] tracking-wide"
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

              <div className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
                Lebanese‑American <span className="mx-2 opacity-40">•</span>
                Boston, MA <span className="mx-2 opacity-40">•</span>
                Northeastern &apos;28
              </div>

              <motion.p
                className="max-w-lg text-lg leading-8 text-zinc-400"
                variants={heroContainer}
                initial="hidden"
                animate="visible"
              >
                CS student at Northeastern, originally from New York.
                I care about building things that feel good to use — clean
                interfaces, solid architecture, and attention to detail.
              </motion.p>

              <div className="mt-8 flex flex-wrap items-center gap-4 pointer-events-auto">
                <a
                  href="https://www.linkedin.com/in/ali-tleis-091800247/"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
                >
                  <FaLinkedin className="text-base" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Alitleis123"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-black/30 px-6 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10"
                >
                  <FaGithub className="text-base" />
                  GitHub
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-indigo-500/25 shadow-[0_0_60px_rgba(99,102,241,0.15),0_0_120px_rgba(56,189,248,0.07)]">
                <img
                  src={withBasePath("/portrait/36B2F96D-AEC4-4C74-BA04-B7D58EE30BE0.jpg")}
                  alt="Ali Tleis portrait"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* About Details */}
          <motion.div
            className="mt-20"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Education */}
              <div className="rounded-2xl border border-white/10 bg-[#0d0f18]/90 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
                <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-indigo-400">
                  Education
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">Northeastern University</h3>
                <p className="mt-1 text-sm text-zinc-400">B.S. Computer Science · Class of 2028</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-zinc-500">
                  <FaMapMarkerAlt className="text-xs" />
                  Boston, MA
                </p>
                <div className="mt-5 h-px w-full bg-white/5" />
                <div className="mt-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">Coursework</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {["Algorithms & Data Structures", "Object-Oriented Design", "Artificial Intelligence", "Discrete Structures", "Programming in C++", "Fundamentals of CS 1 & 2"].map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-zinc-400"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 h-px w-full bg-white/5" />
                <div className="mt-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">Languages Spoken</div>
                  <div className="mt-2 flex flex-wrap gap-3 text-sm text-zinc-400">
                    <span>English <span className="text-zinc-600">· Native</span></span>
                    <span>Arabic <span className="text-zinc-600">· Native</span></span>
                  </div>
                </div>
              </div>

              {/* What I Do */}
              <div className="rounded-2xl border border-white/10 bg-[#0d0f18]/90 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
                <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-indigo-400">
                  What I Do
                </div>
                <div className="mt-4 space-y-4">
                  {[
                    { label: "Full‑Stack Development", desc: "Web apps, APIs, and interactive experiences from front to back." },
                    { label: "UI & Motion", desc: "Clean interfaces with purposeful animation using React and Framer Motion." },
                    { label: "Creative Tooling", desc: "Video editing pipelines, browser extensions, and automation scripts." },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="text-sm font-medium text-white">{item.label}</div>
                      <div className="mt-0.5 text-sm text-zinc-500">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outside of Code */}
              <div className="rounded-2xl border border-white/10 bg-[#0d0f18]/90 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
                <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-indigo-400">
                  Outside of Code
                </div>
                <div className="mt-4 space-y-4">
                  {[
                    { label: "Fitness", desc: "Consistent lifting — I like the discipline that comes with tracking progress." },
                    { label: "Video Editing", desc: "DaVinci Resolve and After Effects for personal and freelance projects." },
                    { label: "Gaming", desc: "Competitive FPS when I need to turn my brain off." },
                    { label: "Always Learning", desc: "Picking up new tools, frameworks, and ideas outside of class." },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="text-sm font-medium text-white">{item.label}</div>
                      <div className="mt-0.5 text-sm text-zinc-500">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
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

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Top Choice Realty",
                repo: "https://github.com/alitleis123/topchoicerealty",
                demo: null,
                showDemo: false,
                tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB"],
                desc:
                  "Full-stack real estate platform with authenticated workflows, schema-driven data, and reliable CRUD pipelines.",
                bullets: [
                  "Built secure auth flows and role-aware access across listings and clients.",
                  "Designed MongoDB schemas to keep listings, agents, and transactions consistent.",
                  "Shipped a maintainable API layer to support filtering and operational workflows.",
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
                  "Chrome Extensions (MV3)",
                  "Content Scripts",
                  "Node.js / Express",
                  "OpenAI API",
                ],
                desc:
                  "Chrome extension with MV3 architecture, resilient parsing, and async LLM requests for page summaries.",
                bullets: [
                  "Implemented content-script extraction with sanitization to handle messy HTML.",
                  "Queued async requests to keep responses stable under variable latency.",
                  "Integrated LLM summaries through a lightweight Node/Express API.",
                ],
                image: withBasePath("/projects/EternalSummary%20image%202.png"),
                images: [
                  withBasePath("/projects/EternalSummary%20image%202.png"),
                  withBasePath("/projects/EternalSummary%20image%201.png"),
                  withBasePath("/projects/EternalSummary%20Image%203.png"),
                  withBasePath("/projects/EternalSummary%20Image%204.png"),
                ],
              },
              {
                title: "DaVinci Resolve Smart Upscale Plugin",
                repo: "https://github.com/Alitleis123/DaVinchi-Resolve-Smart-Upscale-Plugin",
                demo: null,
                showDemo: false,
                tech: ["DaVinci Resolve", "Python", "Lua", "OpenCV", "FFmpeg"],
                desc:
                  "DaVinci Resolve plugin that rebuilds clips via detection, segmentation, and timeline reconstruction.",
                bullets: [
                  "Used motion/threshold-based frame detection to flag and segment problem frames.",
                  "Inserted markers, split clips, and reconstructed timelines programmatically.",
                  "Ran 4K upscaling and frame interpolation with OpenCV + FFmpeg.",
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
                  "Responsive React calculator with validated inputs and clear state-driven outputs.",
                bullets: [
                  "Structured input state and validation to prevent invalid calculations.",
                  "Implemented BMI and calorie logic with consistent unit handling.",
                  "Built a clean, responsive UI for quick iteration and testing.",
                ],
                image: withBasePath("/projects/CalorieCalculator.png"),
                images: [withBasePath("/projects/CalorieCalculator.png")],
              },
            ].map((project) => (
              <div
                key={project.title}
                className="project-card group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-5"
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
                  className="group relative mb-4 h-44 w-full overflow-hidden rounded-xl border border-white/10 text-left"
                  aria-label={`Expand ${project.title} preview`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/10" />
                  <div className="pointer-events-none absolute bottom-3 right-3 rounded-lg border border-white/15 bg-black/70 px-3 py-1 text-xs text-white/80">
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
              </div>
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
          <div className="mb-10 text-center">
            <h2 className="section-title text-3xl font-bold text-indigo-400">Tech Stack</h2>
            <p className="mt-3 text-sm text-zinc-400">
              The tools I reach for first, plus the wider system I'm comfortable in.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#0d0f18]/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-indigo-200/70">
                  Core Stack
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Performance-first, UI-forward, production-ready.
                </h3>
                <p className="mt-2 max-w-xl text-sm text-zinc-300">
                  Built around modern front-end systems, fast iteration, and clean handoffs from
                  design to engineering.
                </p>
              </div>
              <div className="flex flex-wrap justify-start gap-3 lg:justify-end">
                {coreStack.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stackGroups.map((group) => (
              <div
                key={group.title}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-5 shadow-[0_16px_45px_rgba(0,0,0,0.35)]"
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r ${group.accent}`}
                />
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
                  <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-300">
                    {group.title}
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-semibold text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <SectionDivider />

        {/* TIMELINE */}
        <motion.section
          id="timeline"
          className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
                        className={`relative w-full ${isOpen ? "max-w-[1100px]" : "max-w-[720px]"} rounded-2xl border border-white/10 bg-[#0d0f18]/90 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.45)] transition-all duration-300`}
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
                                    {item.testimonial ? (
                                      <blockquote className="rounded-xl border border-violet-400/20 bg-violet-400/5 p-4">
                                        <p className="text-sm italic text-violet-100/80">
                                          &ldquo;{item.testimonial.quote}&rdquo;
                                        </p>
                                        <cite className="mt-2 block text-xs not-italic text-zinc-500">
                                          — {item.testimonial.author}, {item.testimonial.role}
                                        </cite>
                                      </blockquote>
                                    ) : null}
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
        </motion.section>

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

          <div className="rounded-2xl border border-white/15 bg-[#0d0f18]/90 p-8">
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
        <motion.section
          id="contact"
          className="relative z-10 mx-auto max-w-6xl px-6 py-24"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="rounded-3xl border border-white/10 bg-[#0d0f18]/90 p-10 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
              <div>
                <h2 className="section-title text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-zinc-200 to-slate-400">
                  Let&apos;s Connect
                </h2>
                <p className="mt-5 text-lg leading-8 text-zinc-300">
                  If you&apos;d like to reach out about opportunities, projects, or anything else,
                  feel free to get in touch. I&apos;m always open to meaningful conversations and
                  new experiences.
                </p>

                <blockquote className="mt-6 border-l-2 border-indigo-500/50 pl-4">
                  <p className="text-sm italic text-zinc-400">&ldquo;Make it work, make it right, make it fast.&rdquo;</p>
                  <cite className="mt-1 block text-xs text-zinc-600 not-italic">— Kent Beck</cite>
                </blockquote>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="mailto:tleis.a@northeastern.edu"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
                  >
                    <FaEnvelope className="text-base" />
                    Email Me
                  </a>
                  <a
                    href={withBasePath("/resume/resume.pdf")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-indigo-400/40 bg-indigo-500/20 px-6 py-3 text-sm font-medium text-indigo-100 transition hover:bg-indigo-500/30"
                  >
                    <FaDownload className="text-sm" />
                    View Resume
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-black/70 via-black/40 to-black/20 p-6 shadow-[inset_0_0_30px_rgba(99,102,241,0.08)]">
                <div className="space-y-5">
                  <div>
                    <span className="block text-[11px] uppercase tracking-[0.2em] text-zinc-500">Email</span>
                    <a
                      href="mailto:tleis.a@northeastern.edu"
                      className="mt-1.5 inline-flex items-center gap-2 text-base font-medium text-white transition hover:text-indigo-200"
                    >
                      <FaEnvelope className="text-sm text-zinc-400" />
                      tleis.a@northeastern.edu
                    </a>
                  </div>

                  <div className="h-px w-full bg-white/5" />

                  <div>
                    <span className="block text-[11px] uppercase tracking-[0.2em] text-zinc-500">Location</span>
                    <p className="mt-1.5 inline-flex items-center gap-2 text-base font-medium text-white">
                      <FaMapMarkerAlt className="text-sm text-zinc-400" />
                      Boston, MA
                    </p>
                  </div>

                  <div className="h-px w-full bg-white/5" />

                  <div>
                    <span className="block text-[11px] uppercase tracking-[0.2em] text-zinc-500">Socials</span>
                    <div className="mt-3 flex gap-3">
                      <a
                        href="https://github.com/Alitleis123"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-white/60 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                      >
                        <FaGithub className="text-lg" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/ali-tleis-091800247/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-white/60 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                      >
                        <FaLinkedin className="text-lg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </motion.section>
        {lightbox ? (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${lightbox.title} expanded preview`}
          >
            <div
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-black/80"
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
