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
      <body className="relative text-white antialiased">
        <BackgroundRings />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}