import * as React4 from 'react';
import { useState, useMemo } from 'react';
import { tv } from 'tailwind-variants';
import { jsx, jsxs } from 'react/jsx-runtime';
import { createPortal } from 'react-dom';

// src/components/Button.tsx
var buttonStyles = tv({
  base: "inline-flex items-center justify-center gap-2 rounded-[--radius-lg] px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/20",
  variants: {
    variant: {
      primary: "bg-[--color-brand] text-white hover:opacity-90 active:opacity-80",
      outline: "border border-[--color-brand] text-[--color-brand] bg-[--surface] hover:bg-[--color-brand]/10",
      ghost: "bg-transparent text-[--fg] hover:bg-[--muted]"
    },
    size: {
      sm: "h-9 text-sm",
      md: "h-10 text-sm",
      lg: "h-11 text-base"
    },
    fullWidth: {
      true: "w-full"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
var Button = React4.forwardRef(
  ({ variant, size, fullWidth, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "button",
      {
        ref,
        className: buttonStyles({ variant, size, fullWidth, className }),
        ...props
      }
    );
  }
);
Button.displayName = "Button";
function Card({
  className = "",
  ...props
}) {
  const base2 = "rounded-[--radius-lg] border border-[--border] bg-[--surface] text-[--fg] shadow-sm";
  return /* @__PURE__ */ jsx("div", { className: [base2, className].join(" ").trim(), ...props });
}
function CardHeader({
  className = "",
  ...props
}) {
  const base2 = "p-4 border-b border-[--border]";
  return /* @__PURE__ */ jsx("div", { className: [base2, className].join(" ").trim(), ...props });
}
function CardTitle({
  className = "",
  ...props
}) {
  const base2 = "text-base font-semibold";
  return /* @__PURE__ */ jsx("h3", { className: [base2, className].join(" ").trim(), ...props });
}
function CardDescription({
  className = "",
  ...props
}) {
  const base2 = "text-sm text-[--muted-fg]";
  return /* @__PURE__ */ jsx("p", { className: [base2, className].join(" ").trim(), ...props });
}
function CardContent({
  className = "",
  ...props
}) {
  const base2 = "p-4";
  return /* @__PURE__ */ jsx("div", { className: [base2, className].join(" ").trim(), ...props });
}
function CardFooter({
  className = "",
  ...props
}) {
  const base2 = "p-4 border-t border-[--border] flex items-center justify-end gap-2";
  return /* @__PURE__ */ jsx("div", { className: [base2, className].join(" ").trim(), ...props });
}
var base = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium";
var variants = {
  default: "bg-[--color-brand] text-white",
  secondary: "bg-[--muted] text-[--fg]",
  outline: "border border-current text-[--fg]",
  success: "bg-emerald-600 text-white",
  warning: "bg-amber-500 text-white",
  destructive: "bg-red-600 text-white"
};
var Badge = React4.forwardRef(
  ({ variant = "default", className = "", ...props }, ref) => {
    const cls = [base, variants[variant], className].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx("span", { ref, className: cls, ...props });
  }
);
Badge.displayName = "Badge";
var inputStyles = tv({
  base: "block w-full rounded-[--radius-lg] border border-[--border] bg-[--surface] text-[--fg] placeholder:text-[--muted-fg] shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-brand]/40 disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    size: {
      sm: "h-9 px-3 text-sm",
      md: "h-10 px-3.5 text-sm",
      lg: "h-11 px-4 text-base"
    },
    invalid: {
      true: "border-red-500 focus-visible:ring-red-500/40",
      false: ""
    }
  },
  defaultVariants: {
    size: "md",
    invalid: false
  }
});
var Input = React4.forwardRef(
  ({ size, invalid, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx("input", { ref, className: inputStyles({ size, invalid, className }), ...props });
  }
);
Input.displayName = "Input";
function useIsomorphicLayoutEffect(effect, deps) {
  const useEffectHook = typeof window !== "undefined" ? React4.useLayoutEffect : React4.useEffect;
  useEffectHook(effect, deps);
}
function Modal({
  open,
  onClose,
  title,
  closeOnOverlay = true,
  children
}) {
  const [mounted, setMounted] = React4.useState(false);
  useIsomorphicLayoutEffect(() => {
    setMounted(true);
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);
  React4.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!mounted) return null;
  if (!open) return null;
  const overlay = /* @__PURE__ */ jsxs(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 bg-black/50",
            onClick: () => closeOnOverlay && onClose?.()
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-lg rounded-[--radius-lg] bg-[--surface] text-[--fg] p-6 shadow-xl", children: [
          title ? /* @__PURE__ */ jsx("h2", { id: "modal-title", className: "mb-2 text-lg font-semibold", children: title }) : null,
          /* @__PURE__ */ jsx("div", { children }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 flex justify-end gap-2", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: onClose,
              className: "btn btn-outline",
              type: "button",
              children: "Close"
            }
          ) })
        ] })
      ]
    }
  );
  const container = document.body;
  return createPortal(overlay, container);
}
var styles = tv({
  base: "neo-typo text-[--fg]",
  // token-driven color; dark mode handled by tokens
  variants: {
    variant: {
      "display-lg": "neo-display-lg",
      "display-md": "neo-display-md",
      "display-sm": "neo-display-sm",
      "headline-lg": "neo-headline-lg",
      "headline-md": "neo-headline-md",
      "headline-sm": "neo-headline-sm",
      "title-lg": "neo-title-lg",
      "title-md": "neo-title-md",
      "title-sm": "neo-title-sm",
      "label-lg": "neo-label-lg",
      "label-md": "neo-label-md",
      "label-sm": "neo-label-sm",
      "body-lg": "neo-body-lg",
      "body-md": "neo-body-md",
      "body-sm": "neo-body-sm",
      "button": "neo-button"
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold"
    },
    muted: {
      true: "text-[--muted-fg]"
    }
  },
  defaultVariants: {
    weight: "normal"
  }
});
function Typo({
  variant,
  bold,
  muted,
  as,
  className,
  children,
  ...props
}) {
  const Component = as ?? "span";
  return /* @__PURE__ */ jsx(
    Component,
    {
      className: styles({ variant, weight: bold, muted, className }),
      ...props,
      children
    }
  );
}
var avatarStyles = tv({
  base: "relative box-border flex items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-[var(--muted)] text-[var(--fg)] select-none",
  variants: {
    size: {
      sm: "w-[28px] h-[28px]",
      md: "w-[60px] h-[60px]"
    }
  },
  defaultVariants: { size: "sm" }
});
function getInitials(name) {
  if (!name) return "\u2026";
  const words = name.trim().split(/\s+/);
  if (words.length === 1) return (words[0][0] ?? "").toUpperCase();
  return ((words[0][0] ?? "") + (words[words.length - 1][0] ?? "")).toUpperCase();
}
function Avatar({
  name,
  src,
  color,
  size,
  alt,
  className,
  style,
  ...props
}) {
  const [imgError, setImgError] = useState(false);
  const initials = useMemo(() => getInitials(name), [name]);
  const computedStyle = useMemo(() => {
    const s = { ...style };
    if (color) s.backgroundColor = color;
    return s;
  }, [color, style]);
  const textVariant = size === "sm" ? "label-md" : "headline-md";
  const showImage = !!src && !imgError;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `${avatarStyles({ size, className })} ${!showImage ? "bg-neutral-300 dark:bg-neutral-800" : ""}`,
      "aria-label": alt ?? name,
      role: "img",
      ...props,
      style: computedStyle,
      children: showImage ? /* @__PURE__ */ jsx(
        "img",
        {
          src,
          alt: alt ?? name,
          className: "absolute inset-0 h-full w-full object-cover rounded-full",
          onError: () => setImgError(true),
          draggable: false
        }
      ) : /* @__PURE__ */ jsx(Typo, { variant: textVariant, bold: "medium", className: "pointer-events-none", children: initials })
    }
  );
}
function AvatarGroup({
  children,
  className = "",
  max = 5,
  overlapPx = 8,
  withRings = true
}) {
  const avatars = React4.Children.toArray(children);
  const displayAvatars = typeof max === "number" ? avatars.slice(0, max) : avatars;
  const extraCount = typeof max === "number" && avatars.length > max ? avatars.length - max : 0;
  return /* @__PURE__ */ jsxs("div", { className: ["flex items-center", className].filter(Boolean).join(" "), children: [
    displayAvatars.map((child, i) => /* @__PURE__ */ jsx(
      "div",
      {
        className: [
          "relative",
          i > 0 ? "" : "ml-0"
        ].join(" "),
        style: {
          marginLeft: i === 0 ? 0 : -overlapPx,
          zIndex: 100 + i
        },
        children: /* @__PURE__ */ jsx("div", { className: withRings ? "ring-2 ring-[--surface] rounded-full" : "", children: child })
      },
      i
    )),
    extraCount > 0 && /* @__PURE__ */ jsxs(
      "span",
      {
        className: "ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full border border-[--border] bg-[--muted] text-[--fg] text-xs",
        "aria-label": `${extraCount} more`,
        title: `${extraCount} more`,
        children: [
          "+",
          extraCount
        ]
      }
    )
  ] });
}
var roundMap = {
  none: "rounded-none",
  sm: "rounded-[--radius-sm]",
  md: "rounded-[--radius-md]",
  lg: "rounded-[--radius-lg]",
  xl: "rounded-[--radius-xl]",
  full: "rounded-full"
};
function Skeleton({ className = "", rounded = "md", ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: [
        "animate-pulse bg-[--muted]",
        roundMap[rounded],
        className
      ].join(" "),
      ...props
    }
  );
}

export { Avatar, AvatarGroup, Badge, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input, Modal, Skeleton, Typo };
