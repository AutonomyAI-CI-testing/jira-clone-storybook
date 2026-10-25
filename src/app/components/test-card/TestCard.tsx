/**
 * TestCard — smoke test of the Figma-frame-to-component path.
 *
 * Reproduces the "UI magician Agent" panel: header row with settings icon,
 * a collapsed section row, an "Add New Design" section with two labelled
 * fields and a button pair, and a "Recent Breakdowns" heading.
 *
 * Deliberately inert: no props, no state, read-only fields, no handlers.
 * The frame's palette is not part of the product's token set, so its colours
 * are written as literal values rather than semantic tokens.
 */

const ChevronUpIcon = ({ className }: IconProps): JSX.Element => (
  <svg viewBox="0 0 12 8" fill="none" aria-hidden="true" className={className}>
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SettingsIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.1" />
    <path
      d="M8 7.3v4.1"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    <circle cx="8" cy="4.7" r="0.85" fill="currentColor" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#0d0d0d] px-5 pb-[62px] pt-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <SettingsIcon className="h-4 w-[14px] shrink-0 text-[#b5b5b5]" />
    </div>

    <div className="mt-[14px] flex items-center gap-[9px] pl-[3px]">
      <ChevronUpIcon className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
      <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
      <ChevronUpIcon className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <label
      htmlFor="test-card-token"
      className="mt-[28px] flex items-center gap-5 text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
    >
      Personal Access Token
      <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]" />
    </label>
    <input
      id="test-card-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-[211px] border border-[#a5adad] bg-[#272822] pl-[19px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
    />

    <label
      htmlFor="test-card-url"
      className="mt-[11px] flex items-center gap-5 text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
    >
      Design URL
      <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#a3a3a2]" />
    </label>
    <input
      id="test-card-url"
      readOnly
      placeholder="https://www.figma.com/file/"
      className="mt-[11px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] pl-5 text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex justify-end gap-[17px] pr-[3px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

interface IconProps {
  className: string;
}
