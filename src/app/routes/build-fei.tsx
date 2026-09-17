import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Build Fei" }];

export default function BuildFeiRoute() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background wizard image */}
      <img
        src="/fei-wizard.png"
        alt="Fei the wizard robot"
        style={{
          position: "absolute",
          bottom: 0,
          right: "5%",
          width: "clamp(220px, 35vw, 480px)",
          opacity: 0.18,
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/* Foreground content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
        }}
      >
        {/* Main Fei illustration */}
        <img
          src="/fei-wizard.png"
          alt="Fei the wizard robot"
          style={{
            width: "clamp(180px, 28vw, 360px)",
            filter: "drop-shadow(0 8px 24px rgba(9,30,66,0.18))",
          }}
        />

        {/* Heading */}
        <h1
          style={{
            fontFamily: "CircularStdBlack, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            color: "#ca3521", /* danger-red-700 */
            margin: 0,
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          Build <span style={{ color: "#1f845a" }}>Fei</span>
        </h1>

        <p
          style={{
            fontFamily: "CircularStdMedium, sans-serif",
            fontWeight: 500,
            fontSize: "1.125rem",
            color: "#44546f", /* neutral-800 */
            margin: 0,
            maxWidth: "360px",
            lineHeight: 1.5,
          }}
        >
          Your AI builder — casting spells to turn ideas into real UI.
        </p>
      </div>
    </div>
  );
}
