export const ErrorBase = ({ variant, message, href, subtitle }: Props) => {
  const imgPath = `/images/error-${variant}.svg`;

  return (
    <div className="flex max-w-[500px] flex-col items-center gap-6 text-center">
      {/* Circular gradient-bordered image container */}
      <div
        className="rounded-full p-1"
        style={{
          background: "linear-gradient(135deg, #818cf8, #2dd4bf)",
        }}
      >
        <div className="h-[200px] w-[200px] overflow-hidden rounded-full bg-elevation-surface">
          <img
            src={imgPath}
            alt={`Error ${variant}`}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      {/* Error code heading */}
      <h1
        className="font-primary-black text-[80px] leading-none"
        style={{ color: "#faa53d" }}
      >
        {variant}
      </h1>
      {/* Subtitle */}
      {subtitle && (
        <p className="-mt-3 text-base text-font-subtle">{subtitle}</p>
      )}
      {/* Message / link */}
      {href ? (
        <a
          href={href}
          className="text-lg text-link hover:underline active:text-link-pressed"
        >
          {message}
        </a>
      ) : (
        <span className="text-lg text-font">{message}</span>
      )}
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  message: string;
  href: string;
  subtitle?: string;
}
