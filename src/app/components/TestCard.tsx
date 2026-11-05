import cx from "classix";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiArrowUpSLine } from "react-icons/ri";

const fieldClass =
  "w-full bg-[#272822] px-3 font-primary-bold text-[#737470] placeholder:text-[#737470]";

const buttonClass =
  "h-10 w-[87px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]";

const BUTTON_LABELS = ["Awesome", "Prepare"];

const FieldLabel = ({ htmlFor, children }: FieldLabelProps): JSX.Element => (
  <div className="flex items-center gap-2">
    <label
      htmlFor={htmlFor}
      className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
    >
      {children}
    </label>
    <HiOutlineInformationCircle
      size={15}
      className="text-[#a4a4a3]"
      aria-hidden="true"
    />
  </div>
);

interface FieldLabelProps {
  htmlFor: string;
  children: string;
}

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#1e1e1e] px-5 pb-[62px] pt-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <IoSettingsOutline
        size={16}
        className="text-[#b5b5b5]"
        aria-hidden="true"
      />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <RiArrowUpSLine size={14} className="text-[#8b9291]" aria-hidden="true" />
      <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <RiArrowUpSLine size={18} className="text-[#b2b2b1]" aria-hidden="true" />
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px]">
      <FieldLabel htmlFor="testcard-token">Personal Access Token</FieldLabel>
      <input
        id="testcard-token"
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={cx(
          fieldClass,
          "mt-3 h-9 border border-[#a5adad] text-[11.5px]"
        )}
      />
    </div>

    <div className="mt-[11px]">
      <FieldLabel htmlFor="testcard-url">Design URL</FieldLabel>
      <input
        id="testcard-url"
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className={cx(
          fieldClass,
          "mt-[11px] h-[37px] border-2 border-[#929291] text-[10.5px]"
        )}
      />
    </div>

    <div className="ml-6 mt-[21px] flex gap-4">
      {BUTTON_LABELS.map((label) => (
        <button key={label} type="button" className={buttonClass}>
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-[45px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
