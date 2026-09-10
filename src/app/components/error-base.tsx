const renderMessage = (message: string) => {
  const parts = message.split(/(Error)/g);
  return parts.map((part, i) =>
    part === "Error" ? (
      <span key={i} className="text-font-danger">
        {part}
      </span>
    ) : (
      part
    ),
  );
};

export const ErrorBase = ({ variant, message, href }: Props) => {
  const imgPath = variant === "404" ? "/images/error-404-wizard.png" : `/images/error-${variant}.svg`;

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
          className="max-w-[100px] text-lg text-link hover:underline active:text-link-pressed"
        >
          {renderMessage(message)}
        </a>
      ) : (
        <span className="max-w-[100px] text-lg text-font">{renderMessage(message)}</span>
      )}
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  message: string;
  href: string;
}
