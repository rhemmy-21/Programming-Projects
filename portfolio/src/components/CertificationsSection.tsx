"use client";

import { portfolioData } from "@/data/portfolioData";
import { Award, ShieldCheck, CheckCircle, Cpu, Wrench, HardDrive, Network, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { triggerConfetti } from "@/utils/confetti";

export default function CertificationsSection() {
  const cert = portfolioData.certifications[0];

  const competencies = [
    {
      title: "Computer Hardware Assembly & Disassembly",
      desc: "Component installation, PSU load testing, thermal paste application, cabling & safety standards.",
      icon: Cpu,
      gradient: "from-blue-600 to-cyan-500",
      bg: "bg-blue-50/70 border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      title: "Operating Systems & Software Installation",
      desc: "Windows & utility setup, driver installs, disk partitioning, and backup configuration.",
      icon: HardDrive,
      gradient: "from-emerald-600 to-teal-500",
      bg: "bg-emerald-50/70 border-emerald-200",
      iconColor: "text-emerald-600",
    },
    {
      title: "Local Area Networking (LAN)",
      desc: "RJ-45 UTP cable crimping, patch panel wiring, switch and router setup, IP config & testing.",
      icon: Network,
      gradient: "from-purple-600 to-indigo-500",
      bg: "bg-purple-50/70 border-purple-200",
      iconColor: "text-purple-600",
    },
    {
      title: "Diagnostic Testing & Preventative Maintenance",
      desc: "Hardware multimeter testing, software diagnostics, thermal monitoring, and error log analysis.",
      icon: Wrench,
      gradient: "from-amber-600 to-orange-500",
      bg: "bg-amber-50/70 border-amber-200",
      iconColor: "text-amber-600",
    },
  ];

  return (
    <section id="certifications" className="py-16 md:py-24 border-b border-zinc-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-3"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 animate-ping" />
          <span className="text-xs font-mono uppercase tracking-widest text-amber-600 font-bold">
            Training &amp; Certifications
          </span>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
              Verified Competencies
            </h2>
            <p className="text-sm text-zinc-600 mt-1 max-w-xl">
              Formal assessment validating practical hardware servicing, software maintenance, and networking capabilities.
            </p>
          </motion.div>
          <span className="text-xs font-mono text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full font-semibold self-start sm:self-auto shadow-sm">
            Issued {cert.year}
          </span>
        </div>

        {/* Certificate Card with golden gradient banner & interactive animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-7 sm:p-9 rounded-3xl bg-white border border-amber-200/90 shadow-xl shadow-amber-500/5 relative overflow-hidden"
        >
          {/* Subtle top rainbow/gold stripe */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500" />

          {/* Watermark badge */}
          <div className="absolute right-6 -bottom-6 opacity-5 pointer-events-none select-none text-amber-500">
            <Award className="w-64 h-64" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => triggerConfetti()}
                className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold flex items-center gap-1.5 shadow-md shadow-amber-500/20 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-amber-200" />
                Verified Competency Assessment
                <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              </motion.button>

              <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 font-semibold">
                Year: {cert.year}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-950 leading-snug mb-2">
              {cert.title}
            </h3>

            <p className="text-sm font-bold text-amber-800 mb-4 font-mono">
              Under: {cert.issuer}
            </p>

            <p className="text-sm text-zinc-700 leading-relaxed mb-8">
              {cert.details}
            </p>

            {/* Evaluated Competency Blocks */}
            <div className="pt-6 border-t border-amber-100">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-800 mb-4 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Evaluated Pillars of the Examination
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {competencies.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -4, scale: 1.01 }}
                      className={`p-4 rounded-2xl border shadow-sm flex items-start gap-3.5 transition-all cursor-pointer ${item.bg}`}
                      onClick={() => triggerConfetti()}
                    >
                      <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${item.gradient} text-white shadow-sm shrink-0`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-900 flex items-center gap-1.5">
                          <CheckCircle className={`w-3.5 h-3.5 ${item.iconColor}`} />
                          {item.title}
                        </div>
                        <p className="text-[11px] text-zinc-600 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
