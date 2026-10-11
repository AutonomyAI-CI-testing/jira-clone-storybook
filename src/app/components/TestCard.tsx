import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 * Smoke-test component: no props, no state, no data.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-black px-5 py-5 font-primary text-[#b5b5b5]"
    >
      {/* Title row */}
      <div className="flex items-center justify-between">
        <h2 className="text-[13.5px] font-semibold">UI magician Agent</h2>
        <IoSettingsOutline
          className="text-[16px] text-[#b5b5b5]"
          aria-hidden="true"
        />
      </div>

      {/* Collapsible row */}
      <div className="mt-3 flex items-center gap-2">
        <IoChevronUpOutline
          className="shrink-0 text-[10px] text-[#8b9291]"
          aria-hidden="true"
        />
        <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-20 flex items-center gap-2">
        <IoChevronUpOutline
          className="text-[14px] text-[#b2b2b1]"
          aria-hidden="true"
        />
        <h3 className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token */}
      <label className="mt-10 block">
        <span className="flex items-center gap-1 text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
          <IoInformationCircleOutline
            className="text-[15px]"
            aria-hidden="true"
          />
        </span>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-[37px] w-full border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
        />
      </label>

      {/* Design URL */}
      <label className="mt-4 block">
        <span className="flex items-center gap-1 text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
          <IoInformationCircleOutline
            className="text-[15px]"
            aria-hidden="true"
          />
        </span>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
        />
      </label>

      {/* Actions */}
      <div className="mt-10 flex gap-4">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="mt-16 text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};

export default TestCard;
