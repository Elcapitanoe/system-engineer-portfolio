"use client";

import { useEffect, useState } from "react";

function fmt(d: Date) {
  // Force consistent formatting; adjust to your locale if needed.
  return d.toLocaleTimeString("en-GB", {
    hour12: false,
    timeZone: "Asia/Jakarta",
  });
}

export default function Clock() {
  const [now, setNow] = useState<Date | null>(null);

  // Render nothing on first SSR/paint; fill in after mount to avoid mismatch.
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) return null;
  return <span className="text-slate-400 font-mono">{fmt(now)}</span>;
}
