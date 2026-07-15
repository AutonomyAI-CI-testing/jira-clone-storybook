import { Button } from "@app/components/button";

export const Error404 = ({
  message = "Looks like you're lost in another dimension.",
  href = "/",
}: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface px-6 text-center">
      {/* Illustration */}
      <div
        className="animate-float mb-8 overflow-hidden rounded-full"
        style={{
          padding: "8px",
          background:
            "linear-gradient(135deg, #5eead4 0%, #38bdf8 45%, #818cf8 100%)",
          boxShadow: "0 0 56px rgba(56,189,248,0.4)",
        }}
      >
        <img
          src="/images/error-404-illustration.png"
          alt="404 illustration"
          className="block h-[280px] w-[280px] object-cover"
        />
      </div>

      {/* 404 heading */}
      <h1
        className="font-primary-black mb-3 leading-none tracking-tight text-font"
        style={{ fontSize: "6rem" }}
      >
        4
        <span className="text-[color:var(--Blue700)]">0</span>
        4
      </h1>

      {/* Subtitle */}
      <p className="font-primary mb-2 text-xl text-font">Page not found</p>

      {/* Message */}
      <p className="font-primary-light mb-8 max-w-sm text-font-subtle">
        {message}
      </p>

      {/* CTA */}
      <a href={href}>
        <Button color="primary" variant="contained" size="lg">
          Go back home
        </Button>
      </a>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
