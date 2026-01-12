"use client";

export default function BackgroundRings() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 opacity-40"
        viewBox="0 0 1000 1000"
        fill="none"
      >
        <circle
          cx="500"
          cy="500"
          r="280"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="2"
        />
        <circle
          cx="500"
          cy="500"
          r="360"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="2"
        />
        <circle
          cx="500"
          cy="500"
          r="440"
          stroke="rgba(255,255,255,0.025)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}