"use client";

import { useState } from "react";

interface DiffLine {
  type: "same" | "added" | "removed";
  content: string;
}

function computeDiff(original: string, modified: string): DiffLine[] {
  const origLines = original.split("\n");
  const modLines = modified.split("\n");
  const result: DiffLine[] = [];

  const maxLen = Math.max(origLines.length, modLines.length);
  for (let i = 0; i < maxLen; i++) {
    const oLine = i < origLines.length ? origLines[i] : undefined;
    const mLine = i < modLines.length ? modLines[i] : undefined;
    if (oLine === undefined && mLine !== undefined) {
      result.push({ type: "added", content: mLine });
    } else if (oLine !== undefined && mLine === undefined) {
      result.push({ type: "removed", content: oLine });
    } else if (oLine !== mLine) {
      result.push({ type: "removed", content: oLine! });
      result.push({ type: "added", content: mLine! });
    } else {
      result.push({ type: "same", content: oLine! });
    }
  }
  return result;
}

export default function DiffChecker() {
  const [original, setOriginal] = useState("");
  const [modified, setModified] = useState("");
  const [diff, setDiff] = useState<DiffLine[]>([]);

  const compare = () => {
    setDiff(computeDiff(original, modified));
  };

  const added = diff.filter((d) => d.type === "added").length;
  const removed = diff.filter((d) => d.type === "removed").length;

  return (
    <div className="tool-page min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-2">Diff Checker</h1>
      <p className="text-[var(--text-secondary)] mb-6">Compare two texts side by side with highlighted differences</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-2">Original</label>
          <textarea rows={10} value={original} onChange={(e) => setOriginal(e.target.value)} placeholder="Enter original text..." />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Modified</label>
          <textarea rows={10} value={modified} onChange={(e) => setModified(e.target.value)} placeholder="Enter modified text..." />
        </div>
      </div>

      <button onClick={compare} className="btn-primary mb-4">Compare</button>

      {diff.length > 0 && (
        <>
          <div className="flex gap-4 mb-3 text-sm">
            <span className="text-green-400">+ {added} added</span>
            <span className="text-red-400">- {removed} removed</span>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg overflow-hidden">
            {diff.map((line, i) => (
              <div
                key={i}
                className={`px-4 py-0.5 font-mono text-sm border-b border-[var(--border)] ${
                  line.type === "added"
                    ? "bg-green-500/10 text-green-300"
                    : line.type === "removed"
                    ? "bg-red-500/10 text-red-300"
                    : "text-[var(--text-secondary)]"
                }`}
              >
                <span className="inline-block w-6 text-right mr-3 select-none opacity-50">
                  {line.type === "added" ? "+" : line.type === "removed" ? "-" : " "}
                </span>
                {line.content}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
