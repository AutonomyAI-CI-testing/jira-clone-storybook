export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#1a1a1a] p-5 text-white" style={{ width: "254px", minHeight: "508px" }}>
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span
          className="text-[#b5b5b5]"
          style={{ fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}
        >
          UI magician Agent
        </span>
        <span
          className="text-[#b5b5b5]"
          style={{ fontSize: "14px" }}
        >
          ⚙
        </span>
      </div>

      {/* Caret + muted text row */}
      <div className="mt-4 flex items-center gap-2">
        <span
          className="text-[#8b9291]"
          style={{ fontSize: "10px", lineHeight: 1 }}
        >
          ∧
        </span>
        <span
          className="text-[#8b9291]"
          style={{ fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-16" />

      {/* Add New Design section heading */}
      <div className="flex items-center gap-2">
        <span
          className="text-[#b2b2b1]"
          style={{ fontSize: "13px", lineHeight: 1 }}
        >
          ∧
        </span>
        <span
          className="text-[#b2b2b1]"
          style={{ fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}
        >
          Add New Design
        </span>
      </div>

      {/* Form area */}
      <div className="mt-5 flex flex-col gap-3">
        {/* Personal Access Token */}
        <div>
          <div className="mb-1.5 flex items-center gap-2">
            <span
              className="text-[#a4a4a3]"
              style={{ fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}
            >
              Personal Access Token
            </span>
            <span
              className="text-[#a4a4a3]"
              style={{ fontSize: "13px" }}
            >
              ⓘ
            </span>
          </div>
          <input
            type="text"
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded bg-[#272822] px-3 py-2 text-[#737470] outline-none"
            style={{
              fontSize: "11.5px",
              fontWeight: 600,
              lineHeight: "13.92px",
              border: "1px solid #a5adad",
            }}
          />
        </div>

        {/* Design URL */}
        <div>
          <div className="mb-1.5 flex items-center gap-2">
            <span
              className="text-[#a3a3a2]"
              style={{ fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}
            >
              Design URL
            </span>
            <span
              className="text-[#a3a3a2]"
              style={{ fontSize: "13px" }}
            >
              ⓘ
            </span>
          </div>
          <input
            type="text"
            readOnly
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded bg-[#272822] px-3 py-2 text-[#71726e] outline-none"
            style={{
              fontSize: "10.5px",
              fontWeight: 600,
              lineHeight: "12.71px",
              border: "2px solid #929291",
            }}
          />
        </div>
      </div>

      {/* Button row */}
      <div className="mt-5 flex gap-3">
        <button
          type="button"
          className="rounded bg-[#843a17] px-6 py-2.5 text-[#8c8078]"
          style={{ fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px", borderRadius: "4px", width: "85px", height: "37px" }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded bg-[#843a17] px-6 py-2.5 text-[#8c8078]"
          style={{ fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px", borderRadius: "4px", width: "85px", height: "37px" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div className="mt-16">
        <span
          className="text-[#b0b0b0]"
          style={{ fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
