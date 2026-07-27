export const ErrorBase = ({ variant, message, href }: Props) => {
  const imgPath = variant === "404" ? `/images/error-404-wizard.png` : `/images/error-${variant}.svg`;

  return (
    <div className="max-w-[500px] text-center">
      <img
        src={imgPath}
        alt="Server error"
        className="mx-auto mb-4 h-[350px] w-auto"
      />
      {href ? (
        <a
          href={href}
          className={`max-w-[100px] text-lg hover:underline active:text-link-pressed ${
            variant === "500" ? "text-red-500" : "text-link"
          }`}
        >
          {message}
        </a>
      ) : (
        <span
          className={`max-w-[100px] text-lg ${
            variant === "500" ? "text-red-500" : "text-font"
          }`}
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
