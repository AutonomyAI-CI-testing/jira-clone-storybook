export const ErrorBase = ({ variant, message, href, imageSrc, danger }: Props) => {
  const imgPath = imageSrc ?? `/images/error-${variant}.svg`;

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
          className={`max-w-[100px] text-lg hover:underline ${
            danger ? "text-font-danger" : "text-link active:text-link-pressed"
          }`}
        >
          {message}
        </a>
      ) : (
        <span
          className={`max-w-[100px] text-lg ${
            danger ? "text-font-danger" : "text-font"
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
  imageSrc?: string;
  danger?: boolean;
}
