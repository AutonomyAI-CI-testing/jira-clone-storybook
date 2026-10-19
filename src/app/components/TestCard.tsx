/**
 * TestCard — a static reproduction of the attached Figma frame.
 *
 * Deliberately self-contained: no props, no state, no interactivity. Values are
 * taken from the frame's extracted style guide and expressed as Tailwind
 * arbitrary values, because the app's token layer has no equivalent for this
 * palette (the frame is a dark panel; the app's default theme is light).
 * This is a smoke test of the design-to-component path, not product UI.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1c1c1c] px-5 pb-[62px] pt-5 font-primary text-[#b5b5b5]"
  >
    {/* Title row */}
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] leading-4">UI magician Agent</span>
      <GearIcon className="h-4 w-3.5 text-[#b5b5b5]" />
    </div>

    {/* Collapsed row */}
    <div className="mt-[18px] flex items-center gap-1.5 text-[#8b9291]">
      <ChevronUpIcon className="h-3 w-3" />
      <span className="truncate text-[11.5px] leading-[14px]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section header */}
    <div className="mt-[77px] flex items-center gap-1.5 text-[#b2b2b1]">
      <ChevronUpIcon className="h-3.5 w-3.5" />
      <span className="text-[13.5px] leading-4">Add New Design</span>
    </div>

    {/* Field — Personal Access Token */}
    <div className="mt-7 flex items-center gap-3 text-[#a4a4a3]">
      <span className="text-[11.5px] leading-[14px]">
        Personal Access Token
      </span>
      <InfoIcon className="h-[15px] w-[15px]" />
    </div>
    <div className="mt-3 flex h-9 w-[211px] items-center border border-[#a5adad] bg-[#272822] px-[19px]">
      <span className="text-[11.5px] leading-[14px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </div>

    {/* Field — Design URL */}
    <div className="mt-[11px] flex items-center gap-3 text-[#a3a3a2]">
      <span className="text-[11.5px] leading-[14px]">Design URL</span>
      <InfoIcon className="h-[15px] w-[15px]" />
    </div>
    <div className="mt-3 flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] px-[19px]">
      <span className="text-[10.5px] leading-[13px] text-[#71726e]">
        https://www.figma.com/file/:
      </span>
    </div>

    {/* Button row */}
    <div className="ml-6 mt-[22px] flex gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Trailing heading */}
    <div className="mt-[47px] text-[13.5px] leading-4 text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 11v5.5" strokeWidth={1.8} strokeLinecap="round" />
    <circle cx="12" cy="7.8" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const GearIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

interface IconProps {
  className?: string;
}
