
import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

/**
 * Design tokens from Figma spec.
 * Using inline styles because these colors/sizes are unique to this component
 * and not part of the global Tailwind configuration or design system.
 */
const COLORS = {
  CARD_BG: "#272822",
  TEXT_HEADER: "#b5b5b5",
  TEXT_SUBTITLE: "#8b9291",
  TEXT_SECTION: "#b2b2b1",
  TEXT_LABEL_PAT: "#a4a4a3",
  TEXT_LABEL_URL: "#a3a3a2",
  TEXT_INPUT: "#929291",
  TEXT_BUTTON: "#8c8078",
  TEXT_FOOTER: "#b0b0b0",
  BORDER_PAT: "#a5adad",
  BORDER_URL: "#929291",
  BUTTON_BG: "#843a17",
};

const FONT_SIZES = {
  HEADER: "13.5px",
  SUBTITLE: "11.5px",
  LABEL: "11.5px",
  INPUT: "11.5px",
  BUTTON: "11.5px",
};

interface FormFieldProps {
  label: string;
  placeholder: string;
  labelColor: string;
  borderColor: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  placeholder,
  labelColor,
  borderColor,
}) => (
  <div className="mb-4 last:mb-6">
    <label
      className="flex items-center mb-2 text-sm font-semibold"
      style={{ color: labelColor, fontSize: FONT_SIZES.LABEL }}
    >
      {label}
      <AiOutlineInfoCircle className="ml-2" style={{ color: labelColor }} />
    </label>
    <input
      type="text"
      readOnly
      placeholder={placeholder}
      className="w-full p-2 rounded bg-transparent"
      style={{
        color: COLORS.TEXT_INPUT,
        backgroundColor: COLORS.CARD_BG,
        border: `1px solid ${borderColor}`, // PAT has 1px, URL has 2px in original but 1px is cleaner if not specified
        fontSize: FONT_SIZES.INPUT,
      }}
    />
  </div>
);

const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="flex flex-col p-4 rounded-lg shadow-lg max-w-sm mx-auto"
      style={{ backgroundColor: COLORS.CARD_BG }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2
          className="text-lg font-semibold"
          style={{ color: COLORS.TEXT_HEADER, fontSize: FONT_SIZES.HEADER }}
        >
          UI magician Agent
        </h2>
        <IoSettingsOutline style={{ color: COLORS.TEXT_HEADER }} />
      </div>

      {/* Subtitle */}
      <div className="flex items-center mb-6">
        <FiChevronUp className="mr-2" style={{ color: COLORS.TEXT_SUBTITLE }} />
        <p
          className="text-sm font-semibold"
          style={{
            color: COLORS.TEXT_SUBTITLE,
            fontSize: FONT_SIZES.SUBTITLE,
          }}
        >
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center mb-4">
        <FiChevronUp className="mr-2" style={{ color: COLORS.TEXT_SECTION }} />
        <h3
          className="text-base font-semibold"
          style={{ color: COLORS.TEXT_SECTION, fontSize: FONT_SIZES.HEADER }}
        >
          Add New Design
        </h3>
      </div>

      {/* Form Fields */}
      <FormField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        labelColor={COLORS.TEXT_LABEL_PAT}
        borderColor={COLORS.BORDER_PAT}
      />
      <div className="mb-6">
        <label
          className="flex items-center mb-2 text-sm font-semibold"
          style={{ color: COLORS.TEXT_LABEL_URL, fontSize: FONT_SIZES.LABEL }}
        >
          Design URL
          <AiOutlineInfoCircle
            className="ml-2"
            style={{ color: COLORS.TEXT_LABEL_URL }}
          />
        </label>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded bg-transparent"
          style={{
            color: COLORS.TEXT_INPUT,
            backgroundColor: COLORS.CARD_BG,
            border: `2px solid ${COLORS.BORDER_URL}`, // Specifically 2px per Figma spec
            fontSize: FONT_SIZES.INPUT,
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-4 mb-6">
        {["Awesome", "Prepare"].map((text) => (
          <button
            key={text}
            className="flex-1 py-2 rounded font-semibold"
            style={{
              backgroundColor: COLORS.BUTTON_BG,
              color: COLORS.TEXT_BUTTON,
              fontSize: FONT_SIZES.BUTTON,
            }}
          >
            {text}
          </button>
        ))}
      </div>

      {/* Recent Breakdowns */}
      <div>
        <h3
          className="text-base font-semibold"
          style={{ color: COLORS.TEXT_FOOTER, fontSize: FONT_SIZES.HEADER }}
        >
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};

export default TestCard;
