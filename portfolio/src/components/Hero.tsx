"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Shield,
  Download,
  ArrowRight,
  ExternalLink,
  GraduationCap,
  Building2,
  Award,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import { triggerConfetti } from "@/utils/confetti";

export default function Hero() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string, e: React.MouseEvent) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    const rect = e.currentTarget.getBoundingClientRect();
    triggerConfetti(rect.left / window.innerWidth, rect.top / window.innerHeight);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-zinc-200/80 overflow-hidden">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-indigo-200/30 via-blue-100/20 to-purple-200/20 blur-3xl pointer-events-none -z-10" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          {/* Status & Leadership Pill with Google Developer Group Colors */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-indigo-200 shadow-sm text-zinc-800 text-xs font-medium mb-6 backdrop-blur-sm"
          >
            {/* 4 Google Colors Indicator */}
            <div className="flex items-center -space-x-0.5">
              <span className="w-2 h-2 rounded-full bg-[#4285F4] animate-pulse" />
              <span className="w-2 h-2 rounded-full bg-[#EA4335]" />
              <span className="w-2 h-2 rounded-full bg-[#FBBC05]" />
              <span className="w-2 h-2 rounded-full bg-[#34A853]" />
            </div>
            <span className="flex items-center gap-1.5 font-semibold text-zinc-900">
              <Shield className="w-3.5 h-3.5 text-indigo-600" />
              Cybersecurity Core Lead @ GDG on Campus TUP Manila
            </span>
          </motion.div>

          {/* Name & Titles with rich colorful gradient text */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4">
            <span className="bg-gradient-to-r from-zinc-950 via-indigo-900 to-blue-700 bg-clip-text text-transparent">
              Rhem Gelo Marbella
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-700 font-normal leading-relaxed mb-6">
            College student at{" "}
            <span className="font-semibold text-indigo-900 underline decoration-indigo-300 underline-offset-4">
              Technological University of the Philippines - Manila
            </span>
            . Building with code, multimedia design, computer system servicing,
            and driving cybersecurity initiatives for student developers.
          </p>

          {/* Location & Contact Meta with colored interactive copy badges */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-zinc-600 mb-8 font-mono">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50/70 text-blue-900 border border-blue-200/60">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>Parañaque City, Metro Manila</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) =>
                copyToClipboard(portfolioData.personal.email, "email", e)
              }
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-50/70 hover:bg-indigo-100 text-indigo-900 border border-indigo-200/60 transition-all group cursor-pointer"
              title="Click to copy email"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-600 group-hover:scale-110 transition-transform" />
              <span>{portfolioData.personal.email}</span>
              {copiedKey === "email" ? (
                <Check className="w-3 h-3 text-emerald-600 font-bold" />
              ) : (
                <Copy className="w-3 h-3 text-indigo-400 group-hover:text-indigo-800" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) =>
                copyToClipboard(portfolioData.personal.mobile, "mobile", e)
              }
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50/70 hover:bg-emerald-100 text-emerald-900 border border-emerald-200/60 transition-all group cursor-pointer"
              title="Click to copy phone"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600 group-hover:scale-110 transition-transform" />
              <span>{portfolioData.personal.mobile}</span>
              {copiedKey === "mobile" ? (
                <Check className="w-3 h-3 text-emerald-600 font-bold" />
              ) : (
                <Copy className="w-3 h-3 text-emerald-400 group-hover:text-emerald-800" />
              )}
            </motion.button>
          </div>

          {/* Action Buttons with rich bouncy interactions */}
          <div className="flex flex-wrap items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => triggerConfetti()}
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 text-white text-sm font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
            >
              <Sparkles className="w-4 h-4 text-indigo-200" />
              Contact Me
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-blue-200 text-blue-900 text-sm font-semibold hover:bg-blue-50/70 hover:border-blue-400 shadow-sm transition-all"
            >
              <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
              LinkedIn Profile
              <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-900 text-sm font-semibold hover:bg-zinc-50 hover:border-zinc-400 shadow-sm transition-all"
            >
              <GithubIcon className="w-4 h-4 text-zinc-900" />
              GitHub
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                triggerConfetti(0.5, 0.5);
                setTimeout(() => window.print(), 350);
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-amber-900 text-sm font-semibold hover:border-amber-400 hover:shadow-sm transition-all"
              title="Print or export CV to PDF"
            >
              <Download className="w-4 h-4 text-amber-600" />
              Resume (Print / PDF)
            </motion.button>
          </div>
        </motion.div>

        {/* Quick Highlights Grid with colorful cards & hover lift */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 pt-10 border-t border-zinc-200/80 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {/* Card 1 - Leadership */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-4 rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/50 border border-indigo-200/80 shadow-sm hover:shadow-md hover:border-indigo-400 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-600 font-semibold">
                Leadership
              </span>
              <Shield className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-sm font-bold text-zinc-950 mt-1">
              Cybersecurity Core Lead
            </div>
            <div className="text-xs text-indigo-700/80 mt-0.5 font-medium">GDG On Campus TUP</div>
          </motion.div>

          {/* Card 2 - Education */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-4 rounded-xl bg-gradient-to-br from-blue-50/80 to-cyan-50/50 border border-blue-200/80 shadow-sm hover:shadow-md hover:border-blue-400 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 font-semibold">
                Education
              </span>
              <GraduationCap className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-sm font-bold text-zinc-950 mt-1">
              TUP Manila (2025–Pres.)
            </div>
            <div className="text-xs text-blue-700/80 mt-0.5 font-medium">Undergraduate Degree</div>
          </motion.div>

          {/* Card 3 - Experience */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/80 to-teal-50/50 border border-emerald-200/80 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-600 font-semibold">
                Industry Experience
              </span>
              <Building2 className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-sm font-bold text-zinc-950 mt-1">
              Parañaque City Hall
            </div>
            <div className="text-xs text-emerald-700/80 mt-0.5 font-medium">ICT Operations Internship</div>
          </motion.div>

          {/* Card 4 - Certification */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-4 rounded-xl bg-gradient-to-br from-amber-50/80 to-yellow-50/50 border border-amber-200/80 shadow-sm hover:shadow-md hover:border-amber-400 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-600 font-semibold">
                Certification
              </span>
              <Award className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-sm font-bold text-zinc-950 mt-1">
              Computer System Servicing
            </div>
            <div className="text-xs text-amber-700/80 mt-0.5 font-medium">K-12 Competency Evaluated</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
