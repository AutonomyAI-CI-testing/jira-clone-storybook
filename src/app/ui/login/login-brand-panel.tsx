export const LoginBrandPanel = () => {
  return (
    <section
      className="relative hidden overflow-hidden lg:flex lg:flex-col"
      style={{
        background: "#121211",
        borderRight: "1px solid rgba(255,255,255,0.06)",
        padding: "clamp(36px,4.5vw,64px)",
      }}
    >
      {/* Warm radial glow overlays */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.45), transparent 60%), radial-gradient(50% 50% at 92% 100%, rgba(242,87,48,.10), transparent 62%)",
          zIndex: 0,
        }}
      />

      {/* All children above the gradient */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Wordmark */}
        <div className="flex items-center gap-3">
          <span
            className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-lg"
            style={{
              background: "linear-gradient(150deg, #F25730, #f5a07a)",
              boxShadow:
                "0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25)",
            }}
            aria-hidden="true"
          >
            <img
              src="/images/logo.png"
              alt=""
              className="h-4 w-4 object-contain brightness-0 invert"
            />
          </span>
          <span
            className="text-[19px] font-extrabold tracking-tight"
            style={{ color: "#F2F0ED", fontFamily: "inherit" }}
          >
            Jira Clone
          </span>
          <span
            aria-hidden="true"
            className="mx-1 h-[18px] w-px"
            style={{ background: "rgba(255,255,255,0.12)" }}
          />
          <span
            className="text-sm font-medium"
            style={{ color: "#8A8882" }}
          >
            Project Management
          </span>
        </div>

        {/* Mid section */}
        <div className="my-auto py-12" style={{ maxWidth: 480 }}>
          <p
            className="mb-[22px] text-xs font-medium uppercase tracking-[.16em]"
            style={{ fontFamily: "monospace", color: "#F25730" }}
          >
            Agile issue tracking
          </p>
          <h1
            className="m-0 leading-[1.05] tracking-[-0.02em]"
            style={{
              fontWeight: 800,
              fontSize: "clamp(32px, 3.6vw, 48px)",
              color: "#F2F0ED",
            }}
          >
            Ship faster with{" "}
            <span
              style={{
                background: "linear-gradient(95deg, #F25730, #f5a07a)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              clarity.
            </span>
          </h1>
          <p
            className="mt-[22px] leading-[1.55]"
            style={{ fontSize: 18, color: "#8A8882", maxWidth: 420 }}
          >
            From backlog to done — track every issue, sprint, and milestone in
            one place while your team stays in sync.
          </p>

          {/* Pipeline motif — Jira issue lifecycle */}
          <div
            className="mt-10 flex flex-col"
            aria-hidden="true"
            style={{ gap: 0 }}
          >
            {/* Row 1 — Backlog (blue) */}
            <PipelineRow
              color="blue"
              label="Issue created"
              detail="AUTH-312, login timeout regression"
              time="Backlog"
            />
            {/* Row 2 — In Progress (amber) */}
            <PipelineRow
              color="amber"
              label="In progress"
              detail="Assigned to Jessie — branch opened"
              time="Sprint 14"
            />
            {/* Row 3 — Done (green) */}
            <PipelineRow
              color="green"
              label="Done"
              detail="PR merged, released in v2.4.1"
              time="Closed"
              isLast
            />
          </div>
        </div>

        {/* Footer */}
        <div
          className="flex items-center gap-[18px] text-[11px] tracking-[.04em]"
          style={{ fontFamily: "monospace", color: "rgba(242,240,237,0.3)" }}
        >
          <span>Open Source</span>
          <FootDot />
          <span>Remix Run</span>
          <FootDot />
          <span>TypeScript</span>
        </div>
      </div>
    </section>
  );
};

/* ─── sub-components ─── */

const FootDot = () => (
  <span
    aria-hidden="true"
    className="h-1 w-1 rounded-full"
    style={{ background: "rgba(255,255,255,0.2)" }}
  />
);

interface PipelineRowProps {
  color: "blue" | "amber" | "green";
  label: string;
  detail: string;
  time: string;
  isLast?: boolean;
}

const nodeStyles: Record<PipelineRowProps["color"], React.CSSProperties> = {
  blue: {
    background: "#9FD2ED",
    boxShadow: "0 0 0 4px rgba(159,210,237,.12)",
  },
  amber: {
    background: "#E8A13C",
    boxShadow: "0 0 0 4px rgba(232,161,60,.12)",
  },
  green: {
    background: "#4FB474",
    boxShadow: "0 0 0 4px rgba(79,180,119,.14)",
  },
};

const PipelineRow = ({
  color,
  label,
  detail,
  time,
  isLast = false,
}: PipelineRowProps) => (
  <div
    className="relative flex items-center gap-[14px] py-[11px]"
    style={
      !isLast
        ? {
            // vertical connector line
          }
        : undefined
    }
  >
    {/* Connector line between rows */}
    {!isLast && (
      <span
        aria-hidden="true"
        className="absolute"
        style={{
          left: 5,
          top: "50%",
          width: 1,
          height: "100%",
          background: "rgba(255,255,255,0.10)",
        }}
      />
    )}
    {/* Status dot */}
    <span
      className="relative z-10 h-[11px] w-[11px] flex-none rounded-full"
      style={nodeStyles[color]}
    />
    {/* Label */}
    <span
      className="text-[12.5px] tracking-[.02em]"
      style={{ fontFamily: "monospace", color: "#8A8882" }}
    >
      <b style={{ color: "#F2F0ED", fontWeight: 600, fontFamily: "inherit" }}>
        {label}
      </b>{" "}
      — {detail}
    </span>
    {/* Time badge */}
    <span
      className="ml-auto text-[11px]"
      style={{ fontFamily: "monospace", color: "rgba(242,240,237,0.3)" }}
    >
      {time}
    </span>
  </div>
);
