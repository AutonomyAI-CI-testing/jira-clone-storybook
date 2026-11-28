import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * A smoke-test reproduction of the "UI magician Agent" frame: a self-contained
 * dark settings panel. It takes no props and carries no behaviour — the fields
 * are read-only and the buttons are inert on purpose.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 py-5 font-primary-bold"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] leading-tight text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings aria-hidden size={16} className="text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <FiChevronUp aria-hidden size={10} className="text-[#8b9291]" />
      <span className="truncate text-[11.5px] leading-tight text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[63px] flex items-center gap-2">
      <FiChevronUp aria-hidden size={12} className="text-[#b2b2b1]" />
      <span className="text-[13.5px] leading-tight text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <Field
      id="personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-[10px]"
      inputClassName="mt-[13px] h-[36px] border border-[#a5adad] text-[11.5px]"
    />
    <Field
      id="design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-[9px]"
      inputClassName="mt-[12px] h-[37px] border-2 border-[#929291] text-[10.5px]"
    />

    <div className="mt-[22px] flex gap-[17px] pl-6">
      {ACTIONS.map((action) => (
        <button
          key={action}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
        >
          {action}
        </button>
      ))}
    </div>

    <span className="mt-[47px] text-[13.5px] leading-tight text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);

const ACTIONS = ["Awesome", "Prepare"];

const Field = ({
  id,
  label,
  placeholder,
  className,
  inputClassName,
}: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-2">
      <label
        htmlFor={id}
        className="text-[11.5px] leading-tight text-[#a4a4a3]"
      >
        {label}
      </label>
      <FiInfo aria-hidden size={15} className="text-[#a4a4a3]" />
    </div>
    <input
      id={id}
      type="text"
      readOnly
      placeholder={placeholder}
      className={cx(
        "w-full rounded-none bg-[#272822] px-[11px] outline-none placeholder:text-[#737470]",
        inputClassName
      )}
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  /** Spacing above the block, which differs between the frame's two fields. */
  className: string;
  /** The frame draws the two field boxes with different borders and text sizes. */
  inputClassName: string;
}
