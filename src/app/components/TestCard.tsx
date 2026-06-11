import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

// Design constants from the Figma reference.
// The Tailwind palette is overridden in tailwind.config.js, so we use arbitrary values.
const COLORS = {
  CARD_BG: "bg-[#2a2a2a]",
  ACCENT: "text-[#a0522d]",
  ACCENT_BG: "bg-[#9b4c20]",
  INPUT_BG: "bg-[#1e1e1e]",
  INPUT_BORDER: "border-[#444444]",
} as const;

/**
 * A self-contained card UI component representing a "UI Magician Agent" design panel.
 * Built to match a specific Figma mockup for verification of Tailwind styling.
 */
export const TestCard = (): JSX.Element => (
  <div id="testElem" className={`${COLORS.CARD_BG} p-6 text-white space-y-5 rounded-lg`}>
    <Header />
    <Subtitle />

    {/* Spacer to match Figma vertical rhythm */}
    <div className="h-1" aria-hidden="true" />

    <SectionHeader title="Add New Design" />

    <div className="space-y-4">
      <LabeledInput
        id="pat"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <LabeledInput
        id="designUrl"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />
    </div>

    <div className="flex justify-start space-x-4 pt-2">
      <ActionButton text="Awesome" />
      <ActionButton text="Prepare" />
    </div>

    <div className="pt-2">
      <h3 className="text-md font-bold">Recent Breakdowns</h3>
    </div>
  </div>
);

const Header = () => (
  <div className="flex justify-between items-center">
    <h2 className="text-lg font-bold">UI magician Agent</h2>
    <FiSettings className="text-gray-400 text-xl cursor-not-allowed" />
  </div>
);

const Subtitle = () => (
  <div className="flex items-center space-x-2">
    <FiChevronUp className={COLORS.ACCENT} />
    <p className={`${COLORS.ACCENT} text-sm font-medium`}>
      From entire frame to a singl...
    </p>
  </div>
);

const SectionHeader = ({ title }: { title: string }) => (
  <div className="flex items-center space-x-2">
    <FiChevronUp className="text-white" />
    <h3 className="text-md font-bold">{title}</h3>
  </div>
);

const LabeledInput = ({ id, label, placeholder }: { id: string; label: string; placeholder: string }) => (
  <div className="space-y-2">
    <div className="flex items-center space-x-2">
      <label htmlFor={id} className="text-sm font-medium opacity-90">{label}</label>
      <FiInfo className="text-gray-400 text-xs" />
    </div>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className={`w-full p-2.5 rounded-md ${COLORS.INPUT_BG} border ${COLORS.INPUT_BORDER} text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#9b4c20] transition-all`}
    />
  </div>
);

const ActionButton = ({ text }: { text: string }) => (
  <button className={`rounded-lg px-8 py-3 font-semibold text-white ${COLORS.ACCENT_BG} hover:brightness-110 active:scale-[0.98] transition-all`}>
    {text}
  </button>
);
