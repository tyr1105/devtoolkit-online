"use client";

import { useState, useEffect } from "react";

export default function TimestampConverter() {
  const [now, setNow] = useState(Math.floor(Date.now() / 1000));
  const [tsInput, setTsInput] = useState("");
  const [tsResult, setTsResult] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [dateResult, setDateResult] = useState("");

  useEffect(() => {
    const interval = setInterval(() => setNow(Math.floor(Date.now() / 1000)), 1000);
    return () => clearInterval(interval);
  }, []);

  const convertTimestamp = () => {
    const ts = Number(tsInput);
    if (isNaN(ts)) { setTsResult("Invalid timestamp"); return; }
    const ms = ts > 1e12 ? ts : ts * 1000;
    const d = new Date(ms);
    setTsResult(`${d.toISOString()}\n${d.toLocaleString()}\n(Local: ${d.toLocaleString(undefined, { dateStyle: "full", timeStyle: "long" })})`);
  };

  const convertDate = () => {
    if (!dateInput) return;
    const d = new Date(dateInput);
    if (isNaN(d.getTime())) { setDateResult("Invalid date"); return; }
    const seconds = Math.floor(d.getTime() / 1000);
    const milliseconds = d.getTime();
    setDateResult(`Seconds: ${seconds}\nMilliseconds: ${milliseconds}`);
  };

  return (
    <div className="tool-page min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-2">Timestamp Converter</h1>
      <p className="text-[var(--text-secondary)] mb-6">Convert between Unix timestamp and date/time</p>

      <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg p-4 mb-6 text-center">
        <p className="text-sm text-[var(--text-secondary)] mb-1">Current Unix Timestamp</p>
        <p className="text-3xl font-mono font-bold text-[var(--accent)]">{now}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg p-4">
          <h2 className="font-semibold mb-3">Timestamp → Date</h2>
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              value={tsInput}
              onChange={(e) => setTsInput(e.target.value)}
              placeholder="Enter Unix timestamp..."
            />
            <button onClick={convertTimestamp} className="btn-primary shrink-0">Convert</button>
          </div>
          {tsResult && <pre className="text-sm text-[var(--text-secondary)] whitespace-pre-wrap">{tsResult}</pre>}
        </div>

        <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg p-4">
          <h2 className="font-semibold mb-3">Date → Timestamp</h2>
          <div className="flex gap-2 mb-3">
            <input
              type="datetime-local"
              value={dateInput}
              onChange={(e) => setDateInput(e.target.value)}
              className="bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] rounded-lg p-2 flex-1"
            />
            <button onClick={convertDate} className="btn-primary shrink-0">Convert</button>
          </div>
          {dateResult && <pre className="text-sm text-[var(--text-secondary)] whitespace-pre-wrap">{dateResult}</pre>}
        </div>
      </div>
    </div>
  );
}
