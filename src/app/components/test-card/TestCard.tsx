import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke test: a static, self-contained render of the "UI magician Agent"
 * settings panel. No props, no state, no behaviour.
 *
 * The panel's dark/orange palette is bespoke to the source design and has no
 * matching entry in the semantic token set, so literal values are used here on
 * purpose rather than hunting for a token that does not exist.
 */

const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]";

const Field = ({
  label,
  labelColor,
  placeholder,
  inputClassName,
  className,
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-4">
      <span
        className={cx(
          "text-[11.5px] font-semibold leading-[13.92px]",
          labelColor
        )}
      >
        {label}
      </span>
      <FiInfo
        size={15}
        aria-hidden="true"
        className={cx("shrink-0", labelColor)}
      />
    </div>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className={inputClassName}
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 py-5 font-['Inter',sans-serif]"
    >
      <div className="flex items-start justify-between">
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings
          size={16}
          aria-hidden="true"
          className="shrink-0 text-[#b5b5b5]"
        />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <FiChevronUp
          size={8}
          aria-hidden="true"
          className="shrink-0 text-[#8b9291]"
        />
        <span className="truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-2">
        <FiChevronUp
          size={12}
          aria-hidden="true"
          className="shrink-0 text-[#b2b2b1]"
        />
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <Field
        className="mt-[28px]"
        label="Personal Access Token"
        labelColor="text-[#a4a4a3]"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        inputClassName="mt-[10px] h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] font-semibold text-[#737470] outline-none placeholder:text-[#737470]"
      />

      <Field
        className="mt-[11px]"
        label="Design URL"
        labelColor="text-[#a3a3a2]"
        placeholder="https://www.figma.com/file/"
        inputClassName="mt-[11px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] font-semibold text-[#71726e] outline-none placeholder:text-[#71726e]"
      />

      <div className="mt-[23px] flex items-center justify-center gap-[17px]">
        <button type="button" className={BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASS}>
          Prepare
        </button>
      </div>

      <h2 className="mt-[46px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

interface FieldProps {
  label: string;
  labelColor: string;
  placeholder: string;
  inputClassName: string;
  className?: string;
}
