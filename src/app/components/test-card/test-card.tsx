import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FaChevronUp } from "react-icons/fa";
import cx from "classix";

// Design token colors - dark theme for the UI Magician Agent interface
const COLORS = {
  background: "black",
  headerText: "#b5b5b5",
  mutedText: "#8b9291",
  sectionText: "#b2b2b1",
  labelText: "#a4a4a3",
  labelTextAlt: "#a3a3a2",
  placeholderText: "#737470",
  inputBorder: "#71726e",
  buttonBg: "#9d5e3e",
  buttonBgHover: "#a96844",
  buttonBgActive: "#915938",
  buttonText: "#8c8078",
  recentText: "#b0b0b0",
  footerText: "#a3a3a2",
};

// Common spacing/layout values
const SPACING = {
  containerWidth: "w-80",
  sectionGap: "mb-12",
  fieldGap: "mb-8",
  fieldLabelGap: "mb-10",
  buttonGap: "mb-12",
  footerGap: "mt-12",
};

// Reusable input field styles
const inputClassNames = cx(
  "w-full border bg-black px-4 py-4",
  "text-[12px] font-semibold",
  "rounded-sm",
  "focus:outline-none"
);

const inputStyle = {
  color: COLORS.inputBorder,
  borderColor: COLORS.inputBorder,
};

// Reusable button styles - shared between "Awesome" and "Prepare" buttons
const buttonClassNames = cx(
  "flex-1 rounded-sm px-6 py-4",
  "text-[13px] font-semibold",
  "transition-colors"
);

const buttonStyle = {
  backgroundColor: COLORS.buttonBg,
  color: COLORS.buttonText,
};

const handleButtonMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.currentTarget.style.backgroundColor = COLORS.buttonBgHover;
};

const handleButtonMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.currentTarget.style.backgroundColor = COLORS.buttonBg;
};

const handleButtonMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.currentTarget.style.backgroundColor = COLORS.buttonBgActive;
};

const handleButtonMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.currentTarget.style.backgroundColor = COLORS.buttonBgHover;
};

export const TestCard = () => {
  return (
    <div className={`${SPACING.containerWidth} bg-${COLORS.background} p-6`}>
      {/* Header with title and settings icon */}
      <div className={`${SPACING.sectionGap} flex items-center justify-between`}>
        <h1 className="text-2xl font-semibold" style={{ color: COLORS.headerText }}>
          UI magician Agent
        </h1>
        <AiOutlineSetting style={{ color: COLORS.headerText }} size={24} />
      </div>

      {/* From entire frame section - collapsed accordion item */}
      <div className={`${SPACING.sectionGap} flex items-center gap-3`}>
        <FaChevronUp style={{ color: COLORS.mutedText }} size={18} />
        <span className="text-[13px] font-semibold" style={{ color: COLORS.mutedText }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section - collapsed accordion item */}
      <div className={`${SPACING.sectionGap} flex items-center gap-3`}>
        <FaChevronUp style={{ color: COLORS.sectionText }} size={18} />
        <span className="text-[15px] font-semibold" style={{ color: COLORS.sectionText }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token input field with info icon */}
      <div className={SPACING.fieldGap}>
        <div className="mb-3 flex items-center gap-2">
          <label htmlFor="token" className="text-[13px] font-semibold" style={{ color: COLORS.labelText }}>
            Personal Access Token
          </label>
          <AiOutlineInfoCircle style={{ color: COLORS.labelText }} size={20} />
        </div>
        <input
          id="token"
          type="password"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={inputClassNames}
          style={inputStyle}
        />
      </div>

      {/* Design URL input field with info icon */}
      <div className={SPACING.fieldLabelGap}>
        <div className="mb-3 flex items-center gap-2">
          <label htmlFor="url" className="text-[13px] font-semibold" style={{ color: COLORS.labelTextAlt }}>
            Design URL
          </label>
          <AiOutlineInfoCircle style={{ color: COLORS.labelTextAlt }} size={20} />
        </div>
        <input
          id="url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={inputClassNames}
          style={inputStyle}
        />
      </div>

      {/* Action buttons - both buttons share the same styling */}
      <div className={`${SPACING.buttonGap} flex gap-4`}>
        <button
          className={buttonClassNames}
          style={buttonStyle}
          onMouseEnter={handleButtonMouseEnter}
          onMouseLeave={handleButtonMouseLeave}
          onMouseDown={handleButtonMouseDown}
          onMouseUp={handleButtonMouseUp}
        >
          Awesome
        </button>
        <button
          className={buttonClassNames}
          style={buttonStyle}
          onMouseEnter={handleButtonMouseEnter}
          onMouseLeave={handleButtonMouseLeave}
          onMouseDown={handleButtonMouseDown}
          onMouseUp={handleButtonMouseUp}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section header */}
      <div>
        <h2 className="text-[15px] font-semibold" style={{ color: COLORS.recentText }}>
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer with copyright and legal attribution */}
      <div className={`${SPACING.footerGap} border-t border-gray-300 pt-3 text-center`}>
        <p className="text-[13px]" style={{ color: COLORS.footerText }}>© AutonomyAI</p>
      </div>
    </div>
  );
};
