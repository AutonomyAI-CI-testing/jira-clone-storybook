import { useState } from "react";
import cx from "classix";
import { IoChevronUp, IoChevronDown, IoSettingsOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface Props {
  onAwesome?: () => void;
  onPrepare?: () => void;
  className?: string;
}

interface CollapsibleHeaderProps {
  isOpen: boolean;
  onToggle: () => void;
  title: string;
  titleClassName?: string;
}

/**
 * Reusable collapsible section header with chevron toggle.
 * Used for both description and "Add New Design" sections.
 */
const CollapsibleHeader = ({
  isOpen,
  onToggle,
  title,
  titleClassName,
}: CollapsibleHeaderProps) => (
  <button
    type="button"
    className="flex items-center gap-1 text-left"
    onClick={onToggle}
  >
    {isOpen ? (
      <IoChevronUp size={14} className="text-[#b5b5b5]" />
    ) : (
      <IoChevronDown size={14} className="text-[#b5b5b5]" />
    )}
    <span className={titleClassName}>{title}</span>
  </button>
);

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  inputClassName: string;
}

/**
 * Form field with label and info icon.
 * Used for both Personal Access Token and Design URL inputs.
 */
const FormField = ({
  label,
  value,
  onChange,
  placeholder,
  inputClassName,
}: FormFieldProps) => (
  <div className="flex flex-col gap-1.5">
    <div className="flex items-center gap-1">
      <span className="text-[11.5px] text-[#a4a4a3]">{label}</span>
      <AiOutlineInfoCircle size={12} className="text-[#a4a4a3]" />
    </div>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={inputClassName}
    />
  </div>
);

export const UiMagicianPanel = ({
  onAwesome,
  onPrepare,
  className,
}: Props): JSX.Element => {
  // Both sections default to open for immediate access to functionality
  const [isAddDesignOpen, setIsAddDesignOpen] = useState(true);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [token, setToken] = useState("");
  const [designUrl, setDesignUrl] = useState("");

  return (
    <div
      className={cx(
        "flex w-[254px] flex-col gap-3 bg-[#1a1a17] p-4 font-primary",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <button
          type="button"
          className="flex items-center justify-center text-[#b5b5b5] hover:text-[#d5d5d5]"
          aria-label="Settings"
        >
          <IoSettingsOutline size={16} />
        </button>
      </div>

      {/* Description collapsible */}
      <div className="flex flex-col gap-1">
        <CollapsibleHeader
          isOpen={isDescriptionOpen}
          onToggle={() => setIsDescriptionOpen(!isDescriptionOpen)}
          title="From entire frame to a singl..."
          titleClassName="text-[11.5px] text-[#8b9291]"
        />
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-2">
        <CollapsibleHeader
          isOpen={isAddDesignOpen}
          onToggle={() => setIsAddDesignOpen(!isAddDesignOpen)}
          title="Add New Design"
          titleClassName="text-[13.5px] font-semibold text-[#b2b2b1]"
        />

        {isAddDesignOpen && (
          <div className="flex flex-col gap-3">
            <FormField
              label="Personal Access Token"
              value={token}
              onChange={setToken}
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              inputClassName="rounded border border-[#a5adad] bg-[#272822] px-2 py-1.5 text-[11.5px] text-[#b5b5b5] placeholder:text-[#737470] focus:outline-none focus:ring-1 focus:ring-[#a5adad]"
            />

            <FormField
              label="Design URL"
              value={designUrl}
              onChange={setDesignUrl}
              placeholder="https://www.figma.com/file/:"
              inputClassName="rounded border-2 border-[#929291] bg-[#272822] px-2 py-1.5 text-[11.5px] text-[#b5b5b5] placeholder:text-[#71726e] focus:outline-none focus:ring-1 focus:ring-[#929291]"
            />

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={onAwesome}
                className="flex-1 rounded bg-[#1e40af] px-3 py-1.5 text-[11.5px] font-semibold text-[#93c5fd] hover:bg-[#1e3a8a] active:bg-[#1e3a8a]"
              >
                Awesome
              </button>
              <button
                type="button"
                onClick={onPrepare}
                className="flex-1 rounded bg-[#1e40af] px-3 py-1.5 text-[11.5px] font-semibold text-[#93c5fd] hover:bg-[#1e3a8a] active:bg-[#1e3a8a]"
              >
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns section */}
      <div className="pt-2">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
