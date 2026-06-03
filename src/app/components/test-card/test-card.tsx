import cx from "classix";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiOutlineInformationCircle } from "react-icons/hi";

interface CollapsibleButtonProps {
  label: string;
  isCollapsed: boolean;
  onToggle: () => void;
}

const CollapsibleButton = ({
  label,
  isCollapsed,
  onToggle,
}: CollapsibleButtonProps): JSX.Element => (
  <button
    onClick={onToggle}
    className={cx(
      "flex w-full items-center justify-between rounded bg-background-neutral p-3",
      "font-primary text-sm text-font hover:bg-background-neutral-hovered"
    )}
  >
    <span>{label}</span>
    <RiArrowDropDownLine
      size={20}
      className={cx(
        "transition-transform duration-200",
        isCollapsed && "rotate-180"
      )}
    />
  </button>
);

interface FormInputProps {
  label: string;
  placeholder: string;
}

const FormInput = ({ label, placeholder }: FormInputProps): JSX.Element => (
  <div>
    <label className="mb-2 flex items-center gap-1 font-primary text-xs font-semibold text-font">
      {label}
      <HiOutlineInformationCircle size={16} className="text-font-subtlest" />
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className={cx(
        "w-full rounded border border-border-input bg-background-input px-3 py-2",
        "font-primary text-sm text-font placeholder:text-font-subtlest",
        "hover:bg-background-input-hovered focus:border-border-focused focus:bg-background-input-pressed",
        "focus:outline focus:outline-2 focus:outline-border-brand"
      )}
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  const [isCollapsedSection1, setIsCollapsedSection1] = useState(false);
  const [isCollapsedSection2, setIsCollapsedSection2] = useState(false);

  return (
    <div
      id="testElem"
      className="w-full max-w-[600px] rounded-md border border-border-input bg-elevation-surface p-6"
    >
      {/* Header Section */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-background-brand-bold">
          <span className="text-xl font-bold text-font-inverse">✨</span>
        </div>
        <h1 className="font-primary-bold text-lg text-font">
          UI magician Agent
        </h1>
      </div>

      {/* Collapsible Section 1 */}
      <div className="mb-4 border-b border-border-input pb-4">
        <CollapsibleButton
          label="From entire frame to a singl..."
          isCollapsed={isCollapsedSection1}
          onToggle={() => setIsCollapsedSection1(!isCollapsedSection1)}
        />
      </div>

      {/* Add New Design Section */}
      <div className="mb-6 border-b border-border-input pb-4">
        <CollapsibleButton
          label="Add New Design"
          isCollapsed={isCollapsedSection2}
          onToggle={() => setIsCollapsedSection2(!isCollapsedSection2)}
        />
      </div>

      {/* Form Section */}
      <div className="mb-6 space-y-4">
        <FormInput
          label="Personal Access Token"
          placeholder="Enter your personal access token"
        />
        <FormInput label="Design URL" placeholder="https://figma.com/..." />
      </div>

      {/* Action Buttons */}
      <div className="mb-6 flex gap-3">
        <button className="flex-1 rounded bg-background-brand-bold px-4 py-2 font-primary-bold text-sm text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed">
          Awesome
        </button>
        <button className="flex-1 rounded bg-background-neutral px-4 py-2 font-primary-bold text-sm text-font hover:bg-background-neutral-hovered active:bg-background-neutral-pressed">
          Prepare
        </button>
      </div>

      {/* Footer Section */}
      <div className="border-t border-border-input pt-4">
        <p className="font-primary text-xs font-semibold text-font-subtlest">
          Recent Breakdowns
        </p>
      </div>
    </div>
  );
};
