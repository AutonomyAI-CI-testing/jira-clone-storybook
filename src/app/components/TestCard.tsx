import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

interface FieldSpec {
  label: string;
  placeholder: string;
}

const FIELDS: FieldSpec[] = [
  {
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxx",
  },
  {
    label: "Design URL",
    placeholder: "https://www.figma.com/file/:",
  },
];

const ACTIONS: string[] = ["Awesome", "Prepare"];

const labelClass =
  "font-primary-bold text-[11.5px] leading-[14px] text-font-subtle";

const inputClass =
  "h-[37px] w-[211px] rounded bg-elevation-surface-raised px-[19px] font-primary text-[11.5px] leading-[14px] text-font-subtlest placeholder:text-font-subtlest";

const buttonClass =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-[11.5px] leading-[14px] text-[var(--Neutral500)]";

const TestCard = () => (
  <div
    id="testElem"
    className="dark flex min-h-[508px] w-[254px] flex-col bg-black p-5 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16px]">
        UI magician Agent
      </span>
      <IoSettingsOutline size={16} className="text-font-subtle" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <IoChevronUpOutline size={12} className="shrink-0 text-font-subtlest" />
      <span className="truncate text-[11.5px] leading-[14px] text-font-subtlest">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[9px]">
      <IoChevronUpOutline size={14} className="shrink-0 text-font-subtle" />
      <span className="font-primary-bold text-[13.5px] leading-[16px] text-font-subtle">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex flex-col gap-[11px]">
      {FIELDS.map((field) => (
        <div key={field.label} className="flex flex-col gap-[12px]">
          <div className="flex items-center gap-[6px]">
            <span className={labelClass}>{field.label}</span>
            <IoInformationCircleOutline
              size={15}
              className="text-font-subtlest"
            />
          </div>
          <input
            aria-label={field.label}
            className={inputClass}
            placeholder={field.placeholder}
          />
        </div>
      ))}
    </div>

    <div className="ml-[24px] mt-[22px] flex gap-[17px]">
      {ACTIONS.map((action) => (
        <button key={action} type="button" className={buttonClass}>
          {action}
        </button>
      ))}
    </div>

    <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16px]">
      Recent Breakdowns
    </h2>
  </div>
);

export default TestCard;
