import cx from "classix";

// Dimensions match the aspect ratio of the error SVG illustrations
const ERROR_IMAGE_HEIGHT = 350;
const ERROR_IMAGE_MAX_WIDTH = 400;
const MESSAGE_SKELETON_WIDTH = 200;
const MESSAGE_SKELETON_HEIGHT = 28; // h-7 = 1.75rem = 28px

export const ErrorBase = ({
  variant,
  message,
  href,
  isLoading,
  disabled,
  errorMessage,
}: Props) => {
  const imgPath = `/images/error-${variant}.svg`;

  return (
    <div
      className={cx(
        "max-w-[500px] text-center",
        // Disabled state prevents interaction but keeps the content visible for context
        disabled && "pointer-events-none cursor-not-allowed opacity-50"
      )}
    >
      {/* Error message banner displayed above the illustration for immediate visibility */}
      {errorMessage && (
        <div className="border-danger mb-4 flex items-center gap-2 rounded-lg border bg-background-danger px-4 py-3 text-sm font-medium text-font-danger">
          <span className="mr-2 text-xl text-icon-accent-red">⚠</span>
          <span>{errorMessage}</span>
        </div>
      )}
      {/* Skeleton placeholder matches the dimensions of the actual error illustration */}
      {isLoading ? (
        <div
          className="mx-auto mb-4 w-auto animate-pulse rounded-lg bg-background-neutral"
          style={{
            height: ERROR_IMAGE_HEIGHT,
            maxWidth: ERROR_IMAGE_MAX_WIDTH,
          }}
        />
      ) : (
        <img
          src={imgPath}
          alt="Server error"
          className="mx-auto mb-4 w-auto"
          style={{ height: ERROR_IMAGE_HEIGHT }}
        />
      )}
      {/* Message displayed as link if href is provided, otherwise as plain text */}
      {isLoading ? (
        <div
          className="mx-auto animate-pulse rounded bg-background-neutral"
          style={{
            height: MESSAGE_SKELETON_HEIGHT,
            width: MESSAGE_SKELETON_WIDTH,
          }}
        />
      ) : href ? (
        <a
          href={href}
          className="active:text-font-accent-green/80 max-w-[100px] text-lg text-font-accent-green hover:underline"
        >
          {message}
        </a>
      ) : (
        <span className="max-w-[100px] text-lg text-font-accent-green">
          {message}
        </span>
      )}
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  message?: string;
  href?: string;
  isLoading?: boolean;
  disabled?: boolean;
  errorMessage?: string;
}
