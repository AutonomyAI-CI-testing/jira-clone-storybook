import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Build Fei" }];

const floatKeyframes = `
  @keyframes float {
    0%   { transform: translateY(0px); }
    50%  { transform: translateY(-14px); }
    100% { transform: translateY(0px); }
  }
`;

export default function BuildFeiRoute() {
  return (
    <>
      <style>{floatKeyframes}</style>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f7f8f9",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <img
          src="/fei-wizard.png"
          alt="Fei the wizard robot"
          style={{
            width: "320px",
            height: "auto",
            animation: "float 3.5s ease-in-out infinite",
          }}
        />
        <h1
          style={{
            fontFamily: "CircularStdBlack, sans-serif",
            fontSize: "3rem",
            fontWeight: 900,
            color: "#ca3521",
            margin: 0,
            letterSpacing: "-0.01em",
          }}
        >
          Build Fei
        </h1>
        <p
          style={{
            fontFamily: "CircularStdMedium, sans-serif",
            fontSize: "1.125rem",
            color: "#44546f",
            margin: 0,
            textAlign: "center",
          }}
        >
          ✨ Your magical AI builder, at your service
        </p>
      </div>
    </>
  );
}
