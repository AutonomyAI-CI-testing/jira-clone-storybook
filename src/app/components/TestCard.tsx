import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Static reproduction of the "UI magician Agent" panel from the Figma frame.
 *
 * Smoke-test component: takes no props, holds no state and does nothing on
 * interaction. Sizes, colours and type come from the frame's extracted style
 * guide; the panel's palette is deliberately written as literal values because
 * no semantic token in the design system matches it.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[#000000] px-5 font-primary"
  >
    <div className="mt-5 flex items-center justify-between">
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <IoSettingsOutline
        size={16}
        className="shrink-0 text-[#b5b5b5]"
        aria-hidden
      />
    </div>

    <div className="mt-[18px] flex w-full items-center gap-2">
      <IoChevronUp
        size={12}
        className="shrink-0 text-[#8b9291]"
        aria-hidden
      />
      <span className="truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <IoChevronUp
        size={14}
        className="shrink-0 text-[#b2b2b1]"
        aria-hidden
      />
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <label
      htmlFor="testElem-access-token"
      className="mt-7 flex items-center gap-2 text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]"
    >
      Personal Access Token
      <IoInformationCircleOutline size={15} className="shrink-0" aria-hidden />
    </label>
    <input
      id="testElem-access-token"
      type="text"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-[211px] border border-[#a5adad] bg-[#272822] pl-[19px] text-[11.5px] font-semibold leading-[13.92px] text-[#e0e0e0] placeholder:text-[#737470]"
    />

    <label
      htmlFor="testElem-design-url"
      className="mt-[11px] flex items-center gap-2 text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]"
    >
      Design URL
      <IoInformationCircleOutline size={15} className="shrink-0" aria-hidden />
    </label>
    <input
      id="testElem-design-url"
      type="text"
      readOnly
      placeholder="https://www.figma.com/file/"
      className="mt-[11px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] pl-[19px] text-[10.5px] font-semibold leading-[12.71px] text-[#e0e0e0] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex justify-center gap-[17px]">
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

    <h2 className="mt-[46px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
