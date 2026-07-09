export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] min-h-screen p-5 text-white font-sans max-w-sm"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg font-bold">UI magician Agent</span>
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

      {/* Chevron subtitle row */}
      <div className="flex items-center gap-2 mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-[#b5703a]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        <span className="text-[#b5703a] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section heading */}
      <div className="flex items-center gap-2 mb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        <span className="text-base font-bold">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-sm text-gray-300">Personal Access Token</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <circle cx="12" cy="12" r="9" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v1m0 3v4" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#383838] border border-[#555555] rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none"
          readOnly
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-sm text-gray-300">Design URL</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <circle cx="12" cy="12" r="9" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v1m0 3v4" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#383838] border border-[#555555] rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none"
          readOnly
        />
      </div>

      {/* Buttons row */}
      <div className="flex gap-4 mb-10 justify-center">
        <button className="bg-[#c1541a] text-white font-semibold rounded-lg px-8 py-3 text-sm">
          Awesome
        </button>
        <button className="bg-[#c1541a] text-white font-semibold rounded-lg px-8 py-3 text-sm">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div>
        <span className="text-base font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
};

export default TestCard;
