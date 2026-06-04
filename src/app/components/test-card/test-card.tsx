import { AiFillSetting } from "react-icons/ai";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";

// Tailwind class names for consistent styling throughout the component
const CONTAINER_CLASSES = "w-full bg-black p-5";
const HEADER_CLASSES = "mb-5 flex items-center justify-between";
const HEADER_TITLE_CLASSES = "text-gray-300 font-semibold";
const ICON_CLASSES_SMALL = "text-gray-500 h-3 w-3";
const ICON_CLASSES_HEADER = "text-gray-400 h-4 w-4";
const SECTION_HEADER_CLASSES = "text-gray-400 text-xs font-semibold";
const SECTION_DIVIDER_CLASSES =
  "border-gray-800 mb-6 flex items-center justify-between border-b pb-3";
const SECTION_CLASSES = "mb-6 flex items-center justify-between";
const LABEL_CLASSES = "text-gray-500 text-xs font-semibold";
const INPUT_CLASSES =
  "border-gray-700 bg-gray-900 text-gray-500 placeholder-gray-600 w-full border px-3 py-2 text-xs font-semibold focus:outline-none";
const BUTTON_CLASSES =
  "border-orange-700 bg-orange-700 text-gray-700 hover:bg-orange-600 flex-1 border px-4 py-2 text-xs font-semibold focus:outline-none";
const BUTTON_CONTAINER_CLASSES = "mb-8 flex gap-3";
const RECENT_SECTION_CLASSES = "text-gray-400 text-xs font-semibold";

// Content strings
const HEADER_TITLE = "UI magician Agent";
const COLLAPSIBLE_TEXT = "From entire frame to a singl...";
const ADD_DESIGN_TEXT = "Add New Design";
const TOKEN_LABEL = "Personal Access Token";
const TOKEN_PLACEHOLDER = "figd_xxxxxxxxxxxxxxxxxx";
const URL_LABEL = "Design URL";
const URL_PLACEHOLDER = "https://www.figma.com/file/:";
const AWESOME_BUTTON_TEXT = "Awesome";
const PREPARE_BUTTON_TEXT = "Prepare";
const RECENT_BREAKDOWNS_TEXT = "Recent Breakdowns";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className={CONTAINER_CLASSES}>
      {/* Header with title and settings icon */}
      <div className={HEADER_CLASSES}>
        <h1 className={HEADER_TITLE_CLASSES}>{HEADER_TITLE}</h1>
        <AiFillSetting className={ICON_CLASSES_HEADER} />
      </div>

      {/* Collapsible section showing current frame/project name */}
      <div className={SECTION_DIVIDER_CLASSES}>
        <span className={SECTION_HEADER_CLASSES}>{COLLAPSIBLE_TEXT}</span>
        <RiArrowDropDownLine className={ICON_CLASSES_SMALL} />
      </div>

      {/* Add new design option */}
      <div className={SECTION_CLASSES}>
        <span className={SECTION_HEADER_CLASSES}>{ADD_DESIGN_TEXT}</span>
        <RiArrowDropDownLine className={ICON_CLASSES_SMALL} />
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-5">
        <div className="mb-2 flex items-center gap-2">
          <label className={LABEL_CLASSES}>{TOKEN_LABEL}</label>
          <HiQuestionMarkCircle className="text-gray-600 h-3 w-3" />
        </div>
        <input
          type="password"
          placeholder={TOKEN_PLACEHOLDER}
          className={INPUT_CLASSES}
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <label className={LABEL_CLASSES}>{URL_LABEL}</label>
          <HiQuestionMarkCircle className="text-gray-600 h-3 w-3" />
        </div>
        <input
          type="text"
          placeholder={URL_PLACEHOLDER}
          className={INPUT_CLASSES}
        />
      </div>

      {/* Action buttons for submitting the form */}
      <div className={BUTTON_CONTAINER_CLASSES}>
        <button className={BUTTON_CLASSES}>{AWESOME_BUTTON_TEXT}</button>
        <button className={BUTTON_CLASSES}>{PREPARE_BUTTON_TEXT}</button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className={RECENT_SECTION_CLASSES}>{RECENT_BREAKDOWNS_TEXT}</div>
    </div>
  );
};
