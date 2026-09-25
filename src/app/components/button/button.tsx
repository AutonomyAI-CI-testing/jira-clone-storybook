import { forwardRef } from "react";
import cx from "classix";

const Spinner = (): JSX.Element => (
  <svg
    className="h-[1em] w-[1em] shrink-0 animate-spin"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      d="M22 12a10 10 0 0 0-10-10"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      color = "primary",
      variant = "contained",
      size = "md",
      loading = false,
      icon,
      className,
      disabled,
      ...rest
    },
    forwardedRef
  ) => {
    const primaryStyle = (): string => {
      if (variant === "contained") {
        return "bg-background-brand-bold text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed";
      }

      if (variant === "subtlest") {
        return "bg-background-brand-subtlest text-font-brand hover:bg-background-brand-subtlest-hovered active:bg-background-brand-subtlest-pressed";
      }

      if (variant === "text") {
        return "text-font-brand hover:bg-background-brand-subtlest-hovered active:bg-background-brand-subtlest-pressed";
      }

      return "";
    };

    const neutralStyle = (): string => {
      if (variant === "contained") {
        return "bg-background-neutral-bold text-font-inverse hover:bg-background-neutral-bold-hovered active:bg-background-neutral-bold-pressed";
      }

      if (variant === "subtlest") {
        return "bg-background-neutral hover:bg-background-neutral-hovered active:bg-background-neutral-pressed";
      }

      if (variant === "text") {
        return "text-font-subtle hover:bg-background-neutral-hovered active:bg-background-neutral-pressed";
      }

      return "";
    };

    const successStyle = (): string => {
      if (variant === "contained") {
        return "bg-background-success-bold text-font-inverse hover:bg-background-success-bold-hovered active:bg-background-success-bold-pressed";
      }

      if (variant === "subtlest") {
        return "bg-background-success text-font-success hover:bg-background-success-hovered active:bg-background-success-pressed";
      }

      if (variant === "text") {
        return "text-font-success hover:bg-background-success-hovered active:bg-background-success-pressed";
      }

      return "";
    };

    const dangerStyle = (): string => {
      if (variant === "contained") {
        return "bg-background-danger-bold text-font-inverse hover:bg-background-danger-bold-hovered active:bg-background-danger-bold-pressed";
      }

      if (variant === "subtlest") {
        return "bg-background-danger text-font-danger hover:bg-background-danger-hovered active:bg-background-danger-pressed";
      }

      if (variant === "text") {
        return "text-font-danger hover:bg-background-danger-hovered active:bg-background-danger-pressed";
      }

      return "";
    };

    const warningStyle = (): string => {
      if (variant === "contained") {
        return "bg-background-warning-bold text-font-inverse hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed";
      }

      if (variant === "subtlest") {
        return "bg-background-warning text-font-warning hover:bg-background-warning-hovered active:bg-background-warning-pressed";
      }

      if (variant === "text") {
        return "text-font-warning hover:bg-background-warning-hovered active:bg-background-warning-pressed";
      }

      return "";
    };

    const infoStyle = (): string => {
      if (variant === "contained") {
        return "bg-background-info-bold text-font-inverse hover:bg-background-info-bold-hovered active:bg-background-info-bold-pressed";
      }

      if (variant === "subtlest") {
        return "bg-background-info text-font-info hover:bg-background-info-hovered active:bg-background-info-pressed";
      }

      if (variant === "text") {
        return "text-font-info hover:bg-background-info-hovered active:bg-background-info-pressed";
      }

      return "";
    };

    return (
      <button
        ref={forwardedRef}
        {...rest}
        aria-busy={loading || undefined}
        disabled={loading || disabled}
        className={cx(
          "flex cursor-pointer items-center justify-center gap-2 rounded p-2 text-font disabled:cursor-not-allowed disabled:opacity-60",
          color === "primary" && primaryStyle(),
          color === "neutral" && neutralStyle(),
          color === "success" && successStyle(),
          color === "danger" && dangerStyle(),
          color === "warning" && warningStyle(),
          color === "info" && infoStyle(),
          size === "sm" && "gap-1.5 px-1.5 py-0.5 text-sm",
          size === "lg" && "gap-3 px-8 py-2 text-lg",
          className
        )}
      >
        {loading ? <Spinner /> : icon}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "primary" | "neutral" | "success" | "danger" | "warning" | "info";
  variant?: "contained" | "subtlest" | "text";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  icon?: React.ReactNode;
}
