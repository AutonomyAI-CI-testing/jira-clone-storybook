export const ErrorBase = ({ variant, message, href, backgroundImage }: Props) => {
  const imgPath = `/images/error-${variant}.svg`;

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="max-w-[500px] text-center">
        {backgroundImage ? (
          <img
            src={backgroundImage}
            alt="Error illustration"
            className="mx-auto mb-4 h-[380px] w-auto"
          />
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
            className="max-w-[100px] text-lg text-[#1f845a] hover:underline active:text-[#216e4e]"
          >
            {message}
          </a>
        ) : (
          <span className="max-w-[100px] text-lg text-[#1f845a]">{message}</span>
        )}
      </div>
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  message: string;
  href: string;
  backgroundImage?: string;
}
