/**
 * TestCard — smoke-test component.
 *
 * A self-contained, static approximation of the "UI magician Agent" panel from
 * the attached Figma frame. No props, no state, no data, not wired into the app.
 */

function GearIcon() {
  return (
    <svg
      width="15"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M1 7 5 3l4 4" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="6.6" />
      <path d="M8 7.4v4" strokeLinecap="round" />
      <circle cx="8" cy="4.9" r="0.85" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TestCard() {
  return (
    <div
      id="testElem"
      className="box-border flex min-h-[508px] w-[254px] flex-col bg-black p-5 font-['Inter',sans-serif] text-[#b5b5b5]"
    >
      {/* Title row */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold leading-[16px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <span className="text-[#c4c4c4]">
          <GearIcon />
        </span>
      </div>

      {/* Collapsible info row */}
      <div className="mt-4 flex items-center gap-2 text-[#8b9291]">
        <ChevronUpIcon />
        <span className="truncate text-[11.5px] font-semibold leading-[14px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-16 flex items-center gap-2 text-[#b2b2b1]">
        <ChevronUpIcon />
        <span className="text-[13.5px] font-semibold leading-[16px]">
          Add New Design
        </span>
      </div>

      <label
        htmlFor="testcard-token"
        className="mt-6 flex items-center gap-2 text-[11.5px] font-semibold leading-[14px] text-[#a4a4a3]"
      >
        Personal Access Token
        <span className="text-[#c4c4c4]">
          <InfoIcon />
        </span>
      </label>
      <input
        id="testcard-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full rounded-none border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] font-semibold text-[#737470] outline-none placeholder:text-[#737470]"
      />

      <label
        htmlFor="testcard-url"
        className="mt-3 flex items-center gap-2 text-[11.5px] font-semibold leading-[14px] text-[#a3a3a2]"
      >
        Design URL
        <span className="text-[#c4c4c4]">
          <InfoIcon />
        </span>
      </label>
      <input
        id="testcard-url"
        readOnly
        placeholder="https://www.figma.com/file:"
        className="mt-3 h-9 w-full rounded-none border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] font-semibold text-[#71726e] outline-none placeholder:text-[#71726e]"
      />

      {/* Action buttons */}
      <div className="mt-5 flex gap-4">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#cdb9ac]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#cdb9ac]"
        >
          Prepare
        </button>
      </div>

      {/* Footer heading */}
      <div className="mt-12 text-[13.5px] font-semibold leading-[16px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
}

export default TestCard;
