"use client";

import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, School, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function EducationSection() {
  const colorStyles = [
    {
      badge: "bg-indigo-100 text-indigo-800 border-indigo-200",
      iconBg: "bg-gradient-to-tr from-indigo-600 to-blue-600 text-white",
      cardBorder: "border-indigo-200 hover:border-indigo-400 hover:shadow-indigo-500/10",
      accent: "text-indigo-600",
    },
    {
      badge: "bg-amber-100 text-amber-800 border-amber-200",
      iconBg: "bg-gradient-to-tr from-amber-500 to-orange-500 text-white",
      cardBorder: "border-amber-200 hover:border-amber-400 hover:shadow-amber-500/10",
      accent: "text-amber-600",
    },
    {
      badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
      iconBg: "bg-gradient-to-tr from-emerald-600 to-teal-600 text-white",
      cardBorder: "border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-500/10",
      accent: "text-emerald-600",
    },
    {
      badge: "bg-purple-100 text-purple-800 border-purple-200",
      iconBg: "bg-gradient-to-tr from-purple-600 to-pink-500 text-white",
      cardBorder: "border-purple-200 hover:border-purple-400 hover:shadow-purple-500/10",
      accent: "text-purple-600",
    },
  ];

  return (
    <section id="education" className="py-16 md:py-24 border-b border-zinc-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-3"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 animate-ping" />
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold">
            Education
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
              Academic Background
            </h2>
            <p className="text-sm text-zinc-600 mt-1 max-w-xl">
              Chronological academic history spanning university computer studies and science high school education.
            </p>
          </motion.div>
          <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full font-semibold self-start sm:self-auto shadow-sm">
            College &amp; Secondary Education
          </span>
        </div>

        {/* Education Grid / Cards with rich colors and hover physics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.education.map((item, index) => {
            const isCollege = item.level === "College Education";
            const style = colorStyles[index % colorStyles.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.015 }}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between bg-white shadow-sm ${
                  style.cardBorder
                } ${isCollege ? "md:col-span-2 shadow-md" : ""}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-xs font-mono px-3 py-0.5 rounded-full font-semibold border ${style.badge}`}
                    >
                      {item.period}
                    </span>
                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider font-mono">
                      {item.level}
                    </span>
                  </div>

                  <div className="flex items-start gap-4 mt-2">
                    <div className={`p-3 rounded-xl shadow-md shrink-0 ${style.iconBg}`}>
                      {isCollege ? (
                        <GraduationCap className="w-6 h-6" />
                      ) : (
                        <School className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-zinc-950 leading-snug">
                        {item.institution}
                      </h3>
                      {item.degree && (
                        <div className={`text-sm font-semibold mt-1 ${style.accent}`}>
                          {item.degree}
                        </div>
                      )}
                    </div>
                  </div>

                  {item.notes && (
                    <p className="text-sm text-zinc-600 mt-4 leading-relaxed pl-1">
                      {item.notes}
                    </p>
                  )}
                </div>

                <div className="pt-4 mt-6 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500 font-mono">
                  <span className="font-medium text-zinc-700">
                    {isCollege ? "Undergraduate Degree" : "Secondary School"}
                  </span>
                  <span className="flex items-center gap-1 text-zinc-400">
                    <MapPin className="w-3 h-3" />
                    Philippines
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
