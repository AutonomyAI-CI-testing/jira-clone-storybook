import { forwardRef } from "react";
import cx from "classix";

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      color = "primary",
      variant = "contained",
      size = "md",
      className,
      isLoading = false,
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
        className={cx(
          "flex cursor-pointer items-center justify-center gap-2 rounded p-2 text-font disabled:cursor-not-allowed disabled:opacity-60 transition-all duration-200",
          color === "primary" && primaryStyle(),
          color === "neutral" && neutralStyle(),
          color === "success" && successStyle(),
          color === "danger" && dangerStyle(),
          color === "warning" && warningStyle(),
          color === "info" && infoStyle(),
          size === "lg" && "gap-3 px-8 py-2 text-lg",
          color === "primary" && !isLoading && "hover:shadow-lg hover:shadow-orange-500/30",
          className
        )}
        disabled={isLoading || rest.disabled}
        {...rest}
      >
        {isLoading ? (
          <>
            <svg
              className="h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
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
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "primary" | "neutral" | "success" | "danger" | "warning" | "info";
  variant?: "contained" | "subtlest" | "text";
  size?: "md" | "lg";
  isLoading?: boolean;
}
