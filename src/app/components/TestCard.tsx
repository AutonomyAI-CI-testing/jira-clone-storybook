/**
 * TestCard
 *
 * A self-contained reproduction of the "UI magician Agent" Figma frame, built as
 * a smoke test for the Figma-to-component path. It takes no props and is not
 * wired into the app — it is only reachable from the component preview.
 *
 * Measurements come from the frame's exported style guide (254 x 508 at 1x). The
 * frame's palette has no counterpart in this repo's semantic tokens, so its
 * colours are written as literal values on purpose.
 */

const ChevronUp = ({ className = "" }: { className?: string }): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const SettingsIcon = ({ className = "" }: { className?: string }): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.48.48 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.48-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58ZM12 15.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2Z" />
  </svg>
);

const InfoIcon = ({ className = "" }: { className?: string }): JSX.Element => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    className={className}
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="6.9" />
    <path d="M8 7.3v4.2" strokeLinecap="round" />
    <circle cx="8" cy="4.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#000000] px-5 pb-[61px] pt-5 font-primary"
  >
    {/* Title */}
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-primary-bold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <SettingsIcon className="mr-1 h-4 w-[14px] text-[#b5b5b5]" />
    </div>

    {/* Collapsed summary */}
    <div className="mt-[18px] flex items-center gap-3">
      <ChevronUp className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
      <span className="truncate text-[11.5px] font-primary-bold text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-[77px] flex items-center gap-[9px]">
      <ChevronUp className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
      <span className="text-[13.5px] font-primary-bold text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[28px] flex items-center justify-between">
      <label
        htmlFor="test-card-access-token"
        className="text-[11.5px] font-primary-bold text-[#a4a4a3]"
      >
        Personal Access Token
      </label>
      <InfoIcon className="h-[15px] w-[15px] text-[#a4a4a3]" />
    </div>
    <input
      id="test-card-access-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] font-primary-bold text-[#737470] outline-none placeholder:text-[#737470]"
    />

    {/* Design URL */}
    <div className="mt-[11px] flex items-center justify-between">
      <label
        htmlFor="test-card-design-url"
        className="text-[11.5px] font-primary-bold text-[#a3a3a2]"
      >
        Design URL
      </label>
      <InfoIcon className="h-[15px] w-[15px] text-[#a3a3a2]" />
    </div>
    <input
      id="test-card-design-url"
      readOnly
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[19px] text-[10.5px] font-primary-bold text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    {/* Actions */}
    <div className="mt-[22px] flex gap-[17px] pl-[24px]">
      <button
        type="button"
        className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] font-primary-bold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] font-primary-bold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-[47px] text-[13.5px] font-primary-bold text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
