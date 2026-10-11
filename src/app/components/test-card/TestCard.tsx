/**
 * TestCard
 *
 * A self-contained smoke-test replica of a Figma frame. It takes no props, holds
 * no state and has no handlers — all copy and layout are hardcoded from the design.
 *
 * Deliberately NOT a design-system component: the frame's palette (near-black page,
 * #272822 fields, #843a17 buttons) and its Inter typeface are not part of this repo's
 * semantic token set, so the values below are Tailwind arbitrary values rather than
 * theme tokens. Do not reuse this as a building block.
 */

const buttonClassName =
  "h-9 w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[254px] bg-black p-5 font-[Inter,sans-serif]">
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon className="h-4 w-3.5 text-[#b5b5b5]" />
    </div>

    <div className="mt-3 flex items-center gap-2">
      <ChevronUp className="h-[5px] w-2 text-[#8b9291]" />
      <span className="text-[11.5px] font-semibold text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <ChevronUp className="h-2 w-3 text-[#b2b2b1]" />
      <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-2">
        <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoIcon className="h-[15px] w-[15px] text-[#a4a4a3]" />
      </div>
      <div className="mt-2 flex h-9 w-full items-center border border-[#a5adad] bg-[#272822] px-[19px]">
        <span className="text-[11.5px] font-semibold text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>
    </div>

    <div className="mt-4">
      <div className="flex items-center gap-2">
        <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <InfoIcon className="h-[15px] w-[15px] text-[#a3a3a2]" />
      </div>
      <div className="mt-2 flex h-9 w-full items-center border-2 border-[#929291] bg-[#272822] px-5">
        <span className="text-[10.5px] font-semibold text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>
    </div>

    <div className="mt-6 flex justify-center gap-4">
      <button type="button" className={buttonClassName}>
        Awesome
      </button>
      <button type="button" className={buttonClassName}>
        Prepare
      </button>
    </div>

    <div className="mt-16 text-[13.5px] font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);

const GearIcon = ({ className }: IconProps): JSX.Element => (
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
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUp = ({ className }: IconProps): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 6 6 1l5 5" />
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.75" />
    <path d="M7.5 4.2v.1" />
    <path d="M7.5 6.9v4" />
  </svg>
);

interface IconProps {
  className?: string;
}
