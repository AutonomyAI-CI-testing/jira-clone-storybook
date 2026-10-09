import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const Field = ({
  label,
  inputId,
  placeholder,
}: {
  label: string;
  inputId: string;
  placeholder: string;
}) => (
  <div>
    <div className="flex items-center gap-2">
      <label htmlFor={inputId} className="text-[17px] text-[#f5f5f5]">
        {label}
      </label>
      <FiInfo size={18} aria-hidden className="text-[#f5f5f5]" />
    </div>
    <input
      id={inputId}
      type="text"
      placeholder={placeholder}
      className="mt-3 w-full rounded-md border border-[#9a9a9a] bg-[#2b2b2b] px-4 py-3 text-[16px] text-[#f5f5f5] outline-none placeholder:text-[#8f8f8f]"
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[1016px] w-[508px] flex-col bg-[#1a1a1a] px-10 py-12 font-primary text-[#f5f5f5]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[22px]">UI magician Agent</h1>
      <FiSettings size={24} aria-hidden />
    </div>

    <div className="mt-6 flex items-center gap-2 text-[#9a9a9a]">
      <FiChevronUp size={20} aria-hidden className="shrink-0" />
      <span className="truncate text-[16px]">
        From entire frame to a singl...
      </span>
    </div>

    <h2 className="mt-40 flex items-center gap-2 font-primary-bold text-[24px]">
      <FiChevronUp size={24} aria-hidden className="shrink-0" />
      Add New Design
    </h2>

    <div className="mt-8 flex flex-col gap-6">
      <Field
        label="Personal Access Token"
        inputId="testElem-token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <Field
        label="Design URL"
        inputId="testElem-url"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-10 flex gap-6">
      <button
        type="button"
        className="flex-1 rounded-[10px] bg-[#8f3f18] px-6 py-4 text-[20px] text-[#c98d6d]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex-1 rounded-[10px] bg-[#8f3f18] px-6 py-4 text-[20px] text-[#c98d6d]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-20 font-primary-bold text-[22px]">Recent Breakdowns</h2>
  </div>
);
