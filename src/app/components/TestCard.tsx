import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-[320px] flex-col gap-6 rounded-md bg-[#111110] p-5 font-sans text-white"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings size={18} className="text-[#b5b5b5]" />
      </div>

      <div className="flex items-center gap-2 text-[11.5px] font-semibold text-[#8b9291]">
        <FiChevronUp size={12} />
        <span>From entire frame to a singl...</span>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-[13.5px] font-semibold text-[#b2b2b1]">
          <FiChevronUp size={12} />
          <span>Add New Design</span>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 text-[11.5px] font-semibold text-[#a3a3a2]">
            <span>Personal Access Token</span>
            <FiInfo size={12} className="text-[#a3a3a2]" />
          </div>
          <input
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded-sm border border-[#8a8a89] bg-[#272822] px-3 py-2 text-[11.5px] text-[#71726e] placeholder-[#71726e]"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 text-[11.5px] font-semibold text-[#a3a3a2]">
            <span>Design URL</span>
            <FiInfo size={12} className="text-[#a3a3a2]" />
          </div>
          <input
            readOnly
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded-sm border border-[#8a8a89] bg-[#272822] px-3 py-2 text-[11.5px] text-[#71726e] placeholder-[#71726e]"
          />
        </div>

        <div className="mt-1 flex items-center gap-4">
          <button className="cursor-pointer rounded bg-[#843a17] px-6 py-2.5 text-[11.5px] font-semibold text-[#c9a698] hover:opacity-90">
            Awesome
          </button>
          <button className="cursor-pointer rounded bg-[#843a17] px-6 py-2.5 text-[11.5px] font-semibold text-[#c9a698] hover:opacity-90">
            Prepare
          </button>
        </div>
      </div>

      <span className="mt-2 text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
