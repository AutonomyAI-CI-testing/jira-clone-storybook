import cx from "classix";

export const TestCard = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-black p-5">
      {/* Header */}
      <div className="mb-12 flex items-center justify-between">
        <h1 className="text-base font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        {/* Settings icon */}
        <svg
          className="h-6 w-6 text-[#b5b5b5]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      {/* First collapsible section */}
      <div className="mb-12">
        <div className="flex items-center gap-3">
          <svg
            className="h-4 w-4 text-[#8b9291]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          <p className="text-sm font-semibold text-[#8b9291]">
            From entire frame to a singl...
          </p>
        </div>
      </div>

      {/* Add New Design section */}
      <div className="mb-12">
        <div className="mb-8 flex items-center gap-3">
          <svg
            className="h-4 w-4 text-[#b2b2b1]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
          <h2 className="text-base font-semibold text-[#b2b2b1]">
            Add New Design
          </h2>
        </div>

        {/* Personal Access Token input */}
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm font-semibold text-[#a4a4a3]">
              Personal Access Token
            </label>
            {/* Info icon */}
            <svg
              className="h-4 w-4 text-[#a4a4a3]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <input
            type="password"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className={cx(
              "w-full border border-[#3a3a3a] bg-[#1a1a1a] px-3 py-2 text-xs font-semibold text-[#737470] placeholder-[#737470]",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
            )}
          />
        </div>

        {/* Design URL input */}
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm font-semibold text-[#a3a3a2]">
              Design URL
            </label>
            {/* Info icon */}
            <svg
              className="h-4 w-4 text-[#a3a3a2]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className={cx(
              "w-full border border-[#3a3a3a] bg-[#1a1a1a] px-3 py-2 text-xs font-semibold text-[#71726e] placeholder-[#71726e]",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
            )}
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-4">
          <button className="flex-1 rounded bg-[#a0673d] px-6 py-2 text-center text-sm font-semibold text-[#8c8078] hover:bg-[#b07543] active:bg-[#8f5c35]">
            Awesome
          </button>
          <button className="flex-1 rounded bg-[#a0673d] px-6 py-2 text-center text-sm font-semibold text-[#8c8078] hover:bg-[#b07543] active:bg-[#8f5c35]">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns section */}
      <div>
        <h3 className="text-base font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-3 text-center" style={{ borderTop: "1px solid #d1d5db" }}>
        <p className="text-sm" style={{ color: "#9ca3af" }}>© AutonomyAI</p>
      </div>
    </div>
  );
};
