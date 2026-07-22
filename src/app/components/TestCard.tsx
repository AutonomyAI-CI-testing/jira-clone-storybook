export const TestCard = () => {
  return (
    <div id="testElem">
      <div
        className="w-[340px] rounded-lg px-5 py-6"
        style={{ backgroundColor: "#1a1c16", color: "#c8c8c0" }}
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-lg font-medium" style={{ color: "#c8c8c0" }}>
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="flex h-6 w-6 items-center justify-center opacity-80"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#c8c8c0"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </button>
        </div>

        {/* Collapsed hint row */}
        <button
          type="button"
          className="mb-8 flex w-full items-center gap-2 text-left text-sm"
          style={{ color: "#9a9a90" }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design section */}
        <div className="mb-2 flex items-center gap-2">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#c8c8c0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <h2 className="text-base font-medium" style={{ color: "#c8c8c0" }}>
            Add New Design
          </h2>
        </div>

        {/* Personal Access Token */}
        <div className="mt-5">
          <div className="mb-2 flex items-center gap-2">
            <label
              className="text-sm"
              style={{ color: "#c8c8c0" }}
              htmlFor="testcard-pat"
            >
              Personal Access Token
            </label>
            <span aria-hidden="true">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9a9a90"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="9" />
                <line x1="12" y1="11" x2="12" y2="16" />
                <circle cx="12" cy="8" r="0.8" fill="#9a9a90" stroke="none" />
              </svg>
            </span>
          </div>
          <input
            id="testcard-pat"
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxxx"
            className="h-10 w-full rounded border px-3 text-sm outline-none"
            style={{
              backgroundColor: "#22241e",
              borderColor: "#6a6a60",
              color: "#c8c8c0",
            }}
          />
        </div>

        {/* Design URL */}
        <div className="mt-4">
          <div className="mb-2 flex items-center gap-2">
            <label
              className="text-sm"
              style={{ color: "#c8c8c0" }}
              htmlFor="testcard-url"
            >
              Design URL
            </label>
            <span aria-hidden="true">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9a9a90"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="9" />
                <line x1="12" y1="11" x2="12" y2="16" />
                <circle cx="12" cy="8" r="0.8" fill="#9a9a90" stroke="none" />
              </svg>
            </span>
          </div>
          <input
            id="testcard-url"
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="h-10 w-full rounded border px-3 text-sm outline-none"
            style={{
              backgroundColor: "#22241e",
              borderColor: "#6a6a60",
              color: "#c8c8c0",
            }}
          />
        </div>

        {/* Actions */}
        <div className="mt-5 flex justify-center gap-3 px-2">
          <button
            type="button"
            className="h-10 flex-1 rounded-md text-sm font-medium"
            style={{ backgroundColor: "#a85428", color: "#d4b4a0" }}
          >
            Awesome
          </button>
          <button
            type="button"
            className="h-10 flex-1 rounded-md text-sm font-medium"
            style={{ backgroundColor: "#a85428", color: "#d4b4a0" }}
          >
            Prepare
          </button>
        </div>

        {/* Footer */}
        <div className="mt-10">
          <h3 className="text-base font-medium" style={{ color: "#c8c8c0" }}>
            Recent Breakdowns
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
