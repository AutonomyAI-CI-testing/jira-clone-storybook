export const ErrorBase = ({ variant, message, href }: Props) => {
  const imgSuffix = variant === "500" ? "error-500-custom.png" : "error-404-custom.png";
  const imgPath = `/images/${imgSuffix}`;

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
          className="max-w-[100px] text-lg text-red-500 hover:underline active:text-red-700"
        >
          {message}
        </a>
      ) : (
        <span className="max-w-[100px] text-lg text-red-500">{message}</span>
      )}
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  message: string;
  href: string;
}
