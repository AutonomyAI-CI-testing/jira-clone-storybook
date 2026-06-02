import { useState } from "react";
import cx from "classix";

// SVG icon components for consistent reuse
const SettingsIcon = () => (
  <svg
    className="h-5 w-5 text-font-subtle"
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

const ChevronDownIcon = ({ isRotated }: { isRotated: boolean }) => (
  <svg
    className={cx(
      "h-5 w-5 text-font-subtle transition-transform",
      isRotated ? "rotate-180" : ""
    )}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 14l-7-7m0 0L5 14m7-7v12"
    />
  </svg>
);

const PlusIcon = () => (
  <svg
    className="h-5 w-5 text-font-subtle"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v16m8-8H4"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    className="h-5 w-5 text-font-subtle"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    className="h-4 w-4 text-font-subtlest"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </svg>
);

// Input field component for consistent styling
const InputField = ({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: "password" | "text";
  placeholder: string;
}) => (
  <div>
    <label className="mb-2 flex items-center gap-2 font-primary text-sm text-font">
      {label}
      <InfoIcon />
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-md border border-border-input bg-background-input px-3 py-2 text-sm text-font placeholder-font-subtlest hover:bg-background-input-hovered focus-visible:bg-background-input-pressed focus-visible:outline-2 focus-visible:outline-border-brand"
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSection = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div id="testElem" className="min-h-screen bg-elevation-surface-sunken p-8">
      <div className="mx-auto w-full max-w-2xl space-y-6 rounded-lg bg-elevation-surface-raised p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="font-primary-bold text-2xl text-font">
            UI magician Agent
          </h1>
          <button
            className="flex h-8 w-8 items-center justify-center rounded hover:bg-background-neutral-hovered active:bg-background-neutral-pressed"
            aria-label="Settings"
          >
            <SettingsIcon />
          </button>
        </div>

        {/* Collapsible Section */}
        <button
          onClick={toggleSection}
          className="flex w-full items-center justify-between rounded bg-background-neutral px-4 py-3 text-left hover:bg-background-neutral-hovered active:bg-background-neutral-pressed"
        >
          <span className="font-primary text-font-subtle">
            From entire frame to a singl...
          </span>
          <ChevronDownIcon isRotated={isExpanded} />
        </button>

        {/* Add New Design Section */}
        <button className="flex w-full items-center justify-between rounded bg-background-neutral px-4 py-3 hover:bg-background-neutral-hovered active:bg-background-neutral-pressed">
          <span className="flex items-center gap-3 font-primary text-font-subtle">
            <PlusIcon />
            Add New Design
          </span>
          <ChevronRightIcon />
        </button>

        {/* Form Fields Section */}
        <div className="space-y-4">
          <InputField
            label="Personal Access Token"
            type="password"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
          />
          <InputField
            label="Design URL"
            type="text"
            placeholder="https://www.figma.com/file/:"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          {["Awesome", "Prepare"].map((label) => (
            <button
              key={label}
              className="flex-1 rounded-md bg-background-neutral-bold px-4 py-2 font-primary text-font-inverse hover:bg-background-neutral-bold-hovered active:bg-background-neutral-bold-pressed"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Recent Breakdowns Section */}
        <div className="border-t border-border pt-4">
          <h2 className="font-primary text-sm text-font-subtle">
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
};
