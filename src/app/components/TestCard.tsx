import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const Field = ({ id, label, placeholder, className = "" }: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-[24px] leading-none text-[#d9d9d9]">
        {label}
      </label>
      <FiInfo aria-hidden="true" size={26} className="shrink-0 text-[#cfcfcf]" />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="mt-4 h-[66px] w-full rounded-[3px] border border-[#6f6f6f] bg-[#2b2b2b] px-9 text-[22px] text-[#d9d9d9] outline-none placeholder:text-[#8f8f8f]"
    />
  </div>
);

const CardButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="h-[70px] w-[170px] rounded-[7px] bg-[#8a3d10] text-[24px] text-[#b6a49d]"
  >
    {label}
  </button>
);

/**
 * Smoke-test reproduction of the attached Figma frame: a dark, plugin-style
 * panel. Static and self-contained — no props, no state, no data.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#121212] px-10 py-7 font-primary text-[#d9d9d9]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-[26px] leading-none text-[#d9d9d9]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="flex items-center justify-center"
        >
          <FiSettings aria-hidden="true" size={26} className="text-[#cfcfcf]" />
        </button>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <FiChevronUp
          aria-hidden="true"
          size={22}
          className="shrink-0 text-[#cfcfcf]"
        />
        <span className="text-[24px] leading-none text-[#cfcfcf]">
          From entire frame to a singl...
        </span>
      </div>

      <div aria-hidden="true" className="h-[150px]" />

      <div className="flex items-center gap-3">
        <FiChevronUp
          aria-hidden="true"
          size={24}
          className="shrink-0 text-[#e0e0e0]"
        />
        <h2 className="font-primary-bold text-[28px] leading-none text-[#e0e0e0]">
          Add New Design
        </h2>
      </div>

      <Field
        id="testElem-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-10"
      />

      <Field
        id="testElem-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
        className="mt-5"
      />

      <div className="mt-9 flex gap-[35px]">
        <CardButton label="Awesome" />
        <CardButton label="Prepare" />
      </div>

      <h2 className="mt-20 font-primary-bold text-[28px] leading-none text-[#e0e0e0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}
