import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const ACTION_BUTTON_CLASS =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-2xs font-primary text-[#8c8078]";

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-[#191919] px-5 py-5 font-primary"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-primary-bold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings size={16} className="text-[#b5b5b5]" aria-hidden="true" />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <FiChevronUp
          size={12}
          className="shrink-0 text-[#8b9291]"
          aria-hidden="true"
        />
        <span className="truncate text-2xs text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[76px] flex items-center gap-2">
        <FiChevronUp
          size={14}
          className="shrink-0 text-[#b2b2b1]"
          aria-hidden="true"
        />
        <span className="text-xs font-primary-bold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-8">
        <span className="flex items-center gap-4 text-2xs text-[#a4a4a3]">
          Personal Access Token
          <FiInfo size={13} className="shrink-0" aria-hidden="true" />
        </span>
        <input
          readOnly
          defaultValue="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-3 text-2xs font-primary-light text-[#737470]"
        />
      </div>

      <div className="mt-3">
        <span className="flex items-center gap-4 text-2xs text-[#a3a3a2]">
          Design URL
          <FiInfo size={13} className="shrink-0" aria-hidden="true" />
        </span>
        <input
          readOnly
          defaultValue="https://www.figma.com/file/:"
          className="mt-3 h-9 w-full border-2 border-[#929291] bg-[#272822] px-3 text-2xs font-primary-light text-[#71726e]"
        />
      </div>

      <div className="ml-6 mt-6 flex gap-[17px]">
        {ACTIONS.map((action) => (
          <button key={action} type="button" className={ACTION_BUTTON_CLASS}>
            {action}
          </button>
        ))}
      </div>

      <h3 className="mt-12 text-xs font-primary-bold text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};
