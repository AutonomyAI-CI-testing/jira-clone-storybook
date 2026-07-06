export const ErrorBase = ({ variant, message, href }: Props) => {
  const imgPath = variant === "500" ? "/images/error-500-wizard.jpg" : `/images/error-${variant}.svg`;

  return (
    <div className="max-w-[500px] text-center">
      <img
        src={imgPath}
        alt="Server error"
        className={`mb-4 ${
          variant === "500"
            ? "w-full object-cover"
            : "mx-auto h-[350px] w-auto"
        }`}
      />
      {href ? (
        <a
          href={href}
          className="max-w-[100px] text-lg text-link hover:underline active:text-link-pressed"
        >
          {message}
        </a>
      ) : (
        <span className="max-w-[100px] text-lg text-font">{message}</span>
      )}
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  message: string;
  href: string;
}
