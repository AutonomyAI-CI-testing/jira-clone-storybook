import type { ReactNode } from "react";

/**
 * Standalone smoke-test card built from the "UI magician Agent" Figma frame.
 * Self-contained: takes no props, holds no state and reads no data — it exists
 * only to prove the design renders as a real component.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[400px] rounded-md bg-[#1e1e1e] p-6 font-primary text-[#d9d9d9]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <SettingsIcon />
    </div>

    <div className="mt-3 flex items-center gap-2 text-sm text-[#8a8a8a]">
      <ChevronUpIcon />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-10 flex items-center gap-2 font-primary-bold text-lg">
      <ChevronUpIcon />
      <span>Add New Design</span>
    </div>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />
    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="mt-8 flex gap-6">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h2 className="mt-12 font-primary-bold text-lg text-[#8a8a8a]">
      Recent Breakdowns
    </h2>
  </div>
);

interface IconProps {
  className?: string;
  children: ReactNode;
}

const Icon = ({ className, children }: IconProps): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <Icon className="h-5 w-5 shrink-0">
    <polyline points="18 15 12 9 6 15" />
  </Icon>
);

const InfoIcon = (): JSX.Element => (
  <Icon className="h-5 w-5 shrink-0">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </Icon>
);

const SettingsIcon = (): JSX.Element => (
  <Icon className="h-6 w-6 shrink-0">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </Icon>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-6">
    <div className="flex items-center gap-2 text-base text-[#c4c4c4]">
      <span>{label}</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className="mt-2 h-[44px] w-full rounded-md border border-[#5c5c5c] bg-[#2b2b2b] px-3 font-primary text-sm text-[#d9d9d9] outline-none placeholder:text-[#8a8a8a]"
    />
  </div>
);

const ActionButton = ({ children }: { children: string }): JSX.Element => (
  <button
    type="button"
    className="rounded-md bg-[#b4451a] px-6 py-2.5 font-primary-bold text-base text-[#e0e0e0] transition-colors duration-100 hover:bg-[#c04f22]"
  >
    {children}
  </button>
);
