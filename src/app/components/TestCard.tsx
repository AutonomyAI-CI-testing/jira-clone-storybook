import type { ReactNode } from "react";
import cx from "classix";

const panelClass =
  "w-[508px] rounded bg-[var(--DarkNeutral0)] px-10 py-9 font-primary text-[var(--DarkNeutral1000)]";

const headingClass = "font-primary-black text-xl";

const mutedTextClass =
  "min-w-0 truncate font-primary-light text-sm text-[var(--DarkNeutral600)]";

const labelClass = "font-primary text-sm";

const inputClass =
  "h-[56px] w-full rounded border border-[color:var(--DarkNeutral700)] bg-[var(--DarkNeutral100)] px-9 font-primary-light text-base text-[var(--DarkNeutral1000)] placeholder:text-[var(--DarkNeutral600)]";

const buttonClass =
  "flex h-[56px] w-[170px] items-center justify-center rounded-lg bg-[var(--Orange700)] font-primary text-base text-[var(--DarkNeutral1100)]";

const iconButtonClass =
  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[var(--DarkNeutral700)] hover:text-[var(--DarkNeutral1000)]";

const chevronClass = "h-5 w-5 shrink-0 text-[var(--DarkNeutral700)]";

const iconBaseProps = {
  "aria-hidden": true,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function ChevronUp() {
  return (
    <svg {...iconBaseProps} strokeWidth="2.5" className={chevronClass}>
      <path d="M6 15l6-6 6 6" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg {...iconBaseProps} className="h-6 w-6">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg {...iconBaseProps} className="h-6 w-6">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  );
}

function SectionHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("flex items-center gap-4", className)}>
      <ChevronUp />
      <h2 className={headingClass}>{children}</h2>
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        <span className={labelClass}>{label}</span>
        <button
          type="button"
          className={iconButtonClass}
          aria-label={`About ${label}`}
        >
          <InfoIcon />
        </button>
      </div>
      <input
        className={inputClass}
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  );
}

export function TestCard() {
  return (
    <div id="testElem" className={panelClass}>
      <div className="flex items-center justify-between">
        <h1 className={headingClass}>UI magician Agent</h1>
        <button type="button" className={iconButtonClass} aria-label="Settings">
          <GearIcon />
        </button>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <ChevronUp />
        <p className={mutedTextClass}>
          From entire frame to a single component
        </p>
      </div>

      <div aria-hidden="true" className="h-[104px]" />

      <SectionHeader>Add New Design</SectionHeader>

      <div className="mt-10 flex flex-col gap-10">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-14 flex justify-end gap-9">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <SectionHeader className="mt-16">Recent Breakdowns</SectionHeader>
    </div>
  );
}
