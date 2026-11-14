import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const buttonClassName =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1C1D17] p-5 font-primary text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-[13.5px] leading-[16px]">
        UI magician Agent
      </h2>
      <FaCog size={15} aria-hidden />
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
      <FaChevronUp size={9} aria-hidden />
      <span className="font-primary-bold text-[11.5px] leading-[14px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2 text-[#b2b2b1]">
      <FaChevronUp size={12} aria-hidden />
      <h3 className="font-primary-bold text-[13.5px] leading-[16px]">
        Add New Design
      </h3>
    </div>

    <div className="mt-[27px]">
      <label
        htmlFor="test-card-token"
        className="flex items-center gap-3 font-primary-bold text-[11.5px] leading-[14px] text-[#a4a4a3]"
      >
        Personal Access Token
        <FaInfoCircle size={14} aria-hidden />
      </label>
      <input
        id="test-card-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] font-primary-bold text-[11.5px] text-[#b5b5b5] placeholder:text-[#737470]"
      />
    </div>

    <div className="mt-3">
      <label
        htmlFor="test-card-url"
        className="flex items-center gap-3 font-primary-bold text-[11.5px] leading-[14px] text-[#a3a3a2]"
      >
        Design URL
        <FaInfoCircle size={14} aria-hidden />
      </label>
      <input
        id="test-card-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-3 h-9 w-full border-2 border-[#929291] bg-[#272822] px-[19px] font-primary-bold text-[10.5px] text-[#b5b5b5] placeholder:text-[#71726e]"
      />
    </div>

    <div className="mt-[22px] flex gap-[17px]">
      {["Awesome", "Prepare"].map((label) => (
        <button key={label} type="button" className={buttonClassName}>
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);
