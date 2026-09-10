import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Build Fei" }];
};

const styles = `
  @keyframes fei-fade-up {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fei-glow-pulse {
    0%, 100% { text-shadow: 0 2px 8px rgba(0,0,0,0.5), 0 0 20px rgba(255,50,50,0.4); }
    50%       { text-shadow: 0 2px 8px rgba(0,0,0,0.5), 0 0 60px rgba(255,50,50,0.9), 0 0 100px rgba(255,80,80,0.4); }
  }
  .fei-robot {
    animation: fei-fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
  .fei-title {
    animation:
      fei-fade-up 0.7s 0.25s cubic-bezier(0.22, 1, 0.36, 1) both,
      fei-glow-pulse 2.8s 1s ease-in-out infinite;
  }
`;

export default function BuildFeiRoute() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0c66e4 0%, #09326c 60%, #172b4d 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Fei wizard illustration */}
      <img
        src="/images/fei-wizard.png"
        alt="Fei the Wizard Robot"
        className="fei-robot"
        style={{
          width: 380,
          maxWidth: "70vw",
          marginBottom: 32,
          filter: "drop-shadow(0 8px 32px rgba(9,30,66,0.45))",
          zIndex: 1,
        }}
      />

      {/* "Build Fei" heading */}
      <h1
        className="fei-title"
        style={{
          fontFamily: "CircularStdBlack, sans-serif",
          fontSize: "clamp(2.5rem, 8vw, 5rem)",
          fontWeight: 900,
          letterSpacing: "-0.02em",
          color: "#ff3333",
          margin: 0,
          lineHeight: 1.1,
          zIndex: 1,
          textAlign: "center",
          border: "3px solid #ff3333",
          borderRadius: 12,
          padding: "8px 32px",
        }}
      >
        Build Fei
      </h1>
    </div>
    </>
  );
}
