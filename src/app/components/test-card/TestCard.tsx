/**
 * TestCard — self-contained smoke-test mock of the "UI magician Agent" settings
 * panel from the supplied Figma frame.
 *
 * No props, no state, no behaviour. Values are approximate reads off the
 * reference image, which is all this smoke test needs.
 */

const GearIcon = () => (
  <svg
    aria-hidden="true"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-full max-w-[508px] bg-[#1b1b1b] px-10 py-6 font-sans text-[#e6e6e6]"
  >
    {/* 1. Header row */}
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-bold text-[#f2f2f2]">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="text-[#c9c9c9]"
      >
        <GearIcon />
      </button>
    </div>

    {/* 2. Collapsible row */}
    <div className="mt-4 flex items-center gap-3 text-[#a3a3a3]">
      <span className="shrink-0">
        <ChevronUpIcon />
      </span>
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    {/* 3. Section header */}
    <div className="mt-20 flex items-center gap-3">
      <span className="shrink-0 text-[#c9c9c9]">
        <ChevronUpIcon />
      </span>
      <h2 className="text-xl font-bold text-[#f2f2f2]">Add New Design</h2>
    </div>

    {/* 4. Personal Access Token */}
    <div className="mt-6">
      <label
        htmlFor="test-card-access-token"
        className="flex items-center gap-3 text-base text-[#a3a3a3]"
      >
        Personal Access Token
        <span className="text-[#c9c9c9]">
          <InfoIcon />
        </span>
      </label>
      <input
        id="test-card-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-3 w-full rounded border border-[#8c8c8c] bg-[#2b2b2b] px-3 py-3 text-base text-[#e6e6e6] outline-none placeholder:text-[#8a8a8a]"
      />
    </div>

    {/* 5. Design URL */}
    <div className="mt-5">
      <label
        htmlFor="test-card-design-url"
        className="flex items-center gap-3 text-base text-[#a3a3a3]"
      >
        Design URL
        <span className="text-[#c9c9c9]">
          <InfoIcon />
        </span>
      </label>
      <input
        id="test-card-design-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-3 w-full rounded border border-[#8c8c8c] bg-[#2b2b2b] px-3 py-3 text-base text-[#e6e6e6] outline-none placeholder:text-[#8a8a8a]"
      />
    </div>

    {/* 6. Button row */}
    <div className="mt-8 flex gap-6">
      <button
        type="button"
        className="rounded-lg bg-[#a34e22] px-8 py-3 text-base font-bold text-white"
      >
        Awesome
      </button>
      <button
        type="button"
        className="rounded-lg bg-[#a34e22] px-8 py-3 text-base font-bold text-white"
      >
        Prepare
      </button>
    </div>

    {/* 7. Recent Breakdowns */}
    <h2 className="mb-24 mt-16 text-xl font-bold text-[#f2f2f2]">
      Recent Breakdowns
    </h2>
  </div>
);

export default TestCard;
