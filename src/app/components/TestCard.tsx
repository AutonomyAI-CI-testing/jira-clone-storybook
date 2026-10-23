import { RiArrowUpSLine, RiInformationLine, RiSettings3Line } from "react-icons/ri";

/**
 * Standalone reproduction of the "UI magician Agent" panel from the attached
 * Figma design. Self-contained: no props, no state, no repo imports beyond
 * icons.
 *
 * The colours are literal Tailwind values on purpose. The design is a fixed
 * dark panel, while this app's semantic tokens (`bg-elevation-*`, `text-font-*`)
 * resolve to whichever theme is active — light by default — so a token-based
 * build would render a light panel that does not resemble the design.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1e1e1e] px-[30px] pb-[64px] pt-[26px] text-[#e3e3e3]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl leading-7">UI magician Agent</h1>
      <RiSettings3Line size={26} aria-hidden className="shrink-0" />
    </div>

    {/* Collapsed summary */}
    <div className="mt-[52px] flex items-center gap-3 text-[#9e9e9e]">
      <RiArrowUpSLine size={22} aria-hidden className="shrink-0" />
      <span className="truncate font-primary text-[15px] leading-5">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-[150px] flex items-center gap-3">
      <RiArrowUpSLine size={22} aria-hidden className="shrink-0" />
      <h2 className="font-primary-bold text-[18px] leading-6">Add New Design</h2>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[46px]">
      <div className="flex items-center gap-2">
        <span className="font-primary text-[15px] leading-5">
          Personal Access Token
        </span>
        <RiInformationLine size={19} aria-hidden className="shrink-0" />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxx"
        className="mt-[18px] h-[62px] w-full rounded-sm border border-[#8a8a8a] bg-[#2c2c2c] px-[22px] font-primary text-[16px] text-[#e3e3e3] placeholder:text-[#9e9e9e]"
      />
    </div>

    {/* Design URL */}
    <div className="mt-[28px]">
      <div className="flex items-center gap-2">
        <span className="font-primary text-[15px] leading-5">Design URL</span>
        <RiInformationLine size={19} aria-hidden className="shrink-0" />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className="mt-[18px] h-[62px] w-full rounded-sm border border-[#8a8a8a] bg-[#2c2c2c] px-[22px] font-primary text-[16px] text-[#e3e3e3] placeholder:text-[#9e9e9e]"
      />
    </div>

    {/* Actions */}
    <div className="mt-[50px] flex items-center justify-center gap-[38px]">
      <button
        type="button"
        className="h-[62px] w-[158px] rounded-md bg-[#8f3d1e] font-primary text-[18px] text-[#c9c9c9]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[62px] w-[170px] rounded-md bg-[#8f3d1e] font-primary text-[18px] text-[#c9c9c9]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-[110px] font-primary-bold text-[18px] leading-6">
      Recent Breakdowns
    </h2>
  </div>
);
