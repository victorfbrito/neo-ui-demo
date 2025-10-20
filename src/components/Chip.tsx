import * as React from "react";
import Icon from "./Icon";

export type IconOption =
  | "home" | "search" | "person" | "settings" | "close" | "check" | "clear" | "menu" | "more_vert"
  | "favorite" | "favorite_border" | "star" | "star_outline" | "visibility" | "visibility_off"
  | "lock" | "lock_open" | "download" | "upload" | "share" | "refresh" | "calendar_today" | "schedule"
  | "notifications" | "notifications_off" | "error" | "error_outline" | "help" | "help_outline"
  | "arrow_back" | "arrow_forward" | "chevron_right" | "expand_more" | "play_arrow" | "pause" | "stop"
  | "skip_next" | "skip_previous" | "volume_up" | "volume_off" | "mic" | "mic_off" | "camera_alt"
  | "photo" | "image" | "map" | "place" | "location_on" | "phone" | "mail" | "chat" | "send" | "link"
  | "attachment" | "shopping_cart" | "payment";

export type ChipProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "warning" | "success" | "error" | "light" | "dark";
  icon?: IconOption;
  label?: string;
};

export default function Chip({
  variant = "success",
  icon,
  className = "",
  label,
  ...props
}: ChipProps) {
  const base =
    "inline-flex w-fit items-center justify-center gap-1 whitespace-nowrap overflow-hidden rounded-full h-6 px-2 " +
    "text-xs font-semibold border";

  // Token-based backgrounds + readable text
  const variantCls: Record<NonNullable<ChipProps["variant"]>, string> = {
    warning: "bg-[var(--warning)] text-white",
    success: "bg-[var(--success)] text-white",
    error: "bg-[var(--destructive)] text-white",
    light: "bg-[var(--muted)] text-[var(--fg)]",
    dark: "bg-[var(--surface)] text-[var(--fg)]"
  };

  return (
    <div className={[base, variantCls[variant], className].join(" ")} {...props}>
      {icon ? <Icon name={icon} size="sm" className="mr-0.5" /> : null}
      <span>{label}</span>
    </div>
  );
}


