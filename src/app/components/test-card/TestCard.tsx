/**
 * TestCard — a self-contained dark panel recreated from the "UI magician Agent"
 * Figma frame. Smoke test only: no props, no state, no behaviour, static markup.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black px-5 pb-14 pt-6 font-primary text-[#b5b5b5]"
  >
    {/* Title row */}
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[14px] leading-none text-[#b5b5b5]">
        UI magician Agent
      </span>
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px] shrink-0 text-[#b5b5b5]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    </div>

    {/* Collapsed row */}
    <div className="mt-6 flex items-center gap-1.5">
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5 shrink-0 text-[#8b9291]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
      <span className="truncate font-primary-light text-[12.5px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-16 flex items-center gap-1.5 pl-2">
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5 shrink-0 text-[#b0b0b0]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
      <span className="font-primary-bold text-[14px] text-[#b0b0b0]">
        Add New Design
      </span>
    </div>

    {/* Field: Personal Access Token */}
    <label className="mt-5 flex flex-col">
      <span className="flex items-center gap-2 font-primary-light text-[12px] text-[#a4a4a3]">
        Personal Access Token
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      </span>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border-2 border-[#a5adad] bg-[#272822] px-3 font-primary-light text-[11.5px] text-[#a4a4a3] placeholder:text-[#737470]"
      />
    </label>

    {/* Field: Design URL */}
    <label className="mt-3 flex flex-col">
      <span className="flex items-center gap-2 font-primary-light text-[12px] text-[#a4a4a3]">
        Design URL
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      </span>
      <input
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-3 h-9 w-full border-2 border-[#a5adad] bg-[#272822] px-3 font-primary-light text-[11.5px] text-[#a4a4a3] placeholder:text-[#737470]"
      />
    </label>

    {/* Action buttons */}
    <div className="mt-5 flex gap-4 pl-6">
      <button
        type="button"
        className="h-[38px] flex-1 rounded bg-[#843a17] font-primary-light text-[13.5px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[38px] flex-1 rounded bg-[#843a17] font-primary-light text-[13.5px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <span className="mt-12 font-primary-bold text-[14px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
