
export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1e1e1e" }}
      className="p-6 rounded-xl w-[300px] flex flex-col space-y-4"
    >
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <h1 style={{ color: "#b5b5b5" }} className="text-lg font-medium">
          UI magician Agent
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#b5b5b5"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.525.322 1.017.1 1.487-.521z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#8b9291"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
        <p style={{ color: "#8b9291" }} className="text-sm">
          From entire frame to a singl...
        </p>
      </div>

      <div className="py-2"></div>

      {/* Add New Design Section */}
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#b2b2b1"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
        <h2 style={{ color: "#b2b2b1" }} className="text-md font-medium">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token Input */}
      <div className="flex flex-col space-y-2">
        <label style={{ color: "#a4a4a3" }} className="text-xs flex items-center space-x-1">
          <span>Personal Access Token</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#a4a4a3"
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
          style={{
            backgroundColor: "#2a2a2a",
            color: "#b5b5b5",
            borderColor: "#3a3a3a",
          }}
          className="p-2 rounded-md border text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Design URL Input */}
      <div className="flex flex-col space-y-2">
        <label style={{ color: "#a4a4a3" }} className="text-xs flex items-center space-x-1">
          <span>Design URL</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#a4a4a3"
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
          style={{
            backgroundColor: "#2a2a2a",
            color: "#b5b5b5",
            borderColor: "#3a3a3a",
          }}
          className="p-2 rounded-md border text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between space-x-4 pt-2">
        <button
          style={{ backgroundColor: "#b45a2a", color: "#ffffff" }}
          className="flex-1 px-6 py-2 rounded-lg text-sm font-medium"
        >
          Awesome
        </button>
        <button
          style={{ backgroundColor: "#b45a2a", color: "#ffffff" }}
          className="flex-1 px-6 py-2 rounded-lg text-sm font-medium"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Heading */}
      <h2 style={{ color: "#b0b0b0" }} className="text-md font-medium pt-4">
        Recent Breakdowns
      </h2>
    </div>
  );
}
