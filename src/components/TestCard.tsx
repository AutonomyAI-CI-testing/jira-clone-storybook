import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

/**
 * TestCard component is a self-contained smoke-test UI that replicates
 * the "UI magician Agent" panel. It uses hardcoded values and specific
 * hex colors to match the design reference precisely.
 */

interface InputFieldProps {
  label: string;
  placeholder: string;
}

const InputField = ({ label, placeholder }: InputFieldProps) => (
  <div className="mb-4">
    <div className="flex items-center gap-1.5 mb-1.5">
      <span className="text-xs font-medium text-[#a3a3a2]">{label}</span>
      <AiOutlineInfoCircle className="text-[#a3a3a2] text-[12px]" />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded px-3 py-2 text-xs outline-none bg-[#2a2a2a] border border-[#555] text-[#737470] placeholder-[#737470]"
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="p-5 font-sans bg-[#1a1a1a] w-[254px] min-h-[508px]"
    >
      {/* Header row: Agent identity and settings */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-semibold text-sm text-[#b5b5b5]">
          UI magician Agent
        </span>
        <IoSettingsOutline className="text-[#b5b5b5] text-[20px]" />
      </div>

      {/* Subtitle row: Current scope description */}
      <div className="flex items-center gap-2 mb-8">
        <FiChevronUp className="text-[#8b9291]" />
        <span className="text-xs font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer for visual rhythm */}
      <div className="mb-6" />

      {/* Section Header: Design addition controls */}
      <div className="flex items-center gap-2 mb-5">
        <FiChevronUp className="text-[#b2b2b1]" />
        <span className="font-semibold text-sm text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Input fields for design ingestion */}
      <InputField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      
      <InputField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      {/* Action buttons: Terracotta theme used for primary actions */}
      <div className="flex gap-3 mt-2 mb-8">
        <button className="flex-1 text-xs font-semibold py-2.5 rounded-lg bg-[#8B4A2F] text-white hover:opacity-90 transition-opacity">
          Awesome
        </button>
        <button className="flex-1 text-xs font-semibold py-2.5 rounded-lg bg-[#8B4A2F] text-white hover:opacity-90 transition-opacity">
          Prepare
        </button>
      </div>

      {/* Footer: Historical context */}
      <h2 className="font-semibold text-sm mt-4 text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
