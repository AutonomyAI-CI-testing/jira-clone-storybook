
import React from 'react';
import { BsGear, BsInfoCircle, BsChevronUp } from 'react-icons/bs';

/**
 * UI Magician Agent Card
 * 
 * A smoke test component that visually approximates a Figma integration panel.
 * It is self-contained and used to validate core styling and layout capabilities.
 */
export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] rounded-lg p-6 max-w-sm mx-auto my-10 shadow-xl">
      <Header />
      <StatusRow />
      
      <div className="border-t border-gray-700 my-4" aria-hidden="true" />

      <section aria-labelledby="add-new-design-title">
        <h3 id="add-new-design-title" className="text-white text-lg font-bold flex items-center mb-4">
          <BsChevronUp className="text-base mr-2" aria-hidden="true" />
          Add New Design
        </h3>
        
        <InputField 
          id="pat"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />

        <InputField 
          id="design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />

        <div className="flex justify-between gap-4 mb-8">
          <ActionButton label="Awesome" />
          <ActionButton label="Prepare" />
        </div>
      </section>

      <footer className="mt-auto">
        <h3 className="text-white text-lg font-bold">Recent Breakdowns</h3>
      </footer>
    </div>
  );
};

const Header = () => (
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-white text-xl font-bold">UI magician Agent</h2>
    <BsGear className="text-gray-400 text-xl cursor-not-allowed" title="Settings" />
  </div>
);

const StatusRow = () => (
  <div className="flex items-center text-[#c1622f] mb-6">
    <BsChevronUp className="text-lg mr-2" aria-hidden="true" />
    <span className="text-sm">From entire frame to a singl...</span>
  </div>
);

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const InputField = ({ id, label, placeholder }: InputFieldProps) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-gray-300 text-sm font-bold mb-2 flex items-center">
      {label}
      <BsInfoCircle className="text-gray-500 text-xs ml-1 cursor-help" />
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="bg-[#3a3a3a] text-gray-300 placeholder-gray-500 border border-gray-600 rounded-md w-full p-2 focus:border-[#c1622f] focus:outline-none transition-colors"
    />
  </div>
);

const ActionButton = ({ label }: { label: string }) => (
  <button className="bg-[#c1622f] hover:bg-[#a05126] text-white font-bold py-2 px-4 rounded-lg flex-1 transition-colors">
    {label}
  </button>
);
