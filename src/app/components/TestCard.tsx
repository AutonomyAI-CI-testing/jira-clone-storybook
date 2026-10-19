import { ReactNode } from "react";

/**
 * Standalone reproduction of the "UI magician Agent" Figma frame
 * (Test Page - Simple). Self-contained: takes no props, holds no state.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-black px-5 pt-5 font-[Inter,Helvetica,Arial,sans-serif]"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon className="h-4 w-3.5 shrink-0 text-[#b5b5b5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <ChevronUpIcon className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
        <span className="truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[75px] flex items-center gap-2">
        <ChevronUpIcon className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <FieldLabel className="mt-7">Personal Access Token</FieldLabel>
      <FieldBox
        className="border border-[#a5adad]"
        textClassName="text-[11.5px] leading-[13.92px] text-[#737470]"
      >
        figd_xxxxxxxxxxxxxxxxxxxxxx
      </FieldBox>

      <FieldLabel className="mt-3">Design URL</FieldLabel>
      <FieldBox
        className="border-2 border-[#929291]"
        textClassName="text-[10.5px] leading-[12.71px] text-[#71726e]"
      >
        https://www.figma.com/file/:
      </FieldBox>

      <div className="mt-[22px] flex justify-end gap-[17px]">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      <h2 className="mt-[47px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const FieldLabel = ({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
      {children}
    </span>
    <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]" />
  </div>
);

const FieldBox = ({
  className,
  textClassName,
  children,
}: {
  className: string;
  textClassName: string;
  children: ReactNode;
}) => (
  <div
    className={`mt-3 flex h-9 items-center bg-[#272822] px-[19px] ${className}`}
  >
    <span className={`truncate font-semibold ${textClassName}`}>{children}</span>
  </div>
);

const ActionButton = ({ children }: { children: ReactNode }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
  >
    {children}
  </button>
);

const GearIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 7 6 2l5 5" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.7" />
    <path d="M7.5 7v3.6" strokeLinecap="round" />
    <circle cx="7.5" cy="4.6" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);
