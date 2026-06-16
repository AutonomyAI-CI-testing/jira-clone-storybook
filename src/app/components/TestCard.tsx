export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-6 rounded-lg font-sans text-white max-w-md mx-auto">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37zm-2.834 9.367a4.5 4.5 0 100-9.043 4.5 4.5 0 000 9.043z"
          />
        </svg>
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center text-[#b5a090] mb-6">
        <svg
          className="w-4 h-4 mr-1 transform rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
        </svg>
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Add New Design Section */}
      <div className="flex items-center text-white font-bold mb-4">
        <svg
          className="w-4 h-4 mr-1 transform rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
        </svg>
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <label className="flex items-center text-sm mb-2">
          Personal Access Token
          <svg
            className="w-4 h-4 ml-1 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded-md bg-[#3a3a3a] border border-[#555] text-[#ccc] placeholder-[#666] focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <label className="flex items-center text-sm mb-2">
          Design URL
          <svg
            className="w-4 h-4 ml-1 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded-md bg-[#3a3a3a] border border-[#555] text-[#ccc] placeholder-[#666] focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mb-8">
        <button className="flex-1 bg-[#b85c2a] text-white rounded-lg px-6 py-2 hover:bg-[#a04e22] transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#b85c2a] text-white rounded-lg px-6 py-2 hover:bg-[#a04e22] transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Heading */}
      <div>
        <h2 className="text-lg font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
};