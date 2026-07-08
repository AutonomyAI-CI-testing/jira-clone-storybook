export const BrandPanel = () => {
  return (
    <section
      className="relative hidden overflow-hidden border-r lg:flex"
      style={{
        background: "#121211",
        borderColor: "#3C3B39",
        flexDirection: "column",
        padding: "clamp(36px, 4.5vw, 64px)",
      }}
    >
      {/* warm off-axis glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.45), transparent 60%), radial-gradient(50% 50% at 92% 100%, rgba(242,87,48,.10), transparent 62%)",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* All content above the glow overlay */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Wordmark */}
        <div className="flex items-center gap-[11px]" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 19, letterSpacing: "-0.01em" }}>
          <span
            className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[8px]"
            style={{
              background: "linear-gradient(150deg, #F25730, #F69874)",
              boxShadow: "0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25)",
            }}
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" width={16} height={16} stroke="#fff" fill="none" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
              <circle cx="12" cy="12" r="3.4" />
            </svg>
          </span>
          <span style={{ color: "#FFFFFF" }}>
            Jira<span style={{ color: "#F25730" }}>Clone</span>
          </span>
          <span
            className="mx-[3px] h-[18px] w-px"
            style={{ background: "#3C3B39" }}
            aria-hidden="true"
          />
          <span style={{ fontWeight: 500, fontSize: 14, color: "#B4B1AC", letterSpacing: 0 }}>
            Project Management
          </span>
        </div>

        {/* Brand mid section */}
        <div className="my-auto max-w-[480px] py-12">
          <p
            className="mb-[22px] mt-0"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#F25730",
            }}
          >
            Collaborative project tracking
          </p>

          <h1
            className="m-0"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 3.6vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              textWrap: "balance",
            } as React.CSSProperties}
          >
            Your team's issues,{" "}
            <span
              style={{
                background: "linear-gradient(95deg, #F25730, #F69874)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              beautifully tracked.
            </span>
          </h1>

          <p
            className="mt-[22px] max-w-[420px]"
            style={{
              fontSize: 18,
              lineHeight: 1.55,
              color: "#B4B1AC",
              margin: "22px 0 0",
            }}
          >
            Plan sprints, triage bugs, and ship features — all in one place.
            Built for teams who move fast and need clarity.
          </p>

          {/* Pipeline motif */}
          <div
            className="mt-10 flex flex-col"
            aria-hidden="true"
            style={{ gap: 0 }}
          >
            <PipelineRow
              nodeClass="n-blue"
              nodeColor="#9FD2ED"
              glowColor="rgba(159,210,237,.12)"
              label={<><b style={{ color: "#FFFFFF", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>Issue created</b> — auth-service login bug</>}
              time="00:00"
            />
            <PipelineRow
              nodeClass="n-amber"
              nodeColor="#E8A13C"
              glowColor="rgba(232,161,60,.12)"
              label={<><b style={{ color: "#FFFFFF", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>In progress</b> — assigned to @sarah</>}
              time="00:03"
            />
            <PipelineRow
              nodeClass="n-ok"
              nodeColor="#4FB477"
              glowColor="rgba(79,180,119,.14)"
              label={<><b style={{ color: "#FFFFFF", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>Merged</b> — PR #248, deployed to production</>}
              time="00:11"
              isLast
            />
          </div>
        </div>

        {/* Brand footer */}
        <div
          className="flex items-center gap-[18px]"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.04em",
            color: "#7C7A75",
          }}
        >
          <span>Open Source</span>
          <span
            className="h-1 w-1 rounded-full"
            style={{ background: "#4A4946" }}
            aria-hidden="true"
          />
          <span>MIT Licensed</span>
          <span
            className="h-1 w-1 rounded-full"
            style={{ background: "#4A4946" }}
            aria-hidden="true"
          />
          <span>Built with Remix</span>
        </div>
      </div>
    </section>
  );
};

interface PipelineRowProps {
  nodeColor: string;
  glowColor: string;
  nodeClass?: string;
  label: React.ReactNode;
  time: string;
  isLast?: boolean;
}

const PipelineRow = ({ nodeColor, glowColor, label, time, isLast }: PipelineRowProps) => {
  return (
    <div
      className="relative flex items-center gap-[14px] py-[11px]"
      style={
        !isLast
          ? {
              // vertical connecting line
            }
          : undefined
      }
    >
      {/* connecting line for non-last rows */}
      {!isLast && (
        <span
          className="pointer-events-none absolute"
          style={{
            left: 5,
            top: "calc(50% + 5px)",
            width: 1,
            height: "calc(100% - 2px)",
            background: "#3C3B39",
            zIndex: 0,
          }}
          aria-hidden="true"
        />
      )}
      <span
        className="relative z-10 h-[11px] w-[11px] flex-none rounded-full"
        style={{
          background: nodeColor,
          boxShadow: `0 0 0 4px ${glowColor}`,
        }}
      />
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12.5,
          letterSpacing: "0.02em",
          color: "#B4B1AC",
        }}
      >
        {label}
      </span>
      <span
        className="ml-auto"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: "#7C7A75",
        }}
      >
        {time}
      </span>
    </div>
  );
};
