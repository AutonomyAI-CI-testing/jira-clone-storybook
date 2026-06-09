const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="font-sans bg-[#1c1c1c] p-4 text-[#b5b5b5]">
      {/* Header Row */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-lg font-bold text-white">UI magician Agent</h1>
        {/* Settings Icon (Gear) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
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

      {/* Subtext Row */}
      <div className="mb-6 flex items-center text-[#8b9291]">
        {/* Caret Icon (Chevron Up) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-1 h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section Header */}
      <div className="text-md mb-4 flex items-center font-bold text-white">
        {/* Caret Icon (Chevron Up) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <label className="mb-2 flex items-center text-sm text-[#b5b5b5]">
          Personal Access Token
          {/* Info Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-4 w-4 text-[#8b9291]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#525252] bg-transparent p-2 text-white outline-none"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <label className="mb-2 flex items-center text-sm text-[#b5b5b5]">
          Design URL
          {/* Info Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-4 w-4 text-[#8b9291]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#525252] bg-transparent p-2 text-white outline-none"
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-6 flex space-x-4">
        <button className="flex-1 rounded bg-[#b5522a] py-2 font-semibold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#b5522a] py-2 font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Header */}
      <div>
        <h2 className="text-md font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
