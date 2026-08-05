import { HiCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-sm flex-col gap-4 p-5"
      style={{ backgroundColor: "#2a2a2a" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        <HiCog size={26} color="#aaa" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2" style={{ color: "#c1693a" }}>
        <HiChevronUp size={18} />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="mt-4" />

      {/* Add New Design Section */}
      <div className="flex items-center gap-2">
        <HiChevronUp size={18} className="text-white" />
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-white">Personal Access Token</span>
          <HiInformationCircle size={18} color="#888" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded px-3 py-2 text-sm text-white outline-none"
          style={{
            backgroundColor: "#3a3a3a",
            border: "1px solid #555",
          }}
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-white">Design URL</span>
          <HiInformationCircle size={18} color="#888" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded px-3 py-2 text-sm text-white outline-none"
          style={{
            backgroundColor: "#3a3a3a",
            border: "1px solid #888",
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          type="button"
          className="flex-1 rounded-lg py-3 text-sm font-bold text-white"
          style={{ backgroundColor: "#b5451b" }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-lg py-3 text-sm font-bold text-white"
          style={{ backgroundColor: "#b5451b" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <span className="text-lg font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};

export default TestCard;
