import cx from "classix";

export const LabelBadge = ({
  children,
  color = "info",
  variant = "subtle",
  size = "md",
  dot = false,
  className,
}: LabelBadgeProps): JSX.Element => {
  const primaryStyle = (): string => {
    if (variant === "subtle") {
      return "bg-background-brand-subtlest text-font-brand";
    }

    if (variant === "bold") {
      return "bg-background-brand-bold text-font-inverse";
    }

    return "";
  };

  const neutralStyle = (): string => {
    if (variant === "subtle") {
      return "bg-background-neutral text-font-subtle";
    }

    if (variant === "bold") {
      return "bg-background-neutral-bold text-font-inverse";
    }

    return "";
  };

  const successStyle = (): string => {
    if (variant === "subtle") {
      return "bg-background-success text-font-success";
    }

    if (variant === "bold") {
      return "bg-background-success-bold text-font-inverse";
    }

    return "";
  };

  const dangerStyle = (): string => {
    if (variant === "subtle") {
      return "bg-background-danger text-font-danger";
    }

    if (variant === "bold") {
      return "bg-background-danger-bold text-font-inverse";
    }

    return "";
  };

  const warningStyle = (): string => {
    if (variant === "subtle") {
      return "bg-background-warning text-font-warning";
    }

    if (variant === "bold") {
      return "bg-background-warning-bold text-font-inverse";
    }

    return "";
  };

  const infoStyle = (): string => {
    if (variant === "subtle") {
      return "bg-background-info text-font-info";
    }

    if (variant === "bold") {
      return "bg-background-info-bold text-font-inverse";
    }

    return "";
  };

  const dotColor = (): string => {
    if (variant === "bold") {
      return "bg-font-inverse";
    }

    if (color === "primary") {
      return "bg-font-brand";
    }

    if (color === "neutral") {
      return "bg-font-subtle";
    }

    if (color === "success") {
      return "bg-font-success";
    }

    if (color === "danger") {
      return "bg-font-danger";
    }

    if (color === "warning") {
      return "bg-font-warning";
    }

    if (color === "info") {
      return "bg-font-info";
    }

    return "";
  };

  return (
    <span
      className={cx(
        "inline-flex w-fit items-center gap-1 rounded-full",
        color === "primary" && primaryStyle(),
        color === "neutral" && neutralStyle(),
        color === "success" && successStyle(),
        color === "danger" && dangerStyle(),
        color === "warning" && warningStyle(),
        color === "info" && infoStyle(),
        size === "sm" && "px-1.5 py-0.5 text-2xs",
        size === "md" && "px-2 py-0.5 text-xs",
        className
      )}
    >
      {dot && (
        <span className={cx("h-1.5 w-1.5 rounded-full", dotColor())} />
      )}
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
