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
  title: "Partner with SWEN90009 | Software Requirements Analysis",
  description:
    "Bring a real organisational challenge to University of Melbourne software engineering students and uncover what should be built.",
  openGraph: {
    title: "Bring us a real problem | SWEN90009 Industry Partnership",
    description:
      "Partner with University of Melbourne software engineering students to uncover what should be built.",
    type: "website",
    images: [{ url: "/og.png", width: 1730, height: 907 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bring us a real problem | SWEN90009",
    description:
      "Industry partnership expressions of interest for Semester 1, 2027.",
    images: ["/og.png"],
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
