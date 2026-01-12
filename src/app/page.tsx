"use client";

import { motion, type Variants } from "framer-motion";
import BackgroundRings from "./components/BackgroundRings";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden text-white">
        <BackgroundRings />

        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -right-40 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-500/20 via-sky-500/10 to-transparent blur-[120px]" />
          <div className="absolute -left-40 top-1/3 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-gradient-to-br from-slate-700/30 via-slate-800/20 to-transparent blur-[140px]" />
        </div>

        <section className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-start pt-28 px-10">
          <div className="grid w-full grid-cols-1 items-center gap-20 md:grid-cols-2">

            {/* LEFT — NAME */}
            <div className="flex flex-col">
              <h1 className="mb-6 text-[4.5rem] font-light leading-tight tracking-wide">
                Ali<br />Tleis
              </h1>

              <p className="max-w-md text-lg text-zinc-400">
                Software Engineer<br />
                Creative Technologist
              </p>

              <div className="mt-10 h-px w-24 bg-gradient-to-r from-zinc-500 to-transparent" />
            </div>

            {/* RIGHT — IMAGE + INTRO */}
            <div className="flex justify-end">
              <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6">
                <div className="mb-6 h-64 w-full rounded-xl bg-black/40 flex items-center justify-center text-zinc-500">
                  Portrait image
                </div>

                <p className="text-sm leading-7 text-zinc-400">
                  Computer science student with a strong interest in software engineering,
                  focused on clean architecture, thoughtful UI, and motion‑driven design.
                </p>
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
          <h2 className="mb-12 text-3xl font-bold">Projects</h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 backdrop-blur-xl"
                whileHover={{ y: -8, boxShadow: "0 0 40px rgba(99,102,241,0.25)" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {/* slideshow placeholder */}
                <div className="mb-4 h-44 w-full rounded-xl bg-gradient-to-br from-indigo-500/30 via-zinc-500/20 to-slate-500/20" />

                <h3 className="mb-2 text-xl font-semibold">Project {i}</h3>

                <p className="mb-4 text-sm text-zinc-300">
                  A longer description explaining what this project does, the problem it solves,
                  and why it’s interesting.
                </p>

                <ul className="list-disc space-y-1 pl-4 text-sm text-zinc-400">
                  <li>Main feature or idea</li>
                  <li>How the user interacts with it</li>
                  <li>What makes it unique</li>
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* TECH STACK */}
        <motion.section
          id="tech-stack"
          className="relative z-10 mx-auto max-w-5xl px-6 py-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="mb-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
            <h2 className="text-3xl font-bold text-indigo-400">Tech Stack</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-400/40 to-transparent" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Frontend",
                items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
              },
              {
                title: "Backend",
                items: ["Node.js", "Express", "REST APIs"],
              },
              {
                title: "Languages",
                items: ["Java", "Python", "C++", "JavaScript"],
              },
              {
                title: "Tools",
                items: ["Git", "GitHub", "VS Code", "npm"],
              },
              {
                title: "Design",
                items: ["UI/UX Design", "Motion Design", "Responsive Layouts"],
              },
              {
                title: "Foundations",
                items: ["Data Structures", "Object-Oriented Design"],
              },
            ].map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 backdrop-blur-xl"
              >
                <h3 className="mb-4 text-lg font-semibold">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* RESUME */}
        <motion.section
          id="resume"
          className="relative z-10 mx-auto max-w-5xl px-6 py-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-indigo-400">Resume</h2>
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
                  Software Engineering · Computer Science
                </p>
              </div>

              <a
                href="/resume.pdf"
                className="inline-flex items-center justify-center rounded-xl bg-indigo-500/90 px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-500"
              >
                Download PDF
              </a>
            </div>

            {/* Resume preview placeholder */}
            <div className="h-[480px] w-full rounded-xl bg-black/40 flex items-center justify-center text-zinc-400">
              Resume preview placeholder (PDF iframe goes here)
            </div>
          </div>
        </motion.section>

        {/* CONTACT */}
        <section
          id="connect"
          className="relative z-10 mx-auto max-w-6xl px-6 py-24"
        >
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-zinc-400 to-slate-400">
              Contact Me
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

              <ul className="space-y-4 text-zinc-300">
                <li>
                  <span className="block text-sm text-zinc-400">Primary Email</span>
                  your.email@northeastern.edu
                </li>
                <li>
                  <span className="block text-sm text-zinc-400">Personal Email</span>
                  yourname@gmail.com
                </li>
                <li>
                  <span className="block text-sm text-zinc-400">Location</span>
                  Boston, MA
                </li>
              </ul>
            </div>

            {/* LINKS */}
            <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 backdrop-blur-xl">
              <h3 className="mb-6 text-xl font-semibold">Find Me Online</h3>

              <div className="space-y-4">
                {[
                  {
                    title: "GitHub",
                    desc: "Projects, experiments, and source code",
                  },
                  {
                    title: "LinkedIn",
                    desc: "Professional background and updates",
                  },
                  {
                    title: "Portfolio Projects",
                    desc: "Selected featured work",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 transition hover:bg-white/10"
                  >
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-zinc-400">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
