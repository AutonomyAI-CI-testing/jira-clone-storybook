import { RiSettings3Line } from "react-icons/ri";

/**
 * Throwaway smoke test: reproduces the dark Figma plugin panel from the
 * attached design at its own 254x508 size. Values come from the design's
 * exported style guide (see task/PLAN.md). Deliberately self-contained —
 * no props, no state, no product-surface styling.
 */

const ChevronUp = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 10 6"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 5 5 1l4 4" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 15 15"
    className="h-[15px] w-[15px] shrink-0"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M7.5 6.8v3.7"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.5" r="0.85" fill="currentColor" />
  </svg>
);

const PanelButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
  >
    {label}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="h-[508px] w-[254px] bg-black px-[20px] pt-[20px] font-primary-bold"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] leading-[16px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <button type="button" aria-label="Settings" className="text-[#b5b5b5]">
        <RiSettings3Line size={16} aria-hidden="true" />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
      <ChevronUp className="h-[5px] w-[8px]" />
      <span className="text-[11.5px] leading-[14px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] text-[#b2b2b1]">
      <ChevronUp className="h-[8px] w-[12px]" />
      <span className="text-[13.5px] leading-[16px]">Add New Design</span>
    </div>

    <div className="mt-[28px]">
      <div className="flex items-center gap-[10px] text-[#a4a4a3]">
        <label
          htmlFor="test-card-token"
          className="text-[11.5px] leading-[14px]"
        >
          Personal Access Token
        </label>
        <InfoIcon />
      </div>
      <input
        id="test-card-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[12px] w-full border border-[#a5adad] bg-[#272822] px-[18px] py-[10px] text-[11.5px] leading-[14px] text-[#737470] placeholder:text-[#737470]"
      />
    </div>

    <div className="mt-[11px]">
      <div className="flex items-center gap-[10px] text-[#a3a3a2]">
        <label htmlFor="test-card-url" className="text-[11.5px] leading-[14px]">
          Design URL
        </label>
        <InfoIcon />
      </div>
      <input
        id="test-card-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] w-full border-2 border-[#929291] bg-[#272822] px-[18px] py-[10px] text-[10.5px] leading-[13px] text-[#71726e] placeholder:text-[#71726e]"
      />
    </div>

    <div className="mt-[22px] flex gap-[17px] pl-[24px]">
      <PanelButton label="Awesome" />
      <PanelButton label="Prepare" />
    </div>

    <p className="mt-[47px] text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </p>
  </div>
);
