import React from "react";

export function AccordionTrigger({ children }: { children: React.ReactNode }) {
  return <div className="font-semibold cursor-pointer">{children}</div>;
}
export function AccordionContent({ children }: { children: React.ReactNode }) {
  return <div className="pl-2">{children}</div>;
}
