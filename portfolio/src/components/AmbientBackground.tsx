"use client";

import { motion } from "framer-motion";

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Top Left Indigo / Blue Orb */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-300/35 to-indigo-300/30 blur-3xl"
      />

      {/* Top Right Cyan / Sky Orb */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -right-32 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-cyan-300/25 to-teal-200/20 blur-3xl"
      />

      {/* Center Purple / Rose Orb */}
      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, 45, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-2/3 -left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-purple-300/25 to-pink-200/20 blur-3xl"
      />

      {/* Bottom Amber / Orange Glow */}
      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, -25, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gradient-to-tl from-amber-200/25 to-orange-200/20 blur-3xl"
      />

      {/* Subtle architectural grid layer */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
    </div>
  );
}
