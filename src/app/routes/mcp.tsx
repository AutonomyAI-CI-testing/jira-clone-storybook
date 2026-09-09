import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Jira clone - MCP" }];
};

export default function McpRoute() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        minHeight: "100vh",
        backgroundColor: "green",
      }}
    >
      <h1
        style={{
          color: "red",
          fontSize: "6rem",
          fontWeight: 700,
          margin: 0,
          WebkitTextStroke: "2px black",
          textShadow:
            "-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black",
        }}
      >
        Fei MCCCP
      </h1>
      <span
        aria-hidden="true"
        style={{
          color: "red",
          fontSize: "6rem",
          WebkitTextStroke: "2px black",
          textShadow:
            "-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black",
        }}
      >
        ☭ ★
      </span>
    </div>
  );
}
