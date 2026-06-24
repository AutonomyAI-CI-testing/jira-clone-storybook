
import React from 'react';
import { IoSettingsOutline, IoChevronUpOutline } from 'react-icons/io5';
import { AiOutlineInfoCircle } from 'react-icons/ai';

/**
 * TestCard - A smoke test component that replicates a specific UI design from Figma.
 * It features a header, collapsible sections, a form, and a footer.
 * 
 * Note: This component uses hardcoded colors and content to match a design reference
 * for pipeline validation.
 */
export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-6 rounded-lg text-white font-sans w-80 shadow-xl">
      <Header />
      
      {/* Collapsible status row */}
      <CollapsibleRow 
        icon={<IoChevronUpOutline className="mr-2 text-xl" />}
        text="From entire frame to a singl..."
        textColor="text-[#8b9291]"
        className="mb-6"
      />

      {/* Add New Design section trigger */}
      <CollapsibleRow 
        icon={<IoChevronUpOutline className="mr-2 text-xl" />}
        text="Add New Design"
        textColor="text-[#b2b2b1]"
        isBold
        className="mb-4"
      />

      <DesignForm />
      <ActionButtons />
      <Footer />
    </div>
  );
};

const Header = () => (
  <div className="flex justify-between items-center mb-4">
    <h2 className="font-bold text-[#b5b5b5] text-lg">UI magician Agent</h2>
    <IoSettingsOutline className="text-[#b5b5b5] text-xl cursor-not-allowed" />
  </div>
);

interface CollapsibleRowProps {
  icon: React.ReactNode;
  text: string;
  textColor: string;
  isBold?: boolean;
  className?: string;
}

const CollapsibleRow = ({ icon, text, textColor, isBold, className = "" }: CollapsibleRowProps) => (
  <div className={`flex items-center ${textColor} ${className}`}>
    {icon}
    <p className={`text-sm ${isBold ? "font-bold" : ""}`}>{text}</p>
  </div>
);

const DesignForm = () => (
  <div className="space-y-4 mb-6">
    <InputField 
      id="pat"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      labelColor="text-[#a4a4a3]"
      textColor="text-[#737470]"
    />
    <InputField 
      id="design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      labelColor="text-[#a3a3a2]"
      textColor="text-[#71726e]"
    />
  </div>
);

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  labelColor: string;
  textColor: string;
}

const InputField = ({ id, label, placeholder, labelColor, textColor }: InputFieldProps) => (
  <div>
    <div className="flex items-center mb-1">
      <label htmlFor={id} className={`${labelColor} text-sm font-medium mr-2 cursor-pointer`}>
        {label}
      </label>
      <AiOutlineInfoCircle className={`${labelColor} text-sm`} />
    </div>
    <input
      id={id}
      type="text"
      readOnly
      placeholder={placeholder}
      className={`w-full p-2 rounded bg-[#3c3c3c] ${textColor} text-sm border border-[#555] focus:outline-none cursor-default`}
    />
  </div>
);

const ActionButtons = () => (
  <div className="flex space-x-4 mb-6">
    <button className="flex-1 py-2 px-4 bg-[#a0522d] text-[#8c8078] font-semibold rounded-md text-sm cursor-not-allowed transition-colors hover:bg-[#8b4513]">
      Awesome
    </button>
    <button className="flex-1 py-2 px-4 bg-[#a0522d] text-[#8c8078] font-semibold rounded-md text-sm cursor-not-allowed transition-colors hover:bg-[#8b4513]">
      Prepare
    </button>
  </div>
);

const Footer = () => (
  <div className="border-t border-[#444] pt-4">
    <p className="font-bold text-[#b0b0b0] text-sm">Recent Breakdowns</p>
  </div>
);
