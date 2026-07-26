import { HiOutlineCog, HiChevronUp, HiOutlineInformationCircle } from "react-icons/hi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex w-[320px] flex-col gap-6 bg-[#1C1D17] px-6 py-6 font-sans text-[#C8C8C8]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-medium text-[#C8C8C8]">UI magician Agent</h1>
        <HiOutlineCog className="h-5 w-5 text-[#C8C8C8]" aria-hidden />
      </div>

      {/* Breadcrumb / context row */}
      <button type="button" className="flex items-center gap-2 text-left text-sm text-[#9A9A9A]">
        <HiChevronUp className="h-3 w-3 shrink-0" aria-hidden />
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design section */}
      <div className="flex flex-col gap-4">
        <button type="button" className="flex items-center gap-2 text-left text-base text-[#C8C8C8]">
          <HiChevronUp className="h-3 w-3 shrink-0" aria-hidden />
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-sm text-[#C8C8C8]">
            Personal Access Token
            <HiOutlineInformationCircle className="h-4 w-4 text-[#9A9A9A]" aria-hidden />
          </label>
          <input
            type="text"
            defaultValue="figd_xxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2 text-sm text-[#C8C8C8] outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-sm text-[#C8C8C8]">
            Design URL
            <HiOutlineInformationCircle className="h-4 w-4 text-[#9A9A9A]" aria-hidden />
          </label>
          <input
            type="text"
            defaultValue="https://www.figma.com/file/:"
            readOnly
            className="w-full rounded border-2 border-[#A5ADAD] bg-[#272822] px-3 py-2 text-sm text-[#C8C8C8] outline-none"
          />
        </div>

        {/* Actions */}
        <div className="mt-1 flex gap-3">
          <button
            type="button"
            className="flex-1 rounded-md bg-[#A3542C] px-4 py-2.5 text-sm font-medium text-[#C8C8C8]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded-md bg-[#A3542C] px-4 py-2.5 text-sm font-medium text-[#C8C8C8]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <h2 className="text-base font-medium text-[#C8C8C8]">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
