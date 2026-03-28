import type { Metadata } from "next";
import ResetAnimationsOnLoad from "./components/ResetAnimationsOnLoad";
import "./globals.css";
import BackgroundRings from "./components/BackgroundRings";
import NavBar from "./components/NavBar";


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
      <head>
      </head>
      <body className="relative min-h-screen bg-black text-white antialiased">
        <ResetAnimationsOnLoad>
          {/* Background */}
          <BackgroundRings />

          {/* Floating translucent top bar */}
          <header className="fixed top-4 left-1/2 z-20 w-[92%] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/5 bg-black/20 backdrop-blur-md">
            <div className="relative flex items-center justify-between px-6 py-3">
              <span className="text-sm font-semibold tracking-wide text-white/90">
                Ali Tleis
              </span>
              <NavBar />
            </div>
          </header>

          {/* Page content */}
          <main className="relative z-10 pt-28">{children}</main>
        </ResetAnimationsOnLoad>
      </body>
    </html>
  );
}
