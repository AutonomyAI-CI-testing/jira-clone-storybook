import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Static reproduction of the "UI magician Agent" settings panel from the
 * referenced Figma frame (254x508, dark). Self-contained: no props, no state,
 * no data. Colours are the frame's own hexes as Tailwind arbitrary values,
 * because the frame's palette has no semantic role in this repo's token set.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-[#1C1D17] text-[#b5b5b5]"
    >
      <div className="h-[9px] w-full bg-[#161613]" />

      <div className="flex flex-col px-5 pb-[62px] pt-[11px]">
        <div className="flex items-center justify-between">
          <span className="font-primary-bold text-[13.5px] leading-[16.34px]">
            UI magician Agent
          </span>
          <IoSettingsOutline
            size={16}
            aria-hidden="true"
            className="text-[#b5b5b5]"
          />
        </div>

        <div className="mt-[18px] flex items-center gap-[9px]">
          <IoChevronUp
            size={10}
            aria-hidden="true"
            className="text-[#8b9291]"
          />
          <span className="font-primary text-[11.5px] leading-[13.92px] text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </div>

        <div className="mt-[77px] flex items-center gap-[5px]">
          <IoChevronUp
            size={14}
            aria-hidden="true"
            className="text-[#b2b2b1]"
          />
          <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        <div className="mt-[28px] flex items-center gap-3">
          <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <IoInformationCircleOutline
            size={15}
            aria-hidden="true"
            className="text-[#a4a4a3]"
          />
        </div>

        <div className="mt-3 flex h-[36px] w-full items-center border border-[#a5adad] bg-[#272822] px-[19px]">
          <span className="font-primary text-[11.5px] leading-[13.92px] text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        <div className="mt-[11px] flex items-center gap-3">
          <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
            Design URL
          </span>
          <IoInformationCircleOutline
            size={15}
            aria-hidden="true"
            className="text-[#a3a3a2]"
          />
        </div>

        <div className="mt-[11px] flex h-[37px] w-full items-center border-2 border-[#929291] bg-[#272822] px-5">
          <span className="font-primary text-[10.5px] leading-[12.71px] text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>

        <div className="mt-[22px] flex gap-[17px] pl-6">
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
          >
            Prepare
          </button>
        </div>

        <span className="mt-[46px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
