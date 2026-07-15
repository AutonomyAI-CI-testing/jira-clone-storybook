export const Error404 = ({ message = "We can't find this page", href = "/" }: Props) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-6 py-12" style={{ backgroundColor: '#f0e9d8' }}>
      {/* Illustration */}
      <div className="mb-8 flex items-center justify-center">
        <img
          src="/images/error-404-wizard.jpg"
          alt="404 Wizard Robot"
          className="h-auto w-full max-w-[480px] object-contain"
        />
      </div>

      {/* Error code */}
      <p className="mb-2 font-primary-bold text-[0.875rem] uppercase tracking-widest text-font-subtlest">
        Error 404
      </p>

      {/* Heading */}
      <h1 className="mb-4 text-center font-primary-black text-[2.5rem] leading-tight text-font">
        {message}
      </h1>

      {/* Subtitle */}
      <p className="mb-8 max-w-[400px] text-center font-primary-light text-[1rem] leading-relaxed text-font-subtle">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get
        you back to familiar territory.
      </p>

      {/* CTA */}
      {href && (
        <a
          href={href}
          className="inline-flex items-center gap-2 rounded bg-background-brand-bold px-6 py-3 font-primary-bold text-[0.9375rem] text-font-inverse transition-colors hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
        >
          ← Back to home
        </a>
      )}
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
