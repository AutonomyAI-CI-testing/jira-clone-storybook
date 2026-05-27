import { useState } from "react";
import { FiChevronUp, FiSettings, FiInfo } from "react-icons/fi";
import cx from "classix";

/**
 * Input field styles for consistent appearance across password and URL fields.
 * Uses a dark theme with borders and focus states matching the design system.
 */
const inputFieldClasses = cx(
  "w-full px-4 py-3 bg-[#272822] border border-[#666]",
  "text-xs text-[#71726e] placeholder-[#71726e]",
  "rounded focus:outline-none focus:border-[#888]",
  "transition-colors"
);

/**
 * Shared button styles for action buttons (Awesome, Prepare).
 * Features a brown/tan color scheme with hover and active states.
 */
const actionButtonClasses = cx(
  "flex-1 px-6 py-4 bg-[#843a17] rounded-lg",
  "text-xs font-semibold text-[#c4a99a]",
  "hover:bg-[#a0522d] active:bg-[#6b2e13]",
  "transition-colors"
);

/**
 * Reusable input field component for form inputs with label and info icon.
 */
interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "password";
}

const InputField = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: InputFieldProps): JSX.Element => (
  <div>
    <div className="mb-3 flex items-center gap-2">
      <label className="text-xs font-semibold text-[#a4a4a3]">{label}</label>
      <FiInfo className="h-4 w-4 text-[#a4a4a3]" />
    </div>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={inputFieldClasses}
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  const [isSection1Open, setIsSection1Open] = useState(true);
  const [isSection2Open, setIsSection2Open] = useState(true);
  const [tokenValue, setTokenValue] = useState("");
  const [urlValue, setUrlValue] = useState("");

  return (
    <div
      id="testElem"
      className="w-full max-w-[320px] rounded-lg bg-[#1a1a1a] px-6 pb-6 pt-8 text-[#b5b5b5]"
    >
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-sm font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <FiSettings className="h-5 w-5 text-[#b5b5b5]" />
      </div>

      {/* Collapsible Section 1 - Initially open but hidden content */}
      <div className="mb-16">
        <button
          onClick={() => setIsSection1Open(!isSection1Open)}
          className="flex w-full items-center gap-2 text-left transition-opacity hover:opacity-80"
          aria-expanded={isSection1Open}
          aria-label="Toggle section: From entire frame to a single design"
        >
          <FiChevronUp
            className={cx(
              "h-4 w-4 text-[#8b9291] transition-transform",
              !isSection1Open && "rotate-180"
            )}
            aria-hidden="true"
          />
          <span className="text-xs font-semibold text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </button>
      </div>

      {/* Collapsible Section 2 - Add New Design form with input fields */}
      <div className="mb-6">
        <button
          onClick={() => setIsSection2Open(!isSection2Open)}
          className="mb-8 flex w-full items-center gap-2 text-left transition-opacity hover:opacity-80"
          aria-expanded={isSection2Open}
          aria-label="Toggle section: Add New Design"
        >
          <FiChevronUp
            className={cx(
              "h-5 w-5 text-[#b2b2b1] transition-transform",
              !isSection2Open && "rotate-180"
            )}
            aria-hidden="true"
          />
          <span className="text-sm font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </button>

        {/* Form Content - Only rendered when section is open */}
        {isSection2Open && (
          <div className="space-y-6">
            <InputField
              label="Personal Access Token"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              value={tokenValue}
              onChange={setTokenValue}
              type="password"
            />
            <InputField
              label="Design URL"
              placeholder="https://www.figma.com/file/:"
              value={urlValue}
              onChange={setUrlValue}
              type="text"
            />

            {/* Action Buttons - Submit form data (handlers not yet implemented) */}
            <div className="flex gap-5 pt-2">
              <button className={actionButtonClasses}>Awesome</button>
              <button className={actionButtonClasses}>Prepare</button>
            </div>
          </div>
        )}
      </div>

      {/* Footer - Recent Breakdowns */}
      <div className="mt-16 border-t border-[#3a3a3a] pt-6">
        <h2 className="text-sm font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
