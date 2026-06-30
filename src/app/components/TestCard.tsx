import { IoSettingsOutline, IoChevronDownOutline, IoChevronUpOutline, IoInformationCircleOutline } from "react-icons/io5";
import { Button } from "@app/components/button";

/**
 * Placeholder values matching the design requirements.
 * These are hardcoded as the component is intended to be self-contained and static.
 */
const PLACEHOLDERS = {
  PERSONAL_ACCESS_TOKEN: "figd_xxxxxxxxxxxxxxxxxx",
  DESIGN_URL: "https://www.figma.com/file/:",
} as const;

/**
 * FormField sub-component to keep the main layout clean.
 * Handles label, info icon, and the styled placeholder box.
 */
const FormField = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div className="flex flex-col gap-1.5">
    <div className="flex items-center gap-2 text-sm font-primary-bold">
      <span>{label}</span>
      <IoInformationCircleOutline size={17} className="text-icon" />
    </div>
    <div className="rounded border border-border-input bg-background-input px-3 py-2.5 text-font-subtlest text-sm">
      {placeholder}
    </div>
  </div>
);

/**
 * TestCard component
 * 
 * A self-contained settings/agent panel matching the Figma design.
 * Rendered within #testElem as per project requirements.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="lava w-full h-full bg-elevation-surface text-font p-5 flex flex-col gap-4 overflow-y-auto">
      {/* Header with agent title and settings toggle */}
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-lg">UI magician Agent</h2>
        <IoSettingsOutline size={22} className="text-icon cursor-pointer hover:opacity-80 transition-opacity" />
      </div>

      {/* Breadcrumb-style subtitle row indicating context */}
      <div className="flex items-center gap-2 text-font-subtle text-sm">
        <IoChevronDownOutline size={16} />
        <span>From entire frame to a singl...</span>
      </div>

      <div className="h-4" aria-hidden="true" />

      {/* Main configuration section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 font-primary-bold text-base">
          <IoChevronUpOutline size={18} />
          <span>Add New Design</span>
        </div>

        <FormField 
          label="Personal Access Token" 
          placeholder={PLACEHOLDERS.PERSONAL_ACCESS_TOKEN} 
        />

        <FormField 
          label="Design URL" 
          placeholder={PLACEHOLDERS.DESIGN_URL} 
        />

        {/* Primary CTAs with specific brand colors from design */}
        <div className="flex gap-3 justify-center mt-2">
          <Button 
            size="lg" 
            className="flex-1 font-primary-bold !bg-[#843a17] !text-[#d4a88e] hover:!bg-[#9a4520] transition-colors"
          >
            Awesome
          </Button>
          <Button 
            size="lg" 
            className="flex-1 font-primary-bold !bg-[#843a17] !text-[#d4a88e] hover:!bg-[#9a4520] transition-colors"
          >
            Prepare
          </Button>
        </div>
      </div>

      <div className="h-4" aria-hidden="true" />

      {/* History/Log section footer */}
      <div className="flex flex-col gap-2 pt-4" style={{ borderTop: "1px solid var(--color-border)" }}>
        <h3 className="font-primary-bold text-base">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
