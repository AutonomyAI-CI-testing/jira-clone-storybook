
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiChevronUp } from 'react-icons/bi';

/**
 * A self-contained smoke-test component that reproduces a Figma design panel.
 * Used to verify Tailwind arbitrary values and rendering in Storybook.
 */
export function TestCard() {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-5 w-[254px] font-semibold text-[#b5b5b5] rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-[13.5px] font-semibold">UI magician Agent</span>
        <IoSettingsOutline className="h-5 w-5" />
      </div>

      {/* Collapsible Row - Muted text with caret */}
      <div className="flex items-center mb-4 text-[#8b9291] text-[11.5px]">
        <BiChevronUp className="h-4 w-4 mr-1" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Section Header - Add New Design */}
      <div className="flex items-center mb-4 text-[13.5px] text-[#b2b2b1] font-semibold">
        <BiChevronUp className="h-4 w-4 mr-1" />
        <span>Add New Design</span>
      </div>

      {/* Form Area */}
      <div className="flex flex-col gap-3 mb-5">
        <FormInput
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          labelColor="text-[#a4a4a3]"
          placeholderColor="placeholder:text-[#737470]"
        />
        <FormInput
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          labelColor="text-[#a3a3a2]"
          placeholderColor="placeholder:text-[#71726e]"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-5">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Footer */}
      <div className="text-[13.5px] text-[#b0b0b0] font-semibold">
        Recent Breakdowns
      </div>
    </div>
  );
}

/**
 * Internal helper for consistent form input styling.
 */
function FormInput({ 
  label, 
  placeholder, 
  labelColor, 
  placeholderColor 
}: { 
  label: string; 
  placeholder: string; 
  labelColor: string;
  placeholderColor: string;
}) {
  return (
    <div>
      <div className={`flex items-center mb-1 text-[11.5px] ${labelColor}`}>
        <span>{label}</span>
        <AiOutlineInfoCircle className="h-3 w-3 ml-1" />
      </div>
      <input
        type="text"
        readOnly
        placeholder={placeholder}
        className={`bg-[#1e1e1e] border border-[#444] text-[#888] rounded p-2 text-[11.5px] w-full ${placeholderColor}`}
      />
    </div>
  );
}

/**
 * Internal helper for the two primary action buttons.
 */
function ActionButton({ label }: { label: string }) {
  return (
    <button className="flex-1 rounded-lg bg-[#7a3e20] py-2 px-4 text-[#8c8078] text-[11.5px] font-semibold">
      {label}
    </button>
  );
}
