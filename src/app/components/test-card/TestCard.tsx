export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded-md bg-[#161a1d] p-5 font-sans text-[#b5b5b5]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon className="h-4 w-4 text-[#8b9291]" />
      </div>

      {/* Collapsed hint line */}
      <div className="mt-4 flex items-center gap-1.5">
        <ChevronUpIcon className="h-2.5 w-2.5 text-[#8b9291]" />
        <span className="truncate text-xs text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-10 flex items-center gap-1.5">
        <ChevronUpIcon className="h-2.5 w-2.5 text-[#b2b2b1]" />
        <span className="text-sm font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-1.5">
          <label className="text-xs font-semibold text-[#a4a4a3]">
            Personal Access Token
          </label>
          <InfoIcon className="h-3 w-3 text-[#737470]" />
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-2 w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2.5 text-xs text-[#737470] placeholder:text-[#737470] focus:outline-none"
        />
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-1.5">
          <label className="text-xs font-semibold text-[#a3a3a2]">
            Design URL
          </label>
          <InfoIcon className="h-3 w-3 text-[#71726e]" />
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="mt-2 w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2.5 text-xs text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
        />
      </div>

      {/* Actions */}
      <div className="mt-5 flex justify-center gap-3">
        <button
          type="button"
          className="rounded bg-[#843a17] px-5 py-2.5 text-xs font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded bg-[#843a17] px-5 py-2.5 text-xs font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <span className="text-sm font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

const GearIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className={className}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    className={className}
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);
