import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

// Typography styles - extracted for consistency
const TYPOGRAPHY = {
  headerLabel: {
    className: "text-[#b5b5b5] font-semibold leading-[16.34px]",
    style: { fontSize: "13.5px", fontFamily: "Inter, sans-serif" },
  },
  breadcrumb: {
    className: "text-[#8b9291] font-semibold leading-[13.92px]",
    style: { fontSize: "11.5px", fontFamily: "Inter, sans-serif" },
  },
  sectionLabel: {
    className: "text-[#b2b2b1] font-semibold leading-[16.34px]",
    style: { fontSize: "13.5px", fontFamily: "Inter, sans-serif" },
  },
  inputLabel: {
    className: "text-[#a4a4a3] font-semibold leading-[13.92px]",
    style: { fontSize: "11.5px", fontFamily: "Inter, sans-serif" },
  },
  designUrlLabel: {
    className: "text-[#a3a3a2] font-semibold leading-[13.92px]",
    style: { fontSize: "11.5px", fontFamily: "Inter, sans-serif" },
  },
  buttonText: {
    className: "text-[#8c8078] font-semibold leading-[13.92px]",
    style: { fontSize: "11.5px" },
  },
  footer: {
    className: "text-[#b0b0b0] font-semibold leading-[16.34px]",
    style: { fontSize: "13.5px", fontFamily: "Inter, sans-serif" },
  },
};

// Input field styles
const INPUT_STYLES = {
  pat: {
    className: "w-full bg-[#272822] border border-[#a5adad] px-[18px] py-[12px] outline-none",
    style: {
      fontFamily: "Inter, sans-serif",
      fontSize: "11.5px",
      fontWeight: 600,
      color: "#737470",
      caretColor: "transparent",
    },
  },
  url: {
    className: "w-full bg-[#272822] border-2 border-[#929291] px-[18px] py-[12px] outline-none",
    style: {
      fontFamily: "Inter, sans-serif",
      fontSize: "10.5px",
      fontWeight: 600,
      color: "#71726e",
      caretColor: "transparent",
    },
  },
};

/**
 * TestCard component renders a dark-themed UI card for agent information,
 * access token management, and design file configuration.
 * 
 * The component is a visual UI composition from Figma design with:
 * - Header with agent name and settings icon
 * - Breadcrumb navigation
 * - Input fields for PAT and Design URL (read-only for this version)
 * - CTA buttons for Awesome and Prepare actions
 * - Footer section for recent breakdowns
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] w-[254px] min-h-[508px] flex flex-col px-[20px] pt-[20px] pb-[24px]"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className={TYPOGRAPHY.headerLabel.className} style={TYPOGRAPHY.headerLabel.style}>
          UI magician Agent
        </span>
        <FiSettings className="text-[#b5b5b5]" size={14} />
      </div>

      {/* Breadcrumb row */}
      <div className="flex items-center gap-[8px] mt-[14px]">
        <FiChevronUp className="text-[#8b9291] flex-shrink-0" size={10} />
        <span className={TYPOGRAPHY.breadcrumb.className} style={TYPOGRAPHY.breadcrumb.style}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Vertical spacer */}
      <div className="mt-[62px]" />

      {/* Add New Design row */}
      <div className="flex items-center gap-[9px]">
        <FiChevronUp className="text-[#b2b2b1] flex-shrink-0" size={12} />
        <span className={TYPOGRAPHY.sectionLabel.className} style={TYPOGRAPHY.sectionLabel.style}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[24px]">
        <div className="flex items-center gap-[8px] mb-[8px]">
          <span className={TYPOGRAPHY.inputLabel.className} style={TYPOGRAPHY.inputLabel.style}>
            Personal Access Token
          </span>
          <FiInfo className="text-[#a4a4a3] flex-shrink-0" size={15} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className={INPUT_STYLES.pat.className}
          style={INPUT_STYLES.pat.style}
        />
      </div>

      {/* Design URL */}
      <div className="mt-[18px]">
        <div className="flex items-center gap-[8px] mb-[8px]">
          <span className={TYPOGRAPHY.designUrlLabel.className} style={TYPOGRAPHY.designUrlLabel.style}>
            Design URL
          </span>
          <FiInfo className="text-[#a3a3a2] flex-shrink-0" size={15} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className={INPUT_STYLES.url.className}
          style={INPUT_STYLES.url.style}
        />
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center gap-[16px] mt-[24px] px-[2px]">
        {/* Awesome button - primary action for confirming design connection */}
        <button
          className="flex-1 bg-[#843a17] rounded-[4px] py-[12px] flex items-center justify-center"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <span className={TYPOGRAPHY.buttonText.className} style={TYPOGRAPHY.buttonText.style}>
            Awesome
          </span>
        </button>
        {/* Prepare button - secondary action for configuration */}
        <button
          className="flex-1 bg-[#843a17] rounded-[4px] py-[12px] flex items-center justify-center"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <span className={TYPOGRAPHY.buttonText.className} style={TYPOGRAPHY.buttonText.style}>
            Prepare
          </span>
        </button>
      </div>

      {/* Footer */}
      <div className="mt-[52px]">
        <span className={TYPOGRAPHY.footer.className} style={TYPOGRAPHY.footer.style}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
