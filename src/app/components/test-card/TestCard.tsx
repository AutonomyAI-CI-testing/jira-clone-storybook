import {
  HiOutlineCog,
  HiOutlineInformationCircle,
  HiChevronUp,
} from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[280px] rounded bg-[#0f0f0d] p-5 font-sans text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <HiOutlineCog size={20} className="text-[#8b9291]" />
      </div>

      <div className="mt-4 flex items-center gap-1.5 text-[11.5px] font-semibold text-[#8b9291]">
        <HiChevronUp size={14} />
        <span>From entire frame to a singl...</span>
      </div>

      <div className="mt-8 flex items-center gap-1.5 text-[13.5px] font-semibold text-[#b2b2b1]">
        <HiChevronUp size={14} />
        <span>Add New Design</span>
      </div>

      <div className="mt-4">
        <div className="mb-1.5 flex items-center gap-1.5 text-[11.5px] font-semibold text-[#a4a4a3]">
          <span>Personal Access Token</span>
          <HiOutlineInformationCircle size={13} />
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-3 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
        />
      </div>

      <div className="mt-4">
        <div className="mb-1.5 flex items-center gap-1.5 text-[11.5px] font-semibold text-[#a3a3a2]">
          <span>Design URL</span>
          <HiOutlineInformationCircle size={13} />
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-3 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
        />
      </div>

      <div className="mt-4 flex gap-3">
        <button className="flex-1 rounded bg-[#843a17] px-4 py-2.5 text-[11.5px] font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843a17] px-4 py-2.5 text-[11.5px] font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      <div className="mt-9 text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
