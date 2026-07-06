import { AiOutlineSetting } from "react-icons/ai";
import { FiChevronUp } from "react-icons/fi";
import { BsInfoCircle } from "react-icons/bs";

export const TestCard = (): JSX.Element => {
  const outerStyle: React.CSSProperties = {
    background: "#2a2a2a",
    padding: "20px",
    minWidth: "320px",
    maxWidth: "400px",
  };

  const primaryTextStyle: React.CSSProperties = { color: "#e8e0d8" };
  const mutedTextStyle: React.CSSProperties = { color: "#a0856c" };
  const labelStyle: React.CSSProperties = { color: "#cccccc" };

  const inputStyle: React.CSSProperties = {
    background: "#1e1e1e",
    border: "1px solid #555555",
    color: "#cccccc",
    padding: "10px 12px",
  };

  const inputStyle2: React.CSSProperties = {
    background: "#1e1e1e",
    border: "2px solid #555555",
    color: "#cccccc",
    padding: "10px 12px",
  };

  const buttonStyle: React.CSSProperties = {
    background: "#843a17",
    color: "#f0e0d0",
    padding: "10px 24px",
  };

  return (
    <div id="testElem" style={outerStyle}>
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl" style={primaryTextStyle}>
          UI magician Agent
        </h1>
        <AiOutlineSetting size={24} style={primaryTextStyle} />
      </div>

      {/* 2. Chevron-up + subtitle */}
      <div className="flex items-center gap-2 mt-2">
        <FiChevronUp style={mutedTextStyle} />
        <span className="text-sm" style={mutedTextStyle}>
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer */}
      <div style={{ height: "32px" }} />

      {/* 4. "Add New Design" section heading */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp style={primaryTextStyle} />
        <h2 className="font-bold text-lg" style={primaryTextStyle}>
          Add New Design
        </h2>
      </div>

      {/* 5. Spacer */}
      <div style={{ height: "16px" }} />

      {/* 6. Personal Access Token label */}
      <div className="flex items-center gap-2 mb-1">
        <span className="text-sm" style={labelStyle}>
          Personal Access Token
        </span>
        <BsInfoCircle size={14} style={labelStyle} />
      </div>

      {/* 7. Token input */}
      <input
        className="w-full rounded outline-none box-border"
        style={inputStyle}
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
      />

      {/* 8. Spacer */}
      <div style={{ height: "16px" }} />

      {/* 9. Design URL label */}
      <div className="flex items-center gap-2 mb-1">
        <span className="text-sm" style={labelStyle}>
          Design URL
        </span>
        <BsInfoCircle size={14} style={labelStyle} />
      </div>

      {/* 10. URL input */}
      <input
        className="w-full rounded outline-none box-border"
        style={inputStyle2}
        placeholder="https://www.figma.com/file/:"
        readOnly
      />

      {/* 11. Spacer */}
      <div style={{ height: "24px" }} />

      {/* 12. Two buttons */}
      <div className="flex gap-3">
        <button
          className="flex-1 rounded cursor-pointer font-bold text-sm"
          style={buttonStyle}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded cursor-pointer font-bold text-sm"
          style={buttonStyle}
        >
          Prepare
        </button>
      </div>

      {/* 13. Spacer */}
      <div style={{ height: "40px" }} />

      {/* 14. Recent Breakdowns */}
      <h3 className="font-bold text-lg" style={primaryTextStyle}>
        Recent Breakdowns
      </h3>
    </div>
  );
};
