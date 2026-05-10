import cx from "classix";
import { IoCloseOutline } from "react-icons/io5";

export const LabelBadge = ({
  children,
  color = "neutral",
  variant = "subtle",
  size = "md",
  onRemove,
  className,
}: LabelBadgeProps): JSX.Element => {
  const getColorClasses = (): string => {
    if (variant === "subtle") {
      if (color === "green") {
        return "bg-background-accent-green-subtler text-font-accent-green";
      }
      if (color === "blue") {
        return "bg-background-accent-blue-subtler text-font-accent-blue";
      }
      if (color === "grey") {
        return "bg-background-accent-grey-subtler text-font-accent-grey";
      }
      if (color === "brand") {
        return "bg-background-brand-subtlest text-font-brand";
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
      if (color === "neutral") {
        return "bg-background-neutral text-font-subtle";
      }
    }

    if (variant === "bold") {
      if (color === "green") {
        return "bg-background-accent-green-bolder text-font-inverse";
      }
      if (color === "blue") {
        return "bg-background-accent-blue-bolder text-font-inverse";
      }
      if (color === "grey") {
        return "bg-background-accent-grey-bolder text-font-inverse";
      }
      if (color === "brand") {
        return "bg-background-brand-bold text-font-inverse";
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
      if (color === "neutral") {
        return "bg-background-neutral-bold text-font-inverse";
      }
    }

    return "";
  };

  const getSizeClasses = (): string => {
    if (size === "sm") {
      return "px-1.5 py-0.5 text-2xs";
    }
    if (size === "md") {
      return "px-2 py-0.5 text-xs";
    }
    return "";
  };

  return (
    <span
      className={cx(
        "inline-flex items-center gap-1 rounded-full font-primary uppercase",
        getColorClasses(),
        getSizeClasses(),
        className
      )}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label="Remove label"
          className="flex items-center hover:opacity-70"
        >
          <IoCloseOutline size={size === "sm" ? 12 : 14} />
        </button>
      )}
    </span>
  );
};

interface LabelBadgeProps {
  children: React.ReactNode;
  color?:
    | "brand"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "neutral"
    | "green"
    | "blue"
    | "grey";
  variant?: "subtle" | "bold";
  size?: "sm" | "md";
  onRemove?: () => void;
  className?: string;
}
