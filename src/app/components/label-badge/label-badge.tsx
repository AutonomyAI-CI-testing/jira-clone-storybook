import { forwardRef } from "react";
import cx from "classix";
import { HiX } from "react-icons/hi";

// Color style mapping
const COLOR_STYLES: Record<Props["color"], string> = {
  primary: "bg-background-brand-subtlest text-font-brand",
  neutral: "bg-background-neutral text-font-subtle",
  success: "bg-background-success text-font-success",
  danger: "bg-background-danger text-font-danger",
  warning: "bg-background-warning text-font-warning",
  info: "bg-background-info text-font-info",
  blue: "bg-background-accent-blue-subtler text-font-accent-blue",
};

// Size style mapping
const SIZE_STYLES: Record<Props["size"], string> = {
  sm: "px-2 py-1 text-xs",
  md: "px-3 py-1.5 text-sm",
};

export const LabelBadge = forwardRef<HTMLSpanElement, Props>(
  (
    {
      children,
      color = "primary",
      size = "md",
      removable = false,
      onRemove,
      className,
      ...rest
    },
    forwardedRef
  ) => {
    return (
      <span
        ref={forwardedRef}
        className={cx(
          "inline-flex items-center gap-2 rounded",
          COLOR_STYLES[color],
          SIZE_STYLES[size],
          className
        )}
        {...rest}
      >
        {children}
        {removable && (
          <button
            type="button"
            onClick={onRemove}
            className="inline-flex cursor-pointer items-center justify-center rounded p-0.5 hover:bg-black/10 dark:hover:bg-white/10"
            aria-label="Remove badge"
          >
            <HiX className="h-3 w-3" />
          </button>
        )}
      </span>
    );
  }
);

LabelBadge.displayName = "LabelBadge";

export interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  color?:
    | "primary"
    | "neutral"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "blue";
  size?: "sm" | "md";
  removable?: boolean;
  onRemove?: () => void;
}
