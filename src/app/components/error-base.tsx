export const ErrorBase = ({ variant, message, href }: Props) => {
  const imgPath =
    variant === "404"
      ? `/images/error-${variant}.png`
      : `/images/error-${variant}.svg`;

  return (
    <div className="max-w-[500px] text-center border border-black rounded">
      <img
        src={imgPath}
        alt="Server error"
        className={`mx-auto mb-4 w-auto ${variant === "404" ? "h-[420px]" : "h-[350px]"}`}
      />
      {href ? (
        <a
          href={href}
          className="max-w-[100px] text-lg text-link hover:underline active:text-link-pressed"
        >
          {message}
        </a>
      ) : (
        <span className="max-w-[100px] text-lg" style={{ color: '#FF0000FF' }}>{message}</span>
      )}
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  message: string;
  href: string;
}
