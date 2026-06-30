
import React from "react";

/**
 * Shared input field for the TestCard form.
 */
const FormField = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div className="mb-4 last:mb-6">
    <label
      htmlFor={id}
      className="mb-2 flex items-center gap-1 text-sm font-semibold"
    >
      {label}
      <InfoIcon />
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="w-full rounded border border-[#555] bg-[#2e2e2e] px-3 py-2 text-sm placeholder-[#999] focus:border-[#c1783d] focus:outline-none"
    />
  </div>
);

/**
 * Shared action button for the TestCard.
 */
const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button className="flex-1 rounded-lg bg-[#b45309] px-5 py-2 font-semibold text-white hover:bg-[#92400e]">
    {children}
  </button>
);

/**
 * Chevron icon used in section headers.
 */
const ChevronUpIcon = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 15l7-7 7 7"
    />
  </svg>
);

/**
 * Info icon used in labels.
 */
const InfoIcon = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

/**
 * TestCard component displays a configuration form for the UI magician Agent.
 * Used for managing design tokens and URLs.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-80 rounded-xl bg-[#2a2a2a] p-5 text-white shadow-lg">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-lg font-bold">UI magician Agent</h1>
        <svg
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      {/* Subtitle */}
      <div className="mb-4 flex items-center gap-1 text-sm text-[#c1783d]">
        <ChevronUpIcon />
        <span>From entire frame to a singl...</span>
      </div>

      <div className="my-4 h-px bg-[#444]" />

      {/* Section Header */}
      <div className="mb-4 flex items-center gap-1 text-lg font-bold">
        <ChevronUpIcon />
        <span>Add New Design</span>
      </div>

      {/* Form Fields */}
      <FormField
        id="personalAccessToken"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxx"
      />
      <FormField
        id="designUrl"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      {/* Action Buttons */}
      <div className="mb-6 mt-4 flex gap-3">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Footer */}
      <h2 className="text-lg font-bold">Recent Breakdowns</h2>
    </div>
  );
};

