import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const inputStyles = tv({
  base:
    "block w-full rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] text-[var(--fg)] placeholder:text-[var(--muted-fg)] shadow-sm " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)]/40 disabled:cursor-not-allowed disabled:opacity-50",
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

type InputVariants = VariantProps<typeof inputStyles>;
export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & InputVariants;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ size, invalid, className, ...props }, ref) => {
    return <input ref={ref} className={inputStyles({ size, invalid, className })} {...props} />;
  }
);
Input.displayName = "Input";
