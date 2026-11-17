import {
  IoSettingsOutline,
  IoChevronUpOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";

/**
 * Smoke-test component: a static reproduction of the attached Figma panel.
 * Self-contained, no props, no state. Not wired into the app.
 */
export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[254px] bg-black pb-16 font-primary">
    {/* Top band */}
    <div className="h-[9px] w-full" />

    {/* Title row */}
    <div className="flex items-center justify-between px-5 pt-3">
      <h1 className="text-xs font-primary-bold text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Agent settings"
        className="text-[#b5b5b5]"
      >
        <IoSettingsOutline size={16} />
      </button>
    </div>

    {/* Collapsed section line */}
    <div className="mt-5 flex items-center gap-2 pl-[23px]">
      <IoChevronUpOutline size={10} className="text-[#8b9291]" aria-hidden="true" />
      <p className="text-2xs font-primary-bold text-[#8b9291]">
        From entire frame to a singl...
      </p>
    </div>

    {/* Add New Design */}
    <div className="mt-16 flex items-center gap-2 pl-[26px]">
      <IoChevronUpOutline size={13} className="text-[#b2b2b1]" aria-hidden="true" />
      <h2 className="text-xs font-primary-bold text-[#b2b2b1]">Add New Design</h2>
    </div>

    {/* Personal Access Token */}
    <div className="mt-7 flex items-center gap-3 pl-5">
      <label
        htmlFor="testElem-token"
        className="text-2xs font-primary-bold text-[#a4a4a3]"
      >
        Personal Access Token
      </label>
      <IoInformationCircleOutline
        size={15}
        className="text-[#a4a4a3]"
        aria-hidden="true"
      />
    </div>
    <input
      id="testElem-token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="ml-5 mt-3 w-[211px] border border-[#a5adad] bg-[#272822] px-[19px] py-[11px] text-2xs font-primary-bold text-[#737470] placeholder:text-[#737470]"
    />

    {/* Design URL */}
    <div className="mt-3 flex items-center gap-3 pl-5">
      <label
        htmlFor="testElem-url"
        className="text-2xs font-primary-bold text-[#a3a3a2]"
      >
        Design URL
      </label>
      <IoInformationCircleOutline
        size={15}
        className="text-[#a3a3a2]"
        aria-hidden="true"
      />
    </div>
    <input
      id="testElem-url"
      placeholder="https://www.figma.com/file/:"
      className="ml-5 mt-3 w-[211px] border-2 border-[#929291] bg-[#272822] px-[19px] py-[11px] text-2xs font-primary-bold text-[#71726e] placeholder:text-[#71726e]"
    />

    {/* Actions */}
    <div className="mt-5 flex gap-4 pl-11">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-2xs font-primary-bold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-2xs font-primary-bold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-12 pl-5 text-xs font-primary-bold text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
