import { FiInfo, FiChevronUp } from "react-icons/fi";
import { LuAtom } from "react-icons/lu";
import { ReactNode } from "react";

/**
 * FormField component - renders a labeled input field with an optional info icon
 */
interface FormFieldProps {
  label: string;
  placeholder: string;
  /** Border style: single uses 1px border, double uses 2px border for emphasis */
  borderStyle?: "single" | "double";
}

const FormField = ({
  label,
  placeholder,
  borderStyle = "single",
}: FormFieldProps) => {
  const borderClass =
    borderStyle === "double"
      ? "border-2 border-[#b2b2b1]"
      : "border border-[#c5cdcd]";

  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          {label}
        </span>
        <FiInfo className="h-[15px] w-[15px] text-[#a4a4a3]" />
      </div>
      <div className={`bg-[#272822] ${borderClass} rounded px-4 py-2.5`}>
        <span className="text-[11.5px] leading-[13.92px] text-[#737470]">
          {placeholder}
        </span>
      </div>
    </div>
  );
};

/**
 * SectionHeader component - renders a collapsible/expandable section header with chevron
 */
interface SectionHeaderProps {
  children: ReactNode;
  iconSize?: "sm" | "md";
}

const SectionHeader = ({ children, iconSize = "md" }: SectionHeaderProps) => {
  const iconClass =
    iconSize === "sm" ? "w-[12px] h-[12px]" : "w-[16px] h-[16px]";

  return (
    <div className="flex items-center gap-2">
      <FiChevronUp className={`${iconClass} text-[#8b9291]`} />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        {children}
      </span>
    </div>
  );
};

export const TestCard = () => {
  return (
    <div className="w-[254px] bg-[#1a1a17] p-5 font-semibold text-white">
      {/* Header with agent title and icon */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <LuAtom className="h-[16px] w-[16px] text-[#b5b5b5]" />
      </div>

      {/* Subtitle showing truncated description */}
      <div className="mt-4">
        <SectionHeader iconSize="sm">
          <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </SectionHeader>
      </div>

      <div className="mt-16" />

      {/* Primary action section */}
      <SectionHeader>Add New Design</SectionHeader>

      {/* Form fields for Figma integration */}
      <div className="mt-12">
        <FormField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          borderStyle="single"
        />
      </div>

      <div className="mt-8">
        <FormField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          borderStyle="double"
        />
      </div>

      {/* Action buttons */}
      <div className="mt-10 flex gap-4">
        <button className="flex-1 rounded bg-[#843a17] py-3.5 text-[11.5px] leading-[13.92px] text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843a17] py-3.5 text-[11.5px] leading-[13.92px] text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent activity section */}
      <div className="mt-14">
        <span className="text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>

      {/* Footer with copyright */}
      <div className="border-gray-300 mt-auto border-t pt-3 text-center">
        <span className="text-[11.5px] leading-[13.92px] text-[#b0b0b0]">
          © AutonomyAI
        </span>
      </div>
    </div>
  );
};
