import { forwardRef } from "react";
import cx from "classix";

type Color = "primary" | "neutral" | "success" | "danger" | "warning" | "info";
type Variant = "contained" | "subtlest" | "text";
type Size = "md" | "lg";

const baseStyle = (): string =>
  "flex cursor-pointer items-center justify-center gap-2 rounded p-2 text-font disabled:cursor-not-allowed disabled:opacity-60";

const sizeStyle = (size: Size): string => {
  if (size === "lg") {
    return "gap-3 px-8 py-2 text-lg";
  }

  return "";
};

const primaryStyle = (variant: Variant): string => {
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

const neutralStyle = (variant: Variant): string => {
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

const successStyle = (variant: Variant): string => {
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

const dangerStyle = (variant: Variant): string => {
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

const warningStyle = (variant: Variant): string => {
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

const infoStyle = (variant: Variant): string => {
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

/**
 * The class list of the `Button` look, for elements that must not be a
 * `<button>` — a `Link` styled as a button, for instance. A single interactive
 * element, never a button nested inside a link.
 */
export const buttonClasses = ({
  color = "primary",
  variant = "contained",
  size = "md",
  className = "",
}: ButtonClassesOptions = {}): string =>
  cx(
    baseStyle(),
    color === "primary" && primaryStyle(variant),
    color === "neutral" && neutralStyle(variant),
    color === "success" && successStyle(variant),
    color === "danger" && dangerStyle(variant),
    color === "warning" && warningStyle(variant),
    color === "info" && infoStyle(variant),
    sizeStyle(size),
    className
  );

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      color = "primary",
      variant = "contained",
      size = "md",
      className,
      ...rest
    },
    forwardedRef
  ) => (
    <button
      ref={forwardedRef}
      className={buttonClasses({ color, variant, size, className })}
      {...rest}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: Color;
  variant?: Variant;
  size?: Size;
}

interface ButtonClassesOptions {
  color?: Color;
  variant?: Variant;
  size?: Size;
  className?: string;
}
