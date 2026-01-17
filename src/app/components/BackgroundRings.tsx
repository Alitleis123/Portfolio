"use client";

import { motion } from "framer-motion";

export default function BackgroundRings() {
  return (
    <motion.div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="absolute inset-0 opacity-70"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="ambient-gradient" />
      </motion.div>

      <motion.div
        className="absolute -left-40 top-32 h-[520px] w-[520px] rounded-full bg-sky-500/10 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-180px] top-1/3 h-[560px] w-[560px] rounded-full bg-indigo-500/10 blur-[140px]"
        animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="edge-vignette" />

      <svg
        className="absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 opacity-40"
        viewBox="0 0 1000 1000"
        fill="none"
      >
        <motion.circle
          cx="500"
          cy="500"
          r="280"
          stroke="rgba(255,255,255,0.06)"
          animate={{ strokeWidth: [1.5, 4.5, 1.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="500"
          cy="500"
          r="360"
          stroke="rgba(255,255,255,0.04)"
          animate={{ strokeWidth: [1, 3.5, 1] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="500"
          cy="500"
          r="440"
          stroke="rgba(255,255,255,0.025)"
          animate={{ strokeWidth: [0.8, 2.8, 0.8] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
}
