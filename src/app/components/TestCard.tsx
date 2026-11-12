import type { ReactNode } from "react";
import cx from "classix";

const panelClass =
  "w-[508px] bg-[var(--DarkNeutral0)] px-10 py-10 text-[var(--DarkNeutral1000)]";

const iconClass = "h-6 w-6 shrink-0 text-[var(--DarkNeutral700)]";

const iconButtonClass =
  "flex cursor-pointer items-center justify-center rounded-full p-1 hover:bg-[var(--DarkNeutral100)]";

const fieldLabelClass =
  "flex items-center gap-3 font-primary text-sm text-[var(--DarkNeutral1000)]";

const inputClass =
  "w-full rounded border border-[color:var(--DarkNeutral700)] bg-[var(--DarkNeutral100)] px-4 py-4 font-primary-light text-sm text-[var(--DarkNeutral1000)] placeholder:text-[var(--DarkNeutral600)]";

const buttonClass =
  "min-w-[170px] cursor-pointer rounded-lg bg-[var(--Orange700)] px-6 py-4 font-primary-bold text-base text-[var(--DarkNeutral1100)]";

function ChevronUpIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      aria-hidden="true"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      aria-hidden="true"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <span role="img" aria-label="More information" className="flex">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClass}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    </span>
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
    <div className={cx("flex items-center gap-3", className)}>
      <ChevronUpIcon />
      <h3 className="font-primary-black text-lg">{children}</h3>
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="flex flex-col gap-3">
      <span className={fieldLabelClass}>
        {label}
        <InfoIcon />
      </span>
      <input type="text" placeholder={placeholder} className={inputClass} />
    </label>
  );
}

export function TestCard() {
  return (
    <div id="testElem" className={panelClass}>
      <div className="flex items-center justify-between">
        <h2 className="font-primary-black text-xl">UI magician Agent</h2>
        <button type="button" aria-label="Settings" className={iconButtonClass}>
          <SettingsIcon />
        </button>
      </div>

      <div className="mt-7 flex items-center gap-3">
        <ChevronUpIcon />
        <span className="truncate font-primary-light text-sm text-[var(--DarkNeutral600)]">
          From entire frame to a singl...
        </span>
      </div>

      <SectionHeader className="mt-24">Add New Design</SectionHeader>

      <div className="mt-7 flex flex-col gap-6">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-10 flex justify-end gap-9">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <SectionHeader className="mt-24">Recent Breakdowns</SectionHeader>
    </div>
  );
}
