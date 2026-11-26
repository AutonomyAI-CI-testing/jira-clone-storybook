// The points clicked in the recorded session on this page (window 1280x800),
// kept as fractions of the viewport so they hold their place at another size.
const CLICK_POINTS: ClickPoint[] = [
  { x: 138 / 1280, y: 225 / 800 },
  { x: 277 / 1280, y: 326 / 800 },
  { x: 1114 / 1280, y: 94 / 800 },
];

export const PlanFeiView = () => {
  return (
    <div className="relative h-full overflow-hidden">
      <img
        src="/images/plan-fei-mascot.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-[78vh] w-auto -translate-x-1/2 select-none object-contain"
      />
      <h1 className="relative z-10 pt-[10vh] text-center font-primary-black text-3xl text-font-danger">
        Plan fei
      </h1>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {CLICK_POINTS.map((point) => (
          <span
            key={`${point.x}-${point.y}`}
            className="absolute h-0.5 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background-brand-bold"
            style={{ left: `${point.x * 100}%`, top: `${point.y * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
};

interface ClickPoint {
  x: number;
  y: number;
}
