import type { ReactNode } from "react";

/**
 * Smoke-test component built from a Figma frame (UI magician Agent panel).
 *
 * Deliberately self-contained: no props, no repo components, no state.
 * Colours, spacing and type sizes are approximated from the frame image —
 * the design's own style guide was not available, so these are not its values.
 */
export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[400px] bg-[#1b1b1b] px-6 py-6 font-primary text-[#e8e8e8]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-[16px]">UI magician Agent</h1>
        <GearIcon />
      </div>

      <div className="mt-6 flex items-center gap-2">
        <ChevronUpIcon />
        <span className="truncate text-[13px] text-[#8c8c8c]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-12 flex items-center gap-2">
        <ChevronUpIcon />
        <h2 className="font-primary-bold text-[15px]">Add New Design</h2>
      </div>

      <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxxx" />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="mt-6 flex gap-4">
        <RustButton>Awesome</RustButton>
        <RustButton>Prepare</RustButton>
      </div>

      <h2 className="mt-16 font-primary-bold text-[15px]">Recent Breakdowns</h2>
    </div>
  );
}

interface FieldProps {
  label: string;
  placeholder: string;
}

const Field = ({ label, placeholder }: FieldProps) => (
  <div className="mt-6">
    <div className="mb-2 flex items-center gap-2">
      <span className="text-[13px] text-[#e8e8e8]">{label}</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded bg-[#262626] px-3 py-3 text-[13px] text-[#e8e8e8] outline outline-1 outline-[#4d4d4d] placeholder:text-[#8c8c8c] focus:outline-[#6b6b6b]"
    />
  </div>
);

const RustButton = ({ children }: { children: ReactNode }) => (
  <button
    type="button"
    className="flex-1 rounded-md bg-[#a8430f] px-4 py-3 text-[14px] text-[#e8e8e8] hover:bg-[#b94d16]"
  >
    {children}
  </button>
);

const ChevronUpIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-4 w-4 shrink-0"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-[18px] w-[18px] shrink-0"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.11a1.7 1.7 0 0 0-1.11-1.56 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.11A1.7 1.7 0 0 0 4.67 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.67a1.7 1.7 0 0 0 1.03-1.56V3a2 2 0 1 1 4 0v.11A1.7 1.7 0 0 0 15 4.67a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.33 9v.11A1.7 1.7 0 0 0 21 10.11H21a2 2 0 1 1 0 4h-.11a1.7 1.7 0 0 0-1.49 1.03Z" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-[15px] w-[15px] shrink-0 text-[#c9c9c9]"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 7.75h.01" />
  </svg>
);
