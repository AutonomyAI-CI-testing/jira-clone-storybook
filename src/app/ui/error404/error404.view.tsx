import { Button } from "@app/components/button";

export const Error404View = () => {
  // Navigate to previous page in browser history
  // Provides a secondary, context-aware navigation option alongside the primary CTA
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-elevation-surface px-4">
      <div className="flex max-w-[600px] flex-col items-center text-center">
        <img
          src="/images/error-404.svg"
          alt="Wizard robot lost in the void"
          className="mb-8 h-[400px] w-auto"
        />
        <h1 className="mb-4 font-primary-black text-8xl text-font">404</h1>
        <h2 className="mb-4 font-primary-black text-2xl text-[color:var(--Red500)]">
          Page not found
        </h2>
        <p className="mb-8 font-primary-light text-font-subtle">
          Looks like this wizard got lost in the void. The page you&apos;re
          looking for doesn&apos;t exist.
        </p>
        {/* Primary CTA: home link as Button. Secondary: browser back as text link for visual hierarchy */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a href="/">
            <Button color="primary" size="lg">
              Go back home
            </Button>
          </a>
          <button
            onClick={handleGoBack}
            className="font-primary text-font-brand hover:underline"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};
