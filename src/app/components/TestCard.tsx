/**
 * TestCard
 *
 * Self-contained reproduction of the attached Figma frame — a dark settings
 * panel ("UI magician Agent"). Smoke test only: no props, no state, no
 * interactivity, and deliberately outside the app's semantic token palette
 * (the frame is a foreign dark theme, so literal hex values are used).
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#1e1e1e] px-5 pt-5 font-['Inter',sans-serif] font-semibold"
    >
      {/* Header row */}
      <div className="flex w-[211px] items-center justify-between">
        <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon className="h-[16px] w-[14px] text-[#b5b5b5]" />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-[18px] flex w-[211px] items-center gap-[9px] pl-[3px]">
        <ChevronUpIcon className="h-[5px] w-[8px] text-[#8b9291]" />
        <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section heading */}
      <div className="mt-[77px] flex w-[211px] items-center gap-[5px] pl-[6px]">
        <ChevronUpIcon className="h-[8px] w-[12px] text-[#b2b2b1]" />
        <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px] flex w-[211px] items-center gap-[14px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoIcon className="h-[15px] w-[15px] text-[#a4a4a3]" />
      </div>
      <div className="mt-[12px] flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822] pl-5">
        <span className="text-[11.5px] leading-[13.92px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL */}
      <div className="mt-[11px] flex w-[211px] items-center gap-[14px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <InfoIcon className="h-[15px] w-[15px] text-[#a3a3a2]" />
      </div>
      <div className="mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] pl-5">
        <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
          https://www.figma.com/file/
        </span>
      </div>

      {/* Actions */}
      <div className="mt-[22px] flex w-[211px] justify-end gap-[17px]">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Bottom heading */}
      <div className="mt-[46px] w-[211px]">
        <span className="text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

const ActionButton = ({ label }: { label: string }) => (
  <div className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17]">
    <span className="text-[11.5px] leading-[13.92px] text-[#8c8078]">
      {label}
    </span>
  </div>
);

interface IconProps {
  className?: string;
}

const GearIcon = ({ className }: IconProps) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.48.48 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.48-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58zM12 15.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2z" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 10 6"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M1 5 5 1l4 4" />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    className={className}
  >
    <circle cx="8" cy="8" r="6.8" />
    <path d="M8 7.4v4" strokeLinecap="round" />
    <circle cx="8" cy="5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

export default TestCard;
