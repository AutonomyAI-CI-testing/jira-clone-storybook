import type { SVGProps } from "react";

const GEAR_PATH =
  "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z";

function GearIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d={GEAR_PATH} />
    </svg>
  );
}

function InfoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="10.2" />
      <path d="M12 10.8v6" strokeLinecap="round" />
      <circle cx="12" cy="7.4" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ChevronUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 12 8"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M1 6.5 6 1.5l5 5" />
    </svg>
  );
}

/**
 * Smoke-test reproduction of the "UI magician Agent" Figma frame.
 *
 * Self-contained: takes no props. Every position, size and colour comes from the
 * frame's style guide, so the layout is absolute against the frame's 254x508
 * canvas. Deliberately approximate — this is not a fidelity exercise.
 */
export const TestCard = () => {
  return (
    <div id="testElem">
      <div className="relative h-[508px] w-[254px] overflow-hidden bg-black font-primary">
        {/* Header */}
        <p className="absolute top-[20px] left-[20px] font-primary-bold text-[13.5px] leading-[16.34px] whitespace-nowrap text-[#b5b5b5]">
          UI magician Agent
        </p>
        <GearIcon className="absolute top-[20px] left-[216px] h-[16px] w-[14px] text-[#b5b5b5]" />

        {/* Collapsible summary row */}
        <ChevronUpIcon className="absolute top-[57px] left-[23px] h-[5px] w-[8px] text-[#8b9291]" />
        <p className="absolute top-[54px] left-[40px] text-[11.5px] leading-[13.92px] whitespace-nowrap text-[#8b9291]">
          From entire frame to a singl...
        </p>

        {/* Add New Design */}
        <ChevronUpIcon className="absolute top-[150px] left-[26px] h-[8px] w-[12px] text-[#b2b2b1]" />
        <p className="absolute top-[145px] left-[43px] font-primary-bold text-[13.5px] leading-[16.34px] whitespace-nowrap text-[#b2b2b1]">
          Add New Design
        </p>

        {/* Personal Access Token */}
        <p className="absolute top-[189px] left-[20px] text-[11.5px] leading-[13.92px] whitespace-nowrap text-[#a4a4a3]">
          Personal Access Token
        </p>
        <InfoIcon className="absolute top-[187px] left-[173px] h-[15px] w-[15px] text-[#a4a4a3]" />
        <div className="absolute top-[215px] left-[20px] flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822] px-[18px]">
          <span className="text-[11.5px] leading-[13.92px] whitespace-nowrap text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        {/* Design URL */}
        <p className="absolute top-[262px] left-[20px] text-[11.5px] leading-[13.92px] whitespace-nowrap text-[#a3a3a2]">
          Design URL
        </p>
        <InfoIcon className="absolute top-[260px] left-[100px] h-[15px] w-[15px] text-[#a3a3a2]" />
        <div className="absolute top-[287px] left-[20px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] px-[18px]">
          <span className="text-[10.5px] leading-[12.71px] whitespace-nowrap text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>

        {/* Actions */}
        <button
          type="button"
          className="absolute top-[347px] left-[44px] flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="absolute top-[346px] left-[146px] flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Prepare
        </button>

        {/* Recent Breakdowns */}
        <p className="absolute top-[430px] left-[20px] font-primary-bold text-[13.5px] leading-[16.34px] whitespace-nowrap text-[#b0b0b0]">
          Recent Breakdowns
        </p>
      </div>
    </div>
  );
};

export default TestCard;
