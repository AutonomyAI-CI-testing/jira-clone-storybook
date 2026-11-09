import type { SVGProps } from "react";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

const GearIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </svg>
);

const Field = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div>
    <div className="flex items-center gap-3">
      <span className="text-[15px] text-[color:var(--DarkNeutral900)]">{label}</span>
      <InfoIcon className="h-4 w-4" />
    </div>
    <input
      aria-label={label}
      placeholder={placeholder}
      className="mt-3 h-10 w-full rounded border border-border-bold bg-[var(--DarkNeutral250)] px-4 text-[15px] text-[color:var(--DarkNeutral1000)] outline-none placeholder:text-[color:var(--Neutral500)]"
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral100)] px-8 pt-10 pb-10 font-primary text-[color:var(--DarkNeutral1000)]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xl">UI magician Agent</span>
      <button type="button" aria-label="Settings">
        <GearIcon className="h-6 w-6" />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-2 text-[color:var(--Neutral500)]">
      <ChevronUpIcon className="h-4 w-4" />
      <span className="text-[15px]">From entire frame to a singl...</span>
    </div>

    <div className="mt-14 flex items-center gap-2">
      <ChevronUpIcon className="h-5 w-5" />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <div className="mt-8">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-5">
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-8 flex gap-9">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          type="button"
          className="h-10 flex-1 rounded-lg bg-[var(--Orange800)] font-primary-bold text-[15px] text-[color:var(--DarkNeutral1000)]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);
