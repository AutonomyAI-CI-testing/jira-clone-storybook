import cx from "classix";
import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const BUTTON_CLASS =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] text-[#8c8078]";

const Field = ({
  id,
  label,
  placeholder,
  className,
  inputClassName,
  placeholderClassName,
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-2 text-[11.5px] text-[#a4a4a3]">
      <label htmlFor={id}>{label}</label>
      <IoInformationCircleOutline size={15} aria-hidden />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={cx(
        "mt-3 h-9 w-full bg-[#272822] px-[18px] text-[#b5b5b5]",
        inputClassName,
        placeholderClassName
      )}
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#000000] px-5 pb-16 pt-5 font-primary-bold text-[13.5px] text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span>UI magician Agent</span>
      <IoSettingsOutline size={16} aria-hidden />
    </div>

    <div className="mt-4 flex items-center gap-2 text-[11.5px] text-[#8b9291]">
      <IoChevronUp size={8} aria-hidden />
      <span>From entire frame to a singl...</span>
    </div>

    <div className="mt-[88px] flex items-center gap-2 text-[#b2b2b1]">
      <IoChevronUp size={12} aria-hidden />
      <span>Add New Design</span>
    </div>

    <Field
      id="test-card-personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className="mt-7"
      inputClassName="border border-[#a5adad] text-[11.5px]"
      placeholderClassName="placeholder:text-[11.5px] placeholder:text-[#737470]"
    />

    <Field
      id="test-card-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-3"
      inputClassName="border-2 border-[#929291] text-[10.5px]"
      placeholderClassName="placeholder:text-[10.5px] placeholder:text-[#71726e]"
    />

    <div className="mt-6 flex gap-4 pl-6">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className="mt-12 text-[#b0b0b0]">Recent Breakdowns</h2>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
  inputClassName: string;
  placeholderClassName: string;
}
