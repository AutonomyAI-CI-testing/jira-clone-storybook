export const ErrorBase = ({ variant, message, href, backgroundImage }: Props) => {
  const imgPath = `/images/error-${variant}.svg`;

  const body = href ? (
    <a
      href={href}
      className="max-w-[100px] text-lg text-link hover:underline active:text-link-pressed"
    >
      {message}
    </a>
  ) : (
    <span className="max-w-[100px] text-lg text-font-danger">{message}</span>
  );

  if (backgroundImage) {
    return (
      <div
        role="img"
        aria-label="Error illustration"
        className="flex min-h-screen w-full flex-col items-center justify-end bg-elevation-surface bg-contain bg-center bg-no-repeat pb-10 text-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="whitespace-nowrap">{body}</div>
      </div>
    );
  }

  return (
    <div className="max-w-[500px] text-center">
      <img
        src={imgPath}
        alt="Server error"
        className="mx-auto mb-4 h-[350px] w-auto"
      />
      {body}
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  message: string;
  href: string;
  backgroundImage?: string;
}
