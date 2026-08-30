import type { ReactNode } from "react";

/** Compact loading / empty / error helpers so every screen has explicit states. */
export function Loading({ label = "Loading" }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-8" style={{ fontFamily: "Jura, sans-serif", fontSize: 13, color: "var(--chip-color)" }}>
      <span
        className="mr-2 inline-block"
        style={{ width: 12, height: 12, borderRadius: "50%", border: "2px solid var(--strata-line)", borderTopColor: "var(--strata-ink)", animation: "spin 0.8s linear infinite" }}
      />
      {label}
    </div>
  );
}

export function Empty({ message, icon }: { message: string; icon?: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center" style={{ gap: 8 }}>
      {icon && <div style={{ color: "var(--chip-color)", opacity: 0.7 }}>{icon}</div>}
      <div style={{ fontFamily: "Jura, sans-serif", fontSize: 13, color: "var(--chip-color)" }}>{message}</div>
    </div>
  );
}

export function ErrorBlock({ message, onRetry }: { message: string; onRetry?: () => void }) {
  return (
    <div
      className="flex items-center justify-between gap-3 px-4 py-3"
      style={{ border: "1px solid var(--hairline)", borderRadius: 6, background: "var(--badge-bg)" }}
    >
      <span
        className="flex items-center gap-2"
        style={{ fontFamily: "Jura, sans-serif", fontSize: 12, color: "var(--strata-ink)" }}
      >
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#D32F2F" }} />
        {message}
      </span>
      {onRetry && (
        <button
          onClick={onRetry}
          style={{
            fontFamily: "Jura, sans-serif", fontSize: 12, color: "var(--strata-ink)",
            background: "var(--chrome-bg)", border: "1px solid var(--hairline)", borderRadius: 4, padding: "3px 10px",
          }}
        >
          Retry
        </button>
      )}
    </div>
  );
}

