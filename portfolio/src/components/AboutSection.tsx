"use client";

import { ShieldCheck, Cpu, Code2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-16 md:py-24 border-b border-zinc-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-3"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-ping" />
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold">
            About Me
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 mb-10"
        >
          Background &amp; Philosophy
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Prose */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 space-y-4 text-zinc-700 leading-relaxed text-base"
          >
            <p className="p-4 rounded-xl bg-gradient-to-r from-indigo-50/50 via-white to-blue-50/50 border border-indigo-100">
              I am <strong className="text-indigo-950 font-bold">Rhem Gelo Marbella</strong>, a college student at the{" "}
              <strong className="text-zinc-950 font-bold">Technological University of the Philippines - Manila</strong>,
              focused on computer systems, cybersecurity, software engineering, and digital design.
            </p>
            <p>
              Currently, I serve as the{" "}
              <strong className="text-indigo-600 font-bold">Cybersecurity Core Lead</strong> for the{" "}
              <strong className="text-zinc-950 font-semibold">Google Developer Group On Campus - TUP Manila</strong>. In this
              role, I help bridge the gap between foundational computer concepts and real-world defense practices,
              organizing workshops, peer learning sessions, and cybersecurity awareness campaigns.
            </p>
            <p>
              My journey is rooted in both software and hardware: from building web interfaces with HTML, JavaScript, and
              modern styling, to developing procedural logic in C, Python, and Java. My practical grounding is further
              strengthened by my certified training in <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">Computer System Servicing</span> and
              internship experience at the <span className="text-blue-700 font-semibold bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">Parañaque City Hall ICT Office</span>,
              where I managed digital file architectures and resolved technical operational issues.
            </p>
            <p>
              Beyond code and command lines, I maintain a strong multimedia toolkit — producing UI mockups in Figma, visual
              graphics with Canva and GIMP, 3D explorations in Blender, and video edits in CapCut.
            </p>
          </motion.div>

          {/* Side Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-6 rounded-2xl bg-white/90 border border-indigo-100 shadow-md shadow-indigo-500/5 backdrop-blur-sm space-y-4">
              <h3 className="text-sm font-bold text-zinc-950 uppercase tracking-wider font-mono flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                Key Focus Areas
              </h3>

              <div className="space-y-3 pt-2">
                {/* Cybersecurity */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-purple-50/70 border border-purple-200/80 transition-all cursor-pointer group"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-sm">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-purple-950 group-hover:text-purple-700 transition-colors">
                      Cybersecurity &amp; Systems
                    </h4>
                    <p className="text-xs text-purple-800/80 mt-0.5">
                      System defense, security protocols, ethical guidelines &amp; threat models.
                    </p>
                  </div>
                </motion.div>

                {/* Software */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-sky-50/70 border border-sky-200/80 transition-all cursor-pointer group"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-sm">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-sky-950 group-hover:text-sky-700 transition-colors">
                      Web &amp; Software Dev
                    </h4>
                    <p className="text-xs text-sky-800/80 mt-0.5">
                      HTML, CSS, JavaScript, C, Python, Java &amp; algorithmic foundations.
                    </p>
                  </div>
                </motion.div>

                {/* Hardware */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/80 transition-all cursor-pointer group"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-sm">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors">
                      Hardware &amp; IT Operations
                    </h4>
                    <p className="text-xs text-emerald-800/80 mt-0.5">
                      System servicing, diagnostics, database file archiving &amp; networking.
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="pt-4 border-t border-zinc-100 text-xs text-zinc-600 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">University</span>
                  <span className="font-semibold text-indigo-900 text-right">TUP - Manila (2025–Present)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Location</span>
                  <span className="font-semibold text-zinc-900 text-right">Parañaque City, PH</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Status</span>
                  <span className="font-semibold text-emerald-700 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Student &amp; Tech Lead
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
