const HEADLINE = "Let’s Find Your Ideal Space";
const SUBTITLE =
  "Discover residential and commercial properties tailored to your needs";

/**
 * The supplied design as a full-bleed page background: a white ground with the
 * centred headline and subtitle. Colours are the design's own fixed black on
 * white, so the page does not follow the app theme.
 */
export const LandingView = () => {
  return (
    <div className="fixed inset-0 overflow-y-auto bg-white">
      <div className="flex min-h-full flex-col items-center justify-center px-4 py-10 text-center">
        <h1 className="font-[Montserrat,sans-serif] text-[clamp(1.75rem,6vw,4rem)] font-bold leading-[1.05] text-black">
          {HEADLINE}
        </h1>
        <p className="mt-3 font-[Montserrat,sans-serif] text-[clamp(0.875rem,2.4vw,1.625rem)] leading-[1.5] text-black">
          {SUBTITLE}
        </p>
      </div>
    </div>
  );
};
