import React from 'react';
import { IoSettingsOutline, IoChevronUp, IoInformationCircleOutline } from 'react-icons/io5';

/**
 * TestCard component displays the "UI magician Agent" interface.
 * It includes an "Add New Design" form and a list of "Recent Breakdowns".
 */
export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#1a1a1a] p-6 text-white overflow-auto h-full">
      <Header />
      <Subtitle />
      <AddNewDesignSection />
      <RecentBreakdowns />
    </div>
  );
};

const Header = () => (
  <div className="flex justify-between items-center mb-4">
    <h1 className="text-xl font-bold">UI magician Agent</h1>
    <IoSettingsOutline className="text-xl px-0" />
  </div>
);

const Subtitle = () => (
  <div className="flex items-center text-amber-600 mb-6">
    <IoChevronUp className="text-lg mr-1 flex-shrink-0" />
    <span className="text-sm truncate">From entire frame to a singl...</span>
  </div>
);

const AddNewDesignSection = () => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-4 flex items-center">
        <IoChevronUp className="text-md mr-2" />
        Add New Design
      </h2>
      
      <InputField 
        id="pat" 
        label="Personal Access Token" 
        placeholder="figd_xxxxxxxxxxxxxxxxx" 
      />

      <InputField 
        id="designUrl" 
        label="Design URL" 
        placeholder="https://www.figma.com/file/:" 
        className="mb-6"
      />

      <ActionButtons />
    </div>
  );
};

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}

/**
 * Reusable input field with an information icon.
 */
const InputField = ({ id, label, placeholder, className = "mb-4" }: InputFieldProps) => (
  <div className={className}>
    <label htmlFor={id} className="block text-sm font-medium mb-2 flex items-center">
      {label}
      <IoInformationCircleOutline className="ml-1 text-gray-500 cursor-help" />
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="w-full p-2 rounded-md bg-[#2a2a2a] border border-gray-700 text-white placeholder-gray-500 outline-none focus:border-amber-700 transition-colors"
    />
  </div>
);

const ActionButtons = () => (
  <div className="flex space-x-4 mb-6">
    <button className="bg-amber-700 hover:bg-amber-600 text-white rounded-lg px-6 py-2 flex-1 transition-colors">
      Awesome
    </button>
    <button className="bg-amber-700 hover:bg-amber-600 text-white rounded-lg px-6 py-2 flex-1 transition-colors">
      Prepare
    </button>
  </div>
);

const RecentBreakdowns = () => (
  <div>
    <h2 className="text-lg font-bold">Recent Breakdowns</h2>
  </div>
);
