import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const buttonClasses =
  "rounded bg-[#a34a1e] px-8 py-3 font-primary-bold text-lg text-[#e79a68]";

const inputClasses =
  "mt-3 h-12 w-full rounded border border-[#3f3f3f] bg-[#1f1f1f] px-4 font-primary-light text-lg text-[#e5e5e5] placeholder:text-[#8a8a8a]";

const Field = ({ id, label, placeholder }: FieldProps) => (
  <>
    <div className="mt-6 flex items-center gap-2">
      <label htmlFor={id} className="font-primary text-lg text-[#d0d0d0]">
        {label}
      </label>
      <HiOutlineInformationCircle
        size={18}
        className="shrink-0 text-[#9b9b9b]"
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={inputClasses}
    />
  </>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1b1b1b] p-6 font-primary text-[#f2f2f2]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <HiOutlineCog size={26} className="shrink-0 text-[#c9c9c9]" />
    </div>

    <div className="mt-6 flex items-center gap-2 text-[#9b9b9b]">
      <HiChevronUp size={20} className="shrink-0" />
      <span className="truncate font-primary-light text-lg">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <HiChevronUp size={22} className="shrink-0" />
      <h2 className="font-primary-bold text-2xl">Add New Design</h2>
    </div>

    <Field
      id="test-card-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
    />

    <Field
      id="test-card-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-8 flex gap-4">
      <button type="button" className={buttonClasses}>
        Awesome
      </button>
      <button type="button" className={buttonClasses}>
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
