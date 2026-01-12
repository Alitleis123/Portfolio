import type { Metadata } from "next";
import "./globals.css";
import BackgroundRings from "./components/BackgroundRings";

export const metadata: Metadata = {
  title: "Ali Tleis · Software Engineer",
  description:
    "Personal portfolio of Ali Tleis — software engineer and creative technologist.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-black text-white antialiased">
        {/* Background */}
        <BackgroundRings />

        {/* Floating translucent top bar */}
        <header className="fixed top-4 left-1/2 z-20 w-[92%] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/5 bg-black/15 backdrop-blur-md">
          <div className="flex items-center justify-between px-6 py-3">
            {/* Name */}
            <span className="text-sm font-semibold tracking-wide text-white/90">
              Ali Tleis
            </span>

            {/* Navigation */}
            <nav className="flex items-center gap-6 text-sm text-white/70">
              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main className="relative z-10 pt-28">{children}</main>
      </body>
    </html>
  );
}