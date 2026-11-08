import { HiChevronUp, HiOutlineInformationCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

const fieldClass =
  "w-full border border-[#a5adad] bg-[#272822] px-[19px] py-[11px] text-2xs text-[#b5b5b5] placeholder:text-[#737470]";

const buttonClass =
  "w-[87px] rounded bg-[#843a17] py-[11px] text-2xs font-primary-bold text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#1e1e1e] px-5 py-5 font-primary text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs">UI magician Agent</span>
      <IoSettingsOutline size={16} aria-hidden="true" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <HiChevronUp size={12} className="text-[#8b9291]" aria-hidden="true" />
      <span className="text-2xs text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <HiChevronUp size={16} className="text-[#b2b2b1]" aria-hidden="true" />
      <span className="font-primary-bold text-xs text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-2xs text-[#a4a4a3]">Personal Access Token</span>
        <HiOutlineInformationCircle
          size={15}
          className="text-[#a4a4a3]"
          aria-hidden="true"
        />
      </div>
      <input
        type="text"
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={fieldClass}
      />
    </div>

    <div className="mt-[11px] flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-2xs text-[#a3a3a2]">Design URL</span>
        <HiOutlineInformationCircle
          size={15}
          className="text-[#a3a3a2]"
          aria-hidden="true"
        />
      </div>
      <input
        type="text"
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className={fieldClass}
      />
    </div>

    <div className="mt-[20px] flex gap-4 pl-[23px]">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-[45px] font-primary-bold text-xs text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
