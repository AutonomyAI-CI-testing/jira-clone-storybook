import { AiOutlineSetting } from "react-icons/ai";
import { HiInformationCircle } from "react-icons/hi";
import { RiArrowUpSLine } from "react-icons/ri";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-sm flex-col gap-5 rounded-xl bg-[#1e1e1e] p-5 text-white"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <AiOutlineSetting size={22} className="text-gray-400" />
      </div>

      {/* 2. Subtitle row */}
      <div className="flex items-center gap-1">
        <RiArrowUpSLine size={18} className="text-gray-400" />
        <span className="text-sm text-[#c1501a]">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer */}
      <div className="h-4" />

      {/* 4. Section header */}
      <div className="flex items-center gap-2">
        <RiArrowUpSLine size={20} className="text-white" />
        <span className="text-base font-bold text-white">Add New Design</span>
      </div>

      {/* 5 & 6. Personal Access Token label + input */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5">
          <span className="text-sm text-gray-300">Personal Access Token</span>
          <HiInformationCircle size={16} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded-md border border-[#444] bg-[#2a2a2a] px-3 py-2.5 text-sm text-gray-400 placeholder-gray-500 outline-none"
        />
      </div>

      {/* 7 & 8. Design URL label + input */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5">
          <span className="text-sm text-gray-300">Design URL</span>
          <HiInformationCircle size={16} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded-md border border-[#444] bg-[#2a2a2a] px-3 py-2.5 text-sm text-gray-400 placeholder-gray-500 outline-none"
        />
      </div>

      {/* 9. Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 rounded-lg bg-[#c1501a] px-4 py-3 text-sm font-semibold text-white hover:bg-[#a84415]">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#c1501a] px-4 py-3 text-sm font-semibold text-white hover:bg-[#a84415]">
          Prepare
        </button>
      </div>

      {/* 10. Footer */}
      <div className="mt-2">
        <span className="text-base font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
