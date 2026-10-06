import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-primary-bold text-[#8c8078]";

const FIELD_CLASS =
  "mt-2 w-full bg-[#272822] px-4 font-primary-bold placeholder:text-[#737470]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      role="group"
      aria-label="UI magician Agent"
      className="flex min-h-[508px] w-[254px] flex-col bg-black p-5 font-primary"
    >
      <div className="flex items-center justify-between">
        <p className="text-[13.5px] font-primary-bold text-[#b5b5b5]">
          UI magician Agent
        </p>
        <FiSettings aria-hidden="true" size={16} color="#b5b5b5" />
      </div>

      <div className="mt-4 flex items-center gap-1.5 pl-5">
        <FiChevronUp aria-hidden="true" size={12} color="#8b9291" />
        <p className="truncate text-[11.5px] font-primary-bold text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      <div className="mt-[70px] flex items-center gap-1.5 pl-1">
        <FiChevronUp aria-hidden="true" size={12} color="#b2b2b1" />
        <p className="text-[13.5px] font-primary-bold text-[#b2b2b1]">
          Add New Design
        </p>
      </div>

      <div className="mt-[29px] flex items-center gap-1.5">
        <label
          htmlFor="testElem-personal-access-token"
          className="text-[11.5px] font-primary-bold text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <FiInfo aria-hidden="true" size={15} color="#a4a4a3" />
      </div>
      <input
        id="testElem-personal-access-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={`${FIELD_CLASS} h-9 border border-[#a5adad] text-[11.5px] text-[#737470]`}
      />

      <div className="mt-[24px] flex items-center gap-1.5">
        <label
          htmlFor="testElem-design-url"
          className="text-[11.5px] font-primary-bold text-[#a3a3a2]"
        >
          Design URL
        </label>
        <FiInfo aria-hidden="true" size={15} color="#a3a3a2" />
      </div>
      <input
        id="testElem-design-url"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className={`${FIELD_CLASS} h-[37px] border-2 border-[#929291] text-[10.5px] text-[#71726e] placeholder:text-[#71726e]`}
      />

      <div className="mt-[23px] flex gap-[17px]">
        <button type="button" className={BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASS}>
          Prepare
        </button>
      </div>

      <p className="mt-[46px] text-[13.5px] font-primary-bold text-[#b0b0b0]">
        Recent Breakdowns
      </p>
    </div>
  );
};
