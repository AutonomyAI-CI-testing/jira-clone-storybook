export const TestCard = (): JSX.Element => {
  return (
    <div className="w-full max-w-sm bg-black p-5 text-sm">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-primary-bold text-lg text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <svg
          className="h-5 w-5 text-[#b5b5b5]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m6.08 0l4.24-4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m6.08 0l4.24 4.24" />
        </svg>
      </div>

      {/* Collapsible Section */}
      <div className="mb-10 flex items-center gap-3">
        <svg
          className="h-6 w-6 text-[#8b9291]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="font-primary-bold text-[13.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="mb-12 flex items-center gap-3">
        <svg
          className="h-6 w-6 text-[#b2b2b1]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <h2 className="font-primary-bold text-[15px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token Section */}
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-2">
          <label className="font-primary-bold text-[13.5px] text-[#a4a4a3]">
            Personal Access Token
          </label>
          <svg
            className="h-4 w-4 text-[#a4a4a3]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          type="text"
          value="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full border border-[#929291] bg-[#1a1a1a] px-3 py-3.5 font-primary-bold text-[11.5px] text-[#737470] placeholder-[#737470]"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
      </div>

      {/* Design URL Section */}
      <div className="mb-10">
        <div className="mb-3 flex items-center gap-2">
          <label className="font-primary-bold text-[13.5px] text-[#a3a3a2]">
            Design URL
          </label>
          <svg
            className="h-4 w-4 text-[#a3a3a2]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          type="text"
          className="w-full border border-[#929291] bg-[#1a1a1a] px-3 py-3.5 font-primary-bold text-[11.5px] text-[#71726e] placeholder-[#71726e]"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-12 flex gap-4">
        <button className="flex-1 rounded bg-[#843a17] px-4 py-4 font-primary-bold text-sm text-[#8c8078] transition-colors hover:bg-[#945f2e] active:bg-[#6d2f0e]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843a17] px-4 py-4 font-primary-bold text-sm text-[#8c8078] transition-colors hover:bg-[#945f2e] active:bg-[#6d2f0e]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div>
        <h3 className="font-primary-bold text-[15px] text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-[11.5px] text-gray-400">
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
