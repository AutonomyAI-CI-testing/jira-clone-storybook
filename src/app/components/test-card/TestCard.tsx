import type { ReactNode } from "react";

/**
 * Smoke-test component: a static reproduction of the "UI magician Agent" panel
 * from the referenced Figma frame. Self-contained, takes no props, and every
 * icon is drawn inline because the frame shipped no exported assets.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[1000px] w-[508px] max-w-full flex-col bg-[#1c1c1c] px-6 py-8 font-primary text-[#e6e6e6]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[22px] text-[#ececec]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    <div className="mt-6 flex items-center gap-2 text-[15px] text-[#a0a0a0]">
      <ChevronUp />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="h-24" />

    <div className="flex items-center gap-2 font-primary-bold text-[22px] text-[#f0f0f0]">
      <ChevronUp />
      <span>Add New Design</span>
    </div>

    <Field
      id="personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />
    <Field
      id="design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-10 flex gap-4">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <div className="mt-20 font-primary-bold text-[20px] text-[#f0f0f0]">
      Recent Breakdowns
    </div>
  </div>
);

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6 shrink-0 text-[#d0d0d0]"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6h.09A1.65 1.65 0 0 0 10.09 3V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUp = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoDot = (): JSX.Element => (
  <span
    aria-hidden="true"
    className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#a0a0a0] text-[10px] leading-none text-[#a0a0a0]"
  >
    i
  </span>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <>
    <div className="mt-8 flex items-center gap-2">
      <label
        htmlFor={id}
        className="font-primary-bold text-[15px] text-[#d5d5d5]"
      >
        {label}
      </label>
      <InfoDot />
    </div>
    <input
      id={id}
      placeholder={placeholder}
      className="mt-2 w-full rounded border border-[#8a8a8a] bg-transparent px-4 py-3 text-[15px] text-[#c0c0c0] placeholder:text-[#8a8a8a] focus:outline-none"
    />
  </>
);

const ActionButton = ({ children }: { children: ReactNode }): JSX.Element => (
  <button
    type="button"
    className="rounded-md bg-[#9a3d1a] px-7 py-3 font-primary text-[15px] text-white"
  >
    {children}
  </button>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
