import cx from "classix";

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] bg-[#2a2a2a]">
      {/* Header Section */}
      <div className="flex items-center justify-between px-6 py-6">
        <h1 className="font-primary-bold text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        {/* Settings icon */}
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m3.08 3.08l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m3.08-3.08l4.24-4.24M19.78 19.78l-4.24-4.24m-3.08-3.08l-4.24-4.24" />
        </svg>
      </div>

      {/* Collapsible Section 1 */}
      <div className="flex items-center gap-2 px-6 py-5">
        {/* Chevron up icon */}
        <svg
          className="h-4 w-4 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a4a4a3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="font-primary-bold text-[11.5px] font-semibold text-[#8b9291] truncate">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="space-y-5 px-6 py-5">
        {/* Section Header */}
        <div className="flex items-center gap-2">
          {/* Chevron up icon */}
          <svg
            className="h-3 w-3 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a4a4a3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <h2 className="font-primary-bold text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </h2>
        </div>

        {/* Personal Access Token Input */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <label className="font-primary-bold text-[11.5px] font-semibold text-[#a4a4a3]">
              Personal Access Token
            </label>
            {/* Info icon */}
            <svg
              className="h-4 w-4 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a4a4a3"
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
            type="password"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full border-2 border-[#5a5a5a] bg-[#272822] px-4 py-3 font-primary-bold text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] outline-none"
          />
        </div>

        {/* Design URL Input */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <label className="font-primary-bold text-[11.5px] font-semibold text-[#a3a3a2]">
              Design URL
            </label>
            {/* Info icon */}
            <svg
              className="h-4 w-4 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a4a4a3"
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
            placeholder="https://www.figma.com/file/:"
            className="w-full border-2 border-[#5a5a5a] bg-[#272822] px-4 py-3 font-primary-bold text-[11.5px] font-semibold text-[#71726e] placeholder-[#71726e] outline-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-6 pt-4">
          <button
            className={cx(
              "flex-1 rounded-[4px] bg-[#843a17] px-4 py-3",
              "font-primary-bold text-[11.5px] font-semibold text-[#8c8078]",
              "hover:opacity-90 active:opacity-80 transition-opacity"
            )}
          >
            Awesome
          </button>
          <button
            className={cx(
              "flex-1 rounded-[4px] bg-[#843a17] px-4 py-3",
              "font-primary-bold text-[11.5px] font-semibold text-[#8c8078]",
              "hover:opacity-90 active:opacity-80 transition-opacity"
            )}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="px-6 py-5">
        <h3 className="font-primary-bold text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Copyright Footer */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-[11.5px] text-[#737470]">
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
