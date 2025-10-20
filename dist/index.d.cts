import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import * as tailwind_variants_dist_config_js from 'tailwind-variants/dist/config.js';
import * as React from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

declare const buttonStyles: tailwind_variants.TVReturnType<{
    variant: {
        primary: string;
        outline: string;
        ghost: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    fullWidth: {
        true: string;
    };
}, undefined, string, tailwind_variants_dist_config_js.TVConfig<{
    variant: {
        primary: string;
        outline: string;
        ghost: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    fullWidth: {
        true: string;
    };
}, {
    variant: {
        primary: string;
        outline: string;
        ghost: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    fullWidth: {
        true: string;
    };
}>, {
    variant: {
        primary: string;
        outline: string;
        ghost: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    fullWidth: {
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        primary: string;
        outline: string;
        ghost: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    fullWidth: {
        true: string;
    };
}, undefined, string, tailwind_variants_dist_config_js.TVConfig<{
    variant: {
        primary: string;
        outline: string;
        ghost: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    fullWidth: {
        true: string;
    };
}, {
    variant: {
        primary: string;
        outline: string;
        ghost: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    fullWidth: {
        true: string;
    };
}>, unknown, unknown, undefined>>;
type ButtonVariants = VariantProps<typeof buttonStyles>;
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants;
declare const Button: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants & React.RefAttributes<HTMLButtonElement>>;

declare function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>): react_jsx_runtime.JSX.Element;
declare function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): react_jsx_runtime.JSX.Element;
declare function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
    variant?: "default" | "secondary" | "outline" | "success" | "warning" | "destructive";
};
declare const Badge: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & {
    variant?: "default" | "secondary" | "outline" | "success" | "warning" | "destructive";
} & React.RefAttributes<HTMLSpanElement>>;

declare const inputStyles: tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    invalid: {
        true: string;
        false: string;
    };
}, undefined, string, tailwind_variants_dist_config_js.TVConfig<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    invalid: {
        true: string;
        false: string;
    };
}, {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    invalid: {
        true: string;
        false: string;
    };
}>, {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    invalid: {
        true: string;
        false: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    invalid: {
        true: string;
        false: string;
    };
}, undefined, string, tailwind_variants_dist_config_js.TVConfig<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    invalid: {
        true: string;
        false: string;
    };
}, {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    invalid: {
        true: string;
        false: string;
    };
}>, unknown, unknown, undefined>>;
type InputVariants = VariantProps<typeof inputStyles>;
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & InputVariants;
declare const Input: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & InputVariants & React.RefAttributes<HTMLInputElement>>;

type ModalProps = {
    open: boolean;
    onClose?: () => void;
    children?: React.ReactNode;
    title?: string;
    /** When true, closes when the overlay is clicked */
    closeOnOverlay?: boolean;
};
declare function Modal({ open, onClose, title, closeOnOverlay, children }: ModalProps): React.ReactPortal | null;

type TypoVariant = "display-lg" | "display-md" | "display-sm" | "headline-lg" | "headline-md" | "headline-sm" | "title-lg" | "title-md" | "title-sm" | "label-lg" | "label-md" | "label-sm" | "body-lg" | "body-md" | "body-sm" | "button";
type TypoWeight = "normal" | "medium" | "semibold" | "bold";
type TypoProps<T extends React.ElementType = "span"> = {
    /**
     * Legacy typography scale name (e.g., "title-md", "body-sm", "display-lg").
     * Backed by classes defined in neo-compat.css.
     */
    variant: TypoVariant;
    /** Optional font weight override */
    bold?: TypoWeight;
    /** Use muted foreground token */
    muted?: boolean;
    /** Render as a different element (e.g., "p", "h3") */
    as?: T;
    children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;
declare function Typo<T extends React.ElementType = "span">({ variant, bold, muted, as, className, children, ...props }: TypoProps<T>): react_jsx_runtime.JSX.Element;

type AvatarProps = {
    /** Person's full name (used for initials and alt text) */
    name: string;
    /** Image URL */
    src?: string;
    /** Optional custom background color (CSS color). If omitted, token bg or a derived pastel is used. */
    color?: string;
    /** Accessible alt text; defaults to the person's name */
    alt?: string;
} & VariantProps<typeof avatarStyles> & Omit<React.HTMLAttributes<HTMLDivElement>, "children">;
declare const avatarStyles: tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
    };
}, undefined, string, tailwind_variants_dist_config_js.TVConfig<{
    size: {
        sm: string;
        md: string;
    };
}, {
    size: {
        sm: string;
        md: string;
    };
}>, {
    size: {
        sm: string;
        md: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
    };
}, undefined, string, tailwind_variants_dist_config_js.TVConfig<{
    size: {
        sm: string;
        md: string;
    };
}, {
    size: {
        sm: string;
        md: string;
    };
}>, unknown, unknown, undefined>>;
declare function Avatar({ name, src, color, size, alt, className, style, ...props }: AvatarProps): react_jsx_runtime.JSX.Element;

type AvatarGroupProps = {
    children: React.ReactNode;
    className?: string;
    /** Maximum avatars to display before showing a +N counter */
    max?: number;
    /** Overlap offset in pixels (default 8px) */
    overlapPx?: number;
    /** Adds a separating ring around each avatar to improve contrast */
    withRings?: boolean;
};
declare function AvatarGroup({ children, className, max, overlapPx, withRings }: AvatarGroupProps): react_jsx_runtime.JSX.Element;

type SkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
    rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
};
declare function Skeleton({ className, rounded, ...props }: SkeletonProps): react_jsx_runtime.JSX.Element;

export { Avatar, AvatarGroup, Badge, type BadgeProps, Button, type ButtonProps, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input, type InputProps, Modal, type ModalProps, Skeleton, type SkeletonProps, Typo };
