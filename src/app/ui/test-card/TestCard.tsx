export function TestCard() {
  return (
    <div
      id="testElem"
      className="rounded-xl p-6 w-72 flex flex-col gap-4 bg-[#242220]"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">UI magician Agent</h1>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-400"
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        {/* Chevron-up icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-[#A0693A]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        <span className="text-sm text-[#A0693A]">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mt-2">
        {/* Chevron-up icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        <h2 className="text-xl font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-white">Personal Access Token</label>
          {/* Info icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <circle cx="12" cy="12" r="9" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8h.01M12 11v5" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="bg-[#3A3330] border border-[#5A4A42] rounded-md px-3 py-2 text-sm text-gray-400 w-full outline-none placeholder-gray-500"
        />
      </div>

      {/* Design URL field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-white">Design URL</label>
          {/* Info icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <circle cx="12" cy="12" r="9" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8h.01M12 11v5" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="bg-[#3A3330] border border-[#5A4A42] rounded-md px-3 py-2 text-sm text-gray-400 w-full outline-none placeholder-gray-500"
        />
      </div>

      {/* Button row */}
      <div className="flex gap-3 justify-center">
        <button className="bg-[#B7531A] text-white rounded-lg px-5 py-2 text-sm font-medium">
          Awesome
        </button>
        <button className="bg-[#B7531A] text-white rounded-lg px-5 py-2 text-sm font-medium">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns footer */}
      <div className="mt-2">
        <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

export default TestCard;
