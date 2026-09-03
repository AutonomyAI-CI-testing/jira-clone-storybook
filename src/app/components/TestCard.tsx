export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col w-64 font-[Inter]"
      style={{ backgroundColor: "#272822" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span
          className="font-semibold"
          style={{ color: "#b5b5b5", fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          UI magician Agent
        </span>
        <img src="/images/testcard-gear.svg" alt="settings" style={{ width: 14, height: 16 }} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-5">
        <img src="/images/testcard-chevron-up.svg" alt="collapse" style={{ width: 12, height: 8 }} />
        <span
          className="font-semibold truncate"
          style={{ color: "#8b9291", fontSize: "11.5px", lineHeight: "13.92px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Separator */}
      <div className="h-px w-full" style={{ backgroundColor: "#3a3b36" }} />

      {/* Add New Design section */}
      <div className="flex flex-col px-5 pt-5 pb-5 gap-3">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-1">
          <img src="/images/testcard-chevron-up.svg" alt="collapse" style={{ width: 12, height: 8 }} />
          <span
            className="font-semibold"
            style={{ color: "#b2b2b1", fontSize: "13.5px", lineHeight: "16.34px" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span
              className="font-semibold"
              style={{ color: "#a4a4a3", fontSize: "11.5px", lineHeight: "13.92px" }}
            >
              Personal Access Token
            </span>
            <img src="/images/testcard-info.svg" alt="info" style={{ width: 15, height: 15 }} />
          </div>
          <div
            className="rounded px-2.5 py-2"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
            }}
          >
            <span
              className="font-semibold"
              style={{ color: "#737470", fontSize: "11.5px", lineHeight: "13.92px" }}
            >
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span
              className="font-semibold"
              style={{ color: "#a3a3a2", fontSize: "11.5px", lineHeight: "13.92px" }}
            >
              Design URL
            </span>
            <img src="/images/testcard-info.svg" alt="info" style={{ width: 15, height: 15 }} />
          </div>
          <div
            className="rounded px-2.5 py-2"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
            }}
          >
            <span
              className="font-semibold"
              style={{ color: "#71726e", fontSize: "10.5px", lineHeight: "12.71px" }}
            >
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-1">
          <button
            className="flex-1 flex items-center justify-center rounded py-2.5 font-semibold"
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
              fontSize: "11.5px",
              lineHeight: "13.92px",
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 flex items-center justify-center rounded py-2.5 font-semibold"
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
              fontSize: "11.5px",
              lineHeight: "13.92px",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Separator */}
      <div className="h-px w-full" style={{ backgroundColor: "#3a3b36" }} />

      {/* Recent Breakdowns */}
      <div className="px-5 py-4">
        <span
          className="font-semibold"
          style={{ color: "#b0b0b0", fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
