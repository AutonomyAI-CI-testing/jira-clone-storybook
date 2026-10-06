import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[380px] rounded-md bg-[#1b1b1b] p-5 font-primary text-[#d5d5d5]"
  >
    {/* Title row */}
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-lg">UI magician Agent</h1>
      <FiSettings className="h-5 w-5 text-[#d5d5d5]" />
    </div>

    {/* Collapsed summary row */}
    <div className="mt-4 flex items-center gap-2 text-[#9e9e9e]">
      <FiChevronUp className="h-4 w-4 shrink-0" />
      <span className="truncate text-sm">From entire frame to a singl...</span>
    </div>

    {/* Large vertical gap seen in the frame */}
    <div className="h-32" />

    {/* Section header */}
    <div className="flex items-center gap-2">
      <FiChevronUp className="h-5 w-5 shrink-0" />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    {/* Field: Personal Access Token */}
    <div className="mt-8">
      <div className="flex items-center gap-2">
        <label className="text-sm text-[#9e9e9e]">Personal Access Token</label>
        <FiInfo className="h-4 w-4 shrink-0 text-[#9e9e9e]" />
      </div>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="mt-2 w-full rounded-sm border border-[#4a4a4a] bg-[#232323] px-3 py-3 text-sm text-[#d5d5d5] placeholder:text-[#8a8a8a] focus:outline-none"
      />
    </div>

    {/* Field: Design URL */}
    <div className="mt-6">
      <div className="flex items-center gap-2">
        <label className="text-sm text-[#9e9e9e]">Design URL</label>
        <FiInfo className="h-4 w-4 shrink-0 text-[#9e9e9e]" />
      </div>
      <input
        readOnly
        placeholder="https://www.figma.com/file/"
        className="mt-2 w-full rounded-sm border border-[#4a4a4a] bg-[#232323] px-3 py-3 text-sm text-[#d5d5d5] placeholder:text-[#8a8a8a] focus:outline-none"
      />
    </div>

    {/* Actions */}
    <div className="mt-8 flex gap-4">
      <button
        type="button"
        className="flex-1 rounded-md bg-[#8f4520] px-6 py-3 text-sm text-[#d5d5d5]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex-1 rounded-md bg-[#8f4520] px-6 py-3 text-sm text-[#d5d5d5]"
      >
        Prepare
      </button>
    </div>

    {/* Footer heading */}
    <h2 className="mt-16 font-primary-bold text-lg">Recent Breakdowns</h2>
  </div>
);
