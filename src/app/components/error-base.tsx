export const ErrorBase = ({ variant, message, href }: Props) => {
  const ext = variant === "404" ? "png" : "svg";
  const imgPath = `/images/error-${variant}.${ext}`;

  return (
    <div className="max-w-[500px] text-center">
      <img
        src={imgPath}
        alt="Server error"
        className="mx-auto mb-0 h-[500px] w-auto"
      />
      {message && (
        href ? (
          <a
            href={href}
            className="max-w-[100px] text-lg text-link hover:underline active:text-link-pressed"
          >
            {message}
          </a>
        ) : (
          <span className="max-w-[100px] text-lg text-red-500">{message}</span>
        )
      )}
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  message?: string;
  href?: string;
}
