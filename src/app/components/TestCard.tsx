
import React from 'react';
import { IoSettingsOutline, IoChevronUp } from 'react-icons/io5';
import { AiOutlineInfoCircle } from 'react-icons/ai';

// Design constants to match the reference UI magician Agent panel.
// These specific hex codes are intended to match the dark theme appearance and are safelisted in tailwind.config.js.
const COLORS = {
  background: 'bg-[#272822]',
  headerText: 'text-[#b5b5b5]',
  subtleText: 'text-[#8b9291]',
  headingText: 'text-[#b2b2b1]',
  labelText: 'text-[#a4a4a3]',
  placeholderText: 'placeholder-[#737470]',
  buttonBg: 'bg-[#843a17]',
  buttonText: 'text-[#8c8078]',
  borderDefault: 'border-[#929291]',
  borderFocused: 'border-[#a5adad]',
  recentHeaderText: 'text-[#b0b0b0]',
};

const InputField = ({ label, id, placeholder, borderClass }: { label: string, id: string, placeholder: string, borderClass: string }) => (
  <div className="space-y-1">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className={COLORS.labelText}>
        {label}
      </label>
      <AiOutlineInfoCircle className={COLORS.labelText} />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={`w-full p-2 border ${COLORS.background} ${borderClass} ${COLORS.placeholderText} focus:outline-none`}
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div 
      id="testElem" 
      className={`w-[254px] p-4 space-y-4 text-[11.5px] text-left ${COLORS.background}`}
    >
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <h2 className={`font-semibold text-[13.5px] ${COLORS.headerText}`}>
          UI magician Agent
        </h2>
        <IoSettingsOutline className={COLORS.subtleText} />
      </div>

      {/* Collapsed Section Row */}
      <div className="flex items-center gap-2">
        <IoChevronUp className={COLORS.subtleText} />
        <span className={COLORS.subtleText}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2">
        <IoChevronUp className={COLORS.headingText} />
        <h3 className={`font-semibold text-[13.5px] ${COLORS.headingText}`}>
          Add New Design
        </h3>
      </div>

      <InputField 
        id="accessToken" 
        label="Personal Access Token" 
        placeholder="figd_xxxxxxxxxxxxxxxxxx" 
        borderClass={COLORS.borderDefault} 
      />

      <InputField 
        id="designUrl" 
        label="Design URL" 
        placeholder="https://www.figma.com/file/:" 
        borderClass={COLORS.borderFocused} 
      />

      {/* Action Buttons */}
      <div className="flex gap-3 justify-start">
        <button 
          className={`font-semibold rounded px-4 py-2 text-[11.5px] hover:opacity-90 transition-opacity ${COLORS.buttonBg} ${COLORS.buttonText}`}
        >
          Awesome
        </button>
        <button 
          className={`font-semibold rounded px-4 py-2 text-[11.5px] hover:opacity-90 transition-opacity ${COLORS.buttonBg} ${COLORS.buttonText}`}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <h3 className={`font-semibold text-[13.5px] ${COLORS.recentHeaderText}`}>
        Recent Breakdowns
      </h3>
    </div>
  );
};
