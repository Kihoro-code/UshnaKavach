import svgPaths from "@/imports/StrataLogo-1/svg-izrnfva7u3";

// Renders the Figma-imported StrataMark. Each group's SVG viewBox dimensions
// match the icon's rendered size, so only translate transforms are needed.
// Fill uses currentColor so the mark adapts to light/dark theme.
function StrataMark({ size = 34 }: { size?: number }) {
  const scale = size / 34.366;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 34.366 34.366"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <g transform={`scale(${scale})`}>
        {/* bottom-right horizontal — Group1 */}
        <g transform="translate(12.89, 28.76)">
          <path d={svgPaths.p2381b380} fill="currentColor" />
          <path d={svgPaths.p9eb4680} fill="currentColor" />
          <path d={svgPaths.paf10100} fill="currentColor" />
        </g>
        {/* bottom-left diagonal — Group2 */}
        <g transform="translate(2.62, 24.95)">
          <path d={svgPaths.p3498280} fill="currentColor" />
          <path d={svgPaths.pd91c300} fill="currentColor" />
          <path d={svgPaths.p2bb28500} fill="currentColor" />
        </g>
        {/* left vertical — Group4 */}
        <g transform="translate(0, 12.97)">
          <path d={svgPaths.p2a0d8600} fill="currentColor" />
          <path d={svgPaths.p9e3e700} fill="currentColor" />
          <path d={svgPaths.p2729b600} fill="currentColor" />
        </g>
        {/* top-left diagonal — Group6 */}
        <g transform="translate(2.62, 2.64)">
          <path d={svgPaths.p1800cc00} fill="currentColor" />
          <path d={svgPaths.p21b1d700} fill="currentColor" />
          <path d={svgPaths.p264ea8f1} fill="currentColor" />
        </g>
        {/* top-right horizontal — Group8 */}
        <g transform="translate(12.89, 0)">
          <path d={svgPaths.p3ac0ea00} fill="currentColor" />
          <path d={svgPaths.p347af300} fill="currentColor" />
          <path d={svgPaths.p16ee5d00} fill="currentColor" />
        </g>
        {/* top-right diagonal — Group10 */}
        <g transform="translate(24.78, 2.64)">
          <path d={svgPaths.p2a572400} fill="currentColor" />
          <path d={svgPaths.p27151200} fill="currentColor" />
          <path d={svgPaths.p6ff8470} fill="currentColor" />
        </g>
        {/* right vertical — Group12 */}
        <g transform="translate(28.56, 12.97)">
          <path d={svgPaths.p278ae900} fill="currentColor" />
          <path d={svgPaths.p7ebfff0} fill="currentColor" />
          <path d={svgPaths.p1b9f6b00} fill="currentColor" />
        </g>
        {/* bottom-right diagonal — Group14 */}
        <g transform="translate(24.78, 24.95)">
          <path d={svgPaths.p18c65700} fill="currentColor" />
          <path d={svgPaths.pcb43000} fill="currentColor" />
          <path d={svgPaths.p3d638710} fill="currentColor" />
        </g>
        {/* center horizontal lower — Group16 */}
        <g transform="translate(12.89, 20.97)">
          <path d={svgPaths.p167bd00} fill="currentColor" />
          <path d={svgPaths.p3cff1480} fill="currentColor" />
          <path d={svgPaths.p1d553000} fill="currentColor" />
        </g>
        {/* center-left vertical — Group18 */}
        <g transform="translate(7.71, 12.97)">
          <path d={svgPaths.p3d766b00} fill="currentColor" />
          <path d={svgPaths.p1365e100} fill="currentColor" />
          <path d="M0 0V2.79513H2.77828V0H0Z" fill="currentColor" />
        </g>
        {/* center horizontal upper — Group19 */}
        <g transform="translate(12.89, 7.77)">
          <path d={svgPaths.p3c7388c0} fill="currentColor" />
          <path d={svgPaths.p17995670} fill="currentColor" />
          <path d={svgPaths.p6331000} fill="currentColor" />
        </g>
        {/* center-right vertical — Group21 */}
        <g transform="translate(20.85, 12.97)">
          <path d={svgPaths.p27ef5a00} fill="currentColor" />
          <path d={svgPaths.pd8b7300} fill="currentColor" />
          <path d={svgPaths.p9d1c200} fill="currentColor" />
        </g>
      </g>
    </svg>
  );
}

export function StrataLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-[10px] ${className}`}>
      <StrataMark size={28} />
      <span
        style={{
          fontFamily: "Geist, sans-serif",
          fontWeight: 300,
          fontSize: 28,
          lineHeight: "28px",
          letterSpacing: 0,
          color: "currentColor",
        }}
      >
        HeatRisk
      </span>
    </div>
  );
}
