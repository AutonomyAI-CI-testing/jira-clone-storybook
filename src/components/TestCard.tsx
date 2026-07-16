import { FiChevronUp, FiInfo } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

export const TestCard = (): JSX.Element => {
  const cardStyle = { backgroundColor: "#1e1e1e", color: "#ffffff" };
  const inputStyle = {
    backgroundColor: "#2a2a2a",
    border: "1px solid #444",
    color: "#aaa",
    borderRadius: "4px",
    padding: "10px 12px",
    width: "100%",
    outline: "none",
  };
  const buttonStyle = {
    backgroundColor: "#b5541c",
    color: "#ffffff",
    borderRadius: "8px",
    padding: "12px 24px",
    fontWeight: 600,
    cursor: "pointer",
    border: "none",
    flex: 1,
  };
  const subtitleColor = { color: "#b06030" };
  const mutedColor = { color: "#888" };

  return (
    <div id="testElem" style={cardStyle} className="min-h-screen p-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold">UI magician Agent</span>
        <IoSettingsOutline size={24} style={mutedColor} />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2" style={subtitleColor}>
        <FiChevronUp size={16} />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="flex-1" style={{ minHeight: "60px" }} />

      {/* Add New Design section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <FiChevronUp size={18} />
          <span className="text-lg font-bold">Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Personal Access Token</span>
            <FiInfo size={14} style={mutedColor} />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            style={inputStyle}
            readOnly
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Design URL</span>
            <FiInfo size={14} style={mutedColor} />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            style={inputStyle}
            readOnly
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-center mt-2">
          <button style={buttonStyle}>Awesome</button>
          <button style={buttonStyle}>Prepare</button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <span className="text-lg font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
};

export default TestCard;
