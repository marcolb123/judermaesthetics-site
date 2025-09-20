import React from "react";
export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`bg-primary-50 rounded-xl shadow p-4 ${className ?? ""}`}>{children}</div>;
}
export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="mb-2">{children}</div>;
}
export function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`font-semibold ${className ?? ""}`}>{children}</div>;
}
export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}
export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}
