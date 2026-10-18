import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[1016px] w-full max-w-[508px] bg-[#1c1c1c] px-11 py-7 font-primary text-[#d5d5d5]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl text-[#d5d5d5]">
        UI magician Agent
      </h1>
      <FiSettings size={22} className="text-[#d5d5d5]" />
    </div>

    <div className="mt-5 flex items-center gap-3 text-base text-[#9e9e9e]">
      <FiChevronUp size={18} className="shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-12 flex items-center gap-2">
      <FiChevronUp size={22} className="text-[#d5d5d5]" />
      <h2 className="font-primary-bold text-xl text-[#d5d5d5]">
        Add New Design
      </h2>
    </div>

    <Field
      id="test-personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
    />
    <Field
      id="test-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-10 flex gap-6">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          type="button"
          className="flex-1 rounded-lg bg-[#9a3f1e] py-4 text-base text-[#a89890]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-16 font-primary-bold text-xl text-[#d5d5d5]">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-7">
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-base text-[#9e9e9e]">
        {label}
      </label>
      <FiInfo size={20} className="text-[#9e9e9e]" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-4 w-full rounded-sm border border-[#8a8a8a] bg-[#242424] px-4 py-4 text-base text-[#d5d5d5] outline-none placeholder:text-[#9e9e9e]"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
