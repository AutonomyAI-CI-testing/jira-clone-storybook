import React from "react";
import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

// Color and spacing constants to centralize design tokens
const COLORS = {
  background: "#161616",
  text: "#b5b5b5",
  textSecondary: "#8b9291",
  border: "#333",
  buttonPrimary: "#a0522d",
  buttonHover: "#8b4513",
  focusBorder: "#3b82f6", // blue-500
};

const SPACING = {
  headerMargin: "mb-4",
  subtitleMargin: "mb-6",
  sectionMargin: "mb-6 mt-8",
  sectionTitleMargin: "mb-3",
  inputSpacing: "space-y-4",
  buttonSpacing: "space-x-4",
  buttonMargin: "mt-6",
  footerMargin: "mt-10",
};

// Reusable form input component to reduce duplication
interface FormInputProps {
  id: string;
  label: string;
  placeholder: string;
}

const FormInput: React.FC<FormInputProps> = ({ id, label, placeholder }) => (
  <div>
    <label htmlFor={id} className="mb-1 flex items-center text-sm font-medium">
      {label}
      <FiInfo className="ml-2 text-xs" />
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className={`w-full rounded border bg-transparent p-2 border-[${COLORS.border}] focus:outline-none focus:border-[${COLORS.focusBorder}] text-sm`}
      style={{
        borderColor: COLORS.border,
      }}
      onFocus={(e) => {
        e.currentTarget.style.borderColor = COLORS.focusBorder;
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor = COLORS.border;
      }}
    />
  </div>
);

const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className={`bg-[${COLORS.background}] p-6 text-[${COLORS.text}] font-sans min-h-screen`}
      style={{ backgroundColor: COLORS.background, color: COLORS.text }}
    >
      {/* Header: Title and settings icon */}
      <div
        className={`flex items-center justify-between ${SPACING.headerMargin}`}
      >
        <h1 className="text-xl font-semibold">UI magician Agent</h1>
        <FiSettings className="text-xl" />
      </div>

      {/* Subtitle: Descriptive text with chevron */}
      <div
        className={`flex items-center ${SPACING.subtitleMargin}`}
        style={{ color: COLORS.textSecondary }}
      >
        <FiChevronUp className="mr-2" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section: Form inputs for Figma token and design URL */}
      <div className={SPACING.sectionMargin}>
        <div
          className={`flex items-center text-lg font-semibold ${SPACING.sectionTitleMargin}`}
        >
          <FiChevronUp className="mr-2" />
          <span>Add New Design</span>
        </div>
        <div className={SPACING.inputSpacing}>
          <FormInput
            id="accessToken"
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
          />
          <FormInput
            id="designURL"
            label="Design URL"
            placeholder="https://www.figma.com/file/"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className={`flex ${SPACING.buttonSpacing} ${SPACING.buttonMargin}`}>
        <button
          className="flex-1 rounded px-4 py-2 font-medium transition-colors"
          style={{
            backgroundColor: COLORS.buttonPrimary,
            color: "white",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = COLORS.buttonHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = COLORS.buttonPrimary;
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded px-4 py-2 font-medium transition-colors"
          style={{
            backgroundColor: COLORS.buttonPrimary,
            color: "white",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = COLORS.buttonHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = COLORS.buttonPrimary;
          }}
        >
          Prepare
        </button>
      </div>

      {/* Footer: Recent breakdowns section header */}
      <div className={SPACING.footerMargin}>
        <h2 className="text-lg font-semibold">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
