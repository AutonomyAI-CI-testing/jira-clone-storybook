/**
 * TestCard — a static reproduction of the "UI magician Agent" side panel.
 *
 * Smoke-test component: no props, no state, no interactivity. Colours are
 * literal values read from the Figma style guide rather than this app's
 * semantic design tokens, because the frame is a dark UI with no counterpart
 * in the app's light token set.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#1a1a1a] px-5 pb-16 pt-5"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <h1 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="h-4 w-4 text-[#b5b5b5]"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    </div>

    {/* Collapsed summary row */}
    <div className="mt-4 flex items-center gap-2">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        className="h-[5px] w-2 shrink-0 text-[#8b9291]"
        aria-hidden="true"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
      <p className="min-w-0 truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a single component
      </p>
    </div>

    {/* Section: Add New Design */}
    <div className="mt-20 flex items-center gap-1.5">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        className="h-2 w-3 shrink-0 text-[#b2b2b1]"
        aria-hidden="true"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
      <h2 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    {/* Personal Access Token */}
    <div className="mt-7 flex items-center gap-2">
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    </div>
    <input
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      aria-label="Personal Access Token"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-5 text-[11.5px] font-semibold leading-[13.92px] text-[#737470] outline-none placeholder:text-[#737470]"
    />

    {/* Design URL */}
    <div className="mt-3 flex items-center gap-2">
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        className="h-[15px] w-[15px] shrink-0 text-[#a3a3a2]"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    </div>
    <input
      type="text"
      placeholder="https://www.figma.com/file/"
      aria-label="Design URL"
      className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] font-semibold leading-[12.71px] text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    {/* Actions */}
    <div className="mt-5 flex gap-4 px-6">
      <button
        type="button"
        className="h-9 flex-1 rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-9 flex-1 rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-12 text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
