import React from 'react';
import { IoSettingsOutline, IoChevronUp } from 'react-icons/io5';
import { AiOutlineInfoCircle } from 'react-icons/ai';

// Color palette for the dark-themed UI magician agent card
const COLORS = {
  background: '#2a2a2a',
  headerText: '#b5b5b5',
  subtitleText: '#8b9291',
  sectionHeaderText: '#b2b2b1',
  labelText: '#a4a4a3',
  inputBackground: '#272822',
  inputBorderPrimary: '#a5adad',
  inputBorderSecondary: '#929291',
  inputText: '#737470',
  inputTextSecondary: '#71726e',
  buttonBackground: '#843a17',
  buttonText: '#8c8078',
  footerText: '#b0b0b0',
};

const FONT_FAMILY = "['Inter',sans-serif]";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className={`flex flex-col gap-4 p-5 w-[254px] rounded-lg`} style={{ backgroundColor: COLORS.background, fontFamily: FONT_FAMILY }}>
      {/* Header: Agent name with settings icon */}
      <div className="flex items-center justify-between">
        <span className="font-semibold text-[13.5px]" style={{ color: COLORS.headerText }}>UI magician Agent</span>
        <IoSettingsOutline size={14} style={{ color: COLORS.headerText }} />
      </div>

      {/* Subtitle: Agent capability description */}
      <div className="flex items-center gap-2">
        <IoChevronUp size={10} style={{ color: COLORS.subtitleText }} />
        <span className="font-semibold text-[11.5px]" style={{ color: COLORS.subtitleText }}>From entire frame to a singl...</span>
      </div>

      {/* Section header: Form title for adding new design */}
      <div className="flex items-center gap-2 mt-4">
        <IoChevronUp size={12} style={{ color: COLORS.sectionHeaderText }} />
        <span className="font-semibold text-[13.5px]" style={{ color: COLORS.sectionHeaderText }}>Add New Design</span>
      </div>

      {/* Form field: Personal Access Token input */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-[11.5px]" style={{ color: COLORS.labelText }}>Personal Access Token</span>
          <AiOutlineInfoCircle size={14} style={{ color: COLORS.labelText }} />
        </div>
        <input
          type="text"
          className="w-full border px-3 py-2 font-semibold text-[11.5px] rounded"
          style={{
            backgroundColor: COLORS.inputBackground,
            borderColor: COLORS.inputBorderPrimary,
            color: COLORS.inputText,
          }}
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
      </div>

      {/* Form field: Design URL input */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-[11.5px]" style={{ color: COLORS.labelText }}>Design URL</span>
          <AiOutlineInfoCircle size={14} style={{ color: COLORS.labelText }} />
        </div>
        <input
          type="text"
          className="w-full border px-3 py-2 font-semibold text-[11.5px] rounded"
          style={{
            backgroundColor: COLORS.inputBackground,
            borderColor: COLORS.inputBorderSecondary,
            color: COLORS.inputTextSecondary,
          }}
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Action buttons: Design submission controls */}
      <div className="flex gap-3 mt-2">
        <button
          className="flex-1 rounded px-4 py-2 font-semibold text-[11.5px] transition-opacity hover:opacity-80"
          style={{ backgroundColor: COLORS.buttonBackground, color: COLORS.buttonText }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded px-4 py-2 font-semibold text-[11.5px] transition-opacity hover:opacity-80"
          style={{ backgroundColor: COLORS.buttonBackground, color: COLORS.buttonText }}
        >
          Prepare
        </button>
      </div>

      {/* Footer section: Recent activity */}
      <div className="mt-4">
        <span className="font-semibold text-[13.5px]" style={{ color: COLORS.footerText }}>Recent Breakdowns</span>
      </div>
    </div>
  );
}; 