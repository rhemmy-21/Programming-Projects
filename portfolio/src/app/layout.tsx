import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rhem Gelo Marbella | Portfolio",
  description: "Personal portfolio of Rhem Gelo Marbella — Computer Science student, Cybersecurity Core Lead at GDG on Campus TUP Manila, developer and designer.",
  keywords: [
    "Rhem Gelo Marbella",
    "Portfolio",
    "GDG on Campus",
    "TUP Manila",
    "Cybersecurity Core Lead",
    "Web Developer",
    "Tailwind CSS",
    "Next.js"
  ],
  authors: [{ name: "Rhem Gelo Marbella" }],
  creator: "Rhem Gelo Marbella",
  openGraph: {
    title: "Rhem Gelo Marbella | Portfolio",
    description: "Minimalist portfolio featuring education, technical leadership, development skills, and certifications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-[#FAFAFA] text-zinc-900 selection:bg-zinc-900 selection:text-white min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
