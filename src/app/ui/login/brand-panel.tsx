import cx from "classix";

/**
 * Left-hand panel of the sign-in surface: wordmark, hero copy and the
 * alert → triage → fix pipeline motif. Decorative, so it is hidden from
 * assistive tech and drops away on narrow viewports.
 */
export const BrandPanel = (): JSX.Element => (
  <section
    aria-hidden="true"
    className="login-surface-glow relative hidden overflow-hidden border-r border-border bg-[var(--Ink900)] p-[clamp(36px,4.5vw,64px)] lg:flex lg:flex-col"
  >
    <div className="relative z-[1]">
      <Wordmark />
    </div>

    <div className="relative z-[1] my-auto max-w-[480px] py-12">
      <p className="mb-[22px] font-primary-light text-xs uppercase tracking-[0.16em] text-[var(--AaiOrange)]">
        Autonomous incident response
      </p>
      <h1 className="font-primary-black text-[clamp(32px,3.6vw,48px)] leading-[1.05] tracking-[-0.02em] text-font [text-wrap:balance]">
        Your on-call engineer that{" "}
        <span className="bg-[linear-gradient(95deg,var(--AaiOrange),var(--AaiOrangePeach))] bg-clip-text text-transparent">
          never sleeps.
        </span>
      </h1>
      <p className="mt-[22px] max-w-[420px] font-primary-light text-lg leading-[1.55] text-font-subtle">
        From first alert to merged fix — the agent triages, investigates, and
        ships the patch while your team stays asleep.
      </p>

      <div className="mt-10 flex flex-col">
        {pipelineSteps.map((step, index) => (
          <div
            key={step.title}
            className={cx(
              "relative flex items-center gap-3.5 py-[11px]",
              index < pipelineSteps.length - 1 &&
                "before:absolute before:left-[5px] before:top-[22px] before:-bottom-px before:w-px before:bg-border"
            )}
          >
            <span
              className={cx(
                "size-[11px] shrink-0 rounded-full ring-4",
                stepTone[step.tone]
              )}
            />
            <span className="font-primary-light text-[12.5px] tracking-[0.02em] text-font-subtle">
              <span className="font-primary-bold text-font">{step.title}</span>{" "}
              — {step.detail}
            </span>
            <span className="ml-auto font-primary-light text-[11px] text-font-subtlest">
              {step.time}
            </span>
          </div>
        ))}
      </div>
    </div>

    <div className="relative z-[1] flex items-center gap-[18px] font-primary-light text-[11px] tracking-[0.04em] text-font-subtlest">
      {trustPoints.map((point, index) => (
        <div key={point} className="flex items-center gap-[18px]">
          {index > 0 && (
            <span className="size-1 rounded-full bg-[var(--Ink300)]" />
          )}
          <span>{point}</span>
        </div>
      ))}
    </div>
  </section>
);

export const Wordmark = ({ compact = false }: WordmarkProps): JSX.Element => (
  <div className="flex items-center gap-[11px]">
    <span
      className="flex size-[30px] shrink-0 items-center justify-center rounded-[8px] bg-[linear-gradient(150deg,var(--AaiOrange),var(--AaiOrangePeach))] shadow-[0_0_0_1px_rgba(242,87,48,0.35),0_6px_18px_rgba(242,87,48,0.25)]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
        stroke="#ffffff"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
        <circle cx="12" cy="12" r="3.4" />
      </svg>
    </span>
    <span className="font-primary-black text-[19px] tracking-[-0.01em] text-font">
      Autonomy<span className="text-[var(--AaiOrange)]">AI</span>
    </span>
    {!compact && (
      <>
        <span className="mx-[3px] h-[18px] w-px bg-border" />
        <span className="font-primary text-sm text-font-subtle">
          On-Call Agent
        </span>
      </>
    )}
  </div>
);

const pipelineSteps = [
  {
    tone: "info",
    title: "Alert received",
    detail: "latency spike, checkout-svc",
    time: "00:00",
  },
  {
    tone: "warning",
    title: "Triaged & root-caused",
    detail: "connection pool exhausted",
    time: "00:02",
  },
  {
    tone: "success",
    title: "Fix merged",
    detail: "PR #1408, verified in staging",
    time: "00:09",
  },
] as const;

const stepTone = {
  info: "bg-background-info-bold ring-background-info",
  warning: "bg-background-warning-bold ring-background-warning",
  success: "bg-background-success-bold ring-background-success",
} as const;

const trustPoints = [
  "SOC 2 Type II",
  "Runs in your infra",
  "150+ teams on-call",
];

interface WordmarkProps {
  compact?: boolean;
}
