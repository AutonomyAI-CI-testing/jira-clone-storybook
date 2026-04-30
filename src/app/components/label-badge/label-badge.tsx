import cx from "classix";

// Maps color and variant combinations to their respective Tailwind classes
const COLOR_STYLES: Record<
  LabelBadgeProps["color"] & string,
  { subtle: string; bold: string }
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

export const LabelBadge = ({
  children,
  color = "info",
  variant = "subtle",
  size = "sm",
  className,
}: LabelBadgeProps): JSX.Element => {
  const colorClasses = COLOR_STYLES[color]?.[variant] ?? "";

  return (
    <span
      className={cx(
        "inline-flex items-center rounded font-primary-bold uppercase",
        colorClasses,
        size === "sm" && "px-1.5 py-0.5 text-2xs",
        size === "md" && "px-2 py-1 text-xs",
        className
      )}
    >
      {children}
    </span>
  );
};

interface LabelBadgeProps {
  children: React.ReactNode;
  color?: "primary" | "neutral" | "success" | "danger" | "warning" | "info";
  variant?: "subtle" | "bold";
  size?: "sm" | "md";
  className?: string;
}
