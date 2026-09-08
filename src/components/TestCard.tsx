export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#272822",
        width: "254px",
        fontFamily: "Inter, sans-serif",
        fontWeight: 600,
      }}
      className="p-4 flex flex-col gap-3"
    >
      {/* 1. Header row */}
      <div className="flex justify-between items-center">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px" }}>
          UI magician Agent
        </span>
        <span style={{ color: "#b5b5b5", fontSize: "16px" }}>⚙</span>
      </div>

      {/* 2. Subtitle row */}
      <div className="flex items-center gap-1">
        <span style={{ color: "#8b9291", fontSize: "10px" }}>∧</span>
        <span style={{ color: "#8b9291", fontSize: "11.5px" }} className="italic">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer */}
      <div className="mt-4" />

      {/* 4. "Add New Design" header */}
      <div className="flex items-center gap-2">
        <span style={{ color: "#b2b2b1", fontSize: "10px" }}>∧</span>
        <span style={{ color: "#b2b2b1", fontSize: "13.5px" }}>
          Add New Design
        </span>
      </div>

      {/* 5. Personal Access Token label */}
      <div className="flex items-center gap-1 mt-1">
        <span style={{ color: "#a4a4a3", fontSize: "11.5px" }}>
          Personal Access Token
        </span>
        <span style={{ color: "#a4a4a3", fontSize: "13px" }}>ⓘ</span>
      </div>

      {/* 6. Token input */}
      <input
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full px-2 py-2 outline-none placeholder-[#737470]"
        style={{
          backgroundColor: "#272822",
          border: "1px solid #a5adad",
          color: "#737470",
          fontSize: "11.5px",
        }}
      />

      {/* 7. Design URL label */}
      <div className="flex items-center gap-1 mt-1">
        <span style={{ color: "#a3a3a2", fontSize: "11.5px" }}>Design URL</span>
        <span style={{ color: "#a3a3a2", fontSize: "13px" }}>ⓘ</span>
      </div>

      {/* 8. URL input */}
      <input
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="w-full px-2 py-2 outline-none placeholder-[#71726e]"
        style={{
          backgroundColor: "#272822",
          border: "2px solid #929291",
          color: "#71726e",
          fontSize: "10.5px",
        }}
      />

      {/* 9. Button row */}
      <div className="flex gap-3 mt-1 justify-center">
        <button
          type="button"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            width: "85px",
            height: "37px",
            borderRadius: "4px",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
          }}
        >
          Awesome
        </button>
        <button
          type="button"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            width: "85px",
            height: "37px",
            borderRadius: "4px",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
          }}
        >
          Prepare
        </button>
      </div>

      {/* 10. Recent Breakdowns */}
      <p
        className="mt-4"
        style={{ color: "#b0b0b0", fontSize: "13.5px" }}
      >
        Recent Breakdowns
      </p>
    </div>
  );
};
