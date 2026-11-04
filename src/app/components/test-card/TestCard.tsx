import {
  HiChevronUp,
  HiOutlineCog6Tooth,
  HiOutlineInformationCircle,
} from "react-icons/hi2";

/**
 * TestCard
 *
 * A self-contained, static reproduction of the "UI magician Agent" frame.
 * It takes no props and holds no state: the frame is a fixed dark surface, so
 * the colours below are the design's own values rather than theme roles.
 */
export const TestCard = (): JSX.Element => (
  <div id="testElem">
    <div className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] px-5 py-5 font-primary-bold">
      <div className="flex items-start justify-between">
        <h2 className="text-[13.5px] leading-4 text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <button
          type="button"
          aria-label="Open settings"
          className="text-[#b5b5b5]"
        >
          <HiOutlineCog6Tooth size={16} />
        </button>
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <HiChevronUp size={10} className="text-[#8b9291]" aria-hidden="true" />
        <span className="text-[11.5px] leading-[14px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[56px] flex items-center gap-2">
        <HiChevronUp size={12} className="text-[#b2b2b1]" aria-hidden="true" />
        <h3 className="text-[13.5px] leading-4 text-[#b2b2b1]">
          Add New Design
        </h3>
      </div>

      <div className="mt-3">
        <div className="flex items-center gap-2">
          <label
            htmlFor="test-card-token"
            className="text-[11.5px] leading-[14px] text-[#a4a4a3]"
          >
            Personal Access Token
          </label>
          <HiOutlineInformationCircle
            size={15}
            className="text-[#a4a4a3]"
            aria-hidden="true"
          />
        </div>
        <input
          id="test-card-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-3 font-primary text-[11.5px] leading-[14px] text-[#737470] placeholder:text-[#737470]"
        />
      </div>

      <div className="mt-3">
        <div className="flex items-center gap-2">
          <label
            htmlFor="test-card-design-url"
            className="text-[11.5px] leading-[14px] text-[#a3a3a2]"
          >
            Design URL
          </label>
          <HiOutlineInformationCircle
            size={15}
            className="text-[#a3a3a2]"
            aria-hidden="true"
          />
        </div>
        <input
          id="test-card-design-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mt-3 h-9 w-full border-2 border-[#929291] bg-[#272822] px-3 font-primary text-[10.5px] leading-[13px] text-[#71726e] placeholder:text-[#71726e]"
        />
      </div>

      <div className="mt-[22px] flex justify-center gap-4">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <h3 className="mt-[47px] text-[13.5px] leading-4 text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  </div>
);
