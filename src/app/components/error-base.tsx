import cx from "classix";

export const ErrorBase = ({
  variant,
  message,
  href,
  messageClassName,
}: Props) => {
  const imgPath = `/images/error-${variant}.svg`;

  return (
    <div className="max-w-[500px] text-center">
      <img
        src={imgPath}
        alt="Server error"
        className="mx-auto mb-4 h-[350px] w-auto"
      />
      {/* Render as link if href provided, otherwise plain text */}
      {href ? (
        <a
          href={href}
          className={cx(
            "max-w-[100px] text-lg text-link hover:underline active:text-link-pressed",
            messageClassName
          )}
        >
          {message}
        </a>
      ) : (
        <span
          className={cx("max-w-[100px] text-lg text-font", messageClassName)}
        >
          {message}
        </span>
      )}
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  message: string;
  href: string;
  /** Optional className override for message styling (e.g., custom text color) */
  messageClassName?: string;
}
