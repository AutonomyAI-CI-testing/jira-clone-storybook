import { HiChevronUp, HiOutlineInformationCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

// Static copy from the Figma frame "UI magician Agent".
const copy = {
  title: "UI magician Agent",
  summary: "From entire frame to a singl...",
  section: "Add New Design",
  tokenLabel: "Personal Access Token",
  tokenPlaceholder: "figd_xxxxxxxxxxxxxxxxxx",
  urlLabel: "Design URL",
  urlPlaceholder: "https://www.figma.com/file/:",
  primaryAction: "Awesome",
  secondaryAction: "Prepare",
  recent: "Recent Breakdowns",
};

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[var(--DarkNeutral100)] p-[20px] font-[Inter,ui-sans-serif,system-ui,sans-serif] text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between">
      <span>{copy.title}</span>
      <IoSettingsOutline
        aria-hidden
        className="h-4 w-[14px] shrink-0 text-[#b5b5b5]"
      />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] text-[11.5px] leading-[13.92px] text-[#8b9291]">
      <HiChevronUp aria-hidden className="h-[5px] w-2 shrink-0" />
      <span>{copy.summary}</span>
    </div>

    <div className="mt-[77px] flex items-center gap-[9px] text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
      <HiChevronUp aria-hidden className="h-2 w-3 shrink-0" />
      <span>{copy.section}</span>
    </div>

    <div className="mt-[28px] flex items-center gap-[20px] text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
      <span>{copy.tokenLabel}</span>
      <HiOutlineInformationCircle
        aria-hidden
        className="h-[15px] w-[15px] shrink-0"
      />
    </div>

    <div className="mt-[12px] flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822] px-[19px]">
      <span className="text-[11.5px] leading-[13.92px] text-[#737470]">
        {copy.tokenPlaceholder}
      </span>
    </div>

    <div className="mt-[11px] flex items-center gap-[20px] text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
      <span>{copy.urlLabel}</span>
      <HiOutlineInformationCircle
        aria-hidden
        className="h-[15px] w-[15px] shrink-0"
      />
    </div>

    <div className="mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] px-[18px]">
      <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
        {copy.urlPlaceholder}
      </span>
    </div>

    <div className="mt-[22px] ml-[24px] flex gap-[17px] text-[11.5px] leading-[13.92px] text-[#8c8078]">
      <button
        type="button"
        className="h-[37px] w-[85px] shrink-0 rounded bg-[#843a17]"
      >
        {copy.primaryAction}
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] shrink-0 rounded bg-[#843a17]"
      >
        {copy.secondaryAction}
      </button>
    </div>

    <div className="mt-[46px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      {copy.recent}
    </div>
  </div>
);
