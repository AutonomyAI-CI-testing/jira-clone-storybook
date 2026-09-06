import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => ({
  title: "Claude Fei",
});

// Palette + textures extracted from the provided login design
// (assets/colors_and_type.css was not included in the upload, so the
// ink values are approximated from the design's dark warm scheme).
const INK_950 = "#131110";
const INK_900 = "#1a1714";
const INK_400 = "#3a342f";

const grainSvg =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export function ClaudeFeiView() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: INK_950,
        fontFamily: "sans-serif",
      }}
    >
      {/* warm off-axis glow lifting one corner, from the design's brand panel */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: [
            "radial-gradient(60% 55% at 18% 8%, rgba(120,104,96,.6), transparent 60%)",
            "radial-gradient(50% 50% at 92% 100%, rgba(242,87,48,.22), transparent 62%)",
          ].join(", "),
        }}
      />
      {/* subtle inner panel edge, echoing the design's brand/form split */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `radial-gradient(80% 60% at 50% 50%, ${INK_900} 0%, transparent 75%)`,
          borderTop: `1px solid ${INK_400}`,
        }}
      />
      {/* film grain overlay — the design's signature brand texture */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.09,
          mixBlendMode: "overlay",
          backgroundImage: grainSvg,
        }}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        {/* eyebrow label in the design's mono uppercase vocabulary */}
        <p
          style={{
            margin: "0 0 22px",
            fontFamily: "ui-monospace, monospace",
            fontWeight: 500,
            fontSize: 12,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#f25730",
          }}
        >
          Welcome
        </p>
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(40px, 7vw, 96px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#e5484d",
          }}
        >
          <span style={{ color: "#4fb286" }}>Claude</span> Fei
        </h1>
        {/* lede-style subtitle, muted like the design's brand copy */}
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.55,
            color: "rgba(235,229,224,.6)",
            margin: "22px 0 0",
            maxWidth: 420,
          }}
        >
          A page built on the warm, textured backdrop of the sign-in
          experience — same glow, same grain, same calm.
        </p>
      </div>
    </div>
  );
}

export default function ClaudeFeiRoute() {
  return <ClaudeFeiView />;
}
