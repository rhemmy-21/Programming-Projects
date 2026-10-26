"use client";

import { portfolioData } from "@/data/portfolioData";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import { triggerConfetti } from "@/utils/confetti";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white/80 border-t border-zinc-200/80 py-12 relative overflow-hidden backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-500 text-white flex items-center justify-center text-xs font-bold shadow-md shadow-indigo-500/20">
                RM
              </span>
              <span className="text-base font-extrabold text-zinc-950">
                Rhem Gelo Marbella
              </span>
            </div>
            <p className="text-xs text-zinc-500 mt-1 max-w-sm">
              College student at TUP Manila • GDG Cybersecurity Core Lead • Interactive Next.js Portfolio.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-zinc-600">
            <a href="#about" className="hover:text-indigo-600 transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">
              Experience
            </a>
            <a href="#education" className="hover:text-emerald-600 transition-colors">
              Education
            </a>
            <a href="#skills" className="hover:text-purple-600 transition-colors">
              Skills
            </a>
            <a href="#certifications" className="hover:text-amber-600 transition-colors">
              Certifications
            </a>
            <a href="#contact" className="hover:text-pink-600 transition-colors">
              Contact
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => {
              triggerConfetti(0.5, 0.9);
              scrollToTop();
            }}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 hover:border-indigo-400 hover:text-indigo-600 text-zinc-700 transition-all flex items-center gap-1.5 text-xs font-mono shadow-sm cursor-pointer"
            title="Scroll to top with confetti"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Rhem Gelo Marbella. Crafted with
            <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" /> in Metro Manila.
          </p>
          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 transition-colors flex items-center gap-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              GitHub
            </motion.a>
            <span>•</span>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A66C2] transition-colors flex items-center gap-1"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              LinkedIn
            </motion.a>
            <span>•</span>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={`mailto:${portfolioData.personal.email}`}
              className="hover:text-indigo-600 transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              Email
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
