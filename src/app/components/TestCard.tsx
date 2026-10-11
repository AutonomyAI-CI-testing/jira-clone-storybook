import { HiChevronUp, HiCog, HiOutlineInformationCircle } from "react-icons/hi";

/**
 * Smoke-test panel reproduced from the "UI magician Agent" Figma frame.
 * Self-contained by design: hardcoded copy, no props, no state, no handlers.
 * Colours and sizes are the frame's own values (the repo's Tailwind palette is
 * intentionally not used here).
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col rounded-2xl bg-[#000000] px-5 py-5 font-primary"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] font-primary-bold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <HiCog aria-hidden className="h-4 w-[14px] text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <HiChevronUp aria-hidden className="h-[5px] w-2 text-[#b5b5b5]" />
      <span className="text-[11.5px] font-primary-bold leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <HiChevronUp aria-hidden className="h-2 w-3 text-[#b5b5b5]" />
      <span className="text-[13.5px] font-primary-bold leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px]">
      <div className="flex items-center gap-2">
        <label
          htmlFor="test-card-access-token"
          className="text-[11.5px] font-primary-bold leading-[13.92px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <HiOutlineInformationCircle
          aria-hidden
          className="h-[15px] w-[15px] text-[#b5b5b5]"
        />
      </div>
      <input
        id="test-card-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[10px] h-[39px] w-full rounded-[4px] border border-[#a5adad] bg-[#272822] px-5 text-[11.5px] font-primary-bold text-[#737470] placeholder:text-[#737470]"
      />
    </div>

    <div className="mt-[10px]">
      <div className="flex items-center gap-2">
        <label
          htmlFor="test-card-design-url"
          className="text-[11.5px] font-primary-bold leading-[13.92px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <HiOutlineInformationCircle
          aria-hidden
          className="h-[15px] w-[15px] text-[#b5b5b5]"
        />
      </div>
      <input
        id="test-card-design-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-[10px] h-[41px] w-full rounded-[4px] border border-[#a5adad] bg-[#272822] px-5 text-[11.5px] font-primary-bold text-[#71726e] placeholder:text-[10.5px] placeholder:text-[#71726e]"
      />
    </div>

    <div className="mt-[21px] flex gap-[17px] pl-6">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-primary-bold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-primary-bold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <span className="mt-[46px] text-[13.5px] font-primary-bold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
