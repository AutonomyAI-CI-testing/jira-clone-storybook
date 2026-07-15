export const Error500 = ({
  message = "Something went wrong on our end. Please try again!",
  href,
}: Props) => {
  return (
    <div className="flex flex-col items-center text-center gap-6 max-w-[520px]">
      <img
        src="/images/error-404-wizard.jpg"
        alt="500 Wizard Robot"
        className="w-[320px] h-auto rounded-xl"
      />
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-primary-black text-[4rem] leading-none text-font tracking-tight">
          500
        </h1>
        <p className="font-primary text-lg" style={{ color: "#1f845a" }}>{message}</p>
      </div>
      {href && (
        <a
          href={href}
          className="inline-flex items-center gap-2 px-6 py-2 rounded bg-background-brand-bold text-font-inverse font-primary-bold text-sm hover:opacity-90 active:opacity-75 transition-opacity"
        >
          ← Back to main page
        </a>
      )}
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
