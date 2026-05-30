"use client";

import { useState, useMemo } from "react";

export default function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [testString, setTestString] = useState("");
  const [error, setError] = useState("");

  const result = useMemo(() => {
    if (!pattern) return { highlighted: testString, matches: 0, groups: [] as string[][] };
    try {
      const regex = new RegExp(pattern, flags);
      const matches: RegExpExecArray[] = [];
      let match;
      if (flags.includes("g")) {
        while ((match = regex.exec(testString)) !== null) {
          matches.push(match);
          if (match[0].length === 0) regex.lastIndex++;
        }
      } else {
        match = regex.exec(testString);
        if (match) matches.push(match);
      }
      setError("");

      let highlighted = testString;
      const allGroups = matches.map((m) => Array.from(m));
      if (matches.length > 0) {
        const parts: { text: string; isMatch: boolean }[] = [];
        let lastIndex = 0;
        for (const m of matches) {
          if (m.index > lastIndex) parts.push({ text: testString.slice(lastIndex, m.index), isMatch: false });
          parts.push({ text: m[0], isMatch: true });
          lastIndex = m.index + m[0].length;
        }
        if (lastIndex < testString.length) parts.push({ text: testString.slice(lastIndex), isMatch: false });
        highlighted = parts.map((p) => (p.isMatch ? `<mark class="bg-yellow-500/30 text-yellow-200 rounded px-0.5">${p.text}</mark>` : p.text.replace(/</g, "&lt;"))).join("");
      } else {
        highlighted = testString.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }

      return { highlighted, matches: matches.length, groups: allGroups };
    } catch (e) {
      setError((e as Error).message);
      return { highlighted: testString.replace(/</g, "&lt;").replace(/>/g, "&gt;"), matches: 0, groups: [] };
    }
  }, [pattern, flags, testString]);

  return (
    <div className="tool-page min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-2">Regex Tester</h1>
      <p className="text-[var(--text-secondary)] mb-6">Test regular expressions with real-time match highlighting</p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
        <div className="lg:col-span-3">
          <label className="block text-sm font-medium mb-2">Pattern</label>
          <input type="text" value={pattern} onChange={(e) => setPattern(e.target.value)} placeholder="Enter regex pattern..." />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Flags</label>
          <input type="text" value={flags} onChange={(e) => setFlags(e.target.value)} placeholder="gims" className="text-center" />
        </div>
      </div>

      {error && <p className="text-red-400 text-sm mb-2">{error}</p>}

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Test String</label>
        <textarea rows={6} value={testString} onChange={(e) => setTestString(e.target.value)} placeholder="Enter text to test against..." />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Result ({result.matches} match{result.matches !== 1 ? "es" : ""})</label>
        <div
          className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg p-3 min-h-[80px] text-sm font-mono whitespace-pre-wrap break-all"
          dangerouslySetInnerHTML={{ __html: result.highlighted || '<span class="text-[var(--text-secondary)]">Matches will appear here...</span>' }}
        />
      </div>

      {result.groups.length > 0 && (
        <div>
          <label className="block text-sm font-medium mb-2">Groups</label>
          <div className="space-y-1">
            {result.groups.map((g, i) => (
              <div key={i} className="text-sm font-mono text-[var(--text-secondary)]">
                Match {i + 1}: {g.map((v, j) => (j === 0 ? v : `[${j}]=${v}`)).join(" ")}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
