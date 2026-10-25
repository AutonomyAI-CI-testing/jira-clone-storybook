import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke test: reproduces the "UI magician Agent" panel from a Figma frame.
 * Self-contained and inert on purpose — no props, no state, no handlers.
 * Colours and sizes are the frame's own values, which have no equivalent in
 * this project's token set.
 */
export const TestCard = () => (
  <div id="testElem" className="w-[254px] bg-black px-5 pb-5 pt-5 text-white">
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings className="h-4 w-4 shrink-0 text-[#b5b5b5]" />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <FiChevronUp className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
      <span className="truncate font-primary text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <FiChevronUp className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <Field
      id="testElem-token"
      className="mt-7"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      inputClassName="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] font-primary text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
    />

    <Field
      id="testElem-design-url"
      className="mt-3"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      inputClassName="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 font-primary text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex gap-[17px]">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-12 font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({
  id,
  className,
  label,
  placeholder,
  inputClassName,
}: FieldProps) => (
  <div className={className}>
    <label
      htmlFor={id}
      className="flex items-center gap-2 font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
    >
      {label}
      <FiInfo className="h-[15px] w-[15px] shrink-0" />
    </label>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className={inputClassName}
    />
  </div>
);

interface FieldProps {
  id: string;
  className: string;
  label: string;
  placeholder: string;
  inputClassName: string;
}
