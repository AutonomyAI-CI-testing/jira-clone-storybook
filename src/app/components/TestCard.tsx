import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_BASE = "w-full rounded-none bg-[#272822] outline-none";
const ACTION_BUTTON_CLASS =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-primary-bold text-[#8c8078]";

const ACTION_LABELS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 py-5 font-primary"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] text-[#b5b5b5]">UI magician Agent</span>
        <FiSettings aria-hidden="true" size={16} className="text-[#b5b5b5]" />
      </div>

      <div className="mt-4 flex items-center gap-2 text-[11.5px] text-[#8b9291]">
        <FiChevronUp aria-hidden="true" size={12} className="shrink-0" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="mt-20 flex items-center gap-2 font-primary-bold text-[13.5px] text-[#b2b2b1]">
        <FiChevronUp aria-hidden="true" size={14} className="shrink-0" />
        <span>Add New Design</span>
      </div>

      <div className="mt-7 flex items-center gap-2 text-[11.5px] text-[#a4a4a3]">
        <span>Personal Access Token</span>
        <FiInfo aria-hidden="true" size={14} className="shrink-0" />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={`${FIELD_BASE} mt-3 h-9 border border-[#a5adad] px-[19px] text-[11.5px] text-[#b5b5b5] placeholder:text-[#737470]`}
      />

      <div className="mt-3 flex items-center gap-2 text-[11.5px] text-[#a3a3a2]">
        <span>Design URL</span>
        <FiInfo aria-hidden="true" size={14} className="shrink-0" />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className={`${FIELD_BASE} mt-2 h-[37px] border-2 border-[#929291] px-5 text-[10.5px] text-[#b5b5b5] placeholder:text-[#71726e]`}
      />

      <div className="mt-5 flex justify-end gap-[17px]">
        {ACTION_LABELS.map((label) => (
          <button key={label} type="button" className={ACTION_BUTTON_CLASS}>
            {label}
          </button>
        ))}
      </div>

      <h2 className="mt-12 font-primary-bold text-[13.5px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
