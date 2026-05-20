export const TestCard = () => {
  return (
    <div
      className="w-full max-w-md p-8 rounded-lg"
      style={{ backgroundColor: "#1e1e1e", color: "#c0c0c0" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-normal" style={{ color: "#c0c0c0" }}>
          UI magician Agent
        </h1>
        <button
          className="p-2 rounded"
          style={{ color: "#c0c0c0" }}
        >
          <svg
            className="w-7 h-7"
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

      {/* Collapsible Section */}
      <div className="flex items-center gap-3 mb-10">
        <svg
          className="w-5 h-5"
          style={{ color: "#9a9a9a" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
        <span className="text-base" style={{ color: "#9a9a9a" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-3 mb-8">
        <svg
          className="w-6 h-6"
          style={{ color: "#c0c0c0" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
        <h2 className="text-xl font-normal" style={{ color: "#c0c0c0" }}>
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <label className="text-base" style={{ color: "#9a9a9a" }}>
            Personal Access Token
          </label>
          <button style={{ color: "#9a9a9a" }}>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" strokeWidth={2} />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 16v-4m0-4h.01"
              />
            </svg>
          </button>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="w-full rounded px-4 py-4 text-base focus:outline-none"
          style={{
            backgroundColor: "transparent",
            border: "1.5px solid #555555",
            color: "#808080",
          }}
        />
      </div>

      {/* Design URL */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <label className="text-base" style={{ color: "#9a9a9a" }}>
            Design URL
          </label>
          <button style={{ color: "#9a9a9a" }}>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" strokeWidth={2} />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 16v-4m0-4h.01"
              />
            </svg>
          </button>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded px-4 py-4 text-base focus:outline-none"
          style={{
            backgroundColor: "transparent",
            border: "1.5px solid #555555",
            color: "#808080",
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-10">
        <button
          className="flex-1 font-normal py-4 px-8 rounded text-base transition-colors"
          style={{ backgroundColor: "#a0573a", color: "#ffffff" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 font-normal py-4 px-8 rounded text-base transition-colors"
          style={{ backgroundColor: "#a0573a", color: "#ffffff" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <h2 className="text-xl font-normal" style={{ color: "#c0c0c0" }}>
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
