export const Error500 = ({ message, href }: Props) => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background-danger-bold">
      <div className="flex flex-col items-center gap-8">
        {/* Wizard Robot Illustration */}
        <img
          src="/images/wizard-robot.png"
          alt="500 wizard robot"
          className="h-[280px] w-auto drop-shadow-lg"
        />

        {/* 500 eRrOR heading */}
        <h1 className="font-primary-black text-6xl tracking-tight text-black">
          500 eRrOR
        </h1>

        {/* Optional message / link */}
        {href ? (
          <a
            href={href}
            className="text-lg text-black underline-offset-4 opacity-90 hover:underline hover:opacity-100 active:opacity-70"
          >
            {message ?? "Go back to the main page"}
          </a>
        ) : (
          message && (
            <span className="max-w-[400px] text-center text-lg text-black opacity-90">
              {message}
            </span>
          )
        )}
      </div>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
