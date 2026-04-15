import type { CSSProperties } from "react";

const filledVariation: CSSProperties = {
  fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
};

export function MaterialSymbol({
  name,
  className = "",
  filled,
  style,
}: {
  name: string;
  className?: string;
  filled?: boolean;
  style?: CSSProperties;
}) {
  return (
    <span
      className={`material-symbols-outlined ${className}`.trimEnd()}
      style={filled ? { ...filledVariation, ...style } : style}
    >
      {name}
    </span>
  );
}
