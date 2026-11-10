import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * A self-contained reproduction of the "UI magician Agent" Figma panel.
 *
 * Smoke test only: it takes no props and is mounted nowhere. Its colours, type
 * and spacing come from the Figma frame rather than from the design system's
 * tokens, and the frame's exported icons are drawn with react-icons.
 */

const ACTION_LABELS = ["Awesome", "Prepare"];

const Field = ({
  label,
  labelClassName,
  placeholder,
  inputClassName,
  className,
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-3">
      <span
        className={cx(
          "text-[11.5px] font-semibold leading-[15px]",
          labelClassName
        )}
      >
        {label}
      </span>
      <FiInfo aria-hidden="true" size={15} className="text-[#b5b5b5]" />
    </div>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className={cx(
        "mt-3 w-full bg-[#272822] px-[19px] text-[11.5px] font-semibold",
        inputClassName
      )}
    />
  </div>
);

interface FieldProps {
  label: string;
  labelClassName: string;
  placeholder: string;
  inputClassName: string;
  className: string;
}

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1c1c1c] p-5 font-[Inter,sans-serif]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold leading-[17px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings aria-hidden="true" size={16} className="text-[#c7c7c7]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <FiChevronUp aria-hidden="true" size={14} className="text-[#8b9291]" />
      <span className="text-[11.5px] font-semibold leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[73px] flex items-center gap-2 pl-1.5">
      <FiChevronUp aria-hidden="true" size={16} className="text-[#b2b2b1]" />
      <span className="text-[13.5px] font-semibold leading-[17px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <Field
      className="mt-7"
      label="Personal Access Token"
      labelClassName="text-[#a4a4a3]"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      inputClassName="h-9 border border-[#a5adad] text-[#737470] placeholder:text-[#737470]"
    />

    <Field
      className="mt-[11px]"
      label="Design URL"
      labelClassName="text-[#a3a3a2]"
      placeholder="https://www.figma.com/file/:"
      inputClassName="h-[37px] border-2 border-[#929291] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex gap-[17px]">
      {ACTION_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-[47px] text-[13.5px] font-semibold leading-[17px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
