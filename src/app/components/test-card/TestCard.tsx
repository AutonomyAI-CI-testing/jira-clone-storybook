import { LuSettings, LuChevronUp, LuInfo } from "react-icons/lu";

interface FormFieldProps {
  label: string;
  placeholder: string;
  isStrongBorder?: boolean;
}

/**
 * FormField component for design configuration inputs.
 * Extracts the repeated label + info icon + read-only input pattern.
 * The isStrongBorder prop controls border styling to match visual hierarchy.
 */
const FormField = ({
  label,
  placeholder,
  isStrongBorder = false,
}: FormFieldProps) => (
  <div className="mt-3">
    <div className="mb-1 flex items-center gap-1.5">
      <span className="text-xs font-semibold text-[#a4a4a3]">
        {label}
      </span>
      <LuInfo className="text-[#a4a4a3]" size={14} />
    </div>
    <input
      readOnly
      className={
        isStrongBorder
          ? "w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2 text-xs text-[#71726e] placeholder-[#71726e] outline-none"
          : "w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2 text-xs text-[#737470] placeholder-[#737470] outline-none"
      }
      placeholder={placeholder}
    />
  </div>
);

/**
 * TestCard displays a panel for configuring Figma design integrations.
 * Shows the assigned agent, credential input fields, and action buttons.
 * Read-only inputs indicate pre-filled or managed values in this context.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[253px] rounded bg-[#2a2a2a] p-4 font-sans"
    >
      {/* Header with agent name and settings action */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <LuSettings className="text-[#b5b5b5]" size={18} />
      </div>

      {/* Subtitle with agent status/description */}
      <div className="mt-1 flex items-center gap-1">
        <LuChevronUp className="text-[#8b9291]" size={14} />
        <span className="text-xs text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacing divider */}
      <div className="mt-6" />

      {/* Form section header */}
      <div className="flex items-center gap-1">
        <LuChevronUp className="text-[#b2b2b1]" size={16} />
        <span className="text-sm font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Figma credential fields */}
      <FormField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <FormField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        isStrongBorder
      />

      {/* Action buttons */}
      <div className="mt-4 flex justify-center gap-2">
        <button className="rounded bg-[#843a17] px-5 py-2 text-sm font-semibold text-[#c4a99a]">
          Awesome
        </button>
        <button className="rounded bg-[#843a17] px-5 py-2 text-sm font-semibold text-[#c4a99a]">
          Prepare
        </button>
      </div>

      {/* Recent activity section header */}
      <div className="mt-6">
        <span className="text-sm font-semibold text-[#b2b2b1]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
