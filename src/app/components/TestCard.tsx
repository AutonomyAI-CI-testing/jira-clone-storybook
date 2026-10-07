import { ReactNode } from "react";

interface SvgIconProps {
  className?: string;
}

const SvgIcon = ({ className = "", children }: SvgIconProps & { children: ReactNode }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

const GearIcon = ({ className = "" }: SvgIconProps) => (
  <SvgIcon className={className}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </SvgIcon>
);

const ChevronUpIcon = ({ className = "" }: SvgIconProps) => (
  <SvgIcon className={className}>
    <polyline points="18 15 12 9 6 15" />
  </SvgIcon>
);

const InfoIcon = ({ className = "" }: SvgIconProps) => (
  <SvgIcon className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </SvgIcon>
);

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
      <InfoIcon className="h-5 w-5 text-white/80" />
    </div>
    <input
      id={id}
      name={id}
      type="text"
      placeholder={placeholder}
      className="w-full rounded-sm border border-white/40 bg-white/10 px-4 py-4 text-lg text-white placeholder:text-white/50"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="flex w-[508px] flex-col bg-black p-10 text-white">
    <div className="flex items-start justify-between">
      <span className="text-xl font-semibold">UI magician Agent</span>
      <GearIcon className="h-5 w-5 text-white/80" />
    </div>

    <div className="mt-8 flex min-w-0 items-center gap-2 text-white/60">
      <ChevronUpIcon className="h-4 w-4 shrink-0" />
      <span className="truncate text-lg">From entire frame to a singl...</span>
    </div>

    <div className="mt-24 flex flex-col gap-8">
      <div className="flex items-center gap-2">
        <ChevronUpIcon className="h-6 w-6 shrink-0" />
        <span className="text-xl font-semibold">Add New Design</span>
      </div>

      <Field
        id="personalAccessToken"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxx"
      />
      <Field
        id="designUrl"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="flex gap-6">
        <button
          type="button"
          className="rounded-md bg-[#a8481f] px-6 py-3 text-lg font-semibold text-white/80"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-md bg-[#a8481f] px-6 py-3 text-lg font-semibold text-white/80"
        >
          Prepare
        </button>
      </div>
    </div>

    <span className="mt-24 text-xl font-semibold">Recent Breakdowns</span>
  </div>
);
