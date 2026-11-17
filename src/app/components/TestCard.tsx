import { IoChevronUp, IoInformationCircleOutline, IoSettingsOutline } from "react-icons/io5";

/**
 * TestCard — a self-contained approximation of an attached Figma frame (a dark
 * "UI magician Agent" settings panel). Smoke test only: no props, no state, no data.
 */
export const TestCard = () => (
  <div id="testElem" className="min-h-[508px] w-[254px] bg-black px-5 pt-5 pb-16 font-primary">
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-primary-bold text-[#b5b5b5]">UI magician Agent</span>
      <IoSettingsOutline size={16} className="text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <IoChevronUp size={10} className="text-[#8b9291]" />
      <span className="min-w-0 truncate text-[11.5px] text-[#8b9291]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[70px] flex items-center gap-2">
      <IoChevronUp size={12} className="text-[#b2b2b1]" />
      <span className="text-[13.5px] font-primary-bold text-[#b2b2b1]">Add New Design</span>
    </div>

    <div className="mt-[28px] flex items-center justify-between">
      <label htmlFor="test-card-token" className="text-[11.5px] text-[#a4a4a3]">
        Personal Access Token
      </label>
      <IoInformationCircleOutline size={15} className="text-[#a4a4a3]" />
    </div>
    <input
      id="test-card-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] text-[#737470] placeholder:text-[#737470]"
    />

    <div className="mt-3 flex items-center gap-2">
      <label htmlFor="test-card-url" className="text-[11.5px] text-[#a3a3a2]">
        Design URL
      </label>
      <IoInformationCircleOutline size={15} className="text-[#a3a3a2]" />
    </div>
    <input
      id="test-card-url"
      type="text"
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] ml-6 flex gap-[17px]">
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

    <p className="mt-12 text-[13.5px] font-primary-bold text-[#b0b0b0]">Recent Breakdowns</p>
  </div>
);

export default TestCard;
