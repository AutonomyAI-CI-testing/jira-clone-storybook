import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const INPUT_CLASSES =
  "mt-3 w-full rounded border border-[#6b6b6b] bg-[#2a2a2a] px-4 py-5 text-xl text-[#8f8f8f] placeholder:text-[#8f8f8f]";

const LABEL_ROW_CLASSES = "flex items-center gap-3 text-xl text-[#c4c4c4]";

const SECTION_HEADING_CLASSES = "font-primary-bold text-2xl text-[#e6e6e6]";

const PanelField = ({
  label,
  placeholder,
  className,
}: PanelFieldProps): JSX.Element => (
  <div className={className}>
    <div className={LABEL_ROW_CLASSES}>
      <span>{label}</span>
      <FiInfo size={20} />
    </div>
    <input type="text" placeholder={placeholder} className={INPUT_CLASSES} />
  </div>
);

const ActionButton = ({ label }: ActionButtonProps): JSX.Element => (
  <button
    type="button"
    className="w-[168px] rounded bg-[#a8441f] py-4 text-xl text-[#d9b8a8]"
  >
    {label}
  </button>
);

/**
 * Self-contained recreation of the "UI magician Agent" Figma panel.
 * Smoke-test component: no props, no state, no behaviour.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1c1c] px-10 py-10 font-primary text-[#c9c9c9]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <h1 className={SECTION_HEADING_CLASSES}>UI magician Agent</h1>
      <FiSettings size={24} className="text-[#e6e6e6]" />
    </div>

    {/* Collapsible row */}
    <div className="mt-5 flex items-center gap-2 text-lg text-[#d4d4d4]">
      <FiChevronUp size={18} />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    {/* Add New Design */}
    <div className="mt-16 flex items-center gap-2">
      <FiChevronUp size={22} className="text-[#e6e6e6]" />
      <h2 className={SECTION_HEADING_CLASSES}>Add New Design</h2>
    </div>

    <PanelField
      className="mt-6"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />

    <PanelField
      className="mt-5"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    {/* Actions */}
    <div className="mt-7 flex justify-end gap-9">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-16 font-primary-bold text-2xl text-[#cfcfcf]">
      Recent Breakdowns
    </h2>
  </div>
);

interface PanelFieldProps {
  label: string;
  placeholder: string;
  className?: string;
}

interface ActionButtonProps {
  label: string;
}
