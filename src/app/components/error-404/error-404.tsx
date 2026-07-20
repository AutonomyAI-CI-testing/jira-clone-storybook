import { forwardRef } from "react";
import cx from "classix";
import { Button } from "../button";

export const Error404 = forwardRef<HTMLDivElement, Props>(
  (
    {
      title = "404",
      description,
      actions,
      href,
      linkLabel = "Go Home",
      message,
      className,
      imageClassName,
      showImage = true,
      imageAlt = "404 Error - Page not found",
    },
    ref
  ) => {
    const finalDescription = description || message;

    return (
      <div
        ref={ref}
        className={cx(
          "flex flex-col items-center gap-6 px-4 py-8 text-center sm:px-6 md:px-8",
          className
        )}
      >
        {showImage && (
          <img
            src="/images/error-404.svg"
            alt={imageAlt}
            className={
              imageClassName || "h-[280px] w-auto sm:h-[320px] md:h-[350px]"
            }
          />
        )}

        <h1 className="font-primary-black text-4xl sm:text-5xl" style={{ color: "#ae2a19" }}>
          {title}
        </h1>

        {finalDescription && (
          <p className="max-w-lg font-primary-light text-base leading-relaxed text-font-subtle sm:text-lg">
            {finalDescription}
          </p>
        )}

        {actions && actions.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {actions.map((action, index) => (
              <a key={index} href={action.href}>
                <Button
                  variant={action.variant || "contained"}
                  color={action.color || "primary"}
                >
                  {action.label}
                </Button>
              </a>
            ))}
          </div>
        ) : href ? (
          <a
            href={href}
            className="pt-4 text-lg text-link hover:underline active:text-link-pressed"
          >
            {linkLabel}
          </a>
        ) : null}
      </div>
    );
  }
);

Error404.displayName = "Error404";

export interface ActionButton {
  label: string;
  href: string;
  variant?: "contained" | "subtlest" | "text";
  color?: "primary" | "neutral";
}

export interface Props {
  title?: string;
  description?: string;
  actions?: ActionButton[];
  href?: string;
  linkLabel?: string;
  message?: string;
  className?: string;
  imageClassName?: string;
  showImage?: boolean;
  imageAlt?: string;
}
