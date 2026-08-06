"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";

export default function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Tell the browser NOT to manage scroll positions automatically
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Force immediate scroll to top on path change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    // 3. Small timeout to ensure the DOM has rendered before refreshing AOS
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
      AOS.refreshHard();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}