"use client";

import { portfolioData } from "@/data/portfolioData";
import { Shield, Building, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { triggerConfetti } from "@/utils/confetti";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 border-b border-zinc-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-3"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 animate-ping" />
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
            Curriculars &amp; Experience
          </span>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
              Leadership &amp; Practical Experience
            </h2>
            <p className="text-sm text-zinc-600 mt-1 max-w-xl">
              Roles in developer communities, cybersecurity student leadership, and governmental IT file management.
            </p>
          </motion.div>
          <span className="text-xs font-mono text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-full font-semibold self-start sm:self-auto shadow-sm">
            3 Active Engagements
          </span>
        </div>

        {/* Timeline / Cards */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-6 before:w-0.5 before:bg-gradient-to-b before:from-indigo-400 before:via-blue-300 before:to-emerald-400 before:hidden sm:before:block">
          {portfolioData.experience.map((item, index) => {
            const isLead = item.role.includes("Lead");
            const isCityHall = item.organization.includes("City Hall");

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative sm:pl-14 group"
              >
                {/* Timeline node icon with colorful pulse */}
                <div
                  className={`hidden sm:flex absolute left-4 -translate-x-1/2 top-6 w-6 h-6 rounded-full bg-white border-2 items-center justify-center group-hover:scale-125 transition-transform shadow-md ${
                    isLead
                      ? "border-indigo-600 text-indigo-600 shadow-indigo-200"
                      : isCityHall
                      ? "border-emerald-600 text-emerald-600 shadow-emerald-200"
                      : "border-blue-500 text-blue-500 shadow-blue-200"
                  }`}
                >
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${
                      isLead
                        ? "bg-indigo-600"
                        : isCityHall
                        ? "bg-emerald-600"
                        : "bg-blue-500"
                    }`}
                  />
                </div>

                {/* Card Container with rich color accents */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className={`p-6 sm:p-7 rounded-2xl bg-white border shadow-sm transition-all relative overflow-hidden ${
                    isLead
                      ? "border-indigo-200 hover:border-indigo-400 hover:shadow-indigo-500/10 hover:shadow-xl"
                      : isCityHall
                      ? "border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-500/10 hover:shadow-xl"
                      : "border-blue-200 hover:border-blue-400 hover:shadow-blue-500/10 hover:shadow-xl"
                  }`}
                >
                  {/* Subtle top color strip */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 ${
                      isLead
                        ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                        : isCityHall
                        ? "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"
                        : "bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500"
                    }`}
                  />

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-zinc-100 text-zinc-800 font-semibold border border-zinc-200">
                          {item.period}
                        </span>

                        <span
                          className={`text-xs px-3 py-0.5 rounded-full font-semibold ${
                            isLead
                              ? "bg-indigo-100 text-indigo-800 border border-indigo-200"
                              : isCityHall
                              ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                              : "bg-blue-100 text-blue-800 border border-blue-200"
                          }`}
                        >
                          {item.type}
                        </span>

                        {item.department && (
                          <span className="text-xs text-zinc-500 font-mono">
                            • {item.department}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-zinc-950 mt-1 flex items-center gap-2">
                        {isLead ? (
                          <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
                            <Shield className="w-5 h-5" />
                          </div>
                        ) : (
                          <div
                            className={`p-1.5 rounded-lg ${
                              isCityHall
                                ? "bg-emerald-50 text-emerald-600"
                                : "bg-blue-50 text-blue-600"
                            }`}
                          >
                            <Building className="w-5 h-5" />
                          </div>
                        )}
                        {item.role}
                      </h3>

                      <h4 className="text-sm font-semibold text-zinc-700 mt-1">
                        {item.organization}
                      </h4>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-6 text-sm text-zinc-700 list-disc list-outside pl-4">
                    {item.description.map((point, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags with vibrant colors */}
                  <div className="pt-4 border-t border-zinc-100 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-zinc-400 mr-1 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-indigo-400" />
                      Key competencies:
                    </span>
                    {item.skills.map((skill, sIdx) => (
                      <motion.button
                        key={sIdx}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => triggerConfetti()}
                        className={`text-xs px-3 py-1 rounded-full font-medium transition-all ${
                          isLead
                            ? "bg-purple-50 text-purple-800 border border-purple-200/80 hover:bg-purple-100"
                            : isCityHall
                            ? "bg-emerald-50 text-emerald-800 border border-emerald-200/80 hover:bg-emerald-100"
                            : "bg-blue-50 text-blue-800 border border-blue-200/80 hover:bg-blue-100"
                        }`}
                      >
                        {skill}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
