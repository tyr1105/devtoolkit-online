"use client";

import { useState, useEffect } from "react";

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
    : { r: 0, g: 0, b: 0 };
}

function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l: Math.round(l * 100) };
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

export default function ColorPicker() {
  const [color, setColor] = useState("#3b82f6");
  const [rgb, setRgb] = useState("");
  const [hsl, setHsl] = useState("");
  const [copiedField, setCopiedField] = useState("");

  useEffect(() => {
    const { r, g, b } = hexToRgb(color);
    const hslVal = rgbToHsl(r, g, b);
    setRgb(`rgb(${r}, ${g}, ${b})`);
    setHsl(`hsl(${hslVal.h}, ${hslVal.s}%, ${hslVal.l}%)`);
  }, [color]);

  const handleCopy = async (field: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(""), 1500);
  };

  return (
    <div className="tool-page min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-2">Color Picker</h1>
      <p className="text-[var(--text-secondary)] mb-6">Pick and convert colors between HEX, RGB, HSL formats</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Pick a Color</label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full h-20 rounded-lg cursor-pointer border border-[var(--border)]"
            />
          </div>

          <div className="space-y-3">
            {[
              { label: "HEX", value: color },
              { label: "RGB", value: rgb },
              { label: "HSL", value: hsl },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="text-sm font-mono font-bold w-10">{label}</span>
                <input type="text" value={value} readOnly className="flex-1" />
                <button onClick={() => handleCopy(label, value)} className="btn-secondary text-xs shrink-0">
                  {copiedField === label ? "Copied!" : "Copy"}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div
            className="w-64 h-64 rounded-xl border-4 border-[var(--border)] shadow-lg"
            style={{ backgroundColor: color }}
          />
        </div>
      </div>
    </div>
  );
}
