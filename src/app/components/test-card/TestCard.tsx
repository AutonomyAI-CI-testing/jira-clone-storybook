import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const LABEL = "text-[11.5px] leading-[14px]";
const INPUT =
  "mt-3 h-9 w-full bg-[#272822] px-3 text-[11.5px] leading-[14px] text-[#737470] outline-none placeholder:text-[#737470]";
const BUTTON =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#1e1e1e] px-5 pb-[62px] pt-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-[13.5px] leading-4 text-[#b5b5b5]">
        UI magician Agent
      </h2>
      <FiSettings size={16} aria-hidden="true" className="text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <FiChevronUp size={12} aria-hidden="true" className="text-[#8b9291]" />
      <span className="truncate text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <FiChevronUp size={16} aria-hidden="true" className="text-[#b2b2b1]" />
      <span className="font-primary-bold text-[13.5px] leading-4 text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-7 flex items-center justify-between">
      <label
        htmlFor="testElem-token"
        className={`${LABEL} text-[#a4a4a3]`}
      >
        Personal Access Token
      </label>
      <FiInfo
        size={15}
        role="img"
        aria-label="About the personal access token"
        className="text-[#a4a4a3]"
      />
    </div>
    <input
      id="testElem-token"
      type="text"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className={`${INPUT} border border-[#a5adad]`}
    />

    <div className="mt-[11px] flex items-center gap-3">
      <label htmlFor="testElem-url" className={`${LABEL} text-[#a3a3a2]`}>
        Design URL
      </label>
      <FiInfo
        size={15}
        role="img"
        aria-label="About the design URL"
        className="text-[#a3a3a2]"
      />
    </div>
    <input
      id="testElem-url"
      type="text"
      readOnly
      placeholder="https://www.figma.com/file/:"
      className={`${INPUT} h-[37px] border-2 border-[#929291] text-[10.5px] leading-[13px] text-[#71726e] placeholder:text-[#71726e]`}
    />

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <button type="button" className={BUTTON}>
        Awesome
      </button>
      <button type="button" className={BUTTON}>
        Prepare
      </button>
    </div>

    <h3 className="mt-[47px] font-primary-bold text-[13.5px] leading-4 text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);
