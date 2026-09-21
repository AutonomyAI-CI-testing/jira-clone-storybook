import { IoSettingsOutline, IoInformationCircleOutline } from "react-icons/io5";
import { HiChevronUp } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[320px] rounded-md bg-[#161616] p-5 font-primary text-font-inverse"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-sm text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <IoSettingsOutline size={18} className="text-[#b5b5b5]" />
      </div>

      {/* Collapsible row 1 */}
      <div className="mt-4 flex items-center gap-2">
        <HiChevronUp size={14} className="text-[#8b9291]" />
        <span className="truncate text-xs text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-8">
        <div className="flex items-center gap-2">
          <HiChevronUp size={16} className="text-[#b2b2b1]" />
          <h3 className="text-sm font-primary-bold text-[#b2b2b1]">
            Add New Design
          </h3>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-1.5">
            <label className="text-xs font-primary-bold text-[#a4a4a3]">
              Personal Access Token
            </label>
            <IoInformationCircleOutline size={13} className="text-[#a4a4a3]" />
          </div>
          <input
            type="text"
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="mt-1.5 h-10 w-full rounded border border-[#929291] bg-[#272822] px-3 text-xs text-[#737470] outline-none placeholder:text-[#737470]"
          />
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-1.5">
            <label className="text-xs font-primary-bold text-[#a3a3a2]">
              Design URL
            </label>
            <IoInformationCircleOutline size={13} className="text-[#a3a3a2]" />
          </div>
          <input
            type="text"
            readOnly
            placeholder="https://www.figma.com/file/:"
            className="mt-1.5 h-10 w-full rounded border border-[#a5adad] bg-[#272822] px-3 text-xs text-[#71726e] outline-none placeholder:text-[#71726e]"
          />
        </div>

        <div className="mt-4 flex gap-3">
          <button
            type="button"
            className="h-10 flex-1 rounded bg-[#843a17] text-xs font-primary-bold text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="h-10 flex-1 rounded bg-[#843a17] text-xs font-primary-bold text-[#8c8078]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Footer section header */}
      <h3 className="mt-8 text-sm font-primary-bold text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};
