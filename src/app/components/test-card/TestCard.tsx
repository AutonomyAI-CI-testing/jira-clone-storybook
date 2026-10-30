import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Static reproduction of the attached Figma frame (a 254x508 panel).
 *
 * Smoke test only: no props, no state, no interactivity. The design's own
 * hexes are used through Tailwind arbitrary values because its near-black /
 * grey / rust palette has no counterpart in the app's semantic token map.
 */
export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-black px-5 pt-5 pb-[62px] font-primary text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-sm">UI magician Agent</span>
        <IoSettingsOutline aria-hidden="true" className="h-4 w-4" />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <IoChevronUpOutline
          aria-hidden="true"
          className="h-2.5 w-2.5 shrink-0 text-[#8b9291]"
        />
        <span className="truncate text-2xs text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-20 flex items-center gap-3">
        <IoChevronUpOutline
          aria-hidden="true"
          className="h-3 w-3 shrink-0 text-[#b2b2b1]"
        />
        <span className="font-primary-bold text-sm text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <label
          htmlFor="test-card-personal-access-token"
          className="text-2xs text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <IoInformationCircleOutline
          aria-hidden="true"
          className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]"
        />
      </div>
      <input
        id="test-card-personal-access-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] pl-[19px] text-2xs text-[#a4a4a3] placeholder:text-[#737470]"
      />

      <div className="mt-2 flex items-center gap-3">
        <label htmlFor="test-card-design-url" className="text-2xs text-[#a3a3a2]">
          Design URL
        </label>
        <IoInformationCircleOutline
          aria-hidden="true"
          className="h-[15px] w-[15px] shrink-0 text-[#a3a3a2]"
        />
      </div>
      <input
        id="test-card-design-url"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] pl-[19px] text-2xs text-[#a3a3a2] placeholder:text-[#71726e]"
      />

      <div className="mt-5 flex justify-end gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-2xs text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-2xs text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-12 font-primary-bold text-sm text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
}
