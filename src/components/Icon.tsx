export type IconProps = {
  /** Material Symbols name (e.g., "search", "close", "more_vert") */
  name: string;
  className?: string;
  title?: string;
  /** Visual size preset */
  size?: "sm" | "md" | "lg";
  /** Filled (1) vs outlined (0) glyph */
  fill?: 0 | 1;
};

const sizeMap = {
  sm: 16,
  md: 24,
  lg: 36,
} as const;

export default function Icon({
  name,
  className = "",
  title,
  size = "md",
  fill = 0
}: IconProps) {
  const fontSize = sizeMap[size] ?? sizeMap.md;
  // If user already provides a Tailwind color class, don't override color
  const hasColorClass = /\b(?:text-|fill-|stroke-)\S+/.test(className);
  const style: React.CSSProperties = {
    fontVariationSettings: `'FILL' ${fill}, 'wght' 300, 'GRAD' 0, 'opsz' ${fontSize}`,
    fontSize,
    lineHeight: 1,
    display: "inline-block",
    verticalAlign: "middle",
    ...(hasColorClass ? {} : { color: "inherit" })
  };
  return (
    <span
      className={`material-symbols-rounded rounded ${className}`}
      style={style}
      aria-hidden={title ? undefined : true}
      title={title}
    >
      {name}
    </span>
  );
}


