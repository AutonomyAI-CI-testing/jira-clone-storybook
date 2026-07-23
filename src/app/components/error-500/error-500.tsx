export const Error500 = ({
  message = "Something went wrong on our end. Hang tight!",
  href,
}: Props) => {
  return (
    <div className="flex flex-col items-center text-center max-w-[480px] gap-6">
      <img
        src="/images/error-404-wizard.png"
        alt="500 server error wizard robot"
        className="w-[260px] h-auto"
      />
      <div className="flex flex-col gap-2">
        <h1 className="font-primary-black text-[3rem] leading-[1.2] text-font">
          500
        </h1>
        <p className="font-primary text-lg text-font-subtle">{message}</p>
      </div>
      {href && (
        <a
          href={href}
          className="font-primary-bold text-font-brand hover:underline active:text-[color:var(--Blue800)] transition-colors duration-200"
        >
          ← Go back home
        </a>
      )}
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
