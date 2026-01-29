"use client";

import { useLayoutEffect } from "react";

export default function ScrollToTopOnLoad() {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    if (window.location.hash) {
      const { pathname, search } = window.location;
      history.replaceState(null, "", `${pathname}${search}`);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return null;
}
