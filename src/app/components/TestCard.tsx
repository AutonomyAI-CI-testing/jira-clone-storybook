import { useState } from "react";

/**
 * Smoke-test component: a standalone dark card reproducing the structure of the
 * supplied Figma frame. Self-contained, takes no props, and is not wired into
 * any route or export.
 */
export const TestCard = () => {
  const [summaryOpen, setSummaryOpen] = useState(false);

  return (
    <div
      id="testElem"
      className="w-[508px] max-w-full bg-[#1a1a1a] px-10 pt-8 pb-12 text-[#d4d4d4]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl text-[#e8e8e8]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      <button
        type="button"
        onClick={() => setSummaryOpen((open) => !open)}
        aria-expanded={summaryOpen}
        aria-label="Toggle summary"
        className="mt-7 flex w-full items-center gap-3 text-left"
      >
        <ChevronUpIcon
          className={`shrink-0 text-[#c4c4c4] transition-transform duration-200 ${
            summaryOpen ? "" : "rotate-180"
          }`}
        />
        <span className="truncate font-primary-light text-[17px] text-[#b0b0b0]">
          From entire frame to a singl...
        </span>
      </button>

      {summaryOpen && (
        <p className="mt-3 pl-7 font-primary-light text-[15px] text-[#8f8f8f]">
          From entire frame to a single component, in one pass.
        </p>
      )}

      <h2 className="mt-24 flex items-center gap-3 font-primary-bold text-[22px] text-[#c9c9c9]">
        <ChevronUpIcon className="shrink-0 text-[#c4c4c4]" />
        Add New Design
      </h2>

      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="mt-9 flex gap-4">
        <button
          type="button"
          className="flex-1 rounded bg-[#a8481f] px-6 py-4 font-primary text-[19px] text-[#d6b3a4]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded bg-[#a8481f] px-6 py-4 font-primary text-[19px] text-[#d6b3a4]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-24 font-primary-bold text-[22px] text-[#c9c9c9]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="mt-8">
    <div className="flex items-center gap-6">
      <label htmlFor={id} className="font-primary-light text-[17px] text-[#c9c9c9]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 w-full rounded-sm border border-[#6e6e6e] bg-[#1e1e1e] px-4 py-3 font-primary-light text-[16px] text-[#8f8f8f] outline-none placeholder:text-[#8f8f8f]"
    />
  </div>
);

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M5 15l7-7 7 7" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 text-[#c4c4c4]"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </svg>
);

const GearIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 text-[#c4c4c4]"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

interface IconProps {
  className?: string;
}
