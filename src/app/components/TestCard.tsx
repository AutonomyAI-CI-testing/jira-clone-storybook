export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div
        className="flex w-[340px] flex-col gap-8 px-6 py-8"
        style={{ backgroundColor: "#1a1a1a", color: "#d4d4d4" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium" style={{ color: "#d4d4d4" }}>
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            style={{ color: "#a3a3a3" }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </button>
        </div>

        {/* Collapsed section */}
        <button
          type="button"
          className="flex items-center gap-2 text-left text-sm"
          style={{ color: "#a3a3a3" }}
        >
          <svg
            width="14"
            height="14"
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

        {/* Add New Design */}
        <div className="flex flex-col gap-5">
          <button
            type="button"
            className="flex items-center gap-2 text-left text-base font-medium"
            style={{ color: "#d4d4d4" }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <label className="text-sm" style={{ color: "#d4d4d4" }}>
                Personal Access Token
              </label>
              <span
                className="inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px]"
                style={{ border: "1px solid #737373", color: "#a3a3a3" }}
                aria-hidden
              >
                i
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxx"
              className="w-full rounded px-3 py-2.5 text-sm outline-none"
              style={{
                backgroundColor: "#262626",
                border: "1px solid #737373",
                color: "#d4d4d4",
              }}
            />
          </div>

          {/* Design URL */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <label className="text-sm" style={{ color: "#d4d4d4" }}>
                Design URL
              </label>
              <span
                className="inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px]"
                style={{ border: "1px solid #737373", color: "#a3a3a3" }}
                aria-hidden
              >
                i
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded px-3 py-2.5 text-sm outline-none"
              style={{
                backgroundColor: "#262626",
                border: "1px solid #a3a3a3",
                color: "#d4d4d4",
              }}
            />
          </div>

          {/* Actions */}
          <div className="mt-1 flex justify-center gap-3">
            <button
              type="button"
              className="rounded-md px-6 py-2.5 text-sm font-medium"
              style={{ backgroundColor: "#a85a2a", color: "#e5e5e5" }}
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-md px-6 py-2.5 text-sm font-medium"
              style={{ backgroundColor: "#a85a2a", color: "#e5e5e5" }}
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4">
          <h2 className="text-base font-medium" style={{ color: "#d4d4d4" }}>
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
