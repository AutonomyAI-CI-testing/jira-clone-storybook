import { Button } from "@app/components/button";

export const Error404 = ({ message = "Oops! Page not found.", href }: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface px-6 py-12">
      {/* Illustration — image already includes the gradient ring border */}
      <div className="mb-8">
        <img
          src="/images/error-404-illustration.png"
          alt="404 illustration"
          style={{
            width: "320px",
            height: "320px",
            borderRadius: "9999px",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* 404 Badge */}
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border-brand bg-background-brand-subtlest px-4 py-1">
        <span className="text-xs font-semibold uppercase tracking-widest text-font-brand">Error 404</span>
      </div>

      {/* Heading */}
      <h1 className="mb-3 text-center font-primary-black text-4xl text-font">
        Page Not Found
      </h1>

      {/* Message */}
      <p className="mb-8 max-w-sm text-center text-base text-font-subtle">
        {message}
      </p>

      {/* CTA */}
      {href ? (
        <a href={href}>
          <Button color="primary" size="lg">
            Go back home
          </Button>
        </a>
      ) : (
        <Button color="neutral" size="lg" disabled>
          Go back home
        </Button>
      )}
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
