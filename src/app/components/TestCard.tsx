import { useState } from "react";
import { IoSettingsSharp, IoChevronUp } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import cx from "classix";

interface CollapsibleSectionProps {
  isOpen: boolean;
  onToggle: () => void;
  title: string;
  titleClassName?: string;
  children?: React.ReactNode;
}

/**
 * Reusable collapsible section with chevron indicator
 * Chevron rotates 180deg when expanded for intuitive visual feedback
 */
const CollapsibleSection = ({
  isOpen,
  onToggle,
  title,
  titleClassName = "text-sm text-[#9fadbc]",
  children,
}: CollapsibleSectionProps) => (
  <div>
    <button
      onClick={onToggle}
      className={cx(
        "flex w-full items-center gap-2 text-left hover:text-[#b6c2cf]",
        titleClassName
      )}
    >
      <IoChevronUp
        className={cx(
          "transition-transform duration-200",
          isOpen ? "rotate-180" : ""
        )}
        size={20}
      />
      <span>{title}</span>
    </button>
    {isOpen && <div className="mt-6 space-y-5 pl-7">{children}</div>}
  </div>
);

interface FormFieldProps {
  label: string;
  placeholder: string;
  type?: string;
}

/**
 * Form field with label and info icon
 * Read-only for display purposes - actual functionality handled by parent form logic
 */
const FormField = ({ label, placeholder, type = "text" }: FormFieldProps) => (
  <div>
    <div className="mb-2 flex items-center gap-2">
      <label className="text-sm text-[#9fadbc]">{label}</label>
      <AiOutlineInfoCircle className="text-[#596773]" size={16} />
    </div>
    <input
      type={type}
      placeholder={placeholder}
      readOnly
      className="w-full border border-[#1a1e22] bg-[#22272b] px-3 py-2 text-sm text-[#596773] placeholder:text-[#596773] focus:border-[#388bff] focus:outline-none"
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  // Section 1 starts collapsed, Section 2 starts expanded - matches the default UX flow
  const [isSection1Open, setIsSection1Open] = useState(false);
  const [isSection2Open, setIsSection2Open] = useState(true);

  const toggleSection1 = () => setIsSection1Open(!isSection1Open);
  const toggleSection2 = () => setIsSection2Open(!isSection2Open);

  return (
    <div className="mx-auto max-w-[480px] bg-[#1d2125] text-[#b6c2cf]">
      {/* Header with settings icon - icon is outline-only via stroke styling */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-xl font-bold text-[#b6c2cf]">UI magician Agent</h1>
        <IoSettingsSharp
          className="text-[#9fadbc]"
          size={24}
          style={{ fill: "transparent", stroke: "currentColor", strokeWidth: "2" }}
        />
      </div>

      {/* Collapsible section with truncated preview text */}
      <div className="mb-8">
        <CollapsibleSection
          isOpen={isSection1Open}
          onToggle={toggleSection1}
          title="From entire frame to a singl..."
        >
          {/* Placeholder for expanded content */}
        </CollapsibleSection>
      </div>

      {/* Main form section - starts expanded to draw attention to primary workflow */}
      <div className="mb-8">
        <CollapsibleSection
          isOpen={isSection2Open}
          onToggle={toggleSection2}
          title="Add New Design"
          titleClassName="text-base font-bold text-[#b6c2cf]"
        >
          <FormField
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
          />
          <FormField
            label="Design URL"
            placeholder="https://www.figma.com/file/:"
          />

          {/* Action buttons - both use same warm brown theme */}
          <div className="flex gap-3">
            <button className="bg-[#7d4a2c] px-6 py-2 text-sm font-medium text-white hover:bg-[#8f5536] active:bg-[#6b3f24]">
              Awesome
            </button>
            <button className="bg-[#7d4a2c] px-6 py-2 text-sm font-medium text-white hover:bg-[#8f5536] active:bg-[#6b3f24]">
              Prepare
            </button>
          </div>
        </CollapsibleSection>
      </div>

      {/* Recent breakdowns section header */}
      <div>
        <h2 className="text-base font-bold text-[#b6c2cf]">Recent Breakdowns</h2>
      </div>

      {/* Footer with copyright */}
      <div className="border-t border-gray-300 pt-3 text-center text-sm text-[#9fadbc]">
        © AutonomyAI
      </div>
    </div>
  );
};
