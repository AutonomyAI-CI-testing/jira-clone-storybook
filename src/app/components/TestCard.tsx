import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1e1e1e] px-[42px] pb-16 pt-10 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[26px] text-[#d9d9d9]">
        UI magician Agent
      </span>
      <FiSettings size={26} className="text-[#d9d9d9]" aria-hidden />
    </div>

    <div className="mt-4 flex items-center gap-2 text-[18px] text-[#8f8f8f]">
      <FiChevronUp size={20} aria-hidden />
      <span className="font-primary-light">From entire frame to a singl…</span>
    </div>

    <div className="h-[130px]" />

    <div className="flex items-center gap-2">
      <FiChevronUp size={24} className="text-[#d9d9d9]" aria-hidden />
      <span className="font-primary-bold text-[26px] text-[#d9d9d9]">
        Add New Design
      </span>
    </div>

    <TestCardField
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />
    <TestCardField
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
    />

    <div className="mt-10 flex gap-[34px] pl-[46px]">
      <button
        type="button"
        className="h-[78px] w-[170px] rounded-md bg-[#9c3f12] font-primary text-[20px] text-[#c9bfb8]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[78px] w-[170px] rounded-md bg-[#9c3f12] font-primary text-[20px] text-[#c9bfb8]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-bold text-[26px] text-[#d9d9d9]">
      Recent Breakdowns
    </h2>
  </div>
);

const TestCardField = ({
  label,
  placeholder,
}: TestCardFieldProps): JSX.Element => (
  <div className="mt-8">
    <div className="flex items-center gap-3">
      <span className="font-primary-bold text-[18px] text-[#cfcfcf]">
        {label}
      </span>
      <FiInfo size={18} className="text-[#cfcfcf]" aria-hidden />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-4 h-[68px] w-full rounded-[3px] border border-[#6f6f6f] bg-[#2a2a2a] px-5 font-primary-light text-[17px] text-[#d9d9d9] placeholder:text-[#8f8f8f] focus:outline-none"
    />
  </div>
);

interface TestCardFieldProps {
  label: string;
  placeholder: string;
}
