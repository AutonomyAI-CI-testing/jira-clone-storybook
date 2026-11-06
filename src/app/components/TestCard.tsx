import { BsChevronUp } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 *
 * Self-contained smoke test: takes no props, holds no state and wires up no
 * handlers. Colours are the design's own values, written as Tailwind arbitrary
 * values — `theme.colors` is a full override here, so a stock palette class
 * (`bg-gray-800`) compiles to nothing, and no semantic role in `app.css`
 * describes this dark rust-on-charcoal panel.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#242424] px-5 pb-5 pt-5 font-primary text-[#b0b0b0]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <MdOutlineSettings
          size={16}
          className="text-[#b5b5b5]"
          aria-hidden="true"
        />
      </div>

      {/* Collapsed summary */}
      <div className="mt-[18px] flex items-center gap-3">
        <BsChevronUp
          size={10}
          className="shrink-0 text-[#8b9291]"
          aria-hidden="true"
        />
        <span className="truncate font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-20 flex items-center gap-3">
        <BsChevronUp
          size={14}
          className="shrink-0 text-[#b2b2b1]"
          aria-hidden="true"
        />
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[22px] flex items-center gap-2">
        <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <HiOutlineInformationCircle
          size={15}
          className="shrink-0 text-[#a4a4a3]"
          aria-hidden="true"
        />
      </div>
      <input
        type="text"
        readOnly
        defaultValue="figd_xxxxxxxxxxxxxxxxxxxxxx"
        aria-label="Personal Access Token"
        className="mt-2.5 h-[39px] w-full rounded-[4px] border border-[#a5adad] bg-[#272822] px-3 font-primary-bold text-[11.5px] leading-[13.92px] text-[#737470]"
      />

      {/* Design URL */}
      <div className="mt-3 flex items-center gap-2">
        <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <HiOutlineInformationCircle
          size={15}
          className="shrink-0 text-[#a3a3a2]"
          aria-hidden="true"
        />
      </div>
      <input
        type="text"
        readOnly
        defaultValue="https://www.figma.com/file/:"
        aria-label="Design URL"
        className="mt-3 h-[41px] w-full rounded-[4px] border-2 border-[#929291] bg-[#272822] px-3 font-primary-bold text-[10.5px] leading-[12.71px] text-[#71726e]"
      />

      {/* Actions */}
      <div className="mt-[18px] flex justify-center gap-4">
        <button
          type="button"
          className="h-[40px] w-[87px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[40px] w-[87px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-[46px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

export default TestCard;
