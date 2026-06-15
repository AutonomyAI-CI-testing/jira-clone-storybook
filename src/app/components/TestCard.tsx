import React from 'react';
import { IoSettingsOutline, IoChevronUp, IoInformationCircleOutline } from 'react-icons/io5';

/**
 * TestCard component displays a configuration panel for the "UI magician Agent".
 * This component follows the dark theme design specified in the project.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-4 w-full text-white space-y-4 rounded-lg">
      <HeaderSection />
      <SubtitleSection />

      {/* Spacer to match precise layout requirements */}
      <div className="h-4" aria-hidden="true" />

      <AddDesignSection />
      
      <div className="space-y-4">
        <InputField 
          id="personalAccessToken" 
          label="Personal Access Token" 
          placeholder="figd_xxxxxxxxxxxxxxxxxx" 
        />
        <InputField 
          id="designURL" 
          label="Design URL" 
          placeholder="https://www.figma.com/file/:" 
        />
      </div>

      <ActionButtons />

      <h3 className="font-bold text-base pt-4">Recent Breakdowns</h3>
    </div>
  );
};

const HeaderSection = () => (
  <div className="flex justify-between items-center">
    <h2 className="font-bold text-lg">UI magician Agent</h2>
    <IoSettingsOutline className="text-xl cursor-not-allowed" title="Settings" />
  </div>
);

const SubtitleSection = () => (
  <div className="flex items-center space-x-2">
    <IoChevronUp className="text-gray-400" />
    {/* Truncated text matches the design spec for limited width containers */}
    <span className="text-[#c06030] text-sm">From entire frame to a singl...</span>
  </div>
);

const AddDesignSection = () => (
  <div className="flex items-center space-x-2">
    <IoChevronUp className="text-white" />
    <h3 className="font-bold text-base">Add New Design</h3>
  </div>
);

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const InputField = ({ id, label, placeholder }: InputFieldProps) => (
  <div>
    <div className="flex items-center space-x-2 mb-1">
      <label htmlFor={id} className="text-white text-sm">{label}</label>
      <IoInformationCircleOutline className="text-gray-400 text-sm" />
    </div>
    <input
      id={id}
      type="text"
      readOnly // Explicitly marked as read-only per the current UI state requirements
      placeholder={placeholder}
      className="bg-[#1e1e1e] border border-[#444] text-gray-400 rounded px-3 py-2 w-full text-sm outline-none focus:border-[#666]"
    />
  </div>
);

const ActionButtons = () => (
  <div className="flex gap-4 pt-2">
    {/* Using specific hex values to match the design's unique brown/terracotta theme */}
    <button className="bg-[#a0522d] hover:bg-[#b0623d] transition-colors text-white rounded-lg px-6 py-3 flex-1 text-sm font-medium">
      Awesome
    </button>
    <button className="bg-[#a0522d] hover:bg-[#b0623d] transition-colors text-white rounded-lg px-6 py-3 flex-1 text-sm font-medium">
      Prepare
    </button>
  </div>
);
