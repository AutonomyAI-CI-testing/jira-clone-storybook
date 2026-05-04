import { forwardRef } from "react";
import cx from "classix";

// Color variant styles - each color gets a specific background and text color from the design system
const COLOR_STYLES: Record<string, string> = {
  primary: "bg-background-brand-subtlest text-font-brand",
  neutral: "bg-background-neutral text-font-subtle",
  success: "bg-background-success text-font-success",
  danger: "bg-background-danger text-font-danger",
  warning: "bg-background-warning text-font-warning",
  info: "bg-background-info text-font-info",
};

// Size variant styles - controls padding and text size
const SIZE_STYLES: Record<string, string> = {
  sm: "px-2 py-1 text-2xs",
  md: "px-3 py-1.5 text-xs",
};

export const LabelBadge = forwardRef<HTMLSpanElement, Props>(
  (
    {
      children,
      color = "info",
      size = "md",
      className,
      ...rest
    },
    forwardedRef
  ) => {
    return (
      <span
        ref={forwardedRef}
        className={cx(
          "inline-flex items-center justify-center rounded-full font-primary text-font",
          SIZE_STYLES[size],
          COLOR_STYLES[color],
          className
        )}
        {...rest}
      >
        {children}
      </span>
    );
  }
);

LabelBadge.displayName = "LabelBadge";

export interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  color?: "primary" | "neutral" | "success" | "danger" | "warning" | "info";
  size?: "sm" | "md";
}
