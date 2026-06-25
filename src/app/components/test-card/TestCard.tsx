export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="p-4 rounded-lg shadow-lg" style={{ backgroundColor: "#272822" }}>
      {/* Header */}
      <div className="flex items-center justify-between pb-4">
        <h2 className="text-lg font-semibold" style={{ color: "#b5b5b5" }}>
          UI magician Agent
        </h2>
        {/* Gear Icon */}
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
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 mb-6">
        {/* Chevron Up Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
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
        <p className="text-sm" style={{ color: "#8b9291" }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mb-6">
        {/* Chevron Up Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
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
        <h3 className="text-base font-semibold" style={{ color: "#b2b2b1" }}>
          Add New Design
        </h3>
      </div>

      {/* Form Section */}
      <div className="space-y-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <label htmlFor="pat" className="text-sm" style={{ color: "#a4a4a3" }}>
              Personal Access Token
            </label>
            {/* Info Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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
          </div>
          <input
            type="text"
            id="pat"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded-md focus:outline-none"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              color: "#a4a4a3",
            }}
          />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <label htmlFor="designUrl" className="text-sm" style={{ color: "#a3a3a2" }}>
              Design URL
            </label>
            {/* Info Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#a3a3a2"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="designUrl"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 rounded-md focus:outline-none"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              color: "#a4a4a3", // Using general label color for consistency, adjust if needed
            }}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-4 mb-6">
        <button
          className="w-1/2 p-2 rounded-md font-medium"
          style={{ backgroundColor: "#843a17", color: "#8c8078" }}
        >
          Awesome
        </button>
        <button
          className="w-1/2 p-2 rounded-md font-medium"
          style={{ backgroundColor: "#843a17", color: "#8c8078" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <h3 className="text-base font-semibold" style={{ color: "#b0b0b0" }}>
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
