import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdKeyboardArrowUp } from "react-icons/md";

// Design tokens - extracted for consistency and maintainability
const FONT_FAMILY = "Inter, sans-serif";
const COLORS = {
  background: "#1e1e1e",
  divider: "#2e2e2e",
  heading: "#b5b5b5",
  subtext: "#8b9291",
  label: "#a4a4a3",
  inputBackground: "#2a2a2a",
  inputBorderDark: "#444",
  inputBorderLight: "#555",
  inputText: "#737470",
  buttonBackground: "#7b4a30",
  buttonText: "#e8c9b8",
  sectionHeading: "#b0b0b0",
};

const FONT_SIZES = {
  heading: "13.5px",
  label: "11.5px",
};

// Helper component for form field labels with info icon
const FormFieldLabel = ({ text }: { text: string }) => (
  <div className="flex items-center gap-1">
    <span
      className="font-semibold"
      style={{
        color: COLORS.label,
        fontSize: FONT_SIZES.label,
      }}
    >
      {text}
    </span>
    <AiOutlineInfoCircle style={{ color: COLORS.label }} size={14} />
  </div>
);

// Helper component for text inputs with dynamic border color
const ReadOnlyInput = ({
  placeholder,
  borderColor,
}: {
  placeholder: string;
  borderColor: string;
}) => (
  <input
    readOnly
    placeholder={placeholder}
    className="w-full rounded border bg-[#2a2a2a] px-3 py-2 font-semibold outline-none"
    style={{
      borderColor,
      color: COLORS.inputText,
      fontSize: FONT_SIZES.label,
    }}
  />
);

// Horizontal divider for visual separation between sections
const Divider = () => (
  <div className="my-2 h-px" style={{ backgroundColor: COLORS.divider }} />
);

// Reusable button component for form actions (Awesome, Prepare)
const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    className="flex-1 cursor-pointer rounded-lg py-3 font-semibold"
    style={{
      backgroundColor: COLORS.buttonBackground,
      color: COLORS.buttonText,
      fontSize: FONT_SIZES.label,
    }}
  >
    {children}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-full flex-col gap-4 p-5"
    style={{
      backgroundColor: COLORS.background,
      fontFamily: FONT_FAMILY,
    }}
  >
    {/* Top section */}
    <div className="flex items-center justify-between">
      <span
        className="font-semibold"
        style={{
          color: COLORS.heading,
          fontSize: FONT_SIZES.heading,
        }}
      >
        UI magician Agent
      </span>
      <IoSettingsOutline style={{ color: COLORS.heading }} size={18} />
    </div>

    <div className="flex items-center gap-1">
      <MdKeyboardArrowUp style={{ color: COLORS.subtext }} size={16} />
      <span
        className="font-semibold italic"
        style={{
          color: COLORS.subtext,
          fontSize: FONT_SIZES.label,
        }}
      >
        From entire frame to a singl...
      </span>
    </div>

    {/* Divider */}
    <Divider />

    {/* Middle section */}
    <div className="flex flex-col gap-4">
      {/* Add New Design heading - uses slightly darker color (#b2b2b1) for visual separation from top heading */}
      <div className="flex items-center gap-2">
        <MdKeyboardArrowUp style={{ color: "#b2b2b1" }} size={18} />
        <span
          className="font-semibold"
          style={{
            color: "#b2b2b1",
            fontSize: FONT_SIZES.heading,
          }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="flex flex-col gap-1">
        <FormFieldLabel text="Personal Access Token" />
        <ReadOnlyInput
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          borderColor={COLORS.inputBorderDark}
        />
      </div>

      {/* Design URL field */}
      <div className="flex flex-col gap-1">
        <FormFieldLabel text="Design URL" />
        <ReadOnlyInput
          placeholder="https://www.figma.com/file/:"
          borderColor={COLORS.inputBorderLight}
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-3">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>
    </div>

    {/* Divider */}
    <Divider />

    {/* Bottom section */}
    <div>
      <span
        className="font-semibold"
        style={{
          color: COLORS.sectionHeading,
          fontSize: FONT_SIZES.heading,
        }}
      >
        Recent Breakdowns
      </span>
    </div>
  </div>
);
