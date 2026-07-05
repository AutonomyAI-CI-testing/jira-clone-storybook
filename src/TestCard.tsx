export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#1a1a1a] min-h-screen p-5 w-full max-w-sm">
      {/* Header row */}
      <div className="flex justify-between items-center">
        <span className="text-[#b5b5b5] font-bold text-lg">UI magician Agent</span>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-[#b5b5b5]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mt-2">
        {/* Chevron up */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-[#8b9291]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        <span className="text-[#8b9291] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="mt-8" />

      {/* Section title */}
      <div className="flex items-center gap-2">
        {/* Chevron up */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-[#b2b2b1]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        <span className="text-[#b2b2b1] font-bold text-base">Add New Design</span>
      </div>

      {/* Form section */}
      <div className="mt-4 flex flex-col gap-4">
        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span className="text-[#a4a4a3] text-sm">Personal Access Token</span>
            {/* Info icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#a4a4a3]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <circle cx="12" cy="12" r="9" />
              <path strokeLinecap="round" d="M12 11v5" />
              <circle cx="12" cy="8" r="0.5" fill="currentColor" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="bg-[#2a2a2a] border border-[#3a3a3a] text-[#737470] placeholder-[#737470] rounded p-2 w-full text-sm outline-none"
            readOnly
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span className="text-[#a4a4a3] text-sm">Design URL</span>
            {/* Info icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#a4a4a3]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <circle cx="12" cy="12" r="9" />
              <path strokeLinecap="round" d="M12 11v5" />
              <circle cx="12" cy="8" r="0.5" fill="currentColor" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="bg-[#2a2a2a] border border-[#3a3a3a] text-[#737470] placeholder-[#737470] rounded p-2 w-full text-sm outline-none"
            readOnly
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-4">
        <button className="bg-[#8c4a2f] text-white rounded-lg px-5 py-2 font-medium text-sm">
          Awesome
        </button>
        <button className="bg-[#8c4a2f] text-white rounded-lg px-5 py-2 font-medium text-sm">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-8">
        <span className="text-[#b0b0b0] font-bold text-base">Recent Breakdowns</span>
      </div>
    </div>
  );
};

export default TestCard;
