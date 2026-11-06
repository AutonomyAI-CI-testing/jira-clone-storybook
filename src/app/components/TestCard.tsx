import cx from "classix";
import {
  MdKeyboardArrowUp,
  MdOutlineInfo,
  MdOutlineSettings,
} from "react-icons/md";

const TOKEN_PLACEHOLDER = "figd_xxxxxxxxxxxxxxxxxx";
const URL_PLACEHOLDER = "https://www.figma.com/file/:";
const ACTIONS = ["Awesome", "Prepare"];

const fieldBaseClass = "flex w-[211px] items-center bg-[var(--DarkNeutral200)]";
const actionClass =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)]";

const FieldLabel = ({ label, labelClass }: FieldLabelProps): JSX.Element => (
  <div className="flex items-center gap-[10px]">
    <span className={labelClass}>{label}</span>
    <MdOutlineInfo
      size={15}
      className="text-[var(--Neutral400)]"
      aria-hidden="true"
    />
  </div>
);

const Field = ({ boxClass, text, textClass }: FieldProps): JSX.Element => (
  <div className={cx(fieldBaseClass, boxClass)}>
    <span className={textClass}>{text}</span>
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-black p-5 font-primary-bold"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] leading-[16.34px] text-[var(--Neutral400)]">
          UI magician Agent
        </span>
        <MdOutlineSettings
          size={16}
          className="text-[var(--Neutral400)]"
          aria-hidden="true"
        />
      </div>

      <div className="mt-[18px] flex items-center gap-[8px]">
        <MdKeyboardArrowUp
          size={14}
          className="text-[var(--Neutral500)]"
          aria-hidden="true"
        />
        <span className="text-[11.5px] leading-[13.92px] text-[var(--Neutral500)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[6px] pl-[6px]">
        <MdKeyboardArrowUp
          size={16}
          className="text-[var(--Neutral400)]"
          aria-hidden="true"
        />
        <span className="text-[13.5px] leading-[16.34px] text-[var(--Neutral400)]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px]">
        <FieldLabel
          label="Personal Access Token"
          labelClass="text-[11.5px] leading-[13.92px] text-[var(--DarkNeutral800)]"
        />
      </div>

      <Field
        boxClass="mt-[12px] h-[36px] border border-[color:var(--DarkNeutral800)] px-[18px]"
        text={TOKEN_PLACEHOLDER}
        textClass="text-[11.5px] leading-[13.92px] text-[var(--Neutral700)]"
      />

      <div className="mt-[11px]">
        <FieldLabel
          label="Design URL"
          labelClass="text-[11.5px] leading-[13.92px] text-[var(--DarkNeutral800)]"
        />
      </div>

      <Field
        boxClass="mt-[11px] h-[37px] border-2 border-[color:var(--DarkNeutral700)] px-[20px]"
        text={URL_PLACEHOLDER}
        textClass="text-[10.5px] leading-[12.71px] text-[var(--Neutral700)]"
      />

      <div className="mt-[22px] flex gap-[17px] pl-[24px]">
        {ACTIONS.map((action) => (
          <div key={action} className={actionClass}>
            <span className="text-[11.5px] leading-[13.92px] text-[var(--Neutral600)]">
              {action}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-[47px] text-[13.5px] leading-[16.34px] text-[var(--DarkNeutral800)]">
        Recent Breakdowns
      </div>
    </div>
  );
};

interface FieldLabelProps {
  label: string;
  labelClass: string;
}

interface FieldProps {
  boxClass: string;
  text: string;
  textClass: string;
}
