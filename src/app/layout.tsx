import type { Metadata } from "next";
import ScrollToTopOnLoad from "./components/ScrollToTopOnLoad";
import ResetAnimationsOnLoad from "./components/ResetAnimationsOnLoad";
import "./globals.css";
import BackgroundRings from "./components/BackgroundRings";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBasePath = (path: string) => `${basePath}${path}`;

export const metadata: Metadata = {
  title: "Ali Tleis · Portfolio",
  description:
    "Personal portfolio of Ali Tleis — Lebanese-American developer based in Boston.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative min-h-screen bg-black text-white antialiased">
        <ScrollToTopOnLoad />
        <ResetAnimationsOnLoad>
          {/* Background */}
          <BackgroundRings />

          {/* Floating translucent top bar */}
          <header className="fixed top-4 left-1/2 z-20 w-[92%] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/5 bg-black/20 backdrop-blur-md">
            <div className="flex items-center justify-between px-6 py-3">
              {/* Name */}
              <span className="text-sm font-semibold tracking-wide text-white/90">
                Ali Tleis
              </span>

              {/* Navigation */}
              <nav className="flex items-center gap-6 text-sm text-white/70">
                <a href="#about" className="nav-link transition hover:text-white">About</a>
                <a href="#projects" className="nav-link transition hover:text-white">Projects</a>
                <a href="#tech-stack" className="nav-link transition hover:text-white">Tech Stack</a>
                <a href="#terminal" className="nav-link transition hover:text-white">Terminal</a>
                <a href="#timeline" className="nav-link transition hover:text-white">Timeline</a>
                <a href="#resume" className="nav-link transition hover:text-white">Resume</a>
                <a href="#contact" className="nav-link transition hover:text-white">Contact</a>

                <span className="mx-1 h-4 w-px bg-white/10" />

                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/Alitleis123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/90 transition hover:bg-white/20"
                  >
                    GitHub
                  </a>

                  <a
                    href={withBasePath("/resume/resume.pdf")}
                    download
                    className="rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/90 transition hover:bg-white/20"
                  >
                    Download Resume
                  </a>
                </div>
              </nav>
            </div>
          </header>

          {/* Page content */}
          <main className="relative z-10 pt-28">{children}</main>
        </ResetAnimationsOnLoad>
      </body>
    </html>
  );
}
