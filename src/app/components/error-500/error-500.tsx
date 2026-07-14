import { Button } from "@app/components/button";

export const Error500 = ({
  message = "Something went wrong on our end. Please try again later.",
  href,
}: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface px-6 py-12">
      {/* Illustration */}
      <div className="mb-8">
        <img
          src="/images/error-500.svg"
          alt="500 illustration"
          style={{
            width: "280px",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      {/* 500 Badge */}
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border-brand bg-background-brand-subtlest px-4 py-1">
        <span className="text-xs font-semibold uppercase tracking-widest text-font-brand">
          Error 500
        </span>
      </div>

      {/* Heading */}
      <h1 className="mb-3 text-center font-primary-black text-4xl text-font">
        Internal Server Error
      </h1>

      {/* Message */}
      <p className="mb-8 max-w-sm text-center text-base text-font-subtle">
        {message}
      </p>

      {/* CTAs */}
      <div className="flex items-center gap-3">
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
        <Button
          color="neutral"
          variant="subtlest"
          size="lg"
          onClick={() => window.location.reload()}
        >
          Try again
        </Button>
      </div>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
