import { useState } from "react";
import cx from "classix";

interface CollapsibleButtonProps {
  isExpanded: boolean;
  onToggle: () => void;
  label: string;
  textSize?: "text-xs" | "text-base";
  textColor?: "text-gray-500" | "text-gray-400";
}

const CollapsibleButton = ({
  isExpanded,
  onToggle,
  label,
  textSize = "text-xs",
  textColor = "text-gray-500",
}: CollapsibleButtonProps): JSX.Element => (
  <button
    onClick={onToggle}
    className={cx(
      "flex items-center gap-2 font-semibold",
      textSize,
      textColor,
      textColor === "text-gray-500"
        ? "hover:text-gray-400"
        : "hover:text-gray-300"
    )}
  >
    <span
      className={cx(
        "inline-block transition-transform",
        isExpanded ? "rotate-180" : ""
      )}
    >
      ▲
    </span>
    <span>{label}</span>
  </button>
);

interface InputFieldProps {
  id: string;
  label: string;
  helpAriaLabel: string;
  inputType: "password" | "text";
  placeholder: string;
}

const InputField = ({
  id,
  label,
  helpAriaLabel,
  inputType,
  placeholder,
}: InputFieldProps): JSX.Element => (
  <div>
    <label
      htmlFor={id}
      className="mb-2 flex items-center gap-2 text-xs font-semibold text-gray-400"
    >
      <span>{label}</span>
      <button
        type="button"
        className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-600 text-gray-500 hover:text-gray-300"
        aria-label={helpAriaLabel}
      >
        <span className="text-[10px]">i</span>
      </button>
    </label>
    <input
      id={id}
      type={inputType}
      placeholder={placeholder}
      className="w-full border border-gray-600 bg-black px-3 py-2 text-xs text-gray-600 placeholder-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-500"
    />
  </div>
);

const SETTINGS_ICON = (
  <svg
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

export const TestCard = (): JSX.Element => {
  const [designExpanded, setDesignExpanded] = useState(true);
  const [frameExpanded, setFrameExpanded] = useState(false);

  return (
    <div className="font-sans w-full max-w-sm bg-black px-5 py-8 text-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-base font-semibold text-gray-300">
          UI magician Agent
        </h1>
        <button
          className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-300"
          aria-label="Settings"
        >
          {SETTINGS_ICON}
        </button>
      </div>

      {/* Collapsible Section - From entire frame to a singl... */}
      <div className="mb-12">
        <CollapsibleButton
          isExpanded={frameExpanded}
          onToggle={() => setFrameExpanded(!frameExpanded)}
          label="From entire frame to a singl..."
          textSize="text-xs"
          textColor="text-gray-500"
        />
      </div>

      {/* Add New Design Section */}
      <div className="mb-8">
        <div className="mb-6">
          <CollapsibleButton
            isExpanded={designExpanded}
            onToggle={() => setDesignExpanded(!designExpanded)}
            label="Add New Design"
            textSize="text-base"
            textColor="text-gray-400"
          />
        </div>

        {designExpanded && (
          <div className="space-y-6">
            <InputField
              id="token"
              label="Personal Access Token"
              helpAriaLabel="Token help"
              inputType="password"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
            />
            <InputField
              id="url"
              label="Design URL"
              helpAriaLabel="URL help"
              inputType="text"
              placeholder="https://www.figma.com/file/:"
            />

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <button className="flex-1 rounded bg-orange-700 px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-orange-600 active:bg-orange-800">
                Awesome
              </button>
              <button className="flex-1 rounded bg-orange-700 px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-orange-600 active:bg-orange-800">
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns Footer */}
      <div className="border-t border-gray-800 pt-6">
        <h2 className="text-base font-semibold text-gray-300">
          Recent Breakdowns
        </h2>
      </div>

      {/* Copyright Footer */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-xs text-gray-500">© AutonomyAI</p>
      </div>
    </div>
  );
};
