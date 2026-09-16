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
      {/* Background image */}
      <img
        src="/fei-wizard.png"
        alt="Fei the wizard robot"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "420px",
          maxWidth: "90vw",
          opacity: 0.15,
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/* Foreground content */}
      <img
        src="/fei-wizard.png"
        alt="Fei the wizard robot"
        style={{
          width: "280px",
          maxWidth: "70vw",
          marginBottom: "32px",
          position: "relative",
          zIndex: 1,
          filter: "drop-shadow(0 8px 24px rgba(9,30,66,0.18))",
        }}
      />

      <h1
        style={{
          fontFamily: "CircularStdBlack, sans-serif",
          fontWeight: 900,
          fontSize: "clamp(2.5rem, 8vw, 5rem)",
          color: "#ca3521",
          margin: 0,
          letterSpacing: "-0.02em",
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <span style={{ color: "#1f845a" }}>Build</span> Fei
      </h1>
    </div>
  );
}
