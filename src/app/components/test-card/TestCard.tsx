import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-[254px] rounded bg-[#151513] p-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings size={16} className="text-[#b5b5b5]" />
      </div>

      {/* Collapsible info row */}
      <div className="mt-4 flex items-center gap-2">
        <FiChevronUp size={12} className="text-[#8b9291]" />
        <span className="truncate font-primary-bold text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-16 flex items-center gap-2">
        <FiChevronUp size={14} className="text-[#b2b2b1]" />
        <span className="font-primary-bold text-[13.5px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-6 flex flex-col gap-1">
        <div className="flex items-center gap-1.5">
          <span className="font-primary-bold text-[11.5px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <FiInfo size={12} className="text-[#a4a4a3]" />
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="rounded-none border-2 border-[#929291] bg-[#272822] px-3 py-2.5 font-primary-bold text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]"
        />
      </div>

      <div className="mt-4 flex flex-col gap-1">
        <div className="flex items-center gap-1.5">
          <span className="font-primary-bold text-[11.5px] text-[#a3a3a2]">
            Design URL
          </span>
          <FiInfo size={12} className="text-[#a3a3a2]" />
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="rounded-none border border-[#a5adad] bg-[#272822] px-3 py-2.5 font-primary-bold text-[10.5px] text-[#71726e] outline-none placeholder:text-[#71726e]"
        />
      </div>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          className="flex-1 rounded bg-[#843a17] px-4 py-2 font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded bg-[#843a17] px-4 py-2 font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-10">
        <span className="font-primary-bold text-[13.5px] text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
