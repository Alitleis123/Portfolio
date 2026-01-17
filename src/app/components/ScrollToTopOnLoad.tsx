"use client";

import { useEffect } from "react";

export default function ScrollToTopOnLoad() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }
      if (window.location.hash) {
        const { pathname, search } = window.location;
        history.replaceState(null, "", `${pathname}${search}`);
      }
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const behavior = prefersReduced ? "auto" : "smooth";
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior });
      });
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior });
      }, 0);
    }
  }, []);

  return null;
}
