"use client";

import { useState } from "react";

function base64UrlDecode(str: string): string {
  let base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  const pad = base64.length % 4;
  if (pad) base64 += "=".repeat(4 - pad);
  return atob(base64);
}

export default function JwtDecoder() {
  const [input, setInput] = useState("");
  const [header, setHeader] = useState("");
  const [payload, setPayload] = useState("");
  const [expired, setExpired] = useState<string | null>(null);
  const [error, setError] = useState("");

  const decode = () => {
    try {
      const parts = input.trim().split(".");
      if (parts.length !== 3) {
        setError("Invalid JWT format. Must have 3 parts separated by dots.");
        return;
      }
      const headerObj = JSON.parse(base64UrlDecode(parts[0]));
      const payloadObj = JSON.parse(base64UrlDecode(parts[1]));
      setHeader(JSON.stringify(headerObj, null, 2));
      setPayload(JSON.stringify(payloadObj, null, 2));
      setError("");

      if (payloadObj.exp) {
        const expDate = new Date(payloadObj.exp * 1000);
        const isExpired = Date.now() > expDate.getTime();
        setExpired(isExpired ? `Expired on ${expDate.toLocaleString()}` : `Expires on ${expDate.toLocaleString()}`);
      } else {
        setExpired("No expiration claim");
      }
    } catch {
      setError("Failed to decode JWT. Make sure it is a valid token.");
      setHeader("");
      setPayload("");
      setExpired(null);
    }
  };

  return (
    <div className="tool-page min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-2">JWT Decoder</h1>
      <p className="text-[var(--text-secondary)] mb-6">Decode and inspect JWT tokens</p>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">JWT Token</label>
        <textarea rows={4} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Paste your JWT token here..." />
      </div>

      <button onClick={decode} className="btn-primary mb-4">Decode Token</button>

      {error && <p className="text-red-400 mb-4 text-sm">{error}</p>}

      {header && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg p-4">
            <h2 className="font-semibold mb-2">Header</h2>
            <pre className="text-sm text-[var(--text-secondary)] overflow-auto whitespace-pre-wrap">{header}</pre>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg p-4">
            <h2 className="font-semibold mb-2">Payload</h2>
            <pre className="text-sm text-[var(--text-secondary)] overflow-auto whitespace-pre-wrap">{payload}</pre>
          </div>
        </div>
      )}

      {expired !== null && (
        <div className={`mt-4 p-3 rounded-lg border ${expired.startsWith("Expired") ? "border-red-500 bg-red-500/10 text-red-400" : "border-green-500 bg-green-500/10 text-green-400"}`}>
          {expired}
        </div>
      )}
    </div>
  );
}
