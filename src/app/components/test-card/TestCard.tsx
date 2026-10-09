import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[380px] rounded-xl bg-[#1b1b1b] p-5 font-primary text-[#e8e8e8]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-lg">UI magician Agent</h1>
        <HiOutlineCog size={22} className="text-[#c9c9c9]" aria-hidden="true" />
      </div>

      <div className="mt-4 flex items-center gap-2 border-t border-[#3a3a3a] pt-4 text-sm text-[#a8a8a8]">
        <HiOutlineChevronUp
          size={16}
          className="shrink-0"
          aria-hidden="true"
        />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="mt-12 flex items-center gap-2">
        <HiOutlineChevronUp size={18} aria-hidden="true" />
        <h2 className="font-primary-bold text-lg">Add New Design</h2>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2 text-sm text-[#c9c9c9]">
          <span>Personal Access Token</span>
          <HiOutlineInformationCircle
            size={16}
            className="text-[#e8e8e8]"
            aria-hidden="true"
          />
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-2 w-full rounded-md border border-[#8a8a8a] bg-[#262626] px-3 py-2.5 text-sm text-[#e8e8e8] placeholder:text-[#8a8a8a]"
        />
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-2 text-sm text-[#c9c9c9]">
          <span>Design URL</span>
          <HiOutlineInformationCircle
            size={16}
            className="text-[#e8e8e8]"
            aria-hidden="true"
          />
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/"
          className="mt-2 w-full rounded-md border border-[#8a8a8a] bg-[#262626] px-3 py-2.5 text-sm text-[#e8e8e8] placeholder:text-[#8a8a8a]"
        />
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          className="flex-1 rounded-md bg-[#a8481f] px-4 py-3 text-sm text-[#f0d3c4]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-md bg-[#a8481f] px-4 py-3 text-sm text-[#f0d3c4]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-14 font-primary-bold text-lg">Recent Breakdowns</h2>
    </div>
  );
};
