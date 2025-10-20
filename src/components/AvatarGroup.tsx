import * as React from "react";

export type AvatarGroupProps = {
  children: React.ReactNode;
  className?: string;
  /** Maximum avatars to display before showing a +N counter */
  max?: number;
  /** Overlap offset in pixels (default 8px) */
  overlapPx?: number;
  /** Adds a separating ring around each avatar to improve contrast */
  withRings?: boolean;
};

export default function AvatarGroup({
  children,
  className = "",
  max = 5,
  overlapPx = 8,
  withRings = true
}: AvatarGroupProps) {
  const avatars = React.Children.toArray(children);
  const displayAvatars = typeof max === "number" ? avatars.slice(0, max) : avatars;
  const extraCount = typeof max === "number" && avatars.length > max ? avatars.length - max : 0;

  return (
    <div className={["flex items-center", className].filter(Boolean).join(" ")}>
      {displayAvatars.map((child, i) => (
        <div
          key={i}
          className={[
            "relative",
            i > 0 ? "" : "ml-0"
          ].join(" ")}
          style={{
            marginLeft: i === 0 ? 0 : -overlapPx,
            zIndex: 100 + i
          }}
        >
          <div className={withRings ? "ring-2 ring-[var(--surface)] rounded-full" : ""}>{child}</div>
        </div>
      ))}
      {extraCount > 0 && (
        <span
          className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--muted)] text-[var(--fg)] text-xs"
          aria-label={`${extraCount} more`}
          title={`${extraCount} more`}
        >
          +{extraCount}
        </span>
      )}
    </div>
  );
}
