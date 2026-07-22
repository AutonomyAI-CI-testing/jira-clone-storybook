const SettingsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#9ca3af]"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 text-[#9ca3af]"
    aria-hidden="true"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 text-[#6b7280]"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-[320px] bg-[#1c1c1c] p-5 font-sans text-[#e5e7eb]"
    >
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-[#f3f4f6]">UI magician Agent</h1>
        <SettingsIcon />
      </div>

      <div className="mb-8 flex items-center gap-2 text-sm">
        <ChevronUpIcon />
        <span className="truncate text-[#9ca3af]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mb-6">
        <div className="mb-5 flex items-center gap-2">
          <ChevronUpIcon />
          <h2 className="text-lg font-bold text-[#f3f4f6]">Add New Design</h2>
        </div>

        <div className="mb-4">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm text-[#d1d5db]">Personal Access Token</label>
            <InfoIcon />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#4b5563] bg-[#2a2a2a] px-3 py-2 text-sm text-[#9ca3af] outline-none placeholder:text-[#6b7280]"
            readOnly
          />
        </div>

        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm text-[#d1d5db]">Design URL</label>
            <InfoIcon />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded border border-[#9ca3af] bg-[#2a2a2a] px-3 py-2 text-sm text-[#9ca3af] outline-none placeholder:text-[#6b7280]"
            readOnly
          />
        </div>

        <div className="flex justify-center gap-4">
          <button
            type="button"
            className="rounded-lg bg-[#9b4e1f] px-8 py-3 font-semibold text-white hover:bg-[#b05a24]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-lg bg-[#9b4e1f] px-8 py-3 font-semibold text-white hover:bg-[#b05a24]"
          >
            Prepare
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-bold text-[#f3f4f6]">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
