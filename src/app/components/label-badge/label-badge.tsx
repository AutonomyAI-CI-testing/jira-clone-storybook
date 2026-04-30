import cx from "classix";

export const LabelBadge = ({
  children,
  color = "info",
  variant = "subtle",
  size = "sm",
  className,
}: LabelBadgeProps): JSX.Element => {
  const subtleColorStyle = (): string => {
    if (color === "primary") {
      return "bg-background-brand-subtlest text-font-brand";
    }

    if (color === "neutral") {
      return "bg-background-neutral text-font-subtle";
    }

    if (color === "success") {
      return "bg-background-success text-font-success";
    }

    if (color === "danger") {
      return "bg-background-danger text-font-danger";
    }

    if (color === "warning") {
      return "bg-background-warning text-font-warning";
    }

    if (color === "info") {
      return "bg-background-info text-font-info";
    }

    return "";
  };

  const boldColorStyle = (): string => {
    if (color === "primary") {
      return "bg-background-brand-bold text-font-inverse";
    }

    if (color === "neutral") {
      return "bg-background-neutral-bold text-font-inverse";
    }

    if (color === "success") {
      return "bg-background-success-bold text-font-inverse";
    }

    if (color === "danger") {
      return "bg-background-danger-bold text-font-inverse";
    }

    if (color === "warning") {
      return "bg-background-warning-bold text-font-inverse";
    }

    if (color === "info") {
      return "bg-background-info-bold text-font-inverse";
    }

    return "";
  };

  return (
    <span
      className={cx(
        "inline-flex items-center rounded font-primary-bold uppercase",
        variant === "subtle" && subtleColorStyle(),
        variant === "bold" && boldColorStyle(),
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
