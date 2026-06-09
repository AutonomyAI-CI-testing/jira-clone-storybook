
import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * IconWrapper provides consistent sizing and alignment for secondary icons.
 */
const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center justify-center text-current opacity-70">
    {children}
  </div>
);

/**
 * FieldGroup encapsulates the label, info icon, and input for consistent spacing.
 */
const FieldGroup: React.FC<{
  label: string;
  id: string;
  placeholder: string;
}> = ({ label, id, placeholder }) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <IconWrapper>
        <FiInfo size={16} />
      </IconWrapper>
    </div>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="rounded-md border border-[#929291] bg-[#272822] px-4 py-3 text-sm text-[#737470] focus:border-[#b5b5b5] focus:outline-none"
    />
  </div>
);

/**
 * ActionButton provides consistent styling for primary actions.
 * Using hardcoded colors as per the design requirement.
 */
const ActionButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="flex-1 rounded bg-[#843a17] px-6 py-3 text-sm font-semibold text-[#8c8078] transition-colors hover:bg-[#a0461c]"
  >
    {children}
  </button>
);

const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="dark flex min-h-[508px] w-[254px] flex-col gap-4 bg-[#171913] p-5 text-[#b5b5b5]"
    >
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">UI magician Agent</h2>
        <IconWrapper>
          <FiSettings size={20} />
        </IconWrapper>
      </div>

      {/* Collapsed Summary Row - providing context for previous actions */}
      <div className="flex items-center gap-2 text-sm">
        <FiChevronUp size={16} />
        <p className="truncate">From entire frame to a singl...</p>
      </div>

      {/* Main Design Section Header */}
      <div className="mt-4 flex items-center gap-2 text-sm">
        <FiChevronUp size={16} />
        <p className="font-semibold text-white/90">Add New Design</p>
      </div>

      {/* Input Fields */}
      <div className="mt-4 flex flex-col gap-4">
        <FieldGroup
          id="pat"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <FieldGroup
          id="design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      {/* Action Buttons Row */}
      <div className="mt-4 flex gap-2">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Footer Label for listing history or subsequent steps */}
      <h3 className="mt-4 text-base font-semibold">Recent Breakdowns</h3>
    </div>
  );
};

export default TestCard;
