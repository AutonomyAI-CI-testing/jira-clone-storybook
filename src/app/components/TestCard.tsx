import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export function TestCard(): JSX.Element {
  return (
    <div id="testElem" className="w-[254px] bg-black p-5 font-primary">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings
          className="h-4 w-4 shrink-0 text-[#b5b5b5]"
          aria-hidden="true"
        />
      </div>

      {/* Collapsed row */}
      <div className="mt-4 flex min-w-0 items-center gap-2">
        <FiChevronUp
          className="h-3 w-3 shrink-0 text-[#8b9291]"
          aria-hidden="true"
        />
        <span className="truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-12 flex items-center gap-2">
        <FiChevronUp
          className="h-4 w-4 shrink-0 text-[#b2b2b1]"
          aria-hidden="true"
        />
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <label className="mt-5 block">
        <span className="flex items-center gap-2">
          <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <FiInfo
            className="h-4 w-4 shrink-0 text-[#a4a4a3]"
            aria-hidden="true"
          />
        </span>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-2 w-full border border-[#a5adad] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
        />
      </label>

      {/* Design URL */}
      <label className="mt-3 block">
        <span className="flex items-center gap-2">
          <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]">
            Design URL
          </span>
          <FiInfo
            className="h-4 w-4 shrink-0 text-[#a3a3a2]"
            aria-hidden="true"
          />
        </span>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="mt-2 w-full border-2 border-[#929291] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold leading-[13.92px] text-[#71726e] placeholder:text-[#71726e]"
        />
      </label>

      {/* Buttons */}
      <div className="mt-5 flex justify-center gap-3">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-14 text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
}

export default TestCard;
