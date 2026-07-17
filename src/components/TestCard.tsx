import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen bg-[#2a2a2a] p-6 font-sans"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-white">UI magician Agent</h1>
        <FiSettings className="text-white" size={22} />
      </div>

      {/* Subheader row */}
      <div className="mt-3 flex items-center gap-2">
        <FiChevronUp className="text-[#c97a4a]" size={16} />
        <span className="text-sm text-[#c97a4a]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-8" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-white" size={18} />
        <h2 className="text-lg font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mt-4 flex items-center gap-2">
        <span className="text-sm text-white">Personal Access Token</span>
        <FiInfo className="text-[#9ca3af]" size={15} />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2 w-full rounded border border-[#4b5563] bg-[#1e1e1e] px-3 py-2 text-sm text-[#9ca3af] placeholder:text-[#6b7280] focus:outline-none"
      />

      {/* Design URL */}
      <div className="mt-4 flex items-center gap-2">
        <span className="text-sm text-white">Design URL</span>
        <FiInfo className="text-[#9ca3af]" size={15} />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-2 w-full rounded border border-[#4b5563] bg-[#1e1e1e] px-3 py-2 text-sm text-[#9ca3af] placeholder:text-[#6b7280] focus:outline-none"
      />

      {/* Buttons */}
      <div className="mt-6 flex gap-3">
        <button className="rounded-lg bg-[#b5451b] px-6 py-3 font-medium text-white">
          Awesome
        </button>
        <button className="rounded-lg bg-[#b5451b] px-6 py-3 font-medium text-white">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
