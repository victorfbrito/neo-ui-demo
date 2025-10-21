import * as React from "react";
import { useId, useMemo, useRef, useState } from "react";
import Icon from "./Icon";
import Typo from "./Typo";
import Avatar from "./Avatar";
import AvatarGroup from "./AvatarGroup";

export type AutocompleteOption = {
  label: string;
  value: any;
  image?: string;
  group?: Array<{ name: string; image?: string }>;
};

export interface AutocompleteProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  /** Label text displayed above the input */
  title: string;
  /** Array of options to display */
  options: AutocompleteOption[] | string[];
  /** Currently selected option */
  selectedOption: AutocompleteOption | string | null;
  /** Callback when an option is selected */
  onSelect: (option: AutocompleteOption | string | null) => void;
  /** Placeholder text for the input */
  placeholder?: string;
  /** Whether the component is disabled */
  disabled?: boolean;
  /** Maximum height of the options dropdown */
  maxHeight?: number;
  /** Optional id base (for accessibility hooks) */
  id?: string;
}

export default function Autocomplete({
  className = "",
  title,
  options,
  selectedOption,
  onSelect,
  placeholder = "",
  disabled = false,
  maxHeight = 152,
  id,
  ...props
}: AutocompleteProps) {
  const inputId = id ?? useId();
  const listboxId = `${inputId}-listbox`;
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Normalize options
  const normalizedOptions: AutocompleteOption[] = useMemo(() => {
    if (Array.isArray(options) && typeof options[0] === "string") {
      return (options as string[]).map((str) => ({ label: str, value: str }));
    }
    return options as AutocompleteOption[];
  }, [options]);

  // Filter options
  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return normalizedOptions;
    return normalizedOptions.filter((o) => o.label.toLowerCase().includes(q));
  }, [normalizedOptions, searchQuery]);

  const anyOptionHasImage = useMemo(
    () => normalizedOptions.some((o) => !!o.image),
    [normalizedOptions]
  );

  const displayValue =
    selectedOption != null
      ? typeof selectedOption === "string"
        ? selectedOption
        : selectedOption.label
      : searchQuery;

  function openList() {
    if (disabled) return;
    setOpen(true);
  }
  function closeList() {
    setOpen(false);
    setActiveIndex(-1);
  }
  function handleSelect(option: AutocompleteOption) {
    onSelect(option);
    setSearchQuery("");
    closeList();
  }
  function handleClear() {
    onSelect(null);
    setSearchQuery("");
    closeList();
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setOpen(true);
      setActiveIndex(0);
      e.preventDefault();
      return;
    }
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
      scrollActiveIntoView();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
      scrollActiveIntoView();
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = filtered[activeIndex];
      if (item) handleSelect(item);
    } else if (e.key === "Escape") {
      e.preventDefault();
      closeList();
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveIndex(0);
      scrollActiveIntoView();
    } else if (e.key === "End") {
      e.preventDefault();
      setActiveIndex(filtered.length - 1);
      scrollActiveIntoView();
    }
  }

  function scrollActiveIntoView() {
    const list = listRef.current;
    const idx = activeIndex;
    if (!list || idx < 0) return;
    const el = list.children[idx] as HTMLElement | undefined;
    el?.scrollIntoView({ block: "nearest" });
  }

  return (
    <div
      ref={rootRef}
      className={["relative w-full", className].join(" ")}
      {...props}
    >
      <fieldset
        className={[
          "w-full min-w-0 rounded-full border bg-[var(--surface)] transition-colors h-16",
          "border-[var(--border)] focus-within:border-[var(--color-brand)]",
          disabled ? "opacity-60 cursor-not-allowed" : ""
        ].join(" ")}
      >
        <legend className="ml-4 px-1 text-sm leading-none relative">
          <Typo
            variant="label-lg"
            className={[
              "font-normal select-none",
              open ? "text-[var(--color-brand)]" : "text-[var(--muted-fg)]",
              disabled ? "text-[var(--muted-fg)]" : ""
            ].join(" ")}
          >
            {title}
          </Typo>
        </legend>
        <div className="relative flex pl-5 pr-3 pb-1 h-full">
          <div className="flex w-full">
            {/* Input */}
            <input
              id={inputId}
              role="combobox"
              aria-expanded={open}
              aria-controls={listboxId}
              aria-autocomplete="list"
              aria-disabled={disabled || undefined}
              type="text"
              value={displayValue}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (!open) setOpen(true);
                setActiveIndex(0);
              }}
              onFocus={openList}
              onKeyDown={onKeyDown}
              onBlur={() => setTimeout(closeList, 150)}
              disabled={disabled}
              className={[
                "w-full rounded-full border-0 outline-none bg-transparent",
                "text-sm text-[var(--fg)] placeholder:text-[var(--muted-fg)]",
                "pr-2"
              ].join(" ")}
              placeholder={placeholder}
              onClick={() => !disabled && setOpen(true)}
            />

            {/* Action button (clear or expand) */}
            <button
              type="button"
              onClick={
                selectedOption && !open ? handleClear : () => setOpen((s) => !s)
              }
              disabled={disabled}
              aria-label={selectedOption && !open ? "Clear" : open ? "Collapse" : "Expand"}
              className={[
                "flex items-center justify-center rounded-full bg-transparent w-10 h-10",
                disabled ? "cursor-not-allowed" : "hover:bg-[var(--muted)]"
              ].join(" ")}
            >
              <Icon
                name={selectedOption && !open ? "close" : "expand_more"}
                size="md"
                className={[
                  "transition-transform duration-300 text-[var(--muted-fg)]",
                  open ? "rotate-180 text-[var(--color-brand)]" : ""
                ].join(" ")}
              />
            </button>
          </div>
        </div>
      </fieldset>

      {/* Options */}
      {open && !disabled && (
        <div
          className={[
            "absolute z-20 mt-2 w-full overflow-y-auto rounded-3xl border border-[var(--border)]",
            "bg-[var(--surface)] text-[var(--fg)] shadow-md"
          ].join(" ")}
          style={{ maxHeight }}
        >
          {filtered.length > 0 ? (
            <ul id={listboxId} role="listbox" ref={listRef}>
              {filtered.map((option, index) => {
                const active = index === activeIndex;
                const selected =
                  selectedOption != null &&
                  (typeof selectedOption === "string"
                    ? selectedOption === option.label
                    : selectedOption.label === option.label);
                return (
                  <li
                    key={`${option.label}-${index}`}
                    role="option"
                    aria-selected={selected}
                    className={[
                      "flex items-center justify-between px-4 py-2 text-sm cursor-pointer transition-colors",
                      active ? "bg-[var(--muted)]" : "",
                      index !== filtered.length - 1
                        ? "border-b border-[var(--border)]"
                        : ""
                    ].join(" ")}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseDown={(e) => e.preventDefault()} /* keep input focus */
                    onClick={() => handleSelect(option)}
                  >
                    <div className="flex items-center gap-2">
                      {anyOptionHasImage && (
                        <Avatar name={option.label} src={option.image || undefined} />
                      )}
                      <Typo variant="label-lg" className="font-normal text-[var(--fg)]">
                        {option.label}
                      </Typo>
                    </div>
                    {Array.isArray(option.group) && option.group.length > 0 && (
                      <AvatarGroup>
                        {option.group.map((member, i) => (
                          <Avatar key={i} name={member.name} src={member.image || undefined} />
                        ))}
                      </AvatarGroup>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="px-4 py-3">
              <Typo variant="body-sm" className="text-[var(--muted-fg)]">
                No results found
              </Typo>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
