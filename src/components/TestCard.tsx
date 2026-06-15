import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronUp } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";

/**
 * Design constants matched against Figma mockup
 * Using inline styles because this file is outside the Tailwind content scan path
 */
const COLORS = {
  background: "#252525",
  textPrimary: "#e8e8e8",
  textSecondary: "#aaa",
  textPlaceholder: "#888",
  border: "#666",
  buttonAction: "#9c4a1a",
};

/**
 * Shared sub-component for form fields to reduce duplication
 */
const FormField = ({
  label,
  placeholder,
  marginBottom = "24px",
}: {
  label: string;
  placeholder: string;
  marginBottom?: string;
}) => (
  <div style={{ marginBottom }}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "10px",
      }}
    >
      <span style={{ fontSize: "16px", fontWeight: "500" }}>{label}</span>
      <AiOutlineInfoCircle size={18} style={{ color: COLORS.textSecondary }} />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      style={{
        width: "100%",
        background: "transparent",
        border: `1.5px solid ${COLORS.border}`,
        borderRadius: "6px",
        padding: "18px 16px",
        fontSize: "14px",
        color: COLORS.textPlaceholder,
        outline: "none",
        boxSizing: "border-box",
      }}
      readOnly
    />
  </div>
);

/**
 * Shared sub-component for primary action buttons
 */
const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button
    style={{
      background: COLORS.buttonAction,
      color: "#fff",
      border: "none",
      borderRadius: "14px",
      padding: "18px 40px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
    }}
  >
    {children}
  </button>
);

/**
 * TestCard: A standalone UI component replicating the "UI magician Agent" panel.
 * Built as a static display for Storybook/testing purposes.
 */
export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      style={{
        background: COLORS.background,
        color: COLORS.textPrimary,
        width: "508px",
        minHeight: "900px",
        display: "flex",
        flexDirection: "column",
        padding: "24px 24px 40px 24px",
        borderRadius: "12px",
        boxSizing: "border-box",
      }}
    >
      {/* Header section with brand title and settings */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <span style={{ fontSize: "22px", fontWeight: "700" }}>
          UI magician Agent
        </span>
        <IoSettingsOutline size={28} style={{ color: COLORS.textPrimary }} />
      </div>

      {/* Internal status/info row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "40px",
        }}
      >
        <HiChevronUp size={18} style={{ color: COLORS.textSecondary }} />
        <span style={{ fontSize: "14px", color: COLORS.textSecondary }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Main Feature Section: Add New Design */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "32px",
        }}
      >
        <HiChevronUp size={22} style={{ color: COLORS.textPrimary }} />
        <span style={{ fontSize: "22px", fontWeight: "700" }}>
          Add New Design
        </span>
      </div>

      <FormField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <FormField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        marginBottom="48px"
      />

      {/* Primary Actions Row */}
      <div
        style={{
          display: "flex",
          gap: "24px",
          justifyContent: "center",
          marginBottom: "64px",
        }}
      >
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Footer: User history/recent activity section */}
      <div>
        <span style={{ fontSize: "22px", fontWeight: "700" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
