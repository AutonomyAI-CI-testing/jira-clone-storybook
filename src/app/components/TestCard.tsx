import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";

/**
 * Static reproduction of the "UI magician Agent" Figma panel (frame 254x508).
 *
 * Self-contained by design: no props, no data, no imports from the app beyond the icon set.
 * Colours are the frame's own values as arbitrary utilities — the panel is a fixed-look
 * reproduction of an external design, so it deliberately does not follow the app's theme tokens.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1a1a1a] pb-[62px] font-primary text-[11.5px] leading-[13.92px]"
    >
      <div className="h-[9px] w-full bg-[#0d0d0d]" />

      <div className="px-[20px] pt-[11px]">
        <div className="flex items-center justify-between">
          <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
            UI magician Agent
          </span>
          <button
            type="button"
            aria-label="Settings"
            className="flex items-center justify-center text-[#b5b5b5]"
          >
            <MdSettings size={16} />
          </button>
        </div>

        <div className="mt-[18px] flex items-center gap-[9px] pl-[3px] text-[#8b9291]">
          <MdKeyboardArrowUp
            size={10}
            className="shrink-0"
            aria-hidden="true"
          />
          <span className="truncate">From entire frame to a singl...</span>
        </div>

        <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
          <MdKeyboardArrowUp
            size={14}
            className="shrink-0 text-[#b2b2b1]"
            aria-hidden="true"
          />
          <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        <div className="mt-[27px] flex items-center gap-[22px]">
          <label htmlFor="test-card-access-token" className="text-[#a4a4a3]">
            Personal Access Token
          </label>
          <MdInfoOutline
            size={15}
            className="shrink-0 text-[#a4a4a3]"
            aria-hidden="true"
          />
        </div>
        <input
          id="test-card-access-token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-[12px] h-[36px] w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] text-[#737470] placeholder:text-[#737470]"
        />

        <div className="mt-[11px] flex items-center gap-[15px]">
          <label htmlFor="test-card-design-url" className="text-[#a3a3a2]">
            Design URL
          </label>
          <MdInfoOutline
            size={15}
            className="shrink-0 text-[#a3a3a2]"
            aria-hidden="true"
          />
        </div>
        <input
          id="test-card-design-url"
          placeholder="https://www.figma.com/file/"
          className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[19px] text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
        />

        <div className="mt-[23px] flex gap-[17px] pl-[24px]">
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
          >
            Prepare
          </button>
        </div>

        <p className="mt-[46px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
          Recent Breakdowns
        </p>
      </div>
    </div>
  );
};

export default TestCard;
