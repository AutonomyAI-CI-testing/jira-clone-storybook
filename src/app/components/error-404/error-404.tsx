export const Error404 = ({ message, href }: Props) => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background-danger-bold">
      <div className="flex flex-col items-center gap-8">
        {/* Wizard Robot Illustration */}
        <img
          src="/images/wizard-robot.png"
          alt="404 wizard robot"
          className="h-[280px] w-auto drop-shadow-lg"
        />

        {/* 404 eRrOR heading */}
        <h1 className="font-primary-black text-6xl tracking-tight text-font-inverse">
          404 eRrOR
        </h1>

        {/* Optional message / link */}
        {href ? (
          <a
            href={href}
            className="text-lg text-font-inverse underline-offset-4 opacity-90 hover:underline hover:opacity-100 active:opacity-70"
          >
            {message ?? "Go back to the main page"}
          </a>
        ) : (
          message && (
            <span className="max-w-[400px] text-center text-lg text-font-inverse opacity-90">
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
