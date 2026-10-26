"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { Menu, X, Printer, ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { motion, AnimatePresence } from "framer-motion";
import { triggerConfetti } from "@/utils/confetti";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "experience", "projects", "education", "skills", "certifications", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Certifications", href: "#certifications", id: "certifications" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handlePrint = () => {
    triggerConfetti(0.9, 0.1);
    setTimeout(() => window.print(), 300);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-indigo-100/80 shadow-[0_4px_20px_-4px_rgba(99,102,241,0.06)]"
          : "bg-white/40 backdrop-blur-sm border-b border-zinc-200/50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo with colorful gradient */}
        <Link
          href="#"
          className="group flex items-center gap-2.5 font-medium tracking-tight text-zinc-900 transition-colors"
        >
          <motion.span
            whileHover={{ rotate: 10, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-lg bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-500 text-white flex items-center justify-center text-xs font-bold tracking-wider shadow-md shadow-indigo-500/20"
          >
            RM
          </motion.span>
          <div className="flex flex-col">
            <span className="text-sm font-bold leading-none text-zinc-950 group-hover:text-indigo-600 transition-colors">
              Rhem Gelo Marbella
            </span>
            <span className="text-[11px] text-zinc-500 font-mono tracking-tight mt-0.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Portfolio &amp; GDG Lead
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links with animated active pill */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-100/70 p-1 rounded-full border border-zinc-200/60 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors ${
                  isActive ? "text-indigo-900 font-semibold" : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white rounded-full shadow-sm border border-indigo-100"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Action Icons & CTA */}
        <div className="hidden sm:flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrint}
            title="Print or Save PDF"
            className="p-2 text-zinc-600 hover:text-indigo-600 hover:bg-indigo-50/70 rounded-full transition-colors"
          >
            <Printer className="w-4 h-4" />
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="p-2 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 rounded-full transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="p-2 text-zinc-600 hover:text-[#0A66C2] hover:bg-blue-50/70 rounded-full transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => triggerConfetti(0.85, 0.1)}
            href="#contact"
            className="ml-1 inline-flex items-center gap-1.5 text-xs font-semibold bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 text-white px-4 py-2 rounded-full shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Get in touch
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={handlePrint}
            title="Print or Save PDF"
            className="p-2 text-zinc-600 hover:text-indigo-600 hover:bg-zinc-100 rounded-md transition-colors"
          >
            <Printer className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 rounded-md"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden border-b border-zinc-200 bg-white/95 backdrop-blur-md px-4 pt-2 pb-6 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-1 py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                    activeSection === link.id
                      ? "bg-indigo-50 text-indigo-700 font-semibold"
                      : "text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-zinc-700 hover:text-zinc-950"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-[#0A66C2]"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>

              <a
                href="#contact"
                onClick={() => {
                  setMobileMenuOpen(false);
                  triggerConfetti();
                }}
                className="text-xs font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-3.5 py-1.5 rounded-full shadow-sm"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
