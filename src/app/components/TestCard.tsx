import {
  IoSettingsOutline,
  IoChevronUp,
  IoInformationCircleOutline,
} from "react-icons/io5";

export function TestCard() {
  return (
    <div id="testElem">
      <div
        className="w-full max-w-[360px] rounded-lg px-5 py-5 font-sans"
        style={{ backgroundColor: "#1a1a1a", color: "#d4d4d4" }}
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-lg font-medium" style={{ color: "#e8e8e8" }}>
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="hover:opacity-80"
            style={{ color: "#c0c0c0" }}
          >
            <IoSettingsOutline className="h-5 w-5" />
          </button>
        </div>

        {/* Summary line */}
        <div
          className="mb-8 flex items-center gap-2 text-sm"
          style={{ color: "#b0b0b0" }}
        >
          <IoChevronUp className="h-4 w-4 shrink-0" />
          <span className="truncate">From entire frame to a singl...</span>
        </div>

        {/* Add New Design */}
        <div className="mb-10">
          <div
            className="mb-5 flex items-center gap-2 text-base font-medium"
            style={{ color: "#d0d0d0" }}
          >
            <IoChevronUp className="h-4 w-4 shrink-0" />
            <span>Add New Design</span>
          </div>

          {/* Personal Access Token */}
          <div className="mb-4">
            <div
              className="mb-2 flex items-center gap-2 text-sm"
              style={{ color: "#c8c8c8" }}
            >
              <span>Personal Access Token</span>
              <IoInformationCircleOutline
                className="h-4 w-4"
                style={{ color: "#9a9a9a" }}
              />
            </div>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxxxxxx"
              className="w-full rounded px-3 py-2.5 text-sm outline-none"
              style={{
                backgroundColor: "#222222",
                border: "1px solid #5a5a5a",
                color: "#b8b8b8",
              }}
            />
          </div>

          {/* Design URL */}
          <div className="mb-5">
            <div
              className="mb-2 flex items-center gap-2 text-sm"
              style={{ color: "#c8c8c8" }}
            >
              <span>Design URL</span>
              <IoInformationCircleOutline
                className="h-4 w-4"
                style={{ color: "#9a9a9a" }}
              />
            </div>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded px-3 py-2.5 text-sm outline-none"
              style={{
                backgroundColor: "#222222",
                border: "2px solid #9a9a9a",
                color: "#d0d0d0",
              }}
            />
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="rounded-md px-6 py-2.5 text-sm font-medium"
              style={{ backgroundColor: "#a6542c", color: "#e8d5c8" }}
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-md px-6 py-2.5 text-sm font-medium"
              style={{ backgroundColor: "#a6542c", color: "#e8d5c8" }}
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div>
          <h2 className="text-base font-medium" style={{ color: "#d0d0d0" }}>
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
}
