import type { ReactNode } from "react";

const FIELD_CLASSES =
  "mt-3 h-14 w-full rounded-md border border-[#5a5a5a] bg-[#1c1c1c] px-4 text-center text-[17px] text-[#c9c9c9] outline-none placeholder:text-[#7d7d7d]";

const ACTION_CLASSES =
  "h-[52px] w-[172px] rounded-lg bg-[#a8501f] font-primary-bold text-[19px] text-[#b9b9b9]";

const GearIcon = ({ size = 24 }: TestCardIconProps): JSX.Element => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ size = 20 }: TestCardIconProps): JSX.Element => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = ({ size = 22 }: TestCardIconProps): JSX.Element => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 11v6" />
    <path d="M12 7.5h.01" />
  </svg>
);

const FieldLabel = ({ children }: { children: ReactNode }): JSX.Element => (
  <div className="flex items-center gap-4">
    <span className="text-[18px]">{children}</span>
    <InfoIcon />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[1016px] w-full max-w-[508px] flex-col bg-[#131313] px-10 py-8 font-primary text-[#c9c9c9]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[20px] leading-7">
        UI magician Agent
      </h1>
      <GearIcon />
    </div>

    <div className="mt-6 flex items-center gap-3">
      <ChevronUpIcon size={16} />
      <span className="truncate text-[16px] text-[#8a8a8a]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[150px] flex items-center gap-3">
      <ChevronUpIcon />
      <h2 className="font-primary-bold text-[22px]">Add New Design</h2>
    </div>

    <div className="mt-8">
      <FieldLabel>Personal Access Token</FieldLabel>
      <input
        type="text"
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={FIELD_CLASSES}
      />
    </div>

    <div className="mt-6">
      <FieldLabel>Design URL</FieldLabel>
      <input
        type="text"
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className={FIELD_CLASSES}
      />
    </div>

    <div className="mt-10 flex justify-end gap-8">
      <button type="button" className={ACTION_CLASSES}>
        Awesome
      </button>
      <button type="button" className={ACTION_CLASSES}>
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-bold text-[22px]">Recent Breakdowns</h2>
  </div>
);

interface TestCardIconProps {
  size?: number;
}
