import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const buttonClass =
  "h-[62px] w-[150px] rounded-md border-none bg-[#b04a12] text-[18px] text-[#c4c4c4]";

const inputClass =
  "mt-4 h-[60px] w-full rounded border border-[#565656] bg-[#1f1f1f] px-6 text-[18px] text-[#8a8a8a] placeholder:text-[#8a8a8a]";

const labelClass = "flex items-center gap-4 text-[18px] text-[#a8a8a8]";

/**
 * Static reproduction of the "UI magician Agent" panel from the attached Figma
 * frame. Self-contained by design: no props, no state, no behaviour.
 *
 * The panel paints its own fixed dark ground, so it reads the same on any
 * backdrop and deliberately does not join the app's five themes.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1a1a1a] px-10 pt-10 pb-12 font-primary text-[#e8e8e8]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-[20px] leading-none">
          UI magician Agent
        </h1>
        <HiOutlineCog size={26} className="text-[#c9c9c9]" />
      </div>

      {/* Collapsed summary */}
      <div className="mt-6 flex items-center gap-3">
        <HiChevronUp size={20} className="shrink-0 text-[#c9c9c9]" />
        <p className="truncate text-[16px] text-[#a0a0a0]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design */}
      <div className="mt-36 flex items-center gap-3">
        <HiChevronUp size={28} className="shrink-0 text-[#c9c9c9]" />
        <h2 className="font-primary-bold text-[26px] leading-none text-[#d5d5d5]">
          Add New Design
        </h2>
      </div>

      <div className="mt-10">
        <label htmlFor="test-card-token" className={labelClass}>
          Personal Access Token
          <HiOutlineInformationCircle size={22} className="text-[#c9c9c9]" />
        </label>
        <input
          id="test-card-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
          className={inputClass}
        />

        <label htmlFor="test-card-url" className={`${labelClass} mt-6`}>
          Design URL
          <HiOutlineInformationCircle size={22} className="text-[#c9c9c9]" />
        </label>
        <input
          id="test-card-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={inputClass}
        />

        <div className="mt-12 flex justify-end gap-10">
          <button type="button" className={buttonClass}>
            Awesome
          </button>
          <button type="button" className={buttonClass}>
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-24 font-primary-bold text-[26px] leading-none text-[#d5d5d5]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

export default TestCard;
