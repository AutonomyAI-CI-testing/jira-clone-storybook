import { IoSettingsOutline, IoChevronUp, IoInformationCircleOutline } from "react-icons/io5";

export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      className="w-full max-w-sm rounded-lg bg-[#1a1a1a] p-5 space-y-4"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-white font-bold text-lg">UI magician Agent</span>
        <IoSettingsOutline className="text-[#9ca3af] text-xl" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        <IoChevronUp className="text-[#b45309] text-sm" />
        <span className="text-[#b45309] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Section heading */}
      <div className="flex items-center gap-2 mt-4">
        <IoChevronUp className="text-white text-xl" />
        <span className="text-white font-bold text-xl">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <span className="text-[#9ca3af] text-sm">Personal Access Token</span>
          <IoInformationCircleOutline className="text-[#9ca3af] text-base" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded bg-[#2a2a2a] border border-[#3a3a3a] p-2 text-sm text-[#9ca3af] placeholder:text-[#6b7280] outline-none"
          readOnly
        />
      </div>

      {/* Design URL field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <span className="text-[#9ca3af] text-sm">Design URL</span>
          <IoInformationCircleOutline className="text-[#9ca3af] text-base" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded bg-[#2a2a2a] border border-[#3a3a3a] p-2 text-sm text-[#9ca3af] placeholder:text-[#6b7280] outline-none"
          readOnly
        />
      </div>

      {/* Button row */}
      <div className="flex gap-3 mt-2">
        <button className="flex-1 rounded-lg bg-[#b45309] px-6 py-3 text-white font-semibold">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b45309] px-6 py-3 text-white font-semibold">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div className="mt-4">
        <span className="text-white font-bold text-lg">Recent Breakdowns</span>
      </div>
    </div>
  );
}
