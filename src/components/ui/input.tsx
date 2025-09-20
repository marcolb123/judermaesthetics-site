import React from "react";
export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`border border-primary rounded px-2 py-1 ${props.className ?? ""}`} />;
}
