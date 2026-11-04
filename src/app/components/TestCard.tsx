import type { ReactNode } from "react";

const SvgIcon = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const GearIcon = ({ className }: { className: string }) => (
  <SvgIcon className={className}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </SvgIcon>
);

const ChevronUpIcon = ({ className }: { className: string }) => (
  <SvgIcon className={className}>
    <polyline points="18 15 12 9 6 15" />
  </SvgIcon>
);

const InfoIcon = ({ className }: { className: string }) => (
  <SvgIcon className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </SvgIcon>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[1016px] w-[508px] bg-[#0d0d0d] px-10 py-10 font-primary text-[#e8e8e8]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl text-[#e8e8e8]">
        UI magician Agent
      </h1>
      <GearIcon className="h-7 w-7 text-[#c9c9c9]" />
    </div>

    <div className="mt-8 flex items-center gap-3">
      <ChevronUpIcon className="h-5 w-5 shrink-0 text-[#c9c9c9]" />
      <span className="truncate text-[15px] text-[#a8a8a8]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-24 flex items-center gap-2">
      <ChevronUpIcon className="h-5 w-5 shrink-0 text-[#e8e8e8]" />
      <h2 className="font-primary-bold text-lg text-[#e8e8e8]">
        Add New Design
      </h2>
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-2">
        <span className="font-primary-bold text-[15px] text-[#e0e0e0]">
          Personal Access Token
        </span>
        <InfoIcon className="h-5 w-5 shrink-0 text-[#d0d0d0]" />
      </div>
      <input
        type="text"
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="mt-4 h-[60px] w-full rounded border border-[#8b8b8b] bg-[#1f1f1f] px-4 text-[15px] text-[#e8e8e8] placeholder:text-[#9a9a9a]"
      />
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-2">
        <span className="font-primary-bold text-[15px] text-[#e0e0e0]">
          Design URL
        </span>
        <InfoIcon className="h-5 w-5 shrink-0 text-[#d0d0d0]" />
      </div>
      <input
        type="text"
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-4 h-[60px] w-full rounded border border-[#8b8b8b] bg-[#1f1f1f] px-4 text-[15px] text-[#e8e8e8] placeholder:text-[#9a9a9a]"
      />
    </div>

    <div className="mt-12 flex justify-center gap-9">
      <button
        type="button"
        className="w-[170px] rounded-md bg-[#a83e12] py-5 text-base text-[#d9a184]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="w-[170px] rounded-md bg-[#a83e12] py-5 text-base text-[#d9a184]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-bold text-lg text-[#e8e8e8]">
      Recent Breakdowns
    </h2>
  </div>
);
