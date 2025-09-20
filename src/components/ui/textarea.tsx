import React from "react";
export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`border border-primary rounded px-2 py-1 ${props.className ?? ""}`} />;
}
