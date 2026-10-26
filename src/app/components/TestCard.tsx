import cx from "classix";

interface IconProps {
  className?: string;
}

function GearIcon({ className }: IconProps) {
  return (
    <svg
      className={cx("h-6 w-6 shrink-0", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function ChevronUpIcon({ className }: IconProps) {
  return (
    <svg
      className={cx("h-5 w-5 shrink-0", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 15l7-7 7 7" />
    </svg>
  );
}

function InfoIcon({ className }: IconProps) {
  return (
    <svg
      className={cx("h-5 w-5 shrink-0", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <circle cx="12" cy="7.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

const ACTIONS = ["Awesome", "Prepare"] as const;

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-7">
        <span className="text-sm text-[#e6e6e6]">{label}</span>
        <InfoIcon className="text-[#d0d0d0]" />
      </div>
      <div className="flex h-[52px] items-center rounded border border-[#6b6b6b] bg-[#2c2c2c] px-10 text-sm text-[#8a8a8a]">
        {placeholder}
      </div>
    </div>
  );
}

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex min-h-[1016px] w-[508px] flex-col bg-[#1e1e1e] px-10 pt-10 pb-16 font-primary text-white"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <GearIcon />
      </div>

      <div className="mt-6 flex items-center gap-3 text-[#b0b0b0]">
        <ChevronUpIcon />
        <span className="text-[15px]">From entire frame to a singl...</span>
      </div>

      <div className="mt-24 flex items-center gap-3">
        <ChevronUpIcon className="h-6 w-6" />
        <h2 className="font-primary-bold text-lg">Add New Design</h2>
      </div>

      <div className="mt-10 flex flex-col gap-7">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-10 flex justify-center gap-9">
        {ACTIONS.map((action) => (
          <button
            key={action}
            type="button"
            className="h-[70px] w-[170px] rounded bg-[#9a3b12] text-xl text-[#d9a189]"
          >
            {action}
          </button>
        ))}
      </div>

      <h2 className="mt-16 font-primary-bold text-lg">Recent Breakdowns</h2>
    </div>
  );
}
