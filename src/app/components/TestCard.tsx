import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

const fieldBaseClass =
  "w-full bg-[#272822] px-3 py-2 font-primary-bold outline-none";

const buttonClass =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]";

const labelClass = "text-[11.5px] text-[#a4a4a3]";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-black pb-[62px] font-primary-bold text-[#b5b5b5]"
  >
    <div className="h-[9px] w-full bg-[#1a1a1a]" />

    <div className="flex items-center justify-between px-5 pt-[11px]">
      <span className="text-[13.5px] leading-4">UI magician Agent</span>
      <RiSettings3Line
        size={16}
        role="img"
        aria-label="Settings"
        className="shrink-0"
      />
    </div>

    <div className="mt-[18px] flex items-center gap-2 px-5">
      <RiArrowUpSLine
        size={14}
        aria-hidden="true"
        className="shrink-0 text-[#8b9291]"
      />
      <span className="min-w-0 truncate text-[11.5px] text-[#8b9291]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[74px] flex items-center gap-2 px-5">
      <RiArrowDownSLine
        size={14}
        aria-hidden="true"
        className="shrink-0 text-[#b2b2b1]"
      />
      <span className="text-[13.5px] leading-4 text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] space-y-[11px] px-5">
      <div className="space-y-2">
        <div className="flex items-center gap-1.5">
          <label htmlFor="testElem-token" className={labelClass}>
            Personal Access Token
          </label>
          <RiInformationLine
            size={15}
            aria-hidden="true"
            className="shrink-0"
          />
        </div>
        <input
          id="testElem-token"
          readOnly
          value="figd_xxxxxxxxxxxxxxxxxx"
          className={`${fieldBaseClass} border border-[#a5adad] text-[11.5px] text-[#737470]`}
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-1.5">
          <label htmlFor="testElem-url" className={labelClass}>
            Design URL
          </label>
          <RiInformationLine
            size={15}
            aria-hidden="true"
            className="shrink-0"
          />
        </div>
        <input
          id="testElem-url"
          readOnly
          value="https://www.figma.com/file/"
          className={`${fieldBaseClass} border-2 border-[#929291] text-[10.5px] text-[#71726e]`}
        />
      </div>
    </div>

    <div className="mt-[22px] flex justify-end gap-[17px] px-5">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <div className="mt-[47px] px-5">
      <span className="text-[13.5px] leading-4 text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  </div>
);
