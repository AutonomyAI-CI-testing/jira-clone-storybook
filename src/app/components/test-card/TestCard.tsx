import type { SVGProps } from "react";

function GearIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function ChevronUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 12 8"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M1 6.5 6 1.5l5 5" />
    </svg>
  );
}

function InfoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      aria-hidden="true"
      {...props}
    >
      <circle cx="8" cy="8" r="6.6" />
      <path d="M8 7.2v4.2" strokeLinecap="round" />
      <circle cx="8" cy="4.7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TestCard() {
  return (
    <div id="testElem" className="w-[254px] bg-[#1C1D17] px-5 pt-5 pb-[62px]">
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-[13.5px] leading-4 text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <GearIcon className="h-4 w-3.5 shrink-0 text-[#e8e8e8]" />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <ChevronUpIcon className="h-[5px] w-2 shrink-0 text-[#d0d0d0]" />
        <span className="font-primary-bold truncate text-[11.5px] leading-[14px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-2">
        <ChevronUpIcon className="h-2 w-3 shrink-0 text-[#d0d0d0]" />
        <h2 className="font-primary-bold text-[13.5px] leading-4 text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      <div className="mt-7 flex items-center gap-2">
        <label
          htmlFor="test-card-token"
          className="font-primary-bold text-[11.5px] leading-[14px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#d0d0d0]" />
      </div>
      <input
        id="test-card-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-[211px] border border-[#a5adad] bg-[#272822] px-[19px] font-primary-bold text-[11.5px] text-[#d5d5d5] placeholder:text-[#737470] focus:outline-2 focus:outline-offset-0 focus:outline-[#a5adad]"
      />

      <div className="mt-3 flex items-center gap-2">
        <label
          htmlFor="test-card-url"
          className="font-primary-bold text-[11.5px] leading-[14px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#d0d0d0]" />
      </div>
      <input
        id="test-card-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-[19px] font-primary-bold text-[10.5px] text-[#d5d5d5] placeholder:text-[#71726e] focus:outline-2 focus:outline-offset-0 focus:outline-[#929291]"
      />

      <div className="mt-[22px] ml-6 flex gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078] focus-visible:outline-2 focus-visible:outline-[#a5adad]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078] focus-visible:outline-2 focus-visible:outline-[#a5adad]"
        >
          Prepare
        </button>
      </div>

      <h2 className="font-primary-bold mt-[46px] text-[13.5px] leading-4 text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
}
