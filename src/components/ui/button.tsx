import React from "react";
export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={`px-4 py-2 bg-primary text-white rounded ${props.className ?? ""}`}>{children}</button>;
}
