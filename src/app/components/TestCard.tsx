import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Smoke-test component: reproduces the "UI magician Agent" panel from the
 * attached Figma frame (254x508). Self-contained, takes no props.
 *
 * Colours and sizes are written as Tailwind arbitrary values because the
 * frame's palette has no counterpart in this repo's semantic tokens.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-[#1C1D17] font-primary-bold text-[#b5b5b5]"
    >
      {/* Top strip */}
      <div className="h-[9px] w-full bg-[#161613]" />

      {/* Header */}
      <div className="mt-[11px] flex items-start justify-between px-[20px]">
        <span className="text-[13.5px] leading-[16.34px]">
          UI magician Agent
        </span>
        <IoSettingsOutline
          size={16}
          className="text-[#b5b5b5]"
          aria-hidden="true"
        />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-[18px] flex items-center gap-[9px] pl-[23px]">
        <IoChevronUpOutline
          size={10}
          className="shrink-0 text-[#8b9291]"
          aria-hidden="true"
        />
        <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section heading */}
      <div className="mt-[77px] flex items-center gap-[5px] pl-[26px]">
        <IoChevronUpOutline
          size={14}
          className="shrink-0 text-[#b2b2b1]"
          aria-hidden="true"
        />
        <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px] flex items-center gap-[10px] px-[20px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <IoInformationCircleOutline
          size={15}
          className="shrink-0 text-[#a4a4a3]"
          aria-hidden="true"
        />
      </div>

      <div className="mx-[18px] mt-[10px] flex h-[39px] items-center border border-[#a5adad] bg-[#272822] pl-[21px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL */}
      <div className="mt-[10px] flex items-center gap-[10px] px-[20px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <IoInformationCircleOutline
          size={15}
          className="shrink-0 text-[#a3a3a2]"
          aria-hidden="true"
        />
      </div>

      <div className="mx-[18px] mt-[9px] flex h-[41px] items-center border-2 border-[#929291] bg-[#272822] pl-[22px]">
        <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Actions */}
      <div className="mt-[18px] flex gap-[15px] pl-[43px]">
        <div className="flex h-[40px] w-[87px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]">
          Awesome
        </div>
        <div className="flex h-[40px] w-[87px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]">
          Prepare
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-[46px] px-[20px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};

export default TestCard;
