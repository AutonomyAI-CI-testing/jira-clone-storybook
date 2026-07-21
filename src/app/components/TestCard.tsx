import { RiSettings3Line, RiArrowUpSLine, RiInformationLine } from "react-icons/ri";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-[360px]">
      <div className="flex flex-col gap-4 rounded-lg bg-[#2a2a2a] p-5">
        {/* Header row */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-white">UI magician Agent</span>
          <RiSettings3Line className="text-xl text-gray-400" />
        </div>

        {/* Collapsed row */}
        <div className="flex items-center gap-2">
          <RiArrowUpSLine className="shrink-0 text-base text-[#b5703e]" />
          <span className="truncate text-sm text-[#b5703e]">
            From entire frame to a singl...
          </span>
        </div>

        {/* Spacer */}
        <div className="h-4" />

        {/* Section header */}
        <div className="flex items-center gap-2">
          <RiArrowUpSLine className="shrink-0 text-xl text-white" />
          <span className="text-xl font-bold text-white">Add New Design</span>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-3">
          {/* Personal Access Token */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <label className="text-sm text-white">Personal Access Token</label>
              <RiInformationLine className="text-base text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full rounded border border-[#444444] bg-[#1e1e1e] px-3 py-2 text-sm text-gray-300 placeholder:text-gray-500 outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <label className="text-sm text-white">Design URL</label>
              <RiInformationLine className="text-base text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="https://www.figma.com/file/:"
              className="w-full rounded border border-[#555555] bg-[#1e1e1e] px-3 py-2 text-sm text-gray-300 placeholder:text-gray-500 outline-none"
            />
          </div>
        </div>

        {/* Button row */}
        <div className="flex gap-3">
          <button
            className="flex-1 rounded-lg bg-[#c1622f] py-3 text-sm font-semibold text-white hover:bg-[#a8522a] active:bg-[#8f4425]"
          >
            Awesome
          </button>
          <button
            className="flex-1 rounded-lg bg-[#c1622f] py-3 text-sm font-semibold text-white hover:bg-[#a8522a] active:bg-[#8f4425]"
          >
            Prepare
          </button>
        </div>

        {/* Footer */}
        <div className="mt-2">
          <span className="text-xl font-bold text-white">Recent Breakdowns</span>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
