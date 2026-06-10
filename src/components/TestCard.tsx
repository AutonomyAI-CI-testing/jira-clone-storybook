
import React from 'react';
import { HiOutlineCog, HiChevronUp, HiInformationCircle } from 'react-icons/hi';

/**
 * TestCard component
 * 
 * A self-contained display component that replicates the "Add New Design" workflow panel.
 * It uses Figma-specific colors and layout as defined in the product requirements.
 */
export const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="p-4 bg-[#1e1e1e] text-white min-h-screen">
      <CardHeader />

      {/* Collapsible Row: Shows contextual information about the current scope */}
      <div className="flex items-center mb-6 pl-1">
        <HiChevronUp className="text-[#8b9291] mr-2" />
        <span className="text-sm text-[#8b9291]">From entire frame to a singl...</span>
      </div>

      <FormSection />

      {/* Recent Breakdowns Section Header */}
      <div className="pl-1">
        <h2 className="text-md text-[#b0b0b0] font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

const CardHeader: React.FC = () => (
  <div className="flex justify-between items-center mb-4">
    <h1 className="text-lg text-[#b5b5b5] font-semibold">UI magician Agent</h1>
    <HiOutlineCog className="text-xl text-[#b5b5b5]" />
  </div>
);

const FormSection: React.FC = () => (
  <div className="mb-6">
    {/* Section title with expand/collapse icon */}
    <div className="flex items-center mb-4">
      <HiChevronUp className="text-[#b2b2b1] mr-2" />
      <h2 className="text-md text-[#b2b2b1] font-bold">Add New Design</h2>
    </div>

    {/* Form Inputs: Indented within the section */}
    <div className="space-y-4 ml-6">
      <FormField
        id="accessToken"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        inputClassName="border border-[#a5adad]"
        labelTextColor="text-[#a4a4a3]"
        placeholderColor="placeholder-[#737470]"
      />

      <FormField
        id="designUrl"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        inputClassName="border-2 border-[#929291]"
        labelTextColor="text-[#a3a3a2]"
        placeholderColor="placeholder-[#71726e]"
      />

      {/* Action Buttons: Matches Figma primary CTA color */}
      <div className="flex justify-end space-x-2">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>
    </div>
  </div>
);

interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
  inputClassName?: string;
  labelTextColor: string;
  placeholderColor: string;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  placeholder,
  inputClassName,
  labelTextColor,
  placeholderColor,
}) => (
  <div className="mb-4">
    <label htmlFor={id} className={`flex items-center text-sm ${labelTextColor} mb-1`}>
      {label}
      <HiInformationCircle className={`ml-1 ${labelTextColor}`} />
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className={`w-full p-2 rounded bg-[#272822] text-[#b5b5b5] focus:outline-none ${placeholderColor} ${inputClassName}`}
    />
  </div>
);

const ActionButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button className="px-4 py-2 rounded bg-[#843a17] text-[#8c8078] font-semibold transition-opacity hover:opacity-90">
    {children}
  </button>
);

export default TestCard;
