import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import Typo from "./Typo";

const buttonStyles = tv({
    base:
        "cursor-pointer inline-flex items-center justify-center gap-2 rounded-[var(--radius-2xl)] px-[18px] h-12 text-sm font-medium transition-colors " +
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-500/40 " +
        "disabled:cursor-not-allowed disabled:opacity-50",
    variants: {
        variant: {
            primary: "bg-cyan-500 text-white hover:bg-cyan-400 active:bg-cyan-600 disabled:bg-neutral-400",
            secondary: "border border-cyan-500 text-cyan-500 bg-transparent hover:bg-cyan-50 active:bg-cyan-100 disabled:border-neutral-400 disabled:text-neutral-400",
            ghost: "bg-transparent text-cyan-500 hover:bg-cyan-50 active:bg-cyan-100 disabled:text-neutral-400"
        },
        size: {
            sm: "h-9 px-3 text-sm",
            md: "h-12 px-[18px] text-sm",
            lg: "h-14 px-6 text-base"
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

type ButtonVariants = VariantProps<typeof buttonStyles>;
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants & {
    /** Icon component to display instead of text */
    icon?: React.ReactNode;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant, size, fullWidth, className, children, icon, ...props }, ref) => {
        const content = icon ? (
            <Typo variant="body-lg" bold="semibold" className="text-base font-semibold">
                {icon}
            </Typo>
        ) : (
            children
        );

        return (
            <button
                ref={ref}
                className={buttonStyles({ variant, size, fullWidth, className })}
                {...props}
            >
                {content}
            </button>
        );
    }
);
Button.displayName = "Button";
