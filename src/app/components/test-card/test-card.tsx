export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] bg-black p-5">
      {/* Header with title and settings icon */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <button className="flex items-center justify-center">
          <svg
            className="h-5 w-5 text-[#b5b5b5]"
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
        </button>
      </div>

      {/* Collapsible section 1 */}
      <div className="mb-8 flex items-center gap-2">
        <span className="text-[#b5b5b5]">▲</span>
        <p className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design collapsible section */}
      <div className="mb-6 flex items-center gap-2">
        <span className="text-[#b5b5b5]">▲</span>
        <h2 className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-6">
        <label className="mb-2 flex items-center gap-2 text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
          <svg
            className="h-4 w-4 text-[#a4a4a3]"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1" />
            <path
              d="M12 7.5C11.4 7.5 11 7.9 11 8.5C11 9.1 11.4 9.5 12 9.5C12.6 9.5 13 9.1 13 8.5C13 7.9 12.6 7.5 12 7.5M11 11H13V16H11V11"
              fill="currentColor"
            />
          </svg>
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border border-[#404040] bg-[#1a1a1a] px-3 py-2 text-[10.5px] font-semibold text-[#737470] placeholder-[#737470]"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <label className="mb-2 flex items-center gap-2 text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
          <svg
            className="h-4 w-4 text-[#a3a3a2]"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1" />
            <path
              d="M12 7.5C11.4 7.5 11 7.9 11 8.5C11 9.1 11.4 9.5 12 9.5C12.6 9.5 13 9.1 13 8.5C13 7.9 12.6 7.5 12 7.5M11 11H13V16H11V11"
              fill="currentColor"
            />
          </svg>
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full border border-[#404040] bg-[#1a1a1a] px-3 py-2 text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e]"
        />
      </div>

      {/* Action buttons */}
      <div className="mb-8 flex gap-3">
        <button className="flex-1 rounded bg-[#a85a3e] px-4 py-2 text-center text-[11.5px] font-semibold text-[#8c8078] hover:bg-[#b86a48]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#a85a3e] px-4 py-2 text-center text-[11.5px] font-semibold text-[#8c8078] hover:bg-[#b86a48]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns label */}
      <h3 className="text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h3>

      {/* Footer */}
      <div className="border-t border-[#404040] pt-[12px] text-center">
        <p className="text-[11.5px] text-[#a4a4a3]">© AutonomyAI</p>
      </div>
    </div>
  );
};
