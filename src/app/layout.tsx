import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Tleis · Software Engineer",
  description: "Personal portfolio of Ali Tleis — software engineer and creative technologist.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050507]`}
      >
        <header className="fixed top-0 z-50 w-full px-4">
          <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#050507]/70 px-6 py-2 backdrop-blur-xl shadow-[0_0_30px_rgba(99,102,241,0.12)]">
            <span className="text-sm font-semibold tracking-wide text-white/90">
              Ali Tleis
            </span>
            <div className="flex items-center gap-6 text-sm text-zinc-300">
              <a href="#about" className="transition hover:text-white">About</a>
              <a href="#projects" className="transition hover:text-white">Projects</a>
              <a href="#contact" className="text-sm text-zinc-300 transition hover:text-white">
                Contact
              </a>
            </div>
          </nav>
        </header>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
