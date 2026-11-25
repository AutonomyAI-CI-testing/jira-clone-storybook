/**
 * TestCard — a standalone smoke-test component.
 *
 * It reproduces a 254x508 dark tool panel from a Figma frame (see task/PLAN.md) and takes no
 * props: it exists to prove that a Figma frame can be turned into a React component and rendered
 * on a preview here.
 *
 * The panel's palette (black ground, #272822 fields, #843a17 buttons) is written as Tailwind
 * arbitrary values on purpose. This repo's tailwind.config.js replaces Tailwind's default palette
 * with its own semantic tokens, and that token set is a light/blue system with no equivalent for
 * this frame's colours.
 */

const ACTION_LABELS = ["Awesome", "Prepare"];

const ChevronUp = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const GearIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-black px-5 pt-5 font-[Inter,sans-serif]"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon className="mt-0.5 h-4 w-3.5 text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
      <ChevronUp className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
      <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
        From entire frame to a single design
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
      <ChevronUp className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
      <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center gap-3">
      <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
        Personal Access Token
      </span>
      <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]" />
    </div>
    <input
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] font-semibold text-[#737470] outline-none placeholder:text-[#737470]"
    />

    <div className="mt-[11px] flex items-center gap-3">
      <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
        Design URL
      </span>
      <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#a3a3a2]" />
    </div>
    <input
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-[11.5px] font-semibold text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex gap-[17px] pl-6">
      {ACTION_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    <span className="mt-[46px] text-[13.5px] font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);

interface IconProps {
  className?: string;
}
