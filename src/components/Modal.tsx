import * as React from "react";
import { createPortal } from "react-dom";

export type ModalProps = {
  open: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  title?: string;
  /** When true, closes when the overlay is clicked */
  closeOnOverlay?: boolean;
};

function useIsomorphicLayoutEffect(effect: React.EffectCallback, deps?: React.DependencyList) {
  const useEffectHook = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
  useEffectHook(effect, deps);
}

export function Modal({
  open,
  onClose,
  title,
  closeOnOverlay = true,
  children
}: ModalProps) {
  const [mounted, setMounted] = React.useState(false);

  // Prevent body scroll when open
  useIsomorphicLayoutEffect(() => {
    setMounted(true);
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!mounted) return null;
  if (!open) return null;

  const overlay = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => closeOnOverlay && onClose?.()}
      />
      <div className="relative z-10 w-full max-w-lg rounded-[var(--radius-lg)] bg-[var(--surface)] text-[var(--fg)] p-6 shadow-xl">
        {title ? (
          <h2 id="modal-title" className="mb-2 text-lg font-semibold">
            {title}
          </h2>
        ) : null}
        <div>{children}</div>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="btn btn-outline"
            type="button"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  const container = document.body;
  return createPortal(overlay, container);
}
