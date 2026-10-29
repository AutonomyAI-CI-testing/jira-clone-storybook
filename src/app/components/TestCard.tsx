import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Static reproduction of the "UI magician Agent" panel from the Test Page Figma
 * frame. Self-contained by request: no props, no state, no interactivity.
 *
 * The frame's palette (rust buttons on a near-black surface) has no equivalent
 * among the semantic tokens declared in `tailwind.config.js`, so the colours are
 * written as arbitrary values rather than as invented tokens. Sizes are the
 * frame's own 1x measurements.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#000000] px-[20px] pb-[62px] pt-[20px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between gap-4">
      <h2>UI magician Agent</h2>
      <IoSettingsOutline aria-hidden className="shrink-0" size={16} />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] pl-[3px] text-[11.5px] leading-[13.92px] text-[#8b9291]">
      <IoChevronUpOutline aria-hidden className="shrink-0" size={9} />
      <span>From entire frame to a singl...</span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] pl-[6px] text-[#b2b2b1]">
      <IoChevronUpOutline aria-hidden className="shrink-0" size={12} />
      <h3>Add New Design</h3>
    </div>

    <p className="mt-[28px] flex items-center gap-4 text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
      <span>Personal Access Token</span>
      <IoInformationCircleOutline aria-hidden className="shrink-0" size={15} />
    </p>
    <div className="mt-[12px] flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470]">
      figd_xxxxxxxxxxxxxxxxxx
    </div>

    <p className="mt-[11px] flex items-center gap-4 text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
      <span>Design URL</span>
      <IoInformationCircleOutline aria-hidden className="shrink-0" size={15} />
    </p>
    <div className="mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] px-[20px] text-[10.5px] leading-[12.71px] text-[#71726e]">
      https://www.figma.com/file/:
    </div>

    <div className="ml-[24px] mt-[21px] flex gap-[17px] text-[11.5px] leading-[13.92px] text-[#8c8078]">
      {["Awesome", "Prepare"].map((label) => (
        <div
          key={label}
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17]"
        >
          {label}
        </div>
      ))}
    </div>

    <h3 className="mt-[48px] text-[#b0b0b0]">Recent Breakdowns</h3>
  </div>
);

export default TestCard;
