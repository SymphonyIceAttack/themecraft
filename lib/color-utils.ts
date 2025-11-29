/**
 * Normalize color value to hex format for use in color inputs and styles
 */
export function normalizeColor(color: string | undefined): string {
  if (!color) return "#000000";

  const trimmed = color.trim();

  // Already valid 6-digit hex format
  if (/^#[0-9A-Fa-f]{6}$/.test(trimmed)) {
    return trimmed.toUpperCase();
  }

  // Short hex format (#RGB) - expand to #RRGGBB
  if (/^#[0-9A-Fa-f]{3}$/.test(trimmed)) {
    const r = trimmed[1];
    const g = trimmed[2];
    const b = trimmed[3];
    return `#${r}${r}${g}${g}${b}${b}`.toUpperCase();
  }

  if (/^#[0-9A-Fa-f]+$/.test(trimmed)) {
    const hexPart = trimmed.slice(1);
    if (hexPart.length < 6) {
      // Pad with zeros if too short
      return `#${hexPart.padEnd(6, "0")}`.toUpperCase();
    } else if (hexPart.length > 6) {
      // Truncate if too long
      return `#${hexPart.slice(0, 6)}`.toUpperCase();
    }
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

  // HSL format: hsl(120, 100%, 50%) or hsl(120,100%,50%)
  const hslMatch = trimmed.match(
    /^hsl\s*$$\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*$$$/i,
  );
  if (hslMatch) {
    const h = Number.parseInt(hslMatch[1], 10);
    const s = Number.parseInt(hslMatch[2], 10) / 100;
    const l = Number.parseInt(hslMatch[3], 10) / 100;
    return hslToHex(h, s, l);
  }

  // HSLA format: hsla(120, 100%, 50%, 0.5)
  const hslaMatch = trimmed.match(
    /^hsla\s*$$\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*[\d.]+\s*$$$/i,
  );
  if (hslaMatch) {
    const h = Number.parseInt(hslaMatch[1], 10);
    const s = Number.parseInt(hslaMatch[2], 10) / 100;
    const l = Number.parseInt(hslaMatch[3], 10) / 100;
    return hslToHex(h, s, l);
  }

  // Named colors and special values
  const lowerTrimmed = trimmed.toLowerCase();
  const namedColors: Record<string, string> = {
    transparent: "#000000",
    none: "#000000",
    currentcolor: "#000000",
    red: "#ff0000",
    blue: "#0000ff",
    green: "#008000",
    yellow: "#ffff00",
    orange: "#ffa500",
    purple: "#800080",
    pink: "#ffc0cb",
    brown: "#a52a2a",
    black: "#000000",
    white: "#ffffff",
    gray: "#808080",
    grey: "#808080",
    silver: "#c0c0c0",
    maroon: "#800000",
    navy: "#000080",
    teal: "#008080",
    lime: "#00ff00",
    aqua: "#00ffff",
    fuchsia: "#ff00ff",
    olive: "#808000",
  };

  if (namedColors[lowerTrimmed]) {
    return namedColors[lowerTrimmed];
  }

  if (/^\d+$/.test(trimmed)) {
    const padded = trimmed.padEnd(6, "0").slice(0, 6);
    console.warn(
      `[v0] Converting pure numbers to hex: ${trimmed} -> #${padded}`,
    );
    return `#${padded}`.toUpperCase();
  }

  console.warn(`[v0] Invalid color format, using fallback: ${trimmed}`);
  return "#000000";
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
 * Convert HSL values to hex format
 */
function hslToHex(h: number, s: number, l: number): string {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  return rgbToHex(
    Math.round((r + m) * 255),
    Math.round((g + m) * 255),
    Math.round((b + m) * 255),
  );
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
