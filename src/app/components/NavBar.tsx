"use client";

import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

const NAV_SECTIONS = [
  { id: "about",      label: "About" },
  { id: "projects",   label: "Projects" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "timeline",   label: "Timeline" },
  { id: "resume",     label: "Resume" },
  { id: "contact",    label: "Contact" },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function NavBar() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="hidden md:flex items-center gap-5 text-sm text-white/60">
        {NAV_SECTIONS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`relative transition-colors duration-200 ${
              active === id
                ? "text-white nav-link-active"
                : "hover:text-white/90"
            }`}
          >
            {label}
          </a>
        ))}

        <span className="mx-1 h-4 w-px bg-white/10" />

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Alitleis123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-white/90 transition hover:bg-white/20"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href={`${basePath}/resume/resume.pdf`}
            download
            className="rounded-full bg-white/10 px-4 py-1.5 text-white/90 transition hover:bg-white/20"
          >
            Download Resume
          </a>
        </div>
      </nav>

      <button
        type="button"
        className="md:hidden flex flex-col justify-center gap-[5px] p-2"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle navigation menu"
      >
        <span className={`block h-[2px] w-5 bg-white/80 origin-center transition-all duration-200 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
        <span className={`block h-[2px] w-5 bg-white/80 transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block h-[2px] w-5 bg-white/80 origin-center transition-all duration-200 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
      </button>

      {menuOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl border border-white/10 bg-black/95 p-4 flex flex-col gap-1 text-sm md:hidden z-50">
          {NAV_SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className={`rounded-xl px-4 py-2.5 transition ${
                active === id
                  ? "bg-white/10 text-white font-medium"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
          <div className="mt-3 border-t border-white/10 pt-3 flex flex-col gap-2">
            <a
              href="https://github.com/Alitleis123"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-white/90 transition hover:bg-white/20"
            >
              <FaGithub />
              GitHub
            </a>
            <a
              href={`${basePath}/resume/resume.pdf`}
              download
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-white/10 px-4 py-2.5 text-center text-white/90 transition hover:bg-white/20"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
}
