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

// Helper function to create icon styling with consistent flex-shrink behavior
const createIconClass = (textColor: string) => `flex-shrink-0 ${textColor}`;

// Helper component for label with optional info icon
const LabelWithIcon = ({
  label,
  typographyStyle,
  iconColor,
}: {
  label: string;
  typographyStyle: (typeof TYPOGRAPHY)[keyof typeof TYPOGRAPHY];
  iconColor?: string;
}) => (
  <div className="mb-[8px] flex items-center gap-[8px]">
    <span className={typographyStyle.className} style={typographyStyle.style}>
      {label}
    </span>
    {iconColor && <FiInfo className={createIconClass(iconColor)} size={15} />}
  </div>
);

// Input field styles
const INPUT_STYLES = {
  pat: {
    className:
      "w-full bg-[#272822] border border-[#a5adad] px-[18px] py-[12px] outline-none",
    style: {
      fontFamily: "Inter, sans-serif",
      fontSize: "11.5px",
      fontWeight: 600,
      color: "#737470",
      caretColor: "transparent",
    },
  },
  url: {
    className:
      "w-full bg-[#272822] border-2 border-[#929291] px-[18px] py-[12px] outline-none",
    style: {
      fontFamily: "Inter, sans-serif",
      fontSize: "10.5px",
      fontWeight: 600,
      color: "#71726e",
      caretColor: "transparent",
    },
  },
};

// Helper component for CTA button
const CTAButton = ({ label }: { label: string }) => (
  <button
    className="flex flex-1 items-center justify-center rounded-[4px] bg-[#843a17] py-[12px]"
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    <span
      className={TYPOGRAPHY.buttonText.className}
      style={TYPOGRAPHY.buttonText.style}
    >
      {label}
    </span>
  </button>
);

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
      className="flex min-h-[508px] w-[254px] flex-col bg-[#2a2a2a] px-[20px] pb-[24px] pt-[20px]"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span
          className={TYPOGRAPHY.headerLabel.className}
          style={TYPOGRAPHY.headerLabel.style}
        >
          UI magician Agent
        </span>
        <FiSettings className="text-[#b5b5b5]" size={14} />
      </div>

      {/* Breadcrumb row */}
      <div className="mt-[14px] flex items-center gap-[8px]">
        <FiChevronUp className={createIconClass("text-[#8b9291]")} size={10} />
        <span
          className={TYPOGRAPHY.breadcrumb.className}
          style={TYPOGRAPHY.breadcrumb.style}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Vertical spacer */}
      <div className="mt-[62px]" />

      {/* Add New Design row */}
      <div className="flex items-center gap-[9px]">
        <FiChevronUp className={createIconClass("text-[#b2b2b1]")} size={12} />
        <span
          className={TYPOGRAPHY.sectionLabel.className}
          style={TYPOGRAPHY.sectionLabel.style}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[24px]">
        <LabelWithIcon
          label="Personal Access Token"
          typographyStyle={TYPOGRAPHY.inputLabel}
          iconColor="text-[#a4a4a3]"
        />
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
        <LabelWithIcon
          label="Design URL"
          typographyStyle={TYPOGRAPHY.designUrlLabel}
          iconColor="text-[#a3a3a2]"
        />
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className={INPUT_STYLES.url.className}
          style={INPUT_STYLES.url.style}
        />
      </div>

      {/* CTA Buttons */}
      <div className="mt-[24px] flex items-center gap-[16px] px-[2px]">
        {/* Awesome button - primary action for confirming design connection */}
        <CTAButton label="Awesome" />
        {/* Prepare button - secondary action for configuration */}
        <CTAButton label="Prepare" />
      </div>

      {/* Footer */}
      <div className="mt-[52px]">
        <span
          className={TYPOGRAPHY.footer.className}
          style={TYPOGRAPHY.footer.style}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
