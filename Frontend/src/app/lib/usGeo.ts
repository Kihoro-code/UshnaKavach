// INDIA mainland outline (lng, lat), ordered clockwise starting from the Kutch coast.
// The northern boundary is drawn to the real Himalayan arc so the top reads correctly:
// it rises to ~35.3°N in Ladakh, falls diagonally along the Pakistan border, carries a
// Nepal notch around 28–29°N, then runs on through the Chicken's Neck to the north-east
// arm (which hooks down along the Myanmar border). Silhouette-grade, not survey-grade.
export const US_MAINLAND: [number, number][] = [
  // ── West coast, down from Kutch ─────────────────────────────────────────
  [68.2, 23.7], [68.9, 22.4], [69.0, 21.4], [70.0, 20.9], [71.4, 20.9],
  [72.0, 21.5], [72.2, 21.2], [72.6, 20.2], [72.8, 19.2], [72.9, 18.4],
  [73.0, 17.0], [73.2, 16.0], [73.5, 15.0], [74.0, 14.0], [74.4, 12.6],
  [75.0, 12.0], [75.5, 11.0], [76.0, 10.4], [76.3, 9.5], [76.9, 8.9],
  [77.5, 8.1],
  // ── East coast, up from Kanyakumari ────────────────────────────────────
  [78.2, 8.9], [79.0, 10.3], [79.2, 11.0], [79.8, 12.3], [80.0, 13.2],
  [80.3, 14.0], [80.0, 15.5], [80.3, 15.9], [80.8, 16.2], [81.5, 17.0],
  [82.3, 17.0], [83.0, 17.2], [83.5, 18.1], [84.2, 18.5], [85.0, 19.2],
  [85.5, 20.0], [86.2, 20.2], [86.8, 21.5], [87.5, 21.5], [88.2, 21.7],
  // ── Bengal / Bangladesh ───────────────────────────────────────────────
  [88.8, 21.7], [89.5, 21.0], [90.5, 20.7], [91.6, 21.0], [92.0, 21.5],
  [92.5, 22.3], [92.4, 23.2], [92.3, 24.0], [92.6, 25.0], [93.3, 25.8],
  [94.6, 26.2], [95.0, 26.7], [95.5, 27.0], [96.0, 27.5], [96.8, 27.8],
  [97.0, 28.2],
  // ── North-east arm (up and back) ──────────────────────────────────────
  [96.4, 28.4], [96.0, 28.0], [95.3, 27.8], [94.8, 27.3], [94.0, 27.3],
  [93.0, 27.0], [92.5, 26.5], [92.0, 26.8], [91.0, 26.9], [90.0, 26.6],
  [89.8, 26.6], [89.5, 26.7],
  // ── Nepal / Himalayan arc ────────────────────────────────────────────
  [88.9, 27.1], [88.5, 27.9], [88.1, 28.3], [87.5, 28.3], [86.5, 28.5],
  [85.5, 28.9], [84.5, 29.0], [83.5, 28.9], [82.5, 28.7], [81.2, 28.8],
  [80.6, 29.0], [79.3, 30.4], [78.5, 30.6], [77.6, 31.4], [76.8, 32.6],
  [76.5, 32.0], [77.5, 32.5], [78.0, 32.8], [78.2, 33.5], [78.0, 34.3],
  [77.8, 35.0], [77.0, 35.3],
  // ── Ladakh → Pakistan border (diagonal down the NW) ───────────────────
  [76.0, 34.8], [75.0, 34.8], [74.2, 34.6], [73.6, 33.9], [74.0, 32.8],
  [74.0, 32.0], [73.5, 31.2], [73.0, 30.4], [72.5, 29.8], [71.8, 28.6],
  [71.2, 28.0], [70.5, 27.0], [69.6, 25.7], [69.0, 24.9], [68.7, 24.2],
  [68.2, 23.7],
];

// Andaman & Nicobar — a north–south island chain in the Bay of Bengal, drawn wide
// enough that grid-cell centres land inside it so the halftone field renders it as
// a genuine chain rather than a couple of stray dots.
export const ALASKA: [number, number][] = [
  [92.9, 7.0], [94.0, 7.3], [94.6, 8.3], [94.1, 9.3], [94.3, 10.6],
  [93.8, 11.6], [93.3, 12.6], [93.6, 13.6], [93.0, 14.2], [92.2, 13.5],
  [92.5, 12.4], [92.9, 11.4], [92.6, 10.4], [92.9, 9.2], [92.5, 8.1],
  [92.3, 7.2], [92.9, 7.0],
];

// Lakshadweep — a scatter of coral atolls in the Arabian Sea off the southwest coast,
// widened so the grid samples the chain across a few cells instead of missing it.
export const HAWAII_HULL: [number, number][] = [
  [71.7, 12.7], [72.6, 11.5], [72.6, 10.4], [73.1, 9.4], [73.9, 8.7],
  [74.5, 9.2], [73.7, 10.2], [73.4, 11.2], [72.8, 12.0], [71.7, 12.7],
];

export function pointInPoly(lng: number, lat: number, poly: [number, number][]): boolean {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i][0], yi = poly[i][1];
    const xj = poly[j][0], yj = poly[j][1];
    const intersect = yi > lat !== yj > lat && lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

/** True for any land on the Indian landmass OR the island chains, so a single grid can
 *  render mainland, A&N and Lakshadweep together in their real geographic position. */
export function isIndia(lat: number, lng: number): boolean {
  return (
    pointInPoly(lng, lat, US_MAINLAND) ||
    pointInPoly(lng, lat, ALASKA) ||
    pointInPoly(lng, lat, HAWAII_HULL)
  );
}
