import type { SVGProps } from "react";

/**
 * Self-contained smoke-test card built from the "UI magician Agent" Figma frame.
 * Presentational only: no props, no state, no handlers.
 *
 * The frame's palette (charcoal panel, #272822 fields, #843a17 buttons) has no
 * equivalent in this repo's semantic token set, so the design's own values are
 * used as Tailwind arbitrary values here. Type uses the repo's font families.
 */

type IconProps = SVGProps<SVGSVGElement>;

const GearIcon = (props: IconProps) => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    aria-hidden="true"
    {...props}
  >
    <circle cx="7" cy="8" r="5.4" />
    <circle cx="7" cy="8" r="2.2" />
    <path
      d="M7 0.7v2M7 13.3v2M0.9 4.4l1.8 1M11.3 10.6l1.8 1M0.9 11.6l1.8-1M11.3 5.4l1.8-1"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronUpIcon = ({ width = 8, ...props }: IconProps) => (
  <svg
    width={width}
    height={Number(width) * (5 / 8)}
    viewBox="0 0 8 5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M1 4 4 1l3 3" />
  </svg>
);

const InfoIcon = (props: IconProps) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    aria-hidden="true"
    {...props}
  >
    <circle cx="7.5" cy="7.5" r="6.6" />
    <path d="M7.5 6.9v3.6" strokeLinecap="round" />
    <circle cx="7.5" cy="4.6" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const ACTION_BUTTON_CLASS =
  "h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]";

const ACTION_LABELS = ["Awesome", "Prepare"];

export default function TestCard() {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-[#1c1c1c] px-5 py-5 font-primary text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
    >
      {/* Agent header */}
      <div className="flex items-start justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon className="mr-1 text-[#b5b5b5]" />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-3 flex items-center gap-2">
        <ChevronUpIcon className="text-[#8b9291]" />
        <span className="text-[#8b9291]">From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <div className="mt-20 flex items-center gap-2">
        <ChevronUpIcon width={12} className="text-[#b2b2b1]" />
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-7">
        <div className="flex items-center gap-2">
          <span>Personal Access Token</span>
          <InfoIcon />
        </div>
        <input
          type="text"
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-2.5 h-[39px] w-full border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] text-[#737470] placeholder:text-[#737470]"
        />
      </div>

      {/* Design URL */}
      <div className="mt-2.5">
        <div className="flex items-center gap-2">
          <span className="text-[#a3a3a2]">Design URL</span>
          <InfoIcon />
        </div>
        <input
          type="text"
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/"
          className="mt-2 h-[41px] w-full border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
        />
      </div>

      {/* Actions */}
      <div className="mt-5 flex gap-4 pl-6">
        {ACTION_LABELS.map((label) => (
          <button key={label} type="button" className={ACTION_BUTTON_CLASS}>
            {label}
          </button>
        ))}
      </div>

      {/* Recent Breakdowns */}
      <span className="mt-12 pb-12 font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
}
