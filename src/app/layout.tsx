import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aneej R Suku | Frontend Developer",
  description:
    "Frontend Developer specializing in React.js, Next.js, JavaScript and modern web development.",
  keywords: [
    "Aneej R Suku",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}