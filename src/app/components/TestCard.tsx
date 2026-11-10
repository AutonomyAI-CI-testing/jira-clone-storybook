import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELDS = [
  {
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxx",
    wrapperClass: "mt-[28px]",
    inputClass: "h-[36px] border border-[#a5adad]",
  },
  {
    label: "Design URL",
    placeholder: "https://www.figma.com/file/:",
    wrapperClass: "mt-[11px]",
    inputClass: "h-[37px] border-2 border-[#929291]",
  },
];

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="relative min-h-[508px] w-[254px] overflow-hidden bg-[#1c1c1c] px-5 pt-5 pb-5 font-primary text-[13.5px] text-[#b5b5b5]"
  >
    <div aria-hidden className="absolute inset-x-0 top-0 h-[9px] bg-[#141414]" />

    <div className="relative flex items-start justify-between">
      <span className="font-primary-bold">UI magician Agent</span>
      <FiSettings aria-hidden size={16} className="text-[#cfcfcf]" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <FiChevronUp aria-hidden size={14} className="text-[#cfcfcf]" />
      <span className="text-[11.5px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[62px] flex items-center gap-[6px]">
      <FiChevronUp aria-hidden size={16} className="text-[#cfcfcf]" />
      <span className="font-primary-bold text-[#b2b2b1]">Add New Design</span>
    </div>

    {FIELDS.map(({ label, placeholder, wrapperClass, inputClass }) => (
      <div key={label} className={wrapperClass}>
        <div className="flex items-center gap-2">
          <span className="text-[11.5px] text-[#a4a4a3]">{label}</span>
          <FiInfo aria-hidden size={15} className="text-[#a4a4a3]" />
        </div>
        <input
          readOnly
          aria-label={label}
          placeholder={placeholder}
          className={cx(
            "mt-[11px] w-full bg-[#272822] px-[18px] text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]",
            inputClass
          )}
        />
      </div>
    ))}

    <div className="mt-[22px] flex gap-4 pl-6">
      {ACTIONS.map((action) => (
        <button
          key={action}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          {action}
        </button>
      ))}
    </div>

    <p className="mt-[46px] font-primary-bold text-[#b0b0b0]">
      Recent Breakdowns
    </p>
  </div>
);
