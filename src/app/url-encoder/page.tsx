"use client";

import { useState } from "react";

export default function UrlEncoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const encode = () => {
    try {
      setOutput(encodeURIComponent(input));
      setError("");
    } catch {
      setError("Failed to encode input");
    }
  };

  const decode = () => {
    try {
      setOutput(decodeURIComponent(input));
      setError("");
    } catch {
      setError("Failed to decode input. Make sure it is valid encoded URL.");
    }
  };

  return (
    <div className="tool-page min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-2">URL Encoder / Decoder</h1>
      <p className="text-[var(--text-secondary)] mb-6">Encode and decode URLs with encodeURIComponent support</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Input</label>
          <textarea rows={12} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter URL or encoded string..." />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Output</label>
          <textarea rows={12} value={output} readOnly placeholder="Result will appear here..." />
        </div>
      </div>

      {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}

      <div className="flex gap-2 mt-4">
        <button onClick={encode} className="btn-primary">Encode</button>
        <button onClick={decode} className="btn-primary">Decode</button>
        <button onClick={() => handleCopy(output)} className="btn-secondary" disabled={!output}>
          {copied ? "Copied!" : "Copy Output"}
        </button>
      </div>
    </div>
  );
}
