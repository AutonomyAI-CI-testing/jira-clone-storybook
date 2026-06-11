
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiArrowUpSLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

/**
 * Design constants derived from Figma specs.
 * Using hex literals directly for pixel-fidelity as these do not match standard design tokens.
 */
const COLORS = {
  CARD_BG: "#2a2a2a",
  INPUT_BG: "#272822",
  BUTTON_BG: "#843a17",
  TEXT_PRIMARY: "#b5b5b5",
  TEXT_MUTED: "#8b9291",
  TEXT_LABEL: "#a4a4a3",
  TEXT_PLACEHOLDER: "#737470",
  BUTTON_TEXT: "#8c8078",
  BORDER_TOKEN: "#a5adad",
  BORDER_URL: "#929291",
  SECTION_HEADER: "#b2b2b1",
  FOOTER_TEXT: "#b0b0b0",
} as const;

/**
 * Common styles for consistency.
 * Note: Using inline styles instead of Tailwind class utilities because this file
 * exists outside the project's standard Tailwind content scanning glob (src/app).
 */
const COMMON_STYLES = {
  flexRow: {
    display: "flex",
    alignItems: "center",
  } as React.CSSProperties,
  label: {
    fontSize: "11.5px",
    fontWeight: "600",
  } as React.CSSProperties,
  input: {
    width: "100%",
    backgroundColor: COLORS.INPUT_BG,
    padding: "8px",
    borderRadius: "4px",
    color: "#fff",
    fontSize: "11.5px",
  } as React.CSSProperties,
  button: {
    backgroundColor: COLORS.BUTTON_BG,
    color: COLORS.BUTTON_TEXT,
    borderRadius: "4px",
    padding: "8px 15px",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    flex: 1,
  } as React.CSSProperties,
};

/**
 * TestCard - A smoke test component that replicates a Figma design.
 * Used to verify rendering fidelity in isolated environments.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div
        style={{
          backgroundColor: COLORS.CARD_BG,
          padding: "20px",
          width: "300px",
          fontFamily: "Inter, sans-serif",
          borderRadius: "8px",
        }}
      >
        {/* Header row: Panel Title and Settings */}
        <div
          style={{
            ...COMMON_STYLES.flexRow,
            justifyContent: "space-between",
            marginBottom: "15px",
          }}
        >
          <span
            style={{
              color: COLORS.TEXT_PRIMARY,
              fontSize: "13.5px",
              fontWeight: "600",
            }}
          >
            UI magician Agent
          </span>
          <IoSettingsOutline style={{ color: COLORS.TEXT_PRIMARY }} size={18} />
        </div>

        {/* Subtitle row: Dynamic Context */}
        <div
          style={{
            ...COMMON_STYLES.flexRow,
            gap: "5px",
            marginBottom: "20px",
          }}
        >
          <RiArrowUpSLine style={{ color: COLORS.TEXT_MUTED }} size={18} />
          <span style={{ color: COLORS.TEXT_MUTED, fontSize: "11.5px" }}>
            From entire frame to a singl...
          </span>
        </div>

        {/* Add New Design section header */}
        <div
          style={{
            ...COMMON_STYLES.flexRow,
            gap: "5px",
            marginBottom: "10px",
          }}
        >
          <RiArrowUpSLine style={{ color: COLORS.SECTION_HEADER }} size={18} />
          <span
            style={{
              color: COLORS.SECTION_HEADER,
              fontSize: "13.5px",
              fontWeight: "600",
            }}
          >
            Add New Design
          </span>
        </div>

        {/* Form Field: Personal Access Token */}
        <div
          style={{
            ...COMMON_STYLES.flexRow,
            gap: "5px",
            marginBottom: "5px",
          }}
        >
          <label
            style={{ ...COMMON_STYLES.label, color: COLORS.TEXT_LABEL }}
            htmlFor="token"
          >
            Personal Access Token
          </label>
          <AiOutlineInfoCircle style={{ color: COLORS.TEXT_LABEL }} size={14} />
        </div>
        <input
          id="token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            ...COMMON_STYLES.input,
            border: `1px solid ${COLORS.BORDER_TOKEN}`,
            marginBottom: "15px",
          }}
        />

        {/* Form Field: Design URL */}
        <div
          style={{
            ...COMMON_STYLES.flexRow,
            gap: "5px",
            marginBottom: "5px",
          }}
        >
          <label
            style={{ ...COMMON_STYLES.label, color: COLORS.TEXT_LABEL }}
            htmlFor="url"
          >
            Design URL
          </label>
          <AiOutlineInfoCircle style={{ color: COLORS.TEXT_LABEL }} size={14} />
        </div>
        <input
          id="url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={{
            ...COMMON_STYLES.input,
            border: `2px solid ${COLORS.BORDER_URL}`,
            marginBottom: "20px",
          }}
        />

        {/* Actions Button Row */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <button type="button" style={COMMON_STYLES.button}>
            Awesome
          </button>
          <button type="button" style={COMMON_STYLES.button}>
            Prepare
          </button>
        </div>

        {/* Footer: Section Heading */}
        <div
          style={{
            color: COLORS.FOOTER_TEXT,
            fontSize: "13.5px",
            fontWeight: "600",
          }}
        >
          Recent Breakdowns
        </div>
      </div>
    </div>
  );
};

