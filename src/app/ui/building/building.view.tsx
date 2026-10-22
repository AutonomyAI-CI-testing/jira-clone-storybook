const WIZARD_ROBOT_IMAGE = "/images/wizard-robot.png";

/** One colour per letter, walking the palette hues from red through to magenta. */
const RAINBOW_LETTERS = [
  { letter: "B", color: "var(--Red500)" },
  { letter: "u", color: "var(--Orange500)" },
  { letter: "i", color: "var(--Yellow500)" },
  { letter: "l", color: "var(--Lime500)" },
  { letter: "d", color: "var(--Green500)" },
  { letter: "i", color: "var(--Teal500)" },
  { letter: "n", color: "var(--Blue500)" },
  { letter: "g", color: "var(--Magenta500)" },
];

export const BuildingView = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-[var(--Neutral0)] pt-[12vh]">
      <h1
        aria-label={RAINBOW_LETTERS.map(({ letter }) => letter).join("")}
        className="relative flex font-primary-black text-[clamp(3.5rem,10vw,10rem)] leading-none tracking-tight"
      >
        {RAINBOW_LETTERS.map(({ letter, color }, index) => (
          <span
            key={index}
            aria-hidden="true"
            className="animate-slide-up"
            style={{
              color: color,
              animationDelay: `${index * 80}ms`,
              animationFillMode: "both",
            }}
          >
            {letter}
          </span>
        ))}
      </h1>
      <div
        aria-hidden="true"
        className="h-[58vh] w-full shrink-0 bg-contain bg-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${WIZARD_ROBOT_IMAGE})` }}
      />
    </div>
  );
};
