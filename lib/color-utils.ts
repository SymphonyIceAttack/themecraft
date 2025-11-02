/**
 * Normalize color value to hex format for use in color inputs and styles
 */
export function normalizeColor(color: string | undefined): string {
  if (!color) return "#000000";

  // Remove whitespace
  const trimmed = color.trim();

  // Already hex format
  if (/^#[0-9A-Fa-f]{6}$/.test(trimmed)) {
    return trimmed;
  }

  // Short hex format (#RGB)
  if (/^#[0-9A-Fa-f]{3}$/.test(trimmed)) {
    const r = trimmed[1];
    const g = trimmed[2];
    const b = trimmed[3];
    return `#${r}${r}${g}${g}${b}${b}`;
  }

  // RGB format: rgb(255, 0, 0) or rgb(255,0,0)
  const rgbMatch = trimmed.match(
    /^rgb\s*$$\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*$$$/i,
  );
  if (rgbMatch) {
    const r = Number.parseInt(rgbMatch[1], 10);
    const g = Number.parseInt(rgbMatch[2], 10);
    const b = Number.parseInt(rgbMatch[3], 10);
    return rgbToHex(r, g, b);
  }

  // RGBA format: rgba(255, 0, 0, 0.5)
  const rgbaMatch = trimmed.match(
    /^rgba\s*$$\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*[\d.]+\s*$$$/i,
  );
  if (rgbaMatch) {
    const r = Number.parseInt(rgbaMatch[1], 10);
    const g = Number.parseInt(rgbaMatch[2], 10);
    const b = Number.parseInt(rgbaMatch[3], 10);
    return rgbToHex(r, g, b);
  }

  // If it's just numbers, treat as invalid
  if (/^\d+$/.test(trimmed)) {
    console.warn(`[v0] Invalid color format (pure numbers): ${trimmed}`);
    return "#000000";
  }

  // Return as-is if we can't parse it (might be a valid CSS color name)
  return trimmed;
}

/**
 * Convert RGB values to hex format
 */
function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (val: number) => Math.max(0, Math.min(255, val));
  const toHex = (val: number) => clamp(val).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Check if a color value is valid for CSS
 */
export function isValidColor(color: string | undefined): boolean {
  if (!color) return false;

  const trimmed = color.trim();

  // Hex formats
  if (/^#[0-9A-Fa-f]{3}$/.test(trimmed) || /^#[0-9A-Fa-f]{6}$/.test(trimmed)) {
    return true;
  }

  // RGB/RGBA formats
  if (/^rgba?\s*\(\s*\d+\s*,\s*\d+\s*,\s*\d+/.test(trimmed)) {
    return true;
  }

  // Pure numbers are invalid
  if (/^\d+$/.test(trimmed)) {
    return false;
  }

  return true;
}
