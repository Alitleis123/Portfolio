"use client";

import { motion, type Variants } from "framer-motion";

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
      <div className="relative min-h-screen -mt-32 pt-32 overflow-hidden bg-[#050507] text-white">

        {/* BACKGROUND GRADIENT (extended to avoid top band) */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-[900px] left-1/2 h-[1600px] w-[1600px] -translate-x-1/2 rounded-full bg-indigo-500/25 blur-[240px]" />
          <div className="absolute top-[15%] right-[-500px] h-[1000px] w-[1000px] rounded-full bg-fuchsia-500/20 blur-[200px]" />
          <div className="absolute bottom-[-500px] left-[-400px] h-[1000px] w-[1000px] rounded-full bg-cyan-500/20 blur-[220px]" />
        </div>

        {/* HERO */}
        <section className="relative z-10 flex min-h-[50vh] flex-col items-center justify-center px-6 text-center max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl"
          >
            Ali Tleis
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-10 max-w-xl text-lg text-zinc-300 sm:text-xl"
          >
            Software Engineer · Creative Technologist
          </motion.p>
        </section>

        {/* ABOUT */}
        <motion.section
          id="about"
          className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 pt-16 pb-24 md:grid-cols-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* LEFT: IMAGE + NAME */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative h-[280px] w-[280px] rounded-2xl bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-cyan-500/20 p-1">
              <div className="h-full w-full rounded-xl bg-black/40" />
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold">Ali Tleis</h3>
              <p className="text-sm text-zinc-400">Software Engineer · CS Student</p>
            </div>
          </div>

          {/* RIGHT: ABOUT CONTENT */}
          <div>
            <h2 className="mb-6 text-3xl font-bold text-indigo-400">About Me</h2>

            <p className="mb-6 text-lg leading-8 text-zinc-300">
              I’m a computer science student with a strong interest in software engineering,
              focused on building clean, scalable, and visually polished applications.
              I enjoy working across the stack and care deeply about structure, motion,
              and thoughtful user experience.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Full-stack development focus",
                "Design-first engineering mindset",
                "Strong interest in UI motion & polish",
                "Experience with real-world projects",
                "Comfortable working independently or in teams",
                "Actively preparing for software co-op roles",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          className="relative z-10 mx-auto max-w-6xl px-6 py-32"
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
                <div className="mb-4 h-44 w-full rounded-xl bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-cyan-500/20" />

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
          className="relative z-10 mx-auto max-w-5xl px-6 py-32"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="mb-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
            <h2 className="text-3xl font-bold text-indigo-400">Tech Stack</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-fuchsia-400/40 to-transparent" />
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
          className="relative z-10 mx-auto max-w-5xl px-6 py-28"
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
          className="relative z-10 mx-auto max-w-6xl px-6 py-36"
        >
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400">
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
