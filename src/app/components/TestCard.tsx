import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 * Self-contained and prop-less: a render smoke test, not a wired screen.
 * Colours and type come from the frame itself, so they are literal values
 * rather than the app's semantic tokens.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-black px-5 pb-[62px] pt-5 font-primary"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <IoSettingsOutline
          aria-hidden="true"
          size={16}
          className="text-[#b5b5b5]"
        />
      </div>

      {/* Collapse row */}
      <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
        <IoChevronUp
          aria-hidden="true"
          className="h-[5px] w-2 text-[#8b9291]"
        />
        <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl…
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
        <IoChevronUp aria-hidden="true" className="h-2 w-3 text-[#b2b2b1]" />
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px] flex items-center gap-8">
        <label
          htmlFor="testElem-token"
          className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <IoInformationCircleOutline
          aria-hidden="true"
          size={15}
          className="text-[#a4a4a3]"
        />
      </div>
      <input
        id="testElem-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] pl-[19px] font-primary-bold text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
      />

      {/* Design URL */}
      <div className="mt-[11px] flex items-center gap-8">
        <label
          htmlFor="testElem-url"
          className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <IoInformationCircleOutline
          aria-hidden="true"
          size={15}
          className="text-[#a3a3a2]"
        />
      </div>
      <input
        id="testElem-url"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] pl-[19px] font-primary-bold text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
      />

      {/* Actions */}
      <div className="mt-[22px] flex gap-[17px] pl-6">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
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
