"use client";

import { useState } from "react";

function md5(input: string): string {
  function safeAdd(x: number, y: number) { const l = (x & 0xffff) + (y & 0xffff); return (((x >> 16) + (y >> 16) + (l >> 16)) << 16) | (l & 0xffff); }
  function bitRotateLeft(n: number, c: number) { return (n << c) | (n >>> (32 - c)); }
  function md5cmn(q: number, a: number, b: number, x: number, s: number, t: number) { return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b); }
  function md5ff(a: number, b: number, c: number, d: number, x: number, s: number, t: number) { return md5cmn((b & c) | (~b & d), a, b, x, s, t); }
  function md5gg(a: number, b: number, c: number, d: number, x: number, s: number, t: number) { return md5cmn((b & d) | (c & ~d), a, b, x, s, t); }
  function md5hh(a: number, b: number, c: number, d: number, x: number, s: number, t: number) { return md5cmn(b ^ c ^ d, a, b, x, s, t); }
  function md5ii(a: number, b: number, c: number, d: number, x: number, s: number, t: number) { return md5cmn(c ^ (b | ~d), a, b, x, s, t); }

  const bytes = new TextEncoder().encode(input);
  const len = bytes.length;
  const bitLen = len * 8;
  const words: number[] = [];
  for (let i = 0; i < len; i++) words[i >> 2] |= bytes[i] << ((i % 4) << 3);
  words[len >> 2] |= 0x80 << ((len % 4) << 3);
  const wordCount = (((len + 8) >>> 6) + 1) * 16;
  for (let i = words.length; i < wordCount; i++) words[i] = 0;
  words[wordCount - 2] = bitLen & 0xffffffff;
  words[wordCount - 1] = (bitLen / 0x100000000) & 0xffffffff;

  let a0 = 0x67452301, b0 = 0xefcdab89, c0 = 0x98badcfe, d0 = 0x10325476;
  const S = [7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21];
  const T: number[] = [];
  for (let i = 0; i < 64; i++) T[i] = Math.floor(Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;

  for (let offset = 0; offset < wordCount; offset += 16) {
    const M = words.slice(offset, offset + 16);
    let A = a0, B = b0, C = c0, D = d0;
    for (let i = 0; i < 64; i++) {
      let f: number, g: number;
      if (i < 16) { f = md5ff(A, B, C, D, M[(g = i)], S[i], T[i]); }
      else if (i < 32) { f = md5gg(A, B, C, D, M[(g = (5 * i + 1) % 16)], S[i], T[i]); }
      else if (i < 48) { f = md5hh(A, B, C, D, M[(g = (3 * i + 5) % 16)], S[i], T[i]); }
      else { f = md5ii(A, B, C, D, M[(g = (7 * i) % 16)], S[i], T[i]); }
      A = D; D = C; C = B; B = f;
    }
    a0 = safeAdd(a0, A); b0 = safeAdd(b0, B); c0 = safeAdd(c0, C); d0 = safeAdd(d0, D);
  }

  const hex = (n: number) => { let s = ""; for (let i = 0; i < 4; i++) { s += ((n >> (i * 8)) & 0xff).toString(16).padStart(2, "0"); } return s; };
  return hex(a0) + hex(b0) + hex(c0) + hex(d0);
}

async function shaHash(algorithm: string, text: string): Promise<string> {
  const data = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest(algorithm, data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default function HashGenerator() {
  const [input, setInput] = useState("");
  const [hashes, setHashes] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [copiedField, setCopiedField] = useState("");

  const handleCopy = async (field: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(""), 1500);
  };

  const generate = async () => {
    setLoading(true);
    const results = await Promise.all([
      Promise.resolve(md5(input)),
      shaHash("SHA-1", input),
      shaHash("SHA-256", input),
      shaHash("SHA-512", input),
    ]);
    setHashes({ MD5: results[0], "SHA-1": results[1], "SHA-256": results[2], "SHA-512": results[3] });
    setLoading(false);
  };

  return (
    <div className="tool-page min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-2">Hash Generator</h1>
      <p className="text-[var(--text-secondary)] mb-6">Generate MD5, SHA-1, SHA-256, SHA-512 hashes</p>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Input Text</label>
        <textarea rows={5} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter text to hash..." />
      </div>

      <button onClick={generate} className="btn-primary mb-6" disabled={loading || !input}>
        {loading ? "Generating..." : "Generate All Hashes"}
      </button>

      {Object.keys(hashes).length > 0 && (
        <div className="space-y-3">
          {Object.entries(hashes).map(([algo, hash]) => (
            <div key={algo} className="flex items-center gap-3 bg-[var(--bg-secondary)] p-3 rounded-lg border border-[var(--border)]">
              <span className="text-sm font-mono font-bold w-16 shrink-0">{algo}</span>
              <code className="text-xs break-all flex-1 text-[var(--text-secondary)]">{hash}</code>
              <button onClick={() => handleCopy(algo, hash)} className="btn-secondary text-xs shrink-0">
                {copiedField === algo ? "Copied!" : "Copy"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
