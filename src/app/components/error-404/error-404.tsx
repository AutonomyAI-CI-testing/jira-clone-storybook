import { Button } from "@app/components/button";

// Default navigation target when user clicks "Go back home"
const DEFAULT_HREF = "/projects";

// Mascot image path for the wizard robot illustration
const MASCOT_IMAGE = "/images/error-404-wizard.svg";

export const Error404 = ({ href = DEFAULT_HREF }: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#faf8f3] px-4 text-center">
      <img
        src={MASCOT_IMAGE}
        alt="Wizard robot mascot"
        className="h-auto w-64 sm:w-80"
      />
      {/* Error code displayed prominently in red to signal the error state */}
      <h1 className="font-primary-black text-8xl text-[color:var(--Red500)]">
        404
      </h1>
      {/* Friendly message to reduce user frustration with a playful tone */}
      <p className="font-primary-bold text-2xl text-[color:var(--Red500)]">
        Oops! This page has vanished into thin air
      </p>
      <p className="max-w-md text-base text-font-subtle">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      {/* Single clear CTA to help users navigate back to a safe location */}
      <a href={href}>
        <Button color="primary" variant="contained" size="lg">
          Go back home
        </Button>
      </a>
    </div>
  );
};

interface Props {
  /** URL to navigate to when clicking "Go back home". Defaults to /projects */
  href?: string;
}
