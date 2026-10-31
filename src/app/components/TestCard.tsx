import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const inputClassName =
  "mt-4 h-[52px] w-full rounded border border-[#8A8A8A] bg-[#262626] px-6 text-[17px] text-[#EDEDED] placeholder:text-[#8A8A8A]";

const buttonClassName =
  "h-[54px] w-[168px] rounded-md bg-[#A34A26] text-[18px] text-[#EDEDED]";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1A1A1A] px-10 pb-12 pt-10 font-primary text-[#EDEDED]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-black text-[22px]">UI magician Agent</span>
      <IoSettingsOutline
        size={26}
        className="text-[#8A8A8A]"
        aria-hidden="true"
      />
    </div>

    <div className="mt-6 flex items-center gap-3 text-[17px] text-[#8A8A8A]">
      <IoChevronUpOutline size={18} aria-hidden="true" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-[150px] flex items-center gap-3">
      <IoChevronUpOutline size={24} aria-hidden="true" />
      <span className="font-primary-black text-[24px]">Add New Design</span>
    </div>

    <div className="mt-10">
      <label
        htmlFor="personal-access-token"
        className="flex items-center gap-3 text-[18px] text-[#C9C9C9]"
      >
        Personal Access Token
        <IoInformationCircleOutline size={24} aria-hidden="true" />
      </label>
      <input
        id="personal-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        className={inputClassName}
      />
    </div>

    <div className="mt-8">
      <label
        htmlFor="design-url"
        className="flex items-center gap-3 text-[18px] text-[#C9C9C9]"
      >
        Design URL
        <IoInformationCircleOutline size={24} aria-hidden="true" />
      </label>
      <input
        id="design-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className={inputClassName}
      />
    </div>

    <div className="mt-16 flex gap-10">
      <button type="button" className={buttonClassName}>
        Awesome
      </button>
      <button type="button" className={buttonClassName}>
        Prepare
      </button>
    </div>

    <div className="mt-[90px] font-primary-black text-[24px]">
      Recent Breakdowns
    </div>
  </div>
);
