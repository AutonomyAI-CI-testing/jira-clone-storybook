
import { IoSettingsOutline } from "react-icons/io5";
import { RiArrowUpSLine } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";

/**
 * Design Constants
 * Using Tailwind arbitrary values for exact design fidelity as per Figma specs.
 * These colors are outside the standard semantic token system.
 */
const CARD_BG = "bg-[#2a2a2a]";
const INPUT_BG = "bg-[#1a1a1a]";
const BORDER_COLOR = "border-[#3a3a3a]";
const ACCENT_AMBER = "text-[#c8842a]";
const MUTED_TEXT = "text-[#8c8c8c]";
const PLACEHOLDER_TEXT = "placeholder:text-[#5a5a5a]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className={`min-h-screen ${CARD_BG} flex items-start justify-center p-4`}
    >
      <div className={`w-[280px] ${CARD_BG} p-5 rounded-lg`}>
        {/* Row 1 – Header: Title and Settings */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-white font-bold text-xl">UI magician Agent</span>
          <IoSettingsOutline size={20} className={MUTED_TEXT} />
        </div>

        {/* Row 2 – Collapsible hint: explanatory text with accent color */}
        <div className="flex items-center gap-1 mb-8">
          <RiArrowUpSLine size={18} className={ACCENT_AMBER} />
          <span className={`${ACCENT_AMBER} text-sm`}>
            From entire frame to a singl...
          </span>
        </div>

        <div>
          {/* Row 3 – Section heading */}
          <div className="flex items-center gap-2 mb-4">
            <RiArrowUpSLine size={20} className="text-white" />
            <span className="text-white font-bold text-lg">Add New Design</span>
          </div>

          {/* Row 4 – Personal Access Token field */}
          <InputField
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
          />

          {/* Row 5 – Design URL field */}
          <InputField
            label="Design URL"
            placeholder="https://www.figma.com/file/:"
            containerClassName="mb-6"
          />

          {/* Row 6 – Primary Actions */}
          <div className="flex gap-3 mb-8">
            <button className="flex-1 bg-[#b85c2c] hover:bg-[#a04e24] text-white font-semibold py-2.5 rounded-lg text-sm transition-colors">
              Awesome
            </button>
            <button className="flex-1 bg-[#9e4e24] hover:bg-[#8a4220] text-white font-semibold py-2.5 rounded-lg text-sm transition-colors">
              Prepare
            </button>
          </div>
        </div>

        {/* Row 7 – Footer section */}
        <div className="text-white font-bold text-lg">Recent Breakdowns</div>
      </div>
    </div>
  );
};

/**
 * Reusable Input Field component for the card.
 * readOnly is intentional to match the static preview requirement.
 */
interface InputFieldProps {
  label: string;
  placeholder: string;
  containerClassName?: string;
}

const InputField = ({
  label,
  placeholder,
  containerClassName = "mb-4",
}: InputFieldProps) => (
  <div className={containerClassName}>
    <div className="flex items-center gap-1 mb-1">
      <span className="text-white text-sm font-medium">{label}</span>
      <AiOutlineInfoCircle size={14} className={MUTED_TEXT} />
    </div>
    <input
      placeholder={placeholder}
      className={`w-full ${INPUT_BG} border ${BORDER_COLOR} rounded ${MUTED_TEXT} ${PLACEHOLDER_TEXT} text-sm px-3 py-2.5 outline-none`}
      readOnly
    />
  </div>
);
