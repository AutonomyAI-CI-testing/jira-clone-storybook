import cx from "classix";

export const ErrorBase = ({ variant, message, href }: Props) => {
  const imgPath = variant === "404" ? "/images/error-404-wizard.png" : `/images/error-${variant}.svg`;

  return (
    <div className="max-w-[500px] text-center">
      {variant === "404" ? (
        <div className="mx-auto mb-4 flex h-[350px] w-[350px] items-center justify-center rounded-lg bg-background-accent-blue-subtlest">
          <img
            src={imgPath}
            alt="Not found"
            className="h-[280px] w-auto"
          />
        </div>
      ) : (
        <img
          src={imgPath}
          alt="Server error"
          className="mx-auto mb-4 h-[350px] w-auto"
        />
      )}
      {href ? (
        <a
          href={href}
          className={cx(
            "max-w-[100px] text-lg hover:underline active:text-link-pressed",
            variant === "500" ? "text-font-danger" : "text-link"
          )}
        >
          {message}
        </a>
      ) : (
        <span
          className={cx(
            "max-w-[100px] text-lg",
            variant === "500" ? "text-font-danger" : "text-font"
          )}
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
}
