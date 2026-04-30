import cx from "classix";

/**
 * Maps color and variant combinations to their corresponding Tailwind CSS classes.
 * Each color has two variants:
 * - subtle: Light background with colored text
 * - bold: Solid colored background with white text
 */
const COLOR_STYLES: Record<
  LabelBadgeProps["color"] & string,
  Record<LabelBadgeProps["variant"] & string, string>
> = {
  primary: {
    subtle: "bg-background-brand-subtlest text-font-brand",
    bold: "bg-background-brand-bold text-font-inverse",
  },
  neutral: {
    subtle: "bg-background-neutral text-font-subtle",
    bold: "bg-background-neutral-bold text-font-inverse",
  },
  success: {
    subtle: "bg-background-success text-font-success",
    bold: "bg-background-success-bold text-font-inverse",
  },
  danger: {
    subtle: "bg-background-danger text-font-danger",
    bold: "bg-background-danger-bold text-font-inverse",
  },
  warning: {
    subtle: "bg-background-warning text-font-warning",
    bold: "bg-background-warning-bold text-font-inverse",
  },
  info: {
    subtle: "bg-background-info text-font-info",
    bold: "bg-background-info-bold text-font-inverse",
  },
};

/**
 * Maps color values to their corresponding dot indicator colors.
 * Bold variant always uses inverse (white) regardless of the badge color.
 */
const DOT_COLORS: Record<LabelBadgeProps["color"] & string, string> = {
  primary: "bg-font-brand",
  neutral: "bg-font-subtle",
  success: "bg-font-success",
  danger: "bg-font-danger",
  warning: "bg-font-warning",
  info: "bg-font-info",
};

export const LabelBadge = ({
  children,
  color = "info",
  variant = "subtle",
  size = "md",
  dot = false,
  className,
}: LabelBadgeProps): JSX.Element => {
  const colorStyles = COLOR_STYLES[color]?.[variant] ?? "";
  const dotColor =
    variant === "bold" ? "bg-font-inverse" : DOT_COLORS[color] ?? "";

  return (
    <span
      className={cx(
        "inline-flex w-fit items-center gap-1 rounded-full",
        colorStyles,
        size === "sm" && "px-1.5 py-0.5 text-2xs",
        size === "md" && "px-2 py-0.5 text-xs",
        className
      )}
    >
      {dot && <span className={cx("h-1.5 w-1.5 rounded-full", dotColor)} />}
      {children}
    </span>
  );
};

export interface LabelBadgeProps {
  children: React.ReactNode;
  color?: "primary" | "neutral" | "success" | "danger" | "warning" | "info";
  variant?: "subtle" | "bold";
  size?: "sm" | "md";
  dot?: boolean;
  className?: string;
}
