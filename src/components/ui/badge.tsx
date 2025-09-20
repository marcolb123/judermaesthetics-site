import React from "react";
export function Badge({ children, className, variant }: { children: React.ReactNode; className?: string; variant?: string }) {
  const base = "inline-block px-3 py-1 rounded-full text-xs font-semibold";
  const color = variant === "secondary"
    ? "bg-primary text-white"
    : "bg-primary/20 text-primary";
  return <span className={`${base} ${color} ${className ?? ""}`}>{children}</span>;
}
