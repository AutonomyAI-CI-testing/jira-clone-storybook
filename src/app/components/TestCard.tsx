import {
  HiOutlineCog,
  HiOutlineChevronUp,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-[400px] flex-col gap-4 bg-[#252525] p-5"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-lg text-white">
          UI magician Agent
        </span>
        <HiOutlineCog className="text-white" size={22} />
      </div>

      {/* Collapsed section row */}
      <div className="flex items-center gap-2">
        <HiOutlineChevronUp className="text-[#c47f5a]" size={16} />
        <span className="font-primary-light text-sm text-[#c47f5a]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Add New Design heading */}
      <div className="flex items-center gap-2">
        <HiOutlineChevronUp className="text-white" size={18} />
        <span className="font-primary-bold text-xl text-white">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="font-primary text-sm text-white">
            Personal Access Token
          </span>
          <HiOutlineInformationCircle className="text-[#9fadbc]" size={16} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded bg-[#22272b] px-3 py-2 font-primary-light text-sm text-white outline outline-1 outline-[#4a5568] placeholder:font-primary-light placeholder:text-[#9fadbc]"
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="font-primary text-sm text-white">Design URL</span>
          <HiOutlineInformationCircle className="text-[#9fadbc]" size={16} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded bg-[#22272b] px-3 py-2 font-primary-light text-sm text-white outline outline-1 outline-[#4a5568] placeholder:font-primary-light placeholder:text-[#9fadbc]"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 pt-1">
        <button
          type="button"
          className="flex-1 rounded-lg bg-[#c1612a] px-6 py-3 font-primary-bold text-sm text-white hover:bg-[#a8521f] active:bg-[#8f441a]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-lg bg-[#c1612a] px-6 py-3 font-primary-bold text-sm text-white hover:bg-[#a8521f] active:bg-[#8f441a]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="pt-4">
        <span className="font-primary-bold text-lg text-white">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
