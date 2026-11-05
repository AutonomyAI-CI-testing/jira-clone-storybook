import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const buttonClass =
  "h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078]";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black px-5 pb-[62px] pt-5"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs text-[#b5b5b5]">
        UI magician Agent
      </span>
      <IoSettingsOutline
        size={16}
        aria-hidden="true"
        className="text-[#b5b5b5]"
      />
    </div>

    <div className="mt-[14px] flex items-center gap-2">
      <IoChevronUp size={10} aria-hidden="true" className="text-[#8b9291]" />
      <span className="min-w-0 truncate font-primary-bold text-2xs text-[#8b9291]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-1.5">
      <IoChevronUp size={12} aria-hidden="true" className="text-[#b2b2b1]" />
      <span className="font-primary-bold text-xs text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-7 flex items-center gap-2">
      <span className="font-primary-bold text-2xs text-[#a4a4a3]">
        Personal Access Token
      </span>
      <IoInformationCircleOutline
        size={15}
        aria-hidden="true"
        className="text-[#a4a4a3]"
      />
    </div>

    <input
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full rounded-none border border-[#a5adad] bg-[#272822] px-[19px] font-primary-bold text-2xs text-[#737470] placeholder:text-[#737470]"
    />

    <div className="mt-[11px] flex items-center gap-2">
      <span className="font-primary-bold text-2xs text-[#a3a3a2]">
        Design URL
      </span>
      <IoInformationCircleOutline
        size={15}
        aria-hidden="true"
        className="text-[#a3a3a2]"
      />
    </div>

    <input
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-[11px] h-[37px] w-full rounded-none border-2 border-[#929291] bg-[#272822] px-[19px] font-primary-bold text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <span className="mt-[47px] font-primary-bold text-xs text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
