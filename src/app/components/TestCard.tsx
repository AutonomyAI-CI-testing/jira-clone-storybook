import { FaCog } from "react-icons/fa";
import { HiChevronUp, HiInformationCircle } from "react-icons/hi";

const BUTTON_CLASSES =
  "h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]";

const BUTTON_LABELS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-black px-5 pt-5 pb-16 font-primary text-[13.5px] text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold">UI magician Agent</span>
        <button
          type="button"
          aria-label="Open settings"
          className="text-[#b5b5b5]"
        >
          <FaCog size={16} />
        </button>
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <HiChevronUp
          size={12}
          aria-hidden="true"
          className="shrink-0 text-[#8b9291]"
        />
        <span className="truncate text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[76px] flex items-center gap-2">
        <HiChevronUp
          size={14}
          aria-hidden="true"
          className="shrink-0 text-[#b2b2b1]"
        />
        <span className="font-primary-bold text-[#b2b2b1]">Add New Design</span>
      </div>

      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        borderClasses="border border-[#a5adad]"
        className="mt-7"
      />

      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        borderClasses="border-2 border-[#929291]"
        className="mt-3"
      />

      <div className="mt-[22px] flex gap-[17px]">
        {BUTTON_LABELS.map((label) => (
          <button key={label} type="button" className={BUTTON_CLASSES}>
            {label}
          </button>
        ))}
      </div>

      <h2 className="mt-12 font-primary-bold text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const Field = ({
  id,
  label,
  placeholder,
  borderClasses,
  className,
}: FieldProps): JSX.Element => (
  <div className={className}>
    <label htmlFor={id} className="flex items-center justify-between">
      <span className="font-primary-bold text-[11.5px] text-[#a4a4a3]">
        {label}
      </span>
      <HiInformationCircle
        size={15}
        aria-hidden="true"
        className="text-[#a4a4a3]"
      />
    </label>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={`mt-3 h-9 w-full bg-[#272822] px-3 text-[11.5px] text-[#b5b5b5] placeholder:text-[#737470] ${borderClasses}`}
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  borderClasses: string;
  className?: string;
}
