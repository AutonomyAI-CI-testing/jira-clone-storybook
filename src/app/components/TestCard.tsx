/* ── inline SVG icons ──────────────────────────────────────────── */
const GearIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const CaretUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

/* ── component ─────────────────────────────────────────────────── */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-screen w-full flex-col bg-[#272727] px-4 py-5 text-white"
    >
      {/* 1 ── Header row */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        <span className="text-[#b0b0b0]">
          <GearIcon />
        </span>
      </div>

      {/* 2 ── Collapsed row */}
      <div className="mt-3 flex items-center gap-2 text-[#c47f5a]">
        <CaretUpIcon />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* 3 ── Spacer */}
      <div className="mt-10" />

      {/* 4 ── "Add New Design" section heading */}
      <div className="flex items-center gap-2">
        <span className="text-[#c47f5a]">
          <CaretUpIcon />
        </span>
        <span className="text-xl font-bold text-white">Add New Design</span>
      </div>

      {/* 5 ── Personal Access Token */}
      <div className="mt-5">
        <div className="mb-1 flex items-center gap-2">
          <label className="text-sm font-medium text-[#d4d4d4]">
            Personal Access Token
          </label>
          <span className="text-[#888]">
            <InfoIcon />
          </span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#444] bg-[#333] px-3 py-2.5 text-sm text-[#aaa] placeholder-[#666] outline-none focus:border-[#666]"
        />
      </div>

      {/* 6 ── Design URL */}
      <div className="mt-4">
        <div className="mb-1 flex items-center gap-2">
          <label className="text-sm font-medium text-[#d4d4d4]">
            Design URL
          </label>
          <span className="text-[#888]">
            <InfoIcon />
          </span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#555] bg-[#333] px-3 py-2.5 text-sm text-[#aaa] placeholder-[#666] outline-none focus:border-[#666]"
        />
      </div>

      {/* 7 ── Buttons */}
      <div className="mt-6 flex gap-4 px-2">
        <button className="flex-1 rounded-lg bg-[#c1612a] px-4 py-3 text-sm font-semibold text-white hover:bg-[#d4733a] active:bg-[#a8521f]">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b05526] px-4 py-3 text-sm font-semibold text-white hover:bg-[#c46635] active:bg-[#9a4920]">
          Prepare
        </button>
      </div>

      {/* 8 ── Recent Breakdowns */}
      <div className="mt-10">
        <span className="text-xl font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
