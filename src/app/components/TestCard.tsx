import type { ReactNode } from "react";

const inputClassName =
  "w-full rounded border border-border-bold bg-background-input px-8 py-5 text-base text-font outline-none placeholder:text-font-subtle";

const buttonClassName =
  "w-[171px] rounded-lg bg-[#9e3f1c] py-5 text-center text-lg text-font-subtle";

interface IconProps {
  className?: string;
}

const SettingsIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.5v5" />
    <path d="M12 7.75h.01" strokeWidth={2.5} />
  </svg>
);

const FieldLabel = ({ children }: { children: ReactNode }) => (
  <div className="mb-3 flex items-center gap-3">
    <span className="text-lg text-font">{children}</span>
    <InfoIcon className="h-5 w-5 shrink-0 text-font" />
  </div>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="dark w-[508px] bg-elevation-surface px-10 py-10 text-font"
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
        <SettingsIcon className="mt-0.5 h-8 w-8 shrink-0" />
      </div>

      <div className="mt-7 flex items-center gap-3 text-font-subtle">
        <ChevronUpIcon className="h-4 w-4 shrink-0" />
        <span className="truncate text-base">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-16 flex items-center gap-3">
        <ChevronUpIcon className="h-5 w-5 shrink-0" />
        <h3 className="font-primary-black text-2xl">Add New Design</h3>
      </div>

      <div className="mt-11">
        <FieldLabel>Personal Access Token</FieldLabel>
        <input
          readOnly
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          className={inputClassName}
        />
      </div>

      <div className="mt-6">
        <FieldLabel>Design URL</FieldLabel>
        <input
          readOnly
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/"
          className={inputClassName}
        />
      </div>

      <div className="mt-14 flex gap-9 pl-12">
        <button type="button" className={buttonClassName}>
          Awesome
        </button>
        <button type="button" className={buttonClassName}>
          Prepare
        </button>
      </div>

      <h3 className="mt-16 font-primary-black text-2xl">Recent Breakdowns</h3>
    </div>
  );
};
