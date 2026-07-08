export const Error404 = ({ message = "Oops! Page not found.", href = "/" }: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface px-4 text-center">
      <div className="max-w-[480px]">
        {/* Avatar Image */}
        <img
          src="/images/error-404-avatar.png"
          alt="404 Avatar"
          className="mx-auto mb-6 w-[320px] max-w-full rounded-2xl"
        />

        {/* 404 badge */}
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-red-500">
          Error 404
        </p>

        {/* Heading */}
        <h1 className="mb-3 text-4xl font-primary-bold" style={{ color: "#18ff00" }}>
          Page Not Found
        </h1>

        {/* Subheading */}
        <p className="mb-8 text-base text-red-500">
          {message}
        </p>

        {/* CTA */}
        <a
          href={href}
          className="inline-flex items-center gap-2 rounded-lg bg-background-brand-bold px-6 py-3 text-base font-primary-bold text-font-inverse transition-opacity hover:opacity-90 active:opacity-75"
        >
          ← Take me home
        </a>
      </div>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
