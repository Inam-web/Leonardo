"use client";

import { useState } from "react";

export default function EmailButton({ email, label }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500); // Resets after 2.5 seconds
    });
  };

  return (
    <button 
      onClick={handleCopy} 
      className="button button--dark" 
      style={{ cursor: "pointer" }}
    >
      <span>{copied ? "Email Copied!" : label}</span>
      <span className="button-arrow" aria-hidden="true">
        {copied ? "✓" : "↗"}
      </span>
    </button>
  );
}