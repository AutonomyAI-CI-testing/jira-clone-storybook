const WIZARD_ROBOT_IMAGE = "/images/wizard-robot.png";

const WORD = "Building";

/** The rainbow in hue order — one colour per letter, red through magenta. */
const RAINBOW_HUES = [
  "var(--Red500)",
  "var(--Orange500)",
  "var(--Yellow500)",
  "var(--Lime500)",
  "var(--Green500)",
  "var(--Teal500)",
  "var(--Blue500)",
  "var(--Magenta500)",
];

/** The same rainbow running left to right, for the outline around the whole word. */
const RAINBOW_GRADIENT = `linear-gradient(90deg, ${RAINBOW_HUES.join(", ")})`;

/** Halfway round the rainbow — the hue furthest from a letter's own, so the outline reads clearly. */
const OUTLINE_OFFSET = RAINBOW_HUES.length / 2;

/** Each letter is filled with one hue and outlined with the hue opposite it on the rainbow. */
const LETTERS = WORD.split("").map((letter, index) => ({
  letter: letter,
  color: RAINBOW_HUES[index % RAINBOW_HUES.length],
  outline: RAINBOW_HUES[(index + OUTLINE_OFFSET) % RAINBOW_HUES.length],
}));

export const BuildingView = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-[var(--Neutral0)] pt-[12vh]">
      <div
        className="rounded-lg p-1"
        style={{ backgroundImage: RAINBOW_GRADIENT }}
      >
        <h1
          aria-label={WORD}
          className="flex rounded bg-[var(--Neutral0)] px-8 py-4 font-primary-black text-[clamp(3.5rem,10vw,10rem)] leading-none tracking-tight"
        >
          {LETTERS.map(({ letter, color, outline }, index) => (
            <span
              key={index}
              aria-hidden="true"
              className="animate-slide-up"
              style={{
                color: color,
                WebkitTextStrokeWidth: "0.07em",
                WebkitTextStrokeColor: outline,
                paintOrder: "stroke",
                animationDelay: `${index * 80}ms`,
                animationFillMode: "both",
              }}
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>
      <div
        aria-hidden="true"
        className="h-[58vh] w-full shrink-0 bg-contain bg-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${WIZARD_ROBOT_IMAGE})` }}
      />
    </div>
  );
};
