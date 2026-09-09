import { HiOutlineCog, HiChevronUp, HiOutlineInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-[320px] rounded bg-black p-5 font-sans">
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <HiOutlineCog className="text-[#b5b5b5]" size={18} />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <HiChevronUp size={14} className="text-[#8b9291]" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-10 flex items-center gap-2">
        <HiChevronUp size={14} className="text-[#b0b0b0]" />
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Add New Design
        </span>
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-1">
          <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </label>
          <HiOutlineInformationCircle size={14} className="text-[#a4a4a3]" />
        </div>
        <input
          disabled
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-1 w-full rounded-none border-2 border-[#929291] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
        />
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-1">
          <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </label>
          <HiOutlineInformationCircle size={14} className="text-[#a3a3a2]" />
        </div>
        <input
          disabled
          placeholder="https://www.figma.com/file/:"
          className="mt-1 w-full rounded-none border border-[#a5adad] bg-[#272822] px-3 py-2 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
        />
      </div>

      <div className="mt-4 flex gap-3">
        <button
          disabled
          className="rounded bg-[#843a17] px-6 py-2 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          disabled
          className="rounded bg-[#843a17] px-6 py-2 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-10">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
