export const BrandPanel = () => {
  return (
    <section
      className="relative hidden overflow-hidden lg:flex"
      style={{
        background: "#121211",
        borderRight: "1px solid #3C3B39",
        flexDirection: "column",
        padding: "clamp(36px, 4.5vw, 64px)",
      }}
    >
      {/* Warm glow overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.45), transparent 60%), radial-gradient(50% 50% at 92% 100%, rgba(242,87,48,.10), transparent 62%)",
          zIndex: 0,
        }}
      />

      {/* Film grain texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0"
        style={{
          opacity: 0.045,
          mixBlendMode: "overlay",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          zIndex: 9999,
        }}
      />

      {/* Wordmark */}
      <div className="relative z-10 flex items-center gap-[11px]">
        <span
          className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[8px]"
          aria-hidden="true"
          style={{
            background: "linear-gradient(150deg, #F25730, #F69874)",
            boxShadow:
              "0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            stroke="#fff"
            fill="none"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
            <circle cx="12" cy="12" r="3.4" />
          </svg>
        </span>
        <span
          className="font-bold"
          style={{
            fontFamily: "inherit",
            fontWeight: 800,
            fontSize: "19px",
            letterSpacing: "-0.01em",
            color: "#fff",
          }}
        >
          Autonomy<span style={{ color: "#F25730" }}>AI</span>
        </span>
        <span
          aria-hidden="true"
          style={{
            width: "1px",
            height: "18px",
            background: "#3C3B39",
            margin: "0 3px",
            display: "block",
          }}
        />
        <span
          style={{
            fontWeight: 500,
            fontSize: "14px",
            color: "#7C7A75",
            letterSpacing: 0,
          }}
        >
          On-Call Agent
        </span>
      </div>

      {/* Middle content */}
      <div
        className="relative z-10 max-w-[480px]"
        style={{ marginTop: "auto", marginBottom: "auto", padding: "48px 0" }}
      >
        <p
          className="m-0 mb-[22px]"
          style={{
            fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
            fontWeight: 500,
            fontSize: "12px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#F25730",
          }}
        >
          Autonomous incident response
        </p>

        <h1
          className="m-0"
          style={{
            fontWeight: 800,
            fontSize: "clamp(32px, 3.6vw, 48px)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#fff",
            textWrap: "balance" as React.CSSProperties["textWrap"],
          }}
        >
          Your on-call engineer that{" "}
          <span
            style={{
              background: "linear-gradient(95deg, #F25730, #F69874)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            never sleeps.
          </span>
        </h1>

        <p
          className="mb-0 mt-[22px] max-w-[420px]"
          style={{
            fontSize: "18px",
            lineHeight: 1.55,
            color: "#B4B1AC",
          }}
        >
          From first alert to merged fix — the agent triages, investigates, and
          ships the patch while your team stays asleep.
        </p>

        {/* Pipeline widget */}
        <Pipeline />
      </div>

      {/* Footer trust badges */}
      <div
        className="relative z-10 flex items-center gap-[18px]"
        style={{
          fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
          fontSize: "11px",
          letterSpacing: "0.04em",
          color: "#7C7A75",
        }}
      >
        <span>SOC 2 Type II</span>
        <span
          aria-hidden="true"
          className="h-[4px] w-[4px] rounded-full"
          style={{ background: "#4A4946" }}
        />
        <span>Runs in your infra</span>
        <span
          aria-hidden="true"
          className="h-[4px] w-[4px] rounded-full"
          style={{ background: "#4A4946" }}
        />
        <span>150+ teams on-call</span>
      </div>
    </section>
  );
};

const pipelineRows = [
  {
    label: "Alert received",
    detail: "— latency spike, checkout-svc",
    time: "00:00",
    nodeClass: "n-blue" as const,
    dotColor: "#9FD2ED",
    glowColor: "rgba(159,210,237,.12)",
  },
  {
    label: "Triaged & root-caused",
    detail: "— connection pool exhausted",
    time: "00:02",
    nodeClass: "n-amber" as const,
    dotColor: "#E8A13C",
    glowColor: "rgba(232,161,60,.12)",
  },
  {
    label: "Fix merged",
    detail: "— PR #1408, verified in staging",
    time: "00:09",
    nodeClass: "n-ok" as const,
    dotColor: "#4FB477",
    glowColor: "rgba(79,180,119,.14)",
  },
];

const Pipeline = () => {
  return (
    <div
      aria-hidden="true"
      className="mt-[40px] flex flex-col"
      style={{ gap: 0 }}
    >
      {pipelineRows.map((row, i) => (
        <div
          key={i}
          className="relative flex items-center gap-[14px]"
          style={{ padding: "11px 0" }}
        >
          {/* Connector line between rows */}
          {i < pipelineRows.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute"
              style={{
                left: "5px",
                top: "calc(50% + 6px)",
                width: "1px",
                height: "calc(100% - 0px)",
                background: "#3C3B39",
              }}
            />
          )}

          {/* Status dot */}
          <span
            className="relative z-10 h-[11px] w-[11px] flex-none rounded-full"
            style={{
              background: row.dotColor,
              boxShadow: `0 0 0 4px ${row.glowColor}`,
            }}
          />

          {/* Label */}
          <span
            style={{
              fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
              fontSize: "12.5px",
              letterSpacing: "0.02em",
              color: "#7C7A75",
            }}
          >
            <b style={{ color: "#fff", fontWeight: 600, fontFamily: "inherit" }}>
              {row.label}
            </b>{" "}
            {row.detail}
          </span>

          {/* Timestamp */}
          <span
            className="ml-auto"
            style={{
              fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
              fontSize: "11px",
              color: "#4A4946",
            }}
          >
            {row.time}
          </span>
        </div>
      ))}
    </div>
  );
};
