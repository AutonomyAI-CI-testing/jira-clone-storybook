import { ReactNode } from "react";

/**
 * Smoke-test component built from the "UI magician Agent" Figma frame.
 *
 * Self-contained: takes no props and holds no state. The frame's charcoal/rust palette has no
 * equivalent in this repo's design tokens, so the colours are inlined as arbitrary Tailwind
 * values scoped to this file — deliberate for a throwaway smoke test, not a pattern to copy.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1b1b1b] px-6 py-6"
  >
    <header className="flex items-center justify-between">
      <h1 className="font-primary text-xl text-[#d4d4d4]">UI magician Agent</h1>
      <GearIcon />
    </header>

    <div className="mt-12 flex items-center gap-3">
      <ChevronUpIcon />
      <span className="font-primary text-base text-[#c8c8c8]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16 flex items-center gap-3">
      <ChevronUpIcon />
      <h2 className="font-primary text-xl text-[#d4d4d4]">Add New Design</h2>
    </div>

    <Field
      id="personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxx"
    />
    <Field
      id="design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
    />

    <div className="mt-10 flex justify-center gap-8">
      <TestButton>Awesome</TestButton>
      <TestButton>Prepare</TestButton>
    </div>

    <h2 className="mt-20 font-primary text-xl text-[#d4d4d4]">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="mt-8">
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="font-primary text-base text-[#c8c8c8]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      placeholder={placeholder}
      className="mt-3 w-full rounded border border-[#6f6f6f] bg-[#262626] p-3 text-sm text-[#c8c8c8] placeholder:text-[#6f6f6f]"
    />
  </div>
);

const TestButton = ({ children }: { children: ReactNode }) => (
  <button
    type="button"
    className="rounded-md bg-[#9a3d13] px-6 py-2.5 font-primary text-base text-[#d8d2ce] hover:bg-[#8a3610] active:bg-[#7a2f0e]"
  >
    {children}
  </button>
);

const GearIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#d4d4d4"
    strokeWidth="1.6"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.2" />
    <circle
      cx="12"
      cy="12"
      r="6.4"
      strokeWidth="3.2"
      strokeDasharray="1.6 2.4"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#c8c8c8"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v6" strokeLinecap="round" />
    <circle cx="12" cy="7.5" r="1.1" fill="#c8c8c8" stroke="none" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#c8c8c8"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 15l7-7 7 7" />
  </svg>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
