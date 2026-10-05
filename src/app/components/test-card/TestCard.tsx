import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static smoke-test recreation of the "UI magician Agent" panel.
 * Self-contained: takes no props, no state, no data — every string is literal
 * copy from the design frame. Visual fidelity is explicitly out of scope.
 */

const BUTTON_LABELS = ["Awesome", "Prepare"];

const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]";

interface FieldProps {
  label: string;
  placeholder: string;
  className?: string;
  inputClassName?: string;
}

const Field = ({
  label,
  placeholder,
  className,
  inputClassName,
}: FieldProps) => (
  <label className={cx("block", className)}>
    <span className="flex items-center gap-1.5 text-[11.5px] text-[#a4a4a3]">
      {label}
      <FiInfo size={14} />
    </span>
    <input
      readOnly
      placeholder={placeholder}
      className={cx(
        "mt-2 h-[37px] w-full bg-[#272822] px-3 text-[11.5px] outline-none",
        inputClassName,
      )}
    />
  </label>
);

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-black px-5 pb-6 pt-5 font-primary text-[13.5px] text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <span>UI magician Agent</span>
        <FiSettings size={16} />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <FiChevronUp size={12} className="shrink-0" />
        <span className="min-w-0 truncate text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-8 flex items-center gap-2">
        <FiChevronUp size={14} className="shrink-0" />
        <span className="text-[#b2b2b1]">Add New Design</span>
      </div>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        className="mt-5"
        inputClassName="border border-[#a5adad] text-[#737470] placeholder:text-[#737470]"
      />

      <Field
        label="Design URL"
        placeholder="https://www.figma.com/file/"
        className="mt-4"
        inputClassName="border-2 border-[#929291] text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="mt-6 flex gap-3">
        {BUTTON_LABELS.map((label) => (
          <button key={label} type="button" className={BUTTON_CLASS}>
            {label}
          </button>
        ))}
      </div>

      <h2 className="mt-8">Recent Breakdowns</h2>
    </div>
  );
}

export default TestCard;
