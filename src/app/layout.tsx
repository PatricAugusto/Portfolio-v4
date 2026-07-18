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
  title: "Portfolio | Desenvolvedor Web Full Stack",
  description:
    "Desenvolvedor web especializado em aplicações escaláveis com Next.js, React, Node.js, Express, SQL e integração com IA.",
  keywords: [
    "desenvolvedor web",
    "Next.js",
    "React",
    "Node.js",
    "Express",
    "SQL",
    "IA",
    "full stack",
  ],
  authors: [{ name: "Desenvolvedor Web" }],
  openGraph: {
    title: "Portfolio | Desenvolvedor Web Full Stack",
    description:
      "Construindo experiências web escaláveis com arquitetura moderna e inteligência artificial.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
