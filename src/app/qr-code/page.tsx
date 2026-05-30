"use client";

import { useState } from "react";
import QRCode from "qrcode";

export default function QrCodeGenerator() {
  const [text, setText] = useState("https://example.com");
  const [size, setSize] = useState(256);
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [error, setError] = useState("");

  const generate = async () => {
    try {
      const url = await QRCode.toDataURL(text, {
        width: size,
        margin: 2,
        color: { dark: fgColor, light: bgColor },
      });
      setQrDataUrl(url);
      setError("");
    } catch {
      setError("Failed to generate QR code");
    }
  };

  const download = () => {
    const a = document.createElement("a");
    a.href = qrDataUrl;
    a.download = "qrcode.png";
    a.click();
  };

  return (
    <div className="tool-page min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-2">QR Code Generator</h1>
      <p className="text-[var(--text-secondary)] mb-6">Generate QR codes with custom colors and sizes</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Text / URL</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text or URL" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Size</label>
              <select
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-full bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] rounded-lg p-2"
              >
                <option value={128}>128px</option>
                <option value={256}>256px</option>
                <option value={512}>512px</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Foreground</label>
              <input type="color" value={fgColor} onChange={(e) => setFgColor(e.target.value)} className="w-full h-10 rounded cursor-pointer" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Background</label>
              <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-full h-10 rounded cursor-pointer" />
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={generate} className="btn-primary">Generate QR Code</button>
            {qrDataUrl && <button onClick={download} className="btn-secondary">Download PNG</button>}
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
        </div>
        <div className="flex items-center justify-center">
          {qrDataUrl ? (
            <img src={qrDataUrl} alt="QR Code" className="max-w-full rounded-lg border border-[var(--border)]" />
          ) : (
            <div className="w-64 h-64 border-2 border-dashed border-[var(--border)] rounded-lg flex items-center justify-center text-[var(--text-secondary)]">
              QR Code Preview
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
