"use client";

import { motion, type Variants } from "framer-motion";
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

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const withBasePath = (path: string) => `${basePath}${path}`;

  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  const [lightbox, setLightbox] = useState<null | { images: string[]; title: string }>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
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
              <h1 className="mb-6 text-[4.5rem] font-light leading-tight tracking-wide">
                Ali<br />Tleis
              </h1>
              <div className="mb-5 whitespace-nowrap text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
                Lebanese‑American <span className="mx-2 opacity-40">•</span>
                Boston, MA <span className="mx-2 opacity-40">•</span>
                Northeastern ’28
              </div>

              <p className="max-w-md text-lg text-zinc-400">
                Computer Science student focused on building clean, scalable applications,
                with a strong interest in expressive UI, motion design, and creative tooling.
              </p>

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
            Selected Projects
          </h2>

          <p className="mb-12 max-w-2xl text-lg text-zinc-300">
            A curated selection of projects focused on clean architecture,
            expressive UI, and thoughtful interaction.
          </p>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
                image: withBasePath("/file.svg"),
                images: [
                  withBasePath("/file.svg"),
                  withBasePath("/window.svg"),
                  withBasePath("/globe.svg"),
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
                className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 backdrop-blur-xl"
                whileHover={{ y: -8, boxShadow: "0 0 40px rgba(99,102,241,0.25)" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
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
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/15" />
                  <div className="pointer-events-none absolute bottom-3 right-3 rounded-lg border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/80 backdrop-blur">
                    Click to expand
                  </div>
                </button>

                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>

                <p className="mb-4 text-sm text-zinc-300">{project.desc}</p>

                <div className="mb-5 flex flex-wrap gap-2">
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

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl bg-indigo-500/90 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-500"
                    >
                      Live Demo
                    </a>
                  ) : project.showDemo ? (
                    <span className="inline-flex cursor-not-allowed items-center justify-center rounded-xl bg-indigo-500/40 px-5 py-3 text-sm font-medium text-white/60">
                      Live Demo
                    </span>
                  ) : null}

                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
                    >
                      View on GitHub
                    </a>
                  ) : (
                    <span className="inline-flex cursor-not-allowed items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/50">
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
                title: "Frontend",
                items: [
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer Motion",
                ],
              },
              {
                title: "Backend",
                items: [
                  "Node.js",
                  "Express.js",
                  "REST APIs",
                  "JWT Authentication",
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
                  "JavaScript",
                  "TypeScript",
                ],
              },
              {
                title: "AI Systems",
                items: [
                  "OpenAI API",
                  "Prompt Engineering",
                  "AI Summarization Pipelines",
                ],
              },
              {
                title: "Databases",
                items: [
                  "PostgreSQL",
                  "Relational Data Modeling",
                ],
              },
              {
                title: "Tools",
                items: [
                  "Git / GitHub",
                  "Docker",
                  "Linux",
                  "JWT",
                  "Heroku"
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

          {/* Desktop timeline */}
          <div className="relative mx-auto hidden max-w-6xl md:block">
            <div className="absolute left-0 right-0 top-1/2 h-2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-500/70 via-indigo-500/70 to-sky-400/70 shadow-[0_0_30px_rgba(99,102,241,0.35)]" />
            <div className="relative grid grid-cols-4 gap-6">
              {[
                {
                  year: "2023",
                  title: "Computer Technician Intern",
                  range: "Jun–Sep 2023 · Robert DeFalco Realty",
                  desc: "Cut onboarding time and improved IT reliability across office operations.",
                  accent: "#7c3aed",
                },
                {
                  year: "2024",
                  title: "Eternal Summary",
                  range: "Sep 2023–Nov 2024",
                  desc: "Built an AI summarizer extension for faster reading and recall.",
                  accent: "#38bdf8",
                },
                {
                  year: "2025",
                  title: "FrontEnd Developer Intern",
                  range: "Jun–Sep 2025 · Top Choice Realty",
                  desc: "Shipped UX fixes and new UI flows, reducing client task time.",
                  accent: "#6366f1",
                },
                {
                  year: "2025",
                  title: "Top Choice Realty",
                  range: "Jun–Sep 2025",
                  desc: "Built a real estate platform with secure listings and workflows.",
                  accent: "#22d3ee",
                },
              ].map((item, index) => {
                const isTop = index % 2 === 0;
                const cardShift =
                  index === 0
                    ? "translate-x-[-40%]"
                    : index === 3
                      ? "translate-x-[-60%]"
                      : "-translate-x-1/2";
                return (
                  <div key={`${item.year}-${item.title}`} className="relative min-h-[320px]">
                    <div
                      className={`absolute left-1/2 ${cardShift} ${isTop ? "top-1/2 -translate-y-[calc(100%+60px)]" : "top-1/2 translate-y-[60px]"} w-[230px] rounded-2xl border border-white/10 bg-black/70 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.35)]`}
                    >
                      <div className="text-sm font-semibold text-white">{item.title}</div>
                      <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-violet-200/70">
                        {item.range}
                      </div>
                      <p className="mt-3 text-xs text-zinc-300">{item.desc}</p>
                    </div>
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 ${isTop ? "top-1/2 -translate-y-[60px]" : "top-1/2"} h-[60px] w-px`}
                      style={{ backgroundColor: item.accent }}
                    />
                    <div
                      className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] bg-[#070910]"
                      style={{ borderColor: item.accent }}
                    >
                      <span
                        className="text-xs font-semibold tracking-[0.2em]"
                        style={{ color: item.accent }}
                      >
                        {item.year}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="space-y-6 md:hidden">
            {[
              {
                year: "2023",
                title: "Computer Technician Intern",
                range: "Jun–Sep 2023 · Robert DeFalco Realty",
                desc: "Cut onboarding time and improved IT reliability across office operations.",
                accent: "#7c3aed",
              },
              {
                year: "2024",
                title: "FrontEnd Developer Intern",
                range: "Apr–Aug 2024 · Top Choice Realty",
                desc: "Shipped UX fixes and new UI flows, reducing client task time.",
                accent: "#6366f1",
              },
              {
                year: "2024",
                title: "Eternal Summary",
                range: "Sep 2023–Nov 2024",
                desc: "Built an AI summarizer extension for faster reading and recall.",
                accent: "#38bdf8",
              },
              {
                year: "2025",
                title: "Top Choice Realty",
                range: "Jun 2025–Present",
                desc: "Launching a real estate platform with secure listings and workflows.",
                accent: "#22d3ee",
              },
            ].map((item) => (
              <div
                key={`${item.year}-${item.title}`}
                className="rounded-2xl border border-white/10 bg-black/60 p-5"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border-[2px] text-xs font-semibold tracking-[0.2em]"
                    style={{ borderColor: item.accent, color: item.accent }}
                  >
                    {item.year}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white">{item.title}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-violet-200/70">
                      {item.range}
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-xs text-zinc-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

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

        {/* CONTACT */}
        <section
          id="contact"
          className="relative z-10 mx-auto max-w-6xl px-6 py-24"
        >
          <div className="mx-auto mb-12 max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/[0.03] to-transparent p-6 text-center">
            <p className="text-sm text-zinc-300">
              “Ali brings a rare mix of technical clarity and design intuition — a builder who
              cares about both performance and experience.”
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
              Robert DeFalco · CEO
            </p>
          </div>

          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="section-title mb-6 text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-zinc-400 to-slate-400">
              Let's Connect
            </h2>

            <p className="text-lg leading-8 text-zinc-300">
              If you’d like to reach out about opportunities, projects, or anything else,
              feel free to get in touch. I’m always open to meaningful conversations and
              new experiences.
              <br />
              <span className="text-zinc-400">
                Actively seeking software engineering co-ops and internships
              </span>
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {/* CONTACT INFO */}
            <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 backdrop-blur-xl">
              <h3 className="mb-6 text-xl font-semibold">Get in Touch</h3>

              <div className="space-y-6">
                <div>
                  <span className="block text-xs uppercase tracking-widest text-zinc-400">
                    School Email
                  </span>
                  <p className="mt-1 text-lg font-medium text-white">
                    tleis.a@northeastern.edu
                  </p>
                </div>

                <div>
                  <span className="block text-xs uppercase tracking-widest text-zinc-400">
                    Personal Email
                  </span>
                  <p className="mt-1 text-lg font-medium text-white">
                    alitleis0731@gmail.com
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-zinc-400">
                      Location
                    </span>
                    <p className="mt-1 text-base text-zinc-300">
                      Boston, MA
                    </p>
                  </div>

                  <div>
                    <span className="block text-xs uppercase tracking-widest text-zinc-400">
                      Phone
                    </span>
                    <p className="mt-1 text-base text-zinc-300">
                      347‑513‑4098
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* LINKS */}
            <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 backdrop-blur-xl">
              <h3 className="mb-6 text-xl font-semibold">Find Me Online</h3>

              <div className="space-y-4">
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
                      className="block rounded-xl border border-white/10 bg-black/30 px-5 py-4 transition hover:bg-white/10"
                    >
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-zinc-400">{item.desc}</div>
                    </a>
                  ) : (
                    <a
                      key={item.title}
                      href={item.href}
                      className="block rounded-xl border border-white/10 bg-black/30 px-5 py-4 transition hover:bg-white/10"
                    >
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-zinc-400">{item.desc}</div>
                    </a>
                  )
                )}
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
