import cx from "classix";

export const TestCard = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] p-5 font-primary text-font">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-bold text-[#b5b5b5]">UI magician Agent</h1>
        <svg
          className="h-4 w-4 text-[#b5b5b5]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
          <path d="M12 8v3m0 3v3m-3 0h3m3 0h-3" strokeWidth="1.5" />
        </svg>
      </div>

      {/* First Section - Expandable */}
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-2">
          <span className="text-[#8b9291]">▲</span>
          <p className="text-sm font-semibold text-[#8b9291]">
            From entire frame to a singl...
          </p>
        </div>
      </div>

      {/* Second Section - Add New Design */}
      <div className="mb-8">
        <div className="mb-6 flex items-center gap-2">
          <span className="text-[#b2b2b1]">▲</span>
          <h2 className="text-lg font-bold text-[#b2b2b1]">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm font-semibold text-[#a4a4a3]">
              Personal Access Token
            </label>
            <svg
              className="h-4 w-4 text-[#a4a4a3]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
              <path d="M12 8v4m0 4v.01" strokeWidth="1.5" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full border border-[#929291] bg-[#272822] px-3 py-2 text-sm text-[#737470] placeholder-[#737470]"
            readOnly
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm font-semibold text-[#a3a3a2]">
              Design URL
            </label>
            <svg
              className="h-4 w-4 text-[#a3a3a2]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
              <path d="M12 8v4m0 4v.01" strokeWidth="1.5" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full border border-[#a5adad] bg-[#272822] px-3 py-2 text-sm text-[#71726e] placeholder-[#71726e]"
            readOnly
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 rounded bg-[#843a17] px-4 py-2 text-sm font-semibold text-[#8c8078] hover:bg-[#945421]">
            Awesome
          </button>
          <button className="flex-1 rounded bg-[#843a17] px-4 py-2 text-sm font-semibold text-[#8c8078] hover:bg-[#945421]">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns Section */}
      <div>
        <h3 className="text-lg font-bold text-[#b0b0b0]">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
