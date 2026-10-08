import type { ReactNode } from "react";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#000000] px-5 py-5 font-['Inter',sans-serif]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Collapsible source row */}
      <div className="mt-4 flex items-center gap-2">
        <ChevronUpIcon />
        <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="h-10" />

      {/* Add New Design */}
      <div className="flex items-center gap-2">
        <ChevronUpIcon />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-5"
        inputClassName="mt-2 flex h-[38px] items-center border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] font-semibold text-[#737470]"
      />

      <Field
        label="Design URL"
        placeholder="https://www.figma.com/file/"
        className="mt-4"
        inputClassName="mt-2 flex h-[44px] items-center border-2 border-[#929291] bg-[#272822] px-3 text-[11.5px] font-semibold text-[#71726e]"
      />

      {/* Actions */}
      <div className="mt-6 flex gap-4">
        <TestCardButton>Awesome</TestCardButton>
        <TestCardButton className="px-7">Prepare</TestCardButton>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-12 text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};

const Field = ({
  label,
  placeholder,
  className = "",
  inputClassName = "",
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-2">
      <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
        {label}
      </span>
      <InfoIcon />
    </div>
    <div className={inputClassName}>{placeholder}</div>
  </div>
);

const TestCardButton = ({
  children,
  className = "",
}: ButtonProps): JSX.Element => (
  <button
    type="button"
    className={`rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078] ${className}`}
  >
    {children}
  </button>
);

const GearIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#b5b5b5"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#8b9291"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#a4a4a3"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

interface FieldProps {
  label: string;
  placeholder: string;
  className?: string;
  inputClassName?: string;
}

interface ButtonProps {
  children: ReactNode;
  className?: string;
}
