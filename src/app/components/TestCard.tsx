import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

interface FieldProps {
  label: string;
  placeholder: string;
  className?: string;
}

const Field = ({ label, placeholder, className = "" }: FieldProps) => (
  <label className={className}>
    <span className="flex items-center gap-3">
      <span className="font-primary text-[1.35rem] text-[#c9c9c9]">
        {label}
      </span>
      <FiInfo aria-hidden size={20} className="shrink-0 text-[#e6e6e6]" />
    </span>
    <input
      readOnly
      placeholder={placeholder}
      className="mt-5 h-[56px] w-full rounded border border-[#8a8a8a] bg-[#232323] px-4 font-primary-light text-[1.2rem] text-[#e6e6e6] placeholder:text-[#8f8f8f]"
    />
  </label>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1c1c1c] px-10 pt-11 pb-[140px]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary text-[1.75rem] leading-tight text-[#e6e6e6]">
        UI magician Agent
      </h1>
      <FiSettings
        aria-hidden
        size={30}
        className="mt-1 shrink-0 text-[#e6e6e6]"
      />
    </div>

    <div className="mt-9 flex items-center gap-3">
      <FiChevronUp aria-hidden size={20} className="shrink-0 text-[#e6e6e6]" />
      <span className="font-primary-light text-[1.25rem] text-[#9e9e9e]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-40 flex items-center gap-3">
      <FiChevronUp aria-hidden size={26} className="shrink-0 text-[#e6e6e6]" />
      <h2 className="font-primary-bold text-[1.7rem] text-[#e6e6e6]">
        Add New Design
      </h2>
    </div>

    <Field
      className="mt-16 block"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />

    <Field
      className="mt-8 block"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-12 flex gap-9">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          type="button"
          className="h-[76px] w-[169px] rounded-lg bg-[#a9431b] font-primary text-[1.75rem] text-[#c9885f]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-28 font-primary-bold text-[1.7rem] text-[#e6e6e6]">
      Recent Breakdowns
    </h2>
  </div>
);
