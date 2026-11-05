import { BsChevronUp, BsGear, BsInfoCircle } from "react-icons/bs";

/**
 * Smoke-test card reproducing a Figma frame: a dark panel with a title row, a
 * collapsible line, two labelled fields and two buttons.
 *
 * The frame's colours (a black panel with rust buttons) have no semantic role in
 * this repo's token set, so they are written as arbitrary values taken from the
 * design rather than invented token names. Self-contained on purpose: no props,
 * no state, no data.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#000000] p-5 pb-16 font-primary text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[13.5px] leading-[16.34px]">
        UI magician Agent
      </h1>
      <BsGear size={16} aria-hidden="true" />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <BsChevronUp size={10} aria-hidden="true" />
      <p className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </p>
    </div>

    <div className="mt-11 flex items-center gap-2">
      <BsChevronUp size={14} aria-hidden="true" />
      <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <label className="mt-5 block">
      <span className="flex items-center gap-2 text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
        <BsInfoCircle size={15} aria-hidden="true" />
      </span>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2 h-[36px] w-full border border-[#a5adad] bg-[#272822] px-4 text-[11.5px] text-[#b5b5b5] placeholder:text-[#737470]"
      />
    </label>

    <label className="mt-4 block">
      <span className="flex items-center gap-2 text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
        <BsInfoCircle size={15} aria-hidden="true" />
      </span>
      <input
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-2 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-4 text-[11.5px] text-[#b5b5b5] placeholder:text-[#71726e]"
      />
    </label>

    <div className="mt-6 flex items-center justify-center gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-14 font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
