const errorImage: Record<Props["variant"], { src: string; alt: string }> = {
  "404": { src: "/images/error-404.png", alt: "Lost robot mascot" },
  "500": { src: "/images/error-500.svg", alt: "Server error" },
};

export const ErrorBase = ({ variant, message, href }: Props) => {
  const { src, alt } = errorImage[variant];

  return (
    <div className="max-w-[500px] text-center">
      <img
        src={src}
        alt={alt}
        className="mx-auto mb-4 h-[350px] w-auto"
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
