import { IoSettingsOutline, IoChevronUp, IoInformationCircleOutline } from "react-icons/io5";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="min-h-screen w-full bg-[#1a1a1a] px-6 py-5 text-[#e8e8e8]">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-medium tracking-tight text-[#d4d4d4]">UI Magician Agent</h1>
        <button type="button" aria-label="Settings" className="text-[#9a9a9a]">
          <IoSettingsOutline className="h-5 w-5" />
        </button>
      </div>

      {/* Collapsed tip */}
      <button type="button" className="mb-8 flex items-center gap-2 text-sm text-[#b0b0b0]">
        <IoChevronUp className="h-3.5 w-3.5 shrink-0" />
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design */}
      <div className="mb-6">
        <button type="button" className="mb-5 flex items-center gap-2 text-base font-medium text-[#c8c8c8]">
          <IoChevronUp className="h-3.5 w-3.5 shrink-0" />
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm text-[#c4c4c4]">Personal Access Token</label>
            <IoInformationCircleOutline className="h-4 w-4 text-[#8a8a8a]" aria-hidden />
          </div>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#6a6a6a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#a0a0a0] outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm text-[#c4c4c4]">Design URL</label>
            <IoInformationCircleOutline className="h-4 w-4 text-[#8a8a8a]" aria-hidden />
          </div>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded border border-[#8a8a8a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#a0a0a0] outline-none"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            className="rounded-md bg-[#a85a2a] px-8 py-2.5 text-sm font-medium text-[#d4b8a0]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-md bg-[#a85a2a] px-8 py-2.5 text-sm font-medium text-[#d4b8a0]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <h2 className="text-base font-medium text-[#c8c8c8]">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
