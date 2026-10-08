import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test component — a static reproduction of the attached Figma panel.
 * Self-contained: no props, no state, no behaviour.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-[508px] flex-col bg-[#1a1a1a] px-10 py-8 font-primary text-[#c9c9c9]"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <span className="text-xl font-bold text-[#e8e8e8]">
          UI magician Agent
        </span>
        <FiSettings className="mt-0.5 shrink-0 text-[26px] text-[#b4b4b4]" />
      </div>

      {/* Collapsed frame row */}
      <div className="mt-8 flex items-center gap-2">
        <FiChevronUp className="shrink-0 text-[20px] text-[#a8a8a8]" />
        <span className="truncate text-[17px] text-[#a8a8a8]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section heading */}
      <div className="mt-32 flex items-center gap-2">
        <FiChevronUp className="shrink-0 text-[22px] text-[#d4d4d4]" />
        <span className="text-2xl font-bold text-[#e8e8e8]">
          Add New Design
        </span>
      </div>

      <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxx" />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      {/* Actions */}
      <div className="mt-8 flex gap-8">
        <button
          type="button"
          className="flex-1 rounded-[10px] bg-[#9c3d14] py-5 text-[20px] text-[#b9aea6]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-[10px] bg-[#9c3d14] py-5 text-[20px] text-[#b9aea6]"
        >
          Prepare
        </button>
      </div>

      {/* Section heading */}
      <div className="mt-20 text-2xl font-bold text-[#dcdcdc]">
        Recent Breakdowns
      </div>
    </div>
  );
};

const Field = ({ label, placeholder }: FieldProps) => {
  return (
    <label className="mt-8 block">
      <span className="flex items-center gap-3">
        <span className="text-[17px] text-[#d0d0d0]">{label}</span>
        <FiInfo className="text-[20px] text-[#c0c0c0]" />
      </span>
      <input
        type="text"
        aria-label={label}
        placeholder={placeholder}
        className="mt-3 w-full rounded-sm border border-[#8f8f8f] bg-[#2b2b2b] px-5 py-5 text-[17px] text-[#9a9a9a] outline-none placeholder:text-[#8f8f8f]"
      />
    </label>
  );
};

interface FieldProps {
  label: string;
  placeholder: string;
}

export default TestCard;
