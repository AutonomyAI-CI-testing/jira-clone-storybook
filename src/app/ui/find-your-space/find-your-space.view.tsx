import { FindYourSpaceNav } from "./find-your-space-nav";

const HEADLINE = "Let’s Find Your Ideal Space";
const SUBTITLE =
  "Discover residential and commercial properties tailored to your needs";

/**
 * The supplied design as a full-bleed page: the SuddenlySpaces top bar above a
 * centred hero. The type sizes, the leading and the colours are fixed values —
 * the design's own black on white, with the headline in the app's danger red
 * pinned to its light-theme value so it reads on the white page in every theme.
 */
export const FindYourSpaceView = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white">
      <FindYourSpaceNav />
      <section className="px-4 pt-[155px] text-center">
        <h1 className="font-[Montserrat,sans-serif] text-[clamp(1.75rem,6vw,4rem)] font-bold leading-[1.05] text-[var(--Red800)]">
          {HEADLINE}
        </h1>
        <p className="mt-3 font-[Montserrat,sans-serif] text-[clamp(1rem,2.44vw,1.625rem)] leading-[1.538] text-black">
          {SUBTITLE}
        </p>
      </section>
    </div>
  );
};
