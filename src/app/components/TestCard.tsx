import cx from "classix";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsChevronUp } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

const actionLabels = ["Awesome", "Prepare"];

const FieldLabel = ({ children, className }: FieldLabelProps): JSX.Element => (
  <div
    className={cx(
      "flex items-center gap-[18px] font-primary-bold text-[11.5px] leading-[13.92px]",
      className
    )}
  >
    <span>{children}</span>
    <AiOutlineInfoCircle size={15} aria-hidden="true" />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#1c1d17] px-5 py-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <button
        type="button"
        aria-label="Agent settings"
        className="text-[#e3e6db]"
      >
        <IoSettingsOutline size={16} />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[11.5px] leading-[13.92px] text-[#8b9291]">
      <BsChevronUp size={10} className="shrink-0" />
      <span className="min-w-0 truncate font-primary-bold">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[9px] text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
      <BsChevronUp size={12} className="shrink-0" />
      <span className="font-primary-bold">Add New Design</span>
    </div>

    <FieldLabel className="mt-[28px] text-[#a4a4a3]">
      Personal Access Token
    </FieldLabel>
    <input
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] font-primary-bold text-[11.5px] text-[#737470] placeholder:text-[#737470]"
    />

    <FieldLabel className="mt-[11px] text-[#a3a3a2]">Design URL</FieldLabel>
    <input
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 font-primary-bold text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex gap-[17px] pl-6">
      {actionLabels.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    <span className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);

interface FieldLabelProps {
  children: string;
  className?: string;
}
