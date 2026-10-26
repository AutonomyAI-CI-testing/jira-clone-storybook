import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Static reproduction of the "UI magician Agent" frame from the reference Figma
 * design. Prop-less and self-contained on purpose: it exists to prove the path
 * from a Figma frame to a rendered component, not to be wired into the app.
 *
 * The colours are the design's own literals rather than semantic tokens — its
 * warm-dark palette has no equivalent in this repo's token set.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#1C1D17] p-5 font-primary-light"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#B5B5B5]">
        UI magician Agent
      </span>
      <IoSettingsOutline
        aria-hidden
        className="h-4 w-[14px] shrink-0 text-[#B5B5B5]"
      />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <IoChevronUpOutline
        aria-hidden
        className="h-2 w-2 shrink-0 text-[#8B9291]"
      />
      <span className="truncate font-primary-bold text-[11.5px] leading-[13.92px] text-[#8B9291]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-1">
      <IoChevronUpOutline
        aria-hidden
        className="h-2.5 w-3 shrink-0 text-[#B2B2B1]"
      />
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#B2B2B1]">
        Add New Design
      </span>
    </div>

    <div className="mt-7 flex items-center gap-2">
      <label
        htmlFor="testElem-token"
        className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#A4A4A3]"
      >
        Personal Access Token
      </label>
      <IoInformationCircleOutline
        aria-hidden
        className="h-[15px] w-[15px] shrink-0 text-[#A4A4A3]"
      />
    </div>
    <input
      id="testElem-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border-2 border-[#A5ADAD] bg-[#272822] px-4 text-[11.5px] text-[#737470] placeholder:text-[#737470]"
    />

    <div className="mt-[11px] flex items-center gap-2">
      <label
        htmlFor="testElem-url"
        className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#A3A3A2]"
      >
        Design URL
      </label>
      <IoInformationCircleOutline
        aria-hidden
        className="h-[15px] w-[15px] shrink-0 text-[#A3A3A2]"
      />
    </div>
    <input
      id="testElem-url"
      readOnly
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-4 text-[10.5px] text-[#71726E] placeholder:text-[#71726E]"
    />

    <div className="mt-[22px] flex justify-center gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843A17] font-primary-bold text-[11.5px] text-[#8C8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843A17] font-primary-bold text-[11.5px] text-[#8C8078]"
      >
        Prepare
      </button>
    </div>

    <div className="mt-12 font-primary-bold text-[13.5px] leading-[16.34px] text-[#B0B0B0]">
      Recent Breakdowns
    </div>
  </div>
);
