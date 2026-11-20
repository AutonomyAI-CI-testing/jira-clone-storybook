import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-[#0d0d0d] p-5 font-primary"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings size={16} className="shrink-0 text-[#b5b5b5]" />
      </div>

      <div className="mt-5 flex items-center gap-2">
        <FiChevronUp size={10} className="shrink-0 text-[#8b9291]" />
        <span className="truncate text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[72px] flex items-center gap-2">
        <FiChevronUp size={12} className="shrink-0 text-[#b2b2b1]" />
        <span className="font-primary-bold text-[13.5px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2">
          <span className="text-[11.5px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <FiInfo size={15} className="shrink-0 text-[#a4a4a3]" />
        </div>
        <div className="mt-2.5 flex h-[39px] items-center border border-[#a5adad] bg-[#272822] px-2 text-[11.5px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </div>
      </div>

      <div className="mt-2">
        <div className="flex items-center gap-2">
          <span className="text-[11.5px] text-[#a3a3a2]">Design URL</span>
          <FiInfo size={15} className="shrink-0 text-[#a3a3a2]" />
        </div>
        <div className="mt-2.5 flex h-[41px] items-center border-2 border-[#929291] bg-[#272822] px-2 text-[10.5px] text-[#71726e]">
          https://www.figma.com/file/:
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-4">
        {["Awesome", "Prepare"].map((label) => (
          <button
            key={label}
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
          >
            {label}
          </button>
        ))}
      </div>

      <h3 className="mt-12 font-primary-bold text-[13.5px] text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};

export default TestCard;
