export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] min-h-[508px] overflow-auto flex flex-col"
      style={{ backgroundColor: "#1e1e1a", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <span
          className="font-semibold"
          style={{ color: "#b5b5b5", fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          UI magician Agent
        </span>
        <img
          src="/images/tc-settings-icon.svg"
          alt="Settings"
          width={14}
          height={16}
        />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-6">
        <img
          src="/images/tc-chevron-up-sm.svg"
          alt="Collapse"
          width={8}
          height={5}
        />
        <span
          className="font-semibold"
          style={{ color: "#8b9291", fontSize: "11.5px", lineHeight: "13.92px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Add New Design section */}
      <div className="px-5 flex flex-col gap-3">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-2">
          <img
            src="/images/tc-chevron-up.svg"
            alt="Collapse section"
            width={12}
            height={8}
          />
          <span
            className="font-semibold"
            style={{ color: "#b2b2b1", fontSize: "13.5px", lineHeight: "16.34px" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span
              className="font-semibold"
              style={{ color: "#a4a4a3", fontSize: "11.5px", lineHeight: "13.92px" }}
            >
              Personal Access Token
            </span>
            <img src="/images/tc-info-icon.svg" alt="Info" width={15} height={15} />
          </div>
          <div
            className="flex items-center w-full h-[37px] px-3 rounded"
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
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span
              className="font-semibold"
              style={{ color: "#a3a3a2", fontSize: "11.5px", lineHeight: "13.92px" }}
            >
              Design URL
            </span>
            <img src="/images/tc-info-icon.svg" alt="Info" width={15} height={15} />
          </div>
          <div
            className="flex items-center w-full h-[37px] px-3 rounded"
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

        {/* Buttons row */}
        <div className="flex gap-3 mt-1">
          <button
            className="flex-1 h-[37px] font-semibold"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              lineHeight: "13.92px",
              borderRadius: "4px",
              border: "none",
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 h-[37px] font-semibold"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              lineHeight: "13.92px",
              borderRadius: "4px",
              border: "none",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Recent Breakdowns */}
      <div className="px-5">
        <span
          className="font-semibold"
          style={{ color: "#b0b0b0", fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
