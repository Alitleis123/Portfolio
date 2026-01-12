import type { Metadata } from "next";
import "./globals.css";
import CanvasBackground from "./components/CanvasBackground";

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
      <body className="relative bg-[#050507] text-white antialiased">
        {/* Canvas / animated background */}
        <CanvasBackground />

        {/* Page content */}
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
