import type { CSSProperties } from "react";

// Deterministic star positions so the layout is stable across renders
const STARS = [
  // [left%, top%, size(px), opacity, delay(s), duration(s)]
  [5, 8, 2, 0.7, 0, 3.2],
  [12, 22, 1.5, 0.5, 0.8, 4.1],
  [18, 5, 2.5, 0.8, 1.5, 2.8],
  [27, 15, 1, 0.4, 0.3, 5.0],
  [35, 3, 2, 0.65, 2.1, 3.7],
  [44, 10, 1.5, 0.55, 0.6, 4.5],
  [53, 6, 2, 0.75, 1.9, 3.1],
  [62, 18, 1, 0.45, 0.1, 4.8],
  [71, 8, 2.5, 0.7, 1.2, 2.9],
  [80, 14, 1.5, 0.6, 0.9, 3.6],
  [88, 5, 2, 0.8, 1.7, 4.2],
  [93, 22, 1, 0.4, 0.4, 5.3],
  [8, 78, 2, 0.65, 0.7, 3.4],
  [15, 88, 1.5, 0.5, 1.4, 4.0],
  [24, 95, 2.5, 0.75, 0.2, 2.7],
  [33, 82, 1, 0.45, 1.8, 5.1],
  [42, 92, 2, 0.6, 0.5, 3.9],
  [51, 85, 1.5, 0.7, 2.3, 3.3],
  [60, 96, 1, 0.4, 0.9, 4.7],
  [68, 80, 2, 0.65, 1.1, 3.5],
  [76, 90, 2.5, 0.8, 0.3, 2.6],
  [85, 83, 1.5, 0.55, 1.6, 4.3],
  [91, 75, 2, 0.7, 0.8, 3.8],
  [3, 45, 1.5, 0.5, 1.3, 4.6],
  [96, 50, 2, 0.6, 0.6, 3.0],
  [7, 60, 1, 0.4, 2.0, 5.2],
  [92, 35, 2.5, 0.75, 1.0, 2.5],
  [20, 70, 1.5, 0.55, 0.4, 4.4],
  [78, 55, 1, 0.45, 1.5, 5.0],
  [48, 2, 2, 0.7, 0.2, 3.6],
  // 4-pointed sparkle diamonds (larger, fewer)
  [10, 35, 3, 0.6, 0.5, 4.0],
  [30, 50, 3.5, 0.5, 1.8, 5.5],
  [65, 40, 3, 0.65, 0.7, 4.2],
  [82, 68, 3.5, 0.55, 1.2, 3.8],
  [50, 75, 3, 0.6, 0.3, 4.9],
];

// Sparkle (4-pointed star) indices — these get a diamond shape instead of a circle
const SPARKLE_IDX = new Set([30, 31, 32, 33, 34]);

export const FeiPage = () => {
  return (
    <div
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
      style={{ background: "#0f1923" }}
    >
      {/* Star / sparkle dots scattered across background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <style>{`
          @keyframes twinkle {
            0%, 100% { opacity: var(--star-op); transform: scale(1); }
            50%       { opacity: calc(var(--star-op) * 0.25); transform: scale(0.6); }
          }
          @keyframes sparkle-spin {
            0%, 100% { opacity: var(--star-op); transform: scale(1) rotate(0deg); }
            50%       { opacity: calc(var(--star-op) * 0.3); transform: scale(0.5) rotate(45deg); }
          }
          .fei-star    { animation: twinkle       var(--star-dur) ease-in-out var(--star-delay) infinite; }
          .fei-sparkle { animation: sparkle-spin  var(--star-dur) ease-in-out var(--star-delay) infinite; }
        `}</style>
        {STARS.map(([left, top, size, op, delay, dur], i) => {
          const isSparkle = SPARKLE_IDX.has(i);
          const style: CSSProperties = {
            position: "absolute",
            left: `${left}%`,
            top: `${top}%`,
            ["--star-op" as string]: op,
            ["--star-delay" as string]: `${delay}s`,
            ["--star-dur" as string]: `${dur}s`,
          };

          if (isSparkle) {
            // 4-pointed diamond sparkle made from two overlapping thin rectangles
            return (
              <div key={i} className="fei-sparkle" style={style}>
                <div style={{
                  position: "relative",
                  width: `${size}px`,
                  height: `${size}px`,
                }}>
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "#f5e97a",
                    clipPath: "polygon(50% 0%, 55% 45%, 100% 50%, 55% 55%, 50% 100%, 45% 55%, 0% 50%, 45% 45%)",
                    width: `${size * 4}px`,
                    height: `${size * 4}px`,
                    transform: "translate(-37.5%, -37.5%)",
                  }} />
                </div>
              </div>
            );
          }

          // Plain circular dot star
          return (
            <div
              key={i}
              className="fei-star"
              style={{
                ...style,
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: "50%",
                background: "white",
                boxShadow: `0 0 ${size * 2}px ${size}px rgba(245, 233, 122, 0.35)`,
              }}
            />
          );
        })}
      </div>

      {/* Wizard robot background illustration */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <img
          src="/images/fei-wizard.png"
          alt="Fei the wizard robot"
          className="h-full max-h-screen w-auto max-w-none object-contain"
          style={{ opacity: 0.4 }}
        />
      </div>

      {/* "Fei" text in red, centered and prominent */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <h1
          className="select-none font-primary-black"
          style={{
            fontSize: "clamp(6rem, 20vw, 18rem)",
            color: "#ca3521",
            lineHeight: 1,
            textShadow: "0 4px 48px rgba(202, 53, 33, 0.65), 0 0 120px rgba(202, 53, 33, 0.2)",
            letterSpacing: "-0.02em",
          }}
        >
          Fei
        </h1>
      </div>
    </div>
  );
};
