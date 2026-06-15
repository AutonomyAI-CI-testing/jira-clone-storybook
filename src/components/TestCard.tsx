
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiArrowUpSLine } from "react-icons/ri";

/**
 * Design constants specifically chosen to match the target Dark UI theme.
 * These hex codes represent the specific color palette of the "UI magician" interface.
 */
const COLORS = {
  bgMain: "#1d2125",
  textMain: "#b6c2cf",
  textMuted: "#9aa5b4",
  textAccent: "#faa53d",
  inputBg: "#22272b",
  inputBorder: "#454f59",
  buttonBg: "#974f0c",
  buttonText: "#dee4ea",
} as const;

/**
 * Sub-component for form inputs to ensure visual consistency
 * and reduce JSX nesting in the main component.
 */
const FormField = ({
  label,
  placeholder,
  ...props
}: {
  label: string;
  placeholder: string;
}) => (
  <div className="mb-4 last:mb-6">
    <label className="flex items-center text-sm mb-2">
      {label}
      <AiOutlineInfoCircle className="ml-1 text-xs" />
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full px-3 py-2 text-sm"
      style={{
        backgroundColor: COLORS.inputBg,
        border: `1px solid ${COLORS.inputBorder}`,
        borderRadius: "0.5rem",
        color: COLORS.textMuted,
      }}
      {...props}
    />
  </div>
);

/**
 * TestCard: A control panel for the UI magician Agent.
 * Handles configuration for new designs and displays recent progress.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full max-w-[320px] p-4 rounded-xl flex flex-col gap-4 text-sm"
      style={{ backgroundColor: COLORS.bgMain, color: COLORS.textMain }}
    >
      {/* Header: Identity and Settings */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">UI magician Agent</h2>
        <IoSettingsOutline className="text-xl px-0.5" aria-label="Settings" />
      </div>

      {/* Active Context: Shows current scope/context */}
      <div className="flex items-center mb-6">
        <RiArrowUpSLine className="text-xl mr-2" />
        <span className="text-sm" style={{ color: COLORS.textAccent }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Explicit spacer to maintain layout hierarchy from design */}
      <div className="mb-6" />

      {/* Configuration Section */}
      <section>
        <div className="flex items-center mb-4">
          <RiArrowUpSLine className="text-xl mr-2" />
          <h3 className="text-md font-bold">Add New Design</h3>
        </div>

        <FormField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <FormField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />

        {/* Action Buttons: Primary flow control */}
        <div className="flex gap-3 mb-6">
          <button
            className="px-5 py-2.5 font-medium flex-grow hover:opacity-90 active:scale-95 transition-all"
            style={{
              backgroundColor: COLORS.buttonBg,
              color: COLORS.buttonText,
              borderRadius: "0.5rem",
            }}
          >
            Awesome
          </button>
          <button
            className="px-5 py-2.5 font-medium flex-grow hover:opacity-90 active:scale-95 transition-all"
            style={{
              backgroundColor: COLORS.buttonBg,
              color: COLORS.buttonText,
              borderRadius: "0.5rem",
            }}
          >
            Prepare
          </button>
        </div>
      </section>

      {/* History/Log Section */}
      <footer>
        <h3 className="text-md font-bold">Recent Breakdowns</h3>
      </footer>
    </div>
  );
};
