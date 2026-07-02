
import React from 'react';
import { FaCog, FaInfoCircle, FaChevronUp } from 'react-icons/fa';

/**
 * Shared layout component for form fields (label + icon + input).
 */
interface FormFieldProps {
  label: string;
  placeholder: string;
  variant: 'pat' | 'url';
}

const FormField: React.FC<FormFieldProps> = ({ label, placeholder, variant }) => {
  const styles = variant === 'pat' 
    ? { label: 'text-[#a4a4a3]', border: 'border-[#929291]', placeholder: 'text-[#737470]' }
    : { label: 'text-[#a3a3a2]', border: 'border-[#a5adad]', placeholder: 'text-[#71726e]' };

  return (
    <>
      <div className="flex items-center gap-2 mt-2">
        <span className={`text-xs font-semibold ${styles.label}`}>{label}</span>
        <FaInfoCircle size={12} className={styles.label} />
      </div>
      <input
        placeholder={placeholder}
        className={`w-full bg-[#272822] border ${styles.border} rounded text-xs font-semibold ${styles.placeholder} placeholder:${styles.placeholder} px-3 py-2 mt-1 outline-none`}
      />
    </>
  );
};

/**
 * TestCard component visually representing the "UI Magician Agent" design panel.
 * It is a standalone component used for visual testing and review.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#1a1a1a] text-[#b5b5b5] p-5 w-[254px] min-h-[508px] flex flex-col gap-3 font-sans"
    >
      {/* Header Row: Branding and Settings */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-[#b5b5b5]">UI magician Agent</span>
        <FaCog className="text-[#b5b5b5]" size={16} />
      </div>

      {/* Description: Explains the scope of the magician agent */}
      <div className="flex items-center gap-2">
        <FaChevronUp size={8} className="text-[#8b9291]" />
        <span className="text-xs font-semibold text-[#8b9291]">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section: Form inputs for figma integration */}
      <div className="flex items-center gap-2 mt-8">
        <FaChevronUp size={10} className="text-[#b2b2b1]" />
        <span className="text-sm font-semibold text-[#b2b2b1]">Add New Design</span>
      </div>

      <FormField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        variant="pat"
      />

      <FormField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        variant="url"
      />

      {/* Actions: Primary operations for the current design context */}
      <div className="flex gap-3 mt-6 justify-center">
        <button
          className="flex-1 bg-[#843a17] text-[#8c8078] text-xs font-semibold py-2.5 rounded hover:opacity-90 transition-opacity"
        >
          Awesome
        </button>
        <button
          className="flex-1 bg-[#843a17] text-[#8c8078] text-xs font-semibold py-2.5 rounded hover:opacity-90 transition-opacity"
        >
          Prepare
        </button>
      </div>

      {/* History: Quick access to previous work */}
      <div className="mt-6">
        <span className="text-sm font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

