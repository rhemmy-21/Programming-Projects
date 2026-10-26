"use client";

import { useState, useMemo } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  LucideIcon,
  Code,
  Palette,
  FileSpreadsheet,
  Wrench,
  HeartHandshake,
  Search,
  CheckCircle2,
  SlidersHorizontal,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { triggerConfetti } from "@/utils/confetti";

type CategoryFilter = "all" | "programming" | "design" | "productivity" | "systems" | "soft";

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories: {
    key: CategoryFilter;
    label: string;
    icon: LucideIcon;
    color: string;
    activeGradient: string;
  }[] = [
    {
      key: "all",
      label: "All Skills",
      icon: SlidersHorizontal,
      color: "text-indigo-600",
      activeGradient: "from-indigo-600 to-blue-600",
    },
    {
      key: "programming",
      label: "Programming & Web",
      icon: Code,
      color: "text-blue-600",
      activeGradient: "from-blue-600 to-cyan-500",
    },
    {
      key: "design",
      label: "Multimedia & Design",
      icon: Palette,
      color: "text-fuchsia-600",
      activeGradient: "from-fuchsia-600 to-pink-500",
    },
    {
      key: "productivity",
      label: "Office & Suites",
      icon: FileSpreadsheet,
      color: "text-emerald-600",
      activeGradient: "from-emerald-600 to-teal-500",
    },
    {
      key: "systems",
      label: "Troubleshooting & Systems",
      icon: Wrench,
      color: "text-amber-600",
      activeGradient: "from-amber-600 to-orange-500",
    },
    {
      key: "soft",
      label: "Soft Skills",
      icon: HeartHandshake,
      color: "text-purple-600",
      activeGradient: "from-purple-600 to-indigo-600",
    },
  ];

  const categoryColorMap: Record<string, { badge: string; border: string; glow: string }> = {
    programming: {
      badge: "bg-blue-50 text-blue-800 border-blue-200",
      border: "border-blue-200 hover:border-blue-400 hover:shadow-blue-500/10",
      glow: "text-blue-600",
    },
    design: {
      badge: "bg-pink-50 text-pink-800 border-pink-200",
      border: "border-pink-200 hover:border-pink-400 hover:shadow-pink-500/10",
      glow: "text-pink-600",
    },
    productivity: {
      badge: "bg-emerald-50 text-emerald-800 border-emerald-200",
      border: "border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-500/10",
      glow: "text-emerald-600",
    },
    systems: {
      badge: "bg-amber-50 text-amber-800 border-amber-200",
      border: "border-amber-200 hover:border-amber-400 hover:shadow-amber-500/10",
      glow: "text-amber-600",
    },
    soft: {
      badge: "bg-purple-50 text-purple-800 border-purple-200",
      border: "border-purple-200 hover:border-purple-400 hover:shadow-purple-500/10",
      glow: "text-purple-600",
    },
  };

  const filteredSkills = useMemo(() => {
    return portfolioData.skills.filter((skill) => {
      const matchesCategory =
        selectedCategory === "all" || skill.category === selectedCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (skill.level && skill.level.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-zinc-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-3"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-ping" />
          <span className="text-xs font-mono uppercase tracking-widest text-purple-600 font-bold">
            Skills &amp; Competencies
          </span>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
              Technical &amp; Interpersonal Expertise
            </h2>
            <p className="text-sm text-zinc-600 mt-1 max-w-xl">
              Practical capabilities developed through academic coursework, community leadership, and hands-on IT practice.
            </p>
          </motion.div>
          <span className="text-xs font-mono text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-full font-semibold self-start sm:self-auto shadow-sm">
            {portfolioData.skills.length} Capabilities Documented
          </span>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
          {/* Category Tabs with colorful button animations */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.key;
              return (
                <motion.button
                  key={cat.key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl whitespace-nowrap transition-all shadow-sm ${
                    isActive
                      ? `bg-gradient-to-r ${cat.activeGradient} text-white shadow-md`
                      : "bg-white text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 border border-zinc-200"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : cat.color}`} />
                  {cat.label}
                </motion.button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-indigo-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. Python, Canva, Excel)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-white border border-indigo-100 rounded-xl pl-9 pr-3 py-2.5 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Skills Cards Grid with colorful tags and hover tilt */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const colors = categoryColorMap[skill.category] || categoryColorMap.programming;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  key={skill.name}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onClick={() => triggerConfetti()}
                  className={`p-5 rounded-2xl bg-white border shadow-sm transition-all duration-200 flex flex-col justify-between cursor-pointer group ${colors.border}`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-sm font-bold text-zinc-950 group-hover:text-indigo-600 transition-colors">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span
                          className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${colors.badge}`}
                        >
                          {skill.level}
                        </span>
                      )}
                    </div>
                    {skill.description && (
                      <p className="text-xs text-zinc-600 leading-relaxed mt-2">
                        {skill.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 mt-4 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span className="capitalize font-semibold flex items-center gap-1">
                      <span className={`w-1.5 h-1.5 rounded-full bg-current ${colors.glow}`} />
                      {skill.category}
                    </span>
                    <CheckCircle2 className={`w-4 h-4 transition-transform group-hover:scale-110 ${colors.glow}`} />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="p-8 text-center rounded-2xl bg-white border border-zinc-200 shadow-sm">
            <p className="text-sm text-zinc-500">
              No skills found matching &quot;{searchQuery}&quot;. Try adjusting your search or category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-3 text-xs font-bold text-indigo-600 underline underline-offset-4"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
