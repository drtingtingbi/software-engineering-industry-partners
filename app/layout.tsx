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
  title: "Software Engineering Industry Partnerships | SWEN90009 + SWEN90014",
  description:
    "Partner at no project fee with University of Melbourne software engineering students on requirements analysis or a substantial software project.",
  openGraph: {
    title: "Software Engineering Industry Partnerships",
    description:
      "Propose a real-world project for SWEN90009 or SWEN90014. There is no project fee for participating organisations.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Software Engineering Industry Partnerships",
    description:
      "Propose a real-world project for SWEN90009 or SWEN90014.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
