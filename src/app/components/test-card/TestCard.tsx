import { useState } from "react";
import cx from "classix";

// Default placeholder values
const PLACEHOLDERS = {
  token: "figd_xxxxxxxxxxxxxxxxxx",
  url: "https://www.figma.com/file/:",
} as const;

/**
 * ToggleArrow - A small caret icon that rotates based on expanded state.
 * Used to indicate collapsible sections.
 */
const ToggleArrow = ({ isExpanded }: { isExpanded: boolean }): JSX.Element => (
  <span
    className={cx(
      "flex-shrink-0 text-sm text-[#b2b2b1] transition-transform",
      !isExpanded && "-rotate-180"
    )}
  >
    ^
  </span>
);

/**
 * InfoButton - A circular icon button with an info symbol.
 * Used to provide additional context for form fields.
 */
const InfoButton = (): JSX.Element => (
  <button className="flex h-5 w-5 items-center justify-center rounded-full border border-[#929291] text-[10px] text-[#8b9291] hover:bg-[#272822]">
    i
  </button>
);

/**
 * FormField - Reusable form field component with label, info button, and input.
 * Supports URL field variant with different styling for URL inputs.
 */
const FormField = ({
  label,
  value,
  onChange,
  placeholder,
  isUrlField = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  isUrlField?: boolean;
}): JSX.Element => {
  const labelColor = isUrlField ? "text-[#a3a3a2]" : "text-[#a4a4a3]";
  const inputTextColor = isUrlField ? "text-[#71726e]" : "text-[#737470]";
  const inputPlaceholderColor = isUrlField
    ? "placeholder-[#71726e]"
    : "placeholder-[#737470]";
  const inputBorderColor = isUrlField ? "border-[#a5adad]" : "border-[#929291]";
  const inputTextSize = isUrlField ? "text-[10.5px]" : "text-[11.5px]";

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <label className={`text-[11.5px] font-semibold ${labelColor}`}>
          {label}
        </label>
        <InfoButton />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        placeholder={placeholder}
        className={`w-full ${inputBorderColor} bg-[#272822] px-3 py-3 hover:border-[#a5adad] ${inputTextSize} font-semibold ${inputTextColor} ${inputPlaceholderColor} outline-none focus:bg-[#2c333a] focus:outline-2 focus:outline-[#b5b5b5]`}
      />
    </div>
  );
};

/**
 * ActionButton - A button for form actions.
 */
const ActionButton = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <button className="flex flex-1 items-center justify-center rounded bg-[#843a17] px-4 py-3 text-[11.5px] font-semibold text-[#8c8078] hover:bg-[#9d4621] active:bg-[#7a3213]">
    {children}
  </button>
);

export const TestCard = (): JSX.Element => {
  const [tokenExpanded, setTokenExpanded] = useState<boolean>(true);
  const [tokenValue, setTokenValue] = useState<string>(PLACEHOLDERS.token);
  const [urlValue, setUrlValue] = useState<string>(PLACEHOLDERS.url);

  const handleToggle = (): void => {
    setTokenExpanded(!tokenExpanded);
  };

  return (
    <div className="min-h-screen w-full bg-[#1a1a1a] p-5">
      <div className="mx-auto w-full max-w-md space-y-8">
        {/* Header with branding and settings icon */}
        <div className="flex items-center justify-between">
          <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
            UI magician Agent
          </h1>
          <button
            className="flex h-6 w-6 items-center justify-center text-[#b5b5b5] hover:opacity-80"
            aria-label="Settings"
          >
            <span className="text-lg">⚛</span>
          </button>
        </div>

        {/* Description text with decorative toggle arrow */}
        <div className="flex items-start gap-2">
          <span
            className={cx(
              "flex-shrink-0 text-sm text-[#b5b5b5] transition-transform",
              tokenExpanded ? "" : "-rotate-180"
            )}
          >
            ^
          </span>
          <p className="text-[11.5px] font-semibold text-[#8b9291]">
            From entire frame to a singl...
          </p>
        </div>

        {/* Collapsible form section for design input */}
        <div className="space-y-4">
          <button
            onClick={handleToggle}
            className="flex items-center gap-3 py-2 text-left hover:opacity-80"
            aria-expanded={tokenExpanded}
          >
            <ToggleArrow isExpanded={tokenExpanded} />
            <h2 className="text-[13.5px] font-semibold text-[#b2b2b1]">
              Add New Design
            </h2>
          </button>

          {tokenExpanded && (
            <div className="space-y-4">
              {/* Form fields for Figma design input */}
              <FormField
                label="Personal Access Token"
                value={tokenValue}
                onChange={setTokenValue}
                placeholder={PLACEHOLDERS.token}
              />

              <FormField
                label="Design URL"
                value={urlValue}
                onChange={setUrlValue}
                placeholder={PLACEHOLDERS.url}
                isUrlField
              />

              {/* Action buttons for form submission */}
              <div className="flex gap-6 pt-4">
                <ActionButton>Awesome</ActionButton>
                <ActionButton>Prepare</ActionButton>
              </div>
            </div>
          )}
        </div>

        {/* Recent Breakdowns Section */}
        <div className="space-y-2 border-t border-[#272822] pt-8">
          <h3 className="text-[13.5px] font-semibold text-[#b0b0b0]">
            Recent Breakdowns
          </h3>
        </div>

        {/* Footer Section */}
        <div className="border-gray-300 border-t pt-3 text-center text-[11.5px] font-semibold text-[#737470]">
          © AutonomyAI
        </div>
      </div>
    </div>
  );
};
