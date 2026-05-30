"use client";

import { useState } from "react";

function generateUUID(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

export default function UuidGenerator() {
  const [count, setCount] = useState(5);
  const [uppercase, setUppercase] = useState(false);
  const [uuids, setUuids] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const list = Array.from({ length: Math.min(count, 100) }, () => {
      const uuid = generateUUID();
      return uppercase ? uuid.toUpperCase() : uuid;
    });
    setUuids(list);
  };

  const copyAll = async () => {
    await navigator.clipboard.writeText(uuids.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="tool-page min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-2">UUID Generator</h1>
      <p className="text-[var(--text-secondary)] mb-6">Batch generate UUID v4 with one-click copy</p>

      <div className="flex flex-wrap items-end gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2">Count (1-100)</label>
          <input
            type="number"
            min={1}
            max={100}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] rounded-lg p-2 w-24"
          />
        </div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={uppercase} onChange={(e) => setUppercase(e.target.checked)} className="w-4 h-4" />
          <span className="text-sm">Uppercase</span>
        </label>
        <button onClick={generate} className="btn-primary">Generate</button>
        {uuids.length > 0 && (
          <button onClick={copyAll} className="btn-secondary">
            {copied ? "Copied!" : "Copy All"}
          </button>
        )}
      </div>

      {uuids.length > 0 && (
        <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg p-4 space-y-1">
          {uuids.map((uuid, i) => (
            <div key={i} className="font-mono text-sm text-[var(--text-secondary)]">{uuid}</div>
          ))}
        </div>
      )}
    </div>
  );
}
