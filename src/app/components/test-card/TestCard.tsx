import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[320px] flex-col gap-0 rounded-lg bg-[#1c1c1c] p-5"
    >
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <FiSettings className="text-white" size={20} />
      </div>

      <div className="mt-2 flex items-center gap-1">
        <FiChevronUp className="text-[#c87941]" size={16} />
        <span className="text-sm text-[#c87941]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-8" />

      <div className="flex items-center gap-2">
        <FiChevronUp className="text-white" size={18} />
        <span className="text-base font-bold text-white">Add New Design</span>
      </div>

      <div className="mt-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm text-white">Personal Access Token</span>
          <FiInfo className="text-white opacity-60" size={14} />
        </div>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#555] bg-[#2a2a2a] px-3 py-2 text-sm text-[#aaa] placeholder:text-[#777] outline-none"
        />
      </div>

      <div className="mt-3">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm text-white">Design URL</span>
          <FiInfo className="text-white opacity-60" size={14} />
        </div>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#777] bg-[#2a2a2a] px-3 py-2 text-sm text-[#aaa] placeholder:text-[#777] outline-none"
        />
      </div>

      <div className="mt-5 flex gap-3">
        <button className="flex-1 rounded-lg bg-[#b05a28] px-4 py-3 text-sm font-bold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b05a28] px-4 py-3 text-sm font-bold text-white">
          Prepare
        </button>
      </div>

      <div className="mt-8" />

      <div>
        <span className="text-lg font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
