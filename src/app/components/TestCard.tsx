const Icons = {
  Settings: () => (
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
  ),
  ChevronUp: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-white mr-2"
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
  ),
  Info: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ml-2 h-4 w-4 text-white"
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
  ),
};

export function TestCard() {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-6 text-white max-w-lg mx-auto rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <Icons.Settings />
      </div>

      {/* Collapsed row */}
      <div className="flex items-center mb-6">
        <Icons.ChevronUp />
        <span className="text-[#c8794a] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center mb-6">
        <Icons.ChevronUp />
        <h2 className="text-lg font-bold">Add New Design</h2>
      </div>

      {/* Form fields */}
      <div className="mb-4">
        <label htmlFor="pat" className="block text-white text-sm font-bold mb-2 flex items-center">
          Personal Access Token
          <Icons.Info />
        </label>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded-md bg-[#1e1e1e] border border-[#444] text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="designUrl" className="block text-white text-sm font-bold mb-2 flex items-center">
          Design URL
          <Icons.Info />
        </label>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded-md bg-[#1e1e1e] border border-[#444] text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-6">
        <button className="flex-1 bg-[#b5541e] text-white px-6 py-3 rounded-lg font-bold">
          Awesome
        </button>
        <button className="flex-1 bg-[#b5541e] text-white px-6 py-3 rounded-lg font-bold">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div>
        <h2 className="text-lg font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
}