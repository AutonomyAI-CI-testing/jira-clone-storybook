import type { ReactNode } from "react";
import cx from "classix";

/**
 * Shared stroke wrapper so every icon in the card sits on the same 24px grid.
 */
const Icon = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <svg
    aria-hidden="true"
    className={cx("shrink-0", className)}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.75}
    viewBox="0 0 24 24"
  >
    {children}
  </svg>
);

const GearIcon = () => (
  <Icon className="h-6 w-6">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </Icon>
);

const ChevronUpIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <Icon className={className}>
    <path d="m18 15-6-6-6 6" />
  </Icon>
);

const InfoIcon = () => (
  <Icon className="h-5 w-5">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </Icon>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1c1c] px-10 py-8 font-primary text-[#d0d0d0]"
  >
    <header className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl text-[#f0f0f0]">
        UI magician Agent
      </h1>
      <span className="text-[#f0f0f0]">
        <GearIcon />
      </span>
    </header>

    <div className="mt-5 flex items-center gap-3 text-[#f0f0f0]">
      <ChevronUpIcon />
      <span className="truncate text-[15px]">From entire frame to a singl...</span>
    </div>

    <div aria-hidden="true" className="h-[90px]" />

    <div className="flex items-center gap-3 text-[#f0f0f0]">
      <ChevronUpIcon className="h-6 w-6" />
      <h2 className="font-primary-bold text-[19px]">Add New Design</h2>
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-4 text-[#f0f0f0]">
        <label className="text-[15px]" htmlFor="testCardAccessToken">
          Personal Access Token
        </label>
        <InfoIcon />
      </div>
      <input
        className="mt-3 h-16 w-full rounded border border-[#8a8a8a] bg-transparent px-6 text-base text-[#f0f0f0] placeholder:text-[#8a8a8a]"
        id="testCardAccessToken"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        type="text"
      />
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-4 text-[#f0f0f0]">
        <label className="text-[15px]" htmlFor="testCardDesignUrl">
          Design URL
        </label>
        <InfoIcon />
      </div>
      <input
        className="mt-3 h-16 w-full rounded border border-[#8a8a8a] bg-transparent px-6 text-base text-[#f0f0f0] placeholder:text-[#8a8a8a]"
        id="testCardDesignUrl"
        placeholder="https://www.figma.com/file/"
        type="text"
      />
    </div>

    <div className="mt-10 flex gap-10 pl-12">
      <button
        className="h-[76px] w-[168px] rounded-md bg-[#9e4519] font-primary text-[17px] text-[#d5d5d5]"
        type="button"
      >
        Awesome
      </button>
      <button
        className="h-[76px] w-[168px] rounded-md bg-[#9e4519] font-primary text-[17px] text-[#d5d5d5]"
        type="button"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-bold text-[19px] text-[#f0f0f0]">
      Recent Breakdowns
    </h2>
  </div>
);
