import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CEFR AutoChecker - Automated Answer Sheet Grading",
  description:
    "Automatically check CEFR listening and reading answer sheets by uploading images. AI-powered grading with instant results.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
