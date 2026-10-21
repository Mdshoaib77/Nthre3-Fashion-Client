// Maps common color names (case-insensitive) to their hex codes so the UI
// can render real color swatches instead of plain text buttons/labels.
// If a value already looks like a hex code (starts with "#"), it is used
// directly. Unknown names fall back to a light gray placeholder.

export const COLOR_NAME_TO_HEX = {
    red: "#ef4444",
    green: "#22c55e",
    blue: "#3b82f6",
    black: "#111111",
    white: "#ffffff",
    yellow: "#eab308",
    orange: "#f97316",
    pink: "#ec4899",
    purple: "#a855f7",
    gray: "#6b7280",
    grey: "#6b7280",
    brown: "#78350f",
    navy: "#1e3a5f",
    maroon: "#7f1d1d",
    beige: "#e8dcc8",
    cream: "#fdf6e3",
    gold: "#d4af37",
    silver: "#c0c0c0",
    teal: "#14b8a6",
    cyan: "#06b6d4",
    olive: "#808000",
    lime: "#84cc16",
    indigo: "#4f46e5",
    violet: "#8b5cf6",
    magenta: "#d946ef",
    turquoise: "#40e0d0",
    lavender: "#b57edc",
    peach: "#ffcba4",
    mustard: "#e1ad01",
    khaki: "#c3b091",
    coral: "#ff7f50",
    mint: "#98ff98",
    charcoal: "#36454f",
    burgundy: "#800020",
    tan: "#d2b48c",
    skyblue: "#87ceeb",
    "sky blue": "#87ceeb",
    offwhite: "#f5f5f0",
    "off white": "#f5f5f0",
    rose: "#fb7185",
    plum: "#8e4585",
}

// Light gray placeholder used when a color name can't be resolved.
const DEFAULT_SWATCH = "#d1d5db"

/**
 * Resolves any color value (hex code or common name) to a hex code that can
 * be used directly as a CSS background-color.
 */
export const resolveColorHex = (value) => {
    if (!value) return DEFAULT_SWATCH
    const trimmed = String(value).trim()
    if (/^#/.test(trimmed)) return trimmed
    const hex = COLOR_NAME_TO_HEX[trimmed.toLowerCase()]
    return hex || DEFAULT_SWATCH
}

// Nice display label for a color value — the name as typed, or the hex code.
export const colorLabel = (value) => (value ? String(value) : "")
