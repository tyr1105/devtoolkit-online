"use client";

import { useState } from "react";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const validateJson = () => {
    try {
      JSON.parse(input);
      setError("");
      setOutput("✅ Valid JSON");
    } catch (e) {
      setError((e as Error).message);
    }
  };

  return (
    <div className="tool-page min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-2">JSON Formatter</h1>
      <p className="text-[var(--text-secondary)] mb-6">Format, minify and validate JSON data</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Input JSON</label>
          <textarea rows={14} value={input} onChange={(e) => setInput(e.target.value)} placeholder='{"key": "value"}' />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Output</label>
          <textarea rows={14} value={output} readOnly placeholder="Output will appear here..." />
        </div>
      </div>

      {error && <p className="text-red-400 mt-2 text-sm">Error: {error}</p>}

      <div className="flex gap-2 mt-4">
        <button onClick={formatJson} className="btn-primary">Format</button>
        <button onClick={minifyJson} className="btn-primary">Minify</button>
        <button onClick={validateJson} className="btn-secondary">Validate</button>
        <button onClick={() => handleCopy(output)} className="btn-secondary" disabled={!output}>
          {copied ? "Copied!" : "Copy Output"}
        </button>
      </div>
    </div>
  );
}
