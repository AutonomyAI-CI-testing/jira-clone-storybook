
export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] p-6 rounded-lg max-w-sm mx-auto text-white"
    >
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">UI magician Agent</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .3 1.62l.81 1.05a.79.79 0 0 1-.16 1.14l-1.07.72a1.65 1.65 0 0 0-1.77.07l-.14.1a1.65 1.65 0 0 0-1.28 1.48v.22a.79.79 0 0 1-.79.79h-2.08a.79.79 0 0 1-.79-.79v-.22a1.65 1.65 0 0 0-1.28-1.48l-.14-.1a1.65 1.65 0 0 0-1.77-.07l-1.07-.72a.79.79 0 0 1-.16-1.14l.81-1.05a1.65 1.65 0 0 0 .3-1.62v-.27a.79.79 0 0 1-.79-.79V9.58a.79.79 0 0 1-.79-.79v-.27a1.65 1.65 0 0 0-.3-1.62l-.81-1.05a.79.79 0 0 1 .16-1.14l1.07-.72a1.65 1.65 0 0 0 1.77-.07l.14-.1a1.65 1.65 0 0 0 1.28-1.48v-.22a.79.79 0 0 1 .79-.79h2.08a.79.79 0 0 1 .79.79v.22a1.65 1.65 0 0 0 1.28 1.48l.14.1a1.65 1.65 0 0 0 1.77.07l1.07.72a.79.79 0 0 1 .16 1.14l-.81 1.05a1.65 1.65 0 0 0-.3 1.62v.27a.79.79 0 0 1 .79.79v2.08a.79.79 0 0 1-.79.79v.27z" />
        </svg>
      </div>

      {/* Collapsed Row */}
      <div className="flex items-center gap-2 mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M13 10L8 5L3 10" />
        </svg>
        <span className="text-amber-500 text-sm truncate">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="my-4"></div>

      {/* Section Heading */}
      <div className="flex items-center gap-2 mt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M13 10L8 5L3 10" />
        </svg>
        <h3 className="font-bold text-xl">Add New Design</h3>
      </div>

      {/* Form Area */}
      <div className="mt-4 flex flex-col gap-4">
        {/* Personal Access Token Field */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">
            Personal Access Token
            <span className="ml-2 text-xs font-semibold">ⓘ</span>
          </label>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="bg-[#3a3a3a] border border-gray-600 rounded px-3 py-2 w-full text-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Design URL Field */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">
            Design URL
            <span className="ml-2 text-xs font-semibold">ⓘ</span>
          </label>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="bg-[#3a3a3a] border border-gray-600 rounded px-3 py-2 w-full text-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Button Row */}
      <div className="flex gap-3 mt-4 justify-center">
        <button className="bg-[#b85c38] text-white rounded-lg px-6 py-3 font-semibold">
          Awesome
        </button>
        <button className="bg-[#b85c38] text-white rounded-lg px-6 py-3 font-semibold">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold">Recent Breakdowns</h3>
      </div>
    </div>
  );
}