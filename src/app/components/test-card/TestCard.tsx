import type { SVGProps } from "react";

function ChevronUp({ width, height, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 8"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path
        d="M1 6.5 6 1.5l5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg
      width={14}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className="shrink-0 text-[#b5b5b5]"
    >
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      width={15}
      height={15}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className="shrink-0 text-[#a4a4a3]"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 11v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="7.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

/**
 * Static smoke-test card. No props, no state, no interaction — it only proves
 * that the Figma frame can be turned into a renderable component.
 * Approximate spacing/colour/type is intentional here.
 */
export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] px-5 py-5 font-primary text-[#b5b5b5]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">UI magician Agent</span>
        <GearIcon />
      </div>

      {/* Collapsed row */}
      <div className="mt-5 flex items-center gap-2">
        <ChevronUp width={8} height={5} className="shrink-0 text-[#8b9291]" />
        <span className="truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section header */}
      <div className="mt-16 flex items-center gap-2">
        <ChevronUp width={12} height={8} className="shrink-0 text-[#b2b2b1]" />
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-6">
        <div className="flex items-center gap-2">
          <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">Personal Access Token</span>
          <InfoIcon />
        </div>
        <input
          readOnly
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxx"
          aria-label="Personal Access Token"
          className="mt-2 h-[36px] w-full border border-[#a5adad] bg-[#272822] px-2.5 text-[11.5px] text-[#737470] placeholder:text-[#737470]"
        />
      </div>

      {/* Design URL */}
      <div className="mt-3">
        <div className="flex items-center gap-2">
          <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]">Design URL</span>
          <InfoIcon />
        </div>
        <input
          readOnly
          type="text"
          placeholder="https://www.figma.com/file/"
          aria-label="Design URL"
          className="mt-2 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-2.5 text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
        />
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-4">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-16 text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">Recent Breakdowns</div>
    </div>
  );
}

export default TestCard;
