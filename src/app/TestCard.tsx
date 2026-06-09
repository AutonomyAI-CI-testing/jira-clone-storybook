import React from 'react';

// --- Shared Icon Components ---

const SettingsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    {...props}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .3 1.4L21 18l-2 2-1.4-.3a1.65 1.65 0 0 0-1.4-.3H9.72a1.65 1.65 0 0 0-1.4.3L6 20l-2-2 1.4-.3a1.65 1.65 0 0 0 .3-1.4V9.72a1.65 1.65 0 0 0-.3-1.4L4 6l2-2 1.4.3a1.65 1.65 0 0 0 1.4.3h4.56a1.65 1.65 0 0 0 1.4-.3L18 4l2 2-1.4.3a1.65 1.65 0 0 0-.3 1.4z" />
  </svg>
);

const ChevronUpIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
    {...props}
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

// --- Sub-components ---

interface InputGroupProps {
  id: string;
  label: string;
  value: string;
}

const InputGroup: React.FC<InputGroupProps> = ({ id, label, value }) => (
  <div className="mb-6">
    <div className="mb-2 flex items-center">
      <label htmlFor={id} className="block text-sm font-medium text-white">
        {label}
      </label>
      <InfoIcon className="ml-2" />
    </div>
    <div
      id={id}
      className="flex h-9 w-full items-center rounded border border-[#444444] bg-[#2b2b2b] p-2 text-sm text-[#a0a0a0]"
    >
      {value}
    </div>
  </div>
);

// --- Main component ---

/**
 * TestCard provides a management interface for the UI magician Agent,
 * allowing users to view settings, add new designs, and see recent breakdowns.
 */
const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="max-w-[254px] bg-[#1a1a1a] p-4 text-[#a0a0a0]">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">UI magician Agent</h2>
        <SettingsIcon />
      </div>

      {/* Quick Summary / Status */}
      <div className="mb-6 flex items-center">
        <ChevronUpIcon className="mr-2" />
        <p className="text-sm">From entire frame to a singl...</p>
      </div>

      {/* Form Section: Add New Design */}
      <div className="mb-4 mt-6">
        <div className="mb-2 flex items-center">
          <ChevronUpIcon className="mr-2" />
          <h3 className="text-base font-semibold text-white">Add New Design</h3>
        </div>

        <InputGroup
          id="pat"
          label="Personal Access Token"
          value="figd_xxxxxxxxxxxxxxxxxxxx"
        />

        <InputGroup
          id="design-url"
          label="Design URL"
          value="https://www.figma.com/file/"
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-8 mt-6 flex justify-between gap-2">
        <button className="w-full rounded bg-[#d1703c] px-4 py-2 text-sm font-medium text-white">
          Awesome
        </button>
        <button className="w-full rounded bg-[#d1703c] px-4 py-2 text-sm font-medium text-white">
          Prepare
        </button>
      </div>

      <h3 className="mb-4 text-base font-semibold text-white">Recent Breakdowns</h3>
    </div>
  );
};

export default TestCard;
