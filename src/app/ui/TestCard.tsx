
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const SECTION_TITLE_STYLES = "font-bold text-lg text-font";
const INPUT_STYLES = "w-full p-2 rounded-lg bg-background-input border border-border text-font text-sm";
const LABEL_STYLES = "flex items-center text-font-subtle text-sm mb-1";
const BUTTON_STYLES = "flex-1 bg-background-brand-bold hover:bg-background-brand-bold-hovered text-font-inverse font-bold py-3 px-4 rounded-lg text-sm transition-colors";

/**
 * TestCard is a smoke-test component that visually approximates a Figma design.
 * It uses Tailwind tokens for consistent styling with the rest of the application.
 * Root ID "testElem" is required for automated UI testing.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-elevation-surface-sunken text-font p-4 w-full">
      {/* Header row: Title and configuration access */}
      <div className="flex justify-between items-center mb-4">
        <h1 className={SECTION_TITLE_STYLES}>UI magician Agent</h1>
        <IoSettingsOutline className="text-icon text-xl" />
      </div>

      {/* Collapsed context row representing the current scope */}
      <div className="flex items-center mb-4">
        <FiChevronUp className="text-icon mr-2" />
        <p className="text-font-brand text-sm">From entire frame to a singl...</p>
      </div>

      {/* Section header for the design input area */}
      <div className="flex items-center mb-4 mt-6">
        <FiChevronUp className="text-icon mr-2" />
        <h2 className={SECTION_TITLE_STYLES}>Add New Design</h2>
      </div>

      {/* Input field for Figma authentication */}
      <div className="mb-4">
        <label htmlFor="pat" className={LABEL_STYLES}>
          Personal Access Token
          <AiOutlineInfoCircle className="text-font-subtle ml-1" />
        </label>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={INPUT_STYLES}
        />
      </div>

      {/* Input field for the Figma file to be processed */}
      <div className="mb-6">
        <label htmlFor="designUrl" className={LABEL_STYLES}>
          Design URL
          <AiOutlineInfoCircle className="text-font-subtle ml-1" />
        </label>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={INPUT_STYLES}
        />
      </div>

      {/* Primary action buttons */}
      <div className="flex gap-4 justify-between">
        <button className={BUTTON_STYLES}>
          Awesome
        </button>
        <button className={BUTTON_STYLES}>
          Prepare
        </button>
      </div>

      {/* Footer section for previous activity */}
      <h2 className={`${SECTION_TITLE_STYLES} mt-8 mb-2`}>Recent Breakdowns</h2>
    </div>
  );
};
