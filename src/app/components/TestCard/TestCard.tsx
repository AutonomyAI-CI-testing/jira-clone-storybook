export const TestCard = () => {
  return (
    <div id="testElem" className="min-h-screen w-full bg-[#282828] px-8 py-10 text-white">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">UI magician Agent</h1>
        <svg
          aria-hidden="true"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white/90"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2.5M12 20.5V23M4.22 4.22l1.77 1.77M17.99 17.99l1.77 1.77M1 12h2.5M20.5 12H23M4.22 19.78l1.77-1.77M17.99 6.01l1.77-1.77" />
        </svg>
      </div>

      {/* Subtitle */}
      <div className="mb-14 flex items-center gap-2 text-[#c4a484]">
        <svg
          aria-hidden="true"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-base">From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <div className="mb-8 flex items-center gap-2">
        <svg
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white/90"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <h2 className="text-xl font-semibold">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-base font-medium text-white/90">Personal Access Token</label>
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="text-white/70"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="10" x2="12" y2="16" />
            <circle cx="12" cy="7" r="0.8" fill="currentColor" stroke="none" />
          </svg>
        </div>
        <input
          type="text"
          readOnly
          defaultValue="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full max-w-md rounded border border-[#666] bg-[#2f2f2f] px-3 py-2.5 text-sm text-white/80 outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-base font-medium text-white/90">Design URL</label>
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="text-white/70"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="10" x2="12" y2="16" />
            <circle cx="12" cy="7" r="0.8" fill="currentColor" stroke="none" />
          </svg>
        </div>
        <input
          type="text"
          readOnly
          defaultValue="https://www.figma.com/file/:"
          className="w-full max-w-md rounded border border-[#888] bg-[#2f2f2f] px-3 py-2.5 text-sm text-white/80 outline-none"
        />
      </div>

      {/* Actions */}
      <div className="mb-16 flex gap-4 pl-2">
        <button
          type="button"
          className="rounded-lg bg-[#b5522a] px-8 py-2.5 text-base font-medium text-white"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-lg bg-[#b5522a] px-8 py-2.5 text-base font-medium text-white"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-xl font-semibold text-white/95">Recent Breakdowns</h2>
    </div>
  );
};

export default TestCard;
