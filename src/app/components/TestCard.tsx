// Smoke-test component — a static reproduction of the attached Figma frame.
// Intentionally self-contained: no props, no state, no interactivity.
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-black p-5 font-primary text-[13.5px] text-[#b5b5b5]"
    >
      <div className="flex items-start justify-between">
        <h1 className="text-[13.5px] text-[#b5b5b5]">UI magician Agent</h1>
        <GearIcon />
      </div>

      <div className="mt-8 flex items-center gap-2 text-[11.5px] text-[#8b9291]">
        <ChevronUpIcon />
        <span>From entire frame to a singl...</span>
      </div>

      <div className="mt-14 flex items-center gap-2 text-[13.5px] text-[#b2b2b1]">
        <ChevronUpIcon />
        <span>Add New Design</span>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2 text-[11.5px] text-[#a4a4a3]">
          <span>Personal Access Token</span>
          <InfoIcon />
        </div>
        <div className="mt-3 flex h-9 items-center rounded border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxxxxxx
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-2 text-[11.5px] text-[#a3a3a2]">
          <span>Design URL</span>
          <InfoIcon />
        </div>
        <div className="mt-3 flex h-9 items-center rounded border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] text-[#71726e]">
          https://www.figma.com/file/
        </div>
      </div>

      <div className="mt-8 flex gap-4">
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

      <div className="mt-16 text-[13.5px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>

      <div className="h-16" />
    </div>
  );
};

const GearIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0 text-[#b5b5b5]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);
