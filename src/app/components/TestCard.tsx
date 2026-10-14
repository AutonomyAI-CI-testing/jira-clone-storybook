import cx from "classix";

/**
 * Static reproduction of the attached Figma frame (a dark "UI magician Agent"
 * plugin panel). Deliberately off-system: the frame is a dark tool UI, so it
 * uses the frame's own colours rather than this app's light-theme tokens.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col bg-[#1c1c1c] px-5 pt-5 font-sans text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]"
    >
      <div className="flex items-start justify-between">
        <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px]">
        <ChevronUp className="h-[5px] w-[8px] shrink-0 text-[#8b9291]" />
        <span className="truncate text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px]">
        <ChevronUp className="h-[8px] w-[12px] shrink-0 text-[#b2b2b1]" />
        <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <FieldLabel
        text="Personal Access Token"
        className="mt-7 text-[#a4a4a3]"
      />
      <div className="mt-3 flex h-9 w-[211px] items-center border border-[#a5adad] bg-[#272822] pl-[18px]">
        <span className="text-[#737470]">figd_xxxxxxxxxxxxxxxxxx</span>
      </div>

      <FieldLabel text="Design URL" className="mt-[11px] text-[#a3a3a2]" />
      <div className="mt-3 flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] pl-[18px]">
        <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      <div className="mt-[22px] ml-6 flex gap-[17px]">
        <CardButton>Awesome</CardButton>
        <CardButton>Prepare</CardButton>
      </div>

      <span className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};

const FieldLabel = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => (
  <div className={cx("flex items-center gap-3", className)}>
    <span>{text}</span>
    <InfoIcon />
  </div>
);

const CardButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
  >
    {children}
  </button>
);

const ChevronUp = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 12 8" aria-hidden="true" className={className}>
    <path
      d="M1 6.5 6 1.5l5 5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle
      cx="7.5"
      cy="7.5"
      r="6.6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
    />
    <circle cx="7.5" cy="4.6" r="0.85" fill="currentColor" />
    <path
      d="M7.5 7v3.9"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    aria-hidden="true"
    className="shrink-0 text-[#b5b5b5]"
  >
    <g fill="currentColor">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <rect
          key={angle}
          x="6"
          y="0.5"
          width="2"
          height="15"
          rx="0.6"
          transform={`rotate(${angle} 7 8)`}
        />
      ))}
    </g>
    <circle
      cx="7"
      cy="8"
      r="3.9"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
    />
  </svg>
);
