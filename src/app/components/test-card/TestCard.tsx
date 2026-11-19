import type { ReactNode } from "react";

const ICON_CLASS = "h-5 w-5 shrink-0";

const ChevronUpIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    className={ICON_CLASS}
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 15.5 12 8.5l7 7" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    className={ICON_CLASS}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5.5" strokeLinecap="round" />
    <circle cx="12" cy="7.75" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const SettingsIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const Field = ({
  label,
  id,
  placeholder,
  className = "",
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-3 text-[#c9c9c9]">
      <label htmlFor={id} className="text-[17px]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-4 h-[56px] w-full rounded-md border border-[#9e9e9e] bg-transparent px-5 text-[16px] text-[#e6e6e6] placeholder:text-[#7a7a7a]"
    />
  </div>
);

const ActionButton = ({ children }: { children: ReactNode }): JSX.Element => (
  <button
    type="button"
    className="h-[52px] flex-1 rounded-lg bg-[#8e3c1a] font-primary-bold text-[18px] text-[#c9c9c9]"
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[1016px] w-[508px] bg-[#141414] px-[42px] py-[44px] font-primary text-[#e6e6e6]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[19px] leading-tight">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="text-[#8c8c8c] hover:text-[#e6e6e6]"
      >
        <SettingsIcon />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-2 text-[15px] text-[#8c8c8c]">
      <ChevronUpIcon />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-[150px]">
      <div className="flex items-center gap-2">
        <ChevronUpIcon />
        <h2 className="font-primary-bold text-[20px]">Add New Design</h2>
      </div>

      <Field
        className="mt-12"
        id="testElem-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />

      <Field
        className="mt-10"
        id="testElem-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      <div className="mt-12 flex gap-8">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>
    </div>

    <h2 className="mt-[90px] font-primary-bold text-[20px]">Recent Breakdowns</h2>
  </div>
);

interface FieldProps {
  label: string;
  id: string;
  placeholder: string;
  className?: string;
}
