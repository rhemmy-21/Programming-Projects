"use client";

import {
  Activity,
  Binary,
  Code2,
  Cpu,
  Gamepad2,
  HeartPulse,
  Landmark,
} from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Arithmetic Game Programs",
    category: "Games & Learning",
    description:
      "Two console-based arithmetic games in C and Python, with player accounts and saved scores to encourage practice and replay.",
    technologies: ["C", "Python", "File handling"],
    icon: Gamepad2,
    colors: {
      badge: "bg-blue-50 text-blue-700 border-blue-200",
      icon: "bg-blue-100 text-blue-700",
      accent: "from-blue-500 to-cyan-500",
      border: "border-blue-200 hover:border-blue-400 hover:shadow-blue-500/10",
    },
  },
  {
    title: "Boxing Game",
    category: "Interactive Game",
    description:
      "A desktop boxing game featuring a player-versus-computer match, selectable punches, animated fighters, sound effects, and separate menu and battle music.",
    technologies: ["C", "raylib", "Game loop"],
    icon: Gamepad2,
    colors: {
      badge: "bg-rose-50 text-rose-700 border-rose-200",
      icon: "bg-rose-100 text-rose-700",
      accent: "from-rose-500 to-orange-500",
      border: "border-rose-200 hover:border-rose-400 hover:shadow-rose-500/10",
    },
  },
  {
    title: "Health Sync App",
    category: "Health & Wellness",
    description:
      "A health-tracking app concept bringing activity, steps, heart rate, sleep, nutrition, and BMI tools together in one experience.",
    technologies: ["React", "TypeScript", "Health tracking"],
    icon: HeartPulse,
    colors: {
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
      icon: "bg-emerald-100 text-emerald-700",
      accent: "from-emerald-500 to-teal-500",
      border: "border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-500/10",
    },
  },
  {
    title: "Mock ATM Program",
    category: "Console Application",
    description:
      "A simulated ATM with account records and menu-driven banking flows, using a doubly linked list to manage account data.",
    technologies: ["C++", "Data structures", "File handling"],
    icon: Landmark,
    colors: {
      badge: "bg-amber-50 text-amber-700 border-amber-200",
      icon: "bg-amber-100 text-amber-700",
      accent: "from-amber-500 to-orange-500",
      border: "border-amber-200 hover:border-amber-400 hover:shadow-amber-500/10",
    },
  },
  {
    title: "Data Structures & Algorithms",
    category: "Coursework Collection",
    description:
      "A collection of C++ exercises exploring core data structures and algorithms, including student-record operations and file-backed data.",
    technologies: ["C++", "Data structures", "Algorithms"],
    icon: Binary,
    colors: {
      badge: "bg-purple-50 text-purple-700 border-purple-200",
      icon: "bg-purple-100 text-purple-700",
      accent: "from-purple-500 to-pink-500",
      border: "border-purple-200 hover:border-purple-400 hover:shadow-purple-500/10",
    },
  },
  {
    title: "Basic Assembly Language Exercises",
    category: "Low-level Programming",
    description:
      "Hands-on assembly exercises covering arithmetic, loops, arrays, strings, keyboard input, interrupts, and simple graphics.",
    technologies: ["Assembly", "x86", "Computer systems"],
    icon: Cpu,
    colors: {
      badge: "bg-zinc-100 text-zinc-700 border-zinc-300",
      icon: "bg-zinc-200 text-zinc-700",
      accent: "from-zinc-500 to-slate-500",
      border: "border-zinc-200 hover:border-zinc-400 hover:shadow-zinc-500/10",
    },
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 border-b border-zinc-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-3"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 animate-ping" />
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold">
            Selected Work
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
              Projects &amp; Coursework
            </h2>
            <p className="text-sm text-zinc-600 mt-1 max-w-xl">
              A selection of games, apps, and programming exercises built through coursework and hands-on practice.
            </p>
          </motion.div>
          <span className="text-xs font-mono text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-full font-semibold self-start sm:self-auto shadow-sm">
            {projects.length} Featured Projects
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className={`relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-xl ${project.colors.border}`}
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.colors.accent}`} />
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl ${project.colors.icon}`}>
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${project.colors.badge}`}>
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-950">{project.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed mt-2 min-h-[5rem]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="inline-flex items-center gap-1.5 text-xs text-zinc-600 bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-lg"
                    >
                      {technology === "C" || technology === "C++" || technology === "Python" ? (
                        <Code2 className="w-3 h-3" aria-hidden="true" />
                      ) : technology === "Health tracking" ? (
                        <Activity className="w-3 h-3" aria-hidden="true" />
                      ) : null}
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
