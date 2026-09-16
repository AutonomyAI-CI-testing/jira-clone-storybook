export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[320px] rounded border-t-4 border-t-[#843a17] bg-black p-4 text-font-subtlest"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-white">
          UI magician Agent
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-white"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.604.852 1 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Collapsible info row */}
      <div className="mt-3 flex items-center gap-1.5">
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-white"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
        <span className="text-xs text-white">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-8">
        <div className="flex items-center gap-1.5">
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-white"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
          <span className="text-sm font-semibold text-white">
            Add New Design
          </span>
        </div>

        <div className="mt-4 flex items-center gap-1.5">
          <span className="text-xs text-white">Personal Access Token</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-white"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-1.5 w-full rounded border border-border bg-black px-2 py-2 text-xs text-white placeholder:text-white/50"
        />

        <div className="mt-3 flex items-center gap-1.5">
          <span className="text-xs text-white">Design URL</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-white"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="mt-1.5 w-full rounded border-2 border-border bg-black px-2 py-2 text-xs text-white placeholder:text-white/50"
        />

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            className="flex-1 rounded bg-[#843a17] px-3 py-2 text-xs font-semibold text-white"
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded bg-[#843a17] px-3 py-2 text-xs font-semibold text-white"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <span className="text-sm font-semibold text-white">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
