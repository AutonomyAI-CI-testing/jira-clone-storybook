import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test card: a self-contained reproduction of the "UI magician Agent"
 * settings panel from the attached Figma frame. No props, no state, no app
 * wiring — spacing and colour are approximate by intent.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-[1016px] w-[508px] bg-[#1c1c1c] px-[44px] pt-[44px] pb-[60px] font-primary text-[#d7d7d7]"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-[20px] leading-[1.2] text-[#d7d7d7]">
          UI magician Agent
        </h1>
        <FiSettings
          aria-hidden="true"
          className="mt-[1px] h-[24px] w-[24px] shrink-0 text-[#c9c9c9]"
        />
      </div>

      <div className="mt-[38px] flex items-center gap-[12px]">
        <FiChevronUp
          aria-hidden="true"
          className="h-[18px] w-[18px] shrink-0 text-[#b0b0b0]"
        />
        <span className="truncate text-[15px] text-[#9e9e9e]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[168px] flex items-center gap-[10px]">
        <FiChevronUp
          aria-hidden="true"
          className="h-[20px] w-[20px] shrink-0 text-[#e8e8e8]"
        />
        <h2 className="font-primary-bold text-[19px] leading-[1.2] text-[#e8e8e8]">
          Add New Design
        </h2>
      </div>

      <div className="mt-[64px]">
        <div className="flex items-center gap-[10px]">
          <label
            htmlFor="testcard-access-token"
            className="text-[15px] text-[#b9b9b9]"
          >
            Personal Access Token
          </label>
          <FiInfo
            aria-hidden="true"
            className="h-[20px] w-[20px] shrink-0 text-[#b9b9b9]"
          />
        </div>
        <input
          id="testcard-access-token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-[32px] h-[57px] w-full rounded-[4px] border border-[#5c5c5c] bg-[#2a2a2a] px-[24px] text-[15px] text-[#b9b9b9] outline-none placeholder:text-[#8a8a8a]"
        />
      </div>

      <div className="mt-[28px]">
        <div className="flex items-center gap-[10px]">
          <label htmlFor="testcard-design-url" className="text-[15px] text-[#b9b9b9]">
            Design URL
          </label>
          <FiInfo
            aria-hidden="true"
            className="h-[20px] w-[20px] shrink-0 text-[#b9b9b9]"
          />
        </div>
        <input
          id="testcard-design-url"
          placeholder="https://www.figma.com/file:"
          className="mt-[30px] h-[57px] w-full rounded-[4px] border border-[#5c5c5c] bg-[#2a2a2a] px-[24px] text-[15px] text-[#b9b9b9] outline-none placeholder:text-[#8a8a8a]"
        />
      </div>

      <div className="mt-[66px] flex gap-[34px] pl-[46px]">
        <button
          type="button"
          className="h-[67px] w-[169px] rounded-[6px] bg-[#94401f] font-primary-bold text-[17px] text-[#b3a49d]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[67px] w-[169px] rounded-[6px] bg-[#94401f] font-primary-bold text-[17px] text-[#b3a49d]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-[100px] font-primary-bold text-[19px] leading-[1.2] text-[#e8e8e8]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
