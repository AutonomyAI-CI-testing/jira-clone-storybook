import { FiSettings } from "react-icons/fi";
import { BsInfoCircle } from "react-icons/bs";
import { HiChevronUp } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-sm flex-col gap-5 rounded-xl p-5 text-white"
      style={{ background: "#1c1d17" }}
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <FiSettings size={20} className="text-gray-400" />
      </div>

      {/* 2. Subtitle row */}
      <div className="flex items-center gap-1">
        <HiChevronUp size={16} className="text-gray-400" />
        <span className="text-sm" style={{ color: "#c1501a" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer */}
      <div className="py-2" />

      {/* 4. Section header */}
      <div className="flex items-center gap-2">
        <HiChevronUp size={18} className="text-white" />
        <span className="text-base font-bold text-white">Add New Design</span>
      </div>

      {/* 5 & 6. Personal Access Token label + input */}
      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm text-white">Personal Access Token</span>
          <BsInfoCircle size={14} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded px-3 py-2 text-sm text-gray-400 outline-none"
          style={{ background: "#272822", border: "1px solid #929291" }}
        />
      </div>

      {/* 7 & 8. Design URL label + input */}
      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm text-white">Design URL</span>
          <BsInfoCircle size={14} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded px-3 py-2 text-sm text-gray-400 outline-none"
          style={{ background: "#272822", border: "1px solid #929291" }}
        />
      </div>

      {/* 9. Two orange buttons */}
      <div className="flex gap-4">
        <button
          className="flex-1 rounded-lg py-2 text-sm font-semibold text-white"
          style={{ background: "#843a17" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg py-2 text-sm font-semibold text-white"
          style={{ background: "#843a17" }}
        >
          Prepare
        </button>
      </div>

      {/* 10. Footer */}
      <div className="pt-4">
        <span className="text-base font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
