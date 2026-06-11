
import React from 'react';
import { RiSettings3Line, RiInformationLine, RiArrowUpSLine } from 'react-icons/ri';

/**
 * Constants representing the exact color palette defined in the Figma specification.
 * These are kept as constants to ensure consistency and easier maintainability
 * while strictly adhering to the design requirements.
 */
const COLORS = {
  CARD_BG: '#181813',
  HEADING: '#e2e2e2',
  TEXT_PRIMARY: '#b5b5b5',
  TEXT_MUTED: '#888888',
  BORDER: '#444444',
  ACCENT_BG: '#843a17',
  ACCENT_HOVER: '#9a451d',
} as const;

const TestCard: React.FC = () => {
  // Shared styles for the input fields to ensure consistency
  const inputClassName = `w-full p-4 bg-[${COLORS.CARD_BG}] border border-[${COLORS.BORDER}] rounded text-[${COLORS.TEXT_MUTED}] text-[15px] focus:outline-none`;

  // Shared styles for the action buttons
  const buttonClassName = `flex-1 bg-[${COLORS.ACCENT_BG}] hover:bg-[${COLORS.ACCENT_HOVER}] rounded-lg text-[#ffffff] opacity-70 text-[15px] font-bold py-3.5 transition-colors`;

  return (
    <div
      id="testElem"
      className="p-8 text-[#b5b5b5] font-['Inter'] w-[340px] flex flex-col"
      style={{ backgroundColor: COLORS.CARD_BG }}
    >
      {/* Header Section: Main title and configuration access */}
      <div className="flex justify-between items-center mb-12">
        <h1 className="font-semibold text-[22px]" style={{ color: COLORS.HEADING }}>
          UI magician Agent
        </h1>
        <RiSettings3Line size={24} style={{ color: COLORS.HEADING }} />
      </div>

      {/* Subtitle Section: Contextual description of the current tool scope */}
      <div className="flex items-center space-x-4 mb-14">
        {/* rotate-0 and specific sizing to match the chevron placement in the design */}
        <RiArrowUpSLine size={22} className="rotate-0" style={{ color: COLORS.TEXT_PRIMARY }} />
        <p className="text-[16px] font-medium" style={{ color: COLORS.TEXT_PRIMARY }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section: Collapsible trigger for adding new Figma design resources */}
      <div className="flex items-center space-x-4 mb-12 mt-4">
        <RiArrowUpSLine size={22} className="rotate-0" style={{ color: COLORS.HEADING }} />
        <h2 className="text-[18px] font-semibold" style={{ color: COLORS.HEADING }}>
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token Field: Required for authenticaing with the Figma API */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <label htmlFor="pat" className="text-[15px] font-medium" style={{ color: COLORS.TEXT_PRIMARY }}>
            Personal Access Token
          </label>
          <RiInformationLine size={18} style={{ color: COLORS.TEXT_PRIMARY }} />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={inputClassName}
        />
      </div>

      {/* Design URL Field: Target Figma file link to be processed by the agent */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-3">
          <label htmlFor="designUrl" className="text-[15px] font-medium" style={{ color: COLORS.TEXT_PRIMARY }}>
            Design URL
          </label>
          <RiInformationLine size={18} style={{ color: COLORS.TEXT_PRIMARY }} />
        </div>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={inputClassName}
        />
      </div>

      {/* Action Buttons: Primary interactions for beginning the design breakdown process */}
      <div className="flex space-x-6 mb-24">
        <button className={buttonClassName}>Awesome</button>
        <button className={buttonClassName}>Prepare</button>
      </div>

      {/* Recent Breakdowns Heading: Footer section for historical activity */}
      <div className="mt-8">
        <h2 className="text-[18px] font-bold" style={{ color: COLORS.HEADING }}>
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};

export default TestCard;
