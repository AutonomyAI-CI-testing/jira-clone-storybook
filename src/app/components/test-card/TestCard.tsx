import cx from "classix";
import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const ACTION_LABELS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 py-5 font-primary text-[#b5b5b5]"
  >
    <header className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[13.5px]">UI magician Agent</h1>
      <IoSettingsOutline size={16} aria-hidden />
    </header>

    <div className="mt-3 flex items-center gap-2 text-[#8b9291]">
      <IoChevronUpOutline size={12} className="shrink-0" aria-hidden />
      <span className="truncate text-[11.5px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <IoChevronUpOutline
        size={12}
        className="shrink-0 text-[#b2b2b1]"
        aria-hidden
      />
      <h2 className="font-primary-bold text-[13.5px] text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <Field
      className="mt-8"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      inputClassName="border border-[#a5adad]"
    />
    <Field
      className="mt-5"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      inputClassName="border-2 border-[#929291]"
    />

    <div className="mt-6 flex gap-2">
      {ACTION_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-16 font-primary-bold text-[13.5px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({
  label,
  placeholder,
  inputClassName,
  className = "",
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-2">
      <span className="font-primary-bold text-[11.5px] text-[#a4a4a3]">
        {label}
      </span>
      <IoInformationCircleOutline
        size={15}
        className="text-[#a4a4a3]"
        aria-hidden
      />
    </div>
    <input
      readOnly
      placeholder={placeholder}
      className={cx(
        "mt-2 h-9 w-full bg-[#272822] px-4 font-primary text-[11.5px] text-[#737470] placeholder:text-[#737470]",
        inputClassName
      )}
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
  inputClassName: string;
  className?: string;
}
