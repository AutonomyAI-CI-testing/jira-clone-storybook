const WORD = "Planning";

/**
 * One hue per letter, in spectrum order (red → magenta).
 *
 * These are the raw palette variables from `src/app/styles/app.css`: they are
 * declared once in `:root` and never redefined per theme, so the rainbow reads
 * the same in every theme. Semantic tokens can't be used here — each one carries
 * a single role, and the word needs eight distinct hues. The classes are written
 * out in full (rather than built from a string) so Tailwind's content scan keeps them.
 *
 * The 600 step of each hue is deliberate: the word is wider than the wizard's hat,
 * so its outer letters sit on the page surface, which is white in the light theme
 * and near-black in the dark one. Every hue at this step clears the 3:1 bar for
 * large text against both, which the brighter 400/500 steps do not.
 */
const LETTER_COLORS = [
  "text-[color:var(--Red600)]",
  "text-[color:var(--Orange600)]",
  "text-[color:var(--Yellow600)]",
  "text-[color:var(--Lime600)]",
  "text-[color:var(--Green600)]",
  "text-[color:var(--Teal600)]",
  "text-[color:var(--Blue600)]",
  "text-[color:var(--Magenta600)]",
];

/**
 * The word sits over a busy illustration, and the lighter hues (yellow, lime,
 * green, teal) sit close in luminance to the artwork behind them, so every
 * letter carries a dark halo and a tight rim to stay readable over any of it.
 */
const LETTER_HALO =
  "0 0 3px rgba(0, 0, 0, 0.85), 0 0 10px rgba(0, 0, 0, 0.6), 0 4px 22px rgba(0, 0, 0, 0.5)";

export const PlanningView = () => (
  <div className="relative flex min-h-screen items-start justify-center overflow-hidden bg-elevation-surface pt-[14vh]">
    <img
      src="/images/planning-wizard.png"
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-[center_8%]"
    />
    <h1
      className="relative font-primary-black text-[clamp(3.25rem,17vw,14rem)] leading-none tracking-tight"
      style={{ textShadow: LETTER_HALO }}
    >
      {WORD.split("").map((letter, index) => (
        <span key={`${letter}-${index}`} className={LETTER_COLORS[index]}>
          {letter}
        </span>
      ))}
    </h1>
  </div>
);
